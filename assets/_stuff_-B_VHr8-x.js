const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/server.browser-DPpZefWF.js","assets/app-Dkx5B0vx.js","assets/app-DHaJ2QOZ.css"])))=>i.map(i=>d[i]);
import{u as l,j as t,N as c,L as i,_ as f}from"./app-Dkx5B0vx.js";import{f as u,a as d,b as m}from"./content-CQb2GgjV.js";const h=()=>{const e=l();return e?t.jsxs("div",{className:"flex flex-wrap",children:[t.jsx("div",{className:"mr-8 p-8 pl-0",children:t.jsx(i,{className:"text-[#273c75] text-xl font-bold p-4",to:"/stuffs",children:"< Back"})}),t.jsx("div",{className:"flex-1",dangerouslySetInnerHTML:{__html:e}})]}):t.jsx(c,{to:"/stuffs"})},p=h;async function _({params:e}){const n=await u(),{renderToString:o}=await f(async()=>{const{renderToString:s}=await import("./server.browser-DPpZefWF.js").then(r=>r.s);return{renderToString:s}},__vite__mapDeps([0,1,2])),a=n.find(s=>s.name===e.id)||null;return a?o(t.jsx(d,{content:a.content,baseUrl:a.directoryUrl})):null}async function C(){return(await m()).map(n=>n.name)}export{p as Component,h as default,C as getStaticPaths,_ as loader};
