import { BookOpenText } from "lucide-react";

export function BlogsModule() {
  return (
    <main id="blogs">
      <section className="portfolio-section" aria-labelledby="blogs-title">
        <div className="section-command"><span><span className="text-accent">grace@portfolio:~$</span> ls ./blogs</span><BookOpenText size={16} aria-hidden="true" /></div>
        <div className="section-heading">
          <p className="section-eyebrow">Notes in progress</p>
          <h1 id="blogs-title" className="font-display">Writing archive</h1>
          <p>Notes on engineering, data, learning, and the small discoveries that happen while building in public.</p>
        </div>
      </section>
    </main>
  );
}
