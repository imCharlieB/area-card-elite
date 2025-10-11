!function(){"use strict";const t="area-card-elite";function e(t,e,i,o){var s,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new a(i,t,s)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,v=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const n=o?.call(this);s.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),s=i.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(o?s:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[y("elementProperties")]=new Map,A[y("finalized")]=new Map,_?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,E=x.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,P="?"+k,M=`<${P}>`,O=document,U=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,R=t=>N(t)||"function"==typeof t?.[Symbol.iterator],H="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,j=/>/g,D=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,V=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",a=B;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===B?"!--"===l[1]?a=I:void 0!==l[1]?a=j:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=s??B,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?D:'"'===l[3]?V:z):a===V||a===z?a=D:a===I||a===j?a=B:(a=D,s=void 0);const h=a===D&&t[e+1].startsWith("/>")?" ":"";n+=a===B?i+M:c>=0?(o.push(r),i.slice(0,c)+S+i.slice(c)+k+h):i+k+(-2===c?e:h)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const a=t.length-1,r=this.parts,[l,c]=Q(t,e);if(this.el=Y.createElement(l,i),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Z.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=o.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?ot:"@"===a[1]?st:et}),o.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:s}),o.removeAttribute(t));if(L.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],U()),Z.nextNode(),r.push({type:2,index:++s});o.append(t[e],U())}}}else if(8===o.nodeType)if(o.data===P)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)r.push({type:7,index:s}),t+=k.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===F)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);Z.currentNode=o;let s=Z.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new tt(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new nt(s,this,t)),this._$AV.push(e),r=i[++a]}n!==r?.index&&(s=Z.nextNode(),n++)}return Z.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Y(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new tt(this.k(U()),this.k(U()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=G(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const o=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=G(this,o[i+a],e,a),r===F&&(r=this._$AH[a]),n||=!T(r)||r!==this._$AH[a],r===q?t=q:t!==q&&(t+=(r??"")+s[a+1]),this._$AH[a]=r}n&&!o&&this.O(t)}O(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===q?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends et{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===F)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const at={j:S,P:k,A:P,C:1,M:Q,L:X,R:R,V:G,D:tt,I:et,H:ot,N:st,U:it,B:nt},rt=x.litHtmlPolyfillSupport;rt?.(Y,tt),(x.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let lt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new tt(e.insertBefore(U(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.2");
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
     */,ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},ut=(t=ht,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function ft(t){return pt({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const mt=1,gt=2,vt=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const yt=vt(class extends _t{constructor(t){if(super(t),t.type!==mt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return F}}),$t="important",bt=" !"+$t,wt=vt(class extends _t{constructor(t){if(super(t),t.type!==mt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ut.add(t);const e="string"==typeof o&&o.endsWith(bt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?$t:""):i[t]=o}}return F}}),{D:At}=at,xt=()=>document.createComment(""),Et=(t,e,i)=>{const o=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(xt(),s),n=o.insertBefore(xt(),s);i=new At(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,a=n!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==s||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,s),t=e}}}return i},Ct=(t,e,i=t)=>(t._$AI(e,i),t),St={},kt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},Pt=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},Mt=vt(class extends _t{constructor(t){if(super(t),t.type!==gt)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const s=[],n=[];let a=0;for(const e of t)s[a]=o?o(e,a):a,n[a]=i(e,a),a++;return{values:n,keys:s}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,o]){const s=(t=>t._$AH)(t),{values:n,keys:a}=this.ht(e,i,o);if(!Array.isArray(s))return this.dt=a,n;const r=this.dt??=[],l=[];let c,d,h=0,u=s.length-1,p=0,f=n.length-1;for(;h<=u&&p<=f;)if(null===s[h])h++;else if(null===s[u])u--;else if(r[h]===a[p])l[p]=Ct(s[h],n[p]),h++,p++;else if(r[u]===a[f])l[f]=Ct(s[u],n[f]),u--,f--;else if(r[h]===a[f])l[f]=Ct(s[h],n[f]),Et(t,l[f+1],s[h]),h++,f--;else if(r[u]===a[p])l[p]=Ct(s[u],n[p]),Et(t,s[h],s[u]),u--,p++;else if(void 0===c&&(c=Pt(a,p,f),d=Pt(r,h,u)),c.has(r[h]))if(c.has(r[u])){const e=d.get(a[p]),i=void 0!==e?s[e]:null;if(null===i){const e=Et(t,s[h]);Ct(e,n[p]),l[p]=e}else l[p]=Ct(i,n[p]),Et(t,s[h],i),s[e]=null;p++}else kt(s[u]),u--;else kt(s[h]),h++;for(;p<=f;){const e=Et(t,l[f+1]);Ct(e,n[p]),l[p++]=e}for(;h<=u;){const t=s[h++];null!==t&&kt(t)}return this.dt=a,((t,e=St)=>{t._$AH=e})(t,l),F}}),Ot=["sensor"],Ut=["binary_sensor"],Tt=["cover"],Nt=["climate"],Rt=["camera"],Ht=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Bt={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},It={alarm_control_panel:{on:"mdi:alarm-light",off:"mdi:alarm-light-off"},siren:{on:"mdi:bell-ring",off:"mdi:bell-off"},lock:{on:"mdi:lock-open",off:"mdi:lock"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},media_player:{on:"mdi:cast",off:"mdi:cast-off"},climate:{on:"mdi:thermostat",off:"mdi:thermostat-cog"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-off"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-off"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:power-off",off:"mdi:power-off",motion:{on:"mdi:motion-sensor",off:"mdi:motion-sensor-off"},moisture:{on:"mdi:water-alert",off:"mdi:water-off"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home-outline",off:"mdi:home-export-outline"},occupancy:{on:"mdi:seat",off:"mdi:seat-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:shield-lock-open",off:"mdi:shield-lock"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle-outline",off:"mdi:alert-circle-check-outline"},smoke:{on:"mdi:smoke-detector-outline",off:"mdi:smoke-detector-off-outline"},running:{on:"mdi:play",off:"mdi:pause"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},power:{on:"mdi:power",off:"mdi:power-off"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery-check"},gas:{on:"mdi:gas-station-outline",off:"mdi:gas-station-off-outline"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake",off:"mdi:snowflake-off"},heat:{on:"mdi:weather-sunny",off:"mdi:weather-sunny-off"},connectivity:{on:"mdi:connection",off:"mdi:connection"},safety:{on:"mdi:shield-alert-outline",off:"mdi:shield-check-outline"},sound:{on:"mdi:volume-high",off:"mdi:volume-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},tamper:{on:"mdi:shield-home",off:"mdi:shield-home"},light:{on:"mdi:lightbulb-outline",off:"mdi:lightbulb-off-outline"},moving:{on:"mdi:car",off:"mdi:car-off"}},person:{on:"mdi:account",off:"mdi:account-off"},device_tracker:{on:"mdi:account",off:"mdi:account-off"},valve:{on:"mdi:valve",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-pump-off"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-off"},calendar:{on:"mdi:calendar",off:"mdi:calendar-remove"},scene:{on:"mdi:movie",off:"mdi:movie-off"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text",off:"mdi:script-text"}},jt=["unavailable","unknown"],Dt=["off","closed","idle"];
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let zt=class extends lt{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas()}async _loadAreas(){var t;try{if(null===(t=this.hass)||void 0===t?void 0:t.connection){const t=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},t.forEach((t=>{this._areas[t.area_id]=t}))}}catch(t){console.error("Failed to load areas:",t),this._areas={}}}setConfig(t){if(!t.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Bt.binary_sensor,sensor_classes:Bt.sensor,exclude_entities:[]},t)}_getAreaEntities(){var t;return(null===(t=this._config)||void 0===t?void 0:t.area)?Object.entries(this.hass.states||{}).filter((([t,e])=>{var i,o,s,n;if(!(null===(i=e.attributes)||void 0===i?void 0:i.area_id)||(null===(s=null===(o=this._config)||void 0===o?void 0:o.exclude_entities)||void 0===s?void 0:s.includes(t)))return!1;const[a]=t.split(".");return e.attributes.area_id===(null===(n=this._config)||void 0===n?void 0:n.area)&&(Ht.includes(a)||Ot.includes(a)||Ut.includes(a)||Tt.includes(a)||Nt.includes(a)||Rt.includes(a))})).map((([t,e])=>({entityId:t,state:e.state,attributes:e.attributes,domain:t.split(".")[0],name:e.attributes.friendly_name||t.split(".")[1],deviceClass:e.attributes.device_class||""}))):[]}_getDomainIcon(t,e,i){if(!(t in It))return"mdi:help-circle";const o=It[t];if(!o)return"mdi:help-circle";const s=!Dt.includes(e)&&!jt.includes(e);if(i&&"object"==typeof o&&i in o){const t=o[i];if(t&&"object"==typeof t&&"on"in t&&"off"in t)return s?t.on:t.off}return"object"==typeof o&&"on"in o&&"off"in o?s?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const t=this._getAreaEntities(),e={};return t.forEach((t=>{e[t.domain]||(e[t.domain]=[]),e[t.domain].push(t)})),e}_getActiveEntities(t,e){return(this._getEntitiesByDomain()[t]||[]).filter((t=>(!e||t.deviceClass===e)&&(!jt.includes(t.state)&&!Dt.includes(t.state))))}_renderButtons(){const t=this._getEntitiesByDomain(),e=Ht.filter((e=>e in t&&t[e].length>0));return W`
      <div class="buttons">
        ${Mt(e,(t=>t),(t=>{const e=this._getActiveEntities(t).length,i=e>0;return W`
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
    `}_renderAlerts(){var t,e;const i=this._getEntitiesByDomain(),o=(null===(t=this._config)||void 0===t?void 0:t.alert_classes)||Bt.binary_sensor;return(null===(e=i.binary_sensor)||void 0===e?void 0:e.length)?W`
      <div class="alerts">
        ${o.map((t=>{const e=this._getActiveEntities("binary_sensor",t).length;return 0===e?q:W`
            <div class="icon-with-count">
              <ha-icon
                .icon=${this._getDomainIcon("binary_sensor","on",t)}
                class="alert"
              ></ha-icon>
              <span class="active-count on">${e}</span>
            </div>
          `}))}
      </div>
    `:q}_renderSensors(){var t,e,i;const o=this._getEntitiesByDomain(),s=(null===(t=this._config)||void 0===t?void 0:t.sensor_classes)||Bt.sensor,n=this._areas[(null===(e=this._config)||void 0===e?void 0:e.area)||""];return(null===(i=o.sensor)||void 0===i?void 0:i.length)?W`
      <div class="sensors">
        ${s.map((t=>{var e,i;const s=o.sensor.filter((e=>e.deviceClass===t&&!jt.includes(e.state)));if(0===s.length)return q;let a="";if("temperature"===t&&(null==n?void 0:n.temperature_entity_id)){const t=this.hass.states[n.temperature_entity_id];a=t?this.hass.formatEntityState(t):""}else if("humidity"===t&&(null==n?void 0:n.humidity_entity_id)){const t=this.hass.states[n.humidity_entity_id];a=t?this.hass.formatEntityState(t):""}else{const t=s.filter((t=>!isNaN(Number(t.state))));if(t.length>0){const o=t.reduce(((t,e)=>t+Number(e.state)),0),s=o/t.length,n=(null===(i=null===(e=t[0])||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.unit_of_measurement)||"";a=`${s.toFixed(1)}${n?` ${n}`:""}`}}return a?W`
            <div class="sensor">
              <span class="sensor-value">${a}</span>
            </div>
          `:q}))}
      </div>
    `:q}_getAreaCameras(){var t;return(null===(t=this._config)||void 0===t?void 0:t.area)?Object.entries(this.hass.states||{}).filter((([t,e])=>{var i,o;const[s]=t.split(".");return"camera"===s&&(null===(i=e.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([t,e])=>({entityId:t,name:e.attributes.friendly_name||t.split(".")[1]}))):[]}render(){var t;if(!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.area))return W`<ha-card>Loading...</ha-card>`;const e=this._areas[this._config.area];if(!e)return W`<ha-card>Area not found</ha-card>`;const i=this._config.name||e.name,o=this._config.display_type||"compact",s=this._getBackgroundStyles();return W`
      <ha-card class=${yt({"display-compact":"compact"===o,"display-icon":"icon"===o,"display-picture":"picture"===o,"display-camera":"camera"===o})} style=${wt(s)}>
        ${this._renderBackground()}
        
        <div class="icon-container">
          ${this._renderIcon(e)}
        </div>

        <div class="content">
          <div class="right">
            ${this._renderAlerts()}
            ${this._renderButtons()}
          </div>

          <div class="bottom">
            <div class="name">${i}</div>
            ${this._renderSensors()}
            ${this._renderFeatures()}
          </div>
        </div>
      </ha-card>
    `}_getBackgroundStyles(){var t,e;const i={};if((null===(t=this._config)||void 0===t?void 0:t.color)&&(i["--card-background-color"]=this._config.color,i.backgroundColor=this._config.color),null===(e=this._config)||void 0===e?void 0:e.aspect_ratio){const t=this._config.aspect_ratio.split(":");if(2===t.length){const e=parseInt(t[1])/parseInt(t[0])*100;i.aspectRatio=this._config.aspect_ratio,i.paddingBottom=`${e}%`}}return i}_renderBackground(){var t,e,i;const o=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";if("camera"===o){const t=this._getAreaCameras();if(t.length>0){const i=t[0];return W`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${i.entityId}
              .cameraView=${(null===(e=this._config)||void 0===e?void 0:e.camera_view)||"auto"}
            ></hui-image>
          </div>
        `}}return"picture"===o&&(null===(i=this._config)||void 0===i?void 0:i.background_image)?W`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `:q}_renderIcon(t){var e;const i=(null===(e=this._config)||void 0===e?void 0:e.display_type)||"compact";return t.icon?"icon"===i?W`<ha-icon .icon=${t.icon} class="large-icon"></ha-icon>`:W`<ha-icon .icon=${t.icon}></ha-icon>`:q}_renderFeatures(){var t,e;const i=(null===(t=this._config)||void 0===t?void 0:t.features)||[],o=(null===(e=this._config)||void 0===e?void 0:e.features_position)||"bottom";return i.length?W`
      <div class="features ${o}">
        ${i.map((t=>{switch(t){case"area-controls":return this._renderAreaControls();case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return q}}))}
      </div>
    `:q}_renderAreaControls(){return W`
      <ha-button @click=${this._handleAreaControls}>
        <ha-icon icon="mdi:tune"></ha-icon>
        Controls
      </ha-button>
    `}_renderMoreInfoButton(){return W`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `}_renderToggleAllButton(){return W`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `}_handleAreaControls(){var t;if(null===(t=this._config)||void 0===t?void 0:t.navigation_path){history.pushState(null,"",this._config.navigation_path);const t=new CustomEvent("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(t)}}_handleMoreInfo(){var t;const e=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(t=this._config)||void 0===t?void 0:t.area}`},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAll(){const t=this._getAreaEntities().filter((t=>Ht.includes(t.domain)));t.forEach((t=>{this.hass.callService(t.domain,"toggle",{},{entity_id:t.entityId})}))}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var Vt,Lt;zt.styles=r`
    ha-card {
      overflow: hidden;
      position: relative;
      height: 100%;
      padding: 16px;
      transition: all 0.3s ease;
    }

    /* Display Type Styles */
    .display-compact {
      min-height: 120px;
    }

    .display-icon {
      min-height: 200px;
      text-align: center;
    }

    .display-icon .icon-container {
      position: relative;
      top: auto;
      left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
    }

    .display-icon .large-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
    }

    .display-picture, .display-camera {
      position: relative;
      min-height: 200px;
    }

    .display-picture .picture-background,
    .display-camera .camera-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-size: cover;
      background-position: center;
    }

    .display-picture .picture-background {
      opacity: 0.7;
    }

    .display-camera hui-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Overlay for picture/camera modes */
    .display-picture .content,
    .display-camera .content {
      position: relative;
      z-index: 2;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
      height: 100%;
      padding: 16px;
      margin: -16px;
    }

    .display-picture .name,
    .display-camera .name {
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .display-picture .sensor-value,
    .display-camera .sensor-value {
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }

    /* Icon Container */
    .icon-container {
      position: absolute;
      top: 16px;
      left: 16px;
      color: var(--primary-color);
      z-index: 3;
    }

    .display-picture .icon-container,
    .display-camera .icon-container {
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    /* Content Layout */
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
      transition: background-color 0.2s ease;
      cursor: pointer;
    }

    .icon-with-count:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .display-picture .icon-with-count,
    .display-camera .icon-with-count {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
    }

    .display-picture .icon-with-count:hover,
    .display-camera .icon-with-count:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .toggle-on {
      color: var(--primary-text-color);
    }

    .toggle-off {
      color: var(--secondary-text-color);
    }

    .display-picture .toggle-on,
    .display-camera .toggle-on {
      color: white;
    }

    .display-picture .toggle-off,
    .display-camera .toggle-off {
      color: rgba(255, 255, 255, 0.6);
    }

    .alert {
      color: var(--error-color);
    }

    .display-picture .alert,
    .display-camera .alert {
      color: #ff6b6b;
    }

    .active-count.on {
      color: var(--primary-text-color);
      font-weight: bold;
    }

    .active-count.off {
      color: var(--secondary-text-color);
    }

    .display-picture .active-count,
    .display-camera .active-count {
      color: white;
    }

    /* Bottom Section */
    .bottom {
      margin-top: auto;
    }

    .name {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .display-icon .name {
      text-align: center;
      font-size: 1.4em;
    }

    .sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .display-icon .sensors {
      text-align: center;
      justify-content: center;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }

    .display-icon .sensor-value {
      font-size: 1.1em;
      font-weight: 500;
    }

    /* Features */
    .features {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .features.inline {
      margin-top: 0;
      margin-left: 8px;
    }

    .features ha-button {
      --mdc-theme-primary: var(--primary-color);
      font-size: 0.8em;
      min-width: auto;
    }

    .display-picture .features ha-button,
    .display-camera .features ha-button {
      --mdc-theme-primary: white;
      --mdc-theme-on-primary: black;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      border-radius: 8px;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
      .display-icon .large-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
      }
      
      .name {
        font-size: 1em;
      }
      
      .display-icon .name {
        font-size: 1.2em;
      }
    }
  `,e([pt({attribute:!1})],zt.prototype,"hass",void 0),e([ft()],zt.prototype,"_config",void 0),e([ft()],zt.prototype,"_areas",void 0),zt=e([dt("area-card-elite")],zt),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Vt||(Vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Lt||(Lt={}));let Wt=class extends lt{constructor(){super(...arguments),this._areas=[]}async connectedCallback(){super.connectedCallback(),await this._loadAreas()}async _loadAreas(){var t;try{if(null===(t=this.hass)||void 0===t?void 0:t.connection){const t=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas=t||[]}}catch(t){console.error("Failed to load areas:",t),this._areas=[]}}setConfig(t){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[]},t)}_valueChanged(t){var e;if(t.stopPropagation(),!this._config)return;const i=t.target;let o=null===(e=t.detail)||void 0===e?void 0:e.value,s=i.configValue;console.log("Value changed:",{type:t.type,tagName:i.tagName,configValue:s,value:o,detail:t.detail}),null==o&&("input"===t.type&&void 0!==i.value||"selected"===t.type&&void 0!==i.value||void 0!==i.value)&&(o=i.value),"HA-AREA-PICKER"===i.tagName?s="area":"HA-ENTITY-PICKER"===i.tagName&&(s=i.configValue||"exclude_entities"),i.multiple&&Array.isArray(o)||i.multiple&&"string"==typeof o&&(o=[o]),s&&void 0!==o&&(console.log("Setting config:",s,"=",o),this._config=Object.assign(Object.assign({},this._config),{[s]:o}),function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});s.detail=i,t.dispatchEvent(s)}(this,"config-changed",{config:this._config}),this.requestUpdate())}_getDeviceClasses(t){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];const i=Object.entries(this.hass.states||{}).filter((([e,i])=>{var o,s;return!!(null===(o=i.attributes)||void 0===o?void 0:o.area_id)&&(i.attributes.area_id===(null===(s=this._config)||void 0===s?void 0:s.area)&&e.split(".")[0]===t)})).map((([t,e])=>e)),o=i.map((t=>t.attributes.device_class||"")).filter((t=>t));return[...new Set(o)]}_buildSelectOptions(t){return this._getDeviceClasses(t).map((e=>({value:e,label:this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${t}.${e}`)||e})))}render(){if(!this.hass||!this._config)return q;const t=this._buildSelectOptions("binary_sensor");this._buildSelectOptions("cover");const e=Bt.sensor.map((t=>({value:t,label:this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.sensor.${t}`)||t})));return W`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-area-picker
            .hass=${this.hass}
            .value=${this._config.area}
            .configValue=${"area"}
            label="Area"
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-area-picker>
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

            ${"camera"===this._config.display_type?W`
              <div class="option">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${this._config.camera_entity}
                  .configValue=${"camera_entity"}
                  .includeDomains=${["camera"]}
                  .entityFilter=${t=>{var e,i;return(null===(e=t.attributes)||void 0===e?void 0:e.area_id)===(null===(i=this._config)||void 0===i?void 0:i.area)}}
                  label="Camera Entity"
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              </div>
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
            
            ${"picture"===this._config.display_type?W`
              <div class="option">
                <ha-textfield
                  label="Background Image URL"
                  .configValue=${"background_image"}
                  .value=${this._config.background_image||""}
                  @input=${this._valueChanged}
                  helper="Enter image URL or /local/image.jpg for local files"
                ></ha-textfield>
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
                ${t.map((t=>W`
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
                ${e.map((t=>W`
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
    `}static get styles(){return r`
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
    `}};e([pt({attribute:!1})],Wt.prototype,"hass",void 0),e([ft()],Wt.prototype,"_config",void 0),e([ft()],Wt.prototype,"_areas",void 0),Wt=e([dt("area-card-elite-editor")],Wt),customElements.get(t)||customElements.define(t,zt),customElements.get(t+"-editor")||customElements.define(t+"-editor",Wt),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
