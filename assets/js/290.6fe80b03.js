(self.webpackChunkeasyexcel=self.webpackChunkeasyexcel||[]).push([[290],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9649:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),o=n(3366),a=n(7294),c=n(6010),l=n(5999),i=n(6668),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"];function m(e){var t=e.as,n=e.id,m=(0,o.Z)(e,p),d=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,r.Z)({},m,{className:(0,c.Z)("anchor",d?u:s),id:n}),m.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,r.Z)({},m,{id:void 0}))}},5290:function(e,t,n){"use strict";n.d(t,{Z:function(){return de}});var r=n(7294),o=n(3905),a=n(7462),c=n(3366),l=n(5742),i=["mdxType","originalType"];var s=n(2389),u=n(6010),p=n(2949),m=n(6668);function d(){var e=(0,m.L)().prism,t=(0,p.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(7099),y=n(7594),g=n.n(y),h=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),v=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=b[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&v.test(a)){var c=a.match(v).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=o[0].className,i=g()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,o),u=n.split("\n"),p=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),d=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),y=0;y<u.length;){var h=u[y].match(s);if(h){var E=h.slice(1).find((function(e){return void 0!==e}));m[E]?p[m[E]].range+=y+",":d[E]?p[d[E]].start=y:f[E]&&(p[f[E]].range+=p[f[E]].start+"-"+(y-1)+","),u.splice(y,1)}else y+=1}n=u.join("\n");var N={};return Object.entries(p).forEach((function(e){var t=e[0],n=e[1].range;g()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var N=n(5281),j="codeBlockContainer_MPoW",B=["as"];function C(e){var t=e.as,n=(0,c.Z)(e,B),o=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(d());return r.createElement(t,(0,a.Z)({},n,{style:o,className:(0,u.Z)(n.className,j,N.k.common.codeBlock)}))}var O={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function w(e){var t=e.children,n=e.className;return r.createElement(C,{as:"pre",tabIndex:0,className:(0,u.Z)(O.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:O.codeBlockLines},t))}var T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Z={Prism:n(7410).default,theme:T};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var P=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},_=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=x({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=x({},n,{backgroundColor:null}),o};function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var D=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),L(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=x({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?x({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),L(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),L(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=x({},A(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?x({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),L(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=_(u,p.type),p.alias&&(u=_(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(P),d=m.length;l.push({types:u,content:m[0]});for(var f=1;f<d;f++)S(l),i.push(l=[]),l.push({types:u,content:m[f]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return S(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),z=D,R="codeLine_rqGN",M="codeLineNumber_hzTh",W="codeLineContent_hM6e";function H(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,c=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=c({line:t,className:(0,u.Z)(n,o&&R)}),s=t.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},l({token:e,key:t})))}));return r.createElement("span",i,o?r.createElement(r.Fragment,null,r.createElement("span",{className:M}),r.createElement("span",{className:W},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var V=n(5999),F={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function G(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),a=o[0],c=o[1],l=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,F.copyButton,a&&F.copyButtonCopied),onClick:i},r.createElement("span",{className:F.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:F.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:F.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var q="wordWrapButtonIcon_azs1",$="wordWrapButtonEnabled_Geot";function X(e){var t=e.className,n=e.onClick,o=e.isEnabled,a=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,o&&$),"aria-label":a,title:a},r.createElement("svg",{className:q,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Y(e){var t,n,o,c,l,i,s,p,f,y,g,v=e.children,b=e.className,k=void 0===b?"":b,N=e.metastring,j=e.title,B=e.showLineNumbers,w=e.language,T=(0,m.L)().prism,L=T.defaultLanguage,x=T.magicComments,P=null!=(t=null!=w?w:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,S=d(),_=(o=(0,r.useState)(!1),c=o[0],l=o[1],i=(0,r.useState)(!1),s=i[0],p=i[1],f=(0,r.useRef)(null),y=(0,r.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",l((function(e){return!e}))}),[f,c]),g=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");p(t)}),[f]),(0,r.useEffect)((function(){g()}),[c,g]),(0,r.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:s,toggle:y}),I=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(h))?void 0:n.groups.title)?t:""}(N)||j,A=E(v,{metastring:N,language:P,magicComments:x}),D=A.lineClassNames,R=A.code,M=B||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(N);return r.createElement(C,{as:"div",className:(0,u.Z)(k,P&&!k.includes("language-"+P)&&"language-"+P)},I&&r.createElement("div",{className:O.codeBlockTitle},I),r.createElement("div",{className:O.codeBlockContent},r.createElement(z,(0,a.Z)({},Z,{theme:S,code:R,language:null!=P?P:"text"}),(function(e){var t=e.className,n=e.tokens,o=e.getLineProps,a=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,u.Z)(t,O.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(O.codeBlockLines,M&&O.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(H,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:D[t],showLineNumbers:M})}))))})),r.createElement("div",{className:O.buttonGroup},(_.isEnabled||_.isCodeScrollable)&&r.createElement(X,{className:O.codeButton,onClick:function(){return _.toggle()},isEnabled:_.isEnabled}),r.createElement(G,{className:O.codeButton,code:R}))))}var Q=["children"];function U(e){var t=e.children,n=(0,c.Z)(e,Q),o=(0,s.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?Y:w;return r.createElement(i,(0,a.Z)({key:String(o)},n),l)}var J=n(9960);var K=n(6043),ee="details_lb9f",te="isBrowser_bmU9",ne="collapsibleContent_i85q",re=["summary","children"];function oe(e){return!!e&&("SUMMARY"===e.tagName||oe(e.parentElement))}function ae(e,t){return!!e&&(e===t||ae(e.parentElement,t))}function ce(e){var t=e.summary,n=e.children,o=(0,c.Z)(e,re),a=(0,s.Z)(),l=(0,r.useRef)(null),i=(0,K.u)({initialState:!o.open}),p=i.collapsed,m=i.setCollapsed,d=(0,r.useState)(o.open),f=d[0],y=d[1];return r.createElement("details",Object.assign({},o,{ref:l,open:f,"data-collapsed":p,className:(0,u.Z)(ee,a&&te,o.className),onMouseDown:function(e){oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;oe(t)&&ae(t,l.current)&&(e.preventDefault(),p?(m(!1),y(!0)):m(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(K.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),y(!e)}},r.createElement("div",{className:ne},n)))}var le="details_BAp3";function ie(e){var t=Object.assign({},e);return r.createElement(ce,(0,a.Z)({},t,{className:(0,u.Z)("alert alert--info",le,t.className)}))}var se=n(9649);function ue(e){return r.createElement(se.Z,e)}var pe="img_E7b_";var me={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var o=e.props,a=(o.mdxType,o.originalType,(0,c.Z)(o,i));return r.createElement(e.props.originalType,a)}return e}(e)}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(U,e)},a:function(e){return r.createElement(J.Z,e)},pre:function(e){var t;return r.createElement(U,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ie,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,pe))}));var t},h1:function(e){return r.createElement(ue,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ue,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ue,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ue,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ue,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ue,(0,a.Z)({as:"h6"},e))}};function de(e){var t=e.children;return r.createElement(o.Zo,{components:me},t)}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);