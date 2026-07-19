export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="hero-mountain-stars" />
      <span className="hero-twinkle-star hero-twinkle-star-one" />
      <span className="hero-twinkle-star hero-twinkle-star-two" />
      <span className="hero-twinkle-star hero-twinkle-star-three" />
      <span className="hero-twinkle-star hero-twinkle-star-four" />
      <span className="hero-twinkle-star hero-twinkle-star-five" />
      <span className="hero-twinkle-star hero-twinkle-star-six" />
      <span className="hero-twinkle-star hero-twinkle-star-seven" />
      <span className="hero-twinkle-star hero-twinkle-star-eight" />
      <span className="hero-shooting-star hero-shooting-star-one" />
      <span className="hero-shooting-star hero-shooting-star-two" />
      <span className="hero-shooting-star hero-shooting-star-three" />
      <div className="hero-aurora" />
      <div className="hero-sky-sun" />
      <div className="hero-mountain-glow hero-mountain-glow-sun" />
      <div className="hero-mountain-glow hero-mountain-glow-terminal" />
      <svg className="hero-mountains" viewBox="0 0 1200 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="site-mountain-far" x1="0" y1="0" x2="0" y2="1"><stop className="hero-mountain-far-start" offset="0%" /><stop className="hero-mountain-far-end" offset="100%" /></linearGradient>
          <linearGradient id="site-mountain-mid" x1="0" y1="0" x2="0" y2="1"><stop className="hero-mountain-mid-start" offset="0%" /><stop className="hero-mountain-mid-end" offset="100%" /></linearGradient>
          <linearGradient id="site-mountain-near" x1="0" y1="0" x2="0" y2="1"><stop className="hero-mountain-near-start" offset="0%" /><stop className="hero-mountain-near-end" offset="100%" /></linearGradient>
        </defs>
        <path d="M0 320V160L110 75l120 70L340 60l140 110L600 90l140 65L880 65l130 75 120-60 70 50v190Z" fill="url(#site-mountain-far)" />
        <path d="M0 320V205l140-85 140 80 140-95 140 90 140-70 140 85 140-95 140 75 80-35v165Z" fill="url(#site-mountain-mid)" />
        <path d="M0 320v-75l180-70 180 80 180-70 180 75 180-80 180 70 120-35v105Z" fill="url(#site-mountain-near)" />
        <path className="hero-mountain-horizon" d="M0 320h1200" strokeWidth="1" />
      </svg>
    </div>
  );
}
