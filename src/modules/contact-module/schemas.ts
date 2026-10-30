import * as z from "zod";
import {
  CONTACT_MAX_LENGTHS,
  CONTACT_VALIDATION_MESSAGES,
} from "./constants";

const requiredText = z
  .string()
  .trim()
  .min(1, { error: CONTACT_VALIDATION_MESSAGES.required });

export const contactFieldSchemas = {
  name: requiredText
    .max(CONTACT_MAX_LENGTHS.name, {
      error: CONTACT_VALIDATION_MESSAGES.nameTooLong,
    })
    .regex(/^[\p{L} '-]+$/u, {
      error: CONTACT_VALIDATION_MESSAGES.invalidName,
    }),
  email: requiredText
    .max(CONTACT_MAX_LENGTHS.email, {
      error: CONTACT_VALIDATION_MESSAGES.emailTooLong,
    })
    .pipe(z.email({ error: CONTACT_VALIDATION_MESSAGES.invalidEmail })),
  subject: requiredText
    .max(CONTACT_MAX_LENGTHS.subject, {
      error: CONTACT_VALIDATION_MESSAGES.subjectTooLong,
    })
    .regex(/^[^\r\n]*$/, {
      error: CONTACT_VALIDATION_MESSAGES.invalidSubject,
    }),
  message: requiredText.max(CONTACT_MAX_LENGTHS.message, {
    error: CONTACT_VALIDATION_MESSAGES.messageTooLong,
  }),
};

export const contactFormSchema = z.object(contactFieldSchemas).strict();

export type ContactAnswers = z.infer<typeof contactFormSchema>;
