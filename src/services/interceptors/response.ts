import { AxiosInstance } from 'axios'
import instance from '../aixos'

/**
 * 添加 request interceptors，实现请求拦截，如果未登录需要跳转到登录页面
 * @param instance axios实例
 */
export const responseLoginInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      const { status, data } = response.data

      if (response.data.status === 0) {
        console.log(status)
      }
      return response
    },
    (err) => {
      return Promise.reject(err)
    },
  )
}
