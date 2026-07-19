import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BlogsModule } from "@/modules/blogs-module";

export default function BlogsPage() {
  return <div className="site-page"><SiteHeader /><BlogsModule /><SiteFooter /></div>;
}
