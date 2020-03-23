<template>
  <nav class="sidebar" v-if="user">
    <div class="sidebar__header">
      <router-link to="/" class="sidebar__logo">
        <div class="logo-box">frontFitness</div>
      </router-link>
      <div class="sidebar__user">
        <img
          class="sidebar__user-img"
          :src="user.profile.userImg"
          :alt="user.profile.name"
        />
        <div class="sidebar__user-info" @click.prevent="logOut()">
          <span class="sidebar__user-status">
            <i class="fas fa-sign-out-alt"></i> 登出
          </span>
        </div>
      </div>
    </div>
    <ul class="side-nav">
      <li
        v-for="cat in navList"
        :key="cat.cat"
        class="side-nav__item"
        @click="
          activePage = cat.cat;
          turnNewEditPage(cat.cat, '新增課程');
        "
        :class="{ 'side-nav__item--active': activePage === cat.cat }"
      >
        <router-link
          :to="{ path: `/admin/${cat.path}` }"
          class="side-nav__link"
        >
          <i class="side-nav__icon d-none-phone" :class="`${cat.icon}`"></i>
          <span>{{ cat.cat }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      activePage: '個人資訊',
      navList: [
        { cat: '個人資訊', icon: 'fas fa-user', path: 'profile' },
        { cat: '新增課程', icon: 'fas fa-edit', path: 'course-edit' },
        { cat: '課程列表', icon: 'fas fa-list', path: 'courses-admin' },
        { cat: '訂單列表', icon: 'fas fa-clipboard-list', path: 'orders' },
      ],
    };
  },
  computed: {
    user() {
      const vm = this;
      return { ...vm.$store.state.auth.user };
    },
  },
  methods: {
    logOut() {
      const vm = this;
      vm.$store.dispatch('auth/signOut').then(() => {
        vm.$toasted.success('成功登出!!', {
          duration: 2000,
        });
        vm.$router.push({ name: 'home' });
      });
    },
    turnNewEditPage(cat) {
      const vm = this;
      if (cat === '新增課程') {
        vm.$store.commit('courses/setStatus', cat);
        vm.$store.commit('courses/setCourse', {});
        vm.$router.push({ name: 'courseNewEdit' });
      }
    },
  },
};
</script>
