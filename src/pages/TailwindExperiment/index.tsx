import { Button, Table } from 'antd'
import { FC, ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { first } from 'rxjs'
import './index.css'

const { ColumnGroup, Column } = Table

const TailwindExperiment: FC = (): ReactElement => {
  return (
    <div className="layout-table">
      <div className="text-3xl">tailwindcss 实验</div>
      <div className="font-bold text-blue-500 hover:text-red-500 md:text-xl lg:text-2xl">Hello Home!</div>
      <div className="btn">tailwind @apply 写法</div>
      <div className="foo">less 样式实验</div>
      <img />
    </div>
  )
}

export default TailwindExperiment
