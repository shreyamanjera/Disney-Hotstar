"use client";
import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";
import Footer from "./Footer";
type Movie={title:string;image:string};
export default function MovieDetails(){
 const [movie,setMovie]=useState<Movie|null>(null);
 const [suggestions,setSuggestions]=useState<Movie[]>([]);
 const [tab,setTab]=useState<"more"|"trailers">("more");
 const [saved,setSaved]=useState(false);
 const [playbackNotice,setPlaybackNotice]=useState(false);
 const closeRef=useRef<HTMLButtonElement>(null);
 const triggerRef=useRef<HTMLElement|null>(null);
 const moreRef=useRef<HTMLDivElement>(null);
 const trailerRef=useRef<HTMLElement>(null);
 useEffect(()=>{
  function openFrom(target:EventTarget|null){
   if(!(target instanceof Element) || target.closest("[data-movie-dialog]"))return;
   const card=target.closest<HTMLElement>("[data-movie-title][data-movie-image]");
   if(!card)return;
   const title=card.dataset.movieTitle, image=card.dataset.movieImage;
   if(!title || !image)return;
   triggerRef.current=card;
   const entries=Array.from(document.querySelectorAll<HTMLElement>("article[data-movie-title][data-movie-image]"));
   const unique=new Map<string,Movie>();
   entries.forEach(entry=>{const t=entry.dataset.movieTitle,src=entry.dataset.movieImage;if(t&&src&&t!==title&&!unique.has(t))unique.set(t,{title:t,image:src});});
   setSuggestions(Array.from(unique.values()).slice(0,12));setMovie({title,image});setTab("more");setSaved(false);setPlaybackNotice(false);
   return true;
  }
  function click(event:MouseEvent){if(openFrom(event.target))event.preventDefault()}
  function key(event:KeyboardEvent){if((event.key==="Enter" || event.key===" ")&&document.activeElement?.matches("article[data-movie-title]")){event.preventDefault();openFrom(document.activeElement)}}
  document.addEventListener("click",click,true);document.addEventListener("keydown",key);
  return()=>{document.removeEventListener("click",click,true);document.removeEventListener("keydown",key)};
 },[]);
 useEffect(()=>{
  if(!movie)return;
  const rail=document.querySelector<HTMLElement>(".app-shell > .rail");
  const previousRailStyle=rail?.getAttribute("style")??null;
  if(rail){const rect=rail.getBoundingClientRect();Object.assign(rail.style,{width:`${rect.width}px`,height:`${rect.height}px`,top:`${rect.top}px`,left:`${rect.left}px`,right:"auto",bottom:"auto",transition:"none"});}
  const previousOverflow=document.body.style.overflow;document.body.style.overflow="hidden";
  const focusTimer=window.setTimeout(()=>closeRef.current?.focus(),0);
  function escape(event:KeyboardEvent){if(event.key==="Escape")setMovie(null)}
  document.addEventListener("keydown",escape);
  return()=>{window.clearTimeout(focusTimer);document.body.style.overflow=previousOverflow;if(rail){if(previousRailStyle===null)rail.removeAttribute("style");else rail.setAttribute("style",previousRailStyle)}document.removeEventListener("keydown",escape);triggerRef.current?.focus({preventScroll:true})};
 },[Boolean(movie)]);
 if(!movie || typeof document==="undefined")return null;
 const pune=movie.title.toLowerCase()==="pune highway";
 const dulhaniya=movie.title.toLowerCase()==="dulhaniya le aaeegi";
 const image=pune?"/pune-highway-hero.jpg":movie.image;
 const trailerUrl=pune?"https://www.youtube.com/watch?v=v0pHu3-IVno":dulhaniya?"https://www.youtube.com/watch?v=7dW6e5EdNmI":null;
 const trailerImage=pune?"/pune-highway-hero.jpg":"/dulhaniya-trailer.jpg";
 return createPortal(<div className="movie-detail-backdrop" data-movie-dialog onClick={()=>setMovie(null)}><div className="movie-detail" role="dialog" aria-modal="true" aria-labelledby="movie-detail-title" onClick={event=>event.stopPropagation()}><div className="movie-detail-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(15,15,19,.96) 0%,rgba(15,15,19,.7) 35%,rgba(15,15,19,.08) 80%),linear-gradient(0deg,#101116,transparent 45%),url("${image}")`}}><button ref={closeRef} className="movie-detail-close" onClick={()=>setMovie(null)} aria-label="Close movie details">×</button><div className="movie-detail-copy"><h2 id="movie-detail-title">{movie.title}</h2>{pune&&<><p className="movie-detail-kicker">Newly Added</p><p className="movie-detail-meta">2025 <span>•</span> A <span>•</span> 2h 5m <span>•</span> Hindi</p><p className="movie-detail-description">Three childhood friends in Mumbai face a shocking twist when a body is found near a lake. Will the mystery test their friendship and expose buried secrets?</p><p className="movie-detail-genres">Drama <span>│</span> Thriller <span>│</span> Suspense <span>│</span> Dark</p></>}<div className="movie-detail-actions"><button className="movie-detail-watch" onClick={()=>setPlaybackNotice(true)}>▶ &nbsp; Watch Now</button><button className="movie-detail-add" aria-label={saved?"Remove from watchlist":"Add to watchlist"} aria-pressed={saved} onClick={()=>setSaved(!saved)}>{saved?"✓":"＋"}</button></div>{playbackNotice&&<p className="movie-detail-notice" role="status">Playback is not available in this preview.</p>}</div></div><div className="movie-detail-lower"><div className="movie-detail-tabs" role="tablist" aria-label="Movie details"><button role="tab" aria-selected={tab==="more"} onClick={()=>{setTab("more");moreRef.current?.scrollIntoView({behavior:"smooth",block:"start"})}}>More Like This</button><button role="tab" aria-selected={tab==="trailers"} onClick={()=>{setTab("trailers");trailerRef.current?.scrollIntoView({behavior:"smooth",block:"start"})}}>Trailers &amp; More</button></div><div className="movie-detail-recommendations" ref={moreRef}>{suggestions.length?suggestions.map(item=><button key={item.title} onClick={()=>{setMovie(item);setTab("more");setSaved(false);setPlaybackNotice(false)}} aria-label={`View ${item.title}`} style={{backgroundImage:`url("${item.image}")`}}/>):<p>No recommendations available.</p>}</div><section className="movie-trailer-section" ref={trailerRef}><h3>Trailers &amp; More</h3>{trailerUrl?<a className="movie-trailer-card" href={trailerUrl} target="_blank" rel="noreferrer"><span className="movie-trailer-image" style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.6),transparent 50%),url("${trailerImage}")`}}><span>▶</span><small>{pune?"1m":"2m"}</small></span><span className="movie-trailer-label">{movie.title} - Trailer</span></a>:<p className="movie-trailer-empty">Trailers are not available in this preview.</p>}</section><section className="movie-about" aria-label={`About ${movie.title}`}><h2>{movie.title}</h2>{pune ? <><p className="movie-about-meta"><strong>IMDb 7.0</strong>　•　2025　•　A　•　2h 5m　•　Hindi</p><p className="movie-about-description">Three childhood friends in Mumbai face a shocking twist when a body is found near a lake. Will the mystery test their friendship and expose buried secrets?</p><div className="movie-about-credits"><div><span>Directors</span><p>Rahul da Cunha, Bugs Bhargava Krishna</p></div><div><span>Producers</span><p>Jahanara Bhargava, Rahul da Cunha, Seema Mohapatra</p></div><div className="movie-about-wide"><span>Cast and Characters</span><p>Amit Sadh (Pramod), Jim Sarbh (Vishnu), Anuvab Pal (Nicky)</p></div><div><span>Languages</span><p>हिंदी</p></div></div></> : dulhaniya ? <><p className="movie-about-meta">2026　•　Hindi</p><p className="movie-about-description">A family wedding brings romance, laughter and unexpected surprises.</p><div className="movie-about-credits"><div><span>Director</span><p>Akashaditya Lama</p></div><div className="movie-about-wide"><span>Cast</span><p>Khushali Kumar, Mahesh Manjrekar, Piyush Mishra, Omkar Kapoor</p></div><div><span>Languages</span><p>हिंदी</p></div></div></> : <p className="movie-about-description">More information about this title is not available in this preview.</p>}</section></div><div className="movie-detail-footer content"><Footer/></div></div></div>,document.body)
}
