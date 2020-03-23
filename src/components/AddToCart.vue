<template>
  <div>
    <button class="addcart-btn btn" :class="{ 'in-cart': inCart }">
      <!-- 若購物車已有課程前往購物車頁面 -->
      <router-link class="addcart-link" to="/cart" v-if="inCart">
        <i class="fas fa-shopping-cart"></i> 前往購物車
      </router-link>
      <!-- 反之加入購物車 -->
      <div class="addcart-link" v-else @click.prevent="addToCart()">
        <i class="fas fa-cart-plus"></i> 加入購物車
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: ['course'],
  computed: {
    // 課程是否已存在於購物車
    inCart() {
      const vm = this;
      return vm.$store.state.cart.cart.find(
        (course) => course.title === vm.course.title,
      );
    },
  },
  methods: {
    addToCart() {
      const vm = this;
      vm.$store.commit('cart/addToCart', vm.course);
      vm.show();
    },
    show() {
      const vm = this;
      vm.$modal.show('addtocart');
    },
  },
};
</script>
