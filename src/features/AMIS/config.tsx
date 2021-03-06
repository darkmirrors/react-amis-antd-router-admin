// import axios from '@services/aixos'
import axios from 'axios'
import copy from 'copy-to-clipboard'
import { toast } from 'amis/lib/components/Toast'
import { NODE_ENV } from '@/public/constant'

// amis 环境配置
export const env = {
  // 下面三个接口必须实现
  fetcher: ({
    url, // 接口地址
    method, // 请求方法 get、post、put、delete
    data, // 请求数据
    responseType,
    config = {}, // 其他配置
    headers, // 请求头
  }: any) => {
    config.withCredentials = true
    responseType && (config.responseType = responseType)
    let transformData = data

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

    axios.defaults.baseURL = baseURL

    if (config.cancelExecutor) {
      config.cancelToken = new (axios as any).CancelToken(config.cancelExecutor)
    }

    // axios.baseURL = baseURL

    config.headers = headers || {}

    if (method !== 'post' && method !== 'put' && method !== 'patch') {
      if (transformData) {
        config.params = transformData
      }
      return (axios as any)[method](url, config)
    } else if (transformData && transformData instanceof FormData) {
      config.headers = config.headers || {}
      config.headers['Content-Type'] = 'multipart/form-data'
    } else if (
      transformData &&
      typeof transformData !== 'string' &&
      !(transformData instanceof Blob) &&
      !(transformData instanceof ArrayBuffer)
    ) {
      transformData = JSON.stringify(transformData)
      config.headers = config.headers || {}
      config.headers['Content-Type'] = 'application/json'
    }

    return (axios as any)[method](url, transformData, config)
  },
  isCancel: (value: any) => (axios as any).isCancel(value),
  copy: (content: string) => {
    copy(content)
    toast.success('内容已复制到粘贴板')
  },

  // 后面这些接口可以不用实现

  // 默认是地址跳转
  // jumpTo: (
  //   location: string /*目标地址*/,
  //   action: any /* action对象*/
  // ) => {
  //   // 用来实现页面跳转, actionType:link、url 都会进来。
  // },

  // updateLocation: (
  //   location: string, // 目标地址
  //   replace: boolean, // 是否替换当前地址
  // ) => {
  //   // 地址替换，跟 jumpTo 类似
  //   // window.location.href = location
  // },

  // isCurrentUrl: (
  //   url: string /*url地址*/,
  // ) => {
  //   // 用来判断是否目标地址当前地址
  // },

  // notify: (
  //   type: 'error' | 'success' /**/,
  //   msg: string /*提示内容*/
  // ) => {
  //   toast[type]
  //     ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
  //     : console.warn('[Notify]', type, msg);
  // },
  // alert,
  // confirm,
  theme: 'antd',
}
