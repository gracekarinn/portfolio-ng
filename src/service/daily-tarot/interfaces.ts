import type { TarotCardReading } from "@/modules/homepage-module/interfaces";

export interface DailyTarotApiResponse {
  card?: TarotCardReading;
  message?: string;
}

export interface TarotApiCardPayload {
  name: string;
  name_short: string;
  suit: string;
  type: string;
  meaning_up: string;
}

export interface TarotApiResponsePayload {
  cards?: unknown;
}
