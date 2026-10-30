import { postContactMessage } from "@/service/contact/contact-service";

export async function POST(request: Request) {
  return postContactMessage(request);
}
