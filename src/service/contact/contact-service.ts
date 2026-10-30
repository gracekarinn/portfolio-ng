import { jsonApiResponse } from "@/lib/api/json-response";
import { createRateLimiter } from "@/lib/api/rate-limit";
import { contactFormSchema } from "@/modules/contact-module/schemas";
import { CONTACT_API_ENDPOINTS, CONTACT_API_LIMITS } from "./config";
import { CONTACT_API_MESSAGES } from "./constants";
import type {
  ContactApiResponse,
  ResendEmailPayload,
} from "./interfaces";

const checkContactRateLimit = createRateLimiter({
  maxEntries: CONTACT_API_LIMITS.maxRateLimitEntries,
  maxRequests: CONTACT_API_LIMITS.rateLimitMaxRequests,
  windowMs: CONTACT_API_LIMITS.rateLimitWindowMs,
  clientAddressMaxLength: CONTACT_API_LIMITS.clientAddressMaxLength,
});

function jsonResponse(message: string, init?: ResponseInit) {
  return jsonApiResponse<ContactApiResponse>({ message }, init);
}

function getFormValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

export async function postContactMessage(request: Request) {
  const rateLimit = checkContactRateLimit(request);

  if (!rateLimit.allowed) {
    return jsonResponse(CONTACT_API_MESSAGES.rateLimited, {
      status: 429,
      headers: {
        "Retry-After": String(rateLimit.retryAfterSeconds),
        "Cache-Control": "no-store",
      },
    });
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const parsedLength = Number(contentLength);
    if (!Number.isSafeInteger(parsedLength) || parsedLength < 0) {
      return jsonResponse(CONTACT_API_MESSAGES.invalidRequest, { status: 400 });
    }
    if (parsedLength > CONTACT_API_LIMITS.maxRequestBodyBytes) {
      return jsonResponse(CONTACT_API_MESSAGES.requestTooLarge, { status: 413 });
    }
  }

  const contentType = request.headers
    .get("content-type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();
  if (
    contentType !== "multipart/form-data" &&
    contentType !== "application/x-www-form-urlencoded"
  ) {
    return jsonResponse(CONTACT_API_MESSAGES.unsupportedRequestFormat, {
      status: 415,
    });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(CONTACT_API_MESSAGES.invalidFormSubmission, {
      status: 400,
    });
  }

  const rawAnswers = {
    name: getFormValue(formData, "name"),
    email: getFormValue(formData, "email"),
    subject: getFormValue(formData, "subject"),
    message: getFormValue(formData, "message"),
  };
  const website = getFormValue(formData, "website");

  if (website) {
    return jsonResponse(CONTACT_API_MESSAGES.sentSuccessfully);
  }

  const validation = contactFormSchema.safeParse(rawAnswers);
  if (!validation.success) {
    return jsonResponse(
      validation.error.issues[0]?.message ??
        CONTACT_API_MESSAGES.invalidFormSubmission,
      { status: 400 },
    );
  }

  const { name, email, subject, message } = validation.data;
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact email environment variables are not configured.");
    return jsonResponse(CONTACT_API_MESSAGES.emailNotConfigured, {
      status: 503,
    });
  }

  const emailPayload: ResendEmailPayload = {
    from: sender,
    to: [recipient],
    reply_to: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  const resendResponse = await fetch(CONTACT_API_ENDPOINTS.resendEmail, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!resendResponse.ok) {
    console.error("Resend request failed with status:", resendResponse.status);
    return jsonResponse(CONTACT_API_MESSAGES.unableToSend, { status: 502 });
  }

  return jsonResponse(CONTACT_API_MESSAGES.sentSuccessfully);
}
