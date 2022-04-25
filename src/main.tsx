import './styles/tailwind.css'
// vite.config.ts 修改 css.preprocessorOptions 来修改 antd 变量来设置样式
import 'antd/dist/antd.less'
import 'amis/lib/themes/default.css'
import 'amis/lib/themes/antd.css'
import './styles/amis_antd.css'

import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { stores, StoresContext } from '@core/store'
import { ToastComponent, AlertComponent } from 'amis'

import App from './pages/App'

// const root = createRoot(document.getElementById('root') as HTMLElement)

/**
 * TODO 如果使用react18的启动方式，会导致在切换页面的时候触发报错
 * 具体表现为普通页面和amis的页面切换会导致整个程序的crash，具体原因待确认？
 * 1. amis的使用问题？
 * 2. mobx 和 react的兼容问题？
 */
// root.render(
ReactDom.render(
  // <React.StrictMode>
  <StoresContext.Provider value={stores}>
    <Router>
      <ToastComponent key="toast" position="top-right" />
      <AlertComponent key="alert" />
      <App />
    </Router>
  </StoresContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
)
