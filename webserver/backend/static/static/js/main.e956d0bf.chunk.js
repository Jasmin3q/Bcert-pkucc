(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1184:function(e,t){},124:function(e,t,a){"use strict";var n=a(29),r=a(30),s=a(32),i=a(31),c=a(33),l=a(1),o=a.n(l),u=(a(883),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.selected,t=this.props.path,a=this.props.item,n=this.props.select;return o.a.createElement("div",{className:"card ".concat(e?"border-primary":""),onClick:function(e){return n(e,a)}},o.a.createElement("img",{className:"card-img-top",src:"".concat(t).concat(a.id,".jpg"),alt:a.name}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},a.name),o.a.createElement("p",{className:"card-text"},a.superpower),o.a.createElement("button",{className:"btn btn-primary btn-block",disabled:e},e?"Selected":"Select")))}}]),t}(l.Component));t.a=u},1241:function(e,t){},1399:function(e,t){},1409:function(e,t,a){},1412:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(593),i=a.n(s),c=a(1416),l=(a(601),a(29)),o=a(30),u=a(32),m=a(31),d=a(33),p=(a(602),a(63)),h=a(22),f=a(1413),v=a(23),b=(a(864),a(594)),g=a.n(b),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).txtChanged=function(t){var a=t.target.value;e.setState({url:a})},e.userSession=new p.UserSession({appConfig:v.f}),e.state={url:"/home/user/path/to/certificate"},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){console.log("start to redirect to verify");var e="http://127.0.0.1:8080/verify?url="+this.state.url;g.a.get(e).then(function(e){var t=e.data;alert(t)}).catch(function(e){console.log(e)})}},{key:"signIn",value:function(e){e.preventDefault(),this.userSession.redirectToSignIn()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-blue fixed-top"},r.a.createElement(f.a,{className:"navbar-brand",to:"/"},"PKU Cert Centre"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u7f51\u7ad9\u9996\u9875")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u9a8c\u8bc1\u8bc1\u4e66")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/",onClick:this.signIn.bind(this)},"\u4e2a\u4eba\u4e3b\u9875")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u5173\u4e8e\u6211\u4eec"))))),r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"first"},r.a.createElement("span",{className:"pas"},"\u8f93\u5165\u9700\u8981\u9a8c\u8bc1\u7684\u8bc1\u4e66URL")),r.a.createElement("div",{className:"second"},r.a.createElement("div",{className:"back"},r.a.createElement("input",{type:"text",name:"id",value:this.state.url,onChange:function(t){return e.txtChanged(t)},className:"number"}),r.a.createElement("input",{type:"submit",onClick:this.handleClick,value:"\u9a8c\u8bc1",className:"ok"}))))),r.a.createElement("div",{className:"aboutus"},r.a.createElement("img",{src:"/static/image/intro.jpg",alt:""}),r.a.createElement("div",{className:"intro"},"\u9879\u76ee\u7b80\u4ecb"),r.a.createElement("div",{className:"context"},r.a.createElement("p",null," \xa0\xa0\u672c\u9879\u76ee\u57fa\u4e8e\u533a\u5757\u94fe\u6280\u672f\uff0c\u4f7f\u7528\u6bd4\u7279\u5e01\u533a\u5757\u94fe\u8bb0\u5f55\u5b66\u5386\u8bc1\u4e66\u4fe1\u606f\u3002\u6709\u5229\u4e8e\u9ad8\u6821\u6570\u5b57\u5316\u7ba1\u7406\u8bc1\u4e66\u3001\u5b66\u751f\u5b9e\u65f6\u63d0\u4f9b\u5b66\u4e60\u51ed\u8bc1\u3001\u516c\u53f8\u9a8c\u8bc1\u5b66\u5386\u771f\u4f2a\uff0c\u4ece\u800c\u66f4\u597d\u7684\u7ef4\u62a4\u6559\u80b2\u79e9\u5e8f\u3002")),r.a.createElement("div",{className:"more"},r.a.createElement("a",{className:"menu-link",href:"http://127.0.0.1:8080/",target:"_self"},"more"))),r.a.createElement("div",{className:"show"},r.a.createElement("div",{className:"chanpinphoto"},r.a.createElement("p",{className:"step"},r.a.createElement("br",null),"1"),r.a.createElement("p",{className:"step"},r.a.createElement("br",null),"2"),r.a.createElement("p",{className:"step"},r.a.createElement("br",null),"3"),r.a.createElement("p",null,"\u901a\u8fc7\u8ba4\u8bc1\u7684\u5b66\u6821\u53ef\u4ee5\u9881\u53d1\u8bc1\u4e66,\u5e76\u5c06\u5176\u8bb0\u5f55\u4e8e\u533a\u5757\u94fe\u4e0a\uff0c\u5177\u6709\u5b89\u5168\u6027\u3001\u4e0d\u53ef\u7be1\u6539\u6027\u7b49\u4f18\u70b9\uff0c\u6b64\u5916,\u5b66\u6821\u8fd8\u53ef\u4ee5\u5bf9\u8bc1\u4e66\u8fdb\u884c\u64a4\u56de\u3002"),r.a.createElement("p",null,"\u83b7\u5f97\u8bc1\u4e66\u7684\u5b66\u751f\u53ef\u4ee5\u4e0d\u5fc5\u643a\u5e26\u7eb8\u8d28\u8bc1\u4e66,\u800c\u662f\u5728\u9700\u8981\u4f7f\u7528\u65f6\u51fa\u793a\u7535\u5b50\u7248\u8bc1\u660e\u5373\u53ef\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bc1\u4e66\u7684\u54c8\u5e0c\u503c\u5728IPFS\u5e73\u53f0\u4e0a\u83b7\u5f97\u8bc1\u4e66\u3002"),r.a.createElement("p",null,"\u4f01\u4e1a\u6216\u4efb\u4f55\u9700\u8981\u8ba4\u8bc1\u8bc1\u4e66\u6709\u6548\u6027\u7684\u7b2c\u4e09\u65b9\u90fd\u53ef\u4ee5\u5728\u672c\u7f51\u7ad9\u4e0a\u4f20\u5e76\u67e5\u8be2\u8bc1\u4e66\u7684\u6709\u6548\u6027\uff0c\u800c\u4e0d\u9700\u8981\u4f20\u7edf\u7684\u90ae\u4ef6\u3001\u7535\u8bdd\u7b49\u65b9\u5f0f\u3002"))),r.a.createElement("div",{class:"bottom"},r.a.createElement("ul",{class:"down"},r.a.createElement("li",null,"\xa9 All Rights Reserved "),r.a.createElement("li",null,"\u57fa\u4e8e\u533a\u5757\u94fe\u7684\u6559\u80b2\u4fe1\u606f\u9a8c\u8bc1\u7cfb\u7edf "),r.a.createElement("li",null,"\u65f6\u65fb \u6bd5\u4e1a\u8bbe\u8ba1"))))}}]),t}(n.Component),y=a(1415),k=a(1417),j=a(1418),S=(a(426),a(124)),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).selectAnimal=a.selectAnimal.bind(Object(h.a)(a)),a.selectTerritory=a.selectTerritory.bind(Object(h.a)(a)),a.state={selectedAnimal:!1,selectedTerritory:!1},a.loadMe=a.loadMe.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.loadMe()}},{key:"loadMe",value:function(){this.props.me?this.setState({selectedAnimal:!0,selectedTerritory:!0}):this.setState({selectedAnimal:!1,selectedTerritory:!1})}},{key:"selectAnimal",value:function(e,t){e.preventDefault(),this.setState({selectedAnimal:!0}),this.props.saveMe(Object.assign({},this.props.me,{animal:t}))}},{key:"selectTerritory",value:function(e,t){e.preventDefault(),this.setState({selectedTerritory:!0}),this.props.saveMe(Object.assign({},this.props.me,{territory:t}))}},{key:"render",value:function(){var e=this,t=this.props.me,a=null,n=null;t&&(a=this.props.me.animal,n=this.props.me.territory);var s=this.state.selectedAnimal,i=this.state.selectedTerritory,c=s&&i,l=this.props.username;return r.a.createElement("div",{className:"EditMe container"},r.a.createElement("h2",null,"Your animal persona"),r.a.createElement("p",null,"You are the ruler of your kingdom! Pick your animal persona and its home!"),r.a.createElement("h3",null,"Select your animal"),r.a.createElement("div",{className:"row card-deck"},v.a.map(function(t,n){var s=a&&a.id===t.id;return r.a.createElement(S.a,{path:"/animals/",key:n,item:t,select:e.selectAnimal,selected:s})})),r.a.createElement("h3",{className:"select-territory"},"Select your territory"),r.a.createElement("div",{className:"card-deck"},v.e.map(function(t,a){var s=n&&n.id===t.id;return r.a.createElement(S.a,{path:"/territories/",key:a,item:t,select:e.selectTerritory,selected:s})})),r.a.createElement("div",{className:"container row"},r.a.createElement("div",{className:"col-lg-12 done"},r.a.createElement("p",null,r.a.createElement(f.a,{to:c?"/kingdom/".concat(l):"/me",className:"btn btn-primary"},"Done")))))}}]),t}(n.Component);function O(e){return JSON.parse(JSON.stringify(e))}function w(e,t,a){a.map(function(n,r){var s={decrypt:!1,app:n.app,username:n.username};return t.getFile(v.c,s).then(function(t){return t?(a[r]=Object.assign({},n,{missing:!1},JSON.parse(t)),e.setState({subjects:a}),a):(a[r]=Object.assign({},n,{missing:!0}),e.setState({subjects:a}),a)})})}n.Component,a(884);var A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={ruler:{animal:{},territory:{}},subjects:[],value:"",app:"".concat(e.protocol,"//").concat(e.realm),rulerUsername:e.ruler,clickAdd:!1},a.userSession=new p.UserSession({appConfig:v.f}),a.addSubject=a.addSubject.bind(Object(h.a)(a)),a.removeSubject=a.removeSubject.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.loadKingdom=a.loadKingdom.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.state.app,t=this.props.ruler;this.loadKingdom(t,e);var a=window.location.search;if(a){var n=a.split("=")[1];this.setState({value:n,clickAdd:!0})}}},{key:"componentWillReceiveProps",value:function(e){var t=e.subjects;t&&(t.length!==this.state.subjects.length&&this.setState({subjects:O(t)}),w(this,this.userSession,t))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"loadKingdom",value:function(e,t){var a=this;(function(e,t,a){var n={decrypt:!1,username:t,app:a};return e.getFile(v.c,n).then(function(e){return e?JSON.parse(e):null})})(this.userSession,e,t).then(function(e){e&&a.setState({ruler:e})}),function(e,t,a){var n={decrypt:!1,username:t,app:a};return e.getFile(v.d,n).then(function(e){return e?JSON.parse(e):[]})}(this.userSession,e,t).then(function(e){a.setState({subjects:e}),w(a,a.userSession,e)})}},{key:"addSubject",value:function(e){e.preventDefault();var t=function(e){var t=e.split("/kingdom");return{app:t[0],username:t[1].split("/")[1]}}(this.state.value),a=O(this.state.subjects);this.setState({value:"",clickAdd:!1}),a.push(t),this.setState({subjects:a}),this.saveSubjects(a)}},{key:"removeSubject",value:function(e,t){e.preventDefault();var a=O(this.state.subjects);a.splice(t,1),this.setState({subjects:a}),this.saveSubjects(a)}},{key:"saveSubjects",value:function(e){var t=this;this.userSession.putFile(v.d,JSON.stringify(e),{encrypt:!1}).finally(function(){window.location.search&&window.history.pushState(null,"",window.location.href.split("?")[0]),w(t,t.userSession,e)})}},{key:"render",value:function(){var e=this.props.myKingdom,t=this.state.ruler,a=t.animal,n=t.territory,s=this.state.rulerUsername,i=(this.state.subjects,this.props.myKingdom,this.state.app),c=(this.state.clickAdd,this.props.currentUsername);return r.a.createElement("div",{className:"Kingdom"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 territory",style:{backgroundImage:"url('".concat(i,"/territories/").concat(n.id,".jpg')")}},a&&a.name?r.a.createElement("img",{className:"rounded-circle",src:"".concat(i,"/animals/").concat(a.id,".jpg"),alt:a.name}):r.a.createElement("img",{className:"rounded-circle",src:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",alt:"The Ruler"}))),r.a.createElement("div",{className:"row ruler"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h2",null,"Student ",s),r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(v.b,"/name/").concat(s),target:"_blank",rel:"noopener noreferrer"},s)," has certificates:"),r.a.createElement("p",null,a&&a.name?r.a.createElement("p",null,a.name," "):r.a.createElement("p",null,"No Certificate Received Yet."),e?r.a.createElement(f.a,{className:"btn btn-primary",to:"/me",role:"button"},"Add Certificates"):r.a.createElement("a",{className:"btn btn-primary",href:"".concat(window.location.origin,"/kingdom/").concat(c,"?add=").concat(i,"/kingdom/").concat(s)},"Add Certificates")))))}}]),t}(n.Component),C=(a(885),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.username;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-blue fixed-top"},r.a.createElement(f.a,{className:"navbar-brand",to:"/"},"PKU Cert Centre"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u7f51\u7ad9\u9996\u9875")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u9a8c\u8bc1\u8bc1\u4e66")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/kingdom/".concat(e)},"\u4e2a\u4eba\u4e3b\u9875")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/"},"\u5173\u4e8e\u6211\u4eec")))),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{className:"nav-link",to:"/me"},e))),r.a.createElement("button",{className:"btn btn-primary",onClick:this.props.signOut.bind(this)},"Sign out"))}}]),t}(n.Component)),M=a(595),T=(a(1409),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).userSession=new p.UserSession({appConfig:v.f}),a.state={me:{},savingMe:!1,savingKingdown:!1,redirectToMe:!1},a.loadMe=a.loadMe.bind(Object(h.a)(a)),a.saveMe=a.saveMe.bind(Object(h.a)(a)),a.signOut=a.signOut.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.loadMe()}},{key:"loadMe",value:function(){var e=this;this.userSession.getFile(v.c,{decrypt:!1}).then(function(t){if(t){var a=JSON.parse(t);e.setState({me:a,redirectToMe:!1})}else{e.setState({me:null,redirectToMe:!0})}})}},{key:"saveMe",value:function(e){var t=this;this.setState({me:e,savingMe:!0});this.userSession.putFile(v.c,JSON.stringify(e),{encrypt:!1}).finally(function(){t.setState({savingMe:!1,redirectToMe:!1})})}},{key:"signOut",value:function(e){e.preventDefault(),this.userSession.signUserOut(),window.location="/"}},{key:"render",value:function(){var e=this,t=this.userSession.loadUserData().username,a=this.state.me;return this.state.redirectToMe&&"/me"!==window.location.pathname?r.a.createElement(y.a,{to:"/me"}):"/"===window.location.pathname?r.a.createElement(y.a,{to:"/kingdom/".concat(t)}):r.a.createElement("div",{className:"SignedIn"},r.a.createElement(C,{username:t,signOut:this.signOut}),r.a.createElement(k.a,null,r.a.createElement(j.a,{path:"/me",render:function(n){return r.a.createElement(N,Object.assign({me:a,saveMe:e.saveMe,username:t},n))}}),r.a.createElement(j.a,{path:"/upload",render:function(n){return r.a.createElement(M.a,Object.assign({me:a,saveMe:e.saveMe,username:t},n))}}),r.a.createElement(j.a,{path:"/kingdom/".concat(t),render:function(e){return r.a.createElement(A,Object.assign({myKingdom:!0,protocol:window.location.protocol,ruler:t,currentUsername:t,realm:window.location.origin.split("//")[1]},e))}}),r.a.createElement(j.a,{path:"/kingdom/:protocol/:realm/:ruler",render:function(e){return r.a.createElement(A,Object.assign({myKingdom:!1,protocol:e.match.params.protocol,realm:e.match.params.realm,ruler:e.match.params.ruler,currentUsername:t},e))}})))}}]),t}(n.Component)),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).userSession=new p.UserSession,e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.userSession;!e.isUserSignedIn()&&e.isSignInPending()&&e.handlePendingSignIn().then(function(e){if(!e.username)throw new Error("This app requires a username.");window.location="/kingdom/".concat(e.username)})}},{key:"render",value:function(){return r.a.createElement("main",{role:"main"},this.userSession.isUserSignedIn()?r.a.createElement(T,null):r.a.createElement(E,null))}}]),t}(n.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(1411);i.a.render(r.a.createElement(c.a,null,r.a.createElement(I,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");U?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()},23:function(e,t,a){"use strict";a.d(t,"f",function(){return r}),a.d(t,"a",function(){return s}),a.d(t,"e",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return o});var n=a(63),r=new n.AppConfig(["store_write","publish_data"]),s=[{id:"cat",name:"Cat",superpower:"Has 9 lives."},{id:"dog",name:"Dog",superpower:"Catching frisbees."},{id:"lion",name:"Lion",superpower:"Roaring loudly."},{id:"PKU_2020_Graduates_Jasmine",name:"PKU_2020_Graduates_Jasmine",superpower:"Graduate."}],i=[{id:"forest",name:"Forest",superpower:"Trees!"},{id:"tundra",name:"Tundra",superpower:"Let it snow!"},{id:"westeros",name:"Westeros",superpower:"The Iron Throne!"}],c="me.json",l="subjects.json",o="https://explorer.blockstack.org"},286:function(e,t){},426:function(e,t,a){},531:function(e,t){},572:function(e,t){},595:function(e,t,a){"use strict";(function(e){var n=a(29),r=a(30),s=a(32),i=a(31),c=a(22),l=a(33),o=a(1),u=a.n(o),m=a(1413),d=(a(426),a(124)),p=a(23),h=a(886)({host:"localhost",port:"5001",protocol:"http"});var f=function(t){function a(t){var r;return Object(n.a)(this,a),(r=Object(s.a)(this,Object(i.a)(a).call(this,t))).saveTextBlobOnIpfs=function(t){return new Promise(function(a,n){var r=e.from(t,"utf-8");h.add(r).then(function(e){console.log(e),a(e[0].hash)}).catch(function(e){console.error(e),n(e)})})},r.saveImageOnIpfs=function(t){return new Promise(function(a,n){var r=e.from(t.result);h.add(r).then(function(e){console.log(e),a(e[0].hash)}).catch(function(e){console.error(e),n(e)})})},r.selectAnimal=r.selectAnimal.bind(Object(c.a)(r)),r.selectTerritory=r.selectTerritory.bind(Object(c.a)(r)),r.state={selectedAnimal:!1,selectedTerritory:!1,strHash:null,strContent:null,imgSrc:null},r.loadMe=r.loadMe.bind(Object(c.a)(r)),r}return Object(l.a)(a,t),Object(r.a)(a,[{key:"componentWillMount",value:function(){this.loadMe()}},{key:"loadMe",value:function(){this.props.me?this.setState({selectedAnimal:!0,selectedTerritory:!0}):this.setState({selectedAnimal:!1,selectedTerritory:!1})}},{key:"selectAnimal",value:function(e,t){e.preventDefault(),this.setState({selectedAnimal:!0}),this.props.saveMe(Object.assign({},this.props.me,{animal:t}))}},{key:"selectTerritory",value:function(e,t){e.preventDefault(),this.setState({selectedTerritory:!0}),this.props.saveMe(Object.assign({},this.props.me,{territory:t}))}},{key:"render",value:function(){var e=this,t=this.props.me,a=null,n=null;t&&(a=this.props.me.animal,n=this.props.me.territory);var r=this.state.selectedAnimal,s=this.state.selectedTerritory,i=r&&s,c=this.props.username;return u.a.createElement("div",{className:"Upload container"},u.a.createElement("h2",null,"Your Certificates"),u.a.createElement("p",null,"You have these certificates!You can add your certificate after verification."),u.a.createElement("div",null,u.a.createElement("input",{type:"file",ref:"file",id:"file",name:"file",multiple:"multiple"}),u.a.createElement("br",null),u.a.createElement("input",{ref:"ipfsContent"}),u.a.createElement("button",{onClick:function(){var t=e.refs.file.files[0],a=new FileReader;a.readAsArrayBuffer(t),a.onloadend=function(t){console.log(a),e.saveImageOnIpfs(a).then(function(t){console.log(t),e.setState({imgSrc:t,strHash:t})})}}},"\u63d0\u4ea4\u5230IPFS"),u.a.createElement("p",null,"http://ipfs.io/ipfs/",this.state.strHash),u.a.createElement("button",{onClick:function(){console.log("\u4eceipfs\u8bfb\u53d6\u6570\u636e\u3002");var t=e.state.strHash;h.cat(t).then(function(t){console.log(t);var a=function(e){var t,a,n,r,s,i;for(t="",n=e.length,a=0;a<n;)switch((r=e[a++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t+=String.fromCharCode(r);break;case 12:case 13:s=e[a++],t+=String.fromCharCode((31&r)<<6|63&s);break;case 14:s=e[a++],i=e[a++],t+=String.fromCharCode((15&r)<<12|(63&s)<<6|(63&i)<<0)}return t}(t);console.log(a),e.setState({strContent:a})})}},"\u8bfb\u53d6\u6570\u636e"),u.a.createElement("h1",null,"https://ipfs.io/ipfs/"+this.state.imgSrc),u.a.createElement("img",{alt:"\u533a\u5757\u94fe\u90e8\u843d",src:"http://127.0.0.1:8080/ipfs/"+this.state.imgSrc})),u.a.createElement("h3",null,"Select your animal"),u.a.createElement("div",{className:"row card-deck"},p.a.map(function(t,n){var r=a&&a.id===t.id;return u.a.createElement(d.a,{path:"/animals/",key:n,item:t,select:e.selectAnimal,selected:r})})),u.a.createElement("h3",{className:"select-territory"},"Select your territory"),u.a.createElement("div",{className:"card-deck"},p.e.map(function(t,a){var r=n&&n.id===t.id;return u.a.createElement(d.a,{path:"/territories/",key:a,item:t,select:e.selectTerritory,selected:r})})),u.a.createElement("div",{className:"container row"},u.a.createElement("div",{className:"col-lg-12 done"},u.a.createElement("p",null,u.a.createElement(m.a,{to:i?"/kingdom/".concat(c):"/me",className:"btn btn-primary"},"Done")))))}}]),a}(o.Component);t.a=f}).call(this,a(0).Buffer)},596:function(e,t,a){e.exports=a(1412)},601:function(e,t,a){},602:function(e,t,a){},613:function(e,t){},615:function(e,t){},628:function(e,t){},631:function(e,t){},798:function(e,t){},864:function(e,t,a){},883:function(e,t,a){},884:function(e,t,a){},885:function(e,t,a){},900:function(e,t){},902:function(e,t){},933:function(e,t){},934:function(e,t){},967:function(e,t){}},[[596,1,2]]]);
//# sourceMappingURL=main.e956d0bf.chunk.js.map