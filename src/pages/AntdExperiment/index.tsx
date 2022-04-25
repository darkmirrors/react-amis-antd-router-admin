import { Button, Table, Space, Tag } from 'antd'
import { FC, ReactChild, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from '@/services/aixos'
import { first } from 'rxjs'
import './index.css'

const { ColumnGroup, Column } = Table

const AntdExperiment: FC = (): ReactElement => {
  useEffect(() => {
    axios.get('/series').then((res) => {})
    // console.log(1123)
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  return (
    <div className="">
      <div className="text-2xl mb-2.5">Antd 实验</div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default AntdExperiment
