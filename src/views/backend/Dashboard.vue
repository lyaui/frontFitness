<template>
  <div>
    <div class="admin-content">
      <side-bar></side-bar>
      <main class="admin-main">
        <transition name="slide-fade">
          <router-view>
            <courses-admin></courses-admin>
          </router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import CoursesAdmin from '@/views/backend/CoursesAdmin';

export default {
  name: 'Dashboard',
  components: {
    SideBar,
    CoursesAdmin,
  },
};
</script>
