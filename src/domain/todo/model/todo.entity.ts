import { ITodo } from '@/types/todo'

export abstract class TodoRepositoryABS {
  abstract updateTodos(todos: ITodo[]): void
}
