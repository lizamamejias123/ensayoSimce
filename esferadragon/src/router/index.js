import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/Registro',
        name: 'Registro',
        component: () =>
            import ( /* webpackChunkName: "Registro" */ '../views/Registro.vue')
    },
    {
        path: '/RedSocial',
        name: 'RedSocial',
        component: () =>
            import ( /* webpackChunkName: "RedSocial" */ '../views/RedSocial.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router