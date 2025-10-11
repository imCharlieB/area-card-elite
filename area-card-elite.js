!function(){"use strict";const e="area-card-elite";function t(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,s)},l=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,$=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);s.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(o)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),s=i.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(o?s:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,_?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const w=globalThis,C=w.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,P="?"+k,U=`<${P}>`,I=document,O=()=>I.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,M=e=>N(e)||"function"==typeof e?.[Symbol.iterator],R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,B=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,J=I.createTreeWalker(I,129);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Q=(e,t)=>{const i=e.length-1,o=[];let s,a=2===t?"<svg>":"",n=z;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===z?"!--"===l[1]?n=H:void 0!==l[1]?n=B:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=s??z,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?j:'"'===l[3]?D:V):n===D||n===V?n=j:n===H||n===B?n=z:(n=j,s=void 0);const h=n===j&&e[t+1].startsWith("/>")?" ":"";a+=n===z?i+U:c>=0?(o.push(r),i.slice(0,c)+S+i.slice(c)+k+h):i+k+(-2===c?t:h)}return[Z(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class Y{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const n=e.length-1,r=this.parts,[l,c]=Q(e,t);if(this.el=Y.createElement(l,i),J.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=J.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=c[a++],i=o.getAttribute(e).split(k),n=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ie:"?"===n[1]?oe:"@"===n[1]?se:te}),o.removeAttribute(e)}else e.startsWith(k)&&(r.push({type:6,index:s}),o.removeAttribute(e));if(L.test(o.tagName)){const e=o.textContent.split(k),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),J.nextNode(),r.push({type:2,index:++s});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===P)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(k,e+1));)r.push({type:7,index:s}),e+=k.length-1}s++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,o){if(t===F)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const a=T(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=G(e,s._$AS(e,t.values),s,o)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??I).importNode(t,!0);J.currentNode=o;let s=J.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new ee(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new ae(s,this,e)),this._$AV.push(t),r=i[++n]}a!==r?.index&&(s=J.nextNode(),a++)}return J.currentNode=I,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):M(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new X(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Y(e)),t}T(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new ee(this.k(O()),this.k(O()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(void 0===s)e=G(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const o=e;let n,r;for(e=s[0],n=0;n<s.length-1;n++)r=G(this,o[i+n],t,n),r===F&&(r=this._$AH[n]),a||=!T(r)||r!==this._$AH[n],r===W?e=W:e!==W&&(e+=(r??"")+s[n+1]),this._$AH[n]=r}a&&!o&&this.O(e)}O(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===W?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class se extends te{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??W)===F)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ne={j:S,P:k,A:P,C:1,M:Q,L:X,R:M,V:G,D:ee,I:te,H:oe,N:se,U:ie,B:ae},re=w.litHtmlPolyfillSupport;re?.(Y,ee),(w.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let le=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new ee(t.insertBefore(O(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};le._$litElement$=!0,le.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:le});const ce=globalThis.litElementPolyfillSupport;ce?.({LitElement:le}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,he={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ue=(e=he,t,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function fe(e){return pe({...e,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ge=2;class me{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{D:ve}=ne,_e=()=>document.createComment(""),$e=(e,t,i)=>{const o=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(_e(),s),a=o.insertBefore(_e(),s);i=new ve(t,a,e,e.options)}else{const t=i._$AB.nextSibling,a=i._$AM,n=a!==e;if(n){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==a._$AU&&i._$AP(t)}if(t!==s||n){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,s),e=t}}}return i},ye=(e,t,i=e)=>(e._$AI(t,i),e),be={},xe=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},Ae=(e,t,i)=>{const o=new Map;for(let s=t;s<=i;s++)o.set(e[s],s);return o},we=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends me{constructor(e){if(super(e),e.type!==ge)throw Error("repeat() can only be used in text expressions")}ht(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const s=[],a=[];let n=0;for(const t of e)s[n]=o?o(t,n):n,a[n]=i(t,n),n++;return{values:a,keys:s}}render(e,t,i){return this.ht(e,t,i).values}update(e,[t,i,o]){const s=(e=>e._$AH)(e),{values:a,keys:n}=this.ht(t,i,o);if(!Array.isArray(s))return this.dt=n,a;const r=this.dt??=[],l=[];let c,d,h=0,u=s.length-1,p=0,f=a.length-1;for(;h<=u&&p<=f;)if(null===s[h])h++;else if(null===s[u])u--;else if(r[h]===n[p])l[p]=ye(s[h],a[p]),h++,p++;else if(r[u]===n[f])l[f]=ye(s[u],a[f]),u--,f--;else if(r[h]===n[f])l[f]=ye(s[h],a[f]),$e(e,l[f+1],s[h]),h++,f--;else if(r[u]===n[p])l[p]=ye(s[u],a[p]),$e(e,s[h],s[u]),u--,p++;else if(void 0===c&&(c=Ae(n,p,f),d=Ae(r,h,u)),c.has(r[h]))if(c.has(r[u])){const t=d.get(n[p]),i=void 0!==t?s[t]:null;if(null===i){const t=$e(e,s[h]);ye(t,a[p]),l[p]=t}else l[p]=ye(i,a[p]),$e(e,s[h],i),s[t]=null;p++}else xe(s[u]),u--;else xe(s[h]),h++;for(;p<=f;){const t=$e(e,l[f+1]);ye(t,a[p]),l[p++]=t}for(;h<=u;){const e=s[h++];null!==e&&xe(e)}return this.dt=n,((e,t=be)=>{e._$AH=t})(e,l),F}}),Ce=["sensor"],Ee=["binary_sensor"],Se=["cover"],ke=["climate"],Pe=["camera"],Ue=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Ie={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Oe={alarm_control_panel:{on:"mdi:alarm-light",off:"mdi:alarm-light-off"},siren:{on:"mdi:bell-ring",off:"mdi:bell-off"},lock:{on:"mdi:lock-open",off:"mdi:lock"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},media_player:{on:"mdi:cast",off:"mdi:cast-off"},climate:{on:"mdi:thermostat",off:"mdi:thermostat-cog"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-off"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-off"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:power-off",off:"mdi:power-off",motion:{on:"mdi:motion-sensor",off:"mdi:motion-sensor-off"},moisture:{on:"mdi:water-alert",off:"mdi:water-off"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home-outline",off:"mdi:home-export-outline"},occupancy:{on:"mdi:seat",off:"mdi:seat-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:shield-lock-open",off:"mdi:shield-lock"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle-outline",off:"mdi:alert-circle-check-outline"},smoke:{on:"mdi:smoke-detector-outline",off:"mdi:smoke-detector-off-outline"},running:{on:"mdi:play",off:"mdi:pause"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},power:{on:"mdi:power",off:"mdi:power-off"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery-check"},gas:{on:"mdi:gas-station-outline",off:"mdi:gas-station-off-outline"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake",off:"mdi:snowflake-off"},heat:{on:"mdi:weather-sunny",off:"mdi:weather-sunny-off"},connectivity:{on:"mdi:connection",off:"mdi:connection"},safety:{on:"mdi:shield-alert-outline",off:"mdi:shield-check-outline"},sound:{on:"mdi:volume-high",off:"mdi:volume-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},tamper:{on:"mdi:shield-home",off:"mdi:shield-home"},light:{on:"mdi:lightbulb-outline",off:"mdi:lightbulb-off-outline"},moving:{on:"mdi:car",off:"mdi:car-off"}},person:{on:"mdi:account",off:"mdi:account-off"},device_tracker:{on:"mdi:account",off:"mdi:account-off"},valve:{on:"mdi:valve",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-pump-off"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-off"},calendar:{on:"mdi:calendar",off:"mdi:calendar-remove"},scene:{on:"mdi:movie",off:"mdi:movie-off"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text",off:"mdi:script-text"}},Te=["unavailable","unknown"],Ne=["off","closed","idle"];
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let Me=class extends le{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),this.requestUpdate()}updated(e){super.updated(e),e.has("hass")&&this.hass&&0===Object.keys(this._areas).length&&this._loadAreas().then((()=>this.requestUpdate()))}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},e.forEach((e=>{this._areas[e.area_id]=e}))}}catch(e){console.error("Failed to load areas:",e),this._areas={}}}setConfig(e){if(!e.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Ie.binary_sensor,sensor_classes:Ie.sensor,exclude_entities:[]},e)}_getAreaEntities(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o,s,a;if(!(null===(i=t.attributes)||void 0===i?void 0:i.area_id)||(null===(s=null===(o=this._config)||void 0===o?void 0:o.exclude_entities)||void 0===s?void 0:s.includes(e)))return!1;const[n]=e.split(".");return t.attributes.area_id===(null===(a=this._config)||void 0===a?void 0:a.area)&&(Ue.includes(n)||Ce.includes(n)||Ee.includes(n)||Se.includes(n)||ke.includes(n)||Pe.includes(n))})).map((([e,t])=>({entityId:e,state:t.state,attributes:t.attributes,domain:e.split(".")[0],name:t.attributes.friendly_name||e.split(".")[1],deviceClass:t.attributes.device_class||""}))):[]}_getDomainIcon(e,t,i){if(!(e in Oe))return"mdi:help-circle";const o=Oe[e];if(!o)return"mdi:help-circle";const s=!Ne.includes(t)&&!Te.includes(t);if(i&&"object"==typeof o&&i in o){const e=o[i];if(e&&"object"==typeof e&&"on"in e&&"off"in e)return s?e.on:e.off}return"object"==typeof o&&"on"in o&&"off"in o?s?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const e=this._getAreaEntities(),t={};return e.forEach((e=>{t[e.domain]||(t[e.domain]=[]),t[e.domain].push(e)})),t}_getActiveEntities(e,t){return(this._getEntitiesByDomain()[e]||[]).filter((e=>(!t||e.deviceClass===t)&&(!Te.includes(e.state)&&!Ne.includes(e.state))))}_renderButtons(){const e=this._getEntitiesByDomain(),t=Ue.filter((t=>t in e&&e[t].length>0));return q`
      <div class="buttons">
        ${we(t,(e=>e),(e=>{const t=this._getActiveEntities(e).length,i=t>0;return q`
              <div class="icon-with-count">
                <ha-icon
                  .icon=${this._getDomainIcon(e,i?"on":"off")}
                  class=${i?"toggle-on":"toggle-off"}
                ></ha-icon>
                <span class="active-count ${i?"on":"off"}">
                  ${t}
                </span>
              </div>
            `}))}
      </div>
    `}_renderAlerts(){var e,t;const i=this._getEntitiesByDomain(),o=(null===(e=this._config)||void 0===e?void 0:e.alert_classes)||Ie.binary_sensor;return(null===(t=i.binary_sensor)||void 0===t?void 0:t.length)?q`
      <div class="alerts">
        ${o.map((e=>{const t=this._getActiveEntities("binary_sensor",e).length;return 0===t?W:q`
            <div class="icon-with-count">
              <ha-icon
                .icon=${this._getDomainIcon("binary_sensor","on",e)}
                class="alert"
              ></ha-icon>
              <span class="active-count on">${t}</span>
            </div>
          `}))}
      </div>
    `:W}_renderSensors(){var e,t,i;const o=this._getEntitiesByDomain(),s=(null===(e=this._config)||void 0===e?void 0:e.sensor_classes)||Ie.sensor,a=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null===(i=o.sensor)||void 0===i?void 0:i.length)?q`
      <div class="sensors">
        ${s.map((e=>{var t,i;const s=o.sensor.filter((t=>t.deviceClass===e&&!Te.includes(t.state)));if(0===s.length)return W;let n="";if("temperature"===e&&(null==a?void 0:a.temperature_entity_id)){const e=this.hass.states[a.temperature_entity_id];n=e?this.hass.formatEntityState(e):""}else if("humidity"===e&&(null==a?void 0:a.humidity_entity_id)){const e=this.hass.states[a.humidity_entity_id];n=e?this.hass.formatEntityState(e):""}else{const e=s.filter((e=>!isNaN(Number(e.state))));if(e.length>0){const o=e.reduce(((e,t)=>e+Number(t.state)),0),s=o/e.length,a=(null===(i=null===(t=e[0])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.unit_of_measurement)||"";n=`${s.toFixed(1)}${a?` ${a}`:""}`}}return n?q`
            <div class="sensor">
              <span class="sensor-value">${n}</span>
            </div>
          `:W}))}
      </div>
    `:W}_getAreaCameras(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o;const[s]=e.split(".");return"camera"===s&&(null===(i=t.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([e,t])=>({entityId:e,name:t.attributes.friendly_name||e.split(".")[1]}))):[]}_getAreaName(){var e,t,i;if(null===(e=this._config)||void 0===e?void 0:e.name)return this._config.name;const o=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==o?void 0:o.name)||(null===(i=this._config)||void 0===i?void 0:i.area)||"Unknown Area"}_getAreaIcon(){var e,t;if(null===(e=this._config)||void 0===e?void 0:e.icon)return this._config.icon;const i=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==i?void 0:i.icon)||"mdi:home"}render(){if(!this.hass||!this._config)return W;const e=this._getAreaName(),t=this._getAreaIcon(),i=this._config.area_name_color?`color: ${this._config.area_name_color};`:"",o=this._config.area_icon_color?`color: ${this._config.area_icon_color};`:"",s=this._config.mirror_card_layout?`mirror-layout mirror-${this._config.layout||"vertical"}`:"";return q`
      <ha-card class="${this._config.display_type||"compact"} ${s}">
        <div class="content">
          ${"picture"===this._config.display_type&&this._config.background_image?q`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          `:""}
          
          ${"camera"===this._config.display_type&&this._config.camera_entity?q`
            <hui-image 
              .hass=${this.hass}
              .entity=${this._config.camera_entity}
              .cameraImage=${this._config.camera_view}
              class="camera-view"
            ></hui-image>
          `:""}

          <div class="area-info ${this._config.mirror_card_layout?"mirror-info":""}">
            ${"compact"!==this._config.display_type?q`
              <div class="area-icon" style="${o}">
                <ha-icon icon="${t}"></ha-icon>
              </div>
            `:""}
            
            <div class="area-details">
              <div class="area-name" style="${i}">
                ${"compact"===this._config.display_type?q`
                  <ha-icon icon="${t}" style="${o}"></ha-icon>
                `:""}
                ${e}
              </div>
              
              ${this._renderAlerts()}
              ${this._renderSensors()}
            </div>
          </div>

          ${this._renderFeatures()}
        </div>
      </ha-card>
    `}_getBackgroundStyles(){var e,t;const i={};if((null===(e=this._config)||void 0===e?void 0:e.color)&&(i["--card-background-color"]=this._config.color,i.backgroundColor=this._config.color),null===(t=this._config)||void 0===t?void 0:t.aspect_ratio){const e=this._config.aspect_ratio.split(":");if(2===e.length){const t=parseInt(e[1])/parseInt(e[0])*100;i.aspectRatio=this._config.aspect_ratio,i.paddingBottom=`${t}%`}}return i}_renderBackground(){var e,t,i;const o=(null===(e=this._config)||void 0===e?void 0:e.display_type)||"compact";if("camera"===o){const e=this._getAreaCameras();if(e.length>0){const i=e[0];return q`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${i.entityId}
              .cameraView=${(null===(t=this._config)||void 0===t?void 0:t.camera_view)||"auto"}
            ></hui-image>
          </div>
        `}}return"picture"===o&&(null===(i=this._config)||void 0===i?void 0:i.background_image)?q`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `:W}_renderIcon(e){var t;const i=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";return e.icon?"icon"===i?q`<ha-icon .icon=${e.icon} class="large-icon"></ha-icon>`:q`<ha-icon .icon=${e.icon}></ha-icon>`:W}_renderFeatures(){var e,t;const i=(null===(e=this._config)||void 0===e?void 0:e.features)||[],o=(null===(t=this._config)||void 0===t?void 0:t.features_position)||"bottom";return i.length?q`
      <div class="features ${o}">
        ${i.map((e=>{switch(e){case"area-controls":return this._renderAreaControls();case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return W}}))}
      </div>
    `:W}_renderAreaControls(){return q`
      <ha-button @click=${this._handleAreaControls}>
        <ha-icon icon="mdi:tune"></ha-icon>
        Controls
      </ha-button>
    `}_renderMoreInfoButton(){return q`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `}_renderToggleAllButton(){return q`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `}_handleAreaControls(){var e;if(null===(e=this._config)||void 0===e?void 0:e.navigation_path){history.pushState(null,"",this._config.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}}_handleMoreInfo(){var e;const t=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(e=this._config)||void 0===e?void 0:e.area}`},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleToggleAll(){const e=this._getAreaEntities().filter((e=>Ue.includes(e.domain)));e.forEach((e=>{this.hass.callService(e.domain,"toggle",{},{entity_id:e.entityId})}))}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var Re,ze;Me.styles=r`
    ha-card {
      overflow: hidden;
      position: relative;
      height: 100%;
      padding: 16px;
      transition: all 0.3s ease;
      /* Remove hardcoded sizing to respect user's card size selection */
    }

    /* Mirror Card Layout Styles */
    .mirror-layout {
      display: flex;
      flex-direction: column;
    }

    .mirror-layout.mirror-horizontal {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .mirror-layout.mirror-vertical {
      flex-direction: column;
      justify-content: center;
    }

    .mirror-layout.mirror-v1 {
      flex-direction: column;
      justify-content: space-between;
    }

    .mirror-layout.mirror-v2 {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .mirror-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .mirror-layout.mirror-vertical .mirror-info {
      flex-direction: column;
      text-align: center;
    }

    .mirror-layout.mirror-horizontal .mirror-info {
      flex-direction: row;
      flex: 1;
    }

    .mirror-layout.mirror-v1 .mirror-info {
      flex-direction: row;
      align-items: flex-start;
    }

    .mirror-layout.mirror-v2 .mirror-info {
      flex-direction: column;
      align-items: flex-start;
    }

    /* Area Info Styles */
    .area-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .area-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }

    .mirror-layout .area-icon {
      font-size: 2rem;
    }

    .area-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .area-name {
      font-weight: bold;
      font-size: 1.2em;
      color: var(--primary-text-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mirror-layout.mirror-vertical .area-name {
      justify-content: center;
    }

    /* Display Type Styles - Remove hardcoded heights */
    .compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .icon .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 16px;
    }

    .picture .content,
    .camera .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    /* Background Images */
    .background-image,
    .camera-view {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      border-radius: inherit;
    }

    .picture .area-info,
    .camera .area-info {
      position: relative;
      z-index: 2;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      padding: 16px;
      margin: -16px;
      margin-top: auto;
    }

    .picture .area-name,
    .camera .area-name,
    .picture .sensor-value,
    .camera .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Alert and Sensor Styles */
    .alerts,
    .sensors {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .icon-with-count {
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(var(--rgb-primary-text-color), 0.1);
      border: solid 0.025rem rgba(var(--rgb-primary-text-color), 0.15);
      padding: 4px 6px;
      border-radius: 4px;
      min-width: 40px;
      transition: background-color 0.2s ease;
      cursor: pointer;
    }

    .icon-with-count:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .picture .icon-with-count,
    .camera .icon-with-count {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
    }

    .sensor {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
      font-weight: 500;
    }

    /* Toggle States */
    .toggle-on {
      color: var(--primary-color);
    }

    .toggle-off {
      color: var(--secondary-text-color);
    }

    .alert {
      color: var(--error-color);
    }

    .active-count.on {
      color: var(--primary-text-color);
      font-weight: bold;
    }

    .active-count.off {
      color: var(--secondary-text-color);
    }

    /* Features */
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

    /* Responsive Design */
    @media (max-width: 600px) {
      .area-icon {
        font-size: 2rem;
      }
      
      .mirror-layout .area-icon {
        font-size: 1.5rem;
      }
      
      .area-name {
        font-size: 1em;
      }
      
      .icon-with-count {
        min-width: 32px;
        padding: 2px 4px;
      }
    }

    /* Ensure card respects container size */
    :host {
      display: block;
      height: 100%;
    }

    ha-card {
      height: 100%;
      box-sizing: border-box;
    }
  `,t([pe({attribute:!1})],Me.prototype,"hass",void 0),t([fe()],Me.prototype,"_config",void 0),t([fe()],Me.prototype,"_areas",void 0),Me=t([de("area-card-elite")],Me),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Re||(Re={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ze||(ze={}));var He=function(e,t,i,o){o=o||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,e.dispatchEvent(s),s};let Be=class extends le{constructor(){super(...arguments),this._areas=[],this._localImages=[]}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),await this._loadLocalImages()}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas=e||[]}}catch(e){console.error("Failed to load areas:",e),this._areas=[]}}async _loadLocalImages(){try{const e=await this.hass.connection.sendMessagePromise({type:"media_player/browse_media",media_content_id:"media-source://media_source/local",media_content_type:"app"});this._localImages=this._extractImagePaths(e)}catch(e){console.error("Failed to load local images:",e),this._localImages=[]}}_extractImagePaths(e){const t=[];return(null==e?void 0:e.children)&&e.children.forEach((e=>{var i,o;if(null===(i=e.media_content_type)||void 0===i?void 0:i.startsWith("image/")){const i=null===(o=e.media_content_id)||void 0===o?void 0:o.replace("media-source://media_source/local/","/local/");i&&t.push(i)}})),t}setConfig(e){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[],layout:"vertical"},e)}_valueChanged(e){var t;if(e.stopPropagation(),!this._config)return;const i=e.target;let o=null===(t=e.detail)||void 0===t?void 0:t.value,s=i.configValue;console.log("Value changed:",{type:e.type,tagName:i.tagName,configValue:s,value:o,detail:e.detail}),null==o&&("input"===e.type&&void 0!==i.value||void 0!==i.value)&&(o=i.value),"HA-AREA-PICKER"===i.tagName?s="area":"HA-ENTITY-PICKER"===i.tagName&&(s=i.configValue||"exclude_entities"),s&&void 0!==o&&(console.log("Setting config:",s,"=",o),this._config=Object.assign(Object.assign({},this._config),{[s]:o}),He(this,"config-changed",{config:this._config}),this.requestUpdate())}_getDeviceClasses(e){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return[];const i=Object.entries(this.hass.states||{}).filter((([t,i])=>{var o,s;return t.split(".")[0]===e&&(null===(o=i.attributes)||void 0===o?void 0:o.area_id)===(null===(s=this._config)||void 0===s?void 0:s.area)})).map((([e,t])=>t));console.log(`Found ${i.length} ${e} entities in area ${this._config.area}`);const o=i.map((e=>e.attributes.device_class)).filter(Boolean),s=[...new Set(o)];return console.log(`Device classes for ${e}:`,s),s}_buildSelectOptions(e){const t=this._getDeviceClasses(e);let i=[];return i="binary_sensor"===e?[...new Set([...t,...Ie.binary_sensor])]:"sensor"===e?[...new Set([...t,...Ie.sensor])]:t,i.map((t=>({value:t,label:this.hass.localize(`component.${e}.device_class.${t}`)||this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${e}.${t}`)||t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")})))}render(){if(!this.hass||!this._config)return W;const e=this._buildSelectOptions("binary_sensor"),t=Ie.sensor.map((e=>({value:e,label:this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.sensor.${e}`)||e})));return q`
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
            .selector=${{text:{}}}
            .value=${this._config.name||""}
            .configValue=${"name"}
            .label=${"Name"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <!-- Appearance Section -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${this._config.name||""}
                .configValue=${"name"}
                .label=${"Area Name"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

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
                .selector=${{color_rgb:{}}}
                .value=${this._config.area_name_color||""}
                .configValue=${"area_name_color"}
                .label=${"Area Name Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{color_rgb:{}}}
                .value=${this._config.area_icon_color||""}
                .configValue=${"area_icon_color"}
                .label=${"Area Icon Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"compact",label:"Compact"},{value:"icon",label:"Icon"},{value:"picture",label:"Picture"},{value:"camera",label:"Camera"}]}}}
                .value=${this._config.display_type||"compact"}
                .configValue=${"display_type"}
                .label=${"Display Type"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{color_rgb:{}}}
                .value=${this._config.color||""}
                .configValue=${"color"}
                .label=${"Color"}
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
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            ${"camera"===this._config.display_type?q`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{entity:{domain:"camera"}}}
                  .value=${this._config.camera_entity||""}
                  .configValue=${"camera_entity"}
                  .label=${"Camera Entity"}
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
            `:""}
            
            ${"picture"===this._config.display_type?q`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{text:{}}}
                  .value=${this._config.background_image||""}
                  .configValue=${"background_image"}
                  .label=${"Background Image URL"}
                  .helper=${"Enter image URL or /local/image.jpg for local files"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}

            <!-- Mirror Card Layout -->
            <div class="option">
              <label class="switch-label">
                <ha-switch
                  .checked=${this._config.mirror_card_layout||!1}
                  .configValue=${"mirror_card_layout"}
                  @change=${this._valueChanged}
                ></ha-switch>
                Mirror Card Layout
              </label>
            </div>

            ${this._config.mirror_card_layout?q`
              <div class="layout-options">
                <div class="layout-grid">
                  <div class="layout-item ${"vertical"===this._config.layout?"selected":""}"
                       @click=${()=>this._setLayout("vertical")}>
                    <div class="layout-preview vertical">
                      <div class="layout-icon"></div>
                      <div class="layout-text"></div>
                    </div>
                    <div class="layout-label">Vertical</div>
                  </div>
                  
                  <div class="layout-item ${"horizontal"===this._config.layout?"selected":""}"
                       @click=${()=>this._setLayout("horizontal")}>
                    <div class="layout-preview horizontal">
                      <div class="layout-icon"></div>
                      <div class="layout-text"></div>
                    </div>
                    <div class="layout-label">Horizontal</div>
                  </div>
                  
                  <div class="layout-item ${"v1"===this._config.layout?"selected":""}"
                       @click=${()=>this._setLayout("v1")}>
                    <div class="layout-preview v1">
                      <div class="layout-icon"></div>
                      <div class="layout-text"></div>
                    </div>
                    <div class="layout-label">V1</div>
                  </div>
                  
                  <div class="layout-item ${"v2"===this._config.layout?"selected":""}"
                       @click=${()=>this._setLayout("v2")}>
                    <div class="layout-preview v2">
                      <div class="layout-icon"></div>
                      <div class="layout-text"></div>
                    </div>
                    <div class="layout-label">V2</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${this._config.theme||""}
                .configValue=${"theme"}
                .label=${"Theme (optional)"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        <ha-expansion-panel header="Alert Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{multiple:!0,options:e.map((e=>({value:e.value,label:e.label})))}}}
                .value=${this._config.alert_classes||[]}
                .configValue=${"alert_classes"}
                .label=${"Alert Classes"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Sensor Classes -->
        <ha-expansion-panel header="Sensor Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{multiple:!0,options:t.map((e=>({value:e.value,label:e.label})))}}}
                .value=${this._config.sensor_classes||[]}
                .configValue=${"sensor_classes"}
                .label=${"Sensor Classes"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Features -->
        <ha-expansion-panel header="Card Features" outlined>
          <div class="content">
            <div class="helper-text">Enable additional functionality for your area card</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{multiple:!0,options:[{value:"toggle-all",label:"Toggle All Lights/Switches",description:"Show button to turn all lights and switches on/off"}]}}}
                .value=${this._config.features||[]}
                .configValue=${"features"}
                .label=${"Available Features"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            ${(this._config.features||[]).length>0?q`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"bottom",label:"Bottom of Card"},{value:"inline",label:"Inline with Content"}]}}}
                  .value=${this._config.features_position||"bottom"}
                  .configValue=${"features_position"}
                  .label=${"Feature Button Position"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}
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
    `}_setLayout(e){this._config&&(this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:e}),He(this,"config-changed",{config:this._config}),this.requestUpdate())}_layoutChanged(e){if(this._config&&e.detail){const t=e.detail.value;this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:t}),He(this,"config-changed",{config:this._config}),this.requestUpdate()}}_configChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}static get styles(){return r`
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
      
      .layout-preview.v1 {
        flex-direction: column;
        gap: 1px;
      }
      
      .layout-preview.v2 {
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
    `}};t([pe({attribute:!1})],Be.prototype,"hass",void 0),t([fe()],Be.prototype,"_config",void 0),t([fe()],Be.prototype,"_areas",void 0),t([fe()],Be.prototype,"_localImages",void 0),Be=t([de("area-card-elite-editor")],Be),customElements.get(e)||customElements.define(e,Me),customElements.get(e+"-editor")||customElements.define(e+"-editor",Be),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
