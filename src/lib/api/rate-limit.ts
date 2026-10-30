export interface RateLimitOptions {
  maxEntries: number;
  maxRequests: number;
  windowMs: number;
  clientAddressMaxLength: number;
}

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSeconds: number;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

function getClientAddress(request: Request, maxLength: number) {
  const directAddress = request.headers.get("x-real-ip")?.trim();
  const forwardedAddress = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  return (directAddress || forwardedAddress || "unknown").slice(0, maxLength);
}

export function createRateLimiter(options: RateLimitOptions) {
  const entries = new Map<string, RateLimitEntry>();

  return function checkRateLimit(
    request: Request,
    now = Date.now(),
  ): RateLimitDecision {
    const clientAddress = getClientAddress(
      request,
      options.clientAddressMaxLength,
    );
    const entry = entries.get(clientAddress);

    if (!entry || entry.resetAt <= now) {
      if (entries.size >= options.maxEntries) {
        for (const [address, currentEntry] of entries) {
          if (currentEntry.resetAt <= now) entries.delete(address);
        }

        if (entries.size >= options.maxEntries) {
          return {
            allowed: false,
            retryAfterSeconds: Math.ceil(options.windowMs / 1_000),
          };
        }
      }

      entries.set(clientAddress, {
        count: 1,
        resetAt: now + options.windowMs,
      });

      return { allowed: true, retryAfterSeconds: 0 };
    }

    if (entry.count >= options.maxRequests) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(
          1,
          Math.ceil((entry.resetAt - now) / 1_000),
        ),
      };
    }

    entry.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  };
}
