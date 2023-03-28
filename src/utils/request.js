import { message } from "antd"
import axios from "axios"
const request = axios.create({
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // 请求超时时间
  // 跨域时候允许携带凭证
  withCredentials: true,
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (!config.headers.Authorization && token) {
      config.headers["Authorization"] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data
    // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
    if (res.code && res.code !== 200) {
      message.error(res.msg)
      return Promise.reject("服务器返回状态不是200")
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
