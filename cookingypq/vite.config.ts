import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // 移除 base 配置，让 Vite 自动检测
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    // 添加构建优化
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // 确保资源路径正确
    assetsDir: 'assets',
  },
})