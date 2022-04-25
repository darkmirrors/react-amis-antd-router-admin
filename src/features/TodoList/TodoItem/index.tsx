import { FC } from 'react'
import { Checkbox } from 'antd'
import { useStores } from '@store/index'
import { CloseOutlined } from '@ant-design/icons'
import { ITodo } from '@/types/todo'

interface IProps {
  todo: ITodo
}

const TodoItem: FC<IProps> = ({ todo }) => {
  const { todoStore } = useStores()
  const onChange = () => {
    todoStore.toggleStatusById(todo.id)
  }
  const onClick = () => {
    todoStore.removeById(todo.id)
  }
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center">
        <Checkbox onChange={onChange} checked={todo.done} value={todo.done} />
        <div>{todo.name}</div>
      </div>

      <CloseOutlined onClick={onClick} />
    </div>
  )
}

export default TodoItem
