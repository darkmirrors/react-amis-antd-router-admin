import { defer, map, Observable } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

/** basic  */
export const axiosInstance = axios.create({
  timeout: 5000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // TODO
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (config) => {
    // TODO
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const get$ = <T, U = object>(url: string, queryParams?: U, options?: AxiosRequestConfig): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, { ...options, params: queryParams })).pipe(map((result) => result.data))
}

const post$ = <T, U = object, P = object>(url: string, body: U, options?: AxiosRequestConfig): Observable<T> => {
  return defer(() => axiosInstance.post<T>(url, body, options)).pipe(map((result) => result.data))
}

export const baseAPI = (host: string, basicParams: object = {}, options: object = {}) => {
  return {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    get$: <T, U = object>(urlPath: string, params: U = {} as U) =>
      get$<T, U>(
        `${host}${urlPath}`,
        {
          ...basicParams,
          ...params,
        },
        options,
      ),
    post$: <T, U, P>(urlPath: string, body: U) =>
      post$<T, U, P>(`${host}${urlPath}`, { ...basicParams, ...body }, options),
  }
}
