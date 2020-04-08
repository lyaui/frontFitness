import { db } from '@/firebase/init';
import Vue from 'vue';

export default {
  namespaced: true,
  state() {
    return {
      comments: [],
    };
  },
  actions: {
    // 獲得全部評論
    getComments({ commit }, id) {
      // commit('setComments', [])
      return db
        .collection('comments')
        .where('toId', '==', id)
        .get()
        .then(async (snapshots) => {
          // 獲取所有評論
          const comments = await snapshots.docs.map((snapshot) => {
            const comment = {
              id: snapshot.id,
              ...snapshot.data(),
            };

            // 獲取使用者資料
            db.collection('users')
              .doc(comment.user)
              .get()
              .then(async (user) => {
                comment.user = await user.data();
              });
            return comment;
          });
          commit('setComments', comments);
        });
    },

    // 新增評論
    createComment({ commit }, { comment, user }) {
      const theComment = comment;
      theComment.timestamp = Date.now();
      db.collection('comments')
        .add(theComment)
        .then((docRef) => {
          // 新增並且更新課程總評分(cloud function)
          theComment.user = user.profile;
          theComment.id = docRef.id;
          commit('addComment', theComment);
        });
    },

    // 更新評論
    updateComment({ commit }, comment) {
      const theComment = comment;
      theComment.timestamp = Date.now();
      db.collection('comments')
        .doc(theComment.id)
        .update({
          comment: theComment.comment,
          rating: theComment.rating,
          timestamp: theComment.timestamp,
        })
        .then(() => {
          commit('changeComment', theComment);
        });
    },
  },
  mutations: {
    // 儲存全部評論
    setComments(state, comments) {
      state.comments = comments;
    },

    // 新增comment到list中以即時顯現更新畫面
    addComment(state, comment) {
      state.comments.push(comment);
    },

    // 更新comment以即時顯現更新畫面
    changeComment(state, comment) {
      const index = state.comments.findIndex((item) => item.id === comment.id);
      // state.comments[index] = comment
      // or強制改寫
      Vue.set(state.comments[index], 'comment', comment.comment);
      Vue.set(state.comments[index], 'rating', comment.rating);
      Vue.set(state.comments[index], 'timestamp', comment.timestamp);
    },
  },
};
