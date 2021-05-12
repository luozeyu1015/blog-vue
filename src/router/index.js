import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
    {
        path: '/',
        component: resolve => require(['../views/home'], resolve),
        name:'Home'
    },
    {
        path: '/Home',
        component: resolve => require(['../views/home'], resolve),
        name: 'Home'
    },
    {
        path:'/Paper',
        component: resolve => require(['../views/paper'], resolve),
        name: 'Paper'
    },
    {
        path:'/Amusement',
        component: resolve => require(['../views/amusement'], resolve),
        name: 'Amusement'
    },
    {
        path:'/Production',
        component: resolve => require(['../views/production'], resolve),
        name: 'Production'
    },
    {
        path:'/Message',
        component: resolve => require(['../views/message'], resolve),
        name: 'Message'
    },
    {
        path:'/About',
        component: resolve => require(['../views/about'], resolve),
        name: 'About'
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
        ]
    },

]

const createRouter = () => new Router({
    // mode: 'history', // require service support
        scrollBehavior(to) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
            if (to.hash){
                console.log(to.hash)
                return {
                    selector: to.hash,
                    behavior: 'smooth',
                }
            }
            // if (savePosition) {
            //     return savePosition;
            // } else {
            //     return {
            //         x:0,
            //         y:100
            //     }
            //     // var top;
            //     // if (window.innerWidth >= 700) {
            //     //     top = 676
            //     // } else {
            //     //     top = 267
            //     // }
            //     // return {
            //     //     x: 0,
            //     //     y: top
            //     // }
            // }
        },
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router