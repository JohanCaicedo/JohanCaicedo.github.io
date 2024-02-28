"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[897],{7221:function(e,t,n){n.d(t,{d:function(){return g},O:function(){return x}});var r=n(6540),o=n(4194),i=n(2532),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};var c={skeleton:"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};function l(e){var t=e.width,n=void 0===t?"100%":t,o=e.height,i=void 0===o?"1em":o,l=e.background,s=void 0===l?"#E9ECEF":l,u=e.radius,f=void 0===u?"4px":u,d=e.circle,p=void 0!==d&&d,m=e.block,v=void 0===m||m,y=e.style,h=void 0===y?{}:y,b=e.as,g=void 0===b?"div":b;return r.createElement(g,{className:c.skeleton,style:a({width:n,height:i,background:s,borderRadius:p?"50%":f,display:v?"block":"inline-block"},h)},"‌")}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var s=n(211),u="style-module--Banner--d401d",f="style-module--Card--c661d",d="style-module--Category--eeb92",p="style-module--DescriptionWrapper--5f867",m="style-module--Details--5ba4b",v="style-module--Image--43f10",y="style-module--ImageWrapper--50300",h="style-module--ReadingTime--a0392",b="style-module--Title--de70d";function g(e){const{globalState:t}=(0,s.QN)(),n=t.theme===s.Sx.Dark,a=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),c=r.createElement("article",{className:f,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:u},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:y,imgClassName:v,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:p},r.createElement("span",{className:d},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:b},e.data.title),r.createElement("div",{className:m},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(l=e.data.publishedAt).getMonth()]+" "+l.getDate()+", "+l.getFullYear(),e.data.readingTime&&r.createElement("span",{className:h},e.data.readingTime))));var l;return a?r.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},c):r.createElement(o.Link,{to:e.data.link,title:e.data.title},c)}function x(){const{globalState:e}=(0,s.QN)(),t=e.theme===s.Sx.Dark;return r.createElement("div",{className:f,style:t?{border:"0.125rem solid var(--primary-color)"}:void 0},r.createElement("div",{className:p},r.createElement(l,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),r.createElement(l,{style:{height:"4rem",background:"var(--tertiary-color)"}}),r.createElement(l,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},46:function(e,t,n){n.d(t,{$:function(){return c},V:function(){return a}});var r=n(6540),o=n(4194),i="style-module--Button--82b1f";let a=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function c(e){if(e.type===a.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(o.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===a.BUTTON||e.type===a.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},871:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(6540),o="style-module--ContentWrapper --36dde",i="style-module--Heading--2c002",a="style-module--Section--1d871";function c(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:a},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:i},e.heading),e.children))}},3783:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(6540),o="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},897:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(3514);var r=n(4506),o=n(6540),i=n(2386),a=n(871),c=n(3420),l=n(3783),s=n(7221),u=n(46),f="style-module--Filter--31377",d="style-module--Listing--52eca",p="style-module--LoadMore--8b4c0",m="style-module--Option--83bb9",v="style-module--Options--3515b",y="style-module--Selected--f3165",h=n(7563);function b(e){var t;const n=e.pageContext.articles,[b,g]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(n)),[x,E]=o.useState(9);let w=[];const k=-1!==b.map((e=>e.selected)).indexOf(!0);k&&(w=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t)));const O=null!==(t=(0,h.t)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return o.createElement(o.Fragment,null,o.createElement(c.G,{title:"All "+O,useTitleTemplate:!0}),o.createElement(i.Y,null,o.createElement(a.w,{anchor:"articleListing",heading:O},o.createElement("div",{className:f},"Select categories to filter ",O.toLocaleLowerCase(),o.createElement(l.A,{additionalClasses:[v]},b.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.A)(b),n=t.map((e=>e.label)).indexOf(e);t[n].selected=!t[n].selected,g(t)}(e.label),className:[m,!0===e.selected?y:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:d},n.filter((e=>!k||w.includes(e.id))).slice(0,x).map(((e,t)=>o.createElement(s.d,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),k&&w.length>x||!k&&n.length>x?o.createElement("div",{className:p},o.createElement(u.$,{type:u.V.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const n=x+3;(t&&t>=n||!t&&e>=n)&&E(n)}(n.length,k?w.length:void 0)})):null)))}},7563:function(e,t,n){function r(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const n={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const o in r){const t=new RegExp(o+"$","i"),n=r[o];if(t.test(e))return e.replace(t,n)}for(const o in n){const t=new RegExp(o,"i");if(t.test(e))return e.replace(t,n[o])}return e}n.d(t,{t:function(){return r}})},9306:function(e,t,n){var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},6469:function(e,t,n){var r=n(8227),o=n(2360),i=n(4913).f,a=r("unscopables"),c=Array.prototype;void 0===c[a]&&i(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},8551:function(e,t,n){var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},9617:function(e,t,n){var r=n(5397),o=n(5610),i=n(6198),a=function(e){return function(t,n,a){var c=r(t),l=i(c);if(0===l)return!e&&-1;var s,u=o(a,l);if(e&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4576:function(e,t,n){var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},9433:function(e,t,n){var r=n(4475),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(4475),o=n(34),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,o,i=n(4475),a=n(9392),c=i.process,l=i.Deno,s=c&&c.versions||l&&l.version,u=s&&s.v8;u&&(o=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},9504:function(e,t,n){var r=n(616),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),o=n(4901);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},5966:function(e,t,n){var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),o=n(9039),i=n(4576),a=Object,c=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?c(e,""):a(e)}:a},4901:function(e){var t="object"==typeof document&&document.all;e.exports=void 0===t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},4117:function(e){e.exports=function(e){return null==e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8776:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),o=n(4901),i=n(1625),a=n(7040),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,c(e))}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2360:function(e,t,n){var r,o=n(8551),i=n(6801),a=n(8727),c=n(421),l=n(397),s=n(4055),u=n(6119),f="prototype",d="script",p=u("IE_PROTO"),m=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?y(r):(t=s("iframe"),n="java"+d+":",t.style.display="none",l.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete h[f][a[o]];return h()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[p]=e):n=h(),void 0===t?n:i.f(n,t)}},6801:function(e,t,n){var r=n(3724),o=n(8686),i=n(4913),a=n(8551),c=n(5397),l=n(1072);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),o=l(t),s=o.length,u=0;s>u;)i.f(e,n=o[u++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),o=n(5917),i=n(8686),a=n(8551),c=n(6969),l=TypeError,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=u(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),o=n(9297),i=n(5397),a=n(9617).indexOf,c=n(421),l=r([].push);e.exports=function(e,t){var n,r=i(e),s=0,u=[];for(n in r)!o(c,n)&&o(r,n)&&l(u,n);for(;t.length>s;)o(r,n=t[s++])&&(~a(u,n)||l(u,n));return u}},1072:function(e,t,n){var r=n(1828),o=n(8727);e.exports=Object.keys||function(e){return r(e,o)}},4270:function(e,t,n){var r=n(9565),o=n(4901),i=n(34),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!i(c=r(n,e)))return c;if(o(n=e.valueOf)&&!i(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!i(c=r(n,e)))return c;throw new a("Can't convert object to primitive value")}},7750:function(e,t,n){var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},6119:function(e,t,n){var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){var r=n(8776),o=n(4475),i=n(9433),a="__core-js_shared__",c=e.exports=o[a]||i(a,{});(c.versions||(c.versions=[])).push({version:"3.36.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(7388),o=n(9039),i=n(4475).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5397:function(e,t,n){var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){var r=n(9565),o=n(34),i=n(757),a=n(5966),c=n(4270),l=n(8227),s=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},6969:function(e,t,n){var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8227:function(e,t,n){var r=n(4475),o=n(5745),i=n(9297),a=n(3392),c=n(4495),l=n(7040),s=r.Symbol,u=o("wks"),f=l?s.for||s:s&&s.withoutSetter||a;e.exports=function(e){return i(u,e)||(u[e]=c&&i(s,e)?s[e]:f("Symbol."+e)),u[e]}},3514:function(e,t,n){n(6469)("flat")}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-7f7dd86449fa94be223e.js.map