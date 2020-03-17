import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个 axios 实例
console.log(process.env.VUE_APP_API, 1111)
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 50000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  // 请求前处理
  config => {
    const token = ''
    // X-Token为自定义值，根据后台自定义token名称
    config.headers['X-Token'] = token
    return config
  },
  error => {
    // 发送失败
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code } = dataAxios
    // 根据 code 进行判断
    switch (code) {
      case 0:
        return dataAxios.data
      default:
        Message.error(dataAxios)
        break
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    errorLog(error)
    return Promise.reject(error)
  }
)

export default service