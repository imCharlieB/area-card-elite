!function(){"use strict";const e="area-card-elite";function t(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new r(i,e,s)},l=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,$=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!c(e,t),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const n=o?.call(this);s.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(o)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),s=i.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(o?s:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,v?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,E=x.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,P="?"+k,U=`<${P}>`,O=document,T=()=>O.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,R=e=>N(e)||"function"==typeof e?.[Symbol.iterator],H="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,z=/>/g,D=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,V=/"/g,L=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),J=new WeakMap,K=O.createTreeWalker(O,129);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const Q=(e,t)=>{const i=e.length-1,o=[];let s,n=2===t?"<svg>":"",r=I;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===I?"!--"===l[1]?r=B:void 0!==l[1]?r=z:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=s??I,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?V:j):r===V||r===j?r=D:r===B||r===z?r=I:(r=D,s=void 0);const h=r===D&&e[t+1].startsWith("/>")?" ":"";n+=r===I?i+U:c>=0?(o.push(a),i.slice(0,c)+S+i.slice(c)+k+h):i+k+(-2===c?t:h)}return[Z(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class G{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const r=e.length-1,a=this.parts,[l,c]=Q(e,t);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=c[n++],i=o.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?ie:"?"===r[1]?oe:"@"===r[1]?se:te}),o.removeAttribute(e)}else e.startsWith(k)&&(a.push({type:6,index:s}),o.removeAttribute(e));if(L.test(o.tagName)){const e=o.textContent.split(k),t=e.length-1;if(t>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],T()),K.nextNode(),a.push({type:2,index:++s});o.append(e[t],T())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(k,e+1));)a.push({type:7,index:s}),e+=k.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,o){if(t===W)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,o)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);K.currentNode=o;let s=K.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new ee(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new ne(s,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(s=K.nextNode(),n++)}return K.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),M(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):R(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Y(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new G(e)),t}T(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new ee(this.k(T()),this.k(T()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(void 0===s)e=X(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const o=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=X(this,o[i+r],t,r),a===W&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===F?e=F:e!==F&&(e+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.O(e)}O(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===F?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class se extends te{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??F)===W)return;const i=this._$AH,o=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const re={j:S,P:k,A:P,C:1,M:Q,L:Y,R:R,V:X,D:ee,I:te,H:oe,N:se,U:ie,B:ne},ae=x.litHtmlPolyfillSupport;ae?.(G,ee),(x.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let le=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new ee(t.insertBefore(T(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};le._$litElement$=!0,le.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:le});const ce=globalThis.litElementPolyfillSupport;ce?.({LitElement:le}),(globalThis.litElementVersions??=[]).push("4.0.2");
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
     */,he={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ue=(e=he,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function fe(e){return pe({...e,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const me=2;class ge{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{D:_e}=re,ve=()=>document.createComment(""),$e=(e,t,i)=>{const o=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(ve(),s),n=o.insertBefore(ve(),s);i=new _e(t,n,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,r=n!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==s||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,s),e=t}}}return i},ye=(e,t,i=e)=>(e._$AI(t,i),e),be={},Ae=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},we=(e,t,i)=>{const o=new Map;for(let s=t;s<=i;s++)o.set(e[s],s);return o},xe=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ge{constructor(e){if(super(e),e.type!==me)throw Error("repeat() can only be used in text expressions")}ht(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const s=[],n=[];let r=0;for(const t of e)s[r]=o?o(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:s}}render(e,t,i){return this.ht(e,t,i).values}update(e,[t,i,o]){const s=(e=>e._$AH)(e),{values:n,keys:r}=this.ht(t,i,o);if(!Array.isArray(s))return this.dt=r,n;const a=this.dt??=[],l=[];let c,d,h=0,u=s.length-1,p=0,f=n.length-1;for(;h<=u&&p<=f;)if(null===s[h])h++;else if(null===s[u])u--;else if(a[h]===r[p])l[p]=ye(s[h],n[p]),h++,p++;else if(a[u]===r[f])l[f]=ye(s[u],n[f]),u--,f--;else if(a[h]===r[f])l[f]=ye(s[h],n[f]),$e(e,l[f+1],s[h]),h++,f--;else if(a[u]===r[p])l[p]=ye(s[u],n[p]),$e(e,s[h],s[u]),u--,p++;else if(void 0===c&&(c=we(r,p,f),d=we(a,h,u)),c.has(a[h]))if(c.has(a[u])){const t=d.get(r[p]),i=void 0!==t?s[t]:null;if(null===i){const t=$e(e,s[h]);ye(t,n[p]),l[p]=t}else l[p]=ye(i,n[p]),$e(e,s[h],i),s[t]=null;p++}else Ae(s[u]),u--;else Ae(s[h]),h++;for(;p<=f;){const t=$e(e,l[f+1]);ye(t,n[p]),l[p++]=t}for(;h<=u;){const e=s[h++];null!==e&&Ae(e)}return this.dt=r,((e,t=be)=>{e._$AH=t})(e,l),W}}),Ee=["sensor"],Ce=["binary_sensor"],Se=["cover"],ke=["climate"],Pe=["camera"],Ue=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Oe={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Te={alarm_control_panel:{on:"mdi:alarm-light",off:"mdi:alarm-light-off"},siren:{on:"mdi:bell-ring",off:"mdi:bell-off"},lock:{on:"mdi:lock-open",off:"mdi:lock"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},media_player:{on:"mdi:cast",off:"mdi:cast-off"},climate:{on:"mdi:thermostat",off:"mdi:thermostat-cog"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-off"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-off"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:power-off",off:"mdi:power-off",motion:{on:"mdi:motion-sensor",off:"mdi:motion-sensor-off"},moisture:{on:"mdi:water-alert",off:"mdi:water-off"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home-outline",off:"mdi:home-export-outline"},occupancy:{on:"mdi:seat",off:"mdi:seat-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:shield-lock-open",off:"mdi:shield-lock"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle-outline",off:"mdi:alert-circle-check-outline"},smoke:{on:"mdi:smoke-detector-outline",off:"mdi:smoke-detector-off-outline"},running:{on:"mdi:play",off:"mdi:pause"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},power:{on:"mdi:power",off:"mdi:power-off"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery-check"},gas:{on:"mdi:gas-station-outline",off:"mdi:gas-station-off-outline"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake",off:"mdi:snowflake-off"},heat:{on:"mdi:weather-sunny",off:"mdi:weather-sunny-off"},connectivity:{on:"mdi:connection",off:"mdi:connection"},safety:{on:"mdi:shield-alert-outline",off:"mdi:shield-check-outline"},sound:{on:"mdi:volume-high",off:"mdi:volume-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},tamper:{on:"mdi:shield-home",off:"mdi:shield-home"},light:{on:"mdi:lightbulb-outline",off:"mdi:lightbulb-off-outline"},moving:{on:"mdi:car",off:"mdi:car-off"}},person:{on:"mdi:account",off:"mdi:account-off"},device_tracker:{on:"mdi:account",off:"mdi:account-off"},valve:{on:"mdi:valve",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-pump-off"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-off"},calendar:{on:"mdi:calendar",off:"mdi:calendar-remove"},scene:{on:"mdi:movie",off:"mdi:movie-off"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text",off:"mdi:script-text"}},Me=["unavailable","unknown"],Ne=["off","closed","idle"];
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let Re=class extends le{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),this.requestUpdate()}updated(e){super.updated(e),e.has("hass")&&this.hass&&0===Object.keys(this._areas).length&&this._loadAreas().then((()=>this.requestUpdate()))}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},e.forEach((e=>{this._areas[e.area_id]=e}))}}catch(e){console.error("Failed to load areas:",e),this._areas={}}}setConfig(e){if(!e.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Oe.binary_sensor,sensor_classes:Oe.sensor,exclude_entities:[]},e)}_getAreaEntities(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o,s,n;if(!(null===(i=t.attributes)||void 0===i?void 0:i.area_id)||(null===(s=null===(o=this._config)||void 0===o?void 0:o.exclude_entities)||void 0===s?void 0:s.includes(e)))return!1;const[r]=e.split(".");return t.attributes.area_id===(null===(n=this._config)||void 0===n?void 0:n.area)&&(Ue.includes(r)||Ee.includes(r)||Ce.includes(r)||Se.includes(r)||ke.includes(r)||Pe.includes(r))})).map((([e,t])=>({entityId:e,state:t.state,attributes:t.attributes,domain:e.split(".")[0],name:t.attributes.friendly_name||e.split(".")[1],deviceClass:t.attributes.device_class||""}))):[]}_getDomainIcon(e,t,i){if(!(e in Te))return"mdi:help-circle";const o=Te[e];if(!o)return"mdi:help-circle";const s=!Ne.includes(t)&&!Me.includes(t);if(i&&"object"==typeof o&&i in o){const e=o[i];if(e&&"object"==typeof e&&"on"in e&&"off"in e)return s?e.on:e.off}return"object"==typeof o&&"on"in o&&"off"in o?s?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const e=this._getAreaEntities(),t={};return e.forEach((e=>{t[e.domain]||(t[e.domain]=[]),t[e.domain].push(e)})),t}_getActiveEntities(e,t){return(this._getEntitiesByDomain()[e]||[]).filter((e=>(!t||e.deviceClass===t)&&(!Me.includes(e.state)&&!Ne.includes(e.state))))}_renderButtons(){const e=this._getEntitiesByDomain(),t=Ue.filter((t=>t in e&&e[t].length>0));return q`
      <div class="buttons">
        ${xe(t,(e=>e),(e=>{const t=this._getActiveEntities(e).length,i=t>0;return q`
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
    `}_renderAlerts(){var e,t;const i=this._getEntitiesByDomain(),o=(null===(e=this._config)||void 0===e?void 0:e.alert_classes)||Oe.binary_sensor;return(null===(t=i.binary_sensor)||void 0===t?void 0:t.length)?q`
      <div class="alerts">
        ${o.map((e=>{const t=this._getActiveEntities("binary_sensor",e).length;return 0===t?F:q`
            <div class="icon-with-count">
              <ha-icon
                .icon=${this._getDomainIcon("binary_sensor","on",e)}
                class="alert"
              ></ha-icon>
              <span class="active-count on">${t}</span>
            </div>
          `}))}
      </div>
    `:F}_renderSensors(){var e,t,i;const o=this._getEntitiesByDomain(),s=(null===(e=this._config)||void 0===e?void 0:e.sensor_classes)||Oe.sensor,n=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null===(i=o.sensor)||void 0===i?void 0:i.length)?q`
      <div class="sensors">
        ${s.map((e=>{var t,i;const s=o.sensor.filter((t=>t.deviceClass===e&&!Me.includes(t.state)));if(0===s.length)return F;let r="";if("temperature"===e&&(null==n?void 0:n.temperature_entity_id)){const e=this.hass.states[n.temperature_entity_id];r=e?this.hass.formatEntityState(e):""}else if("humidity"===e&&(null==n?void 0:n.humidity_entity_id)){const e=this.hass.states[n.humidity_entity_id];r=e?this.hass.formatEntityState(e):""}else{const e=s.filter((e=>!isNaN(Number(e.state))));if(e.length>0){const o=e.reduce(((e,t)=>e+Number(t.state)),0),s=o/e.length,n=(null===(i=null===(t=e[0])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.unit_of_measurement)||"";r=`${s.toFixed(1)}${n?` ${n}`:""}`}}return r?q`
            <div class="sensor">
              <span class="sensor-value">${r}</span>
            </div>
          `:F}))}
      </div>
    `:F}_getAreaCameras(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o;const[s]=e.split(".");return"camera"===s&&(null===(i=t.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([e,t])=>({entityId:e,name:t.attributes.friendly_name||e.split(".")[1]}))):[]}_getAreaName(){var e,t,i;if(null===(e=this._config)||void 0===e?void 0:e.name)return this._config.name;const o=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==o?void 0:o.name)||(null===(i=this._config)||void 0===i?void 0:i.area)||"Unknown Area"}_getAreaIcon(){var e,t;if(null===(e=this._config)||void 0===e?void 0:e.icon)return this._config.icon;const i=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==i?void 0:i.icon)||"mdi:home"}render(){if(!this.hass||!this._config)return F;const e=this._getAreaName(),t=this._getAreaIcon(),i=this._config.area_name_color?`color: ${this._config.area_name_color};`:"",o=this._config.area_icon_color?`color: ${this._config.area_icon_color};`:"",s=this._config.mirror_card_layout?`mirror-layout mirror-${this._config.layout||"vertical"}`:"";return q`
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
      `:F}_renderIcon(e){var t;const i=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";return e.icon?"icon"===i?q`<ha-icon .icon=${e.icon} class="large-icon"></ha-icon>`:q`<ha-icon .icon=${e.icon}></ha-icon>`:F}_renderFeatures(){var e,t;const i=(null===(e=this._config)||void 0===e?void 0:e.features)||[],o=(null===(t=this._config)||void 0===t?void 0:t.features_position)||"bottom";return i.length?q`
      <div class="features ${o}">
        ${i.map((e=>{switch(e){case"area-controls":return this._renderAreaControls();case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return F}}))}
      </div>
    `:F}_renderAreaControls(){return q`
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
    `}_handleAreaControls(){var e;if(null===(e=this._config)||void 0===e?void 0:e.navigation_path){history.pushState(null,"",this._config.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}}_handleMoreInfo(){var e;const t=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(e=this._config)||void 0===e?void 0:e.area}`},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleToggleAll(){const e=this._getAreaEntities().filter((e=>Ue.includes(e.domain)));e.forEach((e=>{this.hass.callService(e.domain,"toggle",{},{entity_id:e.entityId})}))}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var He,Ie;Re.styles=a`
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
  `,t([pe({attribute:!1})],Re.prototype,"hass",void 0),t([fe()],Re.prototype,"_config",void 0),t([fe()],Re.prototype,"_areas",void 0),Re=t([de("area-card-elite")],Re),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(He||(He={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ie||(Ie={}));let Be=class extends le{setConfig(e){this._config=Object.assign({features:[],display_type:"compact",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[],layout:"vertical"},e)}_valueChanged(e){var t;if(e.stopPropagation(),!this._config)return;const i=e.target,o=i.configValue,s=void 0!==(null===(t=e.detail)||void 0===t?void 0:t.value)?e.detail.value:i.value;o&&void 0!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),function(e,t,i,o){o=o||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});s.detail=i,e.dispatchEvent(s)}(this,"config-changed",{config:this._config}))}_getAreaEntities(e){var t;return(null===(t=this._config)||void 0===t?void 0:t.area)?Object.keys(this.hass.states||{}).filter((t=>{var i,o;return(null===(i=this.hass.states[t].attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)&&t.split(".")[0]===e})):[]}_getDeviceClasses(e){const t=this._getAreaEntities(e).map((e=>{var t,i;return null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.device_class})).filter(Boolean);return[...new Set(t)]}render(){if(!this.hass||!this._config)return F;const e=this._getDeviceClasses("binary_sensor"),t=this._getDeviceClasses("sensor");return q`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-area-picker
            .hass=${this.hass}
            .value=${this._config.area}
            .configValue=${"area"}
            .label=${"Area (Required)"}
            @value-changed=${this._valueChanged}
          ></ha-area-picker>
        </div>

        <div class="option">
          <paper-input
            .label=${"Custom Name (Optional)"}
            .value=${this._config.name||""}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
        </div>

        <!-- Appearance Section -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-icon-picker
                .hass=${this.hass}
                .value=${this._config.icon||""}
                .configValue=${"icon"}
                .label=${"Custom Icon (Optional)"}
                @value-changed=${this._valueChanged}
              ></ha-icon-picker>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"compact",label:"Compact"},{value:"icon",label:"Icon Only"},{value:"picture",label:"Picture"},{value:"camera",label:"Camera"}]}}}
                .value=${this._config.display_type||"compact"}
                .configValue=${"display_type"}
                .label=${"Display Style"}
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
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${this._config.camera_entity||""}
                  .configValue=${"camera_entity"}
                  .label=${"Camera Entity"}
                  .includeDomains=${["camera"]}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              </div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"auto",label:"Auto"},{value:"live",label:"Live Stream"}]}}}
                  .value=${this._config.camera_view||"auto"}
                  .configValue=${"camera_view"}
                  .label=${"Camera View"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}
            
            ${"picture"===this._config.display_type?q`
              <div class="option">
                <paper-input
                  .label=${"Background Image URL"}
                  .value=${this._config.background_image||""}
                  .configValue=${"background_image"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div class="helper-text">Enter image URL or /local/image.jpg for local files</div>
              </div>
            `:""}

            <div class="option">
              <paper-input
                .label=${"Theme (Optional)"}
                .value=${this._config.theme||""}
                .configValue=${"theme"}
                @value-changed=${this._valueChanged}
              ></paper-input>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        ${e.length>0?q`
          <ha-expansion-panel header="Alert Sensors" outlined>
            <div class="content">
              <div class="helper-text">Select which binary sensor types to display as alerts</div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{multiple:!0,options:e.map((e=>({value:e,label:this.hass.localize(`component.binary_sensor.device_class.${e}`)||e})))}}}
                  .value=${this._config.alert_classes||[]}
                  .configValue=${"alert_classes"}
                  .label=${"Alert Types"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            </div>
          </ha-expansion-panel>
        `:""}

        <!-- Sensor Classes -->
        ${t.length>0?q`
          <ha-expansion-panel header="Sensor Display" outlined>
            <div class="content">
              <div class="helper-text">Select which sensor types to display</div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{multiple:!0,options:t.map((e=>({value:e,label:this.hass.localize(`component.sensor.device_class.${e}`)||e})))}}}
                  .value=${this._config.sensor_classes||[]}
                  .configValue=${"sensor_classes"}
                  .label=${"Sensor Types"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            </div>
          </ha-expansion-panel>
        `:""}

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced Options" outlined>
          <div class="content">
            <div class="option">
              <paper-input
                .label=${"Navigation Path (Optional)"}
                .value=${this._config.navigation_path||""}
                .configValue=${"navigation_path"}
                @value-changed=${this._valueChanged}
              ></paper-input>
              <div class="helper-text">Path to navigate to when card is tapped</div>
            </div>

            <div class="option">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${this._config.exclude_entities||[]}
                .configValue=${"exclude_entities"}
                .label=${"Exclude Entities"}
                .includeEntities=${this._getAreaEntities("all")}
                .allowCustomEntity=${!1}
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
              <div class="helper-text">Hide specific entities from this card</div>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `}static get styles(){return a`
      :host {
        display: block;
      }
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .helper-text {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      ha-expansion-panel {
        --expansion-panel-summary-padding: 16px;
        --expansion-panel-content-padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
      }
      ha-area-picker,
      ha-entity-picker,
      ha-icon-picker,
      ha-selector,
      paper-input {
        width: 100%;
      }
      paper-input {
        --paper-input-container-underline: {
          border-bottom: 1px solid var(--divider-color);
        };
        --paper-input-container-underline-focus: {
          border-bottom: 2px solid var(--primary-color);
        };
      }
    `}};t([pe({attribute:!1})],Be.prototype,"hass",void 0),t([fe()],Be.prototype,"_config",void 0),Be=t([de("area-card-elite-editor")],Be),customElements.get(e)||customElements.define(e,Re),customElements.get(e+"-editor")||customElements.define(e+"-editor",Be),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
