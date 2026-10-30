export type ContactFormStatus = "collecting" | "sending" | "success" | "error";

export type ContactFieldName = "name" | "email" | "subject" | "message";

export interface ContactTranscriptLine {
  kind: "command" | "prompt" | "reply" | "status" | "error" | "success";
  text: string;
}

