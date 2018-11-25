import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        layout: 'login-layout',
        isAuth: false
    },  
    getters: {
        layout: state => state.layout,
        isAuth: state => state.isAuth
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload
        },
        SET_AUTH(state, payload) {
            state.isAuth = payload
        }
    },
    actions: {

    },

    plugins: [createPersistedState()]


})


