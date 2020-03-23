<template>
  <div>
    <loading :active.sync="isLoading" :opacity=".8" :background-color="'#000'" :color="'#ff5722'"></loading>
    <header class="header">
      <header-carousel></header-carousel>
      <div class="header-box">
        <h1 class="heading-primary">
          <span class="heading-primary__main">Front-Fitness</span>
          <span class="heading-primary__sub">運動 一切生命的源泉</span>
        </h1>
        <button @click.prevent="selectCat('所有課程')" class="btn explore-btn mt-md">
          <span class="spacing-adjust">立即探索</span>
        </button>
      </div>
    </header>
    <main>
      <!-- 精選課程區 -->
      <section class="courses" id="courses">
        <div class="container">
          <div class="heading-tertiary--dark">新課搶先看</div>

          <course-card v-if="courses.length>0" :course-card="coursesNew"></course-card>
          <div class="heading-tertiary--dark">精選優惠課程</div>
          <course-card v-if="courses.length>0" :course-card="courses"></course-card>
        </div>
      </section>

      <!-- 精選課程區 -->
      <section class="figures" data-aos="fade-up">
        <div class="container figure">
          <div class="figure__text" v-for="figure in figures" :key="figure.title">
            <div class="figure__number">
              <count-to :startVal="0" :endVal="figure.end" :duration="3000"></count-to>
            </div>
            <span>{{figure.title}}</span>
          </div>
        </div>
      </section>

      <!-- 課程特點區 -->
      <section class="features" data-aos="fade-up">
        <div class="features__content container">
          <div class="features-card" v-for="feature in features" :key="feature.title">
            <div class="features-card__head">
              <i class="text-highlight" :class="`${feature.icon}`"></i>
              <h3 class="heading-tertiary--grey">{{feature.title}}</h3>
            </div>
            <div class="features-card__text">{{feature.text}}</div>
          </div>
        </div>
        <div class="features__img"></div>
      </section>

      <!-- 課程折扣區 -->
      <section class="coupon text-center" data-aos="fade-up">
        <div class="coupon__img"></div>
        <div class="coupon__content container">
          <div class="coupon__title text-highlight">the 20th anniv.</div>
          <div class="heading-secondary">“每個成功都有一個開始”</div>
          <p class="coupon__text">
            新的興趣、新的視野、新的自我──進步，永無止盡。
            <br>
          </p>
          <p class="coupon__text">
            歡慶20週年，全課程8折起，精選課程憑折扣碼
            <b>LOVEFITTING</b>再折$100
          </p>
          <button class="coupon__btn btn">
            <div @click.prevent="selectCat('所有課程')" class="btn">
              <span class="spacing-adjust">立即探索</span>
            </div>
          </button>
        </div>
      </section>

      <!-- 會員推薦區 -->
      <section class="userfeedback" data-aos="fade-up">
        <div class="container">
          <feedback></feedback>
        </div>
      </section>

      <!-- FAQ區 -->
      <section class="FAQ" data-aos="fade-up">
        <div class="FAQ__content">
          <div class="heading-secondary">FAQ</div>
          <ul class="FAQ__list">
            <li class="FAQ__item" v-for="(item,i) in FAQs" @click="toggleOpen(i)" :key="i">
              <div class="FAQ__accordian-title">
                <span>
                  <i :class="{'FAQ__accordian-title--rotate':item.open}" class="yo fas fa-plus"></i>
                </span>
                {{item.question}}
              </div>
              <div class="FAQ__accordian-content" v-if="item.open">{{item.answer}}</div>
            </li>
          </ul>
        </div>
        <div class="FAQ__img"></div>
      </section>

      <!-- 聯絡表單 -->
      <section class="contact" data-aos="fade-up">
        <iframe
          class="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.003103508137!2d121.56228351449951!3d25.033968744447897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZn-WPsOWMlzEwMeWkp-aokw!5e0!3m2!1szh-TW!2stw!4v1560106419477!5m2!1szh-TW!2stw"
          height="430"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
        <div class="contact-form">
          <div class="contact-form__title mb-sm">預約諮詢</div>
          <p class="mb-sm">留下您的聯絡資訊，我們將會請專人與您聯絡。</p>

          <form>
            <div class="form__row mb-sm">
              <div class="form__group">
                <input class="form__input focus-light" type="text" placeholder="姓名 *" required>
              </div>
              <div class="form__group">
                <input class="form__input focus-light" type="tel" placeholder="聯絡電話 *" required>
              </div>
            </div>
            <div class="form__row mb-sm">
              <div class="form__group">
                <input class="form__input focus-light" type="email" placeholder="電子信箱 *" required>
              </div>
              <div class="form__group d-flex">
                <div>時間 *</div>
                <div>
                  <input
                    class="ml-sm form__radio-input"
                    type="radio"
                    name="time"
                    id="morning"
                    checked
                  >
                  <label for="morning" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    上午
                  </label>
                </div>
                <div class>
                  <input class="ml-sm form__radio-input" type="radio" name="time" id="afternoon">
                  <label for="afternoon" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    下午
                  </label>
                </div>
              </div>
            </div>
            <div class="form__row">
              <div class="form__group">
                <textarea class="form__input focus-light" placeholder="備註訊息"></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>

      <!-- 照片區 -->
      <section class="gallery" data-aos="fade-up">
        <gallery></gallery>
      </section>
    </main>
    <add-to-cart-modal></add-to-cart-modal>
  </div>
