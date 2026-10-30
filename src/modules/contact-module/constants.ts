import type {
  ContactFieldName,
  ContactTranscriptLine,
} from "./interfaces";
import type { ContactAnswers } from "./schemas";

export const CONTACT_PROMPTS: Record<ContactFieldName, string> = {
  name: "What should I call you?",
  email: "What is the best email to reply to?",
  subject: "What would you like to talk about?",
  message: "Write your transmission.",
};

export const CONTACT_FIELD_ORDER: ContactFieldName[] = [
  "name",
  "email",
  "subject",
  "message",
];

export const CONTACT_MAX_LENGTHS: Record<ContactFieldName, number> = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2_000,
};

export const CONTACT_VALIDATION_MESSAGES = {
  required: "That response is required.",
  nameTooLong: "Name must be 80 characters or fewer.",
  invalidName: "Name can only use letters, spaces, apostrophes, and hyphens.",
  emailTooLong: "Email must be 254 characters or fewer.",
  invalidEmail: "That email format does not look right.",
  subjectTooLong: "Subject must be 120 characters or fewer.",
  invalidSubject: "Subject cannot contain line breaks.",
  messageTooLong: "Message must be 2,000 characters or fewer.",
} as const;

export const INITIAL_CONTACT_ANSWERS: ContactAnswers = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const INITIAL_CONTACT_TRANSCRIPT: ContactTranscriptLine[] = [
  { kind: "command", text: "grace@portfolio:~$ start-contact --interactive" },
  { kind: "status", text: "> secure channel open" },
  { kind: "prompt", text: `> ${CONTACT_PROMPTS.name}` },
];
