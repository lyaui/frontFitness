<template>
  <modal
    name="addtocart"
    :resizable="true"
    :adaptive="true"
    height="auto"
    :maxWidth="700"
    :scrollable="true"
  >
    <div class="cart__modal">
      <ul class="cart__list">
        <li
          class="cart__item"
          v-for="course in this.cartCourses"
          :key="course.id"
        >
          <img class="cart__img" :src="course.imageUrl" :alt="course.title" />
          <div class="cart__info">
            <router-link
              class="cart__link"
              :to="{ name: 'CourseDetails', params: { course_id: course.id } }"
            >
              <div class="cart__tag-box d-none-phone">
                <div v-if="course.discount" class="cart__tag">精選課程</div>
              </div>

              <div class="cart__title d-none-phone">{{ course.title }}</div>
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
                <div class="cart__price--origin">
                  {{ course.price | currency }}
                </div>
              </div>
              <button class="cart__remove btn" @click="deleteCourse(course)">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="btn-footer">
        <button @click="checkout()" class="btn btn-primary" style="width:100px">
          結帳
        </button>
        <button
          class="btn btn-primary--cancel"
          style="width:120px"
          @click="hide()"
        >
          繼續逛
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'AddToCartModal',
  computed: {
    cartCourses() {
      return this.$store.state.cart.cart;
    },
  },
  watch: {
    cartCourses() {
      if (this.cartCourses.length === 0) {
        this.hide();
      }
    },
  },

  methods: {
    deleteCourse(course) {
      this.$store.commit('cart/removeItem', course);
    },
    checkout() {
      this.hide();
      this.$router.push('/cart');
    },
    hide() {
      this.$modal.hide('addtocart');
    },
  },
};
</script>
