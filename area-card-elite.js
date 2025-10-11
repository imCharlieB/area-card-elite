!function(){"use strict";const e="area-card-elite";function t(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,a)},l=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:a}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const s=o?.call(this);a.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(o)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),a=i.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o,this[o]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,a){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(o?a:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,_?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const A=globalThis,k=A.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,z="?"+S,I=`<${z}>`,P=document,O=()=>P.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,M=e=>j(e)||"function"==typeof e?.[Symbol.iterator],T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,H=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,X=P.createTreeWalker(P,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,o=[];let a,s=2===t?"<svg>":"",n=N;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=V:void 0!==l[1]?n=H:void 0!==l[2]?(D.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=a??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?R:'"'===l[3]?B:L):n===B||n===L?n=R:n===V||n===H?n=N:(n=R,a=void 0);const h=n===R&&e[t+1].startsWith("/>")?" ":"";s+=n===N?i+I:c>=0?(o.push(r),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?t:h)}return[Y(e,s+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class Z{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,s=0;const n=e.length-1,r=this.parts,[l,c]=J(e,t);if(this.el=Z.createElement(l,i),X.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=X.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=c[s++],i=o.getAttribute(e).split(S),n=/([.?@])?(.*)/.exec(t);r.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?ie:"?"===n[1]?oe:"@"===n[1]?ae:te}),o.removeAttribute(e)}else e.startsWith(S)&&(r.push({type:6,index:a}),o.removeAttribute(e));if(D.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),X.nextNode(),r.push({type:2,index:++a});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===z)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)r.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,o){if(t===q)return t;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const s=U(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),void 0===s?a=void 0:(a=new s(e),a._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(t=G(e,a._$AS(e,t.values),a,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??P).importNode(t,!0);X.currentNode=o;let a=X.nextNode(),s=0,n=0,r=i[0];for(;void 0!==r;){if(s===r.index){let t;2===r.type?t=new ee(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new se(a,this,e)),this._$AV.push(t),r=i[++n]}s!==r?.index&&(a=X.nextNode(),s++)}return X.currentNode=P,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),U(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):M(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Z(e)),t}T(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new ee(this.k(O()),this.k(O()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const a=this.strings;let s=!1;if(void 0===a)e=G(this,e,t,0),s=!U(e)||e!==this._$AH&&e!==q,s&&(this._$AH=e);else{const o=e;let n,r;for(e=a[0],n=0;n<a.length-1;n++)r=G(this,o[i+n],t,n),r===q&&(r=this._$AH[n]),s||=!U(r)||r!==this._$AH[n],r===W?e=W:e!==W&&(e+=(r??"")+a[n+1]),this._$AH[n]=r}s&&!o&&this.O(e)}O(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===W?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ae extends te{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??W)===q)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ne={j:E,P:S,A:z,C:1,M:J,L:Q,R:M,V:G,D:ee,I:te,H:oe,N:ae,U:ie,B:se},re=A.litHtmlPolyfillSupport;re?.(Z,ee),(A.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let le=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=i?.renderBefore??null;o._$litPart$=a=new ee(t.insertBefore(O(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};le._$litElement$=!0,le.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:le});const ce=globalThis.litElementPolyfillSupport;ce?.({LitElement:le}),(globalThis.litElementVersions??=[]).push("4.0.2");
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
     */,he={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},ue=(e=he,t,i)=>{const{kind:o,metadata:a}=i;let s=globalThis.litPropertyMetadata.get(a);if(void 0===s&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
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
     */const{D:ve}=ne,_e=()=>document.createComment(""),ye=(e,t,i)=>{const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(_e(),a),s=o.insertBefore(_e(),a);i=new ve(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,n=s!==e;if(n){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==a||n){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,a),e=t}}}return i},be=(e,t,i=e)=>(e._$AI(t,i),e),$e={},xe=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},we=(e,t,i)=>{const o=new Map;for(let a=t;a<=i;a++)o.set(e[a],a);return o},Ae=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends me{constructor(e){if(super(e),e.type!==ge)throw Error("repeat() can only be used in text expressions")}ht(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const a=[],s=[];let n=0;for(const t of e)a[n]=o?o(t,n):n,s[n]=i(t,n),n++;return{values:s,keys:a}}render(e,t,i){return this.ht(e,t,i).values}update(e,[t,i,o]){const a=(e=>e._$AH)(e),{values:s,keys:n}=this.ht(t,i,o);if(!Array.isArray(a))return this.dt=n,s;const r=this.dt??=[],l=[];let c,d,h=0,u=a.length-1,p=0,f=s.length-1;for(;h<=u&&p<=f;)if(null===a[h])h++;else if(null===a[u])u--;else if(r[h]===n[p])l[p]=be(a[h],s[p]),h++,p++;else if(r[u]===n[f])l[f]=be(a[u],s[f]),u--,f--;else if(r[h]===n[f])l[f]=be(a[h],s[f]),ye(e,l[f+1],a[h]),h++,f--;else if(r[u]===n[p])l[p]=be(a[u],s[p]),ye(e,a[h],a[u]),u--,p++;else if(void 0===c&&(c=we(n,p,f),d=we(r,h,u)),c.has(r[h]))if(c.has(r[u])){const t=d.get(n[p]),i=void 0!==t?a[t]:null;if(null===i){const t=ye(e,a[h]);be(t,s[p]),l[p]=t}else l[p]=be(i,s[p]),ye(e,a[h],i),a[t]=null;p++}else xe(a[u]),u--;else xe(a[h]),h++;for(;p<=f;){const t=ye(e,l[f+1]);be(t,s[p]),l[p++]=t}for(;h<=u;){const e=a[h++];null!==e&&xe(e)}return this.dt=n,((e,t=$e)=>{e._$AH=t})(e,l),q}}),ke=["sensor"],Ce=["binary_sensor"],Ee=["cover"],Se=["climate"],ze=["camera"],Ie=["light","switch","fan","media_player","lock","vacuum","cover","script","scene"],Pe={sensor:["temperature","humidity","power","energy","battery","illuminance"],binary_sensor:["motion","window","door","moisture","smoke","gas","occupancy"],cover:["garage","door","window","blind","curtain","shutter"]},Oe={alarm_control_panel:{on:"mdi:alarm-light",off:"mdi:alarm-light-off"},siren:{on:"mdi:bell-ring",off:"mdi:bell-off"},lock:{on:"mdi:lock-open",off:"mdi:lock"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},media_player:{on:"mdi:cast",off:"mdi:cast-off"},climate:{on:"mdi:thermostat",off:"mdi:thermostat-cog"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"},switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off",switch:{on:"mdi:toggle-switch",off:"mdi:toggle-switch-off"},outlet:{on:"mdi:power-plug",off:"mdi:power-plug-off"}},vacuum:{on:"mdi:robot-vacuum",off:"mdi:robot-vacuum-off"},lawn_mower:{on:"mdi:robot-mower",off:"mdi:robot-mower"},fan:{on:"mdi:fan",off:"mdi:fan-off"},cover:{on:"mdi:garage-open",off:"mdi:garage",garage:{on:"mdi:garage-open",off:"mdi:garage"},door:{on:"mdi:door-open",off:"mdi:door-closed"},gate:{on:"mdi:gate-open",off:"mdi:gate"},blind:{on:"mdi:blinds-open",off:"mdi:blinds"},curtain:{on:"mdi:curtains",off:"mdi:curtains-closed"},damper:{on:"mdi:valve-open",off:"mdi:valve-closed"},awning:{on:"mdi:awning-outline",off:"mdi:awning-outline"},shutter:{on:"mdi:window-shutter-open",off:"mdi:window-shutter"},shade:{on:"mdi:roller-shade",off:"mdi:roller-shade-closed"},window:{on:"mdi:window-open",off:"mdi:window-closed"}},binary_sensor:{on:"mdi:power-off",off:"mdi:power-off",motion:{on:"mdi:motion-sensor",off:"mdi:motion-sensor-off"},moisture:{on:"mdi:water-alert",off:"mdi:water-off"},window:{on:"mdi:window-open",off:"mdi:window-closed"},door:{on:"mdi:door-open",off:"mdi:door-closed"},lock:{on:"mdi:lock-open",off:"mdi:lock"},presence:{on:"mdi:home-outline",off:"mdi:home-export-outline"},occupancy:{on:"mdi:seat",off:"mdi:seat-outline"},vibration:{on:"mdi:vibrate",off:"mdi:vibrate-off"},opening:{on:"mdi:shield-lock-open",off:"mdi:shield-lock"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},problem:{on:"mdi:alert-circle-outline",off:"mdi:alert-circle-check-outline"},smoke:{on:"mdi:smoke-detector-outline",off:"mdi:smoke-detector-off-outline"},running:{on:"mdi:play",off:"mdi:pause"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},power:{on:"mdi:power",off:"mdi:power-off"},battery:{on:"mdi:battery-alert",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery-check"},gas:{on:"mdi:gas-station-outline",off:"mdi:gas-station-off-outline"},carbon_monoxide:{on:"mdi:molecule-co",off:"mdi:molecule-co"},cold:{on:"mdi:snowflake",off:"mdi:snowflake-off"},heat:{on:"mdi:weather-sunny",off:"mdi:weather-sunny-off"},connectivity:{on:"mdi:connection",off:"mdi:connection"},safety:{on:"mdi:shield-alert-outline",off:"mdi:shield-check-outline"},sound:{on:"mdi:volume-high",off:"mdi:volume-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},tamper:{on:"mdi:shield-home",off:"mdi:shield-home"},light:{on:"mdi:lightbulb-outline",off:"mdi:lightbulb-off-outline"},moving:{on:"mdi:car",off:"mdi:car-off"}},person:{on:"mdi:account",off:"mdi:account-off"},device_tracker:{on:"mdi:account",off:"mdi:account-off"},valve:{on:"mdi:valve",off:"mdi:valve-closed"},water_heater:{on:"mdi:water-boiler",off:"mdi:water-pump-off"},remote:{on:"mdi:remote",off:"mdi:remote-off"},update:{on:"mdi:autorenew",off:"mdi:autorenew-off"},air_quality:{on:"mdi:air-filter",off:"mdi:air-filter"},camera:{on:"mdi:camera",off:"mdi:camera-off"},calendar:{on:"mdi:calendar",off:"mdi:calendar-remove"},scene:{on:"mdi:movie",off:"mdi:movie-off"},sensor:{on:"mdi:gauge",off:"mdi:gauge"},script:{on:"mdi:script-text",off:"mdi:script-text"}},Ue=["unavailable","unknown"],je=["off","closed","idle"];
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let Me=class extends le{constructor(){super(...arguments),this._areas={}}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),this.requestUpdate()}updated(e){super.updated(e),e.has("hass")&&this.hass&&0===Object.keys(this._areas).length&&this._loadAreas().then((()=>this.requestUpdate()))}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas={},e.forEach((e=>{this._areas[e.area_id]=e}))}}catch(e){console.error("Failed to load areas:",e),this._areas={}}}setConfig(e){if(!e.area)throw new Error("Please define an area");this._config=Object.assign({display_type:"compact",features_position:"bottom",features:[],alert_classes:Pe.binary_sensor,sensor_classes:Pe.sensor,exclude_entities:[]},e)}_getAreaEntities(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.area))return[];console.log(`Looking for entities in area: ${this._config.area}`);const t=Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o,a,s;if(null===(o=null===(i=this._config)||void 0===i?void 0:i.exclude_entities)||void 0===o?void 0:o.includes(e))return!1;const[n]=e.split(".");if(!(Ie.includes(n)||ke.includes(n)||Ce.includes(n)||Ee.includes(n)||Se.includes(n)||ze.includes(n)))return!1;return(null===(a=t.attributes)||void 0===a?void 0:a.area_id)===(null===(s=this._config)||void 0===s?void 0:s.area)})).map((([e,t])=>({entityId:e,state:t.state,attributes:t.attributes,domain:e.split(".")[0],name:t.attributes.friendly_name||e.split(".")[1],deviceClass:t.attributes.device_class||""})));console.log(`Found ${t.length} entities in area ${this._config.area}:`,t);const i=t.filter((e=>"binary_sensor"===e.domain)),o=t.filter((e=>"sensor"===e.domain));return console.log(`Binary sensors: ${i.length}`,i),console.log(`Sensors: ${o.length}`,o),t}_getDomainIcon(e,t,i){if(!(e in Oe))return"mdi:help-circle";const o=Oe[e];if(!o)return"mdi:help-circle";const a=!je.includes(t)&&!Ue.includes(t);if(i&&"object"==typeof o&&i in o){const e=o[i];if(e&&"object"==typeof e&&"on"in e&&"off"in e)return a?e.on:e.off}return"object"==typeof o&&"on"in o&&"off"in o?a?o.on:o.off:"mdi:help-circle"}_getEntitiesByDomain(){const e=this._getAreaEntities(),t={};return e.forEach((e=>{t[e.domain]||(t[e.domain]=[]),t[e.domain].push(e)})),t}_getActiveEntities(e,t){return(this._getEntitiesByDomain()[e]||[]).filter((e=>(!t||e.deviceClass===t)&&(!Ue.includes(e.state)&&!je.includes(e.state))))}_renderButtons(){const e=this._getEntitiesByDomain(),t=Ie.filter((t=>t in e&&e[t].length>0));return F`
      <div class="buttons">
        ${Ae(t,(e=>e),(e=>{const t=this._getActiveEntities(e).length,i=t>0;return F`
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
    `}_renderSensors(){if(!this._config)return W;const e=[];if(this._config.temperature_entity&&this.hass.states[this._config.temperature_entity]){const t=this.hass.states[this._config.temperature_entity];if(!Ue.includes(t.state)){const i=parseFloat(t.state);let o="#03a9f4";isNaN(i)||(o=i>=80?"#f44336":i>=75?"#ff9800":i>=70?"#ffc107":i>=60?"#4caf50":"#03a9f4"),e.push({icon:"mdi:thermometer",value:this.hass.formatEntityState(t),deviceClass:"temperature",color:o})}}if(this._config.humidity_entity&&this.hass.states[this._config.humidity_entity]){const t=this.hass.states[this._config.humidity_entity];Ue.includes(t.state)||e.push({icon:"mdi:water-percent",value:this.hass.formatEntityState(t),deviceClass:"humidity",color:"#2196f3"})}if(this._config.illuminance_entity&&this.hass.states[this._config.illuminance_entity]){const t=this.hass.states[this._config.illuminance_entity];Ue.includes(t.state)||e.push({icon:"mdi:brightness-6",value:this.hass.formatEntityState(t),deviceClass:"illuminance",color:"#ffeb3b"})}if(this._config.power_entity&&this.hass.states[this._config.power_entity]){const t=this.hass.states[this._config.power_entity];Ue.includes(t.state)||e.push({icon:"mdi:flash",value:this.hass.formatEntityState(t),deviceClass:"power",color:"#ff9800"})}if(this._config.energy_entity&&this.hass.states[this._config.energy_entity]){const t=this.hass.states[this._config.energy_entity];Ue.includes(t.state)||e.push({icon:"mdi:lightning-bolt",value:this.hass.formatEntityState(t),deviceClass:"energy",color:"#9c27b0"})}if(this._config.battery_entity&&this.hass.states[this._config.battery_entity]){const t=this.hass.states[this._config.battery_entity];if(!Ue.includes(t.state)){const i=Number(t.state);let o="mdi:battery",a="#4caf50";isNaN(i)||(i<=10?(o="mdi:battery-outline",a="#f44336"):i<=20?(o="mdi:battery-20",a="#ff5722"):i<=50?(o="mdi:battery-50",a="#ff9800"):(o="mdi:battery",a="#4caf50")),e.push({icon:o,value:this.hass.formatEntityState(t),deviceClass:"battery",color:a})}}return 0===e.length?W:F`
      <div class="sensors">
        ${e.map((e=>F`
          <div class="sensor">
            <ha-icon icon="${e.icon}" style="color: ${e.color}"></ha-icon>
            <span class="sensor-value">${e.value}</span>
          </div>
        `))}
      </div>
    `}_renderAlerts(){if(!this._config)return W;const e=[];if(this._config.motion_sensor&&this.hass.states[this._config.motion_sensor]){"on"===this.hass.states[this._config.motion_sensor].state&&e.push({icon:"mdi:motion-sensor",name:"Motion",entityId:this._config.motion_sensor})}if(this._config.occupancy_sensor&&this.hass.states[this._config.occupancy_sensor]){"on"===this.hass.states[this._config.occupancy_sensor].state&&e.push({icon:"mdi:account",name:"Occupied",entityId:this._config.occupancy_sensor})}if(this._config.door_sensor&&this.hass.states[this._config.door_sensor]){"on"===this.hass.states[this._config.door_sensor].state&&e.push({icon:"mdi:door-open",name:"Door Open",entityId:this._config.door_sensor})}if(this._config.window_sensor&&this.hass.states[this._config.window_sensor]){"on"===this.hass.states[this._config.window_sensor].state&&e.push({icon:"mdi:window-open-variant",name:"Window Open",entityId:this._config.window_sensor})}return this._config.additional_alerts&&this._config.additional_alerts.forEach((t=>{const i=this.hass.states[t];i&&"on"===i.state&&e.push({icon:this._getDomainIcon("binary_sensor","on",i.attributes.device_class),name:i.attributes.friendly_name||t.split(".")[1],entityId:t})})),0===e.length?W:F`
      <div class="alerts">
        ${e.map((e=>F`
          <div class="icon-with-count alert" @click=${()=>this._handleEntityClick(e.entityId)}>
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="alert-label">${e.name}</span>
          </div>
        `))}
      </div>
    `}_renderAreaControls(){if(!this._config)return W;const e=[];if(this._config.light_entity&&this.hass.states[this._config.light_entity]){const t=this.hass.states[this._config.light_entity],i="on"===t.state;e.push({icon:i?"mdi:lightbulb":"mdi:lightbulb-outline",name:t.attributes.friendly_name||"Light",entityId:this._config.light_entity,isOn:i,color:i?"#ffc107":"#757575"})}if(this._config.climate_entity&&this.hass.states[this._config.climate_entity]){const t=this.hass.states[this._config.climate_entity],i="off"!==t.state,o=t.state;let a="mdi:thermostat",s="#757575";"heat"===o?(a="mdi:fire",s="#f44336"):"cool"===o?(a="mdi:snowflake",s="#2196f3"):"auto"===o&&(a="mdi:thermostat-auto",s="#4caf50"),e.push({icon:a,name:t.attributes.friendly_name||"Climate",entityId:this._config.climate_entity,isOn:i,color:s})}if(this._config.switch_entity&&this.hass.states[this._config.switch_entity]){const t=this.hass.states[this._config.switch_entity],i="on"===t.state;e.push({icon:i?"mdi:toggle-switch":"mdi:toggle-switch-off",name:t.attributes.friendly_name||"Switch",entityId:this._config.switch_entity,isOn:i,color:i?"#4caf50":"#757575"})}if(this._config.fan_entity&&this.hass.states[this._config.fan_entity]){const t=this.hass.states[this._config.fan_entity],i="on"===t.state;e.push({icon:i?"mdi:fan":"mdi:fan-off",name:t.attributes.friendly_name||"Fan",entityId:this._config.fan_entity,isOn:i,color:i?"#03a9f4":"#757575"})}return this._config.additional_controls&&this._config.additional_controls.forEach((t=>{const i=this.hass.states[t];if(i){const o=t.split(".")[0],a=!je.includes(i.state)&&!Ue.includes(i.state);e.push({icon:this._getDomainIcon(o,i.state),name:i.attributes.friendly_name||t.split(".")[1],entityId:t,isOn:a,color:a?"#2196f3":"#757575"})}})),0===e.length?W:F`
      <div class="area-controls">
        ${e.map((e=>F`
          <div class="control-button ${e.isOn?"active":""}" 
               @click=${()=>this._handleControlClick(e.entityId)}>
            <ha-icon icon="${e.icon}" style="color: ${e.color}"></ha-icon>
          </div>
        `))}
      </div>
    `}_handleControlClick(e){const t=e.split(".")[0];"climate"===t?this._handleEntityClick(e):this.hass.callService(t,"toggle",{},{entity_id:e})}_handleEntityClick(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_getAreaCameras(){var e;return(null===(e=this._config)||void 0===e?void 0:e.area)?Object.entries(this.hass.states||{}).filter((([e,t])=>{var i,o;const[a]=e.split(".");return"camera"===a&&(null===(i=t.attributes)||void 0===i?void 0:i.area_id)===(null===(o=this._config)||void 0===o?void 0:o.area)})).map((([e,t])=>({entityId:e,name:t.attributes.friendly_name||e.split(".")[1]}))):[]}_getAreaName(){var e,t,i;if(null===(e=this._config)||void 0===e?void 0:e.name)return this._config.name;const o=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==o?void 0:o.name)||(null===(i=this._config)||void 0===i?void 0:i.area)||"Unknown Area"}_getAreaIcon(){var e,t;if(null===(e=this._config)||void 0===e?void 0:e.icon)return this._config.icon;const i=this._areas[(null===(t=this._config)||void 0===t?void 0:t.area)||""];return(null==i?void 0:i.icon)||"mdi:home"}_getAreaFilteredEntities(e,t){var i;return(null===(i=this._config)||void 0===i?void 0:i.area)?Object.entries(this.hass.states||{}).filter((([i,o])=>{var a,s;const[n]=i.split(".");return n===e&&((!t||o.attributes.device_class===t)&&(null===(a=o.attributes)||void 0===a?void 0:a.area_id)===(null===(s=this._config)||void 0===s?void 0:s.area))})).map((([e])=>e)):[]}render(){var e;if(!this.hass||!this._config)return W;const t=this._getAreaName(),i=this._getAreaIcon(),o=this._config.area_name_color?`color: ${this._config.area_name_color};`:"",a=this._config.area_icon_color?`color: ${this._config.area_icon_color};`:"",s=this._config.layout||"compact",n=this._config.features_position||"bottom",r=null===(e=this._config.features)||void 0===e?void 0:e.includes("area-controls"),l=this._config.main_entity?this.hass.states[this._config.main_entity]:null,c=l?this._getDomainIcon(l.entity_id.split(".")[0],l.state,l.attributes.device_class):null;return l&&!Ue.includes(l.state)&&(je.includes(l.state)||l.state),F`
      <ha-card class="${this._config.display_type||"compact"} layout-${s} features-${n}">
        <div class="content">
          <!-- Large background entity icon -->
          ${c?F`
            <div class="main-entity-background ${!l||Ue.includes(l.state)||je.includes(l.state)||"unlocked"===l.state?"":"active"} 
              ${l&&(je.includes(l.state)||"unlocked"===l.state)?"unlocked":""}">
              <ha-icon 
                icon="${c}" 
                @click=${()=>{var e;return(null===(e=this._config)||void 0===e?void 0:e.main_entity)&&this._handleEntityClick(this._config.main_entity)}}
              ></ha-icon>
            </div>
          `:W}

          ${"picture"===this._config.display_type&&this._config.background_image?F`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          `:""}
          
          ${"camera"===this._config.display_type&&this._config.camera_entity?F`
            <hui-image 
              .hass=${this.hass}
              .entity=${this._config.camera_entity}
              .cameraImage=${this._config.camera_view}
              class="camera-view"
            ></hui-image>
          `:""}

          <div class="area-info">
            ${"vertical"===s||"compact"!==this._config.display_type?F`
              <div class="area-icon" style="${a}">
                <ha-icon icon="${i}"></ha-icon>
              </div>
            `:""}
            
            <div class="area-details">
              <div class="area-name" style="${o}">
                ${"vertical"!==s&&"compact"===this._config.display_type?F`
                  <ha-icon icon="${i}" style="${a}"></ha-icon>
                `:""}
                ${t}
              </div>
              
              <!-- For vertical layout, show sensors under the name -->
              ${"vertical"===s?F`
                <div class="area-sensors">
                  ${this._renderSensors()}
                </div>
              `:""}
            </div>
          </div>

          <!-- For non-vertical layouts, show sensors in separate section -->
          ${"vertical"!==s?F`
            <div class="sensors-section">
              ${this._renderSensors()}
            </div>
          `:W}

          ${r?F`
            <div class="controls-section">
              ${this._renderAreaControls()}
            </div>
          `:W}

          ${this._renderAlerts()}
          ${this._renderFeatures()}
        </div>
      </ha-card>
    `}_getBackgroundStyles(){var e,t;const i={};if((null===(e=this._config)||void 0===e?void 0:e.color)&&(i["--card-background-color"]=this._config.color,i.backgroundColor=this._config.color),null===(t=this._config)||void 0===t?void 0:t.aspect_ratio){const e=this._config.aspect_ratio.split(":");if(2===e.length){const t=parseInt(e[1])/parseInt(e[0])*100;i.aspectRatio=this._config.aspect_ratio,i.paddingBottom=`${t}%`}}return i}_renderBackground(){var e,t,i;const o=(null===(e=this._config)||void 0===e?void 0:e.display_type)||"compact";if("camera"===o){const e=this._getAreaCameras();if(e.length>0){const i=e[0];return F`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${i.entityId}
              .cameraView=${(null===(t=this._config)||void 0===t?void 0:t.camera_view)||"auto"}
            ></hui-image>
          </div>
        `}}return"picture"===o&&(null===(i=this._config)||void 0===i?void 0:i.background_image)?F`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `:W}_renderIcon(e){var t;const i=(null===(t=this._config)||void 0===t?void 0:t.display_type)||"compact";return e.icon?"icon"===i?F`<ha-icon .icon=${e.icon} class="large-icon"></ha-icon>`:F`<ha-icon .icon=${e.icon}></ha-icon>`:W}_renderFeatures(){var e,t;const i=(null===(e=this._config)||void 0===e?void 0:e.features)||[],o=(null===(t=this._config)||void 0===t?void 0:t.features_position)||"bottom";return i.length?F`
      <div class="features ${o}">
        ${i.map((e=>{switch(e){case"more-info":return this._renderMoreInfoButton();case"toggle-all":return this._renderToggleAllButton();default:return W}}))}
      </div>
    `:W}_renderMoreInfoButton(){return F`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `}_renderToggleAllButton(){return F`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `}_handleMoreInfo(){var e;const t=new CustomEvent("hass-more-info",{detail:{entityId:`area.${null===(e=this._config)||void 0===e?void 0:e.area}`},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleToggleAll(){const e=this._getAreaEntities().filter((e=>Ie.includes(e.domain)));e.forEach((e=>{this.hass.callService(e.domain,"toggle",{},{entity_id:e.entityId})}))}static getConfigElement(){return document.createElement("area-card-elite-editor")}static getStubConfig(){return{area:""}}};var Te,Ne;Me.styles=r`
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

    /* Display Type Styles - Updated for better dashboard layout */
    .compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-height: 80px;
    }

    /* Vertical layout like in your dashboard image */
    .mirror-layout.mirror-vertical .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 16px;
    }

    /* Area info section - left side */
    .mirror-layout.mirror-vertical .area-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      flex: 0 0 auto;
    }

    .mirror-layout.mirror-vertical .area-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .mirror-layout.mirror-vertical .area-name {
      font-size: 1.3em;
      font-weight: bold;
      white-space: nowrap;
    }

    /* Sensors section - middle */
    .mirror-layout.mirror-vertical .sensors {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 16px;
    }

    .mirror-layout.mirror-vertical .sensor {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-align: center;
    }

    .mirror-layout.mirror-vertical .sensor ha-icon {
      --mdc-icon-size: 24px;
      margin-bottom: 4px;
    }

    .mirror-layout.mirror-vertical .sensor-value {
      font-size: 0.9em;
      font-weight: 500;
      white-space: nowrap;
    }

    /* Area controls section - right side */
    .mirror-layout.mirror-vertical .area-controls {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 0 0 auto;
      margin: 0;
    }

    /* Alert positioning for vertical layout */
    .mirror-layout.mirror-vertical .alerts {
      position: absolute;
      top: 8px;
      right: 8px;
      gap: 4px;
    }

    .mirror-layout.mirror-vertical .alerts .icon-with-count {
      padding: 2px 4px;
      font-size: 0.8em;
      min-width: 24px;
    }

    /* Horizontal layout - keep existing */
    .mirror-layout.mirror-horizontal .content {
      display: flex;
      flex-direction: row;
      align-items: center;
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

    /* Area Controls */
    .area-controls {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
    }

    .control-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
    }

    .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.1);
      transform: scale(1.05);
    }

    .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.15);
      border-color: var(--primary-color);
    }

    .control-button ha-icon {
      --mdc-icon-size: 24px;
    }

    /* Compact layout - area controls on the right */
    .compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .compact .area-controls {
      margin-left: auto;
      margin-top: 0;
    }

    /* Alert label styling */
    .alert-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--error-color);
      margin-left: 4px;
    }

    .alerts .icon-with-count {
      background: rgba(var(--error-color), 0.1);
      border-color: rgba(var(--error-color), 0.3);
      color: var(--error-color);
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

    /* New Layout System - FIXED */
    .layout-compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .layout-horizontal .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .layout-vertical .content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      min-height: 80px;
    }

    /* Vertical Layout - Area info with sensors under name */
    .layout-vertical .area-info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 12px;
      flex: 1;
    }

    .layout-vertical .area-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .layout-vertical .area-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .layout-vertical .area-name {
      font-size: 1.3em;
      font-weight: bold;
      margin-bottom: 8px;
    }

    /* Sensors under the name in vertical layout */
    .layout-vertical .area-sensors {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .layout-vertical .area-sensors .sensors {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .layout-vertical .area-sensors .sensor {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      padding: 4px 8px;
      border-radius: 12px;
    }

    .layout-vertical .area-sensors .sensor ha-icon {
      --mdc-icon-size: 20px;
    }

    .layout-vertical .area-sensors .sensor-value {
      font-size: 0.9em;
      font-weight: 500;
    }

    /* FIXED Controls positioning for features_position */
    .features-right .content {
      display: flex;
      flex-direction: row;
    }

    .features-right .controls-section {
      order: 3;
      flex: 0 0 auto;
      align-self: flex-start;
    }

    .features-left .content {
      display: flex;
      flex-direction: row;
    }

    .features-left .controls-section {
      order: 1;
      flex: 0 0 auto;
      align-self: flex-start;
    }

    .features-top .content {
      display: flex;
      flex-direction: column;
    }

    .features-top .controls-section {
      order: 1;
      align-self: center;
      margin-bottom: 16px;
    }

    .features-bottom .content {
      display: flex;
      flex-direction: column;
    }

    .features-bottom .controls-section {
      order: 3;
      align-self: center;
      margin-top: 16px;
    }

    .features-inline .controls-section {
      display: inline-flex;
      margin-left: auto;
    }

    /* FIXED Controls styling - VERTICAL STACKING for vertical layout */
    .layout-vertical .features-right .area-controls,
    .layout-vertical .features-left .area-controls {
      flex-direction: column;
      gap: 8px;
    }

    .layout-vertical .features-top .area-controls,
    .layout-vertical .features-bottom .area-controls {
      flex-direction: row;
      gap: 8px;
      justify-content: center;
    }

    /* For non-vertical layouts, keep controls horizontal */
    .layout-horizontal .area-controls,
    .layout-compact .area-controls {
      flex-direction: row;
      gap: 8px;
    }

    /* Controls styling based on position */
    .features-top .area-controls,
    .features-bottom .area-controls {
      justify-content: center;
    }

    .features-left .area-controls {
      justify-content: flex-start;
    }

    .features-right .area-controls {
      justify-content: flex-end;
    }

    /* Large Background Entity Icon - Like your dashboard image */
    .main-entity-background {
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 80px;
      height: 80px;
      z-index: 1;
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Add circular background like your dashboard */
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      border: 2px solid rgba(var(--rgb-primary-text-color), 0.15);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .main-entity-background:hover {
      background: rgba(var(--rgb-primary-text-color), 0.08);
      border-color: rgba(var(--rgb-primary-text-color), 0.2);
      transform: scale(1.05);
    }

    .main-entity-background ha-icon {
      --mdc-icon-size: 40px;
      width: 40px;
      height: 40px;
      opacity: 0.8;
      transition: all 0.3s ease;
    }

    .main-entity-background:hover ha-icon {
      opacity: 1;
    }

    /* Active state - when entity is on/locked */
    .main-entity-background.active {
      background: rgba(var(--rgb-primary-color), 0.15);
      border-color: var(--primary-color);
    }

    .main-entity-background.active ha-icon {
      color: var(--primary-color);
    }

    /* Unlocked/off state - red like your dashboard */
    .main-entity-background.unlocked {
      background: rgba(244, 67, 54, 0.15);
      border-color: #f44336;
    }

    .main-entity-background.unlocked ha-icon {
      color: #f44336;
    }

    /* Make sure content appears above the background icon */
    .area-info,
    .sensors-section,
    .controls-section,
    .alerts {
      position: relative;
      z-index: 2;
    }

    /* Ensure card respects container size */

    /* Large Background Entity Icon - Centered like your dashboard */
    .main-entity-background {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140px;
      height: 140px;
      z-index: 1;
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-entity-background ha-icon {
      --mdc-icon-size: 140px;
      width: 140px;
      height: 140px;
      opacity: 0.3;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .main-entity-background ha-icon:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }

    /* Layout for your dashboard style */
    .layout-vertical .content {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 120px;
      padding: 12px;
    }

    /* Area name at the top */
    .layout-vertical .area-info {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: auto;
    }

    .layout-vertical .area-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .layout-vertical .area-name {
      font-size: 1.1em;
      font-weight: bold;
      color: var(--primary-text-color);
    }

    /* Sensors in bottom-left corner like your dashboard */
    .layout-vertical .area-sensors {
      position: absolute;
      bottom: 12px;
      left: 12px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .layout-vertical .area-sensors .sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .layout-vertical .area-sensors .sensor {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(var(--rgb-card-background-color), 0.8);
      backdrop-filter: blur(4px);
      padding: 2px 6px;
      border-radius: 8px;
      font-size: 0.8em;
    }

    .layout-vertical .area-sensors .sensor ha-icon {
      --mdc-icon-size: 16px;
    }

    .layout-vertical .area-sensors .sensor-value {
      font-size: 0.8em;
      font-weight: 500;
    }

    /* Controls on the right side, stacked vertically */
    .layout-vertical.features-right .controls-section {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .layout-vertical.features-right .area-controls {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* Make control buttons smaller to match your dashboard */
    .layout-vertical .control-button {
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

    .layout-vertical .control-button ha-icon {
      --mdc-icon-size: 20px;
    }

    .layout-vertical .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.2);
      transform: scale(1.1);
    }

    .layout-vertical .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.2);
      border-color: var(--primary-color);
    }

    /* Make sure content appears above the background icon */
    .area-info,
    .sensors-section,
    .controls-section,
    .alerts {
      position: relative;
      z-index: 2;
    }

    /* Large Central Entity Icon - Like your dashboard */
    .main-entity-background {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 160px;
      height: 160px;
      z-index: 1;
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-entity-background ha-icon {
      --mdc-icon-size: 160px;
      width: 160px;
      height: 160px;
      opacity: 0.4;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .main-entity-background ha-icon:hover {
      opacity: 0.6;
      transform: scale(1.02);
    }

    /* Layout exactly like your dashboard */
    .layout-vertical .content {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 140px;
      padding: 16px;
    }

    /* Area name at the top - no icon, just name */
    .layout-vertical .area-info {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 2;
      display: flex;
      align-items: center;
    }

    .layout-vertical .area-icon {
      display: none; /* Hide area icon in vertical layout */
    }

    .layout-vertical .area-name {
      font-size: 1.2em;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    /* Don't show area icon in compact vertical layout */
    .layout-vertical .area-name ha-icon {
      display: none;
    }

    /* Sensors in bottom-left corner exactly like your dashboard */
    .layout-vertical .area-sensors {
      position: absolute;
      bottom: 16px;
      left: 16px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .layout-vertical .area-sensors .sensors {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .layout-vertical .area-sensors .sensor {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(var(--rgb-card-background-color), 0.9);
      backdrop-filter: blur(6px);
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.85em;
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.1);
    }

    .layout-vertical .area-sensors .sensor ha-icon {
      --mdc-icon-size: 18px;
      flex-shrink: 0;
    }

    .layout-vertical .area-sensors .sensor-value {
      font-size: 0.85em;
      font-weight: 500;
      white-space: nowrap;
    }

    /* Controls on the right side, centered vertically */
    .layout-vertical.features-right .controls-section {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .layout-vertical.features-right .area-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Control buttons to match your dashboard style */
    .layout-vertical .control-button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.08);
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.15);
      cursor: pointer;
      transition: all 0.2s ease;
      backdrop-filter: blur(4px);
    }

    .layout-vertical .control-button ha-icon {
      --mdc-icon-size: 22px;
    }

    .layout-vertical .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.15);
      transform: scale(1.08);
    }

    .layout-vertical .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.2);
      border-color: var(--primary-color);
    }

    /* Alerts in top-right corner */
    .layout-vertical .alerts {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .layout-vertical .alerts .icon-with-count {
      padding: 4px 8px;
      font-size: 0.8em;
      min-width: 32px;
      background: rgba(var(--error-color), 0.15);
      border-color: rgba(var(--error-color), 0.3);
      color: var(--error-color);
    }

    /* Make sure content appears above the background icon */
    .area-info,
    .sensors-section,
    .controls-section,
    .alerts {
      position: relative;
      z-index: 2;
    }
  `,t([pe({attribute:!1})],Me.prototype,"hass",void 0),t([fe()],Me.prototype,"_config",void 0),t([fe()],Me.prototype,"_areas",void 0),Me=t([de("area-card-elite")],Me),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Te||(Te={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ne||(Ne={}));var Ve=function(e,t,i,o){o=o||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a};let He=class extends le{constructor(){super(...arguments),this._areas=[],this._localImages=[]}async connectedCallback(){super.connectedCallback(),await this._loadAreas(),await this._loadLocalImages()}async _loadAreas(){var e;try{if(null===(e=this.hass)||void 0===e?void 0:e.connection){const e=await this.hass.connection.sendMessagePromise({type:"config/area_registry/list"});this._areas=e||[]}}catch(e){console.error("Failed to load areas:",e),this._areas=[]}}async _loadLocalImages(){try{const e=await this.hass.connection.sendMessagePromise({type:"media_player/browse_media",media_content_id:"media-source://media_source/local",media_content_type:"app"});this._localImages=this._extractImagePaths(e)}catch(e){console.error("Failed to load local images:",e),this._localImages=[]}}_extractImagePaths(e){const t=[];return(null==e?void 0:e.children)&&e.children.forEach((e=>{var i,o;if(null===(i=e.media_content_type)||void 0===i?void 0:i.startsWith("image/")){const i=null===(o=e.media_content_id)||void 0===o?void 0:o.replace("media-source://media_source/local/","/local/");i&&t.push(i)}})),t}setConfig(e){this._config=Object.assign({features:[],display_type:"compact",color:"",aspect_ratio:"16:9",camera_view:"auto",navigation_path:"",alert_classes:[],sensor_classes:[],features_position:"bottom",exclude_entities:[],layout:"vertical"},e)}_valueChanged(e){var t;if(e.stopPropagation(),!this._config)return;const i=e.target;let o=null===(t=e.detail)||void 0===t?void 0:t.value,a=i.configValue;console.log("Value changed:",{type:e.type,tagName:i.tagName,configValue:a,value:o,detail:e.detail}),null==o&&("input"===e.type&&void 0!==i.value||void 0!==i.value)&&(o=i.value),"HA-AREA-PICKER"===i.tagName?a="area":"HA-ENTITY-PICKER"===i.tagName&&(a=i.configValue||"exclude_entities"),a&&void 0!==o&&(console.log("Setting config:",a,"=",o),this._config=Object.assign(Object.assign({},this._config),{[a]:o}),Ve(this,"config-changed",{config:this._config}),this.requestUpdate())}_getDeviceClasses(e){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.area))return[];const i=Object.entries(this.hass.states||{}).filter((([t,i])=>{var o,a;return!!(null===(o=i.attributes)||void 0===o?void 0:o.area_id)&&(i.attributes.area_id===(null===(a=this._config)||void 0===a?void 0:a.area)&&t.split(".")[0]===e)})).map((([e,t])=>t)),o=i.map((e=>e.attributes.device_class||"")).filter((e=>e));return[...new Set(o)]}_buildSelectOptions(e){const t=this._getDeviceClasses(e);let i=[];return i="binary_sensor"===e?[...new Set([...t,...Pe.binary_sensor])]:"sensor"===e?[...new Set([...t,...Pe.sensor])]:t,i.map((t=>({value:t,label:this.hass.localize(`component.${e}.device_class.${t}`)||this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${e}.${t}`)||t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")})))}render(){return this.hass&&this._config?(this._buildSelectOptions("binary_sensor"),F`
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

            ${"camera"===this._config.display_type?F`
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
            
            ${"picture"===this._config.display_type?F`
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
                .selector=${{entity:{multiple:!0,domain:["light","switch","fan","climate","cover","media_player"]}}}
                .value=${this._config.additional_controls||[]}
                .configValue=${"additional_controls"}
                .label=${"Additional Controls"}
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
    `):W}_setLayout(e){this._config&&(this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:e}),Ve(this,"config-changed",{config:this._config}),this.requestUpdate())}_layoutChanged(e){if(this._config&&e.detail){const t=e.detail.value;this._config=Object.assign(Object.assign({},this._config),{mirror_card_layout:!0,layout:t}),Ve(this,"config-changed",{config:this._config}),this.requestUpdate()}}_configChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}static get styles(){return r`
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
    `}};t([pe({attribute:!1})],He.prototype,"hass",void 0),t([fe()],He.prototype,"_config",void 0),t([fe()],He.prototype,"_areas",void 0),t([fe()],He.prototype,"_localImages",void 0),He=t([de("area-card-elite-editor")],He),customElements.get(e)||customElements.define(e,Me),customElements.get(e+"-editor")||customElements.define(e+"-editor",He),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Area Card Elite",description:"An enhanced area card for Home Assistant"})}();
