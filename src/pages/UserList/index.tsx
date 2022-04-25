import React, { FC } from 'react'

import { ToastComponent, AlertComponent } from 'amis'
import AMISComponent from '@/features/AMIS/index'
import { role } from '@/features/AMIS/user'

let amisConfig = {
  type: 'page',
  body: [
    {
      type: 'flex',
      justify: 'space-between',
      items: [
        {
          type: 'breadcrumb',
          items: [
            {
              label: '首页',
              href: 'https://baidu.gitee.com/',
              icon: 'fa fa-home',
            },
            {
              label: '用户管理',
            },
          ],
        },
        {
          label: '新增用户',
          type: 'button',
          actionType: 'dialog',
          level: 'primary',
          className: 'm-b-sm',
          dialog: {
            title: '新增表单',
            body: {
              type: 'form',
              api: 'post:/amis/api/mock2/sample',
              body: [
                {
                  type: 'input-text',
                  name: 'name',
                  label: '用户名',
                  required: true,
                },
                {
                  type: 'input-password',
                  name: 'password',
                  label: '密码',
                  required: true,
                },
                {
                  type: 'input-text',
                  name: 'email',
                  label: '邮箱',
                },
                {
                  type: 'input-text',
                  name: 'phone',
                  label: '手机号',
                },
                role,
              ],
            },
          },
        },
      ],
    },
    {
      title: '查询条件',
      type: 'form',
      mode: 'inline',
      body: [
        role,
        {
          type: 'input-text',
          name: 'keywords',
          label: '',
          placeholder: '请输入用户名',
        },
        {
          type: 'button',
          name: 'search',
          label: '搜索',
          level: 'primary',
          action: 'reload',
          target: 'list',
        },
      ],
    },
    {
      type: 'crud',
      name: 'list',
      api: '/amis/api/mock2/sample',
      columns: [
        {
          name: 'id',
          label: 'ID',
        },
        {
          name: 'name',
          label: '用户名',
        },
        {
          name: 'email',
          label: '邮箱',
        },
        {
          name: 'phone',
          label: '手机号',
        },
        {
          name: 'role',
          label: '角色',
        },
        {
          type: 'operation',
          label: '操作',
          buttons: [
            {
              label: '修改',
              type: 'button',
              actionType: 'drawer',
              drawer: {
                title: '新增表单',
                body: {
                  type: 'form',
                  initApi: '/amis/api/mock2/sample/${id}',
                  api: 'post:/amis/api/mock2/sample/${id}',
                  body: [
                    {
                      type: 'input-text',
                      name: 'engine',
                      label: 'Engine',
                    },
                    {
                      type: 'input-text',
                      name: 'browser',
                      label: 'Browser',
                    },
                  ],
                },
              },
            },
            {
              label: '删除',
              type: 'button',
              actionType: 'ajax',
              level: 'danger',
              confirmText: '确认要删除？',
              api: 'delete:/amis/api/mock2/sample/${id}',
            },
          ],
        },
      ],
    },
  ],
}

const UserList: FC = () => {
  return <AMISComponent config={amisConfig} />
}

export default UserList
