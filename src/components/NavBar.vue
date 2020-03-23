<template>
  <nav class="navigation navigation-dark">
    <ul class="head-nav">
      <li class="head-nav__item">
        <router-link to="/">
          <div class="logo-box">frontFitness</div>
        </router-link>
      </li>

      <li class="head-nav__item d-none-phone">
        <div class="head-nav__link btn" @click.prevent="selectCat('所有課程')">
          <i class="fas fa-th-large"></i> 探索課程
        </div>
      </li>
    </ul>
    <ul class="head-nav">
      <!-- 購物車 -->
      <li class="head-nav__item cart-btn d-none-phone">
        <router-link to="/cart" class="head-nav__link head-nav__user btn">
          <i class="fas fa-shopping-cart fa-lg"></i>
          <div class="cart-qty">{{ cartItem }}</div>
        </router-link>
      </li>
      <!-- 註冊 -->
      <li class="head-nav__item d-none-phone" v-if="!user">
        <div
          class="head-nav__link btn"
          @click="
            show();
            status = '註冊';
          "
        >
          註冊
        </div>
      </li>
      <!-- 登入 -->
      <li class="head-nav__item d-none-phone" v-if="!user">
        <div
          class="head-nav__link btn"
          @click="
            show();
            status = '登入';
          "
        >
          登入
        </div>
      </li>
      <!-- 頭像 -->
      <li class="head-nav__item d-none-phone cart-btn" v-if="user">
        <router-link
          to="/admin/profile"
          class="head-nav__link head-nav__user btn"
        >
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
          <div
            class="res-nav__background"
            :class="{ 'res-nav__background--active': showRwdNav }"
          ></div>
          <nav
            class="res-nav__nav"
            :class="{ 'res-nav__nav--active': showRwdNav }"
          >
            <div class="res-nav__list">
              <!-- 上方登入/登出/會員頭像 -->
              <div class="mb-sm d-flex">
                <div
                  class="res-nav__link-logreg btn"
                  @click="
                    show();
                    status = '註冊';
                  "
                  v-if="!user"
                >
                  <i class="fas fa-user-plus"></i>
                  <p>註冊</p>
                </div>

                <div
                  class="res-nav__link-logreg btn"
                  @click="
                    show();
                    status = '登入';
                  "
                  v-if="!user"
                >
                  <i class="fas fa-sign-in-alt"></i>
                  <p>登入</p>
                </div>

                <div class="cart-btn" v-else>
                  <router-link to="/admin/profile" class="head-nav__user btn">
                    <img
                      class="res-nav__user-img"
                      :src="user.profile.userImg"
                    />
                    <span class="res-nav__user-name">{{
                      user.profile.name
                    }}</span>
                  </router-link>
                </div>
              </div>
              <!-- 課程+購物車 -->
              <ul>
                <li class="res-nav__item cart-btn">
                  <router-link to="/cart" class="head-nav__user">
                    <i class="fas fa-shopping-cart fa-lg"></i> 購物車
                    <div class="cart-qty">{{ cartItem }}</div>
                  </router-link>
                </li>

                <li
                  v-for="cat in navbar"
                  :key="cat.cat"
                  class="res-nav__item"
                  @click.prevent="selectCat(cat.cat)"
                >
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

    <!-- modal -->
    <modal name="logRegModal" width="330px" height="auto">
      <div class="log-reg-modal">
        <div class="log-reg-modal__tab">
          <button
            class="btn log-reg-modal__tab-btn"
            @click="
              status = '註冊';
              reset();
            "
            :class="{ 'log-reg-modal__tab-btn--active': status === '註冊' }"
          >
            <i class="fas fa-user-plus"></i> 註冊會員
          </button>
          <button
            class="btn log-reg-modal__tab-btn"
            @click="
              status = '登入';
              reset();
            "
            :class="{ 'log-reg-modal__tab-btn--active': status === '登入' }"
          >
            <i class="fas fa-sign-in-alt"></i> 登入會員
          </button>
        </div>

        <div class="log-reg-modal__panel mt-sm">
          <form>
            <!-- 名稱 -->
            <div class="form__row" v-if="status === '註冊'">
              <div class="form__group">
                <div class="d-flex">
                  <label class="form__label" for="reg-name">
                    <i class="fas fa-user"></i>
                  </label>
                  <input
                    class="form__input"
                    type="text"
                    placeholder="名稱 *"
                    v-model="form.name"
                    id="reg-name"
                    :class="{ 'form__input--warning': $v.form.name.$error }"
                    required
                  />
                </div>
                <template v-if="$v.form.name.$dirty">
                  <span v-if="!$v.form.name.required" class="text-warning"
                    >名稱為必填欄位</span
                  >
                </template>
              </div>
            </div>

            <!-- 電子信箱 -->
            <div class="form__row">
              <div class="form__group">
                <div class="d-flex">
                  <label class="form__label" for="reg-email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    class="contact-form__input form__input"
                    type="text"
                    placeholder="電子信箱 *"
                    v-model="form.email"
                    id="reg-email"
                    required
                    :class="{ 'form__input--warning': $v.form.email.$error }"
                  />
                </div>
                <template v-if="$v.form.email.$dirty">
                  <span v-if="!$v.form.email.required" class="text-warning"
                    >電子信箱為必填欄位</span
                  >
                  <span v-if="!$v.form.email.email" class="text-warning"
                    >請輸入正確的電子信箱格式</span
                  >
                </template>
              </div>
            </div>

            <!-- 密碼 -->
            <div class="form__row">
              <div class="form__group">
                <div class="d-flex">
                  <label class="form__label" for="reg-password">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    class="contact-form__input form__input"
                    type="password"
                    placeholder="密碼 *"
                    v-model="form.password"
                    id="reg-password"
                    required
                    :class="{ 'form__input--warning': $v.form.password.$error }"
                  />
                </div>
                <template v-if="$v.form.password.$dirty">
                  <span v-if="!$v.form.password.required" class="text-warning"
                    >密碼為必填欄位</span
                  >
                </template>
              </div>
            </div>

            <!-- 密碼確認 -->
            <div class="form__row" v-if="status === '註冊'">
              <div class="form__group">
                <div class="d-flex">
                  <label class="form__label" for="reg-password-confirm">
                    <i class="fas fa-unlock-alt"></i>
                  </label>
                  <input
                    class="contact-form__input form__input"
                    type="password"
                    placeholder="密碼確認 *"
                    v-model="form.passwordConfirm"
                    id="reg-password-confirm"
                    required
                    :class="{
                      'form__input--warning': $v.form.passwordConfirm.$error,
                    }"
                  />
                </div>
                <template v-if="$v.form.passwordConfirm.$dirty">
                  <span
                    v-if="!$v.form.passwordConfirm.required"
                    class="text-warning"
                    >密碼確認為必填欄位</span
                  >
                  <span
                    v-if="
                      !$v.form.passwordConfirm.sameAsPassword &&
                        form.passwordConfirm !== ''
                    "
                    class="text-warning"
                    >與密碼不一致 請再確認</span
                  >
                </template>
              </div>
            </div>

            <div class="form__row" style="margin-top:20px">
              <div class="form__group">
                <button
                  v-if="status === '註冊'"
                  @click.prevent="handleRegister()"
                  class="btn-primary btn"
                >
                  註冊
                </button>
                <button
                  v-if="status === '登入'"
                  @click.prevent="handleLogin()"
                  class="btn-primary btn"
                >
                  登入
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </modal>
  </nav>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'NavBar',
  props: ['navbar'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        img: 'https://png2.pngtree.com/svg/20161215/9bc7bae28b.png',
      },
      status: '',
      showRwdNav: false,
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required },
      passwordConfirm: { required, sameAsPassword: sameAs('password') },
    },
  },
  computed: {
    user() {
      const vm = this;
      return vm.$store.state.auth.user;
    },
    isRegisterValid() {
      const vm = this;
      return (
        !vm.$v.form.name.$invalid
        && !vm.$v.form.email.$invalid
        && !vm.$v.form.password.$invalid
        && !vm.$v.form.passwordConfirm.$invalid
      );
    },
    isLoginValid() {
      const vm = this;
      return !vm.$v.form.email.$invalid && !vm.$v.form.password.$invalid;
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
    reset() {
      const vm = this;
      vm.form.name = '';
      vm.form.email = '';
      vm.form.password = '';
      vm.form.passwordConfirm = '';
    },
    selectCat(cat) {
      const vm = this;
      vm.$store
        .dispatch('courses/getCourses', cat)
        .then(() => vm.$router.push('/courses'));
    },
    handleRegister() {
      const vm = this;
      vm.$v.$touch();
      if (vm.isRegisterValid) {
        vm.$store
          .dispatch('auth/signUp', vm.form)
          .then(async (user) => {
            await vm.$store.dispatch('auth/createUserProfile', {
              uid: user.uid,
              userProfile: {
                userId: user.uid,
                name: vm.form.name,
                email: vm.form.email,
                userImg: vm.form.img,
              },
            });
            vm.$toasted.success('註冊成功', {
              duration: 2000,
            });
            vm.hide();
          })
          .catch((error) => vm.$toasted.error(error, { duration: 3000 }));
      } else {
        vm.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
      }
    },
    handleLogin() {
      const vm = this;
      vm.$v.$touch();
      if (vm.isLoginValid) {
        vm.$store
          .dispatch('auth/signIn', vm.form)
          .then(() => {
            vm.$toasted.success('登入成功', {
              duration: 2000,
            });
            vm.hide();
          })
          .catch((error) => vm.$toasted.error(error, { duration: 2000 }));
      } else {
        vm.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
      }
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
    show() {
      const vm = this;
      vm.$modal.show('logRegModal');
    },
    hide() {
      const vm = this;
      vm.reset();
      vm.$modal.hide('logRegModal');
    },
  },
};
</script>
