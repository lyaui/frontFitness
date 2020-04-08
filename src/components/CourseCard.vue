<template>
  <div class="course-carousel mb-sm">
    <carousel
      v-if="courseCard.length > 0"
      :nav="false"
      :margin="30"
      :dots="false"
      :rewind="false"
      :responsive="{
        300: { items: 1, stagePadding: 30, margin: 80 },
        450: { items: 1, stagePadding: 50, margin: 80 },
        520: { items: 2, margin: 30 },
        750: { items: 2, stagePadding: 30, margin: 60 },
        900: { items: 3 },
        1200: { items: 4 },
        1600: { items: 5 },
      }"
    >
      <div class="course-card" v-for="course in courseCard" :key="course.id">
        <router-link :to="{ name: 'CourseDetails', params: { course_id: course.id } }">
          <div class="course-card__header">
            <div class="course-card__hot-tag" v-if="course.discount">
              <div class="course-card__hot-tag-text">精選</div>
            </div>
            <img class="course-card__img" :src="course.imageUrl" alt />
          </div>
          <div class="course-card__body">
            <div class="course-card__title heading-tertiary--dark">
              {{ textLimit(course.title, 20) }}
            </div>
            <div class="d-flex">
              <div class="course-card__category">{{ course.categorySelected }}｜</div>
              <div class="course-card__coach">{{ course.coach }}</div>
            </div>
            <div class="course-card__rating">
              <star-rating :rating="course.avgRating" :increment="0.1" :star-size="18" :read-only="true"></star-rating>
            </div>
            <div class="course-card__price">
              <div class="course-card__price--origin">
                {{ course.originPrice | currency }}
              </div>
              <div class="course-card__price--discount">
                {{ course.price | currency }}
              </div>
            </div>
            <add-to-cart :course="course"></add-to-cart>
          </div>
        </router-link>
      </div>
      <template v-if="showBtn" slot="prev">
        <button class="carousel-btn carousel-btn--previous">
          <span class="prev">
            <i class="fas fa-angle-left"></i>
          </span>
        </button>
      </template>
      <template v-if="showBtn" slot="next">
        <button class="carousel-btn carousel-btn--next">
          <span class="next">
            <i class="fas fa-angle-right"></i>
          </span>
        </button>
      </template>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import StarRating from 'vue-star-rating';
import AddToCart from '@/components/AddToCart.vue';

export default {
  name: 'CourseCard',
  props: ['courseCard', 'selectedCat'],
  components: { carousel, StarRating, AddToCart },
  data() {
    return {
      showBtn: false,
    };
  },
  computed: {
    selectCat() {
      const vm = this;
      return vm.$store.state.courses.selectCat;
    },
  },

  methods: {
    textLimit(title, len) {
      let substringText = title;
      if (title.length > len) {
        substringText = `${title.substring(0, len - 1)}...`;
      }
      return substringText;
    },
    measureSize() {
      const vm = this;
      const width = window.innerWidth;
      let cardNum;

      switch (true) {
        case width < 520:
          cardNum = 2;
          break;
        case width < 900:
          cardNum = 2;
          break;
        case width < 1200:
          cardNum = 3;
          break;
        case width > 1800:
          cardNum = 5;
          break;
        default:
          cardNum = 4;
          break;
      }
      vm.showBtn = !(vm.courseCard.length <= cardNum);
    },
  },
  created() {
    const vm = this;
    window.addEventListener('resize', vm.measureSize);
    vm.measureSize();
  },
};
</script>
