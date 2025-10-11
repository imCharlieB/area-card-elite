!function(t){"use strict";const e="area-card-elite";function i(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const s=globalThis,o=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,n)},c=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:d,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,g=globalThis,v=g.trustedTypes,_=v?v.emptyScript:"",$=g.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},A=(t,e)=>!d(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...f(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??A)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,$?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const E=globalThis,C=E.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,k="?"+M,U=`<${k}>`,O=document,H=()=>O.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,R=t=>T(t)||"function"==typeof t?.[Symbol.iterator],D="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,I=/>/g,V=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function Q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=B;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===B?"!--"===l[1]?r=j:void 0!==l[1]?r=I:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=V):void 0!==l[3]&&(r=V):r===V?">"===l[0]?(r=o??B,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?V:'"'===l[3]?L:z):r===L||r===z?r=V:r===j||r===I?r=B:(r=V,o=void 0);const h=r===V&&t[e+1].startsWith("/>")?" ":"";n+=r===B?i+U:c>=0?(s.push(a),i.slice(0,c)+P+i.slice(c)+M+h):i+M+(-2===c?e:h)}return[Q(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=G(t,e);if(this.el=X.createElement(l,i),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(P)){const e=c[n++],i=s.getAttribute(t).split(M),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?st:"?"===r[1]?ot:"@"===r[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(M)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),Z.nextNode(),a.push({type:2,index:++o});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)a.push({type:7,index:o}),t+=M.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=N(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);Z.currentNode=s;let o=Z.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=Z.nextNode(),n++)}return Z.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new et(this.k(H()),this.k(H()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Y(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Y(this,s[i+r],e,r),a===F&&(a=this._$AH[r]),n||=!N(a)||a!==this._$AH[r],a===J?t=J:t!==J&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.O(t)}O(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===J?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class nt extends it{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??J)===F)return;const i=this._$AH,s=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at={j:P,P:M,A:k,C:1,M:G,L:tt,R:R,V:Y,D:et,I:it,H:ot,N:nt,U:st,B:rt},lt=E.litHtmlPolyfillSupport;lt?.(X,et),(E.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let ct=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new et(e.insertBefore(H(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const dt=globalThis.litElementPolyfillSupport;dt?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ht=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ut={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:A},ft=(t=ut,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ft(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function mt(t){return pt({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const gt=2;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{D:_t}=at,$t=()=>document.createComment(""),yt=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore($t(),o),n=s.insertBefore($t(),o);i=new _t(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,o),t=e}}}return i},bt=(t,e,i=t)=>(t._$AI(e,i),t),At={},wt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},xt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},Et=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends vt{constructor(t){if(super(t),t.type!==gt)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.ht(e,i,s);if(!Array.isArray(o))return this.dt=r,n;const a=this.dt??=[],l=[];let c,d,h=0,u=o.length-1,f=0,p=n.length-1;for(;h<=u&&f<=p;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===r[f])l[f]=bt(o[h],n[f]),h++,f++;else if(a[u]===r[p])l[p]=bt(o[u],n[p]),u--,p--;else if(a[h]===r[p])l[p]=bt(o[h],n[p]),yt(t,l[p+1],o[h]),h++,p--;else if(a[u]===r[f])l[f]=bt(o[u],n[f]),yt(t,o[h],o[u]),u--,f++;else if(void 0===c&&(c=xt(r,f,p),d=xt(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(r[f]),i=void 0!==e?o[e]:null;if(null===i){const e=yt(t,o[h]);bt(e,n[f]),l[f]=e}else l[f]=bt(i,n[f]),yt(t,o[h],i),o[e]=null;f++}else wt(o[u]),u--;else wt(o[h]),h++;for(;f<=p;){const e=yt(t,l[p+1]);bt(e,n[f]),l[f++]=e}for(;h<=u;){const t=o[h++];null!==t&&wt(t)}return this.dt=r,((t,e=At)=>{t._$AH=e})(t,l),F}}),Ct=["sensor"],St=["binary_sensor"],Pt=["cover"],Mt=["climate"],kt=["camera"],Ut=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Ot={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Ht={alarm_control_panel:{on:"mdi:alarm-light",off:"mdi:alarm-light-off"},siren:{on:"mdi:bell-ring",off:"mdi:bell-off"},lock:{on:"mdi:lock-open",off:"mdi:lock"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},media_player:{on:"mdi:cast",off:"mdi:cast-off"},climate:{on:"mdi:thermostat",off:"mdi:thermostat-cog"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-off"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-off"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:power-off",off:"mdi:power-off",motion:{on:"mdi:motion-sensor",off:"mdi:motion-sensor-off"},moisture:{on:"mdi:water-alert",off:"mdi:water-off"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home-outline",off:"mdi:home-export-outline"},occupancy:{on:"mdi:seat",off:"mdi:seat-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:shield-lock-open",off:"mdi:shield-lock"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle-outline",off:"mdi:alert-circle-check-outline"},smoke:{on:"mdi:smoke-detector-outline",off:"mdi:smoke-detector-off-outline"},running:{on:"mdi:play",off:"mdi:pause"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},power:{on:"mdi:power",off:"mdi:power-off"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery-check"},gas:{on:"mdi:gas-station-outline",off:"mdi:gas-station-off-outline"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake",off:"mdi:snowflake-off"},heat:{on:"mdi:weather-sunny",off:"mdi:weather-sunny-off"},connectivity:{on:"mdi:connection",off:"mdi:connection"},safety:{on:"mdi:shield-alert-outline",off:"mdi:shield-check-outline"},sound:{on:"mdi:volume-high",off:"mdi:volume-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},tamper:{on:"mdi:shield-home",off:"mdi:shield-home"},light:{on:"mdi:lightbulb-outline",off:"mdi:lightbulb-off-outline"},moving:{on:"mdi:car",off:"mdi:car-off"}},person:{on:"mdi:account",off:"mdi:account-off"},device_tracker:{on:"mdi:account",off:"mdi:account-off"},valve:{on:"mdi:valve",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-pump-off"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-off"},calendar:{on:"mdi:calendar",off:"mdi:calendar-remove"},scene:{on:"mdi:movie",off:"mdi:movie-off"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text",off:"mdi:script-text"}},Nt=["unavailable","unknown"],Tt=["off","closed","idle"];
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let Rt=class extends ct{setConfig(t){if(!t.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Ot.binary_sensor,sensor_classes:Ot.sensor,exclude_entities:[]},t)}_getAreaEntities(){var t,e,i;return(null===(t=this._config)||void 0===t?void 0:t.area)&&(null===(i=null===(e=this.hass)||void 0===e?void 0:e.areas)||void 0===i?void 0:i[this._config.area])?Object.entries(this.hass.states||{}).filter((([t,e])=>{var i,s,o,n;if(!(null===(i=e.attributes)||void 0===i?void 0:i.area_id)||(null===(o=null===(s=this._config)||void 0===s?void 0:s.exclude_entities)||void 0===o?void 0:o.includes(t)))return!1;const[r]=t.split(".");return e.attributes.area_id===(null===(n=this._config)||void 0===n?void 0:n.area)&&(Ut.includes(r)||Ct.includes(r)||St.includes(r)||Pt.includes(r)||Mt.includes(r)||kt.includes(r))})).map((([t,e])=>({entityId:t,state:e.state,attributes:e.attributes,domain:t.split(".")[0],name:e.attributes.friendly_name||t.split(".")[1],deviceClass:e.attributes.device_class||""}))):[]}_getDomainIcon(t,e,i){if(!(t in Ht))return"mdi:help-circle";const s=Ht[t];if(!s)return"mdi:help-circle";const o=!Tt.includes(e)&&!Nt.includes(e);if(i&&"object"==typeof s&&i in s){const t=s[i];if(t&&"object"==typeof t&&"on"in t&&"off"in t)return o?t.on:t.off}return"object"==typeof s&&"on"in s&&"off"in s?o?s.on:s.off:"mdi:help-circle"}_getEntitiesByDomain(){const t=this._getAreaEntities(),e={};return t.forEach((t=>{e[t.domain]||(e[t.domain]=[]),e[t.domain].push(t)})),e}_getActiveEntities(t,e){return(this._getEntitiesByDomain()[t]||[]).filter((t=>(!e||t.deviceClass===e)&&(!Nt.includes(t.state)&&!Tt.includes(t.state))))}_renderButtons(){const t=this._getEntitiesByDomain(),e=Ut.filter((e=>e in t&&t[e].length>0));return q`
      <div class="buttons">
        ${Et(e,(t=>t),(t=>{const e=this._getActiveEntities(t).length,i=e>0;return q`
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
    `}_renderAlerts(){var t,e;const i=this._getEntitiesByDomain(),s=(null===(t=this._config)||void 0===t?void 0:t.alert_classes)||Ot.binary_sensor;return(null===(e=i.binary_sensor)||void 0===e?void 0:e.length)?q`
      <div class="alerts">
        ${s.map((t=>{const e=this._getActiveEntities("binary_sensor",t).length;return 0===e?J:q`
            <div class="icon-with-count">
              <ha-icon
                .icon=${this._getDomainIcon("binary_sensor","on",t)}
                class="alert"
              ></ha-icon>
              <span class="active-count on">${e}</span>
            </div>
          `}))}
      </div>
    `:J}_renderSensors(){var t,e,i,s,o;const n=this._getEntitiesByDomain(),r=(null===(t=this._config)||void 0===t?void 0:t.sensor_classes)||Ot.sensor,a=null===(i=null===(e=this.hass)||void 0===e?void 0:e.areas)||void 0===i?void 0:i[(null===(s=this._config)||void 0===s?void 0:s.area)||""];return(null===(o=n.sensor)||void 0===o?void 0:o.length)?q`
      <div class="sensors">
        ${r.map((t=>{var e,i;const s=n.sensor.filter((e=>e.deviceClass===t&&!Nt.includes(e.state)));if(0===s.length)return J;let o="";if("temperature"===t&&(null==a?void 0:a.temperature_entity_id)){const t=this.hass.states[a.temperature_entity_id];o=t?this.hass.formatEntityState(t):""}else if("humidity"===t&&(null==a?void 0:a.humidity_entity_id)){const t=this.hass.states[a.humidity_entity_id];o=t?this.hass.formatEntityState(t):""}else{const t=s.filter((t=>!isNaN(Number(t.state))));if(t.length>0){const s=t.reduce(((t,e)=>t+Number(e.state)),0),n=s/t.length,r=(null===(i=null===(e=t[0])||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.unit_of_measurement)||"";o=`${n.toFixed(1)}${r?` ${r}`:""}`}}return o?q`
            <div class="sensor">
              <span class="sensor-value">${o}</span>
            </div>
          `:J}))}
      </div>
    `:J}render(){var t;if(!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.area)||!this.hass.areas)return q`<ha-card>Loading...</ha-card>`;const e=this.hass.areas[this._config.area];if(!e)return q`<ha-card>Area not found</ha-card>`;const i=this._config.name||e.name;return q`
      <ha-card>
        <div class="icon-container">
          ${e.icon?q`<ha-icon .icon=${e.icon}></ha-icon>`:""}
        </div>

        <div class="content">
          <div class="right">
            ${this._renderAlerts()}
            ${this._renderButtons()}
          </div>

          <div class="bottom">
            <div class="name">${i}</div>
            ${this._renderSensors()}
          </div>
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};Rt.styles=l`
    ha-card {
      overflow: hidden;
      position: relative;
      height: 100%;
      padding: 16px;
    }

    .icon-container {
      position: absolute;
      top: 16px;
      left: 16px;
      color: var(--primary-color);
      z-index: 1;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      min-height: 120px;
    }

    .right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: auto;
    }

    .buttons, .alerts {
      display: flex;
      flex-direction: column;
      gap: 4px;
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
    }

    .icon-with-count:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .toggle-on {
      color: var(--primary-text-color);
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

    .bottom {
      margin-top: auto;
    }

    .name {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
  `,i([pt({attribute:!1})],Rt.prototype,"hass",void 0),i([mt()],Rt.prototype,"_config",void 0),Rt=i([ht("area-card-elite")],Rt);let Dt=class extends ct{setConfig(t){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[]},t)}_valueChanged(e){var i;if(e.stopPropagation(),!this._config||!(null===(i=e.detail)||void 0===i?void 0:i.value))return;const s=e.target,o=e.detail.value;s.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[s.configValue]:o})),t.fireEvent(this,"config-changed",{config:this._config})}_getAreaEntities(){var t,e;return(null===(t=this._config)||void 0===t?void 0:t.area)&&(null===(e=this.hass)||void 0===e?void 0:e.areas[this._config.area])?Object.entries(this.hass.states).filter((([t,e])=>{var i,s;if(!(null===(i=e.attributes)||void 0===i?void 0:i.area_id))return!1;const[o]=t.split(".");return e.attributes.area_id===(null===(s=this._config)||void 0===s?void 0:s.area)&&(Ut.includes(o)||Ct.includes(o)||St.includes(o)||Pt.includes(o)||Mt.includes(o))})).map((([t,e])=>({entityId:t,state:e.state,attributes:e.attributes,domain:t.split(".")[0],name:e.attributes.friendly_name||t.split(".")[1]}))):[]}_getDeviceClasses(t){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];const i=this._getAreaEntities().filter((e=>e.domain===t)),s=i.map((t=>t.attributes.device_class||"")).filter((t=>t));return[...new Set(s)]}_buildSelectOptions(t){return this._getDeviceClasses(t).map((e=>({value:e,label:this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${t}.${e}`)||e})))}render(){if(!this.hass||!this._config)return J;const t=this._buildSelectOptions("binary_sensor");this._buildSelectOptions("cover");const e=Ot.sensor.map((t=>({value:t,label:this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.sensor.${t}`)||t})));return q`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-select
            naturalMenuWidth
            fixedMenuPosition
            label="Area"
            .configValue=${"area"}
            .value=${this._config.area}
            @selected=${this._valueChanged}
            @closed=${t=>t.stopPropagation()}
          >
            ${Object.keys(this.hass.areas||{}).map((t=>q`
              <mwc-list-item .value=${t}>
                ${this.hass.areas[t].name}
              </mwc-list-item>
            `))}
          </ha-select>
        </div>

        <div class="option">
          <ha-textfield
            label="Name"
            .configValue=${"name"}
            .value=${this._config.name||""}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <!-- Display Options -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                naturalMenuWidth
                fixedMenuPosition
                label="Display Type"
                .configValue=${"display_type"}
                .value=${this._config.display_type||"compact"}
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="compact">Compact</mwc-list-item>
                <mwc-list-item value="icon">Icon</mwc-list-item>
                <mwc-list-item value="picture">Picture</mwc-list-item>
                <mwc-list-item value="camera">Camera</mwc-list-item>
              </ha-select>
            </div>

            <div class="option">
              <ha-textfield
                label="Color"
                type="color"
                .configValue=${"color"}
                .value=${this._config.color||""}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            <div class="option">
              <ha-textfield
                label="Aspect Ratio"
                .configValue=${"aspect_ratio"}
                .value=${this._config.aspect_ratio||"16:9"}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            ${"camera"===this._config.display_type?q`
              <div class="option">
                <ha-select
                  naturalMenuWidth
                  fixedMenuPosition
                  label="Camera View"
                  .configValue=${"camera_view"}
                  .value=${this._config.camera_view||"auto"}
                  @selected=${this._valueChanged}
                  @closed=${t=>t.stopPropagation()}
                >
                  <mwc-list-item value="auto">Auto</mwc-list-item>
                  <mwc-list-item value="live">Live</mwc-list-item>
                </ha-select>
              </div>
            `:""}
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        <ha-expansion-panel header="Alert Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Alert Classes"
                .configValue=${"alert_classes"}
                .value=${this._config.alert_classes||[]}
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                ${t.map((t=>q`
                  <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
                `))}
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Sensor Classes -->
        <ha-expansion-panel header="Sensor Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Sensor Classes"
                .configValue=${"sensor_classes"}
                .value=${this._config.sensor_classes||[]}
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                ${e.map((t=>q`
                  <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
                `))}
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Features -->
        <ha-expansion-panel header="Features" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Features"
                .configValue=${"features"}
                .value=${this._config.features||[]}
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="area-controls">Area Controls</mwc-list-item>
                <mwc-list-item value="more-info">More Info</mwc-list-item>
                <mwc-list-item value="toggle-all">Toggle All</mwc-list-item>
              </ha-select>
            </div>

            <div class="option">
              <ha-select
                naturalMenuWidth
                fixedMenuPosition
                label="Features Position"
                .configValue=${"features_position"}
                .value=${this._config.features_position||"bottom"}
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="bottom">Bottom</mwc-list-item>
                <mwc-list-item value="inline">Inline</mwc-list-item>
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced" outlined>
          <div class="content">
            <div class="option">
              <ha-textfield
                label="Navigation Path"
                .configValue=${"navigation_path"}
                .value=${this._config.navigation_path||""}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            <div class="option">
              <ha-entity-picker
                .hass=${this.hass}
                .configValue=${"exclude_entities"}
                .value=${this._config.exclude_entities||[]}
                .includeDomains=${["light","switch","sensor","binary_sensor"]}
                multiple
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `}static get styles(){return l`
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
      ha-select, ha-textfield, ha-entity-picker {
        width: 100%;
      }
    `}};i([pt({attribute:!1})],Dt.prototype,"hass",void 0),i([mt()],Dt.prototype,"_config",void 0),Dt=i([ht("area-card-elite-editor")],Dt),customElements.define(e,Rt),customElements.define(e+"-editor",Dt),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}(customCardHelpers);
//# sourceMappingURL=area-card-elite.js.map
