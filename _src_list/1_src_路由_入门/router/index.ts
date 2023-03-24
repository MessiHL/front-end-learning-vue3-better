import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


const Login = () => import('./../views/login.vue');
const Home = () => import('./../views/home.vue');
const About = () => import('./../views/about.vue');

const routes:Array<RouteRecordRaw> = [
    {path:'/',name:'login',component:Login},
    {path:'/home',name:'home',component:Home},
    {path:'/about',name:'about',component:About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router