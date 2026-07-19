"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useHomepageEntry } from "./homepage-entry-provider";

interface HomepageLoaderProps {
  children: ReactNode;
}

export function HomepageLoader({ children }: HomepageLoaderProps) {
  const { hasEntered, enter } = useHomepageEntry();
  const [isEntering, setIsEntering] = useState(false);

  const enterPortfolio = () => {
    setIsEntering(true);
    window.setTimeout(enter, 420);
  };

  if (hasEntered) return children;

  return (
    <main className={`homepage-loader ${isEntering ? "homepage-loader-leaving" : ""}`}>
      <div className="homepage-loader-window">
        <div className="homepage-loader-bar">
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>grace@portfolio:~</span>
        </div>
        <div className="homepage-loader-content">
          <p className="font-mono text-sm text-muted-foreground"><span className="text-accent">grace@portfolio:~$</span> cat intro.txt</p>
          {isEntering ? (
            <p className="mt-5 font-mono text-sm text-foreground">please wait...<span className="terminal-cursor" aria-hidden="true">_</span></p>
          ) : (
            <button type="button" className="homepage-loader-button focus-ring" onClick={enterPortfolio}>
              <span aria-hidden="true">↵</span> Enter
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
