import { GraduationCap } from "lucide-react";
import { EducationCard } from "../components/education-card";
import { educationEntries } from "../constants";

export function EducationSection() {
  return (
    <section
      id="education"
      className="portfolio-section !px-4 !pt-8 !pb-10"
      aria-labelledby="education-title"
    >
      <div className="section-command">
        <h2 id="education-title" className="font-mono text-inherit">
          <span className="text-accent">grace@portfolio:~$</span> cat education.txt
        </h2>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {educationEntries.map((entry) => (
          <EducationCard key={entry.id} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
