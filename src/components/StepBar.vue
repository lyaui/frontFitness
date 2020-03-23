<template>
  <div class="step-bar">
    <ul class="step-bar__list">
      <li class="step-bar__item step-bar__item--first">
        <div
          class="step-bar__circle"
          :class="{'step-bar__circle--active':status==='cart','step-bar__circle--done':status==='checkout'|| status==='success'}"
        >
          <span>1</span>
        </div>
        <div class="step-bar__line"></div>
        <div class="step-bar__title">
          <span class="spacing-adjust">購物車</span>
        </div>
      </li>
      <li class="step-bar__item step-bar__item--secondary">
        <div
          class="step-bar__circle"
          :class="{'step-bar__circle--active':status==='checkout','step-bar__circle--done':status==='success'}"
        >
          <span>2</span>
        </div>
        <div class="step-bar__line"></div>
        <div class="step-bar__title">
          <span class="spacing-adjust">結帳</span>
        </div>
      </li>
      <li class="step-bar__item step-bar__item--last">
        <div class="step-bar__circle" :class="{'step-bar__circle--done':status==='success'}">
          <span>3</span>
        </div>
        <div class="step-bar__title">
          <span class="spacing-adjust">購買完成</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StepBar",
  props: ["status"]
};
</script>