var ue=Object.defineProperty;var ce=(r,e,t)=>e in r?ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var L=(r,e,t)=>(ce(r,typeof e!="symbol"?e+"":e,t),t);import{S as x,i as C,s as U,H as ee,I as te,m as b,h as m,n as i,b as k,F as h,A as J,k as w,v as j,q as D,l as y,w as q,r as F,x as G,f as I,t as B,y as H,J as K,K as fe,a as O,c as M,g as de,d as he,u as W,L as me,M as pe}from"../../chunks/index-35df3809.js";const ge=""+new URL("../../assets/copy-regular-423f8619.svg",import.meta.url).href,_e="A 'merge' property is required",ve="Property 'merge' must be an array",be="Property 'merge' must contain at least one element",we="A 'find' property is required on every element inside 'merge'",ye="Every 'find' property inside 'merge' must be of type string",Ee="Every 'find' property inside 'merge' must be a string of length equal to or higher than one",Te="A 'replace' property is required on every element inside 'merge'",$e="Unexpected error while parsing template JSON",Ne="Every element inside the 'merge' should be an object";class R extends Error{constructor(e){super(e)}}function Se(r){return typeof r=="object"}function z(r,e){return r in e}function Q(r,e){return!z(r,e)}function Oe(r,e){return z(r,e)&&!(e[r]instanceof Array)}function Me(r,e){return z(r,e)&&typeof e[r]!="string"}function Re(r,e){const t=z(r,e)&&e[r];return!(typeof t=="string"&&t.length>0)}function ke(r,e){const t=z(r,e)&&e[r];return!(t instanceof Array&&t.length>0)}function Ae(r){try{const e=JSON.parse(r);if(Q("merge",e))throw new R(_e);if(Oe("merge",e))throw new R(ve);if(ke("merge",e))throw new R(be);const{merge:t}=e,s=Ie(t);return{...e,merge:s}}catch(e){throw oe(e)}}function Ie(r){return r.map(t=>{if(!Se(t))throw new R(Ne);if(Q("find",t))throw new R(we);if(Q("replace",t))throw new R(Te);if(Me("find",t))throw new R(ye);if(Re("find",t))throw new R(Ee);return t}).map(({find:t,replace:s})=>({find:t,replace:ie(s)}))}function De(r){return typeof r=="object"&&r!==null&&"message"in r}function oe(r){return r instanceof Error?r:De(r)?new R(r.message):new R($e)}function ie(r){return typeof r=="string"?r:JSON.stringify(r)}class Fe{constructor(e){L(this,"template");L(this,"_result");L(this,"_error");L(this,"handlers");this._error=null,this.template={merge:[]},this._result={merge:[]},this.handlers={change:[],submit:[],error:[this.logger]},this.setTemplateSource(e)}set error(e){const t=this._error&&{...this._error}||null;this._error=e,e!==null&&this.handlers.error.forEach(s=>s(e,t))}get error(){return this._error}set result(e){const t={...this._result};this._result=e,this.handlers.change.forEach(s=>s(e,t))}get result(){return this._result}on(e,t){this.handlers[e].push(t)}off(e,t){this.handlers={...this.handlers,[e]:this.handlers[e].filter(s=>s!==t)}}submit(){if(this.error)throw this.error;this.handlers.submit.forEach(e=>e(this.result))}setTemplateSource(e){try{const t=Ae(ie(e));this.template=t,this.result=t,this.error=null}catch(t){const s=oe(t);this.error=s}}updateResultMergeFields(e){const{find:t,replace:s}=e,n={find:t,replace:s},l=this.result.merge.map(a=>(a==null?void 0:a.find)===e.find?n:a);return this.result={...this.result,merge:l},l}logger(e){console.error(e)}addMergeField(e){this.setTemplateSource({...this.result,merge:[...this.result.merge,e]})}removeMergeField(e){this.setTemplateSource({...this.result,merge:this.result.merge.filter(t=>t!==e)})}getMergeFieldItem(e){if(Object.keys(e).length===0)return;const t=function(s){let n;for(n in e)if(s[n]!==e[n])return!1;return!0};return this.result.merge.find(t)}}const Pe=[{find:"NAME",replace:"world"}],Be={tracks:[{clips:[{asset:{type:"title",text:"Hello {{ NAME }}",style:"future"},start:0,length:5}]}]},Ve={format:"mp4",resolution:"hd"},Je={merge:Pe,timeline:Be,output:Ve};function xe(r){let e,t;return{c(){e=ee("svg"),t=ee("path"),this.h()},l(s){e=te(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var n=b(e);t=te(n,"path",{d:!0}),b(t).forEach(m),n.forEach(m),this.h()},h(){i(t,"d","M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"),i(e,"class","fill-current w-4 h-4 mr-2"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox","0 0 20 20")},m(s,n){k(s,e,n),h(e,t)},p:J,i:J,o:J,d(s){s&&m(e)}}}function Ce(r){return[]}class Ue extends x{constructor(e){super(),C(this,e,Ce,xe,U,{})}}function Le(r){let e,t,s,n;return t=new Ue({}),{c(){e=w("a"),j(t.$$.fragment),s=D(`
	Download`),this.h()},l(l){e=y(l,"A",{href:!0,download:!0,class:!0});var a=b(e);q(t.$$.fragment,a),s=F(a,`
	Download`),a.forEach(m),this.h()},h(){i(e,"href",r[0]),i(e,"download","result.json"),i(e,"class","bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center")},m(l,a){k(l,e,a),G(t,e,null),h(e,s),n=!0},p(l,[a]){(!n||a&1)&&i(e,"href",l[0])},i(l){n||(I(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){l&&m(e),H(t)}}}function je(r,e,t){let{download:s=""}=e;return r.$$set=n=>{"download"in n&&t(0,s=n.download)},[s]}class qe extends x{constructor(e){super(),C(this,e,je,Le,U,{download:0})}}function Ge(r){let e,t,s,n;return{c(){e=w("button"),t=D("Submit"),this.h()},l(l){e=y(l,"BUTTON",{class:!0});var a=b(e);t=F(a,"Submit"),a.forEach(m),this.h()},h(){i(e,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40")},m(l,a){k(l,e,a),h(e,t),s||(n=K(e,"click",function(){fe(r[0])&&r[0].apply(this,arguments)}),s=!0)},p(l,[a]){r=l},i:J,o:J,d(l){l&&m(e),s=!1,n()}}}function He(r,e,t){let{submit:s}=e;return r.$$set=n=>{"submit"in n&&t(0,s=n.submit)},[s]}class ze extends x{constructor(e){super(),C(this,e,He,Ge,U,{submit:0})}}function Xe(r){let e,t,s,n,l;return t=new qe({props:{download:r[0]}}),n=new ze({props:{submit:r[1]}}),{c(){e=w("div"),j(t.$$.fragment),s=O(),j(n.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var o=b(e);q(t.$$.fragment,o),s=M(o),q(n.$$.fragment,o),o.forEach(m),this.h()},h(){i(e,"class","flex justify-between pt-4")},m(a,o){k(a,e,o),G(t,e,null),h(e,s),G(n,e,null),l=!0},p(a,[o]){const u={};o&1&&(u.download=a[0]),t.$set(u);const f={};o&2&&(f.submit=a[1]),n.$set(f)},i(a){l||(I(t.$$.fragment,a),I(n.$$.fragment,a),l=!0)},o(a){B(t.$$.fragment,a),B(n.$$.fragment,a),l=!1},d(a){a&&m(e),H(t),H(n)}}}function Ye(r,e,t){let{download:s=""}=e,{submit:n}=e;return r.$$set=l=>{"download"in l&&t(0,s=l.download),"submit"in l&&t(1,n=l.submit)},[s,n]}class Ke extends x{constructor(e){super(),C(this,e,Ye,Xe,U,{download:0,submit:1})}}function re(r,e,t){const s=r.slice();return s[11]=e[t].find,s[12]=e[t].replace,s}function se(r){let e,t,s=r[2].message+"",n;return{c(){e=w("p"),t=w("span"),n=D(s),this.h()},l(l){e=y(l,"P",{"data-cy":!0,class:!0});var a=b(e);t=y(a,"SPAN",{class:!0});var o=b(t);n=F(o,s),o.forEach(m),a.forEach(m),this.h()},h(){i(t,"class","monospace text-orange-900 svelte-r93edu"),i(e,"data-cy","template-input-error"),i(e,"class","bg-rose-200 rounded py-2 px-4 svelte-r93edu")},m(l,a){k(l,e,a),h(e,t),h(t,n)},p(l,a){a&4&&s!==(s=l[2].message+"")&&W(n,s)},d(l){l&&m(e)}}}function ne(r){let e,t,s,n,l,a=r[1].merge,o=[];for(let u=0;u<a.length;u+=1)o[u]=le(re(r,a,u));return{c(){e=w("div"),t=w("h1"),s=D("Modify Merge Values"),n=O(),l=w("div");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=y(u,"DIV",{"data-cy":!0,class:!0});var f=b(e);t=y(f,"H1",{class:!0});var c=b(t);s=F(c,"Modify Merge Values"),c.forEach(m),n=M(f),l=y(f,"DIV",{class:!0});var E=b(l);for(let N=0;N<o.length;N+=1)o[N].l(E);E.forEach(m),f.forEach(m),this.h()},h(){i(t,"class","text-teal-400 px-1 svelte-r93edu"),i(l,"class","border p-4 mb-6 svelte-r93edu"),i(e,"data-cy","merge-fields-input-section"),i(e,"class","svelte-r93edu")},m(u,f){k(u,e,f),h(e,t),h(t,s),h(e,n),h(e,l);for(let c=0;c<o.length;c+=1)o[c].m(l,null)},p(u,f){if(f&34){a=u[1].merge;let c;for(c=0;c<a.length;c+=1){const E=re(u,a,c);o[c]?o[c].p(E,f):(o[c]=le(E),o[c].c(),o[c].m(l,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}},d(u){u&&m(e),me(o,u)}}}function le(r){let e,t,s=r[11]+"",n,l,a,o,u,f,c,E,N;function $(...p){return r[10](r[11],...p)}return{c(){e=w("div"),t=w("label"),n=D(s),a=O(),o=w("input"),c=O(),this.h()},l(p){e=y(p,"DIV",{"data-cy":!0,class:!0});var T=b(e);t=y(T,"LABEL",{for:!0,class:!0});var _=b(t);n=F(_,s),_.forEach(m),a=M(T),o=y(T,"INPUT",{class:!0,id:!0,type:!0}),c=M(T),T.forEach(m),this.h()},h(){i(t,"for",l=r[11]),i(t,"class","block mb-2 monospace svelte-r93edu"),i(o,"class","border w-full mb-3 pl-2 py-1 text-stone-500 svelte-r93edu"),i(o,"id",u=r[11]),i(o,"type","text"),o.value=f=r[12],i(e,"data-cy","label-input"),i(e,"class","svelte-r93edu")},m(p,T){k(p,e,T),h(e,t),h(t,n),h(e,a),h(e,o),h(e,c),E||(N=K(o,"input",$),E=!0)},p(p,T){r=p,T&2&&s!==(s=r[11]+"")&&W(n,s),T&2&&l!==(l=r[11])&&i(t,"for",l),T&2&&u!==(u=r[11])&&i(o,"id",u),T&2&&f!==(f=r[12])&&o.value!==f&&(o.value=f)},d(p){p&&m(e),E=!1,N()}}}function ae(r){let e,t,s,n,l,a,o,u,f,c=Y(r[0])+"",E,N,$,p,T,_;return $=new Ke({props:{submit:r[7],download:r[3]}}),{c(){e=w("div"),t=w("h1"),s=D("Result"),n=O(),l=w("abbr"),a=w("img"),u=O(),f=w("p"),E=D(c),N=O(),j($.$$.fragment),this.h()},l(g){e=y(g,"DIV",{"data-cy":!0,class:!0});var d=b(e);t=y(d,"H1",{class:!0});var A=b(t);s=F(A,"Result"),A.forEach(m),n=M(d),l=y(d,"ABBR",{title:!0,class:!0});var v=b(l);a=y(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(m),u=M(d),f=y(d,"P",{"data-cy":!0,class:!0});var S=b(f);E=F(S,c),S.forEach(m),N=M(d),q($.$$.fragment,d),d.forEach(m),this.h()},h(){i(t,"class","text-teal-400 px-1 inline-block mr-2 svelte-r93edu"),pe(a.src,o=ge)||i(a,"src",o),i(a,"alt","copy-button"),i(a,"class","h-4 cursor-pointer inline mb-1 svelte-r93edu"),i(l,"title","Copy to clipboard"),i(l,"class","svelte-r93edu"),i(f,"data-cy","result"),i(f,"class","h-60 overflow-auto border p-4 whitespace-pre monospace svelte-r93edu"),i(e,"data-cy","result-section"),i(e,"class","svelte-r93edu")},m(g,d){k(g,e,d),h(e,t),h(t,s),h(e,n),h(e,l),h(l,a),h(e,u),h(e,f),h(f,E),h(e,N),G($,e,null),p=!0,T||(_=K(a,"click",r[6]),T=!0)},p(g,d){(!p||d&1)&&c!==(c=Y(g[0])+"")&&W(E,c);const A={};d&8&&(A.download=g[3]),$.$set(A)},i(g){p||(I($.$$.fragment,g),p=!0)},o(g){B($.$$.fragment,g),p=!1},d(g){g&&m(e),H($),T=!1,_()}}}function Qe(r){var A;let e,t,s,n,l,a,o,u,f,c,E,N,$,p,T,_=r[2]&&se(r),g=((A=r[1].merge)==null?void 0:A.length)&&!r[2]&&ne(r),d=!r[2]&&ae(r);return{c(){e=w("div"),t=w("section"),s=w("form"),n=w("div"),l=w("label"),a=D("Paste template"),o=O(),u=w("textarea"),c=O(),_&&_.c(),E=O(),g&&g.c(),N=O(),d&&d.c(),this.h()},l(v){e=y(v,"DIV",{class:!0});var S=b(e);t=y(S,"SECTION",{"data-cy":!0,class:!0});var P=b(t);s=y(P,"FORM",{class:!0});var V=b(s);n=y(V,"DIV",{"data-cy":!0,class:!0});var X=b(n);l=y(X,"LABEL",{for:!0,class:!0});var Z=b(l);a=F(Z,"Paste template"),Z.forEach(m),o=M(X),u=y(X,"TEXTAREA",{"data-cy":!0,class:!0,id:!0}),b(u).forEach(m),X.forEach(m),c=M(V),_&&_.l(V),E=M(V),g&&g.l(V),V.forEach(m),N=M(P),d&&d.l(P),P.forEach(m),S.forEach(m),this.h()},h(){i(l,"for","json-input"),i(l,"class","text-teal-400 px-1 svelte-r93edu"),i(u,"data-cy","template-input"),i(u,"class","w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-r93edu"),i(u,"id","json-input"),u.value=f=Y(r[1]),i(n,"data-cy","template-input-section"),i(n,"class","mb-6 svelte-r93edu"),i(s,"class","svelte-r93edu"),i(t,"data-cy","form-container"),i(t,"class","max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"),i(e,"class","shotstack-mergefield-form svelte-r93edu")},m(v,S){k(v,e,S),h(e,t),h(t,s),h(s,n),h(n,l),h(l,a),h(n,o),h(n,u),h(s,c),_&&_.m(s,null),h(s,E),g&&g.m(s,null),h(t,N),d&&d.m(t,null),$=!0,p||(T=K(u,"input",r[9]),p=!0)},p(v,[S]){var P;(!$||S&2&&f!==(f=Y(v[1])))&&(u.value=f),v[2]?_?_.p(v,S):(_=se(v),_.c(),_.m(s,E)):_&&(_.d(1),_=null),((P=v[1].merge)==null?void 0:P.length)&&!v[2]?g?g.p(v,S):(g=ne(v),g.c(),g.m(s,null)):g&&(g.d(1),g=null),v[2]?d&&(de(),B(d,1,1,()=>{d=null}),he()):d?(d.p(v,S),S&4&&I(d,1)):(d=ae(v),d.c(),I(d,1),d.m(t,null))},i(v){$||(I(d),$=!0)},o(v){B(d),$=!1},d(v){v&&m(e),_&&_.d(),g&&g.d(),d&&d.d(),p=!1,T()}}}function Y(r){return JSON.stringify(r,null,2)}function We(r){if(typeof window<"u"){const e=new Blob([JSON.stringify(r,null,2)],{type:"text/plain"});return URL.createObjectURL(e)}else return null}function Ze(r,e,t){let s,{editTemplateService:n=new Fe(Je)}=e,l=n.template,a=n.result,o=null;function u(p){n.setTemplateSource(p),t(1,l=n.template),t(0,a=n.result),t(2,o=n.error)}function f(p){n.updateResultMergeFields(p),t(0,a=n.result)}function c(){navigator.clipboard.writeText(JSON.stringify(a)),alert("JSON copied to clipboard!")}function E(){n.submit(),window.alert("Form successfully submitted!")}const N=p=>u(p.currentTarget.value),$=(p,T)=>f({find:p,replace:T.currentTarget.value});return r.$$set=p=>{"editTemplateService"in p&&t(8,n=p.editTemplateService)},r.$$.update=()=>{r.$$.dirty&1&&t(3,s=We(a)||"")},[a,l,o,s,u,f,c,E,n,N,$]}class et extends x{constructor(e){super(),C(this,e,Ze,Qe,U,{editTemplateService:8})}}function tt(r){let e,t;return e=new et({}),{c(){j(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,n){G(e,s,n),t=!0},p:J,i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){B(e.$$.fragment,s),t=!1},d(s){H(e,s)}}}class nt extends x{constructor(e){super(),C(this,e,null,tt,U,{})}}export{nt as default};
