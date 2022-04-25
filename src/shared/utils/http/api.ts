import { baseAPI } from './index'

const CloudServerURL = ''

export const CloudServerAPI$ = baseAPI(CloudServerURL, {})

export const BaseAPI$ = baseAPI('')
