"use client";
import Rail from "../components/Rail";
import TVSections from "./TVSections";
export default function TVPage() {
 return <main className="app-shell tv-shell"><Rail active="TV"/><section className="content tv-content">
  <div className="tv-promotion"><div className="tv-promotion-art"><div className="tv-promotion-copy"><span>INDRAJIT NAMCHOOM</span><b>ARUNACHAL LEAGUE</b><strong>10 OCT - 6 DEC<br/>4:45 PM ONWARDS</strong></div></div><div className="tv-promotion-info"><div className="tv-promotion-heading"><span className="tv-service-logo"><img src="/brand-star.svg" alt=""/><small>JioHotstar</small></span><div><b>Arunachal League</b><p>10 OCT to 6 DEC, 4:45 PM</p></div></div><p>Arunachals finest take the field</p><a href="https://inal.in/">Explore</a></div></div>
  <div className="tv-feature"><div className="tv-feature-content"><p className="tv-specials">hotstar <span>specials</span></p><h1>HUNKKAAR</h1><p className="tv-subtitle">THE ROAR</p><p className="tv-rating">IMDb 8.3</p><p className="tv-meta">2026 <span>•</span> A <span>•</span> 1 Season <span>•</span> 8 Languages</p><p className="tv-description">When a teenager accuses a revered cult leader of sexual assault, it sparks a national conflict. As the truth unravels, the line between faith and justice blurs.</p><div className="tv-actions"><button>▶ &nbsp; Watch Now</button><button aria-label="Add to watchlist">＋</button></div></div></div>
  <TVSections />
 </section></main>;
}
