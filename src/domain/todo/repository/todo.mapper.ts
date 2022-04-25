import { ITodo } from '@/types/todo'
import { pick } from 'ramda'
import { TodoModel } from '../model/todo.model'

export const mapTo = (entity: ITodo): TodoModel => {
  return pick(['name'], entity)
}
