import { render as renderAmis } from 'amis'
import { Schema } from 'amis/lib/types'
import { FC } from 'react'
import { env } from './config'

interface IProps {
  config: Schema
}

const AMISComponent: FC<IProps> = ({ config }) => {
  return renderAmis(
    // 这里是 amis 的 Json 配置。
    config,
    {
      // props...
    },
    env,
  )
}

export default AMISComponent
