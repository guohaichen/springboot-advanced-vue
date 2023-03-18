import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//1.导入路由组件
import Main from "@/views/Main";
import Login from "@/views/Login";
import Home from "@/views/Home";
import HelloWorld from "@/components/HelloWorld.vue";
// import App from "@/App.vue";

Vue.use(VueRouter)

//定义路由。每个路由映射到一个组件
const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/home",
                component: Home,
            },
            {
                path: "/helloWorld",
                component: HelloWorld
            }
        ],
    },
    {
        /*设置login页面不包含在App.vue的页面布局中，因为App.vue设置了布局，通常登录页面是不需要布局的*/
        path: "/login",
        component: Login,
    },
]
//3.创建路由实例并传递‘routes’配置
const router = new VueRouter({
    routes //routes:routes的缩写。
})
export default router
