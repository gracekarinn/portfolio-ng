export interface ContactApiResponse {
  message: string;
}

export interface ResendEmailPayload {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
}
