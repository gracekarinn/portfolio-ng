import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ExperienceSection } from "@/modules/homepage-module/sections/experience-section";

export default function ExperiencePage() {
  return <div className="site-page"><SiteHeader /><main><ExperienceSection /></main><SiteFooter /></div>;
}
