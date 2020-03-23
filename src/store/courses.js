import {
    db
} from "@/firebase/init";
import Vue from 'vue'


export default {
    namespaced: true,
    state() {
        return {
            cat: '所有課程',
            status: '',
            course: {},
            courses: [],
            coach: {},
            pagination: {
                totalLength: null,
                itemCount: 7,
                lastItem: null,
                previousFirstItems: [],
            }
        }
    },
    getters: {
        currentPage(state) {
            if (!state.pagination.previousFirstItems) {
                return 1
            }
            return state.pagination.previousFirstItems.length
        }
    },
    actions: {
        getPageLength({
            commit
        }) {
            db.collection('courses').get().then(snapshots => {
                commit('setLength', snapshots.size)
            })
        },

        //獲得全部課程
        getCourses({
            commit
        }, cat) {
            commit('loading', true, {
                root: true
            });
            commit('setCourses', [])
            let query;
            //無分類的情況
            if (cat === '所有課程') {
                query = db
                    .collection('courses')
                    .get()
            } else {
                //分類的情況
                query = db
                    .collection('courses')
                    .where("categorySelected", "==", cat)
                    .get()
            }
            return query
                .then(snapshots => {
                    const courses = snapshots.docs.map(snapshot => ({
                        ...snapshot.data(),
                        id: snapshot.id
                    }));
                    commit('setCat', cat)
                    commit('setCourses', courses)
                    commit('loading', false, {
                        root: true
                    })
                    return courses;
                })
        },

        //獲得特定課程
        getCourseById({
            commit
        }, courseId) {

            commit('loading', true, {
                root: true
            })
            commit('setCourse', {})
            db
                .collection('courses')
                .doc(courseId)
                .get()
                .then(async snapshot => {
                    const course = snapshot.data();
                    course.id = snapshot.id

                    //獲取教練的資料
                    await db.collection("coaches")
                        .where("name", "==", course.coach)
                        .get()
                        .then(snapshots => {
                            //where會回傳陣列，但搜尋的姓名為唯一值，因此選第0項
                            const coach = snapshots.docs.map(snapshot => ({
                                ...snapshot.data()
                            }));
                            commit('setCoach', ...coach)
                        })

                    commit('setCourse', course)
                    commit('loading', false, {
                        root: true
                    })
                })
        },

        //獲得分頁課程
        getCoursesLimit({
            commit,
            state
        }) {
            commit('loading', true, {
                root: true
            })
            commit('setCourses', [])
            commit('clearPreviousFirstItem')

            return db
                .collection("courses")
                .orderBy("categorySelected", "desc")
                .limit(state.pagination.itemCount)
                .get()
                .then(snapshots => {
                    const courses = snapshots.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    commit('setCourses', courses);
                    commit('setLastItem', snapshots.docs[snapshots.docs.length - 1])
                    commit('setPreviousFirstItem', snapshots.docs[0])
                    commit('loading', false, {
                        root: true
                    })
                    return courses
                })
        },

        //下一頁/上一頁
        getMoreCourses({
            commit,
            state
        }, page) {
            commit('loading', true, {
                root: true
            })
            let query;

            //下一頁
            if (page === 'next') {
                query = db
                    .collection('courses')
                    .orderBy("categorySelected", "desc")
                    .startAfter(state.pagination.lastItem)

                    .limit(state.pagination.itemCount)
            } else {
                //前一頁
                const lastItemIndex = state.pagination.previousFirstItems.length - 1
                const previousItem = state.pagination.previousFirstItems[lastItemIndex - 1]

                if (!previousItem) {
                    return
                }

                state.pagination.previousFirstItems.splice(lastItemIndex, 1)
                query = db
                    .collection('courses')
                    .orderBy("categorySelected", "desc")
                    .startAt(previousItem)
                    .limit(state.pagination.itemCount)
            }

            return query
                .get()
                .then(snapshots => {
                    if (snapshots.docs.length === 0) {
                        return []
                    }

                    const courses = snapshots.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    commit('setCourses', courses)
                    commit('setLastItem', snapshots.docs[snapshots.docs.length - 1])

                    if (page === 'next') {
                        commit('setPreviousFirstItem', snapshots.docs[0])
                    }
                    commit('loading', false, {
                        root: true
                    })

                    return courses
                })

        },

        //創建新課程
        createCourse(_, course) {
            db
                .collection('courses')
                .add(course)
                .catch(err =>
                    err)
        },



        //移除課程
        removeCourse({
            commit
        }, id) {
            return db.collection('courses')
                .doc(id)
                .delete()
                .then(() => {
                    commit('setCourseDelete', id)
                })
        },

        //更新課程
        updateCourse({
            commit
        }, {
            id,
            course
        }) {
            if (course && id) {
                db.collection("courses")
                    .doc(id)
                    .update(course)
                    .then(() => {
                        commit('setCurCourse', {
                                id,
                                course
                            }),
                            commit('setCurCourse', course)
                    })
            }
        },
    },
    mutations: {
        //儲存分類
        setCat(state, cat) {
            state.cat = cat
        },
        //儲存全部課程
        setCourses(state, courses) {
            state.courses = courses
        },

        //儲存單一課程
        setCourse(state, course) {
            state.course = course
        },

        //儲存教練
        setCoach(state, coach) {
            state.coach = coach
        },

        //即時更新畫面（編輯課程）
        setCurCourse(state, {
            id,
            course
        }) {
            //Vue.set(state.object, key, value) or Vue.set(object, prop, value)
            state.courses = state.courses.findIndex(course => course.id === id)
            Vue.set(state.courses, index, course)
        },

        //即時更新畫面（移除課程）

        setCourseDelete(state, id) {
            state.courses = state.courses.filter(course => course.id !== id)
        },

        //即時更新（新增評價）
        setCurCourse(state, course) {
            Vue.set(state.course, 'avgRating', course.avgRating)
        },

        setLastItem(state, course) {
            state.pagination.lastItem = course
        },
        setPreviousFirstItem(state, course) {
            state.pagination.previousFirstItems.push(course)
        },
        clearPreviousFirstItem(state) {
            state.pagination.previousFirstItems = []
        },
        setLength(state, length) {
            let totalPage = (length / state.pagination.itemCount);
            if (length % state.pagination.itemCount == 0) {
                state.pagination.totalLength = totalPage
            } else {
                state.pagination.totalLength = Math.ceil(totalPage)
            }
        },
        setStatus(state, status) {
            state.status = status
        },
    }
}