!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports["phoenix-liveview-react"]=t(require("react"),require("react-dom")):e["phoenix-liveview-react"]=t(e.React,e.ReactDOM)}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"usePushEvent",(function(){return f})),n.d(t,"LiveViewContextProvider",(function(){return a})),n.d(t,"genHydrate",(function(){return p}));var r=n(0),o=n(1),u=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=r.createContext({pushEvent:function(){}}),f=function(){return r.useContext(c).pushEvent},a=function(e){var t=e.children,n=e.pushEvent;return r.createElement(c.Provider,{value:{pushEvent:n}},t)};function p(e){return function(t,n,o){var f=o.props,p=o.pushEvent,l=e[t];u.a.hydrate(r.createElement(a,{pushEvent:p},r.createElement(l,i({},f,{contexts:c}))),document.getElementById(n))}}}])}));