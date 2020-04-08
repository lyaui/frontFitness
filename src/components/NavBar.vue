<template>
  <nav class="navigation navigation-dark">
    <ul class="head-nav">
      <li class="head-nav__item">
        <router-link to="/">
          <div class="logo-box">frontFitness</div>
        </router-link>
      </li>

      <li class="head-nav__item d-none-phone">
        <div class="head-nav__link btn" @click.prevent="selectCat('所有課程')"><i class="fas fa-th-large"></i> 探索課程</div>
      </li>
    </ul>
    <ul class="head-nav">
      <!-- 購物車 -->
      <li class="head-nav__item cart-btn d-none-phone">
        <router-link to="/cart" class="head-nav__link head-nav__user btn">
          <i class="fas fa-shopping-cart fa-lg"></i>
          <div v-if="cartItem !== 0" class="cart-qty">{{ cartItem }}</div>
        </router-link>
      </li>
      <!-- 註冊 -->
      <li class="head-nav__item d-none-phone" v-if="!user">
        <div class="head-nav__link btn" @click="logRegStatus('註冊')">
          註冊
        </div>
      </li>
      <!-- 登入 -->
      <li class="head-nav__item d-none-phone" v-if="!user">
        <div class="head-nav__link btn" @click="logRegStatus('登入')">
          登入
        </div>
      </li>
      <!-- 頭像 -->
      <li class="head-nav__item d-none-phone cart-btn" v-if="user">
        <router-link to="/admin/profile" class="head-nav__link head-nav__user btn">
          <img class="head-nav__user-img" :src="user.profile.userImg" />
          <span class="head-nav__user-name">{{ user.profile.name }}</span>
        </router-link>
      </li>
      <!-- 登出 -->
      <li class="head-nav__item d-none-phone" v-if="user">
        <div class="head-nav__link btn" @click="logOut()">登出</div>
      </li>

      <!-- 手機版選單 -->
      <li class="head-nav__item d-block-phone">
        <div class="res-nav res-nav">
          <!-- 開關圖示 -->
          <button class="btn res-nav__button" @click="showRwdNav = !showRwdNav">
            <i v-if="!showRwdNav" class="fas fa-bars"></i>
            <i v-else class="fas fa-times"></i>
          </button>
          <div class="res-nav__background" :class="{ 'res-nav__background--active': showRwdNav }"></div>
          <nav class="res-nav__nav" :class="{ 'res-nav__nav--active': showRwdNav }">
            <div class="res-nav__list">
              <!-- 上方登入/登出/會員頭像 -->
              <div class="mb-sm d-flex">
                <div class="res-nav__link-logreg btn" @click="logRegStatus('註冊')" v-if="!user">
                  <i class="fas fa-user-plus"></i>
                  <p>註冊</p>
                </div>

                <div class="res-nav__link-logreg btn" @click="logRegStatus('登入')" v-if="!user">
                  <i class="fas fa-sign-in-alt"></i>
                  <p>登入</p>
                </div>

                <div class="cart-btn" v-else>
                  <router-link to="/admin/profile" class="head-nav__user btn">
                    <img class="res-nav__user-img" :src="user.profile.userImg" />
                    <span class="res-nav__user-name">{{ user.profile.name }}</span>
                  </router-link>
                </div>
              </div>
              <!-- 課程+購物車 -->
              <ul>
                <li class="res-nav__item cart-btn">
                  <router-link to="/cart" class="head-nav__user">
                    <i class="fas fa-shopping-cart fa-lg"></i> 購物車
                    <div v-if="cartItem !== 0" class="cart-qty">{{ cartItem }}</div>
                  </router-link>
                </li>

                <li v-for="cat in navbar" :key="cat.cat" class="res-nav__item" @click.prevent="selectCat(cat.cat)">
                  <i :class="`${cat.icon}`"></i>
                  <p>{{ `${cat.cat} ${cat.engCat}` }}</p>
                </li>
              </ul>
            </div>
            <div class="res-nav__link-logout" v-if="user" @click="logOut()">
              <i class="fas fa-sign-out-alt"></i>
            </div>
          </nav>
        </div>
      </li>
    </ul>
    <log-reg-modal></log-reg-modal>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['navbar'],
  data() {
    return {
      showRwdNav: false,
    };
  },
  computed: {
    user() {
      const vm = this;
      return vm.$store.state.auth.user;
    },
    cartItem() {
      const vm = this;
      return vm.$store.state.cart.cart.length;
    },
    cat() {
      const vm = this;
      return vm.$store.state.courses.cat;
    },
  },
  watch: {
    // 當類別或路徑變更時關閉RWD選單
    cat() {
      const vm = this;
      vm.showRwdNav = false;
    },
    $route() {
      const vm = this;
      vm.showRwdNav = false;
    },
  },
  methods: {
    selectCat(cat) {
      const vm = this;
      vm.$store.dispatch('courses/getCourses', cat).then(() => vm.$router.push('/courses'));
    },
    logOut() {
      const vm = this;
      vm.$store.dispatch('auth/signOut').then(() => {
        vm.$toasted.success('成功登出', {
          duration: 2000,
        });
        vm.$router.push({ name: 'home' });
      });
    },
    logRegStatus(status) {
      const vm = this;
      vm.$store.commit('auth/setStatus', status);
      vm.show();
    },
    show() {
      const vm = this;
      vm.$modal.show('logRegModal');
    },
  },
};
</script>
