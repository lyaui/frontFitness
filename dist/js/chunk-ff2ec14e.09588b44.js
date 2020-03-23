(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff2ec14e","chunk-7fb7c444"],{"6c9e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading,opacity:.8,"background-color":"#000",color:"#ff5722"},on:{"update:active":function(e){t.isLoading=e}}}),s("h2",{staticClass:"heading-secondary"},[t._v("課程列表")]),s("button",{staticClass:"btn admin-btn",on:{click:function(e){return t.turnNewEditPage("新增課程")}}},[s("i",{staticClass:"fas fa-plus-square"}),t._v(" 新增課程\n  ")]),s("table",{staticClass:"admin-table"},[t._m(0),s("tbody",t._l(t.courses,function(e,a){return s("tr",{key:e.id,class:{"lighten-row":a%2==1}},[s("td",{staticClass:"d-none-phone"},[s("img",{staticClass:"course-admin__img",attrs:{src:e.imageUrl,alt:e.title}})]),s("td",{staticClass:"d-none-phone"},[t._v(t._s(e.categorySelected))]),s("td",{staticStyle:{"text-align":"left","padding-left":"20px"}},[s("router-link",{attrs:{to:{name:"CourseDetails",params:{course_id:e.id}}}},[t._v(t._s(e.title))])],1),s("td",{staticClass:"d-none-phone"},[e.discount?s("div",[t._v("V")]):s("div",[t._v("-")])]),s("td",{class:{"text-highlight":0===e.remainQuantity}},[t._v("\n          "+t._s(e.remainQuantity)+"/"+t._s(e.quantity)+"\n        ")]),s("td",{staticClass:"d-none-tab-p"},[t._v(t._s(t._f("currency")(e.originPrice)))]),s("td",[t._v(t._s(t._f("currency")(e.price)))]),s("td",[s("button",{staticClass:"btn admin-btn",on:{click:function(s){return t.turnNewEditPage("編輯課程",e)}}},[s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"btn admin-btn",on:{click:function(s){return t.deleteCourse(e.title,e.id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])}),0)]),s("Pagination"),s("v-dialog")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"d-none-phone"},[t._v("圖示")]),s("th",{staticClass:"d-none-phone"},[t._v("類別")]),s("th",[t._v("課程名稱")]),s("th",{staticClass:"d-none-phone"},[t._v("精選")]),s("th",[t._v("剩餘數量")]),s("th",{staticClass:"d-none-tab-p"},[t._v("原價")]),s("th",[t._v("售價")]),s("th",[t._v("編輯")])])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item"},[s("button",{staticClass:"page-item btn",attrs:{disabled:1===t.currentPage},on:{click:function(e){return e.preventDefault(),t.getMoreCourses("previous")}}},[s("i",{staticClass:"fas fa-caret-left"})])]),s("li",{staticClass:"page-item"},[t._v(t._s(t.currentPage)+" / "+t._s(t.totalPage))]),s("li",{staticClass:"page-item"},[s("button",{staticClass:"page-item btn",attrs:{disabled:t.currentPage===t.totalPage},on:{click:function(e){return e.preventDefault(),t.getMoreCourses("next")}}},[s("i",{staticClass:"fas fa-caret-right"})])])])])},o=[],c={name:"Pagination",computed:{currentPage:function(){return this.$store.getters["courses/currentPage"]},totalPage:function(){return this.$store.state.courses.pagination.totalLength}},methods:{getMoreCourses:function(t){this.$store.dispatch("courses/getMoreCourses",t)}}},u=c,l=s("2877"),d=Object(l["a"])(u,r,o,!1,null,null,null),f=d.exports;function h(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?h(Object(s),!0).forEach(function(e){Object(i["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var g={name:"CoursesAdmin",components:{Pagination:f},computed:{isLoading:function(){return this.$store.state.isLoading},textCounter:function(){return this.course.title},courses:function(){return this.$store.state.courses.courses}},methods:{deleteCourse:function(t,e){var s=this;this.$modal.show("dialog",{title:"⚠️ 確定刪除 ".concat(t," 嗎？"),text:"課程一旦刪除將無法復原 😱😱😱",buttons:[{title:"確定",handler:function(){s.$store.dispatch("courses/removeCourse",e).then(function(){s.$toasted.success("成功刪除 ".concat(t),{duration:2e3}),s.$modal.hide("dialog")})}},{title:"取消"}]})},addCourse:function(){var t=this;this.$store.dispatch("courses/createCourse",p({},this.course)).then(function(){t.$toasted.success("成功新增課程",{duration:2e3})})},updateCourse:function(t){var e=this;this.$store.dispatch("courses/updateCourse",{id:t,course:this.course}).then(function(){e.$toasted.success("更新成功!!",{duration:2e3})})},turnNewEditPage:function(t,e){this.$store.commit("courses/setStatus",t),"編輯課程"===t?this.$store.commit("courses/setCourse",e):this.$store.commit("courses/setCourse",{}),this.$router.push({name:"courseNewEdit"})}},created:function(){this.$store.dispatch("courses/getCoursesLimit"),this.$store.dispatch("courses/getPageLength")}},m=g,v=(s("9e70"),Object(l["a"])(m,a,n,!1,null,null,null));e["default"]=v.exports},"9e70":function(t,e,s){"use strict";var a=s("c06b"),n=s.n(a);n.a},c06b:function(t,e,s){},e313:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"admin-content"},[s("side-bar"),s("main",{staticClass:"admin-main"},[s("transition",{attrs:{name:"slide-fade"}},[s("router-view",[s("courses-admin")],1)],1)],1)],1)])},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("nav",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar__header"},[s("router-link",{staticClass:"sidebar__logo",attrs:{to:"/"}},[s("div",{staticClass:"logo-box"},[t._v("frontFitness")])]),s("div",{staticClass:"sidebar__user"},[s("img",{staticClass:"sidebar__user-img",attrs:{src:t.user.profile.userImg,alt:t.user.profile.name}}),s("div",{staticClass:"sidebar__user-info",on:{click:function(e){return e.preventDefault(),t.logOut()}}},[t._m(0)])])],1),s("ul",{staticClass:"side-nav"},t._l(t.navList,function(e){return s("li",{key:e.cat,staticClass:"side-nav__item",class:{"side-nav__item--active":t.activePage===e.cat},on:{click:function(s){t.activePage=e.cat,t.turnNewEditPage(e.cat,"新增課程")}}},[s("router-link",{staticClass:"side-nav__link",attrs:{to:{path:"/admin/"+e.path}}},[s("i",{staticClass:"side-nav__icon d-none-phone",class:""+e.icon}),s("span",[t._v(t._s(e.cat))])])],1)}),0)]):t._e()},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"sidebar__user-status"},[s("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" 登出\n        ")])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86"));function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach(function(e){Object(o["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var l={name:"SideBar",data:function(){return{activePage:"個人資訊",navList:[{cat:"個人資訊",icon:"fas fa-user",path:"profile"},{cat:"新增課程",icon:"fas fa-edit",path:"course-edit"},{cat:"課程列表",icon:"fas fa-list",path:"courses-admin"},{cat:"訂單列表",icon:"fas fa-clipboard-list",path:"orders"}]}},computed:{user:function(){return u({},this.$store.state.auth.user)}},methods:{logOut:function(){var t=this;this.$store.dispatch("auth/signOut").then(function(){t.$toasted.success("成功登出!!",{duration:2e3}),t.$router.push({name:"home"})})},turnNewEditPage:function(t){"新增課程"===t&&(this.$store.commit("courses/setStatus",t),this.$store.commit("courses/setCourse",{}),this.$router.push({name:"courseNewEdit"}))}}},d=l,f=s("2877"),h=Object(f["a"])(d,i,r,!1,null,null,null),p=h.exports,g=s("6c9e"),m={name:"Dashboard",components:{SideBar:p,CoursesAdmin:g["default"]}},v=m,b=Object(f["a"])(v,a,n,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-ff2ec14e.09588b44.js.map