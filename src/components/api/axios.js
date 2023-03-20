import axios from 'axios';
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

export default instance;
