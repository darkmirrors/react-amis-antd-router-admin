// ./src/stores/index.ts
import { createContext, useContext } from 'react'
import { STORE_TODO, TodoStore } from '@domain/todo/store/todo.store'

function createStores() {
  return {
    [STORE_TODO]: new TodoStore(),
  }
}

const stores = createStores()

const StoresContext = createContext(stores)

// hooks 使用笔记看这里 -> https://github.com/olivewind/blog/issues/1
const useStores = () => useContext(StoresContext)

export { stores, useStores, StoresContext }
