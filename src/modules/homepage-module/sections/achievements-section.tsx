import { Award, Sparkles } from "lucide-react";
import { achievementEntries } from "../constants";

export function AchievementsSection() {
  return (
    <section id="achievements" className="portfolio-section achievements-section" aria-labelledby="achievements-title">
      <div className="section-command"><span><span className="text-accent">grace@portfolio:~$</span> find ./achievements</span><Sparkles size={16} aria-hidden="true" /></div>
      <div className="section-heading">
        <p className="section-eyebrow">Small wins, meaningful milestones</p>
        <h2 id="achievements-title" className="font-display">Achievements</h2>
        <p>A compact space for recognitions, programs, and work that marks your path forward.</p>
      </div>
      <div className="achievement-grid">
        {achievementEntries.map((achievement) => (
          <article key={achievement.number} className="achievement-card">
            <div className="achievement-card-top"><span>{achievement.number}</span><Award size={19} strokeWidth={1.25} aria-hidden="true" /></div>
            <h3>{achievement.title}</h3>
            <p>{achievement.context}</p>
            <span className="achievement-year">{achievement.year}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
