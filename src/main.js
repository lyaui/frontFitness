import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
import VModal from 'vue-js-modal'
import SocialSharing from 'vue-social-sharing'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import currencyFilter from './filters/currencyFilter'
import infiniteScroll from 'vue-infinite-scroll'
import Vuelidate from 'vuelidate'
import Lightbox from 'vue-easy-lightbox'
import Toasted from 'vue-toasted';
import store from './store'

Vue.config.productionTip = false;
Vue.use(Toasted)
Vue.use(VModal, {
  dialog: true
})
Vue.use(SocialSharing);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter)
Vue.component('AddToCartModal', require('@/components/AddToCartModal.vue').default);
Vue.component('AddToCart', require('@/components/AddToCart.vue').default);
Vue.use(infiniteScroll);
Vue.use(Vuelidate)
Vue.use(Lightbox)


let app = null;

// wait for firebase auth to init before creating the app
//創建前先設定好帳號，當帳號狀態有變時啟動
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    await store.dispatch('auth/storeAuthUser', user)
  }
  //init app if not already created
  if (!app) {
    new Vue({

      created() {
        AOS.init({
          // offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 800,
        })
      },
      router,
      store,
      render: h => h(App)
    }).$mount('#app');


    router.beforeEach((to, from, next) => {
      const user = firebase.auth().currentUser;

      if (to.meta.requiresAuth === true) {
        //使用者必須登入才能進入頁面
        if (user) {
          //使用者必須通過購物車才能進結帳頁面
          if (to.name === 'Checkout' && from.name !== 'Cart') {
            Vue.toasted.error('請先確認購物車品項再結帳', {
              duration: 3000
            })
            next({
              name: 'Cart'
            })
          } else {
            next();
          }
        } else {
          Vue.toasted.error('請先登入或註冊會員', {
            duration: 3000
          })
          next({
            name: 'home'
          })
        }
      } else {
        next();
      }
    })
  }
})