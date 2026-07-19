import Link from "next/link";
import Image from "next/image";
import { techStack } from "../constants";
import { NowPlayingCard } from "../components/now-playing-card";

export function HeroSection() {
  return (
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
              <h1 id="hero-title" className="font-display whitespace-nowrap max-[325px]:text-4xl min-[326px]:text-5xl min-[400px]:text-6xl text-[clamp(3.25rem,5vw,5.6rem)] leading-[0.9] tracking-[-0.055em] text-foreground">
                Grace Karina
              </h1>
              <span className="hero-title-dog" aria-hidden="true"><Image src="/dog-transparent.png" alt="" fill sizes="48px" className="hero-dog-image object-contain" /></span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs font-medium lowercase tracking-[0.08em] text-accent sm:text-sm">
              <span>software engineer / data enthusiast / builder</span>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              I craft scalable software and turn data into insights that create impact. Always <span className="text-playful-green">curious</span>, always <span className="text-accent">building</span>, always <span className="text-playful-green underline decoration-dotted underline-offset-4">learning</span>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="focus-ring action-button action-button-primary group">
                <span aria-hidden="true">›</span> view projects
              </Link>
              <Link href="#contact" className="focus-ring action-button action-button-secondary group">
                <span aria-hidden="true">›</span> contact me 
              </Link>
            </div>
            <div className="hero-notes mt-8 hidden font-mono text-[0.65rem] leading-6 text-muted-foreground sm:block">
              <p>{"// building meaningful experiences"}</p><p>{"// one commit at a time"}</p>
            </div>
          </div>
          <div className="hero-tarot-scene relative z-10 mx-auto w-full max-w-[360px] self-center lg:mr-0" aria-label="Portrait of Grace Karina">
            <span className="scene-spark scene-spark-one" aria-hidden="true">✦</span><span className="scene-spark scene-spark-two" aria-hidden="true">✧</span><span className="scene-spark scene-spark-three" aria-hidden="true">✦</span>
            <span className="scene-path" aria-hidden="true" />
            <div className="hero-tarot-card items-center">
              <Image src="/me.jpeg" alt="Portrait of Grace Karina" fill priority sizes="(max-width: 639px) 272px, 364px" className="hero-portrait-image items-center" />
              <div className="hero-photo-mountain" aria-hidden="true"><Image src="/mountain.jpg" alt="" fill sizes="360px" className="object-cover" /></div>
              <span className="hero-photo-caption" aria-hidden="true">GRACE.JPG // 01</span>
            </div>
          </div>
        </div>
        <div className="hero-tech-stack" aria-label="Active technology stack">
          <p className="hero-tech-stack-command"><span className="text-accent">grace@portfolio:~$</span> stack --active</p>
          <div className="tech-stack-viewport">
            <div className="tech-stack-track">
              {[false, true].map((isDuplicate) => (
                <ul key={String(isDuplicate)} className="tech-stack-list" aria-hidden={isDuplicate}>
                  {techStack.map((technology) => <li key={technology} className="tech-stack-item">{technology}<span aria-hidden="true">✦</span></li>)}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <NowPlayingCard />
      </div>
    </section>
  );
}
