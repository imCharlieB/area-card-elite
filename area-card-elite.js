!function(){"use strict";const t="area-card-elite";function e(t,e,i,o){var s,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(a<3?s(n):a>3?s(e,i,n):s(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,s)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,g=globalThis,m=g.trustedTypes,_=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const a=o?.call(this);s.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),s=i.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(o?s:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,v?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const A=globalThis,C=A.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,I="?"+S,P=`<${I}>`,O=document,M=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N=t=>z(t)||"function"==typeof t?.[Symbol.iterator],j="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,V=/>/g,H=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Y=new WeakMap,K=O.createTreeWalker(O,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let s,a=2===e?"<svg>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===R?"!--"===l[1]?n=U:void 0!==l[1]?n=V:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=s??R,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?H:'"'===l[3]?D:L):n===D||n===L?n=H:n===U||n===V?n=R:(n=H,s=void 0);const h=n===H&&t[e+1].startsWith("/>")?" ":"";a+=n===R?i+P:c>=0?(o.push(r),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[G(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class X{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,a=0;const n=t.length-1,r=this.parts,[l,c]=J(t,e);if(this.el=X.createElement(l,i),K.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=c[a++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?it:"?"===n[1]?ot:"@"===n[1]?st:et}),o.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:s}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],M()),K.nextNode(),r.push({type:2,index:++s});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===I)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)r.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,o){if(e===W)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const a=T(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);K.currentNode=o;let s=K.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new tt(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new at(s,this,t)),this._$AV.push(e),r=i[++n]}a!==r?.index&&(s=K.nextNode(),a++)}return K.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):N(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new X(t)),e}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new tt(this.k(M()),this.k(M()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const s=this.strings;let a=!1;if(void 0===s)t=Z(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const o=t;let n,r;for(t=s[0],n=0;n<s.length-1;n++)r=Z(this,o[i+n],e,n),r===W&&(r=this._$AH[n]),a||=!T(r)||r!==this._$AH[n],r===q?t=q:t!==q&&(t+=(r??"")+s[n+1]),this._$AH[n]=r}a&&!o&&this.O(t)}O(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===q?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends et{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===W)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt={j:E,P:S,A:I,C:1,M:J,L:Q,R:N,V:Z,D:tt,I:et,H:ot,N:st,U:it,B:at},rt=A.litHtmlPolyfillSupport;rt?.(X,tt),(A.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let lt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new tt(e.insertBefore(M(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},ut=(t=ht,e,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t)}}throw Error("Unsupported decorator location: "+o)};function ft(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function pt(t){return ft({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const gt=1,mt=2,_t=t=>(...e)=>({_$litDirective$:t,values:e});let vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const yt="important",bt=" !"+yt,$t=_t(class extends vt{constructor(t){if(super(t),t.type!==gt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ut.add(t);const e="string"==typeof o&&o.endsWith(bt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?yt:""):i[t]=o}}return W}}),{D:xt}=nt,wt=()=>document.createComment(""),At=(t,e,i)=>{const o=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(wt(),s),a=o.insertBefore(wt(),s);i=new xt(e,a,t,t.options)}else{const e=i._$AB.nextSibling,a=i._$AM,n=a!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==s||n){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,s),t=e}}}return i},Ct=(t,e,i=t)=>(t._$AI(e,i),t),kt={},Et=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},St=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},It=_t(class extends vt{constructor(t){if(super(t),t.type!==mt)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const s=[],a=[];let n=0;for(const e of t)s[n]=o?o(e,n):n,a[n]=i(e,n),n++;return{values:a,keys:s}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,o]){const s=(t=>t._$AH)(t),{values:a,keys:n}=this.ht(e,i,o);if(!Array.isArray(s))return this.dt=n,a;const r=this.dt??=[],l=[];let c,d,h=0,u=s.length-1,f=0,p=a.length-1;for(;h<=u&&f<=p;)if(null===s[h])h++;else if(null===s[u])u--;else if(r[h]===n[f])l[f]=Ct(s[h],a[f]),h++,f++;else if(r[u]===n[p])l[p]=Ct(s[u],a[p]),u--,p--;else if(r[h]===n[p])l[p]=Ct(s[h],a[p]),At(t,l[p+1],s[h]),h++,p--;else if(r[u]===n[f])l[f]=Ct(s[u],a[f]),At(t,s[h],s[u]),u--,f++;else if(void 0===c&&(c=St(n,f,p),d=St(r,h,u)),c.has(r[h]))if(c.has(r[u])){const e=d.get(n[f]),i=void 0!==e?s[e]:null;if(null===i){const e=At(t,s[h]);Ct(e,a[f]),l[f]=e}else l[f]=Ct(i,a[f]),At(t,s[h],i),s[e]=null;f++}else Et(s[u]),u--;else Et(s[h]),h++;for(;f<=p;){const e=At(t,l[p+1]);Ct(e,a[f]),l[f++]=e}for(;h<=u;){const t=s[h++];null!==t&&Et(t)}return this.dt=n,((t,e=kt)=>{t._$AH=e})(t,l),W}}),Pt=["sensor"],Ot=["binary_sensor"],Mt=["cover"],Tt=["climate"],zt=["camera"],Nt=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],jt={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Rt={alarm_control_panel:{on:"mdi:shield-alert",off:"mdi:shield-check"},siren:{on:"mdi:bell-ring",off:"mdi:bell-outline"},lock:{locked:"mdi:lock",unlocked:"mdi:lock-open-outline",on:"mdi:lock",off:"mdi:lock-open-outline"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-outline"},media_player:{on:"mdi:speaker-wireless",off:"mdi:speaker"},climate:{on:"mdi:thermostat",off:"mdi:thermostat"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-outline"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-outline",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-outline"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-outline"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-variant"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower-outline"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:radiobox-marked",off:"mdi:radiobox-blank",motion:{on:"mdi:run",off:"mdi:walk"},moisture:{on:"mdi:water-alert",off:"mdi:water"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home",off:"mdi:home-outline"},occupancy:{on:"mdi:account",off:"mdi:account-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:door-open",off:"mdi:door-closed"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle",off:"mdi:check-circle"},smoke:{on:"mdi:smoke-detector",off:"mdi:smoke-detector"},running:{on:"mdi:play-circle",off:"mdi:pause-circle-outline"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-outline"},power:{on:"mdi:lightning-bolt",off:"mdi:lightning-bolt-outline"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery"},gas:{on:"mdi:gas-cylinder",off:"mdi:gas-cylinder"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake-alert",off:"mdi:snowflake-variant"},heat:{on:"mdi:fire",off:"mdi:fire-circle"},connectivity:{on:"mdi:wifi",off:"mdi:wifi-strength-outline"},safety:{on:"mdi:shield-alert",off:"mdi:shield-check"},sound:{on:"mdi:volume-high",off:"mdi:volume-low"},update:{on:"mdi:update",off:"mdi:cloud-check"},tamper:{on:"mdi:shield-remove",off:"mdi:shield-check"},light:{on:"mdi:lightbulb-on",off:"mdi:lightbulb-outline"},moving:{on:"mdi:car",off:"mdi:car-outline"}},person:{on:"mdi:account",off:"mdi:account-outline"},device_tracker:{on:"mdi:map-marker",off:"mdi:map-marker-outline"},valve:{on:"mdi:valve-open",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-boiler-alert"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:package-up",off:"mdi:package-check"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-outline"},calendar:{on:"mdi:calendar-check",off:"mdi:calendar-blank"},scene:{on:"mdi:palette",off:"mdi:palette-outline"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text-play",off:"mdi:script-text-outline"}};
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ut(t){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?`${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)}`:"76, 175, 80"}const Vt={motion:"#ff9800",occupancy:"#9c27b0",door:"#f44336",window:"#f44336",moisture:"#2196f3",smoke:"#f44336",gas:"#ff5722",problem:"#f44336",safety:"#f44336",tamper:"#f44336",heat:"#ff9800",cold:"#03a9f4",default:"#f44336"};function Ht(t,e){const i=null==e?void 0:e.alert_color;if(i)return{color:i,rgb:Ut(i)};const o=t&&t in Vt?Vt[t]:Vt.default;return{color:o,rgb:Ut(o)}}const Lt=["unavailable","unknown"],Dt=["off","closed","idle"];let Bt=class extends lt{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),this.requestUpdate()}updated(t){super.updated(t),t.has("hass")&&this.hass&&0===Object.keys(this._areas).length&&this._loadAreas().then((()=>this.requestUpdate()))}async _loadAreas(){var t;try{if(null===(t=this.hass)||void 0===t?void 0:t.connection){const t=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},t.forEach((t=>{this._areas[t.area_id]=t}))}}catch(t){console.error("Failed to load areas:",t),this._areas={}}}setConfig(t){if(!t.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:jt.binary_sensor,sensor_classes:jt.sensor,exclude_entities:[]},t)}_getAreaEntities(){var t,e;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return[];const i=this.hass.states[`area.${this._config.area}`];let o=[];(null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.entity_id)&&(o=Array.isArray(i.attributes.entity_id)?i.attributes.entity_id:[i.attributes.entity_id]);const s=Object.entries(this.hass.states||{}).filter((([t,e])=>{var i,s,a,n;if(null===(s=null===(i=this._config)||void 0===i?void 0:i.exclude_entities)||void 0===s?void 0:s.includes(t))return!1;const[r]=t.split(".");if(!(Nt.includes(r)||Pt.includes(r)||Ot.includes(r)||Mt.includes(r)||Tt.includes(r)||zt.includes(r)))return!1;const l=(null===(a=e.attributes)||void 0===a?void 0:a.area_id)===(null===(n=this._config)||void 0===n?void 0:n.area),c=o.includes(t);return l||c})).map((([t,e])=>({entityId:t,state:e.state,attributes:e.attributes,domain:t.split(".")[0],name:e.attributes.friendly_name||t.split(".")[1],deviceClass:e.attributes.device_class||""})));return s}_getDomainIcon(t,e,i){if(!(t in Rt))return"mdi:help-circle";const o=Rt[t];if(!o)return"mdi:help-circle";if("lock"===t&&"object"==typeof o){if("locked"===e&&"locked"in o)return o.locked;if("unlocked"===e&&"unlocked"in o)return o.unlocked}const s=!Dt.includes(e)&&!Lt.includes(e);if(i&&"object"==typeof o&&i in o){const t=o[i];if(t&&"object"==typeof t&&"on"in t&&"off"in t)return s?t.on:t.off}return"object"==typeof o&&"on"in o&&"off"in o?s?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const t=this._getAreaEntities(),e={};return t.forEach((t=>{e[t.domain]||(e[t.domain]=[]),e[t.domain].push(t)})),e}_getActiveEntities(t,e){return(this._getEntitiesByDomain()[t]||[]).filter((t=>(!e||t.deviceClass===e)&&(!Lt.includes(t.state)&&!Dt.includes(t.state))))}_renderButtons(){const t=this._getEntitiesByDomain(),e=Nt.filter((e=>e in t&&t[e].length>0));return F`
      <div class="buttons">
        ${It(e,(t=>t),(t=>{const e=this._getActiveEntities(t).length,i=e>0;return F`
              <div class="icon-with-count">
                <ha-icon
                  .icon=${this._getDomainIcon(t,i?"on":"off")}
                  class=${i?"toggle-on":"toggle-off"}
                ></ha-icon>
                <span class="active-count ${i?"on":"off"}">
                  ${e}
                </span>
              </div>
            `}))}
      </div>
    `}_renderSensors(){if(!this._config)return q;const t=[];if(this._config.temperature_entity&&this.hass.states[this._config.temperature_entity]){const e=this.hass.states[this._config.temperature_entity];if(!Lt.includes(e.state)){const i=parseFloat(e.state);let o="#03a9f4";isNaN(i)||(o=i>=80?"#f44336":i>=75?"#ff9800":i>=70?"#ffc107":i>=60?"#4caf50":"#03a9f4"),t.push({icon:"mdi:thermometer",value:this.hass.formatEntityState(e),deviceClass:"temperature",color:o})}}if(this._config.humidity_entity&&this.hass.states[this._config.humidity_entity]){const e=this.hass.states[this._config.humidity_entity];Lt.includes(e.state)||t.push({icon:"mdi:water-percent",value:this.hass.formatEntityState(e),deviceClass:"humidity",color:"#2196f3"})}if(this._config.illuminance_entity&&this.hass.states[this._config.illuminance_entity]){const e=this.hass.states[this._config.illuminance_entity];Lt.includes(e.state)||t.push({icon:"mdi:brightness-6",value:this.hass.formatEntityState(e),deviceClass:"illuminance",color:"#ffeb3b"})}if(this._config.power_entity&&this.hass.states[this._config.power_entity]){const e=this.hass.states[this._config.power_entity];Lt.includes(e.state)||t.push({icon:"mdi:flash",value:this.hass.formatEntityState(e),deviceClass:"power",color:"#ff9800"})}if(this._config.energy_entity&&this.hass.states[this._config.energy_entity]){const e=this.hass.states[this._config.energy_entity];Lt.includes(e.state)||t.push({icon:"mdi:lightning-bolt",value:this.hass.formatEntityState(e),deviceClass:"energy",color:"#9c27b0"})}if(this._config.battery_entity&&this.hass.states[this._config.battery_entity]){const e=this.hass.states[this._config.battery_entity];if(!Lt.includes(e.state)){const i=Number(e.state);let o="mdi:battery",s="#4caf50";isNaN(i)||(i<=10?(o="mdi:battery-outline",s="#f44336"):i<=20?(o="mdi:battery-20",s="#ff5722"):i<=50?(o="mdi:battery-50",s="#ff9800"):(o="mdi:battery",s="#4caf50")),t.push({icon:o,value:this.hass.formatEntityState(e),deviceClass:"battery",color:s})}}return 0===t.length?q:F`
      <div class="sensors">
        ${t.map((t=>F`
          <div class="sensor">
            <ha-icon icon="${t.icon}" style="color: ${t.color}"></ha-icon>
            <span class="sensor-value">${t.value}</span>
          </div>
        `))}
      </div>
    `}_areAnyLightsOn(){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return!1;const e=this._getAreaEntities().filter((t=>"light"===t.domain));return e.some((t=>{const e=this.hass.states[t.entityId];return e&&"on"===e.state}))}_getActiveAlertInfo(){if(!this._config)return{hasAlert:!1,color:"#f44336",rgb:"244, 67, 54"};let t;if(this._config.motion_sensor&&this.hass.states[this._config.motion_sensor]){const e=this.hass.states[this._config.motion_sensor];if("on"===e.state){t=e.attributes.device_class||"motion";const i=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:t})}}if(this._config.occupancy_sensor&&this.hass.states[this._config.occupancy_sensor]){const e=this.hass.states[this._config.occupancy_sensor];if("on"===e.state){t=e.attributes.device_class||"occupancy";const i=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:t})}}if(this._config.door_sensor&&this.hass.states[this._config.door_sensor]){const e=this.hass.states[this._config.door_sensor];if("on"===e.state){t=e.attributes.device_class||"door";const i=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:t})}}if(this._config.window_sensor&&this.hass.states[this._config.window_sensor]){const e=this.hass.states[this._config.window_sensor];if("on"===e.state){t=e.attributes.device_class||"window";const i=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:t})}}if(this._config.moisture_sensor&&this.hass.states[this._config.moisture_sensor]){const e=this.hass.states[this._config.moisture_sensor];if("on"===e.state){t=e.attributes.device_class||"moisture";const i=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:t})}}if(this._config.additional_alerts)for(const e of this._config.additional_alerts){const i=this.hass.states[e];if(i&&"on"===i.state){t=i.attributes.device_class;const e=Ht(t,this._config);return Object.assign(Object.assign({hasAlert:!0},e),{deviceClass:t})}}return{hasAlert:!1,color:"#f44336",rgb:"244, 67, 54"}}_hasActiveAlerts(){return this._getActiveAlertInfo().hasAlert}_renderAlerts(){if(!this._config)return q;const t=[];if(this._config.motion_sensor&&this.hass.states[this._config.motion_sensor]){"on"===this.hass.states[this._config.motion_sensor].state&&t.push({icon:"mdi:motion-sensor",name:"Motion",entityId:this._config.motion_sensor})}if(this._config.occupancy_sensor&&this.hass.states[this._config.occupancy_sensor]){"on"===this.hass.states[this._config.occupancy_sensor].state&&t.push({icon:"mdi:account",name:"Occupied",entityId:this._config.occupancy_sensor})}if(this._config.door_sensor&&this.hass.states[this._config.door_sensor]){"on"===this.hass.states[this._config.door_sensor].state&&t.push({icon:"mdi:door-open",name:"Door Open",entityId:this._config.door_sensor})}if(this._config.window_sensor&&this.hass.states[this._config.window_sensor]){"on"===this.hass.states[this._config.window_sensor].state&&t.push({icon:"mdi:window-open-variant",name:"Window Open",entityId:this._config.window_sensor})}if(this._config.moisture_sensor&&this.hass.states[this._config.moisture_sensor]){"on"===this.hass.states[this._config.moisture_sensor].state&&t.push({icon:"mdi:water-alert",name:"Moisture",entityId:this._config.moisture_sensor})}return this._config.additional_alerts&&this._config.additional_alerts.forEach((e=>{const i=this.hass.states[e];i&&"on"===i.state&&t.push({icon:this._getDomainIcon("binary_sensor","on",i.attributes.device_class),name:i.attributes.friendly_name||e.split(".")[1],entityId:e})})),0===t.length?q:F`
      <div class="alerts">
        ${t.map((t=>F`
          <div class="icon-with-count alert" @click=${()=>this._handleEntityClick(t.entityId)}>
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="alert-label">${t.name}</span>
          </div>
        `))}
      </div>
    `}_renderAreaControls(){if(!this._config)return q;const t=[];if(this._config.light_entity&&this.hass.states[this._config.light_entity]){const e=this.hass.states[this._config.light_entity],i="on"===e.state;t.push({icon:i?"mdi:lightbulb":"mdi:lightbulb-outline",name:e.attributes.friendly_name||"Light",entityId:this._config.light_entity,isOn:i,color:i?"#ffc107":"#757575"})}if(this._config.climate_entity&&this.hass.states[this._config.climate_entity]){const e=this.hass.states[this._config.climate_entity],i="off"!==e.state,o=e.state;let s="mdi:thermostat",a="#757575";"heat"===o?(s="mdi:fire",a="#f44336"):"cool"===o?(s="mdi:snowflake",a="#2196f3"):"auto"===o&&(s="mdi:thermostat-auto",a="#4caf50"),t.push({icon:s,name:e.attributes.friendly_name||"Climate",entityId:this._config.climate_entity,isOn:i,color:a})}if(this._config.switch_entity&&this.hass.states[this._config.switch_entity]){const e=this.hass.states[this._config.switch_entity],i="on"===e.state;t.push({icon:i?"mdi:toggle-switch":"mdi:toggle-switch-off",name:e.attributes.friendly_name||"Switch",entityId:this._config.switch_entity,isOn:i,color:i?"#4caf50":"#757575"})}if(this._config.fan_entity&&this.hass.states[this._config.fan_entity]){const e=this.hass.states[this._config.fan_entity],i="on"===e.state;t.push({icon:i?"mdi:fan":"mdi:fan-off",name:e.attributes.friendly_name||"Fan",entityId:this._config.fan_entity,isOn:i,color:i?"#03a9f4":"#757575"})}if(this._config.media_player_entity&&this.hass.states[this._config.media_player_entity]){const e=this.hass.states[this._config.media_player_entity],i="playing"===e.state,o=!Dt.includes(e.state)&&!Lt.includes(e.state);let s="mdi:speaker-off",a="#757575";i?(s="mdi:speaker-play",a="#4caf50"):o&&(s="mdi:speaker",a="#2196f3"),t.push({icon:s,name:e.attributes.friendly_name||"Media",entityId:this._config.media_player_entity,isOn:o,color:a})}this._config.additional_controls&&this._config.additional_controls.forEach((e=>{const i=this.hass.states[e];if(i){const o=e.split(".")[0],s=!Dt.includes(i.state)&&!Lt.includes(i.state);t.push({icon:this._getDomainIcon(o,i.state),name:i.attributes.friendly_name||e.split(".")[1],entityId:e,isOn:s,color:s?"#2196f3":"#757575"})}}));const e=!1!==this._config.show_lights_off_button,i=this._areAnyLightsOn(),o=i?"mdi:lightbulb-group":"mdi:lightbulb-group-off-outline",s=i?"#ffc107":"#757575";return 0!==t.length||e?F`
      <div class="area-controls">
        ${t.map((t=>F`
          <div class="control-button ${t.isOn?"active":""}"
               @click=${()=>this._handleControlClick(t.entityId)}>
            <ha-icon icon="${t.icon}" style="color: ${t.color}"></ha-icon>
          </div>
        `))}
        ${e?F`
          <div class="control-button ${i?"active":""}"
               title="Toggle all lights"
               @click=${()=>this._handleTurnOffAllLights()}>
            <ha-icon icon="${o}" style="color: ${s}"></ha-icon>
          </div>
        `:q}
      </div>
    `:q}_handleControlClick(t){this._handleEntityClick(t)}_handleEntityClick(t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_getAreaCameras(){var t;return(null===(t=this._config)||void 0===t?void 0:t.area)?Object.entries(this.hass.states||{}).filter((([t,e])=>{var i,o;const[s]=t.split(".");return"camera"===s&&(null===(i=e.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([t,e])=>({entityId:t,name:e.attributes.friendly_name||t.split(".")[1]}))):[]}_getAreaName(){var t,e,i;if(null===(t=this._config)||void 0===t?void 0:t.name)return this._config.name;const o=this._areas[(null===(e=this._config)||void 0===e?void 0:e.area)||""];return(null==o?void 0:o.name)||(null===(i=this._config)||void 0===i?void 0:i.area)||"Unknown Area"}_getAreaIcon(){var t,e;if(null===(t=this._config)||void 0===t?void 0:t.icon)return this._config.icon;const i=this._areas[(null===(e=this._config)||void 0===e?void 0:e.area)||""];return(null==i?void 0:i.icon)||"mdi:home"}_getAreaFilteredEntities(t,e){var i;return(null===(i=this._config)||void 0===i?void 0:i.area)?Object.entries(this.hass.states||{}).filter((([i,o])=>{var s,a;const[n]=i.split(".");return n===t&&((!e||o.attributes.device_class===e)&&(null===(s=o.attributes)||void 0===s?void 0:s.area_id)===(null===(a=this._config)||void 0===a?void 0:a.area))})).map((([t])=>t)):[]}_isEntityActive(t){var e;if(!t)return!1;const i=t.entity_id.split(".")[0];if(Lt.includes(t.state))return!1;if("lock"===i)return"locked"===t.state;if("binary_sensor"===i){const i=null===(e=t.attributes)||void 0===e?void 0:e.device_class;if("door"===i||"window"===i||"opening"===i)return"off"===t.state||"closed"===t.state}return"cover"===i?"closed"===t.state:!Dt.includes(t.state)}render(){var t;if(!this.hass||!this._config)return q;const e=this._getAreaName(),i=this._getAreaIcon(),o=this._config.area_name_color?`color: ${this._config.area_name_color};`:"",s=this._config.area_icon_color?`color: ${this._config.area_icon_color};`:"",a={active:{color:(null==(n=this._config)?void 0:n.state_active_color)||"#4caf50",rgb:Ut((null==n?void 0:n.state_active_color)||"#4caf50")},inactive:{color:(null==n?void 0:n.state_inactive_color)||"#607d8b",rgb:Ut((null==n?void 0:n.state_inactive_color)||"#607d8b")}};var n;const r=this._getActiveAlertInfo();let l,c;if(this._config.temperature_entity&&this.hass.states[this._config.temperature_entity]){const t=this.hass.states[this._config.temperature_entity].state;l=parseFloat(t),isNaN(l)&&(l=void 0)}if(this._config.humidity_entity&&this.hass.states[this._config.humidity_entity]){const t=this.hass.states[this._config.humidity_entity].state;c=parseFloat(t),isNaN(c)&&(c=void 0)}const d=function(t){if(null==t)return{color:"transparent",rgb:"0, 0, 0"};let e;return e=t>=80?"#ff5722":t>=75?"#ff9800":t>=70?"#ffc107":t>=65?"#4caf50":t>=60?"#03a9f4":"#2196f3",{color:e,rgb:Ut(e)}}(l),h=function(t){return null==t?.15:t>=70?.25:t>=60?.2:t>=40?.15:.12}(c),u=$t(Object.assign({"--state-active-color":a.active.color,"--state-active-rgb":a.active.rgb,"--state-inactive-color":a.inactive.color,"--state-inactive-rgb":a.inactive.rgb,"--alert-color":r.color,"--alert-rgb":r.rgb,"--temp-color":d.color,"--temp-rgb":d.rgb,"--humidity-intensity":h.toString()},this._config.color&&{backgroundColor:this._config.color})),f=this._config.layout||"compact",p=this._config.features_position||"bottom",g=null===(t=this._config.features)||void 0===t?void 0:t.includes("area-controls"),m=this._config.main_entity?this.hass.states[this._config.main_entity]:null;return F`
      <ha-card class="${this._config.display_type||"compact"} layout-${f} features-${p}" style=${u}>
        <div class="content">
          <!-- Large background entity icon - ONLY for icon display type -->
          ${"icon"===this._config.display_type&&m?F`
            <!-- Separate circle background -->
            <div class="main-entity-circle ${this._isEntityActive(m)?"active":"inactive"} ${this._hasActiveAlerts()?"has-alert":""}">
            </div>
            <!-- Separate entity icon - uses proper domain icon -->
            <div class="main-entity-icon"
                 @click=${()=>{var t;return(null===(t=this._config)||void 0===t?void 0:t.main_entity)&&this._handleEntityClick(this._config.main_entity)}}>
              <ha-icon
                icon="${this._getDomainIcon(m.entity_id.split(".")[0],m.state,m.attributes.device_class)}">
              </ha-icon>
            </div>
          `:q}

          ${"picture"===this._config.display_type&&this._config.background_image?F`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          `:""}

          ${"camera"===this._config.display_type&&this._config.camera_entity?(()=>{var t;const e=this.hass.states[this._config.camera_entity];if("live"===(this._config.camera_view||"live"))return F`
                <hui-image
                  class="camera-view"
                  .hass=${this.hass}
                  .entity=${this._config.camera_entity}
                  .cameraImage=${"live"}
                  .cameraView=${"live"}
                ></hui-image>
              `;{const i=(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.entity_picture)||`/api/camera_proxy/${this._config.camera_entity}`;return F`
                <img
                  class="camera-view"
                  src="${i}"
                  @error=${()=>{var t;return console.error(`Failed to load camera: ${null===(t=this._config)||void 0===t?void 0:t.camera_entity}`)}}
                />
              `}})():""}

          <div class="area-info">
            ${"vertical"===f||"compact"!==this._config.display_type?F`
              <div class="area-icon" style="${s}">
                <ha-icon icon="${i}"></ha-icon>
              </div>
            `:""}
            
            <div class="area-details">
              <div class="area-name" style="${o}">
                ${"vertical"!==f&&"compact"===this._config.display_type?F`
                  <ha-icon icon="${i}" style="${s}"></ha-icon>
                `:""}
                ${e}
              </div>
              
              <!-- For vertical layout, show sensors under the name -->
              ${"vertical"===f?F`
                <div class="area-sensors">
                  ${this._renderSensors()}
                  ${this._renderAlerts()}
                </div>
              `:""}
            </div>
          </div>

          <!-- For non-vertical layouts, show sensors in separate section -->
          ${"vertical"!==f?F`
            <div class="sensors-section">
              ${this._renderSensors()}
              ${this._renderAlerts()}
            </div>
          `:q}

          ${g?F`
            <div class="controls-section">
              ${this._renderAreaControls()}
            </div>
          `:q}

          ${this._renderFeatures()}
        </div>
      </ha-card>
    `}_getBackgroundStyles(){var t,e;const i={};if((null===(t=this._config)||void 0===t?void 0:t.color)&&(i["--card-background-color"]=this._config.color,i.backgroundColor=this._config.color),null===(e=this._config)||void 0===e?void 0:e.aspect_ratio){const t=this._config.aspect_ratio.split(":");if(2===t.length){const e=parseInt(t[1])/parseInt(t[0])*100;i.aspectRatio=this._config.aspect_ratio,i.paddingBottom=`${e}%`}}return i}_renderBackground(){var t,e,i;const o=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";if("camera"===o){const t=this._getAreaCameras();if(t.length>0){const i=t[0];return F`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${i.entityId}
              .cameraView=${(null===(e=this._config)||void 0===e?void 0:e.camera_view)||"auto"}
            ></hui-image>
          </div>
        `}}return"picture"===o&&(null===(i=this._config)||void 0===i?void 0:i.background_image)?F`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `:q}_renderIcon(t){var e;const i=(null===(e=this._config)||void 0===e?void 0:e.display_type)||"compact";return t.icon?"icon"===i?F`<ha-icon .icon=${t.icon} class="large-icon"></ha-icon>`:F`<ha-icon .icon=${t.icon}></ha-icon>`:q}_renderFeatures(){var t,e;const i=(null===(t=this._config)||void 0===t?void 0:t.features)||[],o=(null===(e=this._config)||void 0===e?void 0:e.features_position)||"bottom";return i.length?F`
      <div class="features ${o}">
        ${i.map((t=>{switch(t){case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return q}}))}
      </div>
    `:q}_renderMoreInfoButton(){return F`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `}_renderToggleAllButton(){return F`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `}_handleMoreInfo(){var t;const e=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(t=this._config)||void 0===t?void 0:t.area}`},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAll(){const t=this._getAreaEntities().filter((t=>Nt.includes(t.domain)));t.forEach((t=>{this.hass.callService(t.domain,"toggle",{},{entity_id:t.entityId})}))}async _handleTurnOffAllLights(){var t;if(null===(t=this._config)||void 0===t?void 0:t.area)try{const t=this.hass.connection;if(!t)return void console.error("No websocket connection available");const[e,i]=await Promise.all([t.sendMessagePromise({type:"config/entity_registry/list"}),t.sendMessagePromise({type:"config/device_registry/list"})]),o=new Map;i.forEach((t=>{t.area_id&&o.set(t.id,t.area_id)}));const s=e.filter((t=>{var e,i;return!!t.entity_id.startsWith("light.")&&(t.area_id===(null===(e=this._config)||void 0===e?void 0:e.area)||!(!t.device_id||o.get(t.device_id)!==(null===(i=this._config)||void 0===i?void 0:i.area)))})).map((t=>t.entity_id));if(0===s.length)return void console.log(`No lights found in ${this._config.area}`);const a=s.some((t=>{const e=this.hass.states[t];return e&&"on"===e.state}))?"turn_off":"turn_on";console.log(`${"turn_off"===a?"Turning off":"Turning on"} ${s.length} lights in ${this._config.area}:`,s),await this.hass.callService("light",a,{entity_id:s})}catch(t){console.error("Error toggling lights:",t)}}_hexToRgb(t){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?`${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)}`:"76, 175, 80"}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var Ft,Wt;Bt.styles=r`
    ha-card {
      overflow: hidden;
      position: relative;
      height: 100%;
      padding: 16px;
      transition: all 0.3s ease;
      background: var(--ha-card-background, var(--card-background-color));
      container-type: inline-size;
    }

    /* Temperature weather gradient overlay - subtle colored glow based on temp */
    ha-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 0;
      opacity: var(--humidity-intensity, 0.15);
      background: radial-gradient(
        circle at top right,
        rgba(var(--temp-rgb, 76, 175, 80), 0.3) 0%,
        rgba(var(--temp-rgb, 76, 175, 80), 0.15) 40%,
        transparent 70%
      );
      transition: opacity 0.5s ease, background 0.5s ease;
    }

    /* Main content layout */
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 120px;
    }

    /* Area info at top */
    .area-info {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .area-name {
      font-size: 1.2em;
      font-weight: bold;
      color: var(--primary-text-color);
      line-height: 1.2;
      margin-bottom: 0px;
    }

    /* Sensors directly under area name - SIMPLE */
    .area-sensors {
      display: flex;
      flex-direction: column;
      gap: 0px;
      margin-top: 2px;
    }

    .sensors {
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .sensor {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
      line-height: 1;
    }

    .sensor ha-icon {
      --mdc-icon-size: 16px;
    }

    .sensor-value {
      font-weight: 500;
    }

    /* Large background circle - separate from icon */
    .main-entity-circle {
      position: absolute;
      width: 320px;  /* Reduced from 400px */
      height: 320px; /* Reduced from 400px */
      z-index: 1;
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.08);
      border: 3px solid rgba(var(--rgb-primary-text-color), 0.15);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    /* Separate icon element - REMOVE SQUARE STYLING */
    .main-entity-icon {
      position: absolute;
      z-index: 2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Removed width, height, background, border - no more square! */
    }

    .main-entity-icon ha-icon {
      --mdc-icon-size: 80px;
      opacity: 1;
      transition: opacity 0.2s ease, color 0.2s ease;
      /* Remove any default styling that creates squares */
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* Remove old conflicting styles - icon should have NO background or border */
    .main-entity-icon {
      background: none !important;
      border: none !important;
    }
    /* Position based on features position - ADJUSTED FOR LARGER CIRCLE */
    .features-right .main-entity-circle {
      bottom: -200px;  /* Adjusted for 320px circle */
      left: -200px;    /* Adjusted for 320px circle */
    }

    .features-left .main-entity-circle {
      bottom: -200px;  /* Adjusted for 320px circle */
      right: -200px;   /* Adjusted for 320px circle */
    }

    .features-top .main-entity-circle,
    .features-bottom .main-entity-circle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Position the separate icon element - very close to card corner */
    .features-right .main-entity-icon {
      bottom: 3px;   /* 3px from bottom edge - very close to corner */
      left: 3px;     /* 3px from left edge - very close to corner */
    }

    .features-left .main-entity-icon {
      bottom: 3px;   /* 3px from bottom edge - very close to corner */
      right: 3px;    /* 3px from right edge - very close to corner */
    }

    .features-top .main-entity-icon,
    .features-bottom .main-entity-icon {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Icon color based on state */
    .main-entity-circle.active + .main-entity-icon ha-icon {
      color: #4caf50;
    }

    .main-entity-circle.inactive + .main-entity-icon ha-icon {
      color: #f44336;
    }

    /* Hide unnecessary elements in icon mode */
    .icon .area-icon {
      display: none;
    }

    .icon .area-name ha-icon {
      display: none;
    }

    /* In icon mode, simplify the layout */
    .icon .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }

    /* Minimize area info in icon mode - FIXED POSITIONING */
    .icon .area-info {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 3;
      right: auto;
    }

    .icon .area-name {
      font-size: 1.2em;
      font-weight: 600;
      margin-bottom: 2px;
      line-height: 1.2;
      color: var(--primary-text-color);
    }

    .icon .area-sensors {
      margin-top: 0px;
    }

    /* In icon mode, sensors should stack vertically under area name */
    .icon .sensors-section {
      position: absolute;
      top: 40px;
      left: 0px;
      z-index: 3;
    }

    /* Make sure area info stays at top in all icon modes */
    .icon .area-details {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }

    /* LAYOUT SUPPORT - Different layouts from editor */
    
    /* Compact layout */
    .layout-compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .layout-compact .area-info {
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }

    .layout-compact .area-sensors {
      margin-top: 0;
      margin-left: 16px;
    }

    /* Horizontal layout */
    .layout-horizontal .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .layout-horizontal .area-info {
      flex-direction: row;
      align-items: center;
    }

    /* Vertical layout - your dashboard style */
    .layout-vertical .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      min-height: 200px;
    }

    .layout-vertical .area-info {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
    }

    .layout-vertical .area-details {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }

    .layout-vertical .sensors-section {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 60px;
      z-index: 3;
    }

    /* Hide area icon in icon display mode */
    .icon .area-icon {
      display: none;
    }

    .icon .area-name ha-icon {
      display: none;
    }

    /* FEATURES POSITION SUPPORT - All positions from editor */
    
    /* Controls on the right side - better aligned */
    .features-right .controls-section {
      position: absolute;
      right: 12px;
      bottom: 12px;
      z-index: 3;
    }

    /* Controls on the left side - better aligned */
    .features-left .controls-section {
      position: absolute;
      left: 12px;
      bottom: 12px;
      z-index: 3;
    }

    /* When controls on left, move area info to right to prevent overlap - applies to ALL display types */
    .features-left .area-info {
      left: auto !important;
      right: 8px;
      text-align: right;
    }

    .features-left .sensors-section {
      left: auto !important;
      right: 8px;
      text-align: right;
    }

    .features-left .sensors {
      justify-content: flex-end;
    }

    .features-left .alerts {
      justify-content: flex-end;
    }

    .features-left .area-details {
      align-items: flex-end;
    }

    /* For vertical layout specifically - controls at bottom right */
    .layout-vertical.features-right .controls-section {
      position: absolute;
      right: 8px;
      bottom: 8px;
      z-index: 3;
    }

    /* Controls at the top */
    .features-top .content {
      flex-direction: column;
    }

    .features-top .controls-section {
      order: 1;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }

    /* When controls at top, move area info to bottom */
    .features-top .area-info {
      top: auto !important;
      bottom: 8px;
    }

    .features-top .sensors-section {
      top: auto !important;
      bottom: 40px;
    }

    /* Controls at the bottom */
    .features-bottom .content {
      flex-direction: column;
    }

    .features-bottom .controls-section {
      order: 3;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }

    /* Inline controls */
    .features-inline .controls-section {
      display: inline-flex;
      margin-left: auto;
      position: relative;
    }

    /* Area controls styling */
    .area-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Horizontal controls for top/bottom positions */
    .features-top .area-controls,
    .features-bottom .area-controls,
    .features-inline .area-controls {
      flex-direction: row;
      gap: 8px;
    }

    .control-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.1);
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.2);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.2);
      border-color: var(--primary-color);
    }

    .control-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Animated icons */
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Spinning fan icon when active */
    .control-button.active ha-icon[icon*="fan"]:not([icon*="off"]) {
      animation: spin 2s linear infinite;
    }

    /* DISPLAY TYPE SUPPORT - All display types from editor */
    
    /* Picture display type */
    .picture .content {
      position: relative;
      color: white;
    }

    .background-image {
      position: absolute;
      top: -16px;
      left: -16px;
      right: -16px;
      bottom: -16px;
      background-size: cover;
      background-position: center;
      border-radius: inherit;
      z-index: 0;
    }

    .picture .area-info,
    .picture .controls-section {
      position: relative;
      z-index: 2;
    }

    .picture .area-name,
    .picture .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Camera display type */
    .camera .content {
      position: relative;
      color: white;
    }

    .camera-view {
      position: absolute;
      top: -16px;
      left: -16px;
      right: -16px;
      bottom: -16px;
      width: calc(100% + 32px);
      height: calc(100% + 32px);
      object-fit: cover;
      z-index: 0;
      border-radius: inherit;
    }

    .camera .area-info,
    .camera .controls-section {
      position: relative;
      z-index: 2;
    }

    .camera .area-name,
    .camera .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Icon display type - shows large background icon */
    .icon .main-entity-circle {
      display: flex;
    }

    /* Compact display type - hide background icon */
    .compact .main-entity-circle {
      display: none;
    }

    /* Alerts inline with sensors - improved with glow */
    .alerts {
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 6px;
    }

    .icon-with-count {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(244, 67, 54, 0.15);
      border: 2px solid rgba(244, 67, 54, 0.6);
      color: #f44336;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.85em;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 8px rgba(244, 67, 54, 0.3);
      animation: alert-pulse 2s ease-in-out infinite;
    }

    @keyframes alert-pulse {
      0%, 100% {
        box-shadow: 0 0 8px rgba(244, 67, 54, 0.3);
      }
      50% {
        box-shadow: 0 0 16px rgba(244, 67, 54, 0.6), 0 0 24px rgba(244, 67, 54, 0.3);
      }
    }

    .icon-with-count:hover {
      background: rgba(244, 67, 54, 0.25);
      border-color: rgba(244, 67, 54, 0.8);
      box-shadow: 0 0 12px rgba(244, 67, 54, 0.5);
      transform: translateY(-1px);
    }

    .icon-with-count ha-icon {
      --mdc-icon-size: 16px;
      filter: drop-shadow(0 0 2px rgba(244, 67, 54, 0.8));
    }

    .alert-label {
      font-size: 13px;
      font-weight: 600;
      text-shadow: 0 0 4px rgba(244, 67, 54, 0.5);
    }

    /* Position alerts under humidity sensor */
    .icon .area-sensors .alerts {
      margin-top: 8px;
    }

    /* Features buttons */
    .features {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      flex-wrap: wrap;
    }

    .features.bottom {
      margin-top: auto;
      padding-top: 12px;
    }

    .features.inline {
      margin-top: 0;
      margin-left: auto;
    }

    .features ha-button {
      --mdc-theme-primary: var(--primary-color);
      font-size: 0.8em;
      min-width: auto;
      padding: 4px 8px;
    }

    /* Make sure everything appears above background */
    .area-info,
    .controls-section,
    .alerts,
    .features {
      position: relative;
      z-index: 2;
    }

    /* Responsive design */
    @media (max-width: 600px) {
      .area-name {
        font-size: 1em;
      }

      .control-button {
        width: 36px;
        height: 36px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 18px;
      }

      .area-controls {
        gap: 8px;
      }
    }

    /* Make controls scale down for smaller cards */
    @container (max-width: 250px) {
      .control-button {
        width: 36px;
        height: 36px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 18px;
      }

      .area-controls {
        gap: 8px;
      }
    }

    @container (max-width: 200px) {
      .control-button {
        width: 32px;
        height: 32px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 16px;
      }

      .area-controls {
        gap: 6px;
      }
    }

    /* Position based on features position - circle positioning */
    .features-right .main-entity-circle {
      bottom: -190px;  /* Adjusted for 320px circle */
      left: -190px;    /* Adjusted for 320px circle */
    }

    .features-left .main-entity-circle {
      bottom: -190px;  /* Adjusted for 320px circle */
      right: -190px;   /* Adjusted for 320px circle */
    }

    .features-top .main-entity-circle,
    .features-bottom .main-entity-circle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Circle state colors - both background AND border change with state */
    .main-entity-circle.active {
      background: rgba(var(--state-active-rgb, 76, 175, 80), 0.15);
      border-color: var(--state-active-color, #4caf50);
    }

    .main-entity-circle.inactive {
      background: rgba(var(--state-inactive-rgb, 244, 67, 54), 0.15);
      border-color: var(--state-inactive-color, #f44336);
    }

    /* Icon state colors - icon color also changes with state */
    .main-entity-circle.active + .main-entity-icon ha-icon {
      color: var(--state-active-color, #4caf50);
    }

    .main-entity-circle.inactive + .main-entity-icon ha-icon {
      color: var(--state-inactive-color, #f44336);
    }

    /* Alert glow on circle - uses dynamic alert color based on device class */
    .main-entity-circle.has-alert {
      background: rgba(var(--alert-rgb, 244, 67, 54), 0.25) !important;
      border-color: var(--alert-color, #f44336) !important;
      box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      animation: alert-pulse-circle 2s ease-in-out infinite;
    }

    /* Pulsing grow/shrink animation for circle when alert active */
    @keyframes alert-pulse-circle {
      0%, 100% {
        transform: scale(1);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.25);
        box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      }
      50% {
        transform: scale(1.05);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.35);
        box-shadow: 0 0 30px rgba(var(--alert-rgb, 244, 67, 54), 0.8), 0 0 60px rgba(var(--alert-rgb, 244, 67, 54), 0.5);
      }
    }

    /* Alert glow positioning adjustments for different positions */
    .features-right .main-entity-circle.has-alert,
    .features-left .main-entity-circle.has-alert {
      transform-origin: center center;
    }

    .features-top .main-entity-circle.has-alert,
    .features-bottom .main-entity-circle.has-alert {
      animation: alert-pulse-circle-centered 2s ease-in-out infinite;
    }

    @keyframes alert-pulse-circle-centered {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.25);
        box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.05);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.35);
        box-shadow: 0 0 30px rgba(var(--alert-rgb, 244, 67, 54), 0.8), 0 0 60px rgba(var(--alert-rgb, 244, 67, 54), 0.5);
      }
    }

    /* Fix area name/temp positioning - closer to top */
    .icon .area-info {
      position: absolute;
      top: 8px;    /* Moved from 16px to 8px - closer to top */
      left: 8px;   /* Moved from 16px to 8px - closer to edge */
      z-index: 3;
    }

    .icon .area-name {
      font-size: 1.3em;  /* Slightly larger */
      font-weight: bold;
      margin-bottom: 4px;  /* Reduced margin */
      color: var(--primary-text-color);
    }

    .icon .area-sensors {
      margin-top: 2px;  /* Reduced from 4px */
    }
  `,e([ft({attribute:!1})],Bt.prototype,"hass",void 0),e([pt()],Bt.prototype,"_config",void 0),e([pt()],Bt.prototype,"_areas",void 0),Bt=e([dt("area-card-elite")],Bt),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ft||(Ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Wt||(Wt={}));var qt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,t.dispatchEvent(s),s};let Yt=class extends lt{constructor(){super(...arguments),this._areas=[],this._localImages=[],this._entities=[],this._devices=[]}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),await this._loadLocalImages(),await this._loadEntityRegistry(),await this._loadDeviceRegistry()}async _loadAreas(){var t;try{if(null===(t=this.hass)||void 0===t?void 0:t.connection){const t=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas=t||[]}}catch(t){console.error("Failed to load areas:",t),this._areas=[]}}async _loadEntityRegistry(){var t;try{(null===(t=this.hass)||void 0===t?void 0:t.connection)&&(this._entities=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"}))}catch(t){console.error("Failed to load entity registry:",t),this._entities=[]}}async _loadDeviceRegistry(){var t;try{(null===(t=this.hass)||void 0===t?void 0:t.connection)&&(this._devices=await this.hass.connection.sendMessagePromise({type:"config/device_registry/list"}))}catch(t){console.error("Failed to load device registry:",t),this._devices=[]}}async _loadLocalImages(){try{const t=await this.hass.connection.sendMessagePromise({type:"media_player/browse_media",media_content_id:"media-source://media_source/local",media_content_type:"app"});this._localImages=this._extractImagePaths(t)}catch(t){console.error("Failed to load local images:",t),this._localImages=[]}}_extractImagePaths(t){const e=[];return(null==t?void 0:t.children)&&t.children.forEach((t=>{var i,o;if(null===(i=t.media_content_type)||void 0===i?void 0:i.startsWith("image/")){const i=null===(o=t.media_content_id)||void 0===o?void 0:o.replace("media-source://media_source/local/","/local/");i&&e.push(i)}})),e}setConfig(t){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[],layout:"vertical"},t)}_valueChanged(t){var e;if(t.stopPropagation(),!this._config)return;const i=t.target;let o=null===(e=t.detail)||void 0===e?void 0:e.value,s=i.configValue;console.log("Value changed:",{type:t.type,tagName:i.tagName,configValue:s,value:o,detail:t.detail}),null==o&&("input"===t.type&&void 0!==i.value||void 0!==i.value)&&(o=i.value),"HA-AREA-PICKER"===i.tagName?s="area":"HA-ENTITY-PICKER"===i.tagName&&(s=i.configValue||"exclude_entities"),s&&void 0!==o&&(console.log("Setting config:",s,"=",o),this._config=Object.assign(Object.assign({},this._config),{[s]:o}),qt(this,"config-changed",{config:this._config}),this.requestUpdate())}_getDeviceClasses(t){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];const i=Object.entries(this.hass.states||{}).filter((([e,i])=>{var o,s;return!!(null===(o=i.attributes)||void 0===o?void 0:o.area_id)&&(i.attributes.area_id===(null===(s=this._config)||void 0===s?void 0:s.area)&&e.split(".")[0]===t)})).map((([t,e])=>e)),o=i.map((t=>t.attributes.device_class||"")).filter((t=>t));return[...new Set(o)]}_buildSelectOptions(t){const e=this._getDeviceClasses(t);let i=[];return i="binary_sensor"===t?[...new Set([...e,...jt.binary_sensor])]:"sensor"===t?[...new Set([...e,...jt.sensor])]:e,i.map((e=>({value:e,label:this.hass.localize(`component.${t}.device_class.${e}`)||this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${t}.${e}`)||e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g," ")})))}_getAreaCameras(){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return[];const e=Object.keys(this.hass.states||{}).filter((t=>{var e,i,o,s;const[a]=t.split(".");if("camera"!==a)return!1;if((null===(e=this.hass.states[t].attributes)||void 0===e?void 0:e.area_id)===(null===(i=this._config)||void 0===i?void 0:i.area))return!0;const n=this._entities.find((e=>e.entity_id===t));if((null==n?void 0:n.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area))return!0;if(null==n?void 0:n.device_id){const t=this._devices.find((t=>t.id===n.device_id));if((null==t?void 0:t.area_id)===(null===(s=this._config)||void 0===s?void 0:s.area))return!0}return!1}));return e}render(){return this.hass&&this._config?(this._buildSelectOptions("binary_sensor"),F`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-selector
            .hass=${this.hass}
            .selector=${{area:{}}}
            .value=${this._config.area}
            .configValue=${"area"}
            .label=${"Area"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <div class="option">
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{}}}
            .value=${this._config.main_entity||""}
            .configValue=${"main_entity"}
            .label=${"Main Entity (Large Background Icon)"}
            .helper=${"Choose the main entity whose icon will appear large in the background"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <!-- Appearance Section -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{icon:{}}}
                .value=${this._config.icon||""}
                .configValue=${"icon"}
                .label=${"Area Icon"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.area_name_color||""}
                .configValue=${"area_name_color"}
                .label=${"Area Name Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.area_icon_color||""}
                .configValue=${"area_icon_color"}
                .label=${"Area Icon Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.state_active_color||""}
                .configValue=${"state_active_color"}
                .label=${"Active State Color"}
                .helper=${"Color for circle and icon when entity is active/on"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.state_inactive_color||""}
                .configValue=${"state_inactive_color"}
                .label=${"Inactive State Color"}
                .helper=${"Color for circle and icon when entity is inactive/off"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{mode:"dropdown",options:[{value:"compact",label:"Compact"},{value:"icon",label:"Icon"},{value:"picture",label:"Picture"},{value:"camera",label:"Camera"}]}}}
                .value=${this._config.display_type||"compact"}
                .configValue=${"display_type"}
                .label=${"Display Type"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <!-- Layout Options -->
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"horizontal",label:"Horizontal (Icon | Name | Sensors | Controls)"},{value:"vertical",label:"Vertical (Name/Icon on left, Sensors center, Controls right)"},{value:"compact",label:"Compact (Everything inline)"}]}}}
                .value=${this._config.layout||"compact"}
                .configValue=${"layout"}
                .label=${"Card Layout"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.color||""}
                .configValue=${"color"}
                .label=${"Card Background Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            ${"camera"===this._config.display_type?F`
              <div class="option">
                ${this._config.area&&this._getAreaCameras().length>0?F`
                  <div class="helper-text">Cameras in ${this._config.area}: ${this._getAreaCameras().length} found</div>
                `:this._config.area?F`
                  <div class="helper-text" style="color: var(--warning-color);">No cameras found in this area</div>
                `:""}
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{entity:{domain:"camera",include_entities:this._config.area?this._getAreaCameras():void 0}}}
                  .value=${this._config.camera_entity||""}
                  .configValue=${"camera_entity"}
                  .label=${"Camera Entity"}
                  .helper=${this._config.area?"Filtered to cameras in selected area":"Select an area first to filter cameras"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"auto",label:"Auto"},{value:"live",label:"Live"}]}}}
                  .value=${this._config.camera_view||"auto"}
                  .configValue=${"camera_view"}
                  .label=${"Camera View"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"16:9",label:"16:9 (Widescreen)"},{value:"4:3",label:"4:3 (Standard)"},{value:"1:1",label:"1:1 (Square)"},{value:"3:2",label:"3:2 (Photo)"}]}}}
                  .value=${this._config.aspect_ratio||"16:9"}
                  .configValue=${"aspect_ratio"}
                  .label=${"Aspect Ratio"}
                  .helper=${"Sets the height/width ratio of the camera view"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}
            
            ${"picture"===this._config.display_type?F`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{image:{}}}
                  .value=${this._config.background_image||""}
                  .configValue=${"background_image"}
                  .label=${"Background Image"}
                  .helper=${"Select an image from your media folder or upload new"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}
          </div>
        </ha-expansion-panel>

        <!-- Sensor Display -->
        <ha-expansion-panel header="Sensor Display" outlined>
          <div class="content">
            <div class="helper-text">Select specific sensors to display on the card</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"temperature"}}}
                .value=${this._config.temperature_entity||""}
                .configValue=${"temperature_entity"}
                .label=${"Temperature Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"humidity"}}}
                .value=${this._config.humidity_entity||""}
                .configValue=${"humidity_entity"}
                .label=${"Humidity Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"illuminance"}}}
                .value=${this._config.illuminance_entity||""}
                .configValue=${"illuminance_entity"}
                .label=${"Light Level Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"power"}}}
                .value=${this._config.power_entity||""}
                .configValue=${"power_entity"}
                .label=${"Power Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"energy"}}}
                .value=${this._config.energy_entity||""}
                .configValue=${"energy_entity"}
                .label=${"Energy Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"battery"}}}
                .value=${this._config.battery_entity||""}
                .configValue=${"battery_entity"}
                .label=${"Battery Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Area Controls -->
        <ha-expansion-panel header="Area Controls" outlined>
          <div class="content">
            <div class="helper-text">Select entities to show as clickable control buttons</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"light"}}}
                .value=${this._config.light_entity||""}
                .configValue=${"light_entity"}
                .label=${"Main Light"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"climate"}}}
                .value=${this._config.climate_entity||""}
                .configValue=${"climate_entity"}
                .label=${"Climate Control"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"switch"}}}
                .value=${this._config.switch_entity||""}
                .configValue=${"switch_entity"}
                .label=${"Main Switch"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"fan"}}}
                .value=${this._config.fan_entity||""}
                .configValue=${"fan_entity"}
                .label=${"Fan Control"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"media_player"}}}
                .value=${this._config.media_player_entity||""}
                .configValue=${"media_player_entity"}
                .label=${"Media Player"}
                .helper=${"Click opens media player controls"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{multiple:!0,domain:["light","switch","fan","climate","cover","media_player"]}}}
                .value=${this._config.additional_controls||[]}
                .configValue=${"additional_controls"}
                .label=${"Additional Controls"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{boolean:{}}}
                .value=${!1!==this._config.show_lights_off_button}
                .configValue=${"show_lights_off_button"}
                .label=${"Show Turn Off All Lights Button"}
                .helper=${"Automatically adds a button to turn off all lights in the area"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Alert Sensors -->
        <ha-expansion-panel header="Alert Sensors" outlined>
          <div class="content">
            <div class="helper-text">Select specific binary sensors to show as alerts</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"motion"}}}
                .value=${this._config.motion_sensor||""}
                .configValue=${"motion_sensor"}
                .label=${"Motion Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"occupancy"}}}
                .value=${this._config.occupancy_sensor||""}
                .configValue=${"occupancy_sensor"}
                .label=${"Occupancy Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"door"}}}
                .value=${this._config.door_sensor||""}
                .configValue=${"door_sensor"}
                .label=${"Door Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"window"}}}
                .value=${this._config.window_sensor||""}
                .configValue=${"window_sensor"}
                .label=${"Window Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"moisture"}}}
                .value=${this._config.moisture_sensor||""}
                .configValue=${"moisture_sensor"}
                .label=${"Moisture Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{multiple:!0,domain:"binary_sensor"}}}
                .value=${this._config.additional_alerts||[]}
                .configValue=${"additional_alerts"}
                .label=${"Additional Alert Sensors"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Features -->
        <ha-expansion-panel header="Features" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{multiple:!0,options:[{value:"area-controls",label:"Area Controls"},{value:"more-info",label:"More Info"},{value:"toggle-all",label:"Toggle All"}]}}}
                .value=${this._config.features||[]}
                .configValue=${"features"}
                .label=${"Features"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"bottom",label:"Bottom"},{value:"inline",label:"Inline"},{value:"top",label:"Top"},{value:"left",label:"Left"},{value:"right",label:"Right"}]}}}
                .value=${this._config.features_position||"bottom"}
                .configValue=${"features_position"}
                .label=${"Features Position (includes controls)"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${this._config.navigation_path||""}
                .configValue=${"navigation_path"}
                .label=${"Navigation Path"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{multiple:!0,domain:["light","switch","sensor","binary_sensor"]}}}
                .value=${this._config.exclude_entities||[]}
                .configValue=${"exclude_entities"}
                .label=${"Exclude Entities"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `):q}_setLayout(t){this._config&&(this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:t}),qt(this,"config-changed",{config:this._config}),this.requestUpdate())}_layoutChanged(t){if(this._config&&t.detail){const e=t.detail.value;this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:e}),qt(this,"config-changed",{config:this._config}),this.requestUpdate()}}_configChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}static get styles(){return r`
      :host {
        display: block;
      }
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .option {
        padding: 4px 0px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .content {
        padding: 12px 4px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      ha-expansion-panel {
        --ha-card-border-radius: 6px;
        border-radius: 6px;
        margin-top: 8px;
      }
      ha-selector {
        width: 100%;
      }
      
      .switch-label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      
      .layout-options {
        margin-top: 12px;
      }
      
      .layout-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .layout-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px;
        border: 2px solid var(--divider-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .layout-item:hover {
        border-color: var(--primary-color);
        background-color: var(--primary-color-light);
      }
      
      .layout-item.selected {
        border-color: var(--primary-color);
        background-color: var(--primary-color-light);
      }
      
      .layout-preview {
        width: 40px;
        height: 30px;
        border: 1px solid var(--secondary-text-color);
        border-radius: 4px;
        position: relative;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--card-background-color);
      }
      
      .layout-preview.vertical {
        flex-direction: column;
        gap: 2px;
      }
      
      .layout-preview.horizontal {
        flex-direction: row;
        gap: 2px;
      }

      .layout-preview.compact {
        flex-direction: row;
        gap: 1px;
      }

      .layout-icon {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--primary-text-color);
      }
      
      .layout-text {
        width: 12px;
        height: 2px;
        background-color: var(--secondary-text-color);
        border-radius: 1px;
      }
      
      .layout-preview.vertical .layout-text {
        width: 16px;
      }
      
      .layout-preview.horizontal .layout-text {
        height: 8px;
        width: 16px;
      }
      
      .layout-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      
      .layout-item.selected .layout-label {
        color: var(--primary-color);
        font-weight: 500;
      }
      
      .helper-text {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
        font-style: italic;
      }
    `}};e([ft({attribute:!1})],Yt.prototype,"hass",void 0),e([pt()],Yt.prototype,"_config",void 0),e([pt()],Yt.prototype,"_areas",void 0),e([pt()],Yt.prototype,"_localImages",void 0),e([pt()],Yt.prototype,"_entities",void 0),e([pt()],Yt.prototype,"_devices",void 0),Yt=e([dt("area-card-elite-editor")],Yt),customElements.get(t)||customElements.define(t,Bt),customElements.get(t+"-editor")||customElements.define(t+"-editor",Yt),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
