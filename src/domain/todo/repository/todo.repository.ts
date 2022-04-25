import { ITodo } from '@/types/todo'
import { TodoRepositoryABS } from '../model/todo.entity'

class TodoRepository implements TodoRepositoryABS {
  updateTodos(todos: ITodo[]) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

export default new TodoRepository()
