import { Spin } from 'antd'
import { Suspense, lazy } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />

export interface RouterBody {
  name?: string
  path: string
  component?: any
  element?: any
  children?: Array<RouterBody>
}

const router: Array<RouterBody> = [
  {
    path: '',
    component: lazy(() => import('@/features/Layouts/index')),
    children: [
      { path: '', component: lazy(() => import('@/pages/Home')) },
      { path: '/todo', component: lazy(() => import('@/pages/TodoList')) },
      { path: '/series', component: lazy(() => import('@/pages/SeriesList')) },
      { path: '/user', component: lazy(() => import('@/pages/UserList')) },
      { path: '/antd', component: lazy(() => import('@/pages/AntdExperiment')) },
      { path: '/tailwind', component: lazy(() => import('@/pages/TailwindExperiment')) },
      // { path: 'tip', component: lazy(() => import('@/pages/home/components/tip')) },
    ],
  },
  {
    path: '/Login',
    component: lazy(() => import('@/pages/Login')),
  },
  {
    path: '*',
    component: lazy(() => import('@/features/Layouts/index')),
    children: [{ path: '*', component: lazy(() => import('@/pages/404')) }],
  },
]

const changeRouter = (routers: Array<RouterBody>): any => {
  return routers.map((item) => {
    if (item.children) {
      item.children = changeRouter(item.children)
    }

    item.element = (
      <Suspense
        fallback={
          <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
            <Spin indicator={antIcon} size="large" />
          </div>
        }
      >
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    )
    return item
  })
}

export const routes = changeRouter(router)
