(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(17),l=n.n(r),i=(n(24),n(6));var s=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var b=n(9),o=n.n(b),d=n(0),j=function(e){e.onPageChange;var t=e.len,n=e.pageSize,a=e.currPage,c=Math.ceil(t/n),r=o.a.range(1,c+1);return 1===c?null:Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{class:"pagination",children:r.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.onPageChange(t)},className:t===a?"page-item active":"page-item",children:Object(d.jsx)("a",{class:"page-link",children:t})},t)}))})})};var u=function(){var e=Object(a.useState)(s),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(4),b=Object(i.a)(l,2),u=b[0],m=(b[1],Object(a.useState)(1)),h=Object(i.a)(m,2),f=h[0],O=h[1],x=function(e,t,n){var a=(t-1)*n;return o()(e).slice(a).take(n).value()}(n,f,u);function g(){return n.length}return 0===g()?Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"There are no Movies in the data Base"})}):Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsxs)("p",{className:"m-2",style:{fontStyle:"Bold"},children:["There are ",g()," movies in the database"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Genre"}),Object(d.jsx)("th",{children:"Stock"}),Object(d.jsx)("th",{children:"Rate"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:x.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.genre.name}),Object(d.jsx)("td",{children:e.numberInStock}),Object(d.jsx)("td",{children:e.dailyRentalRate}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){!function(e){var t=n.filter((function(t){return t._id!==e._id}));r(t)}(e)},className:"btn btn-danger",children:"Delete"})})]},e._id)}))})]}),Object(d.jsx)(j,{currPage:f,onPageChange:function(e){O(e)},len:n.length,pageSize:u})]})},m=n(14),h=n(35),f=function(){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)(m.a,{className:"navbar-brand mr-5",style:{fontSize:35,fontWeight:"bold"},to:"#",children:"Vivly"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("nav",{className:"navbar-nav mr-auto",children:[Object(d.jsxs)(h.a,{className:"nav-link",to:"/movies",children:["Home",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(d.jsx)(h.a,{className:"nav-link",to:"/Rentals",children:"Rentals"}),Object(d.jsx)(h.a,{className:"nav-link",to:"/Customers",children:"Customers"}),Object(d.jsx)(h.a,{className:"nav-link",to:"/login",children:"Login"})]})]})},O=function(){return Object(d.jsx)("h1",{children:"Customers"})},x=function(){return Object(d.jsx)("h1",{children:"Rentals"})},g=n(38),v=n(19),p=n(36),y=function(){return Object(d.jsx)("h1",{children:"Not Found"})},S=n(15),R=n(18),k=n(7),C=n(8),N=n.n(C),_=function(e){var t=e.name,n=e.label,a=e.onChange,c=e.value,r=e.type,l=e.error;return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",children:n}),Object(d.jsx)("input",{name:t,onChange:a,value:c,type:r,className:"form-control",id:t}),l&&Object(d.jsx)("div",{className:"alert alert-danger",children:l})]})},T=function(){var e={username:N.a.string().required().label("Username"),password:N.a.string().required().label("Password")},t=Object(a.useState)({username:"",password:""}),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)({}),s=Object(i.a)(l,2),b=s[0],o=s[1],j=function(){var t=N.a.validate(c,e,{abortEarly:!1});if(!t.error)return null;var n,a={},r=Object(R.a)(t.error.details);try{for(r.s();!(n=r.n()).done;){var l=n.value;a[l.path[0]]=l.message}}catch(i){r.e(i)}finally{r.f()}return a},u=function(t){var n=t.currentTarget,a=Object(S.a)({},b),l=Object(S.a)({},c),i=function(t){var n=t.name,a=t.value,c=Object(k.a)({},n,a),r=Object(k.a)({},n,e[n]),l=N.a.validate(c,r).error;return l?l.details[0].message:null}(n);i?a[n.name]=i:delete a[n.name],l[n.name]=n.value,r(l),o(a),console.log(b)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"mb-5 mt-1",style:{fontFamily:"Arial, Helvetica, sans-serif"},children:"Login"}),Object(d.jsxs)("form",{onSubmit:function(e){var t={};null===(t=j(e))&&(t={}),o(t),e.preventDefault()},children:[Object(d.jsx)(_,{onChange:u,name:"username",value:c.username,label:"Username",type:"text",error:b.username}),Object(d.jsx)(_,{onChange:u,name:"password",value:c.password,label:"Password",type:"password",error:b.password}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{disabled:j(),className:"btn btn-primary mt-2",children:"Login"})})]})]})};var I=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)("main",{className:"container",children:Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{path:"/Login",component:T}),Object(d.jsx)(v.a,{path:"/Customers",component:O}),Object(d.jsx)(v.a,{path:"/Rentals",component:x}),Object(d.jsx)(v.a,{path:"/not-found",component:y}),Object(d.jsx)(v.a,{path:"/movies",component:u}),Object(d.jsx)(v.a,{path:"/login",component:T}),Object(d.jsx)(p.a,{exact:!0,from:"/",to:"/movies"}),Object(d.jsx)(p.a,{exact:!0,to:"/not-found"})]})})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))},F=(n(31),n(37));l.a.render(Object(d.jsx)(F.a,{children:Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(I,{})})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.0c9d0ffd.chunk.js.map