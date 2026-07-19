import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsModule } from "@/modules/projects-module";

export default function ProjectsPage() {
  return <div className="site-page"><SiteHeader /><ProjectsModule /><SiteFooter /></div>;
}
