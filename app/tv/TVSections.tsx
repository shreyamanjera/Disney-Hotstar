"use client";
import { useRef } from "react";
import Footer from "../components/Footer";

type Item = { name: string; image: string; badge?: string };
const bigg = {name:"Bigg Boss",image:"https://artworks.thetvdb.com/banners/v4/season/2267004/posters/6aaf9a0d7d652.jpg"};
const pati = {name:"Dhamaal with Pati Patni Aur Panga",image:"https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b58e8538d5c8a62bdb5/images/PORTRAIT/1763361568652-v?o=production"};
const roadies = {name:"Roadies Rebirth",image:"https://images.news18.com/ibnlive/uploads/2026/09/Roadies-rebirth-21-season-netflix-and-jiohotstar-mtv-release-date-ott-2026-09-74a7c89929220ff0efe2666cadb0c8a4-1200x675.jpg"};
const mahabharat = {name:"Mahabharat",image:"https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/9142/1775843409142-v"};
const afterDark = {name:"Student of the Year: After Dark",image:"https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"};
const anupamaa = {name:"Anupamaa",image:"https://cdn.serialtwister.com/posts-images/what-happens-when-hope-meets-heartbreak-star-plus-anupamaas-next-move-will-surprise-you-1774252292.jpg"};
const rishta = {name:"Yeh Rishta Kya Kehlata Hai",image:"https://www.newsnmf.com/file/ajsgar-521734523022.jpg"};
const fitoor = {name:"Yeh Fitoor Tera",image:"https://image.tmdb.org/t/p/w500/26anGsoVCiEbj2yOHSNGOBlR3mD.jpg"};
const sayonee = {name:"Sayoneee",image:"https://erp.adgully.com/artical_image/0ce6f7c59f4d437602717a0f14e946a7.jpeg"};
const channels = [["StarPlus", "#291c2c", "/channel-official-plus.png"], ["Colors", "#2f2036", "/channel-official-colors.png"], ["Vijay", "#3c211a", "/channel-official-vijay.png"], ["Star Maa", "#342021", "/channel-official-maa.png"], ["Star Pravah", "#252641", "/channel-official-pravah.png"]];
const top = [bigg,pati,roadies,mahabharat,afterDark,{name:"Ali Baba Aur 40 Bhoot",image:"/specials-hanuman.jpg"},sayonee];
const vijay = [{name:"RadhaKrishn",image:"/tv-radha.jpg"},{name:"Tamizh Kadavul Murugan",image:"/specials-hanuman.jpg"},mahabharat,{name:"Super Singer",image:"/tv-singer.jpg"},rishta,anupamaa,fitoor];
const popular = [bigg,anupamaa,rishta,fitoor,sayonee,pati,mahabharat,afterDark];
const originals = [{name:"The Magic of Shiri",image:"/specials-love.jpg"},{name:"Khalbali Records",image:"/tv-khalbali-records.jpg"},{name:"Honeymoon Photographer",image:"/tv-honeymoon-photographer.jpg"},{name:"Cadets",image:"/specials-office.webp"},{name:"Taali",image:"/tv-taali.jpg"},{name:"Kaalkoot",image:"/tv-kaalkoot.jpg"},{name:"Shekhar Home",image:"/tv-shekhar.jpg"}];
const reality = [roadies,{name:"Koffee with Karan",image:"https://images.herzindagi.info/image/2023/Nov/kwk-show-season-8.jpg",badge:"NEW EPISODE WED"},{name:"Laughter Chefs",image:"https://myjiostatic.cdn.jio.com/cms/assets/ott/disneyhotstar/banner-mastercheif-desktop.webp"},pati,mahabharat,afterDark];
const dramas = [anupamaa,sayonee,rishta,fitoor,{name:"Mr & Mrs Office",image:"/specials-office.webp"},afterDark,{name:"Varam",image:"/specials-varam.jpg"}];
const kids = [{name:"Doraemon",image:"/kids-doraemon.jpg"},{name:"Oggy and the Cockroaches",image:"/kids-oggy.jpg"},{name:"Motu Patlu",image:"/kids-motu.jpg"},{name:"Jungle Tales with Mowgli",image:"/kids-mowgli.jpg",badge:"NEW EPISODES"},{name:"Ainbo",image:"/kids-ainbo.jpg"}];
const sparks = [{name:"TribeVerse",image:"/specials-pushpaka.jpg",badge:"ALL EPISODES OUT"},{name:"The Society",image:"https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"},{name:"Engaged 2",image:"/specials-office.webp"},{name:"Spice It Up",image:"/specials-love.jpg"},{name:"Game of Glory",image:"/specials-hanuman.jpg"},{name:"The Treasure Hunters",image:"/specials-varam.jpg"}];
export function TVRow({title,items,ranked=false,badges=false}:{title:string;items:Item[];ranked?:boolean;badges?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);
 return <section className={`row movie-shelf reference-posters tv-row ${ranked ? "tv-ranked-row" : ""}`}><header><h2>{title}</h2><button onClick={()=>ref.current?.scrollBy({left:ref.current.clientWidth*.8,behavior:"smooth"})}>View All ›</button></header><div ref={ref} className={ranked ? "posters ranked" : "posters"} role="region" aria-label={`${title} titles`} tabIndex={0}>{items.map((item,index)=><article key={`${item.name}-${index}`} className="poster tv-poster" data-movie-title={item.name} data-movie-image={item.image} tabIndex={0} aria-label={item.name} style={{backgroundImage:`url("${item.image}")`}}>{ranked && <i>{index+1}</i>}{(badges || item.badge) && <span className={item.badge && !item.badge.includes("FREE") && item.badge !== "NEW EPISODES" ? "peacock-badge" : "badge"}>{item.badge || "FREE FOR YOU"}</span>}<div className="tv-card-title">{item.name}</div></article>)}</div></section>;
}
export default function TVSections(){return <>
 <section className="tile-shelf channel-shelf tv-channel-shelf"><h2>Popular Channels</h2><div>{channels.map(([name,color,image])=><article key={name} style={{backgroundColor:color}} tabIndex={0} aria-label={name}><img className={name === "Colors" ? "channel-colors-logo" : undefined} src={image} alt={name}/>{name === "StarPlus" && <small className="channel-tagline">रिश्ता वही, बात नई</small>}</article>)}</div></section>
 <TVRow title="Top 10 Shows - Hindi" items={top} ranked/><TVRow title="Star Vijay Shows" items={vijay} badges/><TVRow title="Popular Shows" items={popular} badges/>
 <section className="row movie-shelf tv-live-row"><header><h2>Entertainment 24X7</h2></header><div className="posters">{["Star Vijay Super Singer","Star Vijay Kalakkal Comedy","Star Vijay Fun Games","Star Vijay Classics","Star Vijay Movie Time"].map((name,index)=><article className="tv-live-card" key={name} tabIndex={0} data-movie-title={name} data-movie-image={vijay[index].image}><div className="tv-live-art" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.8),transparent),url('${vijay[index].image}')`}}><b>{name}</b><small>Entertainment 24×7</small><span className="tv-live-play">▶</span><span className="tv-live-label">🔴 LIVE</span></div><p>{name}</p></article>)}</div></section>
 <TVRow title="Must Watch Originals" items={originals}/><TVRow title="Real Lives, Unlimited Drama" items={reality} badges/><TVRow title="House of Dramas" items={dramas}/><TVRow title="Popular in Kids" items={kids}/><TVRow title="Sparks: Sit Back & Enjoy" items={sparks}/>
 <Footer />
 </>}
