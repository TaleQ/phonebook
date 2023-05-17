"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[634],{1217:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var a,r,i,o,d,c,s,l,u,f,x,p,m,g,h,b=t(168),v=t(7691),j=t.p+"static/media/contacts_bg.b5bc7c3dfd22e14ff3fd.jpeg",w=v.default.div(a||(a=(0,b.Z)(["\n  width: 100%;\n  height: 100vh;\n  padding: 15px;\n  background-color: rgb(0 4 13);\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: rgb(17 59 126);\n  font-size: 24px;\n  @media screen and (min-width: 768px) {\n    font-size: 26px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 40px;\n  }\n"])),j),y=v.default.div(r||(r=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 1280px) {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n  }\n"]))),Z=v.default.div(i||(i=(0,b.Z)(["\n  margin: 15px auto;\n"]))),k=t(9439),C=t(2791),z=v.default.div(o||(o=(0,b.Z)(["\n  flex-basis: 290px;\n  margin: 0 auto;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin: 0;\n    flex-basis: 40%;\n  }\n"]))),A=v.default.form(d||(d=(0,b.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.6);\n  border: 1px solid #2160c4;\n"]))),F=v.default.label(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  font-size: 26px;\n"]))),_=v.default.input(s||(s=(0,b.Z)(["\n  width: 70%;\n  margin-top: 5px;\n  margin-left: 5px;\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    margin-left: 10px;\n  }\n"]))),I=v.default.button(l||(l=(0,b.Z)(["\n  width: 200px;\n  margin: 0 auto;\n  padding: 10px;\n  background-color: #2160c4;\n  border: 1px solid transparent;\n  color: #ffffff;\n  &:hover {\n    box-shadow: 8px 8px 24px -7px rgba(28, 33, 141, 1);\n  }\n"]))),E=t(9434),N=t(3634),S=t(1775),L=t(1686),T=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var a=63&t[n];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},B=t(3329),U=function(){var n=(0,C.useState)(""),e=(0,k.Z)(n,2),t=e[0],a=e[1],r=(0,C.useState)(""),i=(0,k.Z)(r,2),o=i[0],d=i[1],c=(0,E.I0)(),s=(0,E.v9)(S.l.selectContacts),l=function(){a(""),d("")},u=T(),f=T();return(0,B.jsx)(z,{children:(0,B.jsxs)(A,{onSubmit:function(n){if(n.preventDefault(),s.some((function(n){return n.name===t})))return L.Confirm.show("".concat(t," is already in contacts"),"Would you like to update this contact's number?","Yes","No",(function(){var n=s.findIndex((function(n){return n.name===t})),e={id:s[n].id,name:s[n].name,number:o};c((0,N.Tk)(e))}),(function(){}),{titleColor:"rgb(17 59 126)",okButtonBackground:"rgb(17 59 126)"}),void l();c((0,N.uK)({name:t,number:o})),l()},children:[(0,B.jsxs)(F,{htmlFor:u,children:["Name",(0,B.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:function(n){a(n.target.value)},id:u,required:!0})]}),(0,B.jsxs)(F,{htmlFor:f,children:["Number",(0,B.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:f,value:o,onChange:function(n){d(n.target.value)},required:!0})]}),(0,B.jsx)(I,{type:"submit",children:"Add contact".toUpperCase()})]})})},q=t(4217),D=v.default.label(u||(u=(0,b.Z)(["\n  text-align: center;\n"]))),K=v.default.input(f||(f=(0,b.Z)(["\n  width: 70%;\n"]))),P=t(4808),V=function(){var n=(0,E.v9)(S.l.selectFilterValue),e=(0,E.I0)(),t=T();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(D,{htmlFor:t,children:"Find contacts by name"}),(0,B.jsx)(K,{type:"text",id:t,onChange:function(n){var t=n.target.value.toLowerCase();e((0,P.c)(t))},value:n})]})},G=v.default.ul(x||(x=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),J=v.default.li(p||(p=(0,b.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 26px;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),M=v.default.button(m||(m=(0,b.Z)(["\n  width: 65px;\n  background-color: #ffffff;\n  border: 1px solid #2160c4;\n  color: #2160c4;\n  font-size: 16px;\n  &:active {\n    background-color: #2160c4;\n    color: #ffffff;\n  }\n"]))),R=t(3044),W=function(){var n=(0,E.v9)(S.l.selectFiltredContacts),e=(0,E.I0)(),t=function(n){e((0,N.GK)(n.target.id))};return n.map((function(n){return(0,B.jsxs)(J,{children:[(0,B.jsx)(R.Z,{sx:{bgcolor:"#3A526A"}}),(0,B.jsx)("span",{children:n.name}),(0,B.jsx)("span",{children:n.number}),(0,B.jsx)(M,{id:n.id,onClick:t,children:"Delete"})]},n.id)}))},Y=function(){return(0,E.v9)(S.l.selectFiltredContacts).length?(0,B.jsx)(G,{children:(0,B.jsx)(W,{})}):(0,B.jsx)("p",{children:"There are no contacts with such a name"})},$=v.default.div(g||(g=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  flex-basis: 40%;\n  padding: 30px 15px 15px 15px;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.6);\n  border: 1px solid #2160c4;\n"]))),H=v.default.div(h||(h=(0,b.Z)(["\n  margin: 15px auto;\n"]))),O=function(){var n=(0,E.v9)(S.l.selectContacts);return(0,B.jsxs)($,{children:[(0,B.jsx)("h2",{children:"Contacts"}),n.length?(0,B.jsx)(V,{}):null,n.length?(0,B.jsx)(Y,{}):(0,B.jsx)(H,{children:(0,B.jsx)("p",{children:"There are no contacts yet"})})]})},Q=function(){var n=(0,E.v9)(S.l.selectError),e=(0,E.v9)(q.u.selectIsLoggedIn),t=(0,E.I0)();return(0,C.useEffect)((function(){return document.body.classList.add("contacts-bg"),function(){document.body.classList.remove("contacts-bg")}}),[]),(0,C.useEffect)((function(){n&&L.Notify.failure("An error occured. Try again later.")}),[n]),(0,C.useEffect)((function(){t((0,N.yF)())}),[t]),e?(0,B.jsxs)(w,{children:[n&&(0,B.jsx)("p",{children:"Error: ".concat(n)}),(0,B.jsxs)(y,{children:[(0,B.jsx)(U,{}),(0,B.jsx)(O,{})]})]}):(0,B.jsx)(Z,{children:"Please log in to see the contacts list"})}}}]);
//# sourceMappingURL=634.6b592c46.chunk.js.map