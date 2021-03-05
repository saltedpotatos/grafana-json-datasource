(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-fields-f58f4f8061d96ebfbe5ec1d4d038382c.png"},125:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-path-e0ae42b2a224e021260032b6ef7decab.png"},126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-params-38ee277b9e4933d64b5bef7a544d626b.png"},127:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-headers-ec374ed9d6de475ce39800bb051c473a.png"},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-body-ad8dc6437ce714c17f96967631c4419d.png"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(86)),o={id:"query-editor",title:"Query editor"},s={unversionedId:"query-editor",id:"query-editor",isDocsHomePage:!1,title:"Query editor",description:"This page explains the what each part of the query editor does, and how you can configure it.",source:"@site/docs/query-editor.md",slug:"/query-editor",permalink:"/grafana-json-datasource/query-editor",editUrl:"https://github.com/marcusolsson/grafana-json-datasource/edit/main/website/docs/query-editor.md",version:"current",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/grafana-json-datasource/configuration"},next:{title:"Variables",permalink:"/grafana-json-datasource/variables"}},c=[{value:"Fields",id:"fields",children:[]},{value:"Path",id:"path",children:[]},{value:"Params",id:"params",children:[]},{value:"Headers",id:"headers",children:[]},{value:"Body",id:"body",children:[]},{value:"Cache time",id:"cache-time",children:[]}],b={toc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page explains the what each part of the query editor does, and how you can configure it."),Object(i.b)("p",null,"The query editor for the JSON API data source consists of a number of tabs. Each tab configures a part of the query."),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Fields",src:a(124).default})),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Fields")," tab is where you select the data to extract from the JSON document returned by the URL configured in the data source configuration."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Field")," must contain a valid ",Object(i.b)("a",{parentName:"p",href:"/grafana-json-datasource/jsonpath"},"JSONPath")," expression and can return one or more elements.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Type")," defines the JSON type of the elements returned by the ",Object(i.b)("strong",{parentName:"p"},"Field")," expression. By default, Grafana uses the types in the JSON document. If ",Object(i.b)("strong",{parentName:"p"},"Type")," is set to a different type than the original property type, Grafana tries to parse the value."),Object(i.b)("p",{parentName:"li"},"This can be useful in cases where the API returns quoted numbers, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'"price": "3.49"'),"."))),Object(i.b)("h4",{id:"fields-have-different-lengths"},Object(i.b)("inlineCode",{parentName:"h4"},"Fields have different lengths")),Object(i.b)("p",null,"All fields must return the same number of values. If you get this error it means that one or more of the objects are missing the queried element."),Object(i.b)("p",null,"In the following example, the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," property is present in both objects, but ",Object(i.b)("inlineCode",{parentName:"p"},"version")," isn't."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    {\n      "name": "order-api",\n      "version": "1"\n    },\n    {\n      "name": "billing-api"\n    }\n  ]\n}\n')),Object(i.b)("p",null,"In the example below, you can see a couple of expressions and their results for the JSON structure in the previous example. Since JSONPath expressions are evaluated individually, Grafana can't tell which version that was missing."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Expression"),Object(i.b)("th",{parentName:"tr",align:null},"Result"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"$.services[*].name")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},'["order-api", "billing-api"]'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"$.services[*].version")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},'["1"]'))))),Object(i.b)("p",null,"Depending on your use case, you can use a filter expression to only return items that contain a version:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"$.services[?(@.version)].name\n")),Object(i.b)("h3",{id:"path"},"Path"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Path",src:a(125).default})),Object(i.b)("p",null,"The drop-down box to the left lets you configure the ",Object(i.b)("strong",{parentName:"p"},"HTTP method")," of the request sent to the URL and can be set to ",Object(i.b)("strong",{parentName:"p"},"GET")," and ",Object(i.b)("strong",{parentName:"p"},"POST"),"."),Object(i.b)("p",null,"The text box lets you append a path to the URL in the data source configuration. This can be used to dynamically change the request URL using ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(i.b)("p",null,"For example, by setting the path to ",Object(i.b)("inlineCode",{parentName:"p"},"/movies/${movie}/summary")," you can query the summary for any movie without having to change the query itself."),Object(i.b)("h3",{id:"params"},"Params"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Params",src:a(126).default})),Object(i.b)("p",null,"Add any parameters you'd like to send as part of the query string. For example, the parameters in the screenshot gets encoded as ",Object(i.b)("inlineCode",{parentName:"p"},"?category=movies"),"."),Object(i.b)("p",null,"Both the ",Object(i.b)("strong",{parentName:"p"},"Key")," and ",Object(i.b)("strong",{parentName:"p"},"Value")," fields support ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Any query parameters that have been set by the administrator in the data source configuration has higher priority and overrides the parameters set by the query."))),Object(i.b)("h3",{id:"headers"},"Headers"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Headers",src:a(127).default})),Object(i.b)("p",null,"Add any parameters you'd like to send as HTTP headers."),Object(i.b)("p",null,"Both the ",Object(i.b)("strong",{parentName:"p"},"Key")," and ",Object(i.b)("strong",{parentName:"p"},"Value")," fields support ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(i.b)("h3",{id:"body"},"Body"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Body",src:a(128).default})),Object(i.b)("p",null,"Sets the text to send as a request body."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Syntax highlighting")," sets the active syntax for the editor. This is only for visual purposes and doesn't change the actual request.")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Due to limitations in modern browsers, Grafana ignores the request body if the HTTP method is set to GET."))),Object(i.b)("h3",{id:"cache-time"},"Cache time"),Object(i.b)("p",null,"By default, Grafana caches the JSON document returned by the last request to avoid hitting rate limits while configuring your query. Once you're happy with your query, consider setting the cache time to ",Object(i.b)("strong",{parentName:"p"},"0s")," to disable caching."))}l.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,s(s({ref:t},b),{},{components:a})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);