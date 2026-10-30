import { getDailyTarotResponse } from "@/service/daily-tarot/daily-tarot-service";

export async function GET(request: Request) {
  return getDailyTarotResponse(request);
}
