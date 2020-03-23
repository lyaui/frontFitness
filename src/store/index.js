import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import 'firebase/storage';
import st from 'firebase/app';

// modules
import createPersistedState from 'vuex-persistedstate';
import auth from './auth';
import cart from './cart';
import comments from './comments';
import courses from './courses';
import checkout from './checkout';

// 保持state狀態

Vue.use(Vuex);

export default new Vuex.Store({
  // 保持項目
  plugins: [
    createPersistedState({
      paths: [
        'courses.cat',
        'courses.status',
        'courses.course',
        'courses.courses',
        'cart.cart',
        'checkout.payment',
      ],
    }),
  ],

  modules: {
    auth,
    cart,
    comments,
    courses,
    checkout,
  },

  state() {
    return {
      isLoading: false,
      downloadURL: null,
    };
  },
  actions: {
    // 上傳檔案
    updateFile({ commit }, { file, place }) {
      const storageRef = st.storage().ref(place + file.name);
      const uploadTask = storageRef.put(file);
      uploadTask.on(
        'state_changed',
        // eslint-disable-next-line no-unused-vars
        (snapshot) => {},
        // eslint-disable-next-line no-unused-vars
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            commit('setDownloadUrl', downloadURL);
          });
        },
      );
    },
  },

  mutations: {
    ...vuexfireMutations,

    // loading
    loading(state, status) {
      state.isLoading = status;
    },
    setDownloadUrl(state, url) {
      state.downloadURL = url;
    },
  },
});
