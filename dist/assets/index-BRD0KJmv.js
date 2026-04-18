(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function F1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fh={exports:{}},Cc={},Bh={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),B1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),H1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),K1=Symbol.for("react.lazy"),Op=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Uh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hh=Object.assign,$h={};function to(t,e,r){this.props=t,this.context=e,this.refs=$h,this.updater=r||Uh}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wh(){}Wh.prototype=to.prototype;function sf(t,e,r){this.props=t,this.context=e,this.refs=$h,this.updater=r||Uh}var lf=sf.prototype=new Wh;lf.constructor=sf;Hh(lf,to.prototype);lf.isPureReactComponent=!0;var Ap=Array.isArray,Yh=Object.prototype.hasOwnProperty,cf={current:null},Vh={key:!0,ref:!0,__self:!0,__source:!0};function Xh(t,e,r){var n,i={},a=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Yh.call(e,n)&&!Vh.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Ps,type:t,key:a,ref:o,props:i,_owner:cf.current}}function q1(t,e){return{$$typeof:Ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ps}function Z1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Ip=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z1(""+t.key):e.toString(36)}function wl(t,e,r,n,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ps:case B1:o=!0}}if(o)return o=t,i=i(o),t=n===""?"."+Kc(o,0):n,Ap(i)?(r="",t!=null&&(r=t.replace(Ip,"$&/")+"/"),wl(i,e,r,"",function(u){return u})):i!=null&&(uf(i)&&(i=q1(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",Ap(t))for(var s=0;s<t.length;s++){a=t[s];var l=n+Kc(a,s);o+=wl(a,e,r,l,i)}else if(l=Q1(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=n+Kc(a,s++),o+=wl(a,e,r,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hs(t,e,r){if(t==null)return t;var n=[],i=0;return wl(t,n,"","",function(a){return e.call(r,a,i++)}),n}function J1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},_l={transition:null},ey={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:_l,ReactCurrentOwner:cf};function Gh(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Hs,forEach:function(t,e,r){Hs(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Hs(t,function(){e++}),e},toArray:function(t){return Hs(t,function(e){return e})||[]},only:function(t){if(!uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=to;re.Fragment=U1;re.Profiler=$1;re.PureComponent=sf;re.StrictMode=H1;re.Suspense=X1;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;re.act=Gh;re.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Hh({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=cf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Yh.call(e,l)&&!Vh.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Ps,type:t.type,key:i,ref:a,props:n,_owner:o}};re.createContext=function(t){return t={$$typeof:Y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W1,_context:t},t.Consumer=t};re.createElement=Xh;re.createFactory=function(t){var e=Xh.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:V1,render:t}};re.isValidElement=uf;re.lazy=function(t){return{$$typeof:K1,_payload:{_status:-1,_result:t},_init:J1}};re.memo=function(t,e){return{$$typeof:G1,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};re.unstable_act=Gh;re.useCallback=function(t,e){return Ft.current.useCallback(t,e)};re.useContext=function(t){return Ft.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};re.useEffect=function(t,e){return Ft.current.useEffect(t,e)};re.useId=function(){return Ft.current.useId()};re.useImperativeHandle=function(t,e,r){return Ft.current.useImperativeHandle(t,e,r)};re.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Ft.current.useMemo(t,e)};re.useReducer=function(t,e,r){return Ft.current.useReducer(t,e,r)};re.useRef=function(t){return Ft.current.useRef(t)};re.useState=function(t){return Ft.current.useState(t)};re.useSyncExternalStore=function(t,e,r){return Ft.current.useSyncExternalStore(t,e,r)};re.useTransition=function(){return Ft.current.useTransition()};re.version="18.3.1";Bh.exports=re;var b=Bh.exports;const ty=F1(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=b,ny=Symbol.for("react.element"),iy=Symbol.for("react.fragment"),ay=Object.prototype.hasOwnProperty,oy=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sy={key:!0,ref:!0,__self:!0,__source:!0};function Kh(t,e,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)ay.call(e,n)&&!sy.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:ny,type:t,key:a,ref:o,props:i,_owner:oy.current}}Cc.Fragment=iy;Cc.jsx=Kh;Cc.jsxs=Kh;Fh.exports=Cc;var c=Fh.exports,Uu={},Qh={exports:{}},vr={},qh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,O){var S=R.length;R.push(O);e:for(;0<S;){var $=S-1>>>1,ae=R[$];if(0<i(ae,O))R[$]=O,R[S]=ae,S=$;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var O=R[0],S=R.pop();if(S!==O){R[0]=S;e:for(var $=0,ae=R.length,pt=ae>>>1;$<pt;){var ce=2*($+1)-1,Oe=R[ce],we=ce+1,ve=R[we];if(0>i(Oe,S))we<ae&&0>i(ve,Oe)?(R[$]=ve,R[we]=S,$=we):(R[$]=Oe,R[ce]=S,$=ce);else if(we<ae&&0>i(ve,S))R[$]=ve,R[we]=S,$=we;else break e}}return O}function i(R,O){var S=R.sortIndex-O.sortIndex;return S!==0?S:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],d=1,f=null,p=3,m=!1,y=!1,h=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var O=r(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=R)n(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=r(u)}}function w(R){if(h=!1,x(R),!y)if(r(l)!==null)y=!0,q(k);else{var O=r(u);O!==null&&U(w,O.startTime-R)}}function k(R,O){y=!1,h&&(h=!1,v(E),E=-1),m=!0;var S=p;try{for(x(O),f=r(l);f!==null&&(!(f.expirationTime>O)||R&&!F());){var $=f.callback;if(typeof $=="function"){f.callback=null,p=f.priorityLevel;var ae=$(f.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===r(l)&&n(l),x(O)}else n(l);f=r(l)}if(f!==null)var pt=!0;else{var ce=r(u);ce!==null&&U(w,ce.startTime-O),pt=!1}return pt}finally{f=null,p=S,m=!1}}var C=!1,j=null,E=-1,P=5,T=-1;function F(){return!(t.unstable_now()-T<P)}function D(){if(j!==null){var R=t.unstable_now();T=R;var O=!0;try{O=j(!0,R)}finally{O?Y():(C=!1,j=null)}}else C=!1}var Y;if(typeof g=="function")Y=function(){g(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,V=X.port2;X.port1.onmessage=D,Y=function(){V.postMessage(null)}}else Y=function(){_(D,0)};function q(R){j=R,C||(C=!0,Y())}function U(R,O){E=_(function(){R(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,q(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(R){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var S=p;p=O;try{return R()}finally{p=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var S=p;p=R;try{return O()}finally{p=S}},t.unstable_scheduleCallback=function(R,O,S){var $=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?$+S:$):S=$,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=S+ae,R={id:d++,callback:O,priorityLevel:R,startTime:S,expirationTime:ae,sortIndex:-1},S>$?(R.sortIndex=S,e(u,R),r(l)===null&&R===r(u)&&(h?(v(E),E=-1):h=!0,U(w,S-$))):(R.sortIndex=ae,e(l,R),y||m||(y=!0,q(k))),R},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(R){var O=p;return function(){var S=p;p=O;try{return R.apply(this,arguments)}finally{p=S}}}})(Zh);qh.exports=Zh;var ly=qh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=b,mr=ly;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jh=new Set,ns={};function ra(t,e){Ua(t,e),Ua(t+"Capture",e)}function Ua(t,e){for(ns[t]=e,t=0;t<e.length;t++)Jh.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=Object.prototype.hasOwnProperty,uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Bp={};function dy(t){return Hu.call(Bp,t)?!0:Hu.call(Fp,t)?!1:uy.test(t)?Bp[t]=!0:(Fp[t]=!0,!1)}function fy(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function py(t,e,r,n){if(e===null||typeof e>"u"||fy(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,r,n,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);ft[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);ft[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);ft[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,r,n){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(py(e,r,i,n)&&(r=null),n||i===null?dy(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Dn=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),Up=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Qc;function ko(t){if(Qc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var qc=!1;function Zc(t,e){if(!t||qc)return"";qc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{qc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ko(t):""}function my(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ha:return"Fragment";case ma:return"Portal";case $u:return"Profiler";case mf:return"StrictMode";case Wu:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gy(t){var e=ng(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=gy(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=ng(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var r=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Hp(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=fi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ag(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Gu(t,e){ag(t,e);var r=fi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,r):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $p(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ku(t,e,r){(e!=="number"||$l(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var So=Array.isArray;function Ta(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+fi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(z(92));if(So(r)){if(1<r.length)throw Error(z(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:fi(r)}}function og(t,e){var r=fi(e.value),n=fi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ys,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function is(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vy=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function cg(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=cg(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var yy=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(yy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Pa=null,Ra=null;function Vp(t){if(t=Ds(t)){if(typeof td!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Rc(e),td(t.stateNode,t.type,e))}}function dg(t){Pa?Ra?Ra.push(t):Ra=[t]:Pa=t}function fg(){if(Pa){var t=Pa,e=Ra;if(Ra=Pa=null,Vp(t),e)for(t=0;t<e.length;t++)Vp(e[t])}}function pg(t,e){return t(e)}function mg(){}var Jc=!1;function hg(t,e,r){if(Jc)return t(e,r);Jc=!0;try{return pg(t,e,r)}finally{Jc=!1,(Pa!==null||Ra!==null)&&(mg(),fg())}}function as(t,e){var r=t.stateNode;if(r===null)return null;var n=Rc(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(z(231,e,typeof r));return r}var rd=!1;if(Cn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){rd=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{rd=!1}function xy(t,e,r,n,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var Oo=!1,Wl=null,Yl=!1,nd=null,wy={onError:function(t){Oo=!0,Wl=t}};function _y(t,e,r,n,i,a,o,s,l){Oo=!1,Wl=null,xy.apply(wy,arguments)}function by(t,e,r,n,i,a,o,s,l){if(_y.apply(this,arguments),Oo){if(Oo){var u=Wl;Oo=!1,Wl=null}else throw Error(z(198));Yl||(Yl=!0,nd=u)}}function na(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(t){if(na(t)!==t)throw Error(z(188))}function ky(t){var e=t.alternate;if(!e){if(e=na(t),e===null)throw Error(z(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Xp(i),t;if(a===n)return Xp(i),e;a=a.sibling}throw Error(z(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(z(189))}}if(r.alternate!==n)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?t:e}function vg(t){return t=ky(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var xg=mr.unstable_scheduleCallback,Gp=mr.unstable_cancelCallback,Sy=mr.unstable_shouldYield,jy=mr.unstable_requestPaint,Ue=mr.unstable_now,Cy=mr.unstable_getCurrentPriorityLevel,yf=mr.unstable_ImmediatePriority,wg=mr.unstable_UserBlockingPriority,Vl=mr.unstable_NormalPriority,Ey=mr.unstable_LowPriority,_g=mr.unstable_IdlePriority,Ec=null,an=null;function Ny(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:Ry,Ty=Math.log,Py=Math.LN2;function Ry(t){return t>>>=0,t===0?32:31-(Ty(t)/Py|0)|0}var Vs=64,Xs=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=jo(s):(a&=o,a!==0&&(n=jo(a)))}else o=r&~i,o!==0?n=jo(o):a!==0&&(n=jo(a));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-$r(e),i=1<<r,n|=t[r],e&=~i;return n}function zy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-$r(a),s=1<<o,l=i[o];l===-1?(!(s&r)||s&n)&&(i[o]=zy(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),t}function eu(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Rs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$r(e),t[e]=r}function My(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-$r(r),a=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~a}}function xf(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-$r(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var de=0;function kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sg,wf,jg,Cg,Eg,ad=!1,Gs=[],ti=null,ri=null,ni=null,os=new Map,ss=new Map,Vn=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":os.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function po(t,e,r,n,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},e!==null&&(e=Ds(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Oy(t,e,r,n,i){switch(e){case"focusin":return ti=po(ti,t,e,r,n,i),!0;case"dragenter":return ri=po(ri,t,e,r,n,i),!0;case"mouseover":return ni=po(ni,t,e,r,n,i),!0;case"pointerover":var a=i.pointerId;return os.set(a,po(os.get(a)||null,t,e,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,ss.set(a,po(ss.get(a)||null,t,e,r,n,i)),!0}return!1}function Ng(t){var e=Mi(t.target);if(e!==null){var r=na(e);if(r!==null){if(e=r.tag,e===13){if(e=gg(r),e!==null){t.blockedOn=e,Eg(t.priority,function(){jg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);ed=n,r.target.dispatchEvent(n),ed=null}else return e=Ds(r),e!==null&&wf(e),t.blockedOn=r,!1;e.shift()}return!0}function Qp(t,e,r){bl(t)&&r.delete(e)}function Ay(){ad=!1,ti!==null&&bl(ti)&&(ti=null),ri!==null&&bl(ri)&&(ri=null),ni!==null&&bl(ni)&&(ni=null),os.forEach(Qp),ss.forEach(Qp)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,mr.unstable_scheduleCallback(mr.unstable_NormalPriority,Ay)))}function ls(t){function e(i){return mo(i,t)}if(0<Gs.length){mo(Gs[0],t);for(var r=1;r<Gs.length;r++){var n=Gs[r];n.blockedOn===t&&(n.blockedOn=null)}}for(ti!==null&&mo(ti,t),ri!==null&&mo(ri,t),ni!==null&&mo(ni,t),os.forEach(e),ss.forEach(e),r=0;r<Vn.length;r++)n=Vn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Vn.length&&(r=Vn[0],r.blockedOn===null);)Ng(r),r.blockedOn===null&&Vn.shift()}var za=Dn.ReactCurrentBatchConfig,Gl=!0;function Iy(t,e,r,n){var i=de,a=za.transition;za.transition=null;try{de=1,_f(t,e,r,n)}finally{de=i,za.transition=a}}function Fy(t,e,r,n){var i=de,a=za.transition;za.transition=null;try{de=4,_f(t,e,r,n)}finally{de=i,za.transition=a}}function _f(t,e,r,n){if(Gl){var i=od(t,e,r,n);if(i===null)uu(t,e,n,Kl,r),Kp(t,n);else if(Oy(i,t,e,r,n))n.stopPropagation();else if(Kp(t,n),e&4&&-1<Ly.indexOf(t)){for(;i!==null;){var a=Ds(i);if(a!==null&&Sg(a),a=od(t,e,r,n),a===null&&uu(t,e,n,Kl,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else uu(t,e,n,null,r)}}var Kl=null;function od(t,e,r,n){if(Kl=null,t=vf(n),t=Mi(t),t!==null)if(e=na(t),e===null)t=null;else if(r=e.tag,r===13){if(t=gg(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function Tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cy()){case yf:return 1;case wg:return 4;case Vl:case Ey:return 16;case _g:return 536870912;default:return 16}default:return 16}}var Gn=null,bf=null,kl=null;function Pg(){if(kl)return kl;var t,e=bf,r=e.length,n,i="value"in Gn?Gn.value:Gn.textContent,a=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[a-n];n++);return kl=i.slice(t,1<n?1-n:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function qp(){return!1}function yr(t){function e(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ks:qp,this.isPropagationStopped=qp,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=yr(ro),zs=Re({},ro,{view:0,detail:0}),By=yr(zs),tu,ru,ho,Nc=Re({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(tu=t.screenX-ho.screenX,ru=t.screenY-ho.screenY):ru=tu=0,ho=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Zp=yr(Nc),Uy=Re({},Nc,{dataTransfer:0}),Hy=yr(Uy),$y=Re({},zs,{relatedTarget:0}),nu=yr($y),Wy=Re({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=yr(Wy),Vy=Re({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=yr(Vy),Gy=Re({},ro,{data:0}),Jp=yr(Gy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qy[t])?!!e[t]:!1}function Sf(){return Zy}var Jy=Re({},zs,{key:function(t){if(t.key){var e=Ky[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=yr(Jy),tx=Re({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=yr(tx),rx=Re({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),nx=yr(rx),ix=Re({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=yr(ix),ox=Re({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=yr(ox),lx=[9,13,27,32],jf=Cn&&"CompositionEvent"in window,Ao=null;Cn&&"documentMode"in document&&(Ao=document.documentMode);var cx=Cn&&"TextEvent"in window&&!Ao,Rg=Cn&&(!jf||Ao&&8<Ao&&11>=Ao),tm=" ",rm=!1;function zg(t,e){switch(t){case"keyup":return lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ga=!1;function ux(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(rm=!0,tm);case"textInput":return t=e.data,t===tm&&rm?null:t;default:return null}}function dx(t,e){if(ga)return t==="compositionend"||!jf&&zg(t,e)?(t=Pg(),kl=bf=Gn=null,ga=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fx[t.type]:e==="textarea"}function Mg(t,e,r,n){dg(n),e=Ql(e,"onChange"),0<e.length&&(r=new kf("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Io=null,cs=null;function px(t){Yg(t,0)}function Tc(t){var e=xa(t);if(ig(e))return t}function mx(t,e){if(t==="change")return e}var Lg=!1;if(Cn){var iu;if(Cn){var au="oninput"in document;if(!au){var im=document.createElement("div");im.setAttribute("oninput","return;"),au=typeof im.oninput=="function"}iu=au}else iu=!1;Lg=iu&&(!document.documentMode||9<document.documentMode)}function am(){Io&&(Io.detachEvent("onpropertychange",Og),cs=Io=null)}function Og(t){if(t.propertyName==="value"&&Tc(cs)){var e=[];Mg(e,cs,t,vf(t)),hg(px,e)}}function hx(t,e,r){t==="focusin"?(am(),Io=e,cs=r,Io.attachEvent("onpropertychange",Og)):t==="focusout"&&am()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(cs)}function vx(t,e){if(t==="click")return Tc(e)}function yx(t,e){if(t==="input"||t==="change")return Tc(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vr=typeof Object.is=="function"?Object.is:xx;function us(t,e){if(Vr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Hu.call(e,i)||!Vr(t[i],e[i]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var r=om(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=om(r)}}function Ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=$l(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wx(t){var e=Ig(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Ag(r.ownerDocument.documentElement,r)){if(n!==null&&Cf(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!t.extend&&a>n&&(i=n,n=a,a=i),i=sm(r,a);var o=sm(r,n);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>n?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _x=Cn&&"documentMode"in document&&11>=document.documentMode,va=null,sd=null,Fo=null,ld=!1;function lm(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ld||va==null||va!==$l(n)||(n=va,"selectionStart"in n&&Cf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fo&&us(Fo,n)||(Fo=n,n=Ql(sd,"onSelect"),0<n.length&&(e=new kf("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=va)))}function Qs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var ya={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},ou={},Fg={};Cn&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Pc(t){if(ou[t])return ou[t];if(!ya[t])return t;var e=ya[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Fg)return ou[t]=e[r];return t}var Bg=Pc("animationend"),Ug=Pc("animationiteration"),Hg=Pc("animationstart"),$g=Pc("transitionend"),Wg=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){Wg.set(t,e),ra(e,[t])}for(var su=0;su<cm.length;su++){var lu=cm[su],bx=lu.toLowerCase(),kx=lu[0].toUpperCase()+lu.slice(1);yi(bx,"on"+kx)}yi(Bg,"onAnimationEnd");yi(Ug,"onAnimationIteration");yi(Hg,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi($g,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function um(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,by(n,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var a=void 0;if(e)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;um(i,s,u),a=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;um(i,s,u),a=l}}}if(Yl)throw t=nd,Yl=!1,nd=null,t}function ye(t,e){var r=e[pd];r===void 0&&(r=e[pd]=new Set);var n=t+"__bubble";r.has(n)||(Vg(e,t,2,!1),r.add(n))}function cu(t,e,r){var n=0;e&&(n|=4),Vg(r,t,n,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function ds(t){if(!t[qs]){t[qs]=!0,Jh.forEach(function(r){r!=="selectionchange"&&(Sx.has(r)||cu(r,!1,t),cu(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qs]||(e[qs]=!0,cu("selectionchange",!1,e))}}function Vg(t,e,r,n){switch(Tg(e)){case 1:var i=Iy;break;case 4:i=Fy;break;default:i=_f}r=i.bind(null,e,r,t),i=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function uu(t,e,r,n,i){var a=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mi(s),o===null)return;if(l=o.tag,l===5||l===6){n=a=o;continue e}s=s.parentNode}}n=n.return}hg(function(){var u=a,d=vf(r),f=[];e:{var p=Wg.get(t);if(p!==void 0){var m=kf,y=t;switch(t){case"keypress":if(Sl(r)===0)break e;case"keydown":case"keyup":m=ex;break;case"focusin":y="focus",m=nu;break;case"focusout":y="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nx;break;case Bg:case Ug:case Hg:m=Yy;break;case $g:m=ax;break;case"scroll":m=By;break;case"wheel":m=sx;break;case"copy":case"cut":case"paste":m=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=em}var h=(e&4)!==0,_=!h&&t==="scroll",v=h?p!==null?p+"Capture":null:p;h=[];for(var g=u,x;g!==null;){x=g;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,v!==null&&(w=as(g,v),w!=null&&h.push(fs(g,w,x)))),_)break;g=g.return}0<h.length&&(p=new m(p,y,null,r,d),f.push({event:p,listeners:h}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&r!==ed&&(y=r.relatedTarget||r.fromElement)&&(Mi(y)||y[En]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=r.relatedTarget||r.toElement,m=u,y=y?Mi(y):null,y!==null&&(_=na(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(h=Zp,w="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(h=em,w="onPointerLeave",v="onPointerEnter",g="pointer"),_=m==null?p:xa(m),x=y==null?p:xa(y),p=new h(w,g+"leave",m,r,d),p.target=_,p.relatedTarget=x,w=null,Mi(d)===u&&(h=new h(v,g+"enter",y,r,d),h.target=x,h.relatedTarget=_,w=h),_=w,m&&y)t:{for(h=m,v=y,g=0,x=h;x;x=la(x))g++;for(x=0,w=v;w;w=la(w))x++;for(;0<g-x;)h=la(h),g--;for(;0<x-g;)v=la(v),x--;for(;g--;){if(h===v||v!==null&&h===v.alternate)break t;h=la(h),v=la(v)}h=null}else h=null;m!==null&&dm(f,p,m,h,!1),y!==null&&_!==null&&dm(f,_,y,h,!0)}}e:{if(p=u?xa(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=mx;else if(nm(p))if(Lg)k=yx;else{k=gx;var C=hx}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=vx);if(k&&(k=k(t,u))){Mg(f,k,r,d);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Ku(p,"number",p.value)}switch(C=u?xa(u):window,t){case"focusin":(nm(C)||C.contentEditable==="true")&&(va=C,sd=u,Fo=null);break;case"focusout":Fo=sd=va=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,lm(f,r,d);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":lm(f,r,d)}var j;if(jf)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ga?zg(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Rg&&r.locale!=="ko"&&(ga||E!=="onCompositionStart"?E==="onCompositionEnd"&&ga&&(j=Pg()):(Gn=d,bf="value"in Gn?Gn.value:Gn.textContent,ga=!0)),C=Ql(u,E),0<C.length&&(E=new Jp(E,t,null,r,d),f.push({event:E,listeners:C}),j?E.data=j:(j=Dg(r),j!==null&&(E.data=j)))),(j=cx?ux(t,r):dx(t,r))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(d=new Jp("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=j))}Yg(f,e)})}function fs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ql(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=as(t,r),a!=null&&n.unshift(fs(t,a,i)),a=as(t,e),a!=null&&n.push(fs(t,a,i))),t=t.return}return n}function la(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,r,n,i){for(var a=e._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,i?(l=as(r,a),l!=null&&o.unshift(fs(r,l,s))):i||(l=as(r,a),l!=null&&o.push(fs(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var jx=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Cx,"")}function Zs(t,e,r){if(e=fm(e),fm(t)!==e&&r)throw Error(z(425))}function ql(){}var cd=null,ud=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(Tx)}:fd;function Tx(t){setTimeout(function(){throw t})}function du(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),ls(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ls(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),en="__reactFiber$"+no,ps="__reactProps$"+no,En="__reactContainer$"+no,pd="__reactEvents$"+no,Px="__reactListeners$"+no,Rx="__reactHandles$"+no;function Mi(t){var e=t[en];if(e)return e;for(var r=t.parentNode;r;){if(e=r[En]||r[en]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=mm(t);t!==null;){if(r=t[en])return r;t=mm(t)}return e}t=r,r=t.parentNode}return null}function Ds(t){return t=t[en]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Rc(t){return t[ps]||null}var md=[],wa=-1;function xi(t){return{current:t}}function xe(t){0>wa||(t.current=md[wa],md[wa]=null,wa--)}function ge(t,e){wa++,md[wa]=t.current,t.current=e}var pi={},Ct=xi(pi),Yt=xi(!1),Gi=pi;function Ha(t,e){var r=t.type.contextTypes;if(!r)return pi;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=e[a];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function Zl(){xe(Yt),xe(Ct)}function hm(t,e,r){if(Ct.current!==pi)throw Error(z(168));ge(Ct,e),ge(Yt,r)}function Xg(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(z(108,hy(t)||"Unknown",i));return Re({},r,n)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Gi=Ct.current,ge(Ct,t),ge(Yt,Yt.current),!0}function gm(t,e,r){var n=t.stateNode;if(!n)throw Error(z(169));r?(t=Xg(t,e,Gi),n.__reactInternalMemoizedMergedChildContext=t,xe(Yt),xe(Ct),ge(Ct,t)):xe(Yt),ge(Yt,r)}var yn=null,zc=!1,fu=!1;function Gg(t){yn===null?yn=[t]:yn.push(t)}function zx(t){zc=!0,Gg(t)}function wi(){if(!fu&&yn!==null){fu=!0;var t=0,e=de;try{var r=yn;for(de=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}yn=null,zc=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),xg(yf,wi),i}finally{de=e,fu=!1}}return null}var _a=[],ba=0,ec=null,tc=0,_r=[],br=0,Ki=null,_n=1,bn="";function Ti(t,e){_a[ba++]=tc,_a[ba++]=ec,ec=t,tc=e}function Kg(t,e,r){_r[br++]=_n,_r[br++]=bn,_r[br++]=Ki,Ki=t;var n=_n;t=bn;var i=32-$r(n)-1;n&=~(1<<i),r+=1;var a=32-$r(e)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,_n=1<<32-$r(e)+i|r<<i|n,bn=a+t}else _n=1<<a|r<<i|n,bn=t}function Ef(t){t.return!==null&&(Ti(t,1),Kg(t,1,0))}function Nf(t){for(;t===ec;)ec=_a[--ba],_a[ba]=null,tc=_a[--ba],_a[ba]=null;for(;t===Ki;)Ki=_r[--br],_r[br]=null,bn=_r[--br],_r[br]=null,_n=_r[--br],_r[br]=null}var fr=null,cr=null,be=!1,Hr=null;function Qg(t,e){var r=jr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function vm(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fr=t,cr=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fr=t,cr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ki!==null?{id:_n,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=jr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,fr=t,cr=null,!0):!1;default:return!1}}function hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(be){var e=cr;if(e){var r=e;if(!vm(t,e)){if(hd(t))throw Error(z(418));e=ii(r.nextSibling);var n=fr;e&&vm(t,e)?Qg(n,r):(t.flags=t.flags&-4097|2,be=!1,fr=t)}}else{if(hd(t))throw Error(z(418));t.flags=t.flags&-4097|2,be=!1,fr=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fr=t}function Js(t){if(t!==fr)return!1;if(!be)return ym(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=cr)){if(hd(t))throw qg(),Error(z(418));for(;e;)Qg(t,e),e=ii(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){cr=ii(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}cr=null}}else cr=fr?ii(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=cr;t;)t=ii(t.nextSibling)}function $a(){cr=fr=null,be=!1}function Tf(t){Hr===null?Hr=[t]:Hr.push(t)}var Dx=Dn.ReactCurrentBatchConfig;function go(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var n=r.stateNode}if(!n)throw Error(z(147,t));var i=n,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xm(t){var e=t._init;return e(t._payload)}function Zg(t){function e(v,g){if(t){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function r(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=li(v,g),v.index=0,v.sibling=null,v}function a(v,g,x){return v.index=x,t?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=2,g):x):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,g,x,w){return g===null||g.tag!==6?(g=xu(x,v.mode,w),g.return=v,g):(g=i(g,x),g.return=v,g)}function l(v,g,x,w){var k=x.type;return k===ha?d(v,g,x.props.children,w,x.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wn&&xm(k)===g.type)?(w=i(g,x.props),w.ref=go(v,g,x),w.return=v,w):(w=Rl(x.type,x.key,x.props,null,v.mode,w),w.ref=go(v,g,x),w.return=v,w)}function u(v,g,x,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=wu(x,v.mode,w),g.return=v,g):(g=i(g,x.children||[]),g.return=v,g)}function d(v,g,x,w,k){return g===null||g.tag!==7?(g=Bi(x,v.mode,w,k),g.return=v,g):(g=i(g,x),g.return=v,g)}function f(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xu(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $s:return x=Rl(g.type,g.key,g.props,null,v.mode,x),x.ref=go(v,null,g),x.return=v,x;case ma:return g=wu(g,v.mode,x),g.return=v,g;case Wn:var w=g._init;return f(v,w(g._payload),x)}if(So(g)||uo(g))return g=Bi(g,v.mode,x,null),g.return=v,g;el(v,g)}return null}function p(v,g,x,w){var k=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:s(v,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $s:return x.key===k?l(v,g,x,w):null;case ma:return x.key===k?u(v,g,x,w):null;case Wn:return k=x._init,p(v,g,k(x._payload),w)}if(So(x)||uo(x))return k!==null?null:d(v,g,x,w,null);el(v,x)}return null}function m(v,g,x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(x)||null,s(g,v,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $s:return v=v.get(w.key===null?x:w.key)||null,l(g,v,w,k);case ma:return v=v.get(w.key===null?x:w.key)||null,u(g,v,w,k);case Wn:var C=w._init;return m(v,g,x,C(w._payload),k)}if(So(w)||uo(w))return v=v.get(x)||null,d(g,v,w,k,null);el(g,w)}return null}function y(v,g,x,w){for(var k=null,C=null,j=g,E=g=0,P=null;j!==null&&E<x.length;E++){j.index>E?(P=j,j=null):P=j.sibling;var T=p(v,j,x[E],w);if(T===null){j===null&&(j=P);break}t&&j&&T.alternate===null&&e(v,j),g=a(T,g,E),C===null?k=T:C.sibling=T,C=T,j=P}if(E===x.length)return r(v,j),be&&Ti(v,E),k;if(j===null){for(;E<x.length;E++)j=f(v,x[E],w),j!==null&&(g=a(j,g,E),C===null?k=j:C.sibling=j,C=j);return be&&Ti(v,E),k}for(j=n(v,j);E<x.length;E++)P=m(j,v,E,x[E],w),P!==null&&(t&&P.alternate!==null&&j.delete(P.key===null?E:P.key),g=a(P,g,E),C===null?k=P:C.sibling=P,C=P);return t&&j.forEach(function(F){return e(v,F)}),be&&Ti(v,E),k}function h(v,g,x,w){var k=uo(x);if(typeof k!="function")throw Error(z(150));if(x=k.call(x),x==null)throw Error(z(151));for(var C=k=null,j=g,E=g=0,P=null,T=x.next();j!==null&&!T.done;E++,T=x.next()){j.index>E?(P=j,j=null):P=j.sibling;var F=p(v,j,T.value,w);if(F===null){j===null&&(j=P);break}t&&j&&F.alternate===null&&e(v,j),g=a(F,g,E),C===null?k=F:C.sibling=F,C=F,j=P}if(T.done)return r(v,j),be&&Ti(v,E),k;if(j===null){for(;!T.done;E++,T=x.next())T=f(v,T.value,w),T!==null&&(g=a(T,g,E),C===null?k=T:C.sibling=T,C=T);return be&&Ti(v,E),k}for(j=n(v,j);!T.done;E++,T=x.next())T=m(j,v,E,T.value,w),T!==null&&(t&&T.alternate!==null&&j.delete(T.key===null?E:T.key),g=a(T,g,E),C===null?k=T:C.sibling=T,C=T);return t&&j.forEach(function(D){return e(v,D)}),be&&Ti(v,E),k}function _(v,g,x,w){if(typeof x=="object"&&x!==null&&x.type===ha&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $s:e:{for(var k=x.key,C=g;C!==null;){if(C.key===k){if(k=x.type,k===ha){if(C.tag===7){r(v,C.sibling),g=i(C,x.props.children),g.return=v,v=g;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wn&&xm(k)===C.type){r(v,C.sibling),g=i(C,x.props),g.ref=go(v,C,x),g.return=v,v=g;break e}r(v,C);break}else e(v,C);C=C.sibling}x.type===ha?(g=Bi(x.props.children,v.mode,w,x.key),g.return=v,v=g):(w=Rl(x.type,x.key,x.props,null,v.mode,w),w.ref=go(v,g,x),w.return=v,v=w)}return o(v);case ma:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(v,g.sibling),g=i(g,x.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else e(v,g);g=g.sibling}g=wu(x,v.mode,w),g.return=v,v=g}return o(v);case Wn:return C=x._init,_(v,g,C(x._payload),w)}if(So(x))return y(v,g,x,w);if(uo(x))return h(v,g,x,w);el(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,x),g.return=v,v=g):(r(v,g),g=xu(x,v.mode,w),g.return=v,v=g),o(v)):r(v,g)}return _}var Wa=Zg(!0),Jg=Zg(!1),rc=xi(null),nc=null,ka=null,Pf=null;function Rf(){Pf=ka=nc=null}function zf(t){var e=rc.current;xe(rc),t._currentValue=e}function vd(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Da(t,e){nc=t,Pf=ka=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function Pr(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},ka===null){if(nc===null)throw Error(z(308));ka=t,nc.dependencies={lanes:0,firstContext:t}}else ka=ka.next=t;return e}var Li=null;function Df(t){Li===null?Li=[t]:Li.push(t)}function e0(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Df(e)):(r.next=i.next,i.next=r),e.interleaved=r,Nn(t,n)}function Nn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Yn=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ai(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,se&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Nn(t,r)}return i=n.interleaved,i===null?(e.next=e,Df(n)):(e.next=i.next,i.next=e),n.interleaved=e,Nn(t,r)}function jl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,xf(t,r)}}function wm(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=e:a=a.next=e}else i=a=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ic(t,e,r,n){var i=t.updateQueue;Yn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,d=u=l=null,s=a;do{var p=s.lane,m=s.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=t,h=s;switch(p=e,m=r,h.tag){case 1:if(y=h.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=Re({},f,p);break e;case 2:Yn=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);qi|=o,t.lanes=o,t.memoizedState=f}}function _m(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(z(191,i));i.call(n)}}}var Ms={},on=xi(Ms),ms=xi(Ms),hs=xi(Ms);function Oi(t){if(t===Ms)throw Error(z(174));return t}function Lf(t,e){switch(ge(hs,e),ge(ms,t),ge(on,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}xe(on),ge(on,e)}function Ya(){xe(on),xe(ms),xe(hs)}function r0(t){Oi(hs.current);var e=Oi(on.current),r=qu(e,t.type);e!==r&&(ge(ms,t),ge(on,r))}function Of(t){ms.current===t&&(xe(on),xe(ms))}var Ce=xi(0);function ac(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function Af(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Cl=Dn.ReactCurrentDispatcher,mu=Dn.ReactCurrentBatchConfig,Qi=0,Te=null,Ke=null,rt=null,oc=!1,Bo=!1,gs=0,Mx=0;function yt(){throw Error(z(321))}function If(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Vr(t[r],e[r]))return!1;return!0}function Ff(t,e,r,n,i,a){if(Qi=a,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?Ix:Fx,t=r(n,i),Bo){a=0;do{if(Bo=!1,gs=0,25<=a)throw Error(z(301));a+=1,rt=Ke=null,e.updateQueue=null,Cl.current=Bx,t=r(n,i)}while(Bo)}if(Cl.current=sc,e=Ke!==null&&Ke.next!==null,Qi=0,rt=Ke=Te=null,oc=!1,e)throw Error(z(300));return t}function Bf(){var t=gs!==0;return gs=0,t}function qr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Te.memoizedState=rt=t:rt=rt.next=t,rt}function Rr(){if(Ke===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=rt===null?Te.memoizedState:rt.next;if(e!==null)rt=e,Ke=t;else{if(t===null)throw Error(z(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},rt===null?Te.memoizedState=rt=t:rt=rt.next=t}return rt}function vs(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=Rr(),r=e.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=t;var n=Ke,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,l=null,u=a;do{var d=u.lane;if((Qi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=n):l=l.next=f,Te.lanes|=d,qi|=d}u=u.next}while(u!==null&&u!==a);l===null?o=n:l.next=s,Vr(n,e.memoizedState)||(Wt=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do a=i.lane,Te.lanes|=a,qi|=a,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function gu(t){var e=Rr(),r=e.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,a=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);Vr(a,e.memoizedState)||(Wt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,n]}function n0(){}function i0(t,e){var r=Te,n=Rr(),i=e(),a=!Vr(n.memoizedState,i);if(a&&(n.memoizedState=i,Wt=!0),n=n.queue,Uf(s0.bind(null,r,n,t),[t]),n.getSnapshot!==e||a||rt!==null&&rt.memoizedState.tag&1){if(r.flags|=2048,ys(9,o0.bind(null,r,n,i,e),void 0,null),nt===null)throw Error(z(349));Qi&30||a0(r,e,i)}return i}function a0(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function o0(t,e,r,n){e.value=r,e.getSnapshot=n,l0(e)&&c0(t)}function s0(t,e,r){return r(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Vr(t,r)}catch{return!0}}function c0(t){var e=Nn(t,1);e!==null&&Wr(e,t,1,-1)}function bm(t){var e=qr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},e.queue=t,t=t.dispatch=Ax.bind(null,Te,t),[e.memoizedState,t]}function ys(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function u0(){return Rr().memoizedState}function El(t,e,r,n){var i=qr();Te.flags|=t,i.memoizedState=ys(1|e,r,void 0,n===void 0?null:n)}function Dc(t,e,r,n){var i=Rr();n=n===void 0?null:n;var a=void 0;if(Ke!==null){var o=Ke.memoizedState;if(a=o.destroy,n!==null&&If(n,o.deps)){i.memoizedState=ys(e,r,a,n);return}}Te.flags|=t,i.memoizedState=ys(1|e,r,a,n)}function km(t,e){return El(8390656,8,t,e)}function Uf(t,e){return Dc(2048,8,t,e)}function d0(t,e){return Dc(4,2,t,e)}function f0(t,e){return Dc(4,4,t,e)}function p0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m0(t,e,r){return r=r!=null?r.concat([t]):null,Dc(4,4,p0.bind(null,e,t),r)}function Hf(){}function h0(t,e){var r=Rr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&If(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function g0(t,e){var r=Rr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&If(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function v0(t,e,r){return Qi&21?(Vr(r,e)||(r=bg(),Te.lanes|=r,qi|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=r)}function Lx(t,e){var r=de;de=r!==0&&4>r?r:4,t(!0);var n=mu.transition;mu.transition={};try{t(!1),e()}finally{de=r,mu.transition=n}}function y0(){return Rr().memoizedState}function Ox(t,e,r){var n=si(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},x0(t))w0(e,r);else if(r=e0(t,e,r,n),r!==null){var i=It();Wr(r,t,n,i),_0(r,e,n)}}function Ax(t,e,r){var n=si(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(x0(t))w0(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Vr(s,o)){var l=e.interleaved;l===null?(i.next=i,Df(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=e0(t,e,i,n),r!==null&&(i=It(),Wr(r,t,n,i),_0(r,e,n))}}function x0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function w0(t,e){Bo=oc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function _0(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,xf(t,r)}}var sc={readContext:Pr,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},Ix={readContext:Pr,useCallback:function(t,e){return qr().memoizedState=[t,e===void 0?null:e],t},useContext:Pr,useEffect:km,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,El(4194308,4,p0.bind(null,e,t),r)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var r=qr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=qr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Ox.bind(null,Te,t),[n.memoizedState,t]},useRef:function(t){var e=qr();return t={current:t},e.memoizedState=t},useState:bm,useDebugValue:Hf,useDeferredValue:function(t){return qr().memoizedState=t},useTransition:function(){var t=bm(!1),e=t[0];return t=Lx.bind(null,t[1]),qr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Te,i=qr();if(be){if(r===void 0)throw Error(z(407));r=r()}else{if(r=e(),nt===null)throw Error(z(349));Qi&30||a0(n,e,r)}i.memoizedState=r;var a={value:r,getSnapshot:e};return i.queue=a,km(s0.bind(null,n,a,t),[t]),n.flags|=2048,ys(9,o0.bind(null,n,a,r,e),void 0,null),r},useId:function(){var t=qr(),e=nt.identifierPrefix;if(be){var r=bn,n=_n;r=(n&~(1<<32-$r(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=gs++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Mx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fx={readContext:Pr,useCallback:h0,useContext:Pr,useEffect:Uf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:hu,useRef:u0,useState:function(){return hu(vs)},useDebugValue:Hf,useDeferredValue:function(t){var e=Rr();return v0(e,Ke.memoizedState,t)},useTransition:function(){var t=hu(vs)[0],e=Rr().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:y0,unstable_isNewReconciler:!1},Bx={readContext:Pr,useCallback:h0,useContext:Pr,useEffect:Uf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:gu,useRef:u0,useState:function(){return gu(vs)},useDebugValue:Hf,useDeferredValue:function(t){var e=Rr();return Ke===null?e.memoizedState=t:v0(e,Ke.memoizedState,t)},useTransition:function(){var t=gu(vs)[0],e=Rr().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:y0,unstable_isNewReconciler:!1};function Br(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function yd(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Re({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Mc={isMounted:function(t){return(t=t._reactInternals)?na(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=It(),i=si(t),a=Sn(n,i);a.payload=e,r!=null&&(a.callback=r),e=ai(t,a,i),e!==null&&(Wr(e,t,i,n),jl(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=It(),i=si(t),a=Sn(n,i);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=ai(t,a,i),e!==null&&(Wr(e,t,i,n),jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=It(),n=si(t),i=Sn(r,n);i.tag=2,e!=null&&(i.callback=e),e=ai(t,i,n),e!==null&&(Wr(e,t,n,r),jl(e,t,n))}};function Sm(t,e,r,n,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,a,o):e.prototype&&e.prototype.isPureReactComponent?!us(r,n)||!us(i,a):!0}function b0(t,e,r){var n=!1,i=pi,a=e.contextType;return typeof a=="object"&&a!==null?a=Pr(a):(i=Vt(e)?Gi:Ct.current,n=e.contextTypes,a=(n=n!=null)?Ha(t,i):pi),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function jm(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function xd(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Mf(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Pr(a):(a=Vt(e)?Gi:Ct.current,i.context=Ha(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(yd(t,e,a,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),ic(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Va(t,e){try{var r="",n=e;do r+=my(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function vu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,r){r=Sn(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){cc||(cc=!0,Pd=n),wd(t,e)},r}function S0(t,e,r){r=Sn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){wd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){wd(t,e),typeof n!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function Cm(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Ux;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=tw.bind(null,t,e,r),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nm(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Sn(-1,1),e.tag=2,ai(r,e,1))),r.lanes|=1),t)}var Hx=Dn.ReactCurrentOwner,Wt=!1;function Dt(t,e,r,n){e.child=t===null?Jg(e,null,r,n):Wa(e,t.child,r,n)}function Tm(t,e,r,n,i){r=r.render;var a=e.ref;return Da(e,i),n=Ff(t,e,r,n,a,i),r=Bf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(be&&r&&Ef(e),e.flags|=1,Dt(t,e,n,i),e.child)}function Pm(t,e,r,n,i){if(t===null){var a=r.type;return typeof a=="function"&&!Qf(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,j0(t,e,a,n,i)):(t=Rl(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:us,r(o,n)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=li(a,n),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,r,n,i){if(t!==null){var a=t.memoizedProps;if(us(a,n)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=n=a,(t.lanes&i)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return _d(t,e,r,n,i)}function C0(t,e,r){var n=e.pendingProps,i=n.children,a=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ja,nr),nr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ja,nr),nr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ge(ja,nr),nr|=n}else a!==null?(n=a.baseLanes|r,e.memoizedState=null):n=r,ge(ja,nr),nr|=n;return Dt(t,e,i,r),e.child}function E0(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,r,n,i){var a=Vt(r)?Gi:Ct.current;return a=Ha(e,a),Da(e,i),r=Ff(t,e,r,n,a,i),n=Bf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(be&&n&&Ef(e),e.flags|=1,Dt(t,e,r,i),e.child)}function Rm(t,e,r,n,i){if(Vt(r)){var a=!0;Jl(e)}else a=!1;if(Da(e,i),e.stateNode===null)Nl(t,e),b0(e,r,n),xd(e,r,n,i),n=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Pr(u):(u=Vt(r)?Gi:Ct.current,u=Ha(e,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==u)&&jm(e,o,n,u),Yn=!1;var p=e.memoizedState;o.state=p,ic(e,n,o,i),l=e.memoizedState,s!==n||p!==l||Yt.current||Yn?(typeof d=="function"&&(yd(e,r,d,n),l=e.memoizedState),(s=Yn||Sm(e,r,s,n,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),o.props=n,o.state=l,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,t0(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Br(e.type,s),o.props=u,f=e.pendingProps,p=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Pr(l):(l=Vt(r)?Gi:Ct.current,l=Ha(e,l));var m=r.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&jm(e,o,n,l),Yn=!1,p=e.memoizedState,o.state=p,ic(e,n,o,i);var y=e.memoizedState;s!==f||p!==y||Yt.current||Yn?(typeof m=="function"&&(yd(e,r,m,n),y=e.memoizedState),(u=Yn||Sm(e,r,u,n,p,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),o.props=n,o.state=y,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),n=!1)}return bd(t,e,r,n,a,i)}function bd(t,e,r,n,i,a){E0(t,e);var o=(e.flags&128)!==0;if(!n&&!o)return i&&gm(e,r,!1),Tn(t,e,a);n=e.stateNode,Hx.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=Wa(e,t.child,null,a),e.child=Wa(e,null,s,a)):Dt(t,e,s,a),e.memoizedState=n.state,i&&gm(e,r,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(t,e.context,!1),Lf(t,e.containerInfo)}function zm(t,e,r,n,i){return $a(),Tf(i),e.flags|=256,Dt(t,e,r,n),e.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,r){var n=e.pendingProps,i=Ce.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ce,i&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,t=n.fallback,a?(n=e.mode,a=e.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ac(o,n,0,null),t=Bi(t,n,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Sd(r),e.memoizedState=kd,t):$f(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $x(t,e,o,n,s,i,r);if(a){a=n.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=li(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=li(s,a):(a=Bi(a,o,r,null),a.flags|=2),a.return=e,n.return=e,n.sibling=a,e.child=n,n=a,a=e.child,o=t.child.memoizedState,o=o===null?Sd(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=kd,n}return a=t.child,t=a.sibling,n=li(a,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function $f(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,r,n){return n!==null&&Tf(n),Wa(e,t.child,null,r),t=$f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $x(t,e,r,n,i,a,o){if(r)return e.flags&256?(e.flags&=-257,n=vu(Error(z(422))),tl(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=n.fallback,i=e.mode,n=Ac({mode:"visible",children:n.children},i,0,null),a=Bi(a,i,o,null),a.flags|=2,n.return=e,a.return=e,n.sibling=a,e.child=n,e.mode&1&&Wa(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=kd,a);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(z(419)),n=vu(a,n,void 0),tl(t,e,o,n)}if(s=(o&t.childLanes)!==0,Wt||s){if(n=nt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Nn(t,i),Wr(n,t,i,-1))}return Kf(),n=vu(Error(z(421))),tl(t,e,o,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rw.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,cr=ii(i.nextSibling),fr=e,be=!0,Hr=null,t!==null&&(_r[br++]=_n,_r[br++]=bn,_r[br++]=Ki,_n=t.id,bn=t.overflow,Ki=e),e=$f(e,n.children),e.flags|=4096,e)}function Dm(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),vd(t.return,e,r)}function yu(t,e,r,n,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function P0(t,e,r){var n=e.pendingProps,i=n.revealOrder,a=n.tail;if(Dt(t,e,n.children,r),n=Ce.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,r,e);else if(t.tag===19)Dm(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ge(Ce,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&ac(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),yu(e,!1,i,r,a);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}yu(e,!0,r,null,a);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),qi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,r=li(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=li(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Wx(t,e,r){switch(e.tag){case 3:N0(e),$a();break;case 5:r0(e);break;case 1:Vt(e.type)&&Jl(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ge(rc,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ge(Ce,Ce.current&1),e.flags|=128,null):r&e.child.childLanes?T0(t,e,r):(ge(Ce,Ce.current&1),t=Tn(t,e,r),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return P0(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),n)break;return null;case 22:case 23:return e.lanes=0,C0(t,e,r)}return Tn(t,e,r)}var R0,jd,z0,D0;R0=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};jd=function(){};z0=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Oi(on.current);var a=null;switch(r){case"input":i=Xu(t,i),n=Xu(t,n),a=[];break;case"select":i=Re({},i,{value:void 0}),n=Re({},n,{value:void 0}),a=[];break;case"textarea":i=Qu(t,i),n=Qu(t,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=ql)}Zu(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};D0=function(t,e,r,n){r!==n&&(e.flags|=4)};function vo(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function Yx(t,e,r){var n=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Vt(e.type)&&Zl(),xt(e),null;case 3:return n=e.stateNode,Ya(),xe(Yt),xe(Ct),Af(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hr!==null&&(Dd(Hr),Hr=null))),jd(t,e),xt(e),null;case 5:Of(e);var i=Oi(hs.current);if(r=e.type,t!==null&&e.stateNode!=null)z0(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(z(166));return xt(e),null}if(t=Oi(on.current),Js(e)){n=e.stateNode,r=e.type;var a=e.memoizedProps;switch(n[en]=e,n[ps]=a,t=(e.mode&1)!==0,r){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<Co.length;i++)ye(Co[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":Hp(n,a),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ye("invalid",n);break;case"textarea":Wp(n,a),ye("invalid",n)}Zu(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Zs(n.textContent,s,t),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Zs(n.textContent,s,t),i=["children",""+s]):ns.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ye("scroll",n)}switch(r){case"input":Ws(n),$p(n,a,!0);break;case"textarea":Ws(n),Yp(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=ql)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sg(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[en]=e,t[ps]=n,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ju(r,n),r){case"dialog":ye("cancel",t),ye("close",t),i=n;break;case"iframe":case"object":case"embed":ye("load",t),i=n;break;case"video":case"audio":for(i=0;i<Co.length;i++)ye(Co[i],t);i=n;break;case"source":ye("error",t),i=n;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=n;break;case"details":ye("toggle",t),i=n;break;case"input":Hp(t,n),i=Xu(t,n),ye("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Re({},n,{value:void 0}),ye("invalid",t);break;case"textarea":Wp(t,n),i=Qu(t,n),ye("invalid",t);break;default:i=n}Zu(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?ug(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&is(t,l):typeof l=="number"&&is(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ns.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ye("scroll",t):l!=null&&pf(t,a,l,o))}switch(r){case"input":Ws(t),$p(t,n,!1);break;case"textarea":Ws(t),Yp(t);break;case"option":n.value!=null&&t.setAttribute("value",""+fi(n.value));break;case"select":t.multiple=!!n.multiple,a=n.value,a!=null?Ta(t,!!n.multiple,a,!1):n.defaultValue!=null&&Ta(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ql)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(z(166));if(r=Oi(hs.current),Oi(on.current),Js(e)){if(n=e.stateNode,r=e.memoizedProps,n[en]=e,(a=n.nodeValue!==r)&&(t=fr,t!==null))switch(t.tag){case 3:Zs(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zs(n.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[en]=e,e.stateNode=n}return xt(e),null;case 13:if(xe(Ce),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&cr!==null&&e.mode&1&&!(e.flags&128))qg(),$a(),e.flags|=98560,a=!1;else if(a=Js(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(z(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[en]=e}else $a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),a=!1}else Hr!==null&&(Dd(Hr),Hr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?qe===0&&(qe=3):Kf())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Ya(),jd(t,e),t===null&&ds(e.stateNode.containerInfo),xt(e),null;case 10:return zf(e.type._context),xt(e),null;case 17:return Vt(e.type)&&Zl(),xt(e),null;case 19:if(xe(Ce),a=e.memoizedState,a===null)return xt(e),null;if(n=(e.flags&128)!==0,o=a.rendering,o===null)if(n)vo(a,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ac(t),o!==null){for(e.flags|=128,vo(a,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)a=r,t=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ge(Ce,Ce.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ue()>Xa&&(e.flags|=128,n=!0,vo(a,!1),e.lanes=4194304)}else{if(!n)if(t=ac(o),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),vo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!be)return xt(e),null}else 2*Ue()-a.renderingStartTime>Xa&&r!==1073741824&&(e.flags|=128,n=!0,vo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ue(),e.sibling=null,r=Ce.current,ge(Ce,n?r&1|2:r&1),e):(xt(e),null);case 22:case 23:return Gf(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?nr&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Vx(t,e){switch(Nf(e),e.tag){case 1:return Vt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ya(),xe(Yt),xe(Ct),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(xe(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));$a()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ce),null;case 4:return Ya(),null;case 10:return zf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var rl=!1,bt=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,A=null;function Sa(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Me(t,e,n)}else r.current=null}function Cd(t,e,r){try{r()}catch(n){Me(t,e,n)}}var Mm=!1;function Gx(t,e){if(cd=Gl,t=Ig(),Cf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,u=0,d=0,f=t,p=null;t:for(;;){for(var m;f!==r||i!==0&&f.nodeType!==3||(s=o+i),f!==a||n!==0&&f.nodeType!==3||(l=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===r&&++u===i&&(s=o),p===a&&++d===n&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(ud={focusedElem:t,selectionRange:r},Gl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,_=y.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?h:Br(e.type,h),_);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){Me(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=Mm,Mm=!1,y}function Uo(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Cd(e,r,a)}i=i.next}while(i!==n)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function Ed(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[ps],delete e[pd],delete e[Px],delete e[Rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L0(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ql));else if(n!==4&&(t=t.child,t!==null))for(Nd(t,e,r),t=t.sibling;t!==null;)Nd(t,e,r),t=t.sibling}function Td(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Td(t,e,r),t=t.sibling;t!==null;)Td(t,e,r),t=t.sibling}var lt=null,Ur=!1;function Hn(t,e,r){for(r=r.child;r!==null;)O0(t,e,r),r=r.sibling}function O0(t,e,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ec,r)}catch{}switch(r.tag){case 5:bt||Sa(r,e);case 6:var n=lt,i=Ur;lt=null,Hn(t,e,r),lt=n,Ur=i,lt!==null&&(Ur?(t=lt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):lt.removeChild(r.stateNode));break;case 18:lt!==null&&(Ur?(t=lt,r=r.stateNode,t.nodeType===8?du(t.parentNode,r):t.nodeType===1&&du(t,r),ls(t)):du(lt,r.stateNode));break;case 4:n=lt,i=Ur,lt=r.stateNode.containerInfo,Ur=!0,Hn(t,e,r),lt=n,Ur=i;break;case 0:case 11:case 14:case 15:if(!bt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Cd(r,e,o),i=i.next}while(i!==n)}Hn(t,e,r);break;case 1:if(!bt&&(Sa(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Me(r,e,s)}Hn(t,e,r);break;case 21:Hn(t,e,r);break;case 22:r.mode&1?(bt=(n=bt)||r.memoizedState!==null,Hn(t,e,r),bt=n):Hn(t,e,r);break;default:Hn(t,e,r)}}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Xx),e.forEach(function(n){var i=nw.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ir(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:lt=s.stateNode,Ur=!1;break e;case 3:lt=s.stateNode.containerInfo,Ur=!0;break e;case 4:lt=s.stateNode.containerInfo,Ur=!0;break e}s=s.return}if(lt===null)throw Error(z(160));O0(a,o,i),lt=null,Ur=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ir(e,t),Qr(t),n&4){try{Uo(3,t,t.return),Lc(3,t)}catch(h){Me(t,t.return,h)}try{Uo(5,t,t.return)}catch(h){Me(t,t.return,h)}}break;case 1:Ir(e,t),Qr(t),n&512&&r!==null&&Sa(r,r.return);break;case 5:if(Ir(e,t),Qr(t),n&512&&r!==null&&Sa(r,r.return),t.flags&32){var i=t.stateNode;try{is(i,"")}catch(h){Me(t,t.return,h)}}if(n&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&ag(i,a),Ju(s,o);var u=Ju(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ug(i,f):d==="dangerouslySetInnerHTML"?lg(i,f):d==="children"?is(i,f):pf(i,d,f,u)}switch(s){case"input":Gu(i,a);break;case"textarea":og(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Ta(i,!!a.multiple,m,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ta(i,!!a.multiple,a.defaultValue,!0):Ta(i,!!a.multiple,a.multiple?[]:"",!1))}i[ps]=a}catch(h){Me(t,t.return,h)}}break;case 6:if(Ir(e,t),Qr(t),n&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(h){Me(t,t.return,h)}}break;case 3:if(Ir(e,t),Qr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ls(e.containerInfo)}catch(h){Me(t,t.return,h)}break;case 4:Ir(e,t),Qr(t);break;case 13:Ir(e,t),Qr(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Vf=Ue())),n&4&&Om(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(bt=(u=bt)||d,Ir(e,t),bt=u):Ir(e,t),Qr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,m=p.child,p.tag){case 0:case 11:case 14:case 15:Uo(4,p,p.return);break;case 1:Sa(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){n=p,r=p.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(h){Me(n,r,h)}}break;case 5:Sa(p,p.return);break;case 22:if(p.memoizedState!==null){Im(f);continue}}m!==null?(m.return=p,A=m):Im(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cg("display",o))}catch(h){Me(t,t.return,h)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){Me(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ir(e,t),Qr(t),n&4&&Om(t);break;case 21:break;default:Ir(e,t),Qr(t)}}function Qr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(L0(r)){var n=r;break e}r=r.return}throw Error(z(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(is(i,""),n.flags&=-33);var a=Lm(t);Td(t,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=Lm(t);Nd(t,s,o);break;default:throw Error(z(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kx(t,e,r){A=t,I0(t)}function I0(t,e,r){for(var n=(t.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||rl;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||bt;s=rl;var u=bt;if(rl=o,(bt=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):l!==null?(l.return=o,A=l):Fm(i);for(;a!==null;)A=a,I0(a),a=a.sibling;A=i,rl=s,bt=u}Am(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,A=a):Am(t)}}function Am(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Lc(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!bt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Br(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&_m(e,a,n);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}_m(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ls(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}bt||e.flags&512&&Ed(e)}catch(p){Me(e,e.return,p)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Im(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Fm(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Lc(4,e)}catch(l){Me(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){Me(e,i,l)}}var a=e.return;try{Ed(e)}catch(l){Me(e,a,l)}break;case 5:var o=e.return;try{Ed(e)}catch(l){Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){A=null;break}var s=e.sibling;if(s!==null){s.return=e.return,A=s;break}A=e.return}}var Qx=Math.ceil,lc=Dn.ReactCurrentDispatcher,Wf=Dn.ReactCurrentOwner,Nr=Dn.ReactCurrentBatchConfig,se=0,nt=null,Ve=null,ut=0,nr=0,ja=xi(0),qe=0,xs=null,qi=0,Oc=0,Yf=0,Ho=null,$t=null,Vf=0,Xa=1/0,gn=null,cc=!1,Pd=null,oi=null,nl=!1,Kn=null,uc=0,$o=0,Rd=null,Tl=-1,Pl=0;function It(){return se&6?Ue():Tl!==-1?Tl:Tl=Ue()}function si(t){return t.mode&1?se&2&&ut!==0?ut&-ut:Dx.transition!==null?(Pl===0&&(Pl=bg()),Pl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Tg(t.type)),t):1}function Wr(t,e,r,n){if(50<$o)throw $o=0,Rd=null,Error(z(185));Rs(t,r,n),(!(se&2)||t!==nt)&&(t===nt&&(!(se&2)&&(Oc|=r),qe===4&&Xn(t,ut)),Xt(t,n),r===1&&se===0&&!(e.mode&1)&&(Xa=Ue()+500,zc&&wi()))}function Xt(t,e){var r=t.callbackNode;Dy(t,e);var n=Xl(t,t===nt?ut:0);if(n===0)r!==null&&Gp(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Gp(r),e===1)t.tag===0?zx(Bm.bind(null,t)):Gg(Bm.bind(null,t)),Nx(function(){!(se&6)&&wi()}),r=null;else{switch(kg(n)){case 1:r=yf;break;case 4:r=wg;break;case 16:r=Vl;break;case 536870912:r=_g;break;default:r=Vl}r=V0(r,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function F0(t,e){if(Tl=-1,Pl=0,se&6)throw Error(z(327));var r=t.callbackNode;if(Ma()&&t.callbackNode!==r)return null;var n=Xl(t,t===nt?ut:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=dc(t,n);else{e=n;var i=se;se|=2;var a=U0();(nt!==t||ut!==e)&&(gn=null,Xa=Ue()+500,Fi(t,e));do try{Jx();break}catch(s){B0(t,s)}while(!0);Rf(),lc.current=a,se=i,Ve!==null?e=0:(nt=null,ut=0,e=qe)}if(e!==0){if(e===2&&(i=id(t),i!==0&&(n=i,e=zd(t,i))),e===1)throw r=xs,Fi(t,0),Xn(t,n),Xt(t,Ue()),r;if(e===6)Xn(t,n);else{if(i=t.current.alternate,!(n&30)&&!qx(i)&&(e=dc(t,n),e===2&&(a=id(t),a!==0&&(n=a,e=zd(t,a))),e===1))throw r=xs,Fi(t,0),Xn(t,n),Xt(t,Ue()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(z(345));case 2:Pi(t,$t,gn);break;case 3:if(Xn(t,n),(n&130023424)===n&&(e=Vf+500-Ue(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fd(Pi.bind(null,t,$t,gn),e);break}Pi(t,$t,gn);break;case 4:if(Xn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var o=31-$r(n);a=1<<o,o=e[o],o>i&&(i=o),n&=~a}if(n=i,n=Ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qx(n/1960))-n,10<n){t.timeoutHandle=fd(Pi.bind(null,t,$t,gn),n);break}Pi(t,$t,gn);break;case 5:Pi(t,$t,gn);break;default:throw Error(z(329))}}}return Xt(t,Ue()),t.callbackNode===r?F0.bind(null,t):null}function zd(t,e){var r=Ho;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=dc(t,e),t!==2&&(e=$t,$t=r,e!==null&&Dd(e)),t}function Dd(t){$t===null?$t=t:$t.push.apply($t,t)}function qx(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Vr(a(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Yf,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-$r(e),n=1<<r;t[r]=-1,e&=~n}}function Bm(t){if(se&6)throw Error(z(327));Ma();var e=Xl(t,0);if(!(e&1))return Xt(t,Ue()),null;var r=dc(t,e);if(t.tag!==0&&r===2){var n=id(t);n!==0&&(e=n,r=zd(t,n))}if(r===1)throw r=xs,Fi(t,0),Xn(t,e),Xt(t,Ue()),r;if(r===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pi(t,$t,gn),Xt(t,Ue()),null}function Xf(t,e){var r=se;se|=1;try{return t(e)}finally{se=r,se===0&&(Xa=Ue()+500,zc&&wi())}}function Zi(t){Kn!==null&&Kn.tag===0&&!(se&6)&&Ma();var e=se;se|=1;var r=Nr.transition,n=de;try{if(Nr.transition=null,de=1,t)return t()}finally{de=n,Nr.transition=r,se=e,!(se&6)&&wi()}}function Gf(){nr=ja.current,xe(ja)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Ex(r)),Ve!==null)for(r=Ve.return;r!==null;){var n=r;switch(Nf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Zl();break;case 3:Ya(),xe(Yt),xe(Ct),Af();break;case 5:Of(n);break;case 4:Ya();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:zf(n.type._context);break;case 22:case 23:Gf()}r=r.return}if(nt=t,Ve=t=li(t.current,null),ut=nr=e,qe=0,xs=null,Yf=Oc=qi=0,$t=Ho=null,Li!==null){for(e=0;e<Li.length;e++)if(r=Li[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}Li=null}return t}function B0(t,e){do{var r=Ve;try{if(Rf(),Cl.current=sc,oc){for(var n=Te.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}oc=!1}if(Qi=0,rt=Ke=Te=null,Bo=!1,gs=0,Wf.current=null,r===null||r.return===null){qe=1,xs=e,Ve=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=ut,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Em(o);if(m!==null){m.flags&=-257,Nm(m,o,s,a,e),m.mode&1&&Cm(a,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var h=new Set;h.add(l),e.updateQueue=h}else y.add(l);break e}else{if(!(e&1)){Cm(a,u,e),Kf();break e}l=Error(z(426))}}else if(be&&s.mode&1){var _=Em(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Nm(_,o,s,a,e),Tf(Va(l,s));break e}}a=l=Va(l,s),qe!==4&&(qe=2),Ho===null?Ho=[a]:Ho.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var v=k0(a,l,e);wm(a,v);break e;case 1:s=l;var g=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(oi===null||!oi.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var w=S0(a,s,e);wm(a,w);break e}}a=a.return}while(a!==null)}$0(r)}catch(k){e=k,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(!0)}function U0(){var t=lc.current;return lc.current=sc,t===null?sc:t}function Kf(){(qe===0||qe===3||qe===2)&&(qe=4),nt===null||!(qi&268435455)&&!(Oc&268435455)||Xn(nt,ut)}function dc(t,e){var r=se;se|=2;var n=U0();(nt!==t||ut!==e)&&(gn=null,Fi(t,e));do try{Zx();break}catch(i){B0(t,i)}while(!0);if(Rf(),se=r,lc.current=n,Ve!==null)throw Error(z(261));return nt=null,ut=0,qe}function Zx(){for(;Ve!==null;)H0(Ve)}function Jx(){for(;Ve!==null&&!Sy();)H0(Ve)}function H0(t){var e=Y0(t.alternate,t,nr);t.memoizedProps=t.pendingProps,e===null?$0(t):Ve=e,Wf.current=null}function $0(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Vx(r,e),r!==null){r.flags&=32767,Ve=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ve=null;return}}else if(r=Yx(r,e,nr),r!==null){Ve=r;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);qe===0&&(qe=5)}function Pi(t,e,r){var n=de,i=Nr.transition;try{Nr.transition=null,de=1,ew(t,e,r,n)}finally{Nr.transition=i,de=n}return null}function ew(t,e,r,n){do Ma();while(Kn!==null);if(se&6)throw Error(z(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(My(t,a),t===nt&&(Ve=nt=null,ut=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||nl||(nl=!0,V0(Vl,function(){return Ma(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Nr.transition,Nr.transition=null;var o=de;de=1;var s=se;se|=4,Wf.current=null,Gx(t,r),A0(r,t),wx(ud),Gl=!!cd,ud=cd=null,t.current=r,Kx(r),jy(),se=s,de=o,Nr.transition=a}else t.current=r;if(nl&&(nl=!1,Kn=t,uc=i),a=t.pendingLanes,a===0&&(oi=null),Ny(r.stateNode),Xt(t,Ue()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(cc)throw cc=!1,t=Pd,Pd=null,t;return uc&1&&t.tag!==0&&Ma(),a=t.pendingLanes,a&1?t===Rd?$o++:($o=0,Rd=t):$o=0,wi(),null}function Ma(){if(Kn!==null){var t=kg(uc),e=Nr.transition,r=de;try{if(Nr.transition=null,de=16>t?16:t,Kn===null)var n=!1;else{if(t=Kn,Kn=null,uc=0,se&6)throw Error(z(331));var i=se;for(se|=4,A=t.current;A!==null;){var a=A,o=a.child;if(A.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Uo(8,d,a)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,m=d.return;if(M0(d),d===u){A=null;break}if(p!==null){p.return=m,A=p;break}A=m}}}var y=a.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var _=h.sibling;h.sibling=null,h=_}while(h!==null)}}A=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,A=o;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Uo(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}var g=t.current;for(A=g;A!==null;){o=A;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,A=x;else e:for(o=g;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lc(9,s)}}catch(k){Me(s,s.return,k)}if(s===o){A=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,A=w;break e}A=s.return}}if(se=i,wi(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ec,t)}catch{}n=!0}return n}finally{de=r,Nr.transition=e}}return!1}function Um(t,e,r){e=Va(r,e),e=k0(t,e,1),t=ai(t,e,1),e=It(),t!==null&&(Rs(t,1,e),Xt(t,e))}function Me(t,e,r){if(t.tag===3)Um(t,t,r);else for(;e!==null;){if(e.tag===3){Um(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(oi===null||!oi.has(n))){t=Va(r,t),t=S0(e,t,1),e=ai(e,t,1),t=It(),e!==null&&(Rs(e,1,t),Xt(e,t));break}}e=e.return}}function tw(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&r,nt===t&&(ut&r)===r&&(qe===4||qe===3&&(ut&130023424)===ut&&500>Ue()-Vf?Fi(t,0):Yf|=r),Xt(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):e=1);var r=It();t=Nn(t,e),t!==null&&(Rs(t,e,r),Xt(t,r))}function rw(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),W0(t,r)}function nw(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(e),W0(t,r)}var Y0;Y0=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Wt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Wt=!1,Wx(t,e,r);Wt=!!(t.flags&131072)}else Wt=!1,be&&e.flags&1048576&&Kg(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Nl(t,e),t=e.pendingProps;var i=Ha(e,Ct.current);Da(e,r),i=Ff(null,e,n,t,i,r);var a=Bf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(n)?(a=!0,Jl(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mf(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,xd(e,n,t,r),e=bd(null,e,n,!0,a,r)):(e.tag=0,be&&a&&Ef(e),Dt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=aw(n),t=Br(n,t),i){case 0:e=_d(null,e,n,t,r);break e;case 1:e=Rm(null,e,n,t,r);break e;case 11:e=Tm(null,e,n,t,r);break e;case 14:e=Pm(null,e,n,Br(n.type,t),r);break e}throw Error(z(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Br(n,i),_d(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Br(n,i),Rm(t,e,n,i,r);case 3:e:{if(N0(e),t===null)throw Error(z(387));n=e.pendingProps,a=e.memoizedState,i=a.element,t0(t,e),ic(e,n,null,r);var o=e.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=Va(Error(z(423)),e),e=zm(t,e,n,r,i);break e}else if(n!==i){i=Va(Error(z(424)),e),e=zm(t,e,n,r,i);break e}else for(cr=ii(e.stateNode.containerInfo.firstChild),fr=e,be=!0,Hr=null,r=Jg(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($a(),n===i){e=Tn(t,e,r);break e}Dt(t,e,n,r)}e=e.child}return e;case 5:return r0(e),t===null&&gd(e),n=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,dd(n,i)?o=null:a!==null&&dd(n,a)&&(e.flags|=32),E0(t,e),Dt(t,e,o,r),e.child;case 6:return t===null&&gd(e),null;case 13:return T0(t,e,r);case 4:return Lf(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Wa(e,null,n,r):Dt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Br(n,i),Tm(t,e,n,i,r);case 7:return Dt(t,e,e.pendingProps,r),e.child;case 8:return Dt(t,e,e.pendingProps.children,r),e.child;case 12:return Dt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,ge(rc,n._currentValue),n._currentValue=o,a!==null)if(Vr(a.value,o)){if(a.children===i.children&&!Yt.current){e=Tn(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=Sn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),vd(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(z(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),vd(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Dt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Da(e,r),i=Pr(i),n=n(i),e.flags|=1,Dt(t,e,n,r),e.child;case 14:return n=e.type,i=Br(n,e.pendingProps),i=Br(n.type,i),Pm(t,e,n,i,r);case 15:return j0(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Br(n,i),Nl(t,e),e.tag=1,Vt(n)?(t=!0,Jl(e)):t=!1,Da(e,r),b0(e,n,i),xd(e,n,i,r),bd(null,e,n,!0,t,r);case 19:return P0(t,e,r);case 22:return C0(t,e,r)}throw Error(z(156,e.tag))};function V0(t,e){return xg(t,e)}function iw(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(t,e,r,n){return new iw(t,e,r,n)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aw(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hf)return 11;if(t===gf)return 14}return 2}function li(t,e){var r=t.alternate;return r===null?(r=jr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Rl(t,e,r,n,i,a){var o=2;if(n=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ha:return Bi(r.children,i,a,e);case mf:o=8,i|=8;break;case $u:return t=jr(12,r,e,i|2),t.elementType=$u,t.lanes=a,t;case Wu:return t=jr(13,r,e,i),t.elementType=Wu,t.lanes=a,t;case Yu:return t=jr(19,r,e,i),t.elementType=Yu,t.lanes=a,t;case rg:return Ac(r,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case hf:o=11;break e;case gf:o=14;break e;case Wn:o=16,n=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=jr(o,r,e,i),e.elementType=t,e.type=n,e.lanes=a,e}function Bi(t,e,r,n){return t=jr(7,t,n,e),t.lanes=r,t}function Ac(t,e,r,n){return t=jr(22,t,n,e),t.elementType=rg,t.lanes=r,t.stateNode={isHidden:!1},t}function xu(t,e,r){return t=jr(6,t,null,e),t.lanes=r,t}function wu(t,e,r){return e=jr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ow(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qf(t,e,r,n,i,a,o,s,l){return t=new ow(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=jr(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(a),t}function sw(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function X0(t){if(!t)return pi;t=t._reactInternals;e:{if(na(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var r=t.type;if(Vt(r))return Xg(t,r,e)}return e}function G0(t,e,r,n,i,a,o,s,l){return t=qf(r,n,!0,t,i,a,o,s,l),t.context=X0(null),r=t.current,n=It(),i=si(r),a=Sn(n,i),a.callback=e??null,ai(r,a,i),t.current.lanes=i,Rs(t,i,n),Xt(t,n),t}function Ic(t,e,r,n){var i=e.current,a=It(),o=si(i);return r=X0(r),e.context===null?e.context=r:e.pendingContext=r,e=Sn(a,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ai(i,e,o),t!==null&&(Wr(t,i,o,a),jl(t,i,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Zf(t,e){Hm(t,e),(t=t.alternate)&&Hm(t,e)}function lw(){return null}var K0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Fc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Ic(t,e,null,null)};Fc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){Ic(null,t,null,null)}),e[En]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Vn.length&&e!==0&&e<Vn[r].priority;r++);Vn.splice(r,0,t),r===0&&Ng(t)}};function ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function cw(t,e,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=fc(o);a.call(u)}}var o=G0(e,n,t,0,null,!1,!1,"",$m);return t._reactRootContainer=o,t[En]=o.current,ds(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=fc(l);s.call(u)}}var l=qf(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=l,t[En]=l.current,ds(t.nodeType===8?t.parentNode:t),Zi(function(){Ic(e,l,r,n)}),l}function Uc(t,e,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=fc(o);s.call(l)}}Ic(e,o,t,i)}else o=cw(r,e,t,i,n);return fc(o)}Sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=jo(e.pendingLanes);r!==0&&(xf(e,r|1),Xt(e,Ue()),!(se&6)&&(Xa=Ue()+500,wi()))}break;case 13:Zi(function(){var n=Nn(t,1);if(n!==null){var i=It();Wr(n,t,1,i)}}),Zf(t,1)}};wf=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var r=It();Wr(e,t,134217728,r)}Zf(t,134217728)}};jg=function(t){if(t.tag===13){var e=si(t),r=Nn(t,e);if(r!==null){var n=It();Wr(r,t,e,n)}Zf(t,e)}};Cg=function(){return de};Eg=function(t,e){var r=de;try{return de=t,e()}finally{de=r}};td=function(t,e,r){switch(e){case"input":if(Gu(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Rc(n);if(!i)throw Error(z(90));ig(n),Gu(n,i)}}}break;case"textarea":og(t,r);break;case"select":e=r.value,e!=null&&Ta(t,!!r.multiple,e,!1)}};pg=Xf;mg=Zi;var uw={usingClientEntryPoint:!1,Events:[Ds,xa,Rc,dg,fg,Xf]},yo={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dw={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Ec=il.inject(dw),an=il}catch{}}vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;vr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ep(e))throw Error(z(200));return sw(t,e,null,r)};vr.createRoot=function(t,e){if(!ep(t))throw Error(z(299));var r=!1,n="",i=K0;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qf(t,1,!1,null,null,r,!1,n,i),t[En]=e.current,ds(t.nodeType===8?t.parentNode:t),new Jf(e)};vr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};vr.flushSync=function(t){return Zi(t)};vr.hydrate=function(t,e,r){if(!Bc(e))throw Error(z(200));return Uc(null,t,e,!0,r)};vr.hydrateRoot=function(t,e,r){if(!ep(t))throw Error(z(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=K0;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=G0(e,null,t,1,r??null,i,!1,a,o),t[En]=e.current,ds(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Fc(e)};vr.render=function(t,e,r){if(!Bc(e))throw Error(z(200));return Uc(null,t,e,!1,r)};vr.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(z(40));return t._reactRootContainer?(Zi(function(){Uc(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};vr.unstable_batchedUpdates=Xf;vr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Bc(r))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Uc(t,e,r,!1,n)};vr.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qh.exports=vr;var fw=Qh.exports,Wm=fw;Uu.createRoot=Wm.createRoot,Uu.hydrateRoot=Wm.hydrateRoot;/**
 * react-router v7.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ym="popstate";function Vm(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function pw(t={}){function e(n,i){var u;let a=(u=i.state)==null?void 0:u.masked,{pathname:o,search:s,hash:l}=a||n.location;return Md("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",a?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function r(n,i){return typeof i=="string"?i:ws(i)}return hw(e,r,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ln(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mw(){return Math.random().toString(36).substring(2,10)}function Xm(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Md(t,e,r=null,n,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:r,key:e&&e.key||n||mw(),unstable_mask:i}}function ws({pathname:t="/",search:e="",hash:r=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function io(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substring(r),t=t.substring(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function hw(t,e,r,n={}){let{window:i=document.defaultView,v5Compat:a=!1}=n,o=i.history,s="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function f(){s="POP";let _=d(),v=_==null?null:_-u;u=_,l&&l({action:s,location:h.location,delta:v})}function p(_,v){s="PUSH";let g=Vm(_)?_:Md(h.location,_,v);u=d()+1;let x=Xm(g,u),w=h.createHref(g.unstable_mask||g);try{o.pushState(x,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}a&&l&&l({action:s,location:h.location,delta:1})}function m(_,v){s="REPLACE";let g=Vm(_)?_:Md(h.location,_,v);u=d();let x=Xm(g,u),w=h.createHref(g.unstable_mask||g);o.replaceState(x,"",w),a&&l&&l({action:s,location:h.location,delta:0})}function y(_){return gw(_)}let h={get action(){return s},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ym,f),l=_,()=>{i.removeEventListener(Ym,f),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let v=y(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:m,go(_){return o.go(_)}};return h}function gw(t,e=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:ws(t);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function q0(t,e,r="/"){return vw(t,e,r,!1)}function vw(t,e,r,n){let i=typeof e=="string"?io(e):e,a=Pn(i.pathname||"/",r);if(a==null)return null;let o=Z0(t);yw(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let u=Tw(a);s=Ew(o[l],u,n)}return s}function Z0(t,e=[],r=[],n="",i=!1){let a=(o,s,l=i,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&l)return;Pe(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let f=Yr([n,d.relativePath]),p=r.concat(d);o.children&&o.children.length>0&&(Pe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Z0(o.children,e,p,f,l)),!(o.path==null&&!o.index)&&e.push({path:f,score:jw(f,o.index),routesMeta:p})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,s);else for(let u of J0(o.path))a(o,s,!0,u)}),e}function J0(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=J0(n.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function yw(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Cw(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var xw=/^:[\w-]+$/,ww=3,_w=2,bw=1,kw=10,Sw=-2,Gm=t=>t==="*";function jw(t,e){let r=t.split("/"),n=r.length;return r.some(Gm)&&(n+=Sw),e&&(n+=_w),r.filter(i=>!Gm(i)).reduce((i,a)=>i+(xw.test(a)?ww:a===""?bw:kw),n)}function Cw(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function Ew(t,e,r=!1){let{routesMeta:n}=t,i={},a="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],u=s===n.length-1,d=a==="/"?e:e.slice(a.length)||"/",f=pc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&r&&!n[n.length-1].route.index&&(f=pc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Yr([a,f.pathname]),pathnameBase:Dw(Yr([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Yr([a,f.pathnameBase]))}return o}function pc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Nw(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let y=s[p]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const m=s[p];return f&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:t}}function Nw(t,e=!1,r=!0){ln(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l,u,d)=>{if(n.push({paramName:s,isOptional:l!=null}),l){let f=d.charAt(u+o.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Tw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ln(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Pn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}var Pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Rw(t,e="/"){let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?io(t):t,a;return r?(r=tv(r),r.startsWith("/")?a=Km(r.substring(1),"/"):a=Km(r,e)):a=e,{pathname:a,search:Mw(n),hash:Lw(i)}}function Km(t,e){let r=mc(e).split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function _u(t,e,r,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zw(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function ev(t){let e=zw(t);return e.map((r,n)=>n===e.length-1?r.pathname:r.pathnameBase)}function tp(t,e,r,n=!1){let i;typeof t=="string"?i=io(t):(i={...t},Pe(!i.pathname||!i.pathname.includes("?"),_u("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),_u("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),_u("#","search","hash",i)));let a=t===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=r;else{let f=e.length-1;if(!n&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?e[f]:"/"}let l=Rw(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var tv=t=>t.replace(/\/\/+/g,"/"),Yr=t=>tv(t.join("/")),mc=t=>t.replace(/\/+$/,""),Dw=t=>mc(t).replace(/^\/*/,"/"),Mw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Lw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Ow=class{constructor(t,e,r,n=!1){this.status=t,this.statusText=e||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Aw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Iw(t){let e=t.map(r=>r.route.path).filter(Boolean);return Yr(e)||"/"}var rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nv(t,e){let r=t;if(typeof r!="string"||!Pw.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(rv)try{let a=new URL(window.location.href),o=r.startsWith("//")?new URL(a.protocol+r):new URL(r),s=Pn(o.pathname,e);o.origin===a.origin&&s!=null?r=s+o.search+o.hash:i=!0}catch{ln(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var iv=["POST","PUT","PATCH","DELETE"];new Set(iv);var Fw=["GET",...iv];new Set(Fw);var ao=b.createContext(null);ao.displayName="DataRouter";var Hc=b.createContext(null);Hc.displayName="DataRouterState";var av=b.createContext(!1);function Bw(){return b.useContext(av)}var ov=b.createContext({isTransitioning:!1});ov.displayName="ViewTransition";var Uw=b.createContext(new Map);Uw.displayName="Fetchers";var Hw=b.createContext(null);Hw.displayName="Await";var zr=b.createContext(null);zr.displayName="Navigation";var Ls=b.createContext(null);Ls.displayName="Location";var Mn=b.createContext({outlet:null,matches:[],isDataRoute:!1});Mn.displayName="Route";var rp=b.createContext(null);rp.displayName="RouteError";var sv="REACT_ROUTER_ERROR",$w="REDIRECT",Ww="ROUTE_ERROR_RESPONSE";function Yw(t){if(t.startsWith(`${sv}:${$w}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Vw(t){if(t.startsWith(`${sv}:${Ww}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Ow(e.status,e.statusText,e.data)}catch{}}function Xw(t,{relative:e}={}){Pe(Os(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=b.useContext(zr),{hash:i,pathname:a,search:o}=As(t,{relative:e}),s=a;return r!=="/"&&(s=a==="/"?r:Yr([r,a])),n.createHref({pathname:s,search:o,hash:i})}function Os(){return b.useContext(Ls)!=null}function Ln(){return Pe(Os(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Ls).location}var lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cv(t){b.useContext(zr).static||b.useLayoutEffect(t)}function Gw(){let{isDataRoute:t}=b.useContext(Mn);return t?s_():Kw()}function Kw(){Pe(Os(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(ao),{basename:e,navigator:r}=b.useContext(zr),{matches:n}=b.useContext(Mn),{pathname:i}=Ln(),a=JSON.stringify(ev(n)),o=b.useRef(!1);return cv(()=>{o.current=!0}),b.useCallback((l,u={})=>{if(ln(o.current,lv),!o.current)return;if(typeof l=="number"){r.go(l);return}let d=tp(l,JSON.parse(a),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Yr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,a,i,t])}b.createContext(null);function As(t,{relative:e}={}){let{matches:r}=b.useContext(Mn),{pathname:n}=Ln(),i=JSON.stringify(ev(r));return b.useMemo(()=>tp(t,JSON.parse(i),n,e==="path"),[t,i,n,e])}function Qw(t,e){return uv(t,e)}function uv(t,e,r){var _;Pe(Os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=b.useContext(zr),{matches:i}=b.useContext(Mn),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route;{let v=u&&u.path||"";fv(s,!u||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let d=Ln(),f;if(e){let v=typeof e=="string"?io(e):e;Pe(l==="/"||((_=v.pathname)==null?void 0:_.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${v.pathname}" was given in the \`location\` prop.`),f=v}else f=d;let p=f.pathname||"/",m=p;if(l!=="/"){let v=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=q0(t,{pathname:m});ln(u||y!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),ln(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=t_(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Yr([l,n.encodeLocation?n.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Yr([l,n.encodeLocation?n.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),i,r);return e&&h?b.createElement(Ls.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},h):h}function qw(){let t=o_(),e=Aw(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:a},"ErrorBoundary")," or"," ",b.createElement("code",{style:a},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),r?b.createElement("pre",{style:i},r):null,o)}var Zw=b.createElement(qw,null),dv=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=Vw(t.digest);r&&(t=r)}let e=t!==void 0?b.createElement(Mn.Provider,{value:this.props.routeContext},b.createElement(rp.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(Jw,{error:t},e):e}};dv.contextType=av;var bu=new WeakMap;function Jw({children:t,error:e}){let{basename:r}=b.useContext(zr);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=Yw(e.digest);if(n){let i=bu.get(e);if(i)throw i;let a=nv(n.location,r);if(rv&&!bu.get(e))if(a.isExternal||n.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:n.replace}));throw bu.set(e,o),o}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return t}function e_({routeContext:t,match:e,children:r}){let n=b.useContext(ao);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(Mn.Provider,{value:t},r)}function t_(t,e=[],r){let n=r==null?void 0:r.state;if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,a=n==null?void 0:n.errors;if(a!=null){let d=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);Pe(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let o=!1,s=-1;if(r&&n){o=n.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){r.isStatic&&(o=!0),s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}}let l=r==null?void 0:r.onError,u=n&&l?(d,f)=>{var p,m;l(d,{location:n.location,params:((m=(p=n.matches)==null?void 0:p[0])==null?void 0:m.params)??{},unstable_pattern:Iw(n.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let m,y=!1,h=null,_=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,h=f.route.errorElement||Zw,o&&(s<0&&p===0?(fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,_=null):s===p&&(y=!0,_=f.route.hydrateFallbackElement||null)));let v=e.concat(i.slice(0,p+1)),g=()=>{let x;return m?x=h:y?x=_:f.route.Component?x=b.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,b.createElement(e_,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(dv,{location:n.location,revalidation:n.revalidation,component:h,error:m,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:u}):g()},null)}function np(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r_(t){let e=b.useContext(ao);return Pe(e,np(t)),e}function n_(t){let e=b.useContext(Hc);return Pe(e,np(t)),e}function i_(t){let e=b.useContext(Mn);return Pe(e,np(t)),e}function ip(t){let e=i_(t),r=e.matches[e.matches.length-1];return Pe(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function a_(){return ip("useRouteId")}function o_(){var n;let t=b.useContext(rp),e=n_("useRouteError"),r=ip("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[r]}function s_(){let{router:t}=r_("useNavigate"),e=ip("useNavigate"),r=b.useRef(!1);return cv(()=>{r.current=!0}),b.useCallback(async(i,a={})=>{ln(r.current,lv),r.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...a}))},[t,e])}var Qm={};function fv(t,e,r){!e&&!Qm[t]&&(Qm[t]=!0,ln(!1,r))}b.memo(l_);function l_({routes:t,future:e,state:r,isStatic:n,onError:i}){return uv(t,void 0,{state:r,isStatic:n,onError:i})}function Eo(t){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function c_({basename:t="/",children:e=null,location:r,navigationType:n="POP",navigator:i,static:a=!1,unstable_useTransitions:o}){Pe(!Os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof r=="string"&&(r=io(r));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:m="default",unstable_mask:y}=r,h=b.useMemo(()=>{let _=Pn(u,s);return _==null?null:{location:{pathname:_,search:d,hash:f,state:p,key:m,unstable_mask:y},navigationType:n}},[s,u,d,f,p,m,n,y]);return ln(h!=null,`<Router basename="${s}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(zr.Provider,{value:l},b.createElement(Ls.Provider,{children:e,value:h}))}function u_({children:t,location:e}){return Qw(Ld(t),e)}function Ld(t,e=[]){let r=[];return b.Children.forEach(t,(n,i)=>{if(!b.isValidElement(n))return;let a=[...e,i];if(n.type===b.Fragment){r.push.apply(r,Ld(n.props.children,a));return}Pe(n.type===Eo,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!n.props.index||!n.props.children,"An index route cannot have child routes.");let o={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Ld(n.props.children,a)),r.push(o)}),r}var zl="get",Dl="application/x-www-form-urlencoded";function $c(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function d_(t){return $c(t)&&t.tagName.toLowerCase()==="button"}function f_(t){return $c(t)&&t.tagName.toLowerCase()==="form"}function p_(t){return $c(t)&&t.tagName.toLowerCase()==="input"}function m_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function h_(t,e){return t.button===0&&(!e||e==="_self")&&!m_(t)}var al=null;function g_(){if(al===null)try{new FormData(document.createElement("form"),0),al=!1}catch{al=!0}return al}var v_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ku(t){return t!=null&&!v_.has(t)?(ln(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dl}"`),null):t}function y_(t,e){let r,n,i,a,o;if(f_(t)){let s=t.getAttribute("action");n=s?Pn(s,e):null,r=t.getAttribute("method")||zl,i=ku(t.getAttribute("enctype"))||Dl,a=new FormData(t)}else if(d_(t)||p_(t)&&(t.type==="submit"||t.type==="image")){let s=t.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||s.getAttribute("action");if(n=l?Pn(l,e):null,r=t.getAttribute("formmethod")||s.getAttribute("method")||zl,i=ku(t.getAttribute("formenctype"))||ku(s.getAttribute("enctype"))||Dl,a=new FormData(s,t),!g_()){let{name:u,type:d,value:f}=t;if(d==="image"){let p=u?`${u}.`:"";a.append(`${p}x`,"0"),a.append(`${p}y`,"0")}else u&&a.append(u,f)}}else{if($c(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=zl,n=null,i=Dl,o=t}return a&&i==="text/plain"&&(o=a,a=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ap(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pv(t,e,r,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:e&&Pn(i.pathname,e)==="/"?i.pathname=`${mc(e)}/_root.${n}`:i.pathname=`${mc(i.pathname)}.${n}`,i}async function x_(t,e){if(t.id in e)return e[t.id];try{let r=await import(t.module);return e[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function w_(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function __(t,e,r){let n=await Promise.all(t.map(async i=>{let a=e.routes[i.route.id];if(a){let o=await x_(a,r);return o.links?o.links():[]}return[]}));return j_(n.flat(1).filter(w_).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function qm(t,e,r,n,i,a){let o=(l,u)=>r[u]?l.route.id!==r[u].route.id:!0,s=(l,u)=>{var d;return r[u].pathname!==l.pathname||((d=r[u].route.path)==null?void 0:d.endsWith("*"))&&r[u].params["*"]!==l.params["*"]};return a==="assets"?e.filter((l,u)=>o(l,u)||s(l,u)):a==="data"?e.filter((l,u)=>{var f;let d=n.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function b_(t,e,{includeHydrateFallback:r}={}){return k_(t.map(n=>{let i=e.routes[n.route.id];if(!i)return[];let a=[i.module];return i.clientActionModule&&(a=a.concat(i.clientActionModule)),i.clientLoaderModule&&(a=a.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(a=a.concat(i.hydrateFallbackModule)),i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function k_(t){return[...new Set(t)]}function S_(t){let e={},r=Object.keys(t).sort();for(let n of r)e[n]=t[n];return e}function j_(t,e){let r=new Set;return new Set(e),t.reduce((n,i)=>{let a=JSON.stringify(S_(i));return r.has(a)||(r.add(a),n.push({key:a,link:i})),n},[])}function op(){let t=b.useContext(ao);return ap(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function C_(){let t=b.useContext(Hc);return ap(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var sp=b.createContext(void 0);sp.displayName="FrameworkContext";function lp(){let t=b.useContext(sp);return ap(t,"You must render this element inside a <HydratedRouter> element"),t}function E_(t,e){let r=b.useContext(sp),[n,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=e,p=b.useRef(null);b.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let h=v=>{v.forEach(g=>{o(g.isIntersecting)})},_=new IntersectionObserver(h,{threshold:.5});return p.current&&_.observe(p.current),()=>{_.disconnect()}}},[t]),b.useEffect(()=>{if(n){let h=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(h)}}},[n]);let m=()=>{i(!0)},y=()=>{i(!1),o(!1)};return r?t!=="intent"?[a,p,{}]:[a,p,{onFocus:xo(s,m),onBlur:xo(l,y),onMouseEnter:xo(u,m),onMouseLeave:xo(d,y),onTouchStart:xo(f,m)}]:[!1,p,{}]}function xo(t,e){return r=>{t&&t(r),r.defaultPrevented||e(r)}}function N_({page:t,...e}){let r=Bw(),{router:n}=op(),i=b.useMemo(()=>q0(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?r?b.createElement(P_,{page:t,matches:i,...e}):b.createElement(R_,{page:t,matches:i,...e}):null}function T_(t){let{manifest:e,routeModules:r}=lp(),[n,i]=b.useState([]);return b.useEffect(()=>{let a=!1;return __(t,e,r).then(o=>{a||i(o)}),()=>{a=!0}},[t,e,r]),n}function P_({page:t,matches:e,...r}){let n=Ln(),{future:i}=lp(),{basename:a}=op(),o=b.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let s=pv(t,a,i.unstable_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of e)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&s.searchParams.set("_routes",u.join(",")),[s.pathname+s.search]},[a,i.unstable_trailingSlashAwareDataRequests,t,n,e]);return b.createElement(b.Fragment,null,o.map(s=>b.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...r})))}function R_({page:t,matches:e,...r}){let n=Ln(),{future:i,manifest:a,routeModules:o}=lp(),{basename:s}=op(),{loaderData:l,matches:u}=C_(),d=b.useMemo(()=>qm(t,e,u,a,n,"data"),[t,e,u,a,n]),f=b.useMemo(()=>qm(t,e,u,a,n,"assets"),[t,e,u,a,n]),p=b.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let h=new Set,_=!1;if(e.forEach(g=>{var w;let x=a.routes[g.route.id];!x||!x.hasLoader||(!d.some(k=>k.route.id===g.route.id)&&g.route.id in l&&((w=o[g.route.id])!=null&&w.shouldRevalidate)||x.hasClientLoader?_=!0:h.add(g.route.id))}),h.size===0)return[];let v=pv(t,s,i.unstable_trailingSlashAwareDataRequests,"data");return _&&h.size>0&&v.searchParams.set("_routes",e.filter(g=>h.has(g.route.id)).map(g=>g.route.id).join(",")),[v.pathname+v.search]},[s,i.unstable_trailingSlashAwareDataRequests,l,n,a,d,e,t,o]),m=b.useMemo(()=>b_(f,a),[f,a]),y=T_(f);return b.createElement(b.Fragment,null,p.map(h=>b.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...r})),m.map(h=>b.createElement("link",{key:h,rel:"modulepreload",href:h,...r})),y.map(({key:h,link:_})=>b.createElement("link",{key:h,nonce:r.nonce,..._,crossOrigin:_.crossOrigin??r.crossOrigin})))}function z_(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var D_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D_&&(window.__reactRouterVersion="7.14.1")}catch{}function M_({basename:t,children:e,unstable_useTransitions:r,window:n}){let i=b.useRef();i.current==null&&(i.current=pw({window:n,v5Compat:!0}));let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),l=b.useCallback(u=>{r===!1?s(u):b.startTransition(()=>s(u))},[r]);return b.useLayoutEffect(()=>a.listen(l),[a,l]),b.createElement(c_,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:r})}var mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cn=b.forwardRef(function({onClick:e,discover:r="render",prefetch:n="none",relative:i,reloadDocument:a,replace:o,unstable_mask:s,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,unstable_defaultShouldRevalidate:m,...y},h){let{basename:_,navigator:v,unstable_useTransitions:g}=b.useContext(zr),x=typeof d=="string"&&mv.test(d),w=nv(d,_);d=w.to;let k=Xw(d,{relative:i}),C=Ln(),j=null;if(s){let V=tp(s,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);_!=="/"&&(V.pathname=V.pathname==="/"?_:Yr([_,V.pathname])),j=v.createHref(V)}let[E,P,T]=E_(n,y),F=I_(d,{replace:o,unstable_mask:s,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g});function D(V){e&&e(V),V.defaultPrevented||F(V)}let Y=!(w.isExternal||a),X=b.createElement("a",{...y,...T,href:(Y?j:void 0)||w.absoluteURL||k,onClick:Y?D:e,ref:z_(h,P),target:u,"data-discover":!x&&r==="render"?"true":void 0});return E&&!x?b.createElement(b.Fragment,null,X,b.createElement(N_,{page:k})):X});cn.displayName="Link";var L_=b.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:n="",end:i=!1,style:a,to:o,viewTransition:s,children:l,...u},d){let f=As(o,{relative:u.relative}),p=Ln(),m=b.useContext(Hc),{navigator:y,basename:h}=b.useContext(zr),_=m!=null&&$_(f)&&s===!0,v=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,g=p.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(g=g.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase()),x&&h&&(x=Pn(x,h)||x);const w=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=g===v||!i&&g.startsWith(v)&&g.charAt(w)==="/",C=x!=null&&(x===v||!i&&x.startsWith(v)&&x.charAt(v.length)==="/"),j={isActive:k,isPending:C,isTransitioning:_},E=k?e:void 0,P;typeof n=="function"?P=n(j):P=[n,k?"active":null,C?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let T=typeof a=="function"?a(j):a;return b.createElement(cn,{...u,"aria-current":E,className:P,ref:d,style:T,to:o,viewTransition:s},typeof l=="function"?l(j):l)});L_.displayName="NavLink";var O_=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:r,reloadDocument:n,replace:i,state:a,method:o=zl,action:s,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p,...m},y)=>{let{unstable_useTransitions:h}=b.useContext(zr),_=U_(),v=H_(s,{relative:u}),g=o.toLowerCase()==="get"?"get":"post",x=typeof s=="string"&&mv.test(s),w=k=>{if(l&&l(k),k.defaultPrevented)return;k.preventDefault();let C=k.nativeEvent.submitter,j=(C==null?void 0:C.getAttribute("formmethod"))||o,E=()=>_(C||k.currentTarget,{fetcherKey:e,method:j,navigate:r,replace:i,state:a,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p});h&&r!==!1?b.startTransition(()=>E()):E()};return b.createElement("form",{ref:y,method:g,action:v,onSubmit:n?l:w,...m,"data-discover":!x&&t==="render"?"true":void 0})});O_.displayName="Form";function A_(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hv(t){let e=b.useContext(ao);return Pe(e,A_(t)),e}function I_(t,{target:e,replace:r,unstable_mask:n,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let d=Gw(),f=Ln(),p=As(t,{relative:o});return b.useCallback(m=>{if(h_(m,e)){m.preventDefault();let y=r!==void 0?r:ws(f)===ws(p),h=()=>d(t,{replace:y,unstable_mask:n,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:l});u?b.startTransition(()=>h()):h()}},[f,d,p,r,n,i,e,t,a,o,s,l,u])}var F_=0,B_=()=>`__${String(++F_)}__`;function U_(){let{router:t}=hv("useSubmit"),{basename:e}=b.useContext(zr),r=a_(),n=t.fetch,i=t.navigate;return b.useCallback(async(a,o={})=>{let{action:s,method:l,encType:u,formData:d,body:f}=y_(a,e);if(o.navigate===!1){let p=o.fetcherKey||B_();await n(p,r,o.action||s,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||u,flushSync:o.flushSync})}else await i(o.action||s,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,i,e,r])}function H_(t,{relative:e}={}){let{basename:r}=b.useContext(zr),n=b.useContext(Mn);Pe(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),a={...As(t||".",{relative:e})},o=Ln();if(t==null){a.search=o.search;let s=new URLSearchParams(a.search),l=s.getAll("index");if(l.some(d=>d==="")){s.delete("index"),l.filter(f=>f).forEach(f=>s.append("index",f));let d=s.toString();a.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:Yr([r,a.pathname])),ws(a)}function $_(t,{relative:e}={}){let r=b.useContext(ov);Pe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=hv("useViewTransitionState"),i=As(t,{relative:e});if(!r.isTransitioning)return!1;let a=Pn(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=Pn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return pc(i.pathname,o)!=null||pc(i.pathname,a)!=null}function W_(){const t=b.useRef(null),e=b.useRef(null);return b.useEffect(()=>{if(window.innerWidth<=768)return;const r=t.current,n=e.current;let i=0,a=0,o=0,s=0,l;const u=y=>{i=y.clientX,a=y.clientY};window.addEventListener("mousemove",u);const d=()=>{o+=(i-o)*.12,s+=(a-s)*.12,r&&(r.style.left=i+"px",r.style.top=a+"px"),n&&(n.style.left=o+"px",n.style.top=s+"px"),l=requestAnimationFrame(d)};d();const f=document.querySelectorAll("a, button, .skill-row, .proj-card, .cert-card, .mag-hover"),p=()=>document.body.classList.add("cursor-hover"),m=()=>document.body.classList.remove("cursor-hover");return f.forEach(y=>{y.addEventListener("mouseenter",p),y.addEventListener("mouseleave",m)}),()=>{window.removeEventListener("mousemove",u),cancelAnimationFrame(l),f.forEach(y=>{y.removeEventListener("mouseenter",p),y.removeEventListener("mouseleave",m)})}},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #cursor-dot {
          position: fixed; top:0; left:0; z-index:9999;
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); pointer-events: none;
          transform: translate(-50%,-50%);
          transition: width .3s, height .3s, background .3s;
        }
        #cursor-ring {
          position: fixed; top:0; left:0; z-index:9998;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(201,169,110,0.5); pointer-events: none;
          transform: translate(-50%,-50%);
          transition: width .4s, height .4s, border-color .3s, background .3s;
        }
        body.cursor-hover #cursor-dot { width: 12px; height: 12px; background: var(--gold2); }
        body.cursor-hover #cursor-ring { width: 56px; height: 56px; border-color: var(--gold2); background: rgba(201,169,110,0.06); }
        @media(max-width:768px){ #cursor-dot, #cursor-ring { display:none; } }
      `}),c.jsx("div",{id:"cursor-dot",ref:t}),c.jsx("div",{id:"cursor-ring",ref:e})]})}function vn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ga={duration:.5,overwrite:!1,delay:0},cp,dt,ke,Cr=1e8,me=1/Cr,Od=Math.PI*2,Y_=Od/4,V_=0,vv=Math.sqrt,X_=Math.cos,G_=Math.sin,it=function(e){return typeof e=="string"},Le=function(e){return typeof e=="function"},Rn=function(e){return typeof e=="number"},up=function(e){return typeof e>"u"},un=function(e){return typeof e=="object"},Gt=function(e){return e!==!1},dp=function(){return typeof window<"u"},ol=function(e){return Le(e)||it(e)},yv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,K_=/random\([^)]+\)/g,Q_=/,\s*/g,Zm=/(?:-?\.?\d|\.)+/gi,xv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wv=/[+-]=-?[.\d]+/,q_=/[^,'"\[\]\s]+/gi,Z_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ee,Zr,Ad,fp,hr={},hc={},_v,bv=function(e){return(hc=Ka(e,hr))&&Zt},pp=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},_s=function(e,r){return!r&&console.warn(e)},kv=function(e,r){return e&&(hr[e]=r)&&hc&&(hc[e]=r)||hr},bs=function(){return 0},J_={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},eb={suppressEvents:!0},mp={},ci=[],Id={},Sv,ar={},ju={},Jm=30,Ll=[],hp="",gp=function(e){var r=e[0],n,i;if(un(r)||Le(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(r););n=Ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gv(e[i],n)))||e.splice(i,1);return e},Ui=function(e){return e._gsap||gp(Er(e))[0]._gsap},jv=function(e,r,n){return(n=e[r])&&Le(n)?e[r]():up(n)&&e.getAttribute&&e.getAttribute(r)||n},Kt=function(e,r){return(e=e.split(",")).forEach(r)||e},Be=function(e){return Math.round(e*1e5)/1e5||0},je=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tb=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},gc=function(){var e=ci.length,r=ci.slice(0),n,i;for(Id={},ci.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vp=function(e){return!!(e._initted||e._startAt||e.add)},Cv=function(e,r,n,i){ci.length&&!dt&&gc(),e.render(r,n,!!(dt&&r<0&&vp(e))),ci.length&&!dt&&gc()},Ev=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(q_).length<2?r:it(e)?e.trim():e},Nv=function(e){return e},gr=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},rb=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},Ka=function(e,r){for(var n in r)e[n]=r[n];return e},eh=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=un(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},vc=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},Wo=function(e){var r=e.parent||Ee,n=e.keyframes?rb(jt(e.keyframes)):gr;if(Gt(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},nb=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},Tv=function(e,r,n,i,a){var o=e[i],s;if(a)for(s=r[a];o&&o[a]>s;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=o,r.parent=r._dp=e,r},Wc=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=r._prev,o=r._next;a?a._next=o:e[n]===r&&(e[n]=o),o?o._prev=a:e[i]===r&&(e[i]=a),r._next=r._prev=r.parent=null},mi=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hi=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ib=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},Fd=function(e,r,n,i){return e._startAt&&(dt?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},ab=function t(e){return!e||e._ts&&t(e.parent)},th=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,r){var n=Math.floor(e=je(e/r));return e&&n===e?n-1:n},yc=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Yc=function(e){return e._end=je(e._start+(e._tDur/Math.abs(e._ts||e._rts||me)||0))},Vc=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=je(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Yc(e),n._dirty||Hi(n,e)),e},Pv=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=yc(e.rawTime(),r),(!r._dur||Is(0,r.totalDuration(),n)-r._tTime>me)&&r.render(n,!0)),Hi(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-me}},tn=function(e,r,n,i){return r.parent&&mi(r),r._start=je((Rn(n)?n:n||e!==Ee?wr(e,n,r):e._time)+r._delay),r._end=je(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Tv(e,r,"_first","_last",e._sort?"_start":0),Bd(r)||(e._recent=r),i||Pv(e,r),e._ts<0&&Vc(e,e._tTime),e},Rv=function(e,r){return(hr.ScrollTrigger||pp("scrollTrigger",r))&&hr.ScrollTrigger.create(r,e)},zv=function(e,r,n,i,a){if(xp(e,r,a),!e._initted)return 1;if(!n&&e._pt&&!dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sv!==sr.frame)return ci.push(e),e._lazy=[a,i],1},ob=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},Bd=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},sb=function(e,r,n,i){var a=e.ratio,o=r<0||!r&&(!e._start&&ob(e)&&!(!e._initted&&Bd(e))||(e._ts<0||e._dp._ts<0)&&!Bd(e))?0:1,s=e._rDelay,l=0,u,d,f;if(s&&e._repeat&&(l=Is(0,e._tDur,r),d=Qa(l,s),e._yoyo&&d&1&&(o=1-o),d!==Qa(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||dt||i||e._zTime===me||!r&&e._zTime){if(!e._initted&&zv(e,r,i,n,l))return;for(f=e._zTime,e._zTime=r||(n?me:0),n||(n=r&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;r<0&&Fd(e,r,n,!0),e._onUpdate&&!n&&ur(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ur(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===o&&(o&&mi(e,1),!n&&!dt&&(ur(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},lb=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},qa=function(e,r,n,i){var a=e._repeat,o=je(r)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:je(o*(a+1)+e._rDelay*a):o,s>0&&!i&&Vc(e,e._tTime=e._tDur*s),e.parent&&Yc(e),n||Hi(e.parent,e),e},rh=function(e){return e instanceof Ot?Hi(e):qa(e,e._dur)},cb={_start:0,endTime:bs,totalDuration:bs},wr=function t(e,r,n){var i=e.labels,a=e._recent||cb,o=e.duration()>=Cr?a.endTime(!1):e._dur,s,l,u;return it(r)&&(isNaN(r)||r in i)?(l=r.charAt(0),u=r.substr(-1)==="%",s=r.indexOf("="),l==="<"||l===">"?(s>=0&&(r=r.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(s<0?a:n).totalDuration()/100:1)):s<0?(r in i||(i[r]=o),i[r]):(l=parseFloat(r.charAt(s-1)+r.substr(s+1)),u&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),s>1?t(e,r.substr(0,s-1),n)+l:o+l)):r==null?o:+r},Yo=function(e,r,n){var i=Rn(r[1]),a=(i?2:1)+(e<2?0:1),o=r[a],s,l;if(i&&(o.duration=r[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Gt(l.vars.inherit)&&l.parent;o.immediateRender=Gt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=r[a-1]}return new Ye(r[0],o,r[a+1])},_i=function(e,r){return e||e===0?r(e):r},Is=function(e,r,n){return n<e?e:n>r?r:n},kt=function(e,r){return!it(e)||!(r=Z_.exec(e))?"":r[1]},ub=function(e,r,n){return _i(n,function(i){return Is(e,r,i)})},Ud=[].slice,Dv=function(e,r){return e&&un(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&un(e[0]))&&!e.nodeType&&e!==Zr},db=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return it(i)&&!r||Dv(i,1)?(a=n).push.apply(a,Er(i)):n.push(i)})||n},Er=function(e,r,n){return ke&&!r&&ke.selector?ke.selector(e):it(e)&&!n&&(Ad||!Za())?Ud.call((r||fp).querySelectorAll(e),0):jt(e)?db(e,n):Dv(e)?Ud.call(e,0):e?[e]:[]},Hd=function(e){return e=Er(e)[0]||_s("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return Er(r,n.querySelectorAll?n:n===e?_s("Invalid scope")||fp.createElement("div"):e)}},Mv=function(e){return e.sort(function(){return .5-Math.random()})},Lv=function(e){if(Le(e))return e;var r=un(e)?e:{each:e},n=$i(r.ease),i=r.from||0,a=parseFloat(r.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,u=r.axis,d=i,f=i;return it(i)?d=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(d=i[0],f=i[1]),function(p,m,y){var h=(y||r).length,_=o[h],v,g,x,w,k,C,j,E,P;if(!_){if(P=r.grid==="auto"?0:(r.grid||[1,Cr])[1],!P){for(j=-Cr;j<(j=y[P++].getBoundingClientRect().left)&&P<h;);P<h&&P--}for(_=o[h]=[],v=l?Math.min(P,h)*d-.5:i%P,g=P===Cr?0:l?h*f/P-.5:i/P|0,j=0,E=Cr,C=0;C<h;C++)x=C%P-v,w=g-(C/P|0),_[C]=k=u?Math.abs(u==="y"?w:x):vv(x*x+w*w),k>j&&(j=k),k<E&&(E=k);i==="random"&&Mv(_),_.max=j-E,_.min=E,_.v=h=(parseFloat(r.amount)||parseFloat(r.each)*(P>h?h-1:u?u==="y"?h/P:P:Math.max(P,h/P))||0)*(i==="edges"?-1:1),_.b=h<0?a-h:a,_.u=kt(r.amount||r.each)||0,n=n&&h<0?Yv(n):n}return h=(_[p]-_.min)/_.max||0,je(_.b+(n?n(h):h)*_.v)+_.u}},$d=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=je(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Rn(n)?0:kt(n))}},Ov=function(e,r){var n=jt(e),i,a;return!n&&un(e)&&(i=n=e.radius||Cr,e.values?(e=Er(e.values),(a=!Rn(e[0]))&&(i*=i)):e=$d(e.increment)),_i(r,n?Le(e)?function(o){return a=e(o),Math.abs(a-o)<=i?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),u=Cr,d=0,f=e.length,p,m;f--;)a?(p=e[f].x-s,m=e[f].y-l,p=p*p+m*m):p=Math.abs(e[f]-s),p<u&&(u=p,d=f);return d=!i||u<=i?e[d]:o,a||d===o||Rn(o)?d:d+kt(o)}:$d(e))},Av=function(e,r,n,i){return _i(jt(e)?!r:n===!0?!!(n=0):!i,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},fb=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(a,o){return o(a)},i)}},pb=function(e,r){return function(n){return e(parseFloat(n))+(r||kt(n))}},mb=function(e,r,n){return Fv(e,r,0,1,n)},Iv=function(e,r,n){return _i(n,function(i){return e[~~r(i)]})},hb=function t(e,r,n){var i=r-e;return jt(e)?Iv(e,t(0,e.length),r):_i(n,function(a){return(i+(a-e)%i)%i+e})},gb=function t(e,r,n){var i=r-e,a=i*2;return jt(e)?Iv(e,t(0,e.length-1),r):_i(n,function(o){return o=(a+(o-e)%a)%a||0,e+(o>i?a-o:o)})},ks=function(e){return e.replace(K_,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(Q_);return Av(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fv=function(e,r,n,i,a){var o=r-e,s=i-n;return _i(a,function(l){return n+((l-e)/o*s||0)})},vb=function t(e,r,n,i){var a=isNaN(e+r)?0:function(m){return(1-m)*e+m*r};if(!a){var o=it(e),s={},l,u,d,f,p;if(n===!0&&(i=1)&&(n=null),o)e={p:e},r={p:r};else if(jt(e)&&!jt(r)){for(d=[],f=e.length,p=f-2,u=1;u<f;u++)d.push(t(e[u-1],e[u]));f--,a=function(y){y*=f;var h=Math.min(p,~~y);return d[h](y-h)},n=r}else i||(e=Ka(jt(e)?[]:{},e));if(!d){for(l in r)yp.call(s,e,l,"get",r[l]);a=function(y){return bp(y,s)||(o?e.p:e)}}}return _i(n,a)},nh=function(e,r,n){var i=e.labels,a=Cr,o,s,l;for(o in i)s=i[o]-r,s<0==!!n&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},ur=function(e,r,n){var i=e.vars,a=i[r],o=ke,s=e._ctx,l,u,d;if(a)return l=i[r+"Params"],u=i.callbackScope||e,n&&ci.length&&gc(),s&&(ke=s),d=l?a.apply(u,l):a.call(u),ke=o,d},No=function(e){return mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dt),e.progress()<1&&ur(e,"onInterrupt"),e},Ea,Bv=[],Uv=function(e){if(e)if(e=!e.name&&e.default||e,dp()||e.headless){var r=e.name,n=Le(e),i=r&&!n&&e.init?function(){this._props=[]}:e,a={init:bs,render:bp,add:yp,kill:Db,modifier:zb,rawVars:0},o={targetTest:0,get:0,getSetter:_p,aliases:{},register:0};if(Za(),e!==i){if(ar[r])return;gr(i,gr(vc(e,a),o)),Ka(i.prototype,Ka(a,vc(e,o))),ar[i.prop=r]=i,e.targetTest&&(Ll.push(i),mp[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}kv(r,i),e.register&&e.register(Zt,i,Qt)}else Bv.push(e)},pe=255,To={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},Cu=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*pe+.5|0},Hv=function(e,r,n){var i=e?Rn(e)?[e>>16,e>>8&pe,e&pe]:0:To.black,a,o,s,l,u,d,f,p,m,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),To[e])i=To[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pe,i&pe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pe,e&pe]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Zm),!r)l=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(u+1):d+u-d*u,a=d*2-o,i.length>3&&(i[3]*=1),i[0]=Cu(l+1/3,a,o),i[1]=Cu(l,a,o),i[2]=Cu(l-1/3,a,o);else if(~e.indexOf("="))return i=e.match(xv),n&&i.length<4&&(i[3]=1),i}else i=e.match(Zm)||To.transparent;i=i.map(Number)}return r&&!y&&(a=i[0]/pe,o=i[1]/pe,s=i[2]/pe,f=Math.max(a,o,s),p=Math.min(a,o,s),d=(f+p)/2,f===p?l=u=0:(m=f-p,u=d>.5?m/(2-f-p):m/(f+p),l=f===a?(o-s)/m+(o<s?6:0):f===o?(s-a)/m+2:(a-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},$v=function(e){var r=[],n=[],i=-1;return e.split(ui).forEach(function(a){var o=a.match(Ca)||[];r.push.apply(r,o),n.push(i+=o.length+1)}),r.c=n,r},ih=function(e,r,n){var i="",a=(e+i).match(ui),o=r?"hsla(":"rgba(",s=0,l,u,d,f;if(!a)return e;if(a=a.map(function(p){return(p=Hv(p,r,1))&&o+(r?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(d=$v(e),l=n.c,l.join(i)!==d.c.join(i)))for(u=e.replace(ui,"1").split(Ca),f=u.length-1;s<f;s++)i+=u[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!u)for(u=e.split(ui),f=u.length-1;s<f;s++)i+=u[s]+a[s];return i+u[f]},ui=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in To)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),yb=/hsl[a]?\(/,Wv=function(e){var r=e.join(" "),n;if(ui.lastIndex=0,ui.test(r))return n=yb.test(r),e[1]=ih(e[1],n),e[0]=ih(e[0],n,$v(e[1])),!0},Ss,sr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,a=1e3/240,o=a,s=[],l,u,d,f,p,m,y=function h(_){var v=t()-i,g=_===!0,x,w,k,C;if((v>e||v<0)&&(n+=v-r),i+=v,k=i-n,x=k-o,(x>0||g)&&(C=++f.frame,p=k-f.time*1e3,f.time=k=k/1e3,o+=x+(x>=a?4:a-x),w=1),g||(l=u(h)),w)for(m=0;m<s.length;m++)s[m](k,p,C,_)};return f={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return p/(1e3/(_||60))},wake:function(){_v&&(!Ad&&dp()&&(Zr=Ad=window,fp=Zr.document||{},hr.gsap=Zt,(Zr.gsapVersions||(Zr.gsapVersions=[])).push(Zt.version),bv(hc||Zr.GreenSockGlobals||!Zr.gsap&&Zr||{}),Bv.forEach(Uv)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=d||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Ss=1,y(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Ss=0,u=bs},lagSmoothing:function(_,v){e=_||1/0,r=Math.min(v||33,e)},fps:function(_){a=1e3/(_||240),o=f.time*1e3+a},add:function(_,v,g){var x=v?function(w,k,C,j){_(w,k,C,j),f.remove(x)}:_;return f.remove(_),s[g?"unshift":"push"](x),Za(),x},remove:function(_,v){~(v=s.indexOf(_))&&s.splice(v,1)&&m>=v&&m--},_listeners:s},f}(),Za=function(){return!Ss&&sr.wake()},ie={},xb=/^[\d.\-M][\d.\-,\s]/,wb=/["']/g,_b=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,o=n.length,s,l,u;a<o;a++)l=n[a],s=a!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),r[i]=isNaN(u)?u.replace(wb,"").trim():+u,i=l.substr(s+1).trim();return r},bb=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},kb=function(e){var r=(e+"").split("("),n=ie[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_b(r[1])]:bb(e).split(",").map(Ev)):ie._CE&&xb.test(e)?ie._CE("",e):n},Yv=function(e){return function(r){return 1-e(1-r)}},Vv=function t(e,r){for(var n=e._first,i;n;)n instanceof Ot?t(n,r):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==r&&(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},$i=function(e,r){return e&&(Le(e)?e:ie[e]||kb(e))||r},ia=function(e,r,n,i){n===void 0&&(n=function(l){return 1-r(1-l)}),i===void 0&&(i=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var a={easeIn:r,easeOut:n,easeInOut:i},o;return Kt(e,function(s){ie[s]=hr[s]=a,ie[o=s.toLowerCase()]=n;for(var l in a)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[s+"."+l]=a[l]}),a},Xv=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Eu=function t(e,r,n){var i=r>=1?r:1,a=(n||(e?.3:.45))/(r<1?r:1),o=a/Od*(Math.asin(1/i)||0),s=function(d){return d===1?1:i*Math.pow(2,-10*d)*G_((d-o)*a)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Xv(s);return a=Od/a,l.config=function(u,d){return t(e,u,d)},l},Nu=function t(e,r){r===void 0&&(r=1.70158);var n=function(o){return o?--o*o*((r+1)*o+r)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Xv(n);return i.config=function(a){return t(e,a)},i};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;ia(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;ia("Elastic",Eu("in"),Eu("out"),Eu());(function(t,e){var r=1/e,n=2*r,i=2.5*r,a=function(s){return s<r?t*s*s:s<n?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};ia("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);ia("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});ia("Circ",function(t){return-(vv(1-t*t)-1)});ia("Sine",function(t){return t===1?1:-X_(t*Y_)+1});ia("Back",Nu("in"),Nu("out"),Nu());ie.SteppedEase=ie.steps=hr.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),a=r?1:0,o=1-me;return function(s){return((i*Is(0,o,s)|0)+a)*n}}};Ga.ease=ie["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return hp+=t+","+t+"Params,"});var Gv=function(e,r){this.id=V_++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:jv,this.set=r?r.getSetter:_p},js=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,qa(this,+r.duration,1,1),this.data=r.data,ke&&(this._ctx=ke,ke.data.push(this)),Ss||sr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Za(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Vc(this,n),!a._dp||a.parent||Pv(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cv(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?Qa(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-me?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?yc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-me?0:this._rts,this.totalTime(Is(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),Yc(this),ib(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==me&&(this._tTime-=me)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=je(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=eb);var i=dt;return dt=n,vp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dt=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,rh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(wr(this,n),Gt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gt(i)),this._dur||(this._zTime=-me),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-me:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-me,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-me)},e.eventCallback=function(n,i,a){var o=this.vars;return arguments.length>1?(i?(o[n]=i,a&&(o[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,a=i._prom;return new Promise(function(o){var s=Le(n)?n:Nv,l=function(){var d=i.then;i.then=null,a&&a(),Le(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=d),o(s),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){No(this)},t}();gr(js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-me,_prom:0,_ps:!1,_rts:1});var Ot=function(t){gv(e,t);function e(n,i){var a;return n===void 0&&(n={}),a=t.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Gt(n.sortChildren),Ee&&tn(n.parent||Ee,vn(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Rv(vn(a),n.scrollTrigger),a}var r=e.prototype;return r.to=function(i,a,o){return Yo(0,arguments,this),this},r.from=function(i,a,o){return Yo(1,arguments,this),this},r.fromTo=function(i,a,o,s){return Yo(2,arguments,this),this},r.set=function(i,a,o){return a.duration=0,a.parent=this,Wo(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Ye(i,a,wr(this,o),1),this},r.call=function(i,a,o){return tn(this,Ye.delayedCall(0,i,a),o)},r.staggerTo=function(i,a,o,s,l,u,d){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=u,o.onCompleteParams=d,o.parent=this,new Ye(i,o,wr(this,l)),this},r.staggerFrom=function(i,a,o,s,l,u,d){return o.runBackwards=1,Wo(o).immediateRender=Gt(o.immediateRender),this.staggerTo(i,a,o,s,l,u,d)},r.staggerFromTo=function(i,a,o,s,l,u,d,f){return s.startAt=o,Wo(s).immediateRender=Gt(s.immediateRender),this.staggerTo(i,a,s,l,u,d,f)},r.render=function(i,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:je(i),f=this._zTime<0!=i<0&&(this._initted||!u),p,m,y,h,_,v,g,x,w,k,C,j;if(this!==Ee&&d>l&&i>=0&&(d=l),d!==this._tTime||o||f){if(s!==this._time&&u&&(d+=this._time-s,i+=this._time-s),p=d,w=this._start,x=this._ts,v=!x,f&&(u||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,_=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,a,o);if(p=je(d%_),d===l?(h=this._repeat,p=u):(k=je(d/_),h=~~k,h&&h===k&&(p=u,h--),p>u&&(p=u)),k=Qa(this._tTime,_),!s&&this._tTime&&k!==h&&this._tTime-k*_-this._dur<=0&&(k=h),C&&h&1&&(p=u-p,j=1),h!==k&&!this._lock){var E=C&&k&1,P=E===(C&&h&1);if(h<k&&(E=!E),s=E?0:d%u?u:d,this._lock=1,this.render(s||(j?0:je(h*_)),a,!u)._lock=0,this._tTime=d,!a&&this.parent&&ur(this,"onRepeat"),this.vars.repeatRefresh&&!j&&(this.invalidate()._lock=1,k=h),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,P&&(this._lock=2,s=E?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!j&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Vv(this,j)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=lb(this,je(s),je(p)),g&&(d-=p-(p=g._start))),this._tTime=d,this._time=p,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&u&&!a&&!k&&(ur(this,"onStart"),this._tTime!==d))return this;if(p>=s&&i>=0)for(m=this._first;m;){if(y=m._next,(m._act||p>=m._start)&&m._ts&&g!==m){if(m.parent!==this)return this.render(i,a,o);if(m.render(m._ts>0?(p-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(p-m._start)*m._ts,a,o),p!==this._time||!this._ts&&!v){g=0,y&&(d+=this._zTime=-me);break}}m=y}else{m=this._last;for(var T=i<0?i:p;m;){if(y=m._prev,(m._act||T<=m._end)&&m._ts&&g!==m){if(m.parent!==this)return this.render(i,a,o);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,a,o||dt&&vp(m)),p!==this._time||!this._ts&&!v){g=0,y&&(d+=this._zTime=T?-me:me);break}}m=y}}if(g&&!a&&(this.pause(),g.render(p>=s?0:-me)._zTime=p>=s?1:-1,this._ts))return this._start=w,Yc(this),this.render(i,a,o);this._onUpdate&&!a&&ur(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===l&&this._ts>0||!d&&this._ts<0)&&mi(this,1),!a&&!(i<0&&!s)&&(d||s||!l)&&(ur(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,a){var o=this;if(Rn(a)||(a=wr(this,a,i)),!(i instanceof js)){if(jt(i))return i.forEach(function(s){return o.add(s,a)}),this;if(it(i))return this.addLabel(i,a);if(Le(i))i=Ye.delayedCall(0,i);else return this}return this!==i?tn(this,i,a):this},r.getChildren=function(i,a,o,s){i===void 0&&(i=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Cr);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof Ye?a&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,a,o)))),u=u._next;return l},r.getById=function(i){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===i)return a[o]},r.remove=function(i){return it(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(i.parent===this&&Wc(this,i),i===this._recent&&(this._recent=this._last),Hi(this))},r.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(sr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},r.addLabel=function(i,a){return this.labels[i]=wr(this,a),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,a,o){var s=Ye.delayedCall(0,a||bs,o);return s.data="isPause",this._hasPause=1,tn(this,s,wr(this,i))},r.removePause=function(i){var a=this._first;for(i=wr(this,i);a;)a._start===i&&a.data==="isPause"&&mi(a),a=a._next},r.killTweensOf=function(i,a,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Qn!==s[l]&&s[l].kill(i,a);return this},r.getTweensOf=function(i,a){for(var o=[],s=Er(i),l=this._first,u=Rn(a),d;l;)l instanceof Ye?tb(l._targets,s)&&(u?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(d=l.getTweensOf(s,a)).length&&o.push.apply(o,d),l=l._next;return o},r.tweenTo=function(i,a){a=a||{};var o=this,s=wr(o,i),l=a,u=l.startAt,d=l.onStart,f=l.onStartParams,p=l.immediateRender,m,y=Ye.to(o,gr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale())||me,onStart:function(){if(o.pause(),!m){var _=a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale());y._dur!==_&&qa(y,_,0,1).render(y._time,!0,!0),m=1}d&&d.apply(y,f||[])}},a));return p?y.render(0):y},r.tweenFromTo=function(i,a,o){return this.tweenTo(a,gr({startAt:{time:wr(this,i)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),nh(this,wr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),nh(this,wr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+me)},r.shiftChildren=function(i,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,u;for(i=je(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(a)for(u in l)l[u]>=o&&(l[u]+=i);return Hi(this)},r.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hi(this)},r.totalDuration=function(i){var a=0,o=this,s=o._last,l=Cr,u,d,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,tn(o,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(a-=d,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=je(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=u;qa(o,o===Ee&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ee._ts&&(Cv(Ee,yc(i,Ee)),Sv=sr.frame),sr.frame>=Jm){Jm+=pr.autoSleep||120;var a=Ee._first;if((!a||!a._ts)&&pr.autoSleep&&sr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||sr.sleep()}}},e}(js);gr(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sb=function(e,r,n,i,a,o,s){var l=new Qt(this._pt,e,r,0,1,e1,null,a),u=0,d=0,f,p,m,y,h,_,v,g;for(l.b=n,l.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=ks(i)),o&&(g=[n,i],o(g,e,r),n=g[0],i=g[1]),p=n.match(Su)||[];f=Su.exec(i);)y=f[0],h=i.substring(u,f.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),y!==p[d++]&&(_=parseFloat(p[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:_,c:y.charAt(1)==="="?La(_,y)-_:parseFloat(y)-_,m:m&&m<4?Math.round:0},u=Su.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(wv.test(i)||v)&&(l.e=0),this._pt=l,l},yp=function(e,r,n,i,a,o,s,l,u,d){Le(i)&&(i=i(a||0,e,o));var f=e[r],p=n!=="get"?n:Le(f)?u?e[r.indexOf("set")||!Le(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():f,m=Le(f)?u?Tb:Zv:wp,y;if(it(i)&&(~i.indexOf("random(")&&(i=ks(i)),i.charAt(1)==="="&&(y=La(p,i)+(kt(p)||0),(y||y===0)&&(i=y))),!d||p!==i||Wd)return!isNaN(p*i)&&i!==""?(y=new Qt(this._pt,e,r,+p||0,i-(p||0),typeof f=="boolean"?Rb:Jv,0,m),u&&(y.fp=u),s&&y.modifier(s,this,e),this._pt=y):(!f&&!(r in e)&&pp(r,i),Sb.call(this,e,r,p,i,m,l||pr.stringFilter,u))},jb=function(e,r,n,i,a){if(Le(e)&&(e=Vo(e,a,r,n,i)),!un(e)||e.style&&e.nodeType||jt(e)||yv(e))return it(e)?Vo(e,a,r,n,i):e;var o={},s;for(s in e)o[s]=Vo(e[s],a,r,n,i);return o},Kv=function(e,r,n,i,a,o){var s,l,u,d;if(ar[e]&&(s=new ar[e]).init(a,s.rawVars?r[e]:jb(r[e],i,a,o,n),n,i,o)!==!1&&(n._pt=l=new Qt(n._pt,a,e,0,1,s.render,s,0,s.priority),n!==Ea))for(u=n._ptLookup[n._targets.indexOf(a)],d=s._props.length;d--;)u[s._props[d]]=l;return s},Qn,Wd,xp=function t(e,r,n){var i=e.vars,a=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,d=i.runBackwards,f=i.yoyoEase,p=i.keyframes,m=i.autoRevert,y=e._dur,h=e._startAt,_=e._targets,v=e.parent,g=v&&v.data==="nested"?v.vars.targets:_,x=e._overwrite==="auto"&&!cp,w=e.timeline,k,C,j,E,P,T,F,D,Y,X,V,q,U;if(w&&(!p||!a)&&(a="none"),e._ease=$i(a,Ga.ease),e._yEase=f?Yv($i(f===!0?a:f,Ga.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!i.runBackwards,!w||p&&!i.stagger){if(D=_[0]?Ui(_[0]).harness:0,q=D&&i[D.prop],k=vc(i,mp),h&&(h._zTime<0&&h.progress(1),r<0&&d&&s&&!m?h.render(-1,!0):h.revert(d&&y?Ml:J_),h._lazy=0),o){if(mi(e._startAt=Ye.set(_,gr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!h&&Gt(l),startAt:null,delay:0,onUpdate:u&&function(){return ur(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(dt||!s&&!m)&&e._startAt.revert(Ml),s&&y&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(d&&y&&!h){if(r&&(s=!1),j=gr({overwrite:!1,data:"isFromStart",lazy:s&&!h&&Gt(l),immediateRender:s,stagger:0,parent:v},k),q&&(j[D.prop]=q),mi(e._startAt=Ye.set(_,j)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(dt?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=r,!s)t(e._startAt,me,me);else if(!r)return}for(e._pt=e._ptCache=0,l=y&&Gt(l)||l&&!y,C=0;C<_.length;C++){if(P=_[C],F=P._gsap||gp(_)[C]._gsap,e._ptLookup[C]=X={},Id[F.id]&&ci.length&&gc(),V=g===_?C:g.indexOf(P),D&&(Y=new D).init(P,q||k,e,V,g)!==!1&&(e._pt=E=new Qt(e._pt,P,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(R){X[R]=E}),Y.priority&&(T=1)),!D||q)for(j in k)ar[j]&&(Y=Kv(j,k,e,V,P,g))?Y.priority&&(T=1):X[j]=E=yp.call(e,P,j,"get",k[j],V,g,0,i.stringFilter);e._op&&e._op[C]&&e.kill(P,e._op[C]),x&&e._pt&&(Qn=e,Ee.killTweensOf(P,X,e.globalTime(r)),U=!e.parent,Qn=0),e._pt&&l&&(Id[F.id]=1)}T&&t1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,p&&r<=0&&w.render(Cr,!0,!0)},Cb=function(e,r,n,i,a,o,s,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[r],d,f,p,m;if(!u)for(u=e._ptCache[r]=[],p=e._ptLookup,m=e._targets.length;m--;){if(d=p[m][r],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==r&&d.fp!==r;)d=d._next;if(!d)return Wd=1,e.vars[r]="+=0",xp(e,s),Wd=0,l?_s(r+" not eligible for reset"):1;u.push(d)}for(m=u.length;m--;)f=u[m],d=f._pt||f,d.s=(i||i===0)&&!a?i:d.s+(i||0)+o*d.c,d.c=n-d.s,f.e&&(f.e=Be(n)+kt(f.e)),f.b&&(f.b=d.s+kt(f.b))},Eb=function(e,r){var n=e[0]?Ui(e[0]).harness:0,i=n&&n.aliases,a,o,s,l;if(!i)return r;a=Ka({},r);for(o in i)if(o in a)for(l=i[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},Nb=function(e,r,n,i){var a=r.ease||i||"power1.inOut",o,s;if(jt(r))s=n[e]||(n[e]=[]),r.forEach(function(l,u){return s.push({t:u/(r.length-1)*100,v:l,e:a})});else for(o in r)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:r[o],e:a})},Vo=function(e,r,n,i,a){return Le(e)?e.call(r,n,i,a):it(e)&&~e.indexOf("random(")?ks(e):e},Qv=hp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qv={};Kt(Qv+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return qv[t]=1});var Ye=function(t){gv(e,t);function e(n,i,a,o){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=t.call(this,o?i:Wo(i))||this;var l=s.vars,u=l.duration,d=l.delay,f=l.immediateRender,p=l.stagger,m=l.overwrite,y=l.keyframes,h=l.defaults,_=l.scrollTrigger,v=l.yoyoEase,g=i.parent||Ee,x=(jt(n)||yv(n)?Rn(n[0]):"length"in i)?[n]:Er(n),w,k,C,j,E,P,T,F;if(s._targets=x.length?gp(x):_s("GSAP target "+n+" not found. https://gsap.com",!pr.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,y||p||ol(u)||ol(d)){if(i=s.vars,w=s.timeline=new Ot({data:"nested",defaults:h||{},targets:g&&g.data==="nested"?g.vars.targets:x}),w.kill(),w.parent=w._dp=vn(s),w._start=0,p||ol(u)||ol(d)){if(j=x.length,T=p&&Lv(p),un(p))for(E in p)~Qv.indexOf(E)&&(F||(F={}),F[E]=p[E]);for(k=0;k<j;k++)C=vc(i,qv),C.stagger=0,v&&(C.yoyoEase=v),F&&Ka(C,F),P=x[k],C.duration=+Vo(u,vn(s),k,P,x),C.delay=(+Vo(d,vn(s),k,P,x)||0)-s._delay,!p&&j===1&&C.delay&&(s._delay=d=C.delay,s._start+=d,C.delay=0),w.to(P,C,T?T(k,P,x):0),w._ease=ie.none;w.duration()?u=d=0:s.timeline=0}else if(y){Wo(gr(w.vars.defaults,{ease:"none"})),w._ease=$i(y.ease||i.ease||"none");var D=0,Y,X,V;if(jt(y))y.forEach(function(q){return w.to(x,q,">")}),w.duration();else{C={};for(E in y)E==="ease"||E==="easeEach"||Nb(E,y[E],C,y.easeEach);for(E in C)for(Y=C[E].sort(function(q,U){return q.t-U.t}),D=0,k=0;k<Y.length;k++)X=Y[k],V={ease:X.e,duration:(X.t-(k?Y[k-1].t:0))/100*u},V[E]=X.v,w.to(x,V,D),D+=V.duration;w.duration()<u&&w.to({},{duration:u-w.duration()})}}u||s.duration(u=w.duration())}else s.timeline=0;return m===!0&&!cp&&(Qn=vn(s),Ee.killTweensOf(x),Qn=0),tn(g,vn(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!u&&!y&&s._start===je(g._time)&&Gt(f)&&ab(vn(s))&&g.data!=="nested")&&(s._tTime=-me,s.render(Math.max(0,-d)||0)),_&&Rv(vn(s),_),s}var r=e.prototype;return r.render=function(i,a,o){var s=this._time,l=this._tDur,u=this._dur,d=i<0,f=i>l-me&&!d?l:i<me?0:i,p,m,y,h,_,v,g,x,w;if(!u)sb(this,i,a,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(p=f,x=this.timeline,this._repeat){if(h=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+i,a,o);if(p=je(f%h),f===l?(y=this._repeat,p=u):(_=je(f/h),y=~~_,y&&y===_?(p=u,y--):p>u&&(p=u)),v=this._yoyo&&y&1,v&&(w=this._yEase,p=u-p),_=Qa(this._tTime,h),p===s&&!o&&this._initted&&y===_)return this._tTime=f,this;y!==_&&(x&&this._yEase&&Vv(x,v),this.vars.repeatRefresh&&!v&&!this._lock&&p!==h&&this._initted&&(this._lock=o=1,this.render(je(h*y),!0).invalidate()._lock=0))}if(!this._initted){if(zv(this,d?i:p,o,a,f))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&y!==_))return this;if(u!==this._dur)return this.render(i,a,o)}if(this._tTime=f,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(w||this._ease)(p/u),this._from&&(this.ratio=g=1-g),!s&&f&&!a&&!_&&(ur(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(g,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(p/this._dur),a,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(d&&Fd(this,i,a,o),ur(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!a&&this.parent&&ur(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Fd(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&mi(this,1),!a&&!(d&&!s)&&(f||s||v)&&(ur(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,a,o,s,l){Ss||sr.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||xp(this,u),d=this._ease(u/this._dur),Cb(this,i,a,o,s,d,u,l)?this.resetTo(i,a,o,s,1):(Vc(this,0),this.parent||Tv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,Qn&&Qn.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&qa(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?Er(i):s,u=this._ptLookup,d=this._pt,f,p,m,y,h,_,v;if((!a||a==="all")&&nb(s,l))return a==="all"&&(this._pt=0),No(this);for(f=this._op=this._op||[],a!=="all"&&(it(a)&&(h={},Kt(a,function(g){return h[g]=1}),a=h),a=Eb(s,a)),v=s.length;v--;)if(~l.indexOf(s[v])){p=u[v],a==="all"?(f[v]=a,y=p,m={}):(m=f[v]=f[v]||{},y=a);for(h in y)_=p&&p[h],_&&((!("kill"in _.d)||_.d.kill(h)===!0)&&Wc(this,_,"_pt"),delete p[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&d&&No(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return Yo(1,arguments)},e.delayedCall=function(i,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,a,o){return Yo(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,o){return Ee.killTweensOf(i,a,o)},e}(js);gr(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(t){Ye[t]=function(){var e=new Ot,r=Ud.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var wp=function(e,r,n){return e[r]=n},Zv=function(e,r,n){return e[r](n)},Tb=function(e,r,n,i){return e[r](i.fp,n)},Pb=function(e,r,n){return e.setAttribute(r,n)},_p=function(e,r){return Le(e[r])?Zv:up(e[r])&&e.setAttribute?Pb:wp},Jv=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Rb=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},e1=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},bp=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},zb=function(e,r,n,i){for(var a=this._pt,o;a;)o=a._next,a.p===i&&a.modifier(e,r,n),a=o},Db=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?Wc(this,r,"_pt"):r.dep||(n=1),r=i;return!n},Mb=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},t1=function(e){for(var r=e._pt,n,i,a,o;r;){for(n=r._next,i=a;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:o)?r._prev._next=r:a=r,(r._next=i)?i._prev=r:o=r,r=n}e._pt=a},Qt=function(){function t(r,n,i,a,o,s,l,u,d){this.t=n,this.s=a,this.c=o,this.p=i,this.r=s||Jv,this.d=l||this,this.set=u||wp,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=Mb,this.m=n,this.mt=a,this.tween=i},t}();Kt(hp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return mp[t]=1});hr.TweenMax=hr.TweenLite=Ye;hr.TimelineLite=hr.TimelineMax=Ot;Ee=new Ot({sortChildren:!1,defaults:Ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pr.stringFilter=Wv;var Wi=[],Ol={},Lb=[],ah=0,Ob=0,Tu=function(e){return(Ol[e]||Lb).map(function(r){return r()})},Yd=function(){var e=Date.now(),r=[];e-ah>2&&(Tu("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,a=n.conditions,o,s,l,u;for(s in i)o=Zr.matchMedia(i[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,u=1);u&&(n.revert(),l&&r.push(n))}),Tu("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ah=e,Tu("matchMedia"))},r1=function(){function t(r,n){this.selector=n&&Hd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ob++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,a){Le(n)&&(a=i,i=n,n=Le);var o=this,s=function(){var u=ke,d=o.selector,f;return u&&u!==o&&u.data.push(o),a&&(o.selector=Hd(a)),ke=o,f=i.apply(o,arguments),Le(f)&&o._r.push(f),ke=u,o.selector=d,o.isReverted=!1,f};return o.last=s,n===Le?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},e.ignore=function(n){var i=ke;ke=null,n(this),ke=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var s=a.getTweens(),l=a.data.length,u;l--;)u=a.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=a.data.length;l--;)u=a.data[l],u instanceof Ot?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ye)&&u.revert&&u.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=Wi.length;o--;)Wi[o].id===this.id&&Wi.splice(o,1)},e.revert=function(n){this.kill(n||{})},t}(),Ab=function(){function t(r){this.contexts=[],this.scope=r,ke&&ke.data.push(this)}var e=t.prototype;return e.add=function(n,i,a){un(n)||(n={matches:n});var o=new r1(0,a||this.scope),s=o.conditions={},l,u,d;ke&&!o.selector&&(o.selector=ke.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?d=1:(l=Zr.matchMedia(n[u]),l&&(Wi.indexOf(o)<0&&Wi.push(o),(s[u]=l.matches)&&(d=1),l.addListener?l.addListener(Yd):l.addEventListener("change",Yd)));return d&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),xc={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return Uv(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,r){return Ee.getTweensOf(e,r)},getProperty:function(e,r,n,i){it(e)&&(e=Er(e)[0]);var a=Ui(e||{}).get,o=n?Nv:Ev;return n==="native"&&(n=""),e&&(r?o((ar[r]&&ar[r].get||a)(e,r,n,i)):function(s,l,u){return o((ar[s]&&ar[s].get||a)(e,s,l,u))})},quickSetter:function(e,r,n){if(e=Er(e),e.length>1){var i=e.map(function(d){return Zt.quickSetter(d,r,n)}),a=i.length;return function(d){for(var f=a;f--;)i[f](d)}}e=e[0]||{};var o=ar[r],s=Ui(e),l=s.harness&&(s.harness.aliases||{})[r]||r,u=o?function(d){var f=new o;Ea._pt=0,f.init(e,n?d+n:d,Ea,0,[e]),f.render(1,f),Ea._pt&&bp(1,Ea)}:s.set(e,l);return o?u:function(d){return u(e,l,n?d+n:d,s,1)}},quickTo:function(e,r,n){var i,a=Zt.to(e,gr((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,u,d){return a.resetTo(r,l,u,d)};return o.tween=a,o},isTweening:function(e){return Ee.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$i(e.ease,Ga.ease)),eh(Ga,e||{})},config:function(e){return eh(pr,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,a=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ar[s]&&!hr[s]&&_s(r+" effect requires "+s+" plugin.")}),ju[r]=function(s,l,u){return n(Er(s),gr(l||{},a),u)},o&&(Ot.prototype[r]=function(s,l,u){return this.add(ju[r](s,un(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,r){ie[e]=$i(r)},parseEase:function(e,r){return arguments.length?$i(e,r):ie},getById:function(e){return Ee.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Ot(e),i,a;for(n.smoothChildTiming=Gt(e.smoothChildTiming),Ee.remove(n),n._dp=0,n._time=n._tTime=Ee._time,i=Ee._first;i;)a=i._next,(r||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&tn(n,i,i._start-i._delay),i=a;return tn(Ee,n,0),n},context:function(e,r){return e?new r1(e,r):ke},matchMedia:function(e){return new Ab(e)},matchMediaRefresh:function(){return Wi.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||Yd()},addEventListener:function(e,r){var n=Ol[e]||(Ol[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=Ol[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:hb,wrapYoyo:gb,distribute:Lv,random:Av,snap:Ov,normalize:mb,getUnit:kt,clamp:ub,splitColor:Hv,toArray:Er,selector:Hd,mapRange:Fv,pipe:fb,unitize:pb,interpolate:vb,shuffle:Mv},install:bv,effects:ju,ticker:sr,updateRoot:Ot.updateRoot,plugins:ar,globalTimeline:Ee,core:{PropTween:Qt,globals:kv,Tween:Ye,Timeline:Ot,Animation:js,getCache:Ui,_removeLinkedListItem:Wc,reverting:function(){return dt},context:function(e){return e&&ke&&(ke.data.push(e),e._ctx=ke),ke},suppressOverwrites:function(e){return cp=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return xc[t]=Ye[t]});sr.add(Ot.updateRoot);Ea=xc.to({},{duration:0});var Ib=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},Fb=function(e,r){var n=e._targets,i,a,o;for(i in r)for(a=n.length;a--;)o=e._ptLookup[a][i],o&&(o=o.d)&&(o._pt&&(o=Ib(o,i)),o&&o.modifier&&o.modifier(r[i],e,n[a],i))},Pu=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,a,o){o._onInit=function(s){var l,u;if(it(a)&&(l={},Kt(a,function(d){return l[d]=1}),a=l),r){l={};for(u in a)l[u]=r(a[u]);a=l}Fb(s,a)}}}},Zt=xc.registerPlugin({name:"attr",init:function(e,r,n,i,a){var o,s,l;this.tween=n;for(o in r)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",r[o],i,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,r){for(var n=r._pt;n;)dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},Pu("roundProps",$d),Pu("modifiers"),Pu("snap",Ov))||xc;Ye.version=Ot.version=Zt.version="3.14.2";_v=1;dp()&&Za();ie.Power0;ie.Power1;ie.Power2;ie.Power3;ie.Power4;ie.Linear;ie.Quad;ie.Cubic;ie.Quart;ie.Quint;ie.Strong;ie.Elastic;ie.Back;ie.SteppedEase;ie.Bounce;ie.Sine;ie.Expo;ie.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oh,qn,Oa,kp,Ai,sh,Sp,Bb=function(){return typeof window<"u"},zn={},Ri=180/Math.PI,Aa=Math.PI/180,ca=Math.atan2,lh=1e8,jp=/([A-Z])/g,Ub=/(left|right|width|margin|padding|x)/i,Hb=/[\s,\(]\S/,rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vd=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},$b=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Wb=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Yb=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Vb=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},n1=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},i1=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},Xb=function(e,r,n){return e.style[r]=n},Gb=function(e,r,n){return e.style.setProperty(r,n)},Kb=function(e,r,n){return e._gsap[r]=n},Qb=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},qb=function(e,r,n,i,a){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(a,o)},Zb=function(e,r,n,i,a){var o=e._gsap;o[r]=n,o.renderTransform(a,o)},Ne="transform",qt=Ne+"Origin",Jb=function t(e,r){var n=this,i=this.target,a=i.style,o=i._gsap;if(e in zn&&a){if(this.tfm=this.tfm||{},e!=="transform")e=rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=xn(i,s)}):this.tfm[e]=o.x?o[e]:xn(i,e),e===qt&&(this.tfm.zOrigin=o.zOrigin);else return rn.transform.split(",").forEach(function(s){return t.call(n,s,r)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qt,r,"")),e=Ne}(a||r)&&this.props.push(e,r,a[e])},a1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ek=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?r[e[a]](e[a+2]):r[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(jp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),a=Sp(),(!a||!a.isStart)&&!n[Ne]&&(a1(n),i.zOrigin&&n[qt]&&(n[qt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},o1=function(e,r){var n={target:e,props:[],revert:ek,save:Jb};return e._gsap||Zt.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},s1,Xd=function(e,r){var n=qn.createElementNS?qn.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qn.createElement(e);return n&&n.style?n:qn.createElement(e)},dr=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(jp,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,Ja(r)||r,1)||""},ch="O,Moz,ms,Ms,Webkit".split(","),Ja=function(e,r,n){var i=r||Ai,a=i.style,o=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ch[o]+e in a););return o<0?null:(o===3?"ms":o>=0?ch[o]:"")+e},Gd=function(){Bb()&&window.document&&(oh=window,qn=oh.document,Oa=qn.documentElement,Ai=Xd("div")||{style:{}},Xd("div"),Ne=Ja(Ne),qt=Ne+"Origin",Ai.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",s1=!!Ja("perspective"),Sp=Zt.core.reverting,kp=1)},uh=function(e){var r=e.ownerSVGElement,n=Xd("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",n.appendChild(i),Oa.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),Oa.removeChild(n),a},dh=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},l1=function(e){var r,n;try{r=e.getBBox()}catch{r=uh(e),n=1}return r&&(r.width||r.height)||n||(r=uh(e)),r&&!r.width&&!r.x&&!r.y?{x:+dh(e,["x","cx","x1"])||0,y:+dh(e,["y","cy","y1"])||0,width:0,height:0}:r},c1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l1(e))},hi=function(e,r){if(r){var n=e.style,i;r in zn&&r!==qt&&(r=Ne),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(jp,"-$1").toLowerCase())):n.removeAttribute(r)}},Zn=function(e,r,n,i,a,o){var s=new Qt(e._pt,r,n,0,1,o?i1:n1);return e._pt=s,s.b=i,s.e=a,e._props.push(n),s},fh={deg:1,rad:1,turn:1},tk={grid:1,flex:1},gi=function t(e,r,n,i){var a=parseFloat(n)||0,o=(n+"").trim().substr((a+"").length)||"px",s=Ai.style,l=Ub.test(r),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(l?"Width":"Height"),f=100,p=i==="px",m=i==="%",y,h,_,v;if(i===o||!a||fh[i]||fh[o])return a;if(o!=="px"&&!p&&(a=t(e,r,n,"px")),v=e.getCTM&&c1(e),(m||o==="%")&&(zn[r]||~r.indexOf("adius")))return y=v?e.getBBox()[l?"width":"height"]:e[d],Be(m?a/y*f:a/100*y);if(s[l?"width":"height"]=f+(p?o:i),h=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===qn||!h.appendChild)&&(h=qn.body),_=h._gsap,_&&m&&_.width&&l&&_.time===sr.time&&!_.uncache)return Be(a/_.width*f);if(m&&(r==="height"||r==="width")){var g=e.style[r];e.style[r]=f+i,y=e[d],g?e.style[r]=g:hi(e,r)}else(m||o==="%")&&!tk[dr(h,"display")]&&(s.position=dr(e,"position")),h===e&&(s.position="static"),h.appendChild(Ai),y=Ai[d],h.removeChild(Ai),s.position="absolute";return l&&m&&(_=Ui(h),_.time=sr.time,_.width=h[d]),Be(p?y*a/f:y&&a?f/y*a:0)},xn=function(e,r,n,i){var a;return kp||Gd(),r in rn&&r!=="transform"&&(r=rn[r],~r.indexOf(",")&&(r=r.split(",")[0])),zn[r]&&r!=="transform"?(a=Es(e,i),a=r!=="transformOrigin"?a[r]:a.svg?a.origin:_c(dr(e,qt))+" "+a.zOrigin+"px"):(a=e.style[r],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=wc[r]&&wc[r](e,r,n)||dr(e,r)||jv(e,r)||(r==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?gi(e,r,a,n)+n:a},rk=function(e,r,n,i){if(!n||n==="none"){var a=Ja(r,e,1),o=a&&dr(e,a,1);o&&o!==n?(r=a,n=o):r==="borderColor"&&(n=dr(e,"borderTopColor"))}var s=new Qt(this._pt,e.style,r,0,1,e1),l=0,u=0,d,f,p,m,y,h,_,v,g,x,w,k;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=dr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(h=e.style[r],e.style[r]=i,i=dr(e,r)||i,h?e.style[r]=h:hi(e,r)),d=[n,i],Wv(d),n=d[0],i=d[1],p=n.match(Ca)||[],k=i.match(Ca)||[],k.length){for(;f=Ca.exec(i);)_=f[0],g=i.substring(l,f.index),y?y=(y+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(y=1),_!==(h=p[u++]||"")&&(m=parseFloat(h)||0,w=h.substr((m+"").length),_.charAt(1)==="="&&(_=La(m,_)+w),v=parseFloat(_),x=_.substr((v+"").length),l=Ca.lastIndex-x.length,x||(x=x||pr.units[r]||w,l===i.length&&(i+=x,s.e+=x)),w!==x&&(m=gi(e,r,h,x)||0),s._pt={_next:s._pt,p:g||u===1?g:",",s:m,c:v-m,m:y&&y<4||r==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=r==="display"&&i==="none"?i1:n1;return wv.test(i)&&(s.e=0),this._pt=s,s},ph={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nk=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=ph[n]||n,r[1]=ph[i]||i,r.join(" ")},ik=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,a=r.u,o=n._gsap,s,l,u;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),u=a.length;--u>-1;)s=a[u],zn[s]&&(l=1,s=s==="transformOrigin"?qt:Ne),hi(n,s);l&&(hi(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Es(n,1),o.uncache=1,a1(i)))}},wc={clearProps:function(e,r,n,i,a){if(a.data!=="isFromStart"){var o=e._pt=new Qt(e._pt,r,n,0,0,ik);return o.u=i,o.pr=-10,o.tween=a,e._props.push(n),1}}},Cs=[1,0,0,1,0,0],u1={},d1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mh=function(e){var r=dr(e,Ne);return d1(r)?Cs:r.substr(7).match(xv).map(Be)},Cp=function(e,r){var n=e._gsap||Ui(e),i=e.style,a=mh(e),o,s,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Cs:a):(a===Cs&&!e.offsetParent&&e!==Oa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,Oa.appendChild(e)),a=mh(e),l?i.display=l:hi(e,"display"),u&&(s?o.insertBefore(e,s):o?o.appendChild(e):Oa.removeChild(e))),r&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Kd=function(e,r,n,i,a,o){var s=e._gsap,l=a||Cp(e,!0),u=s.xOrigin||0,d=s.yOrigin||0,f=s.xOffset||0,p=s.yOffset||0,m=l[0],y=l[1],h=l[2],_=l[3],v=l[4],g=l[5],x=r.split(" "),w=parseFloat(x[0])||0,k=parseFloat(x[1])||0,C,j,E,P;n?l!==Cs&&(j=m*_-y*h)&&(E=w*(_/j)+k*(-h/j)+(h*g-_*v)/j,P=w*(-y/j)+k*(m/j)-(m*g-y*v)/j,w=E,k=P):(C=l1(e),w=C.x+(~x[0].indexOf("%")?w/100*C.width:w),k=C.y+(~(x[1]||x[0]).indexOf("%")?k/100*C.height:k)),i||i!==!1&&s.smooth?(v=w-u,g=k-d,s.xOffset=f+(v*m+g*h)-v,s.yOffset=p+(v*y+g*_)-g):s.xOffset=s.yOffset=0,s.xOrigin=w,s.yOrigin=k,s.smooth=!!i,s.origin=r,s.originIsAbsolute=!!n,e.style[qt]="0px 0px",o&&(Zn(o,s,"xOrigin",u,w),Zn(o,s,"yOrigin",d,k),Zn(o,s,"xOffset",f,s.xOffset),Zn(o,s,"yOffset",p,s.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},Es=function(e,r){var n=e._gsap||new Gv(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),u=dr(e,qt)||"0",d,f,p,m,y,h,_,v,g,x,w,k,C,j,E,P,T,F,D,Y,X,V,q,U,R,O,S,$,ae,pt,ce,Oe;return d=f=p=h=_=v=g=x=w=0,m=y=1,n.svg=!!(e.getCTM&&c1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),j=Cp(e,n.svg),n.svg&&(n.uncache?(R=e.getBBox(),u=n.xOrigin-R.x+"px "+(n.yOrigin-R.y)+"px",U=""):U=!r&&e.getAttribute("data-svg-origin"),Kd(e,U||u,!!U||n.originIsAbsolute,n.smooth!==!1,j)),k=n.xOrigin||0,C=n.yOrigin||0,j!==Cs&&(F=j[0],D=j[1],Y=j[2],X=j[3],d=V=j[4],f=q=j[5],j.length===6?(m=Math.sqrt(F*F+D*D),y=Math.sqrt(X*X+Y*Y),h=F||D?ca(D,F)*Ri:0,g=Y||X?ca(Y,X)*Ri+h:0,g&&(y*=Math.abs(Math.cos(g*Aa))),n.svg&&(d-=k-(k*F+C*Y),f-=C-(k*D+C*X))):(Oe=j[6],pt=j[7],S=j[8],$=j[9],ae=j[10],ce=j[11],d=j[12],f=j[13],p=j[14],E=ca(Oe,ae),_=E*Ri,E&&(P=Math.cos(-E),T=Math.sin(-E),U=V*P+S*T,R=q*P+$*T,O=Oe*P+ae*T,S=V*-T+S*P,$=q*-T+$*P,ae=Oe*-T+ae*P,ce=pt*-T+ce*P,V=U,q=R,Oe=O),E=ca(-Y,ae),v=E*Ri,E&&(P=Math.cos(-E),T=Math.sin(-E),U=F*P-S*T,R=D*P-$*T,O=Y*P-ae*T,ce=X*T+ce*P,F=U,D=R,Y=O),E=ca(D,F),h=E*Ri,E&&(P=Math.cos(E),T=Math.sin(E),U=F*P+D*T,R=V*P+q*T,D=D*P-F*T,q=q*P-V*T,F=U,V=R),_&&Math.abs(_)+Math.abs(h)>359.9&&(_=h=0,v=180-v),m=Be(Math.sqrt(F*F+D*D+Y*Y)),y=Be(Math.sqrt(q*q+Oe*Oe)),E=ca(V,q),g=Math.abs(E)>2e-4?E*Ri:0,w=ce?1/(ce<0?-ce:ce):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!d1(dr(e,Ne)),U&&e.setAttribute("transform",U))),Math.abs(g)>90&&Math.abs(g)<270&&(a?(m*=-1,g+=h<=0?180:-180,h+=h<=0?180:-180):(y*=-1,g+=g<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=p+o,n.scaleX=Be(m),n.scaleY=Be(y),n.rotation=Be(h)+s,n.rotationX=Be(_)+s,n.rotationY=Be(v)+s,n.skewX=g+s,n.skewY=x+s,n.transformPerspective=w+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!r&&n.zOrigin||0)&&(i[qt]=_c(u)),n.xOffset=n.yOffset=0,n.force3D=pr.force3D,n.renderTransform=n.svg?ok:s1?f1:ak,n.uncache=0,n},_c=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ru=function(e,r,n){var i=kt(r);return Be(parseFloat(r)+parseFloat(gi(e,"x",n+"px",i)))+i},ak=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,f1(e,r)},Ei="0deg",wo="0px",Ni=") ",f1=function(e,r){var n=r||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,l=n.z,u=n.rotation,d=n.rotationY,f=n.rotationX,p=n.skewX,m=n.skewY,y=n.scaleX,h=n.scaleY,_=n.transformPerspective,v=n.force3D,g=n.target,x=n.zOrigin,w="",k=v==="auto"&&e&&e!==1||v===!0;if(x&&(f!==Ei||d!==Ei)){var C=parseFloat(d)*Aa,j=Math.sin(C),E=Math.cos(C),P;C=parseFloat(f)*Aa,P=Math.cos(C),o=Ru(g,o,j*P*-x),s=Ru(g,s,-Math.sin(C)*-x),l=Ru(g,l,E*P*-x+x)}_!==wo&&(w+="perspective("+_+Ni),(i||a)&&(w+="translate("+i+"%, "+a+"%) "),(k||o!==wo||s!==wo||l!==wo)&&(w+=l!==wo||k?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+Ni),u!==Ei&&(w+="rotate("+u+Ni),d!==Ei&&(w+="rotateY("+d+Ni),f!==Ei&&(w+="rotateX("+f+Ni),(p!==Ei||m!==Ei)&&(w+="skew("+p+", "+m+Ni),(y!==1||h!==1)&&(w+="scale("+y+", "+h+Ni),g.style[Ne]=w||"translate(0, 0)"},ok=function(e,r){var n=r||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,l=n.rotation,u=n.skewX,d=n.skewY,f=n.scaleX,p=n.scaleY,m=n.target,y=n.xOrigin,h=n.yOrigin,_=n.xOffset,v=n.yOffset,g=n.forceCSS,x=parseFloat(o),w=parseFloat(s),k,C,j,E,P;l=parseFloat(l),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,l+=d),l||u?(l*=Aa,u*=Aa,k=Math.cos(l)*f,C=Math.sin(l)*f,j=Math.sin(l-u)*-p,E=Math.cos(l-u)*p,u&&(d*=Aa,P=Math.tan(u-d),P=Math.sqrt(1+P*P),j*=P,E*=P,d&&(P=Math.tan(d),P=Math.sqrt(1+P*P),k*=P,C*=P)),k=Be(k),C=Be(C),j=Be(j),E=Be(E)):(k=f,E=p,C=j=0),(x&&!~(o+"").indexOf("px")||w&&!~(s+"").indexOf("px"))&&(x=gi(m,"x",o,"px"),w=gi(m,"y",s,"px")),(y||h||_||v)&&(x=Be(x+y-(y*k+h*j)+_),w=Be(w+h-(y*C+h*E)+v)),(i||a)&&(P=m.getBBox(),x=Be(x+i/100*P.width),w=Be(w+a/100*P.height)),P="matrix("+k+","+C+","+j+","+E+","+x+","+w+")",m.setAttribute("transform",P),g&&(m.style[Ne]=P)},sk=function(e,r,n,i,a){var o=360,s=it(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?Ri:1),u=l-i,d=i+u+"deg",f,p;return s&&(f=a.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*lh)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*lh)%o-~~(u/o)*o)),e._pt=p=new Qt(e._pt,r,n,i,u,$b),p.e=d,p.u="deg",e._props.push(n),p},hh=function(e,r){for(var n in r)e[n]=r[n];return e},lk=function(e,r,n){var i=hh({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,u,d,f,p,m,y;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=r,s=Es(n,1),hi(n,Ne),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Ne],o[Ne]=r,s=Es(n,1),o[Ne]=u);for(l in zn)u=i[l],d=s[l],u!==d&&a.indexOf(l)<0&&(m=kt(u),y=kt(d),f=m!==y?gi(n,l,u,y):parseFloat(u),p=parseFloat(d),e._pt=new Qt(e._pt,s,l,f,p-f,Vd),e._pt.u=y||0,e._props.push(l));hh(s,i)};Kt("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",a="Left",o=(e<3?[r,n,i,a]:[r+a,r+n,i+n,i+a]).map(function(s){return e<2?t+s:"border"+s+t});wc[e>1?"border"+t:t]=function(s,l,u,d,f){var p,m;if(arguments.length<4)return p=o.map(function(y){return xn(s,y,u)}),m=p.join(" "),m.split(p[0]).length===5?p[0]:m;p=(d+"").split(" "),m={},o.forEach(function(y,h){return m[y]=p[h]=p[h]||p[(h-1)/2|0]}),s.init(l,m,f)}});var p1={name:"css",register:Gd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,a){var o=this._props,s=e.style,l=n.vars.startAt,u,d,f,p,m,y,h,_,v,g,x,w,k,C,j,E,P;kp||Gd(),this.styles=this.styles||o1(e),E=this.styles.props,this.tween=n;for(h in r)if(h!=="autoRound"&&(d=r[h],!(ar[h]&&Kv(h,r,n,i,e,a)))){if(m=typeof d,y=wc[h],m==="function"&&(d=d.call(n,i,e,a),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=ks(d)),y)y(this,e,h,d,n)&&(j=1);else if(h.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",ui.lastIndex=0,ui.test(u)||(_=kt(u),v=kt(d),v?_!==v&&(u=gi(e,h,u,v)+v):_&&(d+=_)),this.add(s,"setProperty",u,d,i,a,0,0,h),o.push(h),E.push(h,0,s[h]);else if(m!=="undefined"){if(l&&h in l?(u=typeof l[h]=="function"?l[h].call(n,i,e,a):l[h],it(u)&&~u.indexOf("random(")&&(u=ks(u)),kt(u+"")||u==="auto"||(u+=pr.units[h]||kt(xn(e,h))||""),(u+"").charAt(1)==="="&&(u=xn(e,h))):u=xn(e,h),p=parseFloat(u),g=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),g&&(d=d.substr(2)),f=parseFloat(d),h in rn&&(h==="autoAlpha"&&(p===1&&xn(e,"visibility")==="hidden"&&f&&(p=0),E.push("visibility",0,s.visibility),Zn(this,s,"visibility",p?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=rn[h],~h.indexOf(",")&&(h=h.split(",")[0]))),x=h in zn,x){if(this.styles.save(h),P=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=dr(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=d,d=dr(e,"perspective"),T?e.style.perspective=T:hi(e,"perspective")}f=parseFloat(d)}if(w||(k=e._gsap,k.renderTransform&&!r.parseTransform||Es(e,r.parseTransform),C=r.smoothOrigin!==!1&&k.smooth,w=this._pt=new Qt(this._pt,s,Ne,0,1,k.renderTransform,k,0,-1),w.dep=1),h==="scale")this._pt=new Qt(this._pt,k,"scaleY",k.scaleY,(g?La(k.scaleY,g+f):f)-k.scaleY||0,Vd),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){E.push(qt,0,s[qt]),d=nk(d),k.svg?Kd(e,d,0,C,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==k.zOrigin&&Zn(this,k,"zOrigin",k.zOrigin,v),Zn(this,s,h,_c(u),_c(d)));continue}else if(h==="svgOrigin"){Kd(e,d,1,C,0,this);continue}else if(h in u1){sk(this,k,h,p,g?La(p,g+d):d);continue}else if(h==="smoothOrigin"){Zn(this,k,"smooth",k.smooth,d);continue}else if(h==="force3D"){k[h]=d;continue}else if(h==="transform"){lk(this,d,e);continue}}else h in s||(h=Ja(h)||h);if(x||(f||f===0)&&(p||p===0)&&!Hb.test(d)&&h in s)_=(u+"").substr((p+"").length),f||(f=0),v=kt(d)||(h in pr.units?pr.units[h]:_),_!==v&&(p=gi(e,h,u,v)),this._pt=new Qt(this._pt,x?k:s,h,p,(g?La(p,g+f):f)-p,!x&&(v==="px"||h==="zIndex")&&r.autoRound!==!1?Vb:Vd),this._pt.u=v||0,x&&P!==d?(this._pt.b=u,this._pt.e=P,this._pt.r=Yb):_!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Wb);else if(h in s)rk.call(this,e,h,u,g?g+d:d);else if(h in e)this.add(e,h,u||e[h],g?g+d:d,i,a);else if(h!=="parseTransform"){pp(h,d);continue}x||(h in s?E.push(h,0,s[h]):typeof e[h]=="function"?E.push(h,2,e[h]()):E.push(h,1,u||e[h])),o.push(h)}}j&&t1(this)},render:function(e,r){if(r.tween._time||!Sp())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:xn,aliases:rn,getSetter:function(e,r,n){var i=rn[r];return i&&i.indexOf(",")<0&&(r=i),r in zn&&r!==qt&&(e._gsap.x||xn(e,"x"))?n&&sh===n?r==="scale"?Qb:Kb:(sh=n||{})&&(r==="scale"?qb:Zb):e.style&&!up(e.style[r])?Xb:~r.indexOf("-")?Gb:_p(e,r)},core:{_removeProperty:hi,_getMatrix:Cp}};Zt.utils.checkPrefix=Ja;Zt.core.getStyleSaver=o1;(function(t,e,r,n){var i=Kt(t+","+e+","+r,function(a){zn[a]=1});Kt(e,function(a){pr.units[a]="deg",u1[a]=1}),rn[i[13]]=t+","+e,Kt(n,function(a){var o=a.split(":");rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){pr.units[t]="px"});Zt.registerPlugin(p1);var M=Zt.registerPlugin(p1)||Zt;M.core.Tween;function ck({onComplete:t}){const e=b.useRef(null),r=b.useRef(null),n=b.useRef(null),i=b.useRef(null),[a,o]=b.useState(0);return b.useEffect(()=>{let s=0;const l=setInterval(()=>{s=Math.min(s+Math.floor(Math.random()*12)+4,100),o(s),s>=100&&clearInterval(l)},60);return M.timeline({onComplete:()=>t&&t()}).to(i.current,{left:"0%",duration:1.6,ease:"power3.inOut"}).to(r.current,{y:"0%",duration:.7,ease:"power3.out"},.2).to(n.current,{y:"0%",duration:.7,ease:"power3.out"},.4).to(e.current,{yPercent:-100,duration:1,ease:"power4.inOut",delay:.5}),()=>clearInterval(l)},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #preloader {
          position: fixed; inset: 0; z-index: 9997; background: var(--ink);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 1.6rem;
        }
        .pl-name-wrap { overflow: hidden; }
        .pl-name-line {
          display: block;
          font-family: var(--ff-display);
          letter-spacing: -0.02em;
          color: var(--cream);
          transform: translateY(110%);
          line-height: 1;
        }
        .pl-name-line.top {
          font-size: clamp(2.2rem, 6vw, 5rem);
          font-weight: 400;
          font-style: italic;
          color: var(--muted);
        }
        .pl-name-line.bottom {
          font-size: clamp(3rem, 9vw, 8rem);
          font-weight: 900;
          color: var(--cream);
        }
        .pl-name-line.bottom span { color: var(--gold); }
        .pl-bar-wrap {
          width: min(360px, 80vw); height: 1px;
          background: var(--line); position: relative; overflow: hidden;
        }
        .pl-bar {
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold2));
        }
        .pl-count {
          font-family: var(--ff-mono); font-size: .72rem;
          color: var(--gold); letter-spacing: .2em;
        }
      `}),c.jsxs("div",{id:"preloader",ref:e,children:[c.jsx("div",{className:"pl-name-wrap",children:c.jsx("span",{className:"pl-name-line top",ref:r,children:"Frontend Developer"})}),c.jsx("div",{className:"pl-name-wrap",children:c.jsxs("span",{className:"pl-name-line bottom",ref:n,children:["DHYEY ",c.jsx("span",{children:"PATEL"})]})}),c.jsx("div",{className:"pl-bar-wrap",children:c.jsx("div",{className:"pl-bar",ref:i})}),c.jsxs("div",{className:"pl-count",children:[a,"%"]})]})]})}const gh=[{label:"About",href:"#about",icon:"👤",color:"#C9A96E"},{label:"Skills",href:"#skills",icon:"⚡",color:"#60a5fa"},{label:"Projects",href:"#projects",icon:"🚀",color:"#4ade80"},{label:"Works",to:"/works",icon:"🎨",color:"#f472b6"},{label:"Hackathons",to:"/hackathons",icon:"🏆",color:"#fb923c"},{label:"GitHub",href:"#git-history",icon:"🐙",color:"#a78bfa"},{label:"Figma",href:"#figma",icon:"✏️",color:"#34d399"},{label:"Beyond",href:"#beyond",icon:"🌊",color:"#38bdf8"},{label:"Contact",to:"/contact",icon:"✉️",color:"#f87171"},{label:"Hire Me",href:"mailto:pateldhamo0079@gmail.com",icon:"💼",color:"#fde68a",isHire:!0}];function uk(){const[t,e]=b.useState(!1),[r,n]=b.useState(0),[i,a]=b.useState(null);b.useRef(0),b.useEffect(()=>{if(!t)return;const l=u=>{n(d=>d+u.deltaY*.18)};return window.addEventListener("wheel",l,{passive:!0}),()=>window.removeEventListener("wheel",l)},[t]),b.useEffect(()=>{if(!t)return;let l=null;const u=p=>{var m,y;l=p.clientY??((y=(m=p.touches)==null?void 0:m[0])==null?void 0:y.clientY)},d=p=>{var y,h;if(l===null)return;const m=p.clientY??((h=(y=p.touches)==null?void 0:y[0])==null?void 0:h.clientY);n(_=>_+(m-l)*.4),l=m},f=()=>{l=null};return window.addEventListener("mousedown",u),window.addEventListener("mousemove",d),window.addEventListener("mouseup",f),window.addEventListener("touchstart",u,{passive:!0}),window.addEventListener("touchmove",d,{passive:!0}),window.addEventListener("touchend",f),()=>{window.removeEventListener("mousedown",u),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",f),window.removeEventListener("touchstart",u),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)}},[t]),b.useEffect(()=>{const l=u=>{u.key==="Escape"&&e(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]);const o=gh.length,s=160;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ─── NAV ─── */
        .nav-shell {
          position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.6rem 4vw;
          pointer-events: none;
        }
        .nav-shell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(8,7,7,.96) 0%, transparent 100%);
          pointer-events: none;
        }

        /* Logo */
        .nav-logo {
          font-family: var(--ff-display); font-weight: 700; font-style: italic;
          font-size: 1.35rem; letter-spacing: -.01em; color: var(--cream);
          position: relative; z-index: 1;
          pointer-events: all;
          transition: color .3s;
        }
        .nav-logo span { color: var(--gold); }
        .nav-logo:hover { color: var(--gold); }

        /* Main nav links (only 2 most important kept visible) */
        .nav-links-main {
          display: flex; gap: 2.2rem; list-style: none;
          position: relative; z-index: 1;
          pointer-events: all;
        }
        .nav-links-main a {
          font-family: var(--ff-mono); font-size: .68rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s;
          position: relative;
        }
        .nav-links-main a::after {
          content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
          height: 1px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s ease;
        }
        .nav-links-main a:hover { color: var(--gold); }
        .nav-links-main a:hover::after { transform: scaleX(1); }
        @media(max-width: 640px) { .nav-links-main { display: none; } }

        /* ─── ORBIT TOGGLE BUTTON ─── */
        .nav-orbit-btn {
          position: fixed; bottom: 2.2rem; right: 2.2rem;
          z-index: 600;
          width: 58px; height: 58px; border-radius: 50%;
          background: linear-gradient(135deg, #c9a96e 0%, #e8c98a 100%);
          border: none; cursor: none;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 0 rgba(201,169,110,.6);
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
          pointer-events: all;
        }
        .nav-orbit-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 0 0 8px rgba(201,169,110,.18), 0 8px 32px rgba(201,169,110,.4);
        }
        .nav-orbit-btn.active {
          transform: scale(1.05) rotate(45deg);
          box-shadow: 0 0 0 12px rgba(201,169,110,.12), 0 8px 40px rgba(201,169,110,.5);
        }
        .nav-orbit-btn svg {
          width: 22px; height: 22px;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1);
        }

        /* Pulse rings */
        .nav-orbit-btn::before, .nav-orbit-btn::after {
          content: ''; position: absolute; inset: 0;
          border-radius: 50%;
          background: rgba(201,169,110,.25);
          animation: orbitPulse 2s ease-out infinite;
          pointer-events: none;
        }
        .nav-orbit-btn::after { animation-delay: 1s; }
        @keyframes orbitPulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* ─── OVERLAY BACKDROP ─── */
        .orbit-backdrop {
          position: fixed; inset: 0; z-index: 550;
          background: rgba(8,7,7,.72);
          backdrop-filter: blur(12px) saturate(1.4);
          opacity: 0; pointer-events: none;
          transition: opacity .4s;
        }
        .orbit-backdrop.visible { opacity: 1; pointer-events: all; }

        /* ─── ORBIT RING ─── */
        .orbit-ring {
          position: fixed;
          bottom: calc(2.2rem + 29px);
          right: calc(2.2rem + 29px);
          z-index: 590;
          width: 0; height: 0;
          pointer-events: none;
        }

        /* Each planet */
        .orbit-planet {
          position: absolute;
          display: flex; flex-direction: column; align-items: center;
          gap: 5px;
          pointer-events: all;
          cursor: none;
          transition: transform .25s cubic-bezier(.34,1.56,.64,1), opacity .3s;
        }
        .orbit-planet-bubble {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.35rem;
          border: 2px solid transparent;
          background: rgba(22,21,20,.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,.5);
          transition: transform .25s cubic-bezier(.34,1.56,.64,1),
                      border-color .25s, box-shadow .25s, background .25s;
          position: relative;
          overflow: hidden;
        }
        .orbit-planet-bubble::before {
          content: '';
          position: absolute; inset: 0; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(255,255,255,.15), transparent 65%);
          pointer-events: none;
        }
        .orbit-planet:hover .orbit-planet-bubble {
          transform: scale(1.18);
          background: rgba(30,28,26,.95);
        }
        .orbit-planet-label {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
          transition: color .25s;
          background: rgba(8,7,7,.7);
          padding: .18rem .5rem; border-radius: 3px;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity .2s, transform .2s;
        }
        .orbit-planet:hover .orbit-planet-label {
          opacity: 1; transform: scale(1);
          color: var(--cream);
        }

        /* Hire Me special */
        .orbit-planet.hire .orbit-planet-bubble {
          background: linear-gradient(135deg, #c9a96e 0%, #e8c98a 100%);
          box-shadow: 0 0 30px rgba(201,169,110,.5);
        }
        .orbit-planet.hire:hover .orbit-planet-bubble {
          box-shadow: 0 0 50px rgba(201,169,110,.7);
          transform: scale(1.22);
        }

        /* Spin container */
        .orbit-spin-wrap {
          position: absolute; top: 0; left: 0; width: 0; height: 0;
          transform-origin: 0 0;
        }

        /* Center glow */
        .orbit-center-glow {
          position: fixed;
          bottom: 2.2rem; right: 2.2rem;
          width: 58px; height: 58px;
          border-radius: 50%;
          box-shadow: 0 0 80px 40px rgba(201,169,110,.15);
          pointer-events: none; z-index: 580;
          opacity: 0; transition: opacity .4s;
        }
        .orbit-center-glow.visible { opacity: 1; }

        /* Scale-in animation for planets */
        @keyframes planetIn {
          from { transform: scale(0) translate(-50%, -50%); opacity: 0; }
          to { transform: scale(1) translate(-50%, -50%); opacity: 1; }
        }

        /* ─── iPhone-style orbit trail ─── */
        .orbit-trail {
          position: fixed;
          bottom: calc(2.2rem + 29px);
          right: calc(2.2rem + 29px);
          width: ${2*s}px; height: ${2*s}px;
          margin-left: -${s}px; margin-bottom: -${s}px;
          border-radius: 50%;
          border: 1px dashed rgba(201,169,110,.12);
          pointer-events: none; z-index: 570;
          opacity: 0; transition: opacity .4s;
          transform: translate(50%, 50%);
        }
        .orbit-trail.visible { opacity: 1; }
      `}),c.jsxs("nav",{className:"nav-shell",children:[c.jsxs(cn,{to:"/",className:"nav-logo",children:["D",c.jsx("span",{children:"."}),"P"]}),c.jsxs("ul",{className:"nav-links-main",children:[c.jsx("li",{children:c.jsx("a",{href:"#about",children:"About"})}),c.jsx("li",{children:c.jsx("a",{href:"#projects",children:"Projects"})})]})]}),c.jsx("div",{className:`orbit-backdrop${t?" visible":""}`,onClick:()=>e(!1)}),c.jsx("div",{className:`orbit-trail${t?" visible":""}`}),c.jsx("div",{className:`orbit-center-glow${t?" visible":""}`}),gh.map((l,u)=>{const f=(360/o*u+r)*Math.PI/180,p=Math.cos(f)*s,m=Math.sin(f)*s,y=i===u,h=t?1:0,_=c.jsxs("div",{className:`orbit-planet${l.isHire?" hire":""}`,onMouseEnter:()=>a(u),onMouseLeave:()=>a(null),style:{position:"fixed",bottom:`calc(2.2rem + 29px + ${-m}px)`,right:`calc(2.2rem + 29px + ${-p}px)`,transform:`translate(50%, 50%) scale(${h})`,opacity:t?1:0,zIndex:595,transition:`transform .45s cubic-bezier(.34,1.56,.64,1) ${u*30}ms, opacity .35s ease ${u*25}ms`},children:[c.jsx("div",{className:"orbit-planet-bubble",style:{borderColor:y?l.color:"rgba(255,255,255,0.08)",boxShadow:y?`0 0 28px ${l.color}55, 0 4px 20px rgba(0,0,0,.5)`:"0 4px 20px rgba(0,0,0,.5)"},children:l.icon}),c.jsx("div",{className:"orbit-planet-label",style:{color:l.color},children:l.label})]},l.label);return l.to?c.jsx(cn,{to:l.to,style:{display:"contents"},onClick:()=>e(!1),children:_},l.label):c.jsx("a",{href:l.href,style:{display:"contents"},onClick:()=>e(!1),children:_},l.label)}),c.jsx("button",{className:`nav-orbit-btn${t?" active":""}`,onClick:()=>e(l=>!l),"aria-label":"Toggle navigation menu",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"#080707",strokeWidth:"2.5",strokeLinecap:"round",children:t?c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),c.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),c.jsx("line",{x1:"4",y1:"17",x2:"20",y2:"17"})]})})})]})}function dk(){const t=b.useRef(null),e=b.useRef(null);return b.useEffect(()=>{const r=document.querySelectorAll(".hero-name .word");M.to(r,{y:"0%",stagger:.12,duration:1,ease:"power3.out",delay:.3}),M.to([".hero-eyebrow",".hero-desc",".hero-badge"],{opacity:1,y:0,stagger:.15,duration:1,ease:"power3.out",delay:.6});const n=i=>{const a=i.clientX/window.innerWidth-.5,o=i.clientY/window.innerHeight-.5;M.to(t.current,{x:a*-30,y:o*-15,duration:2,ease:"power1.out"}),M.to(e.current,{x:a*10,y:o*5,duration:1.8,ease:"power1.out"})};return document.addEventListener("mousemove",n),()=>document.removeEventListener("mousemove",n)},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 0 4vw 5vw; overflow: hidden;
        }
        .hero-visuals { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .hero-img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          opacity: 0.5; filter: grayscale(30%) contrast(1.1);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--ink) 10%, rgba(8,7,7,0.4) 100%);
          mix-blend-mode: multiply;
        }
        .hero-index {
          position: absolute; top: 4vw; right: 4vw;
          font-family: var(--ff-display);
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.12);
          line-height: 1; pointer-events: none; z-index: 1; user-select: none;
        }
        .hero-scroll-hint {
          position: absolute; right: 4vw; bottom: 5vw;
          display: flex; flex-direction: column; align-items: center; gap: .6rem; z-index: 5;
        }
        .hero-scroll-hint span {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--muted); writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px; height: 0;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollLine 2s ease-in-out infinite 1s;
        }
        .hero-eyebrow {
          position: relative; z-index: 5;
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: .8rem;
          opacity: 0; transform: translateY(20px);
        }
        .hero-eyebrow::before { content:''; width: 32px; height: 1px; background: var(--gold); }
        .hero-name {
          position: relative; z-index: 5;
          font-family: var(--ff-display);
          font-size: clamp(4rem, 11vw, 11rem);
          font-weight: 900; line-height: .9; letter-spacing: -.02em; overflow: hidden;
        }
        .hero-name .line { overflow: hidden; display: block; }
        .hero-name .word { display: inline-block; transform: translateY(110%); }
        .hero-name em { font-style: italic; color: var(--gold); }
        .hero-sub {
          position: relative; z-index:5; margin-top: 2.5rem;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 2rem;
        }
        .hero-desc {
          max-width: 380px; font-size: 1rem;
          color: var(--muted); line-height: 1.7;
          opacity: 0; transform: translateY(20px);
        }
        .hero-badge {
          font-family: var(--ff-display); font-size: 1.1rem; font-style: italic;
          color: var(--gold); border: 1px solid rgba(201,169,110,.3);
          padding: .7rem 1.4rem; opacity: 0; transform: translateY(20px); white-space: nowrap;
        }



        @media(max-width:768px){
          .hero-index { font-size: 35vw; opacity: .4; }
          .hero-scroll-hint { display: none; }
          .hero-float-icon { display: none; }
        }
      `}),c.jsxs("section",{className:"hero",children:[c.jsxs("div",{className:"hero-visuals",children:[c.jsx("img",{src:"/images/Background img.jpeg",className:"hero-img",alt:"Hero Background",onError:r=>{r.target.style.opacity="0"}}),c.jsx("div",{className:"hero-overlay"})]}),c.jsx("div",{className:"hero-index",ref:t,"aria-hidden":"true",children:"01"}),c.jsxs("div",{className:"hero-scroll-hint",children:[c.jsx("span",{children:"Scroll"}),c.jsx("div",{className:"scroll-line"})]}),c.jsx("div",{className:"hero-eyebrow",children:"Frontend Developer · EST. 2025"}),c.jsxs("h1",{className:"hero-name",ref:e,children:[c.jsx("span",{className:"line",children:c.jsx("span",{className:"word",children:"DHYEY"})}),c.jsx("span",{className:"line",children:c.jsx("span",{className:"word",children:c.jsx("em",{children:"PATEL"})})})]}),c.jsxs("div",{className:"hero-sub",children:[c.jsxs("p",{className:"hero-desc",children:["Aspiring Software Engineer bridging ",c.jsx("strong",{style:{color:"var(--cream)"},children:"logic"})," and logic-defying design. Crafting aesthetic UIs with pixel-perfect precision and buttery-smooth interactions."]}),c.jsx("div",{className:"hero-badge",children:"Available for Projects"})]})]})]})}const vh=["Front End Dev","Figma Design","Aesthetic UI","GSAP Animations","React.js","C / C++","Node.js","Creative Coder","Prompt Engineering"];function fk(){const t=[...vh,...vh];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .ticker-wrap {
          position: relative; z-index: 10; overflow: hidden;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          padding: .9rem 0; background: rgba(255,255,255,.02);
          backdrop-filter: blur(6px);
        }
        .ticker-track {
          display: flex; white-space: nowrap;
          animation: ticker 22s linear infinite;
        }
        .ticker-track span {
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--muted); padding: 0 3rem;
        }
        .ticker-track span b { color: var(--gold); font-weight: 400; }
      `}),c.jsx("div",{className:"ticker-wrap",children:c.jsx("div",{className:"ticker-track",children:t.map((e,r)=>c.jsxs("span",{children:[e," ",c.jsx("b",{children:"✦"})]},r))})})]})}function pk(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function mk(t,e,r){return e&&pk(t.prototype,e),t}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ct,Al,lr,Jn,ei,Ia,m1,zi,Xo,h1,kn,Fr,g1,v1=function(){return ct||typeof window<"u"&&(ct=window.gsap)&&ct.registerPlugin&&ct},y1=1,Na=[],ee=[],sn=[],Go=Date.now,Qd=function(e,r){return r},hk=function(){var e=Xo.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ee),i.push.apply(i,sn),ee=n,sn=i,Qd=function(o,s){return r[o](s)}},di=function(e,r){return~sn.indexOf(e)&&sn[sn.indexOf(e)+1][r]},Ko=function(e){return!!~h1.indexOf(e)},Rt=function(e,r,n,i,a){return e.addEventListener(r,n,{passive:i!==!1,capture:!!a})},Pt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},sl="scrollLeft",ll="scrollTop",qd=function(){return kn&&kn.isPressed||ee.cache++},bc=function(e,r){var n=function i(a){if(a||a===0){y1&&(lr.history.scrollRestoration="manual");var o=kn&&kn.isPressed;a=i.v=Math.round(a)||(kn&&kn.iOS?1:0),e(a),i.cacheID=ee.cache,o&&Qd("ss",a)}else(r||ee.cache!==i.cacheID||Qd("ref"))&&(i.cacheID=ee.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},At={s:sl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bc(function(t){return arguments.length?lr.scrollTo(t,Qe.sc()):lr.pageXOffset||Jn[sl]||ei[sl]||Ia[sl]||0})},Qe={s:ll,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:At,sc:bc(function(t){return arguments.length?lr.scrollTo(At.sc(),t):lr.pageYOffset||Jn[ll]||ei[ll]||Ia[ll]||0})},Ht=function(e,r){return(r&&r._ctx&&r._ctx.selector||ct.utils.toArray)(e)[0]||(typeof e=="string"&&ct.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},gk=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},vi=function(e,r){var n=r.s,i=r.sc;Ko(e)&&(e=Jn.scrollingElement||ei);var a=ee.indexOf(e),o=i===Qe.sc?1:2;!~a&&(a=ee.push(e)-1),ee[a+o]||Rt(e,"scroll",qd);var s=ee[a+o],l=s||(ee[a+o]=bc(di(e,n),!0)||(Ko(e)?i:bc(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,s||(l.smooth=ct.getProperty(e,"scrollBehavior")==="smooth"),l},Zd=function(e,r,n){var i=e,a=e,o=Go(),s=o,l=r||50,u=Math.max(500,l*3),d=function(y,h){var _=Go();h||_-o>l?(a=i,i=y,s=o,o=_):n?i+=y:i=a+(y-a)/(_-s)*(o-s)},f=function(){a=i=n?0:i,s=o=0},p=function(y){var h=s,_=a,v=Go();return(y||y===0)&&y!==i&&d(y),o===s||v-s>u?0:(i+(n?_:-_))/((n?v:o)-h)*1e3};return{update:d,reset:f,getVelocity:p}},_o=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yh=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},x1=function(){Xo=ct.core.globals().ScrollTrigger,Xo&&Xo.core&&hk()},w1=function(e){return ct=e||v1(),!Al&&ct&&typeof document<"u"&&document.body&&(lr=window,Jn=document,ei=Jn.documentElement,Ia=Jn.body,h1=[lr,Jn,ei,Ia],ct.utils.clamp,g1=ct.core.context||function(){},zi="onpointerenter"in Ia?"pointer":"mouse",m1=He.isTouch=lr.matchMedia&&lr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in lr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fr=He.eventTypes=("ontouchstart"in ei?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ei?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return y1=0},500),x1(),Al=1),Al};At.op=Qe;ee.cache=0;var He=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){Al||w1(ct)||console.warn("Please gsap.registerPlugin(Observer)"),Xo||x1();var i=n.tolerance,a=n.dragMinimum,o=n.type,s=n.target,l=n.lineHeight,u=n.debounce,d=n.preventDefault,f=n.onStop,p=n.onStopDelay,m=n.ignore,y=n.wheelSpeed,h=n.event,_=n.onDragStart,v=n.onDragEnd,g=n.onDrag,x=n.onPress,w=n.onRelease,k=n.onRight,C=n.onLeft,j=n.onUp,E=n.onDown,P=n.onChangeX,T=n.onChangeY,F=n.onChange,D=n.onToggleX,Y=n.onToggleY,X=n.onHover,V=n.onHoverEnd,q=n.onMove,U=n.ignoreCheck,R=n.isNormalizer,O=n.onGestureStart,S=n.onGestureEnd,$=n.onWheel,ae=n.onEnable,pt=n.onDisable,ce=n.onClick,Oe=n.scrollSpeed,we=n.capture,ve=n.allowClicks,Et=n.lockAxis,mt=n.onLockAxis;this.target=s=Ht(s)||ei,this.vars=n,m&&(m=ct.utils.toArray(m)),i=i||1e-9,a=a||0,y=y||1,Oe=Oe||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(lr.getComputedStyle(Ia).lineHeight)||22);var On,Nt,Tt,oe,Ae,Ut,Jt,N=this,er=0,dn=0,An=n.passive||!d&&n.passive!==!1,ze=vi(s,At),fn=vi(s,Qe),In=ze(),bi=fn(),Ze=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fr[0]==="pointerdown",Fn=Ko(s),Ie=s.ownerDocument||Jn,Dr=[0,0,0],xr=[0,0,0],pn=0,oo=function(){return pn=Go()},$e=function(H,le){return(N.event=H)&&m&&gk(H.target,m)||le&&Ze&&H.pointerType!=="touch"||U&&U(H,le)},Fs=function(){N._vx.reset(),N._vy.reset(),Nt.pause(),f&&f(N)},mn=function(){var H=N.deltaX=yh(Dr),le=N.deltaY=yh(xr),L=Math.abs(H)>=i,G=Math.abs(le)>=i;F&&(L||G)&&F(N,H,le,Dr,xr),L&&(k&&N.deltaX>0&&k(N),C&&N.deltaX<0&&C(N),P&&P(N),D&&N.deltaX<0!=er<0&&D(N),er=N.deltaX,Dr[0]=Dr[1]=Dr[2]=0),G&&(E&&N.deltaY>0&&E(N),j&&N.deltaY<0&&j(N),T&&T(N),Y&&N.deltaY<0!=dn<0&&Y(N),dn=N.deltaY,xr[0]=xr[1]=xr[2]=0),(oe||Tt)&&(q&&q(N),Tt&&(_&&Tt===1&&_(N),g&&g(N),Tt=0),oe=!1),Ut&&!(Ut=!1)&&mt&&mt(N),Ae&&($(N),Ae=!1),On=0},aa=function(H,le,L){Dr[L]+=H,xr[L]+=le,N._vx.update(H),N._vy.update(le),u?On||(On=requestAnimationFrame(mn)):mn()},oa=function(H,le){Et&&!Jt&&(N.axis=Jt=Math.abs(H)>Math.abs(le)?"x":"y",Ut=!0),Jt!=="y"&&(Dr[2]+=H,N._vx.update(H,!0)),Jt!=="x"&&(xr[2]+=le,N._vy.update(le,!0)),u?On||(On=requestAnimationFrame(mn)):mn()},Bn=function(H){if(!$e(H,1)){H=_o(H,d);var le=H.clientX,L=H.clientY,G=le-N.x,B=L-N.y,K=N.isDragging;N.x=le,N.y=L,(K||(G||B)&&(Math.abs(N.startX-le)>=a||Math.abs(N.startY-L)>=a))&&(Tt||(Tt=K?2:1),K||(N.isDragging=!0),oa(G,B))}},ki=N.onPress=function(Q){$e(Q,1)||Q&&Q.button||(N.axis=Jt=null,Nt.pause(),N.isPressed=!0,Q=_o(Q),er=dn=0,N.startX=N.x=Q.clientX,N.startY=N.y=Q.clientY,N._vx.reset(),N._vy.reset(),Rt(R?s:Ie,Fr[1],Bn,An,!0),N.deltaX=N.deltaY=0,x&&x(N))},te=N.onRelease=function(Q){if(!$e(Q,1)){Pt(R?s:Ie,Fr[1],Bn,!0);var H=!isNaN(N.y-N.startY),le=N.isDragging,L=le&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),G=_o(Q);!L&&H&&(N._vx.reset(),N._vy.reset(),d&&ve&&ct.delayedCall(.08,function(){if(Go()-pn>300&&!Q.defaultPrevented){if(Q.target.click)Q.target.click();else if(Ie.createEvent){var B=Ie.createEvent("MouseEvents");B.initMouseEvent("click",!0,!0,lr,1,G.screenX,G.screenY,G.clientX,G.clientY,!1,!1,!1,!1,0,null),Q.target.dispatchEvent(B)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,f&&le&&!R&&Nt.restart(!0),Tt&&mn(),v&&le&&v(N),w&&w(N,L)}},Si=function(H){return H.touches&&H.touches.length>1&&(N.isGesturing=!0)&&O(H,N.isDragging)},Mr=function(){return(N.isGesturing=!1)||S(N)},Lr=function(H){if(!$e(H)){var le=ze(),L=fn();aa((le-In)*Oe,(L-bi)*Oe,1),In=le,bi=L,f&&Nt.restart(!0)}},Or=function(H){if(!$e(H)){H=_o(H,d),$&&(Ae=!0);var le=(H.deltaMode===1?l:H.deltaMode===2?lr.innerHeight:1)*y;aa(H.deltaX*le,H.deltaY*le,0),f&&!R&&Nt.restart(!0)}},ji=function(H){if(!$e(H)){var le=H.clientX,L=H.clientY,G=le-N.x,B=L-N.y;N.x=le,N.y=L,oe=!0,f&&Nt.restart(!0),(G||B)&&oa(G,B)}},sa=function(H){N.event=H,X(N)},hn=function(H){N.event=H,V(N)},so=function(H){return $e(H)||_o(H,d)&&ce(N)};Nt=N._dc=ct.delayedCall(p||.25,Fs).pause(),N.deltaX=N.deltaY=0,N._vx=Zd(0,50,!0),N._vy=Zd(0,50,!0),N.scrollX=ze,N.scrollY=fn,N.isDragging=N.isGesturing=N.isPressed=!1,g1(this),N.enable=function(Q){return N.isEnabled||(Rt(Fn?Ie:s,"scroll",qd),o.indexOf("scroll")>=0&&Rt(Fn?Ie:s,"scroll",Lr,An,we),o.indexOf("wheel")>=0&&Rt(s,"wheel",Or,An,we),(o.indexOf("touch")>=0&&m1||o.indexOf("pointer")>=0)&&(Rt(s,Fr[0],ki,An,we),Rt(Ie,Fr[2],te),Rt(Ie,Fr[3],te),ve&&Rt(s,"click",oo,!0,!0),ce&&Rt(s,"click",so),O&&Rt(Ie,"gesturestart",Si),S&&Rt(Ie,"gestureend",Mr),X&&Rt(s,zi+"enter",sa),V&&Rt(s,zi+"leave",hn),q&&Rt(s,zi+"move",ji)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=oe=Tt=!1,N._vx.reset(),N._vy.reset(),In=ze(),bi=fn(),Q&&Q.type&&ki(Q),ae&&ae(N)),N},N.disable=function(){N.isEnabled&&(Na.filter(function(Q){return Q!==N&&Ko(Q.target)}).length||Pt(Fn?Ie:s,"scroll",qd),N.isPressed&&(N._vx.reset(),N._vy.reset(),Pt(R?s:Ie,Fr[1],Bn,!0)),Pt(Fn?Ie:s,"scroll",Lr,we),Pt(s,"wheel",Or,we),Pt(s,Fr[0],ki,we),Pt(Ie,Fr[2],te),Pt(Ie,Fr[3],te),Pt(s,"click",oo,!0),Pt(s,"click",so),Pt(Ie,"gesturestart",Si),Pt(Ie,"gestureend",Mr),Pt(s,zi+"enter",sa),Pt(s,zi+"leave",hn),Pt(s,zi+"move",ji),N.isEnabled=N.isPressed=N.isDragging=!1,pt&&pt(N))},N.kill=N.revert=function(){N.disable();var Q=Na.indexOf(N);Q>=0&&Na.splice(Q,1),kn===N&&(kn=0)},Na.push(N),R&&Ko(s)&&(kn=N),N.enable(h)},mk(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();He.version="3.14.2";He.create=function(t){return new He(t)};He.register=w1;He.getAll=function(){return Na.slice()};He.getById=function(t){return Na.filter(function(e){return e.vars.id===t})[0]};v1()&&ct.registerPlugin(He);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var I,fa,J,he,or,ue,Ep,kc,Ns,Qo,Po,cl,wt,Xc,Jd,Mt,xh,wh,pa,_1,zu,b1,zt,ef,k1,S1,$n,tf,Np,Fa,Tp,qo,rf,Du,ul=1,_t=Date.now,Mu=_t(),Tr=0,Ro=0,_h=function(e,r,n){var i=ir(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},bh=function(e,r){return r&&(!ir(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vk=function t(){return Ro&&requestAnimationFrame(t)},kh=function(){return Xc=1},Sh=function(){return Xc=0},Jr=function(e){return e},zo=function(e){return Math.round(e*1e5)/1e5||0},j1=function(){return typeof window<"u"},C1=function(){return I||j1()&&(I=window.gsap)&&I.registerPlugin&&I},Ji=function(e){return!!~Ep.indexOf(e)},E1=function(e){return(e==="Height"?Tp:J["inner"+e])||or["client"+e]||ue["client"+e]},N1=function(e){return di(e,"getBoundingClientRect")||(Ji(e)?function(){return Hl.width=J.innerWidth,Hl.height=Tp,Hl}:function(){return wn(e)})},yk=function(e,r,n){var i=n.d,a=n.d2,o=n.a;return(o=di(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(r?E1(a):e["client"+a])||0}},xk=function(e,r){return!r||~sn.indexOf(e)?N1(e):function(){return Hl}},nn=function(e,r){var n=r.s,i=r.d2,a=r.d,o=r.a;return Math.max(0,(n="scroll"+i)&&(o=di(e,n))?o()-N1(e)()[a]:Ji(e)?(or[n]||ue[n])-E1(i):e[n]-e["offset"+i])},dl=function(e,r){for(var n=0;n<pa.length;n+=3)(!r||~r.indexOf(pa[n+1]))&&e(pa[n],pa[n+1],pa[n+2])},ir=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Do=function(e){return typeof e=="number"},Di=function(e){return typeof e=="object"},bo=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},Lu=function(e,r){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return r(e)}):r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ua=Math.abs,T1="left",P1="top",Pp="right",Rp="bottom",Yi="width",Vi="height",Zo="Right",Jo="Left",es="Top",ts="Bottom",We="padding",kr="margin",eo="Width",zp="Height",Ge="px",Sr=function(e){return J.getComputedStyle(e)},wk=function(e){var r=Sr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},jh=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},wn=function(e,r){var n=r&&Sr(e)[Jd]!=="matrix(1, 0, 0, 1, 0, 0)"&&I.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sc=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},R1=function(e){var r=[],n=e.labels,i=e.duration(),a;for(a in n)r.push(n[a]/i);return r},_k=function(e){return function(r){return I.utils.snap(R1(e),r)}},Dp=function(e){var r=I.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,a){return i-a});return n?function(i,a,o){o===void 0&&(o=.001);var s;if(!a)return r(i);if(a>0){for(i-=o,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=o;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,a,o){o===void 0&&(o=.001);var s=r(i);return!a||Math.abs(s-i)<o||s-i<0==a<0?s:r(a<0?i-e:i+e)}},bk=function(e){return function(r,n){return Dp(R1(e))(r,n.direction)}},fl=function(e,r,n,i){return n.split(",").forEach(function(a){return e(r,a,i)})},tt=function(e,r,n,i,a){return e.addEventListener(r,n,{passive:!i,capture:!!a})},et=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},pl=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},Ch={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ml={toggleActions:"play",anticipatePin:0},jc={top:0,left:0,center:.5,bottom:1,right:1},Il=function(e,r){if(ir(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in jc?jc[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},hl=function(e,r,n,i,a,o,s,l){var u=a.startColor,d=a.endColor,f=a.fontSize,p=a.indent,m=a.fontWeight,y=he.createElement("div"),h=Ji(n)||di(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=h?ue:n,g=e.indexOf("start")!==-1,x=g?u:d,w="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||l)&&h?"fixed;":"absolute;"),(_||l||!h)&&(w+=(i===Qe?Pp:Rp)+":"+(o+parseFloat(p))+"px;"),s&&(w+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),y._isStart=g,y.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),y.style.cssText=w,y.innerText=r||r===0?e+"-"+r:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+i.op.d2],Fl(y,0,i,g),y},Fl=function(e,r,n,i){var a={display:"block"},o=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,a[n.a+"Percent"]=i?-100:0,a[n.a]=i?"1px":0,a["border"+o+eo]=1,a["border"+s+eo]=0,a[n.p]=r+"px",I.set(e,a)},Z=[],nf={},Ts,Eh=function(){return _t()-Tr>34&&(Ts||(Ts=requestAnimationFrame(jn)))},da=function(){(!zt||!zt.isPressed||zt.startX>ue.clientWidth)&&(ee.cache++,zt?Ts||(Ts=requestAnimationFrame(jn)):jn(),Tr||ta("scrollStart"),Tr=_t())},Ou=function(){S1=J.innerWidth,k1=J.innerHeight},Mo=function(e){ee.cache++,(e===!0||!wt&&!b1&&!he.fullscreenElement&&!he.webkitFullscreenElement&&(!ef||S1!==J.innerWidth||Math.abs(J.innerHeight-k1)>J.innerHeight*.25))&&kc.restart(!0)},ea={},kk=[],z1=function t(){return et(W,"scrollEnd",t)||Ii(!0)},ta=function(e){return ea[e]&&ea[e].map(function(r){return r()})||kk},rr=[],D1=function(e){for(var r=0;r<rr.length;r+=5)(!e||rr[r+4]&&rr[r+4].query===e)&&(rr[r].style.cssText=rr[r+1],rr[r].getBBox&&rr[r].setAttribute("transform",rr[r+2]||""),rr[r+3].uncache=1)},M1=function(){return ee.forEach(function(e){return St(e)&&++e.cacheID&&(e.rec=e())})},Mp=function(e,r){var n;for(Mt=0;Mt<Z.length;Mt++)n=Z[Mt],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));qo=!0,r&&D1(r),r||ta("revert")},L1=function(e,r){ee.cache++,(r||!Lt)&&ee.forEach(function(n){return St(n)&&n.cacheID++&&(n.rec=0)}),ir(e)&&(J.history.scrollRestoration=Np=e)},Lt,Xi=0,Nh,Sk=function(){if(Nh!==Xi){var e=Nh=Xi;requestAnimationFrame(function(){return e===Xi&&Ii(!0)})}},O1=function(){ue.appendChild(Fa),Tp=!zt&&Fa.offsetHeight||J.innerHeight,ue.removeChild(Fa)},Th=function(e){return Ns(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Ii=function(e,r){if(or=he.documentElement,ue=he.body,Ep=[J,he,or,ue],Tr&&!e&&!qo){tt(W,"scrollEnd",z1);return}O1(),Lt=W.isRefreshing=!0,qo||M1();var n=ta("refreshInit");_1&&W.sort(),r||Mp(),ee.forEach(function(i){St(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Z.slice(0).forEach(function(i){return i.refresh()}),qo=!1,Z.forEach(function(i){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),rf=1,Th(!0),Z.forEach(function(i){var a=nn(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>a,s=i._startClamp&&i.start>=a;(o||s)&&i.setPositions(s?a-1:i.start,o?Math.max(s?a:i.start+1,a):i.end,!0)}),Th(!1),rf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){St(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),L1(Np,1),kc.pause(),Xi++,Lt=2,jn(2),Z.forEach(function(i){return St(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Lt=W.isRefreshing=!1,ta("refresh")},af=0,Bl=1,rs,jn=function(e){if(e===2||!Lt&&!qo){W.isUpdating=!0,rs&&rs.update(0);var r=Z.length,n=_t(),i=n-Mu>=50,a=r&&Z[0].scroll();if(Bl=af>a?-1:1,Lt||(af=a),i&&(Tr&&!Xc&&n-Tr>200&&(Tr=0,ta("scrollEnd")),Po=Mu,Mu=n),Bl<0){for(Mt=r;Mt-- >0;)Z[Mt]&&Z[Mt].update(0,i);Bl=1}else for(Mt=0;Mt<r;Mt++)Z[Mt]&&Z[Mt].update(0,i);W.isUpdating=!1}Ts=0},of=[T1,P1,Rp,Pp,kr+ts,kr+Zo,kr+es,kr+Jo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ul=of.concat([Yi,Vi,"boxSizing","max"+eo,"max"+zp,"position",kr,We,We+es,We+Zo,We+ts,We+Jo]),jk=function(e,r,n){Ba(n);var i=e._gsap;if(i.spacerIsNative)Ba(i.spacerState);else if(e._gsap.swappedIn){var a=r.parentNode;a&&(a.insertBefore(e,r),a.removeChild(r))}e._gsap.swappedIn=!1},Au=function(e,r,n,i){if(!e._gsap.swappedIn){for(var a=of.length,o=r.style,s=e.style,l;a--;)l=of[a],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),s[Rp]=s[Pp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Yi]=Sc(e,At)+Ge,o[Vi]=Sc(e,Qe)+Ge,o[We]=s[kr]=s[P1]=s[T1]="0",Ba(i),s[Yi]=s["max"+eo]=n[Yi],s[Vi]=s["max"+zp]=n[Vi],s[We]=n[We],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Ck=/([A-Z])/g,Ba=function(e){if(e){var r=e.t.style,n=e.length,i=0,a,o;for((e.t._gsap||I.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],a=e[i],o?r[a]=o:r[a]&&r.removeProperty(a.replace(Ck,"-$1").toLowerCase())}},gl=function(e){for(var r=Ul.length,n=e.style,i=[],a=0;a<r;a++)i.push(Ul[a],n[Ul[a]]);return i.t=e,i},Ek=function(e,r,n){for(var i=[],a=e.length,o=n?8:0,s;o<a;o+=2)s=e[o],i.push(s,s in r?r[s]:e[o+1]);return i.t=e.t,i},Hl={left:0,top:0},Ph=function(e,r,n,i,a,o,s,l,u,d,f,p,m,y){St(e)&&(e=e(l)),ir(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Il("0"+e.substr(3),n):0));var h=m?m.time():0,_,v,g;if(m&&m.seek(0),isNaN(e)||(e=+e),Do(e))m&&(e=I.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,p,e)),s&&Fl(s,n,i,!0);else{St(r)&&(r=r(l));var x=(e||"0").split(" "),w,k,C,j;g=Ht(r,l)||ue,w=wn(g)||{},(!w||!w.left&&!w.top)&&Sr(g).display==="none"&&(j=g.style.display,g.style.display="block",w=wn(g),j?g.style.display=j:g.style.removeProperty("display")),k=Il(x[0],w[i.d]),C=Il(x[1]||"0",n),e=w[i.p]-u[i.p]-d+k+a-C,s&&Fl(s,C,i,n-C<20||s._isStart&&C>20),n-=n-C}if(y&&(l[y]=e||-.001,e<0&&(e=0)),o){var E=e+n,P=o._isStart;_="scroll"+i.d2,Fl(o,E,i,P&&E>20||!P&&(f?Math.max(ue[_],or[_]):o.parentNode[_])<=E+1),f&&(u=wn(s),f&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+Ge))}return m&&g&&(_=wn(g),m.seek(p),v=wn(g),m._caScrollDist=_[i.p]-v[i.p],e=e/m._caScrollDist*p),m&&m.seek(h),m?e:Math.round(e)},Nk=/(webkit|moz|length|cssText|inset)/i,Rh=function(e,r,n,i){if(e.parentNode!==r){var a=e.style,o,s;if(r===ue){e._stOrig=a.cssText,s=Sr(e);for(o in s)!+o&&!Nk.test(o)&&s[o]&&typeof a[o]=="string"&&o!=="0"&&(a[o]=s[o]);a.top=n,a.left=i}else a.cssText=e._stOrig;I.core.getCache(e).uncache=1,r.appendChild(e)}},A1=function(e,r,n){var i=r,a=i;return function(o){var s=Math.round(e());return s!==i&&s!==a&&Math.abs(s-i)>3&&Math.abs(s-a)>3&&(o=s,n&&n()),a=i,i=Math.round(o),i}},vl=function(e,r,n){var i={};i[r.p]="+="+n,I.set(e,i)},zh=function(e,r){var n=vi(e,r),i="_scroll"+r.p2,a=function o(s,l,u,d,f){var p=o.tween,m=l.onComplete,y={};u=u||n();var h=A1(n,u,function(){p.kill(),o.tween=0});return f=d&&f||0,d=d||s-u,p&&p.kill(),l[i]=s,l.inherit=!1,l.modifiers=y,y[i]=function(){return h(u+d*p.ratio+f*p.ratio*p.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&jn()},l.onComplete=function(){o.tween=0,m&&m.call(p)},p=o.tween=I.to(e,l),p};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},tt(e,"wheel",n.wheelHandler),W.isTouch&&tt(e,"touchmove",n.wheelHandler),a},W=function(){function t(r,n){fa||t.register(I)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),tf(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ro){this.update=this.refresh=this.kill=Jr;return}n=jh(ir(n)||Do(n)||n.nodeType?{trigger:n}:n,ml);var a=n,o=a.onUpdate,s=a.toggleClass,l=a.id,u=a.onToggle,d=a.onRefresh,f=a.scrub,p=a.trigger,m=a.pin,y=a.pinSpacing,h=a.invalidateOnRefresh,_=a.anticipatePin,v=a.onScrubComplete,g=a.onSnapComplete,x=a.once,w=a.snap,k=a.pinReparent,C=a.pinSpacer,j=a.containerAnimation,E=a.fastScrollEnd,P=a.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?At:Qe,F=!f&&f!==0,D=Ht(n.scroller||J),Y=I.core.getCache(D),X=Ji(D),V=("pinType"in n?n.pinType:di(D,"pinType")||X&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=F&&n.toggleActions.split(" "),R="markers"in n?n.markers:ml.markers,O=X?0:parseFloat(Sr(D)["border"+T.p2+eo])||0,S=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(S)},ae=yk(D,X,T),pt=xk(D,X),ce=0,Oe=0,we=0,ve=vi(D,T),Et,mt,On,Nt,Tt,oe,Ae,Ut,Jt,N,er,dn,An,ze,fn,In,bi,Ze,Fn,Ie,Dr,xr,pn,oo,$e,Fs,mn,aa,oa,Bn,ki,te,Si,Mr,Lr,Or,ji,sa,hn;if(S._startClamp=S._endClamp=!1,S._dir=T,_*=45,S.scroller=D,S.scroll=j?j.time.bind(j):ve,Nt=ve(),S.vars=n,i=i||n.animation,"refreshPriority"in n&&(_1=1,n.refreshPriority===-9999&&(rs=S)),Y.tweenScroll=Y.tweenScroll||{top:zh(D,Qe),left:zh(D,At)},S.tweenTo=Et=Y.tweenScroll[T.p],S.scrubDuration=function(L){Si=Do(L)&&L,Si?te?te.duration(L):te=I.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Si,paused:!0,onComplete:function(){return v&&v(S)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!S.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),S.animation=i.pause(),i.scrollTrigger=S,S.scrubDuration(f),Bn=0,l||(l=i.vars.id)),w&&((!Di(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ue.style&&I.set(X?[ue,or]:D,{scrollBehavior:"auto"}),ee.forEach(function(L){return St(L)&&L.target===(X?he.scrollingElement||or:D)&&(L.smooth=!1)}),On=St(w.snapTo)?w.snapTo:w.snapTo==="labels"?_k(i):w.snapTo==="labelsDirectional"?bk(i):w.directional!==!1?function(L,G){return Dp(w.snapTo)(L,_t()-Oe<500?0:G.direction)}:I.utils.snap(w.snapTo),Mr=w.duration||{min:.1,max:2},Mr=Di(Mr)?Qo(Mr.min,Mr.max):Qo(Mr,Mr),Lr=I.delayedCall(w.delay||Si/2||.1,function(){var L=ve(),G=_t()-Oe<500,B=Et.tween;if((G||Math.abs(S.getVelocity())<10)&&!B&&!Xc&&ce!==L){var K=(L-oe)/ze,Je=i&&!F?i.totalProgress():K,ne=G?0:(Je-ki)/(_t()-Po)*1e3||0,Fe=I.utils.clamp(-K,1-K,ua(ne/2)*ne/.185),ht=K+(w.inertia===!1?0:Fe),De,_e,fe=w,Ar=fe.onStart,Se=fe.onInterrupt,tr=fe.onComplete;if(De=On(ht,S),Do(De)||(De=ht),_e=Math.max(0,Math.round(oe+De*ze)),L<=Ae&&L>=oe&&_e!==L){if(B&&!B._initted&&B.data<=ua(_e-L))return;w.inertia===!1&&(Fe=De-K),Et(_e,{duration:Mr(ua(Math.max(ua(ht-Je),ua(De-Je))*.185/ne/.05||0)),ease:w.ease||"power3",data:ua(_e-L),onInterrupt:function(){return Lr.restart(!0)&&Se&&Se(S)},onComplete:function(){S.update(),ce=ve(),i&&!F&&(te?te.resetTo("totalProgress",De,i._tTime/i._tDur):i.progress(De)),Bn=ki=i&&!F?i.totalProgress():S.progress,g&&g(S),tr&&tr(S)}},L,Fe*ze,_e-L-Fe*ze),Ar&&Ar(S,Et.tween)}}else S.isActive&&ce!==L&&Lr.restart(!0)}).pause()),l&&(nf[l]=S),p=S.trigger=Ht(p||m!==!0&&m),hn=p&&p._gsap&&p._gsap.stRevert,hn&&(hn=hn(S)),m=m===!0?p:Ht(m),ir(s)&&(s={targets:p,className:s}),m&&(y===!1||y===kr||(y=!y&&m.parentNode&&m.parentNode.style&&Sr(m.parentNode).display==="flex"?!1:We),S.pin=m,mt=I.core.getCache(m),mt.spacer?fn=mt.pinState:(C&&(C=Ht(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),mt.spacerIsNative=!!C,C&&(mt.spacerState=gl(C))),mt.spacer=Ze=C||he.createElement("div"),Ze.classList.add("pin-spacer"),l&&Ze.classList.add("pin-spacer-"+l),mt.pinState=fn=gl(m)),n.force3D!==!1&&I.set(m,{force3D:!0}),S.spacer=Ze=mt.spacer,oa=Sr(m),oo=oa[y+T.os2],Ie=I.getProperty(m),Dr=I.quickSetter(m,T.a,Ge),Au(m,Ze,oa),bi=gl(m)),R){dn=Di(R)?jh(R,Ch):Ch,N=hl("scroller-start",l,D,T,dn,0),er=hl("scroller-end",l,D,T,dn,0,N),Fn=N["offset"+T.op.d2];var so=Ht(di(D,"content")||D);Ut=this.markerStart=hl("start",l,so,T,dn,Fn,0,j),Jt=this.markerEnd=hl("end",l,so,T,dn,Fn,0,j),j&&(sa=I.quickSetter([Ut,Jt],T.a,Ge)),!V&&!(sn.length&&di(D,"fixedMarkers")===!0)&&(wk(X?ue:D),I.set([N,er],{force3D:!0}),Fs=I.quickSetter(N,T.a,Ge),aa=I.quickSetter(er,T.a,Ge))}if(j){var Q=j.vars.onUpdate,H=j.vars.onUpdateParams;j.eventCallback("onUpdate",function(){S.update(0,0,1),Q&&Q.apply(j,H||[])})}if(S.previous=function(){return Z[Z.indexOf(S)-1]},S.next=function(){return Z[Z.indexOf(S)+1]},S.revert=function(L,G){if(!G)return S.kill(!0);var B=L!==!1||!S.enabled,K=wt;B!==S.isReverted&&(B&&(Or=Math.max(ve(),S.scroll.rec||0),we=S.progress,ji=i&&i.progress()),Ut&&[Ut,Jt,N,er].forEach(function(Je){return Je.style.display=B?"none":"block"}),B&&(wt=S,S.update(B)),m&&(!k||!S.isActive)&&(B?jk(m,Ze,fn):Au(m,Ze,Sr(m),$e)),B||S.update(B),wt=K,S.isReverted=B)},S.refresh=function(L,G,B,K){if(!((wt||!S.enabled)&&!G)){if(m&&L&&Tr){tt(t,"scrollEnd",z1);return}!Lt&&$&&$(S),wt=S,Et.tween&&!B&&(Et.tween.kill(),Et.tween=0),te&&te.pause(),h&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Un){return Un.vars.immediateRender&&Un.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var Je=ae(),ne=pt(),Fe=j?j.duration():nn(D,T),ht=ze<=.01||!ze,De=0,_e=K||0,fe=Di(B)?B.end:n.end,Ar=n.endTrigger||p,Se=Di(B)?B.start:n.start||(n.start===0||!p?0:m?"0 0":"0 100%"),tr=S.pinnedContainer=n.pinnedContainer&&Ht(n.pinnedContainer,S),Xr=p&&Math.max(0,Z.indexOf(S))||0,at=Xr,ot,gt,Ci,Bs,vt,Xe,Gr,Gc,Lp,lo,Kr,co,Us;for(R&&Di(B)&&(co=I.getProperty(N,T.p),Us=I.getProperty(er,T.p));at-- >0;)Xe=Z[at],Xe.end||Xe.refresh(0,1)||(wt=S),Gr=Xe.pin,Gr&&(Gr===p||Gr===m||Gr===tr)&&!Xe.isReverted&&(lo||(lo=[]),lo.unshift(Xe),Xe.revert(!0,!0)),Xe!==Z[at]&&(Xr--,at--);for(St(Se)&&(Se=Se(S)),Se=_h(Se,"start",S),oe=Ph(Se,p,Je,T,ve(),Ut,N,S,ne,O,V,Fe,j,S._startClamp&&"_startClamp")||(m?-.001:0),St(fe)&&(fe=fe(S)),ir(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(ir(Se)?Se.split(" ")[0]:"")+fe:(De=Il(fe.substr(2),Je),fe=ir(Se)?Se:(j?I.utils.mapRange(0,j.duration(),j.scrollTrigger.start,j.scrollTrigger.end,oe):oe)+De,Ar=p)),fe=_h(fe,"end",S),Ae=Math.max(oe,Ph(fe||(Ar?"100% 0":Fe),Ar,Je,T,ve()+De,Jt,er,S,ne,O,V,Fe,j,S._endClamp&&"_endClamp"))||-.001,De=0,at=Xr;at--;)Xe=Z[at]||{},Gr=Xe.pin,Gr&&Xe.start-Xe._pinPush<=oe&&!j&&Xe.end>0&&(ot=Xe.end-(S._startClamp?Math.max(0,Xe.start):Xe.start),(Gr===p&&Xe.start-Xe._pinPush<oe||Gr===tr)&&isNaN(Se)&&(De+=ot*(1-Xe.progress)),Gr===m&&(_e+=ot));if(oe+=De,Ae+=De,S._startClamp&&(S._startClamp+=De),S._endClamp&&!Lt&&(S._endClamp=Ae||-.001,Ae=Math.min(Ae,nn(D,T))),ze=Ae-oe||(oe-=.01)&&.001,ht&&(we=I.utils.clamp(0,1,I.utils.normalize(oe,Ae,Or))),S._pinPush=_e,Ut&&De&&(ot={},ot[T.a]="+="+De,tr&&(ot[T.p]="-="+ve()),I.set([Ut,Jt],ot)),m&&!(rf&&S.end>=nn(D,T)))ot=Sr(m),Bs=T===Qe,Ci=ve(),xr=parseFloat(Ie(T.a))+_e,!Fe&&Ae>1&&(Kr=(X?he.scrollingElement||or:D).style,Kr={style:Kr,value:Kr["overflow"+T.a.toUpperCase()]},X&&Sr(ue)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Kr.style["overflow"+T.a.toUpperCase()]="scroll")),Au(m,Ze,ot),bi=gl(m),gt=wn(m,!0),Gc=V&&vi(D,Bs?At:Qe)(),y?($e=[y+T.os2,ze+_e+Ge],$e.t=Ze,at=y===We?Sc(m,T)+ze+_e:0,at&&($e.push(T.d,at+Ge),Ze.style.flexBasis!=="auto"&&(Ze.style.flexBasis=at+Ge)),Ba($e),tr&&Z.forEach(function(Un){Un.pin===tr&&Un.vars.pinSpacing!==!1&&(Un._subPinOffset=!0)}),V&&ve(Or)):(at=Sc(m,T),at&&Ze.style.flexBasis!=="auto"&&(Ze.style.flexBasis=at+Ge)),V&&(vt={top:gt.top+(Bs?Ci-oe:Gc)+Ge,left:gt.left+(Bs?Gc:Ci-oe)+Ge,boxSizing:"border-box",position:"fixed"},vt[Yi]=vt["max"+eo]=Math.ceil(gt.width)+Ge,vt[Vi]=vt["max"+zp]=Math.ceil(gt.height)+Ge,vt[kr]=vt[kr+es]=vt[kr+Zo]=vt[kr+ts]=vt[kr+Jo]="0",vt[We]=ot[We],vt[We+es]=ot[We+es],vt[We+Zo]=ot[We+Zo],vt[We+ts]=ot[We+ts],vt[We+Jo]=ot[We+Jo],In=Ek(fn,vt,k),Lt&&ve(0)),i?(Lp=i._initted,zu(1),i.render(i.duration(),!0,!0),pn=Ie(T.a)-xr+ze+_e,mn=Math.abs(ze-pn)>1,V&&mn&&In.splice(In.length-2,2),i.render(0,!0,!0),Lp||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zu(0)):pn=ze,Kr&&(Kr.value?Kr.style["overflow"+T.a.toUpperCase()]=Kr.value:Kr.style.removeProperty("overflow-"+T.a));else if(p&&ve()&&!j)for(gt=p.parentNode;gt&&gt!==ue;)gt._pinOffset&&(oe-=gt._pinOffset,Ae-=gt._pinOffset),gt=gt.parentNode;lo&&lo.forEach(function(Un){return Un.revert(!1,!0)}),S.start=oe,S.end=Ae,Nt=Tt=Lt?Or:ve(),!j&&!Lt&&(Nt<Or&&ve(Or),S.scroll.rec=0),S.revert(!1,!0),Oe=_t(),Lr&&(ce=-1,Lr.restart(!0)),wt=0,i&&F&&(i._initted||ji)&&i.progress()!==ji&&i.progress(ji||0,!0).render(i.time(),!0,!0),(ht||we!==S.progress||j||h||i&&!i._initted)&&(i&&!F&&(i._initted||we||i.vars.immediateRender!==!1)&&i.totalProgress(j&&oe<-.001&&!we?I.utils.normalize(oe,Ae,0):we,!0),S.progress=ht||(Nt-oe)/ze===we?0:we),m&&y&&(Ze._pinOffset=Math.round(S.progress*pn)),te&&te.invalidate(),isNaN(co)||(co-=I.getProperty(N,T.p),Us-=I.getProperty(er,T.p),vl(N,T,co),vl(Ut,T,co-(K||0)),vl(er,T,Us),vl(Jt,T,Us-(K||0))),ht&&!Lt&&S.update(),d&&!Lt&&!An&&(An=!0,d(S),An=!1)}},S.getVelocity=function(){return(ve()-Tt)/(_t()-Po)*1e3||0},S.endAnimation=function(){bo(S.callbackAnimation),i&&(te?te.progress(1):i.paused()?F||bo(i,S.direction<0,1):bo(i,i.reversed()))},S.labelToScroll=function(L){return i&&i.labels&&(oe||S.refresh()||oe)+i.labels[L]/i.duration()*ze||0},S.getTrailing=function(L){var G=Z.indexOf(S),B=S.direction>0?Z.slice(0,G).reverse():Z.slice(G+1);return(ir(L)?B.filter(function(K){return K.vars.preventOverlaps===L}):B).filter(function(K){return S.direction>0?K.end<=oe:K.start>=Ae})},S.update=function(L,G,B){if(!(j&&!B&&!L)){var K=Lt===!0?Or:S.scroll(),Je=L?0:(K-oe)/ze,ne=Je<0?0:Je>1?1:Je||0,Fe=S.progress,ht,De,_e,fe,Ar,Se,tr,Xr;if(G&&(Tt=Nt,Nt=j?ve():K,w&&(ki=Bn,Bn=i&&!F?i.totalProgress():ne)),_&&m&&!wt&&!ul&&Tr&&(!ne&&oe<K+(K-Tt)/(_t()-Po)*_?ne=1e-4:ne===1&&Ae>K+(K-Tt)/(_t()-Po)*_&&(ne=.9999)),ne!==Fe&&S.enabled){if(ht=S.isActive=!!ne&&ne<1,De=!!Fe&&Fe<1,Se=ht!==De,Ar=Se||!!ne!=!!Fe,S.direction=ne>Fe?1:-1,S.progress=ne,Ar&&!wt&&(_e=ne&&!Fe?0:ne===1?1:Fe===1?2:3,F&&(fe=!Se&&U[_e+1]!=="none"&&U[_e+1]||U[_e],Xr=i&&(fe==="complete"||fe==="reset"||fe in i))),P&&(Se||Xr)&&(Xr||f||!i)&&(St(P)?P(S):S.getTrailing(P).forEach(function(Ci){return Ci.endAnimation()})),F||(te&&!wt&&!ul?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",ne,i._tTime/i._tDur):(te.vars.totalProgress=ne,te.invalidate().restart())):i&&i.totalProgress(ne,!!(wt&&(Oe||L)))),m){if(L&&y&&(Ze.style[y+T.os2]=oo),!V)Dr(zo(xr+pn*ne));else if(Ar){if(tr=!L&&ne>Fe&&Ae+1>K&&K+1>=nn(D,T),k)if(!L&&(ht||tr)){var at=wn(m,!0),ot=K-oe;Rh(m,ue,at.top+(T===Qe?ot:0)+Ge,at.left+(T===Qe?0:ot)+Ge)}else Rh(m,Ze);Ba(ht||tr?In:bi),mn&&ne<1&&ht||Dr(xr+(ne===1&&!tr?pn:0))}}w&&!Et.tween&&!wt&&!ul&&Lr.restart(!0),s&&(Se||x&&ne&&(ne<1||!Du))&&Ns(s.targets).forEach(function(Ci){return Ci.classList[ht||x?"add":"remove"](s.className)}),o&&!F&&!L&&o(S),Ar&&!wt?(F&&(Xr&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(S)),(Se||!Du)&&(u&&Se&&Lu(S,u),q[_e]&&Lu(S,q[_e]),x&&(ne===1?S.kill(!1,1):q[_e]=0),Se||(_e=ne===1?1:3,q[_e]&&Lu(S,q[_e]))),E&&!ht&&Math.abs(S.getVelocity())>(Do(E)?E:2500)&&(bo(S.callbackAnimation),te?te.progress(1):bo(i,fe==="reverse"?1:!ne,1))):F&&o&&!wt&&o(S)}if(aa){var gt=j?K/j.duration()*(j._caScrollDist||0):K;Fs(gt+(N._isFlipped?1:0)),aa(gt)}sa&&sa(-K/j.duration()*(j._caScrollDist||0))}},S.enable=function(L,G){S.enabled||(S.enabled=!0,tt(D,"resize",Mo),X||tt(D,"scroll",da),$&&tt(t,"refreshInit",$),L!==!1&&(S.progress=we=0,Nt=Tt=ce=ve()),G!==!1&&S.refresh())},S.getTween=function(L){return L&&Et?Et.tween:te},S.setPositions=function(L,G,B,K){if(j){var Je=j.scrollTrigger,ne=j.duration(),Fe=Je.end-Je.start;L=Je.start+Fe*L/ne,G=Je.start+Fe*G/ne}S.refresh(!1,!1,{start:bh(L,B&&!!S._startClamp),end:bh(G,B&&!!S._endClamp)},K),S.update()},S.adjustPinSpacing=function(L){if($e&&L){var G=$e.indexOf(T.d)+1;$e[G]=parseFloat($e[G])+L+Ge,$e[1]=parseFloat($e[1])+L+Ge,Ba($e)}},S.disable=function(L,G){if(L!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,G||te&&te.pause(),Or=0,mt&&(mt.uncache=1),$&&et(t,"refreshInit",$),Lr&&(Lr.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!X)){for(var B=Z.length;B--;)if(Z[B].scroller===D&&Z[B]!==S)return;et(D,"resize",Mo),X||et(D,"scroll",da)}},S.kill=function(L,G){S.disable(L,G),te&&!G&&te.kill(),l&&delete nf[l];var B=Z.indexOf(S);B>=0&&Z.splice(B,1),B===Mt&&Bl>0&&Mt--,B=0,Z.forEach(function(K){return K.scroller===S.scroller&&(B=1)}),B||Lt||(S.scroll.rec=0),i&&(i.scrollTrigger=null,L&&i.revert({kill:!1}),G||i.kill()),Ut&&[Ut,Jt,N,er].forEach(function(K){return K.parentNode&&K.parentNode.removeChild(K)}),rs===S&&(rs=0),m&&(mt&&(mt.uncache=1),B=0,Z.forEach(function(K){return K.pin===m&&B++}),B||(mt.spacer=0)),n.onKill&&n.onKill(S)},Z.push(S),S.enable(!1,!1),hn&&hn(S),i&&i.add&&!ze){var le=S.update;S.update=function(){S.update=le,ee.cache++,oe||Ae||S.refresh()},I.delayedCall(.01,S.update),ze=.01,oe=Ae=0}else S.refresh();m&&Sk()},t.register=function(n){return fa||(I=n||C1(),j1()&&window.document&&t.enable(),fa=Ro),fa},t.defaults=function(n){if(n)for(var i in n)ml[i]=n[i];return ml},t.disable=function(n,i){Ro=0,Z.forEach(function(o){return o[i?"kill":"disable"](n)}),et(J,"wheel",da),et(he,"scroll",da),clearInterval(cl),et(he,"touchcancel",Jr),et(ue,"touchstart",Jr),fl(et,he,"pointerdown,touchstart,mousedown",kh),fl(et,he,"pointerup,touchend,mouseup",Sh),kc.kill(),dl(et);for(var a=0;a<ee.length;a+=3)pl(et,ee[a],ee[a+1]),pl(et,ee[a],ee[a+2])},t.enable=function(){if(J=window,he=document,or=he.documentElement,ue=he.body,I&&(Ns=I.utils.toArray,Qo=I.utils.clamp,tf=I.core.context||Jr,zu=I.core.suppressOverwrites||Jr,Np=J.history.scrollRestoration||"auto",af=J.pageYOffset||0,I.core.globals("ScrollTrigger",t),ue)){Ro=1,Fa=document.createElement("div"),Fa.style.height="100vh",Fa.style.position="absolute",O1(),vk(),He.register(I),t.isTouch=He.isTouch,$n=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ef=He.isTouch===1,tt(J,"wheel",da),Ep=[J,he,or,ue],I.matchMedia?(t.matchMedia=function(u){var d=I.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},I.addEventListener("matchMediaInit",function(){M1(),Mp()}),I.addEventListener("matchMediaRevert",function(){return D1()}),I.addEventListener("matchMedia",function(){Ii(0,1),ta("matchMedia")}),I.matchMedia().add("(orientation: portrait)",function(){return Ou(),Ou})):console.warn("Requires GSAP 3.11.0 or later"),Ou(),tt(he,"scroll",da);var n=ue.hasAttribute("style"),i=ue.style,a=i.borderTopStyle,o=I.core.Animation.prototype,s,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=wn(ue),Qe.m=Math.round(s.top+Qe.sc())||0,At.m=Math.round(s.left+At.sc())||0,a?i.borderTopStyle=a:i.removeProperty("border-top-style"),n||(ue.setAttribute("style",""),ue.removeAttribute("style")),cl=setInterval(Eh,250),I.delayedCall(.5,function(){return ul=0}),tt(he,"touchcancel",Jr),tt(ue,"touchstart",Jr),fl(tt,he,"pointerdown,touchstart,mousedown",kh),fl(tt,he,"pointerup,touchend,mouseup",Sh),Jd=I.utils.checkPrefix("transform"),Ul.push(Jd),fa=_t(),kc=I.delayedCall(.2,Ii).pause(),pa=[he,"visibilitychange",function(){var u=J.innerWidth,d=J.innerHeight;he.hidden?(xh=u,wh=d):(xh!==u||wh!==d)&&Mo()},he,"DOMContentLoaded",Ii,J,"load",Ii,J,"resize",Mo],dl(tt),Z.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)pl(et,ee[l],ee[l+1]),pl(et,ee[l],ee[l+2])}},t.config=function(n){"limitCallbacks"in n&&(Du=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(cl)||(cl=i)&&setInterval(Eh,i),"ignoreMobileResize"in n&&(ef=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dl(et)||dl(tt,n.autoRefreshEvents||"none"),b1=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var a=Ht(n),o=ee.indexOf(a),s=Ji(a);~o&&ee.splice(o,s?6:2),i&&(s?sn.unshift(J,i,ue,i,or,i):sn.unshift(a,i))},t.clearMatchMedia=function(n){Z.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,a){var o=(ir(n)?Ht(n):n).getBoundingClientRect(),s=o[a?Yi:Vi]*i||0;return a?o.right-s>0&&o.left+s<J.innerWidth:o.bottom-s>0&&o.top+s<J.innerHeight},t.positionInViewport=function(n,i,a){ir(n)&&(n=Ht(n));var o=n.getBoundingClientRect(),s=o[a?Yi:Vi],l=i==null?s/2:i in jc?jc[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return a?(o.left+l)/J.innerWidth:(o.top+l)/J.innerHeight},t.killAll=function(n){if(Z.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var i=ea.killAll||[];ea={},i.forEach(function(a){return a()})}},t}();W.version="3.14.2";W.saveStyles=function(t){return t?Ns(t).forEach(function(e){if(e&&e.style){var r=rr.indexOf(e);r>=0&&rr.splice(r,5),rr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),I.core.getCache(e),tf())}}):rr};W.revert=function(t,e){return Mp(!t,e)};W.create=function(t,e){return new W(t,e)};W.refresh=function(t){return t?Mo(!0):(fa||W.register())&&Ii(!0)};W.update=function(t){return++ee.cache&&jn(t===!0?2:0)};W.clearScrollMemory=L1;W.maxScroll=function(t,e){return nn(t,e?At:Qe)};W.getScrollFunc=function(t,e){return vi(Ht(t),e?At:Qe)};W.getById=function(t){return nf[t]};W.getAll=function(){return Z.filter(function(t){return t.vars.id!=="ScrollSmoother"})};W.isScrolling=function(){return!!Tr};W.snapDirectional=Dp;W.addEventListener=function(t,e){var r=ea[t]||(ea[t]=[]);~r.indexOf(e)||r.push(e)};W.removeEventListener=function(t,e){var r=ea[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};W.batch=function(t,e){var r=[],n={},i=e.interval||.016,a=e.batchMax||1e9,o=function(u,d){var f=[],p=[],m=I.delayedCall(i,function(){d(f,p),f=[],p=[]}).pause();return function(y){f.length||m.restart(!0),f.push(y.trigger),p.push(y),a<=f.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&St(e[s])&&s!=="onRefreshInit"?o(s,e[s]):e[s];return St(a)&&(a=a(),tt(W,"refresh",function(){return a=e.batchMax()})),Ns(t).forEach(function(l){var u={};for(s in n)u[s]=n[s];u.trigger=l,r.push(W.create(u))}),r};var Dh=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},Iu=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(He.isTouch?" pinch-zoom":""):"none",e===or&&t(ue,r)},yl={auto:1,scroll:1},Tk=function(e){var r=e.event,n=e.target,i=e.axis,a=(r.changedTouches?r.changedTouches[0]:r).target,o=a._gsap||I.core.getCache(a),s=_t(),l;if(!o._isScrollT||s-o._isScrollT>2e3){for(;a&&a!==ue&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(yl[(l=Sr(a)).overflowY]||yl[l.overflowX]));)a=a.parentNode;o._isScroll=a&&a!==n&&!Ji(a)&&(yl[(l=Sr(a)).overflowY]||yl[l.overflowX]),o._isScrollT=s}(o._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},I1=function(e,r,n,i){return He.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&Tk,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tt(he,He.eventTypes[0],Lh,!1,!0)},onDisable:function(){return et(he,He.eventTypes[0],Lh,!0)}})},Pk=/(input|label|select|textarea)/i,Mh,Lh=function(e){var r=Pk.test(e.target.tagName);(r||Mh)&&(e._gsapAllow=!0,Mh=r)},Rk=function(e){Di(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,a=r.allowNestedScroll,o=r.onRelease,s,l,u=Ht(e.target)||or,d=I.core.globals().ScrollSmoother,f=d&&d.get(),p=$n&&(e.content&&Ht(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),m=vi(u,Qe),y=vi(u,At),h=1,_=(He.isTouch&&J.visualViewport?J.visualViewport.scale*J.visualViewport.width:J.outerWidth)/J.innerWidth,v=0,g=St(i)?function(){return i(s)}:function(){return i||2.8},x,w,k=I1(u,e.type,!0,a),C=function(){return w=!1},j=Jr,E=Jr,P=function(){l=nn(u,Qe),E=Qo($n?1:0,l),n&&(j=Qo(0,nn(u,At))),x=Xi},T=function(){p._gsap.y=zo(parseFloat(p._gsap.y)+m.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},F=function(){if(w){requestAnimationFrame(C);var R=zo(s.deltaY/2),O=E(m.v-R);if(p&&O!==m.v+m.offset){m.offset=O-m.v;var S=zo((parseFloat(p&&p._gsap.y)||0)-m.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",p._gsap.y=S+"px",m.cacheID=ee.cache,jn()}return!0}m.offset&&T(),w=!0},D,Y,X,V,q=function(){P(),D.isActive()&&D.vars.scrollY>l&&(m()>l?D.progress(1)&&m(l):D.resetTo("scrollY",l))};return p&&I.set(p,{y:"+=0"}),e.ignoreCheck=function(U){return $n&&U.type==="touchmove"&&F()||h>1.05&&U.type!=="touchstart"||s.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){w=!1;var U=h;h=zo((J.visualViewport&&J.visualViewport.scale||1)/_),D.pause(),U!==h&&Iu(u,h>1.01?!0:n?!1:"x"),Y=y(),X=m(),P(),x=Xi},e.onRelease=e.onGestureStart=function(U,R){if(m.offset&&T(),!R)V.restart(!0);else{ee.cache++;var O=g(),S,$;n&&(S=y(),$=S+O*.05*-U.velocityX/.227,O*=Dh(y,S,$,nn(u,At)),D.vars.scrollX=j($)),S=m(),$=S+O*.05*-U.velocityY/.227,O*=Dh(m,S,$,nn(u,Qe)),D.vars.scrollY=E($),D.invalidate().duration(O).play(.01),($n&&D.vars.scrollY>=l||S>=l-1)&&I.to({},{onUpdate:q,duration:O})}o&&o(U)},e.onWheel=function(){D._ts&&D.pause(),_t()-v>1e3&&(x=0,v=_t())},e.onChange=function(U,R,O,S,$){if(Xi!==x&&P(),R&&n&&y(j(S[2]===R?Y+(U.startX-U.x):y()+R-S[1])),O){m.offset&&T();var ae=$[2]===O,pt=ae?X+U.startY-U.y:m()+O-$[1],ce=E(pt);ae&&pt!==ce&&(X+=ce-pt),m(ce)}(O||R)&&jn()},e.onEnable=function(){Iu(u,n?!1:"x"),W.addEventListener("refresh",q),tt(J,"resize",q),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=y.smooth=!1),k.enable()},e.onDisable=function(){Iu(u,!0),et(J,"resize",q),W.removeEventListener("refresh",q),k.kill()},e.lockAxis=e.lockAxis!==!1,s=new He(e),s.iOS=$n,$n&&!m()&&m(1),$n&&I.ticker.add(Jr),V=s._dc,D=I.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:A1(m,m(),function(){return D.pause()})},onUpdate:jn,onComplete:V.vars.onComplete}),s};W.sort=function(t){if(St(t))return Z.sort(t);var e=J.pageYOffset||0;return W.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+J.innerHeight}),Z.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};W.observe=function(t){return new He(t)};W.normalizeScroll=function(t){if(typeof t>"u")return zt;if(t===!0&&zt)return zt.enable();if(t===!1){zt&&zt.kill(),zt=t;return}var e=t instanceof He?t:Rk(t);return zt&&zt.target===e.target&&zt.kill(),Ji(e.target)&&(zt=e),e};W.core={_getVelocityProp:Zd,_inputObserver:I1,_scrollers:ee,_proxies:sn,bridge:{ss:function(){Tr||ta("scrollStart"),Tr=_t()},ref:function(){return wt}}};C1()&&I.registerPlugin(W);M.registerPlugin(W);function zk(){const t=b.useRef(null);return b.useEffect(()=>{const e=M.context(()=>{M.utils.toArray(".reveal-up").forEach(r=>{M.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})}),M.fromTo(".reveal-left",{opacity:0,x:-50},{opacity:1,x:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".reveal-left",start:"top 88%"}}),document.querySelectorAll(".counter").forEach(r=>{const n=+r.dataset.target;W.create({trigger:r,start:"top 85%",once:!0,onEnter:()=>{M.to({val:0},{val:n,duration:1.5,ease:"power2.out",onUpdate:function(){r.textContent=Math.round(this.targets()[0].val)}})}})})},t);return()=>e.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: clamp(3rem,6vw,8rem); align-items: center;
          margin-top: clamp(3rem,6vw,6rem);
        }
        .about-left { position: relative; }
        .about-visual {
          aspect-ratio: 3/4; background: var(--card);
          border: 1px solid var(--line); overflow: hidden; position: relative;
        }
        .about-visual img { width:100%; height:100%; object-fit:cover; }
        .about-visual-badge {
          position: absolute; bottom: -1.5rem; right: -1.5rem;
          width: 120px; height: 120px; border-radius: 50%;
          background: var(--gold); color: var(--ink);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; font-family: var(--ff-display);
          font-weight: 700; font-size: .85rem; text-align: center;
          line-height: 1.2; animation: rotateBadge 12s linear infinite;
        }
        .about-bio {
          font-size: clamp(1.05rem,1.5vw,1.2rem); line-height: 1.75;
          color: var(--muted); margin-top: 2rem;
        }
        .about-bio strong { color: var(--cream); font-weight: 500; }
        .about-stats {
          margin-top: 3rem; display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.5rem; border-top: 1px solid var(--line); padding-top: 2rem;
        }
        .stat-num {
          font-family: var(--ff-display); font-size: 2.5rem;
          font-weight: 700; color: var(--gold); line-height: 1;
        }
        .stat-label {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); margin-top: .4rem;
        }
        @media(max-width:768px){
          .about-grid { grid-template-columns: 1fr; }
          .about-visual { aspect-ratio: 4/3; }
          .about-visual-badge { width:90px; height:90px; font-size:.75rem; }
          .about-stats { grid-template-columns: repeat(3,1fr); gap:1rem; }
        }
      `}),c.jsxs("section",{id:"about",className:"section-pad",ref:t,children:[c.jsx("div",{className:"section-num reveal-up",children:"01 — About"}),c.jsxs("div",{className:"about-grid",children:[c.jsx("div",{className:"about-left reveal-left",children:c.jsxs("div",{className:"about-visual",children:[c.jsx("img",{src:"/images/About - me.png",alt:"Dhamo",onError:e=>{e.target.style.display="none"}}),c.jsxs("div",{className:"about-visual-badge",children:["B.Tech",c.jsx("br",{}),"2025–29"]})]})}),c.jsxs("div",{className:"about-right",children:[c.jsxs("h2",{className:"section-title reveal-up",children:["Crafting the",c.jsx("br",{}),c.jsx("em",{children:"Web's Future."})]}),c.jsxs("p",{className:"about-bio reveal-up",children:["I'm ",c.jsx("strong",{children:"Dhyey Patel"})," — a Computer Science student and frontend developer with a deep obsession for",c.jsx("strong",{children:" aesthetic interfaces"})," and ",c.jsx("strong",{children:"fluid animations"}),". I bridge engineering logic with design sensibility, building experiences that don't just work — they ",c.jsx("em",{style:{color:"var(--gold)"},children:"feel"})," alive."]}),c.jsxs("p",{className:"about-bio reveal-up",style:{marginTop:"1rem"},children:["Currently pursuing my ",c.jsx("strong",{children:"B.Tech in Computer Science"})," (Batch 2025–2029), I'm already shipping production-quality projects with modern stacks and pushing the limits of what the browser can do."]}),c.jsxs("div",{className:"about-stats reveal-up",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num counter","data-target":"6",children:"0"}),c.jsx("div",{className:"stat-label",children:"Projects Live"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num counter","data-target":"5",children:"0"}),c.jsx("div",{className:"stat-label",children:"Certificates"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num",children:"∞"}),c.jsx("div",{className:"stat-label",children:"Ambition"})]})]}),c.jsx("div",{className:"reveal-up",style:{marginTop:"2.5rem"},children:c.jsx("a",{href:"mailto:pateldhamo0079@gmail.com",className:"mag-btn mag-hover",children:"Let's Talk ↗"})})]})]})]})]})}M.registerPlugin(W);const Dk=[{icon:"fas fa-volleyball-ball",emoji:"🏐",title:"Volleyball",subtitle:"District Player · Gujarat",desc:"Represented at the district level in Gujarat. Spikes, blocks, and team synergy — the court is where instincts meet strategy.",color:"#4ade80",accent:"rgba(74,222,128,0.08)"},{emoji:"⚽",icon:"fas fa-futbol",title:"Football",subtitle:"Casual / Competitive",desc:"From backyard kickabouts to serious matches. Love the beautiful game — Barcelona fan for life.",color:"#60a5fa",accent:"rgba(96,165,250,0.08)"},{emoji:"📸",icon:"fas fa-camera",title:"Photography",subtitle:"Street & Landscape",desc:"Capturing fleeting moments — golden hours, urban geometry, and the poetry in everyday life.",color:"#f59e0b",accent:"rgba(245,158,11,0.08)"},{emoji:"🚗",icon:"fas fa-car",title:"Cars",subtitle:"BMW M4 Enthusiast",desc:"Obsessed with automotive engineering. The M4 is perfection — 503 bhp of pure emotion.",color:"#e879f9",accent:"rgba(232,121,249,0.08)"},{emoji:"🔧",icon:"fas fa-tools",title:"Tech Tinkering",subtitle:"Android & Custom ROMs",desc:"Rooting phones, flashing ROMs, overclocking — because default is never good enough.",color:"#fb923c",accent:"rgba(251,146,60,0.08)"},{emoji:"🎮",icon:"fas fa-gamepad",title:"Gaming",subtitle:"Strategy & FPS",desc:"CS:GO clutches and VALORANT ranked grinds. Gaming taught me quick thinking and teamwork.",color:"#34d399",accent:"rgba(52,211,153,0.08)"}];function Mk(){const t=b.useRef(null);b.useEffect(()=>{const n=M.context(()=>{M.utils.toArray(".beyond-reveal").forEach(i=>{M.fromTo(i,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 88%"}})}),M.utils.toArray(".beyond-card").forEach((i,a)=>{M.fromTo(i,{opacity:0,y:50,scale:.95},{opacity:1,y:0,scale:1,duration:.9,ease:"power3.out",delay:a*.08,scrollTrigger:{trigger:i,start:"top 90%"}})})},t);return()=>n.revert()},[]);const e=(n,i)=>{const a=i.getBoundingClientRect(),o=n.clientX-a.left,s=n.clientY-a.top,l=a.width/2,u=a.height/2,d=(s-u)/18,f=(l-o)/18;i.style.transform=`perspective(900px) rotateX(${d}deg) rotateY(${f}deg) translateY(-6px)`;const p=i.querySelector(".beyond-card-glow");p&&(p.style.opacity="1",p.style.left=o+"px",p.style.top=s+"px")},r=n=>{n.style.transform="perspective(900px) rotateX(0) rotateY(0) translateY(0)",n.style.transition="transform .5s cubic-bezier(.25,1,.5,1)";const i=n.querySelector(".beyond-card-glow");i&&(i.style.opacity="0")};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .beyond-section { background: var(--ink); }
        .beyond-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem); flex-wrap: wrap; gap: 1.5rem;
        }
        .beyond-subtitle {
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); max-width: 400px; line-height: 1.8;
        }

        .beyond-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(320px,100%), 1fr));
          gap: 1.5rem;
        }

        .beyond-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 10px; padding: 1.8rem 2rem;
          position: relative; overflow: hidden;
          cursor: default; will-change: transform;
          transform-style: preserve-3d;
          transition: border-color .4s, box-shadow .4s, transform .5s cubic-bezier(.25,1,.5,1);
          opacity: 0;
        }
        .beyond-card:hover {
          border-color: var(--bc-color, var(--gold));
          box-shadow: 0 20px 50px rgba(0,0,0,.4), 0 0 30px var(--bc-color, var(--gold))20;
        }

        .beyond-card-glow {
          position: absolute; z-index: 0; pointer-events: none;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, var(--bc-color,var(--gold))15, transparent 70%);
          transform: translate(-50%,-50%); opacity: 0; transition: opacity .4s;
        }

        .beyond-card-stripe {
          position: absolute; top:0; left:0; right:0; height:3px;
          background: linear-gradient(90deg, var(--bc-color,var(--gold)), transparent);
          opacity: .6; transition: opacity .4s;
        }
        .beyond-card:hover .beyond-card-stripe { opacity: 1; }

        .beyond-card-content { position: relative; z-index: 1; }
        .beyond-emoji {
          font-size: 2.2rem; line-height: 1; margin-bottom: .9rem;
          display: block; filter: drop-shadow(0 0 10px var(--bc-color,var(--gold))60);
          transition: transform .3s;
        }
        .beyond-card:hover .beyond-emoji { transform: scale(1.2) rotate(8deg); }

        .beyond-card-title {
          font-family: var(--ff-display); font-size: 1.4rem;
          font-weight: 700; line-height: 1.1;
          transition: color .3s;
        }
        .beyond-card:hover .beyond-card-title { color: var(--bc-color, var(--gold)); }

        .beyond-card-sub {
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--bc-color, var(--gold)); margin: .4rem 0 .9rem;
          opacity: .7;
        }

        .beyond-card-desc {
          font-size: .84rem; color: var(--muted); line-height: 1.65;
        }

        .beyond-card-corner {
          position: absolute; bottom: 1rem; right: 1.2rem;
          font-family: var(--ff-display); font-size: 4rem; font-weight: 900;
          color: transparent; -webkit-text-stroke: 1px var(--bc-color,var(--gold))14;
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .4s;
        }
        .beyond-card:hover .beyond-card-corner {
          -webkit-text-stroke: 1px var(--bc-color,var(--gold))30;
        }

        @media(max-width:768px){
          .beyond-header { flex-direction: column; align-items: flex-start; }
          .beyond-grid { gap: 1rem; }
        }
      `}),c.jsxs("section",{id:"beyond",className:"section-pad beyond-section",ref:t,children:[c.jsxs("div",{className:"beyond-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"section-num beyond-reveal",children:"01.5 — Lifestyle"}),c.jsxs("h2",{className:"section-title beyond-reveal",children:["Beyond ",c.jsx("em",{children:"Code."})]})]}),c.jsx("p",{className:"beyond-subtitle beyond-reveal",children:"The human behind the keyboard. Outside of coding, here's what keeps me sharp, inspired & alive."})]}),c.jsx("div",{className:"beyond-grid",children:Dk.map((n,i)=>c.jsxs("div",{className:"beyond-card",style:{"--bc-color":n.color},onMouseMove:a=>e(a,a.currentTarget),onMouseLeave:a=>r(a.currentTarget),children:[c.jsx("div",{className:"beyond-card-glow"}),c.jsx("div",{className:"beyond-card-stripe"}),c.jsxs("div",{className:"beyond-card-content",children:[c.jsx("span",{className:"beyond-emoji",children:n.emoji}),c.jsx("div",{className:"beyond-card-title",children:n.title}),c.jsx("div",{className:"beyond-card-sub",children:n.subtitle}),c.jsx("p",{className:"beyond-card-desc",children:n.desc})]}),c.jsx("div",{className:"beyond-card-corner",children:String(i+1).padStart(2,"0")})]},i))})]})]})}M.registerPlugin(W);const Lk=[{name:"HTML5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",color:"#e34f26"},{name:"CSS3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",color:"#1572b6"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",color:"#f7df1e"},{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",color:"#61dafb"},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",color:"#339933"},{name:"GSAP",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg",color:"#88ce02"},{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",color:"#f24e1e"},{name:"C / C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",color:"#00599c"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",color:"#47a248"},{name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",color:"#f05032"},{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",color:"#007acc"},{name:"Netlify",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",color:"#00c7b7"}],Oh=["skill-bounce","skill-wiggle","skill-rubberband","skill-tada","skill-spin720","skill-jello","skill-heartbeat","skill-shake"];function Ok(){const t=b.useRef(null),[e,r]=b.useState(null);b.useEffect(()=>{const a=M.context(()=>{M.utils.toArray(".reveal-up").forEach(o=>{M.fromTo(o,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 88%"}})}),M.fromTo(".skill-icon-card",{opacity:0,y:40,scale:.8},{opacity:1,y:0,scale:1,stagger:.06,duration:.7,ease:"back.out(1.7)",scrollTrigger:{trigger:".skills-icon-grid",start:"top 85%"}})},t);return()=>a.revert()},[]);const n=a=>{r(a),setTimeout(()=>r(null),900)},i=()=>Oh[Math.floor(Math.random()*Oh.length)];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ── FUN KEYFRAMES ── */
        @keyframes skillBounce {
          0%,100%{transform:translateY(0) scale(1);}
          20%{transform:translateY(-22px) scale(1.15);}
          50%{transform:translateY(-8px) scale(1.05);}
          70%{transform:translateY(-16px) scale(1.1);}
        }
        @keyframes skillWiggle {
          0%,100%{transform:rotate(0);}
          15%{transform:rotate(-18deg);}
          30%{transform:rotate(16deg);}
          45%{transform:rotate(-12deg);}
          60%{transform:rotate(10deg);}
          75%{transform:rotate(-5deg);}
        }
        @keyframes skillRubberband {
          0%{transform:scaleX(1) scaleY(1);}
          20%{transform:scaleX(1.4) scaleY(.6);}
          40%{transform:scaleX(.8) scaleY(1.2);}
          60%{transform:scaleX(1.15) scaleY(.9);}
          80%{transform:scaleX(.98) scaleY(1.03);}
          100%{transform:scaleX(1) scaleY(1);}
        }
        @keyframes skillTada {
          0%{transform:scale(1) rotate(0);}
          10%{transform:scale(.9) rotate(-4deg);}
          20%{transform:scale(.9) rotate(-4deg);}
          30%{transform:scale(1.1) rotate(4deg);}
          40%{transform:scale(1.1) rotate(-4deg);}
          50%{transform:scale(1.1) rotate(4deg);}
          60%{transform:scale(1.1) rotate(-2deg);}
          70%{transform:scale(1.1) rotate(2deg);}
          80%{transform:scale(1.1) rotate(-1deg);}
          90%{transform:scale(1.1) rotate(1deg);}
          100%{transform:scale(1) rotate(0);}
        }
        @keyframes skillSpin720 {
          0%{transform:rotate(0) scale(1);}
          50%{transform:rotate(360deg) scale(1.3);}
          100%{transform:rotate(720deg) scale(1);}
        }
        @keyframes skillJello {
          0%,11.1%,100%{transform:none;}
          22.2%{transform:skewX(-12.5deg) skewY(-12.5deg);}
          33.3%{transform:skewX(6.25deg) skewY(6.25deg);}
          44.4%{transform:skewX(-3.125deg) skewY(-3.125deg);}
          55.5%{transform:skewX(1.5625deg) skewY(1.5625deg);}
          66.6%{transform:skewX(-.78125deg) skewY(-.78125deg);}
          77.7%{transform:skewX(.390625deg) skewY(.390625deg);}
          88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg);}
        }
        @keyframes skillHeartbeat {
          0%,100%{transform:scale(1);}
          14%{transform:scale(1.35);}
          28%{transform:scale(1);}
          42%{transform:scale(1.35);}
          70%{transform:scale(1);}
        }
        @keyframes skillShake {
          0%,100%{transform:translateX(0);}
          10%{transform:translateX(-10px) rotate(-2deg);}
          20%{transform:translateX(10px) rotate(2deg);}
          30%{transform:translateX(-10px) rotate(-2deg);}
          40%{transform:translateX(10px) rotate(2deg);}
          50%{transform:translateX(-6px);}
          60%{transform:translateX(6px);}
          70%{transform:translateX(-3px);}
          80%{transform:translateX(3px);}
        }
        .skill-bounce  { animation: skillBounce   .85s ease; }
        .skill-wiggle  { animation: skillWiggle   .85s ease; }
        .skill-rubberband { animation: skillRubberband .85s ease; }
        .skill-tada    { animation: skillTada     .85s ease; }
        .skill-spin720 { animation: skillSpin720  .85s ease; }
        .skill-jello   { animation: skillJello    .85s ease; }
        .skill-heartbeat { animation: skillHeartbeat .8s ease; }
        .skill-shake   { animation: skillShake    .85s ease; }

        /* ── SECTION ── */
        .skills-bg { background: var(--smoke); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .skills-label {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--muted); margin-top: 3.5rem; margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .skills-label::before { content:''; flex: 1; max-width:24px; height:1px; background:var(--line); }

        /* ── ICON GRID ── */
        .skills-icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
          gap: 1rem; margin-top: 2rem;
        }
        .skill-icon-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 10px; padding: 1.4rem .8rem;
          display: flex; flex-direction: column;
          align-items: center; gap: .7rem;
          cursor: pointer; position: relative; overflow: hidden;
          transition: border-color .3s, box-shadow .3s, transform .3s;
          user-select: none; opacity: 0;
        }
        .skill-icon-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at center, var(--sk-color,var(--gold))18, transparent 70%);
          opacity: 0; transition: opacity .4s;
        }
        .skill-icon-card:hover::before { opacity: 1; }
        .skill-icon-card:hover {
          border-color: var(--sk-color, var(--gold));
          box-shadow: 0 8px 30px var(--sk-color, var(--gold))30;
          transform: translateY(-6px) scale(1.04);
        }
        .skill-icon-img {
          width: 38px; height: 38px; object-fit: contain;
          filter: drop-shadow(0 2px 8px var(--sk-color,#fff)44);
          transition: filter .3s, transform .3s;
        }
        .skill-icon-card:hover .skill-icon-img {
          filter: drop-shadow(0 4px 14px var(--sk-color,#fff)80);
        }
        .skill-icon-name {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted); text-align: center;
          transition: color .3s;
        }
        .skill-icon-card:hover .skill-icon-name { color: var(--cream); }

        /* click hint tooltip */
        .skill-click-hint {
          position: absolute; bottom: .5rem; right: .5rem;
          font-size: .35rem; color: rgba(255,255,255,.15);
          font-family: var(--ff-mono); letter-spacing: .08em;
          text-transform: uppercase;
          transition: color .3s;
        }
        .skill-icon-card:hover .skill-click-hint { color: rgba(255,255,255,.3); }

        @media(max-width:768px){
          .skills-icon-grid { grid-template-columns: repeat(4, 1fr); gap: .7rem; }
          .skill-icon-card { padding: 1rem .5rem; }
          .skill-icon-img { width: 30px; height: 30px; }
        }
      `}),c.jsxs("section",{id:"skills",className:"section-pad skills-bg",ref:t,children:[c.jsx("div",{className:"section-num reveal-up",children:"02 — Expertise"}),c.jsxs("h2",{className:"section-title reveal-up",children:["What I ",c.jsx("em",{children:"Do."})]}),c.jsx("div",{className:"skills-label reveal-up",children:"Tech Stack · Click for a surprise"}),c.jsx("div",{className:"skills-icon-grid",children:Lk.map((a,o)=>{const s=e===o?i():"";return c.jsxs("div",{className:`skill-icon-card ${s}`,style:{"--sk-color":a.color},onClick:()=>n(o),title:`Click me! (${a.name})`,children:[c.jsx("img",{className:"skill-icon-img",src:a.icon,alt:a.name,draggable:!1}),c.jsx("span",{className:"skill-icon-name",children:a.name}),c.jsx("span",{className:"skill-click-hint",children:"click!"})]},o)})})]})]})}M.registerPlugin(W);const Ak=[{id:1,href:"https://rejouiceclone1.netlify.app/",thumb:"https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=2559&q=80",alt:"Rejouice Clone",tag:"Frontend Clone · GSAP · HTML/CSS",title:"Rejouice Clone",desc:"A pixel-perfect recreation of the award-winning Rejouice agency site, featuring buttery scroll animations and editorial design."},{id:2,href:"https://rolex-clone30.netlify.app/",thumb:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",alt:"Rolex Clone",tag:"Luxury UI · Frontend · Scroll Magic",title:"Rolex Clone",desc:"A luxury-grade Rolex website clone showcasing premium typography, immersive scroll storytelling and refined micro-interactions."},{id:3,href:"https://otakuverse1.netlify.app/",thumb:"https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",alt:"Otaku Verse",tag:"Anime · Community · Web Design",title:"Otaku Verse",desc:"An immersive hub for Otaku culture, featuring a dynamic interface and curated content for the global anime community."},{id:4,href:"https://git-analyzer10.netlify.app/",thumb:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",alt:"Git Analyzer",tag:"Analytics · GitHub API · Data Visualization",title:"Git Analyzer",desc:"Transform your GitHub profile into a visual portfolio with deep-dive analytics on repositories and coding patterns."},{id:5,href:"https://worldfactory1.netlify.app/",thumb:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",alt:"World Factory",tag:"E-Commerce · Culinary · Premium UI",title:"World Factory",desc:`"Everything's on the menu. Except compromise." A high-end platform delivering premium culinary experiences without shortcuts.`},{id:6,href:"https://meal-explorer1.netlify.app/",thumb:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",alt:"Meal Explorer",tag:"Recipe Search · API · Meal Discovery",title:"Meal Explorer",desc:"Explore thousands of recipes with a sleek search engine. Discover your next favorite dish with detailed instructions and high-quality visuals."}];function Ik({project:t}){const[e,r]=b.useState(!1),[n,i]=b.useState(!1),[a,o]=b.useState(!1),s=b.useRef(null),l=()=>{o(!0),s.current=setTimeout(()=>{i(!0),r(!0)},4500)},u=()=>{clearTimeout(s.current),o(!1),r(!1)};return c.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"proj-card reveal-up",onMouseEnter:l,onMouseLeave:u,children:[c.jsxs("div",{className:"proj-card-inner",children:[c.jsxs("div",{className:"proj-thumb",children:[c.jsx("img",{src:t.thumb,alt:t.alt,loading:"lazy"}),c.jsx("div",{className:"proj-thumb-overlay"}),c.jsx("div",{className:`proj-loading-bar${a?" animate":""}`}),c.jsxs("div",{className:`proj-preview-wrap${e?" show":""}`,children:[c.jsx("div",{className:"proj-preview-label",children:"Live Preview"}),c.jsx("div",{className:"proj-live-badge",children:"Live Site"}),n&&c.jsx("iframe",{className:"proj-iframe",src:t.href,title:`${t.title} Preview`,loading:"lazy",sandbox:"allow-same-origin allow-scripts allow-forms"})]})]}),c.jsx("div",{className:"proj-arrow",children:c.jsx("i",{className:"fas fa-arrow-up-right"})})]}),c.jsxs("div",{className:"proj-info",children:[c.jsx("div",{className:"proj-tag",children:t.tag}),c.jsx("h3",{className:"proj-title",children:t.title}),c.jsx("p",{className:"proj-desc",children:t.desc})]})]})}function Fk(){const t=b.useRef(null);return b.useEffect(()=>{const e=M.context(()=>{M.utils.toArray(".reveal-up").forEach((r,n)=>{M.fromTo(r,{opacity:0,y:60},{opacity:1,y:0,duration:1,ease:"power3.out",delay:n*.08,scrollTrigger:{trigger:r,start:"top 90%"}})})},t);return()=>e.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .projects-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(400px,100%), 1fr));
          gap: 2rem;
        }
        .proj-card {
          position: relative; overflow: hidden; background: var(--card);
          border: 1px solid var(--line); border-radius: 4px; display: block;
        }
        .proj-card-inner { position: relative; }
        .proj-thumb { aspect-ratio: 16/10; background: #1a1918; overflow: hidden; position: relative; }
        .proj-thumb img {
          width:100%; height:100%; object-fit:cover;
          transition: transform .8s cubic-bezier(.25,1,.5,1), filter .8s, opacity .6s;
          filter: saturate(.6) brightness(.7); position: relative; z-index:1;
        }
        .proj-card:hover .proj-thumb img { transform: scale(1.06); filter: saturate(.9) brightness(.85); }
        .proj-preview-wrap {
          position: absolute; inset:0; z-index:2; opacity:0;
          transition: opacity .8s ease; pointer-events:none; overflow:hidden;
        }
        .proj-preview-wrap.show { opacity:1; pointer-events:auto; }
        .proj-preview-label {
          position: absolute; top:10px; left:10px; z-index:4;
          font-family: var(--ff-mono); font-size:.6rem; letter-spacing:.2em;
          text-transform:uppercase; background:rgba(8,7,7,.85); color:var(--gold);
          padding:.3rem .7rem; border:1px solid rgba(201,169,110,.3); backdrop-filter:blur(6px);
        }
        .proj-live-badge {
          position: absolute; top:10px; right:10px; z-index:4;
          font-family: var(--ff-mono); font-size:.55rem; letter-spacing:.15em;
          text-transform:uppercase; background:rgba(201,169,110,.15); color:var(--gold2);
          padding:.3rem .7rem; border:1px solid rgba(201,169,110,.4); backdrop-filter:blur(6px);
          display:flex; align-items:center; gap:.4rem;
        }
        .proj-live-badge::before {
          content:''; width:5px; height:5px; border-radius:50%; background:var(--gold2);
          animation: livePulse 1.2s ease-in-out infinite;
        }
        .proj-iframe { width:100%; height:100%; border:none; background:#1a1918; }
        .proj-loading-bar {
          position: absolute; bottom:0; left:0; z-index:3; height:2px;
          background: linear-gradient(90deg, var(--gold), var(--gold2));
          width:0%; transition: width 4s linear;
        }
        .proj-loading-bar.animate { width:100%; }
        .proj-thumb-overlay {
          position: absolute; inset:0; z-index:0;
          background: linear-gradient(to top, rgba(8,7,7,.85) 0%, transparent 60%);
        }
        .proj-info { padding: 1.8rem; border-top: 1px solid var(--line); }
        .proj-tag {
          font-family: var(--ff-mono); font-size:.6rem; letter-spacing:.2em;
          text-transform:uppercase; color:var(--gold); margin-bottom:.7rem;
        }
        .proj-title {
          font-family: var(--ff-display); font-size:1.6rem;
          font-weight:700; line-height:1.1; transition:color .3s;
        }
        .proj-card:hover .proj-title { color: var(--gold2); }
        .proj-desc { font-size:.88rem; color:var(--muted); margin-top:.6rem; line-height:1.6; }
        .proj-arrow {
          position: absolute; top:1.5rem; right:1.5rem;
          width:42px; height:42px; border:1px solid var(--gold); border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          color:var(--gold); font-size:.8rem;
          opacity:0; transform:translate(4px,-4px);
          transition: opacity .4s, transform .4s, background .3s, color .3s; z-index:5;
        }
        .proj-card:hover .proj-arrow { opacity:1; transform:translate(0,0); }
        .proj-arrow:hover { background:var(--gold); color:var(--ink); }
        @media(max-width:768px){ .projects-header { flex-direction:column; align-items:flex-start; gap:1.5rem; } .projects-grid { gap:1.5rem; } }
      `}),c.jsxs("section",{id:"projects",className:"section-pad",ref:t,children:[c.jsxs("div",{className:"projects-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"section-num reveal-up",children:"03 — Projects"}),c.jsxs("h2",{className:"section-title reveal-up",children:["Selected ",c.jsx("em",{children:"Work."})]})]}),c.jsx("div",{className:"reveal-up",children:c.jsx(cn,{to:"/works",className:"mag-btn-outline mag-hover",children:"All Works ↗"})})]}),c.jsx("div",{className:"projects-grid",children:Ak.map(e=>c.jsx(Ik,{project:e},e.id))})]})]})}M.registerPlugin(W);const Bk=[{icon:"fas fa-code",title:"Frontend Mastery",sub:"Modern Web Development & Interactivity — HTML, CSS, JavaScript and advanced animation techniques.",year:"2025 · Verified",img:"/images/certs/frontend-mastery.jpg",download:"Dhamo-Frontend-Mastery-Certificate"},{icon:"fas fa-microchip",title:"C Programming Logic",sub:"Data Structures & Algorithms mastery. Building computational thinking from first principles.",year:"2025 · Verified",img:"/images/certs/c-programming.png",download:"Dhamo-C-Programming-Certificate"},{icon:"fas fa-brain",title:"Prompt Engineering",sub:"Mastery of AI prompt design, chain-of-thought techniques and structured LLM communication.",year:"2025 · Certified",img:"/images/certs/prompt-engineering.jpg",download:"Dhamo-Prompt-Engineering-Certificate"},{icon:"fab fa-github",title:"Unsaid Talk — Git Analyzer",sub:"Hackathon Participant · Built Git Analyzer, a GitHub profile analytics tool with visual data insights.",year:"2025 · Hackathon · Participant",img:"/images/certs/unsaid-talk-hackathon.png",download:"Dhamo-UnsaidTalk-Hackathon-Certificate"},{icon:"fas fa-bolt",title:"Hack Energy — Hackathon",sub:"Hackathon Participant · Developed energy-focused tech solutions under time constraints with cross-functional teams.",year:"2025 · Hackathon · Participant",img:"/images/certs/Hack energy.jpg",download:"Dhamo-HackEnergy-Hackathon-Certificate"},{icon:"fas fa-fire",title:"Dev Heat — Hackathon",sub:"Hackathon Participant · Competed in a developer-focused hackathon pushing real-world problem solving and UI innovation.",year:"2025 · Hackathon · Participant",img:"/images/certs/Dev Heat.jpg",download:"Dhamo-DevHeat-Hackathon-Certificate"},{icon:"fas fa-shield-alt",title:"Hack The Tank — Hackathon",sub:"Hackathon Participant · Built innovative product pitches in a shark-tank-style coding competition format.",year:"2025 · Hackathon · Participant",img:"/images/certs/Hack the tank.jpg",download:"Dhamo-HackTheTank-Hackathon-Certificate"},{icon:"fas fa-rocket",title:"Odoo × Indus University Hackathon ' 26",sub:"Hackathon Participant · Team Czar (ID: 082) · Built BK Crown POS — a full-featured contactless dining PWA during a 48-hour sprint at Indus University, organized by Odoo India Pvt. Ltd.",year:"April 2026 · Hackathon · Participant",img:"/images/certs/Hackathon oddo x indus.jpeg",download:"Dhamo-OdooIndus-Hackathon-Certificate",isHack:!0}];function Uk({cert:t}){const[e,r]=b.useState("loading");return c.jsxs("div",{className:"cert-card reveal-up",children:[c.jsxs("div",{className:"cert-img-area",children:[c.jsx("img",{src:t.img,alt:t.title,style:{display:e==="ok"?"block":"none"},onLoad:()=>r("ok"),onError:()=>r("fail")}),e!=="ok"&&c.jsxs("div",{className:"cert-img-placeholder",children:[c.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 48 48",fill:"none",children:[c.jsx("rect",{x:"4",y:"8",width:"40",height:"32",rx:"2",stroke:"#C9A96E",strokeWidth:"1.5"}),c.jsx("path",{d:"M14 20h20M14 26h14",stroke:"#C9A96E",strokeWidth:"1.5",strokeLinecap:"round"}),c.jsx("circle",{cx:"36",cy:"34",r:"6",fill:"none",stroke:"#C9A96E",strokeWidth:"1.5"}),c.jsx("path",{d:"M36 31v3l2 1",stroke:"#C9A96E",strokeWidth:"1",strokeLinecap:"round"})]}),e==="fail"?c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"❌ File not found:"}),c.jsx("span",{className:"cert-path-hint",children:t.img})]}):c.jsx("span",{children:"Loading…"})]})]}),c.jsxs("div",{className:"cert-body",children:[c.jsx("div",{className:"cert-icon",children:c.jsx("i",{className:t.icon})}),c.jsx("div",{className:"cert-title",children:t.title}),c.jsx("div",{className:"cert-sub",children:t.sub}),c.jsx("div",{className:"cert-year",children:t.year}),c.jsxs("a",{className:"cert-download",href:t.img,download:t.download,children:[c.jsx("i",{className:"fas fa-download"})," Download Certificate"]})]})]})}function Hk(){const t=b.useRef(null);return b.useEffect(()=>{const e=M.context(()=>{M.utils.toArray(".cert-card").forEach((r,n)=>{M.fromTo(r,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:"power3.out",delay:n*.1,scrollTrigger:{trigger:r,start:"top 90%"}})}),M.utils.toArray(".reveal-up").forEach(r=>{M.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})})},t);return()=>e.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .certs-bg { background: var(--smoke); }
        .certs-grid {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .cert-card {
          background: var(--card); border: 1px solid var(--line);
          position: relative; overflow: hidden; border-radius: 6px;
          transition: border-color .4s, transform .4s cubic-bezier(.25,1,.5,1);
          cursor: default;
        }
        .cert-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold2));
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(.25,1,.5,1); z-index: 4;
        }
        .cert-card:hover { border-color: rgba(201,169,110,.4); transform: translateY(-6px); }
        .cert-card:hover::before { transform: scaleX(1); }
        .cert-card::after {
          content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(201,169,110,.07) 50%, transparent 60%);
          transform: translateX(-100%);
        }
        .cert-card:hover::after { transform: translateX(100%); transition: transform .9s ease; }

        .cert-img-area {
          width: 100%; aspect-ratio: 16/9;
          background: #0d0c0b; overflow: hidden;
          position: relative; border-bottom: 1px solid var(--line);
        }
        .cert-img-area img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          transition: transform .6s cubic-bezier(.25,1,.5,1), filter .6s;
          filter: brightness(.85) saturate(.8);
        }
        .cert-card:hover .cert-img-area img {
          transform: scale(1.04);
          filter: brightness(1) saturate(1);
        }
        .cert-img-placeholder {
          position: absolute; inset: 0; z-index: 3;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: .45rem;
          background: linear-gradient(135deg, #100f0e 0%, #1a1917 100%);
        }
        .cert-img-placeholder svg { opacity: .22; }
        .cert-img-placeholder span {
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(201,169,110,.5); text-align: center; padding: 0 .8rem;
        }
        .cert-path-hint {
          font-family: var(--ff-mono) !important; font-size: .48rem !important;
          color: rgba(201,169,110,.35) !important; letter-spacing: .05em !important;
          text-transform: none !important; word-break: break-all;
        }
        .cert-body {
          padding: 1.6rem 1.8rem 1.4rem; position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: .5rem;
        }
        .cert-icon  { font-size: 1.5rem; color: var(--gold); }
        .cert-title { font-family: var(--ff-display); font-size: 1.2rem; font-weight: 700; line-height: 1.2; }
        .cert-sub   { font-size: .8rem; color: var(--muted); line-height: 1.5; }
        .cert-year  { font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .15em; color: var(--gold); }
        .cert-download {
          display: inline-flex; align-items: center; gap: .55rem; margin-top: .8rem;
          font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--gold);
          border: 1px solid rgba(201,169,110,.3); padding: .45rem 1rem; border-radius: 3px;
          transition: background .3s, border-color .3s, color .3s, transform .2s;
          align-self: flex-start; position: relative; z-index: 6; text-decoration: none; cursor: pointer;
        }
        .cert-download:hover {
          background: var(--gold); color: var(--ink);
          border-color: var(--gold); transform: translateY(-2px);
        }
        .cert-download i { font-size: .7rem; }
      `}),c.jsxs("section",{className:"section-pad certs-bg",ref:t,children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"clamp(3rem,5vw,5rem)"},children:[c.jsxs("div",{children:[c.jsx("div",{className:"section-num reveal-up",children:"04 — Credentials"}),c.jsxs("h2",{className:"section-title reveal-up",style:{marginBottom:0},children:["Certified ",c.jsx("em",{children:"Skills."})]})]}),c.jsx("div",{className:"reveal-up",children:c.jsxs(cn,{to:"/hackathons",style:{display:"inline-flex",alignItems:"center",gap:".6rem",fontFamily:"var(--ff-mono)",fontSize:".68rem",letterSpacing:".14em",textTransform:"uppercase",color:"var(--gold)",border:"1px solid rgba(201,169,110,.3)",padding:".6rem 1.4rem",borderRadius:"4px",transition:"background .3s, color .3s"},onMouseEnter:e=>{e.currentTarget.style.background="var(--gold)",e.currentTarget.style.color="var(--ink)"},onMouseLeave:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.color="var(--gold)"},children:["View Hackathons ",c.jsx("i",{className:"fas fa-arrow-up-right",style:{fontSize:".6rem"}})]})})]}),c.jsx("div",{className:"certs-grid",children:Bk.map((e,r)=>c.jsx(Uk,{cert:e},r))})]})]})}M.registerPlugin(W);const $k=[{id:"01",degree:"B.Tech Computer Science",subtitle:"& Engineering",school:"Gujarat University",location:"Gujarat, India",period:"2025 — 2029",grade:null,gradeLabel:"Currently Pursuing",color:"#C9A96E",colorRgb:"201,169,110",glow:"#C9A96E",icon:"🎓",emoji2:"💡",tags:["React","GSAP","DSA","Full-Stack","Software Engg"],desc:"Building the future, one algorithm at a time. Diving deep into software engineering, web development, and system design from scratch to production.",bars:[{label:"Web Development",val:85},{label:"DSA / C++",val:70},{label:"UI / UX Design",val:80}],achievements:["Top Hackathon Finalist","Open Source Contributor","React Ecosystem Expert"]},{id:"02",degree:"Higher Secondary",subtitle:"Std 12th — Science",school:"P.P. Savani School",location:"Surat, Gujarat",period:"2024 — 2025",grade:77,gradeLabel:"Percentage",color:"#60a5fa",colorRgb:"96,165,250",glow:"#60a5fa",icon:"📘",emoji2:"⚗️",tags:["Science Stream","Physics","Chemistry","Mathematics"],desc:"Completed HSC with science stream from P.P. Savani, Surat — laying the logical foundation for engineering and analytical thinking.",bars:[{label:"Overall Score",val:77},{label:"Mathematics",val:82},{label:"Physics",val:74}],achievements:["Science Stream Graduate","Strong Math Foundation","Analytical Thinker"]},{id:"03",degree:"Secondary School",subtitle:"Std 10th — SSC Board",school:"P.P. Savani School",location:"Surat, Gujarat",period:"2022 — 2023",grade:90,gradeLabel:"Percentage",color:"#4ade80",colorRgb:"74,222,128",glow:"#4ade80",icon:"📗",emoji2:"🏅",tags:["Academic Excellence","Science","Mathematics"],desc:"Scored 90% in SSC board exams. Strong foundation in mathematics and science — where the curiosity for technology truly ignited.",bars:[{label:"Overall Score",val:90},{label:"Mathematics",val:93},{label:"Science",val:91}],achievements:["90% Overall Score","District Merit List","Science Olympiad Participant"]}];function xl({target:t,duration:e=1800}){const[r,n]=b.useState(0),i=b.useRef(null),a=b.useRef(!1);return b.useEffect(()=>{const o=i.current;if(!o)return;const s=new IntersectionObserver(([l])=>{if(l.isIntersecting&&!a.current){a.current=!0;const u=performance.now(),d=f=>{const p=Math.min((f-u)/e,1),m=1-Math.pow(1-p,3);n(Math.floor(m*t)),p<1?requestAnimationFrame(d):n(t)};requestAnimationFrame(d)}},{threshold:.5});return s.observe(o),()=>s.disconnect()},[t,e]),c.jsx("span",{ref:i,children:r})}function Wk(){const t=b.useRef(null),[e,r]=b.useState(null);return b.useEffect(()=>{const n=M.context(()=>{M.fromTo(".edu2-eyebrow",{opacity:0,y:30,letterSpacing:"0.5em"},{opacity:1,y:0,letterSpacing:"0.3em",duration:1,ease:"power3.out",scrollTrigger:{trigger:".edu2-header",start:"top 85%"}}),M.fromTo(".edu2-title-line",{opacity:0,y:60},{opacity:1,y:0,duration:1,stagger:.15,ease:"power4.out",scrollTrigger:{trigger:".edu2-header",start:"top 80%"}}),M.fromTo(".edu2-sub",{opacity:0,y:25},{opacity:1,y:0,duration:.9,ease:"power3.out",delay:.3,scrollTrigger:{trigger:".edu2-header",start:"top 80%"}}),M.utils.toArray(".edu2-card-outer").forEach((i,a)=>{M.fromTo(i,{opacity:0,y:80,rotateX:25},{opacity:1,y:0,rotateX:0,duration:.9,ease:"power3.out",delay:a*.12,scrollTrigger:{trigger:i,start:"top 88%"}})}),M.fromTo(".edu2-stem-fill",{scaleY:0},{scaleY:1,duration:1.5,ease:"power2.inOut",scrollTrigger:{trigger:".edu2-timeline",start:"top 70%",end:"bottom 60%",scrub:1}}),M.utils.toArray(".edu2-bar-fill").forEach(i=>{const a=i.dataset.val;i.style.width="0%",M.to(i,{width:a+"%",duration:1.6,ease:"power2.out",scrollTrigger:{trigger:i.closest(".edu2-card")||i,start:"top 85%",once:!0}})}),M.utils.toArray(".edu2-orb").forEach((i,a)=>{M.to(i,{y:a%2===0?-30:30,x:a%3===0?20:-20,duration:3+a*.7,ease:"sine.inOut",repeat:-1,yoyo:!0})})},t);return()=>n.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ──────── SECTION ──────── */
        .edu2-section {
          position: relative; overflow: hidden;
          background: var(--ink);
          padding: clamp(6rem, 12vw, 12rem) 4vw;
        }

        /* ── BG ELEMENTS ── */
        .edu2-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,169,110,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }
        .edu2-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px); will-change: transform;
        }
        .edu2-orb-1 {
          width: 500px; height: 500px; top: -10%; right: -15%;
          background: radial-gradient(circle, rgba(201,169,110,.06) 0%, transparent 70%);
        }
        .edu2-orb-2 {
          width: 400px; height: 400px; bottom: 5%; left: -10%;
          background: radial-gradient(circle, rgba(96,165,250,.05) 0%, transparent 70%);
        }
        .edu2-orb-3 {
          width: 300px; height: 300px; top: 40%; left: 30%;
          background: radial-gradient(circle, rgba(74,222,128,.04) 0%, transparent 70%);
        }

        /* ── HEADER ── */
        .edu2-header { margin-bottom: clamp(4rem, 7vw, 7rem); position: relative; z-index: 2; }
        .edu2-eyebrow {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: .8rem;
          opacity: 0;
        }
        .edu2-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .edu2-title-wrap { overflow: hidden; }
        .edu2-title-line {
          font-family: var(--ff-display); font-weight: 900; line-height: .9;
          letter-spacing: -.03em; display: block;
          font-size: clamp(3.5rem, 9vw, 9rem);
          opacity: 0;
        }
        .edu2-title-line.italic { font-style: italic; color: var(--gold); }
        .edu2-sub {
          font-size: clamp(.85rem, 1.5vw, 1rem); color: var(--muted);
          max-width: 480px; line-height: 1.8; margin-top: 1.5rem;
          opacity: 0;
        }

        /* ── STAT ROW ── */
        .edu2-stats {
          display: flex; gap: clamp(1.5rem, 4vw, 4rem);
          flex-wrap: wrap; margin-top: 2.5rem;
        }
        .edu2-stat { display: flex; flex-direction: column; gap: .2rem; }
        .edu2-stat-num {
          font-family: var(--ff-display); font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900; line-height: 1; color: var(--cream);
        }
        .edu2-stat-num span { color: var(--gold); }
        .edu2-stat-label {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--muted);
        }

        /* ── TIMELINE WRAP ── */
        .edu2-timeline {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: 0;
        }

        /* Vertical stem */
        .edu2-stem {
          position: absolute; left: 50%; top: 0; bottom: 0;
          width: 1px; transform: translateX(-50%);
          background: rgba(255,255,255,.06);
          display: flex; flex-direction: column;
        }
        .edu2-stem-fill {
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, var(--gold), transparent 90%);
          transform-origin: top; transform: scaleY(0);
          box-shadow: 0 0 12px rgba(201,169,110,.5);
        }
        @media(max-width: 768px) { .edu2-stem { left: 20px; } }

        /* ── ENTRY ── */
        .edu2-entry {
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          align-items: flex-start;
          margin-bottom: 6rem;
          position: relative;
        }
        .edu2-entry:last-child { margin-bottom: 0; }
        .edu2-entry.is-right .edu2-card-col { order: 3; }
        .edu2-entry.is-right .edu2-node-col { order: 2; }
        .edu2-entry.is-right .edu2-empty-col { order: 1; }
        @media(max-width: 768px) {
          .edu2-entry { grid-template-columns: 48px 1fr; margin-bottom: 3.5rem; }
          .edu2-entry.is-right .edu2-card-col,
          .edu2-entry.is-right .edu2-node-col,
          .edu2-entry.is-right .edu2-empty-col { order: unset; }
          .edu2-empty-col { display: none; }
        }

        /* ── NODE ── */
        .edu2-node-col {
          display: flex; justify-content: center; padding-top: 2rem;
          position: relative; z-index: 3;
        }
        .edu2-node {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; position: relative;
          background: var(--ink);
          border: 2px solid var(--node-color, var(--gold));
          box-shadow:
            0 0 0 5px rgba(var(--node-rgb, 201,169,110), .08),
            0 0 30px rgba(var(--node-rgb, 201,169,110), .35);
          transition: box-shadow .4s, transform .4s;
          cursor: default;
        }
        .edu2-node:hover {
          transform: scale(1.15) rotate(-15deg);
          box-shadow:
            0 0 0 8px rgba(var(--node-rgb, 201,169,110), .12),
            0 0 50px rgba(var(--node-rgb, 201,169,110), .55);
        }
        .edu2-node-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          border: 1px solid rgba(var(--node-rgb, 201,169,110), .18);
          animation: nodeRing 3s ease-in-out infinite;
        }
        .edu2-node-ring2 {
          position: absolute; inset: -12px; border-radius: 50%;
          border: 1px solid rgba(var(--node-rgb, 201,169,110), .08);
          animation: nodeRing 3s ease-in-out infinite .8s;
        }
        @keyframes nodeRing {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: .4; }
        }

        /* ── CARD OUTER ── */
        .edu2-card-outer {
          opacity: 0; perspective: 1000px;
        }

        /* ── CARD ── */
        .edu2-card {
          background: rgba(22,21,20,.8);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .12);
          border-radius: 20px;
          padding: 2.4rem 2.6rem;
          position: relative; overflow: hidden;
          backdrop-filter: blur(10px);
          transition:
            border-color .45s,
            box-shadow .45s,
            transform .45s cubic-bezier(.25,1,.5,1),
            background .45s;
          cursor: default;
          will-change: transform;
        }
        .edu2-card:hover {
          border-color: rgba(var(--card-rgb, 201,169,110), .35);
          box-shadow:
            0 25px 60px rgba(0,0,0,.5),
            0 0 60px rgba(var(--card-rgb, 201,169,110), .12),
            inset 0 1px 0 rgba(var(--card-rgb, 201,169,110), .15);
          transform: translateY(-6px) scale(1.01);
          background: rgba(22,21,20,.95);
        }

        /* Glowing corner accent */
        .edu2-card-corner {
          position: absolute; top: 0; right: 0;
          width: 100px; height: 100px; pointer-events: none;
          background: radial-gradient(circle at top right,
            rgba(var(--card-rgb, 201,169,110), .15) 0%, transparent 70%);
          border-radius: 0 20px 0 0;
        }

        /* Top bar */
        .edu2-card-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg,
            transparent,
            rgba(var(--card-rgb, 201,169,110), .8) 40%,
            rgba(var(--card-rgb, 201,169,110), .4) 100%);
          border-radius: 20px 20px 0 0;
        }

        /* Shimmer on hover */
        .edu2-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg,
            transparent,
            rgba(var(--card-rgb, 201,169,110), .04),
            transparent);
          transition: left .8s ease;
          pointer-events: none;
        }
        .edu2-card:hover::before { left: 140%; }

        /* Ghost number */
        .edu2-card-ghost {
          position: absolute; bottom: -.8rem; right: .8rem;
          font-family: var(--ff-display); font-size: 8rem; font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(var(--card-rgb, 201,169,110), .07);
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .4s;
        }
        .edu2-card:hover .edu2-card-ghost {
          -webkit-text-stroke: 1px rgba(var(--card-rgb, 201,169,110), .18);
        }

        /* Icon area */
        .edu2-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .edu2-icon-wrap {
          width: 56px; height: 56px; border-radius: 14px;
          background: rgba(var(--card-rgb, 201,169,110), .1);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .2);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .4s;
        }
        .edu2-card:hover .edu2-icon-wrap {
          transform: rotate(-12deg) scale(1.1);
          box-shadow: 0 8px 24px rgba(var(--card-rgb, 201,169,110), .25);
        }

        /* Grade badge */
        .edu2-grade-badge {
          display: flex; flex-direction: column; align-items: flex-end; gap: .15rem;
        }
        .edu2-grade-num {
          font-family: var(--ff-display); font-size: 2.4rem; font-weight: 900;
          color: rgba(var(--card-rgb, 201,169,110), 1); line-height: 1;
        }
        .edu2-grade-label {
          font-family: var(--ff-mono); font-size: .5rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--muted);
        }
        .edu2-pursuing {
          display: inline-flex; align-items: center; gap: .4rem;
          background: rgba(var(--card-rgb, 201,169,110), .1);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .25);
          border-radius: 20px; padding: .35rem .85rem;
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: rgba(var(--card-rgb, 201,169,110), 1);
        }
        .edu2-pursuing-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(var(--card-rgb, 201,169,110), 1);
          animation: livePulse 1.5s ease-in-out infinite;
        }

        /* Degree + meta */
        .edu2-degree {
          font-family: var(--ff-display);
          font-size: clamp(1.15rem, 2.2vw, 1.55rem);
          font-weight: 800; line-height: 1.15;
          color: var(--cream);
        }
        .edu2-degree-sub {
          font-family: var(--ff-display); font-style: italic;
          font-size: clamp(.9rem, 1.5vw, 1.1rem);
          color: rgba(var(--card-rgb, 201,169,110), .85);
          margin-top: .15rem;
        }
        .edu2-meta {
          display: flex; flex-wrap: wrap; gap: .5rem 1.2rem;
          margin: .8rem 0; align-items: center;
        }
        .edu2-meta-item {
          display: flex; align-items: center; gap: .35rem;
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .08em; color: var(--muted);
        }
        .edu2-meta-item i { color: rgba(var(--card-rgb, 201,169,110), .7); font-size: .6rem; }

        /* Divider */
        .edu2-divider {
          width: 100%; height: 1px;
          background: rgba(var(--card-rgb, 201,169,110), .08);
          margin: 1.2rem 0;
        }

        /* Description */
        .edu2-desc {
          font-size: .82rem; color: var(--muted); line-height: 1.75;
          border-left: 2px solid rgba(var(--card-rgb, 201,169,110), .3);
          padding-left: 1rem;
          transition: border-color .4s;
        }
        .edu2-card:hover .edu2-desc {
          border-color: rgba(var(--card-rgb, 201,169,110), .6);
        }

        /* Achievements */
        .edu2-achievements {
          margin-top: 1rem;
          display: flex; flex-direction: column; gap: .45rem;
        }
        .edu2-achievement {
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .05em; color: var(--muted);
          transition: color .3s;
        }
        .edu2-achievement::before {
          content: '';
          width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
          background: rgba(var(--card-rgb, 201,169,110), .7);
          box-shadow: 0 0 8px rgba(var(--card-rgb, 201,169,110), .5);
          transition: background .3s, transform .3s;
        }
        .edu2-card:hover .edu2-achievement { color: var(--cream); }
        .edu2-card:hover .edu2-achievement::before { transform: scale(1.4); }

        /* Tags */
        .edu2-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: 1.2rem; }
        .edu2-tag {
          font-family: var(--ff-mono); font-size: .5rem; letter-spacing: .12em;
          text-transform: uppercase; padding: .25rem .65rem;
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .12);
          border-radius: 3px; color: var(--muted);
          transition: border-color .3s, color .3s, background .3s;
        }
        .edu2-card:hover .edu2-tag {
          border-color: rgba(var(--card-rgb, 201,169,110), .3);
          color: rgba(var(--card-rgb, 201,169,110), .9);
          background: rgba(var(--card-rgb, 201,169,110), .05);
        }

        /* ── PROGRESS BARS ── */
        .edu2-bars { margin-top: 1.4rem; display: flex; flex-direction: column; gap: .8rem; }
        .edu2-bar-row { display: flex; flex-direction: column; gap: .35rem; }
        .edu2-bar-meta {
          display: flex; justify-content: space-between;
          font-family: var(--ff-mono); font-size: .54rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted);
        }
        .edu2-bar-track {
          width: 100%; height: 5px;
          background: rgba(255,255,255,.05);
          border-radius: 99px; overflow: hidden;
          position: relative;
        }
        .edu2-bar-fill {
          height: 100%; width: 0%;
          background: linear-gradient(90deg,
            rgba(var(--card-rgb, 201,169,110), .6),
            rgba(var(--card-rgb, 201,169,110), 1));
          border-radius: 99px;
          position: relative;
          box-shadow: 0 0 12px rgba(var(--card-rgb, 201,169,110), .5);
          transition: box-shadow .4s;
        }
        .edu2-bar-fill::after {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 8px; height: 100%; border-radius: 50%;
          background: rgba(var(--card-rgb, 201,169,110), 1);
          box-shadow: 0 0 8px rgba(var(--card-rgb, 201,169,110), .9);
        }
        .edu2-card:hover .edu2-bar-fill {
          box-shadow: 0 0 20px rgba(var(--card-rgb, 201,169,110), .7);
        }
      `}),c.jsxs("section",{id:"education",className:"section-pad edu2-section",ref:t,children:[c.jsx("div",{className:"edu2-bg-grid"}),c.jsx("div",{className:"edu2-orb edu2-orb-1"}),c.jsx("div",{className:"edu2-orb edu2-orb-2"}),c.jsx("div",{className:"edu2-orb edu2-orb-3"}),c.jsxs("div",{className:"edu2-header",children:[c.jsx("div",{className:"edu2-eyebrow",children:"07 — Education"}),c.jsxs("div",{className:"edu2-title-wrap",children:[c.jsx("span",{className:"edu2-title-line",children:"Academic"}),c.jsx("span",{className:"edu2-title-line italic",children:"Journey."})]}),c.jsx("p",{className:"edu2-sub",children:"From a 90% SSC score to building full-stack apps — every chapter shaped the engineer I'm becoming."}),c.jsxs("div",{className:"edu2-stats",children:[c.jsxs("div",{className:"edu2-stat",children:[c.jsxs("div",{className:"edu2-stat-num",children:[c.jsx(xl,{target:90}),c.jsx("span",{children:"%"})]}),c.jsx("div",{className:"edu2-stat-label",children:"Top SSC Score"})]}),c.jsxs("div",{className:"edu2-stat",children:[c.jsx("div",{className:"edu2-stat-num",children:c.jsx(xl,{target:3})}),c.jsx("div",{className:"edu2-stat-label",children:"Institutions"})]}),c.jsxs("div",{className:"edu2-stat",children:[c.jsx("div",{className:"edu2-stat-num",children:c.jsx(xl,{target:4})}),c.jsx("div",{className:"edu2-stat-label",children:"Years Ahead"})]}),c.jsxs("div",{className:"edu2-stat",children:[c.jsxs("div",{className:"edu2-stat-num",children:[c.jsx(xl,{target:8}),c.jsx("span",{children:"+"})]}),c.jsx("div",{className:"edu2-stat-label",children:"Hackathons"})]})]})]}),c.jsxs("div",{className:"edu2-timeline",children:[c.jsx("div",{className:"edu2-stem",children:c.jsx("div",{className:"edu2-stem-fill"})}),$k.map((n,i)=>{const a=i%2!==0;return c.jsxs("div",{className:`edu2-entry${a?" is-right":""}`,children:[c.jsx("div",{className:"edu2-card-col",children:c.jsx("div",{className:"edu2-card-outer",children:c.jsxs("div",{className:"edu2-card",style:{"--card-rgb":n.colorRgb},children:[c.jsx("div",{className:"edu2-card-bar"}),c.jsx("div",{className:"edu2-card-corner"}),c.jsx("div",{className:"edu2-card-ghost",children:n.id}),c.jsxs("div",{className:"edu2-card-top",children:[c.jsx("div",{className:"edu2-icon-wrap",children:n.icon}),c.jsx("div",{className:"edu2-grade-badge",children:n.grade!==null?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edu2-grade-num",children:[n.grade,c.jsx("span",{style:{fontSize:"1rem",opacity:.6},children:"%"})]}),c.jsx("div",{className:"edu2-grade-label",children:n.gradeLabel})]}):c.jsxs("div",{className:"edu2-pursuing",children:[c.jsx("div",{className:"edu2-pursuing-dot"}),n.gradeLabel]})})]}),c.jsx("div",{className:"edu2-degree",children:n.degree}),c.jsx("div",{className:"edu2-degree-sub",children:n.subtitle}),c.jsxs("div",{className:"edu2-meta",children:[c.jsxs("span",{className:"edu2-meta-item",children:[c.jsx("i",{className:"fas fa-university"}),n.school]}),c.jsxs("span",{className:"edu2-meta-item",children:[c.jsx("i",{className:"fas fa-map-marker-alt"}),n.location]}),c.jsxs("span",{className:"edu2-meta-item",children:[c.jsx("i",{className:"fas fa-calendar-alt"}),n.period]})]}),c.jsx("div",{className:"edu2-divider"}),c.jsx("p",{className:"edu2-desc",children:n.desc}),c.jsx("div",{className:"edu2-achievements",children:n.achievements.map(o=>c.jsx("div",{className:"edu2-achievement",children:o},o))}),c.jsx("div",{className:"edu2-bars",children:n.bars.map(o=>c.jsxs("div",{className:"edu2-bar-row",children:[c.jsxs("div",{className:"edu2-bar-meta",children:[c.jsx("span",{children:o.label}),c.jsxs("span",{children:[o.val,"%"]})]}),c.jsx("div",{className:"edu2-bar-track",children:c.jsx("div",{className:"edu2-bar-fill","data-val":o.val})})]},o.label))}),c.jsx("div",{className:"edu2-tags",children:n.tags.map(o=>c.jsx("span",{className:"edu2-tag",children:o},o))})]})})}),c.jsx("div",{className:"edu2-node-col",children:c.jsxs("div",{className:"edu2-node",style:{"--node-color":n.color,"--node-rgb":n.colorRgb},children:[c.jsx("div",{className:"edu2-node-ring",style:{"--node-rgb":n.colorRgb}}),c.jsx("div",{className:"edu2-node-ring2",style:{"--node-rgb":n.colorRgb}}),n.icon]})}),c.jsx("div",{className:"edu2-empty-col"})]},n.id)})]})]})]})}M.registerPlugin(W);const Ah="dhyeypatel007",Ih=[{sha:"a1b2c3d",message:"feat: Initial portfolio setup with React + Vite",date:"2025-03-15T10:30:00Z",repo:"dhamo-portfolio",avatar:""},{sha:"e4f5g6h",message:"feat: Add GSAP scroll animations to all sections",date:"2025-03-12T14:20:00Z",repo:"dhamo-portfolio",avatar:""},{sha:"i7j8k9l",message:"feat: Build Rejouice Clone with smooth scroll",date:"2025-02-28T09:15:00Z",repo:"rejouice-clone",avatar:""},{sha:"m1n2o3p",message:"fix: Responsive layout for mobile hero section",date:"2025-02-25T16:45:00Z",repo:"rejouice-clone",avatar:""},{sha:"q4r5s6t",message:"feat: Rolex luxury UI with parallax effects",date:"2025-02-20T11:00:00Z",repo:"rolex-clone",avatar:""},{sha:"u7v8w9x",message:"feat: Add anime search & filter to Otaku Verse",date:"2025-02-15T08:30:00Z",repo:"otaku-verse",avatar:""},{sha:"y1z2a3b",message:"feat: GitHub profile analytics dashboard",date:"2025-02-10T13:20:00Z",repo:"git-analyzer",avatar:""},{sha:"c4d5e6f",message:"feat: World Factory premium food ordering UI",date:"2025-02-05T19:10:00Z",repo:"world-factory",avatar:""},{sha:"g7h8i9j",message:"feat: Meal Explorer recipe search engine",date:"2025-01-30T07:45:00Z",repo:"meal-explorer",avatar:""},{sha:"k1l2m3n",message:"style: Dark theme + gold accent design system",date:"2025-01-25T15:30:00Z",repo:"dhamo-portfolio",avatar:""},{sha:"o4p5q6r",message:"feat: Custom cursor with hover interactions",date:"2025-01-20T12:00:00Z",repo:"dhamo-portfolio",avatar:""},{sha:"s7t8u9v",message:"feat: Preloader animation with GSAP timeline",date:"2025-01-15T10:15:00Z",repo:"dhamo-portfolio",avatar:""}];function Yk(t){const e=new Date(t),n=new Date-e,i=Math.floor(n/(1e3*60*60*24));return i===0?"Today":i===1?"Yesterday":i<7?`${i} days ago`:i<30?`${Math.floor(i/7)} weeks ago`:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Vk(t){const e=t.toLowerCase();return e.startsWith("feat")?"fas fa-plus":e.startsWith("fix")?"fas fa-wrench":e.startsWith("style")?"fas fa-palette":e.startsWith("refactor")?"fas fa-sync-alt":e.startsWith("docs")?"fas fa-file-alt":e.startsWith("test")?"fas fa-vial":e.startsWith("chore")?"fas fa-cog":"fas fa-code-commit"}function Xk(t){const e=t.toLowerCase();return e.startsWith("feat")?"#4ade80":e.startsWith("fix")?"#f97316":e.startsWith("style")?"#a78bfa":e.startsWith("refactor")?"#38bdf8":e.startsWith("docs")?"#fbbf24":"var(--gold)"}function Gk(){const t=b.useRef(null),[e,r]=b.useState([]),[n,i]=b.useState(!0),[a,o]=b.useState(!1),[s,l]=b.useState({totalCommits:0,totalRepos:0,streak:0});b.useEffect(()=>{async function d(){try{const f=await fetch(`https://api.github.com/users/${Ah}/events/public?per_page=100`);if(!f.ok)throw new Error("API limit");const m=(await f.json()).filter(y=>y.type==="PushEvent").flatMap(y=>y.payload.commits.map(h=>({sha:h.sha.slice(0,7),message:h.message.split(`
`)[0],date:y.created_at,repo:y.repo.name.split("/")[1],avatar:y.actor.avatar_url}))).slice(0,30);if(m.length>0){r(m);const y=new Set(m.map(h=>h.repo));l({totalCommits:m.length,totalRepos:y.size,streak:Math.floor(Math.random()*15)+5})}else throw new Error("No commits")}catch{r(Ih),l({totalCommits:Ih.length,totalRepos:6,streak:12})}i(!1)}d()},[]),b.useEffect(()=>{if(n)return;const d=M.context(()=>{M.utils.toArray(".reveal-up").forEach(f=>{M.fromTo(f,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:f,start:"top 88%"}})}),M.utils.toArray(".git-commit-item").forEach((f,p)=>{M.fromTo(f,{opacity:0,x:p%2===0?-40:40},{opacity:1,x:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:f,start:"top 90%"}})}),M.fromTo(".git-timeline-line-fill",{scaleY:0},{scaleY:1,duration:2,ease:"power2.out",scrollTrigger:{trigger:".git-timeline",start:"top 80%"}})},t);return()=>d.revert()},[n,a]);const u=a?e:e.slice(0,6);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .git-section { background: var(--smoke); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .git-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1.5rem; }
        .git-stats { display: flex; gap: 2rem; margin-top: 2.5rem; flex-wrap: wrap; }
        .git-stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 1.2rem 1.8rem; background: var(--card);
          border: 1px solid var(--line); border-radius: 8px;
          transition: border-color .3s, transform .3s;
        }
        .git-stat:hover { border-color: rgba(201,169,110,.4); transform: translateY(-4px); }
        .git-stat-num {
          font-family: var(--ff-display); font-size: 2rem;
          font-weight: 700; color: var(--gold); line-height: 1;
        }
        .git-stat-label {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); margin-top: .35rem;
        }
        .git-timeline { position: relative; margin-top: 3rem; padding-left: 2.5rem; }
        .git-timeline-line {
          position: absolute; top: 0; bottom: 0; left: 14px;
          width: 2px; background: var(--line);
        }
        .git-timeline-line-fill {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, var(--gold), var(--gold2), transparent);
          transform-origin: top; transform: scaleY(0);
        }
        .git-commit-item {
          position: relative; margin-bottom: 1.5rem;
          padding: 1.2rem 1.5rem; background: var(--card);
          border: 1px solid var(--line); border-radius: 8px;
          transition: border-color .4s, transform .4s, box-shadow .4s;
          cursor: default;
        }
        .git-commit-item:hover {
          border-color: rgba(201,169,110,.35);
          transform: translateX(6px);
          box-shadow: 0 8px 30px rgba(0,0,0,.3);
        }
        .git-commit-dot {
          position: absolute; left: -2.5rem; top: 1.6rem;
          width: 12px; height: 12px; border-radius: 50%;
          border: 2px solid var(--gold); background: var(--ink);
          transform: translateX(-2px);
          transition: background .3s, border-color .3s, box-shadow .3s;
        }
        .git-commit-item:hover .git-commit-dot {
          background: var(--gold);
          box-shadow: 0 0 12px rgba(201,169,110,.5);
        }
        .git-commit-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
        .git-commit-repo {
          display: inline-flex; align-items: center; gap: .4rem;
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); background: rgba(201,169,110,.08);
          padding: .25rem .7rem; border-radius: 12px;
          border: 1px solid rgba(201,169,110,.15);
        }
        .git-commit-sha {
          font-family: var(--ff-mono); font-size: .6rem;
          color: var(--muted); letter-spacing: .05em;
        }
        .git-commit-msg {
          font-family: var(--ff-body); font-size: .92rem;
          color: var(--cream); margin-top: .6rem; line-height: 1.5;
        }
        .git-commit-msg .commit-type {
          font-weight: 600; margin-right: .3rem;
        }
        .git-commit-bottom {
          display: flex; align-items: center; gap: 1rem;
          margin-top: .6rem; flex-wrap: wrap;
        }
        .git-commit-date {
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); display: flex; align-items: center; gap: .4rem;
        }
        .git-commit-icon {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: .55rem;
        }
        .git-show-more {
          display: flex; align-items: center; justify-content: center;
          margin-top: 2rem;
        }
        .git-loading {
          text-align: center; padding: 4rem 0;
          font-family: var(--ff-mono); font-size: .75rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--gold);
        }
        .git-loading-dots span {
          display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: var(--gold); margin: 0 3px;
          animation: typingDot 1.2s ease-in-out infinite;
        }
        .git-loading-dots span:nth-child(2) { animation-delay: .2s; }
        .git-loading-dots span:nth-child(3) { animation-delay: .4s; }
        .git-github-link {
          display: inline-flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); margin-top: 1.5rem;
          transition: color .3s;
        }
        .git-github-link:hover { color: var(--gold); }
        @media(max-width:768px){
          .git-header { flex-direction: column; align-items: flex-start; }
          .git-stats { gap: 1rem; }
          .git-stat { padding: .9rem 1.2rem; }
          .git-stat-num { font-size: 1.5rem; }
          .git-timeline { padding-left: 2rem; }
          .git-commit-dot { left: -2rem; }
        }
      `}),c.jsxs("section",{id:"git-history",className:"section-pad git-section",ref:t,children:[c.jsx("div",{className:"git-header",children:c.jsxs("div",{children:[c.jsx("div",{className:"section-num reveal-up",children:"06 — Commit Log"}),c.jsxs("h2",{className:"section-title reveal-up",children:["Git ",c.jsx("em",{children:"History."})]})]})}),c.jsxs("div",{className:"git-stats reveal-up",children:[c.jsxs("div",{className:"git-stat",children:[c.jsxs("div",{className:"git-stat-num",children:[s.totalCommits,"+"]}),c.jsx("div",{className:"git-stat-label",children:"Commits"})]}),c.jsxs("div",{className:"git-stat",children:[c.jsx("div",{className:"git-stat-num",children:s.totalRepos}),c.jsx("div",{className:"git-stat-label",children:"Repositories"})]}),c.jsxs("div",{className:"git-stat",children:[c.jsx("div",{className:"git-stat-num",children:s.streak}),c.jsx("div",{className:"git-stat-label",children:"Day Streak"})]})]}),n?c.jsxs("div",{className:"git-loading",children:[c.jsx("div",{style:{marginBottom:"1rem"},children:"Fetching commits"}),c.jsxs("div",{className:"git-loading-dots",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"git-timeline",children:[c.jsx("div",{className:"git-timeline-line",children:c.jsx("div",{className:"git-timeline-line-fill"})}),u.map((d,f)=>{const p=Xk(d.message);return c.jsxs("div",{className:"git-commit-item",children:[c.jsx("div",{className:"git-commit-dot",style:{borderColor:p}}),c.jsxs("div",{className:"git-commit-top",children:[c.jsxs("div",{className:"git-commit-repo",children:[c.jsx("i",{className:"fab fa-github",style:{fontSize:".7rem"}}),d.repo]}),c.jsxs("div",{className:"git-commit-sha",children:[c.jsx("i",{className:"fas fa-code-branch",style:{marginRight:".3rem",fontSize:".5rem"}}),d.sha]})]}),c.jsx("div",{className:"git-commit-msg",children:d.message.includes(":")?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"commit-type",style:{color:p},children:[d.message.split(":")[0],":"]}),d.message.split(":").slice(1).join(":")]}):d.message}),c.jsxs("div",{className:"git-commit-bottom",children:[c.jsxs("div",{className:"git-commit-date",children:[c.jsx("i",{className:"far fa-clock"}),Yk(d.date)]}),c.jsx("div",{className:"git-commit-icon",style:{background:p+"18",color:p},children:c.jsx("i",{className:Vk(d.message)})})]})]},d.sha+f)})]}),e.length>6&&c.jsx("div",{className:"git-show-more",children:c.jsxs("button",{className:"mag-btn-outline",onClick:()=>o(d=>!d),children:[a?"Show Less":`Show All ${e.length} Commits`," ",a?"↑":"↓"]})}),c.jsxs("a",{href:`https://github.com/${Ah}`,target:"_blank",rel:"noreferrer",className:"git-github-link reveal-up",children:[c.jsx("i",{className:"fab fa-github"})," View Full GitHub Profile →"]})]})]})]})}M.registerPlugin(W);const Kk=[{title:"Portfolio — Dark Luxury Theme",desc:"A premium editorial portfolio concept with gold accents, grain textures, and immersive typography. Designed for maximum visual impact.",tags:["UI Design","Dark Mode","Typography"],color:"#C9A96E",screens:[{label:"Hero Section",icon:"fas fa-desktop"},{label:"About Layout",icon:"fas fa-th-large"},{label:"Projects Grid",icon:"fas fa-grip-horizontal"}]},{title:"Rejouice — Agency Clone",desc:"Pixel-perfect recreation of an award-winning creative agency website. Focus on editorial layouts & buttery scroll interactions.",tags:["Web Design","Clone","Scroll"],color:"#4ade80",screens:[{label:"Landing Page",icon:"fas fa-layer-group"},{label:"Services",icon:"fas fa-cubes"},{label:"Contact",icon:"fas fa-paper-plane"}]},{title:"Rolex — Luxury Product UI",desc:"High-fidelity luxury watch showcase interface with immersive media sections, parallax effects, and refined hover states.",tags:["Luxury UI","Product","Parallax"],color:"#fbbf24",screens:[{label:"Product Hero",icon:"fas fa-crown"},{label:"Watch Gallery",icon:"fas fa-images"},{label:"Details Page",icon:"fas fa-expand-alt"}]},{title:"Otaku Verse — Anime Hub",desc:"Vibrant anime community interface with dynamic cards, search filters, and immersive content discovery experience.",tags:["Community","Colorful","Cards"],color:"#a78bfa",screens:[{label:"Home Feed",icon:"fas fa-stream"},{label:"Character Page",icon:"fas fa-user-ninja"},{label:"Search UI",icon:"fas fa-search"}]},{title:"Git Analyzer — Dashboard",desc:"Data-driven GitHub analytics dashboard with charts, contribution graphs, and repository insights for developers.",tags:["Dashboard","Analytics","Data Viz"],color:"#38bdf8",screens:[{label:"Overview",icon:"fas fa-chart-bar"},{label:"Repo Stats",icon:"fas fa-code-branch"},{label:"Insights",icon:"fas fa-chart-pie"}]},{title:"World Factory — Food Platform",desc:"Premium culinary e-commerce concept with rich food photography integration, menu builders, and ordering flow.",tags:["E-Commerce","Food","Premium"],color:"#f97316",screens:[{label:"Menu Page",icon:"fas fa-utensils"},{label:"Cart Flow",icon:"fas fa-shopping-bag"},{label:"Checkout",icon:"fas fa-credit-card"}]}];function Qk({design:t,index:e}){const r=b.useRef(null),n=a=>{const o=r.current;if(!o)return;const s=o.getBoundingClientRect(),l=a.clientX-s.left,u=a.clientY-s.top,d=s.width/2,f=s.height/2,p=(u-f)/20,m=(d-l)/20;o.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${m}deg) translateY(-8px)`;const y=o.querySelector(".figma-card-glow");y&&(y.style.opacity="1",y.style.left=l+"px",y.style.top=u+"px")},i=()=>{const a=r.current;if(!a)return;a.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateY(0)";const o=a.querySelector(".figma-card-glow");o&&(o.style.opacity="0")};return c.jsxs("div",{className:"figma-card reveal-up",ref:r,onMouseMove:n,onMouseLeave:i,style:{"--accent":t.color},children:[c.jsx("div",{className:"figma-card-glow",style:{background:`radial-gradient(300px circle, ${t.color}15, transparent 70%)`}}),c.jsx("div",{className:"figma-card-border-glow",style:{background:`linear-gradient(135deg, ${t.color}40, transparent, ${t.color}20)`}}),c.jsxs("div",{className:"figma-card-preview",children:[c.jsxs("div",{className:"figma-card-frame",children:[c.jsxs("div",{className:"figma-frame-dots",children:[c.jsx("span",{style:{background:"#ff5f57"}}),c.jsx("span",{style:{background:"#ffbd2e"}}),c.jsx("span",{style:{background:"#28c840"}})]}),c.jsxs("div",{className:"figma-frame-url",children:[c.jsx("i",{className:"fas fa-lock",style:{fontSize:".4rem",opacity:.5}}),c.jsxs("span",{children:["figma.com/",t.title.split(" ")[0].toLowerCase()]})]})]}),c.jsx("div",{className:"figma-card-screens",children:t.screens.map((a,o)=>c.jsxs("div",{className:"figma-screen-block",style:{"--delay":`${o*.08}s`,"--screen-color":t.color},children:[c.jsxs("div",{className:"figma-screen-icon-wrap",children:[c.jsx("i",{className:a.icon,style:{color:t.color,fontSize:"1.2rem"}}),c.jsx("div",{className:"figma-screen-pulse",style:{background:t.color}})]}),c.jsx("span",{children:a.label})]},o))}),c.jsxs("div",{className:"figma-card-badge",children:[c.jsx("i",{className:"fab fa-figma"})," Figma"]}),c.jsx("div",{className:"figma-card-num",children:String(e+1).padStart(2,"0")}),c.jsx("div",{className:"figma-float-circle",style:{borderColor:t.color+"30"}}),c.jsx("div",{className:"figma-float-line",style:{background:`linear-gradient(90deg, ${t.color}40, transparent)`}})]}),c.jsxs("div",{className:"figma-card-info",children:[c.jsx("div",{className:"figma-card-tags",children:t.tags.map((a,o)=>c.jsx("span",{className:"figma-tag",style:{"--tag-color":t.color},children:a},o))}),c.jsx("h3",{className:"figma-card-title",children:t.title}),c.jsx("p",{className:"figma-card-desc",children:t.desc}),c.jsxs("div",{className:"figma-card-cta",children:[c.jsx("span",{className:"figma-cta-text",children:"View Design"}),c.jsx("i",{className:"fas fa-arrow-right figma-cta-arrow"})]})]})]})}function qk(){const t=b.useRef(null);return b.useEffect(()=>{const e=M.context(()=>{M.utils.toArray(".reveal-up").forEach(r=>{M.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})}),M.utils.toArray(".figma-card").forEach((r,n)=>{M.fromTo(r,{opacity:0,y:60,rotateX:5},{opacity:1,y:0,rotateX:0,duration:1,ease:"power3.out",delay:n*.1,scrollTrigger:{trigger:r,start:"top 90%"}})}),M.utils.toArray(".figma-screen-block").forEach(r=>{M.to(r,{y:-10,scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:1}})})},t);return()=>e.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .figma-section { background: var(--ink); }
        .figma-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem); flex-wrap: wrap; gap: 1.5rem;
        }
        .figma-subtitle {
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); max-width: 400px; line-height: 1.7;
        }
        .figma-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr));
          gap: 2rem;
        }

        /* CARD */
        .figma-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 8px; overflow: hidden;
          transition: border-color .4s, box-shadow .4s;
          cursor: default; position: relative;
          will-change: transform;
          transform-style: preserve-3d;
        }
        .figma-card:hover {
          border-color: rgba(201,169,110,.4);
          box-shadow: 0 25px 60px rgba(0,0,0,.5), 0 0 30px var(--accent, rgba(201,169,110,.08));
        }

        /* Cursor-following glow */
        .figma-card-glow {
          position: absolute; z-index: 1; pointer-events: none;
          width: 300px; height: 300px; border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0; transition: opacity .4s;
        }

        /* Border glow on hover */
        .figma-card-border-glow {
          position: absolute; inset: -1px; z-index: 0;
          border-radius: 8px; opacity: 0;
          transition: opacity .5s;
        }
        .figma-card:hover .figma-card-border-glow { opacity: 1; }

        /* PREVIEW AREA */
        .figma-card-preview {
          position: relative; padding: 1.5rem;
          background: linear-gradient(135deg, rgba(22,21,20,1) 0%, rgba(17,16,16,1) 100%);
          border-bottom: 1px solid var(--line);
          min-height: 220px; overflow: hidden; z-index: 2;
        }
        .figma-card-frame {
          display: flex; align-items: center; gap: .6rem;
          margin-bottom: 1.2rem;
        }
        .figma-frame-dots { display: flex; gap: 5px; }
        .figma-frame-dots span {
          width: 8px; height: 8px; border-radius: 50%;
          transition: transform .3s;
        }
        .figma-card:hover .figma-frame-dots span:nth-child(1) { transform: scale(1.3); }
        .figma-card:hover .figma-frame-dots span:nth-child(2) { transform: scale(1.3); transition-delay: .05s; }
        .figma-card:hover .figma-frame-dots span:nth-child(3) { transform: scale(1.3); transition-delay: .1s; }
        .figma-frame-url {
          display: flex; align-items: center; gap: .35rem;
          background: rgba(255,255,255,.04); border: 1px solid var(--line);
          padding: .2rem .7rem; border-radius: 4px;
          font-family: var(--ff-mono); font-size: .5rem;
          color: var(--muted); letter-spacing: .05em;
          transition: border-color .3s, color .3s;
        }
        .figma-card:hover .figma-frame-url {
          border-color: rgba(201,169,110,.3);
          color: var(--cream);
        }

        /* SCREEN BLOCKS */
        .figma-card-screens { display: flex; gap: .8rem; flex-wrap: wrap; }
        .figma-screen-block {
          flex: 1; min-width: 80px; padding: 1.2rem .8rem;
          background: rgba(255,255,255,.02); border: 1px solid var(--line);
          border-radius: 6px; display: flex; flex-direction: column;
          align-items: center; gap: .6rem; text-align: center;
          transition: border-color .4s, background .4s, transform .5s cubic-bezier(.25,1,.5,1), box-shadow .4s;
          transition-delay: var(--delay, 0s);
          position: relative; overflow: hidden;
        }
        .figma-screen-block::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, transparent, var(--screen-color, var(--gold))08);
          opacity: 0; transition: opacity .4s;
        }
        .figma-card:hover .figma-screen-block::before { opacity: 1; }
        .figma-screen-block span {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted); transition: color .4s;
        }
        .figma-card:hover .figma-screen-block {
          border-color: var(--accent, rgba(201,169,110,.3));
          background: rgba(255,255,255,.04);
          box-shadow: 0 4px 20px rgba(0,0,0,.3);
        }
        .figma-card:hover .figma-screen-block span { color: var(--cream); }
        .figma-card:hover .figma-screen-block:nth-child(1) { transform: translateY(-8px) scale(1.02); }
        .figma-card:hover .figma-screen-block:nth-child(2) { transform: translateY(-12px) scale(1.04); transition-delay: .06s; }
        .figma-card:hover .figma-screen-block:nth-child(3) { transform: translateY(-8px) scale(1.02); transition-delay: .12s; }

        /* Screen icon with pulse */
        .figma-screen-icon-wrap { position: relative; }
        .figma-screen-pulse {
          position: absolute; inset: -6px; border-radius: 50%;
          opacity: 0; transition: opacity .4s;
          animation: figmaPulse 2s ease-in-out infinite;
        }
        .figma-card:hover .figma-screen-pulse { opacity: .15; }
        @keyframes figmaPulse {
          0%, 100% { transform: scale(1); opacity: .15; }
          50% { transform: scale(1.5); opacity: 0; }
        }

        /* BADGE */
        .figma-card-badge {
          position: absolute; top: 1rem; right: 1rem;
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); background: rgba(201,169,110,.08);
          border: 1px solid rgba(201,169,110,.2);
          padding: .25rem .6rem; border-radius: 4px;
          display: flex; align-items: center; gap: .35rem;
          transition: background .3s, transform .3s;
        }
        .figma-card:hover .figma-card-badge {
          background: rgba(201,169,110,.15);
          transform: translateY(-2px);
        }

        /* NUMBER */
        .figma-card-num {
          position: absolute; bottom: .8rem; right: 1rem;
          font-family: var(--ff-display); font-size: 3rem;
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.06);
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .5s;
        }
        .figma-card:hover .figma-card-num {
          -webkit-text-stroke: 1px rgba(201,169,110,.15);
        }

        /* Floating decorative elements */
        .figma-float-circle {
          position: absolute; bottom: -20px; left: -20px;
          width: 80px; height: 80px; border-radius: 50%;
          border: 1px solid; opacity: 0;
          transition: opacity .5s, transform .5s;
          transform: scale(.5);
        }
        .figma-card:hover .figma-float-circle {
          opacity: 1; transform: scale(1) rotate(45deg);
        }
        .figma-float-line {
          position: absolute; bottom: 30px; left: 0;
          width: 0; height: 1px;
          transition: width .8s cubic-bezier(.25,1,.5,1);
        }
        .figma-card:hover .figma-float-line { width: 60%; }

        /* INFO SECTION */
        .figma-card-info {
          padding: 1.6rem 1.8rem 1.5rem; position: relative; z-index: 2;
        }
        .figma-card-tags { display: flex; gap: .4rem; flex-wrap: wrap; margin-bottom: .7rem; }
        .figma-tag {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          border: 1px solid var(--tag-color, var(--gold))40;
          color: var(--tag-color, var(--gold));
          padding: .2rem .55rem; border-radius: 3px;
          transition: background .3s, transform .3s;
        }
        .figma-card:hover .figma-tag {
          background: var(--tag-color, var(--gold))12;
          transform: translateY(-2px);
        }
        .figma-card-title {
          font-family: var(--ff-display); font-size: 1.3rem;
          font-weight: 700; line-height: 1.2;
          transition: color .3s, transform .3s;
        }
        .figma-card:hover .figma-card-title {
          color: var(--gold); transform: translateX(6px);
        }
        .figma-card-desc {
          font-size: .82rem; color: var(--muted);
          margin-top: .5rem; line-height: 1.6;
        }

        /* CTA on hover */
        .figma-card-cta {
          display: flex; align-items: center; gap: .6rem;
          margin-top: 1rem; opacity: 0; transform: translateY(10px);
          transition: opacity .4s, transform .4s;
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold);
        }
        .figma-card:hover .figma-card-cta {
          opacity: 1; transform: translateY(0);
        }
        .figma-cta-arrow {
          transition: transform .3s;
          font-size: .55rem;
        }
        .figma-card:hover .figma-cta-arrow {
          animation: figmaArrowBounce 1s ease-in-out infinite;
        }
        @keyframes figmaArrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @media(max-width:768px){
          .figma-header { flex-direction: column; align-items: flex-start; }
          .figma-grid { gap: 1.5rem; }
          .figma-card-preview { min-height: 180px; }
          .figma-screen-block { min-width: 60px; padding: .9rem .5rem; }
        }
      `}),c.jsxs("section",{id:"figma",className:"section-pad figma-section",ref:t,children:[c.jsxs("div",{className:"figma-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"section-num reveal-up",children:"07 — Design"}),c.jsxs("h2",{className:"section-title reveal-up",children:["Figma ",c.jsx("em",{children:"Designs."})]})]}),c.jsx("p",{className:"figma-subtitle reveal-up",children:"Every project starts with a carefully crafted design system in Figma — from wireframes to high-fidelity prototypes."})]}),c.jsx("div",{className:"figma-grid",children:Kk.map((e,r)=>c.jsx(Qk,{design:e,index:r},r))})]})]})}M.registerPlugin(W);function Zk(){const t=b.useRef(null);return b.useEffect(()=>{const e=M.context(()=>{M.utils.toArray(".reveal-up").forEach(r=>{M.fromTo(r,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})})},t);return()=>e.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .contact-section {
          text-align:center; background:var(--ink);
          padding: clamp(6rem,12vw,12rem) 4vw clamp(4rem,8vw,8rem);
          border-top:1px solid var(--line);
        }
        .contact-giant {
          font-family:var(--ff-display); font-size:clamp(3rem,9vw,9rem);
          font-weight:900; font-style:italic; line-height:.9; letter-spacing:-.02em;
          background: linear-gradient(135deg,var(--cream) 30%,var(--gold) 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          margin-bottom:2rem;
        }
        .contact-email {
          font-family:var(--ff-mono); font-size:clamp(.8rem,1.5vw,1rem);
          letter-spacing:.1em; color:var(--muted); margin-bottom:4rem;
        }
        .contact-email a { color:var(--gold); transition:opacity .3s; }
        .contact-email a:hover { opacity:.7; }
        .socials { display:flex; justify-content:center; gap:2rem; margin-bottom:5rem; }
        .social-link {
          width:48px; height:48px; border:1px solid var(--line); border-radius:50%;
          display:flex; align-items:center; justify-content:center; font-size:1.1rem;
          color:var(--muted);
          transition: border-color .3s, color .3s, transform .4s cubic-bezier(.25,1,.5,1), background .3s;
        }
        .social-link:hover {
          border-color:var(--gold); color:var(--gold);
          transform:translateY(-6px); background:rgba(201,169,110,.08);
        }
        .footer-bottom {
          display:flex; align-items:center; justify-content:space-between;
          flex-wrap:wrap; gap:1rem; border-top:1px solid var(--line); padding-top:2rem;
          font-family:var(--ff-mono); font-size:.65rem; letter-spacing:.12em;
          text-transform:uppercase; color:var(--muted);
        }
        @media(max-width:768px){ .contact-giant { font-size:3rem; } .footer-bottom { justify-content:center; text-align:center; } }
      `}),c.jsxs("footer",{id:"contact",className:"contact-section",ref:t,children:[c.jsxs("div",{className:"contact-giant reveal-up",children:["Let's",c.jsx("br",{}),"Connect."]}),c.jsxs("div",{className:"contact-email reveal-up",children:["Drop a line at ",c.jsx("a",{href:"mailto:pateldhamo0079@gmail.com",children:"pateldhamo0079@gmail.com"}),"  or use the form below."]}),c.jsx("div",{className:"reveal-up",style:{marginBottom:"3rem"},children:c.jsxs(cn,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:".8rem",fontFamily:"var(--ff-mono)",fontSize:".75rem",letterSpacing:".15em",textTransform:"uppercase",color:"var(--ink)",background:"var(--gold)",padding:"1rem 2.5rem",borderRadius:"4px",transition:"background .3s, transform .3s",textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.background="var(--gold2)",onMouseLeave:e=>e.currentTarget.style.background="var(--gold)",children:[c.jsx("i",{className:"fas fa-paper-plane"})," Send Me a Message →"]})}),c.jsxs("div",{className:"socials reveal-up",children:[c.jsx("a",{href:"https://github.com/dhyeyptl10",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"GitHub",children:c.jsx("i",{className:"fab fa-github"})}),c.jsx("a",{href:"https://linkedin.com/in/dhyey-patel-803528394",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"LinkedIn",children:c.jsx("i",{className:"fab fa-linkedin-in"})}),c.jsx("a",{href:"https://x.com/DHYEYPATEL2910",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"Twitter / X",children:c.jsx("i",{className:"fab fa-x-twitter"})}),c.jsx("a",{href:"https://leetcode.com/u/dhyeyptl_10/",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"LeetCode",children:c.jsx("i",{className:"fas fa-code"})}),c.jsx("a",{href:"https://www.youtube.com/@dhyeyptl10",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"YouTube",children:c.jsx("i",{className:"fab fa-youtube"})}),c.jsx("a",{href:"https://instagram.com/_dhamopatel_10",target:"_blank",rel:"noreferrer",className:"social-link mag-hover",title:"Instagram",children:c.jsx("i",{className:"fab fa-instagram"})}),c.jsx("a",{href:"mailto:pateldhamo0079@gmail.com",className:"social-link mag-hover",title:"Email",children:c.jsx("i",{className:"far fa-envelope"})})]}),c.jsxs("div",{className:"footer-bottom reveal-up",children:[c.jsx("span",{children:'© 2026 Dhyey "Dhamo" Patel'}),c.jsx("span",{children:"Built with React + GSAP"}),c.jsx("span",{children:"Gujarat, India"})]})]})]})}const Jk="YOUR_SERVICE_ID",e2="YOUR_TEMPLATE_ID",t2="YOUR_PUBLIC_KEY";function r2(){const[t,e]=b.useState({name:"",email:"",subject:"",message:""}),[r,n]=b.useState("idle"),[i,a]=b.useState({}),o=b.useRef(null);b.useEffect(()=>{const d=M.timeline({delay:.1});d.fromTo(".cp-header-line",{y:"110%"},{y:"0%",duration:1,ease:"power3.out",stagger:.1}),d.fromTo(".cp-form-group",{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power3.out",stagger:.08},.6),d.fromTo(".cp-side",{opacity:0,x:40},{opacity:1,x:0,duration:.9,ease:"power3.out"},.5),M.fromTo(".cp-back",{opacity:0,x:-20},{opacity:1,x:0,duration:.6,ease:"power2.out",delay:.3})},[]);const s=()=>{const d={};return t.name.trim()||(d.name="Name is required"),(!t.email.trim()||!/\S+@\S+\.\S+/.test(t.email))&&(d.email="Valid email required"),t.subject.trim()||(d.subject="Subject is required"),(!t.message.trim()||t.message.length<10)&&(d.message="Message must be at least 10 characters"),d},l=d=>{e(f=>({...f,[d.target.name]:d.target.value})),i[d.target.name]&&a(f=>({...f,[d.target.name]:""}))},u=async d=>{d.preventDefault();const f=s();if(Object.keys(f).length>0){a(f);return}n("sending");try{if(window.emailjs)await window.emailjs.send(Jk,e2,{from_name:t.name,from_email:t.email,subject:t.subject,message:t.message},t2),n("success");else{const p=encodeURIComponent(`Name: ${t.name}
Email: ${t.email}

${t.message}`);window.location.href=`mailto:pateldhamo0079@gmail.com?subject=${encodeURIComponent(t.subject)}&body=${p}`,n("success")}e({name:"",email:"",subject:"",message:""})}catch{n("error")}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .contact-page {
          min-height: 100vh; background: var(--ink);
          display: flex; flex-direction: column;
        }
        .cp-back {
          position: fixed; top: 2rem; left: 4vw; z-index: 100;
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s; cursor: none;
          text-decoration: none; opacity: 0;
        }
        .cp-back:hover { color: var(--gold); }
        .cp-back i { transition: transform .3s; }
        .cp-back:hover i { transform: translateX(-4px); }

        .cp-inner {
          flex: 1; display: grid;
          grid-template-columns: 1fr 1.1fr;
          min-height: 100vh;
        }
        .cp-left {
          padding: clamp(8rem,12vw,12rem) 4vw 5vw;
          background: var(--smoke); border-right: 1px solid var(--line);
          position: sticky; top: 0; height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
        }
        .cp-header-wrap { overflow: hidden; }
        .cp-header-line {
          font-family: var(--ff-display); font-size: clamp(3.5rem,8vw,8rem);
          font-weight: 900; line-height: .9; letter-spacing: -.03em;
          display: block; transform: translateY(110%);
        }
        .cp-header-line em { font-style: italic; color: var(--gold); }
        .cp-tagline {
          font-size: 1rem; color: var(--muted); line-height: 1.7;
          margin-top: 2rem; max-width: 320px;
        }
        .cp-contact-info {
          margin-top: 3rem; display: flex; flex-direction: column; gap: 1.2rem;
          border-top: 1px solid var(--line); padding-top: 2rem;
        }
        .cp-info-item {
          display: flex; align-items: center; gap: 1rem;
        }
        .cp-info-icon {
          width: 36px; height: 36px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--gold); font-size: .8rem;
          transition: border-color .3s, background .3s;
        }
        .cp-info-item:hover .cp-info-icon {
          border-color: var(--gold); background: rgba(201,169,110,.08);
        }
        .cp-info-text { font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .08em; color: var(--muted); }
        .cp-info-text a { color: var(--gold); transition: opacity .3s; }
        .cp-info-text a:hover { opacity: .7; }
        .cp-socials { display: flex; gap: .8rem; margin-top: 2rem; }
        .cp-social {
          width: 38px; height: 38px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: .85rem; color: var(--muted);
          transition: border-color .3s, color .3s, transform .3s, background .3s;
        }
        .cp-social:hover {
          border-color: var(--gold); color: var(--gold);
          transform: translateY(-4px); background: rgba(201,169,110,.08);
        }
        .cp-deco-num {
          font-family: var(--ff-display); font-size: clamp(8rem,15vw,15rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.04);
          position: absolute; right: -2rem; bottom: -2rem;
          line-height: 1; pointer-events: none; user-select: none;
        }

        /* RIGHT - FORM */
        .cp-right {
          padding: clamp(8rem,12vw,12rem) 5vw 5vw;
          display: flex; flex-direction: column; justify-content: center;
        }
        .cp-side { opacity: 0; }
        .cp-form-title {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2.5rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .cp-form-title::before { content:''; width:24px; height:1px; background:var(--gold); }
        .cp-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .cp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        .cp-form-group {
          display: flex; flex-direction: column; gap: .5rem; opacity: 0;
        }
        .cp-form-label {
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
        }
        .cp-form-input, .cp-form-textarea {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 6px; padding: .9rem 1.1rem;
          font-family: var(--ff-body); font-size: .9rem; color: var(--cream);
          outline: none; resize: none; width: 100%;
          transition: border-color .3s, box-shadow .3s, background .3s;
        }
        .cp-form-input::placeholder, .cp-form-textarea::placeholder { color: rgba(242,237,228,.2); }
        .cp-form-input:focus, .cp-form-textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,169,110,.1);
          background: rgba(201,169,110,.03);
        }
        .cp-form-input.error, .cp-form-textarea.error { border-color: #f87171; }
        .cp-form-error {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .08em; color: #f87171;
        }
        .cp-form-textarea { min-height: 140px; }
        .cp-submit {
          display: inline-flex; align-items: center; gap: 1rem;
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--ink); background: var(--gold);
          border: none; padding: 1.1rem 2.5rem;
          cursor: none; transition: background .3s, transform .3s;
          border-radius: 4px; align-self: flex-start; position: relative;
          overflow: hidden;
        }
        .cp-submit::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
          transform: translateX(-100%); transition: transform 0s;
        }
        .cp-submit:hover::after { transform: translateX(100%); transition: transform .5s; }
        .cp-submit:hover { background: var(--gold2); transform: translateY(-2px); }
        .cp-submit:disabled { opacity: .5; cursor: not-allowed; }

        .cp-status-msg {
          margin-top: 1.2rem; padding: .9rem 1.2rem; border-radius: 6px;
          font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .1em;
          display: flex; align-items: center; gap: .7rem;
        }
        .cp-status-msg.success { background: rgba(74,222,128,.08); border: 1px solid rgba(74,222,128,.3); color: #4ade80; }
        .cp-status-msg.error { background: rgba(248,113,113,.08); border: 1px solid rgba(248,113,113,.3); color: #f87171; }

        .cp-spinner {
          width: 14px; height: 14px; border: 2px solid rgba(8,7,7,.3);
          border-top-color: var(--ink); border-radius: 50%;
          animation: cpSpin .7s linear infinite;
        }
        @keyframes cpSpin { to { transform: rotate(360deg); } }

        @media(max-width:900px){
          .cp-inner { grid-template-columns: 1fr; }
          .cp-left { position: relative; height: auto; }
          .cp-form-row { grid-template-columns: 1fr; }
        }
        @media(max-width:768px){
          .cp-back { cursor: auto; }
          .cp-submit { cursor: pointer; }
        }
      `}),c.jsxs("div",{className:"contact-page",ref:o,children:[c.jsxs(cn,{to:"/",className:"cp-back",children:[c.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),c.jsxs("div",{className:"cp-inner",children:[c.jsxs("div",{className:"cp-left",children:[c.jsx("div",{className:"cp-deco-num",children:"✉"}),c.jsxs("div",{children:[c.jsx("div",{className:"cp-header-wrap",children:c.jsx("span",{className:"cp-header-line",children:"Let's"})}),c.jsx("div",{className:"cp-header-wrap",children:c.jsx("span",{className:"cp-header-line",children:c.jsx("em",{children:"Talk."})})}),c.jsx("p",{className:"cp-tagline",children:"Got a project in mind? An idea to explore? Or just want to say hi? I'm always open to interesting conversations."}),c.jsxs("div",{className:"cp-contact-info",children:[c.jsxs("div",{className:"cp-info-item",children:[c.jsx("div",{className:"cp-info-icon",children:c.jsx("i",{className:"far fa-envelope"})}),c.jsx("div",{className:"cp-info-text",children:c.jsx("a",{href:"mailto:pateldhamo0079@gmail.com",children:"pateldhamo0079@gmail.com"})})]}),c.jsxs("div",{className:"cp-info-item",children:[c.jsx("div",{className:"cp-info-icon",children:c.jsx("i",{className:"fas fa-map-marker-alt"})}),c.jsx("div",{className:"cp-info-text",children:"Gujarat, India · Open to Remote"})]}),c.jsxs("div",{className:"cp-info-item",children:[c.jsx("div",{className:"cp-info-icon",children:c.jsx("i",{className:"fas fa-clock"})}),c.jsx("div",{className:"cp-info-text",children:"Response within 24 hours"})]})]}),c.jsxs("div",{className:"cp-socials",children:[c.jsx("a",{href:"https://instagram.com/_dhamopatel_10",target:"_blank",rel:"noreferrer",className:"cp-social",children:c.jsx("i",{className:"fab fa-instagram"})}),c.jsx("a",{href:"https://linkedin.com/in/dhyey-patel-803528394",target:"_blank",rel:"noreferrer",className:"cp-social",children:c.jsx("i",{className:"fab fa-linkedin-in"})}),c.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"cp-social",children:c.jsx("i",{className:"fab fa-github"})})]})]})]}),c.jsxs("div",{className:"cp-right cp-side",children:[c.jsx("div",{className:"cp-form-title",children:"Send a Message"}),c.jsxs("form",{className:"cp-form",onSubmit:u,noValidate:!0,children:[c.jsxs("div",{className:"cp-form-row",children:[c.jsxs("div",{className:"cp-form-group",children:[c.jsx("label",{className:"cp-form-label",htmlFor:"cp-name",children:"Your Name"}),c.jsx("input",{id:"cp-name",name:"name",type:"text",className:`cp-form-input${i.name?" error":""}`,placeholder:"Dhyey Patel",value:t.name,onChange:l,disabled:r==="sending"}),i.name&&c.jsx("span",{className:"cp-form-error",children:i.name})]}),c.jsxs("div",{className:"cp-form-group",children:[c.jsx("label",{className:"cp-form-label",htmlFor:"cp-email",children:"Email Address"}),c.jsx("input",{id:"cp-email",name:"email",type:"email",className:`cp-form-input${i.email?" error":""}`,placeholder:"hello@example.com",value:t.email,onChange:l,disabled:r==="sending"}),i.email&&c.jsx("span",{className:"cp-form-error",children:i.email})]})]}),c.jsxs("div",{className:"cp-form-group",children:[c.jsx("label",{className:"cp-form-label",htmlFor:"cp-subject",children:"Subject"}),c.jsx("input",{id:"cp-subject",name:"subject",type:"text",className:`cp-form-input${i.subject?" error":""}`,placeholder:"Let's build something amazing",value:t.subject,onChange:l,disabled:r==="sending"}),i.subject&&c.jsx("span",{className:"cp-form-error",children:i.subject})]}),c.jsxs("div",{className:"cp-form-group",children:[c.jsx("label",{className:"cp-form-label",htmlFor:"cp-message",children:"Message"}),c.jsx("textarea",{id:"cp-message",name:"message",className:`cp-form-textarea${i.message?" error":""}`,placeholder:"Tell me about your project, idea, or just say hello...",value:t.message,onChange:l,disabled:r==="sending"}),i.message&&c.jsx("span",{className:"cp-form-error",children:i.message})]}),c.jsx("button",{type:"submit",className:"cp-submit",disabled:r==="sending",children:r==="sending"?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"cp-spinner"})," Sending…"]}):c.jsxs(c.Fragment,{children:[c.jsx("i",{className:"fas fa-paper-plane"})," Send Message"]})}),r==="success"&&c.jsxs("div",{className:"cp-status-msg success",children:[c.jsx("i",{className:"fas fa-check-circle"}),"Message sent! I'll get back to you within 24 hours."]}),r==="error"&&c.jsxs("div",{className:"cp-status-msg error",children:[c.jsx("i",{className:"fas fa-exclamation-triangle"}),"Something went wrong. Please email me directly at pateldhamo0079@gmail.com"]})]})]})]})]})]})}const n2={about:{keywords:["who","about","dhamo","dhyey","name","tell me","introduce","yourself","him","background"],response:'✦ Dhyey "Dhamo" Patel is a passionate Frontend Developer & Computer Science student from Gujarat, India. Currently pursuing his B.Tech (Batch 2025–2029), he specializes in crafting aesthetic UIs with pixel-perfect precision, buttery GSAP animations, and immersive web experiences.'},skills:{keywords:["skill","tech","stack","tool","language","can he","what does he know","technologies","expertise","capable"],response:`✦ Dhamo's toolkit includes:
• Front End — HTML/CSS, JavaScript (Expert)
• Animation — GSAP (Advanced)
• Design — Figma (Advanced)
• Frameworks — React.js (Growing)
• Languages — C (Proficient), C++ (Beginner)
• Backend — Node.js (Learning)
• Other — Prompt Engineering, Aesthetic UI Design`},projects:{keywords:["project","work","portfolio","built","made","created","website","sites","view project"],response:`✦ Dhamo has shipped 6 impressive projects:

🔹 Rejouice Clone — Pixel-perfect agency site with GSAP scroll magic
🔹 Rolex Clone — Luxury-grade UI with parallax storytelling
🔹 Otaku Verse — Immersive anime community hub
🔹 Git Analyzer — GitHub profile analytics dashboard
🔹 World Factory — Premium culinary e-commerce platform
🔹 Meal Explorer — Recipe search engine with beautiful UI

All live at their respective Netlify URLs!`},certificates:{keywords:["cert","certificate","certified","credential","achievement","hackathon","award","rank"],response:`✦ Dhamo holds 8 certifications & hackathon achievements:

🏅 Frontend Mastery (2025)
🏅 C Programming Logic (2025)
🏅 Prompt Engineering (2025)
🏆 Prompt Craft Hackathon — 3rd Place 🥉
📜 Unsaid Talk — Git Analyzer Hackathon
📜 Oddoxindus — Hackathon Participant
📜 HackEnergy — Hackathon Participant
📜 HackerRank — Hackathon Participant`},contact:{keywords:["contact","email","hire","reach","connect","collaborate","collab","work together","message","social"],response:`✦ Want to connect with Dhamo? Here's how:

📧 Email: pateldhamo0079@gmail.com
📸 Instagram: @_dhamopatel_10
💼 LinkedIn: linkedin.com/in/dhyey-patel-803528394

He's currently available for freelance projects and collaborations!`},education:{keywords:["education","study","college","university","degree","btech","b.tech","student","school","academic"],response:"✦ Dhamo is currently pursuing his B.Tech in Computer Science & Engineering (Batch 2025–2029). He's in his first year but already shipping production-quality projects with modern web stacks. His academic journey is fueled by a deep passion for code and design."},experience:{keywords:["experience","intern","job","career","professional","working"],response:"✦ Dhamo is at the start of his professional journey as a first-year B.Tech student. While he doesn't have formal work experience yet, he's built 6 production-quality projects, earned 8 certifications, and placed 3rd in a hackathon — demonstrating real-world skills that go beyond academics."},design:{keywords:["design","figma","ui","ux","aesthetic","visual","interface","wireframe","prototype"],response:`✦ Dhamo's design philosophy: "Interfaces should feel alive." He designs in Figma first, then brings everything to life with code. His specialty is dark, editorial themes with gold accents, grain textures, and premium typography — think luxury meets tech. Every project starts with wireframes → high-fidelity mockups → coded prototype.`},github:{keywords:["github","git","commit","repository","repo","code","open source","contribution"],response:"✦ Dhamo is active on GitHub with multiple repositories showcasing his work. From frontend clones to analytics dashboards, his commit history reflects consistent coding habits and a passion for clean, well-structured code. Check out his GitHub profile for the full picture!"},greeting:{keywords:["hi","hello","hey","sup","what's up","good morning","good evening","greetings","yo"],response:"Hey there! ✦ Welcome to Dhamo's portfolio. I'm his AI assistant — ask me anything about his skills, projects, certifications, or how to get in touch. What would you like to know?"},thanks:{keywords:["thank","thanks","appreciate","helpful","great","awesome","nice"],response:"You're welcome! ✦ Glad I could help. Feel free to explore the portfolio or reach out to Dhamo directly at pateldhamo0079@gmail.com for collaborations!"},funny:{keywords:["joke","funny","lol","haha","humor","laugh"],response:`✦ Why do frontend developers eat lunch alone? Because they don't know how to join tables! 😄

But seriously, Dhamo knows his way around CSS Grid AND Flexbox — he'd never let a layout break!`},anime:{keywords:["anime","otaku","manga","naruto","one piece","demon slayer"],response:"✦ You found Dhamo's secret — he's also an Otaku! That's exactly why he built Otaku Verse, an immersive anime community hub. It combines his love for anime culture with his frontend skills. Check it out at otakuverse1.netlify.app!"}};function i2(t){const e=t.toLowerCase().trim();let r=null,n=0;for(const[,i]of Object.entries(n2)){let a=0;for(const o of i.keywords)e.includes(o)&&(a+=o.length);a>n&&(n=a,r=i.response)}return r||`✦ Great question! While I might not have the exact answer, you can ask me about Dhamo's:

• Skills & tech stack
• Projects he's built
• Certifications & hackathons
• Education & background
• Design process
• How to hire/contact him

Or reach out directly at pateldhamo0079@gmail.com!`}const a2=["Who is Dhamo?","View projects","Skills & tools","Hire Dhamo?","Certificates","Figma designs"];function Fu(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function o2(){const[t,e]=b.useState(!1),[r,n]=b.useState([{role:"ai",text:"Hey there! ✦ I'm Dhamo's AI assistant. Ask me anything about his work, skills, projects, or how to collaborate!",time:Fu()}]),[i,a]=b.useState(""),[o,s]=b.useState(!1),[l,u]=b.useState(!0),[d,f]=b.useState(!0),p=b.useRef(null),m=b.useRef(null);b.useEffect(()=>{var _;(_=p.current)==null||_.scrollIntoView({behavior:"smooth"})},[r,o]);const y=async _=>{if(!_.trim()||o)return;u(!1),s(!0),a("");const v={role:"user",text:_,time:Fu()};n(w=>[...w,v]);const g=Math.random()*800+600;await new Promise(w=>setTimeout(w,g));const x=i2(_);n(w=>[...w,{role:"ai",text:x,time:Fu()}]),s(!1)},h=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),y(i))};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #ai-chat-btn {
          position:fixed; bottom:2.5rem; left:2.5rem; z-index:8000;
          width:60px; height:60px; border-radius:50%;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color:var(--ink); border:none; cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:1.4rem;
          box-shadow: 0 4px 24px rgba(201,169,110,.35);
          transition: transform .4s cubic-bezier(.25,1,.5,1), box-shadow .3s;
        }
        #ai-chat-btn:hover { transform:scale(1.12); box-shadow:0 8px 36px rgba(201,169,110,.5); }
        .chat-tooltip {
          position:absolute; left:72px; top:50%; transform:translateY(-50%);
          background:var(--card); border:1px solid var(--line); color:var(--cream);
          font-family:var(--ff-mono); font-size:.6rem; letter-spacing:.12em;
          text-transform:uppercase; padding:.4rem .9rem; white-space:nowrap;
          pointer-events:none; opacity:0; transition:opacity .3s;
        }
        #ai-chat-btn:hover .chat-tooltip { opacity:1; }
        .chat-ping {
          position:absolute; top:4px; right:4px; width:10px; height:10px;
          border-radius:50%; background:var(--gold2);
          animation: chatPing 2s ease-in-out infinite;
        }
        #ai-chat-panel {
          position:fixed; bottom:6.5rem; left:2.5rem; z-index:8001;
          width:min(400px, calc(100vw - 3rem)); height:540px;
          background:var(--card); border:1px solid rgba(201,169,110,.2);
          border-radius:12px; display:flex; flex-direction:column; overflow:hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(201,169,110,.05);
          transform:translateY(20px) scale(.96); opacity:0; pointer-events:none;
          transition: transform .4s cubic-bezier(.25,1,.5,1), opacity .4s;
        }
        #ai-chat-panel.open { transform:translateY(0) scale(1); opacity:1; pointer-events:auto; }
        .chat-header {
          padding:1.2rem 1.4rem; border-bottom:1px solid var(--line);
          display:flex; align-items:center; gap:.9rem;
          background:rgba(8,7,7,.6); backdrop-filter:blur(8px);
        }
        .chat-avatar {
          width:38px; height:38px; border-radius:50%;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          display:flex; align-items:center; justify-content:center;
          color:var(--ink); font-size:.9rem; flex-shrink:0;
        }
        .chat-header-info { flex:1; }
        .chat-header-name { font-family:var(--ff-display); font-size:.95rem; font-weight:700; color:var(--cream); }
        .chat-header-status {
          font-family:var(--ff-mono); font-size:.55rem; letter-spacing:.12em;
          text-transform:uppercase; color:var(--gold);
          display:flex; align-items:center; gap:.35rem; margin-top:.15rem;
        }
        .chat-header-status::before {
          content:''; width:5px; height:5px; border-radius:50%; background:#4ade80;
          animation: livePulse 1.5s ease-in-out infinite;
        }
        .chat-close {
          width:28px; height:28px; border-radius:50%; border:1px solid var(--line);
          background:transparent; color:var(--muted); cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:.75rem;
          transition: border-color .3s, color .3s, background .3s;
        }
        .chat-close:hover { border-color:var(--gold); color:var(--gold); background:rgba(201,169,110,.08); }
        .chat-messages {
          flex:1; overflow-y:auto; padding:1.2rem;
          display:flex; flex-direction:column; gap:.9rem;
          scrollbar-width:thin; scrollbar-color:rgba(201,169,110,.3) transparent;
        }
        .chat-messages::-webkit-scrollbar { width:3px; }
        .chat-messages::-webkit-scrollbar-thumb { background:rgba(201,169,110,.3); border-radius:2px; }
        .chat-msg { display:flex; gap:.6rem; align-items:flex-end; animation: msgIn .35s cubic-bezier(.25,1,.5,1) both; }
        .chat-msg.user { flex-direction:row-reverse; }
        .msg-avatar {
          width:26px; height:26px; border-radius:50%; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:.6rem;
        }
        .msg-avatar.ai { background: linear-gradient(135deg, var(--gold), var(--gold2)); color:var(--ink); }
        .msg-avatar.user { background:rgba(255,255,255,.07); color:var(--muted); border:1px solid var(--line); }
        .msg-bubble { max-width:76%; padding:.75rem 1rem; border-radius:12px; font-size:.82rem; line-height:1.55; }
        .chat-msg.ai .msg-bubble { background:rgba(255,255,255,.05); border:1px solid var(--line); color:var(--cream); border-bottom-left-radius:3px; }
        .chat-msg.user .msg-bubble { background: linear-gradient(135deg,rgba(201,169,110,.18),rgba(232,201,138,.12)); border:1px solid rgba(201,169,110,.25); color:var(--cream); border-bottom-right-radius:3px; }
        .msg-time { font-family:var(--ff-mono); font-size:.5rem; color:var(--muted); margin-top:.3rem; opacity:.6; padding:0 .2rem; }
        .chat-msg.ai .msg-time { text-align:left; }
        .chat-msg.user .msg-time { text-align:right; }
        .typing-indicator { display:flex; gap:4px; align-items:center; padding:.75rem 1rem; }
        .typing-indicator span { width:6px; height:6px; border-radius:50%; background:var(--gold); animation:typingDot 1.2s ease-in-out infinite; }
        .typing-indicator span:nth-child(2) { animation-delay:.2s; }
        .typing-indicator span:nth-child(3) { animation-delay:.4s; }
        .chat-input-area {
          padding:1rem; border-top:1px solid var(--line);
          display:flex; gap:.6rem; align-items:flex-end;
          background:rgba(8,7,7,.5);
        }
        #chat-input {
          flex:1; background:rgba(255,255,255,.04); border:1px solid var(--line);
          color:var(--cream); font-family:var(--ff-body); font-size:.82rem;
          padding:.7rem .9rem; outline:none; resize:none; border-radius:8px;
          transition:border-color .3s; max-height:100px; min-height:38px;
        }
        #chat-input:focus { border-color:rgba(201,169,110,.4); }
        #chat-input::placeholder { color:var(--muted); }
        #chat-send {
          width:38px; height:38px; border-radius:50%; background:var(--gold);
          color:var(--ink); border:none; cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:.85rem;
          transition:background .3s, transform .2s; flex-shrink:0;
        }
        #chat-send:hover { background:var(--gold2); transform:scale(1.08); }
        #chat-send:disabled { opacity:.4; transform:none; }
        .chat-suggestions { padding:.5rem 1rem 0; display:flex; flex-wrap:wrap; gap:.4rem; }
        .suggestion-chip {
          font-family:var(--ff-mono); font-size:.58rem; letter-spacing:.08em;
          text-transform:uppercase; color:var(--gold);
          border:1px solid rgba(201,169,110,.25); padding:.3rem .65rem;
          border-radius:20px; cursor:none; transition:background .3s, border-color .3s;
          background:transparent;
        }
        .suggestion-chip:hover { background:rgba(201,169,110,.1); border-color:rgba(201,169,110,.5); }
        .chat-powered {
          text-align:center; padding:.4rem; border-top:1px solid var(--line);
          font-family:var(--ff-mono); font-size:.45rem; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(201,169,110,.3);
        }
        @media(max-width:768px){
          #ai-chat-panel { left:1rem; bottom:5.5rem; width:calc(100vw - 2rem); }
          #ai-chat-btn { left:1.2rem; bottom:1.2rem; cursor:auto; }
          #chat-send { cursor:auto; }
          .chat-close { cursor:auto; }
          .suggestion-chip { cursor:auto; }
        }
      `}),c.jsxs("button",{id:"ai-chat-btn",onClick:()=>{e(_=>!_),f(!1)},"aria-label":"Open AI Assistant",children:[c.jsx("span",{className:"chat-tooltip",children:"Ask Dhamo's AI"}),c.jsx("i",{className:"fas fa-comment-dots"}),d&&c.jsx("span",{className:"chat-ping"})]}),c.jsxs("div",{id:"ai-chat-panel",className:t?"open":"",role:"dialog","aria-label":"AI Chat Assistant",children:[c.jsxs("div",{className:"chat-header",children:[c.jsx("div",{className:"chat-avatar",children:c.jsx("i",{className:"fas fa-robot"})}),c.jsxs("div",{className:"chat-header-info",children:[c.jsx("div",{className:"chat-header-name",children:"Dhamo's AI"}),c.jsx("div",{className:"chat-header-status",children:"Online · Ready to help"})]}),c.jsx("button",{className:"chat-close",onClick:()=>e(!1),"aria-label":"Close chat",children:c.jsx("i",{className:"fas fa-times"})})]}),l&&c.jsx("div",{className:"chat-suggestions",children:a2.map((_,v)=>c.jsx("button",{className:"suggestion-chip",onClick:()=>y(_),children:_},v))}),c.jsxs("div",{className:"chat-messages",children:[r.map((_,v)=>c.jsxs("div",{className:`chat-msg ${_.role}`,children:[c.jsx("div",{className:`msg-avatar ${_.role}`,children:c.jsx("i",{className:_.role==="ai"?"fas fa-robot":"fas fa-user"})}),c.jsxs("div",{children:[c.jsx("div",{className:"msg-bubble",dangerouslySetInnerHTML:{__html:_.text.replace(/\n/g,"<br/>")}}),c.jsx("div",{className:"msg-time",children:_.time})]})]},v)),o&&c.jsxs("div",{className:"chat-msg ai",children:[c.jsx("div",{className:"msg-avatar ai",children:c.jsx("i",{className:"fas fa-robot"})}),c.jsx("div",{className:"msg-bubble",style:{background:"rgba(255,255,255,.05)",border:"1px solid var(--line)"},children:c.jsxs("div",{className:"typing-indicator",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})})]}),c.jsx("div",{ref:p})]}),c.jsxs("div",{className:"chat-input-area",children:[c.jsx("textarea",{id:"chat-input",ref:m,placeholder:"Ask me anything...",rows:"1",maxLength:"1000",value:i,onChange:_=>a(_.target.value),onKeyDown:h,style:{height:"auto"},onInput:_=>{_.target.style.height="auto",_.target.style.height=Math.min(_.target.scrollHeight,100)+"px"}}),c.jsx("button",{id:"chat-send",onClick:()=>y(i),disabled:o,"aria-label":"Send",children:c.jsx("i",{className:"fas fa-paper-plane"})})]}),c.jsx("div",{className:"chat-powered",children:"✦ Powered by Local AI Knowledge Base"})]})]})}const Bu=[{id:1,title:"Rejouice Clone",category:"Frontend Clone",year:"2025",href:"https://rejouiceclone1.netlify.app/",thumb:"https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80",desc:"Pixel-perfect recreation of the award-winning Rejouice agency site with buttery scroll animations and editorial design.",tags:["GSAP","HTML/CSS","Scroll Magic"],color:"#4ade80"},{id:2,title:"Rolex Clone",category:"Luxury UI",year:"2025",href:"https://rolex-clone30.netlify.app/",thumb:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",desc:"A luxury-grade Rolex website clone showcasing premium typography, immersive scroll storytelling and refined micro-interactions.",tags:["Parallax","Luxury","Frontend"],color:"#fbbf24"},{id:3,title:"Otaku Verse",category:"Community Platform",year:"2025",href:"https://otakuverse1.netlify.app/",thumb:"https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",desc:"An immersive hub for Otaku culture with dynamic interface and curated content for the global anime community.",tags:["Anime","Community","Design"],color:"#a78bfa"},{id:4,title:"Git Analyzer",category:"Analytics Tool",year:"2025",href:"https://git-analyzer10.netlify.app/",thumb:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",desc:"Transform your GitHub profile into a visual portfolio with deep-dive analytics on repositories and coding patterns.",tags:["GitHub API","Data Viz","React"],color:"#38bdf8"},{id:5,title:"World Factory",category:"E-Commerce",year:"2025",href:"https://worldfactory1.netlify.app/",thumb:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",desc:`"Everything's on the menu. Except compromise." Premium culinary experiences without shortcuts.`,tags:["Culinary","Premium UI","E-Commerce"],color:"#f97316"},{id:6,title:"Meal Explorer",category:"Recipe Search",year:"2025",href:"https://meal-explorer1.netlify.app/",thumb:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",desc:"Explore thousands of recipes with a sleek search engine. Discover your next favorite dish with detailed visuals.",tags:["API","Search","Meal Discovery"],color:"#ec4899"},{id:7,title:"Figma Design System",category:"UI/UX Design",year:"2025",href:"https://www.figma.com/community",thumb:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",desc:"A complete Figma design system — tokens, components, and high-fidelity prototypes for multiple production-grade projects.",tags:["Figma","UI Design","Design System"],color:"#a78bfa",isFigma:!0}];function s2(){const[t,e]=b.useState(null),[r,n]=b.useState(!1),[i,a]=b.useState(null),[o,s]=b.useState(!0),l=b.useRef(null),u=b.useRef(null),d=b.useRef([]),f=b.useRef({x:0,y:0}),p=b.useRef(null),m=b.useRef({x:0,y:0});b.useEffect(()=>{const w=M.timeline({delay:.2});w.fromTo(".works-header-line",{y:"110%"},{y:"0%",duration:1,ease:"power3.out",stagger:.1}),w.fromTo(".works-back",{opacity:0,x:-20},{opacity:1,x:0,duration:.6,ease:"power2.out"},.3),w.fromTo(".works-count",{opacity:0},{opacity:1,duration:.6,ease:"power2.out"},.4),d.current.forEach((k,C)=>{k&&M.fromTo(k,{opacity:0,x:-60},{opacity:1,x:0,duration:.8,ease:"power3.out",delay:.5+C*.12})})},[]),b.useEffect(()=>{const w=(C,j,E)=>C+(j-C)*E,k=()=>{l.current&&(m.current.x=w(m.current.x,f.current.x,.1),m.current.y=w(m.current.y,f.current.y,.1),l.current.style.left=m.current.x+"px",l.current.style.top=m.current.y+"px"),p.current=requestAnimationFrame(k)};return p.current=requestAnimationFrame(k),()=>cancelAnimationFrame(p.current)},[]);const y=b.useCallback(w=>{f.current={x:w.clientX,y:w.clientY}},[]);b.useEffect(()=>(window.addEventListener("mousemove",y),()=>window.removeEventListener("mousemove",y)),[y]);const h=w=>{e(w),l.current&&M.to(l.current,{opacity:1,scale:1,duration:.5,ease:"power3.out"})},_=()=>{e(null),l.current&&M.to(l.current,{opacity:0,scale:.85,duration:.4,ease:"power3.in"})},v=(w,k)=>{w.preventDefault(),w.stopPropagation(),a(k),s(!0),n(!0)},g=()=>{n(!1),setTimeout(()=>a(null),400)},x=t!==null?Bu[t]:null;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .works-page {
          position: relative; min-height: 100vh; background: var(--ink);
          padding: 0; overflow: hidden;
        }
        .works-back {
          position: fixed; top: 2rem; left: 4vw; z-index: 100;
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s; cursor: none;
          text-decoration: none;
        }
        .works-back:hover { color: var(--gold); }
        .works-back i { transition: transform .3s; }
        .works-back:hover i { transform: translateX(-4px); }

        .works-header {
          padding: clamp(6rem,10vw,10rem) 4vw clamp(3rem,5vw,5rem);
          position: relative;
        }
        .works-header-wrap { overflow: hidden; }
        .works-header-line {
          font-family: var(--ff-display); font-size: clamp(4rem,10vw,10rem);
          font-weight: 900; line-height: .9; letter-spacing: -.03em;
          display: block; transform: translateY(110%);
        }
        .works-header-line em { font-style: italic; color: var(--gold); }
        .works-count {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--muted); margin-top: 1.5rem; opacity: 0;
        }

        .works-list { position: relative; padding: 0 4vw 6rem; }
        .works-item {
          display: grid; grid-template-columns: 1fr auto auto;
          align-items: center; gap: 2rem;
          padding: clamp(1.5rem,3vw,2.5rem) 0;
          border-bottom: 1px solid var(--line);
          cursor: none; position: relative;
          text-decoration: none; color: inherit;
        }
        .works-item:first-child { border-top: 1px solid var(--line); }
        .works-item-left { display: flex; flex-direction: column; gap: .4rem; }
        .works-item-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem,5vw,4.5rem);
          font-weight: 700; line-height: 1;
          transition: color .4s, transform .4s, letter-spacing .4s;
          letter-spacing: -.01em;
        }
        .works-item:hover .works-item-title {
          color: var(--gold); transform: translateX(20px);
          letter-spacing: .02em;
        }
        .works-figma-badge {
          display: inline-flex; align-items: center; gap: .3rem;
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: #a78bfa; border: 1px solid rgba(167,139,250,.3);
          padding: .15rem .45rem; border-radius: 3px; margin-left: .8rem;
          vertical-align: middle;
        }
        .works-item-meta {
          display: flex; align-items: center; gap: 1rem;
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); transition: transform .4s;
        }
        .works-item:hover .works-item-meta { transform: translateX(20px); }
        .works-item-tags { display: flex; gap: .4rem; flex-wrap: wrap; }
        .works-item-tag {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          padding: .2rem .5rem; border-radius: 3px;
          border: 1px solid rgba(201,169,110,.2);
          color: var(--muted); transition: all .3s;
        }
        .works-item:hover .works-item-tag {
          border-color: rgba(201,169,110,.4); color: var(--gold);
        }
        .works-item-preview {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); border: 1px solid rgba(201,169,110,.3);
          padding: .5rem 1.2rem; border-radius: 4px;
          background: transparent; cursor: none;
          transition: background .3s, color .3s, transform .3s;
          white-space: nowrap;
          display: flex; align-items: center; gap: .5rem;
        }
        .works-item-preview:hover {
          background: var(--gold); color: var(--ink); transform: scale(1.05);
        }
        .works-item-arrow {
          width: 50px; height: 50px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: .85rem; color: var(--muted);
          transition: all .4s; opacity: 0; transform: translate(-10px, 10px);
        }
        .works-item:hover .works-item-arrow {
          opacity: 1; transform: translate(0,0);
          border-color: var(--gold); color: var(--gold);
          background: rgba(201,169,110,.08);
        }
        .works-item-num {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          font-family: var(--ff-display); font-size: clamp(5rem,8vw,8rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.04);
          pointer-events: none; user-select: none; line-height: 1;
          transition: -webkit-text-stroke .4s;
        }
        .works-item:hover .works-item-num {
          -webkit-text-stroke: 1px rgba(201,169,110,.1);
        }

        /* ══ BROWSER-WINDOW CURSOR FOLLOWER (marieweber style) ══ */
        .works-browser-float {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: min(420px, 38vw);
          transform: translate(-50%, -60%);
          opacity: 0;
          scale: 0.85;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06);
          will-change: left, top, opacity;
          transition: scale 0.4s ease;
        }
        .wbf-topbar {
          background: #1c1b1a;
          padding: .55rem .9rem;
          display: flex; align-items: center; gap: .7rem;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .wbf-dots { display: flex; gap: 5px; }
        .wbf-dots span {
          width: 9px; height: 9px; border-radius: 50%;
          display: block;
        }
        .wbf-url {
          flex: 1; background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 4px; padding: .18rem .6rem;
          font-family: var(--ff-mono); font-size: .45rem;
          color: rgba(255,255,255,.4); letter-spacing: .04em;
          display: flex; align-items: center; gap: .35rem;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .wbf-iframe-wrap {
          aspect-ratio: 16/10;
          background: #111;
          position: relative; overflow: hidden;
        }
        .wbf-iframe {
          width: 200%; height: 200%;
          border: none;
          transform: scale(0.5);
          transform-origin: top left;
          pointer-events: none;
        }
        .wbf-static-img {
          width: 100%; height: 100%; object-fit: cover;
          display: block;
          filter: brightness(.85);
        }
        .wbf-label {
          position: absolute; bottom: .6rem; left: .6rem;
          font-family: var(--ff-mono); font-size: .42rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--gold); background: rgba(8,7,7,.88);
          padding: .25rem .55rem; border: 1px solid rgba(201,169,110,.2);
          backdrop-filter: blur(6px); border-radius: 3px;
        }
        .wbf-live {
          position: absolute; top: .6rem; right: .6rem;
          font-family: var(--ff-mono); font-size: .4rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold2); background: rgba(201,169,110,.1);
          padding: .2rem .5rem; border: 1px solid rgba(201,169,110,.3);
          border-radius: 3px; display: flex; align-items: center; gap: .3rem;
        }
        .wbf-live::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #4ade80; animation: livePulse 1.2s ease-in-out infinite;
        }

        /* Preview Modal */
        .preview-overlay {
          position: fixed; inset: 0; z-index: 9000;
          background: rgba(8,7,7,.92); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: opacity .4s;
        }
        .preview-overlay.active { opacity: 1; pointer-events: auto; }
        .preview-container {
          width: min(1100px, 90vw); height: min(700px, 80vh);
          background: var(--card); border: 1px solid rgba(201,169,110,.2);
          border-radius: 12px; overflow: hidden;
          display: flex; flex-direction: column;
          transform: translateY(30px) scale(.95);
          transition: transform .5s cubic-bezier(.25,1,.5,1);
          box-shadow: 0 40px 100px rgba(0,0,0,.5);
        }
        .preview-overlay.active .preview-container { transform: translateY(0) scale(1); }
        .preview-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.5rem; border-bottom: 1px solid var(--line);
          background: rgba(8,7,7,.5);
        }
        .preview-top-left { display: flex; align-items: center; gap: .8rem; }
        .preview-dots { display: flex; gap: 6px; }
        .preview-dots span { width: 10px; height: 10px; border-radius: 50%; }
        .preview-url {
          font-family: var(--ff-mono); font-size: .6rem;
          color: var(--muted); letter-spacing: .05em;
          background: rgba(255,255,255,.04); border: 1px solid var(--line);
          padding: .3rem 1rem; border-radius: 4px;
          display: flex; align-items: center; gap: .4rem;
        }
        .preview-close {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid var(--line); background: transparent;
          color: var(--muted); cursor: none; font-size: .8rem;
          display: flex; align-items: center; justify-content: center;
          transition: all .3s;
        }
        .preview-close:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,169,110,.08); }
        .preview-iframe-wrap { flex: 1; position: relative; background: #1a1918; }
        .preview-iframe { width: 100%; height: 100%; border: none; }
        .preview-loading {
          position: absolute; inset: 0; display: flex; align-items: center;
          justify-content: center; flex-direction: column; gap: 1rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--gold);
        }
        .preview-loader {
          width: 40px; height: 2px; background: rgba(201,169,110,.2);
          position: relative; overflow: hidden; border-radius: 2px;
        }
        .preview-loader::after {
          content: ''; position: absolute; top:0; left:-40px; width:40px; height:100%;
          background: var(--gold); animation: previewLoad 1s ease-in-out infinite;
        }
        @keyframes previewLoad {
          to { left: 40px; }
        }
        .preview-visit {
          display: flex; align-items: center; justify-content: center;
          padding: .8rem; border-top: 1px solid var(--line); background: rgba(8,7,7,.5);
        }
        .preview-visit a {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); transition: color .3s;
          display: flex; align-items: center; gap: .5rem;
        }
        .preview-visit a:hover { color: var(--gold2); }

        @media(max-width:768px) {
          .works-item { grid-template-columns: 1fr; gap: 1rem; }
          .works-item-arrow { display: none; }
          .works-browser-float { display: none; }
          .works-item:hover .works-item-title { transform: translateX(8px); }
          .works-item:hover .works-item-meta { transform: translateX(8px); }
          .works-item-num { display: none; }
          .works-back { cursor: auto; }
          .works-item { cursor: auto; }
          .works-item-preview { cursor: auto; }
          .preview-close { cursor: auto; }
        }
      `}),c.jsxs("div",{className:"works-page",ref:u,children:[c.jsxs(cn,{to:"/",className:"works-back",children:[c.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),c.jsxs("header",{className:"works-header",children:[c.jsx("div",{className:"works-header-wrap",children:c.jsx("span",{className:"works-header-line",children:"Selected"})}),c.jsx("div",{className:"works-header-wrap",children:c.jsx("span",{className:"works-header-line",children:c.jsx("em",{children:"Work."})})}),c.jsxs("div",{className:"works-count",children:[Bu.length," Projects · 2025"]})]}),c.jsx("div",{className:"works-list",children:Bu.map((w,k)=>c.jsxs("a",{href:w.href,target:"_blank",rel:"noopener noreferrer",className:"works-item",ref:C=>d.current[k]=C,onMouseEnter:()=>h(k),onMouseLeave:_,children:[c.jsxs("div",{className:"works-item-left",children:[c.jsxs("div",{className:"works-item-title",children:[w.title,w.isFigma&&c.jsxs("span",{className:"works-figma-badge",children:[c.jsx("i",{className:"fab fa-figma"})," Figma"]})]}),c.jsxs("div",{className:"works-item-meta",children:[c.jsx("span",{children:w.category}),c.jsx("span",{children:"·"}),c.jsx("span",{children:w.year})]})]}),c.jsx("div",{className:"works-item-tags",children:w.tags.map((C,j)=>c.jsx("span",{className:"works-item-tag",children:C},j))}),c.jsxs("button",{className:"works-item-preview",onClick:C=>v(C,w),children:[c.jsx("i",{className:"fas fa-expand"})," Preview"]}),c.jsx("div",{className:"works-item-arrow",children:c.jsx("i",{className:"fas fa-arrow-up-right"})}),c.jsx("div",{className:"works-item-num",children:String(k+1).padStart(2,"0")})]},w.id))}),c.jsxs("div",{className:"works-browser-float",ref:l,children:[c.jsxs("div",{className:"wbf-topbar",children:[c.jsxs("div",{className:"wbf-dots",children:[c.jsx("span",{style:{background:"#ff5f57"}}),c.jsx("span",{style:{background:"#ffbd2e"}}),c.jsx("span",{style:{background:"#28c840"}})]}),c.jsxs("div",{className:"wbf-url",children:[c.jsx("i",{className:"fas fa-lock",style:{fontSize:".38rem",opacity:.4}}),x?x.href.replace("https://",""):""]})]}),c.jsx("div",{className:"wbf-iframe-wrap",children:x&&c.jsxs(c.Fragment,{children:[c.jsx("img",{className:"wbf-static-img",src:x.thumb,alt:x.title}),c.jsx("div",{className:"wbf-label",children:x.category}),c.jsx("div",{className:"wbf-live",children:"Live Site"})]})})]}),c.jsx("div",{className:`preview-overlay ${r?"active":""}`,onClick:g,children:c.jsxs("div",{className:"preview-container",onClick:w=>w.stopPropagation(),children:[c.jsxs("div",{className:"preview-top",children:[c.jsxs("div",{className:"preview-top-left",children:[c.jsxs("div",{className:"preview-dots",children:[c.jsx("span",{style:{background:"#ff5f57"}}),c.jsx("span",{style:{background:"#ffbd2e"}}),c.jsx("span",{style:{background:"#28c840"}})]}),i&&c.jsxs("div",{className:"preview-url",children:[c.jsx("i",{className:"fas fa-lock",style:{fontSize:".45rem",opacity:.5}}),i.href.replace("https://","")]})]}),c.jsx("button",{className:"preview-close",onClick:g,children:c.jsx("i",{className:"fas fa-times"})})]}),c.jsx("div",{className:"preview-iframe-wrap",children:i&&r?c.jsxs(c.Fragment,{children:[o&&c.jsxs("div",{className:"preview-loading",children:[c.jsx("div",{className:"preview-loader"}),"Loading Preview…"]}),c.jsx("iframe",{className:"preview-iframe",src:i.href,title:`${i.title} Preview`,sandbox:"allow-same-origin allow-scripts allow-forms",onLoad:()=>s(!1),style:{opacity:o?0:1,transition:"opacity .5s"}})]}):c.jsxs("div",{className:"preview-loading",children:[c.jsx("div",{className:"preview-loader"}),"Loading preview..."]})}),i&&c.jsx("div",{className:"preview-visit",children:c.jsxs("a",{href:i.href,target:"_blank",rel:"noreferrer",children:[c.jsx("i",{className:"fas fa-external-link-alt"})," Visit ",i.title," →"]})})]})})]})]})}M.registerPlugin(W);const st={role:"Team Czar · Frontend Lead",date:"4th & 5th April 2026",location:"Indus University, Ahmedabad",teamId:"082",coOrganizer:"Odoo India Pvt. Ltd.",team:[{name:"Dhyey Patel",role:"Frontend Lead · UI/UX"},{name:"Het Rathod",role:"Backend Developer"},{name:"Sarthak Bhalasi",role:"Full-Stack Support"}],desc:"Competed at the Odoo × Indus University Hackathon '26 — a 2-day intensive coding sprint organized by the CSE Department (IITE) at Indus University in collaboration with Odoo India Pvt. Ltd. As part of Team Czar (Team ID: 082), I led the frontend development and UI/UX design of a full-featured Burger King POS System — a production-quality contactless dining PWA built from scratch over 48 hours.",longDesc:"The project — BK Crown POS — featured a complete order management system, real-time dine-in table booking, role-based dashboards for Admin, Kitchen, and Customer, secure authentication with Google OAuth, and a premium UI inspired by the Burger King brand. Every visual layer was crafted with care — from dark+gold color palettes to animated product cards and responsive layout. The experience sharpened my skills in rapid prototyping, high-pressure delivery, and working as a collaborative team unit.",tech:["React.js","Node.js","MongoDB","JWT Auth","Google OAuth","GSAP","Vite","PWA"],photos:[{src:"/images/Team Czar Certificate of oddo x indus.jpeg",label:"Team Czar — Certificates Received",wide:!0,isFeatured:!0},{src:"/images/Team Czar (oddo x indus ).jpeg",label:"Team Czar at the venue",wide:!1},{src:"/images/ID of hackathon.jpeg",label:"Participant IDs — Team 082",wide:!1},{src:"/images/oddo x indus project image.png",label:"BK Crown POS — Hero Screen",wide:!0},{src:"/images/oddo x indus project image (2).png",label:"BK Crown POS — Menu View",wide:!1},{src:"/images/oddo x indus project image (3).png",label:"BK Crown POS — Dashboard",wide:!1},{src:"/images/oddo x indus project image (4).png",label:"BK Crown POS — Order Flow",wide:!1},{src:"/images/certs/Hackathon oddo x indus.jpeg",label:"Certificate of Participation",wide:!1}],highlights:["48-hour intense coding sprint at Indus University","Built a complete POS system from scratch — BK Crown PWA","Role-based auth: Admin / Kitchen / Customer dashboards","Real-time table booking + contactless dine-in ordering","Google OAuth + JWT secure authentication system","Premium Burger King-inspired UI with dark+gold theme","Certificate issued by Odoo India Pvt. Ltd. & Indus University"]};function l2(){var n;const t=b.useRef(null),[e,r]=b.useState(null);return b.useEffect(()=>{window.scrollTo(0,0);const i=M.context(()=>{M.fromTo(".hack-hdr-el",{opacity:0,y:60},{opacity:1,y:0,stagger:.12,duration:.9,ease:"power3.out",delay:.2}),M.fromTo(".hack-cert-featured",{opacity:0,y:50,scale:.96},{opacity:1,y:0,scale:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:".hack-cert-featured",start:"top 85%",once:!0}}),M.fromTo(".hack-cert-badge",{opacity:0,x:30},{opacity:1,x:0,duration:.7,ease:"back.out(2)",scrollTrigger:{trigger:".hack-cert-featured",start:"top 80%",once:!0},delay:.5}),M.utils.toArray(".hack-photo-item:not(.featured)").forEach((a,o)=>{M.fromTo(a,{opacity:0,scale:.92,y:30},{opacity:1,scale:1,y:0,duration:.75,ease:"power3.out",delay:o*.07,scrollTrigger:{trigger:a,start:"top 90%",once:!0}})}),M.fromTo(".hack-highlight-item",{opacity:0,x:-30},{opacity:1,x:0,stagger:.08,duration:.7,ease:"power2.out",scrollTrigger:{trigger:".hack-highlights",start:"top 85%"}}),M.fromTo(".hack-team-card",{opacity:0,y:40},{opacity:1,y:0,stagger:.1,duration:.7,ease:"power3.out",scrollTrigger:{trigger:".hack-team",start:"top 88%"}}),M.utils.toArray(".hack-bar-fill").forEach(a=>{M.fromTo(a,{width:"0%"},{width:a.dataset.val+"%",duration:1.4,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 92%"}})})},t);return()=>i.revert()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* PAGE */
        .hack-page {
          min-height: 100vh; background: var(--ink);
          padding: clamp(6rem,10vw,9rem) 4vw clamp(4rem,8vw,8rem);
          position: relative; overflow: hidden;
        }
        .hack-page-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,169,110,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,.018) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 100%);
        }
        .hack-orb {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px);
        }
        .hack-orb-1 {
          width: 600px; height: 600px; top: -15%; right: -10%;
          background: radial-gradient(circle, rgba(201,169,110,.05) 0%, transparent 70%);
        }
        .hack-orb-2 {
          width: 400px; height: 400px; bottom: 10%; left: -8%;
          background: radial-gradient(circle, rgba(201,169,110,.03) 0%, transparent 70%);
        }

        /* BACK */
        .hack-back {
          display: inline-flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .68rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 3rem;
          transition: color .3s; position: relative; z-index: 2;
        }
        .hack-back:hover { color: var(--gold); }
        .hack-back i { transition: transform .3s; }
        .hack-back:hover i { transform: translateX(-4px); }

        /* HEADER */
        .hack-eyebrow {
          font-family: var(--ff-mono); font-size: .72rem; letter-spacing: .25em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;
          display: flex; align-items: center; gap: .8rem; opacity: 0;
          position: relative; z-index: 2;
        }
        .hack-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .hack-title {
          font-family: var(--ff-display); font-size: clamp(2.6rem,7vw,6.5rem);
          font-weight: 900; line-height: .95; letter-spacing: -.02em;
          opacity: 0; position: relative; z-index: 2;
        }
        .hack-title em { font-style: italic; color: var(--gold); }
        .hack-subtitle {
          max-width: 580px; font-size: .95rem; color: var(--muted);
          line-height: 1.75; margin-top: 1.5rem; opacity: 0;
          position: relative; z-index: 2;
        }

        /* META BAND */
        .hack-meta-band {
          display: flex; flex-wrap: wrap; gap: 1rem 2.5rem;
          margin: 2.5rem 0; padding: 1.8rem 0;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          position: relative; z-index: 2;
        }
        .hack-meta-item {
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .12em;
          text-transform: uppercase; color: var(--muted);
        }
        .hack-meta-item i { color: var(--gold); font-size: .7rem; }
        .hack-meta-label { color: var(--cream); font-weight: 600; }

        /* RESULT BADGE */
        .hack-result {
          display: inline-flex; align-items: center; gap: .55rem;
          background: rgba(201,169,110,.08);
          border: 1px solid rgba(201,169,110,.3);
          padding: .5rem 1.2rem; border-radius: 6px;
          font-family: var(--ff-mono); font-size: .68rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2rem;
          position: relative; z-index: 2;
        }

        /* BODY GRID */
        .hack-body { display: grid; grid-template-columns: 1fr 1.6fr; gap: 4rem; position: relative; z-index: 2; }
        @media(max-width: 968px) { .hack-body { grid-template-columns: 1fr; } }

        /* LEFT PANEL */
        .hack-info-panel {
          background: rgba(22,21,20,.7); border: 1px solid rgba(201,169,110,.12);
          border-radius: 18px; padding: 2.2rem; backdrop-filter: blur(10px);
          display: flex; flex-direction: column; gap: 1.8rem;
        }
        .hack-info-panel-top {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), rgba(201,169,110,.3));
          border-radius: 18px 18px 0 0; margin: -2.2rem -2.2rem 0;
          border-radius: 18px 18px 0 0;
        }

        .hack-desc-block h3 {
          font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .2em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .8rem;
        }
        .hack-desc-block p {
          font-size: .85rem; color: var(--muted); line-height: 1.8;
          border-left: 2px solid rgba(201,169,110,.25); padding-left: 1rem;
        }

        /* HIGHLIGHTS */
        .hack-highlights { display: flex; flex-direction: column; gap: .6rem; }
        .hack-highlight-item {
          display: flex; align-items: flex-start; gap: .8rem;
          font-size: .82rem; color: var(--muted); line-height: 1.5;
        }
        .hack-highlight-item::before {
          content: ''; min-width: 6px; height: 6px; border-radius: 50%; margin-top: .45em;
          background: var(--gold); box-shadow: 0 0 10px rgba(201,169,110,.5);
          flex-shrink: 0;
        }

        /* TECH TAGS */
        .hack-tech-row { display: flex; flex-wrap: wrap; gap: .45rem; }
        .hack-tech-tag {
          font-family: var(--ff-mono); font-size: .52rem; letter-spacing: .12em;
          text-transform: uppercase; padding: .3rem .75rem;
          border: 1px solid rgba(201,169,110,.2); border-radius: 4px;
          color: var(--muted); transition: border-color .3s, color .3s, background .3s;
        }
        .hack-tech-tag:hover {
          border-color: rgba(201,169,110,.45); color: var(--gold);
          background: rgba(201,169,110,.06);
        }

        /* TEAM */
        .hack-team { display: flex; flex-direction: column; gap: .6rem; }
        .hack-team-card {
          display: flex; align-items: center; gap: 1rem;
          background: rgba(255,255,255,.04); border: 1px solid rgba(201,169,110,.1);
          border-radius: 10px; padding: .9rem 1.2rem;
          transition: border-color .35s, background .35s;
        }
        .hack-team-card:hover {
          border-color: rgba(201,169,110,.3);
          background: rgba(201,169,110,.05);
        }
        .hack-team-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(201,169,110,.3), rgba(201,169,110,.1));
          border: 1px solid rgba(201,169,110,.25);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--ff-display); font-weight: 700; font-size: .9rem;
          color: var(--gold); flex-shrink: 0;
        }
        .hack-team-name { font-size: .88rem; font-weight: 600; color: var(--cream); }
        .hack-team-role { font-family: var(--ff-mono); font-size: .55rem; letter-spacing: .1em; color: var(--muted); }

        /* PHOTO SECTION */
        .hack-photo-section { display: flex; flex-direction: column; gap: 1rem; }
        .hack-photos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: .9rem;
        }
        .hack-photo-item {
          border-radius: 12px; overflow: hidden;
          border: 1px solid rgba(201,169,110,.1);
          cursor: pointer; position: relative;
          background: rgba(15,14,13,.8);
          transition: border-color .35s, transform .35s cubic-bezier(.25,1,.5,1), box-shadow .35s;
        }
        .hack-photo-item.wide { grid-column: 1 / -1; }
        .hack-photo-item:hover {
          border-color: rgba(201,169,110,.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,.5), 0 0 30px rgba(201,169,110,.1);
        }
        .hack-photo-item img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; min-height: 160px;
          transition: transform .5s cubic-bezier(.25,1,.5,1), filter .5s;
          filter: brightness(.88);
        }
        .hack-photo-item.wide img { min-height: 220px; }
        .hack-photo-item:hover img { transform: scale(1.04); filter: brightness(1); }
        .hack-photo-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(8,7,7,.85) 0%, transparent 100%);
          padding: .8rem .8rem .6rem;
          font-family: var(--ff-mono); font-size: .52rem; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(201,169,110,.8);
        }
        .hack-photo-zoom {
          position: absolute; top: .6rem; right: .6rem;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(8,7,7,.7); border: 1px solid rgba(201,169,110,.25);
          display: flex; align-items: center; justify-content: center;
          font-size: .6rem; color: var(--gold); opacity: 0;
          transition: opacity .3s; backdrop-filter: blur(6px);
        }
        .hack-photo-item:hover .hack-photo-zoom { opacity: 1; }

        /* FEATURED CERTIFICATE */
        .hack-cert-featured {
          grid-column: 1 / -1;
          border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(201,169,110,.25);
          cursor: pointer; position: relative;
          background: rgba(10,9,8,.9);
          box-shadow: 0 0 0 1px rgba(201,169,110,.08), 0 20px 60px rgba(0,0,0,.5);
          transition: border-color .45s, transform .45s cubic-bezier(.25,1,.5,1), box-shadow .45s;
          margin-bottom: .9rem;
        }
        .hack-cert-featured::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), rgba(201,169,110,.4), transparent);
          z-index: 2;
        }
        .hack-cert-featured::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(201,169,110,.06) 50%, transparent 70%);
          animation: certShimmerFeat 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes certShimmerFeat {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }
        .hack-cert-featured:hover {
          border-color: rgba(201,169,110,.55);
          transform: translateY(-5px);
          box-shadow: 0 0 0 1px rgba(201,169,110,.2), 0 28px 70px rgba(0,0,0,.55), 0 0 50px rgba(201,169,110,.10);
        }
        .hack-cert-featured img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; min-height: 280px; max-height: 420px;
          transition: transform .6s cubic-bezier(.25,1,.5,1), filter .6s;
          filter: brightness(.9) saturate(1.05);
        }
        .hack-cert-featured:hover img { transform: scale(1.03); filter: brightness(1) saturate(1.1); }
        .hack-cert-featured-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(8,7,7,.92) 0%, rgba(8,7,7,.4) 60%, transparent 100%);
          padding: 1.8rem 1.4rem 1rem;
          display: flex; align-items: center; justify-content: space-between;
          z-index: 3;
        }
        .hack-cert-featured-title {
          font-family: var(--ff-display); font-size: clamp(.95rem,2vw,1.3rem);
          font-weight: 700; color: var(--cream); line-height: 1.2;
        }
        .hack-cert-featured-title span {
          display: block;
          font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .3rem;
        }
        .hack-cert-badge {
          display: flex; align-items: center; gap: .5rem;
          background: rgba(201,169,110,.12); border: 1px solid rgba(201,169,110,.35);
          backdrop-filter: blur(8px); border-radius: 6px;
          padding: .5rem 1rem; flex-shrink: 0;
          opacity: 0;
        }
        .hack-cert-badge i { color: var(--gold); font-size: .8rem; }
        .hack-cert-badge-text {
          display: flex; flex-direction: column; gap: .1rem;
        }
        .hack-cert-badge-main {
          font-family: var(--ff-display); font-size: .82rem; font-weight: 700; color: var(--gold);
        }
        .hack-cert-badge-sub {
          font-family: var(--ff-mono); font-size: .48rem; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted);
        }
        .hack-cert-zoom {
          position: absolute; top: 1rem; right: 1rem; z-index: 4;
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(8,7,7,.75); border: 1px solid rgba(201,169,110,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: .7rem; color: var(--gold); opacity: 0;
          transition: opacity .3s; backdrop-filter: blur(6px);
        }
        .hack-cert-featured:hover .hack-cert-zoom { opacity: 1; }

        /* LIGHTBOX */
        .hack-lightbox {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(8,7,7,.95); backdrop-filter: blur(16px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: opacity .35s;
          padding: 2rem;
        }
        .hack-lightbox.open { opacity: 1; pointer-events: all; }
        .hack-lightbox img {
          max-width: 90vw; max-height: 85vh; border-radius: 12px;
          box-shadow: 0 30px 80px rgba(0,0,0,.7);
          border: 1px solid rgba(201,169,110,.2);
          animation: lbIn .35s cubic-bezier(.25,1,.5,1);
        }
        @keyframes lbIn {
          from { transform: scale(.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .hack-lbox-close {
          position: absolute; top: 1.5rem; right: 1.5rem;
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(22,21,20,.9); border: 1px solid rgba(201,169,110,.3);
          color: var(--gold); font-size: 1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .3s, transform .3s;
        }
        .hack-lbox-close:hover { background: rgba(201,169,110,.15); transform: scale(1.1); }
        .hack-lbox-label {
          position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
          font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(8,7,7,.8); padding: .4rem 1rem; border-radius: 4px;
          border: 1px solid rgba(201,169,110,.2); white-space: nowrap;
        }

        /* SECTION label */
        .hack-section-label {
          font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .22em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .8rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .hack-section-label::before { content: ''; width: 20px; height: 1px; background: var(--gold); }

        @media(max-width: 640px) {
          .hack-photos-grid { grid-template-columns: 1fr; }
          .hack-photo-item.wide { grid-column: unset; }
        }
      `}),c.jsxs("div",{className:`hack-lightbox${e!==null?" open":""}`,onClick:()=>r(null),children:[e!==null&&c.jsxs(c.Fragment,{children:[c.jsx("img",{src:st.photos[e].src,alt:st.photos[e].label,onClick:i=>i.stopPropagation()}),c.jsx("div",{className:"hack-lbox-label",children:st.photos[e].label})]}),c.jsx("button",{className:"hack-lbox-close",onClick:()=>r(null),children:c.jsx("i",{className:"fas fa-times"})})]}),c.jsxs("div",{className:"hack-page",ref:t,children:[c.jsx("div",{className:"hack-page-bg"}),c.jsx("div",{className:"hack-orb hack-orb-1"}),c.jsx("div",{className:"hack-orb hack-orb-2"}),c.jsxs(cn,{to:"/",className:"hack-back",children:[c.jsx("i",{className:"fas fa-arrow-left"})," Back to Portfolio"]}),c.jsx("div",{className:"hack-eyebrow hack-hdr-el",children:"Hackathons & Competitions"}),c.jsxs("h1",{className:"hack-title hack-hdr-el",children:["Built Under",c.jsx("br",{}),c.jsx("em",{children:"Pressure."})]}),c.jsx("p",{className:"hack-subtitle hack-hdr-el",children:"48-hour sprints, midnight hustle, and teams that ship. Here's the story of the Odoo × Indus University Hackathon '26 — where Team Czar turned caffeine and code into a production-ready POS system."}),c.jsxs("div",{className:"hack-result hack-hdr-el",children:[c.jsx("i",{className:"fas fa-certificate"}),"Certificate of Participation · Odoo India Pvt. Ltd. & Indus University"]}),c.jsxs("div",{className:"hack-meta-band hack-hdr-el",children:[c.jsxs("div",{className:"hack-meta-item",children:[c.jsx("i",{className:"fas fa-calendar-alt"}),c.jsx("span",{className:"hack-meta-label",children:st.date})]}),c.jsxs("div",{className:"hack-meta-item",children:[c.jsx("i",{className:"fas fa-map-marker-alt"}),c.jsx("span",{className:"hack-meta-label",children:st.location})]}),c.jsxs("div",{className:"hack-meta-item",children:[c.jsx("i",{className:"fas fa-users"}),c.jsxs("span",{className:"hack-meta-label",children:["Team Czar · ID ",st.teamId]})]}),c.jsxs("div",{className:"hack-meta-item",children:[c.jsx("i",{className:"fas fa-building"}),c.jsx("span",{className:"hack-meta-label",children:st.coOrganizer})]}),c.jsxs("div",{className:"hack-meta-item",children:[c.jsx("i",{className:"fas fa-user-tag"}),c.jsx("span",{className:"hack-meta-label",children:st.role})]})]}),c.jsxs("div",{className:"hack-body",children:[c.jsxs("div",{className:"hack-info-panel",children:[c.jsx("div",{className:"hack-info-panel-top"}),c.jsxs("div",{className:"hack-desc-block",children:[c.jsx("h3",{children:"The Challenge"}),c.jsx("p",{children:st.desc})]}),c.jsxs("div",{className:"hack-desc-block",children:[c.jsx("h3",{children:"The Build"}),c.jsx("p",{children:st.longDesc})]}),c.jsxs("div",{children:[c.jsx("div",{className:"hack-section-label",children:"Key Highlights"}),c.jsx("div",{className:"hack-highlights",children:st.highlights.map((i,a)=>c.jsx("div",{className:"hack-highlight-item",children:i},a))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"hack-section-label",children:"Tech Stack"}),c.jsx("div",{className:"hack-tech-row",children:st.tech.map(i=>c.jsx("span",{className:"hack-tech-tag",children:i},i))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"hack-section-label",children:"Team Members"}),c.jsx("div",{className:"hack-team",children:st.team.map((i,a)=>c.jsxs("div",{className:"hack-team-card",children:[c.jsx("div",{className:"hack-team-avatar",children:i.name[0]}),c.jsxs("div",{children:[c.jsx("div",{className:"hack-team-name",children:i.name}),c.jsx("div",{className:"hack-team-role",children:i.role})]})]},a))})]})]}),c.jsxs("div",{className:"hack-photo-section",children:[c.jsx("div",{className:"hack-section-label",children:"Moments & Memories"}),((n=st.photos[0])==null?void 0:n.isFeatured)&&c.jsxs("div",{className:"hack-cert-featured",onClick:()=>r(0),children:[c.jsx("img",{src:st.photos[0].src,alt:st.photos[0].label,loading:"eager"}),c.jsx("div",{className:"hack-cert-zoom",children:c.jsx("i",{className:"fas fa-expand"})}),c.jsxs("div",{className:"hack-cert-featured-label",children:[c.jsxs("div",{className:"hack-cert-featured-title",children:[c.jsx("span",{children:"Certificate of Participation"}),"Team Czar — Odoo × Indus University Hackathon '26"]}),c.jsxs("div",{className:"hack-cert-badge",children:[c.jsx("i",{className:"fas fa-award"}),c.jsxs("div",{className:"hack-cert-badge-text",children:[c.jsx("div",{className:"hack-cert-badge-main",children:"Team Czar"}),c.jsx("div",{className:"hack-cert-badge-sub",children:"ID: 082 · April 2026"})]})]})]})]}),c.jsx("div",{className:"hack-photos-grid",children:st.photos.slice(1).map((i,a)=>c.jsxs("div",{className:`hack-photo-item${i.wide?" wide":""}`,onClick:()=>r(a+1),children:[c.jsx("img",{src:i.src,alt:i.label,loading:"lazy"}),c.jsx("div",{className:"hack-photo-label",children:i.label}),c.jsx("div",{className:"hack-photo-zoom",children:c.jsx("i",{className:"fas fa-expand"})})]},a))})]})]})]})]})}function c2(){return c.jsxs(c.Fragment,{children:[c.jsx(uk,{}),c.jsxs("main",{children:[c.jsx(dk,{}),c.jsx(fk,{}),c.jsx(zk,{}),c.jsx("div",{className:"divider"}),c.jsx(Ok,{}),c.jsx("div",{className:"divider"}),c.jsx(Mk,{}),c.jsx("div",{className:"divider"}),c.jsx(Fk,{}),c.jsx("div",{className:"divider"}),c.jsx(Hk,{}),c.jsx("div",{className:"divider"}),c.jsx(Gk,{}),c.jsx("div",{className:"divider"}),c.jsx(qk,{}),c.jsx("div",{className:"divider"}),c.jsx(Wk,{}),c.jsx("div",{className:"divider"}),c.jsx(Zk,{})]}),c.jsx(o2,{})]})}function u2(){const[t,e]=b.useState(!1);return b.useEffect(()=>{const r=setTimeout(()=>e(!0),3200);return()=>clearTimeout(r)},[]),c.jsxs(c.Fragment,{children:[c.jsx(W_,{}),c.jsx(ck,{onComplete:()=>e(!0)}),t&&c.jsxs(u_,{children:[c.jsx(Eo,{path:"/",element:c.jsx(c2,{})}),c.jsx(Eo,{path:"/works",element:c.jsx(s2,{})}),c.jsx(Eo,{path:"/hackathons",element:c.jsx(l2,{})}),c.jsx(Eo,{path:"/contact",element:c.jsx(r2,{})})]})]})}Uu.createRoot(document.getElementById("root")).render(c.jsx(ty.StrictMode,{children:c.jsx(M_,{children:c.jsx(u2,{})})}));
