(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={wraper:"header_wraper__UnVwf",header:"header_header__1-L5A",link:"header_link__14HVq"}},19:function(e,t,n){e.exports={wraper:"signIn_wraper__20ITI",signIn:"signIn_signIn__1mMsw",form:"signIn_form__2Sh7y",inputText:"signIn_inputText__2AuFx"}},21:function(e,t,n){e.exports={input:"input_input__k8J0Q",inputError:"input_inputError__lV3v_",error:"input_error__2bxGV"}},37:function(e,t,n){e.exports={button:"button_button__2xIPi"}},39:function(e,t,n){e.exports={error:"errorMessage_error__33Qmr"}},40:function(e,t,n){e.exports={main:"main_main__ZrJEr"}},43:function(e,t,n){e.exports=n(73)},48:function(e,t,n){},49:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n.n(c),l=(n(48),n(49),n(3)),u=n(12),i=n.n(u),s=n(2),m=n(42),p=n(21),E=n.n(p),f=function(e){var t=e.onEnter,n=e.error,r=Object(m.a)(e,["onEnter","error"]),c=n?E.a.input+" "+E.a.inputError:E.a.input;return a.a.createElement("div",null,a.a.createElement("input",Object.assign({className:c,type:"text",name:"myInput",onKeyDown:function(e){13===e.charCode&&t&&t()}},r)))},b=n(37),d=n.n(b),h=function(e){return a.a.createElement("div",null,a.a.createElement("button",Object.assign({className:d.a.button},e)))},g=function(){return a.a.createElement("div",null,a.a.createElement(f,{placeholder:"login"}),a.a.createElement(f,{type:"password",placeholder:"password"}),a.a.createElement(f,{type:"password",placeholder:"password"}),a.a.createElement(f,{type:"checkbox"}),a.a.createElement(h,null,"SIGN UP"),a.a.createElement(l.b,{to:ae},"SIGN IN"))},v=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"SIGN UP"),a.a.createElement(g,null))},O=function(){return a.a.createElement("div",null,a.a.createElement(f,{type:"password"}),a.a.createElement(f,null),a.a.createElement(h,null,"SEND PASSWORD"),a.a.createElement(l.b,{to:ae},"SIGN IN"))},_=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"SET NEW PASSWORD"),a.a.createElement(O,null))},S=function(){return a.a.createElement("div",null,a.a.createElement(f,{type:"email",placeholder:"email"}),a.a.createElement(l.b,{to:oe}," Forgot password?"),a.a.createElement(h,null,"SEND NEW PASSWORD"),a.a.createElement(l.b,{to:ae},"SIGN IN"))},w=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"FORGOT PASSWORD"),a.a.createElement(S,null))},I=function(){return a.a.createElement("div",null,a.a.createElement(w,null))},k=n(22),j=n(19),N=n.n(j),R=function(e){var t=e.email,n=e.password,r=e.rememberMe,c=e.error,o=e.setEmail,u=e.setPassword,i=e.setRememberMe,s=e.signIn;return a.a.createElement("div",{className:N.a.signIn},a.a.createElement(f,{placeholder:"email",type:"email",onChange:o,value:t,error:c}),a.a.createElement(f,{type:"password",placeholder:"password",onChange:u,value:n,error:c}),a.a.createElement(f,{type:"checkbox",onChange:i,checked:r}),a.a.createElement("span",null,"Remember Me"),a.a.createElement(h,{onClick:s},"SIGN IN"),a.a.createElement(l.b,{to:ce},"Registration"))},y=n(4),P=n(9),x=n.n(P),T=n(13),A=n(11),C=n(20),G=n.n(C),W=G.a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),F=function(e,t,n){return Object(T.a)(x.a.mark((function r(){return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,W.post("auth/login",{email:e,password:t,rememberMe:n});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},M=G.a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),U=function(e){localStorage.setItem("token",e)},D=function(){return localStorage.getItem("token")},L=function(e){return Object(T.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.post("auth/me",{token:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},J={profile:{},error:"",token:""},V=function(e){return{type:"profile/SET_PROFILE",profile:e}},H=function(e){return{type:"profile/SET_TOKEN",token:e}},K=function(e){return{type:"profile/SET_ERROR",error:e}},B={isAuth:!1,error:""},Q=function(e){return{type:"signIn/IS_AUTH_SUCCESS",error:"",isAuth:e}},q=function(e){return{type:"signIn/SET_ERROR",error:e,isAuth:!1}},Z=function(e){return function(t){t(q(e))}},$=n(39),z=n.n($),X=function(e){var t=e.message;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:z.a.error},t))},Y=function(){var e=Object(y.c)((function(e){return e.signInPage.error})),t=Object(r.useState)(""),n=Object(k.a)(t,2),c=n[0],o=n[1],l=Object(r.useState)(""),u=Object(k.a)(l,2),i=u[0],s=u[1],m=Object(r.useState)(!1),p=Object(k.a)(m,2),E=p[0],f=p[1],b=Object(y.b)(),d=Object(r.useCallback)((function(){c&&i?(b(function(e,t,n){return function(){var r=Object(T.a)(x.a.mark((function r(a){var c;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F(e,t,n);case 3:c=r.sent,a(Q(!0)),a(H(c.data.token)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),r.t0.response?a(q(r.t0.response.data.error)):a(q("Some ERROR"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}(c,i,E)),o(""),s(""),f(!1)):b(Z("all fields must be filled"))}),[c,i,E,b]),h=Object(r.useCallback)((function(e){o(e.currentTarget.value),b(Z(""))}),[o]),g=Object(r.useCallback)((function(e){s(e.currentTarget.value),b(Z(""))}),[s]),v=Object(r.useCallback)((function(e){return f(e.currentTarget.checked)}),[f]);return a.a.createElement("div",{className:N.a.wraper},a.a.createElement("h2",null,"SIGN IN"),e&&a.a.createElement(X,{message:e}),a.a.createElement(R,{email:c,password:i,rememberMe:E,error:e,setEmail:h,setPassword:g,setRememberMe:v,signIn:d}))},ee=function(){var e=Object(y.c)((function(e){return e.signInPage.isAuth}));return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(s.a,{to:le}),a.a.createElement(Y,null))},te=function(e){var t=e.profile;return a.a.createElement("div",null,a.a.createElement("h2",null,t.name))},ne=function(){var e=Object(y.c)((function(e){return e.profilePage.profile})),t=Object(y.b)();Object(r.useEffect)((function(){!e.name&&t(function(){var e=Object(T.a)(x.a.mark((function e(t,n){var r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n().profilePage.token,e.next=4,L(r);case 4:a=e.sent,t(V(a.data)),t(H(a.data.token)),a.data.rememberMe&&U(a.data.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response?(t(K(e.t0.response.data.error)),t(Q(!1)),console.log(e.t0.response.data.error)):t(K("Some ERROR"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]);return a.a.createElement("div",null,a.a.createElement(te,{profile:e}),a.a.createElement(h,{onClick:function(){return t((function(e){U(""),e(Q(!1)),e(V({}))}))}},"SIGN OUT"))},re=function(){var e=Object(y.c)((function(e){return e.signInPage.isAuth}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Profile"),e?a.a.createElement(ne,null):a.a.createElement(s.a,{to:ae}))},ae="/sign-in",ce="/registration",oe="/forgot-password",le="/profile",ue=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.b,{path:ae,component:ee}),a.a.createElement(s.b,{path:ce,component:v}),a.a.createElement(s.b,{path:oe,component:I}),a.a.createElement(s.b,{path:"/set-new-password",component:_}),a.a.createElement(s.b,{path:le,component:re}))},ie=function(){return a.a.createElement("div",{className:i.a.header},a.a.createElement(l.b,{className:i.a.link,to:ae},"SIGN IN"),a.a.createElement(l.b,{className:i.a.link,to:ce},"REGISTRATION"),a.a.createElement(l.b,{className:i.a.link,to:oe},"FORGOT PASSWORD"),a.a.createElement(l.b,{className:i.a.link,to:"/set-new-password"},"SET NEW PASSWORD"),a.a.createElement(l.b,{className:i.a.link,to:le}," PROFILE"))},se=function(){return a.a.createElement("div",{className:i.a.wraper},a.a.createElement(ie,null))},me=n(40),pe=n.n(me),Ee=function(){return a.a.createElement("div",{className:pe.a.main},a.a.createElement(ue,null))};var fe=function(){var e=Object(y.b)();return Object(r.useEffect)((function(){var t=D();t&&e(function(e,t){return function(n){n(Q(e)),n(H(t))}}(!0,t))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement(se,null),a.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=n(15),de=n(41),he={},ge={},ve={},Oe=Object(be.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET_PROFILE":return Object(A.a)(Object(A.a)({},e),{},{profile:t.profile});case"profile/SET_TOKEN":return Object(A.a)(Object(A.a)({},e),{},{token:t.token});case"profile/SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}},forgotPasswordPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he;return e},registrationPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return e},setNewPasswordPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve;return e},signInPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signIn/IS_AUTH_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{isAuth:t.isAuth});case"signIn/SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}}}),_e=Object(be.d)(Oe,Object(be.a)(de.a));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null,a.a.createElement(y.a,{store:_e},a.a.createElement(fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6ccbb50f.chunk.js.map