import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AchievementsSection } from "@/modules/homepage-module/sections/achievements-section";

export default function AchievementsPage() {
  return <div className="site-page"><SiteHeader /><main><AchievementsSection /></main><SiteFooter /></div>;
}
