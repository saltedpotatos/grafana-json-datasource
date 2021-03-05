(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(86)),i={id:"jsonpath",title:"JSONPath"},c={unversionedId:"jsonpath",id:"jsonpath",isDocsHomePage:!1,title:"JSONPath",description:"JSONPath is a query language for JSON structures.",source:"@site/docs/jsonpath.md",slug:"/jsonpath",permalink:"/grafana-json-datasource/jsonpath",editUrl:"https://github.com/marcusolsson/grafana-json-datasource/edit/main/website/docs/jsonpath.md",version:"current",sidebar:"someSidebar",previous:{title:"Macros",permalink:"/grafana-json-datasource/macros"}},l=[{value:"Filters",id:"filters",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://goessner.net/articles/JsonPath/"},"JSONPath")," is a query language for JSON structures."),Object(o.b)("p",null,"For example, to query the titles of all the books in a store:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"$.store.book[*].title\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$")," selects the root element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".")," selects a child of the current element"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"*")," selects all elements within an object or array")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"JSONPath Plus")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The JSON API data source uses the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsonpath-plus"},"JSONPath Plus")," package to evaluate JSONPath expressions. JSONPath Plus extends the original specification with additional features."),Object(o.b)("p",{parentName:"div"},"For more information on the supported syntax, refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/JSONPath-Plus/JSONPath"},"project page"),"."))),Object(o.b)("h2",{id:"filters"},"Filters"),Object(o.b)("p",null,"Filters let you query elements based on a logical expression."),Object(o.b)("p",null,"For example, to query the titles of the books that cost more than 10:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"$.store.book[?(@.price > 10)].title\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"?()")," defines a filter expression"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@")," selects the element that's currently being processed")),Object(o.b)("p",null,"Filter expressions support a set of boolean and logical operations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Boolean operations: ",Object(o.b)("inlineCode",{parentName:"li"},"!"),", ",Object(o.b)("inlineCode",{parentName:"li"},"&&"),", ",Object(o.b)("inlineCode",{parentName:"li"},"||")),Object(o.b)("li",{parentName:"ul"},"Comparison: ",Object(o.b)("inlineCode",{parentName:"li"},">"),", ",Object(o.b)("inlineCode",{parentName:"li"},"<"),", ",Object(o.b)("inlineCode",{parentName:"li"},">="),", ",Object(o.b)("inlineCode",{parentName:"li"},"<=")),Object(o.b)("li",{parentName:"ul"},"Equality: ",Object(o.b)("inlineCode",{parentName:"li"},"=="),", ",Object(o.b)("inlineCode",{parentName:"li"},"!="))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"$.store.book[?(@.price < 10)]            // Books that are cheaper than 10\n$.store.book[?(@.category == 'fiction')] // Books that have the fiction category\n$.store.book[?(@.isbn)]                  // Books that have a ISBN number\n\n$.store.book[?(@.price < 10 && @.category == 'fiction')] // Cheap fiction books\n")))}p.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);