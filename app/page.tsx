"use client";
import { useEffect, useRef, useState } from "react";
import Rail from "./components/Rail";
const posters: [string, string][] = [
	["Bigg Boss", "/bigg-boss-unseen.webp"],
	["Pune Highway", "/pune-highway-backdrop.jpg"],
	["Student of the Year: After Dark", "https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"],
	["Dulhaniya Le Aaeegi", "/popular-dulhaniya.jpg"],
	["Kesari Chapter 2", "/movie-kesari.jpg"],
	["Kabir Singh", "/movie-kabir.jpg"],
	["Saawariya", "/movie-saawariya.jpg"],
	["102 Not Out", "/movie-102.jpg"],
	["Jaws", "/movie-jaws.jpg"],
	["The Gilded Age", "/hbo-gilded.jpg"],
	["Mortal Kombat", "/hbo-kombat.jpg"],
	["Varam", "/specials-varam.jpg"],
	["The Legend of Hanuman", "/specials-hanuman.jpg"],
	["Pushpaka Vimanam", "/specials-pushpaka.jpg"],
	["Love Always", "/specials-love.jpg"],
];
const placeholderSlides = [
	{kicker:"New Release",title:"QUEEN",meta:"2026  •  U/A 13+  •  Hindi",text:"Love betrayed Neeti and an assault shattered her world. As fate leads her into a powerful political family, can she navigate this challenging new world?",image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=2000&q=92"},
	{kicker:"#8 in India Today  •  Newly Added",title:"I'M GAME",meta:"2026  •  U/A 16+  •  2h 51m  •  5 Languages",text:"Dan John, a wealthy gambler, lands in deep trouble after a reckless bet. Given a second chance in life, bizarre events turn his world upside down.",image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90"},
	{kicker:"Free For You",title:"HAR DIN TYOHAR",meta:"Feel-good stories for every day",text:"Now watch all your favourite TV shows, non-stop!",image:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2000&q=90"},
	{kicker:"Top 10 in India Today",title:"BIGG BOSS",meta:"2026  •  U/A 16+  •  Hindi",text:"Big personalities, bold opinions, and unexpected turns make every day inside the house unforgettable.",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=90"},
	{kicker:"New Episode",title:"THE RITUAL",meta:"2026  •  U/A 16+  •  Hindi",text:"A quiet town hides a long-buried secret, and one family is about to uncover it.",image:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=90"},
	{kicker:"Featured Series",title:"AFTER DARK",meta:"2026  •  U/A 13+  •  Hindi",text:"When the city goes quiet, a new mystery begins to unfold.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7454?auto=format&fit=crop&w=2000&q=90"},
	{kicker:"Featured Movie",title:"UNSPOKEN",meta:"2026  •  U/A 16+  •  Hindi",text:"A long-buried secret brings two strangers together on a journey that changes everything.",image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=85"},
	{kicker:"New Release",title:"CITY OF SHADOWS",meta:"2026  •  U/A 16+  •  Hindi",text:"A determined detective follows a trail of clues through a city that never sleeps.",image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=85"},
	{kicker:"Featured Movie",title:"A NEW DAWN",meta:"2026  •  U/A 13+  •  Hindi",text:"After a difficult year, one family finds a fresh start in an unexpected place.",image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=85"},
	{kicker:"New Release",title:"THE HEIST",meta:"2026  •  U/A 16+  •  Hindi",text:"A perfectly planned robbery takes a surprising turn when the crew reaches the vault.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85"},
	{kicker:"Featured Series",title:"MIDNIGHT RUN",meta:"2026  •  U/A 13+  •  Hindi",text:"One late-night journey leads to a discovery that changes the course of a small town.",image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"},
	{kicker:"Coming Soon",title:"THE LAST SIGNAL",meta:"2026  •  U/A 16+  •  Hindi",text:"A mysterious transmission sends a search team deep into the wilderness.",image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=2000&q=85"}
];
const slides = [
 {...placeholderSlides[0],image:"https://eksukoon.com/wp-content/uploads/2026/11/queen-colors-shagun-sharma-neeti-bride.webp"},
 {...placeholderSlides[1],image:"https://www.imgamemovie.com/assets/images/poster-1.jpg"},
 {...placeholderSlides[3],image:"/bigg-boss-unseen.webp"},
 {kicker:"Newly Added",title:"PUNE HIGHWAY",meta:"2025  •  A  •  2h 5m  •  Hindi",text:"Three childhood friends face a shocking twist when a body is found near a lake.",image:"/pune-highway-hero.jpg"},
 {kicker:"New Release",title:"STUDENT OF THE YEAR: AFTER DARK",meta:"Hindi  •  Drama",text:"Discover the drama of Student of the Year: After Dark.",image:"https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"},
 {kicker:"Newly Added",title:"SINGAPORE SALOON",meta:"2024  •  U/A 13+  •  Hindi",text:"Kathiravan dreams of becoming a hairstylist despite family opposition and social stigma.",image:"/movie-saloon-hero.jpg"},
];
const episodePosters: [string, string][] = [
	["BBHin Day 79: Clashes, Violation and Nominations", "https://artworks.thetvdb.com/banners/v4/season/2267004/posters/6aaf9a0d7d652.jpg"],
	["Maira Shares her Joy with Armaan", "/yeh-rishta.jpg"],
	["Anupama's Decision Stuns Everyone", "https://cdn.serialtwister.com/posts-images/what-happens-when-hope-meets-heartbreak-star-plus-anupamaas-next-move-will-surprise-you-1774252292.jpg"],
	["Cull-Tea!", "https://images.news18.com/ibnlive/uploads/2026/09/Roadies-rebirth-21-season-netflix-and-jiohotstar-mtv-release-date-ott-2026-09-74a7c89929220ff0efe2666cadb0c8a4-1200x675.jpg"],
	["Saumya Puts Marriage on Hold", "https://image.tmdb.org/t/p/w500/26anGsoVCiEbj2yOHSNGOBlR3mD.jpg"],
	["The Unexpected Guest", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b58e8538d5c8a62bdb5/images/PORTRAIT/1763361568652-v?o=production"],
];
const sportsPosters: [string, string][] = [
	["Sooryavanshi's Record-breaking Double Ton", "https://pbs.twimg.com/media/G5t0C1la4AA0sau?format=jpg&name=small"],
	["Pujara's Top 5 Picks of BGT", "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/2248/1724750882248-i"],
	["India vs China: Highlights", "https://asiahockey.org/wp-content/uploads/2024/11/ADIM33386-1024x762.jpg"],
	["Spirit of Cricket vs Winning at All Costs?", "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85"],
	["Andhra vs Pondicherry: Highlights", "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=85"],
	["More sports highlights", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85"],
];
const biggBossPosters: [string, string][] = [
	["BBS20: 24 HRS Channel [Deferred]", "https://artworks.thetvdb.com/banners/v4/season/2267004/posters/6aaf9a0d7d652.jpg"],
	["BBHin Day 79: Clashes, Violation and Nominations", "https://wd-image.webdunia.com/processimg/1200x628/webp/_media/hi/img/article/2026-09/12/thumb/16_9/1789194767-2372.jpg"],
	["BBS10: 24X7 Stream [Deferred]", "https://images.news18.com/telugu/uploads/2026/06/Bigg-boss-Telugu-2026-06-8fea7ba1cc6b56d9448a548a3e959ac4-1200x675.jpg"],
	["BBTel Day 79: Guests Conduct the Tasks", "https://www.deccanchronicle.com/h-upload/2026/09/02/2084150-nagarjuna-bigg-boss-telugu-set-for-premiere.jpg"],
	["BBS10: 24X7 Stream [Deferred]", "/bigg-boss-tamil.jpg"],
	["Bigg Boss: Unseen Moments", "/bigg-boss-unseen.webp"],
];
const travelPosters: [string,string][] = [
	["Mummy Goes International!", "/singapore-sameera.png"],
	["Work Se Kidnap, Holiday Pe Drop", posters[5][1]],
	["Family Mode: ON", "/singapore-holiday.jpg"],
	["Paisa Vasool, Papa!", posters[3][1]],
	["One Incredible Destination - Promo", posters[2][1]],
	["Four Times the Fun", "/singapore-sameera.png"],
];
const specialsPosters: [string,string][] = [
	["Mr & Mrs Office", "/specials-office.webp"],
	["Student of the Year: After Dark", "https://img.youtube.com/vi/_T4DA1H9U_w/maxresdefault.jpg"],
	["Pushpaka Vimanam", "/specials-pushpaka.jpg"],
	["Love Always", "/specials-love.jpg"],
	["The Legend of Hanuman", "/specials-hanuman.jpg"],
	["Varam", "/specials-varam.jpg"],
	["New Release", posters[4][1]],
];
const hboShows: [string,string][] = [
	["The Gilded Age", "/hbo-gilded.jpg"], ["Stuart Fails to Save the Universe", "/hbo-stuart.jpg"],
	["The Big Bang Theory", "/hbo-bigbang.jpg"], ["IT: Welcome to Derry", "/hbo-derry.jpg"],
	["A Star Is Born", "/hbo-star.jpg"], ["Mortal Kombat II", "/hbo-kombat.jpg"],
	["Godzilla", "/hbo-godzilla.jpg"], ["More HBO Max", "/hbo-bigbang.jpg"],
];
const comingPosters: [string,string][] = [
	["Supergirl", "/soon-supergirl.jpg"], ["Dhai Chaal", posters[3][1]],
	["Pitch to Get Rich", "/soon-pitch.jpg"], ["Only Murders in London", "/soon-murders.jpg"],
	["Dr. Hassan", posters[0][1]], ["Khela Hobe", posters[6][1]],
	["Kikidam", posters[4][1]], ["More Coming Soon", posters[1][1]],
];
const newsPosters: [string,string][] = [
	["News18 India", "/news-india-banner.jpg"], ["News18 MP Chhattisgarh", "/news-mp-banner.jpg"],
	["CNBC Awaaz", "/news-cnbc-banner.jpg"], ["News18 UP Uttarakhand", "/news-up-banner.jpg"],
	["News18 Bihar Jharkhand", "/news-bihar-banner.jpg"], ["News18 India", "/news-india-banner.jpg"],
];
const kidsPosters: [string,string][] = [["Doraemon", "/kids-doraemon.jpg"], ["Oggy and the Cockroaches", "/kids-oggy.jpg"], ["Jungle Tales with Mowgli", "/kids-mowgli.jpg"], ["Kung Fu Kings 3", "/kids-motu.jpg"], ["Ainbo", "/kids-ainbo.jpg"], ["Motu Patlu", "/kids-motu.jpg"], ["Motu Patlu: The Mystery of Nagmani", "/kids-motu.jpg"]];
const freeShows: [string, string][] = [
	["Bigg Boss", "https://artworks.thetvdb.com/banners/v4/season/2267004/posters/6aaf9a0d7d652.jpg"],
	["Yeh Rishta Kya Kehlata Hai", "/yeh-rishta.jpg"],
	["Anupamaa", "https://cdn.serialtwister.com/posts-images/what-happens-when-hope-meets-heartbreak-star-plus-anupamaas-next-move-will-surprise-you-1774252292.jpg"],
	["Yeh Fitoor Tera", "https://image.tmdb.org/t/p/w500/26anGsoVCiEbj2yOHSNGOBlR3mD.jpg"],
	["Dr. Aarambhi", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/6977c51626aec47e907a26bf/images/PORTRAIT/1779803225466-v?o=production"],
	["Sayoneee", "https://erp.adgully.com/artical_image/0ce6f7c59f4d437602717a0f14e946a7.jpeg"],
	["Bareilly Ke Bacchan", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/6a271ca2524ce2fcca0d5535/images/PORTRAIT/1776691923775-v?o=production"],
	["More to watch", posters[4][1]],
];
const newOnHotstar: [string, string][] = [
	["Mahabharat: Ek Dharmayudh", "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/9142/1775843409142-v"],
	["Dil Ki Bewafaiyaan", "https://businessupturn.com/uploads/media/1793695110979-qc7fq5-e5b371b0-2055-4ac7-89dc-52d63fa53dcf.webp"],
	["Pune Highway", "https://m.media-amazon.com/images/M/MV5BMDVjZGM5ZGQtMDUzOS00MDllLTgyZGItNjhlZmQyYjdkM2QyXkEyXkFqcGc%40._V1_.jpg"],
	["Dulhaniya Le Aaeegi", "https://cdn.district.in/movies-assets/images/cinema/_Poster%20%283%29-1ce6ce30-6fc3-11f1-a4f1-f909e462fa7a.jpg"],
	["Aankh Micholi", "https://m.media-amazon.com/images/M/MV5BOGU0MDJiOTgtYmU0OS00MmZkLWI3MDctNmY2NzMwOGVlZjgwXkEyXkFqcGc%40._V1_.jpg"],
	["Kisko Tha Pata", "https://simkl.in/fanart/19/19091681c7dbe218e8_mobile.jpg"],
	["Comedy Ke Sadaabahar Patakhe", posters[6][1]],
	["More to watch", posters[4][1]],
];
const topTenHindi: [string, string][] = [
	freeShows[0],
	["Dhamaal with Pati Patni Aur Panga", "https://img.airtel.tv/unsafe/fit-in/500x0/filters%3Aformat%28webp%29/https%3A/xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b58e8538d5c8a62bdb5/images/PORTRAIT/1763361568652-v?o=production"],
	["Roadies Rebirth", "https://images.news18.com/ibnlive/uploads/2026/09/Roadies-rebirth-21-season-netflix-and-jiohotstar-mtv-release-date-ott-2026-09-74a7c89929220ff0efe2666cadb0c8a4-1200x675.jpg"],
	newOnHotstar[0],
	["Student of the Year: After Dark", posters[2][1]],
	["Mayookha", "https://cdn.district.in/movies-assets/images/cinema/Horizontal-mayookha-569c68e0-2f56-11f1-ad1d-57b38e1e0106.jpg?im=Resize%2Cwidth%3D720"],
	freeShows[6],
	...freeShows.slice(1, 4),
];
const peacockShows: [string, string][] = [
	["Koffee with Karan", "https://images.herzindagi.info/image/2023/Nov/kwk-show-season-8.jpg"],
	["Suits", "https://image.tmdb.org/t/p/w500/nVz7cZZ59PsCLgiWFC0M0N6AFC3.jpg"],
	["Obsession", "https://assets-in.bmscdn.com/discovery-catalog/events/et00480914-jsmvsfrwka-landscape.jpg"],
	["Minions & Monsters", "https://www.peacocktv.com/dam/growth/assets/Campaign/P1/minions-and-monsters/minions-and-monsters-vert.jpg?downsize=3840%3A%2A&output-format=webp&output-quality=75"],
	["The Day of the Jackal", "https://www.elseptimoarte.net/carteles/the_day_of_the_jackal_103407.jpg"],
	["Fifty Shades of Grey", "https://i.ido.bi/assets/review/2015/02/fifty-shades-of-grey-FSG_Elevator1Sht_1110_2_rgb-1.jpg"],
	["Fast X", "https://static.titlovi.com/img/0317/317880-tt5433140.jpg"],
	["More to watch", posters[4][1]],
];
const exploreShows: [string, string][] = [
	peacockShows[2],
	["Oppenheimer", "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"],
	["Michael", "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc%40._V1_.jpg"],
	peacockShows[1], peacockShows[6],
	["The Fall Guy", "https://artofthemovies.co.uk/cdn/shop/files/fall_guy_may_style_teaser_EB27516_B.jpg?v=1723206447&width=1445"],
	peacockShows[5],
	["Five Nights at Freddy's", posters[7][1]],
];
const comedyShows: [string, string][] = [
	newOnHotstar[3],
	["102 Not Out", "https://movie.webindia123.com/movie/news/2018/Bollywood/April/102-NotOut.jpg"],
	newOnHotstar[4],
	["Kahan Shuru Kahan Khatam", "https://m.media-amazon.com/images/M/MV5BMmRlZTI2N2ItZjYyOS00NWRkLWE2ZGMtZDRhYTcwZWQwMGU0XkEyXkFqcGc%40._V1_.jpg"],
	["Jolly LLB 3", "https://assets.voxcinemas.com/posters/P_HO00012422_1755840627340.jpg"],
	["Welcome to the Jungle", "https://images.justwatch.com/poster/341224134/s718/welcome-to-the-jungle-2024.jpg"],
	["Jeena Dil Se", posters[5][1]],
	["More to watch", posters[6][1]],
];
const popularShows: [string,string][] = [
	["Chiranjeevi", "/popular-chiranjeevi.jpg"],
	["Dulhaniya Le Aaeegi", "/popular-dulhaniya.jpg"],
	["Oh! Sukumari", "/popular-sukumari.jpg"],
	["Maa Inti Bangaaram", "/popular-maa.jpg"],
	["Monster Island", "/popular-monster.jpg"],
	["Colony", "/popular-colony.webp"],
	["Koi... Mil Gaya", "/popular-koi.jpg"],
	["More Popular Movies", posters[4][1]],
];
const bollywoodShows: [string, string][] = [
	["Singham Returns", "https://images.indianexpress.com/2014/07/singhamreturns-1.jpg"],
	["Baabul", "https://images.moviebuff.com/7e854612-9483-4cb2-a352-0de9ea088fa4?w=1000"],
	["Zara Hatke Zara Bachke", "https://media.senscritique.com/media/000021365177/0/zara_hatke_zara_bachke.jpg"],
	["Kesari Chapter 2", "https://britasia.tv/wp-content/uploads/2025/04/Neville-Mckinley-Poster-1.jpg"],
	["Badhaai Ho", "https://m.media-amazon.com/images/M/MV5BNjk5NjcyZTItMzE4OC00OWY5LWJmMTUtNzZjNmMwODFkNjkxXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"],
	["Hum Do Hamare Do", "https://m.media-amazon.com/images/M/MV5BNjNlNmZlMmQtNTAxMy00Yjc3LWE2YTMtYmY4ZDU0MmZlMDRmXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"],
	["Govinda Naam Mera", "https://m.media-amazon.com/images/M/MV5BNGQ1NjYxYjYtZmFlYS00MzRlLWFhMGUtMzRhZTkzN2VlM2JhXkEyXkFqcGc%40._V1_.jpg"],
	["More Bollywood Movies", posters[9][1]],
];
const lovedShows: [string, string][] = [
	freeShows[6],
	["Brothers and Sisters", "https://image.tmdb.org/t/p/w1280/dUmJyNe5UT301KwVWrxctpP2sqU.jpg"],
	["Part-Timers", "https://image.tmdb.org/t/p/w1280/7JAvG06DB9UMw6TXDUwuLomTgDu.jpg"],
	["Laughter Chefs", "https://myjiostatic.cdn.jio.com/cms/assets/ott/disneyhotstar/banner-mastercheif-desktop.webp"],
	["Resort", "https://img.hotstar.com/image/upload/f_auto%2Ct_vl/sources/r1/cms/prod/2509/1773380602509-v"],
	["Dhurandhar: The Revenge", "/dhurandhar-revenge.jpg"],
	["108 Base Hospital Uri", "https://www.acmodasi.com.ua/amdb/images/tv/w1280/32/88/108-base-hospital-uri-2026-1548717.webp"],
	["More to watch", posters[9][1]],
];
export default function Home() {
	const [active, setActive] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const heroStageRef = useRef<HTMLDivElement>(null);
	const slide = slides[active];
	const thumbnailStart = Math.floor(active / 5) * 5;
	const visibleSlides = Array.from(
		{ length: Math.min(5, slides.length) },
		(_, index) => slides[(thumbnailStart + index) % slides.length],
	);

	useEffect(() => {
		const timer = setInterval(() => setActive((current) => (current + 1) % slides.length), 7000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const stage = heroStageRef.current;
		if (!stage) return;
		const appShell = stage.closest<HTMLElement>(".app-shell");

		let animationFrame = 0;
		const updateScrollEffect = () => {
			cancelAnimationFrame(animationFrame);
			animationFrame = requestAnimationFrame(() => {
				const stageTop = stage.getBoundingClientRect().top + window.scrollY;
				const scrollDistance = Math.max(1, window.innerHeight * 0.35);
				const scrollOffset = Math.max(0, Math.min(window.scrollY - stageTop, scrollDistance));
				const progress = scrollOffset / scrollDistance;
				const heroHeight = stage.querySelector(".hero")?.getBoundingClientRect().height || window.innerHeight;
				const copyTop = 48 - (scrollOffset / heroHeight) * 100;
				const hero = stage.querySelector<HTMLElement>(".hero");
				const watch = stage.querySelector<HTMLElement>(".watch");
				const thumbnails = stage.querySelector<HTMLElement>(".hero-thumbnails");
				stage.style.setProperty("--hero-progress", String(progress));
				stage.style.setProperty("--hero-copy-top", `${copyTop}%`);
				appShell?.style.setProperty("--hero-progress", String(progress));
				appShell?.style.setProperty("--hero-background-cover", `${Math.max(0, stageTop - window.scrollY)}px`);
				if (hero && watch && thumbnails) {
					const heroTop = hero.getBoundingClientRect().top;
					const watchRect = watch.getBoundingClientRect();
					const watchHeight = watchRect.height;
					hero.style.setProperty("--hero-control-height", `${watchHeight}px`);
					const thumbnailHeight = thumbnails.getBoundingClientRect().height;
					const thumbnailTop = watchRect.top - heroTop + (watchHeight - thumbnailHeight) / 2;
					hero.style.setProperty("--hero-thumbnails-top", `${thumbnailTop}px`);
				}
			});
		};

		updateScrollEffect();
		window.addEventListener("scroll", updateScrollEffect, { passive: true });
		window.addEventListener("resize", updateScrollEffect);
		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("scroll", updateScrollEffect);
			window.removeEventListener("resize", updateScrollEffect);
		};
	}, [active]);

	return (
		<main className="app-shell" style={{ "--hero": `url(${slide.image})` } as React.CSSProperties}>
			<Rail active="Home" />
			<section className="content">
				<div className="announcement">
					<div className="announcement-art" aria-hidden="true" />
					<div className="announcement-copy">
						<div className="announcement-heading">
							<span className="spark"><img src="/brand-star.svg" alt="" /></span>
							<div><b>Dr. Hassan</b><span>Out on December 11</span></div>
						</div>
						<p>Rare illnesses turn messy when a rogue genius leads this medical drama.</p>
						<button>Teaser</button>
					</div>
				</div>
				<div className="hero-stage" ref={heroStageRef}>
					<section className="hero" style={{ "--hero": `url(${slide.image})` } as React.CSSProperties}>
						<div className="hero-copy">
							<h1>{slide.title}</h1>
							<p className="kicker">{slide.kicker}</p>
							<p className="meta">{slide.meta}</p>
							<p className="description">{slide.text}</p>
							<p className="genres">Action&nbsp; | &nbsp;Thriller&nbsp; | &nbsp;Drama&nbsp; | &nbsp;Chase</p>
							<div className="actions">
								<button className="watch">▶ &nbsp; Watch Now</button>
								<button className="add">＋</button>
							</div>
						</div>
						<button
							className="hero-mute"
							type="button"
							aria-label={isMuted ? "Unmute preview" : "Mute preview"}
							aria-pressed={isMuted}
							onClick={() => setIsMuted((value) => !value)}
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M11 5 6 9H3v6h3l5 4V5Z" />
								<path d="M15 9a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12" />
								{isMuted && <path d="M22 3 3 22" />}
							</svg>
						</button>
						<div className="hero-thumbnails" aria-label="Featured titles">
							{thumbnailStart > 0 && (
								<button
									className="hero-thumbnails-prev"
									type="button"
									aria-label="Show previous featured titles"
									onClick={() => setActive(Math.max(0, thumbnailStart - 5))}
								>
									<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg>
								</button>
							)}
							{visibleSlides.map((item, index) => {
								const slideIndex = (thumbnailStart + index) % slides.length;
								return (
									<button
										key={item.title}
										type="button"
										onClick={() => setActive(slideIndex)}
										className={active === slideIndex ? "active" : ""}
										aria-label={`Play ${item.title}`}
										style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.24), rgba(0,0,0,.24)), url(${item.image})` }}
									/>
								);
							})}
							<button
								className="hero-thumbnails-next"
								type="button"
								aria-label="Show more featured titles"
								onClick={() => setActive(thumbnailStart + 5 >= slides.length ? 0 : thumbnailStart + 5)}
							>
								<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
							</button>
						</div>
						<div className="dots">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => setActive(index)}
									className={active === index ? "on" : ""}
									aria-label={`Show slide ${index + 1}`}
								/>
							))}
						</div>
					</section>
				</div>
				<PosterRow title="New on JioHotstar" items={newOnHotstar} referencePosters />
				<section className="free-section">
					<div className="free-banner">
						<div className="free-banner-copy">
							<b>Free For You</b><span>Now watch all your favourite TV shows, non-stop!</span>
						</div>
						<div className="free-banner-brand">
							<strong>HAR DIN<br /><b>TYOHAAR</b></strong>
							<span className="free-banner-on">ON</span>
							<img src="/brand-star.svg" alt="" />
							<span className="free-banner-wordmark">JioHotstar</span>
						</div>
						<button className="free-banner-view-all">View All ›</button>
					</div>
					<PosterRow title="Free For You" showHeading={false} items={freeShows} />
				</section>
				<PosterRow title="Top 10 in India Today - Hindi" items={topTenHindi} ranked referencePosters />
				<PosterRow title="Peacock's Finest" items={peacockShows} referencePosters peacock />
				<PosterRow title="Hahaha Loading..." items={comedyShows} referencePosters comedy />
				<PosterRow title="Non-Stop Sports" items={sportsPosters} variant="sports" />
				<PosterRow title="Enter the Bigg Boss House" items={biggBossPosters} variant="bigg" />
				<section className="explore-peacock">
					<div className="peacock-collage" aria-hidden="true">{[...exploreShows, ...peacockShows, ...exploreShows].map(([name, image], index) => <span key={`${name}-${index}`} style={{backgroundImage:`url(${image})`}} />)}<div className="peacock-brands"><strong><small>THE</small>peacock<span className="peacock-dots"><i/><i/><i/><i/><i/><i/></span><small>HUB</small></strong><div><img src="/brand-star.svg" alt="" /><span>JioHotstar</span></div></div></div>
					<div className="peacock-heading"><b>Explore Peacock</b><span>Entertainment ka Roz ka Dose!</span></div>
					<button className="peacock-view-all">View All ›</button>
					<PosterRow title="Explore Peacock" items={exploreShows} referencePosters showHeading={false} explore />
				</section>
				<PosterRow title="Best of Bollywood Movies" items={bollywoodShows} referencePosters />
				<PosterRow title="Latest TV Episodes" items={episodePosters} variant="episodes" />
				<PosterRow title="Fully Watched, Fully Loved" items={lovedShows} referencePosters loved />
				<PosterRow title="Singapore, Four Times the Fun!" items={travelPosters} variant="travel" />
				<PosterRow title="Popular Movies" items={popularShows} referencePosters popular />
				<PosterRow title="Hotstar Specials" items={specialsPosters} referencePosters specials />
				<section className="studios-shelf" aria-label="Studios">
					<header><h2>Studios</h2><button type="button">View All ›</button></header>
					<div className="studios-list">
						<button type="button" aria-label="Hotstar Specials"><span className="studio-hotstar">hotstar<strong>specials</strong></span></button>
						<button type="button" aria-label="Disney Plus"><img className="studio-disney" src="/studio-disney.png" alt="" /></button>
						<button type="button" aria-label="HBO Max"><span className="studio-hbo">HBO<br /><span>max</span></span></button>
						<button type="button" aria-label="Peacock"><img className="studio-peacock" src="/studio-peacock.png" alt="" /></button>
						<button type="button" aria-label="Paramount Plus"><img className="studio-paramount-logo" src="/paramount-plus.svg" alt="" /></button>
					</div>
				</section>
				<PosterRow title="HBO Max Is Here" items={hboShows} referencePosters hbo />
				<PosterRow title="Coming Soon" items={comingPosters} referencePosters />
				<PosterRow title="Live News" items={newsPosters} variant="news" />
				<section className="tile-shelf language-shelf">
					<h2>Popular Languages</h2>
					<div>
						{[["हिन्दी", "Hindi", "#30366c", "/language-hindi.jpg"], ["English", "English", "#603d32", "/language-english.jpg"], ["தமிழ்", "Tamil", "#684034", "/language-tamil.jpg"], ["తెలుగు", "Telugu", "#393645", "/language-telugu.jpg"], ["ಕನ್ನಡ", "Kannada", "#8a1c2c", "/language-kannada.jpg"], ["മലയാളം", "Malayalam", "#594061", "/language-tamil.jpg"]].map(([native, name, color, image]) => (
							<article key={name} style={{ backgroundColor: color, backgroundImage: `linear-gradient(90deg, ${color} 22%, transparent 110%), url(${image})` }}><b>{native}</b>{native !== name && <span>{name}</span>}</article>
						))}
					</div>
				</section>
				<section className="tile-shelf genre-shelf">
					<header><h2>Popular Genres</h2><button>View All ›</button></header>
					<div>
						{[["Romance", "#ad5e68", "/genre-romance.jpg"], ["Drama", "#408181", "/yeh-rishta.jpg"], ["Family", "#695e38", "/popular-dulhaniya.jpg"], ["Reality", "#296277", "/bigg-boss-unseen.webp"], ["Comedy", "#19546a", "/specials-office.webp"], ["Mythology", "#583b65", "/specials-hanuman.jpg"]].map(([name, color, image]) => (
							<article key={name} style={{ backgroundColor: color, backgroundImage: `linear-gradient(90deg, ${color}f2 5%, ${color}b0 100%), url(${image})` }}><b>{name}</b></article>
						))}
					</div>
				</section>
				<section className="tile-shelf channel-shelf">
					<h2>Popular Channels</h2>
					<div>
						{[["StarPlus", "#291c2c", "/channel-official-plus.png"], ["Colors", "#2f2036", "/channel-official-colors.png"], ["Vijay", "#3c211a", "/channel-official-vijay.png"], ["Star Maa", "#342021", "/channel-official-maa.png"], ["Star Pravah", "#252641", "/channel-official-pravah.png"], ["Asianet", "#342021", ""]].map(([name, color, image]) => (
							<article key={name} style={{ backgroundColor: color }} aria-label={name}>{image ? <><img className={name === "Colors" ? "channel-colors-logo" : undefined} src={image} alt={name} />{name === "StarPlus" && <small className="channel-tagline">रिश्ता वही, बात नई</small>}</> : <div className="channel-brand"><span className="channel-star">★</span><b>{name}</b></div>}</article>
						))}
					</div>
				</section>
				<PosterRow title="Popular in Kids" items={kidsPosters} referencePosters kids />
				<footer className="site-footer">
					<div><b>Company</b><a href="https://www.jiostar.com/">About Us</a><a href="https://www.jiostar.com/careers/">Careers</a><small>© 2026 STAR. All Rights Reserved.<br /><a href="https://www.hotstar.com/in/terms-of-use">Terms Of Use</a>　<a href="https://www.hotstar.com/in/privacy-policy">Privacy Policy</a>　<a href="https://help.hotstar.com/">FAQ</a></small></div>
					<div><b>View Website in</b><span>✓　English</span></div>
					<div><b>Need Help?</b><a href="https://help.hotstar.com/">Visit Help Center</a><a href="https://help.hotstar.com/">Share Feedback</a></div>
					<div><b>Connect with Us</b><span className="socials"><a href="https://www.facebook.com/JioHotstar/" aria-label="Facebook">f</a><a href="https://x.com/JioHotstar" aria-label="X">𝕏</a></span><div className="store-badges"><a href="https://play.google.com/store/apps/details?id=in.startv.hotstar"><img src="/google-play-badge.svg" alt="Get it on Google Play" /></a><a href="https://apps.apple.com/in/app/jiohotstar/id934459219"><img src="/app-store-rectangular.svg" alt="Download on the App Store" /></a></div></div>
				</footer>
			</section>
		</main>
	);
}
function PosterRow({title,ranked=false,showHeading=true,items=posters,variant="",referencePosters=false,peacock=false,comedy=false,explore=false,loved=false,popular=false,specials=false,hbo=false,kids=false}:{title:string;ranked?:boolean;showHeading?:boolean;items?:[string,string][];variant?:string;referencePosters?:boolean;peacock?:boolean;comedy?:boolean;explore?:boolean;loved?:boolean;popular?:boolean;specials?:boolean;hbo?:boolean;kids?:boolean}){
	const [hovered,setHovered]=useState<null|{name:string;image:string;left:number;top:number}>(null);
	const openPreview=(event:React.SyntheticEvent<HTMLElement>,name:string,image:string)=>{
		const rect=event.currentTarget.getBoundingClientRect();
		const row=event.currentTarget.closest(".row") as HTMLElement;
		const rowRect=row.getBoundingClientRect();
		const width=Math.min(320,window.innerWidth-24);
		const height=Math.min(window.matchMedia("(max-width: 850px)").matches ? 360 : 380,window.innerHeight-24);
		const left=Math.max(12,Math.min(rect.left+rect.width/2-width/2-rowRect.left,rowRect.width-width-12));
		setHovered({name,image,left,top:rect.top-rowRect.top-(height-rect.height)/2});
	};
	return (
		<section id={variant === "news" ? "live-news" : undefined} className={`row ${variant} ${variant === "" ? "movie-shelf" : ""}${referencePosters ? " reference-posters" : ""}${specials ? " specials-shelf" : ""}${hovered?" preview-open":""}`} onMouseLeave={()=>setHovered(null)}>
			<header>{showHeading&&<h2>{title}</h2>}<button>View All ›</button></header>
			<div className={ranked?"posters ranked":"posters"} role="region" aria-label={`${title} titles`} tabIndex={0}>
				{items.map(([name,image],index)=><article className="poster" key={`${name}-${index}`} data-movie-title={name} data-movie-image={image} tabIndex={0} onMouseEnter={event=>openPreview(event,name,image)} onFocus={event=>openPreview(event,name,image)} style={{backgroundImage:variant === "news" ? `linear-gradient(0deg, rgba(5,6,10,.65), transparent 40%), url(${image})` : referencePosters ? `url(${image})` : `linear-gradient(0deg, rgba(5,6,10,.82), transparent 55%), url(${image})`}}>
					{variant==="episodes"&&<span className="episode-play">▶</span>}
					{variant==="episodes"&&<span className="episode-duration">{["1h 10m", "28m", "27m", "1h 55m", "30m", "45m"][index%6]}</span>}
					{variant==="sports"&&<><span className={`sports-label sports-label-${index}`}>{["THE VAIBHAV SHOW, INDIA A INTO SEMIS", "PUJARA'S PICKS\nTOP 5 KNOCKS\nIND vs AUS", "HIGHLIGHTS\nIND 6\nCHN 2", "SANDPAPERGATE\nTHE UNSETTLED DEBATE", "HIGHLIGHTS\nANDHRA vs PONDICHERRY", "HIGHLIGHTS"][index%6]}</span><span className="sports-play">▶</span><span className="sports-duration">{["5m", "15m", "12m", "6m", "12m", "8m"][index%6]}</span></>}
					{variant==="bigg"&&<><span className="sports-play">▶</span><span className={`sports-duration ${index%2===0 ? "live" : ""}`}>{index%2===0 ? "● LIVE" : index===1 ? "1h 10m" : "1h 7m"}</span></>}
					{variant==="travel"&&<><span className="sports-play">▶</span><span className="sports-duration">{["33m","33m","34m","33m","19s","33m"][index%6]}</span></>}
					{variant==="news"&&<><span className="sports-play">▶</span><span className="sports-duration live">● LIVE</span></>}
					{variant==="news" && index > 0 && index < 5 && <img className={`news-logo news-logo-${index}`} src={["", "/news-mp.png", "/news-cnbc.png", "/news-up.png", "/news-bihar.png"][index]} alt="" />}
					{ranked&&<i>{index+1}</i>}
					{!referencePosters && <b>{name}</b>}
					{variant==="episodes"&&<small>{["S20 E80 • 24 Nov","S68 E2215 • 25 Nov","S1 E2213 • 25 Nov","S21 E12 • 21 Nov","S1 E111 • 25 Nov","S2 E14 • 25 Nov"][index%6]}</small>}
					{variant!=="episodes"&&variant!=="sports"&&variant!=="bigg"&&variant!=="travel"&&variant!=="news"&&!referencePosters&&<span className="badge">FREE FOR YOU</span>}
					{peacock && (index === 0 || index === 2 || index === 3) && <span className="peacock-badge">{index === 0 ? "NEW EPISODE WED" : "NEWLY ADDED"}</span>}
					{comedy && index < 3 && <span className="peacock-badge">NEWLY ADDED</span>}
					{explore && index === 0 && <span className="peacock-badge">NEWLY ADDED</span>}
					{loved && [0,1,2,3,5,6].includes(index) && <span className={index === 1 || index === 2 ? "peacock-badge" : "badge"}>{["FREE FOR YOU","ALL EPISODES OUT","NEW EPISODES FRI","FREE FOR YOU","","RAW & UNDEKHA","FREE FOR YOU"][index]}</span>}
					{popular && [0,1,2,3,6].includes(index) && <span className={index === 3 ? "badge" : "peacock-badge"}>{index === 3 ? "NOW IN HINDI" : "NEWLY ADDED"}</span>}
					{specials && [0,1,2,3,5].includes(index) && <span className="peacock-badge">{index === 0 ? "NEW EPISODES WED" : index === 5 ? "ALL EPISODES OUT" : "NEW RELEASE"}</span>}
					{hbo && <span className="hbo-corner">HBO<br/>max</span>}
					{hbo && (index === 0 || index === 3) && <span className="peacock-badge">{index === 0 ? "NEW SEASON" : "NEW RELEASE"}</span>}
					{kids && [1,2,6].includes(index) && <span className={index === 2 ? "badge" : "peacock-badge"}>{index === 1 ? "NEW SEASON" : index === 2 ? "NEW EPISODES" : "NEW RELEASE"}</span>}
				</article>)}
			</div>
			{hovered&&<div key={`${hovered.name}-${hovered.image}`} className="poster-preview" data-movie-title={hovered.name} data-movie-image={hovered.image} style={{left:hovered.left,top:hovered.top}} aria-hidden="true"><div className="poster-preview-art" style={{backgroundImage:`linear-gradient(0deg, rgba(5,6,10,.38), transparent 70%), url(${hovered.image})`}}/><div className="poster-preview-info"><strong>{hovered.name}</strong><div className="poster-preview-actions"><span>▶ &nbsp; Watch Now</span><span>＋</span></div><small>Featured on StreamFlix</small></div></div>}
		</section>
	);
}
