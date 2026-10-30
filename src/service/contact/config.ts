import * as z from "zod";

const contactApiEnvironmentSchema = z.object({
  CONTACT_API_MAX_REQUEST_BODY_BYTES: z.coerce
    .number()
    .int()
    .positive(),
  CONTACT_API_MAX_RATE_LIMIT_ENTRIES: z.coerce
    .number()
    .int()
    .positive(),
  CONTACT_API_RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .int()
    .positive(),
  CONTACT_API_RATE_LIMIT_MAX_REQUESTS: z.coerce
    .number()
    .int()
    .positive(),
  CONTACT_API_CLIENT_ADDRESS_MAX_LENGTH: z.coerce
    .number()
    .int()
    .positive(),
  CONTACT_API_RESEND_EMAIL_URL: z
    .url()
    .refine((value) => value.startsWith("https://"), {
      error: "Resend endpoint must use HTTPS.",
    }),
});

const environment = contactApiEnvironmentSchema.safeParse(process.env);

if (!environment.success) {
  const invalidVariables = environment.error.issues
    .map((issue) => issue.path.join("."))
    .join(", ");

  throw new Error(`Invalid contact API environment values: ${invalidVariables}`);
}

export const CONTACT_API_LIMITS = {
  maxRequestBodyBytes: environment.data.CONTACT_API_MAX_REQUEST_BODY_BYTES,
  maxRateLimitEntries: environment.data.CONTACT_API_MAX_RATE_LIMIT_ENTRIES,
  rateLimitWindowMs: environment.data.CONTACT_API_RATE_LIMIT_WINDOW_MS,
  rateLimitMaxRequests: environment.data.CONTACT_API_RATE_LIMIT_MAX_REQUESTS,
  clientAddressMaxLength:
    environment.data.CONTACT_API_CLIENT_ADDRESS_MAX_LENGTH,
} as const;

export const CONTACT_API_ENDPOINTS = {
  resendEmail: environment.data.CONTACT_API_RESEND_EMAIL_URL,
} as const;
