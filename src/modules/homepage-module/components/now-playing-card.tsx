import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { DailyTarotReading } from "./daily-tarot-reading";

const tracks = [
  { title: "autumn", artist: "NIKI", href: "https://open.spotify.com/track/0W5o1Kxw1VlohSajPqeBMF", cover: "/niki-autumn.jpg", progress: "02:14 / 03:52" },
  { title: "はるなつあきふゆ", artist: "Ichiko Aoba", href: "https://open.spotify.com/track/3wEVnzZWbJ37zzSvMV0MNA", cover: "/ichiko-harunatsuakifuyu.jpg", progress: "01:05 / 04:12"  },
  { title: "Quantuuuum", artist: "EDEN", href: "https://open.spotify.com/track/46hoJtiZrlBYXpVTQrgmsp", cover: "/quantuuuum.jpg", progress: "00:45 / 03:30" },
];

export function NowPlayingCard() {
  return (
    <div className="hero-now-playing" aria-label="Favorite artists and songs">
      <p className="now-playing-command"><span className="text-accent">grace@portfolio:~$</span> spotify_player</p>
      <div className="now-playing-grid">
        {tracks.map((track) => (
          <article key={track.href} className="now-playing-card">
            <Image src={track.cover} alt={`${track.title} artwork by ${track.artist}`} width={80} height={80} className="now-playing-cover" />
            <div className="min-w-0">
              <p className="now-playing-status"><span aria-hidden="true"><i /><i /><i /></span> now playing</p>
              <h2>{track.title}</h2>
              <p className="now-playing-artist">{track.artist}</p>
              {track.progress && <div className="now-playing-progress" aria-label={track.progress}><span className="now-playing-bar" aria-hidden="true"><i /></span><span>{track.progress}</span></div>}
              <a href={track.href} target="_blank" rel="noreferrer" className="now-playing-link focus-ring">
                <span aria-hidden="true">♫</span> open in Spotify <ExternalLink size={12} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <DailyTarotReading />
    </div>
  );
}
