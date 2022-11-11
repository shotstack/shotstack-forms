(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function v(){}function ze(n,e){for(const t in e)n[t]=e[t];return n}function Ne(n){return n()}function ge(){return Object.create(null)}function J(n){n.forEach(Ne)}function ne(n){return typeof n=="function"}function T(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let X;function Ge(n,e){return X||(X=document.createElement("a")),X.href=e,n===X.href}function He(n){return Object.keys(n).length===0}function Xe(n,...e){if(n==null)return v;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function pe(n,e,t){n.$$.on_destroy.push(Xe(e,t))}function Ye(n,e,t,l){if(n){const r=Me(n,e,t,l);return n[0](r)}}function Me(n,e,t,l){return n[1]&&l?ze(t.ctx.slice(),n[1](l(e))):t.ctx}function Ke(n,e,t,l){if(n[2]&&l){const r=n[2](l(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],i=Math.max(e.dirty.length,r.length);for(let u=0;u<i;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function Qe(n,e,t,l,r,s){if(r){const i=Me(e,t,l,s);n.p(i,r)}}function We(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let l=0;l<t;l++)e[l]=-1;return e}return-1}function g(n,e){n.appendChild(e)}function S(n,e,t){n.insertBefore(e,t||null)}function F(n){n.parentNode.removeChild(n)}function je(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function Z(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function x(n){return document.createTextNode(n)}function P(){return x(" ")}function j(n,e,t,l){return n.addEventListener(e,t,l),()=>n.removeEventListener(e,t,l)}function fe(n){return function(e){return e.preventDefault(),n.call(this,e)}}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ze(n){return Array.from(n.childNodes)}function re(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function _e(n,e){n.value=e==null?"":e}function R(n,e,t){n.classList[t?"add":"remove"](e)}let de;function z(n){de=n}const V=[],ee=[],Q=[],ie=[],et=Promise.resolve();let oe=!1;function tt(){oe||(oe=!0,et.then(Ae))}function ue(n){Q.push(n)}function be(n){ie.push(n)}const se=new Set;let Y=0;function Ae(){const n=de;do{for(;Y<V.length;){const e=V[Y];Y++,z(e),nt(e.$$)}for(z(null),V.length=0,Y=0;ee.length;)ee.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];se.has(t)||(se.add(t),t())}Q.length=0}while(V.length);for(;ie.length;)ie.pop()();oe=!1,se.clear(),z(n)}function nt(n){if(n.fragment!==null){n.update(),J(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ue)}}const W=new Set;let L;function Re(){L={r:0,c:[],p:L}}function xe(){L.r||J(L.c),L=L.p}function w(n,e){n&&n.i&&(W.delete(n),n.i(e))}function y(n,e,t,l){if(n&&n.o){if(W.has(n))return;W.add(n),L.c.push(()=>{W.delete(n),l&&(t&&n.d(1),l())}),n.o(e)}else l&&l()}function we(n,e,t){const l=n.$$.props[e];l!==void 0&&(n.$$.bound[l]=t,t(n.$$.ctx[l]))}function I(n){n&&n.c()}function E(n,e,t,l){const{fragment:r,on_mount:s,on_destroy:i,after_update:u}=n.$$;r&&r.m(e,t),l||ue(()=>{const a=s.map(Ne).filter(ne);i?i.push(...a):J(a),n.$$.on_mount=[]}),u.forEach(ue)}function O(n,e){const t=n.$$;t.fragment!==null&&(J(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function rt(n,e){n.$$.dirty[0]===-1&&(V.push(n),tt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function $(n,e,t,l,r,s,i,u=[-1]){const a=de;z(n);const o=n.$$={fragment:null,ctx:null,props:s,update:v,not_equal:r,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ge(),dirty:u,skip_bound:!1,root:e.target||a.$$.root};i&&i(o.root);let c=!1;if(o.ctx=t?t(n,e.props||{},(f,h,..._)=>{const m=_.length?_[0]:h;return o.ctx&&r(o.ctx[f],o.ctx[f]=m)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](m),c&&rt(n,f)),h}):[],o.update(),c=!0,J(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const f=Ze(e.target);o.fragment&&o.fragment.l(f),f.forEach(F)}else o.fragment&&o.fragment.c();e.intro&&w(n.$$.fragment),E(n,e.target,e.anchor,e.customElement),Ae()}z(a)}class k{$destroy(){O(this,1),this.$destroy=v}$on(e,t){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(t),()=>{const r=l.indexOf(t);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!He(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lt="A 'merge' property is required",st="Property 'merge' must be an array",it="A 'find' property is required on every element inside 'merge'",ot="Every 'find' property inside 'merge' must be of type string",ut="Every 'find' property inside 'merge' must be a string of length equal to or higher than one",at="A 'replace' property is required on every element inside 'merge'",ct="Unexpected error while parsing template JSON",ft="Every element inside the 'merge' should be an object";var dt=Object.defineProperty,mt=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,ve=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,ye=(n,e,t)=>e in n?dt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_t=(n,e)=>{for(var t in e||(e={}))gt.call(e,t)&&ye(n,t,e[t]);if(ve)for(var t of ve(e))pt.call(e,t)&&ye(n,t,e[t]);return n},bt=(n,e)=>mt(n,ht(e));class A extends Error{constructor(e){super(e)}}function wt(n){return typeof n=="object"}function le(n,e){return n in e}function ae(n,e){return!le(n,e)}function vt(n,e){return le(n,e)&&!(e[n]instanceof Array)}function yt(n,e){return le(n,e)&&typeof e[n]!="string"}function Ft(n,e){const t=le(n,e)&&e[n];return!(typeof t=="string"&&t.length>0)}function St(n){try{const e=JSON.parse(n);if(ae("merge",e))throw new A(lt);if(vt("merge",e))throw new A(st);const{merge:t}=e,l=Et(t);return bt(_t({},e),{merge:l})}catch(e){throw De(e)}}function Et(n){return n.map(t=>{if(!wt(t))throw new A(ft);if(ae("find",t))throw new A(it);if(ae("replace",t))throw new A(at);if(yt("find",t))throw new A(ot);if(Ft("find",t))throw new A(ut);return t}).map(({find:t,replace:l})=>({find:t,replace:Le(l)}))}function Ot(n){return typeof n=="object"&&n!==null&&"message"in n}function De(n){return n instanceof Error?n:Ot(n)?new A(n.message):new A(ct)}function Le(n){return typeof n=="string"?n:JSON.stringify(n)}function ce(n){const e=new RegExp("(?<={{).+(?=}})|(?<={{).+(?=}$)|(?<={{).+(?=$)","g"),t=n.match(e);return t&&t.toString().trim()||n}var It=Object.defineProperty,Tt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,Fe=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,Se=(n,e,t)=>e in n?It(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,q=(n,e)=>{for(var t in e||(e={}))kt.call(e,t)&&Se(n,t,e[t]);if(Fe)for(var t of Fe(e))Ct.call(e,t)&&Se(n,t,e[t]);return n},K=(n,e)=>Tt(n,$t(e));class Ue{constructor(e){this._error=null,this.template={merge:[]},this._result={merge:[]},this.handlers={change:[],submit:[],error:[this.logger],upload:[]},this.setTemplateSource(e)}set error(e){const t=this._error&&q({},this._error)||null;this._error=e,e!==null&&this.handlers.error.forEach(l=>l(e,t))}get error(){return this._error}set result(e){this._result=e,this.handlers.change.forEach(t=>t(e))}get result(){return this._result}on(e,t){this.handlers[e].push(t)}off(e,t){this.handlers=K(q({},this.handlers),{[e]:this.handlers[e].filter(l=>l!==t)})}submit(){if(this.error)throw this.error;this.handlers.submit.forEach(e=>e(this.result))}setTemplateSource(e){try{const t=St(Le(e));this.template=t,this.result=t,this.error=null}catch(t){const l=De(t);this.error=l}}updateResultMergeFields(e,t){const l=t||this.getMergeFieldItem({find:e.find});return this.result.merge.forEach(r=>{r===l&&(r.find=e.find,r.replace=e.replace)}),this.result=K(q({},this.result),{merge:this.result.merge}),this.result.merge}logger(e){console.error(e)}addMergeField(e){this.setTemplateSource(K(q({},this.result),{merge:[...this.result.merge,e]}))}removeMergeField(e){this.setTemplateSource(K(q({},this.result),{merge:this.result.merge.filter(t=>t!==e)}))}getMergeFieldItem(e){if(Object.keys(e).length===0)return;const t=function(l){let r;for(r in e)if(l[r]!==e[r])return!1;return!0};return this.result.merge.find(t)}getSrcPlaceholders(){if(!this.template.timeline||!this.template.timeline.tracks)return[];const e=this.template.timeline.tracks,t=[];for(let l=0;l<e.length;l++)for(let r=0;r<e[l].clips.length;r++){const s={placeholder:e[l].clips[r].asset.src,asset:e[l].clips[r].asset};ce(s.placeholder)!==s.placeholder&&t.push(s)}return t}async updateSrc(e,t){let l=t.src;for(let r=0;r<this.handlers.upload.length;r++){const s=this.handlers.upload[r];l=await s(e)}t.src=l,this.handlers.change.forEach(r=>r(this.result))}}const Pt=[{find:"NAME",replace:"world"}],Nt={tracks:[{clips:[{asset:{type:"title",text:"Hello {{ NAME }}",style:"future",src:"{{ ASSET }}"},start:0,length:5}]}]},Mt={format:"mp4",resolution:"hd"},Be={merge:Pt,timeline:Nt,output:Mt},B=[];function Ee(n,e=v){let t;const l=new Set;function r(u){if(T(n,u)&&(n=u,t)){const a=!B.length;for(const o of l)o[1](),B.push(o,n);if(a){for(let o=0;o<B.length;o+=2)B[o][0](B[o+1]);B.length=0}}}function s(u){r(u(n))}function i(u,a=v){const o=[u,a];return l.add(o),l.size===1&&(t=e(r)||v),u(n),()=>{l.delete(o),l.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:i}}function jt(n){let e,t,l;return{c(){e=p("input"),d(e,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),d(e,"type","text"),d(e,"role","textbox"),d(e,"aria-label",n[1])},m(r,s){S(r,e,s),_e(e,n[0]),t||(l=[j(e,"input",n[3]),j(e,"focus",n[4],{once:!0})],t=!0)},p(r,[s]){s&2&&d(e,"aria-label",r[1]),s&1&&e.value!==r[0]&&_e(e,r[0])},i:v,o:v,d(r){r&&F(e),t=!1,J(l)}}}function At(n,e,t){let{value:l}=e,{label:r}=e,{onFocus:s}=e;function i(){l=this.value,t(0,l)}const u=a=>s(a.currentTarget);return n.$$set=a=>{"value"in a&&t(0,l=a.value),"label"in a&&t(1,r=a.label),"onFocus"in a&&t(2,s=a.onFocus)},[l,r,s,i,u]}class Oe extends k{constructor(e){super(),$(this,e,At,jt,T,{value:0,label:1,onFocus:2})}}function Rt(n){let e,t,l,r,s,i,u,a,o,c,f,h,_,m,b,C;function M(N){n[7](N)}let U={label:"MergeField.find",onFocus:n[6]};n[1]!==void 0&&(U.value=n[1]),i=new Oe({props:U}),ee.push(()=>we(i,"value",M));function G(N){n[9](N)}let D={label:"MergeField.replace",onFocus:n[8]};return n[2]!==void 0&&(D.value=n[2]),o=new Oe({props:D}),ee.push(()=>we(o,"value",G)),{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent="Add a new merge field",r=P(),s=p("div"),I(i.$$.fragment),a=P(),I(o.$$.fragment),f=P(),h=p("div"),_=p("button"),_.textContent="Add",d(l,"class","text-teal-400 px-1"),d(_,"aria-label","Add field"),d(_,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"),d(h,"class","flex flex-row-reverse"),d(s,"class","border p-4 mb-6"),d(e,"data-cy","add-merge-field-section")},m(N,H){S(N,e,H),g(e,t),g(t,l),g(t,r),g(t,s),E(i,s,null),g(s,a),E(o,s,null),g(s,f),g(s,h),g(h,_),m=!0,b||(C=j(_,"click",fe(n[10])),b=!0)},p(N,[H]){const me={};!u&&H&2&&(u=!0,me.value=N[1],be(()=>u=!1)),i.$set(me);const he={};!c&&H&4&&(c=!0,he.value=N[2],be(()=>c=!1)),o.$set(he)},i(N){m||(w(i.$$.fragment,N),w(o.$$.fragment,N),m=!0)},o(N){y(i.$$.fragment,N),y(o.$$.fragment,N),m=!1},d(N){N&&F(e),O(i),O(o),b=!1,C()}}}function xt(n,e,t){let l,r,s=Ee("find");pe(n,s,m=>t(1,l=m));let i=Ee("replace");pe(n,i,m=>t(2,r=m));let u=m=>m.set(""),{addField:a}=e;const o=()=>u(s);function c(m){l=m,s.set(l)}const f=()=>u(i);function h(m){r=m,i.set(r)}const _=()=>a({find:l,replace:r});return n.$$set=m=>{"addField"in m&&t(0,a=m.addField)},[a,l,r,s,i,u,o,c,f,h,_]}class Dt extends k{constructor(e){super(),$(this,e,xt,Rt,T,{addField:0})}}function Lt(n){let e,t;return{c(){e=Z("svg"),t=Z("path"),d(t,"fill","white"),d(t,"d","M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"viewBox","0 0 16 16")},m(l,r){S(l,e,r),g(e,t)},p:v,i:v,o:v,d(l){l&&F(e)}}}function Ut(n){return[]}class Bt extends k{constructor(e){super(),$(this,e,Ut,Lt,T,{})}}function Jt(n){let e,t,l,r,s;return t=new Bt({}),{c(){e=p("button"),I(t.$$.fragment),d(e,"class","bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"),d(e,"aria-label","Remove field")},m(i,u){S(i,e,u),E(t,e,null),l=!0,r||(s=j(e,"click",fe(function(){ne(n[0])&&n[0].apply(this,arguments)})),r=!0)},p(i,[u]){n=i},i(i){l||(w(t.$$.fragment,i),l=!0)},o(i){y(t.$$.fragment,i),l=!1},d(i){i&&F(e),O(t),r=!1,s()}}}function qt(n,e,t){let{onClick:l}=e;return n.$$set=r=>{"onClick"in r&&t(0,l=r.onClick)},[l]}class Vt extends k{constructor(e){super(),$(this,e,qt,Jt,T,{onClick:0})}}function zt(n){let e,t;return{c(){e=p("label"),t=x(n[0]),d(e,"for",n[0]),d(e,"class","block mb-2 monospace")},m(l,r){S(l,e,r),g(e,t)},p(l,[r]){r&1&&re(t,l[0]),r&1&&d(e,"for",l[0])},i:v,o:v,d(l){l&&F(e)}}}function Gt(n,e,t){let{find:l}=e;return n.$$set=r=>{"find"in r&&t(0,l=r.find)},[l]}class Ht extends k{constructor(e){super(),$(this,e,Gt,zt,T,{find:0})}}function Xt(n){let e,t,l;return{c(){e=p("input"),d(e,"role","textbox"),d(e,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),d(e,"type","text"),e.value=n[2],d(e,"label",n[1])},m(r,s){S(r,e,s),t||(l=j(e,"input",n[4]),t=!0)},p(r,[s]){s&4&&e.value!==r[2]&&(e.value=r[2]),s&2&&d(e,"label",r[1])},i:v,o:v,d(r){r&&F(e),t=!1,l()}}}function Yt(n,e,t){let{field:l}=e,{find:r}=e,{replace:s}=e,{handleFormInput:i}=e;const u=a=>i({find:r,replace:a.currentTarget.value},l);return n.$$set=a=>{"field"in a&&t(0,l=a.field),"find"in a&&t(1,r=a.find),"replace"in a&&t(2,s=a.replace),"handleFormInput"in a&&t(3,i=a.handleFormInput)},[l,r,s,i,u]}class Kt extends k{constructor(e){super(),$(this,e,Yt,Xt,T,{field:0,find:1,replace:2,handleFormInput:3})}}function Qt(n){let e,t,l,r,s;return t=new Ht({props:{find:n[0].find}}),r=new Kt({props:{find:n[0].find,replace:n[0].replace,field:n[0],handleFormInput:n[1]}}),{c(){e=p("div"),I(t.$$.fragment),l=P(),I(r.$$.fragment),d(e,"data-cy","label-input")},m(i,u){S(i,e,u),E(t,e,null),g(e,l),E(r,e,null),s=!0},p(i,[u]){const a={};u&1&&(a.find=i[0].find),t.$set(a);const o={};u&1&&(o.find=i[0].find),u&1&&(o.replace=i[0].replace),u&1&&(o.field=i[0]),u&2&&(o.handleFormInput=i[1]),r.$set(o)},i(i){s||(w(t.$$.fragment,i),w(r.$$.fragment,i),s=!0)},o(i){y(t.$$.fragment,i),y(r.$$.fragment,i),s=!1},d(i){i&&F(e),O(t),O(r)}}}function Wt(n,e,t){let{field:l}=e,{handleFormInput:r}=e;return n.$$set=s=>{"field"in s&&t(0,l=s.field),"handleFormInput"in s&&t(1,r=s.handleFormInput)},[l,r]}class Je extends k{constructor(e){super(),$(this,e,Wt,Qt,T,{field:0,handleFormInput:1})}}function Ie(n,e,t){const l=n.slice();return l[6]=e[t],l}function Te(n){let e,t,l,r,s,i;t=new Je({props:{field:n[6],handleFormInput:n[2]}});function u(){return n[5](n[6])}return r=new Vt({props:{onClick:u}}),{c(){e=p("div"),I(t.$$.fragment),l=P(),I(r.$$.fragment),s=P(),d(e,"class","relative")},m(a,o){S(a,e,o),E(t,e,null),g(e,l),E(r,e,null),g(e,s),i=!0},p(a,o){n=a;const c={};o&2&&(c.field=n[6]),o&4&&(c.handleFormInput=n[2]),t.$set(c);const f={};o&18&&(f.onClick=u),r.$set(f)},i(a){i||(w(t.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){y(t.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&F(e),O(t),O(r)}}}function Zt(n){let e,t,l,r,s,i,u,a,o=n[1],c=[];for(let h=0;h<o.length;h+=1)c[h]=Te(Ie(n,o,h));const f=h=>y(c[h],1,1,()=>{c[h]=null});return u=new Dt({props:{addField:n[3]}}),{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent="Modify Merge Values",r=P(),s=p("div");for(let h=0;h<c.length;h+=1)c[h].c();i=P(),I(u.$$.fragment),d(l,"class","text-teal-400 px-1"),d(s,"class","border p-4 mb-6"),d(t,"data-cy","merge-fields-input-section"),R(e,"hidden",n[0])},m(h,_){S(h,e,_),g(e,t),g(t,l),g(t,r),g(t,s);for(let m=0;m<c.length;m+=1)c[m].m(s,null);g(e,i),E(u,e,null),a=!0},p(h,[_]){if(_&22){o=h[1];let b;for(b=0;b<o.length;b+=1){const C=Ie(h,o,b);c[b]?(c[b].p(C,_),w(c[b],1)):(c[b]=Te(C),c[b].c(),w(c[b],1),c[b].m(s,null))}for(Re(),b=o.length;b<c.length;b+=1)f(b);xe()}const m={};_&8&&(m.addField=h[3]),u.$set(m),(!a||_&1)&&R(e,"hidden",h[0])},i(h){if(!a){for(let _=0;_<o.length;_+=1)w(c[_]);w(u.$$.fragment,h),a=!0}},o(h){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)y(c[_]);y(u.$$.fragment,h),a=!1},d(h){h&&F(e),je(c,h),O(u)}}}function en(n,e,t){let{error:l}=e,{fields:r=[]}=e,{handleFormInput:s}=e,{addField:i}=e,{removeField:u}=e;const a=o=>u(o);return n.$$set=o=>{"error"in o&&t(0,l=o.error),"fields"in o&&t(1,r=o.fields),"handleFormInput"in o&&t(2,s=o.handleFormInput),"addField"in o&&t(3,i=o.addField),"removeField"in o&&t(4,u=o.removeField)},[l,r,s,i,u,a]}class tn extends k{constructor(e){super(),$(this,e,en,Zt,T,{error:0,fields:1,handleFormInput:2,addField:3,removeField:4})}}function nn(n){let e,t,l;return{c(){e=p("button"),e.textContent="Reset",d(e,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end")},m(r,s){S(r,e,s),t||(l=j(e,"click",fe(function(){ne(n[0])&&n[0].apply(this,arguments)})),t=!0)},p(r,[s]){n=r},i:v,o:v,d(r){r&&F(e),t=!1,l()}}}function rn(n,e,t){let{onClick:l}=e;return n.$$set=r=>{"onClick"in r&&t(0,l=r.onClick)},[l]}class ln extends k{constructor(e){super(),$(this,e,rn,nn,T,{onClick:0})}}function sn(n){let e,t,l,r,s,i,u,a;return u=new ln({props:{onClick:n[0]}}),{c(){e=p("div"),t=p("p"),l=p("span"),r=x(n[2]),s=P(),i=p("div"),I(u.$$.fragment),d(l,"class","monospace text-orange-900"),d(t,"data-cy","template-input-error"),d(t,"class","bg-rose-200 rounded py-2 my-4 px-4"),d(i,"class","flex flex-row-reverse "),R(e,"hidden",!n[1])},m(o,c){S(o,e,c),g(e,t),g(t,l),g(l,r),g(e,s),g(e,i),E(u,i,null),a=!0},p(o,[c]){(!a||c&4)&&re(r,o[2]);const f={};c&1&&(f.onClick=o[0]),u.$set(f),(!a||c&2)&&R(e,"hidden",!o[1])},i(o){a||(w(u.$$.fragment,o),a=!0)},o(o){y(u.$$.fragment,o),a=!1},d(o){o&&F(e),O(u)}}}function on(n,e,t){let l,{onClick:r}=e,{error:s}=e;return n.$$set=i=>{"onClick"in i&&t(0,r=i.onClick),"error"in i&&t(1,s=i.error)},n.$$.update=()=>{n.$$.dirty&2&&t(2,l=s&&s.message||"")},[r,s,l]}class un extends k{constructor(e){super(),$(this,e,on,sn,T,{onClick:0,error:1})}}const $e=(n,e)=>async t=>await e(t,n);function an(n){let e,t,l=ce(n[1])+"",r,s,i,u,a,o,c;return{c(){e=p("div"),t=p("label"),r=x(l),s=P(),i=p("input"),u=P(),a=p("input"),d(t,"class","block mb-2 monospace"),d(t,"for","input"),d(i,"aria-label","Current source value"),d(i,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),d(i,"type","text"),i.value=n[0],i.disabled=!0,a.disabled=n[2],d(a,"role","button"),d(a,"aria-label","File upload"),d(a,"class","border w-full mb-3 pl-2 py-1 text-stone-500"),d(a,"type","file"),d(e,"data-cy","source-input")},m(f,h){S(f,e,h),g(e,t),g(t,r),g(e,s),g(e,i),g(e,u),g(e,a),o||(c=j(a,"change",n[7]),o=!0)},p(f,[h]){h&2&&l!==(l=ce(f[1])+"")&&re(r,l),h&1&&i.value!==f[0]&&(i.value=f[0]),h&4&&(a.disabled=f[2])},i:v,o:v,d(f){f&&F(e),o=!1,c()}}}function cn(n,e,t){let l,{asset:r}=e,{value:s}=e,{label:i}=e,{handleChange:u}=e,a=!1,o=async f=>{t(6,a=!0),await u(f),t(0,s=r.src),t(6,a=!1)};const c=f=>o(f.currentTarget.files);return n.$$set=f=>{"asset"in f&&t(4,r=f.asset),"value"in f&&t(0,s=f.value),"label"in f&&t(1,i=f.label),"handleChange"in f&&t(5,u=f.handleChange)},n.$$.update=()=>{n.$$.dirty&64&&t(2,l=a)},[s,i,l,o,r,u,a,c]}class qe extends k{constructor(e){super(),$(this,e,cn,an,T,{asset:4,value:0,label:1,handleChange:5})}}function ke(n,e,t){const l=n.slice();return l[2]=e[t],l}function Ce(n){let e,t;return e=new qe({props:{label:n[2].placeholder,handleChange:$e(n[2].asset,n[1]),value:n[2].asset.src,asset:n[2].asset}}),{c(){I(e.$$.fragment)},m(l,r){E(e,l,r),t=!0},p(l,r){const s={};r&1&&(s.label=l[2].placeholder),r&3&&(s.handleChange=$e(l[2].asset,l[1])),r&1&&(s.value=l[2].asset.src),r&1&&(s.asset=l[2].asset),e.$set(s)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function fn(n){let e,t,l,r,s,i=n[0],u=[];for(let o=0;o<i.length;o+=1)u[o]=Ce(ke(n,i,o));const a=o=>y(u[o],1,1,()=>{u[o]=null});return{c(){e=p("div"),t=p("h1"),t.textContent="Update sources",l=P(),r=p("div");for(let o=0;o<u.length;o+=1)u[o].c();d(t,"class","text-teal-400 px-1"),d(r,"class","border p-4 mb-6"),d(e,"data-cy","source-container"),R(e,"hidden",n[0].length<1)},m(o,c){S(o,e,c),g(e,t),g(e,l),g(e,r);for(let f=0;f<u.length;f+=1)u[f].m(r,null);s=!0},p(o,[c]){if(c&3){i=o[0];let f;for(f=0;f<i.length;f+=1){const h=ke(o,i,f);u[f]?(u[f].p(h,c),w(u[f],1)):(u[f]=Ce(h),u[f].c(),w(u[f],1),u[f].m(r,null))}for(Re(),f=i.length;f<u.length;f+=1)a(f);xe()}(!s||c&1)&&R(e,"hidden",o[0].length<1)},i(o){if(!s){for(let c=0;c<i.length;c+=1)w(u[c]);s=!0}},o(o){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)y(u[c]);s=!1},d(o){o&&F(e),je(u,o)}}}function dn(n,e,t){let{sources:l}=e,{handleSourceFieldUpdate:r}=e;return n.$$set=s=>{"sources"in s&&t(0,l=s.sources),"handleSourceFieldUpdate"in s&&t(1,r=s.handleSourceFieldUpdate)},[l,r]}class mn extends k{constructor(e){super(),$(this,e,dn,fn,T,{sources:0,handleSourceFieldUpdate:1})}}function hn(n){let e,t;const l=n[1].default,r=Ye(l,n,n[0],null);return{c(){e=p("label"),r&&r.c(),d(e,"for","json-input"),d(e,"class","text-teal-400 px-1")},m(s,i){S(s,e,i),r&&r.m(e,null),t=!0},p(s,[i]){r&&r.p&&(!t||i&1)&&Qe(r,l,s,s[0],t?Ke(l,s[0],i,null):We(s[0]),null)},i(s){t||(w(r,s),t=!0)},o(s){y(r,s),t=!1},d(s){s&&F(e),r&&r.d(s)}}}function gn(n,e,t){let{$$slots:l={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,l]}class Ve extends k{constructor(e){super(),$(this,e,gn,hn,T,{})}}function te(n){return JSON.stringify(n,null,2)}function pn(n){let e,t,l,r;return{c(){e=p("textarea"),d(e,"data-cy","template-input"),d(e,"class","w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"),d(e,"id","json-input"),e.value=t=te(n[1])},m(s,i){S(s,e,i),l||(r=j(e,"input",n[2]),l=!0)},p(s,[i]){i&2&&t!==(t=te(s[1]))&&(e.value=t)},i:v,o:v,d(s){s&&F(e),l=!1,r()}}}function _n(n,e,t){let{handleTemplateInput:l}=e,{template:r}=e;const s=i=>l(i.currentTarget.value);return n.$$set=i=>{"handleTemplateInput"in i&&t(0,l=i.handleTemplateInput),"template"in i&&t(1,r=i.template)},[l,r,s]}class bn extends k{constructor(e){super(),$(this,e,_n,pn,T,{handleTemplateInput:0,template:1})}}function wn(n){let e;return{c(){e=x("Paste template")},m(t,l){S(t,e,l)},d(t){t&&F(e)}}}function vn(n){let e,t,l,r,s;return t=new Ve({props:{$$slots:{default:[wn]},$$scope:{ctx:n}}}),r=new bn({props:{template:n[0],handleTemplateInput:n[1]}}),{c(){e=p("div"),I(t.$$.fragment),l=P(),I(r.$$.fragment),d(e,"data-cy","template-input-section"),d(e,"class","mb-6")},m(i,u){S(i,e,u),E(t,e,null),g(e,l),E(r,e,null),s=!0},p(i,[u]){const a={};u&4&&(a.$$scope={dirty:u,ctx:i}),t.$set(a);const o={};u&1&&(o.template=i[0]),u&2&&(o.handleTemplateInput=i[1]),r.$set(o)},i(i){s||(w(t.$$.fragment,i),w(r.$$.fragment,i),s=!0)},o(i){y(t.$$.fragment,i),y(r.$$.fragment,i),s=!1},d(i){i&&F(e),O(t),O(r)}}}function yn(n,e,t){let{template:l}=e,{handleTemplateInput:r}=e;return n.$$set=s=>{"template"in s&&t(0,l=s.template),"handleTemplateInput"in s&&t(1,r=s.handleTemplateInput)},[l,r]}class Fn extends k{constructor(e){super(),$(this,e,yn,vn,T,{template:0,handleTemplateInput:1})}}function Sn(n){let e,t;return{c(){e=Z("svg"),t=Z("path"),d(t,"d","M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"),d(e,"class","fill-current w-4 h-4 mr-2"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"viewBox","0 0 20 20")},m(l,r){S(l,e,r),g(e,t)},p:v,i:v,o:v,d(l){l&&F(e)}}}function En(n){return[]}class On extends k{constructor(e){super(),$(this,e,En,Sn,T,{})}}function In(n){let e,t,l,r;return t=new On({}),{c(){e=p("a"),I(t.$$.fragment),l=x(`
	Download`),d(e,"href",n[0]),d(e,"download","result.json"),d(e,"class","bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40 justify-center")},m(s,i){S(s,e,i),E(t,e,null),g(e,l),r=!0},p(s,[i]){(!r||i&1)&&d(e,"href",s[0])},i(s){r||(w(t.$$.fragment,s),r=!0)},o(s){y(t.$$.fragment,s),r=!1},d(s){s&&F(e),O(t)}}}function Tn(n,e,t){let{download:l=""}=e;return n.$$set=r=>{"download"in r&&t(0,l=r.download)},[l]}class $n extends k{constructor(e){super(),$(this,e,Tn,In,T,{download:0})}}function kn(n){let e,t,l;return{c(){e=p("button"),e.textContent="Submit",d(e,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40")},m(r,s){S(r,e,s),t||(l=j(e,"click",function(){ne(n[0])&&n[0].apply(this,arguments)}),t=!0)},p(r,[s]){n=r},i:v,o:v,d(r){r&&F(e),t=!1,l()}}}function Cn(n,e,t){let{submit:l}=e;return n.$$set=r=>{"submit"in r&&t(0,l=r.submit)},[l]}class Pn extends k{constructor(e){super(),$(this,e,Cn,kn,T,{submit:0})}}function Nn(n){let e,t,l,r,s;return t=new $n({props:{download:n[0]}}),r=new Pn({props:{submit:n[1]}}),{c(){e=p("div"),I(t.$$.fragment),l=P(),I(r.$$.fragment),d(e,"class","flex justify-between pt-4")},m(i,u){S(i,e,u),E(t,e,null),g(e,l),E(r,e,null),s=!0},p(i,[u]){const a={};u&1&&(a.download=i[0]),t.$set(a);const o={};u&2&&(o.submit=i[1]),r.$set(o)},i(i){s||(w(t.$$.fragment,i),w(r.$$.fragment,i),s=!0)},o(i){y(t.$$.fragment,i),y(r.$$.fragment,i),s=!1},d(i){i&&F(e),O(t),O(r)}}}function Mn(n,e,t){let{download:l=""}=e,{submit:r}=e;return n.$$set=s=>{"download"in s&&t(0,l=s.download),"submit"in s&&t(1,r=s.submit)},[l,r]}class jn extends k{constructor(e){super(),$(this,e,Mn,Nn,T,{download:0,submit:1})}}function An(n){navigator.clipboard.writeText(JSON.stringify(n)),alert("JSON copied to clipboard!")}const Rn=""+new URL("copy-regular.423f8619.svg",import.meta.url).href;function xn(n){let e,t,l,r,s;return{c(){e=p("abbr"),t=p("img"),Ge(t.src,l=Rn)||d(t,"src",l),d(t,"alt","copy-button"),d(t,"class","h-4 cursor-pointer inline mb-1"),d(e,"title","Copy to clipboard")},m(i,u){S(i,e,u),g(e,t),r||(s=j(t,"click",An),r=!0)},p:v,i:v,o:v,d(i){i&&F(e),r=!1,s()}}}class Dn extends k{constructor(e){super(),$(this,e,null,xn,T,{})}}function Ln(n){let e,t;return{c(){e=p("p"),t=x(n[0]),d(e,"data-cy","result"),d(e,"class","h-60 overflow-auto border p-4 whitespace-pre monospace")},m(l,r){S(l,e,r),g(e,t)},p(l,[r]){r&1&&re(t,l[0])},i:v,o:v,d(l){l&&F(e)}}}function Un(n,e,t){let{text:l}=e;return n.$$set=r=>{"text"in r&&t(0,l=r.text)},[l]}class Bn extends k{constructor(e){super(),$(this,e,Un,Ln,T,{text:0})}}function Jn(n){let e;return{c(){e=x("Result")},m(t,l){S(t,e,l)},d(t){t&&F(e)}}}function qn(n){let e,t,l,r,s,i,u,a,o;return t=new Ve({props:{$$slots:{default:[Jn]},$$scope:{ctx:n}}}),r=new Dn({}),i=new Bn({props:{text:te(n[0])}}),a=new jn({props:{submit:n[2],download:n[1]}}),{c(){e=p("div"),I(t.$$.fragment),l=P(),I(r.$$.fragment),s=P(),I(i.$$.fragment),u=P(),I(a.$$.fragment),d(e,"data-cy","result-section"),R(e,"hidden",n[3])},m(c,f){S(c,e,f),E(t,e,null),g(e,l),E(r,e,null),g(e,s),E(i,e,null),g(e,u),E(a,e,null),o=!0},p(c,[f]){const h={};f&16&&(h.$$scope={dirty:f,ctx:c}),t.$set(h);const _={};f&1&&(_.text=te(c[0])),i.$set(_);const m={};f&4&&(m.submit=c[2]),f&2&&(m.download=c[1]),a.$set(m),(!o||f&8)&&R(e,"hidden",c[3])},i(c){o||(w(t.$$.fragment,c),w(r.$$.fragment,c),w(i.$$.fragment,c),w(a.$$.fragment,c),o=!0)},o(c){y(t.$$.fragment,c),y(r.$$.fragment,c),y(i.$$.fragment,c),y(a.$$.fragment,c),o=!1},d(c){c&&F(e),O(t),O(r),O(i),O(a)}}}function Vn(n,e,t){let{result:l}=e,{download:r}=e,{submit:s}=e,{error:i}=e;return n.$$set=u=>{"result"in u&&t(0,l=u.result),"download"in u&&t(1,r=u.download),"submit"in u&&t(2,s=u.submit),"error"in u&&t(3,i=u.error)},[l,r,s,i]}class zn extends k{constructor(e){super(),$(this,e,Vn,qn,T,{result:0,download:1,submit:2,error:3})}}function Gn(n){let e,t,l,r,s,i,u,a,o,c,f,h,_;return r=new Fn({props:{template:n[1],handleTemplateInput:n[5]}}),i=new un({props:{error:n[2],onClick:n[10]}}),a=new tn({props:{fields:n[0].merge,handleFormInput:n[6],addField:n[8],removeField:n[9],error:n[2]}}),c=new mn({props:{sources:n[3],handleSourceFieldUpdate:n[11]}}),h=new zn({props:{submit:n[7],download:n[4],result:n[0],error:n[2]}}),{c(){e=p("div"),t=p("section"),l=p("form"),I(r.$$.fragment),s=P(),I(i.$$.fragment),u=P(),I(a.$$.fragment),o=P(),I(c.$$.fragment),f=P(),I(h.$$.fragment),d(l,"class","svelte-r93edu"),d(t,"data-cy","form-container"),d(t,"class","max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-r93edu"),d(e,"class","shotstack-mergefield-form svelte-r93edu")},m(m,b){S(m,e,b),g(e,t),g(t,l),E(r,l,null),g(l,s),E(i,l,null),g(l,u),E(a,l,null),g(l,o),E(c,l,null),g(t,f),E(h,t,null),_=!0},p(m,[b]){const C={};b&2&&(C.template=m[1]),r.$set(C);const M={};b&4&&(M.error=m[2]),i.$set(M);const U={};b&1&&(U.fields=m[0].merge),b&4&&(U.error=m[2]),a.$set(U);const G={};b&8&&(G.sources=m[3]),c.$set(G);const D={};b&16&&(D.download=m[4]),b&1&&(D.result=m[0]),b&4&&(D.error=m[2]),h.$set(D)},i(m){_||(w(r.$$.fragment,m),w(i.$$.fragment,m),w(a.$$.fragment,m),w(c.$$.fragment,m),w(h.$$.fragment,m),_=!0)},o(m){y(r.$$.fragment,m),y(i.$$.fragment,m),y(a.$$.fragment,m),y(c.$$.fragment,m),y(h.$$.fragment,m),_=!1},d(m){m&&F(e),O(r),O(i),O(a),O(c),O(h)}}}function Hn(n){if(typeof window<"u"){const e=new Blob([JSON.stringify(n,null,2)],{type:"text/plain"});return URL.createObjectURL(e)}else return null}function Xn(n,e,t){let l,{editTemplateService:r=new Ue(Be)}=e,s=r.template,i=r.result,u=null,a=r.getSrcPlaceholders();function o(C){r.setTemplateSource(C),t(1,s=r.template),t(0,i=r.result),t(2,u=r.error),t(3,a=r.getSrcPlaceholders())}function c(C,M){r.updateResultMergeFields(C,M),t(0,i=r.result)}function f(){r.submit(),window.alert("Form successfully submitted!")}function h(C){r.addMergeField(C),t(1,s=r.template),t(0,i=r.result),t(2,u=r.error)}function _(C){const M=r.getMergeFieldItem(C);r.removeMergeField(M),t(1,s=r.template),t(0,i=r.result),t(2,u=r.error)}function m(){r.setTemplateSource(r.result),t(1,s=r.template),t(0,i=r.result),t(2,u=r.error)}async function b(C,M){await r.updateSrc(C,M),t(1,s=r.template),t(0,i=r.result)}return n.$$set=C=>{"editTemplateService"in C&&t(12,r=C.editTemplateService)},n.$$.update=()=>{n.$$.dirty&1&&t(4,l=Hn(i)||"")},[i,s,u,a,l,o,c,f,h,_,m,b,r]}class Yn extends k{constructor(e){super(),$(this,e,Xn,Gn,T,{editTemplateService:12})}}class Kn{constructor(e){this.templateService=new Ue(e),this.container=void 0}on(e,t){this.templateService.on(e,t)}off(e,t){this.templateService.off(e,t)}submit(){this.templateService.submit()}renderForm(e){this.container=e,new Yn({target:e,props:{editTemplateService:this.templateService}})}renderElements(e,t){const l=this.getInputs();t?t.after(...l):e.append(...l)}display(){this.container&&(this.container.style.display="block")}hide(){this.container&&(this.container.style.display="none")}attach(e){this.remove(),this.container=e,this.renderForm(this.container)}remove(){this.container&&this.container.replaceChildren()}merge(){return this.templateService.result}load(e){this.templateService.setTemplateSource(e)}addField(e,t){this.templateService.addMergeField({find:e,replace:t})}removeField(e){this.templateService.removeMergeField(e)}getField(e){return this.templateService.getMergeFieldItem(e)}getInputs(){const e=document.createElement("div");return this.renderMergeFields(e),this.renderSourceFields(e),e.children}renderMergeFields(e){this.templateService.template.merge.forEach(t=>new Je({target:e,props:{field:t,handleFormInput:l=>{this.templateService.updateResultMergeFields(l,t)}}}))}renderSourceFields(e){this.templateService.getSrcPlaceholders().forEach(t=>new qe({target:e,props:{value:t.asset.src,asset:t.asset,label:t.placeholder,handleChange:async l=>{await this.templateService.updateSrc(l,t.asset)}}}))}}const Qn=new Kn(Be),Pe=document.querySelector("#app");Pe&&Qn.renderForm(Pe);
