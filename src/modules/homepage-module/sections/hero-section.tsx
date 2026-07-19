import { Cat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techStackCards } from "../constants";
import { NowPlayingCard } from "../components/now-playing-card";
import { TarotCard } from "../components/tarot-card";
import { TarotSessionLog } from "../components/tarot-session-log";

export function HeroSection() {
  return (
    <>
    <section className="hero-section relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-canvas mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="hero-intro-grid flex items-center">
          <p className="hero-mobile-terminal terminal-label font-mono text-xs tracking-[0.08em] text-muted-foreground sm:hidden">
            <span className="text-accent">grace@portfolio:~$</span> cat intro.txt<span className="terminal-cursor" aria-hidden="true">_</span>
          </p>
          <div className="hero-copy relative z-10 max-w-3xl">
            <p className="terminal-label mb-8 hidden font-mono text-xs tracking-[0.08em] text-muted-foreground sm:block sm:text-sm">
              <span className="text-accent">grace@portfolio:~$</span> cat intro.txt<span className="terminal-cursor" aria-hidden="true">_</span>
            </p>
            <div className="hero-title-row">
              <h1 id="hero-title" className="font-display whitespace-nowrap max-[325px]:text-4xl min-[326px]:text-5xl min-[400px]:text-6xl text-[clamp(3.25rem,5vw,5.6rem)] leading-[0.9] tracking-[-0.055em] text-foreground">Grace Karina</h1>
              <Cat className="hero-title-cat" size={42} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs font-medium lowercase tracking-[0.08em] text-accent sm:text-sm">
              <span>software engineer / data enthusiast / builder</span>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              I craft scalable software and turn data into insights that create impact. Always <span className="text-playful-green">curious</span>, always <span className="text-accent">building</span>, always <span className="text-playful-green underline decoration-dotted underline-offset-4">learning</span>.
            </p>
            <TarotSessionLog />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="focus-ring action-button action-button-primary group"><span aria-hidden="true">›</span> view projects</Link>
              <Link href="#contact" className="focus-ring action-button action-button-secondary group"><span aria-hidden="true">›</span> contact me</Link>
            </div>
          </div>
          <div className="hero-tarot-scene relative z-10 mx-auto self-center lg:mr-0" aria-label="Portrait of Grace Karina">
            <TarotCard />
          </div>
        </div>
      </div>
    </section>
    <section className="tech-stack-section" aria-label="Active technology stack">
      <div className="hero-tech-stack">
        <p className="hero-tech-stack-command"><span className="text-accent">grace@portfolio:~$</span> stack --active</p>
        <div className="tech-stack-viewport">
          <div className="tech-stack-track">
            {[0, 1, 2].map((copyIndex) => (
              <ul key={copyIndex} className="tech-stack-grid" aria-hidden={copyIndex > 0}>
                {techStackCards.map((technology, index) => (
                  <li key={`${technology.src}-${index}`}>
                    <span className="tech-stack-card" title={technology.name}>
                      <Image
                        src={technology.src}
                        alt={technology.name}
                        className={technology.monochrome ? "tech-stack-icon tech-stack-icon-monochrome" : technology.lightMonochrome ? "tech-stack-icon tech-stack-icon-light-monochrome" : "tech-stack-icon"}
                        width={52}
                        height={52}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="now-playing-section" aria-label="Favorite music">
      <NowPlayingCard />
    </section>
    </>
  );
}
