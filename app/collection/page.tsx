"use client";
import {useEffect,useState} from "react";
import Rail from "../components/Rail";
import Footer from "../components/Footer";
import type {CollectionItem} from "../components/collection";

type Collection={title:string;items:CollectionItem[];selectedCount:number};
export default function CollectionPage(){
 const [collection,setCollection]=useState<Collection|null>(null);
 useEffect(()=>{const title=new URLSearchParams(window.location.search).get("title")||"Explore";try{const saved=sessionStorage.getItem(`collection:${title}`);if(saved){setCollection(JSON.parse(saved));return}}catch{}setCollection({title,items:[],selectedCount:0})},[]);
 const cards=(items:CollectionItem[])=><div className="collection-grid">{items.map(item=><article key={item.title} className="collection-card" data-movie-title={item.title} data-movie-image={item.image} tabIndex={0} role="button" aria-label={`View ${item.title}`} style={{backgroundImage:`url(${JSON.stringify(item.image)})`}}/>)}</div>;
 return <main className="app-shell collection-shell"><Rail active=""/><div className="content collection-content"><h1>{collection?.title||"Explore"}</h1>{collection&&<>{cards(collection.items)}{!collection.items.length&&<p className="collection-empty">Return to a collection and select View All to browse its titles.</p>}</>}<Footer/></div></main>;
}
