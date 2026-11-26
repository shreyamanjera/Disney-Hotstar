export type CollectionItem = {title:string;image:string};
export function openCollectionFromClick(event:MouseEvent) {
 const target=event.target;
 if(!(target instanceof Element))return;
 const button=target.closest<HTMLButtonElement>("button");
 if(!button || !/^view\s+(all|more)\b/i.test(button.textContent?.trim()||""))return;
 const section=button.closest<HTMLElement>("section");
 if(!section)return;
 const title=section.querySelector("h2")?.textContent?.trim() || section.querySelector(".free-banner-copy b, .peacock-heading b")?.textContent?.trim() || section.querySelector<HTMLElement>("[role=region]")?.getAttribute("aria-label")?.replace(/ titles$/,"") || "Explore";
 const unique=new Map<string,CollectionItem>();
 const collect=(root:ParentNode)=>root.querySelectorAll<HTMLElement>("article[data-movie-title][data-movie-image]").forEach(card=>{const name=card.dataset.movieTitle,image=card.dataset.movieImage;if(name&&image&&!unique.has(name))unique.set(name,{title:name,image})});
 collect(section);const selectedCount=unique.size;collect(document);
 const data={title,items:Array.from(unique.values()),selectedCount};
 try{sessionStorage.setItem(`collection:${title}`,JSON.stringify(data))}catch{}
 event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
 window.location.href=`/collection?title=${encodeURIComponent(title)}`;
}
