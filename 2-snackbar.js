import"./assets/styles-BouUqQzi.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const r=s.delay.value,i=s.state.value;m(r,i).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})}),s.reset()});function m(e,r){return new Promise((i,t)=>{setTimeout(()=>{r==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
