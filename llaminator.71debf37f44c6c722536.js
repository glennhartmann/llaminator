/*! For license information please see llaminator.71debf37f44c6c722536.js.LICENSE.txt */
(()=>{"use strict";var t,e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var s=i.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,n="?"+r,o=`<${n}>`,a=document,l=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u=/-->/g,p=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,v=/'/g,m=/"/g,y=/^(?:script|style|textarea)$/i,g=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),$=g(1),_=(g(2),Symbol.for("lit-noChange")),b=Symbol.for("lit-nothing"),w=new WeakMap,E=(t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new O(e.insertBefore(l(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},S=a.createTreeWalker(a,129,null,!1),A=(t,e)=>{const i=t.length-1,n=[];let a,l=2===e?"<svg>":"",c=h;for(let e=0;e<i;e++){const i=t[e];let s,d,g=-1,$=0;for(;$<i.length&&(c.lastIndex=$,d=c.exec(i),null!==d);)$=c.lastIndex,c===h?"!--"===d[1]?c=u:void 0!==d[1]?c=p:void 0!==d[2]?(y.test(d[2])&&(a=RegExp("</"+d[2],"g")),c=f):void 0!==d[3]&&(c=f):c===f?">"===d[0]?(c=null!=a?a:h,g=-1):void 0===d[1]?g=-2:(g=c.lastIndex-d[2].length,s=d[1],c=void 0===d[3]?f:'"'===d[3]?m:v):c===m||c===v?c=f:c===u||c===p?c=h:(c=f,a=void 0);const _=c===f&&t[e+1].startsWith("/>")?" ":"";l+=c===h?i+o:g>=0?(n.push(s),i.slice(0,g)+"$lit$"+i.slice(g)+r+_):i+r+(-2===g?(n.push(void 0),e):_)}const d=l+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==s?s.createHTML(d):d,n]};class C{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let a=0,c=0;const d=t.length-1,h=this.parts,[u,p]=A(t,e);if(this.el=C.createElement(u,s),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=S.nextNode())&&h.length<d;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(r)){const i=p[c++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(r),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?x:"?"===e[1]?D:"@"===e[1]?j:R})}else h.push({type:6,index:a})}for(const e of t)o.removeAttribute(e)}if(y.test(o.tagName)){const t=o.textContent.split(r),e=t.length-1;if(e>0){o.textContent=i?i.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],l()),S.nextNode(),h.push({type:2,index:++a});o.append(t[e],l())}}}else if(8===o.nodeType)if(o.data===n)h.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(r,t+1));)h.push({type:7,index:a}),t+=r.length-1}a++}}static createElement(t,e){const i=a.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,s){var r,n,o,a;if(e===_)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const d=c(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,s)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:a).importNode(i,!0);S.currentNode=r;let n=S.nextNode(),o=0,l=0,c=s[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new O(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new k(n,this,t)),this.v.push(e),c=s[++l]}o!==(null==c?void 0:c.index)&&(n=S.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),c(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==_&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==b&&c(this._$AH)?this._$AA.nextSibling.data=t:this.S(a.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=C.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new U(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new C(t)),e}M(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.A(l()),this.A(l()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class R{constructor(t,e,i,s,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=P(this,t,e,0),n=!c(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=P(this,s[i+o],e,o),a===_&&(a=this._$AH[o]),n||(n=!c(a)||a!==this._$AH[o]),a===b?t=b:t!==b&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.k(t)}k(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class x extends R{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===b?void 0:t}}const T=i?i.emptyScript:"";class D extends R{constructor(){super(...arguments),this.type=4}k(t){t&&t!==b?this.element.setAttribute(this.name,T):this.element.removeAttribute(this.name)}}class j extends R{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:b)===_)return;const s=this._$AH,r=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class k{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const M=window.litHtmlPolyfillSupport;let I,L;null==M||M(C,O),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.0.2");const N=new WeakMap,B=new WeakMap,H=new WeakMap,z=new WeakMap,V=new WeakMap;let q={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return B.get(t);if("objectStoreNames"===e)return t.objectStoreNames||H.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return K(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function W(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(F(this),t),K(N.get(this))}:function(...t){return K(e.apply(F(this),t))}:function(t,...i){const s=e.call(F(this),t,...i);return H.set(s,t.sort?t.sort():[t]),K(s)}:(t instanceof IDBTransaction&&function(t){if(B.has(t))return;const e=new Promise(((e,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",n),t.removeEventListener("abort",n)},r=()=>{e(),s()},n=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",n),t.addEventListener("abort",n)}));B.set(t,e)}(t),i=t,(I||(I=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>i instanceof t))?new Proxy(t,q):t);var e,i}function K(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",n)},r=()=>{e(K(t.result)),s()},n=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",n)}));return e.then((e=>{e instanceof IDBCursor&&N.set(e,t)})).catch((()=>{})),V.set(e,t),e}(t);if(z.has(t))return z.get(t);const e=W(t);return e!==t&&(z.set(t,e),V.set(e,t)),e}const F=t=>V.get(t),J=["get","getKey","getAll","getAllKeys","count"],Z=["put","add","delete","clear"],G=new Map;function Q(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(G.get(e))return G.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,r=Z.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!J.includes(i))return;const n=async function(t,...e){const n=this.transaction(t,r?"readwrite":"readonly");let o=n.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[i](...e),r&&n.done]))[0]};return G.set(e,n),n}var X,Y;Y=q,q={...Y,get:(t,e,i)=>Q(t,e)||Y.get(t,e,i),has:(t,e)=>!!Q(t,e)||Y.has(t,e)};var tt=new Uint8Array(16);function et(){if(!X&&!(X="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(tt)}const it=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,st=function(t){return"string"==typeof t&&it.test(t)};for(var rt=[],nt=0;nt<256;++nt)rt.push((nt+256).toString(16).substr(1));const ot=function(t,e,i){var s=(t=t||{}).random||(t.rng||et)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=s[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(rt[t[e+0]]+rt[t[e+1]]+rt[t[e+2]]+rt[t[e+3]]+"-"+rt[t[e+4]]+rt[t[e+5]]+"-"+rt[t[e+6]]+rt[t[e+7]]+"-"+rt[t[e+8]]+rt[t[e+9]]+"-"+rt[t[e+10]]+rt[t[e+11]]+rt[t[e+12]]+rt[t[e+13]]+rt[t[e+14]]+rt[t[e+15]]).toLowerCase();if(!st(i))throw TypeError("Stringified UUID is invalid");return i}(s)};class at{constructor(t){console.log("Database initialized"),this.db=t}static async create(){return new at(await function(t,e,{blocked:i,upgrade:s,blocking:r,terminated:n}={}){const o=indexedDB.open(t,e),a=K(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(K(o.result),t.oldVersion,t.newVersion,K(o.transaction))})),i&&o.addEventListener("blocked",(()=>i())),a.then((t=>{n&&t.addEventListener("close",(()=>n())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}("appDB",void 0,{upgrade(t,e,i,s){console.log("DB update request"),t.createObjectStore("blob"),t.createObjectStore("metadata"),t.createObjectStore("miscStringVals")}}))}async add(t,e){const i=ot(),s=Date.now(),r={id:i,metadata:e,added:s,blobModified:s,metadataModified:s},n=this.db.transaction(["blob","metadata"],"readwrite");return await Promise.allSettled([n.objectStore("blob").put(t,i),n.objectStore("metadata").put(r,i),n.done]),console.log(`successfully added '${i}'`),r}async list(){return this.db.getAll("metadata")}async getFile(t){const e=await this.db.get("blob",t);if(e)return console.log(`successfully retrieved blob for '${t}'`),e;console.log(`no blob found for id '${t}'`)}async get(t){const e=await this.db.get("metadata",t);if(e)return console.log(`successfully retrieved metadata for '${t}'`),e;console.log(`no record found for id '${t}'`)}async update(t,e,i){if(!e&&!i)throw new TypeError("neither |file| nor |metadata| was provided");const s=this.db.transaction(["blob","metadata"],"readwrite"),r=Date.now(),n=await s.objectStore("metadata").get(t);if(!n)throw new ReferenceError(`no record found for id '${t}'`);return i&&(n.metadata=i,n.metadataModified=r),e&&(n.blobModified=r,await s.objectStore("blob").put(e,t)),await s.objectStore("metadata").put(n,t),await s.done,console.log(`successfully updated '${t}'`),n}async delete(t){const e=this.db.transaction(["blob","metadata"],"readwrite");await Promise.allSettled([await e.objectStore("blob").delete(t),await e.objectStore("metadata").delete(t),await e.done]),console.log(`deleted '${t}'`)}}const lt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),ct=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),ht=new Map;class ut{constructor(t,e){if(this._$cssResult$=!0,e!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ht.get(this.cssText);return ct&&void 0===t&&(ht.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const pt=ct?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new ut("string"==typeof t?t:t+"",dt))(e)})(t):t;var ft;const vt=window.trustedTypes,mt=vt?vt.emptyScript:"",yt=window.reactiveElementPolyfillSupport,gt={toAttribute(t,e){switch(e){case Boolean:t=t?mt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$t=(t,e)=>e!==t&&(e==e||t==t),_t={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:$t};class bt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(pt(t))}else void 0!==t&&e.push(pt(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{ct?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=_t){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:gt.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:gt.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}bt.finalized=!0,bt.elementProperties=new Map,bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},null==yt||yt({ReactiveElement:bt}),(null!==(ft=globalThis.reactiveElementVersions)&&void 0!==ft?ft:globalThis.reactiveElementVersions=[]).push("1.0.2");const wt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),St=new Map;class At{constructor(t,e){if(this._$cssResult$=!0,e!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=St.get(this.cssText);return wt&&void 0===t&&(St.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Ct=wt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new At("string"==typeof t?t:t+"",Et))(e)})(t):t;var Pt;const Ut=window.trustedTypes,Ot=Ut?Ut.emptyScript:"",Rt=window.reactiveElementPolyfillSupport,xt={toAttribute(t,e){switch(e){case Boolean:t=t?Ot:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Tt=(t,e)=>e!==t&&(e==e||t==t),Dt={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:Tt};class jt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=Dt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Ct(t))}else void 0!==t&&e.push(Ct(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{wt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=Dt){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:xt.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:xt.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Tt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var kt,Mt;jt.finalized=!0,jt.elementProperties=new Map,jt.elementStyles=[],jt.shadowRootOptions={mode:"open"},null==Rt||Rt({ReactiveElement:jt}),(null!==(Pt=globalThis.reactiveElementVersions)&&void 0!==Pt?Pt:globalThis.reactiveElementVersions=[]).push("1.0.2");class It extends jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=E(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return _}}It.finalized=!0,It._$litElement$=!0,null===(kt=globalThis.litElementHydrateSupport)||void 0===kt||kt.call(globalThis,{LitElement:It});const Lt=globalThis.litElementPolyfillSupport;null==Lt||Lt({LitElement:It}),(null!==(Mt=globalThis.litElementVersions)&&void 0!==Mt?Mt:globalThis.litElementVersions=[]).push("3.0.2");let Nt=class extends It{constructor(){super(...arguments),this.items=[]}createRenderRoot(){return this}async refresh(t){const e=[];for(const i of await t.list()){const s=await t.getFile(i.id);if(!s)continue;const r=URL.createObjectURL(s);e.push($`
          <llama-item .storage=${t} id=${i.id} src=${r}>
          </llama-item>`)}this.items=e,this.requestUpdate()}render(){return this.items}};Nt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}([lt("llama-vertical-scroll-layout")],Nt);let Bt=class extends Nt{};Bt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}([lt("llama-thumbnail-grid-layout")],Bt);class Ht{constructor(t,e){this.elements=t,this.storage=at.create(),this.elements.select.addEventListener("fileselected",Ht.prototype.onFileSelected.bind(this)),this.elements.container.addEventListener("itemdeleted",Ht.prototype.onItemDeleted.bind(this)),this.layout="thumbnail-grid"===e?new Bt:new Nt}async resetContainer(){const{container:t}=this.elements;for(;t.firstChild;)t.firstChild.remove();E(this.layout,this.elements.container),this.layout.refresh(await this.storage)}async onFileSelected(t){const e=await this.storage,i=t.detail,s=new Blob([await i.arrayBuffer()],{type:i.type}),r=await e.add(s,{filename:i.name,mimeType:i.type});console.log(`stored image as id ${r.id}`),await this.layout.refresh(e)}async onItemDeleted(t){await this.layout.refresh(await this.storage)}}const zt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Vt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):zt(t,e)}var qt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let Wt=class extends It{constructor(){super(...arguments),this.title="Untitled"}createRenderRoot(){return this}render(){return $`
      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <span class="mdc-top-app-bar__title">${this.title}</span>
          </section>
        </div>
      </header>`}};qt([Vt({type:String})],Wt.prototype,"title",void 0),Wt=qt([lt("llama-header")],Wt);var Kt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const Ft="share"in navigator&&"canShare"in navigator;let Jt=class extends It{constructor(){super(...arguments),this.id="",this.src=""}createRenderRoot(){return this}async shareItem(){if(!this.storage)return void console.warn("Unable to share this item: @storage property not set.");const t=await this.storage,e=await t.get(this.id),i=await t.getFile(this.id);if(!e||!i)return;const s=new File([i],e.metadata.filename,{type:e.metadata.mimeType});navigator.canShare({files:[s]})&&navigator.share({files:[s]})}async deleteItem(){if(!this.storage)return void console.warn("Unable to share this item: @storage property not set.");const t=await this.storage;await t.delete(this.id),this.dispatchEvent(new CustomEvent("itemdeleted",{bubbles:!0,detail:this.id}))}render(){return $`
      <div class="mdc-card">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 llama-card-media"
            style="background-image: url(${this.src})">
          </div>
          <!-- TODO: Display filename/date/time information? -->
          <!-- TODO: Add a ripple effect -->
          <!-- TODO: Expand / go fullscreen on activation -->
        </div>
        <div class="mdc-card__actions">
          <div class="mdc-card__action-icons">
            ${Ft&&$`
              <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                      title="Share this item"
                      @click=${this.shareItem}>
                share
              </button>`}
            <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                    title="Delete this item"
                    @click=${this.deleteItem}>
              <!-- TODO: Add confirmation prompt before deleting -->
              delete
            </button>
          </div>
        </div>
      </div>`}};Kt([Vt({type:String})],Jt.prototype,"id",void 0),Kt([Vt({type:Object})],Jt.prototype,"storage",void 0),Kt([Vt({type:String})],Jt.prototype,"src",void 0),Jt=Kt([lt("llama-item")],Jt);var Zt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let Gt=class extends It{createRenderRoot(){return this}handleInputChange(t){t.target instanceof HTMLInputElement&&(!t.target.files||t.target.files.length<1||this.dispatchEvent(new CustomEvent("fileselected",{detail:t.target.files[0]})))}render(){return $`
      <div class="mdc-touch-target-wrapper">
        <button class="mdc-fab mdc-fab--touch">
          <label aria-label="Select a file to store in Llaminator" for="select">
            <input type="file" accept="image/*" id="select" hidden
                   @click=${()=>{this.fileInput&&(this.fileInput.value="")}}
                   @change=${this.handleInputChange} />
            <div class="mdc-fab__ripple"></div>
            <span class="material-icons mdc-fab__icon">file_upload</span>
            <div class="mdc-fab__touch"></div>
          </label>
        </button>
      </div>`}};Zt([function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}("#select")],Gt.prototype,"fileInput",void 0),Gt=Zt([lt("llama-select-fab")],Gt),e.p,"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("sw.js")})),window.addEventListener("load",(()=>{!window.indexedDB||window.URL;const t=new URLSearchParams(window.location.search).get("layout")||"vertical-scroll";new Ht({container:document.querySelector("main"),select:document.querySelector("#input")},t).resetContainer()}))})();