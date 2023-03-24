import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


const User = ()=> import('./../views/user.vue')

const routes:Array<RouteRecordRaw> = [
    {
        path:'/user/:name',
        props: true,
        component:User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router