import axios from 'axios'
import { NODE_ENV } from '@public/constant'
import * as requestInterceptors from './interceptors/request'
import * as responseInterceptors from './interceptors/response'
import { type } from 'os'

/**
 * baseUrl 分场景映射
 */
let baseURL
switch (process.env.NODE_ENV) {
  case NODE_ENV.DEV:
    baseURL = 'http://127.0.0.1:4523/mock/808056'
    break
  case NODE_ENV.PROD:
    baseURL = 'http://localhost:3000'
    break
  default:
    baseURL = 'http://localhost:3000'
    break
}

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * 添加 request interceptors
 */
for (let key in requestInterceptors) {
  if (Object.hasOwnProperty.call(requestInterceptors, key)) {
    const requeseInterceptor = (requestInterceptors as { [key: string]: any })[key] as Function
    if (typeof requeseInterceptor === 'function') {
      requeseInterceptor(instance)
    }
  }
}

/**
 * 添加 response interceptors
 */
for (let key in responseInterceptors) {
  if (Object.hasOwnProperty.call(responseInterceptors, key)) {
    const responseInterceptor = (responseInterceptors as { [key: string]: any })[key] as Function
    if (typeof responseInterceptor === 'function') {
      responseInterceptor(instance)
    }
  }
}

export default instance
