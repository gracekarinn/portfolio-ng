import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { AchievementMediaSlideshow } from "../components/achievement-media-slideshow";
import { achievementEntries } from "../constants";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="border-b border-border px-5 pb-16 pt-8 sm:px-7 sm:pt-10 lg:px-18"
      aria-labelledby="achievements-title"
    >
      <div className="flex items-center justify-between border-y border-border py-3 font-mono text-xs text-muted-foreground">
        <span>
          <span className="text-accent">grace@portfolio:~$</span> find ./achievements
        </span>
        <Sparkles size={16} aria-hidden="true" />
      </div>

      <div className="mt-10 max-w-3xl">
        <h1
          id="achievements-title"
          className="mt-3 font-sans font-bold text-5xl leading-[0.95] tracking-[-0.045em] text-foreground sm:text-6xl"
        >
          Honors &amp; Awards
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievementEntries.map((achievement, index) => (
          <article
            key={achievement.id}
            className="flex h-full min-w-0 flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-tarot"
          >
            {achievement.media && achievement.media.length > 0 && (
              <AchievementMediaSlideshow
                awardTitle={achievement.title}
                media={achievement.media}
                eager={index < 3}
              />
            )}

            <div className="mt-4 flex items-center justify-between text-tarot">
              <span className="rounded bg-tarot/15 px-2 py-1 font-mono text-xs text-tarot">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Award size={19} strokeWidth={1.25} aria-hidden="true" />
            </div>

            <h3 className="mt-3 min-h-20 font-display font-bold text-xl leading-tight text-foreground sm:text-2xl">
              {achievement.title}
            </h3>
            <p className="mt-2 font-mono text-xs leading-5 text-muted-foreground">
              {achievement.organization}
            </p>
            <p className="mt-1 font-mono text-xs text-accent">
              <time>{achievement.date}</time>
            </p>
            {achievement.description && (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {achievement.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
