import { GitBranch } from "lucide-react";
import { experienceEntries } from "../constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section" aria-labelledby="experience-title">
      <div className="section-command"><span><span className="text-accent">grace@portfolio:~$</span> git log --experience</span><GitBranch size={16} aria-hidden="true" /></div>
      <div className="section-heading">
        <h2 id="experience-title" className="font-sans font-bold">Experience Log</h2>
      </div>
      <ol className="experience-timeline">
        {experienceEntries.map((entry) => (
          <li
            key={entry.period + "-" + entry.role}
            className={`experience-entry${entry.period.toLowerCase().includes("present") ? " experience-entry-current" : ""}`}
          >
            <span className="experience-marker" aria-hidden="true" />
            <article className="experience-card">
              <div className="experience-card-meta">
                <div className="experience-period">{entry.period}</div>
                {entry.period.toLowerCase().includes("present") && (
                  <span className="experience-current-badge">
                    <span aria-hidden="true" /> Current
                  </span>
                )}
              </div>
              <div className="experience-card-top">
                <div>
                  <h3>{entry.role}</h3>
                  <p className="experience-company-line">
                    <strong>{entry.organization}</strong>
                    {entry.employmentType && (
                      <span className="experience-employment-type">
                        {entry.employmentType}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              {(entry.location || entry.workArrangement) && (
                <ul className="experience-context" aria-label="Role details">
                  {entry.location && (
                    <li>
                      <span className="experience-context-label">Location</span>
                      <span>{entry.location}</span>
                    </li>
                  )}
                  {entry.workArrangement && (
                    <li>
                      <span className="experience-context-label">Work mode</span>
                      <span>{entry.workArrangement}</span>
                    </li>
                  )}
                </ul>
              )}
              {entry.summary && <p className="experience-summary">{entry.summary}</p>}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
