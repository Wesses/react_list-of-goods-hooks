(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),r=n.n(o),c=n(6),i=n(8),l=n(1),a=n(4),u=n.n(a),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.noSort="",t.leng="leng",t.alph="alph"}(s||(s={}));var j=function(){var t=Object(l.useState)(s.noSort),e=Object(c.a)(t,2),n=e[0],o=e[1],r=Object(l.useState)(!1),a=Object(c.a)(r,2),j=a[0],p=a[1],g=function(t,e){var n=e.sortType,o=e.isReverse;if(""===n&&!o)return t;var r=Object(i.a)(t);return n!==s.leng&&n!==s.alph||r.sort((function(t,e){switch(n){case s.leng:return t.length-e.length;case s.alph:return t.localeCompare(e);default:throw new Error("Unbelievable error")}})),o&&r.reverse(),r}(h,{sortType:n,isReverse:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":s.alph!==n}),onClick:function(){return o(s.alph)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":s.leng!==n}),onClick:function(){return o(s.leng)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){return p(!j)},children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(s.noSort),p(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0e0f24be.chunk.js.map