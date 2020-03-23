/* eslint-disable no-plusplus */
<template>
  <div>
    <loading
      :active.sync="isLoading"
      :opacity="0.8"
      :background-color="'#000'"
      :color="'#ff5722'"
    ></loading>

    <!-- sub-nav -->
    <nav class="sub-nav" :class="{ 'sub-nav--hidden': !showNavbar }">
      <ul class="sub-nav__list">
        <li
          v-for="cat in navbar"
          :key="cat.cat"
          class="sub-nav__item"
          @click.prevent="selectCat(cat.cat)"
        >
          <a class="sub-nav__link">
            <i :class="`${cat.icon}`"></i>
            <p>{{ cat.cat }}</p>
          </a>
        </li>
      </ul>
    </nav>
    <main class="courses-main" id="courseMain">
      <header class="courses-header" v-if="!searchShow">
        <div class="container">
          <h2 class="courses-header__title">{{ cat }}</h2>
          <p class="courses-header__text">
            {{ navbar.filter((intro) => intro.cat === cat)[0].des }}
          </p>
        </div>
      </header>
      <div class="container">
        <!-- 精選課程區 -->
        <section v-if="!searchShow">
          <h2 class="heading-tertiary--dark">精選{{ cat }}</h2>
          <transition name="slide-fade">
            <course-card
              v-if="courses.length > 0"
              :selectedCat="cat"
              :course-card="courses"
            ></course-card>
          </transition>
        </section>

        <!-- 全部課程區 -->
        <section>
          <h2 class="heading-tertiary--dark mb-sm" v-if="!searchShow">全部{{ cat }}</h2>
          <!-- 沒有課程結果 -->
          <div class="search-result" v-if="searchShow && !isLoading">
            <div v-if="coursesOrdered.length === 0">
              <p>
                抱歉，我們找不到有關「{{ keyWord }}」的任何結果
                <br />請嘗試調整您的搜索。以下是幾點建議：
              </p>
              <ul>
                <li>確保所有字詞拼寫正確。</li>
                <li>嘗試不同的搜索詞。</li>
                <li>嘗試更常見的搜索字詞。</li>
              </ul>
            </div>
            <div v-else>
              關於「{{ keyWord }}」的 {{ coursesOrdered.length }} 筆结果：
            </div>
          </div>
          <!-- filter&search tool bar-->
          <div class="courses-filter">
            <div class="courses-filter__list">
              <!-- 課程搜尋 -->
              <div class="search">
                <input
                  type="text"
                  class="search__input"
                  v-model.trim="searchWord"
                  placeholder="搜尋課程"
                  @keyup.enter="searchCourse()"
                />
                <button class="search__btn btn" @click="searchCourse()">
                  <div class="search__icon">
                    <i class="fas fa-search"></i>
                  </div>
                </button>
              </div>
              <!-- 課程排序 -->
              <div class="courses-filter__btn-group d-flex">
                <div class="courses-filter__item">
                  <button
                    @click="
                      priceOrder = !priceOrder;
                      orderCourse('price', priceOrder);
                    "
                    class="courses-filter__btn btn"
                  >
                    <i v-if="priceOrder" class="fas fa-chevron-down"></i>
                    <i v-else class="fas fa-chevron-up"></i>
                    價格
                  </button>
                </div>
                <div class="courses-filter__item">
                  <button
                    @click="
                      ratingOrder = !ratingOrder;
                      orderCourse('avgRating', ratingOrder);
                    "
                    class="courses-filter__btn btn"
                  >
                    <i v-if="ratingOrder" class="fas fa-chevron-down"></i>
                    <i v-else class="fas fa-chevron-up"></i>
                    評等
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 全部課程List -->
        <section>
          <course-list
            :courses-list="infiniteData"
            v-if="infiniteData.length > 0"
          ></course-list>
          <div
            class="ifinite-scroll"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="15"
            infinite-scroll-immediate-check="false"
          >
            <div v-if="busy && infiniteData.length !== coursesOrdered.length">
              <i class="fas fa-spinner fa-spin"></i>
            </div>

            <a
              class="gotop"
              href="#courseMain"
              v-if="infiniteData.length == coursesOrdered.length"
            >
              <i class="fas fa-chevron-up"></i> 返回頂部
            </a>
          </div>
        </section>
      </div>
    </main>
    <add-to-cart-modal></add-to-cart-modal>
  </div>
</template>

<script>
import $ from 'jquery';
import CourseCard from '@/components/CourseCard';
import CourseList from '@/components/CourseList';

export default {
  name: 'Courses',
  props: ['navbar'],
  components: {
    CourseCard,
    CourseList,
  },
  data() {
    return {
      property: 'ratingOrder',
      order: false,
      priceOrder: true,
      ratingOrder: true,
      searchShow: false,
      searchWord: null,
      keyWord: null,
      showNavbar: true,
      lastScrollPosition: 0,
      count: 0,
      infiniteData: [],
      busy: false,
      cates: [],
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    // 全部課程
    courses() {
      return this.$store.state.courses.courses.filter(
        (course) => course.remainQuantity > 0 && course.discount,
      );
    },
    // 排序課程
    coursesOrdered() {
      const course = [...this.$store.state.courses.courses].sort(
        (a, b) => b[this.property] - a[this.property],
      );
      return this.order ? course : course.reverse();
    },
    // 選取分類
    cat() {
      return this.$store.state.courses.cat;
    },
  },

  methods: {
    reset() {
      this.searchShow = false;
      this.searchWord = null;
      this.count = 0;
      this.infiniteData = [];
    },
    selectCat(cat) {
      // 避免double click
      if (this.cat !== cat) {
        this.reset();
        this.$store.dispatch('courses/getCourses', cat);
      }
    },
    scrollSubNav() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    loadMore() {
      const arrayShow = [...this.coursesOrdered];
      if (this.infiniteData.length <= arrayShow.length) {
        this.busy = true;
        setTimeout(() => {
          for (let i = 0, j = 5; i < j; i++) {
            if (this.count === arrayShow.length) {
              break;
            }
            this.infiniteData.push(arrayShow[this.count++]);
          }
          this.busy = false;
        }, 500);
      }
    },
    searchCourse() {
      // 如果輸入框中有字
      if (this.searchWord) {
        this.keyWord = this.searchWord;
        this.reset();
        this.searchShow = true;
        // 符合課程
        this.$store
          .dispatch('courses/getCourses', '所有課程')
          .then((courses) => {
            const filteredCourses = courses.filter((course) => course.title.match(this.keyWord))
              || [];
            this.$store.commit('courses/setCourses', filteredCourses);
            this.loadMore();
          });
      } else {
        this.$toasted.error('請輸入搜尋字詞', { duration: 3000 });
      }
    },
    orderCourse(property, order) {
      this.property = property;
      this.order = order;
      this.count = 0;
      this.infiniteData = [];
      this.loadMore();
    },
  },

  mounted() {
    $(window).scroll(this.scrollSubNav);
  },
  created() {
    this.reset();
    if (this.$store.state.courses.courses.length === 0) {
      this.$store.dispatch('courses/getCourses', '所有課程');
    }
  },
};
</script>
