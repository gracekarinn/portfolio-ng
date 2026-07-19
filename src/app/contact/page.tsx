import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactModule } from "@/modules/contact-module";

export default function ContactPage() {
  return <div className="site-page"><SiteHeader /><ContactModule /><SiteFooter /></div>;
}
