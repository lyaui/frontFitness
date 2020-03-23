<template>
  <div class="course-rating">
    <!-- 評分顯示 -->
    <section class="course-rating">
      <div class="heading-tertiary--dark mb-sm">課程評分</div>
      <div class="course-rating__box">
        <div class="course-rating__avg-rating">
          <div class="course-rating__rating-figure">{{avgRating}}</div>
          <div class="course-rating__user">
            <i class="fas fa-user"></i>
            <div>{{comments.length}}位學員評分</div>
          </div>
        </div>
        <!-- bar -->
        <div class="course-rating__rating-bars">
          <div class="course-rating__rating-bar" v-for="(percent,i) in ratingPercents" :key="i">
            <div class="course-rating__bar">
              <span class="course-rating__bar-progress" :style="{width:percent+'%'}"></span>
            </div>

            <div class="d-flex" style="width:220px">
              <star-rating
                :star-size="16"
                :read-only="true"
                :rounded-corners="true"
                :rating="(5-i)"
                :show-rating="false"
              ></star-rating>
              <div class="course-rating__bar-num">{{percent}} %</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 輸入評分區 -->
    <section>
      <div class="heading-tertiary--dark mb-sm">評論</div>
      <div class="user-comment" v-if="inputShow">
        <div class="user-comment__img-box">
          <img class="user-comment__img" :src="currentUser.profile.userImg" v-if="currentUser">
          <img
            class="user-comment__img"
            src="https://png2.pngtree.com/svg/20161215/9bc7bae28b.png"
            v-else
          >
        </div>
        <div class="user-comment__content">
          <div class="user-comment__info">
            <div v-if="currentUser">
              <i class="fas fa-user"></i>
              {{currentUser.profile.name}}
            </div>
            <star-rating
              class="user-comment__rating"
              v-model="comment.rating"
              :star-size="20"
              :rounded-corners="true"
              :show-rating="false"
              :read-only="!currentUser"
            ></star-rating>
          </div>
          <!-- 輸入欄 -->
          <form>
            <div class="form__row">
              <div class="form__group" style="margin-right:0px">
                <textarea
                  class="user-comment__textarea"
                  v-model="comment.comment"
                  :readonly="!currentUser"
                  placeholder="請開始你的表演"
                  @click.prevent="alertLogReg"
                ></textarea>
              </div>
            </div>

            <div class="form__group">
              <!-- 按鈕組 -->
              <div class="btn-footer" v-if="currentUser">
                <button
                  class="btn btn-primary"
                  style="width:100px"
                  v-if="inputStatus==='新留言'"
                  @click.prevent="addComment"
                >送出</button>
                <button
                  class="btn btn-primary"
                  style="width:100px"
                  v-if="inputStatus==='編輯留言'"
                  @click.prevent="updateComment"
                >確認</button>
                <button
                  class="btn btn-primary--cancel"
                  style="width:100px"
                  v-if="inputStatus==='編輯留言'"
                  @click.prevent="inputStatus = '新留言';inputShow = !inputShow;comment.comment=tempComment"
                >取消</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 評論 -->
    <section>
      <div class="d-flex-column">
        <div
          class="user-comment"
          v-for="comment in comments"
          :class="{'user-first':!!currentUser&&comment.user.userId=== currentUser.profile.userId,
          'd-none':inputStatus!=='新留言'&&comment.user.userId===currentUser.profile.userId
          }"
          :key="comment.user.userId"
        >
          <div class="d-flex">
            <div class="user-comment__img-box">
              <img class="user-comment__img" :src="comment.user.userImg">
            </div>
            <!-- 手機排版 -->
            <div class="user-comment__info d-block-phone">
              <div class="d-flex">
                <div style="margin-right:10px">
                  <i class="fas fa-user"></i>
                  {{comment.user.name}}
                </div>
                <star-rating
                  :rating="comment.rating"
                  :star-size="18"
                  :read-only="true"
                  :rounded-corners="true"
                  :show-rating="false"
                ></star-rating>
              </div>
              <div>
                <i class="far fa-clock"></i>
                {{time(comment.timestamp)}}
              </div>
            </div>
          </div>
          <div
            class="user-comment__content"
            :class="{'user-current':!!currentUser&&comment.user.userId=== currentUser.profile.userId}"
          >
            <!-- 桌機排版 -->
            <div class="user-comment__info d-none-phone">
              <div>
                <i class="fas fa-user"></i>
                {{comment.user.name}}
                <i class="far fa-clock"></i>
                {{time(comment.timestamp)}}
              </div>

              <star-rating
                :rating="comment.rating"
                :star-size="20"
                :read-only="true"
                :rounded-corners="true"
                :show-rating="false"
              ></star-rating>
            </div>
            <p>{{comment.comment}}</p>
            <div class="btn-footer">
              <button
                class="btn btn-primary"
                style="width:100px"
                v-if="!!currentUser&&comment.user.userId=== currentUser.profile.userId"
                @click="inputShow =!inputShow;inputStatus='編輯留言';tempComment=comment.comment"
              >修改</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import moment from "moment";

