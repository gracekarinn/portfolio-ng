"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { AchievementMedia } from "../interfaces";

interface AchievementMediaSlideshowProps {
  awardTitle: string;
  media: AchievementMedia[];
  eager?: boolean;
}

export function AchievementMediaSlideshow({
  awardTitle,
  media,
  eager = false,
}: AchievementMediaSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = media[activeIndex];
  const hasMultipleImages = media.length > 1;

  function showImage(index: number) {
    setActiveIndex((index + media.length) % media.length);
  }

  return (
    <div
      className="mt-4"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${awardTitle} photos`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/70">
        <a
          className="absolute inset-0 block"
          href={activeMedia.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full-size image: ${activeMedia.alt}`}
        >
          <Image
            key={activeMedia.src}
            src={activeMedia.src}
            alt={activeMedia.alt}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-2"
          />
        </a>
        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Show previous photo"
              onClick={() => showImage(activeIndex - 1)}
            >
              <ChevronLeft size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Show next photo"
              onClick={() => showImage(activeIndex + 1)}
            >
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      <div
        className={`mt-2 flex min-h-8 items-center gap-3 ${
          hasMultipleImages ? "justify-between" : "justify-end"
        }`}
      >
        {hasMultipleImages && (
          <div className="flex items-center gap-2" role="group" aria-label="Choose a photo">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={`shrink-0 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  index === activeIndex
                    ? "h-2.5 w-5 border-accent bg-accent"
                    : "size-2.5 border-muted-foreground bg-transparent"
                }`}
                aria-label={`Show photo ${index + 1} of ${media.length}`}
                aria-pressed={index === activeIndex}
                onClick={() => showImage(index)}
              />
            ))}
          </div>
        )}
        <span className="font-mono text-xs text-muted-foreground" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
