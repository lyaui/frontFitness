<template>
  <div id="app">
    <nav-bar :navbar="navbar" v-if="!$route.path.includes('admin')"></nav-bar>
    <transition name="slide-fade">
      <router-view :navbar="navbar"></router-view>
    </transition>

    <app-footer v-if="!$route.path.includes('admin')"></app-footer>
    <announcebar
      v-if="!$route.path.includes('admin')"
      :class="{'announce-bar--hidden': !showNavbar}"
    ></announcebar>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>


<script>
import $ from "jquery";
import Announcebar from "@/components/Announcebar";
import NavBar from "@/components/NavBar";
import AppFooter from "@/components/Footer";

export default {
  name:"APP",
  components: {
    Announcebar,
    NavBar,
    AppFooter
  },
  data() {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
      navbar: [
        {
          cat: "所有課程",
          engCat: "ALL COURSES",
          des:
            "最豐富的運動課程，有氧、瑜珈、游泳、飛輪等多元項目給注重健康的你！",
          icon: "fas fa-th-large"
        },
        {
          cat: "有氧課程",
          engCat: "Aerobic course",
          des:
            "最多元的有氧課程，放鬆愉快的上課方式，隨著音樂一起動，減脂甩肉好easy！",
          icon: "fas fa-bowling-ball"
        },
        {
          cat: "瑜珈課程",
          engCat: "Yoga course",
          des:
            "OL下班最愛的運動！增強肌力柔軟度、矯正姿態，瘦身舒壓，為妳找回沉靜心靈。",
          icon: "fas fa-pray"
        },

        {
          cat: "游泳課程",
          engCat: "Swimming course",
          des:
            "專業小班授課，自由式、蛙式、仰式、蝶式手把手教到會，零基礎也能身如蛟龍。",
          icon: "fas fa-swimmer"
        },
        {
          cat: "飛輪課程",
          engCat: "Spinning bike course",
          des:
            "高效燃脂極速飆汗，增強肌力與心肺耐力，忙碌現代人最有效率的減脂方式！",
          icon: "fas fa-bicycle"
        },
        {
          cat: "其他課程",
          engCat: "Others",
          des: "精選各式特殊運動，重訓、武術、桌球等...這裡通通有！",
          icon: "fas fa-dumbbell"
        }
      ]
    };
  },
  // 路徑產生變化即執行
  watch: {
    $route() {
      $(".navigation").addClass("navigation-dark");
      this.showNavbar = false;
    }
  },
  methods: {
    //首頁navbar滾動變色
    scrollManNav() {
      if (this.$route.path === "/") {
        if ($(window).scrollTop() > 200) {
          $(".navigation").addClass("navigation-dark");
        } else {
          $(".navigation").removeClass("navigation-dark");
          // $(".announce-bar").removeClass("announce-bar--hidden");
        }
      }
    },
    scrollAnnounce() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 60) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    $(window).scroll(this.scrollManNav);
    $(window).scroll(this.scrollAnnounce);
  }
};
</script>

