(this["webpackJsonpfem-tip-calculator"]=this["webpackJsonpfem-tip-calculator"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(9),n(2)),l=(n(10),n(0));function o(e){var t=e.name,n=e.icon,a=e.handleInput,s=Object(c.useState)(),i=Object(r.a)(s,2),o=i[0],u=i[1];return Object(l.jsxs)("div",{className:"NumberInput",children:[Object(l.jsx)("h6",{children:t}),Object(l.jsx)("img",{src:n,alt:"".concat(t,"-icon")}),Object(l.jsx)("input",{type:"number",name:t,value:o,onChange:function(e){u(e.target.value),a(e.target.value)},placeholder:0})]})}n(12);var u=function(e){var t=e.amount,n=e.handleInput;return Object(l.jsx)("div",{className:"TipAmount",children:Object(l.jsxs)("button",{onClick:function(){n(t)},children:[t,"%"]})})};n(13);var j=function(e){var t=e.handleInput,n=Object(c.useState)(),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(!0),u=Object(r.a)(o,2),j=u[0],d=u[1];return Object(l.jsxs)("div",{className:"TipCustom",children:[Object(l.jsx)("button",{onClick:function(){d(!j)},hidden:!j,children:"Custom"}),Object(l.jsx)("input",{type:"number",name:"custom",value:s,placeholder:0,onChange:function(e){i(e.target.value),t(e.target.value)},onClick:function(e){t(e.target.value)},hidden:j})]})};n(14);var d=function(e){var t=e.handleInput;return Object(l.jsxs)("div",{className:"TipInput",children:[Object(l.jsx)("h2",{children:"Select Tip %"}),Object(l.jsxs)("div",{className:"TipInput-container",children:[Object(l.jsx)(u,{amount:5,handleInput:t}),Object(l.jsx)(u,{amount:10,handleInput:t}),Object(l.jsx)(u,{amount:15,handleInput:t}),Object(l.jsx)(u,{amount:25,handleInput:t}),Object(l.jsx)(u,{amount:50,handleInput:t}),Object(l.jsx)(j,{handleInput:t})]})]})},b=n.p+"static/media/logo.3cc0528b.svg",p=n.p+"static/media/icon-dollar.9f9be353.svg",h=n.p+"static/media/icon-person.65bfd204.svg";n(15),n(16);var O=function(e){var t=e.title,n=e.tip,c=e.people,a=(n/c).toFixed(2),s=!isNaN(a)&&c>0?"".concat(a):"0.00";return Object(l.jsxs)("div",{className:"PerPerson",children:[Object(l.jsxs)("div",{className:"PerPerson-title-container",children:[Object(l.jsx)("p",{className:"PerPerson-title",children:t}),Object(l.jsx)("p",{className:"PerPerson-text",children:"/ person"})]}),Object(l.jsxs)("h2",{className:"PerPerson-output",children:["$",s]})]})};n(17);var m=function(e){var t=e.isDisabled,n=e.handleReset;return Object(l.jsx)("button",{className:"ResetButton",onClick:n,disabled:t,children:"Reset"})};var x=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),u=i[0],j=i[1],x=Object(c.useState)(0),f=Object(r.a)(x,2),v=f[0],g=f[1],N=Object(c.useState)(!0),I=Object(r.a)(N,2),C=I[0],P=I[1],S=n*u/100,T=S+Number(n),k=function(e){return function(t){e(t),P(!1)}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("img",{src:b,className:"App-logo",alt:"logo"}),Object(l.jsxs)("div",{className:"App-card",children:[Object(l.jsxs)("div",{className:"App-input",children:[Object(l.jsx)(o,{name:"Bill",icon:p,handleInput:k(a)}),Object(l.jsx)(d,{handleInput:k(j)}),Object(l.jsx)(o,{name:"Number of People",icon:h,handleInput:k(g)})]}),Object(l.jsxs)("div",{className:"App-output",children:[Object(l.jsx)(O,{title:"Tip Amount",tip:S,people:v}),Object(l.jsx)(O,{title:"Total",tip:T,people:v}),Object(l.jsx)(m,{handleReset:function(){window.location.reload()},isDisabled:C})]})]}),Object(l.jsxs)("div",{className:"attribution",children:["Challenge by"," ",Object(l.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",Object(l.jsx)("a",{href:"https://github.com/edgarciavfx",target:"_blank",rel:"noreferrer",children:"edgarciavfx"}),"."]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.0d4a004c.chunk.js.map