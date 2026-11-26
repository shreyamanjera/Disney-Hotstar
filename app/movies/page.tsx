"use client";
import { useState } from "react";
import Rail from "../components/Rail";
import Footer from "../components/Footer";
import { TVRow } from "../tv/TVSections";

const mayookha = {name:"Mayookha",image:"https://cdn.district.in/movies-assets/images/cinema/Horizontal-mayookha-569c68e0-2f56-11f1-ad1d-57b38e1e0106.jpg?im=Resize%2Cwidth%3D720"};
const dulhaniya = {name:"Dulhaniya Le Aaeegi",image:"/popular-dulhaniya.jpg"};
const aankh = {name:"Aankh Micholi",image:"https://m.media-amazon.com/images/M/MV5BOGU0MDJiOTgtYmU0OS00MmZkLWI3MDctNmY2NzMwOGVlZjgwXkEyXkFqcGc%40._V1_.jpg"};
const notout = {name:"102 Not Out",image:"/movie-102.jpg"};
const obsession = {name:"Obsession",image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00480914-jsmvsfrwka-landscape.jpg"};
const kisko = {name:"Kisko Tha Pata",image:"https://simkl.in/fanart/19/19091681c7dbe218e8_mobile.jpg"};
const revenge = {name:"Dhurandhar: The Revenge",image:"/dhurandhar-revenge.jpg"};
const maa = {name:"Maa Inti Bangaaram",image:"/popular-maa.jpg",badge:"NOW IN HINDI"};
const colony = {name:"Colony",image:"/popular-colony.webp"};
const zara = {name:"Zara Hatke Zara Bachke",image:"https://media.senscritique.com/media/000021365177/0/zara_hatke_zara_bachke.jpg"};
const baabul = {name:"Baabul",image:"https://images.moviebuff.com/7e854612-9483-4cb2-a352-0de9ea088fa4?w=1000"};
const badhaai = {name:"Badhaai Ho",image:"https://m.media-amazon.com/images/M/MV5BNjk5NjcyZTItMzE4OC00OWY5LWJmMTUtNzZjNmMwODFkNjkxXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"};
const kesari = {name:"Kesari Chapter 2",image:"/movie-kesari.jpg"};
const kabir = {name:"Kabir Singh",image:"/movie-kabir.jpg"};
const saawariya = {name:"Saawariya",image:"/movie-saawariya.jpg"};
const top = [mayookha,dulhaniya,{name:"I'm Game",image:"/popular-sukumari.jpg"},{name:"Avengers: Endgame",image:"/hbo-kombat.jpg"},{name:"Mahendragiri Varahi",image:"/popular-monster.jpg"},revenge,notout];
const fresh = [dulhaniya,aankh,notout,obsession,kisko,saawariya,{name:"Bhai Tera Star Hai",image:"/popular-chiranjeevi.jpg"}].map(item=>({...item,badge:"NEWLY ADDED"}));
const bollywood = [zara,baabul,badhaai,kesari,{name:"Bhoot Police",image:"https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"},{name:"OMG 2",image:"/popular-koi.jpg"},{name:"Brahmāstra",image:"/hbo-kombat.jpg"}];
const romance = [zara,{name:"Jeena Dil Se",image:"/popular-dulhaniya.jpg"},dulhaniya,saawariya,badhaai,baabul,kisko];
const action = [kabir,{name:"Welcome to the Jungle",image:"/popular-monster.jpg"},{name:"One Two Cha Cha Chaa",image:"/popular-sukumari.jpg"},maa,colony,revenge,kesari];
const underworld = [kabir,colony,mayookha,revenge,{name:"Bhai Tera Star Hai",image:"/popular-chiranjeevi.jpg"},maa,kesari];
const classics = [{name:"The Godfather",image:"/hbo-gilded.jpg"},baabul,{name:"Jaws",image:"/movie-jaws.jpg"},saawariya,badhaai,kesari,kabir];
const kids = [{name:"Minions & Monsters",image:"https://www.peacocktv.com/dam/growth/assets/Campaign/P1/minions-and-monsters/minions-and-monsters-vert.jpg?downsize=3840%3A%2A&output-format=webp&output-quality=75",badge:"NEWLY ADDED"},{name:"Motu Patlu and the Mystery of Nagmani",image:"/kids-motu.jpg",badge:"NEW RELEASE"},{name:"Ainbo",image:"/kids-ainbo.jpg"},{name:"Minions: The Rise of Gru",image:"/movie-minions.jpg"},{name:"Doraemon",image:"/kids-doraemon.jpg"},{name:"Oggy and the Cockroaches",image:"/kids-oggy.jpg"},{name:"Jungle Tales with Mowgli",image:"/kids-mowgli.jpg"}];
const heroSlides = [{name:"Singapore Saloon",image:"/movie-saloon-hero.jpg",description:"Inspired by Sacha, Kathiravan dreams of becoming a hairstylist despite family opposition and social stigma. Can he overcome the odds?"},{name:"Aankh Micholi",image:aankh.image,description:"A family comes together for a celebration full of surprises."},{name:"Dulhaniya Le Aaeegi",image:dulhaniya.image,description:"A wedding brings new surprises, laughter and a little romance."}];
export default function MoviesPage(){
 const [active,setActive]=useState(0); const slide=heroSlides[active];
 return <main className="app-shell movies-shell"><Rail active="Movies"/><section className="content movies-content"><div className="movies-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(13,14,18,.95),rgba(13,14,18,.42) 50%,transparent),linear-gradient(0deg,#0d0e12,transparent 45%),url("${slide.image}")`}}><div className="movies-hero-copy"><h1>{slide.name}</h1><p className="movies-kicker">Newly Added</p><p className="movies-meta">2024 <span>•</span> U/A 13+ <span>•</span> 2h 4m <span>•</span> Hindi</p><p className="movies-description">{slide.description}</p><p className="movies-genres">Comedy <span>│</span> Drama <span>│</span> Family <span>│</span> Self-Realisation</p><div className="tv-actions"><button>▶ &nbsp; Watch Now</button><button aria-label="Add to watchlist">＋</button></div></div><div className="movies-hero-thumbnails">{heroSlides.map((item,index)=><button key={item.name} onClick={()=>setActive(index)} aria-label={`Show ${item.name}`} aria-pressed={active===index} style={{backgroundImage:`url("${item.image}")`}}/>)}</div></div>
 <TVRow title="Top 10 Movies - Hindi" items={top} ranked/><TVRow title="Freshly Landed" items={fresh}/><TVRow title="Best of Bollywood Movies" items={bollywood}/><TVRow title="Find Your Love Story" items={romance}/><TVRow title="Action Movies" items={action}/><TVRow title="The World of the Underworld" items={underworld}/><TVRow title="Timeless Classics" items={classics}/><TVRow title="Popular Kids Movies" items={kids}/><Footer/>
 </section></main>;
}
