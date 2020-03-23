import {
    db
} from "@/firebase/init";
import fb from 'firebase/app'
import 'firebase/auth'


export default {
    namespaced: true,
    state() {
        return {
            user: null
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user
        },
    },

    actions: {
        //註冊
        signUp(_, {
            email,
            password
        }) {
            return fb.auth().createUserWithEmailAndPassword(email, password)
                .then(({
                    user
                }) => {
                    return user
                }).catch(error => {
                    let message;
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            message = '帳號已存在 請嘗試其他電子信箱'
                            break;
                        case "auth/invalid-email":
                            message = '不符規定的格式 請嘗試其他電子信箱'
                            break;
                        case "auth/weak-password":
                            message = "密碼強度太弱 請嘗試新的密碼組合"
                            break;
                        default:
                            message = "註冊失敗 請重新嘗試"
                    }
                    return Promise.reject(message)
                })
        },

        //登入
        signIn(_, {
            email,
            password
        }) {
            return fb.auth().signInWithEmailAndPassword(email, password)
                .catch(error => {
                    let message = error.code === 'auth/user-not-found' ?
                        "無使用者 請再確認帳號" :
                        "密碼錯誤 請再重試"
                    return Promise.reject(message)
                })

        },

        //登出
        signOut({
            commit
        }) {
            return fb.auth().signOut()
                .then(() => commit('setAuthUser', null))
        },

        //建立使用者資料
        createUserProfile(_, {
            uid,
            userProfile
        }) {
            return db
                .collection('users')
                .doc(uid)
                .set(userProfile)
        },

        //讀取寫入使用者資料
        storeAuthUser({
            commit
        }, user) {
            return db.collection('users')
                .doc(user.uid)
                .get()
                .then(snapshot => {
                    const profile = snapshot.data()
                    user.profile = profile;
                    commit('setAuthUser', user)
                    return profile
                })
        },

        //更新使用者資料
        updateUser({
            commit
        }, {
            id,
            user
        }) {
            debugger
            if (user && id) {
                db.collection("users")
                    .doc(id)
                    .update(user)
                    .then(() => {
                        commit('changeUserView', user)
                    })
            }
        }
    },

    mutations: {
        setAuthUser(state, user) {
            state.user = user
        },

        changeUserView(state, user) {
            state.user.profile.name = user.name;
            state.user.profile.userImg = user.userImg
        }
    }
}