import type { AchievementEntry, ExperienceEntry } from "./interfaces";

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Current",
    role: "Software engineering",
    organization: "Add your organization",
    summary: "Add a concise description of your role, the product, and the meaningful outcomes you created.",
    technologies: ["TypeScript", "Next.js", "Product systems"],
  },
  {
    period: "Previous",
    role: "Data and analytics",
    organization: "Add your organization",
    summary: "Add the work that turned data into useful decisions, clearer processes, or better experiences.",
    technologies: ["Python", "SQL", "Data storytelling"],
  },
  {
    period: "Earlier",
    role: "Product building",
    organization: "Add your organization",
    summary: "Add a short note about the systems, experiments, or collaborations that shaped your practice.",
    technologies: ["Research", "Automation", "Collaboration"],
  },
];

export const achievementEntries: AchievementEntry[] = [
  { number: "01", title: "Add an achievement", context: "Competition, recognition, or milestone", year: "Year" },
  { number: "02", title: "Add an achievement", context: "Certification, fellowship, or program", year: "Year" },
  { number: "03", title: "Add an achievement", context: "Community contribution or selected work", year: "Year" },
];

export const techStackIcons: Record<string, string> = {
  TypeScript: "/assets/tech/typescript.svg",
  "Next.js": "/assets/tech/nextjs.svg",
  React: "/assets/tech/react.svg",
  "Tailwind CSS": "/assets/tech/tailwind.svg",
  "Node.js": "/assets/tech/node.svg",
};

export const techStackCards = [
  { name: "TypeScript", src: "/assets/tech/typescript.svg" },
  { name: "Next.js", src: "/assets/tech/nextjs.svg", monochrome: true },
  { name: "React", src: "/assets/tech/react.svg" },
  { name: "Tailwind CSS", src: "/assets/tech/tailwind.svg" },
  { name: "Node.js", src: "/assets/tech/node.svg" },
  { name: "Vercel", src: "/assets/tech/vercel.svg", lightMonochrome: true },
  { name: "Developer tool", src: "/assets/tech/orange-tool.svg" },
  { name: "Google", src: "/assets/tech/google.svg" },
  { name: "Django", src: "/assets/tech/django.svg" },
  { name: "Python", src: "/assets/tech/python.svg" },
  { name: "Developer tool", src: "/assets/tech/tool-white-a.svg", lightMonochrome: true },
  { name: "RSS", src: "/assets/tech/rss.svg" },
  { name: "Solidity", src: "/assets/tech/solidity.svg", monochrome: true },
  { name: "Developer tool", src: "/assets/tech/circle-tool.svg", monochrome: true },
  { name: "Featured technology", src: "/assets/tech/featured-tool.svg" },
  { name: "Flask", src: "/assets/tech/flask.svg", lightMonochrome: true },
  { name: "HTML5", src: "/assets/tech/html5.svg" },
  { name: "Nginx", src: "/assets/tech/nginx.svg" },
];
