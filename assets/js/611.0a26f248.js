"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[611],{8611:(e,l,s)=>{s.r(l),s.d(l,{default:()=>m});var t=s(9636),a=s(3238),r=s(7190),u=s(6685),i=s(7829),n=s(1630),o=s(8430),c=s(2549);const h=["/blog.html","/posts/PH-daily-2024-09-05.html","/posts/PH-daily-2024-09-06.html","/404.html","/","/posts/","/category/","/category/ph/","/tag/","/article/","/star/","/timeline/"];s(5034);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const s=(0,n.rd)(),h=(0,n.Zv)(),m=(0,t.s5)(c.a),{enabled:g,addQueryHistory:H,queryHistory:f,removeQueryHistory:k}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:s=>{l&&(v.value=Array.from(new Set([s,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:Q,resultHistory:R,addResultHistory:w,removeResultHistory:x}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),C=g||Q,b=(0,u.lW)(e,"queries"),{results:q,isSearching:S}=(e=>{const l=(0,c.u)(),s=(0,n.Zv)(),t=(0,n.BV)(),a=(0,u.KR)(0),o=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:n}=(0,c.c)(),o=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:n,suggestionsFilter:o,...c}=l.value;r?(a.value+=1,u(e.join(" "),s.value,c).then((e=>i(e,r,s.value,t.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,s],(([e])=>o(e)),{immediate:!0}),(0,i.hi)((()=>{n()}))})),{isSearching:o,results:h}})(b),E=(0,u.Kh)({isQuery:!0,index:0}),A=(0,u.KR)(0),W=(0,u.KR)(0),_=(0,i.EW)((()=>C&&(f.value.length>0||R.value.length>0))),D=(0,i.EW)((()=>q.value.length>0)),T=(0,i.EW)((()=>q.value[A.value]||null)),j=e=>e.map((e=>(0,t.Kg)(e)?e:(0,i.h)(e[0],e[1]))),M=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[s,a=""]=(0,t.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",j([s,...e,a]))))}return e.display.map((e=>(0,i.h)("div",j(e))))},P=()=>{A.value=0,W.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(t=>{if(e.isFocusing)if(D.value){if("ArrowUp"===t.key)W.value>0?W.value-=1:(A.value=A.value>0?A.value-1:q.value.length-1,W.value=T.value.contents.length-1);else if("ArrowDown"===t.key)W.value<T.value.contents.length-1?W.value+=1:(A.value=A.value<q.value.length-1?A.value+1:0,W.value=0);else if("Enter"===t.key){const l=T.value.contents[W.value];H(e.queries.join(" ")),w(l),s.push(p(l)),P()}}else if(Q)if("ArrowUp"===t.key)(()=>{const{isQuery:e,index:l}=E;0===l?(E.isQuery=!e,E.index=e?R.value.length-1:f.value.length-1):E.index=l-1})();else if("ArrowDown"===t.key)(()=>{const{isQuery:e,index:l}=E;l===(e?f.value.length-1:R.value.length-1)?(E.isQuery=!e,E.index=0):E.index=l+1})();else if("Enter"===t.key){const{index:e}=E;E.isQuery?(l("updateQuery",f.value[e]),t.preventDefault()):(s.push(R.value[e].link),P())}})),(0,i.wB)([A,W],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!D.value:!_.value}],id:"search-pro-results"},e.queries.length?S.value?(0,i.h)(o.S,{hint:m.value.searching}):D.value?(0,i.h)("ul",{class:"search-pro-result-list"},q.value.map((({title:l,contents:s},t)=>{const a=A.value===t;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),s.map(((l,s)=>{const t=a&&W.value===s;return(0,i.h)(n.Wt,{to:p(l),class:["search-pro-result-item",{active:t,"aria-selected":t}],onClick:()=>{H(e.queries.join(" ")),w(l),P()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?o.T:"heading"===l.type?o.H:o.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",M(l))])]))}))])}))):m.value.emptyResult:C?_.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),f.value.map(((e,s)=>(0,i.h)("div",{class:["search-pro-result-item",{active:E.isQuery&&E.index===s}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(s)}})])))])):null,Q?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),R.value.map(((e,l)=>(0,i.h)(n.Wt,{to:e.link,class:["search-pro-result-item",{active:!E.isQuery&&E.index===l}],onClick:()=>{P()}},(()=>[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>j(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),x(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);