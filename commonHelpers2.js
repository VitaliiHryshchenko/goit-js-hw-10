import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",c);function c(r){r.preventDefault();const t={};new FormData(r.target).forEach((e,o)=>{t[o]=e});const s=t.delay,a=t.state;new Promise((e,o)=>{setTimeout(()=>{a==="fulfilled"?e(s):o(s)},s)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