export default {
  name: "Comments",
  components: {
    StarRating
  },
  props: ["comments", "currentUser", "courseId"],
  data() {
    return {
      comment: {
        comment: null,
        rating: null
      },
      inputStatus: "新留言",
      inputShow: true,
      tempComment: null
    };
  },
  computed: {
    //計算平均分數
    avgRating() {
      if (this.comments.length === 0) {
        return 0;
      } else {
        let avg =
          this.comments
            .map(comment => comment.rating)
            .reduce((acc, cur) => acc + cur) / this.comments.length;
        return parseFloat(avg.toFixed(1));
      }
    },
    //計算每個bar
    ratingPercents() {
      let percents = [0, 0, 0, 0, 0];
      if (this.comments.length === 0) {
        return percents;
      }
      let ratings = this.comments.map(item => item.rating); //[5,3,3]
      //計算每個rating出現比率
      percents = percents.map(
        (item, index) =>
          (item = ratings.filter(rating => rating === index + 1).length) /
          ratings.length
      );
      //換算百分比
      return percents.map(num => parseFloat(num.toFixed(2)) * 100).reverse();
    }
  },
  watch: {
    //若平均評價改變則更新資料庫資料
    avgRating() {
      let course = { ...this.$store.state.courses.course };
      course.avgRating = this.avgRating;
      this.$store.dispatch("courses/updateCourse", {
        id: this.courseId,
        course: course
      });
    }
  },
  methods: {
    time(num) {
      return moment(num).format("YYYY/MM/DD HH:mm");
    },
    //註冊登入提示
    alertLogReg() {
      if (!this.currentUser) {
        this.$toasted.info("請先 註冊/登入 以進行評價", {
          duration: 2000
        });
      }
    },

    // 新增評價
    addComment() {
      if (this.comment.rating && this.comment.comment) {
        this.comment.user = this.currentUser.profile.userId;
        this.comment.toId = this.courseId;
        this.$store
          .dispatch("comments/createComment", {
            comment: this.comment,
            user: this.currentUser
          })
          .then(() => {
            this.$toasted.success("已收到您的評價", {
              duration: 2000
            });
            this.inputStatus = "新留言";
            this.inputShow = !this.inputShow;
          });
      } else {
        this.$toasted.error("請 選取分數 與 留下評論 再送出", {
          duration: 2000
        });
      }
    },

    //更新評價
    updateComment() {
      // this.updateAvgRating();
      if (this.comment.rating && this.comment.comment) {
        this.$store
          .dispatch("comments/updateComment", this.comment)
          .then(() => {
            this.$toasted.success("成功修改評價", {
              duration: 2000
            });
            this.inputStatus = "新留言";
            this.inputShow = !this.inputShow;
          });
      } else {
        this.$toasted.error("請 選取分數 與 留下評論 再送出", {
          duration: 2000
        });
      }
    },
    init() {
      if (this.currentUser) {
        //確認使用者是否留過言
        let checkArr = this.comments.find(
          comment => comment.user.userId === this.currentUser.profile.userId
        );
        //若留過言
        if (checkArr) {
          //不主動顯示輸入框，並讀入可編輯內容
          this.inputShow = false;
          this.comment = { ...checkArr };
        }
      }
    }
  },
  created() {
    // 確認使用者登入狀態
    window.setTimeout(this.init, 3000);
  }
};
</script>