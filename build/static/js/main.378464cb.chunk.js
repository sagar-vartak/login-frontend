(this["webpackJsonplogin-frontend"]=this["webpackJsonplogin-frontend"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(11),r=n.n(c),o=(n(17),n(18),n(2)),l=n(3),j=n(5),d=n(4),h=n(7),u=n(10),g=n.n(u),b=(n(9),n.p+"static/media/dashboard.1f641bff.jpg"),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"dashboard",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h3",{children:" Welcome"}),Object(s.jsx)("img",{src:b,alt:"dashboard",width:"500px"})]})}),Object(s.jsx)("div",{className:"panels-container",children:Object(s.jsxs)("div",{class:"panel left-panel",children:[Object(s.jsxs)("div",{class:"content",children:[Object(s.jsx)("h3",{children:"Dashboard"}),Object(s.jsxs)("p",{children:["Logged in as ",this.props.user]}),Object(s.jsx)("button",{onClick:this.props.logout,class:"btn transparent",id:"sign-up-btn",children:"logout"})]}),Object(s.jsx)("img",{src:"img/log.svg",class:"image",alt:""})]})})]})}}]),n}(a.Component),O=n(6),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(h.a)({},e.target.name,e.target.value))},s.componentDidUpdate=function(e){setInterval((function(){s.setState({Error:""})}),8e3),clearInterval()},s.signup=function(e){e.preventDefault();var t=new FormData(e.target),n={};t.forEach((function(e,t){n[t]=e})),fetch("https://shaaggy.herokuapp.com/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e),"USER ALREADY EXISTS"!==e.status?(s.setState({Error:e.status,signBtn:!0}),alert("User added Sucessfullt. Please Sign in To Continue"),s.setState({loggedin:!0})):s.setState({Error:e.status})})).catch((function(e){console.error("Error:",e)}))},s.state={signBtn:!1,loggedin:!1,Error:"",email:"",password:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.state.loggedin?Object(s.jsx)(x,{}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"panels-container",children:Object(s.jsx)("div",{className:"panel left-panel",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h3",{children:"One of us ?"}),Object(s.jsx)("button",{onClick:this.props.changes,className:"btn transparent",id:"sign-up-btn",children:"Sign in"})]})})}),Object(s.jsx)("p",{children:this.state.Error}),Object(s.jsx)("div",{className:"signin-signup",children:Object(s.jsxs)("form",{method:"POST",name:"login",className:"sign-in-form",onSubmit:this.signup,children:[Object(s.jsx)("h2",{className:"title",children:"Sign up"}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("i",{children:Object(s.jsx)(O.b,{color:"#333"})}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"EMAIL",value:this.email,onChange:this.handleChange,required:!0})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("i",{children:Object(s.jsx)(O.a,{color:"#333"})}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"PASSWORD",value:this.password,onChange:this.handleChange,required:!0})]}),Object(s.jsx)("input",{type:"submit",className:"btn",value:"Sign up"})]})})]})})}}]),n}(a.Component),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(h.a)({},e.target.name,e.target.value))},s.componentDidUpdate=function(e){setInterval((function(){s.setState({Error:""})}),8e3),clearInterval()},s.login=function(e){e.preventDefault();var t=new FormData(e.target),n={};t.forEach((function(e,t){n[t]=e}));var a=new Headers;a.append("Authorization","Bearer "+g.a.get("jwt")),fetch("https://shaaggy.herokuapp.com/login",{method:"POST",headers:{myHeaders:a,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){return console.log(e.status),"Check Credentials Before Logging Again"===e.status||"User does not exists"===e.status?(s.setState({Error:e.status}),void s.setState({loggedin:!1})):void s.setState({Error:e.status,loggedin:!0,token:e.data.jwt})})).catch((function(e){console.error("Error:",e)}))},s.logout=function(e){g.a.remove("jwt"),s.setState({loggedin:!1})},s.change=function(e){s.setState({signUpBtn:!0})},s.alter=function(e){s.setState({signUpBtn:!1})},s.state={loggedin:!1,Error:"",email:"",password:"",token:"",signUpBtn:!1},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.state.signUpBtn?Object(s.jsx)(m,{changes:this.alter}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:this.state.loggedin?Object(s.jsx)(p,{logout:this.logout,user:this.state.email}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"panels-container",children:Object(s.jsxs)("div",{class:"panel left-panel",children:[Object(s.jsxs)("div",{class:"content",children:[Object(s.jsx)("h3",{children:"New here ?"}),Object(s.jsx)("button",{onClick:this.change,class:"btn transparent",id:"sign-up-btn",children:"Sign up"})]}),Object(s.jsx)("img",{src:"img/log.svg",class:"image",alt:""})]})}),Object(s.jsx)("p",{children:this.state.Error}),Object(s.jsx)("div",{className:"signin-signup",children:Object(s.jsxs)("form",{method:"POST",name:"login",onSubmit:this.login,class:"sign-in-form",children:[Object(s.jsx)("h2",{className:"title",children:"Sign in"}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("i",{children:Object(s.jsx)(O.b,{color:"#333"})}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"EMAIL",value:this.email,onChange:this.handleChange,required:!0})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("i",{children:Object(s.jsx)(O.a,{color:"#333"})}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"PASSWORD",value:this.password,onChange:this.handleChange,required:!0})]}),Object(s.jsx)("input",{type:"submit",value:"Login",className:"btn solid"})]})})]})})})})}}]),n}(a.Component),f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loginBtn:!1},e.change=function(t){e.setState({logininBtn:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"forms-container",children:this.props.loginBtn?Object(s.jsx)(m,{}):Object(s.jsx)(x,{})})})}}]),n}(a.Component);var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(f,{})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),S()},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.378464cb.chunk.js.map