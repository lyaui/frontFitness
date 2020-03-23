import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  //確保每次頁面跳轉都到頂部
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },

  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/frontend/Home.vue'),
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('@/views/backend/Dashboard.vue'),
      meta: {
        requiresAuth: true
      },
      children: [{
          path: 'profile',
          name: 'Profile',
          component: () => import('@/views/backend/Profile.vue'),
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'courses-admin',
          name: 'coursesAdmin',
          component: () => import('@/views/backend/CoursesAdmin.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'course-edit',
          name: 'courseNewEdit',
          component: () => import('@/views/backend/CourseNewEdit.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('@/views/backend/Orders.vue'),
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
    {
      path: '/courses',
      name: 'courses-index',
      component: () => import('@/views/frontend/Courses.vue'),
    },

    {
      path: '/courses/:course_id',
      name: 'CourseDetails',
      component: () => import('@/views/frontend/CourseDetails.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/frontend/Cart.vue')
    },

    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('@/views/frontend/Checkout.vue'),
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: '/checkout/:paymentId',
      name: 'CheckoutInfo',
      component: () => import('@/views/frontend/CheckoutInfo.vue'),
      meta: {
        requiresAuth: true
      }
    },

  ]
})