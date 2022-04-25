import { createElement, FC, ReactElement } from 'react'
import * as ALLIcon from '@ant-design/icons'

const Icon = (
  name: string,
  config: object = {
    style: { fontSize: '16px' },
  },
): ReactElement => {
  return createElement(ALLIcon && (ALLIcon as any)[name], config)
}

export default Icon
