import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useStores } from '@store/index'
import TodoItem from './TodoItem'
import { Form, Input } from 'antd'
import { inject, observer } from 'mobx-react'
import FormItem from 'antd/lib/form/FormItem'
import { ITodo } from '@/types/todo'

interface IProps {
  todos: ITodo[]
}

const TodoList: FC<IProps> = ({ todos }) => {
  const { todoStore } = useStores()

  const onkeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = form.getFieldValue('text')

    if (e.code === 'Enter' && value) {
      todoStore.addNewTodo(value)
      form.setFieldsValue({
        text: '',
      })
    }
  }

  const [form] = Form.useForm()

  return (
    <>
      <Form form={form}>
        <FormItem name="text">
          <Input
            placeholder="input placeholder"
            onKeyUp={(e) => {
              onkeyup(e)
            }}
            allowClear
          />
        </FormItem>
      </Form>

      {todos.map((item: ITodo) => {
        return <TodoItem key={item.id} todo={item} />
      })}
    </>
  )
}

export default observer(TodoList)
