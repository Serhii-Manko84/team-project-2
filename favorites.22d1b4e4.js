function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("2shzp"),i=r("QG6gt");var s=e(r("1Gatq")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite cocktails</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite cocktails yet</p>\n\t</div>\n</section>'},useData:!0}),a=r("8EZAg"),c=r("aN9pz"),d=r("eT0hc"),u=r("iZbkS");const y={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),formEl:document.querySelector(".header-form"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};y.favoriteHeaderWrapper.style.display="none",y.siteFavoriteHeaderWrapper.addEventListener("mouseover",(()=>{y.favoriteHeaderWrapper.style.display="block"})),y.siteFavoriteHeaderWrapper.addEventListener("mouseout",(()=>{y.favoriteHeaderWrapper.style.display="none"}));const m=document.querySelector(".div-icon-heart1"),f=document.querySelector(".div-icon-heart2"),g=document.querySelector(".div-icon-close"),p=m.href.baseVal,S=f.href.baseVal,v=g.href.baseVal;y.mobileFavorite.addEventListener("click",(()=>{y.mobileFavorites.classList.toggle("hide-show"),y.iconArrow.classList.toggle("rotate180")}));const b=e=>l.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`);let h;h=null===JSON.parse(localStorage.getItem("ingridients"))?[]:JSON.parse(localStorage.getItem("ingridients")),y.cardsCaption.style.display="none",window.addEventListener("load",(function(){if(k&&0!==k.length){const e=(0,i.default)(k);y.cardsCaption.style.display="block",y.cardsContainerEl.innerHTML=e;const t=document.querySelectorAll(".card-btn__add");for(let e of t)e.style.display="none";L()}else y.cardsContainerEl.innerHTML=s()})),y.cardsContainerEl.addEventListener("click",(function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){k=k.filter((e=>e.idDrink!==t.id)),localStorage.setItem("favorites",JSON.stringify(k));t.children[2].children[2].style.display="none";t.children[2].children[1].style.display="block";const e=(0,i.default)(k);y.cardsContainerEl.innerHTML=e,L();const n=document.querySelectorAll(".card-btn__add");for(let e of n)e.style.display="none";if(0===k.length)return y.cardsCaption.style.display="none",void(y.cardsContainerEl.innerHTML=s())}})),y.cardsContainerEl.addEventListener("click",(async function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__learn")){const e=t.children[1].textContent,{data:o}=await(n=e,l.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`)),r={...o.drinks[0]},m=[];for(let e in r)e.includes("strIngredient")&&null!==r[e]&&m.push(r[e]);r.ingridients=m;const f=[{...r}];if(window.innerWidth>768){q.innerHTML=(0,c.default)(f),document.querySelector(".cocktail-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent,n=await b(t),o=[{...n.data.ingredients[0]}];y.modalIngr.innerHTML=(0,d.default)(o),document.querySelector(".ingr-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden");document.querySelector(".ingr-icon-close").addEventListener("click",(()=>{r.classList.add("is-hidden"),document.body.style.overflow="hidden"}));const l=document.querySelector(".tablet-desktop-ingr-modal").children[0].textContent,i=JSON.parse(localStorage.getItem("ingridients"));if(null!==i&&i.length)for(let e of i){if(e.strIngredient===l){const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="none",t.style.display="block";break}{const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="block",t.style.display="none"}}else{const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="block",t.style.display="none"}const s=document.querySelector(".ingr-btn__remove"),a=document.querySelector(".ingr-btn__add");a.addEventListener("click",(()=>{h.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(h)),a.style.display="none",s.style.display="block"})),s.addEventListener("click",(()=>{h=h.filter((e=>e.strIngredient!==l)),localStorage.setItem("ingridients",JSON.stringify(h)),s.style.display="none",a.style.display="block"}))}}));const e=document.querySelector(".backdrop");e.classList.remove("is-hidden"),document.body.style.overflow="hidden";const t=document.querySelector(".tablet-btn-add"),n=document.querySelector(".tablet-btn-remove");t.style.display="none",t.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("favorites"));e.push(o.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),n.style.display="block",t.style.display="none",y.cardsContainerEl.innerHTML=(0,i.default)(e),L();const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none"})),n.addEventListener("click",(e=>{let o=JSON.parse(localStorage.getItem("favorites"));o=o.filter((t=>t.idDrink!==e.target.id)),localStorage.setItem("favorites",JSON.stringify(o)),n.style.display="none",t.style.display="block",y.cardsContainerEl.innerHTML=(0,i.default)(o),L();const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none";o.length||(y.cardsContainerEl.innerHTML=s())})),e.addEventListener("click",(t=>{t.target.classList.contains("backdrop")&&(e.classList.add("is-hidden"),document.body.style.overflow="auto")}));document.querySelector(".cocktail-icon-close").addEventListener("click",(()=>{e.classList.add("is-hidden"),document.body.style.overflow="auto"}))}else if(window.innerWidth<768){q.innerHTML=(0,a.default)(f),document.querySelector(".mobile-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const e=document.querySelector(".coctail");document.body.style.overflow="hidden";document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent,n=await b(t),o=[{...n.data.ingredients[0]}];y.modalIngr.innerHTML=(0,u.default)(o),document.querySelector(".mobile-ingr-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden"),document.body.style.overflow="hidden";document.querySelector(".ingr-icon-close").addEventListener("click",(()=>{r.classList.add("is-hidden"),document.body.style.overflow="hidden"}));const l=document.querySelector(".mobile-modal-container").children[0].textContent,i=JSON.parse(localStorage.getItem("ingridients"));if(null!==i&&i.length)for(let e of i){if(e.strIngredient===l){const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="none",t.style.display="block";break}{const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="block",t.style.display="none"}}else{const e=document.querySelector(".ingr-btn__add"),t=document.querySelector(".ingr-btn__remove");e.style.display="block",t.style.display="none"}const s=document.querySelector(".ingr-btn__remove"),a=document.querySelector(".ingr-btn__add");a.addEventListener("click",(()=>{let e=JSON.parse(localStorage.getItem("ingridients"));e||(e=[]),e.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(e)),a.style.display="none",s.style.display="block"})),s.addEventListener("click",(()=>{h=h.filter((e=>e.strIngredient!==l)),localStorage.setItem("ingridients",JSON.stringify(h)),s.style.display="none",a.style.display="block"}))}})),e.style.transform="translateX(0%)";document.querySelector(".mobile-icon-close").addEventListener("click",(()=>{e.style.transform="translateX(-150%)",document.body.style.overflow="auto"}));const t=document.querySelector(".modal-btn-add"),n=document.querySelector(".modal-btn-remove");t.style.display="none",t.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("favorites"));e.push(o.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),n.style.display="block",t.style.display="none",y.cardsContainerEl.innerHTML=(0,i.default)(e),L();const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none"})),n.addEventListener("click",(e=>{let o=JSON.parse(localStorage.getItem("favorites"));o=o.filter((t=>t.idDrink!==e.target.id)),localStorage.setItem("favorites",JSON.stringify(o)),n.style.display="none",t.style.display="block",y.cardsContainerEl.innerHTML=(0,i.default)(o),L();const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none";o.length||(y.cardsContainerEl.innerHTML=s())}))}}var n}));let k=JSON.parse(localStorage.getItem("favorites"));const q=document.querySelector(".modal-cocktail");function L(){const e=document.querySelectorAll(".card-btn__add svg");for(let t of e)t.innerHTML=`<use class="use-heart1" href='${p}'></use>`;const t=document.querySelectorAll(".card-btn__remove svg");for(let e of t)e.innerHTML=`<use class="use-heart1" href='${S}'></use>`}
//# sourceMappingURL=favorites.22d1b4e4.js.map
