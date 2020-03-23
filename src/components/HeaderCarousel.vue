<template>
  <carousel
    :items="1"
    :autoplay="true"
    :smartSpeed="1000"
    :nav="false"
    :loop="true"
  >
    <div class="header__bg header__bg--1"></div>
    <div class="header__bg header__bg--2"></div>
    <div class="header__bg header__bg--3"></div>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'HeaderCarousel',
  components: { carousel },
};
</script>
