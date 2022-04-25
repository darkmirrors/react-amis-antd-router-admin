import { Menu } from 'antd'
import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

const { SubMenu } = Menu

interface IMenuList {
  title: string
  key: string
  icon: string
  isPublic?: boolean
  children?: IMenuList[]
}

const LeftNav: FC = (): ReactElement => {
  const menuList: IMenuList[] = [
    {
      title: '首页',
      key: '/',
      icon: 'HomeOutlined',
      isPublic: true,
    },
    {
      title: 'features',
      key: '/features',
      icon: '',
      children: [
        {
          title: 'todo',
          key: '/todo',
          icon: '',
        },
        {
          title: '分类列表',
          key: '/series',
          icon: '',
        },
        {
          title: 'Antd实验',
          key: '/antd',
          icon: '',
        },
        {
          title: 'Twailwind实验',
          key: '/tailwind',
          icon: '',
        },
      ],
    },
    {
      title: '用户管理',
      key: '/user',
      icon: '',
    },
  ]

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {menuList.map((item, index) => {
        if (item.children?.length) {
          return (
            <SubMenu key={item.key} icon={item.icon ? Icon(item.icon) : ''} title={item.title}>
              {item.children.map((sub) => {
                return (
                  <Menu.Item key={sub.key} icon={sub.icon ? Icon(sub.icon) : ''}>
                    <Link to={sub.key}>{sub.title}</Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={item.key} icon={item.icon ? Icon(item.icon) : ''}>
              <Link to={item.key}>{item.title}</Link>
              {/* <a href={item.key}>{item.title}</a> */}
            </Menu.Item>
          )
        }
      })}
    </Menu>
  )
}

export default LeftNav
