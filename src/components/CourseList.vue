<template>
  <div class="courses-list" v-if="coursesList.length>0">
    <router-link
      :to="{name:'CourseDetails',params:{course_id:course.id}}"
      class="course-list__course"
      v-for="course in remainCourse"
      :key="course.id"
    >
      <div class="course-list__header">
        <div class="course-list__hot-tag" v-if="course.discount">
          <div class="course-list__hot-tag-text">精選</div>
        </div>
        <img class="course-list__img" :src="course.imageUrl" alt>
      </div>

      <div class="course-list__content">
        <div class="course-list__info">
          <div class="course-list__title heading-tertiary--dark">{{textLimit(course.title,20)}}</div>
          <div class="d-flex d-none-phone">
            <div class="course-list__category">{{course.categorySelected}}｜</div>
            <div class="course-list__coach">{{course.coach}}｜</div>
            <div class="course-list__time">{{course.week}} {{course.time}}</div>
          </div>

          <div class="course-list__time"></div>
          <div class="course-list__intro d-none-phone">{{textLimit(course.intro,50)}}</div>
        </div>

        <div class="course-list__price">
          <div class="course-list__price-info">
            <div class="course-list__price--discount">{{course.price|currency}}</div>
            <div class="course-list__price--origin">{{course.originPrice|currency}}</div>

            <star-rating
              :rating="course.avgRating"
              :increment="0.1"
              :star-size="17"
              :read-only="true"
              style="margin-left:auto"
            ></star-rating>
          </div>
          <add-to-cart class="d-none-tab-p" style="width:140px;margin-top:auto" :course="course"></add-to-cart>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import AddToCart from "@/components/AddToCart";

export default {
  name: "CourseList",
  props: ["coursesList"],
  components: { StarRating, AddToCart },
  computed: {
    remainCourse() {
      return this.coursesList.filter(course => course.remainQuantity > 0);
    }
  },
  methods: {
    //標題不超過20字元
    textLimit(title, len) {
      if (title.length > len) {
        title = title.substring(0, len - 1) + "...";
      }
      return title;
    }
  }
};
</script>