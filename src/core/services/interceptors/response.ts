import { BACKEND_CODE } from '@/public/constant'
import { AxiosInstance } from 'axios'

/**
 * 添加 request interceptors，实现请求拦截，如果未登录需要跳转到登录页面
 * @param instance axios实例
 */
export const responseLoginInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      const { status } = response.data

      if (response.data.status === BACKEND_CODE.SUCCESS) {
        console.log(status)
      }
      return response
    },
    (err) => {
      return Promise.reject(err)
    },
  )
}
