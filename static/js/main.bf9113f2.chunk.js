(window.webpackJsonp=window.webpackJsonp||[]).push([[54],[,,function(e,n,t){(function(n){var r=t(70)();e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{rethrowException:!1};try{return n.require?n.require(e):r?r(e):null}catch(o){if(t.rethrowException)throw o;return console.error("Exception while requiring module (from optionalRequire):",o),null}}}).call(this,t(1))},function(e,n,t){"use strict";t.d(n,"a",function(){return h}),t.d(n,"b",function(){return g});var r=t(5),o=t(12),i=t(2),a=t.n(i),c=t(38),u=t.n(c),s=t(30),l=a()("electron"),d=l?l.shell:null,f=l?l.remote.dialog:null,h="_",p=null,g=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"setTitle",value:function(e){if(l)try{l.remote.getCurrentWindow().setTitle(e)}catch(n){console.error("Caught an error while calling browserWindow.setTitle",n)}else document.title=e}},{key:"setTitleBarColor",value:function(e){if(!l&&p!==e){var n=document.querySelector('meta[name="theme-color"]');n&&(n.setAttribute("content",e),p=e)}}},{key:"setBounds",value:function(e,n,t,r){if(l){var o=1;if(Object(s.c)()){var i={x:e,y:n,width:t,height:r};o=l.remote.screen.getDisplayMatching(i).scaleFactor}var a=l.remote.getCurrentWindow();try{a.setBounds({x:Math.round(e/o),y:Math.round(n/o),width:Math.round(t/o),height:Math.round(r/o)})}catch(c){console.warn("Unable to change window bounds",c)}this.show()}}},{key:"show",value:function(){if(l){var e=l.remote.getCurrentWindow();e.showInactive(),e.setAlwaysOnTop(!0)}}},{key:"hide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(l){var n=l.remote.getCurrentWindow();n.isFocused()&&!e||(n.setAlwaysOnTop(!1),n.hide())}}},{key:"onFocus",value:function(e){if(l)return l.remote.getCurrentWindow().on("focus",e)}},{key:"onBlur",value:function(e){if(l)return l.remote.getCurrentWindow().on("blur",e)}},{key:"onClose",value:function(e){if(l)return l.remote.getCurrentWindow().on("close",e)}},{key:"getArguments",value:function(){if(l)return l.remote.getGlobal("args");var e={};return new u.a(window.location.search).forEach(function(n,t){return e[t]=n}),e[h]=e.project?[e.project]:[],e}},{key:"showMessageBox",value:function(e,n){if(f&&l){var t=l.remote.getCurrentWindow();f.showMessageBox(t,{message:e,type:n,buttons:["OK"]})}else alert(e)}},{key:"setUpContextMenu",value:function(){if(l){var e=l.remote.require("electron-editor-context-menu");window.addEventListener("contextmenu",function(n){if(n.target.closest('textarea, input, [contenteditable="true"]')){var t=e();setTimeout(function(){t.popup({window:l.remote.getCurrentWindow()})},30)}})}else document&&document.addEventListener("contextmenu",function(e){return!!e.target.closest('textarea, input, [contenteditable="true"]')||(e.preventDefault(),!1)})}},{key:"openExternalURL",value:function(e){l?d&&d.openExternal(e):window.open(e,"_blank")}},{key:"isFullscreen",value:function(){return!!document.fullscreenElement}},{key:"requestFullscreen",value:function(){var e=document.documentElement;e&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())}},{key:"hasMainMenu",value:function(){return!!l}},{key:"isDev",value:function(){if(!l)return!1;try{var e=l.remote.require("electron-is").dev();return e}catch(n){return console.error("Caught an error while calling electron.remote.require('electron-is').dev",n),!1}}}]),e}()},,,,function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(){try{var e=localStorage.getItem("gd-user-uuid");if(e)return e}catch(t){console.warn("Unable to load stored user UUID",t)}var n=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}();try{localStorage.setItem("gd-user-uuid",n)}catch(t){console.warn("Unable to save user UUID",t)}return n}},,function(e,n,t){"use strict";var r=t(8),o=t.n(r),i=t(3),a=t(7),c=(t(14),function(){try{var e=localStorage.getItem("".concat("gd-local-stats","-program-opening"));if(null!==e)return parseInt(e,10)}catch(n){console.warn("Unable to load stored program opening count",n)}return 0}),u=t(36),s=t(10);t.d(n,"a",function(){return h}),t.d(n,"i",function(){return p}),t.d(n,"d",function(){return g}),t.d(n,"h",function(){return v}),t.d(n,"n",function(){return m}),t.d(n,"f",function(){return w}),t.d(n,"g",function(){return b}),t.d(n,"c",function(){return y}),t.d(n,"j",function(){return k}),t.d(n,"k",function(){return E}),t.d(n,"l",function(){return _}),t.d(n,"m",function(){return A}),t.d(n,"b",function(){return S}),t.d(n,"e",function(){return C});var l=i.b.isDev(),d=null,f=null,h=function(e){if(l)console.info("Development build - Analytics disabled");else{var n=Object(s.b)(),t=Object(s.c)(),r=o.a.utils.cookie("visitor-stats"),i=o.a.utils.timer();i.start(),(d=new o.a({projectId:"593d9f0595cfc907a1f8126a",writeKey:"B917F1DB50EE4C8949DBB374D2962845A22838B425AA43322A37138691A5270EB0358AEE45A4F61AFA7713B9765B4980517A1E276D4973A2E546EA851BF7757523706367ED430C041D2728A63BF61B5D1B2079C75E455DDDFAAC4324128AC2DB"})).extendEvents(function(){var s=e.getUserProfileSync();return f=f||Object(u.a)(),{user:{uuid:Object(a.a)(),uid:s?s.uid:void 0,providerId:s?s.providerId:void 0,email:s?s.email:void 0,emailVerified:s?s.emailVerified:void 0},localStats:{programOpeningCount:c()},versionMetadata:{version:n,versionWithHash:t},startupTimesSummary:f,page:{title:document.title,url:document.location.href},referrer:{url:document.referrer},tech:{browser:o.a.helpers.getBrowserProfile(),ip:"${keen.ip}",ua:"${keen.user_agent}"},time:o.a.helpers.getDatetimeIndex(),visitor:{id:r.get("user_id"),time_on_page:i.value()},keen:{timestamp:(new Date).toISOString(),addons:[{name:"keen:ip_to_geo",input:{ip:"tech.ip"},output:"geo"},{name:"keen:ua_parser",input:{ua_string:"tech.ua"},output:"tech.info"},{name:"keen:url_parser",input:{url:"page.url"},output:"page.info"},{name:"keen:referrer_parser",input:{page_url:"page.url",referrer_url:"referrer.url"},output:"referrer.info"}]}}})}},p=function(){!l&&d&&(!function(){var e=c()+1;try{localStorage.setItem("".concat("gd-local-stats","-program-opening"),""+e)}catch(n){console.warn("Unable to store program opening count",n)}}(),d.recordEvent("program_opening"))},g=function(e){!l&&d&&d.recordEvent("export_launched",{platform:"GDevelop JS Platform",exportKind:e})},v=function(e){!l&&d&&d.recordEvent("new_game_creation",{platform:"GDevelop JS Platform",templateName:e})},m=function(e){!l&&d&&d.recordEvent("tutorial_opened",{tutorialName:e})},w=function(){!l&&d&&d.recordEvent("help_finder_opened",{})},b=function(e){console.log("sendHelpSearch",e),!l&&d&&d.recordEvent("help_search",{searchText:e})},y=function(e,n,t){!l&&d&&d.recordEvent("error_message",{message:e,type:n,rawError:t})},k=function(e){!l&&d&&d.recordEvent("signup",{email:e})},E=function(e){var n=e.mode,t=e.id;!l&&d&&d.recordEvent("subscription-check-dialog-shown",{mode:n,title:t})},_=function(){!l&&d&&d.recordEvent("subscription-check-dialog-dismiss")},A=function(){!l&&d&&d.recordEvent("subscription-dialog-shown",{})},S=function(e){!l&&d&&d.recordEvent("choose-plan-click",{planId:e})},C=function(e){!l&&d&&d.recordEvent("open_external_editor",{editorName:e})}},function(e,n,t){"use strict";(function(e){t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return u});var r=t(21),o=t.n(r),i=function(){return o.a.version},a=function(){return o.a.versionWithHash},c="",u=function(){if(c)return c;var n=e.gd;return c=n?n.VersionWrapper.fullString():"Unknown"}}).call(this,t(1))},,,,function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(5),o=t(4),i=(t(53),t(28)),a=function e(){var n=this;Object(r.a)(this,e),this.user=null,this._onUserChangeCb=null,this.onUserChange=function(e){n._onUserChangeCb=e},this.createAccount=function(e){return o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(e){n.user=e.user}).catch(function(e){throw console.error("Error while creating account:",e),e})},this.login=function(e){return o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(e){n.user=e.user}).catch(function(e){throw console.error("Error while login:",e),e})},this.forgotPassword=function(e){return o.auth().sendPasswordResetEmail(e.email)},this.getUserProfile=function(e){if(!n.isAuthenticated())return e({unauthenticated:!0});e(null,n.user)},this.getUserProfileSync=function(){return n.user},this.logout=function(){o.auth().signOut().then(function(){console.log("Logout successful")}).catch(function(e){console.log("An error happened during logout",e)})},this.getAuthorizationHeader=function(){return n.user?n.user.getIdToken().then(function(e){return"Bearer ".concat(e)}):Promise.reject(new Error("User is not authenticated"))},this.isAuthenticated=function(){return!!n.user},o.initializeApp(i.c),o.auth().onAuthStateChanged(function(e){n.user=e||null,n._onUserChangeCb&&n._onUserChangeCb()})}},,,,,,,function(e,n){e.exports={version:"5.0.0-beta88",gitHash:"159ab6f814be0c438e26630e4e43cde684317657",versionWithHash:"5.0.0-beta88-159ab6f814be0c438e26630e4e43cde684317657"}},,,,,function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return a}),t.d(n,"c",function(){return c});var r=t(3),o=t(9),i=function(e){r.b.showMessageBox(e,"info")},a=function(e,n){r.b.showMessageBox(e,"error"),Object(o.c)(e,"error",n),console.error(e,"raw error:",n)},c=function(e,n){r.b.showMessageBox(e,"warning"),console.warn(e,"raw error:",n)}},,function(e,n,t){"use strict";t.d(n,"d",function(){return r}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"f",function(){return a}),t.d(n,"e",function(){return c}),t.d(n,"b",function(){return u});var r={options:{destinationBucketBaseUrl:"https://s3-".concat("eu-west-1",".amazonaws.com/").concat("gd-games-preview","/")}},o={baseUrl:"https://api.gdevelop-app.com/build"},i={apiKey:"AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc",authDomain:"gdevelop-services.firebaseapp.com",databaseURL:"https://gdevelop-services.firebaseio.com",projectId:"gdevelop-services",storageBucket:"gdevelop-services.appspot.com",messagingSenderId:"44882707384"},a={baseUrl:"https://api.gdevelop-app.com/usage"},c={baseUrl:"https://api.gdevelop-app.com/release"},u={baseUrl:"https://raw.githubusercontent.com/4ian/GDevelop-extensions/master"}},,function(e,n,t){"use strict";t.d(n,"c",function(){return u}),t.d(n,"a",function(){return s}),t.d(n,"b",function(){return l});var r=t(2),o=t.n(r)()("electron"),i=!1;o&&(i=o.remote.require("electron-is").windows());var a=!("undefined"===typeof navigator||!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)),c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test("undefined"!==typeof navigator?navigator.userAgent:""),u=function(){return i},s=function(){return a},l=function(){return c}},,,,,,function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return o});var r=e.GD_STARTUP_TIMES;r||console.error("Could not find GD_STARTUP_TIMES array. Have you declared it in index.html, in a synchronous script?");var o=function(){var e=["<init>",0];return{steps:r.map(function(n){var t={stepName:n[0],time:n[1],elapsedTime:n[1]-e[1]};return e=n,t}),totalStartupTime:e[1]}}}).call(this,t(1))},,,function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(40),o=t.n(r),i=t(7),a=t(10),c=function(){o.a.config("https://e10c176ee68f432199cd292ba181e03b@sentry.io/233519",{release:Object(a.c)()}).install().setUserContext({id:Object(i.a)()})}},,function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(7),o=t(2),i=t.n(o),a=t(3),c=i()("electron"),u=function(){var e,n,t,o,i,u,s,l;c||a.b.isDev()?console.info("Electron or development build - Fullstory disabled"):(window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="8DWZ1",window._fs_namespace="FS",e=window,n=document,t=window._fs_namespace,o="script",i="user",t in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((s=e[t]=function(e,n){s.q?s.q.push([e,n]):s._api(e,n)}).q=[],(u=n.createElement(o)).async=1,u.src="https://"+_fs_host+"/s/fs.js",(l=n.getElementsByTagName(o)[0]).parentNode.insertBefore(u,l),s.identify=function(e,n){s(i,{uid:e}),n&&s(i,n)},s.setUserVars=function(e){s(i,e)},s.identifyAccount=function(e,n){u="account",(n=n||{}).acctId=e,s(u,n)},s.clearUserCookie=function(e,t,r){if(!e||document.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))for(t=n.domain;n.cookie="fs_uid=;domain="+t+";path=/;expires="+new Date(0).toUTCString(),!((r=t.indexOf("."))<0);)t=t.slice(r+1)})),window.FS&&window.FS.identify(Object(r.a)(),{})}},function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),o=".";function i(e){if("serviceWorker"in navigator){var n=new URL(o,window.location.href);if(n.origin!==window.location.origin)return void console.log("The origin in PUBLIC_URL (".concat(n.origin,") is different than the current origin (").concat(window.location.origin,") - Service Worker disabled"));window.addEventListener("load",function(){var n="".concat(o,"/service-worker.js");r?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):a(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):a(n,e)})}else console.log("Development build (or unsupported browser) - Service Worker disabled")}function a(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}},function(e,n,t){},function(e,n,t){e.exports=t(45)},function(e,n,t){"use strict";t.r(n),function(e){var n=t(5),r=t(12),o=t(23),i=t(22),a=t(24),c=(t(46),t(11)),u=t.n(c),s=t(25),l=t.n(s),d=t(14),f=t(9),h=t(39),p=t(41),g=t(42),v=(t(43),t(2)),m=t.n(v),w=t(26),b=e.GD_STARTUP_TIMES||[],y=e.initializeGDevelopJs,k=m()("electron"),E=function(c){function u(){var e,t;Object(n.a)(this,u);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={App:null},t.authentification=new d.a,t}return Object(a.a)(u,c),Object(r.a)(u,[{key:"componentDidMount",value:function(){var n=this;Object(f.a)(this.authentification),Object(h.a)(),Object(p.a)(),b.push(["bootstrapperComponentDidMount",performance.now()]),y().then(function(r){e.gd=r,b.push(["libGD.js initialization done",performance.now()]),k?Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,76)).then(function(e){return n.setState({App:e.create(n.authentification)})}).catch(n.handleLoadError):Promise.all([t.e(0),t.e(58),t.e(1),t.e(3)]).then(t.bind(null,77)).then(function(e){return n.setState({App:e.create(n.authentification)})}).catch(n.handleLoadError)})}},{key:"handleLoadError",value:function(e){var n=k?"Please restart the application or reinstall the latest version if the problem persists.":"Please reload the page and check your internet connectivity.";Object(w.a)("Unable to load GDevelop. ".concat(n),e)}},{key:"render",value:function(){var e=this.state.App;return e||null}}]),u}(c.Component),_=document.getElementById("root");_?(b.push(["reactDOMRenderCall",performance.now()]),l.a.render(u.a.createElement(E,null),_)):console.error("No root element defined in index.html"),Object(g.a)(),Object(f.i)()}.call(this,t(1))}],[[44,55,57]]]);
//# sourceMappingURL=main.bf9113f2.chunk.js.map