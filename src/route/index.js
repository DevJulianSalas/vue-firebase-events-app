import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from '@/store'
//Views
import Login from '@/views/Login'
import Home from '@/views/Home'


Vue.use(Router)
Vue.use(Meta)

//auth
const meta = { authenticate: true}

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta
        }
    ]
})

//hook to verify whether users is auth otherwise re-direct to the login
// navigations guards https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
    if(to.name === 'login' && store.getters.isAuth) {
        next({path: '/'})
    }
    if(to.matched.some( record => record.meta.authenticate)) {
        if (!store.getters.isAuth) {
            next({path: '/login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;