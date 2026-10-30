export const DAILY_TAROT_API_URL = "https://tarotapi.dev/api/v1/cards/random?n=1";
export const DAILY_TAROT_FETCH_ATTEMPTS = 3;
export const DAILY_TAROT_RETRY_DELAY_MS = 200;
export const DAILY_TAROT_RATE_LIMITS = {
  maxEntries: 5_000,
  maxRequests: 5,
  windowMs: 60_000,
  clientAddressMaxLength: 128,
} as const;
export const DAILY_TAROT_RATE_LIMIT_MESSAGE =
  "Too many card draws. Please wait before trying again.";
export const DAILY_TAROT_ERROR_MESSAGE =
  "Today's card is resting. Please try again later.";
