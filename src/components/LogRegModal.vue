<template>
  <modal name="logRegModal" width="330px" height="auto">
    <div class="log-reg-modal">
      <div class="log-reg-modal__tab">
        <button class="btn log-reg-modal__tab-btn" @click="logRegStatus('註冊')" :class="{ 'log-reg-modal__tab-btn--active': status === '註冊' }"><i class="fas fa-user-plus"></i> 註冊會員</button>
        <button class="btn log-reg-modal__tab-btn" @click="logRegStatus('登入')" :class="{ 'log-reg-modal__tab-btn--active': status === '登入' }"><i class="fas fa-sign-in-alt"></i> 登入會員</button>
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
                <input class="form__input" type="text" placeholder="名稱 *" v-model="form.name" id="reg-name" :class="{ 'form__input--warning': $v.form.name.$error }" required />
              </div>
              <template v-if="$v.form.name.$dirty">
                <span v-if="!$v.form.name.required" class="text-warning">名稱為必填欄位</span>
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
                <input class="contact-form__input form__input" type="text" placeholder="電子信箱 *" v-model="form.email" id="reg-email" required :class="{ 'form__input--warning': $v.form.email.$error }" />
              </div>
              <template v-if="$v.form.email.$dirty">
                <span v-if="!$v.form.email.required" class="text-warning">電子信箱為必填欄位</span>
                <span v-if="!$v.form.email.email" class="text-warning">請輸入正確的電子信箱格式</span>
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
                <input class="contact-form__input form__input" type="password" placeholder="密碼 *" v-model="form.password" id="reg-password" required :class="{ 'form__input--warning': $v.form.password.$error }" />
              </div>
              <template v-if="$v.form.password.$dirty">
                <span v-if="!$v.form.password.required" class="text-warning">密碼為必填欄位</span>
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
                <span v-if="!$v.form.passwordConfirm.required" class="text-warning">密碼確認為必填欄位</span>
                <span v-if="!$v.form.passwordConfirm.sameAsPassword && form.passwordConfirm !== ''" class="text-warning">與密碼不一致 請再確認</span>
              </template>
            </div>
          </div>

          <div class="form__row" style="margin-top: 20px;">
            <div class="form__group">
              <button v-if="status === '註冊'" @click.prevent="handleRegister()" class="btn-primary btn">
                註冊
              </button>
              <button v-if="status === '登入'" @click.prevent="handleLogin()" class="btn-primary btn">
                登入
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'LogRegModal',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        img: 'https://png2.pngtree.com/svg/20161215/9bc7bae28b.png',
      },
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
    isRegisterValid() {
      const vm = this;
      return !vm.$v.form.name.$invalid && !vm.$v.form.email.$invalid && !vm.$v.form.password.$invalid && !vm.$v.form.passwordConfirm.$invalid;
    },
    isLoginValid() {
      const vm = this;
      return !vm.$v.form.email.$invalid && !vm.$v.form.password.$invalid;
    },
    status() {
      const vm = this;
      return vm.$store.state.auth.status;
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
    logRegStatus(status) {
      const vm = this;
      vm.$store.commit('auth/setStatus', status);
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
    hide() {
      const vm = this;
      vm.reset();
      vm.$modal.hide('logRegModal');
    },
  },
};
</script>
