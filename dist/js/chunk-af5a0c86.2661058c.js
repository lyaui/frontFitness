(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af5a0c86"],{"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),n=a("d2c8"),i="includes";s(s.P+s.F*a("5147")(i),"String",{includes:function(t){return!!~n(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,a){var s=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,!"/./"[t](e)}catch(n){}}return!0}},6762:function(t,e,a){"use strict";var s=a("5ca1"),n=a("c366")(!0);s(s.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"796c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading,opacity:.8,"background-color":"#000",color:"#ff5722"},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",{staticClass:"heading-secondary"},[t._v("個人資訊")]),a("div",{staticClass:"admin-panel mb-md"},[t._m(0),t._m(1),a("div",{staticClass:"profile-admin__form"},[a("div",{staticClass:"profile-admin__img"},[a("div",{staticClass:"form__group"},[t._m(2),t.account.userImg?a("img",{attrs:{src:t.account.userImg,alt:""}}):t._e(),t.account.userImg?t._e():a("img",{attrs:{src:"https://png2.pngtree.com/svg/20161215/9bc7bae28b.png"}})])]),a("div",{staticClass:"profile-admin__info"},[a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.name,expression:"account.name"}],staticClass:"form__input",attrs:{placeholder:"請填入姓名"},domProps:{value:t.account.name},on:{input:function(e){e.target.composing||t.$set(t.account,"name",e.target.value)}}}),t.$v.account.name.$dirty?[t.$v.account.name.required?t._e():a("span",{staticClass:"text-warning"},[t._v("姓名為必填欄位")])]:t._e()],2),a("div",{staticClass:"form__group"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],staticClass:"form__input",attrs:{disabled:""},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}})])]),a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:""}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.userImg,expression:"account.userImg"}],staticClass:"form__input",attrs:{placeholder:"https://unsplash...",type:"text"},domProps:{value:t.account.userImg},on:{input:function(e){e.target.composing||t.$set(t.account,"userImg",e.target.value)}}}),t.$v.account.userImg.$dirty?[t.$v.account.userImg.required?t._e():a("span",{staticClass:"text-warning"},[t._v("圖片網址為必填欄位")]),t.$v.account.userImg.url?t._e():a("span",{staticClass:"text-warning"},[t._v("請輸入正確格式網址")])]:t._e()],2),a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label"},[t._v("\n              或 選擇封面檔案\n              "),t.updatePhoto?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{staticClass:"form__input",attrs:{type:"file"},on:{change:t.uploadImage}})])]),a("div",{staticClass:"btn-footer"},[a("button",{staticClass:"btn btn-primary",staticStyle:{width:"120px"},on:{click:t.updateUser}},[t._v("\n            修改\n          ")])])])])]),a("div",{staticClass:"admin-panel mb-md"},[t._m(5),a("p",{staticClass:"mb-md"},[t._v("\n      商品進入購物車並填寫完購買資訊以後，該筆訂單即成立，這裡您可以查看所有訂單詳細資訊，掌握每一筆交易狀況。\n    ")]),0===t.payments.length?a("div",{staticClass:"heading-tertiary--grey"},[t._v("\n      尚無訂單：）\n    ")]):t._l(t.payments,function(e,s){return a("div",{key:e.id,staticClass:"mb-md"},[a("div",{staticClass:"go-checkout d-flex"},[a("p",{staticClass:"heading-tertiary--grey mb-sm"},[t._v("訂單編號："+t._s(e.id))]),"尚未付款"===e.status?a("button",{staticClass:"btn btn-primary mb-sm",staticStyle:{width:"120px"},on:{click:function(a){return a.preventDefault(),t.goCheckout(e.id)}}},[t._v("\n          確認付款\n        ")]):t._e()]),a("div",{staticClass:"admin-order",class:{"admin-order--notpay":"尚未付款"===e.status}},[a("div",{staticClass:"d-flex admin-order-info"},[a("div",{staticStyle:{"margin-right":"3rem"}},[a("p",[t._v("訂單成立： "+t._s(t.time(e.createdAt)))]),a("p",[t._v("\n              付款時間：\n              "),"付款完成"===e.status?[t._v(t._s(t.time(e.finishedAt)))]:[a("i",{staticClass:"fas fa-exclamation-triangle",staticStyle:{color:"#ff5721","margin-right":"5px"}}),t._v("尚未付款\n              ")]],2)]),a("div",[a("p",[t._v("實付金額："+t._s(t._f("currency")(e.total.totalPrice)))]),a("p",[t._v("付款方式："+t._s(e.user.payWay))])])]),a("button",{staticClass:"btn detail-show-btn mt-sm",on:{click:function(e){return t.show(s)}}},[t.showDetail===s?[a("i",{staticClass:"fas fa-chevron-up"}),t._v(" 收合內容\n          ")]:[a("i",{staticClass:"fas fa-chevron-down"}),t._v(" 查看詳細\n          ")]],2),a("transition",{attrs:{name:"fade"}},[t.showDetail===s?a("div",{staticClass:"d-none-phone"},[a("p",[t._v("價格明細：")]),a("table",{staticClass:"checkout-table"},[a("thead",[a("tr",[a("th",[t._v("課程名稱")]),a("th",[t._v("購買方案")]),a("th",[t._v("原價")]),a("th",[t._v("售價")])])]),a("tbody",t._l(e.courses,function(e){return a("tr",{key:e.title},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.plan))]),a("td",{staticStyle:{"text-align":"right"}},[t._v("\n                    "+t._s(t._f("currency")(e.price))+"\n                  ")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("\n                    "+t._s(t._f("currency")(e.sellingPrice))+"\n                  ")])])}),0)]),a("div",{staticClass:"checkout-payment__total"},[t._v("\n              實付金額：\n              "),a("b",{staticClass:"ml-sm"},[t._v(t._s(t._f("currency")(e.total.totalPrice)))])])]):t._e()]),a("transition",{attrs:{name:"fade"}},[t.showDetail===s?a("div",{staticClass:"d-block-phone"},[a("p",[t._v("價格明細：")]),t._l(e.courses,function(e){return a("table",{key:e.title,staticClass:"checkout-table"},[a("tbody",[a("tr",[a("td",[a("b",[t._v("課程名稱")])]),a("td",[t._v(t._s(e.title))])]),a("tr",[a("td",[a("b",[t._v("購買方案")])]),a("td",[t._v(t._s(e.plan))])]),a("tr",[a("td",[a("b",[t._v("原價")])]),a("td",[t._v(t._s(t._f("currency")(e.price)))])]),a("tr",[a("td",[a("b",[t._v("售價")])]),a("td",[t._v(t._s(t._f("currency")(e.sellingPrice)))])])])])}),a("div",{staticClass:"checkout-payment__total"},[t._v("\n              實付金額：\n              "),a("b",{staticClass:"ml-sm"},[t._v(t._s(t._f("currency")(e.total.totalPrice)))])])],2):t._e()])],1)])})],2)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"fas fa-cog"}),t._v("帳號設定\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-sm"},[t._v("\n      請確認姓名、電子郵件、圖片是否已設定好，如已設定完成，務必確認上述資訊為最新資訊。\n      （\n      "),a("span",{staticClass:"text-highlight"},[t._v("*")]),t._v(" 為必填欄位）\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form__label"},[t._v("\n            個人檔案圖片\n            "),a("span",{staticClass:"text-highlight"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form__label"},[t._v("\n              姓名\n              "),a("span",{staticClass:"text-highlight"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form__label"},[t._v("\n              電子信箱（不可變更）\n              "),a("span",{staticClass:"text-highlight"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"fas fa-file-invoice-dollar"}),t._v(" 訂單紀錄\n    ")])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=(a("6762"),a("2fdb"),a("b5ae")),c=a("c1df"),o=a.n(c);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d={name:"Profile",data:function(){return{showDetail:!1,account:null,updatePhoto:!1}},validations:{account:{name:{required:r["required"]},userImg:{required:r["required"],url:r["url"]}}},computed:{isLoading:function(){return this.$store.state.isLoading},user:function(){return this.$store.state.auth.user.profile},payments:function(){var t=this;return this.$store.state.checkout.payments.filter(function(e){return e.user.userId===t.user.userId})},getDownloadURL:function(){return this.$store.state.downloadURL}},watch:{getDownloadURL:function(){this.getDownloadURL&&(this.account.userImg=this.getDownloadURL,this.updatePhoto=!1)}},methods:{time:function(t){return o()(t).format("YYYY/MM/DD HH:mm")},uploadImage:function(t){var e=t.target.files[0];e.type.includes("image")?(this.updatePhoto=!0,this.$store.dispatch("updateFile",{file:e,place:"profile/"})):this.$toasted.error("請上傳圖片檔案",{duration:3e3})},updateUser:function(){var t=this;this.$v.$touch(),this.updatePhoto||(this.$v.$invalid?this.$toasted.error("請正確填寫必要資訊",{duration:3e3}):this.$store.dispatch("auth/updateUser",{id:this.user.userId,user:this.account}).then(function(){t.$toasted.success("更新成功!!",{duration:2e3})}))},show:function(t){this.showDetail=this.showDetail!==t&&t},goCheckout:function(t){this.$router.push("/checkout/".concat(t))}},created:function(){this.$store.commit("setDownloadUrl",null),this.$store.dispatch("checkout/getPayments"),this.account=u({},this.user)}},_=d,m=a("2877"),v=Object(m["a"])(_,s,n,!1,null,null,null);e["default"]=v.exports},aae3:function(t,e,a){var s=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},d2c8:function(t,e,a){var s=a("aae3"),n=a("be13");t.exports=function(t,e,a){if(s(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(t))}}}]);
//# sourceMappingURL=chunk-af5a0c86.2661058c.js.map