</template>

<script>
import $ from "jquery";
import HeaderCarousel from "@/components/HeaderCarousel";
import CourseCard from "@/components/CourseCard";
import Gallery from "@/components/Gallery";
import Feedback from "@/components/Feedback";
import countTo from "vue-count-to";

export default {
  name: "Home",
  components: {
    HeaderCarousel,
    CourseCard,
    countTo,
    Feedback,
    Gallery
  },
  data() {
    return {
      time: "morning",
      figures: [
        { title: "年專業經驗", end: 20 },
        { title: "會員人數", end: 5000 },
        { title: "執照教練", end: 100 },
        { title: "滿意度", end: 98 }
      ],
      features: [
        {
          title: "豐富課程種類",
          text:
            "沒有不愛動的人，只有不合適你的運動！超過數十種豐富課程、彈性上課時段，讓你想動就動不只想瘦更享受。",
          icon: "fas fa-skiing"
        },
        {
          title: "高級完善設備",
          text:
            "在最棒的環境做最喜歡的事！寬敞舒適運動空間、潔淨衛浴設備、器材每年定期淘汰保養，給你最完美的運動體驗。",
          icon: "fas fa-dumbbell"
        },
        {
          title: "全方位專屬規劃",
          text:
            "專業運動營養顧問一對一諮詢，嚴格管控身體健康數據，讓每滴汗水發揮最大價值，進步改變看得到！",
          icon: "fas fa-pen-nib"
        },
        {
          title: "堅強師資陣容",
          text:
            "百位執照教練，豐富經驗生動上課方式，帶你體會動起來的樂趣，這不是在運動，而是在過生活！",
          icon: "fas fa-users"
        }
      ],
      FAQs: [
        {
          open: true,
          question: "甚麼人才適合參加健身訓練？ 會否有人是不可參加？",
          answer:
            "課程內容會因應學生目標和進度而調整，多數人都可進行健身訓練。除非醫生建議您不可進行此類運動，或您未滿18歲需要家長同意。"
        },
        {
          open: false,
          question: "除了訓練費用外，是否有其他雜費要付？",
          answer:
            "本公司的客戶只須要付私人訓練的課堂費用，無額外的會藉費、入場費、儲物櫃費用等等。"
        },
        {
          open: false,
          question: "參加課程會否有飲食按排或建議？",
          answer:
            "教練會給予個人化的飲食或補充品建議，並使您慢慢適應飲食的改變、因應您的進度作出飲食建議，不會課程剛開始就完全地改變您的飲食餐單。"
        },
        {
          open: false,
          question: "教練擁有專業資格嗎？如何核實？",
          answer:
            "我們的教練經嚴格考核、定期進修，以確保您享有優質服務。我們提供高透明度資訊，歡迎您隨時上網查閱有關教練專業資格及資歷。"
        },
        {
          open: false,
          question: "客戶個人資料用途？",
          answer:
            "我們收集的所有客戶資料，包括姓名、電話、電郵、以至訓練情況，都只供本公司對客戶上課使用，絕不會用作傳銷或給予第三方。"
        }
      ]
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    // 第一排課程取奇數
    coursesNew() {
      return this.$store.state.courses.courses.filter(
        course => course.title.includes("NEW") && course.remainQuantity > 0
      );
    },
    //第二排課程取偶數
    courses() {
      return this.$store.state.courses.courses.filter(
        course => course.remainQuantity > 0 && course.discount
      );
    }
  },
  methods: {
    selectCat(cat) {
      this.$store
        .dispatch("courses/getCourses", cat)
        .then(() => this.$router.push("/courses"));
    },
    toggleOpen(i) {
      this.FAQs = this.FAQs.map((faq, j) => {
        if (j === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    }
  },

  created() {
    this.$store.dispatch("courses/getCourses", "所有課程");
  },

  mounted() {
    $(".navigation").removeClass("navigation-dark");
  }
};
</script>
