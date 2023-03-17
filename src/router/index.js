import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//1.导入路由组件
import Main from "@/views/Main";
import Login from "@/views/Login";
import Home from "@/views/Home";

Vue.use(VueRouter)

//定义路由。每个路由映射到一个组件
const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    }
]
//3.创建路由实例并传递‘routes’配置
const router = new VueRouter({
    routes //routes:routes的缩写。
})
export default router
