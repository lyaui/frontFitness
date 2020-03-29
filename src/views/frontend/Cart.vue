<template>
  <div>
    <main class="courses-main">
      <div class="container">
        <step-bar :status="status"></step-bar>
        <div class="checkout">
          <div class="checkout__items">
            <div
              class="heading-tertiary--dark mb-sm"
              v-if="cartCourses.length > 0"
            >
              <i class="fas fa-shopping-cart fa-lg"></i>
              購物車中有 {{ cartCourses.length }} 門課程
            </div>
            <div class="heading-tertiary--dark mb-sm" v-else>
              <i class="fas fa-shopping-cart fa-lg"></i>
              購物車中尚無課程！
              <button
                class="btn heading-tertiary--dark"
                @click.prevent="selectCat('所有課程')"
              >
                <u>速選購</u>
              </button>
              &#128170;
            </div>
            <ul class="checkout__list">
              <li
                class="cart__item"
                v-for="course in cartCourses"
                :key="course.id"
              >
                <div class="d-flex">
                  <img
                    class="cart__img"
                    :src="course.imageUrl"
                    :alt="course.title"
                  />
                </div>

                <div class="cart__info">
                  <router-link
                    class="cart__link"
                    :to="{
                      name: 'CourseDetails',
                      params: { course_id: course.id },
                    }"
                  >
                    <div class="cart__tag-box d-none-phone">
                      <div v-if="course.discount" class="cart__tag">
                        精選課程
                      </div>
                      <span
                        class="text-warning"
                        v-if="discounted && course.discount"
                        >已成功套用優惠券</span
                      >
                    </div>

                    <div class="cart__title d-none-phone">
                      {{ course.title }}
                    </div>
                    <div class="d-flex">
                      <div class="cart__category">
                        {{ course.categorySelected }}｜
                      </div>
                      <div class="cart__coach">{{ course.coach }}｜</div>
                      <div class="cart__time">
                        {{ course.week }} {{ course.time }}
                      </div>
                    </div>
                  </router-link>
                  <div class="cart__handle">
                    <div class="cart__price">
                      <!-- 沒有使用優惠券時的價格（橘字） -->
                      <div v-if="!discounted" class="cart__price--origin">
                        {{ course.price | currency }}
                      </div>
                      <!-- 使用優惠券-->
                      <template v-if="discounted">
                        <template v-if="course.discount">
                          <!-- 有優惠的課程(橘字) -->
                          <div class="cart__price--origin">
                            {{ (course.price - 100) | currency }}
                          </div>
                          <!-- 原價（刪除線） -->
                          <div class="cart__price--discount">
                            {{ course.price | currency }}
                          </div>
                        </template>
                        <!-- 沒有優惠的課程 -->
                        <template v-if="!course.discount">
                          <div class="cart__price--origin">
                            {{ course.price | currency }}
                          </div>
                        </template>
                      </template>
                    </div>
                    <button
                      class="cart__remove btn"
                      @click="deleteCourse(course)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="checkout__summary">
            <div class="checkout__summary-title heading-tertiary--dark">
              訂單明細
            </div>

            <div class="checkout__summary-price">
              <div>原價</div>
              <div>{{ total.totalOrigin | currency }}</div>
            </div>
            <div class="checkout__summary-price" v-if="discounted">
              <div>優惠券折扣</div>
              <div>-{{ total.totalDiscount | currency }}</div>
            </div>
            <div class="checkout__summary-total">
              <div>總計</div>
              <h3>{{ total.totalPrice | currency }}</h3>
            </div>
            <div class="form__row">
              <div class="form__group">
                <div class="form__label">使用折扣代碼</div>
                <input
                  class="mb-sm form__input"
                  type="text"
                  v-model.trim="couponCode"
                  placeholder="請輸入優惠券"
                  :disabled="couponCode === 'LOVEFITTING'"
                />
                <span class="text-warning">{{ feedback }}</span>
              </div>
            </div>

            <button
              v-if="cartCourses.length > 0"
              class="btn btn-primary"
              @click="checkOut()"
            >
              確定結帳
            </button>
            <button
              v-else
              class="btn btn-primary--cancel"
              style="margin:0"
              @click="selectCat('所有課程')"
            >
              請先選購課程
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StepBar from '@/components/StepBar.vue';

export default {
  name: 'Cart',
  components: {
    StepBar,
  },
  data() {
    return {
      status: 'cart',
      coupon: false,
      couponCode: null,
      couponCourse: null,
    };
  },
  computed: {
    user() {
      const vm = this;
      return vm.$store.state.auth.user;
    },
    cartCourses() {
      const vm = this;
      return vm.$store.state.cart.cart;
    },

    // 計算價格相關
    total() {
      const vm = this;
      return vm.$store.state.cart.total;
    },

    // 折扣訊息
    feedback() {
      const vm = this;
      // 沒輸入折扣代碼
      if (!vm.couponCode) {
        return null;
      }
      // 錯的折扣代碼
      if (vm.couponCode !== 'LOVEFITTING') {
        return '代碼不存在 請再次確認';
      }
      // 有折扣代碼課程
      if (vm.total.totalDiscount !== 0) {
        return '已成功套用優惠券';
      }
      // 無折扣代碼課程
      return '無符合活動優惠之課程';
    },

    // 是否成功使用優惠券狀態
    discounted() {
      const vm = this;
      return vm.$store.state.cart.coupon;
    },
  },
  watch: {
    // 輸入成功時就會送出折扣碼
    couponCode() {
      const vm = this;
      if (vm.couponCode === 'LOVEFITTING') {
        vm.coupon = true;
        vm.$store.commit('cart/addCouponCode', vm.coupon);
      }
      // 計算總價
      vm.$store.commit('cart/total');
    },
  },
  methods: {

    deleteCourse(course) {
      const vm = this;
      vm.$store.commit('cart/removeItem', course);
      // 計算總價
      vm.$store.commit('cart/total');
    },
    selectCat(cat) {
      const vm = this;
      vm.$store
        .dispatch('courses/getCourses', cat)
        .then(() => vm.$router.push('/courses'));
    },

    // 下一步
    checkOut() {
      const vm = this;
      if (vm.user && vm.cartCourses.length > 0) {
        // 創建暫時訂單
        vm.$store.commit('checkout/setPayment', {
          courses: vm.cartCourses,
          total: vm.total,
        });
        vm.$router.push('/checkout');
      } else {
        vm.$toasted.error('請先登入或註冊會員', { duration: 3000 });
      }
    },
  },

  created() {
    const vm = this;
    // 初始設定coupon是false，離開頁面就折扣就會消失
    vm.$store.commit('cart/addCouponCode', vm.coupon);
    vm.$store.commit('cart/total');
  },
};
</script>
