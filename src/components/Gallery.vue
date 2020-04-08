<template>
  <div>
    <div class="gallery-box" id="gallery-lightbox">
      <div class="gallery__item" v-for="(course, i) in courses" :key="i" @click="showImg(i)">
        <img class="gallery__img" :src="course" />
        <a :href="course.categoryImg">
          <i class="fas fa-search gallery__icon"></i>
          <div class="gallery__outline"></div>
        </a>
      </div>
    </div>
    <vue-easy-lightbox :visible="visible" :imgs="courses" :index="index" @hide="handleHide"></vue-easy-lightbox>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      visible: false,
      index: 0,
      courses: [require('../assets/img/gallery-1.jpg'), require('../assets/img/gallery-2.jpg'), require('../assets/img/gallery-3.jpg'), require('../assets/img/gallery-4.jpg'), require('../assets/img/gallery-5.jpg'), require('../assets/img/gallery-6.jpg'), require('../assets/img/gallery-7.jpg'), require('../assets/img/gallery-8.jpg'), require('../assets/img/gallery-9.jpeg'), require('../assets/img/gallery-10.jpg')],
    };
  },
  methods: {
    showImg(index) {
      const vm = this;
      vm.index = index;
      vm.visible = true;
    },
    handleHide() {
      const vm = this;
      vm.visible = false;
    },
  },
};
</script>
