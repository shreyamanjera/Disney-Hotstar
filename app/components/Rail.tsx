"use client";
import {useEffect} from "react";
import {openCollectionFromClick} from "./collection";
import MovieDetails from "./MovieDetails";
const items = ["Home", "Search", "TV", "Movies", "Sports", "Sparks", "Categories", "My Space"];
export function Icon({name}:{name:string}) {
 const common = {width: 25, height: 25, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const};
 switch(name) {
 case "Home": return <svg {...common}><path d="M3 10.5 12 3l9 7.5M5.5 9.5V21h5v-6h3v6h5V9.5"/></svg>;
 case "Search": return <svg {...common}><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/></svg>;
 case "TV": return <svg {...common}><rect x="3" y="4.5" width="18" height="13" rx="1.5"/><path d="M9 21h6"/></svg>;
 case "Movies": return <svg {...common}><path d="M4 9h16l-1.5 11H5.5L4 9Zm2 0-1-3 2-2 2 1 2-2 2 2 2-1 2 2 2 1-1 2M9 10l.5 9M15 10l-.5 9"/></svg>;
 case "Sports": return <svg {...common}><circle cx="16" cy="3.5" r="1.7"/><path d="m9 8 4-2 3 2 2 3 3 .5M8 19l4-5-2-2-3 2-3-.5M15 11l-2 3 3 2-2 5M5 8l4-1"/></svg>;
 case "Sparks": return <svg {...common}><rect x="3" y="5" width="15" height="14" rx="2"/><path d="m18 10 3-2v8l-3-2M9 9l4 3-4 3z"/></svg>;
 case "Categories": return <svg {...common}><rect x="3" y="3" width="8" height="18" rx="1"/><circle cx="17" cy="7" r="3"/><rect x="14" y="13" width="6" height="8" rx="1"/></svg>;
 default: return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6.5 18c1-3 3-4 5.5-4s4.5 1 5.5 4"/></svg>;
 }
}
export default function Rail({active}:{active:string}) { useEffect(()=>{function openStudio(event:MouseEvent){const button=(event.target as Element).closest<HTMLButtonElement>(".studios-list > button");if(!button)return;const slug:Record<string,string>={"Hotstar Specials":"hotstar","Disney Plus":"disney","HBO Max":"hbo","Peacock":"peacock","Paramount Plus":"paramount"};const name=slug[button.getAttribute("aria-label")||""];if(name)window.location.href=`/studios?brand=${name}`;}document.addEventListener("click",openStudio);document.addEventListener("click",openCollectionFromClick,true);return()=>{document.removeEventListener("click",openStudio);document.removeEventListener("click",openCollectionFromClick,true)}},[]); return <><aside className="rail" aria-label="Primary navigation"><button aria-label="StreamFlix" onClick={()=>{window.location.href="/";}}><img className="brand-star" src="/brand-star.svg" alt=""/></button>{items.map(name=><button key={name} className={active === name ? "selected" : ""} aria-label={name} onClick={name === "Home" ? ()=>{window.location.href="/";} : name === "Search" ? ()=>{window.location.href="/search";} : name === "TV" ? ()=>{window.location.href="/tv";} : name === "Movies" ? ()=>{window.location.href="/movies";} : name === "Sports" ? ()=>{window.location.href="/sports";} : name === "Sparks" ? ()=>{window.location.href="/sparks";} : name === "Categories" ? ()=>{window.location.href="/categories";} : name === "My Space" ? ()=>{window.location.href="/my-space";} : undefined}><span className="nav-icon"><Icon name={name}/></span><span className="nav-label">{name}</span></button>)}</aside><MovieDetails /></>; }
