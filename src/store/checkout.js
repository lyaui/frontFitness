import { db } from '@/firebase/init';

export default {
  namespaced: true,
  state() {
    return {
      payment: {},
      payments: [],
    };
  },
  actions: {
    // 取得所有訂單
    getPayments({ commit }) {
      commit('loading', true, {
        root: true,
      });
      commit('setPayments', []);
      return db
        .collection('payments')
        .orderBy('createdAt', 'desc')
        .get()
        .then((snapshots) => {
          const payments = snapshots.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          commit('setPayments', payments);
          commit('loading', false, {
            root: true,
          });
          return payments;
        });
    },

    // 取得特定訂單
    getPaymentById({ commit }, paymentId) {
      commit('loading', true, {
        root: true,
      });
      db.collection('payments')
        .doc(paymentId)
        .get()
        .then((snapshot) => {
          const payment = snapshot.data();
          payment.id = snapshot.id;
          commit('setPayment', payment);
          commit('loading', false, {
            root: true,
          });
        });
    },

    // 新增訂單
    createPayment({ commit }, payment) {
      const thePayment = payment;
      thePayment.status = '尚未付款';
      thePayment.createdAt = Date.now();
      db.collection('payments')
        .add(thePayment)
        .then((docRef) => {
          thePayment.id = docRef.id;
          // 回傳新增訂單id作為頁面路徑
          commit('setPayment', thePayment);
        });
    },

    // 付款更新訂單狀態
    finishPayment({ commit }, id) {
      db.collection('payments')
        .doc(id)
        .update({
          status: '付款完成',
          finishedAt: Date.now(),
        })
        .then(() => commit('changePaymentsStatus', {
          id,
          status: '付款完成',
          finishedAt: Date.now(),
        }));
    },
  },
  mutations: {
    // 儲存全部訂單
    setPayments(state, payments) {
      state.payments = payments;
    },

    // 儲存單一訂單
    setPayment(state, payment) {
      state.payment = payment;
    },

    // 更改訂單狀態
    changePaymentsStatus(state, { status, finishedAt }) {
      state.payment.status = status;
      state.payment.finishedAt = finishedAt;
    },

    // 送出訂單或離開頁面清空
    clearPayment(state) {
      state.payment = {};
    },
  },
};
