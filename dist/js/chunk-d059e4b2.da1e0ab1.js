(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d059e4b2"],{"324c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading,opacity:.8,"background-color":"#000",color:"#ff5722"},on:{"update:active":function(s){t.isLoading=s}}}),e("main",{staticClass:"courses-main"},[e("div",{staticClass:"container"},[e("step-bar",{attrs:{status:t.status}}),e("div",{staticClass:"checkout"},[e("div",{staticClass:"checkout__info mb-sm"},["付款完成"===t.payment.status?e("div",{staticClass:"checkout-form mb-sm"},[e("div",{staticClass:"heading-tertiary--dark mb-sm"},[e("i",{staticClass:"fas fa-thumbs-up"}),t._v("\n              付款成功！查看更多精彩課程～\n              "),e("button",{staticClass:"btn heading-tertiary--dark",on:{click:function(s){return s.preventDefault(),t.selectCat("所有課程")}}},[e("u",[t._v("速選購")])]),t._v("\n              😍\n            ")])]):t._e(),e("div",{staticClass:"checkout-form checkout-payment__courses mb-sm"},[t._m(0),e("table",{staticClass:"checkout-table"},[t._m(1),e("tbody",t._l(t.payment.courses,function(s){return e("tr",{key:s.title},[e("td",[t._v(t._s(s.title))]),e("td",{staticClass:"d-none-phone"},[s.discount?[t._v("精選優惠")]:[t._v("課程售價")]],2),e("td",{staticClass:"d-none-phone",staticStyle:{"text-align":"right"}},[t._v("\n                    "+t._s(t._f("currency")(s.price))+"\n                  ")]),e("td",{staticStyle:{"text-align":"right"}},[t._v("\n                    "+t._s(t._f("currency")(s.sellingPrice))+"\n                  ")])])}),0)]),e("div",{staticClass:"checkout-payment__total"},[t._v("\n              實付金額\n              "),e("b",{staticClass:"ml-sm"},[t._v(t._s(t._f("currency")(t.total.totalPrice)))])])]),e("div",{staticClass:"checkout-form checkout-payment__user"},[t._m(2),e("div",{staticClass:"checkout-payment__invoice"},[e("div",[e("b",[t._v("付款方式")]),e("p",[t._v(t._s(t.user.payWay))])]),e("div",[e("b",[t._v("發票資訊")]),e("p",[t._v("聯絡人："+t._s(t.user.name))]),e("p",[t._v("聯絡電子信箱："+t._s(t.user.email))]),e("p",[t._v("聯絡電話："+t._s(t.user.phone))])])])])]),"尚未付款"===t.payment.status?e("div",{staticClass:"checkout__summary"},[e("div",{staticClass:"checkout__summary-title heading-tertiary--dark"},[t._v("\n            訂單明細\n          ")]),e("div",{staticClass:"checkout__summary-price"},[e("div",[t._v("原價")]),e("div",[t._v(t._s(t._f("currency")(t.total.totalOrigin)))])]),t.total.totalDiscount>0?e("div",{staticClass:"checkout__summary-price"},[e("div",[t._v("優惠券折扣")]),e("div",[t._v("-"+t._s(t._f("currency")(t.total.totalDiscount)))])]):t._e(),e("div",{staticClass:"checkout__summary-total"},[e("div",[t._v("總計")]),e("h3",[t._v(t._s(t._f("currency")(t.total.totalPrice)))])]),e("button",{staticClass:"btn btn-primary",staticStyle:{display:"inline-block","background-color":"rgb(255, 87, 33)","border-left-color":"rgb(255, 87, 33)","border-right-color":"rgb(255, 87, 33)"},on:{click:function(s){return s.preventDefault(),t.checkOut(t.payment.id)}}},[t._v("\n            確認付款\n          ")])]):t._e(),"付款完成"===t.payment.status?e("div",{staticClass:"checkout__summary checkout__summary--success mb-sm"},[e("div",{staticClass:"mb-sm heading-tertiary--dark"},[t._v("付款成功 感謝購買")]),e("img",{staticClass:"mb-sm mt-sm",attrs:{width:"100px",src:a("94f7")}}),e("ul",{staticClass:"checkout__summary-list"},[e("li",{staticClass:"checkout__summary-item"},[t._v("\n              訂單編號：\n              "),e("br"),t._v("\n              "+t._s(t.payment.id)+"\n            ")]),e("li",{staticClass:"checkout__summary-item"},[t._v("\n              購買時間：\n              "),e("br"),t._v("\n              "+t._s(t.time)+"\n            ")]),e("li",{staticClass:"checkout__summary-item"},[t._v("付款金額："+t._s(t._f("currency")(t.total.totalPrice)))])])]):t._e()])],1)])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"fas fa-money-check fa-lg"}),t._v(" 結帳金額")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("課程名稱")]),a("th",{staticClass:"d-none-phone"},[t._v("購買方案")]),a("th",{staticClass:"d-none-phone"},[t._v("原價")]),a("th",[t._v("售價")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"heading-tertiary--dark mb-sm"},[a("i",{staticClass:"far fa-address-card fa-lg"}),t._v(" 付款資訊")])}],i=a("581a"),n=a("c1df"),r=a.n(n),_={name:"CheckoutInfo",components:{StepBar:i["a"]},data:function(){return{paymentId:null}},computed:{time:function(){var t=this;return r()(t.payment.finishedAt).format("YYYY/MM/DD HH:mm")},isLoading:function(){var t=this;return t.$store.state.isLoading},payment:function(){var t=this;return t.$store.state.checkout.payment},user:function(){var t=this;return t.$store.state.checkout.payment.user},total:function(){var t=this;return t.$store.state.checkout.payment.total},courses:function(){var t=this;return t.$store.state.checkout.payment.courses},status:function(){var t=this;return"付款完成"===t.payment.status?"success":"checkout"}},methods:{checkOut:function(t){var s=this;s.$store.dispatch("checkout/finishPayment",t).then(function(){s.$toasted.success("付款成功，感謝購買！",{duration:2e3})})}},created:function(){var t=this;t.paymentId=t.$route.params.paymentId,t.$store.dispatch("checkout/getPaymentById",t.paymentId)}},u=_,l=a("2877"),o=Object(l["a"])(u,e,c,!1,null,null,null);s["default"]=o.exports},"581a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar"},[a("ul",{staticClass:"step-bar__list"},[a("li",{staticClass:"step-bar__item step-bar__item--first"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--active":"cart"===t.status,"step-bar__circle--done":"checkout"===t.status||"success"===t.status}},[a("span",[t._v("1")])]),a("div",{staticClass:"step-bar__line"}),t._m(0)]),a("li",{staticClass:"step-bar__item step-bar__item--secondary"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--active":"checkout"===t.status,"step-bar__circle--done":"success"===t.status}},[a("span",[t._v("2")])]),a("div",{staticClass:"step-bar__line"}),t._m(1)]),a("li",{staticClass:"step-bar__item step-bar__item--last"},[a("div",{staticClass:"step-bar__circle",class:{"step-bar__circle--done":"success"===t.status}},[a("span",[t._v("3")])]),t._m(2)])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("購物車")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("結帳")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-bar__title"},[a("span",{staticClass:"spacing-adjust"},[t._v("購買完成")])])}],i={name:"StepBar",props:["status"]},n=i,r=a("2877"),_=Object(r["a"])(n,e,c,!1,null,null,null);s["a"]=_.exports},"94f7":function(t,s,a){t.exports=a.p+"img/checked.bb8217dd.svg"}}]);
//# sourceMappingURL=chunk-d059e4b2.da1e0ab1.js.map