import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


const User = ()=> import('./../views/user.vue')
const Profile =()=>import('./../views/profile.vue')
const Posts =()=>import('./../views/posts.vue')

const routes:Array<RouteRecordRaw> = [
    {
        path:'/user/:id',
        name:'user',
        component:User,
        children:[
            {path:'profile',component:Profile},
            {path:'posts',component:Posts}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router