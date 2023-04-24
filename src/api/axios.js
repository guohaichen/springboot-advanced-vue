import axios from 'axios';
import router from "@/router";
import { Message } from 'element-ui';
//axios配置，可以设置基本的url、请求头、请求超时等参数
const instance = axios.create({
    baseURL: "http://localhost:9090",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json; charset=UTF-8;"
    },
    // withCredentials: true
});
//在前端发送请求时，可以在请求拦截器中设置请求头；将token作为请求的一部分发送给后端 格式 Authorization:token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        const userInfo = localStorage.getItem("userInfo")
        if (token) {
            config.headers.Authorization = `${token}`;
            config.headers.UserInfo = `${userInfo}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

//响应拦截器,如果服务器返回响应状态码为401，代表未授权，需要登录
//新增了全局统一异常处理，
instance.interceptors.response.use(
    response => {
      if (response.data.code===401){
          Message.error("登录失效，请重新登录!")
          router.push("/login").then(r=>r)
      }
      return response
    },
    error => {
        if (error.response.status === 401) {
            Message.warning("请先登录!")
            router.push("/login").then(r => r)
        } else if (error.response.status === 500) {
            console.log("500");
            Message.warning("服务器错误!")
        }else {
            console.log("其他异常错误")
        }
        console.log(error)
        return Promise.reject(error)
    }
)

export default instance;
