<template>
  <div>
    <loading :active.sync="isLoading" :opacity=".8" :background-color="'#000'" :color="'#ff5722'"></loading>

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
                  <tr v-for="course in payment.courses" :key="course.title">
                    <td>{{course.title}}</td>
                    <td class="d-none-phone">
                      <template v-if="course.discount">精選優惠</template>
                      <template v-else>課程售價</template>
                    </td>
                    <td class="d-none-phone" style="text-align:right">{{course.price|currency}}</td>

                    <td style="text-align:right">{{course.sellingPrice|currency}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout-payment__total">
                實付金額
                <b class="ml-sm">{{total.totalPrice|currency}}</b>
              </div>
            </div>
            <!-- 付款資訊 -->
            <div class="checkout-form checkout-payment__user">
              <div class="heading-tertiary--dark mb-sm">
                <i class="far fa-address-card fa-lg"></i> 付款資訊
              </div>
              <div class="checkout-payment__invoice">
                <div>
                  <b>付款方式</b>
                  <p>{{user.payWay}}</p>
                </div>
                <div>
                  <b>發票資訊</b>
                  <p>聯絡人：{{user.name}}</p>
                  <p>聯絡電子信箱：{{user.email}}</p>
                  <p>聯絡電話：{{user.phone}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 付款狀態 -->
          <div class="checkout__summary" v-if="payment.status==='尚未付款'">
            <div class="checkout__summary-title heading-tertiary--dark">訂單明細</div>

            <div class="checkout__summary-price">
              <div>原價</div>
              <div>{{total.totalOrigin|currency}}</div>
            </div>
            <div class="checkout__summary-price" v-if="total.totalDiscount>0">
              <div>優惠券折扣</div>
              <div>-{{total.totalDiscount|currency}}</div>
            </div>
            <div class="checkout__summary-total">
              <div>總計</div>
              <h3>{{total.totalPrice|currency}}</h3>
            </div>
            <button
              class="btn btn-primary"
              style="display: inline-block; background-color: rgb(255, 87, 33); border-left-color: rgb(255, 87, 33); border-right-color: rgb(255, 87, 33);"
              @click.prevent="checkOut(payment.id)"
            >確認付款</button>
          </div>

          <!-- 付款成功 -->
          <div
            class="checkout__summary checkout__summary--success mb-sm"
            v-if="payment.status==='付款完成'"
          >
            <div class="mb-sm heading-tertiary--dark">付款成功 感謝購買</div>

            <img class="mb-sm mt-sm" width="100px" src="@/assets/img/checked.svg">
            <ul class="checkout__summary-list">
              <li class="checkout__summary-item">
                訂單編號：
                <br>
                {{payment.id}}
              </li>
              <li class="checkout__summary-item">
                購買時間：
                <br>
                {{time}}
              </li>
              <li class="checkout__summary-item">付款金額：{{total.totalPrice|currency}}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import moment from "moment";

export default {
  name: "CheckoutInfo",
  components: {
    StepBar
  },
  data() {
    return {
      paymentId: null
    };
  },
  computed: {
    time() {
      return moment(this.payment.finishedAt).format("YYYY/MM/DD HH:mm");
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    payment() {
      return this.$store.state.checkout.payment;
    },
    //user
    user() {
      return this.$store.state.checkout.payment.user;
    },
    //價格相關
    total() {
      return this.$store.state.checkout.payment.total;
    },
    //課程相關
    courses() {
      return this.$store.state.checkout.payment.courses;
    },
    //進度狀態顯示
    status() {
      return this.payment.status === "付款完成" ? "success" : "checkout";
    }
  },

  methods: {
    checkOut(id) {
      // 更改訂單付款狀態
      this.$store.dispatch("checkout/finishPayment", id).then(() => {
        // 結帳成功提示
        this.$toasted.success(`付款成功，感謝購買！`, {
          duration: 2000
        });
      });
    }
  },
  created() {
    this.paymentId = this.$route.params.paymentId;

    this.$store.dispatch("checkout/getPaymentById", this.paymentId);
  }
};
</script>