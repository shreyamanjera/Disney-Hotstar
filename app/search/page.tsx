"use client";
import { useState } from "react";
import Rail from "../components/Rail";

const titles = [
  ["Bigg Boss", "https://artworks.thetvdb.com/banners/v4/season/2267004/posters/6aaf9a0d7d652.jpg", "FREE FOR YOU", true],
  ["Yeh Rishta Kya Kehlata Hai", "https://www.newsnmf.com/file/ajsgar-521734523022.jpg", "FREE FOR YOU"],
  ["Yeh Fitoor Tera", "https://image.tmdb.org/t/p/w500/26anGsoVCiEbj2yOHSNGOBlR3mD.jpg", "FREE FOR YOU"],
  ["Anupamaa", "https://cdn.serialtwister.com/posts-images/what-happens-when-hope-meets-heartbreak-star-plus-anupamaas-next-move-will-surprise-you-1774252292.jpg", "FREE FOR YOU"],
  ["Dr. Aarambhi", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/6977c51626aec47e907a26bf/images/PORTRAIT/1779803225466-v?o=production", "FREE FOR YOU"],
  ["Tum Dena Saath Mera", "/specials-love.jpg", "FREE FOR YOU"],
  ["Sayoneee", "https://erp.adgully.com/artical_image/0ce6f7c59f4d437602717a0f14e946a7.jpeg", "FREE FOR YOU"],
  ["Tu Juliet Jatt Di", "/popular-dulhaniya.jpg", "FREE FOR YOU"],
  ["Apsara", "/specials-hanuman.jpg", "FREE FOR YOU"],
  ["Dil Ki Bewafaiyaan", "https://commons.wikimedia.org/wiki/Special:FilePath/Dil%20Ki%20Bewafaiyaan.jpg", "NEW RELEASE"],
  ["Bareilly Ke Bacchan", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/6a271ca2524ce2fcca0d5535/images/PORTRAIT/1776691923775-v?o=production", "FREE FOR YOU"],
  ["Roadies Rebirth", "https://images.news18.com/ibnlive/uploads/2026/09/Roadies-rebirth-21-season-netflix-and-jiohotstar-mtv-release-date-ott-2026-09-74a7c89929220ff0efe2666cadb0c8a4-1200x675.jpg", "FREE FOR YOU", true],
  ["Mahadev & Sons", "/specials-office.webp", "FREE FOR YOU"],
  ["Kyunki Rishton Ke Bhi Roop Badalte Hain", "/specials-varam.jpg", "FREE FOR YOU"],
  ["Shayad Yahi Hai Pyaar", "/popular-dulhaniya.jpg", "FREE FOR YOU"],
  ["Mannat 2", "/specials-love.jpg", "NEW SEASON"],
  ["Queen", "/popular-chiranjeevi.jpg", "NEW RELEASE"],
  ["Udne Ki Aasha", "/popular-sukumari.jpg", "FREE FOR YOU"],
  ["Dhamaal with Pati Patni Aur Panga", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b58e8538d5c8a62bdb5/images/PORTRAIT/1763361568652-v?o=production", "FREE FOR YOU", true],
  ["Student of the Year: After Dark", "https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg", "NEW RELEASE", true],
] as const;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = titles.filter(([name]) => name.toLowerCase().includes(query.trim().toLowerCase()));
  return <main className="app-shell search-shell">
    <Rail active="Search" />
    <section className="content search-content">
      <div className="search-body">
        <label className="search-input"><span aria-hidden="true" className="search-magnifier"/><input type="search" placeholder="Movies, shows and more" value={query} onChange={event => setQuery(event.target.value)} aria-label="Search movies and shows" /></label>
        <h1>{query.trim() ? "Search Results" : "Popular Searches"}</h1>
        {results.length ? <div className="search-grid">{results.map(([name, image, badge, top]) => <article key={name} className="search-card" data-movie-title={name} data-movie-image={image} tabIndex={0} aria-label={name} style={{backgroundImage: `url("${image}")`}}>{top && <span className="search-top">TOP<br/><strong>10</strong></span>}<span className={badge === "NEW RELEASE" ? "search-badge release" : "search-badge"}>{badge}</span></article>)}</div> : <p className="search-empty">No titles found for “{query}”.</p>}
      </div>
      <footer className="site-footer">
        <div><b>Company</b><a href="https://www.jiostar.com/">About Us</a><a href="https://www.jiostar.com/careers/">Careers</a><small>© 2026 STAR. All Rights Reserved.<br/><a href="https://www.hotstar.com/in/terms-of-use">Terms Of Use</a>　<a href="https://www.hotstar.com/in/privacy-policy">Privacy Policy</a>　<a href="https://help.hotstar.com/">FAQ</a></small></div>
        <div><b>View Website in</b><span>✓　English</span></div><div><b>Need Help?</b><a href="https://help.hotstar.com/">Visit Help Center</a><a href="https://help.hotstar.com/">Share Feedback</a></div>
        <div><b>Connect with Us</b><span className="socials"><a href="https://www.facebook.com/JioHotstar/" aria-label="Facebook">f</a><a href="https://x.com/JioHotstar" aria-label="X">𝕏</a></span><div className="store-badges"><a href="https://play.google.com/store/apps/details?id=in.startv.hotstar"><img src="/google-play-badge.svg" alt="Get it on Google Play"/></a><a href="https://apps.apple.com/in/app/jiohotstar/id934459219"><img src="/app-store-rectangular.svg" alt="Download on the App Store"/></a></div></div>
      </footer>
    </section>
  </main>;
}
