"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[284],{6836:function(e,t,a){var r=a(6540),n=a(4794);t.A=()=>r.createElement("header",{className:"header"},r.createElement("div",{className:"logo-container"},r.createElement(n.Link,{to:"/"},r.createElement("img",{src:"/lifefocus/tree.png",alt:"Tree Icon",className:"logo"})),r.createElement(n.Link,{to:"/",className:"title"},"Life Focus")),r.createElement("nav",{className:"nav"}))},3895:function(e,t,a){var r=a(6540),n=a(4794),l=a(6836);t.A=e=>{var t;let{children:a}=e;const i=(0,n.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(l.A,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},r.createElement("main",null,a),r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},7528:function(e,t,a){var r=a(6540),n=a(4794);t.A=function(e){var t,a;let{description:l,title:i,children:o}=e;const{site:c}=(0,n.useStaticQuery)("63159454"),s=l||c.siteMetadata.description,m=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?`${i} | ${m}`:i),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:s}),o)}},9430:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var r=a(6540),n=a(4794),l=a(3895),i=a(7528);const o=()=>r.createElement(i.A,{title:"Using SSR"});t.default=e=>{let{serverData:t}=e;return r.createElement(l.A,null,r.createElement("h1",null,"This page is ",r.createElement("b",null,"rendered server-side")),r.createElement("p",null,"This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from"," ",r.createElement("code",null,"dog.ceo/api/breed/shiba/images/random"),":"),r.createElement("img",{style:{width:"320px",borderRadius:"var(--border-radius)"},alt:"A random dog",src:t.message}),r.createElement("p",null,"To learn more, head over to our"," ",r.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/"},"documentation about Server Side Rendering"),"."),r.createElement(n.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-using-ssr-js-3dab741e019886dace9d.js.map