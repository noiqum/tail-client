import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main';
import Auth from '../views/Auth';

const routes=[{
    path:'/',
    name:'Main',
    component:Main
},{
    path:'/login',
    name:'Auth',
    component:Auth
}]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})


export default router