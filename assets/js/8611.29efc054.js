"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8611],{8611:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(9636),a=t(3238),r=t(7190),u=t(6685),i=t(7829),n=t(1630),o=t(8430),c=t(2549);const h=["/blog.html","/github.html","/","/posts/PH-daily-2024-09-05.html","/posts/PH-daily-2024-09-06.html","/posts/PH-daily-2024-09-07.html","/posts/PH-daily-2024-09-08.html","/posts/PH-daily-2024-09-09.html","/posts/PH-daily-2024-09-10.html","/posts/PH-daily-2024-09-11.html","/posts/PH-daily-2024-09-12.html","/posts/PH-daily-2024-09-13.html","/404.html","/posts/","/category/","/category/ph/","/tag/","/article/","/star/","/timeline/"];t(5034);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,n.rd)(),h=(0,n.Zv)(),m=(0,s.s5)(c.a),{enabled:H,addQueryHistory:g,queryHistory:f,removeQueryHistory:k}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:Q,resultHistory:R,addResultHistory:w,removeResultHistory:b}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),x=H||Q,C=(0,u.lW)(e,"queries"),{results:P,isSearching:q}=(e=>{const l=(0,c.u)(),t=(0,n.Zv)(),s=(0,n.BV)(),a=(0,u.KR)(0),o=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:n}=(0,c.c)(),o=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:n,suggestionsFilter:o,...c}=l.value;r?(a.value+=1,u(e.join(" "),t.value,c).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>o(e)),{immediate:!0}),(0,i.hi)((()=>{n()}))})),{isSearching:o,results:h}})(C),S=(0,u.Kh)({isQuery:!0,index:0}),E=(0,u.KR)(0),A=(0,u.KR)(0),W=(0,i.EW)((()=>x&&(f.value.length>0||R.value.length>0))),_=(0,i.EW)((()=>P.value.length>0)),D=(0,i.EW)((()=>P.value[E.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),j=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",T(e))))},M=()=>{E.value=0,A.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)A.value>0?A.value-=1:(E.value=E.value>0?E.value-1:P.value.length-1,A.value=D.value.contents.length-1);else if("ArrowDown"===s.key)A.value<D.value.contents.length-1?A.value+=1:(E.value=E.value<P.value.length-1?E.value+1:0,A.value=0);else if("Enter"===s.key){const l=D.value.contents[A.value];g(e.queries.join(" ")),w(l),t.push(p(l)),M()}}else if(Q)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=S;0===l?(S.isQuery=!e,S.index=e?R.value.length-1:f.value.length-1):S.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=S;l===(e?f.value.length-1:R.value.length-1)?(S.isQuery=!e,S.index=0):S.index=l+1})();else if("Enter"===s.key){const{index:e}=S;S.isQuery?(l("updateQuery",f.value[e]),s.preventDefault()):(t.push(R.value[e].link),M())}})),(0,i.wB)([E,A],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!W.value}],id:"search-pro-results"},e.queries.length?q.value?(0,i.h)(o.S,{hint:m.value.searching}):_.value?(0,i.h)("ul",{class:"search-pro-result-list"},P.value.map((({title:l,contents:t},s)=>{const a=E.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&A.value===t;return(0,i.h)(n.Wt,{to:p(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{g(e.queries.join(" ")),w(l),M()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?o.T:"heading"===l.type?o.H:o.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",j(l))])]))}))])}))):m.value.emptyResult:x?W.value?[H?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),f.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:S.isQuery&&S.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(t)}})])))])):null,Q?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),R.value.map(((e,l)=>(0,i.h)(n.Wt,{to:e.link,class:["search-pro-result-item",{active:!S.isQuery&&S.index===l}],onClick:()=>{M()}},(()=>[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>T(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),b(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);