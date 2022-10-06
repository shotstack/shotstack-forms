var Shotstack=function(){"use strict";var rt=Object.defineProperty;var lt=(I,A,j)=>A in I?rt(I,A,{enumerable:!0,configurable:!0,writable:!0,value:j}):I[A]=j;var L=(I,A,j)=>(lt(I,typeof A!="symbol"?A+"":A,j),j);function I(){}function A(e){return e()}function j(){return Object.create(null)}function U(e){e.forEach(A)}function he(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let $;function pe(e,t){return $||($=document.createElement("a")),$.href=t,e===$.href}function _e(e){return Object.keys(e).length===0}let B=!1;function ge(){B=!0}function ye(){B=!1}function ve(e,t,n,r){for(;e<t;){const c=e+(t-e>>1);n(c)<=r?e=c+1:t=c}return e}function Ne(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&l.push(u)}t=l}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let c=0;for(let l=0;l<t.length;l++){const a=t[l].claim_order,u=(c>0&&t[n[c]].claim_order<=a?c+1:ve(1,c,p=>t[n[p]].claim_order,a))-1;r[l]=n[u]+1;const m=u+1;n[m]=l,c=Math.max(m,c)}const o=[],i=[];let s=t.length-1;for(let l=n[c]+1;l!=0;l=r[l-1]){for(o.push(t[l-1]);s>=l;s--)i.push(t[s]);s--}for(;s>=0;s--)i.push(t[s]);o.reverse(),i.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<i.length;l++){for(;a<o.length&&i[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;e.insertBefore(i[l],u)}}function _(e,t){if(B){for(Ne(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function O(e,t,n){B&&!n?_(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function Ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function N(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function D(){return C(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function be(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ee(e,t,n,r,c=!1){be(e);const o=(()=>{for(let i=e.claim_info.last_index;i<e.length;i++){const s=e[i];if(t(s)){const l=n(s);return l===void 0?e.splice(i,1):e[i]=l,c||(e.claim_info.last_index=i),s}}for(let i=e.claim_info.last_index-1;i>=0;i--){const s=e[i];if(t(s)){const l=n(s);return l===void 0?e.splice(i,1):e[i]=l,c?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=i,s}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function Me(e,t,n,r){return ee(e,c=>c.nodeName===t,c=>{const o=[];for(let i=0;i<c.attributes.length;i++){const s=c.attributes[i];n[s.name]||o.push(s.name)}o.forEach(i=>c.removeAttribute(i))},()=>r(t))}function E(e,t,n){return Me(e,t,n,N)}function k(e,t){return ee(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>C(t),!0)}function S(e){return k(e," ")}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Q;function z(e){Q=e}const Y=[],te=[],F=[],ne=[],Te=Promise.resolve();let W=!1;function Ie(){W||(W=!0,Te.then(re))}function q(e){F.push(e)}const X=new Set;let J=0;function re(){const e=Q;do{for(;J<Y.length;){const t=Y[J];J++,z(t),Ae(t.$$)}for(z(null),Y.length=0,J=0;te.length;)te.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];X.has(n)||(X.add(n),n())}F.length=0}while(Y.length);for(;ne.length;)ne.pop()();W=!1,X.clear(),z(e)}function Ae(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const we=new Set;function De(e,t){e&&e.i&&(we.delete(e),e.i(t))}function Se(e,t,n,r){const{fragment:c,on_mount:o,on_destroy:i,after_update:s}=e.$$;c&&c.m(t,n),r||q(()=>{const l=o.map(A).filter(he);i?i.push(...l):U(l),e.$$.on_mount=[]}),s.forEach(q)}function xe(e,t){const n=e.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function je(e,t){e.$$.dirty[0]===-1&&(Y.push(e),Ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ce(e,t,n,r,c,o,i,s=[-1]){const l=Q;z(e);const a=e.$$={fragment:null,ctx:null,props:o,update:I,not_equal:c,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:j(),dirty:s,skip_bound:!1,root:t.target||l.$$.root};i&&i(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(m,p,...M)=>{const d=M.length?M[0]:p;return a.ctx&&c(a.ctx[m],a.ctx[m]=d)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](d),u&&je(e,m)),p}):[],a.update(),u=!0,U(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){ge();const m=b(t.target);a.fragment&&a.fragment.l(m),m.forEach(g)}else a.fragment&&a.fragment.c();t.intro&&De(e.$$.fragment),Se(e,t.target,t.anchor,t.customElement),ye(),re()}z(l)}class ke{$destroy(){xe(this,1),this.$destroy=I}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!_e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it="",Le="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==",Oe="A 'merge' property is required",ze="Property 'merge' must be an array",Ye="Property 'merge' must contain at least one element",Re="A 'find' property is required on every element inside 'merge'",Pe="Every 'find' property inside 'merge' must be of type string",Ue="Every 'find' property inside 'merge' must be a string of length equal to or higher than one",$e="A 'replace' property is required on every element inside 'merge'",Be="Unexpected error while parsing template JSON",Fe="Every element inside the 'merge' should be an object";class w extends Error{constructor(t){super(t)}}function Je(e){return typeof e=="object"}function R(e,t){return e in t}function K(e,t){return!R(e,t)}function Ze(e,t){return R(e,t)&&!(t[e]instanceof Array)}function Ge(e,t){return R(e,t)&&typeof t[e]!="string"}function He(e,t){const n=R(e,t)&&t[e];return!(typeof n=="string"&&n.length>0)}function Ve(e,t){const n=R(e,t)&&t[e];return!(n instanceof Array&&n.length>0)}function Qe(e){try{const t=JSON.parse(e);if(K("merge",t))throw new w(Oe);if(Ze("merge",t))throw new w(ze);if(Ve("merge",t))throw new w(Ye);const{merge:n}=t,r=We(n);return{...t,merge:r}}catch(t){throw le(t)}}function We(e){return e.map(n=>{if(!Je(n))throw new w(Fe);if(K("find",n))throw new w(Re);if(K("replace",n))throw new w($e);if(Ge("find",n))throw new w(Pe);if(He("find",n))throw new w(Ue);return n}).map(({find:n,replace:r})=>({find:n,replace:ie(r)}))}function qe(e){return typeof e=="object"&&e!==null&&"message"in e}function le(e){return e instanceof Error?e:qe(e)?new w(e.message):new w(Be)}function ie(e){return typeof e=="string"?e:JSON.stringify(e)}class se{constructor(t){L(this,"template");L(this,"_result");L(this,"_error");L(this,"handlers");this._error=null,this.template={merge:[]},this._result={merge:[]},this.handlers={change:[],submit:[],error:[]},this.setTemplateSource(t)}set error(t){const n=this._error&&{...this._error}||null;this._error=t,t!==null&&this.handlers.error.forEach(r=>r(t,n))}get error(){return this._error}set result(t){const n={...this._result};this._result=t,this.handlers.change.forEach(r=>r(t,n))}get result(){return this._result}on(t,n){this.handlers[t].push(n)}submit(){if(this.error)throw this.error;this.handlers.submit.forEach(t=>t(this.result))}setTemplateSource(t){try{const n=Qe(ie(t));this.template=n,this.result=n,this.error=null}catch(n){const r=le(n);this.error=r}}updateResultMergeFields(t){const{find:n,replace:r}=t,c={find:n,replace:r},o=this.result.merge.map(i=>(i==null?void 0:i.find)===t.find?c:i);return this.result={...this.result,merge:o},o}}const Xe={merge:[{find:"NAME",replace:"world"}],timeline:{tracks:[{clips:[{asset:{type:"title",text:"Hello {{ NAME }}",style:"future"},start:0,length:5}]}]},output:{format:"mp4",resolution:"hd"}},ot="";function ae(e,t,n){const r=e.slice();return r[9]=t[n].find,r[10]=t[n].replace,r}function ce(e){let t,n,r=e[2].message+"",c;return{c(){t=N("p"),n=N("span"),c=C(r),this.h()},l(o){t=E(o,"P",{"data-cy":!0,class:!0});var i=b(t);n=E(i,"SPAN",{class:!0});var s=b(n);c=k(s,r),s.forEach(g),i.forEach(g),this.h()},h(){h(n,"class","monospace text-orange-900 svelte-u6rap9"),h(t,"data-cy","template-input-error"),h(t,"class","bg-rose-200 rounded py-2 px-4 svelte-u6rap9")},m(o,i){O(o,t,i),_(t,n),_(n,c)},p(o,i){i&4&&r!==(r=o[2].message+"")&&V(c,r)},d(o){o&&g(t)}}}function oe(e){let t,n,r,c,o,i=e[0].merge,s=[];for(let l=0;l<i.length;l+=1)s[l]=ue(ae(e,i,l));return{c(){t=N("div"),n=N("h1"),r=C("Modify Merge Values"),c=D(),o=N("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=E(l,"DIV",{"data-cy":!0,class:!0});var a=b(t);n=E(a,"H1",{class:!0});var u=b(n);r=k(u,"Modify Merge Values"),u.forEach(g),c=S(a),o=E(a,"DIV",{class:!0});var m=b(o);for(let p=0;p<s.length;p+=1)s[p].l(m);m.forEach(g),a.forEach(g),this.h()},h(){h(n,"class","text-teal-400 px-1 svelte-u6rap9"),h(o,"class","border p-4 mb-6 svelte-u6rap9"),h(t,"data-cy","merge-fields-input-section"),h(t,"class","svelte-u6rap9")},m(l,a){O(l,t,a),_(t,n),_(n,r),_(t,c),_(t,o);for(let u=0;u<s.length;u+=1)s[u].m(o,null)},p(l,a){if(a&17){i=l[0].merge;let u;for(u=0;u<i.length;u+=1){const m=ae(l,i,u);s[u]?s[u].p(m,a):(s[u]=ue(m),s[u].c(),s[u].m(o,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=i.length}},d(l){l&&g(t),Ee(s,l)}}}function ue(e){let t,n,r="{{ "+e[9]+" }} ",c,o,i,s,l,a,u,m,p;function M(...d){return e[8](e[9],...d)}return{c(){t=N("div"),n=N("label"),c=C(r),i=D(),s=N("input"),u=D(),this.h()},l(d){t=E(d,"DIV",{"data-cy":!0,class:!0});var f=b(t);n=E(f,"LABEL",{for:!0,class:!0});var y=b(n);c=k(y,r),y.forEach(g),i=S(f),s=E(f,"INPUT",{class:!0,id:!0,type:!0}),u=S(f),f.forEach(g),this.h()},h(){h(n,"for",o=e[9]),h(n,"class","block mb-2 monospace svelte-u6rap9"),h(s,"class","border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"),h(s,"id",l=e[9]),h(s,"type","text"),s.value=a=e[10],h(t,"data-cy","label-input"),h(t,"class","svelte-u6rap9")},m(d,f){O(d,t,f),_(t,n),_(n,c),_(t,i),_(t,s),_(t,u),m||(p=H(s,"input",M),m=!0)},p(d,f){e=d,f&1&&r!==(r="{{ "+e[9]+" }} ")&&V(c,r),f&1&&o!==(o=e[9])&&h(n,"for",o),f&1&&l!==(l=e[9])&&h(s,"id",l),f&1&&a!==(a=e[10])&&s.value!==a&&(s.value=a)},d(d){d&&g(t),m=!1,p()}}}function fe(e){let t,n,r,c,o,i,s,l,a,u=Z(e[1])+"",m,p,M;return{c(){t=N("div"),n=N("h1"),r=C("Result"),c=D(),o=N("abbr"),i=N("img"),l=D(),a=N("p"),m=C(u),this.h()},l(d){t=E(d,"DIV",{"data-cy":!0,class:!0});var f=b(t);n=E(f,"H1",{class:!0});var y=b(n);r=k(y,"Result"),y.forEach(g),c=S(f),o=E(f,"ABBR",{title:!0,class:!0});var P=b(o);i=E(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(g),l=S(f),a=E(f,"P",{"data-cy":!0,class:!0});var v=b(a);m=k(v,u),v.forEach(g),f.forEach(g),this.h()},h(){h(n,"class","text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"),pe(i.src,s=Le)||h(i,"src",s),h(i,"alt","copy-button"),h(i,"class","h-4 cursor-pointer inline mb-1 svelte-u6rap9"),h(o,"title","Copy to clipboard"),h(o,"class","svelte-u6rap9"),h(a,"data-cy","result"),h(a,"class","h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"),h(t,"data-cy","result-section"),h(t,"class","svelte-u6rap9")},m(d,f){O(d,t,f),_(t,n),_(n,r),_(t,c),_(t,o),_(o,i),_(t,l),_(t,a),_(a,m),p||(M=H(i,"click",e[5]),p=!0)},p(d,f){f&2&&u!==(u=Z(d[1])+"")&&V(m,u)},d(d){d&&g(t),p=!1,M()}}}function Ke(e){var P;let t,n,r,c,o,i,s,l,a,u,m,p,M,d=e[2]&&ce(e),f=((P=e[0].merge)==null?void 0:P.length)&&!e[2]&&oe(e),y=!e[2]&&fe(e);return{c(){t=N("section"),n=N("form"),r=N("div"),c=N("label"),o=C("Paste template"),i=D(),s=N("textarea"),a=D(),d&&d.c(),u=D(),f&&f.c(),m=D(),y&&y.c(),this.h()},l(v){t=E(v,"SECTION",{"data-cy":!0,class:!0});var T=b(t);n=E(T,"FORM",{class:!0});var x=b(n);r=E(x,"DIV",{"data-cy":!0,class:!0});var G=b(r);c=E(G,"LABEL",{for:!0,class:!0});var de=b(c);o=k(de,"Paste template"),de.forEach(g),i=S(G),s=E(G,"TEXTAREA",{"data-cy":!0,class:!0,id:!0}),b(s).forEach(g),G.forEach(g),a=S(x),d&&d.l(x),u=S(x),f&&f.l(x),x.forEach(g),m=S(T),y&&y.l(T),T.forEach(g),this.h()},h(){h(c,"for","json-input"),h(c,"class","text-teal-400 px-1 svelte-u6rap9"),h(s,"data-cy","template-input"),h(s,"class","w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"),h(s,"id","json-input"),s.value=l=Z(e[0]),h(r,"data-cy","template-input-section"),h(r,"class","mb-6 svelte-u6rap9"),h(n,"class","svelte-u6rap9"),h(t,"data-cy","form-container"),h(t,"class","max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9")},m(v,T){O(v,t,T),_(t,n),_(n,r),_(r,c),_(c,o),_(r,i),_(r,s),_(n,a),d&&d.m(n,null),_(n,u),f&&f.m(n,null),_(t,m),y&&y.m(t,null),p||(M=H(s,"input",e[7]),p=!0)},p(v,[T]){var x;T&1&&l!==(l=Z(v[0]))&&(s.value=l),v[2]?d?d.p(v,T):(d=ce(v),d.c(),d.m(n,u)):d&&(d.d(1),d=null),((x=v[0].merge)==null?void 0:x.length)&&!v[2]?f?f.p(v,T):(f=oe(v),f.c(),f.m(n,null)):f&&(f.d(1),f=null),v[2]?y&&(y.d(1),y=null):y?y.p(v,T):(y=fe(v),y.c(),y.m(t,null))},i:I,o:I,d(v){v&&g(t),d&&d.d(),f&&f.d(),y&&y.d(),p=!1,M()}}}function Z(e){return JSON.stringify(e,null,2)}function et(e,t,n){let{editTemplateService:r=new se(Xe)}=t,c=r.template,o=r.result,i=null;function s(p){r.setTemplateSource(p),n(0,c=r.template),n(1,o=r.result),n(2,i=r.error)}function l(p){r.updateResultMergeFields(p),n(1,o=r.result)}function a(){navigator.clipboard.writeText(JSON.stringify(o)),alert("JSON copied to clipboard!")}const u=p=>s(p.currentTarget.value),m=(p,M)=>l({find:p,replace:M.currentTarget.value});return e.$$set=p=>{"editTemplateService"in p&&n(6,r=p.editTemplateService)},[c,o,i,s,l,a,r,u,m]}class tt extends ke{constructor(t){super(),Ce(this,t,et,Ke,me,{editTemplateService:6})}}class nt{constructor(t,n=document.querySelector("#shotstack-form-field")){L(this,"templateService");this.containerElement=n,this.templateService=new se(t),this.initialize()}on(t,n){this.templateService.on(t,n)}submit(){this.templateService.submit()}initialize(){!this.containerElement||this.containerElement&&this.render(this.containerElement)}render(t){new tt({target:t,props:{editTemplateService:this.templateService}})}display(){!this.containerElement||(this.containerElement.style.display="block")}hide(){!this.containerElement||(this.containerElement.style.display="none")}attach(t){this.remove(),this.containerElement=t,this.render(this.containerElement)}remove(){!this.containerElement||this.containerElement.replaceChildren()}get container(){if(!!this.containerElement)return this.containerElement}merge(){return this.templateService.result}}return nt}();
