(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7Zh5":function(e,t,a){e.exports=a.p+"static/singapore-f7a137f419b9c826fcc255c7489ae2bf.webp"},"Cuy+":function(e,t,a){"use strict";a.r(t);var l=a("dI71"),n=a("q1tI"),s=a.n(n),r=a("7oih"),c=a("rY4l"),o=a("JwsL"),i=a("7Zh5"),m=a.n(i),d=a("D5Hz"),u=a.n(d),p=a("AO0C"),h=a("6BGB"),g=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(t=e.call.apply(e,[this].concat(l))||this).state={modal:!1},t}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(){console.log("toggled"),this.setState({modal:!this.state.modal})},a.render=function(){var e=this;return s.a.createElement(r.a,null,s.a.createElement(c.a,null),s.a.createElement("div",{style:{position:"relative"}},s.a.createElement("img",{className:"video",src:m.a,alt:"",style:{height:"30vh",width:"100vw",objectFit:"cover"}}),s.a.createElement("div",{style:{position:"absolute",top:0,background:"rgba(190,190,190,.3)",height:"30vh",width:"100vw",objectFit:"cover"}},s.a.createElement("div",{className:"header-content text-white mx-auto",style:{left:"50vh",marginTop:"17vh"}},s.a.createElement("h1",{className:"text-center m-5"}," Get In Touch ")))),s.a.createElement(h.a,{triggerOnce:!0,delay:0},s.a.createElement("div",{className:"container mt-5 mb-5"},s.a.createElement("form",{className:"contact-form text-right",onSubmit:this.sendEmail},s.a.createElement("div",{className:"row"},s.a.createElement("label",{htmlFor:"name",className:"col-2 col-lg-3 m-3 my-1"}," Name "),s.a.createElement("input",{className:"mt-3 col-lg-6 col-8 ",type:"text",id:"name",placeholder:"",name:"name",style:{borderRadius:"5px",borderWidth:"1.5px"}}),s.a.createElement("div",{className:"col-lg-2"})),s.a.createElement("div",{className:"row"},s.a.createElement("label",{htmlFor:"phone",className:"col-2 col-lg-3 m-3 my-1"}," Phone "),s.a.createElement("input",{className:"mt-3 col-lg-6 col-8",type:"text",id:"phone",placeholder:"",name:"phone",style:{borderRadius:"5px",borderWidth:"1.5px"}}),s.a.createElement("div",{className:"col-lg-2"})),s.a.createElement("div",{className:"row"},s.a.createElement("label",{htmlFor:"email",className:"col-2 col-lg-3 m-3 my-1"}," Email "),s.a.createElement("input",{className:"mt-3 col-lg-6 col-8 ",type:"email",id:"email",placeholder:"",name:"email",style:{borderRadius:"5px",borderWidth:"1.5px"}}),s.a.createElement("div",{className:"col-lg-2"})),s.a.createElement("div",{className:"row my-2"},s.a.createElement("label",{htmlFor:"beta",className:"col-2 col-lg-3 m-3 my-1 "},"Interests"),s.a.createElement("div",{className:"row col-3 col-lg-2 text-left mt-3 mr-2 interest-section"},s.a.createElement("input",{type:"checkbox",style:{width:"30px",height:"30px",marginTop:"0px"},id:"beta",name:"beta",value:"beta"}),s.a.createElement("p",{className:"my-1 ml-2"},"Beta Program")),s.a.createElement("div",{className:"row col-3 col-lg-2 text-left mt-3 mr-2"},s.a.createElement("input",{type:"checkbox",style:{width:"30px",height:"30px",marginTop:"0px"},name:"learn",value:"learn",id:"learn"}),s.a.createElement("p",{className:"my-1 ml-2"},"Learn More")),s.a.createElement("div",{className:"row col-3 col-lg-2  text-left mt-3"},s.a.createElement("input",{type:"checkbox",style:{width:"30px",height:"30px",marginTop:"0px"},name:"pricing",value:"pricing",id:"pricing"}),s.a.createElement("p",{className:"my-1 ml-2"},"Pricing")),s.a.createElement("div",{className:"col-lg-3"})),s.a.createElement("div",{className:"row"},s.a.createElement("label",{htmlFor:"message",className:"col-2 col-lg-3 m-3 my-1"}," Message "),s.a.createElement("textarea",{className:"mt-3 col-lg-6 col-8 contact-text ",rows:"4",cols:"50",placeholder:"",style:{borderRadius:"5px",borderWidth:"1.5px"},name:"message",id:"message"}),s.a.createElement("div",{className:"col-lg-2"})),s.a.createElement("div",{className:"col-lg-12 text-center"},s.a.createElement("input",{type:"submit",onClick:function(){return e.toggle()},value:"Submit",className:"btn-default btn text-white mt-3 btn-tertiary",style:{width:"200px"}}))))),s.a.createElement(p.d,null,s.a.createElement(p.g,{isOpen:this.state.modal,toggle:function(){return e.toggle()}},s.a.createElement("h5",{className:"m-4 text-center"}," Thanks!  We'll be in touch."),s.a.createElement(p.h,{className:"align-content-center justify-content-center "},s.a.createElement(p.b,{className:"mt-3 text-white btn-tertiary",onClick:function(){return e.toggle()}},"Close")))),s.a.createElement("section",{className:"contact bg-primary",id:"contact",style:{padding:"3px"}}),s.a.createElement(o.a,null))},a.sendEmail=function(e){e.preventDefault(),console.log("email sent"),u.a.sendForm("gmail","template_jjrY3GEB",e.target,"user_cV1OsELmIYfBvcQFwMZHH").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},t}(n.Component);t.default=g},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var l=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return l.EmailJSResponseStatus}});var n=a("USkh"),s=null,r="https://api.emailjs.com";function c(e,t,a){return void 0===a&&(a={}),new Promise((function(n,s){var r=new XMLHttpRequest;for(var c in r.addEventListener("load",(function(e){var t=new l.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):s(t)})),r.addEventListener("error",(function(e){s(new l.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),a)r.setRequestHeader(c,a[c]);r.send(t)}))}function o(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function i(e,t){s=e,r=t||"https://api.emailjs.com"}function m(e,t,a,l){var n={lib_version:"2.6.4",user_id:l||s,service_id:e,template_id:t,template_params:o(a)};return c(r+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function d(e,t,a,l){var o;if("string"==typeof a&&(a=document.querySelector("#"!==(o=a)[0]&&"."!==o[0]?"#"+o:o)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(a);var i=new FormData(a);return i.append("lib_version","2.6.4"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",l||s),c(r+"/api/v1.0/email/send-form",i).then((function(e){return n.UI.successState(a),e}),(function(e){return n.UI.errorState(a),Promise.reject(e)}))}t.init=i,t.send=m,t.sendForm=d,t.default={init:i,send:m,sendForm:d}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var l=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=l},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var l=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=l}}]);
//# sourceMappingURL=component---src-pages-contact-js-527ddd64b81b29a5573f.js.map