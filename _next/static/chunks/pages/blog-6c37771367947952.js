(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3899:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(9318)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),i=n(7795),s=n(4465),u=n(2692),c=n(8245),d=n(9246),f=n(227),p=n(3468);let h=new Set;function m(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function x(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,o;let{href:i,as:h,children:v,prefetch:g,passHref:b,replace:y,shallow:w,scroll:j,locale:_,onClick:k,onMouseEnter:N,onTouchStart:C,legacyBehavior:M=!1}=e,E=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==g,O=l.default.useContext(u.RouterContext),P=l.default.useContext(c.AppRouterContext),S=null!=O?O:P,T=!O,{href:I,as:R}=l.default.useMemo(()=>{if(!O){let e=x(i);return{href:e,as:h?x(h):e}}let[t,n]=a.resolveHref(O,i,!0);return{href:t,as:h?a.resolveHref(O,h):n||t}},[O,i,h]),B=l.default.useRef(I),D=l.default.useRef(R);M&&(o=l.default.Children.only(n));let H=M?o&&"object"==typeof o&&o.ref:t,[K,U,A]=d.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(D.current!==R||B.current!==I)&&(A(),D.current=R,B.current=I),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[R,H,I,A,K]);l.default.useEffect(()=>{S&&U&&L&&m(S,I,R,{locale:_})},[R,I,U,_,L,null==O?void 0:O.locale,S]);let W={ref:F,onClick(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,o,r,i,s,u,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:u,scroll:s}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};c?l.default.startTransition(h):h()}(e,S,I,R,y,w,j,_,T,L)},onMouseEnter(e){M||"function"!=typeof N||N(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(L||!T)&&m(S,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof C||C(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(L||!T)&&m(S,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===o.type&&!("href"in o.props)){let X=void 0!==_?_:null==O?void 0:O.locale,Z=(null==O?void 0:O.isLocaleDomain)&&f.getDomainLocale(R,X,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);W.href=Z||p.addBasePath(s.addLocale(R,X,null==O?void 0:O.defaultLocale))}return M?l.default.cloneElement(o,W):l.default.createElement("a",Object.assign({},E,W),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!l,[c,d]=o.useState(!1),[f,p]=o.useState(null);o.useEffect(()=>{if(l){if(!u&&!c&&f&&f.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},i.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&i.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let o=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(o)}},[f,u,n,t,c]);let h=o.useCallback(()=>{d(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),r=n(9008),l=n.n(r),a=n(1664),i=n.n(a),s=n(7294),u=function(){let[e,t]=(0,s.useState)(!1),n=()=>{t(!e)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("nav",{className:"bg-white font-mono border-b-2",children:(0,o.jsx)("div",{className:"container mx-auto lg:max-w-7xl",children:(0,o.jsxs)("div",{className:"flex items-center flex-wrap py-2",children:[(0,o.jsx)(i(),{href:"/",className:"inline-flex items-center p-2 m-auto animate-gradient from-indigo-500 via-sky-500 to-indigo-500 bg-[length:500%_500%] bg-gradient-to-r rounded-md",children:(0,o.jsxs)("span",{className:"text-lg text-white font-bold tracking-widest",children:["Irham ",(0,o.jsx)("span",{className:"",children:"Dev"})]})}),(0,o.jsxs)("button",{className:"inline-flex p-3 rounded md:hidden",onClick:n,children:[(0,o.jsx)("svg",{className:"".concat(e?"hidden":"show"," w-6 h-6"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"".concat(e?"show":"hidden"," w-6 h-6"),children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]}),(0,o.jsx)("div",{className:"".concat(e?"":"hidden","   w-full md:inline-flex md:flex-grow md:w-auto"),children:(0,o.jsxs)("div",{className:"w-full items-start flex flex-col md:inline-flex md:flex-row md:w-auto md:ml-auto md:items-center md:h-auto text-black",children:[(0,o.jsx)(i(),{href:"/",className:"md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800 ",children:"<Home/>"}),(0,o.jsx)(i(),{href:"/blog",className:"md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800",children:"<Blog/>"}),(0,o.jsx)(i(),{href:"/snippet",className:"md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800",children:"<SnippetCode/>"}),(0,o.jsx)(i(),{href:"/reference",className:"md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800",children:"<Reference/>"})]})})]})})})})};function c(e){let{children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(u,{}),t]})}function d(e){let{data:t,next:n,prev:r}=e;return(0,o.jsx)(c,{children:(0,o.jsx)("div",{className:"container mx-auto lg:max-w-7xl mt-16 py-8",children:(0,o.jsx)("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"})})})}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3899)}),_N_E=e.O()}]);