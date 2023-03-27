import axios from "axios"

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeoutL: 5000,
  // 跨域时候允许携带凭证
  withCredentials: true,
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token")
    if (!config.headers.Authorization && token) {
      config.headers["Authorization"] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)
