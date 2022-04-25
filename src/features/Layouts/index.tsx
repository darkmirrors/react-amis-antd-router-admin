// import SideBar from 'antd' // 自定义的侧边栏
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { Link, Outlet } from 'react-router-dom' // 子路由出口，类似vue的router-view
import LeftNav from '@features/LeftNav'

const { Header, Content, Sider } = Layout

const PageLayout: FC = (): ReactElement => {
  /**
   * side bar collapsed
   */
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout>
      <Header className="header flex flex-row justify-between">
        <div className="logo w-52 mr-5 flex flex-auto">123</div>
        <Content className="flex flex-row justify-end">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ minWidth: '400px' }}>
            <Menu.Item key="1">
              <Link to="login">跳转登录</Link>
            </Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav </Menu.Item>
          </Menu>
          <div className="text-white">123</div>
        </Content>
      </Header>
      <Layout style={{ flexDirection: 'row', height: 'calc(100vh - 64px)' }}>
        <Sider width={200} className="overflow-scroll" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <LeftNav />
        </Sider>
        <Layout className="p-3.5">
          <Content className="overflow-scroll">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default PageLayout
