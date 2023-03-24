import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


const User = ()=> import('./../views/user.vue')
const Animal =()=>import('./../views/animal.vue')
const Car =()=>import('./../views/car.vue')

const routes:Array<RouteRecordRaw> = [
    {path:'/user/:username',name:'user',component:User},
    {path:'/animal/name/:name/color/:color/height/:height',name:'animal',component:Animal},
    {path:'/car/:name?',name:'car',component:Car},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router