import axios from 'axios';
//axios配置，可以设置基本的url、请求头、请求超时等参数
const instance = axios.create({
    baseURL: "http://localhost:9090",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;
