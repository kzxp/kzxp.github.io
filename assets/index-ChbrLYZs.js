const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BK0R_Qzr.js","assets/app-6KTj_4me.js","assets/app-mTITBDJJ.css","assets/server.browser-C7pjFr_i.js"])))=>i.map(i=>d[i]);
import{_ as c,p as l,r as i,j as a,u}from"./app-6KTj_4me.js";const m=async()=>l,p=async e=>{const t=await m(),{evaluate:r}=await c(async()=>{const{evaluate:n}=await import("./index-BK0R_Qzr.js");return{evaluate:n}},__vite__mapDeps([0,1,2]));return r(e,{...t,development:!1})},d=async()=>(await fetch("https://kzxp.github.io/challenges-lol/readme.json")).json(),g=async e=>{const r=await(await fetch(e)).text();return await p(r)},h=({src:e,baseUrl:t,...r})=>{const n=i.useMemo(()=>!t||!e?"":`https://raw.githubusercontent.com${new URL([t,e.replace("./","")].join("/")).pathname}`.replace("/tree/","/refs/heads/"),[e,t]);return n?a.jsx("img",{...r,src:n}):null},f=({href:e,...t})=>a.jsx("a",{...t,href:e,target:"_blank",rel:"noopener noreferrer"}),s={img:h,a:f},w=({content:e,baseUrl:t})=>{const r=i.useMemo(()=>({...s,img:n=>a.jsx(s.img,{...n,baseUrl:t})}),[t]);return(e==null?void 0:e.default)&&a.jsxs("article",{className:"prose max-w-none shadow-lg p-4 max-h-[768px] overflow-y-auto",children:[a.jsx("p",{className:"float-right",children:a.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"Link to repo"})}),a.jsx(e.default,{components:r,baseUrl:t})]})},x=()=>{const e=u();return a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",dangerouslySetInnerHTML:{__html:e}})},j=x;async function y(){const e=await d(),t=await Promise.all(e.map(async n=>{const o=await g(n.readmeUrl);return{...n,content:o}})),{renderToString:r}=await c(async()=>{const{renderToString:n}=await import("./server.browser-C7pjFr_i.js").then(o=>o.s);return{renderToString:n}},__vite__mapDeps([3,1,2]));return r(t.map((n,o)=>a.jsx(w,{content:n.content,baseUrl:n.directoryUrl},o)))}export{j as Component,x as default,y as loader};
