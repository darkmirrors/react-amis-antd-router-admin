import { AxiosInstance } from 'axios'
import instance from '../aixos'

/**
 * 实现登录拦截器，在请求前增加token
 * @param instance axios 实例
 */
export const requestLoginInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      console.log('axios.interceptors.request.use', config)
      return config
    },
    (err) => {
      return Promise.reject(err)
    },
  )
}
