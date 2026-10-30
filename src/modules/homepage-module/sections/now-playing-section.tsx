import { NowPlayingCard } from "../components/now-playing-card";

export function NowPlayingSection() {
  return (
    <section className="now-playing-section" aria-label="Favorite music">
      <NowPlayingCard />
    </section>
  );
}
