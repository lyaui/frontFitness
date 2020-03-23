<template>
  <div>
    <loading
      :active.sync="isLoading"
      :opacity="0.8"
      :background-color="'#000'"
      :color="'#ff5722'"
    ></loading>
    <h2 class="heading-secondary">課程列表</h2>
    <button @click="turnNewEditPage('新增課程')" class="btn admin-btn">
      <i class="fas fa-plus-square"></i> 新增課程
    </button>

    <table class="admin-table">
      <thead>
        <tr>
          <th class="d-none-phone">圖示</th>
          <th class="d-none-phone">類別</th>
          <th>課程名稱</th>
          <th class="d-none-phone">精選</th>
          <th>剩餘數量</th>
          <th class="d-none-tab-p">原價</th>
          <th>售價</th>
          <th>編輯</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(course, index) in courses"
          :class="{ 'lighten-row': index % 2 == 1 }"
          :key="course.id"
        >
          <td class="d-none-phone">
            <img
              class="course-admin__img"
              :src="course.imageUrl"
              :alt="course.title"
            />
          </td>
          <td class="d-none-phone">{{ course.categorySelected }}</td>
          <td style="text-align:left;padding-left:20px">
            <router-link
              :to="{ name: 'CourseDetails', params: { course_id: course.id } }"
              >{{ course.title }}</router-link
            >
          </td>

          <td class="d-none-phone">
            <div v-if="course.discount">V</div>
            <div v-else>-</div>
          </td>

          <td :class="{ 'text-highlight': course.remainQuantity === 0 }">
            {{ course.remainQuantity }}/{{ course.quantity }}
          </td>
          <td class="d-none-tab-p">{{ course.originPrice | currency }}</td>
          <td>{{ course.price | currency }}</td>
          <td>
            <button
              @click="turnNewEditPage('編輯課程', course)"
              class="btn admin-btn"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn admin-btn"
              @click="deleteCourse(course.title, course.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination></Pagination>
    <v-dialog />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination';

export default {
  name: 'CoursesAdmin',
  components: { Pagination },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    textCounter() {
      return this.course.title;
    },
    courses() {
      return this.$store.state.courses.courses;
    },
  },
  methods: {
    deleteCourse(title, id) {
      this.$modal.show('dialog', {
        title: `⚠️ 確定刪除 ${title} 嗎？`,
        text: '課程一旦刪除將無法復原 😱😱😱',
        buttons: [
          {
            title: '確定',
            handler: () => {
              this.$store.dispatch('courses/removeCourse', id).then(() => {
                this.$toasted.success(`成功刪除 ${title}`, {
                  duration: 2000,
                });
                this.$modal.hide('dialog');
              });
            },
          },
          {
            title: '取消',
          },
        ],
      });
    },

    addCourse() {
      this.$store
        .dispatch('courses/createCourse', { ...this.course })
        .then(() => {
          this.$toasted.success('成功新增課程', {
            duration: 2000,
          });
        });
    },

    updateCourse(id) {
      this.$store
        .dispatch('courses/updateCourse', { id, course: this.course })
        .then(() => {
          this.$toasted.success('更新成功!!', {
            duration: 2000,
          });
        });
    },
    // 編輯/新增課程
    turnNewEditPage(status, course) {
      this.$store.commit('courses/setStatus', status);
      if (status === '編輯課程') {
        this.$store.commit('courses/setCourse', course);
      } else {
        this.$store.commit('courses/setCourse', {});
      }
      this.$router.push({ name: 'courseNewEdit' });
    },
  },

  created() {
    this.$store.dispatch('courses/getCoursesLimit');
    this.$store.dispatch('courses/getPageLength');
  },
};
</script>

<style>
#editor {
  height: 250px;
}
</style>
