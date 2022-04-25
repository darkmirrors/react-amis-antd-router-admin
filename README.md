# Starter


## 架构

- [x] [React 18](https://zh-hant.reactjs.org/)
- [x] [Ant.d](https://ant.design/docs/spec/introduce-cn)
- [x] [Tailwindcss](https://www.tailwindcss.cn/)
- [x] [TS](https://www.tslang.cn/)
- [x] [React-router-dom](http://www.reactrouter.cn/)
- [x] [Mobx](https://cn.mobx.js.org/)
- [x] [jest](https://www.jestjs.cn/)
- [x] [Amis](https://aisuda.bce.baidu.com/amis/examples/theme)
- [x] [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/zh-CN/get-started/)
- [x] [Vite](https://cn.vitejs.dev/)]
- [x] [Axios](https://www.axios-http.cn/)
- [x] [Lodash](https://www.lodashjs.com/)
- [x] [Rxjs](https://cn.rx.js.org/)

## 项目目录规范
目录规范和思想源至于下面这篇文章
> Inspired by https://phodal.github.io/clean-frontend/

> [Example](https://github.dev/phodal/clean-frontend/blob/master/src/app/domain/elephant/model/elephant.entity.ts)

基础目录
```
.
├── dist                    // build 的目录
│   ├── assets              // 静态资源目录
│   └── index.html          // 出口模板
├── src
│   ├── core			          // 核心代码，包含基本服务和基础代码
│   ├── domain				      // 业务层代码，包含每个业务的单独 Clean 架构内容
│   │   └── todo	          // *某一具体的业务
│   ├── features			      // 公共页面组件
│   ├── public              // 其他公共资源
│   ├── pages 				      // 公共页面
│   ├── types 				      // 公共类型定义目录
│   └── shared				      // 共享目录
├── index.html // 页面模板
├── package-lock.json
├── package.json
├── postcss.config.js       // postcss 配置
├── tailwind.config.js      // taiwind配置
├── README.md
├── tsconfig.json           // ts配置
├── tsconfig.node.json      // ts配置
└── vite.config.ts // vite 配置
```

对应的 todo 是某一个具体的业务，在该目录下包含了一个完整的 [Clean Architecture](https://phodal.github.io/clean-frontend/#clean-architecture--mvp-with-bff)，相应的目录和文件如下所示：

```
├── model
│   ├── todo.entity.ts                            // 数据实体，简单的数据模型，用来表示核心的业务逻辑
│   └── todo.model.ts                             // 核心业务模型
├── repository
│   ├── todo.mapper.ts                            // 映射层，用于核心实体层映射，或映射到核心实体层。
│   └── todo.repository.ts                        // Repository，用于读取和存储数据。
```

Features 公共的业务组件目录
```
├── Xcomponent
│    ├── Xcomponent.tsx                           // main view (组件视图，只写视图及视图相关逻辑，任何计算、转换数据在repository或者store中进行)
│    ├── Xcomponent.module.less                   // css style (样式)
│    ├── Xcomponent.d.ts                          // component type props definition (ts类型)
│    ├── Xcomponent.util.ts (optional)            // complex component process (复杂组件逻辑处理)
│    ├── Xcomponent.config.ts (optional)          // constant config （常量配置）
│    ├── Xcomponent.stories.tsx (optional)        // storybook file for ui test （ui 组件化测试构建）
│    ├── Xcomponent.test.tsx (optional)           // jest unit test （单元测试）
│    └── Xcomponent.store.ts (optional)           // manage component store (组件自身状态层，可选)
```

## 操作步骤

### 1. 安装依赖
```
npm i | yarn add
```

### 2. 准备工作

#### 2.1 配置 vscode

新增 .editorconfig 配置文件（项目已包含不用新增，这里只是做标记）

修改 editor.json，增加以下配置

```
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

**vscode 安装插件**

`eslint`、`prettier`

## 修改样式

### 修改 Ant.d 样式

在 `vite.config.ts` 中的 `css`中修改变量

```
css: {
  preprocessorOptions: {
    less: {
      modifyVars: {
        // 在此处通过修改 antd 的 less 变量来进行样式适配
        // 'primary-color': '#645AFF',
        // 'text-color': '#ff0000',
      },
      javascriptEnabled: true,
    },
  },
}
```

### [修改 Amis 样式](https://aisuda.bce.baidu.com/amis/zh-CN/style/index)

在`src/styles/amis_antd.css`修改相关样式

## 部署

先构建出 dist 文件
```
npm run build
```

由于使用history路由，nginx 增加如下配置
```
location / {
  add_header Cache-Control 'no-store, no-cache';    // 设置不缓存
  try_files $uri $uri/ /index.html;
}
```

<!-- ## 代码提交规范
整体使用 `commitlint`、`commitizen`、`husky` 来规范提交说明

推荐使用命令来提交代码，通过问答的方式写log
```
npm run commit
```

如果使用 `git commit` 也会触发 `commit-msg` 钩子，需要符合 `"${type}: ${msg}"` 的提交规范

### 参考文献
https://juejin.cn/post/7047682306294677512
https://juejin.cn/post/7053730154710827045
https://github.com/conventional-changelog/commitlint/#what-is-commitlint -->

## 版本号管理

默认情况下，工具会自动根据 主版本（ major ），次版本（ minor ） or 修订版（ patch ） 规则生成版本号，例如如果你 package.json 中的version 为 1.0.0, 那么执行后版本号则是：1.0.1

```
standard-version
```

### 参考
[语义化版本](https://semver.org/)

## 参考文献

- [clean-architecture](https://phodal.github.io/clean-frontend/#clean-architecture--mvp-with-bff)
- [Git | 前端门神 git-hooks 的使用](https://juejin.cn/post/7025880096791592968)
- [TS + react 脚手架说明](https://juejin.cn/post/6953862743808016397#heading-2)
