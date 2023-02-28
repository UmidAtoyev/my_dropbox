(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _a(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const $v="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Hv=_a($v);function ya(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?Kv(s):ya(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ae(t))return t;if(we(t))return t}}const jv=/;(?![^(]*\))/g,Wv=/:([^]+)/,Vv=/\/\*.*?\*\//gs;function Kv(t){const e={};return t.replace(Vv,"").split(jv).forEach(n=>{if(n){const s=n.split(Wv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bs(t){let e="";if(Ae(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=bs(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function mP(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ae(e)&&(t.class=bs(e)),n&&(t.style=ya(n)),t}const qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zv=_a(qv);function Dp(t){return!!t||t===""}function Gv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$n(t[s],e[s]);return n}function $n(t,e){if(t===e)return!0;let n=Xh(t),s=Xh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rr(t),s=rr(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?Gv(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$n(t[o],e[o]))return!1}}return String(t)===String(e)}function va(t,e){return t.findIndex(n=>$n(n,e))}const Yv=t=>Ae(t)?t:t==null?"":W(t)||we(t)&&(t.toString===Mp||!J(t.toString))?JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>e&&e.__v_isRef?Lp(t,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ts(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!W(e)&&!Fp(e)?String(e):e,ye={},Fs=[],Ut=()=>{},Xv=()=>!1,Jv=/^on[^a-z]/,Ar=t=>Jv.test(t),su=t=>t.startsWith("onUpdate:"),Oe=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qv=Object.prototype.hasOwnProperty,he=(t,e)=>Qv.call(t,e),W=Array.isArray,Us=t=>hi(t)==="[object Map]",Ts=t=>hi(t)==="[object Set]",Xh=t=>hi(t)==="[object Date]",Zv=t=>hi(t)==="[object RegExp]",J=t=>typeof t=="function",Ae=t=>typeof t=="string",rr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",ru=t=>we(t)&&J(t.then)&&J(t.catch),Mp=Object.prototype.toString,hi=t=>Mp.call(t),eE=t=>hi(t).slice(8,-1),Fp=t=>hi(t)==="[object Object]",ou=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ki=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tE=/-(\w)/g,Et=Ea(t=>t.replace(tE,(e,n)=>n?n.toUpperCase():"")),nE=/\B([A-Z])/g,Ct=Ea(t=>t.replace(nE,"-$1").toLowerCase()),wa=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Co=Ea(t=>t?`on${wa(t)}`:""),Js=(t,e)=>!Object.is(t,e),Bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Do=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Lo=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let Jh;const sE=()=>Jh||(Jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mt;class Up{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function au(t){return new Up(t)}function Bp(t,e=mt){e&&e.active&&e.effects.push(t)}function $p(){return mt}function iE(t){mt&&mt.cleanups.push(t)}const lu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hp=t=>(t.w&Hn)>0,jp=t=>(t.n&Hn)>0,rE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Hn},oE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Hp(i)&&!jp(i)?i.delete(t):e[n++]=i,i.w&=~Hn,i.n&=~Hn}e.length=n}},Mo=new WeakMap;let Ui=0,Hn=1;const Ql=30;let Dt;const os=Symbol(""),Zl=Symbol("");class ba{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bp(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Pn=!0,Hn=1<<++Ui,Ui<=Ql?rE(this):Qh(this),this.fn()}finally{Ui<=Ql&&oE(this),Hn=1<<--Ui,Dt=this.parent,Pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Qh(this),this.onStop&&this.onStop(),this.active=!1)}}function Qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function _P(t,e){t.effect&&(t=t.effect.fn);const n=new ba(t);e&&(Oe(n,e),e.scope&&Bp(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function yP(t){t.effect.stop()}let Pn=!0;const Wp=[];function fi(){Wp.push(Pn),Pn=!1}function di(){const t=Wp.pop();Pn=t===void 0?!0:t}function pt(t,e,n){if(Pn&&Dt){let s=Mo.get(t);s||Mo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=lu()),Vp(i)}}function Vp(t,e){let n=!1;Ui<=Ql?jp(t)||(t.n|=Hn,n=!Hp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function hn(t,e,n,s,i,r){const o=Mo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?ou(n)&&a.push(o.get("length")):(a.push(o.get(os)),Us(t)&&a.push(o.get(Zl)));break;case"delete":W(t)||(a.push(o.get(os)),Us(t)&&a.push(o.get(Zl)));break;case"set":Us(t)&&a.push(o.get(os));break}if(a.length===1)a[0]&&ec(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ec(lu(l))}}function ec(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Zh(s);for(const s of n)s.computed||Zh(s)}function Zh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function aE(t,e){var n;return(n=Mo.get(t))===null||n===void 0?void 0:n.get(e)}const lE=_a("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rr)),cE=Ta(),uE=Ta(!1,!0),hE=Ta(!0),fE=Ta(!0,!0),ef=dE();function dE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)pt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fi();const s=re(this)[e].apply(this,n);return di(),s}}),t}function pE(t){const e=re(this);return pt(e,"has",t),e.hasOwnProperty(t)}function Ta(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Qp:Jp:e?Xp:Yp).get(s))return s;const o=W(s);if(!t){if(o&&he(ef,i))return Reflect.get(ef,i,r);if(i==="hasOwnProperty")return pE}const a=Reflect.get(s,i,r);return(rr(i)?Kp.has(i):lE(i))||(t||pt(s,"get",i),e)?a:De(a)?o&&ou(i)?a:a.value:we(a)?t?Zp(a):pi(a):a}}const gE=qp(),mE=qp(!0);function qp(t=!1){return function(n,s,i,r){let o=n[s];if(Qs(o)&&De(o)&&!De(i))return!1;if(!t&&(!Fo(i)&&!Qs(i)&&(o=re(o),i=re(i)),!W(n)&&De(o)&&!De(i)))return o.value=i,!0;const a=W(n)&&ou(s)?Number(s)<n.length:he(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?Js(i,o)&&hn(n,"set",s,i):hn(n,"add",s,i)),l}}function _E(t,e){const n=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&hn(t,"delete",e,void 0),s}function yE(t,e){const n=Reflect.has(t,e);return(!rr(e)||!Kp.has(e))&&pt(t,"has",e),n}function vE(t){return pt(t,"iterate",W(t)?"length":os),Reflect.ownKeys(t)}const zp={get:cE,set:gE,deleteProperty:_E,has:yE,ownKeys:vE},Gp={get:hE,set(t,e){return!0},deleteProperty(t,e){return!0}},EE=Oe({},zp,{get:uE,set:mE}),wE=Oe({},Gp,{get:fE}),cu=t=>t,Ia=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&pt(i,"get",e),pt(i,"get",r));const{has:o}=Ia(i),a=s?cu:n?uu:or;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&pt(s,"has",t),pt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function io(t,e=!1){return t=t.__v_raw,!e&&pt(re(t),"iterate",os),Reflect.get(t,"size",t)}function tf(t){t=re(t);const e=re(this);return Ia(e).has.call(e,t)||(e.add(t),hn(e,"add",t,t)),this}function nf(t,e){e=re(e);const n=re(this),{has:s,get:i}=Ia(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Js(e,o)&&hn(n,"set",t,e):hn(n,"add",t,e),this}function sf(t){const e=re(this),{has:n,get:s}=Ia(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&hn(e,"delete",t,void 0),r}function rf(){const t=re(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function ro(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?cu:t?uu:or;return!t&&pt(a,"iterate",os),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function oo(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=Us(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?cu:e?uu:or;return!e&&pt(r,"iterate",l?Zl:os),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:this}}function bE(){const t={get(r){return no(this,r)},get size(){return io(this)},has:so,add:tf,set:nf,delete:sf,clear:rf,forEach:ro(!1,!1)},e={get(r){return no(this,r,!1,!0)},get size(){return io(this)},has:so,add:tf,set:nf,delete:sf,clear:rf,forEach:ro(!1,!0)},n={get(r){return no(this,r,!0)},get size(){return io(this,!0)},has(r){return so.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:ro(!0,!1)},s={get(r){return no(this,r,!0,!0)},get size(){return io(this,!0)},has(r){return so.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=oo(r,!1,!1),n[r]=oo(r,!0,!1),e[r]=oo(r,!1,!0),s[r]=oo(r,!0,!0)}),[t,n,e,s]}const[TE,IE,CE,SE]=bE();function Ca(t,e){const n=e?t?SE:CE:t?IE:TE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const RE={get:Ca(!1,!1)},AE={get:Ca(!1,!0)},kE={get:Ca(!0,!1)},NE={get:Ca(!0,!0)},Yp=new WeakMap,Xp=new WeakMap,Jp=new WeakMap,Qp=new WeakMap;function OE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PE(t){return t.__v_skip||!Object.isExtensible(t)?0:OE(eE(t))}function pi(t){return Qs(t)?t:Sa(t,!1,zp,RE,Yp)}function xE(t){return Sa(t,!1,EE,AE,Xp)}function Zp(t){return Sa(t,!0,Gp,kE,Jp)}function vP(t){return Sa(t,!0,wE,NE,Qp)}function Sa(t,e,n,s,i){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=PE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function xn(t){return Qs(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function eg(t){return xn(t)||Qs(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Zs(t){return xo(t,"__v_skip",!0),t}const or=t=>we(t)?pi(t):t,uu=t=>we(t)?Zp(t):t;function hu(t){Pn&&Dt&&(t=re(t),Vp(t.dep||(t.dep=lu())))}function Ra(t,e){t=re(t);const n=t.dep;n&&ec(n)}function De(t){return!!(t&&t.__v_isRef===!0)}function Dn(t){return tg(t,!1)}function DE(t){return tg(t,!0)}function tg(t,e){return De(t)?t:new LE(t,e)}class LE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:or(e)}get value(){return hu(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||Qs(e);e=n?e:re(e),Js(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:or(e),Ra(this))}}function EP(t){Ra(t)}function ot(t){return De(t)?t.value:t}const ME={get:(t,e,n)=>ot(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ng(t){return xn(t)?t:new Proxy(t,ME)}class FE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>hu(this),()=>Ra(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function wP(t){return new FE(t)}function UE(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=$E(t,n);return e}class BE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return aE(re(this._object),this._key)}}function $E(t,e,n){const s=t[e];return De(s)?s:new BE(t,e,n)}var sg;class HE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[sg]=!1,this._dirty=!0,this.effect=new ba(e,()=>{this._dirty||(this._dirty=!0,Ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return hu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}sg="__v_isReadonly";function jE(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=Ut):(s=t.get,i=t.set),new HE(s,i,r||!i,n)}function bP(t,...e){}function TP(t,e){}function Ln(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gi(r,e,n)}return i}function Rt(t,e,n,s){if(J(t)){const r=Ln(t,e,n,s);return r&&ru(r)&&r.catch(o=>{gi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Rt(t[r],e,n,s));return i}function gi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[t,o,a]);return}}WE(t,n,i,s)}function WE(t,e,n,s=!0){console.error(t)}let ar=!1,tc=!1;const Ze=[];let Kt=0;const $s=[];let nn=null,Zn=0;const ig=Promise.resolve();let fu=null;function Aa(t){const e=fu||ig;return t?e.then(this?t.bind(this):t):e}function VE(t){let e=Kt+1,n=Ze.length;for(;e<n;){const s=e+n>>>1;lr(Ze[s])<t?e=s+1:n=s}return e}function ka(t){(!Ze.length||!Ze.includes(t,ar&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?Ze.push(t):Ze.splice(VE(t.id),0,t),rg())}function rg(){!ar&&!tc&&(tc=!0,fu=ig.then(ag))}function KE(t){const e=Ze.indexOf(t);e>Kt&&Ze.splice(e,1)}function og(t){W(t)?$s.push(...t):(!nn||!nn.includes(t,t.allowRecurse?Zn+1:Zn))&&$s.push(t),rg()}function of(t,e=ar?Kt+1:0){for(;e<Ze.length;e++){const n=Ze[e];n&&n.pre&&(Ze.splice(e,1),e--,n())}}function Uo(t){if($s.length){const e=[...new Set($s)];if($s.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,s)=>lr(n)-lr(s)),Zn=0;Zn<nn.length;Zn++)nn[Zn]();nn=null,Zn=0}}const lr=t=>t.id==null?1/0:t.id,qE=(t,e)=>{const n=lr(t)-lr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ag(t){tc=!1,ar=!0,Ze.sort(qE);const e=Ut;try{for(Kt=0;Kt<Ze.length;Kt++){const n=Ze[Kt];n&&n.active!==!1&&Ln(n,null,14)}}finally{Kt=0,Ze.length=0,Uo(),ar=!1,fu=null,(Ze.length||$s.length)&&ag()}}let Ri,ao=[];function zE(t,e){var n,s;Ri=t,Ri?(Ri.enabled=!0,ao.forEach(({event:i,args:r})=>Ri.emit(i,...r)),ao=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{zE(r,e)}),setTimeout(()=>{Ri||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ao=[])},3e3)):ao=[]}function GE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ye;f&&(i=n.map(g=>Ae(g)?g.trim():g)),h&&(i=n.map(Do))}let a,l=s[a=Co(e)]||s[a=Co(Et(e))];!l&&r&&(l=s[a=Co(Ct(e))]),l&&Rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(c,t,6,i)}}function lg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const l=c=>{const u=lg(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(we(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):Oe(o,r),we(t)&&s.set(t,o),o)}function Na(t,e){return!t||!Ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Ct(e))||he(t,e))}let Ve=null,Oa=null;function cr(t){const e=Ve;return Ve=t,Oa=t&&t.type.__scopeId||null,e}function IP(t){Oa=t}function CP(){Oa=null}const SP=t=>cg;function cg(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yf(-1);const r=cr(e);let o;try{o=t(...i)}finally{cr(r),s._d&&yf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function So(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:_,inheritAttrs:w}=t;let S,v;const p=cr(t);try{if(n.shapeFlag&4){const b=i||s;S=_t(u.call(b,b,h,r,g,f,_)),v=l}else{const b=e;S=_t(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),v=e.props?l:XE(l)}}catch(b){Gi.length=0,gi(b,t,1),S=Ee(ct)}let y=S;if(v&&w!==!1){const b=Object.keys(v),{shapeFlag:A}=y;b.length&&A&7&&(o&&b.some(su)&&(v=JE(v,o)),y=fn(y,v))}return n.dirs&&(y=fn(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),S=y,cr(p),S}function YE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ds(s)){if(s.type!==ct||s.children==="v-if"){if(e)return;e=s}}else return}return e}const XE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ar(n))&&((e||(e={}))[n]=t[n]);return e},JE=(t,e)=>{const n={};for(const s in t)(!su(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function QE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?af(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Na(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?af(s,o,c):!0:!!o;return!1}function af(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Na(n,r))return!0}return!1}function du({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ug=t=>t.__isSuspense,ZE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?ew(e,n,s,i,r,o,a,l,c):tw(t,e,n,s,i,o,a,l,c)},hydrate:nw,create:pu,normalize:sw},RP=ZE;function ur(t,e){const n=t.props&&t.props[e];J(n)&&n()}function ew(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=pu(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(ur(t,"onPending"),ur(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Hs(f,t.ssFallback)):f.resolve()}function tw(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:w,isInFallback:S,isHydrating:v}=h;if(w)h.pendingBranch=f,Lt(f,w)?(l(w,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():S&&(l(_,g,n,s,i,null,r,o,a),Hs(h,g))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=w):c(w,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),S?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(_,g,n,s,i,null,r,o,a),Hs(h,g))):_&&Lt(f,_)?(l(_,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(_&&Lt(f,_))l(_,f,n,s,i,h,r,o,a),Hs(h,f);else if(ur(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:p,pendingId:y}=h;p>0?setTimeout(()=>{h.pendingId===y&&h.fallback(g)},p):p===0&&h.fallback(g)}}function pu(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:g,n:_,o:{parentNode:w,remove:S}}=c,v=t.props?Lo(t.props.timeout):void 0,p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(y=!1){const{vnode:b,activeBranch:A,pendingBranch:P,pendingId:N,effects:T,parentComponent:U,container:H}=p;if(p.isHydrating)p.isHydrating=!1;else if(!y){const Z=A&&P.transition&&P.transition.mode==="out-in";Z&&(A.transition.afterLeave=()=>{N===p.pendingId&&f(P,H,$,0)});let{anchor:$}=p;A&&($=_(A),g(A,U,p,!0)),Z||f(P,H,$,0)}Hs(p,P),p.pendingBranch=null,p.isInFallback=!1;let q=p.parent,F=!1;for(;q;){if(q.pendingBranch){q.effects.push(...T),F=!0;break}q=q.parent}F||og(T),p.effects=[],ur(b,"onResolve")},fallback(y){if(!p.pendingBranch)return;const{vnode:b,activeBranch:A,parentComponent:P,container:N,isSVG:T}=p;ur(b,"onFallback");const U=_(A),H=()=>{p.isInFallback&&(h(null,y,N,U,P,null,T,a,l),Hs(p,y))},q=y.transition&&y.transition.mode==="out-in";q&&(A.transition.afterLeave=H),p.isInFallback=!0,g(A,P,null,!0),q||H()},move(y,b,A){p.activeBranch&&f(p.activeBranch,y,b,A),p.container=y},next(){return p.activeBranch&&_(p.activeBranch)},registerDep(y,b){const A=!!p.pendingBranch;A&&p.deps++;const P=y.vnode.el;y.asyncDep.catch(N=>{gi(N,y,0)}).then(N=>{if(y.isUnmounted||p.isUnmounted||p.pendingId!==y.suspenseId)return;y.asyncResolved=!0;const{vnode:T}=y;lc(y,N,!1),P&&(T.el=P);const U=!P&&y.subTree.el;b(y,T,w(P||y.subTree.el),P?null:_(y.subTree),p,o,l),U&&S(U),du(y,T.el),A&&--p.deps===0&&p.resolve()})},unmount(y,b){p.isUnmounted=!0,p.activeBranch&&g(p.activeBranch,n,y,b),p.pendingBranch&&g(p.pendingBranch,n,y,b)}};return p}function nw(t,e,n,s,i,r,o,a,l){const c=e.suspense=pu(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function sw(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=lf(s?n.default:n),t.ssFallback=s?lf(n.fallback):Ee(ct)}function lf(t){let e;if(J(t)){const n=fs&&t._c;n&&(t._d=!1,cn()),t=t(),n&&(t._d=!0,e=ft,Ag())}return W(t)&&(t=YE(t)),t=_t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hg(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):og(t)}function Hs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,du(s,i))}function Ro(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Ne||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}function AP(t,e){return kr(t,null,e)}function iw(t,e){return kr(t,null,{flush:"post"})}function kP(t,e){return kr(t,null,{flush:"sync"})}const lo={};function js(t,e,n){return kr(t,e,n)}function kr(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){const a=$p()===(Ne==null?void 0:Ne.scope)?Ne:null;let l,c=!1,u=!1;if(De(t)?(l=()=>t.value,c=Fo(t)):xn(t)?(l=()=>t,s=!0):W(t)?(u=!0,c=t.some(y=>xn(y)||Fo(y)),l=()=>t.map(y=>{if(De(y))return y.value;if(xn(y))return ts(y);if(J(y))return Ln(y,a,2)})):J(t)?e?l=()=>Ln(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Rt(t,a,3,[f])}:l=Ut,e&&s){const y=l;l=()=>ts(y())}let h,f=y=>{h=v.onStop=()=>{Ln(y,a,4)}},g;if(ni)if(f=Ut,e?n&&Rt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const y=Xw();g=y.__watcherHandles||(y.__watcherHandles=[])}else return Ut;let _=u?new Array(t.length).fill(lo):lo;const w=()=>{if(v.active)if(e){const y=v.run();(s||c||(u?y.some((b,A)=>Js(b,_[A])):Js(y,_)))&&(h&&h(),Rt(e,a,3,[y,_===lo?void 0:u&&_[0]===lo?[]:_,f]),_=y)}else v.run()};w.allowRecurse=!!e;let S;i==="sync"?S=w:i==="post"?S=()=>He(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),S=()=>ka(w));const v=new ba(l,S);e?n?w():_=v.run():i==="post"?He(v.run.bind(v),a&&a.suspense):v.run();const p=()=>{v.stop(),a&&a.scope&&iu(a.scope.effects,v)};return g&&g.push(p),p}function rw(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?fg(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Ne;jn(this);const a=kr(i,r.bind(s),n);return o?jn(o):Mn(),a}function fg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ts(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))ts(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Ts(t)||Us(t))t.forEach(n=>{ts(n,e)});else if(Fp(t))for(const n in t)ts(t[n],e);return t}function dg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Or(()=>{t.isMounted=!0}),_u(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],ow={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=mn(),s=dg();let i;return()=>{const r=e.default&&gu(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==ct){o=w;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return ml(o);const c=cf(o);if(!c)return ml(o);const u=hr(c,a,s,n);ei(c,u);const h=n.subTree,f=h&&cf(h);let g=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(f&&f.type!==ct&&(!Lt(c,f)||g)){const w=hr(f,a,s,n);if(ei(f,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ml(o);l==="in-out"&&c.type!==ct&&(w.delayLeave=(S,v,p)=>{const y=gg(s,f);y[String(f.key)]=f,S._leaveCb=()=>{v(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},pg=ow;function gg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function hr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:w,onAppear:S,onAfterAppear:v,onAppearCancelled:p}=e,y=String(t.key),b=gg(n,t),A=(T,U)=>{T&&Rt(T,s,9,U)},P=(T,U)=>{const H=U[1];A(T,U),W(T)?T.every(q=>q.length<=1)&&H():T.length<=1&&H()},N={mode:r,persisted:o,beforeEnter(T){let U=a;if(!n.isMounted)if(i)U=w||a;else return;T._leaveCb&&T._leaveCb(!0);const H=b[y];H&&Lt(t,H)&&H.el._leaveCb&&H.el._leaveCb(),A(U,[T])},enter(T){let U=l,H=c,q=u;if(!n.isMounted)if(i)U=S||l,H=v||c,q=p||u;else return;let F=!1;const Z=T._enterCb=$=>{F||(F=!0,$?A(q,[T]):A(H,[T]),N.delayedLeave&&N.delayedLeave(),T._enterCb=void 0)};U?P(U,[T,Z]):Z()},leave(T,U){const H=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return U();A(h,[T]);let q=!1;const F=T._leaveCb=Z=>{q||(q=!0,U(),Z?A(_,[T]):A(g,[T]),T._leaveCb=void 0,b[H]===t&&delete b[H])};b[H]=t,f?P(f,[T,F]):F()},clone(T){return hr(T,e,n,s)}};return N}function ml(t){if(Nr(t))return t=fn(t),t.children=null,t}function cf(t){return Nr(t)?t.children?t.children[0]:void 0:t}function ei(t,e){t.shapeFlag&6&&t.component?ei(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===je?(o.patchFlag&128&&i++,s=s.concat(gu(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?fn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Pa(t){return J(t)?{setup:t,name:t.name}:t}const as=t=>!!t.type.__asyncLoader;function NP(t){J(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let g;return l||(g=l=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((w,S)=>{a(_,()=>w(h()),()=>S(_),u+1)});throw _}).then(_=>g!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return Pa({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const g=Ne;if(c)return()=>_l(c,g);const _=p=>{l=null,gi(p,g,13,!s)};if(o&&g.suspense||ni)return f().then(p=>()=>_l(p,g)).catch(p=>(_(p),()=>s?Ee(s,{error:p}):null));const w=Dn(!1),S=Dn(),v=Dn(!!i);return i&&setTimeout(()=>{v.value=!1},i),r!=null&&setTimeout(()=>{if(!w.value&&!S.value){const p=new Error(`Async component timed out after ${r}ms.`);_(p),S.value=p}},r),f().then(()=>{w.value=!0,g.parent&&Nr(g.parent.vnode)&&ka(g.parent.update)}).catch(p=>{_(p),S.value=p}),()=>{if(w.value&&c)return _l(c,g);if(S.value&&s)return Ee(s,{error:S.value});if(n&&!v.value)return Ee(n)}}})}function _l(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=Ee(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Nr=t=>t.type.__isKeepAlive,aw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=mn(),s=n.ctx;if(!s.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(p,y,b,A,P)=>{const N=p.component;c(p,y,b,0,a),l(N.vnode,p,y,b,N,a,A,p.slotScopeIds,P),He(()=>{N.isDeactivated=!1,N.a&&Bs(N.a);const T=p.props&&p.props.onVnodeMounted;T&&ht(T,N.parent,p)},a)},s.deactivate=p=>{const y=p.component;c(p,f,null,1,a),He(()=>{y.da&&Bs(y.da);const b=p.props&&p.props.onVnodeUnmounted;b&&ht(b,y.parent,p),y.isDeactivated=!0},a)};function g(p){yl(p),u(p,n,a,!0)}function _(p){i.forEach((y,b)=>{const A=uc(y.type);A&&(!p||!p(A))&&w(b)})}function w(p){const y=i.get(p);!o||!Lt(y,o)?g(y):o&&yl(o),i.delete(p),r.delete(p)}js(()=>[t.include,t.exclude],([p,y])=>{p&&_(b=>Bi(p,b)),y&&_(b=>!Bi(y,b))},{flush:"post",deep:!0});let S=null;const v=()=>{S!=null&&i.set(S,vl(n.subTree))};return Or(v),mu(v),_u(()=>{i.forEach(p=>{const{subTree:y,suspense:b}=n,A=vl(y);if(p.type===A.type&&p.key===A.key){yl(A);const P=A.component.da;P&&He(P,b);return}g(p)})}),()=>{if(S=null,!e.default)return null;const p=e.default(),y=p[0];if(p.length>1)return o=null,p;if(!ds(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let b=vl(y);const A=b.type,P=uc(as(b)?b.type.__asyncResolved||{}:A),{include:N,exclude:T,max:U}=t;if(N&&(!P||!Bi(N,P))||T&&P&&Bi(T,P))return o=b,y;const H=b.key==null?A:b.key,q=i.get(H);return b.el&&(b=fn(b),y.shapeFlag&128&&(y.ssContent=b)),S=H,q?(b.el=q.el,b.component=q.component,b.transition&&ei(b,b.transition),b.shapeFlag|=512,r.delete(H),r.add(H)):(r.add(H),U&&r.size>parseInt(U,10)&&w(r.values().next().value)),b.shapeFlag|=256,o=b,ug(y.type)?y:b}}},OP=aw;function Bi(t,e){return W(t)?t.some(n=>Bi(n,e)):Ae(t)?t.split(",").includes(e):Zv(t)?t.test(e):!1}function lw(t,e){mg(t,"a",e)}function cw(t,e){mg(t,"da",e)}function mg(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(xa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Nr(i.parent.vnode)&&uw(s,e,n,i),i=i.parent}}function uw(t,e,n,s){const i=xa(e,t,s,!0);yu(()=>{iu(s[e],i)},n)}function yl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function vl(t){return t.shapeFlag&128?t.ssContent:t}function xa(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fi(),jn(n);const a=Rt(e,n,t,o);return Mn(),di(),a});return s?i.unshift(r):i.push(r),r}}const gn=t=>(e,n=Ne)=>(!ni||t==="sp")&&xa(t,(...s)=>e(...s),n),hw=gn("bm"),Or=gn("m"),fw=gn("bu"),mu=gn("u"),_u=gn("bum"),yu=gn("um"),dw=gn("sp"),pw=gn("rtg"),gw=gn("rtc");function mw(t,e=Ne){xa("ec",t,e)}function _w(t,e){const n=Ve;if(n===null)return t;const s=La(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ye]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(fi(),Rt(l,n,8,[t.el,a,t,e]),di())}}const vu="components",yw="directives";function vw(t,e){return Eu(vu,t,!0,e)||t}const _g=Symbol();function PP(t){return Ae(t)?Eu(vu,t,!1)||t:t||_g}function xP(t){return Eu(yw,t)}function Eu(t,e,n=!0,s=!1){const i=Ve||Ne;if(i){const r=i.type;if(t===vu){const a=uc(r,!1);if(a&&(a===e||a===Et(e)||a===wa(Et(e))))return r}const o=uf(i[t]||r[t],e)||uf(i.appContext[t],e);return!o&&s?r:o}}function uf(t,e){return t&&(t[e]||t[Et(e)]||t[wa(Et(e))])}function DP(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Ae(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(we(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function LP(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(W(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function MP(t,e,n={},s,i){if(Ve.isCE||Ve.parent&&as(Ve.parent)&&Ve.parent.isCE)return e!=="default"&&(n.name=e),Ee("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),cn();const o=r&&yg(r(n)),a=Ng(je,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function yg(t){return t.some(e=>ds(e)?!(e.type===ct||e.type===je&&!yg(e.children)):!0)?t:null}function FP(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Co(s)]=t[s];return n}const nc=t=>t?Dg(t)?La(t)||t.proxy:nc(t.parent):null,qi=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$emit:t=>t.emit,$options:t=>wu(t),$forceUpdate:t=>t.f||(t.f=()=>ka(t.update)),$nextTick:t=>t.n||(t.n=Aa.bind(t.proxy)),$watch:t=>rw.bind(t)}),El=(t,e)=>t!==ye&&!t.__isScriptSetup&&he(t,e),sc={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(El(s,e))return o[e]=1,s[e];if(i!==ye&&he(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,r[e];if(n!==ye&&he(n,e))return o[e]=4,n[e];ic&&(o[e]=0)}}const u=qi[e];let h,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&he(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,he(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return El(i,e)?(i[e]=n,!0):s!==ye&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ye&&he(t,o)||El(e,o)||(a=r[0])&&he(a,o)||he(s,o)||he(qi,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Ew=Oe({},sc,{get(t,e){if(e!==Symbol.unscopables)return sc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Hv(e)}});let ic=!0;function ww(t){const e=wu(t),n=t.proxy,s=t.ctx;ic=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:_,activated:w,deactivated:S,beforeDestroy:v,beforeUnmount:p,destroyed:y,unmounted:b,render:A,renderTracked:P,renderTriggered:N,errorCaptured:T,serverPrefetch:U,expose:H,inheritAttrs:q,components:F,directives:Z,filters:$}=e;if(c&&bw(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const me=o[be];J(me)&&(s[be]=me.bind(n))}if(i){const be=i.call(n,n);we(be)&&(t.data=pi(be))}if(ic=!0,r)for(const be in r){const me=r[be],Ot=J(me)?me.bind(n,n):J(me.get)?me.get.bind(n,n):Ut,zn=!J(me)&&J(me.set)?me.set.bind(n):Ut,Pt=yt({get:Ot,set:zn});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ut=>Pt.value=ut})}if(a)for(const be in a)vg(a[be],s,n,be);if(l){const be=J(l)?l.call(n):l;Reflect.ownKeys(be).forEach(me=>{Ro(me,be[me])})}u&&hf(u,t,"c");function ce(be,me){W(me)?me.forEach(Ot=>be(Ot.bind(n))):me&&be(me.bind(n))}if(ce(hw,h),ce(Or,f),ce(fw,g),ce(mu,_),ce(lw,w),ce(cw,S),ce(mw,T),ce(gw,P),ce(pw,N),ce(_u,p),ce(yu,b),ce(dw,U),W(H))if(H.length){const be=t.exposed||(t.exposed={});H.forEach(me=>{Object.defineProperty(be,me,{get:()=>n[me],set:Ot=>n[me]=Ot})})}else t.exposed||(t.exposed={});A&&t.render===Ut&&(t.render=A),q!=null&&(t.inheritAttrs=q),F&&(t.components=F),Z&&(t.directives=Z)}function bw(t,e,n=Ut,s=!1){W(t)&&(t=rc(t));for(const i in t){const r=t[i];let o;we(r)?"default"in r?o=At(r.from||i,r.default,!0):o=At(r.from||i):o=At(r),De(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function hf(t,e,n){Rt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vg(t,e,n,s){const i=s.includes(".")?fg(n,s):()=>n[s];if(Ae(t)){const r=e[t];J(r)&&js(i,r)}else if(J(t))js(i,t.bind(n));else if(we(t))if(W(t))t.forEach(r=>vg(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&js(i,r,t)}}function wu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Bo(l,c,o,!0)),Bo(l,e,o)),we(e)&&r.set(e,l),l}function Bo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Bo(t,r,n,!0),i&&i.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Tw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tw={data:ff,props:Xn,emits:Xn,methods:Xn,computed:Xn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Xn,directives:Xn,watch:Cw,provide:ff,inject:Iw};function ff(t,e){return e?t?function(){return Oe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Iw(t,e){return Xn(rc(t),rc(e))}function rc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xn(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function Cw(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=rt(t[s],e[s]);return n}function Sw(t,e,n,s=!1){const i={},r={};xo(r,Da,1),t.propsDefaults=Object.create(null),Eg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Rw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Na(t.emitsOptions,f))continue;const g=e[f];if(l)if(he(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const _=Et(f);i[_]=oc(l,a,_,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{Eg(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=Ct(h))===h||!he(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=oc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!he(e,h))&&(delete r[h],c=!0)}c&&hn(t,"set","$attrs")}function Eg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ki(l))continue;const c=e[l];let u;i&&he(i,u=Et(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Na(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||ye;for(let u=0;u<r.length;u++){const h=r[u];n[h]=oc(i,l,h,c[h],t,!he(c,h))}}return o}function oc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&J(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(jn(i),s=c[n]=l.call(null,e),Mn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ct(n))&&(s=!0))}return s}function wg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!J(t)){const u=h=>{l=!0;const[f,g]=wg(h,e,!0);Oe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return we(t)&&s.set(t,Fs),Fs;if(W(r))for(let u=0;u<r.length;u++){const h=Et(r[u]);df(h)&&(o[h]=ye)}else if(r)for(const u in r){const h=Et(u);if(df(h)){const f=r[u],g=o[h]=W(f)||J(f)?{type:f}:Object.assign({},f);if(g){const _=mf(Boolean,g.type),w=mf(String,g.type);g[0]=_>-1,g[1]=w<0||_<w,(_>-1||he(g,"default"))&&a.push(h)}}}const c=[o,a];return we(t)&&s.set(t,c),c}function df(t){return t[0]!=="$"}function pf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gf(t,e){return pf(t)===pf(e)}function mf(t,e){return W(e)?e.findIndex(n=>gf(n,t)):J(e)&&gf(e,t)?0:-1}const bg=t=>t[0]==="_"||t==="$stable",bu=t=>W(t)?t.map(_t):[_t(t)],Aw=(t,e,n)=>{if(e._n)return e;const s=cg((...i)=>bu(e(...i)),n);return s._c=!1,s},Tg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(bg(i))continue;const r=t[i];if(J(r))e[i]=Aw(i,r,s);else if(r!=null){const o=bu(r);e[i]=()=>o}}},Ig=(t,e)=>{const n=bu(e);t.slots.default=()=>n},kw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),xo(e,"_",n)):Tg(e,t.slots={})}else t.slots={},e&&Ig(t,e);xo(t.slots,Da,1)},Nw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Tg(e,i)),o=e}else e&&(Ig(t,e),o={default:1});if(r)for(const a in i)!bg(a)&&!(a in o)&&delete i[a]};function Cg(){return{app:null,config:{isNativeTag:Xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ow=0;function Pw(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!we(i)&&(i=null);const r=Cg(),o=new Set;let a=!1;const l=r.app={_uid:Ow++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Qw,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(l,...u)):J(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ee(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,La(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function $o(t,e,n,s,i=!1){if(W(t)){t.forEach((f,g)=>$o(f,e&&(W(e)?e[g]:e),n,s,i));return}if(as(s)&&!i)return;const r=s.shapeFlag&4?La(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,he(h,c)&&(h[c]=null)):De(c)&&(c.value=null)),J(l))Ln(l,a,12,[o,u]);else{const f=Ae(l),g=De(l);if(f||g){const _=()=>{if(t.f){const w=f?he(h,l)?h[l]:u[l]:l.value;i?W(w)&&iu(w,r):W(w)?w.includes(r)||w.push(r):f?(u[l]=[r],he(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,he(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,He(_,n)):_()}}}let vn=!1;const co=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",uo=t=>t.nodeType===8;function xw(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,p)=>{if(!p.hasChildNodes()){n(null,v,p),Uo(),p._vnode=v;return}vn=!1,h(p.firstChild,v,null,null,null),Uo(),p._vnode=v,vn&&console.error("Hydration completed but contains mismatches.")},h=(v,p,y,b,A,P=!1)=>{const N=uo(v)&&v.data==="[",T=()=>w(v,p,y,b,A,N),{type:U,ref:H,shapeFlag:q,patchFlag:F}=p;let Z=v.nodeType;p.el=v,F===-2&&(P=!1,p.dynamicChildren=null);let $=null;switch(U){case ti:Z!==3?p.children===""?(l(p.el=i(""),o(v),v),$=v):$=T():(v.data!==p.children&&(vn=!0,v.data=p.children),$=r(v));break;case ct:Z!==8||N?$=T():$=r(v);break;case Ws:if(N&&(v=r(v),Z=v.nodeType),Z===1||Z===3){$=v;const pe=!p.children.length;for(let ce=0;ce<p.staticCount;ce++)pe&&(p.children+=$.nodeType===1?$.outerHTML:$.data),ce===p.staticCount-1&&(p.anchor=$),$=r($);return N?r($):$}else T();break;case je:N?$=_(v,p,y,b,A,P):$=T();break;default:if(q&1)Z!==1||p.type.toLowerCase()!==v.tagName.toLowerCase()?$=T():$=f(v,p,y,b,A,P);else if(q&6){p.slotScopeIds=A;const pe=o(v);if(e(p,pe,null,y,b,co(pe),P),$=N?S(v):r(v),$&&uo($)&&$.data==="teleport end"&&($=r($)),as(p)){let ce;N?(ce=Ee(je),ce.anchor=$?$.previousSibling:pe.lastChild):ce=v.nodeType===3?Pg(""):Ee("div"),ce.el=v,p.component.subTree=ce}}else q&64?Z!==8?$=T():$=p.type.hydrate(v,p,y,b,A,P,t,g):q&128&&($=p.type.hydrate(v,p,y,b,co(o(v)),A,P,t,h))}return H!=null&&$o(H,null,b,p),$},f=(v,p,y,b,A,P)=>{P=P||!!p.dynamicChildren;const{type:N,props:T,patchFlag:U,shapeFlag:H,dirs:q}=p,F=N==="input"&&q||N==="option";if(F||U!==-1){if(q&&Vt(p,null,y,"created"),T)if(F||!P||U&48)for(const $ in T)(F&&$.endsWith("value")||Ar($)&&!Ki($))&&s(v,$,null,T[$],!1,void 0,y);else T.onClick&&s(v,"onClick",null,T.onClick,!1,void 0,y);let Z;if((Z=T&&T.onVnodeBeforeMount)&&ht(Z,y,p),q&&Vt(p,null,y,"beforeMount"),((Z=T&&T.onVnodeMounted)||q)&&hg(()=>{Z&&ht(Z,y,p),q&&Vt(p,null,y,"mounted")},b),H&16&&!(T&&(T.innerHTML||T.textContent))){let $=g(v.firstChild,p,v,y,b,A,P);for(;$;){vn=!0;const pe=$;$=$.nextSibling,a(pe)}}else H&8&&v.textContent!==p.children&&(vn=!0,v.textContent=p.children)}return v.nextSibling},g=(v,p,y,b,A,P,N)=>{N=N||!!p.dynamicChildren;const T=p.children,U=T.length;for(let H=0;H<U;H++){const q=N?T[H]:T[H]=_t(T[H]);if(v)v=h(v,q,b,A,P,N);else{if(q.type===ti&&!q.children)continue;vn=!0,n(null,q,y,null,b,A,co(y),P)}}return v},_=(v,p,y,b,A,P)=>{const{slotScopeIds:N}=p;N&&(A=A?A.concat(N):N);const T=o(v),U=g(r(v),p,T,y,b,A,P);return U&&uo(U)&&U.data==="]"?r(p.anchor=U):(vn=!0,l(p.anchor=c("]"),T,U),U)},w=(v,p,y,b,A,P)=>{if(vn=!0,p.el=null,P){const U=S(v);for(;;){const H=r(v);if(H&&H!==U)a(H);else break}}const N=r(v),T=o(v);return a(v),n(null,p,T,N,y,b,co(T),A),N},S=v=>{let p=0;for(;v;)if(v=r(v),v&&uo(v)&&(v.data==="["&&p++,v.data==="]")){if(p===0)return r(v);p--}return v};return[u,h]}const He=hg;function Dw(t){return Sg(t)}function Lw(t){return Sg(t,xw)}function Sg(t,e){const n=sE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ut,insertStaticContent:_}=t,w=(d,m,E,I=null,R=null,x=null,B=!1,O=null,D=!!m.dynamicChildren)=>{if(d===m)return;d&&!Lt(d,m)&&(I=M(d),ut(d,R,x,!0),d=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:k,ref:G,shapeFlag:V}=m;switch(k){case ti:S(d,m,E,I);break;case ct:v(d,m,E,I);break;case Ws:d==null&&p(m,E,I,B);break;case je:F(d,m,E,I,R,x,B,O,D);break;default:V&1?A(d,m,E,I,R,x,B,O,D):V&6?Z(d,m,E,I,R,x,B,O,D):(V&64||V&128)&&k.process(d,m,E,I,R,x,B,O,D,ue)}G!=null&&R&&$o(G,d&&d.ref,x,m||d,!m)},S=(d,m,E,I)=>{if(d==null)s(m.el=a(m.children),E,I);else{const R=m.el=d.el;m.children!==d.children&&c(R,m.children)}},v=(d,m,E,I)=>{d==null?s(m.el=l(m.children||""),E,I):m.el=d.el},p=(d,m,E,I)=>{[d.el,d.anchor]=_(d.children,m,E,I,d.el,d.anchor)},y=({el:d,anchor:m},E,I)=>{let R;for(;d&&d!==m;)R=f(d),s(d,E,I),d=R;s(m,E,I)},b=({el:d,anchor:m})=>{let E;for(;d&&d!==m;)E=f(d),i(d),d=E;i(m)},A=(d,m,E,I,R,x,B,O,D)=>{B=B||m.type==="svg",d==null?P(m,E,I,R,x,B,O,D):U(d,m,R,x,B,O,D)},P=(d,m,E,I,R,x,B,O)=>{let D,k;const{type:G,props:V,shapeFlag:Y,transition:ee,dirs:se}=d;if(D=d.el=o(d.type,x,V&&V.is,V),Y&8?u(D,d.children):Y&16&&T(d.children,D,null,I,R,x&&G!=="foreignObject",B,O),se&&Vt(d,null,I,"created"),N(D,d,d.scopeId,B,I),V){for(const _e in V)_e!=="value"&&!Ki(_e)&&r(D,_e,null,V[_e],x,d.children,I,R,j);"value"in V&&r(D,"value",null,V.value),(k=V.onVnodeBeforeMount)&&ht(k,I,d)}se&&Vt(d,null,I,"beforeMount");const Te=(!R||R&&!R.pendingBranch)&&ee&&!ee.persisted;Te&&ee.beforeEnter(D),s(D,m,E),((k=V&&V.onVnodeMounted)||Te||se)&&He(()=>{k&&ht(k,I,d),Te&&ee.enter(D),se&&Vt(d,null,I,"mounted")},R)},N=(d,m,E,I,R)=>{if(E&&g(d,E),I)for(let x=0;x<I.length;x++)g(d,I[x]);if(R){let x=R.subTree;if(m===x){const B=R.vnode;N(d,B,B.scopeId,B.slotScopeIds,R.parent)}}},T=(d,m,E,I,R,x,B,O,D=0)=>{for(let k=D;k<d.length;k++){const G=d[k]=O?In(d[k]):_t(d[k]);w(null,G,m,E,I,R,x,B,O)}},U=(d,m,E,I,R,x,B)=>{const O=m.el=d.el;let{patchFlag:D,dynamicChildren:k,dirs:G}=m;D|=d.patchFlag&16;const V=d.props||ye,Y=m.props||ye;let ee;E&&Gn(E,!1),(ee=Y.onVnodeBeforeUpdate)&&ht(ee,E,m,d),G&&Vt(m,d,E,"beforeUpdate"),E&&Gn(E,!0);const se=R&&m.type!=="foreignObject";if(k?H(d.dynamicChildren,k,O,E,I,se,x):B||me(d,m,O,null,E,I,se,x,!1),D>0){if(D&16)q(O,m,V,Y,E,I,R);else if(D&2&&V.class!==Y.class&&r(O,"class",null,Y.class,R),D&4&&r(O,"style",V.style,Y.style,R),D&8){const Te=m.dynamicProps;for(let _e=0;_e<Te.length;_e++){const Me=Te[_e],xt=V[Me],As=Y[Me];(As!==xt||Me==="value")&&r(O,Me,xt,As,R,d.children,E,I,j)}}D&1&&d.children!==m.children&&u(O,m.children)}else!B&&k==null&&q(O,m,V,Y,E,I,R);((ee=Y.onVnodeUpdated)||G)&&He(()=>{ee&&ht(ee,E,m,d),G&&Vt(m,d,E,"updated")},I)},H=(d,m,E,I,R,x,B)=>{for(let O=0;O<m.length;O++){const D=d[O],k=m[O],G=D.el&&(D.type===je||!Lt(D,k)||D.shapeFlag&70)?h(D.el):E;w(D,k,G,null,I,R,x,B,!0)}},q=(d,m,E,I,R,x,B)=>{if(E!==I){if(E!==ye)for(const O in E)!Ki(O)&&!(O in I)&&r(d,O,E[O],null,B,m.children,R,x,j);for(const O in I){if(Ki(O))continue;const D=I[O],k=E[O];D!==k&&O!=="value"&&r(d,O,k,D,B,m.children,R,x,j)}"value"in I&&r(d,"value",E.value,I.value)}},F=(d,m,E,I,R,x,B,O,D)=>{const k=m.el=d?d.el:a(""),G=m.anchor=d?d.anchor:a("");let{patchFlag:V,dynamicChildren:Y,slotScopeIds:ee}=m;ee&&(O=O?O.concat(ee):ee),d==null?(s(k,E,I),s(G,E,I),T(m.children,E,G,R,x,B,O,D)):V>0&&V&64&&Y&&d.dynamicChildren?(H(d.dynamicChildren,Y,E,R,x,B,O),(m.key!=null||R&&m===R.subTree)&&Tu(d,m,!0)):me(d,m,E,G,R,x,B,O,D)},Z=(d,m,E,I,R,x,B,O,D)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?R.ctx.activate(m,E,I,B,D):$(m,E,I,R,x,B,D):pe(d,m,D)},$=(d,m,E,I,R,x,B)=>{const O=d.component=xg(d,I,R);if(Nr(d)&&(O.ctx.renderer=ue),Lg(O),O.asyncDep){if(R&&R.registerDep(O,ce),!d.el){const D=O.subTree=Ee(ct);v(null,D,m,E)}return}ce(O,d,m,E,R,x,B)},pe=(d,m,E)=>{const I=m.component=d.component;if(QE(d,m,E))if(I.asyncDep&&!I.asyncResolved){be(I,m,E);return}else I.next=m,KE(I.update),I.update();else m.el=d.el,I.vnode=m},ce=(d,m,E,I,R,x,B)=>{const O=()=>{if(d.isMounted){let{next:G,bu:V,u:Y,parent:ee,vnode:se}=d,Te=G,_e;Gn(d,!1),G?(G.el=se.el,be(d,G,B)):G=se,V&&Bs(V),(_e=G.props&&G.props.onVnodeBeforeUpdate)&&ht(_e,ee,G,se),Gn(d,!0);const Me=So(d),xt=d.subTree;d.subTree=Me,w(xt,Me,h(xt.el),M(xt),d,R,x),G.el=Me.el,Te===null&&du(d,Me.el),Y&&He(Y,R),(_e=G.props&&G.props.onVnodeUpdated)&&He(()=>ht(_e,ee,G,se),R)}else{let G;const{el:V,props:Y}=m,{bm:ee,m:se,parent:Te}=d,_e=as(m);if(Gn(d,!1),ee&&Bs(ee),!_e&&(G=Y&&Y.onVnodeBeforeMount)&&ht(G,Te,m),Gn(d,!0),V&&te){const Me=()=>{d.subTree=So(d),te(V,d.subTree,d,R,null)};_e?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Me()):Me()}else{const Me=d.subTree=So(d);w(null,Me,E,I,d,R,x),m.el=Me.el}if(se&&He(se,R),!_e&&(G=Y&&Y.onVnodeMounted)){const Me=m;He(()=>ht(G,Te,Me),R)}(m.shapeFlag&256||Te&&as(Te.vnode)&&Te.vnode.shapeFlag&256)&&d.a&&He(d.a,R),d.isMounted=!0,m=E=I=null}},D=d.effect=new ba(O,()=>ka(k),d.scope),k=d.update=()=>D.run();k.id=d.uid,Gn(d,!0),k()},be=(d,m,E)=>{m.component=d;const I=d.vnode.props;d.vnode=m,d.next=null,Rw(d,m.props,I,E),Nw(d,m.children,E),fi(),of(),di()},me=(d,m,E,I,R,x,B,O,D=!1)=>{const k=d&&d.children,G=d?d.shapeFlag:0,V=m.children,{patchFlag:Y,shapeFlag:ee}=m;if(Y>0){if(Y&128){zn(k,V,E,I,R,x,B,O,D);return}else if(Y&256){Ot(k,V,E,I,R,x,B,O,D);return}}ee&8?(G&16&&j(k,R,x),V!==k&&u(E,V)):G&16?ee&16?zn(k,V,E,I,R,x,B,O,D):j(k,R,x,!0):(G&8&&u(E,""),ee&16&&T(V,E,I,R,x,B,O,D))},Ot=(d,m,E,I,R,x,B,O,D)=>{d=d||Fs,m=m||Fs;const k=d.length,G=m.length,V=Math.min(k,G);let Y;for(Y=0;Y<V;Y++){const ee=m[Y]=D?In(m[Y]):_t(m[Y]);w(d[Y],ee,E,null,R,x,B,O,D)}k>G?j(d,R,x,!0,!1,V):T(m,E,I,R,x,B,O,D,V)},zn=(d,m,E,I,R,x,B,O,D)=>{let k=0;const G=m.length;let V=d.length-1,Y=G-1;for(;k<=V&&k<=Y;){const ee=d[k],se=m[k]=D?In(m[k]):_t(m[k]);if(Lt(ee,se))w(ee,se,E,null,R,x,B,O,D);else break;k++}for(;k<=V&&k<=Y;){const ee=d[V],se=m[Y]=D?In(m[Y]):_t(m[Y]);if(Lt(ee,se))w(ee,se,E,null,R,x,B,O,D);else break;V--,Y--}if(k>V){if(k<=Y){const ee=Y+1,se=ee<G?m[ee].el:I;for(;k<=Y;)w(null,m[k]=D?In(m[k]):_t(m[k]),E,se,R,x,B,O,D),k++}}else if(k>Y)for(;k<=V;)ut(d[k],R,x,!0),k++;else{const ee=k,se=k,Te=new Map;for(k=se;k<=Y;k++){const gt=m[k]=D?In(m[k]):_t(m[k]);gt.key!=null&&Te.set(gt.key,k)}let _e,Me=0;const xt=Y-se+1;let As=!1,zh=0;const Si=new Array(xt);for(k=0;k<xt;k++)Si[k]=0;for(k=ee;k<=V;k++){const gt=d[k];if(Me>=xt){ut(gt,R,x,!0);continue}let Wt;if(gt.key!=null)Wt=Te.get(gt.key);else for(_e=se;_e<=Y;_e++)if(Si[_e-se]===0&&Lt(gt,m[_e])){Wt=_e;break}Wt===void 0?ut(gt,R,x,!0):(Si[Wt-se]=k+1,Wt>=zh?zh=Wt:As=!0,w(gt,m[Wt],E,null,R,x,B,O,D),Me++)}const Gh=As?Mw(Si):Fs;for(_e=Gh.length-1,k=xt-1;k>=0;k--){const gt=se+k,Wt=m[gt],Yh=gt+1<G?m[gt+1].el:I;Si[k]===0?w(null,Wt,E,Yh,R,x,B,O,D):As&&(_e<0||k!==Gh[_e]?Pt(Wt,E,Yh,2):_e--)}}},Pt=(d,m,E,I,R=null)=>{const{el:x,type:B,transition:O,children:D,shapeFlag:k}=d;if(k&6){Pt(d.component.subTree,m,E,I);return}if(k&128){d.suspense.move(m,E,I);return}if(k&64){B.move(d,m,E,ue);return}if(B===je){s(x,m,E);for(let V=0;V<D.length;V++)Pt(D[V],m,E,I);s(d.anchor,m,E);return}if(B===Ws){y(d,m,E);return}if(I!==2&&k&1&&O)if(I===0)O.beforeEnter(x),s(x,m,E),He(()=>O.enter(x),R);else{const{leave:V,delayLeave:Y,afterLeave:ee}=O,se=()=>s(x,m,E),Te=()=>{V(x,()=>{se(),ee&&ee()})};Y?Y(x,se,Te):Te()}else s(x,m,E)},ut=(d,m,E,I=!1,R=!1)=>{const{type:x,props:B,ref:O,children:D,dynamicChildren:k,shapeFlag:G,patchFlag:V,dirs:Y}=d;if(O!=null&&$o(O,null,E,d,!0),G&256){m.ctx.deactivate(d);return}const ee=G&1&&Y,se=!as(d);let Te;if(se&&(Te=B&&B.onVnodeBeforeUnmount)&&ht(Te,m,d),G&6)C(d.component,E,I);else{if(G&128){d.suspense.unmount(E,I);return}ee&&Vt(d,null,m,"beforeUnmount"),G&64?d.type.remove(d,m,E,R,ue,I):k&&(x!==je||V>0&&V&64)?j(k,m,E,!1,!0):(x===je&&V&384||!R&&G&16)&&j(D,m,E),I&&Rs(d)}(se&&(Te=B&&B.onVnodeUnmounted)||ee)&&He(()=>{Te&&ht(Te,m,d),ee&&Vt(d,null,m,"unmounted")},E)},Rs=d=>{const{type:m,el:E,anchor:I,transition:R}=d;if(m===je){to(E,I);return}if(m===Ws){b(d);return}const x=()=>{i(E),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(d.shapeFlag&1&&R&&!R.persisted){const{leave:B,delayLeave:O}=R,D=()=>B(E,x);O?O(d.el,x,D):D()}else x()},to=(d,m)=>{let E;for(;d!==m;)E=f(d),i(d),d=E;i(m)},C=(d,m,E)=>{const{bum:I,scope:R,update:x,subTree:B,um:O}=d;I&&Bs(I),R.stop(),x&&(x.active=!1,ut(B,d,m,E)),O&&He(O,m),He(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},j=(d,m,E,I=!1,R=!1,x=0)=>{for(let B=x;B<d.length;B++)ut(d[B],m,E,I,R)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),z=(d,m,E)=>{d==null?m._vnode&&ut(m._vnode,null,null,!0):w(m._vnode||null,d,m,null,null,null,E),of(),Uo(),m._vnode=d},ue={p:w,um:ut,m:Pt,r:Rs,mt:$,mc:T,pc:me,pbc:H,n:M,o:t};let ke,te;return e&&([ke,te]=e(ue)),{render:z,hydrate:ke,createApp:Pw(z,ke)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tu(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=In(i[r]),a.el=o.el),n||Tu(o,a)),a.type===ti&&(a.el=o.el)}}function Mw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Fw=t=>t.__isTeleport,zi=t=>t&&(t.disabled||t.disabled===""),_f=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ac=(t,e)=>{const n=t&&t.to;return Ae(n)?e?e(n):null:n},Uw={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:g,querySelector:_,createText:w,createComment:S}}=c,v=zi(e.props);let{shapeFlag:p,children:y,dynamicChildren:b}=e;if(t==null){const A=e.el=w(""),P=e.anchor=w("");g(A,n,s),g(P,n,s);const N=e.target=ac(e.props,_),T=e.targetAnchor=w("");N&&(g(T,N),o=o||_f(N));const U=(H,q)=>{p&16&&u(y,H,q,i,r,o,a,l)};v?U(n,P):N&&U(N,T)}else{e.el=t.el;const A=e.anchor=t.anchor,P=e.target=t.target,N=e.targetAnchor=t.targetAnchor,T=zi(t.props),U=T?n:P,H=T?A:N;if(o=o||_f(P),b?(f(t.dynamicChildren,b,U,i,r,o,a),Tu(t,e,!0)):l||h(t,e,U,H,i,r,o,a,!1),v)T||ho(e,n,A,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const q=e.target=ac(e.props,_);q&&ho(e,q,null,c,0)}else T&&ho(e,P,N,c,1)}Rg(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!zi(f))&&(r(c),a&16))for(let g=0;g<l.length;g++){const _=l[g];i(_,e,n,!0,!!_.dynamicChildren)}},move:ho,hydrate:Bw};function ho(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||zi(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&s(a,e,n)}function Bw(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=ac(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(zi(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}Rg(e)}return e.anchor&&o(e.anchor)}const UP=Uw;function Rg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const je=Symbol(void 0),ti=Symbol(void 0),ct=Symbol(void 0),Ws=Symbol(void 0),Gi=[];let ft=null;function cn(t=!1){Gi.push(ft=t?null:[])}function Ag(){Gi.pop(),ft=Gi[Gi.length-1]||null}let fs=1;function yf(t){fs+=t}function kg(t){return t.dynamicChildren=fs>0?ft||Fs:null,Ag(),fs>0&&ft&&ft.push(t),t}function Vs(t,e,n,s,i,r){return kg(ne(t,e,n,s,i,r,!0))}function Ng(t,e,n,s,i){return kg(Ee(t,e,n,s,i,!0))}function ds(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}function BP(t){}const Da="__vInternal",Og=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ae(t)||De(t)||J(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function ne(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Og(e),ref:e&&Ao(e),scopeId:Oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Iu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),fs>0&&!o&&ft&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ft.push(l),l}const Ee=$w;function $w(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_g)&&(t=ct),ds(t)){const a=fn(t,e,!0);return n&&Iu(a,n),fs>0&&!r&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(Gw(t)&&(t=t.__vccOpts),e){e=Hw(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=bs(a)),we(l)&&(eg(l)&&!W(l)&&(l=Oe({},l)),e.style=ya(l))}const o=Ae(t)?1:ug(t)?128:Fw(t)?64:we(t)?4:J(t)?2:0;return ne(t,e,n,s,i,o,r,!0)}function Hw(t){return t?eg(t)||Da in t?Oe({},t):t:null}function fn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Ww(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Og(a),ref:e&&e.ref?n&&i?W(i)?i.concat(Ao(e)):[i,Ao(e)]:Ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Pg(t=" ",e=0){return Ee(ti,null,t,e)}function jw(t,e){const n=Ee(Ws,null,t);return n.staticCount=e,n}function wl(t="",e=!1){return e?(cn(),Ng(ct,null,t)):Ee(ct,null,t)}function _t(t){return t==null||typeof t=="boolean"?Ee(ct):W(t)?Ee(je,null,t.slice()):typeof t=="object"?In(t):Ee(ti,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function Iu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Iu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Da in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Pg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ww(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bs([e.class,s.class]));else if(i==="style")e.style=ya([e.style,s.style]);else if(Ar(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ht(t,e,n,s=null){Rt(t,e,7,[n,s])}const Vw=Cg();let Kw=0;function xg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Vw,r={uid:Kw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wg(s,i),emitsOptions:lg(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=GE.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const mn=()=>Ne||Ve,jn=t=>{Ne=t,t.scope.on()},Mn=()=>{Ne&&Ne.scope.off(),Ne=null};function Dg(t){return t.vnode.shapeFlag&4}let ni=!1;function Lg(t,e=!1){ni=e;const{props:n,children:s}=t.vnode,i=Dg(t);Sw(t,n,i,e),kw(t,s);const r=i?qw(t,e):void 0;return ni=!1,r}function qw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zs(new Proxy(t.ctx,sc));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Fg(t):null;jn(t),fi();const r=Ln(s,t,0,[t.props,i]);if(di(),Mn(),ru(r)){if(r.then(Mn,Mn),e)return r.then(o=>{lc(t,o,e)}).catch(o=>{gi(o,t,0)});t.asyncDep=r}else lc(t,r,e)}else Mg(t,e)}function lc(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=ng(e)),Mg(t,n)}let Ho,cc;function $P(t){Ho=t,cc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ew))}}const HP=()=>!Ho;function Mg(t,e,n){const s=t.type;if(!t.render){if(!e&&Ho&&!s.render){const i=s.template||wu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=Ho(i,c)}}t.render=s.render||Ut,cc&&cc(t)}jn(t),fi(),ww(t),di(),Mn()}function zw(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function Fg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zw(t))},slots:t.slots,emit:t.emit,expose:e}}function La(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ng(Zs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}}))}function uc(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Gw(t){return J(t)&&"__vccOpts"in t}const yt=(t,e)=>jE(t,e,ni);function jP(){return null}function WP(){return null}function VP(t){}function KP(t,e){return null}function qP(){return Ug().slots}function zP(){return Ug().attrs}function Ug(){const t=mn();return t.setupContext||(t.setupContext=Fg(t))}function GP(t,e){const n=W(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?W(i)||J(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function YP(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function XP(t){const e=mn();let n=t();return Mn(),ru(n)&&(n=n.catch(s=>{throw jn(e),s})),[n,()=>jn(e)]}function Cu(t,e,n){const s=arguments.length;return s===2?we(e)&&!W(e)?ds(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ds(n)&&(n=[n]),Ee(t,e,n))}const Yw=Symbol(""),Xw=()=>At(Yw);function JP(){}function QP(t,e,n,s){const i=n[s];if(i&&Jw(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function Jw(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Js(n[s],e[s]))return!1;return fs>0&&ft&&ft.push(t),!0}const Qw="3.2.47",Zw={createComponentInstance:xg,setupComponent:Lg,renderComponentRoot:So,setCurrentRenderingInstance:cr,isVNode:ds,normalizeVNode:_t},ZP=Zw,ex=null,tx=null,eb="http://www.w3.org/2000/svg",es=typeof document<"u"?document:null,vf=es&&es.createElement("template"),tb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?es.createElementNS(eb,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vf.innerHTML=s?`<svg>${t}</svg>`:t;const a=vf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sb(t,e,n){const s=t.style,i=Ae(n);if(n&&!i){if(e&&!Ae(e))for(const r in e)n[r]==null&&hc(s,r,"");for(const r in n)hc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ef=/\s*!important$/;function hc(t,e,n){if(W(n))n.forEach(s=>hc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ib(t,e);Ef.test(n)?t.setProperty(Ct(s),n.replace(Ef,""),"important"):t[s]=n}}const wf=["Webkit","Moz","ms"],bl={};function ib(t,e){const n=bl[e];if(n)return n;let s=Et(e);if(s!=="filter"&&s in t)return bl[e]=s;s=wa(s);for(let i=0;i<wf.length;i++){const r=wf[i]+s;if(r in t)return bl[e]=r}return e}const bf="http://www.w3.org/1999/xlink";function rb(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bf,e.slice(6,e.length)):t.setAttributeNS(bf,e,n);else{const r=zv(e);n==null||r&&!Dp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ob(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dp(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function sn(t,e,n,s){t.addEventListener(e,n,s)}function ab(t,e,n,s){t.removeEventListener(e,n,s)}function lb(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=cb(e);if(s){const c=r[e]=fb(s,i);sn(t,a,c,l)}else o&&(ab(t,a,o,l),r[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function cb(t){let e;if(Tf.test(t)){e={};let s;for(;s=t.match(Tf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ct(t.slice(2)),e]}let Tl=0;const ub=Promise.resolve(),hb=()=>Tl||(ub.then(()=>Tl=0),Tl=Date.now());function fb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(db(s,n.value),e,5,[s])};return n.value=t,n.attached=hb(),n}function db(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const If=/^on[a-z]/,pb=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?nb(t,s,i):e==="style"?sb(t,n,s):Ar(e)?su(e)||lb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gb(t,e,s,i))?ob(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rb(t,e,s,i))};function gb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&If.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||If.test(e)&&Ae(n)?!1:e in t}function mb(t,e){const n=Pa(t);class s extends Su{constructor(r){super(n,r,e)}}return s.def=n,s}const nx=t=>mb(t,Lb),_b=typeof HTMLElement<"u"?HTMLElement:class{};class Su extends _b{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Aa(()=>{this._connected||(Df(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(s,i=!1)=>{const{props:r,styles:o}=s;let a;if(r&&!W(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Lo(this._props[l])),(a||(a=Object.create(null)))[Et(l)]=!0)}this._numberProps=a,i&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=W(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of s.map(Et))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(r){this._setProp(i,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=Et(e);this._numberProps&&this._numberProps[s]&&(n=Lo(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Ct(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ct(e),n+""):n||this.removeAttribute(Ct(e))))}_update(){Df(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ee(this._def,Oe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{s(r,o),Ct(r)!==r&&s(Ct(r),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Su){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function sx(t="$style"){{const e=mn();if(!e)return ye;const n=e.type.__cssModules;if(!n)return ye;const s=n[t];return s||ye}}function ix(t){const e=mn();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>dc(r,i))},s=()=>{const i=t(e.proxy);fc(e.subTree,i),n(i)};iw(s),Or(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),yu(()=>i.disconnect())})}function fc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)dc(t.el,e);else if(t.type===je)t.children.forEach(n=>fc(n,e));else if(t.type===Ws){let{el:n,anchor:s}=t;for(;n&&(dc(n,e),n!==s);)n=n.nextSibling}}function dc(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const En="transition",Ai="animation",Bg=(t,{slots:e})=>Cu(pg,Hg(t),e);Bg.displayName="Transition";const $g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yb=Bg.props=Oe({},pg.props,$g),Yn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cf=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Hg(t){const e={};for(const F in t)F in $g||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=vb(i),w=_&&_[0],S=_&&_[1],{onBeforeEnter:v,onEnter:p,onEnterCancelled:y,onLeave:b,onLeaveCancelled:A,onBeforeAppear:P=v,onAppear:N=p,onAppearCancelled:T=y}=e,U=(F,Z,$)=>{Tn(F,Z?u:a),Tn(F,Z?c:o),$&&$()},H=(F,Z)=>{F._isLeaving=!1,Tn(F,h),Tn(F,g),Tn(F,f),Z&&Z()},q=F=>(Z,$)=>{const pe=F?N:p,ce=()=>U(Z,F,$);Yn(pe,[Z,ce]),Sf(()=>{Tn(Z,F?l:r),tn(Z,F?u:a),Cf(pe)||Rf(Z,s,w,ce)})};return Oe(e,{onBeforeEnter(F){Yn(v,[F]),tn(F,r),tn(F,o)},onBeforeAppear(F){Yn(P,[F]),tn(F,l),tn(F,c)},onEnter:q(!1),onAppear:q(!0),onLeave(F,Z){F._isLeaving=!0;const $=()=>H(F,Z);tn(F,h),Wg(),tn(F,f),Sf(()=>{F._isLeaving&&(Tn(F,h),tn(F,g),Cf(b)||Rf(F,s,S,$))}),Yn(b,[F,$])},onEnterCancelled(F){U(F,!1),Yn(y,[F])},onAppearCancelled(F){U(F,!0),Yn(T,[F])},onLeaveCancelled(F){H(F),Yn(A,[F])}})}function vb(t){if(t==null)return null;if(we(t))return[Il(t.enter),Il(t.leave)];{const e=Il(t);return[e,e]}}function Il(t){return Lo(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Tn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Sf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Eb=0;function Rf(t,e,n,s){const i=t._endId=++Eb,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=jg(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=g=>{g.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function jg(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${En}Delay`),r=s(`${En}Duration`),o=Af(i,r),a=s(`${Ai}Delay`),l=s(`${Ai}Duration`),c=Af(a,l);let u=null,h=0,f=0;e===En?o>0&&(u=En,h=o,f=r.length):e===Ai?c>0&&(u=Ai,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?En:Ai:null,f=u?u===En?r.length:l.length:0);const g=u===En&&/\b(transform|all)(,|$)/.test(s(`${En}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function Af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>kf(n)+kf(t[s])))}function kf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Wg(){return document.body.offsetHeight}const Vg=new WeakMap,Kg=new WeakMap,qg={name:"TransitionGroup",props:Oe({},yb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=mn(),s=dg();let i,r;return mu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Cb(i[0].el,n.vnode.el,o))return;i.forEach(bb),i.forEach(Tb);const a=i.filter(Ib);Wg(),a.forEach(l=>{const c=l.el,u=c.style;tn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Tn(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=re(t),a=Hg(o);let l=o.tag||je;i=r,r=e.default?gu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&ei(u,hr(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];ei(u,hr(u,a,s,n)),Vg.set(u,u.el.getBoundingClientRect())}return Ee(l,null,r)}}},wb=t=>delete t.mode;qg.props;const rx=qg;function bb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Tb(t){Kg.set(t,t.el.getBoundingClientRect())}function Ib(t){const e=Vg.get(t),n=Kg.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Cb(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=jg(s);return i.removeChild(s),r}const Wn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Bs(e,n):e};function Sb(t){t.target.composing=!0}function Nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Wn(i);const r=s||i.props&&i.props.type==="number";sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Do(a)),t._assign(a)}),n&&sn(t,"change",()=>{t.value=t.value.trim()}),e||(sn(t,"compositionstart",Sb),sn(t,"compositionend",Nf),sn(t,"change",Nf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Wn(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Do(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zg={deep:!0,created(t,e,n){t._assign=Wn(n),sn(t,"change",()=>{const s=t._modelValue,i=si(t),r=t.checked,o=t._assign;if(W(s)){const a=va(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ts(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Yg(t,r))})},mounted:Of,beforeUpdate(t,e,n){t._assign=Wn(n),Of(t,e,n)}};function Of(t,{value:e,oldValue:n},s){t._modelValue=e,W(e)?t.checked=va(e,s.props.value)>-1:Ts(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=$n(e,Yg(t,!0)))}const Gg={created(t,{value:e},n){t.checked=$n(e,n.props.value),t._assign=Wn(n),sn(t,"change",()=>{t._assign(si(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Wn(s),e!==n&&(t.checked=$n(e,s.props.value))}},Rb={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Ts(e);sn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Do(si(o)):si(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Wn(s)},mounted(t,{value:e}){Pf(t,e)},beforeUpdate(t,e,n){t._assign=Wn(n)},updated(t,{value:e}){Pf(t,e)}};function Pf(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Ts(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=si(r);if(n)W(e)?r.selected=va(e,o)>-1:r.selected=e.has(o);else if($n(si(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function si(t){return"_value"in t?t._value:t.value}function Yg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ab={created(t,e,n){fo(t,e,n,null,"created")},mounted(t,e,n){fo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){fo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){fo(t,e,n,s,"updated")}};function Xg(t,e){switch(t){case"SELECT":return Rb;case"TEXTAREA":return jo;default:switch(e){case"checkbox":return zg;case"radio":return Gg;default:return jo}}}function fo(t,e,n,s,i){const o=Xg(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function kb(){jo.getSSRProps=({value:t})=>({value:t}),Gg.getSSRProps=({value:t},e)=>{if(e.props&&$n(e.props.value,t))return{checked:!0}},zg.getSSRProps=({value:t},e)=>{if(W(t)){if(e.props&&va(t,e.props.value)>-1)return{checked:!0}}else if(Ts(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Ab.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Xg(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Nb=["ctrl","shift","alt","meta"],Ob={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nb.some(n=>t[`${n}Key`]&&!e.includes(n))},fr=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Ob[e[i]];if(r&&r(n,e))return}return t(n,...s)},Pb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ox=(t,e)=>n=>{if(!("key"in n))return;const s=Ct(n.key);if(e.some(i=>i===s||Pb[i]===s))return t(n)},xb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ki(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ki(t,!0),s.enter(t)):s.leave(t,()=>{ki(t,!1)}):ki(t,e))},beforeUnmount(t,{value:e}){ki(t,e)}};function ki(t,e){t.style.display=e?t._vod:"none"}function Db(){xb.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Jg=Oe({patchProp:pb},tb);let Yi,xf=!1;function Qg(){return Yi||(Yi=Dw(Jg))}function Zg(){return Yi=xf?Yi:Lw(Jg),xf=!0,Yi}const Df=(...t)=>{Qg().render(...t)},Lb=(...t)=>{Zg().hydrate(...t)},Mb=(...t)=>{const e=Qg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=em(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},ax=(...t)=>{const e=Zg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=em(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function em(t){return Ae(t)?document.querySelector(t):t}let Lf=!1;const lx=()=>{Lf||(Lf=!0,kb(),Db())};var Fb=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let tm;const Ma=t=>tm=t,nm=Symbol();function pc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xi||(Xi={}));function Ub(){const t=au(!0),e=t.run(()=>Dn({}));let n=[],s=[];const i=Zs({install(r){Ma(i),i._a=r,r.provide(nm,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Fb?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const sm=()=>{};function Mf(t,e,n,s=sm){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&$p()&&iE(i),i}function ks(t,...e){t.slice().forEach(n=>{n(...e)})}function gc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];pc(i)&&pc(s)&&t.hasOwnProperty(n)&&!De(s)&&!xn(s)?t[n]=gc(i,s):t[n]=s}return t}const Bb=Symbol();function $b(t){return!pc(t)||!t.hasOwnProperty(Bb)}const{assign:Cn}=Object;function Hb(t){return!!(De(t)&&t.effect)}function jb(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=UE(n.state.value[t]);return Cn(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Zs(yt(()=>{Ma(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return l=im(t,c,e,n,s,!0),l.$reset=function(){const h=i?i():{};this.$patch(f=>{Cn(f,h)})},l}function im(t,e,n={},s,i,r){let o;const a=Cn({actions:{}},n),l={deep:!0};let c,u,h=Zs([]),f=Zs([]),g;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Dn({});let w;function S(N){let T;c=u=!1,typeof N=="function"?(N(s.state.value[t]),T={type:Xi.patchFunction,storeId:t,events:g}):(gc(s.state.value[t],N),T={type:Xi.patchObject,payload:N,storeId:t,events:g});const U=w=Symbol();Aa().then(()=>{w===U&&(c=!0)}),u=!0,ks(h,T,s.state.value[t])}const v=sm;function p(){o.stop(),h=[],f=[],s._s.delete(t)}function y(N,T){return function(){Ma(s);const U=Array.from(arguments),H=[],q=[];function F(pe){H.push(pe)}function Z(pe){q.push(pe)}ks(f,{args:U,name:N,store:A,after:F,onError:Z});let $;try{$=T.apply(this&&this.$id===t?this:A,U)}catch(pe){throw ks(q,pe),pe}return $ instanceof Promise?$.then(pe=>(ks(H,pe),pe)).catch(pe=>(ks(q,pe),Promise.reject(pe))):(ks(H,$),$)}}const b={_p:s,$id:t,$onAction:Mf.bind(null,f),$patch:S,$reset:v,$subscribe(N,T={}){const U=Mf(h,N,T.detached,()=>H()),H=o.run(()=>js(()=>s.state.value[t],q=>{(T.flush==="sync"?u:c)&&N({storeId:t,type:Xi.direct,events:g},q)},Cn({},l,T)));return U},$dispose:p},A=pi(b);s._s.set(t,A);const P=s._e.run(()=>(o=au(),o.run(()=>e())));for(const N in P){const T=P[N];if(De(T)&&!Hb(T)||xn(T))r||(_&&$b(T)&&(De(T)?T.value=_[N]:gc(T,_[N])),s.state.value[t][N]=T);else if(typeof T=="function"){const U=y(N,T);P[N]=U,a.actions[N]=T}}return Cn(A,P),Cn(re(A),P),Object.defineProperty(A,"$state",{get:()=>s.state.value[t],set:N=>{S(T=>{Cn(T,N)})}}),s._p.forEach(N=>{Cn(A,o.run(()=>N({store:A,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(A.$state,_),c=!0,u=!0,A}function Wb(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=mn();return a=a||c&&At(nm,null),a&&Ma(a),a=tm,a._s.has(s)||(r?im(s,e,i,a):jb(s,i,a)),a._s.get(s)}return o.$id=s,o}const Fa=Wb("mainStore",{state:()=>({rootFolder:{name:"Root",id:null,path:[]},user:null,toast:!1,toastCode:"",toastContent:"",createFolderModal:!1,uploadFileModal:!1,currentFolder:null,userFolders:[],userFiles:[]}),actions:{setUser(t){this.user=t},setError(t){this.toast=!0,this.toastCode="error",this.toastContent=t,setTimeout(()=>{this.toast=!1},5e3)},setSuccess(t){this.toast=!0,this.toastCode="success",this.toastContent=t,setTimeout(()=>{this.toast=!1},5e3)},closeToast(){this.toast=!1},setCreateFolderModal(t){this.createFolderModal=t},setUploadFileModal(t){this.uploadFileModal=t},setCurrentFolder(t){this.currentFolder=t},setUserFolders(t){this.userFolders=t},setUserFiles(t){this.userFiles=t}},getters:{getToast(){return this.toast},getCurrentFolder(){return this.currentFolder}}}),Vb={key:0,class:"absolute top-5 right-5 z-50 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-md",role:"alert"},Kb={key:0,"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},qb=ne("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1),zb=[qb],Gb={key:1,"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Yb=ne("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),Xb=[Yb],Jb=ne("span",{class:"sr-only"},"Error icon",-1),Qb={class:"ml-3 text-sm font-normal"},Zb=ne("span",{class:"sr-only"},"Close",-1),e0=ne("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),t0=[Zb,e0],n0={__name:"ToastNotification",setup(t){const e=Fa();return(n,s)=>ot(e).toast?(cn(),Vs("div",Vb,[ne("div",{class:bs([ot(e).toastCode==="success"?"text-green-500 bg-green-100":ot(e).toastCode==="error"?"text-red-500 bg-red-100":null,"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"])},[ot(e).toastCode==="success"?(cn(),Vs("svg",Kb,zb)):wl("",!0),ot(e).toastCode==="error"?(cn(),Vs("svg",Gb,Xb)):wl("",!0),Jb],2),ne("div",Qb,Yv(ot(e).toastContent),1),ne("button",{type:"button",onClick:s[0]||(s[0]=fr(i=>ot(e).closeToast(),["prevent"])),class:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"},t0)])):wl("",!0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+rm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},am=function(t){const e=om(t);return Ua.encodeByteArray(e,!0)},Wo=function(t){return am(t).replace(/\./g,"")},Vo=function(t){try{return Ua.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){return lm(void 0,t)}function lm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!r0(n)||(t[n]=lm(t[n],e[n]));return t}function r0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=()=>o0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vo(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return a0()||l0()||c0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cm=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},um=t=>{const e=cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},u0=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},hm=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function h0(){var t;const e=(t=Ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d0(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pm(){return rm.NODE_ADMIN===!0}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function p0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=g0,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?m0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,s)}}function m0(t,e){return t.replace(_0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=pr(Vo(r[0])||""),n=pr(Vo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},y0=function(t){const e=mm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},v0=function(t){const e=mm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function qo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ff(r)&&Ff(o)){if(!qo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function w0(t,e){const n=new b0(t,e);return n.subscribe.bind(n)}class b0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");T0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Cl),i.error===void 0&&(i.error=Cl),i.complete===void 0&&(i.complete=Cl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cl(){}function I0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,L(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$a=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A0(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(t){return t===Jn?void 0:t}function A0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new S0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const N0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},O0=fe.INFO,P0={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},x0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=P0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pr{constructor(e){this.name=e,this._logLevel=O0,this._logHandler=x0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const D0=(t,e)=>e.some(n=>t instanceof n);let Uf,Bf;function L0(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M0(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,_c=new WeakMap,ym=new WeakMap,Sl=new WeakMap,Au=new WeakMap;function F0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function U0(t){if(_c.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B0(t){yc=t(yc)}function $0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Rl(this),e,...n);return ym.set(s,e.sort?e.sort():[e]),Fn(s)}:M0().includes(t)?function(...e){return t.apply(Rl(this),e),Fn(_m.get(this))}:function(...e){return Fn(t.apply(Rl(this),e))}}function H0(t){return typeof t=="function"?$0(t):(t instanceof IDBTransaction&&U0(t),D0(t,L0())?new Proxy(t,yc):t)}function Fn(t){if(t instanceof IDBRequest)return F0(t);if(Sl.has(t))return Sl.get(t);const e=H0(t);return e!==t&&(Sl.set(t,e),Au.set(e,t)),e}const Rl=t=>Au.get(t);function j0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const W0=["get","getKey","getAll","getAllKeys","count"],V0=["put","add","delete","clear"],Al=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Al.get(e))return Al.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=V0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||W0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Al.set(e,r),r}B0(t=>({...t,get:(e,n,s)=>$f(e,n)||t.get(e,n,s),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function q0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Hf="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Pr("@firebase/app"),z0="@firebase/app-compat",G0="@firebase/analytics-compat",Y0="@firebase/analytics",X0="@firebase/app-check-compat",J0="@firebase/app-check",Q0="@firebase/auth",Z0="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/database-compat",nT="@firebase/functions",sT="@firebase/functions-compat",iT="@firebase/installations",rT="@firebase/installations-compat",oT="@firebase/messaging",aT="@firebase/messaging-compat",lT="@firebase/performance",cT="@firebase/performance-compat",uT="@firebase/remote-config",hT="@firebase/remote-config-compat",fT="@firebase/storage",dT="@firebase/storage-compat",pT="@firebase/firestore",gT="@firebase/firestore-compat",mT="firebase",_T="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="[DEFAULT]",yT={[vc]:"fire-core",[z0]:"fire-core-compat",[Y0]:"fire-analytics",[G0]:"fire-analytics-compat",[J0]:"fire-app-check",[X0]:"fire-app-check-compat",[Q0]:"fire-auth",[Z0]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-rtdb-compat",[nT]:"fire-fn",[sT]:"fire-fn-compat",[iT]:"fire-iid",[rT]:"fire-iid-compat",[oT]:"fire-fcm",[aT]:"fire-fcm-compat",[lT]:"fire-perf",[cT]:"fire-perf-compat",[uT]:"fire-rc",[hT]:"fire-rc-compat",[fT]:"fire-gcs",[dT]:"fire-gcs-compat",[pT]:"fire-fst",[gT]:"fire-fst-compat","fire-js":"fire-js",[mT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,wc=new Map;function vT(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(wc.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;wc.set(e,t);for(const n of zo.values())vT(n,t);return!0}function Ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new _i("app","Firebase",ET);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=_T;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=u0()),!n)throw Un.create("no-options");const r=zo.get(i);if(r){if(qo(n,r.options)&&qo(s,r.config))return r;throw Un.create("duplicate-app",{appName:i})}const o=new k0(i);for(const l of wc.values())o.addComponent(l);const a=new wT(n,s,o);return zo.set(i,a),a}function ja(t=Ec){const e=zo.get(t);if(!e&&t===Ec)return vm();if(!e)throw Un.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let i=(s=yT[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ps.warn(a.join(" "));return}Jt(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebase-heartbeat-database",TT=1,gr="firebase-heartbeat-store";let kl=null;function Em(){return kl||(kl=j0(bT,TT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gr)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),kl}async function IT(t){try{return(await Em()).transaction(gr).objectStore(gr).get(wm(t))}catch(e){if(e instanceof Zt)ps.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ps.warn(n.message)}}}async function jf(t,e){try{const s=(await Em()).transaction(gr,"readwrite");return await s.objectStore(gr).put(e,wm(t)),s.done}catch(n){if(n instanceof Zt)ps.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ps.warn(s.message)}}}function wm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1024,ST=30*24*60*60*1e3;class RT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ST}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wf(),{heartbeatsToSend:n,unsentEntries:s}=AT(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wf(){return new Date().toISOString().substring(0,10)}function AT(t,e=CT){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Vf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?p0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await IT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vf(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){Jt(new $t("platform-logger",e=>new K0(e),"PRIVATE")),Jt(new $t("heartbeat",e=>new RT(e),"PRIVATE")),wt(vc,Hf,t),wt(vc,Hf,"esm2017"),wt("fire-js","")}NT("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="firebasestorage.googleapis.com",Tm="storageBucket",OT=2*60*1e3,PT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Zt{constructor(e,n,s=0){super(Nl(e),`Firebase Storage: ${n} (${Nl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Nl(t){return"storage/"+t}function ku(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Pe.UNKNOWN,t)}function xT(t){return new xe(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DT(t){return new xe(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Pe.UNAUTHENTICATED,t)}function MT(){return new xe(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FT(t){return new xe(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UT(){return new xe(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BT(){return new xe(Pe.CANCELED,"User canceled the upload/download.")}function $T(t){return new xe(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function HT(t){return new xe(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jT(){return new xe(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Tm+"' property when initializing the app?")}function WT(){return new xe(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VT(){return new xe(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KT(t){return new xe(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bc(t){return new xe(Pe.INVALID_ARGUMENT,t)}function Im(){return new xe(Pe.APP_DELETED,"The Firebase app was deleted.")}function qT(t){return new xe(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ji(t,e){return new xe(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ni(t){throw new xe(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(s.path==="")return s;throw HT(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),_={bucket:1,path:3},w=n===bm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",v=new RegExp(`^https?://${w}/${i}/${S}`,"i"),y=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<y.length;b++){const A=y[b],P=A.regex.exec(e);if(P){const N=P[A.indices.bucket];let T=P[A.indices.path];T||(T=""),s=new at(N,T),A.postModify(s);break}}if(s==null)throw $T(e);return s}}class zT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...S){c||(c=!0,e.apply(null,S))}function h(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function f(){r&&clearTimeout(r)}function g(S,...v){if(c){f();return}if(S){f(),u.call(null,S,...v);return}if(l()||o){f(),u.call(null,S,...v);return}s<64&&(s*=2);let y;a===1?(a=2,y=0):y=(s+Math.random())*1e3,h(y)}let _=!1;function w(S){_||(_=!0,f(),!c&&(i!==null?(S||(a=2),clearTimeout(i),h(0)):S||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function YT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){return t!==void 0}function JT(t){return typeof t=="object"&&!Array.isArray(t)}function Nu(t){return typeof t=="string"||t instanceof String}function Kf(t){return Ou()&&t instanceof Blob}function Ou(){return typeof Blob<"u"&&!h0()}function Tc(t,e,n,s){if(s<e)throw bc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw bc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Cm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new po(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ls.NO_ERROR,l=r.getStatus();if(!a||QT(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ls.ABORT;s(!1,new po(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new po(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());XT(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=ku();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Im():BT();o(l)}else{const l=UT();o(l)}};this.canceled_?n(!1,new po(!1,null,!0)):this.backoffId_=GT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class po{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function eI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iI(t,e,n,s,i,r,o=!0){const a=Cm(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nI(c,e),eI(c,n),tI(c,r),sI(c,s),new ZT(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oI(...t){const e=rI();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ou())return new Blob(t);throw new xe(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aI(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){if(typeof atob>"u")throw KT("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ol{constructor(e,n){this.data=e,this.contentType=n||null}}function cI(t,e){switch(t){case zt.RAW:return new Ol(Sm(e));case zt.BASE64:case zt.BASE64URL:return new Ol(Rm(t,e));case zt.DATA_URL:return new Ol(hI(e),fI(e))}throw ku()}function Sm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function uI(t){let e;try{e=decodeURIComponent(t)}catch{throw Ji(zt.DATA_URL,"Malformed data URL.")}return Sm(e)}function Rm(t,e){switch(t){case zt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ji(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ji(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lI(e)}catch(i){throw i.message.includes("polyfill")?i:Ji(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Am{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ji(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=dI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function hI(t){const e=new Am(t);return e.base64?Rm(zt.BASE64,e.rest):uI(e.rest)}function fI(t){return new Am(t).contentType}function dI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){let s=0,i="";Kf(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kf(this.data_)){const s=this.data_,i=aI(s,e,n);return i===null?null:new Rn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Rn(s,!0)}}static getBlob(...e){if(Ou()){const n=e.map(s=>s instanceof Rn?s.data_:s);return new Rn(oI.apply(null,n))}else{const n=e.map(o=>Nu(o)?cI(zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Rn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){let e;try{e=JSON.parse(t)}catch{return null}return JT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gI(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function km(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){return e}class it{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||mI}}let go=null;function _I(t){return!Nu(t)||t.length<2?t:km(t)}function Nm(){if(go)return go;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(r,o){return _I(o)}const n=new it("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=s,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),go=t,go}function yI(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new at(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function vI(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return yI(s,t),s}function Om(t,e,n){const s=Pu(e);return s===null?null:vI(t,s,n)}function EI(t,e,n,s){const i=Pu(e);if(i===null||!Nu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),g=Wa(f,n,s),_=Cm({alt:"media",token:c});return g+_})[0]}function wI(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="prefixes",zf="items";function bI(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[qf])for(const i of n[qf]){const r=i.replace(/\/$/,""),o=t._makeStorageReference(new at(e,r));s.prefixes.push(o)}if(n[zf])for(const i of n[zf]){const r=t._makeStorageReference(new at(e,i.name));s.items.push(r)}return s}function TI(t,e,n){const s=Pu(n);return s===null?null:bI(t,e,s)}class xu{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){if(!t)throw ku()}function II(t,e){function n(s,i){const r=Om(t,i,e);return Du(r!==null),r}return n}function CI(t,e){function n(s,i){const r=TI(t,e,i);return Du(r!==null),r}return n}function SI(t,e){function n(s,i){const r=Om(t,i,e);return Du(r!==null),EI(r,i,t.host,t._protocol)}return n}function Lu(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=MT():i=LT():n.getStatus()===402?i=DT(t.bucket):n.getStatus()===403?i=FT(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function RI(t){const e=Lu(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=xT(t.path)),r.serverResponse=i.serverResponse,r}return n}function AI(t,e,n,s,i){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",n&&n.length>0&&(r.delimiter=n),s&&(r.pageToken=s),i&&(r.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Wa(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new xu(a,l,CI(t,e.bucket),c);return u.urlParams=r,u.errorHandler=Lu(e),u}function kI(t,e,n){const s=e.fullServerUrl(),i=Wa(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new xu(i,r,SI(t,n),o);return a.errorHandler=RI(e),a}function NI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function OI(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=NI(null,e)),s}function PI(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=OI(e,s,i),u=wI(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=Rn.getBlob(h,s,f);if(g===null)throw WT();const _={name:c.fullPath},w=Wa(r,t.host,t._protocol),S="POST",v=t.maxUploadRetryTime,p=new xu(w,S,II(t,n),v);return p.urlParams=_,p.headers=o,p.body=g.uploadData(),p.errorHandler=Lu(e),p}class xI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Ni("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ni("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ni("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ni("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ni("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DI extends xI{initXhr(){this.xhr_.responseType="text"}}function Mu(){return new DI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return km(this._location.path)}get storage(){return this._service}get parent(){const e=pI(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qT(e)}}function LI(t,e,n){t._throwIfRoot("uploadBytes");const s=PI(t.storage,t._location,Nm(),new Rn(e,!0),n);return t.storage.makeRequestWithTokens(s,Mu).then(i=>({metadata:i,ref:t}))}function MI(t){const e={prefixes:[],items:[]};return Pm(t,e).then(()=>e)}async function Pm(t,e,n){const i=await FI(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Pm(t,e,i.nextPageToken)}function FI(t,e){e!=null&&typeof e.maxResults=="number"&&Tc("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=AI(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,Mu)}function UI(t){t._throwIfRoot("getDownloadURL");const e=kI(t.storage,t._location,Nm());return t.storage.makeRequestWithTokens(e,Mu).then(n=>{if(n===null)throw VT();return n})}function BI(t,e){const n=gI(t._location.path,e),s=new at(t._location.bucket,n);return new gs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t){return/^[A-Za-z]+:\/\//.test(t)}function HI(t,e){return new gs(t,e)}function xm(t,e){if(t instanceof Fu){const n=t;if(n._bucket==null)throw jT();const s=new gs(n,n._bucket);return e!=null?xm(s,e):s}else return e!==void 0?BI(t,e):t}function jI(t,e){if(e&&$I(e)){if(t instanceof Fu)return HI(t,e);throw bc("To use ref(service, url), the first argument must be a Storage instance.")}else return xm(t,e)}function Gf(t,e){const n=e==null?void 0:e[Tm];return n==null?null:at.makeFromBucketSpec(n,t)}function WI(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:fm(i,t.app.options.projectId))}class Fu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=bm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OT,this._maxUploadRetryTime=PT,this._requests=new Set,i!=null?this._bucket=at.makeFromBucketSpec(i,this._host):this._bucket=Gf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=Gf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new zT(Im());{const o=iI(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Yf="@firebase/storage",Xf="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="storage";function Lm(t,e,n){return t=Ge(t),LI(t,e,n)}function cx(t){return t=Ge(t),MI(t)}function ux(t){return t=Ge(t),UI(t)}function Mm(t,e){return t=Ge(t),jI(t,e)}function Uu(t=ja(),e){t=Ge(t);const s=Ha(t,Dm).getImmediate({identifier:e}),i=um("storage");return i&&VI(s,...i),s}function VI(t,e,n,s={}){WI(t,e,n,s)}function KI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fu(n,s,i,e,Is)}function qI(){Jt(new $t(Dm,KI,"PUBLIC").setMultipleInstances(!0)),wt(Yf,Xf,""),wt(Yf,Xf,"esm2017")}qI();function Bu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Fm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zI=Fm,Um=new _i("auth","Firebase",Fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Pr("@firebase/auth");function ko(t,...e){Jf.logLevel<=fe.ERROR&&Jf.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw $u(t,...e)}function Yt(t,...e){return $u(t,...e)}function GI(t,e,n){const s=Object.assign(Object.assign({},zI()),{[e]:n});return new _i("auth","Firebase",s).create(e,{appName:t.name})}function $u(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Um.create(t,...e)}function X(t,e,...n){if(!t)throw $u(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function dn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;function on(t){dn(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){const n=Ha(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(qo(r,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function XI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JI(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JI()||f0()||"connection"in navigator)?navigator.onLine:!0}function ZI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ru()||dm()}get(){return QI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new xr(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,s,i={}){return $m(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bm.fetch()(Hm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function $m(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},eC),e);try{const i=new nC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GI(t,u,c);Ht(t,u)}}catch(i){if(i instanceof Zt)throw i;Ht(t,"network-request-failed")}}async function Mr(t,e,n,s,i={}){const r=await Lr(t,e,n,s,i);return"mfaPendingCredential"in r&&Ht(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Hm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Hu(t.config,i):`${t.config.apiScheme}://${i}`}class nC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Yt(this.auth,"network-request-failed")),tC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Yt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function iC(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rC(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),i=ju(s);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qi(Pl(i.auth_time)),issuedAtTime:Qi(Pl(i.iat)),expirationTime:Qi(Pl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pl(t){return Number(t)*1e3}function ju(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vo(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oC(t){const e=ju(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&aC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function aC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ri(t,iC(n,{idToken:s}));X(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?hC(r.providerUserInfo):[],a=uC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cC(t){const e=Ge(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function hC(t){return t.map(e=>{var{providerId:n}=e,s=Bu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){const n=await $m(t,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Hm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await fC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mr;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rC(this,e)}reload(){return cC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:b,isAnonymous:A,providerData:P,stsTokenManager:N}=n;X(y&&N,e,"internal-error");const T=mr.fromJSON(this.name,N);X(typeof y=="string",e,"internal-error"),wn(h,e.name),wn(f,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof A=="boolean",e,"internal-error"),wn(g,e.name),wn(_,e.name),wn(w,e.name),wn(S,e.name),wn(v,e.name),wn(p,e.name);const U=new cs({uid:y,auth:e,email:f,emailVerified:b,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:T,createdAt:v,lastLoginAt:p});return P&&Array.isArray(P)&&(U.providerData=P.map(H=>Object.assign({},H))),S&&(U._redirectEventId=S),U}static async _fromIdTokenResponse(e,n,s=!1){const i=new mr;i.updateFromServerResponse(n);const r=new cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Go(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wm.type="NONE";const ed=Wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=No(this.userKey,i.apiKey,r),this.fullPersistenceKey=No("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ks(on(ed),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||on(ed);const o=No(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=cs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ks(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ks(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Ym(e))return"Webos";if(Wu(e))return"Safari";if((e.includes("chrome/")||Km(e))&&!e.includes("edge/"))return"Chrome";if(zm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vm(t=st()){return/firefox\//i.test(t)}function Wu(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Km(t=st()){return/crios\//i.test(t)}function qm(t=st()){return/iemobile/i.test(t)}function zm(t=st()){return/android/i.test(t)}function Gm(t=st()){return/blackberry/i.test(t)}function Ym(t=st()){return/webos/i.test(t)}function Va(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dC(t=st()){var e;return Va(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pC(){return d0()&&document.documentMode===10}function Xm(t=st()){return Va(t)||zm(t)||Ym(t)||Gm(t)||/windows phone/i.test(t)||qm(t)}function gC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=td(st());break;case"Worker":n=`${td(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new mC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Fr(t){return Ge(t)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=w0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function yC(t,e,n){const s=Fr(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Qm(e),{host:o,port:a}=vC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EC()}function Qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vC(t){const e=Qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:sd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:sd(o)}}}function sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function Zm(t,e){return Lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return Mr(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function TC(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Vu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _r(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new _r(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bC(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Zm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Mr(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="http://localhost";class ms extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Bu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ms(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SC(t){const e=$i(Hi(t)).link,n=e?$i(Hi(e)).deep_link_id:null,s=$i(Hi(t)).deep_link_id;return(s?$i(Hi(s)).link:null)||s||n||e||t}class Ku{constructor(e){var n,s,i,r,o,a;const l=$i(Hi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=CC((i=l.mode)!==null&&i!==void 0?i:null);X(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SC(e);try{return new Ku(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return _r._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ku.parseLink(n);return X(s,"argument-error"),_r._fromEmailAndCode(e,s.code,s.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ur{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ur{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ur{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return Mr(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await cs._fromIdTokenResponse(e,s,i),o=id(s);return new _s({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=id(s);return new _s({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Zt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Yo(e,n,s,i)}}function t_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,r,e,s):r})}async function AC(t,e,n=!1){const s=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ri(t,t_(s,i,e,t),n);X(r.idToken,s,"internal-error");const o=ju(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),_s._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ht(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){const s="signIn",i=await t_(t,s,e),r=await _s._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function NC(t,e){return n_(Fr(t),e)}async function hx(t,e,n){const s=Fr(t),i=await RC(s,{returnSecureToken:!0,email:e,password:n}),r=await _s._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function fx(t,e,n){return NC(Ge(t),vi.credential(e,n))}function dx(t,e){return OC(Ge(t),null,e)}async function OC(t,e,n){const{auth:s}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await ri(t,Zm(s,r));await t._updateTokensIfNecessary(o,!0)}function s_(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function PC(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function xC(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function px(t){return Ge(t).signOut()}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(){const t=st();return Wu(t)||Va(t)}const LC=1e3,MC=10;class r_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DC()&&gC(),this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);pC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r_.type="LOCAL";const FC=r_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o_.type="SESSION";const a_=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ka(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await UC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=qu("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function $C(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function HC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WC(){return l_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebaseLocalStorageDb",VC=1,Jo="firebaseLocalStorage",u_="fbase_key";class Br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qa(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function KC(){const t=indexedDB.deleteDatabase(c_);return new Br(t).toPromise()}function Cc(){const t=indexedDB.open(c_,VC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Jo,{keyPath:u_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Jo)?e(s):(s.close(),await KC(),e(await Cc()))})})}async function rd(t,e,n){const s=qa(t,!0).put({[u_]:e,value:n});return new Br(s).toPromise()}async function qC(t,e){const n=qa(t,!1).get(e),s=await new Br(n).toPromise();return s===void 0?null:s.value}function od(t,e){const n=qa(t,!0).delete(e);return new Br(n).toPromise()}const zC=800,GC=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>GC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(WC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HC(),!this.activeServiceWorker)return;this.sender=new BC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cc();return await rd(e,Xo,"1"),await od(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=qa(i,!1).getAll();return new Br(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const YC=h_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function JC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Yt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",XC().appendChild(s)})}function QC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){return e?on(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eS(t){return n_(t.auth,new zu(t),t.bypassAuthState)}function tS(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),kC(n,new zu(t),t.bypassAuthState)}async function nS(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),AC(n,new zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eS;case"linkViaPopup":case"linkViaRedirect":return nS;case"reauthViaPopup":case"reauthViaRedirect":return tS;default:Ht(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new xr(2e3,1e4);class xs extends f_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sS.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="pendingRedirect",Oo=new Map;class rS extends f_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const s=await oS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oS(t,e){const n=cS(e),s=lS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function aS(t,e){Oo.set(t._key(),e)}function lS(t){return on(t._redirectPersistence)}function cS(t){return No(iS,t.config.apiKey,t.name)}async function uS(t,e,n=!1){const s=Fr(t),i=ZC(s,e),o=await new rS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=10*60*1e3;class fS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!d_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}}function ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mS=/^https?/;async function _S(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pS(t);for(const n of e)try{if(yS(n))return}catch{}Ht(t,"unauthorized-domain")}function yS(t){const e=Ic(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!mS.test(n))return!1;if(gS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new xr(3e4,6e4);function ld(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ES(t){return new Promise((e,n)=>{var s,i,r;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(Yt(t,"network-request-failed"))},timeout:vS.get()})}if(!((i=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Xt().gapi)===null||r===void 0)&&r.load)o();else{const a=QC("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},JC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Po=null,e})}let Po=null;function wS(t){return Po=Po||ES(t),Po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new xr(5e3,15e3),TS="__/auth/iframe",IS="emulator/auth/iframe",CS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RS(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hu(e,IS):`https://${t.config.authDomain}/${TS}`,s={apiKey:e.apiKey,appName:t.name,v:Is},i=SS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${yi(s).slice(1)}`}async function AS(t){const e=await wS(t),n=Xt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:RS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=Xt().setTimeout(()=>{r(o)},bS.get());function l(){Xt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NS=500,OS=600,PS="_blank",xS="http://localhost";class cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DS(t,e,n,s=NS,i=OS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=st().toLowerCase();n&&(a=Km(c)?PS:n),Vm(c)&&(e=e||xS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(dC(c)&&a!=="_self")return LS(e||"",a),new cd(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new cd(h)}function LS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="__/auth/handler",FS="emulator/auth/handler";function ud(t,e,n,s,i,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Is,eventId:i};if(e instanceof e_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ur){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${US(t)}?${yi(a).slice(1)}`}function US({config:t}){return t.emulator?Hu(t,FS):`https://${t.authDomain}/${MS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class BS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a_,this._completeRedirectFn=uS,this._overrideRedirectResult=aS}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ud(e,n,s,Ic(),i);return DS(e,o,qu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),$C(ud(e,n,s,Ic(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AS(e),s=new fS(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xl];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_S(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||Wu()||Va()}}const $S=BS;var hd="@firebase/auth",fd="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WS(t){Jt(new $t("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{X(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},u=new _C(a,l,c);return XI(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Jt(new $t("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(s=>new HS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(hd,fd,jS(t)),wt(hd,fd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=5*60,KS=hm("authIdTokenMaxAge")||VS;let dd=null;const qS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>KS)return;const i=n==null?void 0:n.token;dd!==i&&(dd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $r(t=ja()){const e=Ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YI(t,{popupRedirectResolver:$S,persistence:[YC,FC,a_]}),s=hm("authTokenSyncURL");if(s){const r=qS(s);PC(n,r,()=>r(n.currentUser)),s_(n,o=>r(o))}const i=cm("auth");return i&&yC(n,`http://${i}`),n}WS("Browser");const zS={class:"relative w-full h-full max-w-md md:h-auto mx-auto"},GS={class:"relative bg-white rounded-lg shadow"},YS=["onClick"],XS=ne("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),JS=ne("span",{class:"sr-only"},"Close modal",-1),QS=[XS,JS],ZS={class:"px-6 py-6 lg:px-8"},eR=ne("h3",{class:"mb-4 text-xl font-medium text-gray-900"},"Create new folder",-1),tR=["onSubmit"],nR=ne("label",{for:"folderName",class:"block mb-2 text-sm font-medium text-gray-900"},"Folder name",-1),sR=ne("button",{type:"submit",class:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Create",-1),iR={__name:"CreateFolderModal",setup(t){const e=Fa(),n=Dn(""),s=async()=>{const r=Uu();if(n.value)if(n.value.length>3){const a=$r().currentUser,l={name:n.value,userId:a.uid,createdAt:new Date,files:[]},c=await Mm(r,`${l.userId}/${l.name}/.file`);await Lm(c,new Blob).then(()=>{e.setSuccess(`${l.name} - folder created successfully`),e.setCreateFolderModal(!1),this.$emit("getListAll")}).catch(()=>{e.setError("Something went wrong")})}else e.setError("Folder name must be at least 3 characters");else e.setError("Folder name can not be empty")},i=()=>{e.setCreateFolderModal(!1)};return(r,o)=>(cn(),Vs("div",{class:bs([ot(e).createFolderModal?null:"hidden","fixed top-0 left-0 right-0 z-40 w-full p-8 overflow-x-hidden overflow-y-auto md:inset-0 h-modal bg-black/50 md:h-full"])},[ne("div",zS,[ne("div",GS,[ne("button",{type:"button",onClick:fr(i,["prevent"]),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-hide":"authentication-modal"},QS,8,YS),ne("div",ZS,[eR,ne("form",{class:"space-y-6",onSubmit:fr(s,["prevent"])},[ne("div",null,[nR,_w(ne("input",{type:"text",name:"folderName",id:"folderName","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"My folder",required:""},null,512),[[jo,n.value]])]),sR],40,tR)])])])],2))}},rR={class:"relative w-full h-full max-w-md md:h-auto mx-auto"},oR={class:"relative bg-white rounded-lg shadow"},aR=["onClick"],lR=ne("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),cR=ne("span",{class:"sr-only"},"Close modal",-1),uR=[lR,cR],hR={class:"px-6 py-6 lg:px-8"},fR=ne("h3",{class:"mb-4 text-xl font-medium text-gray-900"},"Create new folder",-1),dR=["onSubmit"],pR={class:"flex items-center justify-center w-full"},gR={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"},mR=jw('<div class="flex flex-col items-center justify-center pt-5 pb-6"><svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg><p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p></div>',1),_R=ne("button",{type:"submit",class:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Upload",-1),yR={__name:"UploadFileModal",setup(t){const e=Fa();let n=null;const s=a=>{n=a.target.files[0]},i=Uu(),r=()=>{e.setUploadFileModal(!1)},o=async()=>{const l=$r().currentUser,c=n,u={name:c.name,userId:l.uid,createdAt:new Date,files:[]},h=await Mm(i,`${u.userId}/${u.name}`);Lm(h,c).then(()=>{e.setSuccess("File uploaded successfully"),e.setUploadFileModal(!1),this.$emit("getListAll")})};return(a,l)=>(cn(),Vs("div",{class:bs([ot(e).uploadFileModal?null:"hidden","fixed top-0 left-0 right-0 z-50 w-full p-8 overflow-x-hidden overflow-y-auto md:inset-0 h-modal bg-black/50 md:h-full"])},[ne("div",rR,[ne("div",oR,[ne("button",{type:"button",onClick:fr(r,["prevent"]),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-hide":"authentication-modal"},uR,8,aR),ne("div",hR,[fR,ne("form",{class:"space-y-6",onSubmit:fr(o,["prevent"])},[ne("div",pR,[ne("label",gR,[mR,ne("input",{id:"dropzone-file",onChange:s,type:"file",class:"hidden"},null,32)])]),_R],40,dR)])])])],2))}},vR={__name:"App",setup(t){return Or(()=>{document.title="Home | My Dropbox"}),(e,n)=>{const s=vw("router-view");return cn(),Vs(je,null,[Ee(s),Ee(n0),Ee(iR),Ee(yR)],64)}}},ER="modulepreload",wR=function(t){return"/"+t},pd={},Oi=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=wR(r),r in pd)return;pd[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ER,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function bR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Dl(t,e){const n={};for(const s in e){const i=e[s];n[s]=jt(i)?i.map(t):t(i)}return n}const Zi=()=>{},jt=Array.isArray,TR=/\/$/,IR=t=>t.replace(TR,"");function Ll(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AR(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function CR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&oi(e.matched[s],n.matched[i])&&p_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function p_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RR(t[n],e[n]))return!1;return!0}function RR(t,e){return jt(t)?md(t,e):jt(e)?md(e,t):t===e}function md(t,e){return jt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function AR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var yr;(function(t){t.pop="pop",t.push="push"})(yr||(yr={}));var er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(er||(er={}));function kR(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IR(t)}const NR=/^[^#]+#/;function OR(t,e){return t.replace(NR,"#")+e}function PR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const za=()=>({left:window.pageXOffset,top:window.pageYOffset});function xR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=PR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function DR(t,e){Sc.set(t,e)}function LR(t){const e=Sc.get(t);return Sc.delete(t),e}let MR=()=>location.protocol+"//"+location.host;function g_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),gd(l,"")}return gd(n,t)+s+i}function FR(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const g=g_(t,location),_=n.value,w=e.value;let S=0;if(f){if(n.value=g,e.value=f,o&&o===_){o=null;return}S=w?f.position-w.position:0}else s(g);i.forEach(v=>{v(n.value,_,{delta:S,type:yr.pop,direction:S?S>0?er.forward:er.back:er.unknown})})};function l(){o=n.value}function c(f){i.push(f);const g=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:za()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function yd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?za():null}}function UR(t){const{history:e,location:n}=window,s={value:g_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:MR()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,yd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ge({},i.value,e.state,{forward:l,scroll:za()});r(u.current,u,!0);const h=ge({},yd(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function BR(t){t=kR(t);const e=UR(t),n=FR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ge({location:"",base:t,go:s,createHref:OR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function $R(t){return typeof t=="string"||t&&typeof t=="object"}function m_(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},__=Symbol("");var vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vd||(vd={}));function ai(t,e){return ge(new Error,{type:t,[__]:!0},e)}function en(t,e){return t instanceof Error&&__ in t&&(e==null||!!(t.type&e))}const Ed="[^/]+?",HR={sensitive:!1,strict:!1,start:!0,end:!0},jR=/[.+*?^${}()[\]/\\]/g;function WR(t,e){const n=ge({},HR,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(jR,"\\$&"),g+=40;else if(f.type===1){const{value:_,repeatable:w,optional:S,regexp:v}=f;r.push({name:_,repeatable:w,optional:S});const p=v||Ed;if(p!==Ed){g+=10;try{new RegExp(`(${p})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${p}): `+b.message)}}let y=w?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;h||(y=S&&c.length<2?`(?:/${y})`:"/"+y),S&&(y+="?"),i+=y,g+=20,S&&(g+=-8),w&&(g+=-20),p===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",_=r[f-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:S}=g,v=_ in c?c[_]:"";if(jt(v)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const p=jt(v)?v.join("/"):v;if(!p)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=p}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function VR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function KR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=VR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wd(s))return 1;if(wd(i))return-1}return i.length-s.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qR={type:0,value:""},zR=/[a-zA-Z0-9_]/;function GR(t){if(!t)return[[]];if(t==="/")return[[qR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:zR.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function YR(t,e,n){const s=WR(GR(t.path),n),i=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function XR(t,e){const n=[],s=new Map;e=Id({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const g=!f,_=JR(u);_.aliasOf=f&&f.record;const w=Id(e,u),S=[_];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of y)S.push(ge({},_,{components:f?f.record.components:_.components,path:b,aliasOf:f?f.record:_}))}let v,p;for(const y of S){const{path:b}=y;if(h&&b[0]!=="/"){const A=h.record.path,P=A[A.length-1]==="/"?"":"/";y.path=h.record.path+(b&&P+b)}if(v=YR(y,h,w),f?f.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),g&&u.name&&!Td(v)&&o(u.name)),_.children){const A=_.children;for(let P=0;P<A.length;P++)r(A[P],v,f&&f.children[P])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return p?()=>{o(p)}:Zi}function o(u){if(m_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&KR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!y_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Td(u)&&s.set(u.record.name,u)}function c(u,h){let f,g={},_,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ai(1,{location:u});w=f.record.name,g=ge(bd(h.params,f.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&bd(u.params,f.keys.map(p=>p.name))),_=f.stringify(g)}else if("path"in u)_=u.path,f=n.find(p=>p.re.test(_)),f&&(g=f.parse(_),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(p=>p.re.test(h.path)),!f)throw ai(1,{location:u,currentLocation:h});w=f.record.name,g=ge({},h.params,u.params),_=f.stringify(g)}const S=[];let v=f;for(;v;)S.unshift(v.record),v=v.parent;return{name:w,path:_,params:g,matched:S,meta:ZR(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function bd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function JR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:QR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function QR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZR(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Id(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function y_(t,e){return e.children.some(n=>n===t||y_(t,n))}const v_=/#/g,eA=/&/g,tA=/\//g,nA=/=/g,sA=/\?/g,E_=/\+/g,iA=/%5B/g,rA=/%5D/g,w_=/%5E/g,oA=/%60/g,b_=/%7B/g,aA=/%7C/g,T_=/%7D/g,lA=/%20/g;function Gu(t){return encodeURI(""+t).replace(aA,"|").replace(iA,"[").replace(rA,"]")}function cA(t){return Gu(t).replace(b_,"{").replace(T_,"}").replace(w_,"^")}function Rc(t){return Gu(t).replace(E_,"%2B").replace(lA,"+").replace(v_,"%23").replace(eA,"%26").replace(oA,"`").replace(b_,"{").replace(T_,"}").replace(w_,"^")}function uA(t){return Rc(t).replace(nA,"%3D")}function hA(t){return Gu(t).replace(v_,"%23").replace(sA,"%3F")}function fA(t){return t==null?"":hA(t).replace(tA,"%2F")}function Qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(E_," "),o=r.indexOf("="),a=Qo(o<0?r:r.slice(0,o)),l=o<0?null:Qo(r.slice(o+1));if(a in e){let c=e[a];jt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cd(t){let e="";for(let n in t){const s=t[n];if(n=uA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(s)?s.map(r=>r&&Rc(r)):[s&&Rc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function pA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=jt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const gA=Symbol(""),Sd=Symbol(""),Yu=Symbol(""),Xu=Symbol(""),Ac=Symbol("");function Pi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Sn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ai(4,{from:n,to:e})):h instanceof Error?a(h):$R(h)?a(ai(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ml(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(mA(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Sn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=bR(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Sn(f,n,s,r,o)()}))}}return i}function mA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rd(t){const e=At(Yu),n=At(Xu),s=yt(()=>e.resolve(ot(t.to))),i=yt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(oi.bind(null,u));if(f>-1)return f;const g=Ad(l[c-2]);return c>1&&Ad(u)===g&&h[h.length-1].path!==g?h.findIndex(oi.bind(null,l[c-2])):f}),r=yt(()=>i.value>-1&&EA(n.params,s.value.params)),o=yt(()=>i.value>-1&&i.value===n.matched.length-1&&p_(n.params,s.value.params));function a(l={}){return vA(l)?e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Zi):Promise.resolve()}return{route:s,href:yt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const _A=Pa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rd,setup(t,{slots:e}){const n=pi(Rd(t)),{options:s}=At(Yu),i=yt(()=>({[kd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Cu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),yA=_A;function vA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!jt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kd=(t,e,n)=>t??e??n,wA=Pa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(Ac),i=yt(()=>t.route||s.value),r=At(Sd,0),o=yt(()=>{let c=ot(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=yt(()=>i.value.matched[o.value]);Ro(Sd,yt(()=>o.value+1)),Ro(gA,a),Ro(Ac,i);const l=Dn();return js(()=>[l.value,a.value,t.name],([c,u,h],[f,g,_])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!oi(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Nd(n.default,{Component:f,route:c});const g=h.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=Cu(f,ge({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Nd(n.default,{Component:S,route:c})||S}}});function Nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bA=wA;function TA(t){const e=XR(t.routes,t),n=t.parseQuery||dA,s=t.stringifyQuery||Cd,i=t.history,r=Pi(),o=Pi(),a=Pi(),l=DE(bn);let c=bn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,C=>""+C),h=Dl.bind(null,fA),f=Dl.bind(null,Qo);function g(C,j){let M,z;return m_(C)?(M=e.getRecordMatcher(C),z=j):z=C,e.addRoute(z,M)}function _(C){const j=e.getRecordMatcher(C);j&&e.removeRoute(j)}function w(){return e.getRoutes().map(C=>C.record)}function S(C){return!!e.getRecordMatcher(C)}function v(C,j){if(j=ge({},j||l.value),typeof C=="string"){const d=Ll(n,C,j.path),m=e.resolve({path:d.path},j),E=i.createHref(d.fullPath);return ge(d,m,{params:f(m.params),hash:Qo(d.hash),redirectedFrom:void 0,href:E})}let M;if("path"in C)M=ge({},C,{path:Ll(n,C.path,j.path).path});else{const d=ge({},C.params);for(const m in d)d[m]==null&&delete d[m];M=ge({},C,{params:h(C.params)}),j.params=h(j.params)}const z=e.resolve(M,j),ue=C.hash||"";z.params=u(f(z.params));const ke=CR(s,ge({},C,{hash:cA(ue),path:z.path})),te=i.createHref(ke);return ge({fullPath:ke,hash:ue,query:s===Cd?pA(C.query):C.query||{}},z,{redirectedFrom:void 0,href:te})}function p(C){return typeof C=="string"?Ll(n,C,l.value.path):ge({},C)}function y(C,j){if(c!==C)return ai(8,{from:j,to:C})}function b(C){return N(C)}function A(C){return b(ge(p(C),{replace:!0}))}function P(C){const j=C.matched[C.matched.length-1];if(j&&j.redirect){const{redirect:M}=j;let z=typeof M=="function"?M(C):M;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=p(z):{path:z},z.params={}),ge({query:C.query,hash:C.hash,params:"path"in z?{}:C.params},z)}}function N(C,j){const M=c=v(C),z=l.value,ue=C.state,ke=C.force,te=C.replace===!0,d=P(M);if(d)return N(ge(p(d),{state:typeof d=="object"?ge({},ue,d.state):ue,force:ke,replace:te}),j||M);const m=M;m.redirectedFrom=j;let E;return!ke&&SR(s,z,M)&&(E=ai(16,{to:m,from:z}),zn(z,z,!0,!1)),(E?Promise.resolve(E):U(m,z)).catch(I=>en(I)?en(I,2)?I:Ot(I):be(I,m,z)).then(I=>{if(I){if(en(I,2))return N(ge({replace:te},p(I.to),{state:typeof I.to=="object"?ge({},ue,I.to.state):ue,force:ke}),j||m)}else I=q(m,z,!0,te,ue);return H(m,z,I),I})}function T(C,j){const M=y(C,j);return M?Promise.reject(M):Promise.resolve()}function U(C,j){let M;const[z,ue,ke]=IA(C,j);M=Ml(z.reverse(),"beforeRouteLeave",C,j);for(const d of z)d.leaveGuards.forEach(m=>{M.push(Sn(m,C,j))});const te=T.bind(null,C,j);return M.push(te),Ns(M).then(()=>{M=[];for(const d of r.list())M.push(Sn(d,C,j));return M.push(te),Ns(M)}).then(()=>{M=Ml(ue,"beforeRouteUpdate",C,j);for(const d of ue)d.updateGuards.forEach(m=>{M.push(Sn(m,C,j))});return M.push(te),Ns(M)}).then(()=>{M=[];for(const d of C.matched)if(d.beforeEnter&&!j.matched.includes(d))if(jt(d.beforeEnter))for(const m of d.beforeEnter)M.push(Sn(m,C,j));else M.push(Sn(d.beforeEnter,C,j));return M.push(te),Ns(M)}).then(()=>(C.matched.forEach(d=>d.enterCallbacks={}),M=Ml(ke,"beforeRouteEnter",C,j),M.push(te),Ns(M))).then(()=>{M=[];for(const d of o.list())M.push(Sn(d,C,j));return M.push(te),Ns(M)}).catch(d=>en(d,8)?d:Promise.reject(d))}function H(C,j,M){for(const z of a.list())z(C,j,M)}function q(C,j,M,z,ue){const ke=y(C,j);if(ke)return ke;const te=j===bn,d=Ps?history.state:{};M&&(z||te?i.replace(C.fullPath,ge({scroll:te&&d&&d.scroll},ue)):i.push(C.fullPath,ue)),l.value=C,zn(C,j,M,te),Ot()}let F;function Z(){F||(F=i.listen((C,j,M)=>{if(!to.listening)return;const z=v(C),ue=P(z);if(ue){N(ge(ue,{replace:!0}),z).catch(Zi);return}c=z;const ke=l.value;Ps&&DR(_d(ke.fullPath,M.delta),za()),U(z,ke).catch(te=>en(te,12)?te:en(te,2)?(N(te.to,z).then(d=>{en(d,20)&&!M.delta&&M.type===yr.pop&&i.go(-1,!1)}).catch(Zi),Promise.reject()):(M.delta&&i.go(-M.delta,!1),be(te,z,ke))).then(te=>{te=te||q(z,ke,!1),te&&(M.delta&&!en(te,8)?i.go(-M.delta,!1):M.type===yr.pop&&en(te,20)&&i.go(-1,!1)),H(z,ke,te)}).catch(Zi)}))}let $=Pi(),pe=Pi(),ce;function be(C,j,M){Ot(C);const z=pe.list();return z.length?z.forEach(ue=>ue(C,j,M)):console.error(C),Promise.reject(C)}function me(){return ce&&l.value!==bn?Promise.resolve():new Promise((C,j)=>{$.add([C,j])})}function Ot(C){return ce||(ce=!C,Z(),$.list().forEach(([j,M])=>C?M(C):j()),$.reset()),C}function zn(C,j,M,z){const{scrollBehavior:ue}=t;if(!Ps||!ue)return Promise.resolve();const ke=!M&&LR(_d(C.fullPath,0))||(z||!M)&&history.state&&history.state.scroll||null;return Aa().then(()=>ue(C,j,ke)).then(te=>te&&xR(te)).catch(te=>be(te,C,j))}const Pt=C=>i.go(C);let ut;const Rs=new Set,to={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:S,getRoutes:w,resolve:v,options:t,push:b,replace:A,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:me,install(C){const j=this;C.component("RouterLink",yA),C.component("RouterView",bA),C.config.globalProperties.$router=j,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),Ps&&!ut&&l.value===bn&&(ut=!0,b(i.location).catch(ue=>{}));const M={};for(const ue in bn)M[ue]=yt(()=>l.value[ue]);C.provide(Yu,j),C.provide(Xu,pi(M)),C.provide(Ac,l);const z=C.unmount;Rs.add(C),C.unmount=function(){Rs.delete(C),Rs.size<1&&(c=bn,F&&F(),F=null,l.value=bn,ut=!1,ce=!1),z()}}};return to}function Ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function IA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>oi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>oi(c,l))||i.push(l))}return[n,s,i]}function gx(){return At(Xu)}const I_=TA({history:BR("/"),routes:[{path:"/",name:"home",component:Oi(()=>import("./Home-b80d77d5.js"),["assets/Home-b80d77d5.js","assets/Breadcrumb-3ad4f980.js"]),meta:{auth:!0}},{path:"/:folderId",name:"folder",component:Oi(()=>import("./Folder-8523322a.js"),["assets/Folder-8523322a.js","assets/Breadcrumb-3ad4f980.js"]),meta:{auth:!0}},{path:"/login",name:"login",component:Oi(()=>import("./Login-780f5dbb.js"),[]),meta:{auth:!1}},{path:"/register",name:"register",component:Oi(()=>import("./Register-86e4b3ba.js"),[]),meta:{auth:!1}},{path:"/profile",name:"profile",component:Oi(()=>import("./Profile-01eac01b.js"),[]),meta:{auth:!0}}]}),CA=()=>new Promise((t,e)=>{const n=xC($r(),s=>{n(),t(s)},e)});I_.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.auth)?await CA()?n():(Fa().setError("User not authorized"),n("/login")):n()});var SA="firebase",RA="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(SA,RA,"app");var AA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,Ju=Ju||{},Q=AA||self;function Zo(){}function Ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kA(t){return Object.prototype.hasOwnProperty.call(t,Fl)&&t[Fl]||(t[Fl]=++NA)}var Fl="closure_uid_"+(1e9*Math.random()>>>0),NA=0;function OA(t,e,n){return t.call.apply(t.bind,arguments)}function PA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=OA:tt=PA,tt.apply(null,arguments)}function _o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Kn(){this.s=this.s,this.o=this.o}var xA=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xA!=0)&&kA(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Od(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ga(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var DA=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Zo,e),Q.removeEventListener("test",Zo,e)}catch{}return t}();function ea(t){return/^[\s\xa0]*$/.test(t)}var Pd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ul(t,e){return t<e?-1:t>e?1:0}function Ya(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return Ya().indexOf(t)!=-1}function Zu(t){return Zu[" "](t),t}Zu[" "]=Zo;function LA(t){var e=UA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var MA=qt("Opera"),vr=qt("Trident")||qt("MSIE"),S_=qt("Edge"),kc=S_||vr,R_=qt("Gecko")&&!(Ya().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),FA=Ya().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function A_(){var t=Q.document;return t?t.documentMode:void 0}var Nc;e:{var Bl="",$l=function(){var t=Ya();if(R_)return/rv:([^\);]+)(\)|;)/.exec(t);if(S_)return/Edge\/([\d\.]+)/.exec(t);if(vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FA)return/WebKit\/(\S+)/.exec(t);if(MA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($l&&(Bl=$l?$l[1]:""),vr){var Hl=A_();if(Hl!=null&&Hl>parseFloat(Bl)){Nc=String(Hl);break e}}Nc=Bl}var UA={};function BA(){return LA(function(){let t=0;const e=Pd(String(Nc)).split("."),n=Pd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ul(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ul(i[2].length==0,r[2].length==0)||Ul(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}Q.document&&vr&&A_();function Er(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(R_){e:{try{Zu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$A[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Er.X.h.call(this)}}Ye(Er,nt);var $A={2:"touch",3:"pen",4:"mouse"};Er.prototype.h=function(){Er.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),HA=0;function jA(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++HA,this.ba=this.ea=!1}function Xa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function eh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function k_(t){const e={};for(const n in t)e[n]=t[n];return e}const xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<xd.length;r++)n=xd[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ja(t){this.src=t,this.g={},this.h=0}Ja.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Pc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jA(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Oc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=C_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var th="closure_lm_"+(1e6*Math.random()|0),jl={};function O_(t,e,n,s,i){if(s&&s.once)return x_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)O_(t,e[r],n,s,i);return null}return n=ih(n),t&&t[jr]?t.N(e,n,Hr(s)?!!s.capture:!!s,i):P_(t,e,n,!1,s,i)}function P_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Hr(i)?!!i.capture:!!i,a=sh(t);if(a||(t[th]=a=new Ja(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=WA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)DA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(L_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WA(){function t(n){return e.call(t.src,t.listener,n)}const e=VA;return t}function x_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)x_(t,e[r],n,s,i);return null}return n=ih(n),t&&t[jr]?t.O(e,n,Hr(s)?!!s.capture:!!s,i):P_(t,e,n,!0,s,i)}function D_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)D_(t,e[r],n,s,i);else s=Hr(s)?!!s.capture:!!s,n=ih(n),t&&t[jr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Pc(r,n,s,i),-1<n&&(Xa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=sh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pc(e,n,s,i)),(n=-1<t?e[t]:null)&&nh(n))}function nh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jr])Oc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(L_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=sh(e))?(Oc(n,t),n.h==0&&(n.src=null,e[th]=null)):Xa(t)}}}function L_(t){return t in jl?jl[t]:jl[t]="on"+t}function VA(t,e){if(t.ba)t=!0;else{e=new Er(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&nh(t),t=n.call(s,e)}return t}function sh(t){return t=t[th],t instanceof Ja?t:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ih(t){return typeof t=="function"?t:(t[Wl]||(t[Wl]=function(e){return t.handleEvent(e)}),t[Wl])}function $e(){Kn.call(this),this.i=new Ja(this),this.P=this,this.I=null}Ye($e,Kn);$e.prototype[jr]=!0;$e.prototype.removeEventListener=function(t,e,n,s){D_(this,t,e,n,s)};function Ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(s,t),N_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=yo(o,s,!0,e)&&i}if(o=e.g=t,i=yo(o,s,!0,e)&&i,i=yo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=yo(o,s,!1,e)&&i}$e.prototype.M=function(){if($e.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Xa(n[s]);delete t.g[e],t.h--}}this.I=null};$e.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Oc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var rh=Q.JSON.stringify;function KA(){var t=U_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qA{constructor(){this.h=this.g=null}add(e,n){const s=M_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var M_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zA,t=>t.reset());class zA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GA(t){Q.setTimeout(()=>{throw t},0)}function F_(t,e){xc||YA(),Dc||(xc(),Dc=!0),U_.add(t,e)}var xc;function YA(){var t=Q.Promise.resolve(void 0);xc=function(){t.then(XA)}}var Dc=!1,U_=new qA;function XA(){for(var t;t=KA();){try{t.h.call(t.g)}catch(n){GA(n)}var e=M_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dc=!1}function Qa(t,e){$e.call(this),this.h=t||1,this.g=e||Q,this.j=tt(this.lb,this),this.l=Date.now()}Ye(Qa,$e);K=Qa.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ke(this,"tick"),this.ca&&(oh(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){Qa.X.M.call(this),oh(this),delete this.g};function ah(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function B_(t){t.g=ah(()=>{t.g=null,t.i&&(t.i=!1,B_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JA extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:B_(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(t){Kn.call(this),this.h=t,this.g={}}Ye(wr,Kn);var Dd=[];function $_(t,e,n,s){Array.isArray(n)||(n&&(Dd[0]=n.toString()),n=Dd);for(var i=0;i<n.length;i++){var r=O_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function H_(t){eh(t.g,function(e,n){this.g.hasOwnProperty(n)&&nh(e)},t),t.g={}}wr.prototype.M=function(){wr.X.M.call(this),H_(this)};wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Za(){this.g=!0}Za.prototype.Aa=function(){this.g=!1};function QA(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZA(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ds(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tk(t,n)+(s?" "+s:"")})}function ek(t,e){t.info(function(){return"TIMEOUT: "+e})}Za.prototype.info=function(){};function tk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rh(n)}catch{return e}}var Ei={},Ld=null;function lh(){return Ld=Ld||new $e}Ei.Pa="serverreachability";function j_(t){nt.call(this,Ei.Pa,t)}Ye(j_,nt);function br(t){const e=lh();Ke(e,new j_(e))}Ei.STAT_EVENT="statevent";function W_(t,e){nt.call(this,Ei.STAT_EVENT,t),this.stat=e}Ye(W_,nt);function lt(t){const e=lh();Ke(e,new W_(e,t))}Ei.Qa="timingevent";function V_(t,e){nt.call(this,Ei.Qa,t),this.size=e}Ye(V_,nt);function Wr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ch={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function uh(){}uh.prototype.h=null;function Md(t){return t.h||(t.h=t.i())}function sk(){}var Vr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hh(){nt.call(this,"d")}Ye(hh,nt);function fh(){nt.call(this,"c")}Ye(fh,nt);var Lc;function el(){}Ye(el,uh);el.prototype.g=function(){return new XMLHttpRequest};el.prototype.i=function(){return{}};Lc=new el;function Kr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new wr(this),this.O=ik,t=kc?125:void 0,this.T=new Qa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new K_}function K_(){this.i=null,this.g="",this.h=!1}var ik=45e3,Mc={},ta={};K=Kr.prototype;K.setTimeout=function(t){this.O=t};function Fc(t,e,n){t.K=1,t.v=nl(pn(e)),t.s=n,t.P=!0,q_(t,null)}function q_(t,e){t.F=Date.now(),qr(t),t.A=pn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ey(n.i,"t",s),t.C=0,n=t.l.H,t.h=new K_,t.g=wy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new JA(tt(t.La,t,t.g),t.N)),$_(t.S,t.g,"readystatechange",t.ib),e=t.H?k_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),br(),QA(t.j,t.u,t.A,t.m,t.U,t.s)}K.ib=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.La(t)};K.La=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||kc||this.g&&(this.h.h||this.g.fa()||$d(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?br(3):br(2)),tl(this);var n=this.g.aa();this.Y=n;t:if(z_(this)){var s=$d(this.g);t="";var i=s.length,r=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),tr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ZA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ea(a)){var c=a;break t}}c=null}if(n=c)Ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Uc(this,n);else{this.i=!1,this.o=3,lt(12),ns(this),tr(this);break e}}this.P?(G_(this,u,o),kc&&this.i&&u==3&&($_(this.S,this.T,"tick",this.hb),this.T.start())):(Ds(this.j,this.m,o,null),Uc(this,o)),u==4&&ns(this),this.i&&!this.I&&(u==4?_y(this.l,this):(this.i=!1,qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),ns(this),tr(this)}}}catch{}finally{}};function z_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function G_(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=rk(t,n),i==ta){e==4&&(t.o=4,lt(14),s=!1),Ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Mc){t.o=4,lt(15),Ds(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ds(t.j,t.m,i,null),Uc(t,i);z_(t)&&i!=ta&&i!=Mc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vh(e),e.K=!0,lt(11))):(Ds(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),tr(t))}K.hb=function(){if(this.g){var t=an(this.g),e=this.g.fa();this.C<e.length&&(tl(this),G_(this,t,e),this.i&&t!=4&&qr(this))}};function rk(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ta:(n=Number(e.substring(n,s)),isNaN(n)?Mc:(s+=1,s+n>e.length?ta:(e=e.substr(s,n),t.C=s+n,e)))}K.cancel=function(){this.I=!0,ns(this)};function qr(t){t.V=Date.now()+t.O,Y_(t,t.O)}function Y_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wr(tt(t.gb,t),e)}function tl(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}K.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ek(this.j,this.A),this.K!=2&&(br(),lt(17)),ns(this),this.o=2,tr(this)):Y_(this,this.V-t)};function tr(t){t.l.G==0||t.I||_y(t.l,t)}function ns(t){tl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,oh(t.T),H_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Uc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bc(n.h,t))){if(!t.J&&Bc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ia(n),ol(n);else break e;yh(n),lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wr(tt(n.cb,n),6e3));if(1>=sy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ss(n,11)}else if((t.J||n.g==t)&&ia(n),!ea(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(dh(r,r.h),r.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Re(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ey(s,s.H?s.ka:null,s.V),o.J){iy(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(tl(a),qr(a)),s.g=o}else gy(s);0<n.i.length&&al(n)}else c[0]!="stop"&&c[0]!="close"||ss(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ss(n,7):_h(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}br(4)}catch{}}function ok(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ga(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ak(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function X_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ak(t),s=ok(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var J_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=e!==void 0?e:t.h,na(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l,e=t.i;var n=new Tr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fd(this,n),this.o=t.o}else t&&(n=String(t).match(J_))?(this.h=!!e,na(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),sa(this,n[4]),this.l=ji(n[5]||"",!0),Fd(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new Tr(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,Ud,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,Ud,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?hk:uk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,dk)),t.join("")};function pn(t){return new us(t)}function na(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fd(t,e,n){e instanceof Tr?(t.i=e,pk(t.i,t.h)):(n||(e=Wi(e,fk)),t.i=new Tr(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function nl(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ck),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ck(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ud=/[#\/\?@]/g,uk=/[#\?:]/g,hk=/[#\?]/g,fk=/[#\?@]/g,dk=/#/g;function Tr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&lk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Tr.prototype;K.add=function(t,e){qn(this),this.i=null,t=wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Q_(t,e){qn(t),e=wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Z_(t,e){return qn(t),e=wi(t,e),t.g.has(e)}K.forEach=function(t,e){qn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};K.oa=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};K.W=function(t){qn(this);let e=[];if(typeof t=="string")Z_(this,t)&&(e=e.concat(this.g.get(wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return qn(this),this.i=null,t=wi(this,t),Z_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ey(t,e,n){Q_(t,e),0<n.length&&(t.i=null,t.g.set(wi(t,e),Qu(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pk(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Q_(this,s),ey(this,i,n))},t)),t.j=e}var gk=class{constructor(t,e){this.h=t,this.g=e}};function ty(t){this.l=t||mk,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mk=10;function ny(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sy(t){return t.h?1:t.g?t.g.size:0}function Bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dh(t,e){t.g?t.g.add(e):t.h=e}function iy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ty.prototype.cancel=function(){if(this.i=ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ry(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qu(t.i)}function ph(){}ph.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};ph.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function _k(){this.g=new ph}function yk(t,e,n){const s=n||"";try{X_(t,function(i,r){let o=i;Hr(i)&&(o=rh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function vk(t,e){const n=new Za;if(Q.Image){const s=new Image;s.onload=_o(vo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=_o(vo,n,s,"TestLoadImage: error",!1,e),s.onabort=_o(vo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=_o(vo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function sl(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(sl,uh);sl.prototype.g=function(){return new il(this.l,this.j)};sl.prototype.i=function(t){return function(){return t}}({});function il(t,e){$e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(il,$e);var gh=0;K=il.prototype;K.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ir(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=gh};K.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function oy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}K.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zr(this):Ir(this),this.readyState==3&&oy(this)}};K.Va=function(t){this.g&&(this.response=this.responseText=t,zr(this))};K.Ua=function(t){this.g&&(this.response=t,zr(this))};K.ga=function(){this.g&&zr(this)};function zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ir(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ir(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ek=Q.JSON.parse;function Le(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ay,this.K=this.L=!1}Ye(Le,$e);var ay="",wk=/^https?$/i,bk=["POST","PUT"];K=Le.prototype;K.Ka=function(t){this.L=t};K.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Lc.g(),this.C=this.u?Md(this.u):Md(Lc),this.g.onreadystatechange=tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Bd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=C_(bk,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uy(this),0<this.B&&((this.K=Tk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.qa,this)):this.A=ah(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Bd(this,r)}};function Tk(t){return vr&&BA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof Ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ly(t),rl(t)}function ly(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),rl(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rl(this,!0)),Le.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?cy(this):this.fb())};K.fb=function(){cy(this)};function cy(t){if(t.h&&typeof Ju<"u"&&(!t.C[1]||an(t)!=4||t.aa()!=2)){if(t.v&&an(t)==4)ah(t.Ha,0,t);else if(Ke(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(J_)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!wk.test(i?i.toLowerCase():"")}n=s}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ly(t)}}finally{rl(t)}}}}function rl(t,e){if(t.g){uy(t);const n=t.g,s=t.C[0]?Zo:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function uy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ek(e)}};function $d(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ay:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hy(t){let e="";return eh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function mh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=hy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fy(t){this.Ca=0,this.i=[],this.j=new Za,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xi("baseRetryDelayMs",5e3,t),this.bb=xi("retryDelaySeedMs",1e4,t),this.$a=xi("forwardChannelMaxRetries",2,t),this.ta=xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ty(t&&t.concurrentRequestLimit),this.Fa=new _k,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=fy.prototype;K.ma=8;K.G=1;function _h(t){if(dy(t),t.G==3){var e=t.U++,n=pn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),Gr(t,n),e=new Kr(t,t.j,e,void 0),e.K=2,e.v=nl(pn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=wy(e.l,null),e.g.da(e.v)),e.F=Date.now(),qr(e)}vy(t)}function ol(t){t.g&&(vh(t),t.g.cancel(),t.g=null)}function dy(t){ol(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ia(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function al(t){ny(t.h)||t.m||(t.m=!0,F_(t.Ja,t),t.C=0)}function Ik(t,e){return sy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Wr(tt(t.Ja,t,e),yy(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Kr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=k_(r),N_(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=py(this,i,e),n=pn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Gr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(hy(r)))+"&"+e:this.o&&mh(n,this.o,r)),dh(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Fc(i,n,null)):Fc(i,n,e),this.G=2}}else this.G==3&&(t?Hd(this,t):this.i.length==0||ny(this.h)||Hd(this))};function Hd(t,e){var n;e?n=e.m:n=t.U++;const s=pn(t.F);Re(s,"SID",t.I),Re(s,"RID",n),Re(s,"AID",t.T),Gr(t,s),t.o&&t.s&&mh(s,t.o,t.s),n=new Kr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=py(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dh(t.h,n),Fc(n,s,e)}function Gr(t,e){t.ia&&eh(t.ia,function(n,s){Re(e,s,n)}),t.l&&X_({},function(n,s){Re(e,s,n)})}function py(t,e,n){n=Math.min(t.i.length,n);var s=t.l?tt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{yk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function gy(t){t.g||t.u||(t.Z=1,F_(t.Ia,t),t.A=0)}function yh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Wr(tt(t.Ia,t),yy(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,my(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wr(tt(this.eb,this),t)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),ol(this),my(this))};function vh(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function my(t){t.g=new Kr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=pn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),Gr(t,e),t.o&&t.s&&mh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nl(pn(e)),n.s=null,n.P=!0,q_(n,t)}K.cb=function(){this.v!=null&&(this.v=null,ol(this),yh(this),lt(19))};function ia(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function _y(t,e){var n=null;if(t.g==e){ia(t),vh(t),t.g=null;var s=2}else if(Bc(t.h,e))n=e.D,iy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=lh(),Ke(s,new V_(s,n)),al(t)}else gy(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ik(t,e)||s==2&&yh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function yy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=tt(t.kb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||na(n,"https"),nl(n)),vk(n.toString(),s)}else lt(2);t.G=0,t.l&&t.l.va(e),vy(t),dy(t)}K.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function vy(t){if(t.G=0,t.la=[],t.l){const e=ry(t.h);(e.length!=0||t.i.length!=0)&&(Od(t.la,e),Od(t.la,t.i),t.h.i.length=0,Qu(t.i),t.i.length=0),t.l.ua()}}function Ey(t,e,n){var s=n instanceof us?pn(n):new us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),sa(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new us(null,void 0);s&&na(r,s),e&&(r.g=e),i&&sa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Re(s,n,e),Re(s,"VER",t.ma),Gr(t,s),s}function wy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new sl({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function by(){}K=by.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function kt(t,e){$e.call(this),this.g=new fy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ea(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bi(this)}Ye(kt,$e);kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ey(t,null,t.V),al(t)};kt.prototype.close=function(){_h(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rh(t),t=n);e.i.push(new gk(e.ab++,t)),e.G==3&&al(e)};kt.prototype.M=function(){this.g.l=null,delete this.j,_h(this.g),delete this.g,kt.X.M.call(this)};function Ty(t){hh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Ty,hh);function Iy(){fh.call(this),this.status=1}Ye(Iy,fh);function bi(t){this.g=t}Ye(bi,by);bi.prototype.xa=function(){Ke(this.g,"a")};bi.prototype.wa=function(t){Ke(this.g,new Ty(t))};bi.prototype.va=function(t){Ke(this.g,new Iy)};bi.prototype.ua=function(){Ke(this.g,"b")};kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;ch.NO_ERROR=0;ch.TIMEOUT=8;ch.HTTP_ERROR=6;nk.COMPLETE="complete";sk.EventType=Vr;Vr.OPEN="a";Vr.CLOSE="b";Vr.ERROR="c";Vr.MESSAGE="d";$e.prototype.listen=$e.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;const jd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Pr("@firebase/firestore");function vt(t,...e){if(li.logLevel<=fe.DEBUG){const n=e.map(wh);li.debug(`Firestore (${Yr}): ${t}`,...n)}}function Eh(t,...e){if(li.logLevel<=fe.ERROR){const n=e.map(wh);li.error(`Firestore (${Yr}): ${t}`,...n)}}function Ck(t,...e){if(li.logLevel<=fe.WARN){const n=e.map(wh);li.warn(`Firestore (${Yr}): ${t}`,...n)}}function wh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw Eh(e),new Error(e)}function ra(t,e){t||Cr()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ze extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Rk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ak{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ra(typeof s.accessToken=="string"),new Cy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ra(e===null||typeof e=="string"),new Xe(e)}}class kk{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ra(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Nk{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new kk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ok{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,vt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ra(typeof n.token=="string"),this.A=n.token,new Ok(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=xk(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,s){n===void 0?n=0:n>e.length&&Cr(),s===void 0?s=e.length-n:s>e.length-n&&Cr(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oa?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class It extends oa{construct(e,n,s){return new It(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ze(qe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.path=e}static fromPath(e){return new is(It.fromString(e))}static fromName(e){return new is(It.fromString(e).popFirst(5))}static empty(){return new is(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new is(new It(e.slice()))}}function Sy(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Fk(t){return new Mk(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this._=void 0}}class Bk extends Uk{}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.field=e,this.transform=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wd,oe;(oe=Wd||(Wd={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";function Vl(){return typeof document<"u"?document:null}class Hk{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&vt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new bh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ze(qe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jk(t,e){if(Eh("AsyncQueue",`${e}: ${t}`),Sy(t))return new ze(qe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t,e,n){if(!n)throw new ze(qe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vk(t,e,n,s){if(e===!0&&s===!0)throw new ze(qe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vd(t){if(is.isDocumentKey(t))throw new ze(qe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Cr()}function qk(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ze(qe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kk(t);throw new ze(qe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;class qd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ze(qe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ze(qe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ze(qe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ze(qe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sk;switch(n.type){case"gapi":const s=n.client;return new Nk(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ze(qe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kd.get(e);n&&(vt("ComponentProvider","Removing Datastore"),Kd.delete(e),n.terminate())}(this),Promise.resolve()}}function zk(t,e,n,s={}){var i;const r=(t=qk(t,Th))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ck("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Xe.MOCK_USER;else{o=fm(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ze(qe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(l)}t._authCredentials=new Rk(new Cy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ll(this.firestore,e,this._key)}}class Ih{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ih(this.firestore,e,this._query)}}class Gs extends Ih{constructor(e,n,s){super(e,n,Fk(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ll(this.firestore,null,new is(e))}withConverter(e){return new Gs(this.firestore,e,this._path)}}function zd(t,e,...n){if(t=Ge(t),Wk("collection","path",e),t instanceof Th){const s=It.fromString(e,...n);return Vd(s),new Gs(t,null,s)}{if(!(t instanceof ll||t instanceof Gs))throw new ze(qe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(It.fromString(e,...n));return Vd(s),new Gs(t.firestore,null,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=Dk.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{vt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(vt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ze(qe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=jk(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class Yk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Hk(this,"async_queue_retry"),this.Wc=()=>{const n=Vl();n&&vt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Vl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new zs;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Sy(e))throw e;vt("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Eh("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=bh.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Cr()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Xk extends Th{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Yk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qk(this),this._firestoreClient.terminate()}}function Jk(t,e){const n=typeof t=="object"?t:ja(),s=typeof t=="string"?t:e||"(default)",i=Ha(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=um("firestore");r&&zk(i,...r)}return i}function Qk(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Lk(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this._methodName=e}}class Ch extends Zk{_toFieldTransform(e){return new $k(e.path,new Bk)}isEqual(e){return e instanceof Ch}}function eN(){return new Ch("serverTimestamp")}(function(t,e=!0){(function(n){Yr=n})(Is),Jt(new $t("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Xk(new Ak(n.getProvider("auth-internal")),new Pk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ze(qe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wt(jd,"3.8.3",t),wt(jd,"3.8.3","esm2017")})();const cl=vm({apiKey:"AIzaSyAEsI6mDfKI-8pLl_pxAuDRPLc_qihUKHc",authDomain:"mydropbox-3f448.firebaseapp.com",projectId:"mydropbox-3f448",storageBucket:"mydropbox-3f448.appspot.com",messagingSenderId:"407671079910",appId:"1:407671079910:web:c7ed4b9b8008c89643cc27"}),Gd=Jk(cl);zd(Gd,"folders"),zd(Gd,"files");$r(cl);Uu(cl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=new Map,nN={activated:!1,tokenObservers:[]};function Qt(t){return tN.get(t)||Object.assign({},nN)}const Yd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new dr,await iN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new dr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function iN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},la=new _i("appCheck","AppCheck",rN);function oN(t){if(!Qt(t).activated)throw la.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="firebase-app-check-database",lN=1,$c="firebase-app-check-store";let Eo=null;function cN(){return Eo||(Eo=new Promise((t,e)=>{try{const n=indexedDB.open(aN,lN);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(la.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore($c,{keyPath:"compositeKey"})}}}catch(n){e(la.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Eo)}function uN(t,e){return hN(fN(t),e)}async function hN(t,e){const s=(await cN()).transaction($c,"readwrite"),r=s.objectStore($c).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(la.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function fN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Pr("@firebase/app-check");function Xd(t,e){return gm()?uN(t,e).catch(n=>{Hc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN={error:"UNKNOWN_ERROR"};function pN(t){return Ua.encodeString(JSON.stringify(t),!1)}async function jc(t,e=!1){const n=t.app;oN(n);const s=Qt(n);let i=s.token,r;if(i&&!Vi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Vi(l)?i=l:await Xd(n,void 0))}if(!e&&i&&Vi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Qt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Hc.warn(l.message):Hc.error(l),r=l}let a;return i?r?Vi(i)?a={token:i.token,internalError:r}:a=Qd(r):(a={token:i.token},s.token=i,await Xd(n,i)):a=Qd(r),o&&_N(n,a),a}function gN(t,e,n,s){const{app:i}=t,r=Qt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Vi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Jd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Jd(t))}function Ry(t,e){const n=Qt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Jd(t){const{app:e}=t,n=Qt(e);let s=n.tokenRefresher;s||(s=mN(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function mN(t){const{app:e}=t;return new sN(async()=>{const n=Qt(e);let s;if(n.token?s=await jc(t,!0):s=await jc(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Qt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Yd.RETRIAL_MIN_WAIT,Yd.RETRIAL_MAX_WAIT)}function _N(t,e){const n=Qt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Vi(t){return t.expireTimeMillis-Date.now()>0}function Qd(t){return{token:pN(dN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Qt(this.app);for(const n of e)Ry(this.app,n.next);return Promise.resolve()}}function vN(t,e){return new yN(t,e)}function EN(t){return{getToken:e=>jc(t,e),addTokenListener:e=>gN(t,"INTERNAL",e),removeTokenListener:e=>Ry(t.app,e)}}const wN="@firebase/app-check",bN="0.6.3",TN="app-check",Zd="app-check-internal";function IN(){Jt(new $t(TN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return vN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Zd).initialize()})),Jt(new $t(Zd,t=>{const e=t.getProvider("app-check").getImmediate();return EN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wt(wN,bN)}IN();const Ay=Symbol("firebaseApp");function CN(t){return mn()&&At(Ay,null)||ja(t)}const wo=new WeakMap;function SN(t,e){if(!wo.has(t)){const n=au(!0);wo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),wo.delete(t)}}return wo.get(t)}const RN=new WeakMap,bo=new WeakMap;function AN(t){const e=CN(t);if(!bo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{bo.set(e,r),n(r.value)}];bo.set(e,i)}return bo.get(e)}function kN(t,e){const n=$r(e);s_(n,s=>{const i=AN();t.value=s,Array.isArray(i)&&i[1](t)})}const ep="@firebase/database",tp="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ky="";function NN(t){ky=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ON(e)}}catch{}return new PN},rs=Ny("localStorage"),Wc=Ny("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Pr("@firebase/database"),xN=function(){let t=1;return function(){return t++}}(),Oy=function(t){const e=C0(t),n=new E0;n.update(e);const s=n.digest();return Ua.encodeByteArray(s)},Xr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Xr.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let hs=null,np=!0;const DN=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ys.logLevel=fe.VERBOSE,hs=Ys.log.bind(Ys),e&&Wc.set("logging_enabled",!0)):typeof t=="function"?hs=t:(hs=null,Wc.remove("logging_enabled"))},Je=function(...t){if(np===!0&&(np=!1,hs===null&&Wc.get("logging_enabled")===!0&&DN(!0)),hs){const e=Xr.apply(null,t);hs(e)}},Jr=function(t){return function(...e){Je(t,...e)}},Vc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xr(...t);Ys.error(e)},ys=function(...t){const e=`FIREBASE FATAL ERROR: ${Xr(...t)}`;throw Ys.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+Xr(...t);Ys.warn(e)},LN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Py=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",vs="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===ci||e===vs)return-1;if(e===ci||t===vs)return 1;{const n=sp(t),s=sp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},FN=function(t,e){return t===e?0:t<e?-1:1},Di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Sh=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=Sh(t[e[s]]);return n+="}",n},xy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dy=function(t){L(!Py(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},UN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$N=new RegExp("^-?(0*)\\d{1,10}$"),HN=-2147483648,jN=2147483647,sp=function(t){if($N.test(t)){const e=Number(t);if(e>=HN&&e<=jN)return e}return null},Qr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},WN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class Kc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="5",Ly="v",My="s",Fy="r",Uy="f",By=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$y="ls",Hy="p",qc="ac",jy="websocket",Wy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vy(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===jy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zN(t)&&(n.ns=t.namespace);const i=[];return Nt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return i0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={},ql={};function Ah(t){const e=t.toString();return Kl[e]||(Kl[e]=new GN),Kl[e]}function YN(t,e){const n=t.toString();return ql[n]||(ql[n]=e()),ql[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="start",JN="close",QN="pLPCommand",ZN="pRTLPCB",Ky="id",qy="pw",zy="ser",e1="cb",t1="seg",n1="ts",s1="d",i1="dframe",Gy=1870,Yy=30,r1=Gy-Yy,o1=25e3,a1=3e4;class Ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jr(e),this.stats_=Ah(n),this.urlFn=l=>(this.appCheckToken&&(l[qc]=this.appCheckToken),Vy(n,Wy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(a1)),MN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ip)this.id=a,this.password=l;else if(o===JN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ip]="t",s[zy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[e1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ly]=Rh,this.transportSessionId&&(s[My]=this.transportSessionId),this.lastSessionId&&(s[$y]=this.lastSessionId),this.applicationId&&(s[Hy]=this.applicationId),this.appCheckToken&&(s[qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&By.test(location.hostname)&&(s[Fy]=Uy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UN()&&!BN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=am(n),i=xy(s,r1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[i1]="t",s[Ky]=e,s[qy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xN(),window[QN+this.uniqueCallbackIdentifier]=e,window[ZN+this.uniqueCallbackIdentifier]=n,this.myIFrame=kh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ky]=this.myID,e[qy]=this.myPW,e[zy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yy+s.length<=Gy;){const o=this.pendingSegs.shift();s=s+"&"+t1+i+"="+o.seg+"&"+n1+i+"="+o.ts+"&"+s1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(o1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=16384,c1=45e3;let ca=null;typeof MozWebSocket<"u"?ca=MozWebSocket:typeof WebSocket<"u"&&(ca=WebSocket);class Mt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jr(this.connId),this.stats_=Ah(n),this.connURL=Mt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ly]=Rh,typeof location<"u"&&location.hostname&&By.test(location.hostname)&&(o[Fy]=Uy),n&&(o[My]=n),s&&(o[$y]=s),i&&(o[qc]=i),r&&(o[Hy]=r),Vy(e,jy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let s;pm(),this.mySock=new ca(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ca!==null&&!Mt.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=pr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xy(n,l1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mt.responsesRequiredToBeHealthy=2;Mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ls,Mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Mt&&Mt.isAvailable();let s=n&&!Mt.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Mt];else{const i=this.transports_=[];for(const r of Sr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Sr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=6e4,h1=5e3,f1=10*1024,d1=100*1024,zl="t",rp="d",p1="s",op="r",g1="e",ap="o",lp="a",cp="n",up="p",m1="h";class _1{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jr("c:"+this.id+":"),this.transportManager_=new Sr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>d1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zl in e){const n=e[zl];n===lp?this.upgradeIfSecondaryHealthy_():n===op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ap&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Di("t",e),s=Di("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:up,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Di("t",e),s=Di("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Di(zl,e);if(rp in e){const s=e[rp];if(n===m1){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===p1?this.onConnectionShutdown_(s):n===op?this.onReset_(s):n===g1?Vc("Server Error: "+s):n===ap?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rh!==s&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),nr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(h1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:up,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Jy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ru()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ua}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=32,fp=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Se("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function Qy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function y1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ev(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function Be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=ae(t),s=ae(e);if(n===null)return e;if(n===s)return St(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tv(t,e){if(Vn(t)!==Vn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vn(t)>Vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class v1{constructor(e,n){this.errorPrefix_=n,this.parts_=Zy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$a(this.parts_[s]);nv(this)}}function E1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$a(e),nv(t)}function w1(t){const e=t.parts_.pop();t.byteLength_-=$a(e),t.parts_.length>0&&(t.byteLength_-=1)}function nv(t){if(t.byteLength_>fp)throw new Error(t.errorPrefix_+"has a key path longer than "+fp+" bytes ("+t.byteLength_+").");if(t.parts_.length>hp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hp+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Jy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Nh}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=1e3,b1=60*5*1e3,dp=30*1e3,T1=1.3,I1=3e4,C1="server_kill",pp=3;class un extends Xy{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=un.nextPersistentConnectionId_++,this.log_=Jr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Li,this.maxReconnectDelay_=b1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new dr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;un.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||v0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=y0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vc("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>I1&&(this.reconnectDelay_=Li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*T1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+un.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new _1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{bt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(C1)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&bt(h),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mc(this.interruptReasons_)&&(this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Sh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pp&&(this.reconnectDelay_=dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ky.replace(/\./g,"-")]=1,Ru()?e["framework.cordova"]=1:dm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ua.getInstance().currentlyOnline();return mc(this.interruptReasons_)&&e}}un.nextPersistentConnectionId_=0;un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(ci,e),i=new le(ci,n);return this.compare(s,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;class sv extends ul{static get __EMPTY_NODE(){return To}static set __EMPTY_NODE(e){To=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(vs,To)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,To)}toString(){return".key"}}const Xs=new sv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??dt.EMPTY_NODE,this.right=r??dt.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class S1{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dt{constructor(e,n=dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Io(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Io(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Io(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Io(this.root_,null,this.comparator_,!0,e)}}dt.EMPTY_NODE=new S1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t,e){return Ti(t.name,e.name)}function Oh(t,e){return Ti(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;function A1(t){zc=t}const iv=function(t){return typeof t=="number"?"number:"+Dy(t):"string:"+t},rv=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else L(t===zc||t.isEmpty(),"priority of unexpected type.");L(t===zc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gp;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rv(this.priorityNode_)}static set __childrenNodeConstructor(e){gp=e}static get __childrenNodeConstructor(){return gp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ae(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dy(this.value_):e+=this.value_,this.lazyHash_=Oy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return L(i>=0,"Unknown leaf type: "+n),L(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ov,av;function k1(t){ov=t}function N1(t){av=t}class O1 extends ul{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(vs,new Fe("[PRIORITY-POST]",av))}makePost(e,n){const s=ov(e);return new le(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const et=new O1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=Math.log(2);class x1{constructor(e){const n=r=>parseInt(Math.log(r)/P1,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ha=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=i(l,g),w=i(g+1,c);return h=t[g],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,_,w)}},r=function(l){let c=null,u=null,h=t.length;const f=function(_,w){const S=h-_,v=h;h-=_;const p=i(S+1,v),y=t[S],b=n?n(y):y;g(new Ue(b,y.node,w,null,p))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));w?f(S,Ue.BLACK):(f(S,Ue.BLACK),f(S,Ue.RED))}return u},o=new x1(t.length),a=r(o);return new dt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;const Os={};class ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Os&&et,"ChildrenNode.ts has not been loaded"),Gl=Gl||new ln({".priority":Os},{".priority":et}),Gl}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(le.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ha(s,e.getCompare()):a=Os;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ln(u,c)}addToIndexes(e,n){const s=Ko(this.indexes_,(i,r)=>{const o=ii(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),i===Os)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ha(a,o.getCompare())}else return Os;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new ln(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ko(this.indexes_,i=>{if(i===Os)return i;{const r=n.get(e.name);return r?i.remove(new le(e.name,r)):i}});return new ln(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class de{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rv(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mi||(Mi=new de(new dt(Oh),null,ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mi:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mi:this.priorityNode_;return new de(i,o,r)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{L(ae(e)!==".priority"||Vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(et,(o,a)=>{n[o]=a.val(e),s++,r&&de.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iv(this.getPriority().val())+":"),this.forEachChild(et,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new le(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zr?-1:0}withIndex(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(et),i=n.getIterator(et);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xs?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class D1 extends de{constructor(){super(new dt(Oh),de.EMPTY_NODE,ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const Zr=new D1;Object.defineProperties(le,{MIN:{value:new le(ci,de.EMPTY_NODE)},MAX:{value:new le(vs,Zr)}});sv.__EMPTY_NODE=de.EMPTY_NODE;Fe.__childrenNodeConstructor=de;A1(Zr);N1(Zr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=!0;function Qe(t,e=null){if(t===null)return de.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Qe(e))}if(!(t instanceof Array)&&L1){const n=[];let s=!1;if(Nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Qe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return de.EMPTY_NODE;const r=ha(n,R1,o=>o.name,Oh);if(s){const o=ha(n,et.getCompare());return new de(r,Qe(e),new ln({".priority":o},{".priority":et}))}else return new de(r,Qe(e),ln.Default)}else{let n=de.EMPTY_NODE;return Nt(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Qe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Qe(e))}}k1(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1 extends ul{constructor(e){super(),this.indexPath_=e,L(!ie(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ti(e.name,n.name):r}makePost(e,n){const s=Qe(e),i=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,i)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,Zr);return new le(vs,e)}toString(){return Zy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1 extends ul{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ti(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=Qe(e);return new le(n,s)}toString(){return".value"}}const U1=new F1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){return{type:"value",snapshotNode:t}}function $1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function H1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function j1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===et}copy(){const e=new Ph;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _p(t){const e={};if(t.isDefault())return e;let n;if(t.index_===et?n="$priority":t.index_===U1?n="$value":t.index_===Xs?n="$key":(L(t.index_ instanceof M1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Xy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Jr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fa.getListenId_(e,s),a={};this.listens_[o]=a;const l=_p(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ii(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=fa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_p(e._queryParams),s=e._path.toString(),i=new dr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pr(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return{value:null,children:new Map}}function lv(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ae(e);t.children.has(s)||t.children.set(s,da());const i=t.children.get(s);e=Ce(e),lv(i,e,n)}}function Gc(t,e,n){t.value!==null?n(e,t.value):V1(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);Gc(i,r,n)})}function V1(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Nt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=10*1e3,q1=30*1e3,z1=5*60*1e3;class G1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new K1(e);const s=vp+(q1-vp)*Math.random();nr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Nt(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),nr(this.reportStats_.bind(this),Math.floor(Math.random()*2*z1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function cv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Gt.ACK_USER_WRITE,this.source=cv()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new pa(ve(),n,this.revert)}}else return L(ae(this.path)===e,"operationForChild called for unrelated child."),new pa(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Gt.OVERWRITE}operationForChild(e){return ie(this.path)?new Es(this.source,ve(),this.snap.getImmediateChild(e)):new Es(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Gt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Es(this.source,ve(),n.value):new Rr(this.source,ve(),n)}else return L(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rr(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Y1(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(j1(o.childName,o.snapshotNode))}),Fi(t,i,"child_removed",e,s,n),Fi(t,i,"child_added",e,s,n),Fi(t,i,"child_moved",r,s,n),Fi(t,i,"child_changed",e,s,n),Fi(t,i,"value",e,s,n),i}function Fi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>J1(t,a,l)),o.forEach(a=>{const l=X1(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function X1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function J1(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){return{eventCache:t,serverCache:e}}function sr(t,e,n,s){return fv(new xh(e,n,s),t.serverCache)}function dv(t,e,n,s){return fv(t.eventCache,new xh(e,n,s))}function Yc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ws(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;const Q1=()=>(Yl||(Yl=new dt(FN)),Yl);class Ie{constructor(e,n=Q1()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Nt(e,(s,i)=>{n=n.set(new Se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ie(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ce(e),n);return r!=null?{path:Be(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Ie(null)}}set(e,n){if(ie(e))return new Ie(n,this.children);{const s=ae(e),r=(this.children.get(s)||new Ie(null)).set(Ce(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const i=s.remove(Ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(ie(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const s=ae(e),r=(this.children.get(s)||new Ie(null)).setTree(Ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ie(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),Be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(Ce(e),Be(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Ie(null))}}function ir(t,e,n){if(ie(e))return new Bt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=St(i,e);return r=r.updateChild(o,n),new Bt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new Bt(r)}}}function Ep(t,e,n){let s=t;return Nt(n,(i,r)=>{s=ir(s,Be(e,i),r)}),s}function wp(t,e){if(ie(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Bt(n)}}function Xc(t,e){return Cs(t,e)!=null}function Cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function bp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(et,(s,i)=>{e.push(new le(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new le(s,i.value))}),e}function Bn(t,e){if(ie(e))return t;{const n=Cs(t,e);return n!=null?new Bt(new Ie(n)):new Bt(t.writeTree_.subtree(e))}}function Jc(t){return t.writeTree_.isEmpty()}function ui(t,e){return pv(ve(),t.writeTree_,e)}function pv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=pv(Be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){return Ev(e,t)}function Z1(t,e,n,s,i){L(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ir(t.visibleWrites,e,n)),t.lastWriteId=s}function eO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function tO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nO(a,s.path)?i=!1:Ft(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return sO(t),!0;if(s.snap)t.visibleWrites=wp(t.visibleWrites,s.path);else{const a=s.children;Nt(a,l=>{t.visibleWrites=wp(t.visibleWrites,Be(s.path,l))})}return!0}else return!1}function nO(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(Be(t.path,n),e))return!0;return!1}function sO(t){t.visibleWrites=mv(t.allWrites,iO,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iO(t){return t.visible}function mv(t,e,n){let s=Bt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ft(n,o)?(a=St(n,o),s=ir(s,a,r.snap)):Ft(o,n)&&(a=St(o,n),s=ir(s,ve(),r.snap.getChild(a)));else if(r.children){if(Ft(n,o))a=St(n,o),s=Ep(s,a,r.children);else if(Ft(o,n))if(a=St(o,n),ie(a))s=Ep(s,ve(),r.children);else{const l=ii(r.children,ae(a));if(l){const c=l.getChild(Ce(a));s=ir(s,ve(),c)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function _v(t,e,n,s,i){if(!s&&!i){const r=Cs(t.visibleWrites,e);if(r!=null)return r;{const o=Bn(t.visibleWrites,e);if(Jc(o))return n;if(n==null&&!Xc(o,ve()))return null;{const a=n||de.EMPTY_NODE;return ui(o,a)}}}else{const r=Bn(t.visibleWrites,e);if(!i&&Jc(r))return n;if(!i&&n==null&&!Xc(r,ve()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ft(c.path,e)||Ft(e,c.path))},a=mv(t.allWrites,o,e),l=n||de.EMPTY_NODE;return ui(a,l)}}}function rO(t,e,n){let s=de.EMPTY_NODE;const i=Cs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(et,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bn(t.visibleWrites,e);return n.forEachChild(et,(o,a)=>{const l=ui(Bn(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),bp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bn(t.visibleWrites,e);return bp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function oO(t,e,n,s,i){L(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Be(e,n);if(Xc(t.visibleWrites,r))return null;{const o=Bn(t.visibleWrites,r);return Jc(o)?i.getChild(n):ui(o,i.getChild(n))}}function aO(t,e,n,s){const i=Be(e,n),r=Cs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bn(t.visibleWrites,i);return ui(o,s.getNode().getImmediateChild(n))}else return null}function lO(t,e){return Cs(t.visibleWrites,e)}function cO(t,e,n,s,i,r,o){let a;const l=Bn(t.visibleWrites,e),c=Cs(l,ve());if(c!=null)a=c;else if(n!=null)a=ui(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function uO(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Qc(t,e,n,s){return _v(t.writeTree,t.treePath,e,n,s)}function yv(t,e){return rO(t.writeTree,t.treePath,e)}function Tp(t,e,n,s){return oO(t.writeTree,t.treePath,e,n,s)}function ga(t,e){return lO(t.writeTree,Be(t.treePath,e))}function hO(t,e,n,s,i,r){return cO(t.writeTree,t.treePath,e,n,s,i,r)}function Dh(t,e,n){return aO(t.writeTree,t.treePath,e,n)}function vv(t,e){return Ev(Be(t.treePath,e),t.writeTree)}function Ev(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,mp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,H1(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,$1(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,mp(s,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const wv=new dO;class Lh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),r=hO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function pO(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gO(t,e,n,s,i){const r=new fO;let o,a;if(n.type===Gt.OVERWRITE){const c=n;c.source.fromUser?o=Zc(t,e,c.path,c.snap,s,i,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=ma(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Gt.MERGE){const c=n;c.source.fromUser?o=_O(t,e,c.path,c.children,s,i,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=eu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Gt.ACK_USER_WRITE){const c=n;c.revert?o=EO(t,e,c.path,s,i,r):o=yO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Gt.LISTEN_COMPLETE)o=vO(t,e,n.path,s,r);else throw mi("Unknown operation type: "+n.type);const l=r.getChanges();return mO(e,o,l),{viewCache:o,changes:l}}function mO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(B1(Yc(e)))}}function bv(t,e,n,s,i,r){const o=e.eventCache;if(ga(s,n)!=null)return e;{let a,l;if(ie(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ws(e),u=c instanceof de?c:de.EMPTY_NODE,h=yv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Qc(s,ws(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ae(n);if(c===".priority"){L(Vn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Tp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Tp(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Dh(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return sr(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function ma(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=ae(n);if(!l.isCompleteForPath(n)&&Vn(n)>1)return e;const _=Ce(n),S=l.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),g,S,_,wv,null)}const h=dv(e,c,l.isFullyInitialized()||ie(n),u.filtersNodes()),f=new Lh(i,h,r);return bv(t,h,n,i,f,a)}function Zc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Lh(i,e,r);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=sr(e,c,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=sr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ce(n),g=a.getNode().getImmediateChild(h);let _;if(ie(f))_=s;else{const w=u.getCompleteChild(h);w!=null?Qy(f)===".priority"&&w.getChild(ev(f)).isEmpty()?_=w:_=w.updateChild(f,s):_=de.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),h,_,f,u,o);l=sr(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ip(t,e){return t.eventCache.isCompleteForChild(e)}function _O(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Be(n,l);Ip(e,ae(u))&&(a=Zc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Be(n,l);Ip(e,ae(u))||(a=Zc(t,a,u,c,i,r,o))}),a}function Cp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function eu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=s:c=new Ie(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=Cp(t,g,f);l=ma(t,l,new Se(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),w=Cp(t,_,f);l=ma(t,l,new Se(h),w,i,r,o,a)}}),l}function yO(t,e,n,s,i,r,o){if(ga(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ma(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ie(n)){let c=new Ie(null);return l.getNode().forEachChild(Xs,(u,h)=>{c=c.set(new Se(u),h)}),eu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const f=Be(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),eu(t,e,n,c,i,r,a,o)}}function vO(t,e,n,s,i){const r=e.serverCache,o=dv(e,r.getNode(),r.isFullyInitialized()||ie(n),r.isFiltered());return bv(t,o,n,s,wv,i)}function EO(t,e,n,s,i,r){let o;if(ga(s,n)!=null)return e;{const a=new Lh(s,e,i),l=e.eventCache.getNode();let c;if(ie(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qc(s,ws(e));else{const h=e.serverCache.getNode();L(h instanceof de,"serverChildren would be complete if leaf node"),u=yv(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ae(n);let h=Dh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,de.EMPTY_NODE,Ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qc(s,ws(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ga(s,ve())!=null,sr(e,c,o,t.filter.filtersNodes())}}function wO(t,e){const n=ws(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Sp(t,e,n,s){e.type===Gt.MERGE&&e.source.queryId!==null&&(L(ws(t.viewCache_),"We should always have a full cache before handling merges"),L(Yc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gO(t.processor_,i,e,n,s);return pO(t.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,bO(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bO(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Y1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp;function TO(t){L(!Rp,"__referenceConstructor has already been defined"),Rp=t}function Mh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return L(r!=null,"SyncTree gave us an op for an invalid query."),Sp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Sp(o,e,n,s));return r}}function Fh(t,e){let n=null;for(const s of t.views.values())n=n||wO(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;function IO(t){L(!Ap,"__referenceConstructor has already been defined"),Ap=t}class kp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=uO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CO(t,e,n,s,i){return Z1(t.pendingWriteTree_,e,n,s,i),i?fl(t,new Es(cv(),e,n)):[]}function Ms(t,e,n=!1){const s=eO(t.pendingWriteTree_,e);if(tO(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ve(),!0):Nt(s.children,o=>{r=r.set(new Se(o),!0)}),fl(t,new pa(s.path,r,n))}else return[]}function hl(t,e,n){return fl(t,new Es(uv(),e,n))}function SO(t,e,n){const s=Ie.fromObject(n);return fl(t,new Rr(uv(),e,s))}function RO(t,e,n,s){const i=Sv(t,s);if(i!=null){const r=Rv(i),o=r.path,a=r.queryId,l=St(o,e),c=new Es(hv(a),l,n);return Av(t,o,c)}else return[]}function AO(t,e,n,s){const i=Sv(t,s);if(i){const r=Rv(i),o=r.path,a=r.queryId,l=St(o,e),c=Ie.fromObject(n),u=new Rr(hv(a),l,c);return Av(t,o,u)}else return[]}function Tv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=St(o,e),c=Fh(a,l);if(c)return c});return _v(i,e,r,n,!0)}function fl(t,e){return Iv(e,t.syncPointTree_,null,gv(t.pendingWriteTree_,ve()))}function Iv(t,e,n,s){if(ie(t.path))return Cv(t,e,n,s);{const i=e.get(ve());n==null&&i!=null&&(n=Fh(i,ve()));let r=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vv(s,o);r=r.concat(Iv(a,l,c,u))}return i&&(r=r.concat(Mh(i,t,s,n))),r}}function Cv(t,e,n,s){const i=e.get(ve());n==null&&i!=null&&(n=Fh(i,ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vv(s,o),u=t.operationForChild(o);u&&(r=r.concat(Cv(u,a,l,c)))}),i&&(r=r.concat(Mh(i,t,s,n))),r}function Sv(t,e){return t.tagToQueryMap.get(e)}function Rv(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function Av(t,e,n){const s=t.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const i=gv(t.pendingWriteTree_,e);return Mh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uh(n)}node(){return this.node_}}class Bh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Bh(this.syncTree_,n)}node(){return Tv(this.syncTree_,this.path_)}}const kO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Np=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OO(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},OO=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},PO=function(t,e,n,s){return $h(e,new Bh(n,t),s)},xO=function(t,e,n){return $h(t,new Uh(e),n)};function $h(t,e,n){const s=t.getPriority().val(),i=Np(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Np(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Qe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(et,(a,l)=>{const c=$h(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function jh(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=ae(n);for(;i!==null;){const r=ii(s.node.children,i)||{children:{},childCount:0};s=new Hh(i,s,r),n=Ce(n),i=ae(n)}return s}function Ii(t){return t.node.value}function kv(t,e){t.node.value=e,tu(t)}function Nv(t){return t.node.childCount>0}function DO(t){return Ii(t)===void 0&&!Nv(t)}function dl(t,e){Nt(t.node.children,(n,s)=>{e(new Hh(n,t,s))})}function Ov(t,e,n,s){n&&!s&&e(t),dl(t,i=>{Ov(i,e,!0,s)}),n&&s&&e(t)}function LO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function eo(t){return new Se(t.parent===null?t.name:eo(t.parent)+"/"+t.name)}function tu(t){t.parent!==null&&MO(t.parent,t.name,t)}function MO(t,e,n){const s=DO(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,tu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/[\[\].#$\/\u0000-\u001F\u007F]/,UO=/[\[\].#$\u0000-\u001F\u007F]/,Xl=10*1024*1024,Pv=function(t){return typeof t=="string"&&t.length!==0&&!FO.test(t)},BO=function(t){return typeof t=="string"&&t.length!==0&&!UO.test(t)},$O=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BO(t)},xv=function(t,e,n){const s=n instanceof Se?new v1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(s)+" with contents = "+e.toString());if(Py(e))throw new Error(t+"contains "+e.toString()+" "+Qn(s));if(typeof e=="string"&&e.length>Xl/3&&$a(e)>Xl)throw new Error(t+"contains a string greater than "+Xl+" utf8 bytes "+Qn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Pv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E1(s,o),xv(t,a,s),w1(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qn(s)+" in addition to actual children.")}},HO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$O(n))throw new Error(I0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WO(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!tv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ss(t,e,n){WO(t,n),VO(t,s=>Ft(s,e)||Ft(e,s))}function VO(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(KO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hs&&Je("event: "+n.toString()),Qr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="repo_interrupt",zO=25;class GO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=da(),this.transactionQueueTree_=new Hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YO(t,e,n){if(t.stats_=Ah(t.repoInfo_),t.forceRestClient_||WN())t.server_=new fa(t.repoInfo_,(s,i,r,o)=>{Op(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Pp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new un(t.repoInfo_,e,(s,i,r,o)=>{Op(t,s,i,r,o)},s=>{Pp(t,s)},s=>{JO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=YN(t.repoInfo_,()=>new G1(t.stats_,t.server_)),t.infoData_=new W1,t.infoSyncTree_=new kp({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=hl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wh(t,"connected",!1),t.serverSyncTree_=new kp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ss(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function XO(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dv(t){return kO({timestamp:XO(t)})}function Op(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ko(n,c=>Qe(c));o=AO(t.serverSyncTree_,r,l,i)}else{const l=Qe(n);o=RO(t.serverSyncTree_,r,l,i)}else if(s){const l=Ko(n,c=>Qe(c));o=SO(t.serverSyncTree_,r,l)}else{const l=Qe(n);o=hl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Kh(t,r)),Ss(t.eventQueue_,a,o)}function Pp(t,e){Wh(t,"connected",e),e===!1&&ZO(t)}function JO(t,e){Nt(e,(n,s)=>{Wh(t,n,s)})}function Wh(t,e,n){const s=new Se("/.info/"+e),i=Qe(n);t.infoData_.updateSnapshot(s,i);const r=hl(t.infoSyncTree_,s,i);Ss(t.eventQueue_,s,r)}function QO(t){return t.nextWriteId_++}function ZO(t){Lv(t,"onDisconnectEvents");const e=Dv(t),n=da();Gc(t.onDisconnect_,ve(),(i,r)=>{const o=PO(i,r,t.serverSyncTree_,e);lv(n,i,o)});let s=[];Gc(n,ve(),(i,r)=>{s=s.concat(hl(t.serverSyncTree_,i,r));const o=sP(t,i);Kh(t,o)}),t.onDisconnect_=da(),Ss(t.eventQueue_,ve(),s)}function eP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qO)}function Lv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Mv(t,e,n){return Tv(t.serverSyncTree_,e,n)||de.EMPTY_NODE}function Vh(t,e=t.transactionQueueTree_){if(e||pl(t,e),Ii(e)){const n=Uv(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tP(t,eo(e),n)}else Nv(e)&&dl(e,n=>{Vh(t,n)})}function tP(t,e,n){const s=n.map(c=>c.currentWriteId),i=Mv(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=St(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Lv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ms(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();pl(t,jh(t.transactionQueueTree_,e)),Vh(t,t.transactionQueueTree_),Ss(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Qr(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{bt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Kh(t,e)}},o)}function Kh(t,e){const n=Fv(t,e),s=eo(n),i=Uv(t,n);return nP(t,i,s),s}function nP(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=St(n,l.path);let u=!1,h;if(L(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zO)u=!0,h="maxretry",i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Mv(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){xv("transaction failed: Data returned ",g,l.path);let _=Qe(g);typeof g=="object"&&g!=null&&_n(g,".priority")||(_=_.updatePriority(f.getPriority()));const S=l.currentWriteId,v=Dv(t),p=xO(_,f,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=QO(t),o.splice(o.indexOf(S),1),i=i.concat(CO(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Ms(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0))}Ss(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}pl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Qr(s[a]);Vh(t,t.transactionQueueTree_)}function Fv(t,e){let n,s=t.transactionQueueTree_;for(n=ae(e);n!==null&&Ii(s)===void 0;)s=jh(s,n),e=Ce(e),n=ae(e);return s}function Uv(t,e){const n=[];return Bv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Bv(t,e,n){const s=Ii(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);dl(e,i=>{Bv(t,i,n)})}function pl(t,e){const n=Ii(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,kv(e,n.length>0?n:void 0)}dl(e,s=>{pl(t,s)})}function sP(t,e){const n=eo(Fv(t,e)),s=jh(t.transactionQueueTree_,e);return LO(s,i=>{Jl(t,i)}),Jl(t,s),Ov(s,i=>{Jl(t,i)}),n}function Jl(t,e){const n=Ii(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ms(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?kv(e,void 0):n.length=r+1,Ss(t.eventQueue_,eo(e),i);for(let o=0;o<s.length;o++)Qr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const xp=function(t,e){const n=oP(t),s=n.namespace;n.domain==="firebase.com"&&ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qN(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},oP=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=iP(t.substring(u,h)));const f=rP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ie(this._path)?null:Qy(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const e=yp(this._queryParams),n=Sh(e);return n==="{}"?"default":n}get _queryObject(){return yp(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof qh))return!1;const n=this._repo===e._repo,s=tv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+y1(this._path)}}class Ci extends qh{constructor(e,n){super(e,n,new Ph,!1)}get parent(){const e=ev(this._path);return e===null?null:new Ci(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}TO(Ci);IO(Ci);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="FIREBASE_DATABASE_EMULATOR_HOST",nu={};let lP=!1;function cP(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xp(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[aP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=xp(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Kc(Kc.OWNER):new KN(t.name,t.options,e);HO("Invalid Firebase Database URL",o),ie(o.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hP(a,t,u,new VN(t.name,n));return new fP(h,t)}function uP(t,e){const n=nu[e];(!n||n[t.key]!==t)&&ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eP(t),delete n[t.key]}function hP(t,e,n,s){let i=nu[e.name];i||(i={},nu[e.name]=i);let r=i[t.toURLString()];return r&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new GO(t,lP,n,s),i[t.toURLString()]=r,r}class fP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){NN(Is),Jt(new $t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cP(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(ep,tp,t),wt(ep,tp,"esm2017")}un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dP();function pP(t){return(e,n)=>{const s=SN(e,n).run(()=>Dn(t));RN.set(e,s),kN(s,e)}}function gP(t,{firebaseApp:e,modules:n=[]}){t.provide(Ay,e);for(const s of n)t.use(s.bind(null,e))}const gl=Mb(vR);gl.use(Ub());gl.use(I_);gl.use(gP,{firebaseApp:cl,modules:[pP()]});gl.mount("#app");export{mb as $,Et as A,pg as B,ct as C,wa as D,Up as E,je as F,fn as G,tx as H,yt as I,Mb as J,OP as K,Ng as L,wl as M,Lw as N,YP as O,Dw as P,ax as Q,ba as R,Ws as S,UP as T,LP as U,Su as V,jw as W,Pg as X,wP as Y,NP as Z,Pa as _,$r as a,DE as a$,WP as a0,VP as a1,jP as a2,nx as a3,Ri as a4,_P as a5,au as a6,mn as a7,$p as a8,gu as a9,cw as aA,mw as aB,gw as aC,pw as aD,iE as aE,dw as aF,yu as aG,mu as aH,CP as aI,Ro as aJ,ng as aK,IP as aL,og as aM,pi as aN,Zp as aO,$P as aP,Df as aQ,MP as aR,xP as aS,PP as aT,ex as aU,hr as aV,yf as aW,zE as aX,ei as aY,xE as aZ,vP as a_,Hw as aa,Cu as ab,gi as ac,Lb as ad,JP as ae,lx as af,At as ag,Jw as ah,eg as ai,xn as aj,Qs as ak,De as al,HP as am,Fo as an,ds as ao,Zs as ap,GP as aq,Ww as ar,Aa as as,bs as at,mP as au,ya as av,lw as aw,hw as ax,_u as ay,fw as az,xC as b,Yw as b0,ZP as b1,yP as b2,Co as b3,FP as b4,re as b5,$E as b6,UE as b7,BP as b8,EP as b9,I_ as bA,fx as bB,hx as bC,dx as bD,zP as ba,sx as bb,ix as bc,Xw as bd,qP as be,dg as bf,zg as bg,Ab as bh,Gg as bi,Rb as bj,jo as bk,xb as bl,Qw as bm,bP as bn,js as bo,AP as bp,iw as bq,kP as br,XP as bs,KP as bt,_w as bu,ox as bv,QP as bw,fr as bx,SP as by,px as bz,gx as c,Mm as d,ux as e,vw as f,Uu as g,cn as h,Vs as i,Ee as j,ne as k,cx as l,DP as m,ot as n,Or as o,RP as p,ti as q,Dn as r,Bg as s,Yv as t,Fa as u,rx as v,cg as w,TP as x,Rt as y,Ln as z};
