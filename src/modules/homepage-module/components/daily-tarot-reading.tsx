"use client";

import { useState } from "react";
import Image from "next/image";
import type { DailyTarotApiResponse } from "@/service/daily-tarot/interfaces";
import tarotImageCards from "../data/rider-waite-images.json";
import type {
  TarotCardReading,
} from "../interfaces";

function getShortMeaning(meaning: string) {
  const [firstThought] = meaning.split(/[.;]/);

  return firstThought.trim();
}

export function DailyTarotReading() {
  const [reading, setReading] = useState<TarotCardReading | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function generateReading() {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/daily-tarot");

      if (!response.ok) {
        const errorPayload = (await response.json()) as DailyTarotApiResponse;
        throw new Error(
          errorPayload.message ?? "Unable to load daily tarot reading",
        );
      }

      const payload = (await response.json()) as DailyTarotApiResponse;

      if (!payload.card) {
        throw new Error("Daily tarot reading is missing a card");
      }

      setReading(payload.card);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Today's card is resting. Please try again soon.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  const cardImage = reading
    ? tarotImageCards.cards.find((card) => card.name === reading.name)?.img
    : undefined;

  return (
    <aside className="daily-tarot-reading" aria-live="polite" aria-label="Daily tarot reading">
      <p className="daily-tarot-command">
        <span>grace@portfolio:~$</span> tarot --draw
      </p>
      <button className="daily-tarot-generate focus-ring" type="button" onClick={generateReading} disabled={isLoading}>
        <span aria-hidden="true">$</span> {isLoading ? "drawing..." : reading ? "draw another card" : "draw a card"}
      </button>
      {isLoading ? <p className="daily-tarot-status">&gt; drawing today&apos;s card...</p> : null}
      {errorMessage ? (
        <p className="daily-tarot-status">&gt; {errorMessage}</p>
      ) : null}
      {reading ? (
        <div className="daily-tarot-result">
          {cardImage ? (
            <Image
              src={`/assets/tarot/${cardImage}`}
              alt={`${reading.name} Rider–Waite tarot card`}
              className="daily-tarot-card-image"
              width={350}
              height={600}
            />
          ) : null}
          <div className="daily-tarot-output">
            <p>
              <span>&gt; card:</span> {reading.name} <em>· {reading.type}</em>
            </p>
            <p>
              <span>&gt; upright:</span> {getShortMeaning(reading.meaningUpright)}
            </p>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
