<template>
  <div class="announce-bar">
    <div class="announce-bar__text">
      全館9折｜精選課程輸入折扣碼
      <b>
        &#129304;
        <span @click="copyCode" class="announce-bar__code">{{ code }}</span
        >&#129304; </b
      >再折
      <b>$100</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcebar',
  data() {
    return {
      code: 'LOVEFITTING',
    };
  },
  methods: {
    copyCode() {
      const vm = this;
      const textarea = document.createElement('textarea');
      textarea.value = vm.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    },
  },
};
</script>
