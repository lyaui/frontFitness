<template>
  <div>
    <loading
      :active.sync="isLoading"
      :opacity="0.8"
      :background-color="'#000'"
      :color="'#ff5722'"
    ></loading>
    <main class="course-detail-main">
      <!-- breadcrumb -->
      <div class="container">
        <div class="breadcrumb" v-if="course">
          <div class="breadcrumb__item" @click.prevent="selectCat('所有課程')">
            所有課程
          </div>
          <span>/</span>
          <div
            class="breadcrumb__item"
            @click.prevent="selectCat(course.categorySelected)"
          >
            {{ course.categorySelected }}
          </div>
          <span>/</span>
          <div class="breadcrumb__item breadcrumb__item--active">
            {{ course.title }}
          </div>
        </div>
      </div>

      <div class="course-intro" v-if="course">
        <div class="container">
          <div class="course-intro__img-box">
            <img
              class="course-intro__img"
              :src="course.imageUrl"
              :alt="course.title"
            />
            <social-sharing
              class="course-intro__img-social"
              url="https://front-gym.web.app/"
              title="fronFitness | 運動 ‧ 一切生命的源泉"
              description="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
              quote="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
              hashtags="fronFitness,台北都會健身中心,全方位專業課程,運動改變生活"
              inline-template
            >
              <div>
                <network
                  network="facebook"
                  class="course-intro__img-social-link"
                >
                  <i class="fab fa-facebook-square"></i>
                </network>
                <network network="line" class="course-intro__img-social-link">
                  <i class="fab fa-line"></i>
                </network>
                <network
                  network="twitter"
                  class="course-intro__img-social-link"
                >
                  <i class="fab fa-twitter"></i>
                </network>
              </div>
            </social-sharing>
          </div>
          <div class="course-intro__detail">
            <social-sharing
              url="https://front-gym.web.app/"
              title="fronFitness | 運動 ‧ 一切生命的源泉"
              description="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
              quote="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
              hashtags="fronFitness,台北都會健身中心,全方位專業課程,運動改變生活"
              inline-template
            >
              <div>
                <network network="facebook">
                  <i class="fab fa-facebook-square"></i> Facebook
                </network>
                <network network="line">
                  <i class="fab fa-line"></i> Line
                </network>
                <network network="twitter">
                  <i class="fab fa-twitter"></i> Twitter
                </network>
              </div>
            </social-sharing>

            <h1>{{ course.title }}</h1>
            <div class="d-flex">
              <star-rating
                :rating="course.avgRating"
                :increment="0.1"
                :star-size="20"
                :read-only="true"
                active-color="#ffd056"
              ></star-rating>
            </div>

            <div class>教練：{{ course.coach }}</div>
            <div class>時間：{{ course.week }} {{ course.time }}</div>
            <div class="d-flex">
              <div class>滿班人數：{{ course.quantity }} 人｜</div>
              <div class>剩餘人數：{{ course.remainQuantity }} 人</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="course-detail" v-if="course">
          <section class="course-intro__content">
            <div class="course-intro__content-card mb-sm">
              <div class="heading-tertiary--dark mb-sm">課程簡介</div>
              <div class="course-intro__content-text">{{ course.intro }}</div>
              <div class="course-tags">
                <i class="fas fa-tag"></i>

                <ul class="course-tags__list">
                  <li
                    class="course-tags__item"
                    v-for="tag in course.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="course-intro__content-article"
              v-html="course.desc"
            ></div>

            <section class="course-recommends">
              <course-recommend
                :course-id="course.id"
                :category="course.categorySelected"
              ></course-recommend>
            </section>
            <section class="course-comments">
              <comments
                :comments="comments"
                :current-user="user"
                :course-id="course.id"
              ></comments>
            </section>
            <section class="precautions">
              <div class="heading-tertiary--grey mt-sm ml-sm">注意事項</div>
              <ul class="precautions__list">
                <li>請先註冊會員資料。</li>
                <li>
                  付款期限：完成報名程序後，請於10分鐘內刷卡繳費，完成刷卡繳費方為報名成功，操作逾時請重新登入報名。
                </li>
                <li>
                  為環保盡一份心力,請儘量申請電子發票載具,紙本發票亦可至中心服務台列印領取。
                </li>
                <li>
                  退費請持當期發票，至服務台辦理，退費規定詳見官網或簡章。
                </li>
                <li>
                  發票開立統編者，退費請持當期發票、原刷卡單、原信用卡及發票章，並親至中心服務台填寫折讓單始可辦理退費。
                </li>
                <li>
                  尚未達開班人數之班級，若確認停開，由中心另行通知已報名學員，如有疑問，請來電洽詢中心服務台。
                </li>
                <li>
                  各類課程如因人數不足無法開班,得辦理轉班或全額退費,請至本中心服務台辦理。
                </li>
              </ul>
            </section>
          </section>

          <section class="course-coach">
            <div class="course-price">
              <div class="course-price__head d-flex">
                <div v-if="course.discount" class="course-intro__tag">
                  精選課程
                </div>
                <div class="course-price__price">
                  {{ course.price | currency }}
                </div>
              </div>
              <add-to-cart :course="course" class="mb-sm"></add-to-cart>

              <social-sharing
                url="https://front-gym.web.app/"
                title="fronFitness | 運動 ‧ 一切生命的源泉"
                description="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
                quote="fronFitness名人口碑推薦健身中心！20年專業經驗、全方位運動課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單，打造健康完美身材！"
                hashtags="fronFitness,台北都會健身中心,全方位專業課程,運動改變生活"
                inline-template
              >
                <div class="course-price__share">
                  <network network="facebook">
                    <i class="fab fa-facebook-square"></i>
                  </network>
                  <network network="line">
                    <i class="fab fa-line"></i>
                  </network>
                  <network network="twitter">
                    <i class="fab fa-twitter"></i>
                  </network>
                </div>
              </social-sharing>
            </div>

            <coach-card :coach="coach"></coach-card>
          </section>
        </div>
      </div>
    </main>
    <AddToCartModal></AddToCartModal>
  </div>
</template>

<script>
import CoachCard from '@/components/CoachCard.vue';
import Comments from '@/components/Comments.vue';
import CourseRecommend from '@/components/CourseRecommend.vue';
import StarRating from 'vue-star-rating';
import AddToCart from '@/components/AddToCart.vue';

export default {
  name: 'CourseDetails',
  components: {
    CoachCard,
    Comments,
    CourseRecommend,
    StarRating,
    AddToCart,
  },
  computed: {
    isLoading() {
      const vm = this;
      return vm.$store.state.isLoading;
    },
    course() {
      const vm = this;
      return vm.$store.state.courses.course;
    },
    comments() {
      const vm = this;
      return vm.$store.state.comments.comments;
    },
    coach() {
      const vm = this;
      return vm.$store.state.courses.coach;
    },
    user() {
      const vm = this;
      return vm.$store.state.auth.user;
    },
  },
  watch: {
    $route() {
      const vm = this;
      vm.$router.go(0);
    },
  },
  methods: {
    selectCat(cat) {
      const vm = this;
      vm.$store
        .dispatch('courses/getCourses', cat)
        .then(() => vm.$router.push('/courses'));
    },
  },
  created() {
    const vm = this;
    const id = vm.$route.params.course_id;
    vm.$store.dispatch('courses/getCourseById', id);
    vm.$store.dispatch('comments/getComments', id);
  },
};
</script>
