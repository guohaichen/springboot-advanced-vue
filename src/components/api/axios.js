import axios from 'axios';
import router from "@/router";
//axios配置，可以设置基本的url、请求头、请求超时等参数
const instance = axios.create({
    baseURL: "http://localhost:9090",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
//在前端发送请求时，可以在请求拦截器中设置请求头；将token作为请求的一部分发送给后端 格式 Authorization:token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

//响应拦截器,如果服务器返回响应状态码为401，代表未授权，需要登录
axios.interceptors.response.use(
    response=>response,
    error=>{
        if (error.response.code===401){
            router.push("/login").then(r => r)
        }
        return Promise.reject(error)
    }
)

export default instance;
