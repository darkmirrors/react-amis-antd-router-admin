import React, { FC } from 'react'

import AMISComponent from '@/features/AMIS/index'

let amisConfig = {
  type: 'page',
  body: [
    {
      type: 'flex',
      justify: 'space-between',
      className: 'm-b-sm',
      items: [
        {
          type: 'breadcrumb',
          items: [
            {
              label: '数据中心',
              href: '#/',
              icon: 'fa fa-home',
            },
            {
              label: '配置单数据管理',
            },
          ],
        },
        {
          label: '新增配置单分类',
          type: 'button',
          actionType: 'dialog',
          level: 'primary',
          dialog: {
            title: '新增配置单分类',
            body: {
              type: 'form',
              api: 'post:/amis/api/mock2/sample',
              body: [
                {
                  type: 'input-text',
                  name: 'name',
                  label: '分类名称',
                  required: true,
                },
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
        {
          type: 'input-text',
          name: 'keywords',
          label: '',
          placeholder: '请输入分类名称',
        },
        {
          type: 'button',
          name: 'search',
          label: '搜索',
          level: 'primary',
          actionType: 'reload',
          target: 'items',
        },
      ],
    },
    {
      type: 'crud',
      name: 'items',
      api: '/series',
      columns: [
        {
          name: 'name',
          label: '分类名',
        },
        {
          name: 'date',
          label: '添加时间',
        },
        {
          name: 'create_user',
          label: '添加人',
        },
        {
          type: 'operation',
          label: '操作',
          buttons: [
            {
              label: '修改',
              type: 'button',
              actionType: 'dialog',
              dialog: {
                title: '新增配置单分类',
                body: {
                  type: 'form',
                  initApi: '/amis/api/mock2/sample/${id}',
                  api: 'post:/amis/api/mock2/sample/${id}',
                  body: [
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '分类名称',
                      required: true,
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

const SeriesList: FC = () => {
  return <AMISComponent config={amisConfig} />
}

export default SeriesList
