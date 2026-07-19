import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2_000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getFormValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientAddress = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const entry = rateLimitStore.get(clientAddress);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(clientAddress, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  if (entry.count >= 5) return true;

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json({ message: "Please wait a minute before sending another message." }, { status: 429 });
  }

  const formData = await request.formData();
  const name = getFormValue(formData, "name");
  const email = getFormValue(formData, "email");
  const subject = getFormValue(formData, "subject");
  const message = getFormValue(formData, "message");
  const website = getFormValue(formData, "website");

  if (website) return NextResponse.json({ message: "Message received." });

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Please complete every field." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ message: `Message must be ${MAX_MESSAGE_LENGTH.toLocaleString()} characters or fewer.` }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact email environment variables are not configured.");
    return NextResponse.json({ message: "Email is not configured yet. Please try again later." }, { status: 503 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend request failed:", await resendResponse.text());
    return NextResponse.json({ message: "Unable to send your message right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Message sent successfully. Thanks for reaching out!" });
}
