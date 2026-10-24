!function(){"use strict";const e="area-card-elite";function t(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}function i(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new r(i,e,a)},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:h,defineProperty:d,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,m=globalThis,_=m.trustedTypes,v=_?_.emptyScript:"",y=m.reactiveElementPolyfillSupport,b=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!h(e,t),w={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);s.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...f(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),s=o.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??x)(o?s:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,y?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const C=globalThis,k=C.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,P="?"+O,I=`<${P}>`,T=document,z=()=>T.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,B=e=>j(e)||"function"==typeof e?.[Symbol.iterator],R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,N=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Y=new WeakMap,K=T.createTreeWalker(T,129);function J(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,o=[];let s,a=2===t?"<svg>":"",n=U;for(let t=0;t<i;t++){const i=e[t];let r,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=V:void 0!==c[1]?n=N:void 0!==c[2]?(F.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=s??U,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,r=c[1],n=void 0===c[3]?D:'"'===c[3]?H:L):n===H||n===L?n=D:n===V||n===N?n=U:(n=D,s=void 0);const d=n===D&&e[t+1].startsWith("/>")?" ":"";a+=n===U?i+I:l>=0?(o.push(r),i.slice(0,l)+E+i.slice(l)+O+d):i+O+(-2===l?t:d)}return[J(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class Z{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const n=e.length-1,r=this.parts,[c,l]=X(e,t);if(this.el=Z.createElement(c,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[a++],i=o.getAttribute(e).split(O),n=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?oe:"?"===n[1]?se:"@"===n[1]?ae:ie}),o.removeAttribute(e)}else e.startsWith(O)&&(r.push({type:6,index:s}),o.removeAttribute(e));if(F.test(o.tagName)){const e=o.textContent.split(O),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],z()),K.nextNode(),r.push({type:2,index:++s});o.append(e[t],z())}}}else if(8===o.nodeType)if(o.data===P)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(O,e+1));)r.push({type:7,index:s}),e+=O.length-1}s++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,o){if(t===q)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const a=M(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??T).importNode(t,!0);K.currentNode=o;let s=K.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new te(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new ne(s,this,e)),this._$AV.push(t),r=i[++n]}a!==r?.index&&(s=K.nextNode(),a++)}return K.currentNode=T,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),M(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):B(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Z(e)),t}T(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new te(this.k(z()),this.k(z()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(void 0===s)e=Q(this,e,t,0),a=!M(e)||e!==this._$AH&&e!==q,a&&(this._$AH=e);else{const o=e;let n,r;for(e=s[0],n=0;n<s.length-1;n++)r=Q(this,o[i+n],t,n),r===q&&(r=this._$AH[n]),a||=!M(r)||r!==this._$AH[n],r===G?e=G:e!==G&&(e+=(r??"")+s[n+1]),this._$AH[n]=r}a&&!o&&this.O(e)}O(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===G?void 0:e}}class se extends ie{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ae extends ie{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??G)===q)return;const i=this._$AH,o=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const re={j:E,P:O,A:P,C:1,M:X,L:ee,R:B,V:Q,D:te,I:ie,H:se,N:ae,U:oe,B:ne},ce=C.litHtmlPolyfillSupport;ce?.(Z,te),(C.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let le=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new te(t.insertBefore(z(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};le._$litElement$=!0,le.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:le});const he=globalThis.litElementPolyfillSupport;he?.({LitElement:le}),(globalThis.litElementVersions??=[]).push("4.0.2");
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
     */,ue={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:x},pe=(e=ue,t,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function fe(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function ge(e){return fe({...e,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const me=1,_e=2,ve=e=>(...t)=>({_$litDirective$:e,values:t});let ye=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const be="important",$e=" !"+be,xe=ve(class extends ye{constructor(e){if(super(e),e.type!==me||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(t)),this.render(t);for(const e of this.ut)null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ut.add(e);const t="string"==typeof o&&o.endsWith($e);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?be:""):i[e]=o}}return q}}),{D:we}=re,Ae=()=>document.createComment(""),Ce=(e,t,i)=>{const o=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(Ae(),s),a=o.insertBefore(Ae(),s);i=new we(t,a,e,e.options)}else{const t=i._$AB.nextSibling,a=i._$AM,n=a!==e;if(n){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==a._$AU&&i._$AP(t)}if(t!==s||n){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,s),e=t}}}return i},ke=(e,t,i=e)=>(e._$AI(t,i),e),Se={},Ee=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},Oe=(e,t,i)=>{const o=new Map;for(let s=t;s<=i;s++)o.set(e[s],s);return o},Pe=ve(class extends ye{constructor(e){if(super(e),e.type!==_e)throw Error("repeat() can only be used in text expressions")}ht(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const s=[],a=[];let n=0;for(const t of e)s[n]=o?o(t,n):n,a[n]=i(t,n),n++;return{values:a,keys:s}}render(e,t,i){return this.ht(e,t,i).values}update(e,[t,i,o]){const s=(e=>e._$AH)(e),{values:a,keys:n}=this.ht(t,i,o);if(!Array.isArray(s))return this.dt=n,a;const r=this.dt??=[],c=[];let l,h,d=0,u=s.length-1,p=0,f=a.length-1;for(;d<=u&&p<=f;)if(null===s[d])d++;else if(null===s[u])u--;else if(r[d]===n[p])c[p]=ke(s[d],a[p]),d++,p++;else if(r[u]===n[f])c[f]=ke(s[u],a[f]),u--,f--;else if(r[d]===n[f])c[f]=ke(s[d],a[f]),Ce(e,c[f+1],s[d]),d++,f--;else if(r[u]===n[p])c[p]=ke(s[u],a[p]),Ce(e,s[d],s[u]),u--,p++;else if(void 0===l&&(l=Oe(n,p,f),h=Oe(r,d,u)),l.has(r[d]))if(l.has(r[u])){const t=h.get(n[p]),i=void 0!==t?s[t]:null;if(null===i){const t=Ce(e,s[d]);ke(t,a[p]),c[p]=t}else c[p]=ke(i,a[p]),Ce(e,s[d],i),s[t]=null;p++}else Ee(s[u]),u--;else Ee(s[d]),d++;for(;p<=f;){const t=Ce(e,c[f+1]);ke(t,a[p]),c[p++]=t}for(;d<=u;){const e=s[d++];null!==e&&Ee(e)}return this.dt=n,((e,t=Se)=>{e._$AH=t})(e,c),q}}),Ie=["sensor"],Te=["binary_sensor"],ze=["cover"],Me=["climate"],je=["camera"],Be=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Re={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Ue={alarm_control_panel:{on:"mdi:shield-alert",off:"mdi:shield-check"},siren:{on:"mdi:bell-ring",off:"mdi:bell-outline"},lock:{locked:"mdi:lock",unlocked:"mdi:lock-open-outline",on:"mdi:lock",off:"mdi:lock-open-outline"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-outline"},media_player:{on:"mdi:speaker-wireless",off:"mdi:speaker"},climate:{on:"mdi:thermostat",off:"mdi:thermostat"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-outline"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-outline",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-outline"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-outline"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-variant"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower-outline"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:radiobox-marked",off:"mdi:radiobox-blank",motion:{on:"mdi:run",off:"mdi:walk"},moisture:{on:"mdi:water-alert",off:"mdi:water"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home",off:"mdi:home-outline"},occupancy:{on:"mdi:account",off:"mdi:account-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:door-open",off:"mdi:door-closed"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle",off:"mdi:check-circle"},smoke:{on:"mdi:smoke-detector",off:"mdi:smoke-detector"},running:{on:"mdi:play-circle",off:"mdi:pause-circle-outline"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-outline"},power:{on:"mdi:lightning-bolt",off:"mdi:lightning-bolt-outline"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery"},gas:{on:"mdi:gas-cylinder",off:"mdi:gas-cylinder"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake-alert",off:"mdi:snowflake-variant"},heat:{on:"mdi:fire",off:"mdi:fire-circle"},connectivity:{on:"mdi:wifi",off:"mdi:wifi-strength-outline"},safety:{on:"mdi:shield-alert",off:"mdi:shield-check"},sound:{on:"mdi:volume-high",off:"mdi:volume-low"},update:{on:"mdi:update",off:"mdi:cloud-check"},tamper:{on:"mdi:shield-remove",off:"mdi:shield-check"},light:{on:"mdi:lightbulb-on",off:"mdi:lightbulb-outline"},moving:{on:"mdi:car",off:"mdi:car-outline"}},person:{on:"mdi:account",off:"mdi:account-outline"},device_tracker:{on:"mdi:map-marker",off:"mdi:map-marker-outline"},valve:{on:"mdi:valve-open",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-boiler-alert"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:package-up",off:"mdi:package-check"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-outline"},calendar:{on:"mdi:calendar-check",off:"mdi:calendar-blank"},scene:{on:"mdi:palette",off:"mdi:palette-outline"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text-play",off:"mdi:script-text-outline"}};
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ve(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)}`:"76, 175, 80"}const Ne={motion:"#ff9800",occupancy:"#9c27b0",door:"#f44336",window:"#f44336",moisture:"#2196f3",smoke:"#f44336",gas:"#ff5722",problem:"#f44336",safety:"#f44336",tamper:"#f44336",heat:"#ff9800",cold:"#03a9f4",default:"#f44336"};function De(e,t){const i=null==t?void 0:t.alert_color;if(i)return{color:i,rgb:Ve(i)};const o=e&&e in Ne?Ne[e]:Ne.default;return{color:o,rgb:Ve(o)}}function Le(e){if(null==e)return{color:"transparent",rgb:"0, 0, 0"};let t;return t=e>=80?"#ff5722":e>=75?"#ff9800":e>=70?"#ffc107":e>=65?"#4caf50":e>=60?"#03a9f4":"#2196f3",{color:t,rgb:Ve(t)}}function He(e){return null==e?{icon:"mdi:thermometer",animate:!1}:e>=80?{icon:"mdi:fire",animate:!0}:e>=75?{icon:"mdi:weather-sunny",animate:!1}:e>=70?{icon:"mdi:thermometer",animate:!1}:e>=65?{icon:"mdi:thermometer-check",animate:!1}:e>=60?{icon:"mdi:thermometer",animate:!1}:{icon:"mdi:snowflake",animate:!0}}const Fe=["unavailable","unknown"],We=["off","closed","idle"];let qe=class extends le{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),this.requestUpdate()}updated(e){super.updated(e),e.has("hass")&&this.hass&&0===Object.keys(this._areas).length&&this._loadAreas().then((()=>this.requestUpdate()))}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},e.forEach((e=>{this._areas[e.area_id]=e}))}}catch(e){console.error("Failed to load areas:",e),this._areas={}}}setConfig(e){if(!e.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Re.binary_sensor,sensor_classes:Re.sensor,exclude_entities:[]},e)}_getAreaEntities(){var e,t;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];const i=this.hass.states[`area.${this._config.area}`];let o=[];(null===(t=null==i?void 0:i.attributes)||void 0===t?void 0:t.entity_id)&&(o=Array.isArray(i.attributes.entity_id)?i.attributes.entity_id:[i.attributes.entity_id]);const s=Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,s,a,n;if(null===(s=null===(i=this._config)||void 0===i?void 0:i.exclude_entities)||void 0===s?void 0:s.includes(e))return!1;const[r]=e.split(".");if(!(Be.includes(r)||Ie.includes(r)||Te.includes(r)||ze.includes(r)||Me.includes(r)||je.includes(r)))return!1;const c=(null===(a=t.attributes)||void 0===a?void 0:a.area_id)===(null===(n=this._config)||void 0===n?void 0:n.area),l=o.includes(e);return c||l})).map((([e,t])=>({entityId:e,state:t.state,attributes:t.attributes,domain:e.split(".")[0],name:t.attributes.friendly_name||e.split(".")[1],deviceClass:t.attributes.device_class||""})));return s}_getDomainIcon(e,t,i){if(!(e in Ue))return"mdi:help-circle";const o=Ue[e];if(!o)return"mdi:help-circle";if("lock"===e&&"object"==typeof o){if("locked"===t&&"locked"in o)return o.locked;if("unlocked"===t&&"unlocked"in o)return o.unlocked}const s=!We.includes(t)&&!Fe.includes(t);if(i&&"object"==typeof o&&i in o){const e=o[i];if(e&&"object"==typeof e&&"on"in e&&"off"in e)return s?e.on:e.off}return"object"==typeof o&&"on"in o&&"off"in o?s?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const e=this._getAreaEntities(),t={};return e.forEach((e=>{t[e.domain]||(t[e.domain]=[]),t[e.domain].push(e)})),t}_getActiveEntities(e,t){return(this._getEntitiesByDomain()[e]||[]).filter((e=>(!t||e.deviceClass===t)&&(!Fe.includes(e.state)&&!We.includes(e.state))))}_renderButtons(){const e=this._getEntitiesByDomain(),t=Be.filter((t=>t in e&&e[t].length>0));return W`
      <div class="buttons">
        ${Pe(t,(e=>e),(e=>{const t=this._getActiveEntities(e).length,i=t>0;return W`
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
    `}_getDeviceReading(e){var t;return((null===(t=this._config)||void 0===t?void 0:t.sensor_entities)||[]).find((t=>{var i,o;return(null===(o=null===(i=this.hass.states[t])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.device_class)===e}))}_renderSensors(){var e,t,i;if(!this._config)return G;const o=[];if(this._config.temperature_entity&&this.hass.states[this._config.temperature_entity]){const e=this.hass.states[this._config.temperature_entity];if(!Fe.includes(e.state)){const t=parseFloat(e.state),i=Le(t),s=He(t);o.push({icon:s.icon,value:this.hass.formatEntityState(e),deviceClass:"temperature",color:i.color,animate:s.animate})}}if(this._config.humidity_entity&&this.hass.states[this._config.humidity_entity]){const e=this.hass.states[this._config.humidity_entity];Fe.includes(e.state)||o.push({icon:"mdi:water-percent",value:this.hass.formatEntityState(e),deviceClass:"humidity",color:"#2196f3"})}if(this._config.pressure_entity&&this.hass.states[this._config.pressure_entity]){const e=this.hass.states[this._config.pressure_entity];Fe.includes(e.state)||o.push({icon:"mdi:gauge",value:this.hass.formatEntityState(e),deviceClass:"pressure",color:"#26a69a"})}if(this._config.illuminance_entity&&this.hass.states[this._config.illuminance_entity]){const e=this.hass.states[this._config.illuminance_entity];Fe.includes(e.state)||o.push({icon:"mdi:brightness-6",value:this.hass.formatEntityState(e),deviceClass:"illuminance",color:"#ffeb3b"})}if(this._config.power_entity&&this.hass.states[this._config.power_entity]){const e=this.hass.states[this._config.power_entity];Fe.includes(e.state)||o.push({icon:"mdi:flash",value:this.hass.formatEntityState(e),deviceClass:"power",color:"#ff9800"})}if(this._config.energy_entity&&this.hass.states[this._config.energy_entity]){const e=this.hass.states[this._config.energy_entity];Fe.includes(e.state)||o.push({icon:"mdi:lightning-bolt",value:this.hass.formatEntityState(e),deviceClass:"energy",color:"#9c27b0"})}if(this._config.battery_entity&&this.hass.states[this._config.battery_entity]){const e=this.hass.states[this._config.battery_entity];if(!Fe.includes(e.state)){const t=Number(e.state);let i="mdi:battery",s="#4caf50";isNaN(t)||(t<=10?(i="mdi:battery-outline",s="#f44336"):t<=20?(i="mdi:battery-20",s="#ff5722"):t<=50?(i="mdi:battery-50",s="#ff9800"):(i="mdi:battery",s="#4caf50")),o.push({icon:i,value:this.hass.formatEntityState(e),deviceClass:"battery",color:s})}}const s=[this._config.temperature_entity,this._config.humidity_entity,this._config.pressure_entity,this._config.illuminance_entity,this._config.power_entity,this._config.energy_entity,this._config.battery_entity],a={temperature:{icon:"mdi:thermometer",color:"#ff9800"},humidity:{icon:"mdi:water-percent",color:"#2196f3"},pressure:{icon:"mdi:gauge",color:"#26a69a"},atmospheric_pressure:{icon:"mdi:gauge",color:"#26a69a"},illuminance:{icon:"mdi:brightness-6",color:"#ffeb3b"},power:{icon:"mdi:flash",color:"#ff9800"},energy:{icon:"mdi:lightning-bolt",color:"#9c27b0"},battery:{icon:"mdi:battery",color:"#4caf50"},carbon_dioxide:{icon:"mdi:molecule-co2",color:"#8bc34a"},dew_point:{icon:"mdi:water-thermometer",color:"#03a9f4"},vpd:{icon:"mdi:sprout",color:"#8bc34a"},voltage:{icon:"mdi:sine-wave",color:"#ffc107"},signal_strength:{icon:"mdi:wifi",color:"#9e9e9e"}},n=["temperature","humidity","pressure","atmospheric_pressure","dew_point","vpd","illuminance","carbon_dioxide","power","energy","voltage","signal_strength","battery"],r=e=>{var t,i;return/dew_?point/.test(e)?"dew_point":/vpd/.test(e)?"vpd":null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.device_class},c=e=>{const t=n.indexOf(r(e));return-1===t?n.length-1.5:t},l=[...new Set([...this._config.sensor_entities||[],...this._config.extra_sensors||[]])].sort(((e,t)=>c(e)-c(t)));for(const e of l){const t=this.hass.states[e];if(!t||Fe.includes(t.state)||s.includes(e))continue;const i=r(e),n=i&&a[i]||{icon:"mdi:eye",color:"#9e9e9e"};if("temperature"!==i||isNaN(parseFloat(t.state)))o.push({icon:t.attributes.icon||n.icon,value:this.hass.formatEntityState(t),deviceClass:i||"sensor",color:n.color});else{const e=parseFloat(t.state),s=He(e);o.push({icon:s.icon,value:this.hass.formatEntityState(t),deviceClass:i,color:Le(e).color,animate:s.animate})}}const h=(null===(e=this._config)||void 0===e?void 0:e.occupancy_sensor)&&this.hass.states[this._config.occupancy_sensor]?this.hass.states[this._config.occupancy_sensor]:null,d=!!h&&"on"===h.state,u=(null===(t=this._config)||void 0===t?void 0:t.occupancy_display)||"auto";return h&&"sensor"===("auto"===u?h?"icon":"none":u)&&o.unshift({icon:"mdi:account",value:d?"Occupied":"Vacant",deviceClass:"occupancy",color:(null===(i=this._config)||void 0===i?void 0:i.occupancy_color)||"#ffffff"}),0===o.length?G:W`
      <div class="sensors">
        ${o.map((e=>W`
          <div class="sensor">
            <ha-icon icon="${e.icon}" class="${e.animate?"temp-icon-animate":""}" style="color: ${e.color}"></ha-icon>
            <span class="sensor-value">${e.value}</span>
          </div>
        `))}
      </div>
    `}_areAnyLightsOn(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return!1;const t=this._getAreaEntities().filter((e=>"light"===e.domain));return t.some((e=>{const t=this.hass.states[e.entityId];return t&&"on"===t.state}))}_getActiveAlertInfo(){if(!this._config)return{hasAlert:!1,color:"#f44336",rgb:"244, 67, 54"};let e;if(this._config.motion_sensor&&this.hass.states[this._config.motion_sensor]){const t=this.hass.states[this._config.motion_sensor];if("on"===t.state){e=t.attributes.device_class||"motion";const i=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:e})}}if(!0===this._config.occupancy_include_in_alerts&&this._config.occupancy_sensor&&this.hass.states[this._config.occupancy_sensor]){const t=this.hass.states[this._config.occupancy_sensor];if("on"===t.state){e=t.attributes.device_class||"occupancy";const i=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:e})}}if(this._config.door_sensor&&this.hass.states[this._config.door_sensor]){const t=this.hass.states[this._config.door_sensor];if("on"===t.state){e=t.attributes.device_class||"door";const i=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:e})}}if(this._config.window_sensor&&this.hass.states[this._config.window_sensor]){const t=this.hass.states[this._config.window_sensor];if("on"===t.state){e=t.attributes.device_class||"window";const i=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:e})}}if(this._config.moisture_sensor&&this.hass.states[this._config.moisture_sensor]){const t=this.hass.states[this._config.moisture_sensor];if("on"===t.state){e=t.attributes.device_class||"moisture";const i=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},i),{deviceClass:e})}}if(this._config.additional_alerts)for(const t of this._config.additional_alerts){const i=this.hass.states[t];if(i&&"on"===i.state){e=i.attributes.device_class;const t=De(e,this._config);return Object.assign(Object.assign({hasAlert:!0},t),{deviceClass:e})}}return{hasAlert:!1,color:"#f44336",rgb:"244, 67, 54"}}_hasActiveAlerts(){return this._getActiveAlertInfo().hasAlert}_renderAlerts(){if(!this._config)return G;const e=[];if(this._config.motion_sensor&&this.hass.states[this._config.motion_sensor]){"on"===this.hass.states[this._config.motion_sensor].state&&e.push({icon:"mdi:motion-sensor",name:"Motion",entityId:this._config.motion_sensor})}if(!0===this._config.occupancy_include_in_alerts&&this._config.occupancy_sensor&&this.hass.states[this._config.occupancy_sensor]){"on"===this.hass.states[this._config.occupancy_sensor].state&&e.push({icon:"mdi:account",name:"Occupied",entityId:this._config.occupancy_sensor})}if(this._config.door_sensor&&this.hass.states[this._config.door_sensor]){"on"===this.hass.states[this._config.door_sensor].state&&e.push({icon:"mdi:door-open",name:"Door Open",entityId:this._config.door_sensor})}if(this._config.window_sensor&&this.hass.states[this._config.window_sensor]){"on"===this.hass.states[this._config.window_sensor].state&&e.push({icon:"mdi:window-open-variant",name:"Window Open",entityId:this._config.window_sensor})}if(this._config.moisture_sensor&&this.hass.states[this._config.moisture_sensor]){"on"===this.hass.states[this._config.moisture_sensor].state&&e.push({icon:"mdi:water-alert",name:"Moisture",entityId:this._config.moisture_sensor})}return this._config.additional_alerts&&this._config.additional_alerts.forEach((t=>{const i=this.hass.states[t];i&&"on"===i.state&&e.push({icon:this._getDomainIcon("binary_sensor","on",i.attributes.device_class),name:i.attributes.friendly_name||t.split(".")[1],entityId:t})})),0===e.length?G:W`
      <div class="alerts">
        ${e.map((e=>W`
          <div class="icon-with-count alert" @click=${()=>this._handleEntityClick(e.entityId)}>
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="alert-label">${e.name}</span>
          </div>
        `))}
      </div>
    `}_renderAreaControls(){if(!this._config)return G;const e=[];if(this._config.light_entity&&this.hass.states[this._config.light_entity]){const t=this.hass.states[this._config.light_entity],i="on"===t.state;e.push({icon:i?"mdi:lightbulb":"mdi:lightbulb-outline",name:t.attributes.friendly_name||"Light",entityId:this._config.light_entity,isOn:i,color:i?"#ffc107":"#757575"})}if(this._config.climate_entity&&this.hass.states[this._config.climate_entity]){const t=this.hass.states[this._config.climate_entity],i="off"!==t.state,o=t.state;let s="mdi:thermostat",a="#757575";"heat"===o?(s="mdi:fire",a="#f44336"):"cool"===o?(s="mdi:snowflake",a="#2196f3"):"auto"===o&&(s="mdi:thermostat-auto",a="#4caf50"),e.push({icon:s,name:t.attributes.friendly_name||"Climate",entityId:this._config.climate_entity,isOn:i,color:a})}if(this._config.switch_entity&&this.hass.states[this._config.switch_entity]){const t=this.hass.states[this._config.switch_entity],i="on"===t.state;e.push({icon:i?"mdi:toggle-switch":"mdi:toggle-switch-off",name:t.attributes.friendly_name||"Switch",entityId:this._config.switch_entity,isOn:i,color:i?"#4caf50":"#757575"})}if(this._config.fan_entity&&this.hass.states[this._config.fan_entity]){const t=this.hass.states[this._config.fan_entity],i="on"===t.state;e.push({icon:i?"mdi:fan":"mdi:fan-off",name:t.attributes.friendly_name||"Fan",entityId:this._config.fan_entity,isOn:i,color:i?"#03a9f4":"#757575"})}if(this._config.media_player_entity&&this.hass.states[this._config.media_player_entity]){const t=this.hass.states[this._config.media_player_entity],i="playing"===t.state,o=!We.includes(t.state)&&!Fe.includes(t.state);let s="mdi:speaker-off",a="#757575";i?(s="mdi:speaker-play",a="#4caf50"):o&&(s="mdi:speaker",a="#2196f3"),e.push({icon:s,name:t.attributes.friendly_name||"Media",entityId:this._config.media_player_entity,isOn:o,color:a})}this._config.additional_controls&&this._config.additional_controls.forEach((t=>{const i=this.hass.states[t];if(i){const o=t.split(".")[0],s=!We.includes(i.state)&&!Fe.includes(i.state);e.push({icon:this._getDomainIcon(o,i.state),name:i.attributes.friendly_name||t.split(".")[1],entityId:t,isOn:s,color:s?"#2196f3":"#757575"})}}));const t=!1!==this._config.show_lights_off_button,i=this._areAnyLightsOn(),o=i?"mdi:lightbulb-group":"mdi:lightbulb-group-off-outline",s=i?"#ffc107":"#757575";return 0!==e.length||t?W`
      <div class="area-controls">
        ${e.map((e=>W`
          <div class="control-button ${e.isOn?"active":""}"
               @click=${()=>this._handleControlClick(e.entityId)}>
            <ha-icon icon="${e.icon}" style="color: ${e.color}"></ha-icon>
          </div>
        `))}
        ${t?W`
          <div class="control-button ${i?"active":""}"
               title="Toggle all lights"
               @click=${()=>this._handleTurnOffAllLights()}>
            <ha-icon icon="${o}" style="color: ${s}"></ha-icon>
          </div>
        `:G}
      </div>
    `:G}_handleControlClick(e){this._handleEntityClick(e)}_handleEntityClick(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_getAreaCameras(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o;const[s]=e.split(".");return"camera"===s&&(null===(i=t.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([e,t])=>({entityId:e,name:t.attributes.friendly_name||e.split(".")[1]}))):[]}_getAreaName(){var e,t,i;if(null===(e=this._config)||void 0===e?void 0:e.name)return this._config.name;const o=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==o?void 0:o.name)||(null===(i=this._config)||void 0===i?void 0:i.area)||"Unknown Area"}_getAreaIcon(){var e,t;if(null===(e=this._config)||void 0===e?void 0:e.icon)return this._config.icon;const i=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==i?void 0:i.icon)||"mdi:home"}_getAreaFilteredEntities(e,t){var i;return(null===(i=this._config)||void 0===i?void 0:i.area)?Object.entries(this.hass.states||{}).filter((([i,o])=>{var s,a;const[n]=i.split(".");return n===e&&((!t||o.attributes.device_class===t)&&(null===(s=o.attributes)||void 0===s?void 0:s.area_id)===(null===(a=this._config)||void 0===a?void 0:a.area))})).map((([e])=>e)):[]}_isEntityActive(e){var t;if(!e)return!1;const i=e.entity_id.split(".")[0];if(Fe.includes(e.state))return!1;if("lock"===i)return"locked"===e.state;if("binary_sensor"===i){const i=null===(t=e.attributes)||void 0===t?void 0:t.device_class;if("door"===i||"window"===i||"opening"===i)return"off"===e.state||"closed"===e.state}return"cover"===i?"closed"===e.state:!We.includes(e.state)}render(){var e,t,i,o,s,a,n,r;if(!this.hass||!this._config)return G;const c=this._getAreaName(),l=this._getAreaIcon(),h=this._config.area_name_color?`color: ${this._config.area_name_color};`:"",d=this._config.area_icon_color?`color: ${this._config.area_icon_color};`:"",u={active:{color:(null==(p=this._config)?void 0:p.state_active_color)||"#4caf50",rgb:Ve((null==p?void 0:p.state_active_color)||"#4caf50")},inactive:{color:(null==p?void 0:p.state_inactive_color)||"#607d8b",rgb:Ve((null==p?void 0:p.state_inactive_color)||"#607d8b")}};var p;const f=this._getActiveAlertInfo();let g,m;const _=this._config.temperature_entity||this._getDeviceReading("temperature"),v=this._config.humidity_entity||this._getDeviceReading("humidity");if(_&&this.hass.states[_]){const e=this.hass.states[_].state;g=parseFloat(e),isNaN(g)&&(g=void 0)}if(v&&this.hass.states[v]){const e=this.hass.states[v].state;m=parseFloat(e),isNaN(m)&&(m=void 0)}const y=Le(g),b=function(e){return null==e?.15:e>=70?.25:e>=60?.2:e>=40?.15:.12}(m),$=(null===(e=this._config)||void 0===e?void 0:e.occupancy_sensor)&&this.hass.states[this._config.occupancy_sensor]?this.hass.states[this._config.occupancy_sensor]:null,x="on"===($?$.state:void 0),w=(null===(t=this._config)||void 0===t?void 0:t.occupancy_display)||"auto",A="auto"===w?$?"icon":"none":w,C=((null===(i=this._config)||void 0===i?void 0:i.occupancy_color)||"").toString(),k=e=>/^#([0-9A-F]{3}){1,2}$/i.test(e),S=C||"var(--primary-text-color, #000)",E=k(C)?this._hexToRgb(C):"255,255,255";let O=G;if($){const e="mdi:account",t=x?"Occupied":"Not occupied";switch(A){case"icon":O=x?W`
              <span class="occupancy-indicator" title="${t}" style="color: ${S}">
                <ha-icon .icon=${e} style="--mdc-icon-size: 18px"></ha-icon>
              </span>
            `:(null===(o=this._config)||void 0===o?void 0:o.occupancy_show_last_seen)?W`
              <span class="occupancy-lastseen" title="Last seen">${this._formatTimeSince($)}</span>
            `:G;break;case"badge":const i=k(C)?`rgba(${E}, 0.12)`:"rgba(255,255,255,0.06)",a=k(C)?`rgba(${E}, 0.18)`:"rgba(255,255,255,0.08)";O=W`
            <span class="occupancy-pill ${x?"on":"off"}" title="${t}"
                  style="color: ${S}; background: ${i}; border-color: ${a};">
              <ha-icon .icon=${e}></ha-icon>
              <span class="pill-label">${x?"Occupied":"Vacant"}</span>
              ${(null===(s=this._config)||void 0===s?void 0:s.occupancy_show_last_seen)&&!x?W`<span class="occupancy-lastseen">${this._formatTimeSince($)}</span>`:G}
            </span>
          `;break;case"sensor":default:O=G;break;case"overlay":const n=k(C)?`rgba(${E}, 0.12)`:"rgba(255,255,255,0.06)",r=k(C)?`rgba(${E}, 0.18)`:"rgba(255,255,255,0.08)";O=W`
            <div class="occupancy-overlay" title="${t}"
                 style="background: ${n}; border-color: ${r}; color: ${S};">
              <ha-icon .icon=${e}></ha-icon>
            </div>
          `}}const P="overlay"===A,I=xe(Object.assign({"--state-active-color":u.active.color,"--state-active-rgb":u.active.rgb,"--state-inactive-color":u.inactive.color,"--state-inactive-rgb":u.inactive.rgb,"--alert-color":f.color,"--alert-rgb":f.rgb,"--occupancy-color":S,"--occupancy-rgb":E,"--occupancy-glow-strength":(null!==(n=null===(a=this._config)||void 0===a?void 0:a.occupancy_glow_strength)&&void 0!==n?n:.12).toString(),"--temp-color":y.color,"--temp-rgb":y.rgb,"--humidity-intensity":b.toString()},this._config.color&&{backgroundColor:this._config.color})),T=this._config.layout||"compact",z=this._config.features_position||"bottom",M=null===(r=this._config.features)||void 0===r?void 0:r.includes("area-controls"),j=this._config.main_entity?this.hass.states[this._config.main_entity]:null;return W`
      <ha-card class="${this._config.display_type||"compact"} layout-${T} features-${z} ${x?"occupied":""}" style=${I}>
        ${P&&O!==G?O:""}
        <div class="content">
          <!-- Large background entity icon - ONLY for icon display type -->
          ${"icon"===this._config.display_type&&j?W`
            <!-- Separate circle background -->
            <div class="main-entity-circle ${this._isEntityActive(j)?"active":"inactive"} ${this._hasActiveAlerts()?"has-alert":""}">
            </div>
            <!-- Separate entity icon - uses proper domain icon -->
            <div class="main-entity-icon"
                 @click=${()=>{var e;return(null===(e=this._config)||void 0===e?void 0:e.main_entity)&&this._handleEntityClick(this._config.main_entity)}}>
              <ha-icon
                icon="${this._getDomainIcon(j.entity_id.split(".")[0],j.state,j.attributes.device_class)}">
              </ha-icon>
            </div>
          `:G}

          ${"picture"===this._config.display_type&&this._config.background_image?W`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          `:""}

          ${"camera"===this._config.display_type&&this._config.camera_entity?(()=>{var e;const t=this.hass.states[this._config.camera_entity];if("live"===(this._config.camera_view||"live"))return W`
                <hui-image
                  class="camera-view"
                  .hass=${this.hass}
                  .entity=${this._config.camera_entity}
                  .cameraImage=${"live"}
                  .cameraView=${"live"}
                ></hui-image>
              `;{const i=(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.entity_picture)||`/api/camera_proxy/${this._config.camera_entity}`;return W`
                <img
                  class="camera-view"
                  src="${i}"
                  @error=${()=>{var e;return console.error(`Failed to load camera: ${null===(e=this._config)||void 0===e?void 0:e.camera_entity}`)}}
                />
              `}})():""}

          <div class="area-info">
            ${"vertical"===T||"compact"!==this._config.display_type?W`
              <div class="area-icon" style="${d}">
                <ha-icon icon="${l}"></ha-icon>
              </div>
            `:""}
            
            <div class="area-details">
              <div class="area-name" style="${h}">
                ${"vertical"!==T&&"compact"===this._config.display_type?W`
                  <ha-icon icon="${l}" style="${d}"></ha-icon>
                `:""}
                ${c}

                ${P||O===G?"":O}
              </div>
              
              <!-- For vertical layout, show sensors under the name -->
              ${"vertical"===T?W`
                <div class="area-sensors">
                  ${this._renderSensors()}
                  ${this._renderAlerts()}
                </div>
              `:""}
            </div>
          </div>

          <!-- For non-vertical layouts, show sensors in separate section -->
          ${"vertical"!==T?W`
            <div class="sensors-section">
              ${this._renderSensors()}
              ${this._renderAlerts()}
            </div>
          `:G}

          ${M?W`
            <div class="controls-section">
              ${this._renderAreaControls()}
            </div>
          `:G}

          ${this._renderFeatures()}
        </div>
      </ha-card>
    `}_getBackgroundStyles(){var e,t;const i={};if((null===(e=this._config)||void 0===e?void 0:e.color)&&(i["--card-background-color"]=this._config.color,i.backgroundColor=this._config.color),null===(t=this._config)||void 0===t?void 0:t.aspect_ratio){const e=this._config.aspect_ratio.split(":");if(2===e.length){const t=parseInt(e[1])/parseInt(e[0])*100;i.aspectRatio=this._config.aspect_ratio,i.paddingBottom=`${t}%`}}return i}_renderBackground(){var e,t,i;const o=(null===(e=this._config)||void 0===e?void 0:e.display_type)||"compact";if("camera"===o){const e=this._getAreaCameras();if(e.length>0){const i=e[0];return W`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${i.entityId}
              .cameraView=${(null===(t=this._config)||void 0===t?void 0:t.camera_view)||"auto"}
            ></hui-image>
          </div>
        `}}return"picture"===o&&(null===(i=this._config)||void 0===i?void 0:i.background_image)?W`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `:G}_renderIcon(e){var t;const i=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";return e.icon?"icon"===i?W`<ha-icon .icon=${e.icon} class="large-icon"></ha-icon>`:W`<ha-icon .icon=${e.icon}></ha-icon>`:G}_renderFeatures(){var e,t;const i=(null===(e=this._config)||void 0===e?void 0:e.features)||[],o=(null===(t=this._config)||void 0===t?void 0:t.features_position)||"bottom";return i.length?W`
      <div class="features ${o}">
        ${i.map((e=>{switch(e){case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return G}}))}
      </div>
    `:G}_renderMoreInfoButton(){return W`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `}_renderToggleAllButton(){return W`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `}_handleMoreInfo(){var e;const t=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(e=this._config)||void 0===e?void 0:e.area}`},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleToggleAll(){const e=this._getAreaEntities().filter((e=>Be.includes(e.domain)));e.forEach((e=>{this.hass.callService(e.domain,"toggle",{},{entity_id:e.entityId})}))}async _handleTurnOffAllLights(){var e;if(null===(e=this._config)||void 0===e?void 0:e.area)try{const e=this.hass.connection;if(!e)return void console.error("No websocket connection available");const[t,i]=await Promise.all([e.sendMessagePromise({type:"config/entity_registry/list"}),e.sendMessagePromise({type:"config/device_registry/list"})]),o=new Map;i.forEach((e=>{e.area_id&&o.set(e.id,e.area_id)}));const s=t.filter((e=>{var t,i;return!!e.entity_id.startsWith("light.")&&(e.area_id===(null===(t=this._config)||void 0===t?void 0:t.area)||!(!e.device_id||o.get(e.device_id)!==(null===(i=this._config)||void 0===i?void 0:i.area)))})).map((e=>e.entity_id));if(0===s.length)return void console.log(`No lights found in ${this._config.area}`);const a=s.some((e=>{const t=this.hass.states[e];return t&&"on"===t.state}))?"turn_off":"turn_on";console.log(`${"turn_off"===a?"Turning off":"Turning on"} ${s.length} lights in ${this._config.area}:`,s),await this.hass.callService("light",a,{entity_id:s})}catch(e){console.error("Error toggling lights:",e)}}_hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)}`:"76, 175, 80"}_formatTimeSince(e){if(!e||!e.last_changed)return"";try{const t=new Date(e.last_changed),i=new Date,o=Math.floor((i.getTime()-t.getTime())/1e3);if(o<60)return`${o}s`;const s=Math.floor(o/60);if(s<60)return`${s}m`;const a=Math.floor(s/60);if(a<24)return`${a}h`;return`${Math.floor(a/24)}d`}catch(e){return""}}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var Ge,Ye;qe.styles=c`
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

    /* Temperature icon animations for extremes */
    @keyframes fire-flicker {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      25% {
        transform: scale(1.05) rotate(-2deg);
        opacity: 0.9;
      }
      50% {
        transform: scale(0.98) rotate(1deg);
        opacity: 1;
      }
      75% {
        transform: scale(1.03) rotate(-1deg);
        opacity: 0.95;
      }
    }

    @keyframes snowflake-pulse {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: scale(1.1) rotate(10deg);
        opacity: 0.85;
      }
    }

    /* Apply animations to temperature icons */
    .sensor ha-icon.temp-icon-animate[icon="mdi:fire"] {
      animation: fire-flicker 1.5s ease-in-out infinite;
    }

    .sensor ha-icon.temp-icon-animate[icon="mdi:snowflake"] {
      animation: snowflake-pulse 2s ease-in-out infinite;
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

    /* Occupancy indicator next to area name */
    .occupancy-indicator {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 8px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
      vertical-align: middle;
    }

    .occupancy-indicator ha-icon {
      --mdc-icon-size: 18px;
      color: var(--occupancy-color, var(--primary-text-color));
      filter: drop-shadow(0 0 4px var(--occupancy-color, rgba(255,255,255,0.75)));
      vertical-align: middle;
    }

    /* Ensure the inner SVG uses the currentColor so CSS vars take effect and icons are visible
       even if the SVG path has an explicit fill in some themes or shadow DOM. Use !important
       because ha-icon renders an internal svg that sometimes has fixed fills. */
    .occupancy-indicator ha-icon svg,
    .occupancy-overlay ha-icon svg,
    .occupancy-pill ha-icon svg {
      fill: currentColor !important;
      stroke: none !important;
      opacity: 1 !important;
    }

    .occupancy-count {
      font-weight: 600;
      font-size: 0.85em;
      color: var(--primary-text-color);
    }

    /* Pill / badge style for occupancy */
    .occupancy-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 8px;
      border-radius: 14px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      font-size: 0.85em;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .occupancy-pill.on {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.12);
      color: var(--primary-text-color);
    }

    .occupancy-pill ha-icon {
      --mdc-icon-size: 16px;
    }

    .occupancy-pill .pill-label {
      font-weight: 600;
      font-size: 0.85em;
    }

    /* Corner overlay badge */
    .occupancy-overlay {
      position: absolute;
      bottom: 8px;
      left: 8px;
      z-index: 5;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      /* background/border set inline to respect occupancy_color */
      pointer-events: none;
    }

    .occupancy-overlay ha-icon {
      --mdc-icon-size: 18px;
      color: var(--occupancy-color, var(--primary-text-color));
      filter: drop-shadow(0 0 6px var(--occupancy-color, rgba(255,255,255,0.9)));
    }

    /* Override: when the card display_type is "icon" we intentionally hide the area-name's
       built-in icon, but occupancy indicators should still be visible. Force occupancy icons
       to display and inherit color even in that mode. */
    .icon .area-name .occupancy-indicator ha-icon,
    .icon .area-name .occupancy-indicator ha-icon svg {
      display: inline-flex !important;
      width: auto !important;
      height: auto !important;
      fill: currentColor !important;
      stroke: none !important;
      opacity: 1 !important;
      vertical-align: middle !important;
    }

    /* Also ensure overlay/pill icons are visible if some theme rules hide ha-icon globally */
    .occupancy-pill ha-icon,
    .occupancy-pill ha-icon svg,
    .occupancy-overlay ha-icon,
    .occupancy-overlay ha-icon svg {
      display: inline-flex !important;
      fill: currentColor !important;
      stroke: none !important;
      opacity: 1 !important;
    }

    /* Occupied glow — layered and softened so low strengths don't render as a hard line. */
    ha-card.occupied {
      transition: box-shadow 0.25s ease, transform 0.25s ease;
      /* Two layered shadows: a soft wide glow + a nearer, slightly stronger glow. Use min blur sizes
         so very small strength values still render as a soft halo instead of a hard outline. We use
         the RGB variable for predictable translucency (works whether user supplied a hex or var).
      */
      box-shadow:
        /* prefer using the user-provided color var when available; fall back to rgba(rgb) */
        0 0 calc(max(var(--occupancy-glow-strength) * 46px, 28px)) var(--occupancy-color, rgba(var(--occupancy-rgb, 255,255,255), calc(var(--occupancy-glow-strength) * 0.18))),
        /* nearer glow (smaller blur, low opacity) */
        0 0 calc(max(var(--occupancy-glow-strength) * 20px, 10px)) var(--occupancy-color, rgba(var(--occupancy-rgb, 255,255,255), calc(var(--occupancy-glow-strength) * 0.28)));
      border: 1px solid rgba(var(--occupancy-rgb, 255,255,255), 0.04);
      /* drop-shadow for subtle edge glow; also softened with a minimum blur */
    filter: drop-shadow(0 0 calc(max(var(--occupancy-glow-strength) * 14px, 6px)) var(--occupancy-color, rgba(var(--occupancy-rgb, 255,255,255), calc(var(--occupancy-glow-strength) * 0.28))));
    }

    /* If the browser supports color-mix, prefer mixing the user-provided color variable
       with transparent to produce a translucent glow while preserving the exact hue when
       the user supplies a CSS variable (e.g. var(--primary-color)). This avoids falling
       back to white when occupancy_color is not a hex string. Older browsers will use the
       rgba(var(--occupancy-rgb)) fallback above.
    */
    @supports (color: color-mix(in srgb, var(--occupancy-color) 10%, transparent)) {
      ha-card.occupied {
        box-shadow:
          0 0 calc(max(var(--occupancy-glow-strength) * 46px, 28px)) color-mix(in srgb, var(--occupancy-color) calc(var(--occupancy-glow-strength) * 18%), transparent),
          0 0 calc(max(var(--occupancy-glow-strength) * 20px, 10px)) color-mix(in srgb, var(--occupancy-color) calc(var(--occupancy-glow-strength) * 28%), transparent);
        filter: drop-shadow(0 0 calc(max(var(--occupancy-glow-strength) * 14px, 6px)) color-mix(in srgb, var(--occupancy-color) calc(var(--occupancy-glow-strength) * 28%), transparent));
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
  `,i([fe({attribute:!1})],qe.prototype,"hass",void 0),i([ge()],qe.prototype,"_config",void 0),i([ge()],qe.prototype,"_areas",void 0),qe=i([de("area-card-elite")],qe),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ge||(Ge={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ye||(Ye={}));var Ke=function(e,t,i,o){o=o||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,e.dispatchEvent(s),s};let Je=class extends le{constructor(){super(...arguments),this._areas=[],this._localImages=[],this._entities=[],this._devices=[]}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),await this._loadLocalImages(),await this._loadEntityRegistry(),await this._loadDeviceRegistry()}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas=e||[]}}catch(e){console.error("Failed to load areas:",e),this._areas=[]}}async _loadEntityRegistry(){var e;try{(null===(e=this.hass)||void 0===e?void 0:e.connection)&&(this._entities=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"}))}catch(e){console.error("Failed to load entity registry:",e),this._entities=[]}}async _loadDeviceRegistry(){var e;try{(null===(e=this.hass)||void 0===e?void 0:e.connection)&&(this._devices=await this.hass.connection.sendMessagePromise({type:"config/device_registry/list"}))}catch(e){console.error("Failed to load device registry:",e),this._devices=[]}}async _loadLocalImages(){try{const e=await this.hass.connection.sendMessagePromise({type:"media_player/browse_media",media_content_id:"media-source://media_source/local",media_content_type:"app"});this._localImages=this._extractImagePaths(e)}catch(e){console.error("Failed to load local images:",e),this._localImages=[]}}_extractImagePaths(e){const t=[];return(null==e?void 0:e.children)&&e.children.forEach((e=>{var i,o;if(null===(i=e.media_content_type)||void 0===i?void 0:i.startsWith("image/")){const i=null===(o=e.media_content_id)||void 0===o?void 0:o.replace("media-source://media_source/local/","/local/");i&&t.push(i)}})),t}setConfig(e){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[],layout:"vertical"},e)}_valueChanged(e){var i;if(e.stopPropagation(),!this._config)return;const o=e.target;let s=null===(i=e.detail)||void 0===i?void 0:i.value,a=o.configValue;if("HA-AREA-PICKER"===o.tagName?a="area":"HA-ENTITY-PICKER"===o.tagName&&(a=o.configValue||"exclude_entities"),a&&e.detail&&"value"in e.detail&&(null==s||""===s)){const e=this._config,i=a;e[i];const o=t(e,["symbol"==typeof i?i:i+""]);return this._config=o,Ke(this,"config-changed",{config:this._config}),void this.requestUpdate()}null==s&&(s=o.value),a&&void 0!==s&&(this._config=Object.assign(Object.assign({},this._config),{[a]:s}),Ke(this,"config-changed",{config:this._config}),this.requestUpdate())}_clearButton(e){var t;const i=null===(t=this._config)||void 0===t?void 0:t[e];return null==i||""===i?G:W`<button class="clear-btn" type="button" @click=${()=>this._clearOption(e)}>✕ Clear</button>`}_clearOption(e){if(!this._config)return;const i=this._config,o=e;i[o];const s=t(i,["symbol"==typeof o?o:o+""]);this._config=s,Ke(this,"config-changed",{config:this._config}),this.requestUpdate()}_getDeviceSensors(e){return this._entities.filter((t=>t.device_id===e&&t.entity_id.startsWith("sensor.")&&!t.disabled_by)).map((e=>{var t,i;const o=this.hass.states[e.entity_id],s=(null===(t=null==o?void 0:o.attributes)||void 0===t?void 0:t.friendly_name)||e.name||e.original_name||e.entity_id,a=null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.unit_of_measurement;return{value:e.entity_id,label:a?`${s} (${a})`:s}}))}_sensorDeviceChanged(e){var i;if(e.stopPropagation(),!this._config)return;const o=null===(i=e.detail)||void 0===i?void 0:i.value,s=t(this._config,["sensor_device","sensor_entities"]);this._config=o?Object.assign(Object.assign({},s),{sensor_device:o,sensor_entities:[]}):s,Ke(this,"config-changed",{config:this._config}),this.requestUpdate()}_getDeviceClasses(e){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return[];const i=Object.entries(this.hass.states||{}).filter((([t,i])=>{var o,s;return!!(null===(o=i.attributes)||void 0===o?void 0:o.area_id)&&(i.attributes.area_id===(null===(s=this._config)||void 0===s?void 0:s.area)&&t.split(".")[0]===e)})).map((([e,t])=>t)),o=i.map((e=>e.attributes.device_class||"")).filter((e=>e));return[...new Set(o)]}_buildSelectOptions(e){const t=this._getDeviceClasses(e);let i=[];return i="binary_sensor"===e?[...new Set([...t,...Re.binary_sensor])]:"sensor"===e?[...new Set([...t,...Re.sensor])]:t,i.map((t=>({value:t,label:this.hass.localize(`component.${e}.device_class.${t}`)||this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${e}.${t}`)||t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")})))}_getAreaCameras(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];const t=Object.keys(this.hass.states||{}).filter((e=>{var t,i,o,s;const[a]=e.split(".");if("camera"!==a)return!1;if((null===(t=this.hass.states[e].attributes)||void 0===t?void 0:t.area_id)===(null===(i=this._config)||void 0===i?void 0:i.area))return!0;const n=this._entities.find((t=>t.entity_id===e));if((null==n?void 0:n.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area))return!0;if(null==n?void 0:n.device_id){const e=this._devices.find((e=>e.id===n.device_id));if((null==e?void 0:e.area_id)===(null===(s=this._config)||void 0===s?void 0:s.area))return!0}return!1}));return t}render(){var e;return this.hass&&this._config?(this._buildSelectOptions("binary_sensor"),W`
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
              ${this._clearButton("main_entity")}
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
              ${this._clearButton("icon")}
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
              ${this._clearButton("area_name_color")}
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
              ${this._clearButton("area_icon_color")}
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
              ${this._clearButton("state_active_color")}
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
              ${this._clearButton("state_inactive_color")}
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
              ${this._clearButton("color")}
            </div>

            ${"camera"===this._config.display_type?W`
              <div class="option">
                ${this._config.area&&this._getAreaCameras().length>0?W`
                  <div class="helper-text">Cameras in ${this._config.area}: ${this._getAreaCameras().length} found</div>
                `:this._config.area?W`
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
              ${this._clearButton("camera_entity")}
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
            
            ${"picture"===this._config.display_type?W`
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
              ${this._clearButton("background_image")}
              </div>
            `:""}
          </div>
        </ha-expansion-panel>

        <!-- Sensor Display -->
        <ha-expansion-panel header="Sensor Display" outlined>
          <div class="content">
            <div class="helper-text">Pick a multi-sensor device, then choose which of its readings to show</div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{device:{entity:{domain:"sensor"}}}}
                .value=${this._config.sensor_device||""}
                .label=${"Sensor Device"}
                @value-changed=${this._sensorDeviceChanged}
              ></ha-selector>
            </div>

            ${this._config.sensor_device?W`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{multiple:!0,options:this._getDeviceSensors(this._config.sensor_device)}}}
                  .value=${this._config.sensor_entities||[]}
                  .configValue=${"sensor_entities"}
                  .label=${"Readings to show"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            `:""}

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",multiple:!0}}}
                .value=${this._config.extra_sensors||[]}
                .configValue=${"extra_sensors"}
                .label=${"Additional Sensors (e.g. dew point, VPD)"}
                .helper=${"Any sensor, including template sensors"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="helper-text">Or select individual sensors:</div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:"temperature"}}}
                .value=${this._config.temperature_entity||""}
                .configValue=${"temperature_entity"}
                .label=${"Temperature Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
              ${this._clearButton("temperature_entity")}
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
              ${this._clearButton("humidity_entity")}
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"sensor",device_class:["atmospheric_pressure","pressure"]}}}
                .value=${this._config.pressure_entity||""}
                .configValue=${"pressure_entity"}
                .label=${"Pressure Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
              ${this._clearButton("pressure_entity")}
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
              ${this._clearButton("illuminance_entity")}
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
              ${this._clearButton("power_entity")}
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
              ${this._clearButton("energy_entity")}
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
              ${this._clearButton("battery_entity")}
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
              ${this._clearButton("light_entity")}
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
              ${this._clearButton("climate_entity")}
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
              ${this._clearButton("switch_entity")}
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
              ${this._clearButton("fan_entity")}
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
              ${this._clearButton("media_player_entity")}
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

        <!-- Occupancy / Presence -->
        <ha-expansion-panel header="Occupancy / Presence" outlined>
          <div class="content">
            <div class="helper-text">Configure presence sources and display</div>

                <!-- We intentionally only support a per-card occupancy binary_sensor (LD24xx / similar). -->

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"occupancy"}}}
                .value=${this._config.occupancy_sensor||""}
                .configValue=${"occupancy_sensor"}
                .label=${"Occupancy Sensor (binary_sensor)"}
                .helper=${"Select the occupancy/motion-like binary_sensor used for presence (per-card)."}
                @value-changed=${this._valueChanged}
              ></ha-selector>
              ${this._clearButton("occupancy_sensor")}
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"icon",label:"Icon (person)"},{value:"badge",label:"Pill / Badge"},{value:"sensor",label:"Sensor (in sensors row)"},{value:"overlay",label:"Corner Badge / Overlay"},{value:"auto",label:"Auto (adaptive)"},{value:"none",label:"None"}]}}}
                .value=${this._config.occupancy_display||"auto"}
                .configValue=${"occupancy_display"}
                .label=${"Occupancy Display"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_color:{mode:"hex"}}}
                .value=${this._config.occupancy_color||""}
                .configValue=${"occupancy_color"}
                .label=${"Occupancy Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
              ${this._clearButton("occupancy_color")}
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{number:{min:0,max:1,step:.05}}}
                .value=${null!==(e=this._config.occupancy_glow_strength)&&void 0!==e?e:.12}
                .configValue=${"occupancy_glow_strength"}
                .label=${"Occupancy Glow Strength"}
                .helper=${"Set how strong the occupancy glow is (0 = off, 1 = max)."}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{boolean:{}}}
                .value=${!0===this._config.occupancy_show_last_seen}
                .configValue=${"occupancy_show_last_seen"}
                .label=${"Show Last Seen"}
                .helper=${"Show time since last seen in tooltip or next to indicator"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{boolean:{}}}
                .value=${!0===this._config.occupancy_include_in_alerts}
                .configValue=${"occupancy_include_in_alerts"}
                .label=${"Include occupancy in Alerts"}
                .helper=${"If enabled, occupancy will also appear in Alerts (legacy behaviour)"}
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
              ${this._clearButton("motion_sensor")}
            </div>

            <!-- Occupancy handled in its own panel above. Use "Include occupancy in Alerts" in Occupancy panel to opt-in. -->

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:"binary_sensor",device_class:"door"}}}
                .value=${this._config.door_sensor||""}
                .configValue=${"door_sensor"}
                .label=${"Door Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
              ${this._clearButton("door_sensor")}
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
              ${this._clearButton("window_sensor")}
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
              ${this._clearButton("moisture_sensor")}
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
              ${this._clearButton("navigation_path")}
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
    `):G}_setLayout(e){this._config&&(this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:e}),Ke(this,"config-changed",{config:this._config}),this.requestUpdate())}_layoutChanged(e){if(this._config&&e.detail){const t=e.detail.value;this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:t}),Ke(this,"config-changed",{config:this._config}),this.requestUpdate()}}_configChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}static get styles(){return c`
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

      .clear-btn {
        align-self: flex-end;
        background: none;
        border: none;
        padding: 0 4px;
        cursor: pointer;
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }

      .clear-btn:hover {
        color: var(--error-color, #f44336);
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
    `}};i([fe({attribute:!1})],Je.prototype,"hass",void 0),i([ge()],Je.prototype,"_config",void 0),i([ge()],Je.prototype,"_areas",void 0),i([ge()],Je.prototype,"_localImages",void 0),i([ge()],Je.prototype,"_entities",void 0),i([ge()],Je.prototype,"_devices",void 0),Je=i([de("area-card-elite-editor")],Je),customElements.get(e)||customElements.define(e,qe),customElements.get(e+"-editor")||customElements.define(e+"-editor",Je),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
