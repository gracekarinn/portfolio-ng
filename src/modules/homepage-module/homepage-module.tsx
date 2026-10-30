import { HeroSection } from "./sections/hero-section";
import { EducationSection } from "./sections/education-section";
import { TechStackSection } from "./sections/tech-stack-section";
import { NowPlayingSection } from "./sections/now-playing-section";

export function HomepageModule() {
  return (
    <main id="home">
      <HeroSection />
      <EducationSection />
      <TechStackSection />
      <NowPlayingSection />
    </main>
  );
}
