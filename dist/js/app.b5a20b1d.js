(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-386935cf":"a058ba2d","chunk-27157a4e":"08180cdf","chunk-66abad5e":"0bff1e5c","chunk-56f63f40":"a9b6f583","chunk-57220c12":"ed49d73b","chunk-5d55040a":"c6ee8696","chunk-393828af":"c742d9b6","chunk-7fb7c444":"ee67c08f","chunk-ff2ec14e":"119ed081","chunk-b4652998":"4432af74","chunk-2d2315ac":"0b11d4c5","chunk-4b21982f":"7f9bc4cb","chunk-77fdd4ce":"acc2faf0","chunk-d059e4b2":"1d899c03"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-393828af":1,"chunk-7fb7c444":1,"chunk-ff2ec14e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-386935cf":"31d6cfe0","chunk-27157a4e":"31d6cfe0","chunk-66abad5e":"31d6cfe0","chunk-56f63f40":"31d6cfe0","chunk-57220c12":"31d6cfe0","chunk-5d55040a":"31d6cfe0","chunk-393828af":"28121186","chunk-7fb7c444":"28121186","chunk-ff2ec14e":"28121186","chunk-b4652998":"31d6cfe0","chunk-2d2315ac":"31d6cfe0","chunk-4b21982f":"31d6cfe0","chunk-77fdd4ce":"31d6cfe0","chunk-d059e4b2":"31d6cfe0"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"199e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{name:"addtocart",resizable:!0,adaptive:!0,height:"auto",maxWidth:700,scrollable:!0}},[n("div",{staticClass:"cart__modal"},[n("ul",{staticClass:"cart__list"},t._l(this.cartCourses,function(e){return n("li",{key:e.id,staticClass:"cart__item"},[n("img",{staticClass:"cart__img",attrs:{src:e.imageUrl,alt:e.title}}),n("div",{staticClass:"cart__info"},[n("router-link",{staticClass:"cart__link",attrs:{to:{name:"CourseDetails",params:{course_id:e.id}}}},[n("div",{staticClass:"cart__tag-box d-none-phone"},[e.discount?n("div",{staticClass:"cart__tag"},[t._v("精選課程")]):t._e()]),n("div",{staticClass:"cart__title d-none-phone"},[t._v(t._s(e.title))]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"cart__category"},[t._v(t._s(e.categorySelected)+"｜")]),n("div",{staticClass:"cart__coach"},[t._v(t._s(e.coach)+"｜")]),n("div",{staticClass:"cart__time"},[t._v(t._s(e.week)+" "+t._s(e.time))])])]),n("div",{staticClass:"cart__handle"},[n("div",{staticClass:"cart__price"},[n("div",{staticClass:"cart__price--origin"},[t._v(t._s(t._f("currency")(e.price)))])]),n("button",{staticClass:"cart__remove btn",on:{click:function(n){return t.deleteCourse(e)}}},[n("i",{staticClass:"far fa-trash-alt"})])])],1)])}),0),n("div",{staticClass:"btn-footer"},[n("button",{staticClass:"btn btn-primary",staticStyle:{width:"100px"},on:{click:function(e){return t.checkout()}}},[t._v("結帳")]),n("button",{staticClass:"btn btn-primary--cancel",staticStyle:{width:"120px"},on:{click:function(e){return t.hide()}}},[t._v("繼續逛")])])])])},r=[],s={name:"AddToCartModal",computed:{cartCourses:function(){return this.$store.state.cart.cart}},watch:{cartCourses:function(){0===this.cartCourses.length&&this.hide()}},methods:{deleteCourse:function(t){this.$store.commit("cart/removeItem",t)},checkout:function(){this.hide(),this.$router.push("/cart")},hide:function(){this.$modal.hide("addtocart")}}},o=s,i=n("2877"),c=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("96cf");var a=n("3b8d"),r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$route.path.includes("admin")?t._e():n("nav-bar",{attrs:{navbar:t.navbar}}),n("transition",{attrs:{name:"slide-fade"}},[n("router-view",{attrs:{navbar:t.navbar}})],1),t.$route.path.includes("admin")?t._e():n("app-footer"),t.$route.path.includes("admin")?t._e():n("announcebar",{class:{"announce-bar--hidden":!t.showNavbar}})],1)},o=[],i=n("1157"),c=n.n(i),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announce-bar"},[n("div",{staticClass:"announce-bar__text"},[t._v("\n    全館9折｜精選課程輸入折扣碼\n    "),n("b",[t._v("\n      🤘\n      "),n("span",{staticClass:"announce-bar__code",on:{click:t.copyCode}},[t._v(t._s(t.code))]),t._v("🤘\n    ")]),t._v("再折\n    "),n("b",[t._v("$100")])])])},l=[],d={name:"Announcebar",data:function(){return{code:"LOVEFITTING"}},methods:{copyCode:function(){var t=document.createElement("textarea");t.value=this.code,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},f=d,m=n("2877"),p=Object(m["a"])(f,u,l,!1,null,null,null),h=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation navigation-dark"},[n("ul",{staticClass:"head-nav"},[n("li",{staticClass:"head-nav__item"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo-box"},[t._v("frontFitness")])])],1),n("li",{staticClass:"head-nav__item d-none-phone"},[n("div",{staticClass:"head-nav__link btn",on:{click:function(e){return e.preventDefault(),t.selectCat("所有課程")}}},[n("i",{staticClass:"fas fa-th-large"}),t._v(" 探索課程\n      ")])])]),n("ul",{staticClass:"head-nav"},[n("li",{staticClass:"head-nav__item cart-btn d-none-phone"},[n("router-link",{staticClass:"head-nav__link head-nav__user btn",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart fa-lg"}),n("div",{staticClass:"cart-qty"},[t._v(t._s(t.cartItem))])])],1),t.user?t._e():n("li",{staticClass:"head-nav__item d-none-phone"},[n("div",{staticClass:"head-nav__link btn",on:{click:function(e){t.show(),t.status="註冊"}}},[t._v("註冊")])]),t.user?t._e():n("li",{staticClass:"head-nav__item d-none-phone"},[n("div",{staticClass:"head-nav__link btn",on:{click:function(e){t.show(),t.status="登入"}}},[t._v("登入")])]),t.user?n("li",{staticClass:"head-nav__item d-none-phone cart-btn"},[n("router-link",{staticClass:"head-nav__link head-nav__user btn",attrs:{to:"/admin/profile"}},[n("img",{staticClass:"head-nav__user-img",attrs:{src:t.user.profile.userImg}}),n("span",{staticClass:"head-nav__user-name"},[t._v(t._s(t.user.profile.name))])])],1):t._e(),t.user?n("li",{staticClass:"head-nav__item d-none-phone"},[n("div",{staticClass:"head-nav__link btn",on:{click:function(e){return t.logOut()}}},[t._v("登出")])]):t._e(),n("li",{staticClass:"head-nav__item d-block-phone"},[n("div",{staticClass:"res-nav res-nav"},[n("button",{staticClass:"btn res-nav__button",on:{click:function(e){t.showRwdNav=!t.showRwdNav}}},[t.showRwdNav?n("i",{staticClass:"fas fa-times"}):n("i",{staticClass:"fas fa-bars"})]),n("div",{staticClass:"res-nav__background",class:{"res-nav__background--active":t.showRwdNav}}),n("nav",{staticClass:"res-nav__nav",class:{"res-nav__nav--active":t.showRwdNav}},[n("div",{staticClass:"res-nav__list"},[n("div",{staticClass:"mb-sm d-flex"},[t.user?t._e():n("div",{staticClass:"res-nav__link-logreg btn",on:{click:function(e){t.show(),t.status="註冊"}}},[n("i",{staticClass:"fas fa-user-plus"}),n("p",[t._v("註冊")])]),t.user?n("div",{staticClass:"cart-btn"},[n("router-link",{staticClass:"head-nav__user btn",attrs:{to:"/admin/profile"}},[n("img",{staticClass:"res-nav__user-img",attrs:{src:t.user.profile.userImg}}),n("span",{staticClass:"res-nav__user-name"},[t._v(t._s(t.user.profile.name))])])],1):n("div",{staticClass:"res-nav__link-logreg btn",on:{click:function(e){t.show(),t.status="登入"}}},[n("i",{staticClass:"fas fa-sign-in-alt"}),n("p",[t._v("登入")])])]),n("ul",[n("li",{staticClass:"res-nav__item cart-btn"},[n("router-link",{staticClass:"head-nav__user",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart fa-lg"}),t._v(" 購物車\n                  "),n("div",{staticClass:"cart-qty"},[t._v(t._s(t.cartItem))])])],1),t._l(t.navbar,function(e){return n("li",{key:e.cat,staticClass:"res-nav__item",on:{click:function(n){return n.preventDefault(),t.selectCat(e.cat)}}},[n("i",{class:""+e.icon}),n("p",[t._v(t._s(e.cat+" "+e.engCat))])])})],2)]),t.user?n("div",{staticClass:"res-nav__link-logout",on:{click:function(e){return t.logOut()}}},[n("i",{staticClass:"fas fa-sign-out-alt"})]):t._e()])])])]),n("modal",{attrs:{name:"logRegModal",width:"330px",height:"auto"}},[n("div",{staticClass:"log-reg-modal"},[n("div",{staticClass:"log-reg-modal__tab"},[n("button",{staticClass:"btn log-reg-modal__tab-btn",class:{"log-reg-modal__tab-btn--active":"註冊"===t.status},on:{click:function(e){t.status="註冊",t.reset()}}},[n("i",{staticClass:"fas fa-user-plus"}),t._v(" 註冊會員\n        ")]),n("button",{staticClass:"btn log-reg-modal__tab-btn",class:{"log-reg-modal__tab-btn--active":"登入"===t.status},on:{click:function(e){t.status="登入",t.reset()}}},[n("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" 登入會員\n        ")])]),n("div",{staticClass:"log-reg-modal__panel mt-sm"},[n("form",["註冊"===t.status?n("div",{staticClass:"form__row"},[n("div",{staticClass:"form__group"},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"form__label",attrs:{for:"reg-name"}},[n("i",{staticClass:"fas fa-user"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form__input",class:{"form__input--warning":t.$v.form.name.$error},attrs:{type:"text",placeholder:"名稱 *",id:"reg-name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t.$v.form.name.$dirty?[t.$v.form.name.required?t._e():n("span",{staticClass:"text-warning"},[t._v("名稱為必填欄位")])]:t._e()],2)]):t._e(),n("div",{staticClass:"form__row"},[n("div",{staticClass:"form__group"},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"form__label",attrs:{for:"reg-email"}},[n("i",{staticClass:"fas fa-envelope"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"contact-form__input form__input",class:{"form__input--warning":t.$v.form.email.$error},attrs:{type:"text",placeholder:"電子信箱 *",id:"reg-email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t.$v.form.email.$dirty?[t.$v.form.email.required?t._e():n("span",{staticClass:"text-warning"},[t._v("電子信箱為必填欄位")]),t.$v.form.email.email?t._e():n("span",{staticClass:"text-warning"},[t._v("請輸入正確的電子信箱格式")])]:t._e()],2)]),n("div",{staticClass:"form__row"},[n("div",{staticClass:"form__group"},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"form__label",attrs:{for:"reg-password"}},[n("i",{staticClass:"fas fa-lock"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"contact-form__input form__input",class:{"form__input--warning":t.$v.form.password.$error},attrs:{type:"password",placeholder:"密碼 *",id:"reg-password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t.$v.form.password.$dirty?[t.$v.form.password.required?t._e():n("span",{staticClass:"text-warning"},[t._v("密碼為必填欄位")])]:t._e()],2)]),"註冊"===t.status?n("div",{staticClass:"form__row"},[n("div",{staticClass:"form__group"},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"form__label",attrs:{for:"reg-password-confirm"}},[n("i",{staticClass:"fas fa-unlock-alt"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.passwordConfirm,expression:"form.passwordConfirm"}],staticClass:"contact-form__input form__input",class:{"form__input--warning":t.$v.form.passwordConfirm.$error},attrs:{type:"password",placeholder:"密碼確認 *",id:"reg-password-confirm",required:""},domProps:{value:t.form.passwordConfirm},on:{input:function(e){e.target.composing||t.$set(t.form,"passwordConfirm",e.target.value)}}})]),t.$v.form.passwordConfirm.$dirty?[t.$v.form.passwordConfirm.required?t._e():n("span",{staticClass:"text-warning"},[t._v("密碼確認為必填欄位")]),t.$v.form.passwordConfirm.sameAsPassword||""===t.form.passwordConfirm?t._e():n("span",{staticClass:"text-warning"},[t._v("與密碼不一致 請再確認")])]:t._e()],2)]):t._e(),n("div",{staticClass:"form__row",staticStyle:{"margin-top":"20px"}},[n("div",{staticClass:"form__group"},["註冊"===t.status?n("button",{staticClass:"btn-primary btn",on:{click:function(e){return e.preventDefault(),t.handleRegister()}}},[t._v("註冊")]):t._e(),"登入"===t.status?n("button",{staticClass:"btn-primary btn",on:{click:function(e){return e.preventDefault(),t.handleLogin()}}},[t._v("登入")]):t._e()])])])])])])],1)},g=[],_=n("b5ae"),b={name:"NavBar",props:["navbar"],data:function(){return{form:{name:"",email:"",password:"",passwordConfirm:"",img:"https://png2.pngtree.com/svg/20161215/9bc7bae28b.png"},status:"",showRwdNav:!1}},validations:{form:{name:{required:_["required"]},email:{required:_["required"],email:_["email"]},password:{required:_["required"]},passwordConfirm:{required:_["required"],sameAsPassword:Object(_["sameAs"])("password")}}},computed:{user:function(){return this.$store.state.auth.user},isRegisterValid:function(){return!this.$v.form.name.$invalid&&!this.$v.form.email.$invalid&&!this.$v.form.password.$invalid&&!this.$v.form.passwordConfirm.$invalid},isLoginValid:function(){return!this.$v.form.email.$invalid&&!this.$v.form.password.$invalid},cartItem:function(){return this.$store.state.cart.cart.length},cat:function(){return this.$store.state.courses.cat}},watch:{cat:function(){this.showRwdNav=!1},$route:function(){this.showRwdNav=!1}},methods:{reset:function(){this.form.name="",this.form.email="",this.form.password="",this.form.passwordConfirm=""},selectCat:function(t){var e=this;this.$store.dispatch("courses/getCourses",t).then(function(){return e.$router.push("/courses")})},handleRegister:function(){var t=this;this.$v.$touch(),this.isRegisterValid?this.$store.dispatch("auth/signUp",this.form).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/createUserProfile",{uid:n.uid,userProfile:{userId:n.uid,name:t.form.name,email:t.form.email,userImg:t.form.img}});case 2:t.$toasted.success("註冊成功",{duration:2e3}),t.hide();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){return t.$toasted.error(e,{duration:3e3})}):this.$toasted.error("請正確填寫必要資訊",{duration:3e3})},handleLogin:function(){var t=this;this.$v.$touch(),this.isLoginValid?this.$store.dispatch("auth/signIn",this.form).then(function(){t.$toasted.success("登入成功",{duration:2e3}),t.hide()}).catch(function(e){return t.$toasted.error(e,{duration:2e3})}):this.$toasted.error("請正確填寫必要資訊",{duration:3e3})},logOut:function(){var t=this;this.$store.dispatch("auth/signOut").then(function(){t.$toasted.success("成功登出",{duration:2e3}),t.$router.push({name:"home"})})},show:function(t){this.$modal.show("logRegModal")},hide:function(){this.reset(),this.$modal.hide("logRegModal")}}},C=b,w=Object(m["a"])(C,v,g,!1,null,null,null),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo-box"},[t._v("frontFitness")])]),t._m(0),n("p",{staticClass:"footer__copyright text-center"},[t._v("Copyright © 2020 Front-Fitness. All rights reserved.")])],1)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-box"},[n("div",{staticClass:"footer__about"},[n("p",{staticClass:"footer__title"},[t._v("關於我們")]),n("p",[t._v("fronFitness全球連鎖健身中心，20年以上專業經驗、名人口碑首選推薦、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單。")])]),n("div",{staticClass:"footer__contact"},[n("p",{staticClass:"footer__title"},[t._v("聯絡我們")]),n("ul",{staticClass:"footer__list"},[n("li",{staticClass:"footer__item"},[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" 110 台北市信義路五段7號\n          ")]),n("li",{staticClass:"footer__item"},[n("i",{staticClass:"fas fa-mobile-alt"}),t._v(" ＋886 2 8101 8800\n          ")]),n("li",{staticClass:"footer__item"},[n("i",{staticClass:"far fa-envelope"}),t._v(" frontfitness@service.com.tw\n          ")])]),n("div",{staticClass:"footer__social-media"},[n("a",{staticClass:"footer__media-link",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f"})]),n("a",{staticClass:"footer__media-link",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),n("a",{staticClass:"footer__media-link",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])])])}],P={name:"Footer"},$=P,j=Object(m["a"])($,k,O,!1,null,null,null),x=j.exports,A={name:"APP",components:{Announcebar:h,NavBar:y,AppFooter:x},data:function(){return{showNavbar:!1,lastScrollPosition:0,navbar:[{cat:"所有課程",engCat:"ALL COURSES",des:"最豐富的運動課程，有氧、瑜珈、游泳、飛輪等多元項目給注重健康的你！",icon:"fas fa-th-large"},{cat:"有氧課程",engCat:"Aerobic course",des:"最多元的有氧課程，放鬆愉快的上課方式，隨著音樂一起動，減脂甩肉好easy！",icon:"fas fa-bowling-ball"},{cat:"瑜珈課程",engCat:"Yoga course",des:"OL下班最愛的運動！增強肌力柔軟度、矯正姿態，瘦身舒壓，為妳找回沉靜心靈。",icon:"fas fa-pray"},{cat:"游泳課程",engCat:"Swimming course",des:"專業小班授課，自由式、蛙式、仰式、蝶式手把手教到會，零基礎也能身如蛟龍。",icon:"fas fa-swimmer"},{cat:"飛輪課程",engCat:"Spinning bike course",des:"高效燃脂極速飆汗，增強肌力與心肺耐力，忙碌現代人最有效率的減脂方式！",icon:"fas fa-bicycle"},{cat:"其他課程",engCat:"Others",des:"精選各式特殊運動，重訓、武術、桌球等...這裡通通有！",icon:"fas fa-dumbbell"}]}},watch:{$route:function(){c()(".navigation").addClass("navigation-dark"),this.showNavbar=!1}},methods:{scrollManNav:function(){"/"===this.$route.path&&(c()(window).scrollTop()>200?c()(".navigation").addClass("navigation-dark"):c()(".navigation").removeClass("navigation-dark"))},scrollAnnounce:function(){var t=window.pageYOffset||document.documentElement.scrollTop;t<60||Math.abs(t-this.lastScrollPosition)<60||(this.showNavbar=t<this.lastScrollPosition,this.lastScrollPosition=t)}},mounted:function(){c()(window).scroll(this.scrollManNav),c()(window).scroll(this.scrollAnnounce)}},I=A,D=(n("5c0b"),Object(m["a"])(I,s,o,!1,null,null,null)),S=D.exports,E=n("59ca"),R=n.n(E),q=(n("ea7b"),n("8c4f"));r["default"].use(q["a"]);var L=new q["a"]({scrollBehavior:function(){document.getElementById("app").scrollIntoView()},routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-386935cf"),n.e("chunk-66abad5e")]).then(n.bind(null,"eae1"))}},{path:"/admin",name:"dashboard",component:function(){return Promise.all([n.e("chunk-5d55040a"),n.e("chunk-ff2ec14e")]).then(n.bind(null,"e313"))},meta:{requiresAuth:!0},children:[{path:"profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-b4652998"),n.e("chunk-77fdd4ce")]).then(n.bind(null,"796c"))},meta:{requiresAuth:!0}},{path:"courses-admin",name:"coursesAdmin",component:function(){return Promise.all([n.e("chunk-5d55040a"),n.e("chunk-7fb7c444")]).then(n.bind(null,"6c9e"))},meta:{requiresAuth:!0}},{path:"course-edit",name:"courseNewEdit",component:function(){return Promise.all([n.e("chunk-5d55040a"),n.e("chunk-393828af")]).then(n.bind(null,"a238"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return Promise.all([n.e("chunk-b4652998"),n.e("chunk-2d2315ac")]).then(n.bind(null,"efd9"))},meta:{requiresAuth:!0}}]},{path:"/courses",name:"courses-index",component:function(){return Promise.all([n.e("chunk-386935cf"),n.e("chunk-27157a4e")]).then(n.bind(null,"2a65"))}},{path:"/courses/:course_id",name:"CourseDetails",component:function(){return Promise.all([n.e("chunk-b4652998"),n.e("chunk-4b21982f")]).then(n.bind(null,"9839"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-57220c12").then(n.bind(null,"2355"))}},{path:"/checkout",name:"Checkout",component:function(){return n.e("chunk-56f63f40").then(n.bind(null,"b7c8"))},meta:{requiresAuth:!0}},{path:"/checkout/:paymentId",name:"CheckoutInfo",component:function(){return Promise.all([n.e("chunk-b4652998"),n.e("chunk-d059e4b2")]).then(n.bind(null,"324c"))},meta:{requiresAuth:!0}}]}),N=n("f5af"),F=n.n(N),U=(n("e829"),n("1881")),T=n.n(U),B=n("5299"),M=n.n(B),V=n("9062"),z=n.n(V),K=(n("e40d"),n("a481"),n("c5f6"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a}))}),W=n("487a"),J=n.n(W),Y=n("1dce"),G=n.n(Y),H=n("825a"),Q=n("a65d"),X=n.n(Q),Z=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),tt=n("2f62"),et=n("3317"),nt=(n("588e"),n("e71f"),R.a.initializeApp({apiKey:"AIzaSyCClp8qV6ATBPv5K0bAkzimUa2B-LQqphg",authDomain:"front-gym.firebaseapp.com",databaseURL:"https://front-gym.firebaseio.com",projectId:"front-gym",storageBucket:"front-gym.appspot.com",messagingSenderId:"211525000826",appId:"1:211525000826:web:d956ed3545e2016d"}).firestore()),at={namespaced:!0,state:function(){return{user:null}},getters:{isAuthenticated:function(t){return t.user}},actions:{signUp:function(t,e){var n=e.email,a=e.password;return R.a.auth().createUserWithEmailAndPassword(n,a).then(function(t){var e=t.user;return e}).catch(function(t){var e;switch(t.code){case"auth/email-already-in-use":e="帳號已存在 請嘗試其他電子信箱";break;case"auth/invalid-email":e="不符規定的格式 請嘗試其他電子信箱";break;case"auth/weak-password":e="密碼強度太弱 請嘗試新的密碼組合";break;default:e="註冊失敗 請重新嘗試"}return Promise.reject(e)})},signIn:function(t,e){var n=e.email,a=e.password;return R.a.auth().signInWithEmailAndPassword(n,a).catch(function(t){var e="auth/user-not-found"===t.code?"無使用者 請再確認帳號":"密碼錯誤 請再重試";return Promise.reject(e)})},signOut:function(t){var e=t.commit;return R.a.auth().signOut().then(function(){return e("setAuthUser",null)})},createUserProfile:function(t,e){var n=e.uid,a=e.userProfile;return nt.collection("users").doc(n).set(a)},storeAuthUser:function(t,e){var n=t.commit;return nt.collection("users").doc(e.uid).get().then(function(t){var a=t.data();return e.profile=a,n("setAuthUser",e),a})},updateUser:function(t,e){var n=t.commit,a=e.id,r=e.user;r&&a&&nt.collection("users").doc(a).update(r).then(function(){n("changeUserView",r)})}},mutations:{setAuthUser:function(t,e){t.user=e},changeUserView:function(t,e){t.user.profile.name=e.name,t.user.profile.userImg=e.userImg}}},rt={namespaced:!0,state:function(){return{cart:[],coupon:!1,discount:100,total:{totalOrigin:0,totalDiscount:0,totalPrice:0}}},mutations:{addToCart:function(t,e){t.cart.push(e)},removeItem:function(t,e){var n=t.cart.indexOf(e);t.cart.splice(n,1)},addCouponCode:function(t,e){t.coupon=e},total:function(t){t.cart.length>0?(t.total.totalOrigin=t.cart.map(function(t){return t.price}).reduce(function(t,e){return t+e}),t.total.totalDiscount=t.coupon?t.cart.filter(function(t){return t.discount}).length*t.discount:0,t.total.totalPrice=t.total.totalOrigin-t.total.totalDiscount):(t.total.coupon=!1,t.total.totalOrigin=0,t.total.totalDiscount=0,t.total.totalPrice=0)},clearCart:function(t){t.cart=[],t.total.totalOrigin=0,t.total.totalDiscount=0,t.total.totalPrice=0}}};n("20d6");function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach(function(e){Object(Z["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var it,ct={namespaced:!0,state:function(){return{comments:[]}},actions:{getComments:function(t,e){var n=t.commit;return nt.collection("comments").where("toId","==",e).get().then(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.docs.map(function(t){var e=ot({id:t.id},t.data());return nt.collection("users").doc(e.user).get().then(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.data();case 2:e.user=t.sent;case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),e});case 2:r=t.sent,n("setComments",r);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},createComment:function(t,e){var n=t.commit,a=e.comment,r=e.user;a.timestamp=Date.now(),nt.collection("comments").add(a).then(function(t){a.user=r.profile,a.id=t.id,n("addComment",a)})},updateComment:function(t,e){var n=t.commit;e.timestamp=Date.now(),nt.collection("comments").doc(e.id).update({comment:e.comment,rating:e.rating,timestamp:e.timestamp}).then(function(){n("changeComment",e)})}},mutations:{setComments:function(t,e){t.comments=e},addComment:function(t,e){t.comments.push(e)},changeComment:function(t,e){var n=t.comments.findIndex(function(t){return t.id===e.id});r["default"].set(t.comments[n],"comment",e.comment),r["default"].set(t.comments[n],"rating",e.rating),r["default"].set(t.comments[n],"timestamp",e.timestamp)}}},ut=n("75fc");function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach(function(e){Object(Z["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ft={namespaced:!0,state:function(){return{cat:"所有課程",status:"",course:{},courses:[],coach:{},pagination:{totalLength:null,itemCount:7,lastItem:null,previousFirstItems:[]}}},getters:{currentPage:function(t){return t.pagination.previousFirstItems?t.pagination.previousFirstItems.length:1}},actions:{getPageLength:function(t){var e=t.commit;nt.collection("courses").get().then(function(t){e("setLength",t.size)})},getCourses:function(t,e){var n,a=t.commit;return a("loading",!0,{root:!0}),a("setCourses",[]),n="所有課程"===e?nt.collection("courses").get():nt.collection("courses").where("categorySelected","==",e).get(),n.then(function(t){var n=t.docs.map(function(t){return dt({},t.data(),{id:t.id})});return a("setCat",e),a("setCourses",n),a("loading",!1,{root:!0}),n})},getCourseById:function(t,e){var n=t.commit;n("loading",!0,{root:!0}),n("setCourse",{}),nt.collection("courses").doc(e).get().then(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.data(),a.id=e.id,t.next=4,nt.collection("coaches").where("name","==",a.coach).get().then(function(t){var e=t.docs.map(function(t){return dt({},t.data())});n.apply(void 0,["setCoach"].concat(Object(ut["a"])(e)))});case 4:n("setCourse",a),n("loading",!1,{root:!0});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},getCoursesLimit:function(t){var e=t.commit,n=t.state;return e("loading",!0,{root:!0}),e("setCourses",[]),e("clearPreviousFirstItem"),nt.collection("courses").orderBy("categorySelected","desc").limit(n.pagination.itemCount).get().then(function(t){var n=t.docs.map(function(t){return dt({id:t.id},t.data())});return e("setCourses",n),e("setLastItem",t.docs[t.docs.length-1]),e("setPreviousFirstItem",t.docs[0]),e("loading",!1,{root:!0}),n})},getMoreCourses:function(t,e){var n,a=t.commit,r=t.state;if(a("loading",!0,{root:!0}),"next"===e)n=nt.collection("courses").orderBy("categorySelected","desc").startAfter(r.pagination.lastItem).limit(r.pagination.itemCount);else{var s=r.pagination.previousFirstItems.length-1,o=r.pagination.previousFirstItems[s-1];if(!o)return;r.pagination.previousFirstItems.splice(s,1),n=nt.collection("courses").orderBy("categorySelected","desc").startAt(o).limit(r.pagination.itemCount)}return n.get().then(function(t){if(0===t.docs.length)return[];var n=t.docs.map(function(t){return dt({},t.data(),{id:t.id})});return a("setCourses",n),a("setLastItem",t.docs[t.docs.length-1]),"next"===e&&a("setPreviousFirstItem",t.docs[0]),a("loading",!1,{root:!0}),n})},createCourse:function(t,e){nt.collection("courses").add(e).catch(function(t){return t})},removeCourse:function(t,e){var n=t.commit;return nt.collection("courses").doc(e).delete().then(function(){n("setCourseDelete",e)})},updateCourse:function(t,e){var n=t.commit,a=e.id,r=e.course;r&&a&&nt.collection("courses").doc(a).update(r).then(function(){n("setCurCourse",{id:a,course:r}),n("setCurCourse",r)})}},mutations:(it={setCat:function(t,e){t.cat=e},setCourses:function(t,e){t.courses=e},setCourse:function(t,e){t.course=e},setCoach:function(t,e){t.coach=e},setCurCourse:function(t,e){var n=e.id,a=e.course;t.courses=t.courses.findIndex(function(t){return t.id===n}),r["default"].set(t.courses,index,a)},setCourseDelete:function(t,e){t.courses=t.courses.filter(function(t){return t.id!==e})}},Object(Z["a"])(it,"setCurCourse",function(t,e){r["default"].set(t.course,"avgRating",e.avgRating)}),Object(Z["a"])(it,"setLastItem",function(t,e){t.pagination.lastItem=e}),Object(Z["a"])(it,"setPreviousFirstItem",function(t,e){t.pagination.previousFirstItems.push(e)}),Object(Z["a"])(it,"clearPreviousFirstItem",function(t){t.pagination.previousFirstItems=[]}),Object(Z["a"])(it,"setLength",function(t,e){var n=e/t.pagination.itemCount;e%t.pagination.itemCount==0?t.pagination.totalLength=n:t.pagination.totalLength=Math.ceil(n)}),Object(Z["a"])(it,"setStatus",function(t,e){t.status=e}),it)};function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(Object(n),!0).forEach(function(e){Object(Z["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ht={namespaced:!0,state:function(){return{payment:{},payments:[]}},actions:{getPayments:function(t){var e=t.commit;return e("loading",!0,{root:!0}),e("setPayments",[]),nt.collection("payments").orderBy("createdAt","desc").get().then(function(t){var n=t.docs.map(function(t){return pt({id:t.id},t.data())});return e("setPayments",n),e("loading",!1,{root:!0}),n})},getPaymentById:function(t,e){var n=t.commit;n("loading",!0,{root:!0}),nt.collection("payments").doc(e).get().then(function(t){var e=t.data();e.id=t.id,n("setPayment",e),n("loading",!1,{root:!0})})},createPayment:function(t,e){var n=t.commit;e.status="尚未付款",e.createdAt=Date.now(),nt.collection("payments").add(e).then(function(t){e.id=t.id,n("setPayment",e)})},finishPayment:function(t,e){var n=t.commit;nt.collection("payments").doc(e).update({status:"付款完成",finishedAt:Date.now()}).then(function(){return n("changePaymentsStatus",{id:e,status:"付款完成",finishedAt:Date.now()})})}},mutations:{setPayments:function(t,e){t.payments=e},setPayment:function(t,e){t.payment=e},changePaymentsStatus:function(t,e){var n=e.status,a=e.finishedAt;t.payment.status=n,t.payment.finishedAt=a},clearPayment:function(t){console.log("yo"),t.payment={}}}},vt=n("0e44");function gt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(n),!0).forEach(function(e){Object(Z["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}r["default"].use(tt["a"]);var bt=new tt["a"].Store({plugins:[Object(vt["a"])({paths:["courses.cat","courses.status","courses.course","courses.courses","cart.cart","checkout.payment"]})],modules:{auth:at,cart:rt,comments:ct,courses:ft,checkout:ht},state:function(){return{isLoading:!1,downloadURL:null}},actions:{updateFile:function(t,e){var n=t.commit,a=e.file,r=e.place,s=R.a.storage().ref(r+a.name),o=s.put(a);o.on("state_changed",function(t){},function(t){},function(){o.snapshot.ref.getDownloadURL().then(function(t){n("setDownloadUrl",t)})})}},mutations:_t({},et["a"],{loading:function(t,e){t.isLoading=e},setDownloadUrl:function(t,e){t.downloadURL=e}})});r["default"].config.productionTip=!1,r["default"].use(X.a),r["default"].use(T.a,{dialog:!0}),r["default"].use(M.a),r["default"].component("Loading",z.a),r["default"].filter("currency",K),r["default"].component("AddToCartModal",n("199e").default),r["default"].component("AddToCart",n("5769").default),r["default"].use(J.a),r["default"].use(G.a),r["default"].use(H["a"]);var Ct=null;R.a.auth().onAuthStateChanged(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,bt.dispatch("auth/storeAuthUser",e);case 3:Ct||(new r["default"]({created:function(){F.a.init({duration:800,easing:"ease-in-sine",delay:800})},router:L,store:bt,render:function(t){return t(S)}}).$mount("#app"),L.beforeEach(function(t,e,n){var a=R.a.auth().currentUser;!0===t.meta.requiresAuth?a?"Checkout"===t.name&&"Cart"!==e.name?(r["default"].toasted.error("請先確認購物車品項再結帳",{duration:3e3}),n({name:"Cart"})):n():(r["default"].toasted.error("請先登入或註冊會員",{duration:3e3}),n({name:"home"})):n()}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},5769:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"addcart-btn btn",class:{"in-cart":t.inCart}},[t.inCart?n("router-link",{staticClass:"addcart-link",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 前往購物車\n    ")]):n("div",{staticClass:"addcart-link",on:{click:function(e){return e.preventDefault(),t.addToCart()}}},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" 加入購物車\n    ")])],1)])},r=[],s=(n("7514"),{name:"AddToCart",props:["course"],computed:{inCart:function(){var t=this;return this.$store.state.cart.cart.find(function(e){return e.title===t.course.title})}},methods:{addToCart:function(){this.$store.commit("cart/addToCart",this.course),this.show()},show:function(){this.$modal.show("addtocart")}}}),o=s,i=n("2877"),c=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.b5a20b1d.js.map