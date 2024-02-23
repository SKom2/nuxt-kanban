import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/index.vue'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('accessToken'); // Используйте ваш метод проверки аутентификации
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/login');
    } else {
        next(); // Если условия для перехода удовлетворены, продолжаем навигацию
    }
});


export default router;
