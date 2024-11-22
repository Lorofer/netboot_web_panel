import { createWebHistory, createRouter } from 'vue-router';

import Main from '@/views/Main.vue';
import Register from '@/views/Register.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            props: true
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]
})

export default router