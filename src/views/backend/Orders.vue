<template>
  <div>
    <loading :active.sync="isLoading" :opacity="0.8" :background-color="'#000'" :color="'#ff5722'"></loading>
    <h2 class="heading-secondary">訂單列表</h2>
    <table class="admin-table mb-md">
      <thead>
        <tr>
          <th class="d-none-phone">訂單成立</th>
          <th>訂單編號</th>
          <th class="d-none-phone">姓名</th>
          <th class="d-none-phone">應付金額</th>
          <th>狀態</th>
          <th>詳情</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(payment, i) in payments" :class="{ 'lighten-row': i % 2 == 1 }" :key="payment.id">
          <td class="d-none-phone">{{ time(payment.createdAt) }}</td>
          <td style="text-align: left; padding-left: 20px;">{{ payment.id }}</td>
          <td class="d-none-phone">{{ payment.user.name }}</td>
          <td class="d-none-phone">
            {{ payment.total.totalPrice | currency }}
          </td>
          <td>
            <template v-if="payment.status === '尚未付款'">
              <i class="fas fa-exclamation-triangle" style="color: #ff5721;"></i>
              尚未付款
            </template>
            <template v-if="payment.status === '付款完成'"> <i class="fas fa-check-circle" style="color: #0fc195;"></i> 付款完成 </template>
          </td>
          <td>
            <button class="admin-btn btn" @click="show(payment)">
              <i class="fas fa-search"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- detail modal -->
    <modal v-if="payment" name="payment-detail" :resizable="true" :adaptive="true" height="auto" :maxWidth="600" :scrollable="true" :clickToClose="false">
      <div class="admin-panel">
        <p class="heading-tertiary--grey mb-sm">訂單編號：{{ payment.id }}</p>
        <div class="admin-order">
          <div>
            <p>訂單成立： {{ time(payment.createdAt) }}</p>
            <p>
              付款時間：
              <template v-if="payment.status === '付款完成'">{{ time(payment.finishedAt) }}</template>
              <template v-else> <i class="fas fa-exclamation-triangle" style="color: #ff5721; margin-right: 5px;"></i>尚未付款 </template>
            </p>
            <p>聯絡人姓名：{{ payment.user.name }}</p>
            <p>聯絡人信箱：{{ payment.user.email }}</p>
            <p>聯絡人電話：{{ payment.user.phone }}</p>
            <p>實付金額：{{ payment.total.totalPrice | currency }}</p>
            <p>付款方式：{{ payment.user.payWay }}</p>
            <p>聯絡人備註：{{ payment.user.remark || '無' }}</p>
          </div>
          <button class="btn detail-show-btn" @click="showDetail = !showDetail">
            <template v-if="showDetail"> <i class="fas fa-chevron-up"></i> 收合內容 </template>
            <template v-else> <i class="fas fa-chevron-down"></i> 查看詳細 </template>
          </button>
          <!-- 購買明細 -->
          <transition name="fade">
            <div class="d-none-phone" v-if="showDetail">
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
                    <td style="text-align: right;">
                      {{ course.price | currency }}
                    </td>
                    <td style="text-align: right;">
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
            <div class="d-block-phone" v-if="showDetail">
              <p>價格明細：</p>
              <table class="checkout-table" v-for="course in payment.courses" :key="course.title">
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
        <div class="btn-footer">
          <button @click="hide" class="btn btn-primary mt-sm" style="width: 120px; margin: auto; margin-bottom: -15px;">
            確定
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Orders',
  data() {
    return {
      showDetail: false,
      payment: null,
    };
  },
  computed: {
    isLoading() {
      const vm = this;
      return vm.$store.state.isLoading;
    },
    payments() {
      const vm = this;
      return vm.$store.state.checkout.payments;
    },
  },
  methods: {
    time(num) {
      return moment(num).format('YYYY/MM/DD HH:mm');
    },
    show(payment) {
      const vm = this;
      vm.payment = payment;
      vm.$modal.show('payment-detail');
    },
    hide() {
      const vm = this;
      vm.showDetail = false;
      vm.$modal.hide('payment-detail');
    },
  },
  created() {
    const vm = this;
    vm.$store.dispatch('checkout/getPayments');
  },
};
</script>
