import { Cat } from "lucide-react";
import { TarotCard } from "../components/tarot-card";
import { TarotSessionLog } from "../components/tarot-session-log";

export function HeroSection() {
  return (
    <section className="hero-section relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-canvas mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 !border-b-0">
        <div className="hero-intro-grid flex items-center">
          <p className="hero-mobile-terminal terminal-label font-mono text-xs tracking-[0.08em] text-muted-foreground sm:hidden">
            <span className="text-accent">grace@portfolio:~$</span> cat intro.txt<span className="terminal-cursor" aria-hidden="true">_</span>
          </p>
          <div className="hero-copy relative z-10 max-w-3xl">
            <p className="terminal-label mb-8 hidden font-mono text-xs tracking-[0.08em] text-muted-foreground sm:block sm:text-sm">
              <span className="text-accent">grace@portfolio:~$</span> cat intro.txt<span className="terminal-cursor" aria-hidden="true">_</span>
            </p>
            <div className="hero-title-row">
              <h1 id="hero-title" className="font-sans font-bold whitespace-nowrap max-[325px]:text-4xl min-[326px]:text-5xl min-[400px]:text-6xl text-[clamp(3.25rem,5vw,5.6rem)] leading-[0.9] tracking-[-0.055em] text-foreground">Grace Karina</h1>
              <Cat className="hero-title-cat" size={42} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-sans text-xs font-medium lowercase tracking-[0.08em] text-accent sm:text-sm">
              <span>software engineer / data enthusiast / builder</span>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-[1.8] text-muted-foreground sm:text-base">
              Just a girl trying to make a living in this economy. Scroll through my work, see my projects, and consider hiring me. The economy isn&apos;t getting any better.
            </p>
            <TarotSessionLog />
          </div>
          <div className="hero-tarot-scene relative z-10 mx-auto self-center lg:mr-0" aria-label="Portrait of Grace Karina">
            <TarotCard />
          </div>
        </div>
      </div>
    </section>
  );
}
