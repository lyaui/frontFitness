<template>
  <div class="coach-card">
    <div class="coach-card__header">
      <div class="coach-card__title heading-tertiary--dark text-center">關於 {{coach.name}} 教練</div>
      <div class="coach-card__info">
        <div class="coach-card__img-box">
          <img :src="coach.photo" :alt="coach.name" class="coach-card__img">
        </div>
        <div>
          <div class="coach-card__social">
            <a href>
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href>
              <i class="fab fa-line"></i>
            </a>
            <a href>
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div class="coach-card__status">
            <ul>
              <li>
                <span>4.3</span>評等
              </li>
              <li>
                <span>793</span>學生
              </li>
              <li>
                <span>12</span>課程
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="coach-card__body">
      <p class="coach-card__about">{{coach.about}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'CoachCard',
  props: ["coach"],
};
</script>