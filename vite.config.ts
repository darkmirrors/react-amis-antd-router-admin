import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// 1. TODO 由于 amis 用 vite 以后动态require的模块，如echarts、colorPicker 都不能正常加载
// 尝试用 https://github.com/vitejs/vite/issues/5308 来解决，但未成功，需要再次调研
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // 1.1 加入 viteCommonjs 插件
    // viteCommonjs(),
  ],
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
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    // commonjsOptions: {
    //   // 由于amis里面使用了动态的require
    //   ignoreDynamicRequires: true,
    // },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, './src/core'),
      '@domain': resolve(__dirname, './src/domain'),
      '@config': resolve(__dirname, './src/config'),
      '@features': resolve(__dirname, './src/features'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils'),
      '@public': resolve(__dirname, './src/public'),
      '@assets': resolve(__dirname, './src/assets'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/core/store'),
      '@services': resolve(__dirname, './src/services'),
      '@types': resolve(__dirname, './types'),
      // 'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // 1.2 加入 esbuildCommonjs 插件
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        // esbuildCommonjs(['amis']),
      ],
    },
  },
})
