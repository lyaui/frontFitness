<template>
  <div>
    <ul class="pagination">
      <li class="page-item">
        <button
          class="page-item btn"
          @click.prevent="getMoreCourses('previous')"
          :disabled="currentPage === 1"
        >
          <i class="fas fa-caret-left"></i>
        </button>
      </li>
      <li class="page-item">{{ currentPage }} / {{ totalPage }}</li>
      <li class="page-item">
        <button
          class="page-item btn"
          @click.prevent="getMoreCourses('next')"
          :disabled="currentPage === totalPage"
        >
          <i class="fas fa-caret-right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  computed: {
    currentPage() {
      return this.$store.getters['courses/currentPage'];
    },
    totalPage() {
      return this.$store.state.courses.pagination.totalLength;
    },
  },
  methods: {
    getMoreCourses(page) {
      this.$store.dispatch('courses/getMoreCourses', page);
    },
  },
};
</script>
