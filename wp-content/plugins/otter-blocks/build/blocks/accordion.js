!function(){"use strict";var e;e=()=>{const e=document.querySelectorAll(".wp-block-themeisle-blocks-accordion");e.forEach((e=>{(e=>{e.classList.contains("exclusive")&&Array.from(e.children).forEach((t=>{t.addEventListener("click",(()=>{t.open||(Array.from(e.children).filter((e=>e.open)).forEach((e=>{e.removeAttribute("open")})),((e,t={})=>{if(!e)return;const n=e.getBoundingClientRect();0<=n.top&&0<=n.left&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)||e.scrollIntoView(t)})(t.querySelector(":scope > .wp-block-themeisle-blocks-accordion-item__title")))}))}))})(e),(e=>{if(!e.dataset.hasSchema||"false"===e.dataset.hasSchema)return;const t=[];Array.from(e.children).forEach((e=>{var n;const o=e.querySelector(":scope > .wp-block-themeisle-blocks-accordion-item__title > *"),c=null!==(n=o?.innerText)&&void 0!==n?n:o?.innerHTML?.replace(/<[^>]*>?/gm,""),i=e.querySelectorAll(":scope > .wp-block-themeisle-blocks-accordion-item__content :is(p, h1, h2, h3, h4, h5, h6)"),r=Array.from(i).map((e=>e.innerHTML)).join(" ");t.push({"@type":"Question",name:c,acceptedAnswer:{"@type":"Answer",text:r}})}));const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t},o=document.createElement("script");o.setAttribute("type","application/ld+json"),o.setAttribute("data-o-acc-id",e.id),o.textContent=JSON.stringify(n),document.head.appendChild(o)})(e)}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}();