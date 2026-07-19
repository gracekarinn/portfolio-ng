import { BriefcaseBusiness, GitBranch } from "lucide-react";
import { experienceEntries } from "../constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section" aria-labelledby="experience-title">
      <div className="section-command"><span><span className="text-accent">grace@portfolio:~$</span> git log --experience</span><GitBranch size={16} aria-hidden="true" /></div>
      <div className="section-heading">
        <p className="section-eyebrow">A record of learning by building</p>
        <h2 id="experience-title" className="font-display">Experience log</h2>
        <p>Replace the editable entries below with your roles, organizations, and work you are proud of.</p>
      </div>
      <ol className="experience-timeline">
        {experienceEntries.map((entry, index) => (
          <li key={`${entry.period}-${entry.role}`} className="experience-entry">
            <div className="experience-marker" aria-hidden="true"><BriefcaseBusiness size={15} /></div>
            <div className="experience-period">{entry.period}</div>
            <article className="experience-card">
              <div className="experience-card-top"><div><h3>{entry.role}</h3><p>{entry.organization}</p></div><span>0{index + 1}</span></div>
              <p className="experience-summary">{entry.summary}</p>
              <ul className="experience-tech" aria-label="Technologies and skills">
                {entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
