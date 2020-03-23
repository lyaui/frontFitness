<template>
  <div>
    <main class="courses-main">
      <div class="container">
        <step-bar :status="status"></step-bar>

        <div class="checkout">
          <div class="checkout__info mb-sm">
            <!-- 購買課程 -->
            <div class="checkout-form checkout-payment__courses mb-sm">
              <div class="heading-tertiary--dark mb-sm">
                <i class="fas fa-money-check fa-lg"></i> 結帳金額
              </div>
              <table class="checkout-table">
                <thead>
                  <tr>
                    <th>課程名稱</th>
                    <th class="d-none-phone">購買方案</th>
                    <th class="d-none-phone">原價</th>
                    <th>售價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in courses" :key="course.title">
                    <td>{{ course.title }}</td>
                    <td class="d-none-phone">
                      <template
                        v-if="course.discount && total.totalDiscount > 0"
                        >精選優惠</template
                      >
                      <template v-else>課程售價</template>
                    </td>
                    <td class="d-none-phone" style="text-align:right">
                      {{ course.price | currency }}
                    </td>

                    <td style="text-align:right">
                      <template
                        v-if="total.totalDiscount !== 0 && course.discount"
                        >{{ (course.price - 100) | currency }}</template
                      >
                      <template v-else>{{ course.price | currency }}</template>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout-payment__total">
                實付金額
                <b class="ml-sm">{{ total.totalPrice | currency }}</b>
              </div>
            </div>

            <!-- 購買資訊-付款方式 -->
            <div class="checkout-form mb-sm">
              <div class="heading-tertiary--dark mb-sm">
                <i class="far fa-credit-card fa-lg"></i>
                付款方式
              </div>

              <div class="form__row">
                <div class="form__group">
                  <select
                    class="form__input"
                    v-model="userInfo.payWay"
                    :class="{
                      'form__input--warning': $v.userInfo.payWay.$error,
                    }"
                  >
                    <option :value="null" disabled>--請選擇付款方式--</option>
                    <option value="信用卡">信用卡</option>
                    <option value="ATM轉帳">ATM轉帳</option>
                    <option value="超商付款">超商付款</option>
                  </select>
                  <template v-if="$v.userInfo.payWay.$dirty">
                    <span
                      class="text-warning"
                      v-if="!$v.userInfo.payWay.required"
                      >請選擇付款方式</span
                    >
                  </template>
                </div>
              </div>
            </div>

            <!-- 購買資訊-買家資訊 -->
            <div class="checkout-form">
              <div class="heading-tertiary--dark mb-sm">
                <i class="fas fa-cash-register fa-lg"></i>
                發票選項
              </div>
              <p class="checkout-form__text mb-sm">
                以下資訊只用於開立發票，不會在其他頁面顯示。發票開立後不可更改，請確認資訊是否都填寫正確！
                <br />（ <span class="text-highlight">*</span> 為必填欄位）
              </p>

              <form class="checkout-form__form">
                <div class="form__row">
                  <div class="form__group">
                    <label class="form__label">
                      姓名
                      <span class="text-highlight">*</span>
                    </label>

                    <input
                      class="form__input"
                      v-model.trim="userInfo.name"
                      placeholder="請填入真實姓名"
                      type="text"
                      :class="{
                        'form__input--warning': $v.userInfo.name.$error,
                      }"
                    />
                    <template v-if="$v.userInfo.name.$dirty">
                      <span
                        class="text-warning"
                        v-if="!$v.userInfo.name.required"
                        >姓名為必填欄位</span
                      >
                    </template>
                  </div>
                  <div class="form__group">
                    <label class="form__label">
                      聯絡電子信箱
                      <span class="text-highlight">*</span>
                    </label>
                    <input
                      class="form__input"
                      v-model.trim="userInfo.email"
                      placeholder="請填入電子信箱"
                      type="email"
                      :class="{
                        'form__input--warning': $v.userInfo.email.$error,
                      }"
                    />
                    <template v-if="$v.userInfo.email.$dirty">
                      <span
                        class="text-warning"
                        v-if="!$v.userInfo.email.required"
                        >信箱為必填欄位</span
                      >
                      <span class="text-warning" v-if="!$v.userInfo.email.email"
                        >請輸入正確信箱格式</span
                      >
                    </template>
                  </div>
                </div>
                <div class="form__row">
                  <div class="form__group">
                    <label class="form__label">
                      聯絡電話
                      <span class="text-highlight">*</span>
                    </label>
                    <input
                      class="form__input"
                      v-model.trim.number="userInfo.phone"
                      placeholder="請填入聯絡電話"
                      type="tel"
                      :class="{
                        'form__input--warning': $v.userInfo.phone.$error,
                      }"
                    />
                    <template v-if="$v.userInfo.phone.$dirty">
                      <span
                        class="text-warning"
                        v-if="!$v.userInfo.phone.required"
                        >電話為必填欄位</span
                      >
                      <span
                        class="text-warning"
                        v-if="!$v.userInfo.phone.numeric"
                        >電話號碼必為數字</span
                      >
                    </template>
                  </div>
                </div>
                <div class="form__row">
                  <div class="form__group">
                    <label class="form__label">備註</label>

                    <textarea
                      class="form__input"
                      v-model="userInfo.remark"
                      placeholder="如有任何備註事項請註明"
                      cols="30"
                      rows="20"
                      style="height:100px"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- 付款確認 -->
          <div class="checkout__summary">
            <div class="checkout__summary-title heading-tertiary--dark">
              訂單明細
            </div>

            <div class="checkout__summary-price">
              <div>原價</div>
              <div>{{ total.totalOrigin | currency }}</div>
            </div>
            <div class="checkout__summary-price">
              <div>優惠券折扣</div>
              <div>-{{ total.totalDiscount | currency }}</div>
            </div>
            <div class="checkout__summary-total">
              <div>總計</div>
              <h3>{{ total.totalPrice | currency }}</h3>
            </div>
            <button class="btn btn-primary" @click.prevent="checkOut()">
              確認送出
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StepBar from '@/components/StepBar';
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
  name: 'Checkout',
  components: {
    StepBar,
  },
  data() {
    return {
      status: 'checkout',
      paymentId: null,
      userInfo: {
        payWay: null,
        name: null,
        email: null,
        phone: null,
        remark: null,
      },
    };
  },
  validations: {
    userInfo: {
      payWay: {
        required,
      },
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        numeric,
      },
    },
  },
  computed: {
    // user
    user() {
      return this.$store.state.auth.user;
    },
    // 價格相關
    total() {
      return this.$store.state.checkout.payment.total;
    },
    // 課程相關
    courses() {
      return this.$store.state.checkout.payment.courses;
    },
    // 訂單路徑
    path() {
      return this.$store.state.checkout.payment.id;
    },
  },
  watch: {
    path() {
      this.$router.push(`/checkout/${this.path}`);
    },
  },
  methods: {
    // 結帳
    checkOut() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
      } else {
        // 購買課程資訊
        const buyCourses = this.courses.map((course) => ({
          id: course.id,
          title: course.title,
          plan:
            // 如果這是優惠課程並且有輸入優惠碼
            course.discount && this.total.totalDiscount > 0
              ? '精選優惠'
              : '課程售價',
          price: course.price,
          sellingPrice:
            // 如果這是優惠課程並且有輸入優惠碼
            course.discount && this.total.totalDiscount > 0
              ? course.price - this.$store.state.cart.discount
              : course.price,
        }));

        const payment = {
          courses: buyCourses,
          user: { userId: this.user.uid, ...this.userInfo },
          total: this.total,
        };

        // 建立訂單
        this.$store.dispatch('checkout/createPayment', payment).then(() => {
          this.$toasted.success('訂單建立成功 請儘快付款', { duration: 3000 });
          // 清空購物車與暫時訂單
          this.$store.commit('cart/clearCart');
        });
      }
    },
  },
  created() {
    // 設定初始資料
    this.userInfo.name = this.user.profile.name;
    this.userInfo.email = this.user.profile.email;
  },
};
</script>
