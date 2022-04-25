import { FC } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '@store/index'
import TodoList from '@features/TodoList'

const TodoContainer: FC = () => {
  const {
    todoStore: { todos },
  } = useStores()

  return <TodoList todos={todos} />
}

export default observer(TodoContainer)
