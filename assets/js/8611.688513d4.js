"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8611],{8611:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(9636),a=t(3238),i=t(7190),r=t(6685),u=t(7829),o=t(1630),h=t(8430),n=t(2549);const p=["/blog.html","/github.html","/","/posts/PH-daily-2024-09-05.html","/posts/PH-daily-2024-09-06.html","/posts/PH-daily-2024-09-07.html","/posts/PH-daily-2024-09-08.html","/posts/PH-daily-2024-09-09.html","/posts/PH-daily-2024-09-10.html","/posts/PH-daily-2024-09-11.html","/posts/PH-daily-2024-09-12.html","/posts/PH-daily-2024-09-13.html","/posts/PH-daily-2024-09-14.html","/posts/PH-daily-2024-09-15.html","/posts/PH-daily-2024-09-16.html","/posts/PH-daily-2024-09-17.html","/posts/PH-daily-2024-09-18.html","/posts/PH-daily-2024-09-19.html","/posts/PH-daily-2024-09-20.html","/posts/PH-daily-2024-09-21.html","/posts/PH-daily-2024-09-22.html","/posts/PH-daily-2024-09-23.html","/posts/PH-daily-2024-09-24.html","/posts/PH-daily-2024-09-25.html","/posts/PH-daily-2024-09-26.html","/posts/PH-daily-2024-09-27.html","/posts/PH-daily-2024-09-28.html","/posts/PH-daily-2024-09-29.html","/posts/PH-daily-2024-09-30.html","/posts/PH-daily-2024-10-01.html","/posts/PH-daily-2024-10-02.html","/posts/PH-daily-2024-10-03.html","/posts/PH-daily-2024-10-04.html","/posts/PH-daily-2024-10-05.html","/posts/PH-daily-2024-10-06.html","/posts/PH-daily-2024-10-07.html","/posts/PH-daily-2024-10-08.html","/posts/PH-daily-2024-10-09.html","/posts/PH-daily-2024-10-10.html","/posts/PH-daily-2024-10-11.html","/posts/PH-daily-2024-10-12.html","/posts/PH-daily-2024-10-13.html","/posts/PH-daily-2024-10-14.html","/posts/PH-daily-2024-10-15.html","/posts/PH-daily-2024-10-16.html","/posts/PH-daily-2024-10-17.html","/posts/PH-daily-2024-10-18.html","/posts/PH-daily-2024-10-19.html","/posts/PH-daily-2024-10-20.html","/posts/PH-daily-2024-10-21.html","/posts/PH-daily-2024-10-22.html","/posts/PH-daily-2024-10-23.html","/posts/PH-daily-2024-10-24.html","/404.html","/posts/","/category/","/category/ph/","/tag/","/article/","/star/","/timeline/"];t(5034);const c=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),d=e=>p[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:y}=n.s,v=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,u.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),p=(0,o.Zv)(),m=(0,s.s5)(n.a),{enabled:H,addQueryHistory:P,queryHistory:g,removeQueryHistory:f}=(()=>{const{queryHistoryCount:e}=n.s,l=e>0;return{enabled:l,queryHistory:c,addQueryHistory:t=>{l&&(c.value=Array.from(new Set([t,...c.value.slice(0,e-1)])))},removeQueryHistory:e=>{c.value=[...c.value.slice(0,e),...c.value.slice(e+1)]}}})(),{enabled:k,resultHistory:Q,addResultHistory:R,removeResultHistory:w}=(()=>{const e=y>0;return{enabled:e,resultHistory:v,addResultHistory:l=>{if(e){const e={link:d(l),display:l.display};"header"in l&&(e.header=l.header),v.value=[e,...v.value.slice(0,y-1)]}},removeResultHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),b=H||k,x=(0,r.lW)(e,"queries"),{results:C,isSearching:q}=(e=>{const l=(0,n.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,r.KR)(0),h=(0,u.EW)((()=>a.value>0)),p=(0,r.IJ)([]);return(0,u.sV)((()=>{const{search:r,terminate:o}=(0,n.c)(),h=(0,i.Q0)((e=>{const i=e.join(" "),{searchFilter:u=e=>e,splitWord:o,suggestionsFilter:h,...n}=l.value;i?(a.value+=1,r(e.join(" "),t.value,n).then((e=>u(e,i,t.value,s.value))).then((e=>{a.value-=1,p.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(p.value=[])}))):p.value=[]}),n.s.searchDelay-n.s.suggestDelay);(0,u.wB)([e,t],(([e])=>h(e)),{immediate:!0}),(0,u.hi)((()=>{o()}))})),{isSearching:h,results:p}})(x),S=(0,r.Kh)({isQuery:!0,index:0}),E=(0,r.KR)(0),A=(0,r.KR)(0),W=(0,u.EW)((()=>b&&(g.value.length>0||Q.value.length>0))),_=(0,u.EW)((()=>C.value.length>0)),D=(0,u.EW)((()=>C.value[E.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,u.h)(e[0],e[1]))),j=e=>{if("customField"===e.type){const l=n.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[p.value].split("$content"):l.split("$content");return e.display.map((e=>(0,u.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,u.h)("div",T(e))))},M=()=>{E.value=0,A.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)A.value>0?A.value-=1:(E.value=E.value>0?E.value-1:C.value.length-1,A.value=D.value.contents.length-1);else if("ArrowDown"===s.key)A.value<D.value.contents.length-1?A.value+=1:(E.value=E.value<C.value.length-1?E.value+1:0,A.value=0);else if("Enter"===s.key){const l=D.value.contents[A.value];P(e.queries.join(" ")),R(l),t.push(d(l)),M()}}else if(k)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=S;0===l?(S.isQuery=!e,S.index=e?Q.value.length-1:g.value.length-1):S.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=S;l===(e?g.value.length-1:Q.value.length-1)?(S.isQuery=!e,S.index=0):S.index=l+1})();else if("Enter"===s.key){const{index:e}=S;S.isQuery?(l("updateQuery",g.value[e]),s.preventDefault()):(t.push(Q.value[e].link),M())}})),(0,u.wB)([E,A],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,u.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!W.value}],id:"search-pro-results"},e.queries.length?q.value?(0,u.h)(h.S,{hint:m.value.searching}):_.value?(0,u.h)("ul",{class:"search-pro-result-list"},C.value.map((({title:l,contents:t},s)=>{const a=E.value===s;return(0,u.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,u.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&A.value===t;return(0,u.h)(o.Wt,{to:d(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{P(e.queries.join(" ")),R(l),M()}},(()=>["text"===l.type?null:(0,u.h)("title"===l.type?h.T:"heading"===l.type?h.H:h.a,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,u.h)("div",{class:"content-header"},l.header):null,(0,u.h)("div",j(l))])]))}))])}))):m.value.emptyResult:b?W.value?[H?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),g.value.map(((e,t)=>(0,u.h)("div",{class:["search-pro-result-item",{active:S.isQuery&&S.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,u.h)(h.b,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},e),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:h.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),f(t)}})])))])):null,k?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),Q.value.map(((e,l)=>(0,u.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!S.isQuery&&S.index===l}],onClick:()=>{M()}},(()=>[(0,u.h)(h.b,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},[e.header?(0,u.h)("div",{class:"content-header"},e.header):null,(0,u.h)("div",e.display.map((e=>T(e))).flat())]),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:h.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),w(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);