(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(8),o=n.n(c),i=n(1),r=(n(6),n(14),n(7)),a=n(4),u=n.n(a);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var l=n(9),b=n(0),j=function(t){var e=function(t,e,n){var c=Object(l.a)(t);return c.sort((function(t,n){switch(e){case s.ALPHABET:return t.localeCompare(n);case s.LENGTH:return t.length-n.length;case s.NONE:default:return 0}})),n&&c.reverse(),c}(t.goods,t.sortType,t.isReversed);return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},d=function(t){var e=t.goods,n=Object(i.useState)(s.NONE),c=Object(r.a)(n,2),o=c[0],a=c[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),h=d[0],N=d[1],O=o!==s.NONE||!1!==h,g=function(t){a(t)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":o!==s.ALPHABET}),onClick:function(){g(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":o!==s.LENGTH}),onClick:function(){g(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!h}),onClick:function(){N((function(t){return!t}))},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){a(s.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)(j,{goods:e,sortType:o,isReversed:h})]})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],N=function(){return Object(b.jsx)("div",{className:"section content",children:Object(b.jsx)(d,{goods:h})})};o.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c0ddcf5.chunk.js.map