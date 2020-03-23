export default {
    namespaced: true,
    state() {
        return {
            cart: [],
            coupon: false,
            discount: 100,
            total: {
                //總原價
                totalOrigin: 0,
                //總折扣
                totalDiscount: 0,
                //總售價
                totalPrice: 0,
            },
        }
    },

    mutations: {
        //加入購物車
        addToCart(state, course) {
            state.cart.push(course);
        },

        //移除購物車內容
        removeItem(state, cart) {
            let index = state.cart.indexOf(cart);
            state.cart.splice(index, 1)
        },

        //加入購物券價格
        addCouponCode(state, coupon) {
            state.coupon = coupon;
        },

        //計算總價
        total(state) {
            if (state.cart.length > 0) {
                state.total.totalOrigin = state.cart.map(course => course.price).reduce((total, amount) => total + amount);
                //若有coupon則計算，無則折扣為0
                state.total.totalDiscount = state.coupon ? state.cart.filter(course => course.discount).length * state.discount : 0
                state.total.totalPrice = state.total.totalOrigin - state.total.totalDiscount;

            } else {
                state.total.coupon = false
                state.total.totalOrigin = 0
                state.total.totalDiscount = 0
                state.total.totalPrice = 0
            }
        },

        //結帳完成清空購物車
        clearCart(state) {
            state.cart = [];
            state.total.totalOrigin = 0;
            state.total.totalDiscount = 0;
            state.total.totalPrice = 0;
        }
    }
}