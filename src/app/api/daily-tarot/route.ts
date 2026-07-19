import { NextResponse } from "next/server";

const TAROT_API_URL = "https://tarotapi.dev/api/v1/cards/random?n=1";

interface TarotApiCard {
  name?: unknown;
  name_short?: unknown;
  suit?: unknown;
  type?: unknown;
  meaning_up?: unknown;
}

interface TarotApiResponse {
  cards?: unknown;
}

function parseCard(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const { cards } = payload as TarotApiResponse;

  if (!Array.isArray(cards) || cards.length === 0 || !cards[0] || typeof cards[0] !== "object") {
    return null;
  }

  const card = cards[0] as TarotApiCard;

  if (
    typeof card.name !== "string" ||
    typeof card.name_short !== "string" ||
    typeof card.suit !== "string" ||
    typeof card.type !== "string" ||
    typeof card.meaning_up !== "string"
  ) {
    return null;
  }

  return {
    name: card.name,
    nameShort: card.name_short,
    suit: card.suit,
    type: card.type,
    meaningUpright: card.meaning_up,
  };
}

export async function GET() {
  try {
    const response = await fetch(TAROT_API_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Tarot API responded with ${response.status}`);
    }

    const card = parseCard(await response.json());

    if (!card) {
      throw new Error("Tarot API returned an invalid card");
    }

    return NextResponse.json(
      { card },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { message: "Today's card is resting. Please try again later." },
      { status: 502 },
    );
  }
}
