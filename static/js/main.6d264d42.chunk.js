(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o,c=n(7),s=n.n(c),i=n(6),r=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.noSort="",t.ByLength="length",t.Alphabetically="alphabetically"}(o||(o={}));var j=function(){var t=Object(a.useState)(o.noSort),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],p=l[1],d=function(t,e,n){if(e===o.noSort&&!n)return t;var c=Object(r.a)(t);return e!==o.ByLength&&e!==o.Alphabetically||c.sort((function(t,n){switch(e){case o.ByLength:return t.length-n.length;case o.Alphabetically:return t.localeCompare(n);default:throw new Error("The parameter of sort does not exist")}})),n&&c.reverse(),c}(h,n,j),g=n||j,y=function(t){c(t)};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":o.Alphabetically!==n}),onClick:function(){return y(o.Alphabetically)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":o.ByLength!==n}),onClick:function(){return y(o.ByLength)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){p(!j)},children:"Reverse"}),g&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(o.noSort),p(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6d264d42.chunk.js.map