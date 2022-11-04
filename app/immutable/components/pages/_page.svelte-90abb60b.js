var Fe=Object.defineProperty;var $e=(n,e,t)=>e in n?Fe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Q=(n,e,t)=>($e(n,typeof e!="symbol"?e+"":e,t),t);import{S as L,i as P,s as J,H as W,I as Z,m as w,h as m,n as c,b as A,F as h,A as M,k as v,v as R,q as G,l as b,w as V,r as H,x as B,f as N,t as S,y as U,J as z,K as se,a as C,c as D,L as ue,M as Ie,N as ce,O as fe,P as le,Q as de,G as he,u as ae,R as ee,g as be,d as we,T as Te,U as ke}from"../../chunks/index-0c661f1c.js";import{w as me}from"../../chunks/index-5edcacc6.js";const Ne=""+new URL("../../assets/copy-regular-423f8619.svg",import.meta.url).href,Se="A 'merge' property is required",Oe="Property 'merge' must be an array",Ce="A 'find' property is required on every element inside 'merge'",De="Every 'find' property inside 'merge' must be of type string",Me="Every 'find' property inside 'merge' must be a string of length equal to or higher than one",Ae="A 'replace' property is required on every element inside 'merge'",Re="Unexpected error while parsing template JSON",Ve="Every element inside the 'merge' should be an object";class X extends Error{constructor(e){super(e)}}function Be(n){return typeof n=="object"}function re(n,e){return n in e}function ne(n,e){return!re(n,e)}function Ue(n,e){return re(n,e)&&!(e[n]instanceof Array)}function Le(n,e){return re(n,e)&&typeof e[n]!="string"}function Pe(n,e){const t=re(n,e)&&e[n];return!(typeof t=="string"&&t.length>0)}function Je(n){try{const e=JSON.parse(n);if(ne("merge",e))throw new X(Se);if(Ue("merge",e))throw new X(Oe);const{merge:t}=e,s=je(t);return{...e,merge:s}}catch(e){throw ye(e)}}function je(n){return n.map(t=>{if(!Be(t))throw new X(Ve);if(ne("find",t))throw new X(Ce);if(ne("replace",t))throw new X(Ae);if(Le("find",t))throw new X(De);if(Pe("find",t))throw new X(Me);return t}).map(({find:t,replace:s})=>({find:t,replace:Ee(s)}))}function xe(n){return typeof n=="object"&&n!==null&&"message"in n}function ye(n){return n instanceof Error?n:xe(n)?new X(n.message):new X(Re)}function Ee(n){return typeof n=="string"?n:JSON.stringify(n)}class Ge{constructor(e){Q(this,"template");Q(this,"_result");Q(this,"_error");Q(this,"handlers");this._error=null,this.template={merge:[]},this._result={merge:[]},this.handlers={change:[],submit:[],error:[this.logger],upload:[]},this.setTemplateSource(e)}set error(e){const t=this._error&&{...this._error}||null;this._error=e,e!==null&&this.handlers.error.forEach(s=>s(e,t))}get error(){return this._error}set result(e){this._result=e,this.handlers.change.forEach(t=>t(e))}get result(){return this._result}on(e,t){this.handlers[e].push(t)}off(e,t){this.handlers={...this.handlers,[e]:this.handlers[e].filter(s=>s!==t)}}submit(){if(this.error)throw this.error;this.handlers.submit.forEach(e=>e(this.result))}setTemplateSource(e){try{const t=Je(Ee(e));this.template=t,this.result=t,this.error=null}catch(t){const s=ye(t);this.error=s}}updateResultMergeFields(e,t){const s=t||this.getMergeFieldItem({find:e.find});return this.result.merge.forEach(r=>{r===s&&(r.find=e.find,r.replace=e.replace)}),this.result={...this.result,merge:this.result.merge},this.result.merge}logger(e){console.error(e)}addMergeField(e){this.setTemplateSource({...this.result,merge:[...this.result.merge,e]})}removeMergeField(e){this.setTemplateSource({...this.result,merge:this.result.merge.filter(t=>t!==e)})}getMergeFieldItem(e){if(Object.keys(e).length===0)return;const t=function(s){let r;for(r in e)if(s[r]!==e[r])return!1;return!0};return this.result.merge.find(t)}getSrcPlaceholders(){if(!this.template.timeline||!this.template.timeline.tracks)return[];const e=this.template.timeline.tracks,t=[];for(let s=0;s<e.length;s++)for(let r=0;r<e[s].clips.length;r++){const a={placeholder:e[s].clips[r].asset.src,asset:e[s].clips[r].asset};a.placeholder.charAt(0)==="{"&&t.push(a)}return t}updateSrc(e,t){const s=this.handlers.upload.reduce((r,a)=>a(e),"");t.src=s,this.handlers.change.forEach(r=>r(this.result))}}const He=[{find:"NAME",replace:"world"}],qe={tracks:[{clips:[{asset:{type:"title",text:"Hello {{ NAME }}",style:"future"},start:0,length:5}]}]},ze={format:"mp4",resolution:"hd"},Xe={merge:He,timeline:qe,output:ze};function Ye(n){let e,t;return{c(){e=W("svg"),t=W("path"),this.h()},l(s){e=Z(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var r=w(e);t=Z(r,"path",{d:!0}),w(t).forEach(m),r.forEach(m),this.h()},h(){c(t,"d","M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"),c(e,"class","fill-current w-4 h-4 mr-2"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 20 20")},m(s,r){A(s,e,r),h(e,t)},p:M,i:M,o:M,d(s){s&&m(e)}}}function Ke(n){return[]}class Qe extends L{constructor(e){super(),P(this,e,Ke,Ye,J,{})}}function We(n){let e,t,s,r;return t=new Qe({}),{c(){e=v("a"),R(t.$$.fragment),s=G(`
	Download`),this.h()},l(a){e=b(a,"A",{href:!0,download:!0,class:!0});var l=w(e);V(t.$$.fragment,l),s=H(l,`
	Download`),l.forEach(m),this.h()},h(){c(e,"href",n[0]),c(e,"download","result.json"),c(e,"class","bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center")},m(a,l){A(a,e,l),B(t,e,null),h(e,s),r=!0},p(a,[l]){(!r||l&1)&&c(e,"href",a[0])},i(a){r||(N(t.$$.fragment,a),r=!0)},o(a){S(t.$$.fragment,a),r=!1},d(a){a&&m(e),U(t)}}}function Ze(n,e,t){let{download:s=""}=e;return n.$$set=r=>{"download"in r&&t(0,s=r.download)},[s]}class et extends L{constructor(e){super(),P(this,e,Ze,We,J,{download:0})}}function tt(n){let e,t,s,r;return{c(){e=v("button"),t=G("Submit"),this.h()},l(a){e=b(a,"BUTTON",{class:!0});var l=w(e);t=H(l,"Submit"),l.forEach(m),this.h()},h(){c(e,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40")},m(a,l){A(a,e,l),h(e,t),s||(r=z(e,"click",function(){se(n[0])&&n[0].apply(this,arguments)}),s=!0)},p(a,[l]){n=a},i:M,o:M,d(a){a&&m(e),s=!1,r()}}}function rt(n,e,t){let{submit:s}=e;return n.$$set=r=>{"submit"in r&&t(0,s=r.submit)},[s]}class nt extends L{constructor(e){super(),P(this,e,rt,tt,J,{submit:0})}}function st(n){let e,t,s,r,a;return t=new et({props:{download:n[0]}}),r=new nt({props:{submit:n[1]}}),{c(){e=v("div"),R(t.$$.fragment),s=C(),R(r.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var i=w(e);V(t.$$.fragment,i),s=D(i),V(r.$$.fragment,i),i.forEach(m),this.h()},h(){c(e,"class","flex justify-between pt-4")},m(l,i){A(l,e,i),B(t,e,null),h(e,s),B(r,e,null),a=!0},p(l,[i]){const o={};i&1&&(o.download=l[0]),t.$set(o);const u={};i&2&&(u.submit=l[1]),r.$set(u)},i(l){a||(N(t.$$.fragment,l),N(r.$$.fragment,l),a=!0)},o(l){S(t.$$.fragment,l),S(r.$$.fragment,l),a=!1},d(l){l&&m(e),U(t),U(r)}}}function lt(n,e,t){let{download:s=""}=e,{submit:r}=e;return n.$$set=a=>{"download"in a&&t(0,s=a.download),"submit"in a&&t(1,r=a.submit)},[s,r]}class at extends L{constructor(e){super(),P(this,e,lt,st,J,{download:0,submit:1})}}function it(n){let e,t,s;return{c(){e=v("input"),this.h()},l(r){e=b(r,"INPUT",{class:!0,type:!0}),this.h()},h(){c(e,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),c(e,"type","text")},m(r,a){A(r,e,a),ue(e,n[0]),t||(s=[z(e,"input",n[2]),z(e,"focus",n[3],{once:!0})],t=!0)},p(r,[a]){a&1&&e.value!==r[0]&&ue(e,r[0])},i:M,o:M,d(r){r&&m(e),t=!1,Ie(s)}}}function ot(n,e,t){let{value:s}=e,{onFocus:r}=e;function a(){s=this.value,t(0,s)}const l=i=>r(i.currentTarget);return n.$$set=i=>{"value"in i&&t(0,s=i.value),"onFocus"in i&&t(1,r=i.onFocus)},[s,r,a,l]}class ge extends L{constructor(e){super(),P(this,e,ot,it,J,{value:0,onFocus:1})}}function ut(n){let e,t,s,r,a,l,i,o,u,g,f,k,d,p,E,_,y,T;function q(I){n[7](I)}let F={onFocus:n[6]};n[1]!==void 0&&(F.value=n[1]),i=new ge({props:F}),ce.push(()=>fe(i,"value",q));function $(I){n[9](I)}let j={onFocus:n[8]};return n[2]!==void 0&&(j.value=n[2]),g=new ge({props:j}),ce.push(()=>fe(g,"value",$)),{c(){e=v("div"),t=v("div"),s=v("h1"),r=G("Add a new merge field"),a=C(),l=v("div"),R(i.$$.fragment),u=C(),R(g.$$.fragment),k=C(),d=v("div"),p=v("button"),E=G("Add"),this.h()},l(I){e=b(I,"DIV",{});var O=w(e);t=b(O,"DIV",{});var x=w(t);s=b(x,"H1",{class:!0});var Y=w(s);r=H(Y,"Add a new merge field"),Y.forEach(m),a=D(x),l=b(x,"DIV",{class:!0});var K=w(l);V(i.$$.fragment,K),u=D(K),V(g.$$.fragment,K),k=D(K),d=b(K,"DIV",{class:!0});var ie=w(d);p=b(ie,"BUTTON",{class:!0});var oe=w(p);E=H(oe,"Add"),oe.forEach(m),ie.forEach(m),K.forEach(m),x.forEach(m),O.forEach(m),this.h()},h(){c(s,"class","text-teal-400 px-1"),c(p,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"),c(d,"class","flex flex-row-reverse"),c(l,"class","border p-4 mb-6")},m(I,O){A(I,e,O),h(e,t),h(t,s),h(s,r),h(t,a),h(t,l),B(i,l,null),h(l,u),B(g,l,null),h(l,k),h(l,d),h(d,p),h(p,E),_=!0,y||(T=z(p,"click",le(n[10])),y=!0)},p(I,[O]){const x={};!o&&O&2&&(o=!0,x.value=I[1],de(()=>o=!1)),i.$set(x);const Y={};!f&&O&4&&(f=!0,Y.value=I[2],de(()=>f=!1)),g.$set(Y)},i(I){_||(N(i.$$.fragment,I),N(g.$$.fragment,I),_=!0)},o(I){S(i.$$.fragment,I),S(g.$$.fragment,I),_=!1},d(I){I&&m(e),U(i),U(g),y=!1,T()}}}function ct(n,e,t){let s,r,a=me("find");he(n,a,p=>t(1,s=p));let l=me("replace");he(n,l,p=>t(2,r=p));let i=p=>p.set(""),{addField:o}=e;const u=()=>i(a);function g(p){s=p,a.set(s)}const f=()=>i(l);function k(p){r=p,l.set(r)}const d=()=>o({find:s,replace:r});return n.$$set=p=>{"addField"in p&&t(0,o=p.addField)},[o,s,r,a,l,i,u,g,f,k,d]}class ft extends L{constructor(e){super(),P(this,e,ct,ut,J,{addField:0})}}function dt(n){let e,t;return{c(){e=W("svg"),t=W("path"),this.h()},l(s){e=Z(s,"svg",{xmlns:!0,viewBox:!0});var r=w(e);t=Z(r,"path",{fill:!0,d:!0}),w(t).forEach(m),r.forEach(m),this.h()},h(){c(t,"fill","white"),c(t,"d","M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 16 16")},m(s,r){A(s,e,r),h(e,t)},p:M,i:M,o:M,d(s){s&&m(e)}}}function ht(n){return[]}class mt extends L{constructor(e){super(),P(this,e,ht,dt,J,{})}}function gt(n){let e,t,s,r,a;return t=new mt({}),{c(){e=v("button"),R(t.$$.fragment),this.h()},l(l){e=b(l,"BUTTON",{class:!0});var i=w(e);V(t.$$.fragment,i),i.forEach(m),this.h()},h(){c(e,"class","bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1")},m(l,i){A(l,e,i),B(t,e,null),s=!0,r||(a=z(e,"click",le(function(){se(n[0])&&n[0].apply(this,arguments)})),r=!0)},p(l,[i]){n=l},i(l){s||(N(t.$$.fragment,l),s=!0)},o(l){S(t.$$.fragment,l),s=!1},d(l){l&&m(e),U(t),r=!1,a()}}}function pt(n,e,t){let{onClick:s}=e;return n.$$set=r=>{"onClick"in r&&t(0,s=r.onClick)},[s]}class _t extends L{constructor(e){super(),P(this,e,pt,gt,J,{onClick:0})}}function vt(n){let e,t;return{c(){e=v("label"),t=G(n[0]),this.h()},l(s){e=b(s,"LABEL",{for:!0,class:!0});var r=w(e);t=H(r,n[0]),r.forEach(m),this.h()},h(){c(e,"for",n[0]),c(e,"class","block mb-2 monospace")},m(s,r){A(s,e,r),h(e,t)},p(s,[r]){r&1&&ae(t,s[0]),r&1&&c(e,"for",s[0])},i:M,o:M,d(s){s&&m(e)}}}function bt(n,e,t){let{find:s}=e;return n.$$set=r=>{"find"in r&&t(0,s=r.find)},[s]}class wt extends L{constructor(e){super(),P(this,e,bt,vt,J,{find:0})}}function yt(n){let e,t,s;return{c(){e=v("input"),this.h()},l(r){e=b(r,"INPUT",{role:!0,class:!0,type:!0,label:!0}),this.h()},h(){c(e,"role","textbox"),c(e,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),c(e,"type","text"),e.value=n[2],c(e,"label",n[1])},m(r,a){A(r,e,a),t||(s=z(e,"input",n[4]),t=!0)},p(r,[a]){a&4&&e.value!==r[2]&&(e.value=r[2]),a&2&&c(e,"label",r[1])},i:M,o:M,d(r){r&&m(e),t=!1,s()}}}function Et(n,e,t){let{field:s}=e,{find:r}=e,{replace:a}=e,{handleFormInput:l}=e;const i=o=>l({find:r,replace:o.currentTarget.value},s);return n.$$set=o=>{"field"in o&&t(0,s=o.field),"find"in o&&t(1,r=o.find),"replace"in o&&t(2,a=o.replace),"handleFormInput"in o&&t(3,l=o.handleFormInput)},[s,r,a,l,i]}class Ft extends L{constructor(e){super(),P(this,e,Et,yt,J,{field:0,find:1,replace:2,handleFormInput:3})}}function $t(n){let e,t,s,r,a;return t=new wt({props:{find:n[0].find}}),r=new Ft({props:{find:n[0].find,replace:n[0].replace,field:n[0],handleFormInput:n[1]}}),{c(){e=v("div"),R(t.$$.fragment),s=C(),R(r.$$.fragment),this.h()},l(l){e=b(l,"DIV",{"data-cy":!0});var i=w(e);V(t.$$.fragment,i),s=D(i),V(r.$$.fragment,i),i.forEach(m),this.h()},h(){c(e,"data-cy","label-input")},m(l,i){A(l,e,i),B(t,e,null),h(e,s),B(r,e,null),a=!0},p(l,[i]){const o={};i&1&&(o.find=l[0].find),t.$set(o);const u={};i&1&&(u.find=l[0].find),i&1&&(u.replace=l[0].replace),i&1&&(u.field=l[0]),i&2&&(u.handleFormInput=l[1]),r.$set(u)},i(l){a||(N(t.$$.fragment,l),N(r.$$.fragment,l),a=!0)},o(l){S(t.$$.fragment,l),S(r.$$.fragment,l),a=!1},d(l){l&&m(e),U(t),U(r)}}}function It(n,e,t){let{field:s}=e,{handleFormInput:r}=e;return n.$$set=a=>{"field"in a&&t(0,s=a.field),"handleFormInput"in a&&t(1,r=a.handleFormInput)},[s,r]}class Tt extends L{constructor(e){super(),P(this,e,It,$t,J,{field:0,handleFormInput:1})}}function pe(n,e,t){const s=n.slice();return s[6]=e[t],s}function _e(n){let e,t,s,r,a,l;t=new Tt({props:{field:n[6],handleFormInput:n[2]}});function i(){return n[5](n[6])}return r=new _t({props:{onClick:i}}),{c(){e=v("div"),R(t.$$.fragment),s=C(),R(r.$$.fragment),a=C(),this.h()},l(o){e=b(o,"DIV",{class:!0});var u=w(e);V(t.$$.fragment,u),s=D(u),V(r.$$.fragment,u),a=D(u),u.forEach(m),this.h()},h(){c(e,"class","relative")},m(o,u){A(o,e,u),B(t,e,null),h(e,s),B(r,e,null),h(e,a),l=!0},p(o,u){n=o;const g={};u&2&&(g.field=n[6]),u&4&&(g.handleFormInput=n[2]),t.$set(g);const f={};u&18&&(f.onClick=i),r.$set(f)},i(o){l||(N(t.$$.fragment,o),N(r.$$.fragment,o),l=!0)},o(o){S(t.$$.fragment,o),S(r.$$.fragment,o),l=!1},d(o){o&&m(e),U(t),U(r)}}}function kt(n){let e,t,s,r,a,l,i,o,u,g=n[1],f=[];for(let d=0;d<g.length;d+=1)f[d]=_e(pe(n,g,d));const k=d=>S(f[d],1,1,()=>{f[d]=null});return o=new ft({props:{addField:n[3]}}),{c(){e=v("div"),t=v("div"),s=v("h1"),r=G("Modify Merge Values"),a=C(),l=v("div");for(let d=0;d<f.length;d+=1)f[d].c();i=C(),R(o.$$.fragment),this.h()},l(d){e=b(d,"DIV",{});var p=w(e);t=b(p,"DIV",{"data-cy":!0});var E=w(t);s=b(E,"H1",{class:!0});var _=w(s);r=H(_,"Modify Merge Values"),_.forEach(m),a=D(E),l=b(E,"DIV",{class:!0});var y=w(l);for(let T=0;T<f.length;T+=1)f[T].l(y);y.forEach(m),E.forEach(m),i=D(p),V(o.$$.fragment,p),p.forEach(m),this.h()},h(){c(s,"class","text-teal-400 px-1"),c(l,"class","border p-4 mb-6"),c(t,"data-cy","merge-fields-input-section"),ee(e,"hidden",n[0])},m(d,p){A(d,e,p),h(e,t),h(t,s),h(s,r),h(t,a),h(t,l);for(let E=0;E<f.length;E+=1)f[E].m(l,null);h(e,i),B(o,e,null),u=!0},p(d,[p]){if(p&22){g=d[1];let _;for(_=0;_<g.length;_+=1){const y=pe(d,g,_);f[_]?(f[_].p(y,p),N(f[_],1)):(f[_]=_e(y),f[_].c(),N(f[_],1),f[_].m(l,null))}for(be(),_=g.length;_<f.length;_+=1)k(_);we()}const E={};p&8&&(E.addField=d[3]),o.$set(E),(!u||p&1)&&ee(e,"hidden",d[0])},i(d){if(!u){for(let p=0;p<g.length;p+=1)N(f[p]);N(o.$$.fragment,d),u=!0}},o(d){f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)S(f[p]);S(o.$$.fragment,d),u=!1},d(d){d&&m(e),Te(f,d),U(o)}}}function Nt(n,e,t){let{error:s}=e,{fields:r=[]}=e,{handleFormInput:a}=e,{addField:l}=e,{removeField:i}=e;const o=u=>i(u);return n.$$set=u=>{"error"in u&&t(0,s=u.error),"fields"in u&&t(1,r=u.fields),"handleFormInput"in u&&t(2,a=u.handleFormInput),"addField"in u&&t(3,l=u.addField),"removeField"in u&&t(4,i=u.removeField)},[s,r,a,l,i,o]}class St extends L{constructor(e){super(),P(this,e,Nt,kt,J,{error:0,fields:1,handleFormInput:2,addField:3,removeField:4})}}function Ot(n){let e,t,s,r;return{c(){e=v("button"),t=G("Reset"),this.h()},l(a){e=b(a,"BUTTON",{class:!0});var l=w(e);t=H(l,"Reset"),l.forEach(m),this.h()},h(){c(e,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end")},m(a,l){A(a,e,l),h(e,t),s||(r=z(e,"click",le(function(){se(n[0])&&n[0].apply(this,arguments)})),s=!0)},p(a,[l]){n=a},i:M,o:M,d(a){a&&m(e),s=!1,r()}}}function Ct(n,e,t){let{onClick:s}=e;return n.$$set=r=>{"onClick"in r&&t(0,s=r.onClick)},[s]}class Dt extends L{constructor(e){super(),P(this,e,Ct,Ot,J,{onClick:0})}}function Mt(n){let e,t,s,r,a,l,i,o;return i=new Dt({props:{onClick:n[0]}}),{c(){e=v("div"),t=v("p"),s=v("span"),r=G(n[2]),a=C(),l=v("div"),R(i.$$.fragment),this.h()},l(u){e=b(u,"DIV",{});var g=w(e);t=b(g,"P",{"data-cy":!0,class:!0});var f=w(t);s=b(f,"SPAN",{class:!0});var k=w(s);r=H(k,n[2]),k.forEach(m),f.forEach(m),a=D(g),l=b(g,"DIV",{class:!0});var d=w(l);V(i.$$.fragment,d),d.forEach(m),g.forEach(m),this.h()},h(){c(s,"class","monospace text-orange-900"),c(t,"data-cy","template-input-error"),c(t,"class","bg-rose-200 rounded py-2 my-4 px-4"),c(l,"class","flex flex-row-reverse "),ee(e,"hidden",!n[1])},m(u,g){A(u,e,g),h(e,t),h(t,s),h(s,r),h(e,a),h(e,l),B(i,l,null),o=!0},p(u,[g]){(!o||g&4)&&ae(r,u[2]);const f={};g&1&&(f.onClick=u[0]),i.$set(f),(!o||g&2)&&ee(e,"hidden",!u[1])},i(u){o||(N(i.$$.fragment,u),o=!0)},o(u){S(i.$$.fragment,u),o=!1},d(u){u&&m(e),U(i)}}}function At(n,e,t){let s,{onClick:r}=e,{error:a}=e;return n.$$set=l=>{"onClick"in l&&t(0,r=l.onClick),"error"in l&&t(1,a=l.error)},n.$$.update=()=>{n.$$.dirty&2&&t(2,s=a&&a.message||"")},[r,a,s]}class Rt extends L{constructor(e){super(),P(this,e,At,Mt,J,{onClick:0,error:1})}}function Vt(n){let e,t,s,r,a,l,i,o,u;return{c(){e=v("div"),t=v("label"),s=G("Upload src"),r=C(),a=v("input"),l=C(),i=v("input"),this.h()},l(g){e=b(g,"DIV",{"data-cy":!0});var f=w(e);t=b(f,"LABEL",{class:!0,for:!0});var k=w(t);s=H(k,"Upload src"),k.forEach(m),r=D(f),a=b(f,"INPUT",{class:!0,type:!0}),l=D(f),i=b(f,"INPUT",{class:!0,type:!0}),f.forEach(m),this.h()},h(){c(t,"class","block mb-2 monospace"),c(t,"for","input"),c(a,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),c(a,"type","text"),a.value=n[0],a.disabled=!0,c(i,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),c(i,"type","file"),c(e,"data-cy","source-input")},m(g,f){A(g,e,f),h(e,t),h(t,s),h(e,r),h(e,a),h(e,l),h(e,i),o||(u=z(i,"change",n[2]),o=!0)},p(g,[f]){f&1&&a.value!==g[0]&&(a.value=g[0])},i:M,o:M,d(g){g&&m(e),o=!1,u()}}}function Bt(n,e,t){let s="";function r(l){var i;!l||t(0,s=((i=l.item(0))==null?void 0:i.name)||"")}return[s,r,l=>r(l.currentTarget.files)]}class Ut extends L{constructor(e){super(),P(this,e,Bt,Vt,J,{})}}function ve(n){let e,t,s,r,a,l,i,o,u,g=te(n[0])+"",f,k,d,p,E,_;return d=new at({props:{submit:n[7],download:n[3]}}),{c(){e=v("div"),t=v("h1"),s=G("Result"),r=C(),a=v("abbr"),l=v("img"),o=C(),u=v("p"),f=G(g),k=C(),R(d.$$.fragment),this.h()},l(y){e=b(y,"DIV",{"data-cy":!0,class:!0});var T=w(e);t=b(T,"H1",{class:!0});var q=w(t);s=H(q,"Result"),q.forEach(m),r=D(T),a=b(T,"ABBR",{title:!0,class:!0});var F=w(a);l=b(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(m),o=D(T),u=b(T,"P",{"data-cy":!0,class:!0});var $=w(u);f=H($,g),$.forEach(m),k=D(T),V(d.$$.fragment,T),T.forEach(m),this.h()},h(){c(t,"class","text-teal-400 px-1 inline-block mr-2 svelte-r93edu"),ke(l.src,i=Ne)||c(l,"src",i),c(l,"alt","copy-button"),c(l,"class","h-4 cursor-pointer inline mb-1 svelte-r93edu"),c(a,"title","Copy to clipboard"),c(a,"class","svelte-r93edu"),c(u,"data-cy","result"),c(u,"class","h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"),c(e,"data-cy","result-section"),c(e,"class","svelte-r93edu")},m(y,T){A(y,e,T),h(e,t),h(t,s),h(e,r),h(e,a),h(a,l),h(e,o),h(e,u),h(u,f),h(e,k),B(d,e,null),p=!0,E||(_=z(l,"click",n[6]),E=!0)},p(y,T){(!p||T&1)&&g!==(g=te(y[0])+"")&&ae(f,g);const q={};T&8&&(q.download=y[3]),d.$set(q)},i(y){p||(N(d.$$.fragment,y),p=!0)},o(y){S(d.$$.fragment,y),p=!1},d(y){y&&m(e),U(d),E=!1,_()}}}function Lt(n){let e,t,s,r,a,l,i,o,u,g,f,k,d,p,E,_,y,T,q;f=new Rt({props:{error:n[2],onClick:n[10]}}),d=new St({props:{fields:n[0].merge,handleFormInput:n[5],addField:n[8],removeField:n[9],error:n[2]}}),E=new Ut({});let F=!n[2]&&ve(n);return{c(){e=v("div"),t=v("section"),s=v("form"),r=v("div"),a=v("label"),l=G("Paste template"),i=C(),o=v("textarea"),g=C(),R(f.$$.fragment),k=C(),R(d.$$.fragment),p=C(),R(E.$$.fragment),_=C(),F&&F.c(),this.h()},l($){e=b($,"DIV",{class:!0});var j=w(e);t=b(j,"SECTION",{"data-cy":!0,class:!0});var I=w(t);s=b(I,"FORM",{class:!0});var O=w(s);r=b(O,"DIV",{"data-cy":!0,class:!0});var x=w(r);a=b(x,"LABEL",{for:!0,class:!0});var Y=w(a);l=H(Y,"Paste template"),Y.forEach(m),i=D(x),o=b(x,"TEXTAREA",{"data-cy":!0,class:!0,id:!0}),w(o).forEach(m),x.forEach(m),g=D(O),V(f.$$.fragment,O),k=D(O),V(d.$$.fragment,O),p=D(O),V(E.$$.fragment,O),O.forEach(m),_=D(I),F&&F.l(I),I.forEach(m),j.forEach(m),this.h()},h(){c(a,"for","json-input"),c(a,"class","text-teal-400 px-1 svelte-r93edu"),c(o,"data-cy","template-input"),c(o,"class","w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"),c(o,"id","json-input"),o.value=u=te(n[1]),c(r,"data-cy","template-input-section"),c(r,"class","mb-6 svelte-r93edu"),c(s,"class","svelte-r93edu"),c(t,"data-cy","form-container"),c(t,"class","max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"),c(e,"class","shotstack-mergefield-form svelte-r93edu")},m($,j){A($,e,j),h(e,t),h(t,s),h(s,r),h(r,a),h(a,l),h(r,i),h(r,o),h(s,g),B(f,s,null),h(s,k),B(d,s,null),h(s,p),B(E,s,null),h(t,_),F&&F.m(t,null),y=!0,T||(q=z(o,"input",n[12]),T=!0)},p($,[j]){(!y||j&2&&u!==(u=te($[1])))&&(o.value=u);const I={};j&4&&(I.error=$[2]),f.$set(I);const O={};j&1&&(O.fields=$[0].merge),j&4&&(O.error=$[2]),d.$set(O),$[2]?F&&(be(),S(F,1,1,()=>{F=null}),we()):F?(F.p($,j),j&4&&N(F,1)):(F=ve($),F.c(),N(F,1),F.m(t,null))},i($){y||(N(f.$$.fragment,$),N(d.$$.fragment,$),N(E.$$.fragment,$),N(F),y=!0)},o($){S(f.$$.fragment,$),S(d.$$.fragment,$),S(E.$$.fragment,$),S(F),y=!1},d($){$&&m(e),U(f),U(d),U(E),F&&F.d(),T=!1,q()}}}function te(n){return JSON.stringify(n,null,2)}function Pt(n){if(typeof window<"u"){const e=new Blob([JSON.stringify(n,null,2)],{type:"text/plain"});return URL.createObjectURL(e)}else return null}function Jt(n,e,t){let s,{editTemplateService:r=new Ge(Xe)}=e,a=r.template,l=r.result,i=null;function o(_){r.setTemplateSource(_),t(1,a=r.template),t(0,l=r.result),t(2,i=r.error)}function u(_,y){r.updateResultMergeFields(_,y),t(0,l=r.result)}function g(){navigator.clipboard.writeText(JSON.stringify(l)),alert("JSON copied to clipboard!")}function f(){r.submit(),window.alert("Form successfully submitted!")}function k(_){r.addMergeField(_),t(1,a=r.template),t(0,l=r.result),t(2,i=r.error)}function d(_){const y=r.getMergeFieldItem(_);r.removeMergeField(y),t(1,a=r.template),t(0,l=r.result),t(2,i=r.error)}function p(){r.setTemplateSource(r.result),t(1,a=r.template),t(0,l=r.result),t(2,i=r.error)}const E=_=>o(_.currentTarget.value);return n.$$set=_=>{"editTemplateService"in _&&t(11,r=_.editTemplateService)},n.$$.update=()=>{n.$$.dirty&1&&t(3,s=Pt(l)||"")},[l,a,i,s,o,u,g,f,k,d,p,r,E]}class jt extends L{constructor(e){super(),P(this,e,Jt,Lt,J,{editTemplateService:11})}}function xt(n){let e,t;return e=new jt({}),{c(){R(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,r){B(e,s,r),t=!0},p:M,i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}class zt extends L{constructor(e){super(),P(this,e,null,xt,J,{})}}export{zt as default};