import { FolderGit2 } from "lucide-react";
import { ProjectCard } from "./components/project-card";
import { projectEntries } from "./constants";

export function ProjectsModule() {
  return (
    <main id="projects">
      <section className="portfolio-section" aria-labelledby="projects-title">
        <div className="section-command">
          <span>
            <span className="text-accent">grace@portfolio:~$</span> ls ./projects
          </span>
          <FolderGit2 size={16} aria-hidden="true" />
        </div>
        <div className="section-heading">
          <h1
            id="projects-title"
            className="font-sans font-bold whitespace-nowrap text-[clamp(1.2rem,7vw,3.875rem)] leading-[0.95] tracking-[-0.045em]"
          >
            Selected Project Archive
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectEntries.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
