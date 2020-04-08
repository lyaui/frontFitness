<template>
  <div>
    <h2 class="heading-secondary">{{ status }}</h2>
    <div class="admin-panel mb-md">
      <form>
        <div class="edit-form">
          <!-- 課程封面 -->
          <div class="cover-upload">
            <div>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label" for="coverUrl">輸入封面網址</label>
                  <input
                    class="form__input"
                    type="text"
                    placeholder="https://unsplash..."
                    :class="{
                      'form__input--warning': $v.course.imageUrl.$error,
                    }"
                    v-model="course.imageUrl"
                    id="coverUrl"
                  />
                  <template v-if="$v.course.imageUrl.$dirty">
                    <span v-if="!$v.course.imageUrl.required" class="text-warning">封面網址為必填欄位</span>
                    <span v-if="!$v.course.imageUrl.url" class="text-warning">請輸入正確格式網址</span>
                  </template>
                </div>
              </div>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label" for="coverFile">
                    或 選擇封面檔案
                    <i class="fas fa-spinner fa-spin" v-if="updateCover"></i>
                  </label>
                  <input @change="uploadImage" class="form__input" type="file" id="coverFile" />
                </div>
              </div>
            </div>
            <img v-if="!!course.imageUrl" class="form__img" :src="course.imageUrl" />
            <img v-else class="form__img" src="https://fakeimg.pl/250x150/?retina=1&text=請上傳封面&font=noto" />
          </div>
          <!-- 課程內容 -->
          <div class="content-edit">
            <!-- 課程名稱 -->
            <div class>
              <div class="form__group">
                <label class="form__label" for="courseTitle">課程名稱（標題上限25字元）</label>
                <input class="form__input" placeholder="請填入課程名稱" type="text" v-model.trim="course.title" id="courseTitle" :maxlength="titleMax" :class="{ 'form__input--warning': $v.course.title.$error }" />
                <div class="form__counter">
                  <span>{{ titleMax - course.title.length }}</span>
                </div>
                <template v-if="$v.course.title.$dirty">
                  <span v-if="!$v.course.title.required" class="text-warning">課程名稱為必填欄位</span>
                  <span v-if="!$v.course.title.maxLength" class="text-warning">超過上限25字元 請刪減標題長度</span>
                </template>
              </div>
            </div>

            <!-- 課程簡介 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="courseIntro">課程簡介（簡介上限80字元）</label>
                <input class="form__input" placeholder="請填入課程簡介" type="textarea" v-model.trim="course.intro" id="courseIntro" style="padding-right: 40px;" :maxlength="introMax" :class="{ 'form__input--warning': $v.course.intro.$error }" />
                <div class="form__counter">
                  <span>{{ introMax - course.intro.length }}</span>
                </div>
                <template v-if="$v.course.intro.$dirty">
                  <span v-if="!$v.course.intro.required" class="text-warning">課程簡介為必填欄位</span>
                  <span v-if="!$v.course.intro.maxLength" class="text-warning">超過上限80字元 請刪減簡介長度</span>
                </template>
              </div>
            </div>

            <!-- 課程標籤 -->
            <div class="form__row">
              <div class="form__group">
                <div class="form__tag-case">
                  <label class="form__label" for="courseTags">標籤</label>
                  <div class="form__tag" v-for="(tag, i) in course.tags" :key="i">
                    {{ tag }}
                    <i class="fas fa-times-circle" @click="deleteTag(i)"></i>
                  </div>
                </div>
                <input class="form__input" type="text" @keyup.enter="addTags()" v-model.trim="tag" id="courseTags" placeholder="請填入標籤並以enter隔開" />
              </div>
            </div>

            <!-- 課程類別、教練 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="courseCat">課程類別</label>
                <select
                  class="form__input"
                  v-model="course.categorySelected"
                  id="courseCat"
                  :class="{
                    'form__input--warning': $v.course.categorySelected.$error,
                  }"
                  required
                >
                  <option value disabled selected hidden>請選擇課程類別</option>
                  <option :value="item" v-for="(item, i) in category" :key="i">{{ item }}</option>
                </select>
                <template v-if="$v.course.categorySelected.$dirty">
                  <span v-if="!$v.course.categorySelected.required" class="text-warning">課程類別為必選欄位</span>
                </template>
              </div>
              <div class="form__group">
                <label class="form__label" for="courseCoach">課程教練</label>
                <select class="form__input" :class="{ 'form__input--warning': $v.course.coach.$error }" v-model="course.coach" id="courseCoach" required>
                  <option value disabled selected hidden>請選擇課程教練</option>
                  <option :value="item" v-for="(item, i) in coaches" :key="i">{{ item }}</option>
                </select>
                <template v-if="$v.course.coach.$dirty">
                  <span v-if="!$v.course.coach.required" class="text-warning">課程教練為必選欄位</span>
                </template>
              </div>
            </div>

            <!-- 課程星期、時間 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="courseWeek">課程星期</label>
                <select class="form__input" :class="{ 'form__input--warning': $v.course.week.$error }" v-model="course.week" id="courseWeek" required>
                  <option value disabled selected hidden>請選擇課程星期</option>
                  <option v-for="day in week" :key="day">{{ day }}</option>
                </select>
                <template v-if="$v.course.week.$dirty">
                  <span v-if="!$v.course.week.required" class="text-warning">課程星期為必選欄位</span>
                </template>
              </div>
              <div class="form__group">
                <label class="form__label" for="courseTime">課程時間</label>
                <select class="form__input" :class="{ 'form__input--warning': $v.course.time.$error }" v-model="course.time" id="courseTime" required>
                  <option value disabled selected hidden>請選擇課程時間</option>
                  <optgroup label="上午">
                    <option value="上午09:00~10:00" default selected>09:00~10:00</option>
                    <option value="上午10:00~11:00">10:00~11:00</option>
                    <option value="上午11:00~12:00">11:00~12:00</option>
                  </optgroup>
                  <optgroup label="中午">
                    <option value="中午14:00~15:00">14:00~15:00</option>
                    <option value="中午15:00~16:00">15:00~16:00</option>
                    <option value="中午16:00~17:00">16:00~17:00</option>
                  </optgroup>
                  <optgroup label="晚上">
                    <option value="晚上18:00~19:00">18:00~19:00</option>
                    <option value="晚上19:00~20:00">19:00~20:00</option>
                    <option value="晚上20:00~21:00">20:00~21:00</option>
                  </optgroup>
                </select>
                <template v-if="$v.course.time.$dirty">
                  <span v-if="!$v.course.time.required" class="text-warning">課程時間為必選欄位</span>
                </template>
              </div>
            </div>

            <!-- 滿班人數、可報名人數 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="courseQty">滿班人數</label>
                <input class="form__input" placeholder="請填入人數" type="number" v-model.number="course.quantity" id="courseQty" :class="{ 'form__input--warning': $v.course.quantity.$error }" />
                <template v-if="$v.course.quantity.$dirty">
                  <span v-if="!$v.course.quantity.required" class="text-warning">滿班人數為必填欄位</span>
                  <span v-if="!$v.course.quantity.minValue" class="text-warning">人數至少0人</span>
                </template>
              </div>
              <div class="form__group">
                <label class="form__label" for="courseRemain">可報名人數</label>
                <input
                  class="form__input"
                  placeholder="請填入人數"
                  type="number"
                  id="courseRemain"
                  v-model.number="course.remainQuantity"
                  :class="{
                    'form__input--warning': $v.course.remainQuantity.$error,
                  }"
                />
                <template v-if="$v.course.remainQuantity.$dirty">
                  <span v-if="!$v.course.remainQuantity.required" class="text-warning">可報名人數為必填欄位</span>
                  <span v-if="!$v.course.remainQuantity.minValue" class="text-warning">人數至少0人</span>
                </template>
              </div>
            </div>

            <!-- 課程原價、售價 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="courseOriPri">原價</label>
                <input
                  class="form__input"
                  placeholder="請填入價格"
                  type="number"
                  v-model.number="course.originPrice"
                  id="courseOriPri"
                  :class="{
                    'form__input--warning': $v.course.originPrice.$error,
                  }"
                />
                <template v-if="$v.course.originPrice.$dirty">
                  <span v-if="!$v.course.originPrice.required" class="text-warning">原價為必填欄位</span>
                  <span v-if="!$v.course.originPrice.minValue" class="text-warning">價格必大於0</span>
                </template>
              </div>
              <div class="form__group">
                <label class="form__label" for="courseSelPri">售價</label>
                <input class="form__input" placeholder="請填入價格" type="number" v-model.number="course.price" id="courseSelPri" :class="{ 'form__input--warning': $v.course.price.$error }" />
                <template v-if="$v.course.price.$dirty">
                  <span v-if="!$v.course.price.required" class="text-warning">售價為必填欄位</span>
                  <span v-if="!$v.course.price.minValue" class="text-warning">價格必大於0</span>
                </template>
              </div>
            </div>

            <!-- 精選課程 -->
            <div class="form__row">
              <div class="form__group d-flex" style="align-items: baseline;">
                <input class="form__checkbox" type="checkbox" v-model="course.discount" id="courseSel" />
                <label class="form__label" for="courseSel">精選課程（優惠）</label>
              </div>
            </div>
            <!-- 詳細課程內容 -->
            <div class="form__row">
              <div class="form__group">
                <label class="form__label">課程內容</label>
                <VueEditor id="editor" v-model="course.desc" :placeholder="'請填入詳細課程內容'"></VueEditor>
              </div>
            </div>
          </div>
        </div>
      </form>

      <!-- 送出按鈕 -->
      <div class="form__row">
        <div class="form__group btn-footer">
          <button style="width: 100px;" class="btn btn-primary" @click="addCourse" v-if="status === '新增課程'">
            新增
          </button>
          <button style="width: 100px;" class="btn btn-primary" @click="updateCourse(course.id)" v-if="status === '編輯課程'">
            修改
          </button>
          <button style="width: 100px;" class="btn btn-primary--cancel" @click="$router.go(-1)">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required, maxLength, minValue, url,
} from 'vuelidate/lib/validators';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'CourseNewEdit',
  components: { VueEditor },
  data() {
    return {
      prevRoute: false,
      updateCover: false,
      week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      category: ['有氧課程', '瑜珈課程', '游泳課程', '飛輪課程', '其他課程'],
      coaches: ['Amy珊珊', 'CICI', 'Danny', 'Papaya', 'Peco', 'Ryan', '小惠', '張三豐', '強森', '海德', '阿Ni', '阿壯'],
      courseNew: {
        title: '',
        intro: '',
        tags: [],
        categorySelected: '',
        coach: '',
        week: '',
        time: '',
        quantity: null,
        remainQuantity: null,
        originPrice: null,
        price: null,
        discount: false,
        imageUrl: '',
        avgRating: 0,
      },
      course: null,
      tag: null,
      modal: null,
      titleMax: 25,
      introMax: 80,
    };
  },
  validations: {
    course: {
      title: {
        required,
        maxLength: maxLength(24),
      },
      intro: {
        required,
        maxLength: maxLength(79),
      },
      categorySelected: {
        required,
      },
      coach: {
        required,
      },
      week: { required },
      time: {
        required,
      },
      originPrice: { required, minValue: minValue(0) },
      price: { required, minValue: minValue(0) },
      quantity: { required, minValue: minValue(0) },
      remainQuantity: { required, minValue: minValue(0) },
      imageUrl: { required, url },
    },
  },
  computed: {
    isLoading() {
      const vm = this;
      return vm.$store.state.isLoading;
    },
    status() {
      const vm = this;
      return vm.$store.state.courses.status;
    },
    getCourse() {
      const vm = this;
      return vm.$store.state.courses.course;
    },
    getDownloadURL() {
      const vm = this;
      return vm.$store.state.downloadURL;
    },
  },
  watch: {
    // 從編輯狀態切到新增狀態的話
    status() {
      const vm = this;
      if (vm.status === '新增課程') {
        vm.course = { ...vm.courseNew };
      }
    },
    getDownloadURL() {
      const vm = this;
      if (vm.getDownloadURL) {
        vm.course.imageUrl = vm.getDownloadURL;
        vm.updateCover = false;
      }
    },
  },
  methods: {
    addCourse() {
      const vm = this;
      vm.$v.$touch();
      if (vm.$v.$invalid) {
        vm.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
      } else {
        vm.$store
          .dispatch('courses/createCourse', { ...vm.course })
          .then(() => {
            vm.$toasted.success('成功新增課程', {
              duration: 2000,
            });
            vm.$router.push({ name: 'coursesAdmin' });
          })
          .catch((e) => console(e.message));
      }
    },
    updateCourse(id) {
      const vm = this;
      vm.$v.$touch();
      if (!vm.updateCover) {
        if (vm.$v.$invalid) {
          vm.$toasted.error('請正確填寫必要資訊', { duration: 3000 });
        } else {
          vm.$store.dispatch('courses/updateCourse', { id, course: vm.course }).then(() => {
            vm.$toasted.success('更新成功!!', {
              duration: 2000,
            });
            vm.$router.push({ name: 'coursesAdmin' });
          });
        }
      }
    },
    addTags() {
      const vm = this;
      if (vm.tag) {
        vm.course.tags.push(vm.tag);
      }
      vm.tag = '';
    },
    deleteTag(key) {
      const vm = this;
      vm.course.tags.splice(key, 1);
    },
    uploadImage(e) {
      const vm = this;
      const file = e.target.files[0];
      if (!file.type.includes('image')) {
        vm.$toasted.error('請上傳圖片檔案', { duration: 3000 });
      } else {
        vm.updateCover = true;
        vm.$store.dispatch('updateFile', { file, place: 'courses/' });
      }
    },
  },
  created() {
    const vm = this;
    vm.$store.commit('setDownloadUrl', null);
    if (vm.status === '編輯課程') {
      vm.course = { ...vm.getCourse };
    } else {
      vm.course = { ...vm.courseNew };
    }
  },
};
</script>

<style>
#editor {
  height: 250px;
}
</style>
