"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8611],{8611:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(9636),a=t(3238),r=t(7190),i=t(6685),u=t(7829),o=t(1630),n=t(8430),h=t(2549);const c=["/blog.html","/github.html","/","/posts/PH-daily-2024-09-05.html","/posts/PH-daily-2024-09-06.html","/posts/PH-daily-2024-09-07.html","/posts/PH-daily-2024-09-08.html","/posts/PH-daily-2024-09-09.html","/posts/PH-daily-2024-09-10.html","/posts/PH-daily-2024-09-11.html","/posts/PH-daily-2024-09-12.html","/posts/PH-daily-2024-09-13.html","/posts/PH-daily-2024-09-14.html","/posts/PH-daily-2024-09-15.html","/posts/PH-daily-2024-09-16.html","/posts/PH-daily-2024-09-17.html","/posts/PH-daily-2024-09-18.html","/posts/PH-daily-2024-09-19.html","/posts/PH-daily-2024-09-20.html","/posts/PH-daily-2024-09-21.html","/posts/PH-daily-2024-09-22.html","/posts/PH-daily-2024-09-23.html","/posts/PH-daily-2024-09-24.html","/posts/PH-daily-2024-09-25.html","/posts/PH-daily-2024-09-26.html","/posts/PH-daily-2024-09-27.html","/404.html","/posts/","/category/","/category/ph/","/tag/","/article/","/star/","/timeline/"];t(5034);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>c[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=h.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,u.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),c=(0,o.Zv)(),m=(0,s.s5)(h.a),{enabled:H,addQueryHistory:g,queryHistory:P,removeQueryHistory:f}=(()=>{const{queryHistoryCount:e}=h.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:k,resultHistory:Q,addResultHistory:R,removeResultHistory:w}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),b=H||k,x=(0,i.lW)(e,"queries"),{results:C,isSearching:q}=(e=>{const l=(0,h.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,i.KR)(0),n=(0,u.EW)((()=>a.value>0)),c=(0,i.IJ)([]);return(0,u.sV)((()=>{const{search:i,terminate:o}=(0,h.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:u=e=>e,splitWord:o,suggestionsFilter:n,...h}=l.value;r?(a.value+=1,i(e.join(" "),t.value,h).then((e=>u(e,r,t.value,s.value))).then((e=>{a.value-=1,c.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(c.value=[])}))):c.value=[]}),h.s.searchDelay-h.s.suggestDelay);(0,u.wB)([e,t],(([e])=>n(e)),{immediate:!0}),(0,u.hi)((()=>{o()}))})),{isSearching:n,results:c}})(x),S=(0,i.Kh)({isQuery:!0,index:0}),E=(0,i.KR)(0),A=(0,i.KR)(0),W=(0,u.EW)((()=>b&&(P.value.length>0||Q.value.length>0))),_=(0,u.EW)((()=>C.value.length>0)),D=(0,u.EW)((()=>C.value[E.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,u.h)(e[0],e[1]))),j=e=>{if("customField"===e.type){const l=h.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[c.value].split("$content"):l.split("$content");return e.display.map((e=>(0,u.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,u.h)("div",T(e))))},M=()=>{E.value=0,A.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)A.value>0?A.value-=1:(E.value=E.value>0?E.value-1:C.value.length-1,A.value=D.value.contents.length-1);else if("ArrowDown"===s.key)A.value<D.value.contents.length-1?A.value+=1:(E.value=E.value<C.value.length-1?E.value+1:0,A.value=0);else if("Enter"===s.key){const l=D.value.contents[A.value];g(e.queries.join(" ")),R(l),t.push(p(l)),M()}}else if(k)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=S;0===l?(S.isQuery=!e,S.index=e?Q.value.length-1:P.value.length-1):S.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=S;l===(e?P.value.length-1:Q.value.length-1)?(S.isQuery=!e,S.index=0):S.index=l+1})();else if("Enter"===s.key){const{index:e}=S;S.isQuery?(l("updateQuery",P.value[e]),s.preventDefault()):(t.push(Q.value[e].link),M())}})),(0,u.wB)([E,A],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,u.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!W.value}],id:"search-pro-results"},e.queries.length?q.value?(0,u.h)(n.S,{hint:m.value.searching}):_.value?(0,u.h)("ul",{class:"search-pro-result-list"},C.value.map((({title:l,contents:t},s)=>{const a=E.value===s;return(0,u.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,u.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&A.value===t;return(0,u.h)(o.Wt,{to:p(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{g(e.queries.join(" ")),R(l),M()}},(()=>["text"===l.type?null:(0,u.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,u.h)("div",{class:"content-header"},l.header):null,(0,u.h)("div",j(l))])]))}))])}))):m.value.emptyResult:b?W.value?[H?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),P.value.map(((e,t)=>(0,u.h)("div",{class:["search-pro-result-item",{active:S.isQuery&&S.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,u.h)(n.b,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},e),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),f(t)}})])))])):null,k?(0,u.h)("ul",{class:"search-pro-result-list"},(0,u.h)("li",{class:"search-pro-result-list-item"},[(0,u.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),Q.value.map(((e,l)=>(0,u.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!S.isQuery&&S.index===l}],onClick:()=>{M()}},(()=>[(0,u.h)(n.b,{class:"search-pro-result-type"}),(0,u.h)("div",{class:"search-pro-result-content"},[e.header?(0,u.h)("div",{class:"content-header"},e.header):null,(0,u.h)("div",e.display.map((e=>T(e))).flat())]),(0,u.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),w(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);