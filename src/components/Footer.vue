<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/">
        <div class="logo-box">frontFitness</div>
      </router-link>

      <div class="footer-box">
        <div class="footer__about">
          <p class="footer__title">關於我們</p>
          <p>
            fronFitness全球連鎖健身中心，20年以上專業經驗、名人口碑首選推薦、全方位運動健身課程、業界最強教練師資、豪華先進設備，為您量身規劃專屬運動菜單。
          </p>
        </div>
        <div class="footer__contact">
          <p class="footer__title">聯絡我們</p>
          <ul class="footer__list">
            <li class="footer__item">
              <i class="fas fa-map-marker-alt"></i> 110 台北市信義路五段7號
            </li>
            <li class="footer__item">
              <i class="fas fa-mobile-alt"></i> ＋886 2 8101 8800
            </li>
            <li class="footer__item">
              <i class="far fa-envelope"></i> frontfitness@service.com.tw
            </li>
          </ul>
          <div class="footer__social-media">
            <a href="#" class="footer__media-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="footer__media-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="footer__media-link">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p class="footer__copyright text-center">
        Copyright &copy; 2020 Front-Fitness. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
