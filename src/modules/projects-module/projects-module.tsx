import { FolderGit2 } from "lucide-react";

export function ProjectsModule() {
  return (
    <main id="projects">
      <section className="portfolio-section" aria-labelledby="projects-title">
        <div className="section-command"><span><span className="text-accent">grace@portfolio:~$</span> ls ./projects</span><FolderGit2 size={16} aria-hidden="true" /></div>
        <div className="section-heading">
          <p className="section-eyebrow">Selected work</p>
          <h1 id="projects-title" className="font-display">Project archive</h1>
          <p>Selected work will live here as individual case studies, with room for the problem, process, and outcome behind each build.</p>
        </div>
      </section>
    </main>
  );
}
