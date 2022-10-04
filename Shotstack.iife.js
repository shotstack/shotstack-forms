var Shotstack=function(){"use strict";var Ke=Object.defineProperty;var et=(w,D,L)=>D in w?Ke(w,D,{enumerable:!0,configurable:!0,writable:!0,value:L}):w[D]=L;var J=(w,D,L)=>(et(w,typeof D!="symbol"?D+"":D,L),L);function w(){}function D(t){return t()}function L(){return Object.create(null)}function P(t){t.forEach(D)}function pe(t){return typeof t=="function"}function me(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function _e(t,e){return F||(F=document.createElement("a")),F.href=e,t===F.href}function ge(t){return Object.keys(t).length===0}let B=!1;function ye(){B=!0}function Ne(){B=!1}function ve(t,e,r,n){for(;t<e;){const l=t+(e-t>>1);r(l)<=n?t=l+1:e=l}return t}function be(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const u=e[o];u.claim_order!==void 0&&s.push(u)}e=s}const r=new Int32Array(e.length+1),n=new Int32Array(e.length);r[0]=-1;let l=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,u=(l>0&&e[r[l]].claim_order<=o?l+1:ve(1,l,m=>e[r[m]].claim_order,o))-1;n[s]=r[u]+1;const h=u+1;r[h]=s,l=Math.max(h,l)}const c=[],i=[];let a=e.length-1;for(let s=r[l]+1;s!=0;s=n[s-1]){for(c.push(e[s-1]);a>=s;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);c.reverse(),i.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<i.length;s++){for(;o<c.length&&i[s].claim_order>=c[o].claim_order;)o++;const u=o<c.length?c[o]:null;t.insertBefore(i[s],u)}}function p(t,e){if(B){for(be(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function z(t,e,r){B&&!r?p(t,e):(e.parentNode!==t||e.nextSibling!=r)&&t.insertBefore(e,r||null)}function _(t){t.parentNode.removeChild(t)}function Ee(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function v(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function j(){return C(" ")}function V(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function d(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function M(t){return Array.from(t.childNodes)}function Me(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,r,n,l=!1){Me(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const a=t[i];if(e(a)){const s=r(a);return s===void 0?t.splice(i,1):t[i]=s,l||(t.claim_info.last_index=i),a}}for(let i=t.claim_info.last_index-1;i>=0;i--){const a=t[i];if(e(a)){const s=r(a);return s===void 0?t.splice(i,1):t[i]=s,l?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,a}}return n()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Te(t,e,r,n){return K(t,l=>l.nodeName===e,l=>{const c=[];for(let i=0;i<l.attributes.length;i++){const a=l.attributes[i];r[a.name]||c.push(a.name)}c.forEach(i=>l.removeAttribute(i))},()=>n(e))}function E(t,e,r){return Te(t,e,r,v)}function O(t,e){return K(t,r=>r.nodeType===3,r=>{const n=""+e;if(r.data.startsWith(n)){if(r.data.length!==n.length)return r.splitText(n.length)}else r.data=n},()=>C(e),!0)}function k(t){return O(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let Q;function Y(t){Q=t}const R=[],ee=[],Z=[],te=[],Ie=Promise.resolve();let W=!1;function Ae(){W||(W=!0,Ie.then(re))}function $(t){Z.push(t)}const q=new Set;let G=0;function re(){const t=Q;do{for(;G<R.length;){const e=R[G];G++,Y(e),Se(e.$$)}for(Y(null),R.length=0,G=0;ee.length;)ee.pop()();for(let e=0;e<Z.length;e+=1){const r=Z[e];q.has(r)||(q.add(r),r())}Z.length=0}while(R.length);for(;te.length;)te.pop()();W=!1,q.clear(),Y(t)}function Se(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const we=new Set;function De(t,e){t&&t.i&&(we.delete(t),t.i(e))}function je(t,e,r,n){const{fragment:l,on_mount:c,on_destroy:i,after_update:a}=t.$$;l&&l.m(e,r),n||$(()=>{const s=c.map(D).filter(pe);i?i.push(...s):P(s),t.$$.on_mount=[]}),a.forEach($)}function ke(t,e){const r=t.$$;r.fragment!==null&&(P(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Ce(t,e){t.$$.dirty[0]===-1&&(R.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Le(t,e,r,n,l,c,i,a=[-1]){const s=Q;Y(t);const o=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:l,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:L(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};i&&i(o.root);let u=!1;if(o.ctx=r?r(t,e.props||{},(h,m,...y)=>{const g=y.length?y[0]:m;return o.ctx&&l(o.ctx[h],o.ctx[h]=g)&&(!o.skip_bound&&o.bound[h]&&o.bound[h](g),u&&Ce(t,h)),m}):[],o.update(),u=!0,P(o.before_update),o.fragment=n?n(o.ctx):!1,e.target){if(e.hydrate){ye();const h=M(e.target);o.fragment&&o.fragment.l(h),h.forEach(_)}else o.fragment&&o.fragment.c();e.intro&&De(t.$$.fragment),je(t,e.target,e.anchor,e.customElement),Ne(),re()}Y(s)}class Oe{$destroy(){ke(this,1),this.$destroy=w}$on(e,r){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const l=n.indexOf(r);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!ge(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="",xe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAyLjYgNzAuNjNsLTYxLjI1LTYxLjI1QzQzNS40IDMuMzcxIDQyNy4yIDAgNDE4LjcgMEgyNTUuMWMtMzUuMzUgMC02NCAyOC42Ni02NCA2NGwuMDE5NSAyNTZDMTkyIDM1NS40IDIyMC43IDM4NCAyNTYgMzg0aDE5MmMzNS4yIDAgNjQtMjguOCA2NC02NFY5My4yNUM1MTIgODQuNzcgNTA4LjYgNzYuNjMgNTAyLjYgNzAuNjN6TTQ2NCAzMjBjMCA4LjgzNi03LjE2NCAxNi0xNiAxNkgyNTUuMWMtOC44MzggMC0xNi03LjE2NC0xNi0xNkwyMzkuMSA2NC4xM2MwLTguODM2IDcuMTY0LTE2IDE2LTE2aDEyOEwzODQgOTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg0Ny4xVjMyMHpNMjcyIDQ0OGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDYzLjFjLTguODM4IDAtMTYtNy4xNjQtMTYtMTZMNDcuOTggMTkyLjFjMC04LjgzNiA3LjE2NC0xNiAxNi0xNkgxNjBWMTI4SDYzLjk5Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0bC4wMDk4IDI1NkMuMDAyIDQ4My4zIDI4LjY2IDUxMiA2NCA1MTJoMTkyYzM1LjIgMCA2NC0yOC44IDY0LTY0di0zMmgtNDcuMUwyNzIgNDQ4eiIvPjwvc3ZnPg==",ze="A 'merge' property is required",Ye="Property 'merge' must be an array",Re="Property 'merge' must contain at least one element",Je="A 'find' property is required on every element inside 'merge'",Pe="Every 'find' property inside 'merge' must be of type string",Fe="Every 'find' property inside 'merge' must be a string of length equal to or higher than one",Be="A 'replace' property is required on every element inside 'merge'";class x extends Error{constructor(e){super(e)}}function X(t,e){return!(t in e)}function Ue(t,e){return!(e[t]instanceof Array)}function Ze(t,e){return typeof e[t]!="string"}function Ge(t,e){return!(typeof e[t]=="string"&&e[t].length>0)}function He(t,e){return!(e[t]instanceof Array&&e[t].length>0)}function ne(t){try{const e=JSON.parse(t);if(X("merge",e))throw new x(ze);if(Ue("merge",e))throw new x(Ye);if(He("merge",e))throw new x(Re);const r=Ve(e.merge);return{...e,merge:r}}catch(e){throw e instanceof Error?e:new x("There was a problem parsing the template json")}}function Ve(t){return t.map(r=>{if(X("find",r))throw new x(Je);if(X("replace",r))throw new x(Be);if(Ze("find",r))throw new x(Pe);if(Ge("find",r))throw new x(Fe);return r}).map(({find:r,replace:n})=>({find:r,replace:typeof n=="string"?n:JSON.stringify(n)}))}class le{constructor(e){J(this,"template");J(this,"_result");J(this,"handlers");const r=this.parseInitialTemplate(e);this.template=r,this._result=r,this.handlers={change:[],submit:[]}}set result(e){this._result=e,this.handlers.change.forEach(r=>r(e))}get result(){return this._result}on(e,r){this.handlers[e].push(r)}submit(){this.handlers.submit.forEach(e=>e(this.result))}parseInitialTemplate(e){const n=typeof e=="string"?e:JSON.stringify(e);try{return ne(n)}catch{return{merge:[]}}}setTemplateSource(e){try{const r=ne(e);return this.template=r,this.result=r,r}catch(r){throw r instanceof Error?r:new Error("Error parsing JSON")}}updateResultMergeFields(e){const{find:r,replace:n}=e,l={find:r,replace:n},c=this.result.merge.map(i=>(i==null?void 0:i.find)===e.find?l:i);return this.result={...this.result,merge:c},c}}const Qe={merge:[{find:"NAME",replace:"world"}],timeline:{tracks:[{clips:[{asset:{type:"title",text:"Hello {{ NAME }}",style:"future"},start:0,length:5}]}]},output:{format:"mp4",resolution:"hd"}},it="";function ie(t,e,r){const n=t.slice();return n[9]=e[r].find,n[10]=e[r].replace,n}function se(t){let e,r,n;return{c(){e=v("p"),r=v("span"),n=C(t[2]),this.h()},l(l){e=E(l,"P",{"data-cy":!0,class:!0});var c=M(e);r=E(c,"SPAN",{class:!0});var i=M(r);n=O(i,t[2]),i.forEach(_),c.forEach(_),this.h()},h(){d(r,"class","monospace text-orange-900 svelte-u6rap9"),d(e,"data-cy","template-input-error"),d(e,"class","bg-rose-200 rounded py-2 px-4 svelte-u6rap9")},m(l,c){z(l,e,c),p(e,r),p(r,n)},p(l,c){c&4&&U(n,l[2])},d(l){l&&_(e)}}}function ae(t){let e,r,n,l,c,i=t[0].merge,a=[];for(let s=0;s<i.length;s+=1)a[s]=ce(ie(t,i,s));return{c(){e=v("div"),r=v("h1"),n=C("Modify Merge Values"),l=j(),c=v("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=E(s,"DIV",{"data-cy":!0,class:!0});var o=M(e);r=E(o,"H1",{class:!0});var u=M(r);n=O(u,"Modify Merge Values"),u.forEach(_),l=k(o),c=E(o,"DIV",{class:!0});var h=M(c);for(let m=0;m<a.length;m+=1)a[m].l(h);h.forEach(_),o.forEach(_),this.h()},h(){d(r,"class","text-teal-400 px-1 svelte-u6rap9"),d(c,"class","border p-4 mb-6 svelte-u6rap9"),d(e,"data-cy","merge-fields-input-section"),d(e,"class","svelte-u6rap9")},m(s,o){z(s,e,o),p(e,r),p(r,n),p(e,l),p(e,c);for(let u=0;u<a.length;u+=1)a[u].m(c,null)},p(s,o){if(o&33){i=s[0].merge;let u;for(u=0;u<i.length;u+=1){const h=ie(s,i,u);a[u]?a[u].p(h,o):(a[u]=ce(h),a[u].c(),a[u].m(c,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=i.length}},d(s){s&&_(e),Ee(a,s)}}}function ce(t){let e,r,n="{{ "+t[9]+" }} ",l,c,i,a,s,o,u,h,m;function y(...g){return t[8](t[9],...g)}return{c(){e=v("div"),r=v("label"),l=C(n),i=j(),a=v("input"),u=j(),this.h()},l(g){e=E(g,"DIV",{"data-cy":!0,class:!0});var f=M(e);r=E(f,"LABEL",{for:!0,class:!0});var N=M(r);l=O(N,n),N.forEach(_),i=k(f),a=E(f,"INPUT",{class:!0,id:!0,type:!0}),u=k(f),f.forEach(_),this.h()},h(){d(r,"for",c=t[9]),d(r,"class","block mb-2 monospace svelte-u6rap9"),d(a,"class","border w-full mb-3 pl-2 py-1 text-stone-500 svelte-u6rap9"),d(a,"id",s=t[9]),d(a,"type","text"),a.value=o=fe(t[10]),d(e,"data-cy","label-input"),d(e,"class","svelte-u6rap9")},m(g,f){z(g,e,f),p(e,r),p(r,l),p(e,i),p(e,a),p(e,u),h||(m=V(a,"input",y),h=!0)},p(g,f){t=g,f&1&&n!==(n="{{ "+t[9]+" }} ")&&U(l,n),f&1&&c!==(c=t[9])&&d(r,"for",c),f&1&&s!==(s=t[9])&&d(a,"id",s),f&1&&o!==(o=fe(t[10]))&&a.value!==o&&(a.value=o)},d(g){g&&_(e),h=!1,m()}}}function oe(t){let e,r,n;return{c(){e=v("p"),r=v("span"),n=C(t[3]),this.h()},l(l){e=E(l,"P",{"data-cy":!0,class:!0});var c=M(e);r=E(c,"SPAN",{class:!0});var i=M(r);n=O(i,t[3]),i.forEach(_),c.forEach(_),this.h()},h(){d(r,"class","monospace text-orange-900 svelte-u6rap9"),d(e,"data-cy","merge-fields-input-error"),d(e,"class","bg-rose-200 rounded py-2 px-4 svelte-u6rap9")},m(l,c){z(l,e,c),p(e,r),p(r,n)},p(l,c){c&8&&U(n,l[3])},d(l){l&&_(e)}}}function ue(t){let e,r,n,l,c,i,a,s,o,u=JSON.stringify(t[1],null,2)+"",h,m,y;return{c(){e=v("div"),r=v("h1"),n=C("Result"),l=j(),c=v("abbr"),i=v("img"),s=j(),o=v("p"),h=C(u),this.h()},l(g){e=E(g,"DIV",{"data-cy":!0,class:!0});var f=M(e);r=E(f,"H1",{class:!0});var N=M(r);n=O(N,"Result"),N.forEach(_),l=k(f),c=E(f,"ABBR",{title:!0,class:!0});var T=M(c);i=E(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(_),s=k(f),o=E(f,"P",{"data-cy":!0,class:!0});var I=M(o);h=O(I,u),I.forEach(_),f.forEach(_),this.h()},h(){d(r,"class","text-teal-400 px-1 inline-block mr-2 svelte-u6rap9"),_e(i.src,a=xe)||d(i,"src",a),d(i,"alt","copy-button"),d(i,"class","h-4 cursor-pointer inline mb-1 svelte-u6rap9"),d(c,"title","Copy to clipboard"),d(c,"class","svelte-u6rap9"),d(o,"data-cy","result"),d(o,"class","h-60 overflow-auto border p-4 whitespace-pre monospace svelte-u6rap9"),d(e,"data-cy","result-section"),d(e,"class","svelte-u6rap9")},m(g,f){z(g,e,f),p(e,r),p(r,n),p(e,l),p(e,c),p(c,i),p(e,s),p(e,o),p(o,h),m||(y=V(i,"click",t[6]),m=!0)},p(g,f){f&2&&u!==(u=JSON.stringify(g[1],null,2)+"")&&U(h,u)},d(g){g&&_(e),m=!1,y()}}}function We(t){var de;let e,r,n,l,c,i,a,s,o,u,h,m,y,g,f=t[2]&&se(t),N=((de=t[0].merge)==null?void 0:de.length)&&!t[2]&&ae(t),T=t[3]&&oe(t),I=!t[3]&&!t[2]&&ue(t);return{c(){e=v("section"),r=v("form"),n=v("div"),l=v("label"),c=C("Paste template"),i=j(),a=v("textarea"),o=j(),f&&f.c(),u=j(),N&&N.c(),h=j(),T&&T.c(),m=j(),I&&I.c(),this.h()},l(b){e=E(b,"SECTION",{"data-cy":!0,class:!0});var A=M(e);r=E(A,"FORM",{class:!0});var S=M(r);n=E(S,"DIV",{"data-cy":!0,class:!0});var H=M(n);l=E(H,"LABEL",{for:!0,class:!0});var he=M(l);c=O(he,"Paste template"),he.forEach(_),i=k(H),a=E(H,"TEXTAREA",{"data-cy":!0,class:!0,id:!0}),M(a).forEach(_),H.forEach(_),o=k(S),f&&f.l(S),u=k(S),N&&N.l(S),h=k(S),T&&T.l(S),S.forEach(_),m=k(A),I&&I.l(A),A.forEach(_),this.h()},h(){d(l,"for","json-input"),d(l,"class","text-teal-400 px-1 svelte-u6rap9"),d(a,"data-cy","template-input"),d(a,"class","w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none svelte-u6rap9"),d(a,"id","json-input"),a.value=s=JSON.stringify(t[0],null,2),d(n,"data-cy","template-input-section"),d(n,"class","mb-6 svelte-u6rap9"),d(r,"class","svelte-u6rap9"),d(e,"data-cy","form-container"),d(e,"class","max-w-lg my-4 mx-auto border rounded-xl px-7 py-4 svelte-u6rap9")},m(b,A){z(b,e,A),p(e,r),p(r,n),p(n,l),p(l,c),p(n,i),p(n,a),p(r,o),f&&f.m(r,null),p(r,u),N&&N.m(r,null),p(r,h),T&&T.m(r,null),p(e,m),I&&I.m(e,null),y||(g=V(a,"input",t[4]),y=!0)},p(b,[A]){var S;A&1&&s!==(s=JSON.stringify(b[0],null,2))&&(a.value=s),b[2]?f?f.p(b,A):(f=se(b),f.c(),f.m(r,u)):f&&(f.d(1),f=null),((S=b[0].merge)==null?void 0:S.length)&&!b[2]?N?N.p(b,A):(N=ae(b),N.c(),N.m(r,h)):N&&(N.d(1),N=null),b[3]?T?T.p(b,A):(T=oe(b),T.c(),T.m(r,null)):T&&(T.d(1),T=null),!b[3]&&!b[2]?I?I.p(b,A):(I=ue(b),I.c(),I.m(e,null)):I&&(I.d(1),I=null)},i:w,o:w,d(b){b&&_(e),f&&f.d(),N&&N.d(),T&&T.d(),I&&I.d(),y=!1,g()}}}function fe(t){if(typeof t=="string")return t;try{return JSON.stringify(t)}catch{return t}}function $e(t,e,r){let{editTemplateService:n=new le(Qe)}=e,l=n.template,c=n.result,i,a;function s(m){try{const y=n.setTemplateSource(m.target.value);r(0,l=y),r(1,c=y),r(2,i="")}catch(y){r(2,i=y.message)}}function o(m){try{const y=n.updateResultMergeFields(m);r(1,c={...c,merge:y}),r(3,a="")}catch(y){r(3,a=y.message)}}function u(){navigator.clipboard.writeText(JSON.stringify(c)),alert("JSON copied to clipboard!")}const h=(m,y)=>o({find:m,replace:y.currentTarget.value});return t.$$set=m=>{"editTemplateService"in m&&r(7,n=m.editTemplateService)},[l,c,i,a,s,o,u,n,h]}class qe extends Oe{constructor(e){super(),Le(this,e,$e,We,me,{editTemplateService:7})}}class Xe{constructor(e,r=document.querySelector("#shotstack-form-field")){J(this,"templateService");this.containerElement=r,this.templateService=new le(e),this.initialize()}on(e,r){this.templateService.on(e,r)}submit(){this.templateService.submit()}initialize(){!this.containerElement||this.containerElement&&this.render(this.containerElement)}render(e){new qe({target:e,props:{editTemplateService:this.templateService}})}display(){!this.containerElement||(this.containerElement.style.display="block")}hide(){!this.containerElement||(this.containerElement.style.display="none")}attach(e){this.remove(),this.containerElement=e,this.render(this.containerElement)}remove(){!this.containerElement||this.containerElement.replaceChildren()}get container(){if(!!this.containerElement)return this.containerElement}merge(){return this.templateService.result}}return Xe}();
