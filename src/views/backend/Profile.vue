<template>
  <div>
    <loading
      :active.sync="isLoading"
      :opacity="0.8"
      :background-color="'#000'"
      :color="'#ff5722'"
    ></loading>

    <h2 class="heading-secondary">個人資訊</h2>
    <div class="admin-panel mb-md">
      <div class="heading-tertiary--dark mb-sm">
        <i class="fas fa-cog"></i>帳號設定
      </div>
      <p class="mb-sm">
        請確認姓名、電子郵件、圖片是否已設定好，如已設定完成，務必確認上述資訊為最新資訊。
        （
        <span class="text-highlight">*</span> 為必填欄位）
      </p>
      <div class="profile-admin__form">
        <div class="profile-admin__img">
          <div class="form__group">
            <img v-if="account.userImg" class :src="account.userImg" alt />
            <img
              v-if="!account.userImg"
              src="https://png2.pngtree.com/svg/20161215/9bc7bae28b.png"
            />
          </div>
        </div>
        <!-- 個人檔案編輯 -->
        <div class="profile-admin__info">
          <div class="form__row">
            <div class="form__group">
              <label class="form__label" for="profileName">
                姓名
                <span class="text-highlight">*</span>
              </label>
              <input
                class="form__input"
                placeholder="請填入姓名"
                v-model="account.name"
                id="profileName"
              />
              <template v-if="$v.account.name.$dirty">
                <span v-if="!$v.account.name.required" class="text-warning"
                  >姓名為必填欄位</span
                >
              </template>
            </div>
            <div class="form__group">
              <label class="form__label" for="profileMail">
                電子信箱（不可變更）
                <span class="text-highlight">*</span>
              </label>
              <input class="form__input" v-model="account.email" id="profileMail" disabled />
            </div>
          </div>
          <div class="form__row">
            <div class="form__group">
              <label class="form__label" for="profileImgUrl">輸入個人圖片網址</label>
              <input
                class="form__input"
                placeholder="https://unsplash..."
                type="text"
                v-model="account.userImg"
                id="profileImgUrl"
              />
              <template v-if="$v.account.userImg.$dirty">
                <span v-if="!$v.account.userImg.required" class="text-warning"
                  >圖片網址為必填欄位</span
                >
                <span v-if="!$v.account.userImg.url" class="text-warning"
                  >請輸入正確格式網址</span
                >
              </template>
            </div>
            <div class="form__group">
              <label class="form__label" for="profileImgFile">
                或 選擇圖片檔案
                <i class="fas fa-spinner fa-spin" v-if="updatePhoto"></i>
              </label>
              <input class="form__input" type="file" @change="uploadImage" id="profileImgFile" />
            </div>
          </div>
          <div class="btn-footer">
            <button
              style="width:120px"
              class="btn btn-primary"
              @click="updateUser"
            >
              修改
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 訂單 -->
    <div class="admin-panel mb-md">
      <div class="heading-tertiary--dark mb-sm">
        <i class="fas fa-file-invoice-dollar"></i> 訂單紀錄
      </div>
      <p class="mb-md">
        商品進入購物車並填寫完購買資訊以後，該筆訂單即成立，這裡您可以查看所有訂單詳細資訊，掌握每一筆交易狀況。
      </p>

      <div v-if="payments.length === 0" class="heading-tertiary--grey">
        尚無訂單：）
      </div>

      <div
        v-else
        v-for="(payment, i) in payments"
        :key="payment.id"
        class="mb-md"
      >
        <div class="go-checkout d-flex">
          <p class="heading-tertiary--grey mb-sm">訂單編號：{{ payment.id }}</p>
          <button
            v-if="payment.status === '尚未付款'"
            @click.prevent="goCheckout(payment.id)"
            class="btn btn-primary mb-sm"
            style="width:120px"
          >
            確認付款
          </button>
        </div>

        <div
          class="admin-order"
          :class="{ 'admin-order--notpay': payment.status === '尚未付款' }"
        >
          <div class="d-flex admin-order-info">
            <div style="margin-right:3rem">
              <p>訂單成立： {{ time(payment.createdAt) }}</p>
              <p>
                付款時間：
                <template v-if="payment.status === '付款完成'">{{
                  time(payment.finishedAt)
                }}</template>
                <template v-else>
                  <i
                    class="fas fa-exclamation-triangle"
                    style="color:#ff5721;margin-right:5px"
                  ></i
                  >尚未付款
                </template>
              </p>
            </div>
            <div>
              <p>實付金額：{{ payment.total.totalPrice | currency }}</p>
              <p>付款方式：{{ payment.user.payWay }}</p>
            </div>
          </div>
          <button class="btn detail-show-btn mt-sm" @click="show(i)">
            <template v-if="showDetail === i">
              <i class="fas fa-chevron-up"></i> 收合內容
            </template>
            <template v-else>
              <i class="fas fa-chevron-down"></i> 查看詳細
            </template>
          </button>
          <!-- 購買明細 -->
          <transition name="fade">
            <div class="d-none-phone" v-if="showDetail === i">
              <p>價格明細：</p>
              <table class="checkout-table">
                <thead>
                  <tr>
                    <th>課程名稱</th>
                    <th>購買方案</th>
                    <th>原價</th>
                    <th>售價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in payment.courses" :key="course.title">
                    <td>{{ course.title }}</td>
                    <td>{{ course.plan }}</td>
                    <td style="text-align:right">
                      {{ course.price | currency }}
                    </td>
                    <td style="text-align:right">
                      {{ course.sellingPrice | currency }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout-payment__total">
                實付金額：
                <b class="ml-sm">{{ payment.total.totalPrice | currency }}</b>
              </div>
            </div>
          </transition>
          <!-- 購買明細mobile -->
          <transition name="fade">
            <div class="d-block-phone" v-if="showDetail === i">
              <p>價格明細：</p>
              <table
                class="checkout-table"
                v-for="course in payment.courses"
                :key="course.title"
              >
                <tbody>
                  <tr>
                    <td>
                      <b>課程名稱</b>
                    </td>
                    <td>{{ course.title }}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>購買方案</b>
                    </td>
                    <td>{{ course.plan }}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>原價</b>
                    </td>
                    <td>{{ course.price | currency }}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>售價</b>
                    </td>
                    <td>{{ course.sellingPrice | currency }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout-payment__total">
                實付金額：
                <b class="ml-sm">{{ payment.total.totalPrice | currency }}</b>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators';
import moment from 'moment';

export default {
  name: 'Profile',
  data() {
    return {
      showDetail: false,
      account: null,
      updatePhoto: false,
    };
  },
  validations: {
    account: {
      name: { required },
      userImg: { required, url },
    },
  },
  computed: {
    isLoading() {
      const vm = this;
      return vm.$store.state.isLoading;
    },
    user() {
      const vm = this;
      return vm.$store.state.auth.user.profile;
    },
    payments() {
      const vm = this;
      return vm.$store.state.checkout.payments.filter(
        (payment) => payment.user.userId === vm.user.userId,
      );
    },
    getDownloadURL() {
      const vm = this;
      return vm.$store.state.downloadURL;
    },
  },
  watch: {
    getDownloadURL() {
      const vm = this;
      if (vm.getDownloadURL) {
        vm.account.userImg = vm.getDownloadURL;
        vm.updatePhoto = false;
      }
    },
  },
  methods: {
    time(num) {
      return moment(num).format('YYYY/MM/DD HH:mm');
    },

    // 上傳圖片
    uploadImage(e) {
      const vm = this;
      const file = e.target.files[0];
      if (!file.type.includes('image')) {
        vm.$toasted.error('請上傳圖片檔案', { duration: 3000 });
      } else {
        vm.updatePhoto = true;
        vm.$store.dispatch('updateFile', { file, place: 'profile/' });
      }
    },

    // 更新個人檔案
    updateUser() {
      const vm = this;
      vm.$v.$touch();
      if (!vm.updatePhoto) {
        if (vm.$v.$invalid) {
          vm.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
        } else {
          vm.$store
            .dispatch('auth/updateUser', {
              id: vm.user.userId,
              user: vm.account,
            })
            .then(() => {
              vm.$toasted.success('更新成功!!', {
                duration: 2000,
              });
            });
        }
      }
    },

    // show accordion
    show(i) {
      const vm = this;
      vm.showDetail = vm.showDetail === i ? false : i;
    },

    goCheckout(id) {
      const vm = this;
      vm.$router.push(`/checkout/${id}`);
    },
  },
  created() {
    const vm = this;
    vm.$store.commit('setDownloadUrl', null);
    vm.$store.dispatch('checkout/getPayments');
    vm.account = { ...vm.user };
  },
};
</script>
