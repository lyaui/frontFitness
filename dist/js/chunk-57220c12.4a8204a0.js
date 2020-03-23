(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57220c12"],{2355:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("main",{staticClass:"courses-main"},[a("div",{staticClass:"container"},[a("step-bar",{attrs:{status:t.status}}),a("div",{staticClass:"checkout"},[a("div",{staticClass:"checkout__items"},[t.cartCourses.length>0?a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"fas fa-shopping-cart fa-lg"}),t._v("\n            購物車中有 "+t._s(t.cartCourses.length)+" 門課程\n          ")]):a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"fas fa-shopping-cart fa-lg"}),t._v("\n            購物車中尚無課程！\n            "),a("button",{staticClass:"btn heading-tertiary--dark",on:{click:function(s){return s.preventDefault(),t.selectCat("所有課程")}}},[a("u",[t._v("速選購")])]),t._v("\n            💪\n          ")]),a("ul",{staticClass:"checkout__list"},t._l(t.cartCourses,function(s){return a("li",{key:s.id,staticClass:"cart__item"},[a("div",{staticClass:"d-flex"},[a("img",{staticClass:"cart__img",attrs:{src:s.imageUrl,alt:s.title}})]),a("div",{staticClass:"cart__info"},[a("router-link",{staticClass:"cart__link",attrs:{to:{name:"CourseDetails",params:{course_id:s.id}}}},[a("div",{staticClass:"cart__tag-box d-none-phone"},[s.discount?a("div",{staticClass:"cart__tag"},[t._v("\n                      精選課程\n                    ")]):t._e(),t.discounted&&s.discount?a("span",{staticClass:"text-warning"},[t._v("已成功套用優惠券")]):t._e()]),a("div",{staticClass:"cart__title d-none-phone"},[t._v("\n                    "+t._s(s.title)+"\n                  ")]),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"cart__category"},[t._v("\n                      "+t._s(s.categorySelected)+"｜\n                    ")]),a("div",{staticClass:"cart__coach"},[t._v(t._s(s.coach)+"｜")]),a("div",{staticClass:"cart__time"},[t._v("\n                      "+t._s(s.week)+" "+t._s(s.time)+"\n                    ")])])]),a("div",{staticClass:"cart__handle"},[a("div",{staticClass:"cart__price"},[t.discounted?t._e():a("div",{staticClass:"cart__price--origin"},[t._v("\n                      "+t._s(t._f("currency")(s.price))+"\n                    ")]),t.discounted?[s.discount?[a("div",{staticClass:"cart__price--origin"},[t._v("\n                          "+t._s(t._f("currency")(s.price-100))+"\n                        ")]),a("div",{staticClass:"cart__price--discount"},[t._v("\n                          "+t._s(t._f("currency")(s.price))+"\n                        ")])]:t._e(),s.discount?t._e():[a("div",{staticClass:"cart__price--origin"},[t._v("\n                          "+t._s(t._f("currency")(s.price))+"\n                        ")])]]:t._e()],2),a("button",{staticClass:"cart__remove btn",on:{click:function(a){return t.deleteCourse(s)}}},[a("i",{staticClass:"far fa-trash-alt"})])])],1)])}),0)]),a("div",{staticClass:"checkout__summary"},[a("div",{staticClass:"checkout__summary-title heading-tertiary--dark"},[t._v("\n            訂單明細\n          ")]),a("div",{staticClass:"checkout__summary-price"},[a("div",[t._v("原價")]),a("div",[t._v(t._s(t._f("currency")(t.total.totalOrigin)))])]),t.discounted?a("div",{staticClass:"checkout__summary-price"},[a("div",[t._v("優惠券折扣")]),a("div",[t._v("-"+t._s(t._f("currency")(t.total.totalDiscount)))])]):t._e(),a("div",{staticClass:"checkout__summary-total"},[a("div",[t._v("總計")]),a("h3",[t._v(t._s(t._f("currency")(t.total.totalPrice)))])]),a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[a("div",{staticClass:"form__label"},[t._v("使用折扣代碼")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.couponCode,expression:"couponCode",modifiers:{trim:!0}}],staticClass:"mb-sm form__input",attrs:{type:"text",placeholder:"請輸入優惠券",disabled:"LOVEFITTING"===t.couponCode},domProps:{value:t.couponCode},on:{input:function(s){s.target.composing||(t.couponCode=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),a("span",{staticClass:"text-warning"},[t._v(t._s(t.feedback))])])]),t.cartCourses.length>0?a("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.checkOut()}}},[t._v("\n            確定結帳\n          ")]):a("button",{staticClass:"btn btn-primary--cancel",staticStyle:{margin:"0"},on:{click:function(s){return t.selectCat("所有課程")}}},[t._v("\n            請先選購課程\n          ")])])])],1)])])},c=[],i=a("581a"),r={name:"Cart",components:{StepBar:i["a"]},data:function(){return{status:"cart",coupon:!1,couponCode:null,couponCourse:null}},computed:{user:function(){return this.$store.state.auth.user},cartCourses:function(){return this.$store.state.cart.cart},total:function(){return this.$store.state.cart.total},feedback:function(){return this.couponCode?"LOVEFITTING"!==this.couponCode?"代碼不存在 請再次確認":0!==this.total.totalDiscount?"已成功套用優惠券":"無符合活動優惠之課程":null},discounted:function(){return this.$store.state.cart.coupon}},watch:{couponCode:function(){"LOVEFITTING"===this.couponCode&&(this.coupon=!0,this.$store.commit("cart/addCouponCode",this.coupon)),this.$store.commit("cart/total")}},methods:{deleteCourse:function(t){this.$store.commit("cart/removeItem",t),this.$store.commit("cart/total")},selectCat:function(t){var s=this;this.$store.dispatch("courses/getCourses",t).then(function(){return s.$router.push("/courses")})},checkOut:function(){this.user&&this.cartCourses.length>0?(this.$store.commit("checkout/setPayment",{courses:this.cartCourses,total:this.total}),this.$router.push("/checkout")):this.$toasted.error("請先登入或註冊會員",{duration:3e3})}},created:function(){this.$store.commit("cart/addCouponCode",this.coupon),this.$store.commit("cart/total")}},n=r,o=a("2877"),u=Object(o["a"])(n,e,c,!1,null,null,null);s["default"]=u.exports},"581a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar"},[a("ul",{staticClass:"step-bar__list"},[a("li",{staticClass:"step-bar__item step-bar__item--first"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--active":"cart"===t.status,"step-bar__circle--done":"checkout"===t.status||"success"===t.status}},[a("span",[t._v("1")])]),a("div",{staticClass:"step-bar__line"}),t._m(0)]),a("li",{staticClass:"step-bar__item step-bar__item--secondary"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--active":"checkout"===t.status,"step-bar__circle--done":"success"===t.status}},[a("span",[t._v("2")])]),a("div",{staticClass:"step-bar__line"}),t._m(1)]),a("li",{staticClass:"step-bar__item step-bar__item--last"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--done":"success"===t.status}},[a("span",[t._v("3")])]),t._m(2)])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("購物車")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("結帳")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("購買完成")])])}],i={name:"StepBar",props:["status"]},r=i,n=a("2877"),o=Object(n["a"])(r,e,c,!1,null,null,null);s["a"]=o.exports}}]);
//# sourceMappingURL=chunk-57220c12.4a8204a0.js.map