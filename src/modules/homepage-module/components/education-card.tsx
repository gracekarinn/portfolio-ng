import type { EducationEntry } from "../interfaces";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <li className="min-w-0">
      <article className="flex h-full min-h-32 items-start gap-3 border border-border bg-card/60 p-3 transition-colors hover:border-accent sm:gap-4 sm:p-4">
        <div className="min-w-0 py-0.5">
          <h3 className="font-display font-bold text-base leading-snug text-foreground sm:text-lg">
            {entry.institution}
          </h3>
          <p className="mt-1 break-words text-xs leading-5 text-muted-foreground sm:text-sm">
            {entry.program}
          </p>
          <time className="mt-2 block font-mono text-xs text-accent">
            {entry.period}
          </time>
        </div>
      </article>
    </li>
  );
}
