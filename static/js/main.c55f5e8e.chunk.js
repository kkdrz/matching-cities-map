(this["webpackJsonpmatching-cities-map"]=this["webpackJsonpmatching-cities-map"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(26),i=n.n(o),a=(n(34),n(15)),s=(n(35),n(14)),l=n(0),j=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("p",{children:["Je\u017celi aplikacja si\u0119 zaci\u0119\u0142a, oznacza to, \u017ce znaleziono bardzo du\u017co miejscowo\u015bci i renderowanie tego mo\u017ce troch\u0119 potrwa\u0107.",Object(l.jsx)("br",{}),"Mo\u017cesz poczeka\u0107 lub spr\xf3bowa\u0107 innego wzorca ;)",Object(l.jsx)("br",{}),"Nie, nie ma tu backendu."]}),Object(l.jsxs)("p",{children:["Dane miejscowo\u015bci pochodz\u0105 z"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.geoportal.gov.pl/dane/panstwowy-rejestr-nazw-geograficznych",children:"PRNG"}),". ","Model mapy pobrano z"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://gadm.org/download_country_v3.html",children:"GADM"})," ","i wyrenderowano za pomoc\u0105"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/zcreativelabs/react-simple-maps",children:"react-simple-maps"}),"."]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Konrad Drozd 2021"})," -"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://kdrozd.pl",children:"kdrozd.pl"})]})]})};var d=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),i=Object(a.a)(o,2),d=i[0],h=i[1],b=Object(r.useState)(!1),u=Object(a.a)(b,2),p=u[0],O=u[1],g=Object(r.useState)(""),x=Object(a.a)(g,2),f=x[0],m=x[1],z=Object(r.useState)(!1),w=Object(a.a)(z,2),v=w[0],y=w[1];function k(e){return!!e&&e.length>1}return Object(r.useEffect)((function(){y(!0),fetch("/cities.json").then((function(e){return e.json()})).then((function(e){c(e),y(!1),console.log("JSON file loaded")}))}),[]),Object(r.useEffect)((function(){y(!0);var e=setTimeout((function(){if(!k(f))return h([]),void y(!1);var e=function(e){return e.name.toLowerCase().includes(f)};if(p){var t=new RegExp(f,"i");e=function(e){return t.test(e.name.toLowerCase())}}var r=n.filter(e);console.log("Found "+r.length+" places"),y(!1),h(r.length>4e4?[]:r)}),1e3);return function(){y(!1),clearTimeout(e)}}),[n,f,p]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("label",{children:["Wzorzec:",Object(l.jsx)("input",{type:"text",minLength:2,value:f,onChange:function(e){return m(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",value:p,onClick:function(e){return O(e.target.value)}}),"Regex"]}),Object(l.jsx)("div",{style:{textAlign:"center"},hidden:!v,children:Object(l.jsx)("h1",{children:"\u0141adowanie..."})}),Object(l.jsx)("div",{style:{textAlign:"center"},hidden:k(f),children:Object(l.jsx)("h1",{children:"Podany wzorzec jest za kr\xf3tki"})}),Object(l.jsx)("div",{style:{textAlign:"center"},hidden:d.length<4e4,children:Object(l.jsxs)("h1",{children:["Podany wzorzec pasuje do zbyt du\u017cej liczby miast (",d.length,")",Object(l.jsx)("br",{}),"- wywali przegl\u0105dark\u0119"]})}),Object(l.jsxs)("div",{style:{textAlign:"center"},hidden:v||!k(f),children:[Object(l.jsxs)("h1",{children:[f," ",p?"(regex)":""]}),Object(l.jsxs)("h2",{children:[" Znaleziono "+d.length+(1===d.length?" miejscowo\u015b\u0107.":" miejscowo\u015bci.")," "]})]}),Object(l.jsx)("div",{hidden:v,children:Object(l.jsx)(s.ComposableMap,{height:400,width:1200,children:Object(l.jsxs)(s.ZoomableGroup,{minZoom:20,maxZoom:20,zoom:20,center:[19.1343786,51.9189046],children:[Object(l.jsx)(s.Geographies,{geography:"/gadm36_POL_1.json",children:function(e){return e.geographies.map((function(e){return Object(l.jsx)(s.Geography,{geography:e,fill:"#ddd"},e.rsmKey)}))}}),d.map((function(e,t){return Object(l.jsx)(s.Marker,{coordinates:[e.Y,e.X],fill:"#777",children:Object(l.jsx)("circle",{r:.1,fill:"#F53"})},t)}))]})})}),Object(l.jsx)(j,{})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c55f5e8e.chunk.js.map