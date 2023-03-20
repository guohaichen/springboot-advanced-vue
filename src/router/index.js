import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//1.导入路由组件
import Main from "@/views/Main";
import Login from "@/views/Login";
import Home from "@/views/Home";
import HelloWorld from "@/views/HelloWorld.vue";
import Registry from "@/views/Registry.vue";
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
                meta: {
                    requireAuth: true,  // 表示进入这个路由需要登录
                }
            },
            {
                path: "/helloWorld",
                component: HelloWorld,
                meta: {
                    requireAuth: true,  // 表示进入这个路由需要登录
                }
            }
        ],
    },
    {
        /*设置login页面不包含在App.vue的页面布局中，因为App.vue设置了布局，通常登录页面是不需要布局的*/
        path: "/login",
        component: Login,
        meta: {
            requireAuth: false
        }
    },
    {
        path: "/registry",
        component: Registry
    }
]
//3.创建路由实例并传递‘routes’配置
const router = new VueRouter({
    routes //routes:routes的缩写。
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    if (!token && to.path !== '/login') {
        next('/login')
        console.log("无token,注册")
    } else {
        next()
    }
})
export default router
