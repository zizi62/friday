(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={wraper:"header_wraper__UnVwf",header:"header_header__1-L5A",link:"header_link__14HVq"}},17:function(e,t,n){e.exports={input:"input_input__k8J0Q",inputError:"input_inputError__lV3v_",error:"input_error__2bxGV"}},21:function(e,t,n){e.exports={wraper:"signIn_wraper__20ITI",signIn:"signIn_signIn__1mMsw",form:"signIn_form__2Sh7y",inputText:"signIn_inputText__2AuFx"}},37:function(e,t,n){e.exports={button:"button_button__2xIPi"}},39:function(e,t,n){e.exports={main:"main_main__ZrJEr"}},42:function(e,t,n){e.exports=n(72)},47:function(e,t,n){},48:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(47),n(48),n(3)),u=n(11),s=n.n(u),i=n(2),m=n(41),p=n(17),E=n.n(p),f=function(e){var t=e.onEnter,n=e.error,a=Object(m.a)(e,["onEnter","error"]),c=n?E.a.input+" "+E.a.inputError:E.a.input;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:c,type:"text",name:"myInput",onKeyDown:function(e){13===e.charCode&&t&&t()}},a)),n?r.a.createElement("span",{className:E.a.error},n):null)},d=n(37),b=n.n(d),h=function(e){return r.a.createElement("div",null,r.a.createElement("button",Object.assign({className:b.a.button},e)))},v=function(){return r.a.createElement("div",null,r.a.createElement(f,{placeholder:"login"}),r.a.createElement(f,{type:"password",placeholder:"password"}),r.a.createElement(f,{type:"password",placeholder:"password"}),r.a.createElement(f,{type:"checkbox"}),r.a.createElement(h,null,"SIGN UP"),r.a.createElement(o.b,{to:$},"SIGN IN"))},g=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"SIGN UP"),r.a.createElement(v,null))},O=function(){return r.a.createElement("div",null,r.a.createElement(f,{type:"password"}),r.a.createElement(f,null),r.a.createElement(h,null,"SEND PASSWORD"),r.a.createElement(o.b,{to:$},"SIGN IN"))},w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"SET NEW PASSWORD"),r.a.createElement(O,null))},S=function(){return r.a.createElement("div",null,r.a.createElement(f,{type:"email",placeholder:"email"}),r.a.createElement(o.b,{to:X}," Forgot password?"),r.a.createElement(h,null,"SEND NEW PASSWORD"),r.a.createElement(o.b,{to:$},"SIGN IN"))},_=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"FORGOT PASSWORD"),r.a.createElement(S,null))},I=function(){return r.a.createElement("div",null,r.a.createElement(_,null))},N=n(18),k=n(21),j=n.n(k),R=function(e){var t=e.email,n=e.password,a=e.rememberMe,c=e.setEmail,l=e.setPassword,u=e.setRememberMe,s=e.signIn;return r.a.createElement("div",{className:j.a.signIn},r.a.createElement(f,{placeholder:"email",type:"email",onChange:c,value:t}),r.a.createElement(f,{type:"password",placeholder:"password",onChange:l,value:n}),r.a.createElement(f,{type:"checkbox",onChange:u,checked:a}),r.a.createElement("span",null,"Remember Me"),r.a.createElement(h,{onClick:s},"SIGN IN"),r.a.createElement(o.b,{to:z},"Registration"))},y=n(14),x=n(8),P=n.n(x),T=n(12),A=n(10),C=n(22),G=n.n(C),W=G.a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),D=function(e,t,n){return Object(T.a)(P.a.mark((function a(){var r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.post("/auth/login",{email:e,password:t,rememberMe:n});case 2:return r=a.sent,a.abrupt("return",r.data);case 4:case"end":return a.stop()}}),a)})))()},F=G.a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),U=function(e){return Object(T.a)(P.a.mark((function t(){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,F.post("auth/me",{token:e});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},M={profile:{},error:"",token:""},L=function(e){return{type:"profile/SET_PROFILE",profile:e}},J=function(e){return{type:"profile/SET_ERROR",error:e}},V={isAuth:!1,error:""},H=function(e){return{type:"signIn/SET_ERROR",error:e,isAuth:!1}},B=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(N.a)(l,2),u=o[0],s=o[1],i=Object(a.useState)(!1),m=Object(N.a)(i,2),p=m[0],E=m[1],f=Object(a.useState)(""),d=Object(N.a)(f,2),b=(d[0],d[1],Object(y.b)()),h=Object(a.useCallback)((function(){return b(function(e,t,n){return function(){var a=Object(T.a)(P.a.mark((function a(r){var c;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D(e,t,n);case 3:(c=a.sent).success?(r({type:"signIn/IS_AUTH_SUCCESS",error:"",isAuth:!0}),r(L(c))):r(H(c.error)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r(H(a.t0.message));case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(n,u,p))}),[n,u,p,b]),v=Object(a.useCallback)((function(e){return c(e.currentTarget.value)}),[c]),g=Object(a.useCallback)((function(e){return s(e.currentTarget.value)}),[s]),O=Object(a.useCallback)((function(e){return E(e.currentTarget.checked)}),[E]);return r.a.createElement("div",{className:j.a.wraper},r.a.createElement("h2",null,"SIGN IN"),r.a.createElement(R,{email:n,password:u,rememberMe:p,setEmail:v,setPassword:g,setRememberMe:O,signIn:h}))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null))},K=function(){return r.a.createElement("div",null,"Profile")},Q=function(){var e=Object(y.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(T.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.getItem("token"),n="7c14aed0-b8f5-11ea-82a5-e1ef009c6bcd",e.next=7,U(n);case 7:(a=e.sent).data.success?t(L(a.data)):t(J(a.data.error));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(J("Somethisg wrong"));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",null,r.a.createElement(K,null))},Z=function(){return r.a.createElement("div",null,r.a.createElement(Q,null))},$="/sign-in",z="/registration",X="/forgot-password",Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{path:$,component:q}),r.a.createElement(i.a,{path:z,component:g}),r.a.createElement(i.a,{path:X,component:I}),r.a.createElement(i.a,{path:"/set-new-password",component:w}),r.a.createElement(i.a,{path:"/profile",component:Z}))},ee=function(){return r.a.createElement("div",{className:s.a.header},r.a.createElement(o.b,{className:s.a.link,to:$},"SIGN IN"),r.a.createElement(o.b,{className:s.a.link,to:z},"REGISTRATION"),r.a.createElement(o.b,{className:s.a.link,to:X},"FORGOT PASSWORD"),r.a.createElement(o.b,{className:s.a.link,to:"/set-new-password"},"SET NEW PASSWORD"),r.a.createElement(o.b,{className:s.a.link,to:"/profile"}," PROFILE"))},te=function(){return r.a.createElement("div",{className:s.a.wraper},r.a.createElement(ee,null))},ne=n(39),ae=n.n(ne),re=function(){return r.a.createElement("div",{className:ae.a.main},r.a.createElement(Y,null))},ce=n(15),le=n(40),oe={},ue={},se={},ie=Object(ce.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET_PROFILE":return Object(A.a)(Object(A.a)({},e),{},{profile:t.profile});case"profile/SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}},forgotPasswordPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;return e},registrationPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;return e},setNewPasswordPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return e},signInPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signIn/IS_AUTH_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{isAuth:t.isAuth});case"signIn/SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}}}),me=Object(ce.d)(ie,Object(ce.a)(le.a));var pe=function(){return r.a.createElement(o.a,null,r.a.createElement(y.a,{store:me},r.a.createElement("div",{className:"App"},r.a.createElement(te,null),r.a.createElement(re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.93d7ed32.chunk.js.map