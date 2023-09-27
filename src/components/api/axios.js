import axios from 'axios';
import {Message} from 'element-ui'
import router from "@/router";
//axios配置，可以设置基本的url、请求头、请求超时等参数
const instance = axios.create({
    baseURL: "http://localhost:10010",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.token = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error)
        if (error.response || error.response.status === 401) {
            console.log(this)
            Message.warning("请先登录!")
            router.push("/login").then(r => r)
        } else if (error.response.status === 500) {
            Message.warning("服务器错误!")
        } else {
            Message.error("其他异常错误")
        }
        return Promise.reject(error)
    }
)

export default instance;
