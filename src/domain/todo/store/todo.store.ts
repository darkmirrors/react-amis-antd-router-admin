import { ITodo } from '@/types/todo'
import { action, observable, computed, makeAutoObservable, configure } from 'mobx'
import todoRepository from '../repository/todo.repository'

configure({ isolateGlobalState: true })

const DEFAULT_ID = 0
let id = Number(localStorage.getItem('todoId') || DEFAULT_ID)

export class TodoStore {
  @observable todos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')

  constructor() {
    makeAutoObservable(this)
  }

  // 利用计算属性计算完成个未完成个数
  @computed get doneCount() {
    return this.todos.filter((todo) => todo.done).length
  }

  @computed get undoneCount() {
    return this.todos.filter((todo) => !todo.done).length
  }

  // 添加一个 Todo
  @action.bound addNewTodo(name: string, desc?: string) {
    const i = id++
    const todo = {
      name: name,
      desc: name + i,
      id: i,
      done: false,
    }
    this.todos = [...this.todos, todo]

    todoRepository.updateTodos(this.todos)
    localStorage.setItem('todoId', id.toString())
  }

  // 删除一个 Todo
  @action.bound removeById(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)

    todoRepository.updateTodos(this.todos)
  }

  // 切换 done 状态
  @action.bound toggleStatusById(id: number) {
    // console.log('toggleStatusById', id)
    this.todos = this.todos.map((todo) => {
      // console.log(todo.id, id)
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })

    todoRepository.updateTodos(this.todos)
  }
}

export const STORE_TODO = 'todoStore'
