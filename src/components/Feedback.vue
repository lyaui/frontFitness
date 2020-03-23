<template>
  <carousel
    :nav="false"
    :center="false"
    :loop="true"
    :responsive="{
      300: { items: 1, margin: 0 },
      600: { items: 2, margin: 20 },
      1000: { items: 3, margin: 20 },
      1200: { items: 3, margin: 40 },
    }"
  >
    <figure class="feedback" v-for="(user, index) in users" :key="index">
      <p class="heading-tertiary--dark mb-sm text-center">{{ user.title }}</p>
      <blockquote class="feedback-comment__text">{{ user.comment }}</blockquote>
      <figcaption class="feedback__user mt-sm">
        <img class="feedback__img" :src="user.photo" :alt="user.name" />
        <div>
          <div class="feedback-info mb-sm">
            <p class="feedback__name">{{ user.name }}</p>
            <p class="fedback__date">{{ user.date }}</p>
          </div>
          <div class="fedback__stars">
            <i class="fas fa-star" v-for="star in user.stars" :key="star"></i>
          </div>
        </div>
      </figcaption>
    </figure>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'Feedback',
  data() {
    return {
      users: [
        {
          name: '管掌',
          photo: require('../assets/img/feedback-1.jpg'),
          title: 'No Pain No Gain!',
          comment:
            '人生短短幾個秋啊　不醉不罷休 東邊我的美人哪　西邊黃河流 來呀來個酒啊　不醉不罷休　愁情煩事別放心頭 人生短短幾個秋啊　不醉不罷休 東邊我的美人哪　西邊黃河流 來呀來個酒啊　不醉不罷休　愁情煩事別放心頭',
          stars: 5,
          date: 'Feb 23rd, 2017',
        },
        {
          name: '盧宴勛',
          photo: require('../assets/img/feedback-2.jpg'),
          title: '創造自己的歷史 繼續超越自己',
          comment:
            '我創造我自己 這不死之謎 我主宰我自己 這不死之謎 我締造一個奇蹟 這不死之謎 我是死神也是上帝 就算我燃燒我自己 這不死之謎 也可以照亮我自己 這不死之謎 我有無窮火力 這不死之謎 足夠讓我無止境活下去。',

          stars: 4,
          date: 'Aug 25th, 2018',
        },
        {
          name: '郭幸純',
          photo: require('../assets/img/feedback-3.jpg'),
          title: '不完美的旅程 督促下次的完美',
          comment:
            '每當我的目光鎖定你的目光 秀出我的花樣我有我的Young 跟別人一樣等於隨波蕩漾 只看一眼就遺忘 每當我的力量遙控你的力量 秀出我的花樣我有我的Young 跟別人一樣實在太不像樣 青春就要不一樣',
          stars: 5,
          date: 'Otc 10rd, 2018',
        },
        {
          name: '戴茲影',
          photo: require('../assets/img/feedback-4.jpg'),
          title: '我覺得這是件很美好的事情',
          comment:
            '勇氣下的夠不夠重　決心殺個片甲不留　是敵人還是朋友　風、雲、變、色 陰陽兩極就要融合　天地鬼神都在',
          stars: 3,
          date: 'Otc 15rd, 2019',
        },

        {
          name: '陳諺柏',
          photo: require('../assets/img/feedback-6.jpg'),
          title: '你不勇敢 沒有人會替你堅強！',
          comment:
            '為你我做了太多的傻事　第一件就是為你寫詩 為你寫詩　為你靜止　為你做不可能的事 為你我學會彈琴寫詞　為你失去理智 為你寫詩　為你靜止　為你做不可能的事 為你彈奏所有情歌的句子　我忘了說　最美的是你的名字',
          stars: 5,
          date: 'Jan 2nd, 2016',
        },
        {
          name: '莊志棩',
          photo: require('../assets/img/feedback-7.jpg'),
          title: '盡力而為只有別人能講 我不能',
          comment:
            '放我ㄧ個人生火 請妳夾子好好的緊握 一個人我至少乾淨俐落 雞肉就雞肉 愛豬肉就豬肉 我也放妳一個人生火 妳知道就算繼續 有熟還是沒有熟 又何苦還要繼續烤肉',
          stars: 4,
          date: 'Apr 20th, 2015',
        },
      ],
    };
  },
  components: { carousel },
};
</script>
