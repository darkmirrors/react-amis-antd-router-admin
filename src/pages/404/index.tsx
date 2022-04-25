import { Button, Result } from 'antd'
import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NotFoundPage: FC = () => {
  const history = useNavigate()
  const goBackHome = () => {
    history('/login')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="oops 你应该是迷路了，按下面的按钮回家吧！"
      extra={
        <Button type="primary" onClick={() => goBackHome()}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFoundPage
