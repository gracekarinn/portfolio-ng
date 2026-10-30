import Image from "next/image";
import { techStackCards } from "../constants";

export function TechStackSection() {
  return (
    <section className="tech-stack-section" aria-label="Active technology stack">
      <div className="hero-tech-stack">
        <p className="hero-tech-stack-command">
          <span className="text-accent">grace@portfolio:~$</span> stack --active
        </p>
        <div className="tech-stack-viewport">
          <div className="tech-stack-track">
            {[0, 1, 2].map((copyIndex) => (
              <ul
                key={copyIndex}
                className="tech-stack-grid"
                aria-hidden={copyIndex > 0}
              >
                {techStackCards.map((technology, index) => (
                  <li key={`${technology.src}-${index}`}>
                    <span className="tech-stack-card" title={technology.name}>
                      <Image
                        src={technology.src}
                        alt={technology.name}
                        className={
                          technology.monochrome
                            ? "tech-stack-icon tech-stack-icon-monochrome"
                            : technology.lightMonochrome
                              ? "tech-stack-icon tech-stack-icon-light-monochrome"
                              : "tech-stack-icon"
                        }
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
  );
}
