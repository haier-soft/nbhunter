"use strict";(self.webpackChunknbhunter=self.webpackChunknbhunter||[]).push([[225],{6225:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(885),c=n(1413),a=n(7762),i=n(2982),s=n(2791),l=n(7689),o=n(1087),u=n(2789),d=n(1444),f=n(184),m=function(e){var t=e.selectedFilters,n=(0,d.TL)();return(0,f.jsx)("div",{className:"content-page__choice choice-filter",children:t.map((function(e,t){return(0,f.jsxs)("div",{onClick:function(){return function(e,t){var r=[e,t];n((0,u.Y8)([].concat(r)))}(e.translitname,e.translitvalue)},className:"choice-filter__item",children:[(0,f.jsxs)("span",{className:"choice-filter__text",children:[e.name,": ",e.value]}),(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.775 460.775",children:(0,f.jsx)("path",{d:"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55\r c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55\r c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505\r c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55\r l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719\r c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"})})]},t)}))})},_=n(8182),p=n(3709),h=n.n(p),v=n(1501),x=n(3751),j=function(e){var t=e.start,n=e.end,r=(0,s.useRef)(),c=(0,d.CG)((function(e){return e.filters})).inputs,a=(0,d.TL)();return(0,s.useEffect)((function(){r.current.noUiSlider.set([t,n])}),[t,n]),(0,f.jsxs)("form",{onReset:function(e){return e.preventDefault(),void a((0,u.lI)())},action:"",name:"form[]",className:"form-filter",children:[(0,f.jsxs)("div",{className:"form-filter__sections",children:[(0,f.jsxs)("div",{className:"form-filter__section section-filter form-filter__section--price price-sec",children:[(0,f.jsx)("div",{className:"section-filter__title",children:"\u0426\u0435\u043d\u043e\u0432\u043e\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d"}),(0,f.jsxs)("div",{className:"price-filter",children:[(0,f.jsx)("div",{className:"price-filter__slider",children:(0,f.jsx)(h(),{range:{min:0,max:199999},start:[t,n],connect:!0,onChange:function(e){console.log(e),a((0,v.hv)(parseInt(e[0]))),a((0,v.mr)(parseInt(e[1]))),a((0,v.a_)())},instanceRef:function(e){e&&!r.current&&(r.current=e)}})}),(0,f.jsxs)("div",{className:"price-filter__values",children:[(0,f.jsxs)("div",{className:"price-filter__item",children:[(0,f.jsx)("span",{className:"price-filter__label",children:"\u043e\u0442"}),(0,f.jsx)("input",{onChange:function(e){return function(e){a((0,v.hv)(Number(e.target.value.replace(/\s/,"")))),a((0,v.a_)())}(e)},id:"price-start",type:"text",value:String(t).replace(/\B(?=(\d{3})+(?!\d))/g," ").trim()})]}),(0,f.jsxs)("div",{className:"price-filter__item",children:[(0,f.jsx)("span",{className:"price-filter__label",children:"\u0434\u043e"}),(0,f.jsx)("input",{onChange:function(e){return function(e){a((0,v.mr)(Number(e.target.value.replace(/\s/,"")))),a((0,v.a_)())}(e)},id:"price-end",type:"text",value:String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ").trim()})]})]})]})]}),c.map((function(e,t){return(0,f.jsxs)("div",{className:(0,_.Z)("form-filter__section section-filter"),children:[(0,f.jsx)("div",{onClick:function(e){return function(e){var t=document.querySelectorAll(".section-filter__header"),n=document.querySelectorAll(".section-filter__body");(0,x.Z)(t[e],n[e])}(t)},className:"section-filter__header",children:(0,f.jsx)("span",{className:"section-filter__title",children:e.name})}),(0,f.jsx)("div",{className:"section-filter__body",children:(0,f.jsx)("div",{className:"section-filter__items",children:e.properties.map((function(t,n){return(0,f.jsxs)("label",{className:(0,_.Z)("section-filter__item",{opacity:!t.checked&&0===t.count}),children:[(0,f.jsx)("input",{onChange:function(){return function(e,t){var n=[t.translitname,e.translitvalue];a((0,u.Y8)([].concat(n)))}(t,e)},className:"section-filter__input",type:"checkbox",value:t.value,checked:t.checked}),(0,f.jsxs)("div",{className:"section-filter__label",children:[(0,f.jsx)("span",{children:t.value}),(0,f.jsxs)("span",{className:"section-filter__count",children:["\xa0(",t.count,")"]})]})]},n)}))})})]},e.name)}))]}),(0,f.jsx)("div",{className:"form-filter__footer",children:(0,f.jsx)("button",{type:"reset",className:"btn form-filter__btn",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})})]})},g=function(e){var t,n,r=e.setPage,c=e.totalCount,a=e.currPage,i=e.itemsPerPage,s=(0,d.TL)(),l=[],o=c?Math.ceil(c/i):1,u=[],m="...";o<=5?(t=1,n=o):a<=3?(t=1,n=4):a+1===o?(t=a-2,n=a):a===o?(t=a-3,n=a-1):(t=a-1,n=a+1);for(var p=t;p<=n;p++)u.push(p);o<=5?l.push.apply(l,u):a>=4?a+2<o?l.push.apply(l,[1,m].concat(u,[m,o])):l.push.apply(l,[1,m].concat(u,[o])):a<4&&(a+2<o?l.push.apply(l,u.concat([m,o])):l.push.apply(l,u.concat([o])));return(0,f.jsxs)("div",{className:"pagination",children:[(0,f.jsx)("button",{disabled:1===a,onClick:function(){return s(r(a-1))},className:"pagination__arrow pagination__arrow-prev"}),(0,f.jsx)("ul",{className:"pagination__items",children:l.map((function(e,t){return(0,f.jsx)("li",{onClick:function(){return function(e){"number"===typeof e&&(s(r(e)),window.scrollTo({top:0,behavior:"smooth"}))}(e)},className:(0,_.Z)("pagination__item",{active:a===e,disable:"..."===e}),children:(0,f.jsx)("span",{className:"pagination__link",children:e})},t)}))}),(0,f.jsx)("button",{disabled:a===o,onClick:function(){return s(r(a+1))},className:"pagination__arrow pagination__arrow-next"})]})},N=n(5466),y=n(5973),b=n(9434),P=function(){var e=(0,d.CG)((function(e){return e.filters})).searchValue,t=(0,s.useState)(e),n=(0,r.Z)(t,2),c=n[0],a=n[1],i=(0,s.useRef)(null),l=(0,s.useRef)(!1),o=(0,b.I0)();return(0,s.useEffect)((function(){a(e)}),[e]),(0,s.useEffect)((function(){if(l.current){var e=setTimeout((function(){o((0,v.gI)(c))}),500);return function(){return clearTimeout(e)}}}),[c]),(0,f.jsx)("form",{className:"search",children:(0,f.jsxs)("div",{className:"search__inner",children:[(0,f.jsxs)("div",{className:"search__label",children:["\u0427\u0442\u043e \u0438\u0449\u0435\u043c?",(0,f.jsx)("span",{})]}),(0,f.jsx)("div",{className:"search__input",children:(0,f.jsx)("input",{onChange:function(e){return function(e){a(e.target.value),l.current=!0}(e)},ref:i,type:"text",value:c})})]})})},C=n(9680),k=n(4875),L=function(){var e=(0,d.CG)((function(e){return e.filters})),t=e.items,n=e.totalCount,_=e.currPage,p=e.itemsPerPage,h=e.searchValue,x=e.sortProperty,b=e.orderProperty,L=e.filters,w=e.inputs,Z=e.priceStart,E=e.priceEnd,S=e.fetchStatus,R=(0,d.TL)(),T=(0,s.useRef)(!1),I=(0,s.useRef)(null),q=(0,l.s0)(),A=(0,o.lr)()[0].entries(),Y=[];w.forEach((function(e){var t=e.properties.filter((function(e){return!0===e.checked}));t.length>0&&t.forEach((function(t){Y=[].concat((0,i.Z)(Y),[{name:e.name,translitname:e.translitname,value:t.value,translitvalue:t.translitvalue}])}))}));var B=(0,s.useMemo)((function(){return L.map((function(e){return e.values.map((function(t){return e.name+".1="+t})).join("&")}))}),[L]);return(0,s.useEffect)((function(){var e={currPage:_,itemsPerPage:p,searchValue:h,sortProperty:x,orderProperty:b,filterItems:B,priceStart:Z,priceEnd:E};R((0,u.Ru)(e)),T.current&&q("?".concat(B.length>0?"".concat(B.join("&"),"&"):"").concat(h?"q=".concat(h,"&"):"","price_gte=").concat(Z,"&price_lte=").concat(E,"&_page=").concat(_,"&_limit=").concat(p,"&_sort=").concat(x,"&_order=").concat(b))}),[_,p,h,x,b,L,Z,E]),(0,s.useEffect)((function(){if(window.location.search){var e,t={},n=(0,a.Z)(A);try{for(n.s();!(e=n.n()).done;){var i=(0,r.Z)(e.value,2),s=i[0],l=i[1];t[s]?t[s]=t[s]+"|"+l:t[s]=l}}catch(o){n.e(o)}finally{n.f()}R((0,v.rr)((0,c.Z)({},t))),R((0,v.a_)())}T.current=!0}),[]),(0,s.useEffect)((function(){0===t.length&&1!==_&&R((0,v.YA)(1))}),[t]),(0,f.jsx)("div",{className:"page__container container",children:(0,f.jsxs)("div",{className:"page__catalog cat-page",children:[(0,f.jsx)("div",{className:"cat-page__aside",children:(0,f.jsx)("div",{className:"cat-page__filter filter-cat",children:(0,f.jsxs)("div",{ref:I,className:"filter-cat__inner",children:[(0,f.jsxs)("div",{className:"filter-cat__header",children:[(0,f.jsx)("div",{className:"filter-cat__title",children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),(0,f.jsx)("div",{className:"filter-cat__icon"})]}),(0,f.jsx)(j,{start:Z,end:E}),(0,f.jsx)("div",{className:"filter-cat__text",children:"\u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0432\u0430\u0436\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u044b. \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"})]})})}),(0,f.jsxs)("div",{className:"cat-page__content",children:[(0,f.jsx)("div",{onClick:function(){return function(){var e=document.querySelector(".filter-cat"),t=document.querySelector(".filter-cat__icon");e.classList.add("active"),document.body.classList.add("no-scroll"),e.addEventListener("click",(function(t){var n=t;I.current&&!n.path.includes(I.current)&&(e.classList.remove("active"),document.body.classList.remove("no-scroll"))})),t.addEventListener("click",(function(){e.classList.remove("active"),document.body.classList.remove("no-scroll")}))}()},className:"cat-page__filter--mobile",children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),(0,f.jsx)(P,{}),Y.length>0&&(0,f.jsx)(m,{selectedFilters:Y}),(0,f.jsx)(C.Z,{sortProperty:x,orderProperty:b,setSort:v.HD}),(0,f.jsx)("div",{className:"cat-page__catalog catalog",children:t.length?(0,f.jsx)("div",{className:"catalog__items",children:t.map((function(e){return(0,f.jsx)(N.Z,(0,c.Z)({},e),e.id)}))}):S===k.W.pending?(0,f.jsx)("div",{className:"catalog__items",children:(0,i.Z)(new Array(12)).map((function(e,t){return(0,f.jsx)(y.Z,{},t)}))}):(0,f.jsx)("div",{children:"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0442\u0443\u044e\u0449\u0438\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}),(0,f.jsx)(g,{setPage:v.YA,totalCount:n,currPage:_,itemsPerPage:p})]})]})})}}}]);
//# sourceMappingURL=225.ba4f448b.chunk.js.map