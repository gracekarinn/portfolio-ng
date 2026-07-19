import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageLoader } from "@/components/shared/homepage-loader";
import { HomepageModule } from "@/modules/homepage-module";

export default function Home() {
  return (
    <HomepageLoader>
      <div className="site-page">
        <SiteHeader />
        <HomepageModule />
        <SiteFooter />
      </div>
    </HomepageLoader>
  );
}
