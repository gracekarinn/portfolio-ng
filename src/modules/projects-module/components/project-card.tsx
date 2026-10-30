import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import type { ProjectEntry } from "../interfaces";

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${project.videoId}`;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-tarot motion-reduce:transition-none">
      <a
        className="focus-ring relative block aspect-video overflow-hidden bg-muted"
        href={videoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch ${project.title} on YouTube`}
      >
        <Image
          src={`https://i.ytimg.com/vi/${project.videoId}/mqdefault.jpg`}
          alt={`YouTube thumbnail for ${project.title}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          loading={index < 3 ? "eager" : "lazy"}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
        <span
          className="absolute inset-0 grid place-items-center bg-background/10 transition-colors group-hover:bg-background/20 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <span className="grid size-12 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-sm">
            <Play size={18} fill="currentColor" />
          </span>
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.context ?? "YouTube video"}</span>
        </div>
        <h2 className="mt-4 min-h-16 font-display font-bold text-2xl leading-tight text-foreground">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <ul
            className="mt-4 flex flex-wrap gap-2"
            aria-label={`${project.title} technologies`}
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}
        <a
          className="mt-auto inline-flex w-fit items-center gap-1 pt-5 font-mono text-xs text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} on YouTube`}
        >
          Watch on YouTube <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
