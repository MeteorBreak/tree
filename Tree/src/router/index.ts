import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/src/pages/awake'
    },
    {
        path: '/src/pages/awake',
        name: 'awake',
        component: () => import('@/pages/awake.vue')
    },
    {
        path: '/src/pages/testpage',
        name: 'testpage',
        component: () => import('@/pages/testpage.vue')
    },
    ]

    const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router