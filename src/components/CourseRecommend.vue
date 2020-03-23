<template>
  <div>
    <div class="heading-tertiary--dark mb-sm">為你推薦</div>

    <router-link
      :to="{ name: 'CourseDetails', params: { course_id: course.id } }"
      class="course-recommend__course"
      v-for="course in courses.slice(0, 3)"
      :key="course.id"
    >
      <div class="course-recommend__header">
        <div class="course-recommend__hot-tag" v-if="course.discount">
          <div class="course-recommend__hot-tag-text">精選</div>
        </div>
        <img
          class="course-recommend__img"
          :src="course.imageUrl"
          :alt="course.title"
        />
      </div>

      <div class="course-recommend__content">
        <div class="course-recommend__info">
          <div class="course-recommend__title heading-tertiary--dark">
            {{ courseTitle(course.title) }}
          </div>
          <div class="d-flex d-none-phone">
            <div class="course-recommend__category">
              {{ course.categorySelected }}｜
            </div>
            <div class="course-recommend__coach">{{ course.coach }}｜</div>
            <div class="course-recommend__time">
              {{ course.week }} {{ course.time }}
            </div>
          </div>

          <div class="course-recommend__time"></div>
        </div>
        <div class="d-flex">
          <div class="course-recommend__price">
            <star-rating
              :rating="course.avgRating"
              :increment="0.1"
              :star-size="18"
              :read-only="true"
            ></star-rating>
          </div>
          <div class="course-recommend__price">
            <div class="course-recommend__price--discount">
              {{ course.price | currency }}
            </div>
            <div class="course-recommend__price--origin">
              {{ course.originPrice | currency }}
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'CourseRecommend',
  props: ['category', 'courseId'],
  components: {
    StarRating,
  },
  computed: {
    courses() {
      const vm = this;
      return vm.$store.state.courses.courses.filter(
        (course) => course.categorySelected === vm.category
          && course.id !== vm.courseId
          && course.remainQuantity > 0,
      );
    },
  },
  methods: {
    courseTitle(title) {
      const len = 20;
      if (title.length > len) {
        title = `${title.substring(0, len - 1)}...`;
      }
      return title;
    },
  },
  created() {
    const vm = this;
    if (vm.$store.state.courses.courses === []) {
      vm.$store.dispatch('courses/getCourses');
    }
  },
};
</script>
