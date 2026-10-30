import { jsonApiResponse } from "@/lib/api/json-response";
import { createRateLimiter } from "@/lib/api/rate-limit";
import type { TarotCardReading } from "@/modules/homepage-module/interfaces";
import {
  DAILY_TAROT_API_URL,
  DAILY_TAROT_ERROR_MESSAGE,
  DAILY_TAROT_FETCH_ATTEMPTS,
  DAILY_TAROT_RATE_LIMIT_MESSAGE,
  DAILY_TAROT_RATE_LIMITS,
  DAILY_TAROT_RETRY_DELAY_MS,
} from "./constants";
import type {
  DailyTarotApiResponse,
  TarotApiCardPayload,
  TarotApiResponsePayload,
} from "./interfaces";

const checkDailyTarotRateLimit = createRateLimiter(DAILY_TAROT_RATE_LIMITS);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isTarotApiResponsePayload(
  value: unknown,
): value is TarotApiResponsePayload {
  return isRecord(value) && "cards" in value;
}

function isTarotApiCardPayload(value: unknown): value is TarotApiCardPayload {
  return (
    isRecord(value) &&
    typeof value.name === "string" &&
    typeof value.name_short === "string" &&
    typeof value.suit === "string" &&
    typeof value.type === "string" &&
    typeof value.meaning_up === "string"
  );
}

function parseTarotCard(payload: unknown): TarotCardReading | null {
  if (
    !isTarotApiResponsePayload(payload) ||
    !Array.isArray(payload.cards) ||
    payload.cards.length === 0
  ) {
    return null;
  }

  const [card] = payload.cards;
  if (!isTarotApiCardPayload(card)) return null;

  return {
    name: card.name,
    nameShort: card.name_short,
    suit: card.suit,
    type: card.type,
    meaningUpright: card.meaning_up,
  };
}

function waitBeforeRetry(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

async function fetchDailyTarotCard(): Promise<TarotCardReading> {
  let lastError: Error = new Error(DAILY_TAROT_ERROR_MESSAGE);

  for (let attempt = 0; attempt < DAILY_TAROT_FETCH_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(DAILY_TAROT_API_URL, { cache: "no-store" });

      if (!response.ok) {
        lastError = new Error("Tarot API responded with " + response.status);
        if (response.status < 500 && response.status !== 429) break;
      } else {
        const card = parseTarotCard(await response.json());
        if (card) return card;
        lastError = new Error("Tarot API returned an invalid card");
      }
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error(DAILY_TAROT_ERROR_MESSAGE);
    }

    if (attempt < DAILY_TAROT_FETCH_ATTEMPTS - 1) {
      await waitBeforeRetry(DAILY_TAROT_RETRY_DELAY_MS * (attempt + 1));
    }
  }

  throw lastError;
}

export async function getDailyTarotResponse(request: Request) {
  const rateLimit = checkDailyTarotRateLimit(request);

  if (!rateLimit.allowed) {
    return jsonApiResponse<DailyTarotApiResponse>(
      { message: DAILY_TAROT_RATE_LIMIT_MESSAGE },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
          "Cache-Control": "no-store",
        },
      },
    );
  }

  try {
    const card = await fetchDailyTarotCard();

    return jsonApiResponse<DailyTarotApiResponse>(
      { card },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return jsonApiResponse<DailyTarotApiResponse>(
      { message: DAILY_TAROT_ERROR_MESSAGE },
      { status: 502 },
    );
  }
}
