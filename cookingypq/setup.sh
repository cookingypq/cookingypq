#!/bin/bash

# CookingYPQ 项目初始化脚本
# 自动设置开发环境和基础文件结构

set -e

echo "🎮 欢迎使用 CookingYPQ 项目初始化脚本!"
echo "=========================================="

# 检查 Bun 是否安装
if ! command -v bun &> /dev/null; then
    echo "❌ 错误: 未找到 Bun"
    echo "请先安装 Bun: https://bun.sh/"
    exit 1
fi

echo "✅ Bun 已安装: $(bun --version)"

# 创建基础目录结构
echo "📁 创建项目目录结构..."
mkdir -p src/{components/{ui,layout,draggable,animations},pages,hooks,utils,styles,types}
mkdir -p public/{images,fonts}
mkdir -p docs

# 创建基础配置文件
echo "⚙️ 创建配置文件..."

# TypeScript 配置
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# Vite 配置
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
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
})
EOF

# Tailwind 配置
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Press Start 2P', 'monospace'],
        'retro': ['Courier New', 'monospace'],
      },
      colors: {
        '8bit': {
          'black': '#000000',
          'white': '#FFFFFF',
          'green': '#00FF00',
          'red': '#FF0000',
          'blue': '#0000FF',
          'yellow': '#FFFF00',
          'cyan': '#00FFFF',
          'magenta': '#FF00FF',
        }
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'pixelate': 'pixelate 0.5s ease-in-out',
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        pixelate: {
          '0%': { filter: 'pixelate(0px)' },
          '100%': { filter: 'pixelate(4px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
EOF

# PostCSS 配置
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# ESLint 配置
cat > .eslintrc.cjs << 'EOF'
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
EOF

# Prettier 配置
cat > .prettierrc << 'EOF'
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
EOF

# 创建基础样式文件
echo "🎨 创建样式文件..."

cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

:root {
  font-family: 'Courier New', monospace;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #0a0a0a;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}
EOF

cat > src/styles/8bit.css << 'EOF'
/* 8-bit 样式系统 */
.pixel-border {
  border: 2px solid #000;
  box-shadow: 
    2px 2px 0 #000,
    4px 4px 0 #000,
    6px 6px 0 #000;
}

.pixel-text {
  font-family: 'Press Start 2P', monospace;
  text-shadow: 2px 2px 0 #000;
}

.retro-button {
  background: linear-gradient(45deg, #fff 0%, #ccc 50%, #fff 100%);
  border: 2px solid #000;
  box-shadow: 
    2px 2px 0 #000,
    inset -2px -2px 0 #999,
    inset 2px 2px 0 #fff;
}

.retro-button:hover {
  transform: translateY(1px);
  box-shadow: 
    1px 1px 0 #000,
    inset -1px -1px 0 #999,
    inset 1px 1px 0 #fff;
}

.retro-button:active {
  transform: translateY(2px);
  box-shadow: 
    0px 0px 0 #000,
    inset -2px -2px 0 #999,
    inset 2px 2px 0 #fff;
}

.glitch-effect {
  position: relative;
}

.glitch-effect::before,
.glitch-effect::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-effect::before {
  animation: glitch-1 0.3s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-effect::after {
  animation: glitch-2 0.3s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}
EOF

# 创建基础组件文件
echo "🧩 创建基础组件..."

cat > src/App.tsx << 'EOF'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import './styles/globals.css';
import './styles/8bit.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
EOF

cat > src/main.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
EOF

cat > index.html << 'EOF'
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CookingYPQ - 复古与现代的完美融合</title>
    <meta name="description" content="复刻Patterns in the Void网站的现代化实现" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# 创建基础组件
cat > src/components/layout/Layout.tsx << 'EOF'
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
EOF

cat > src/components/layout/Header.tsx << 'EOF'
import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-black border-b-2 border-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-pixel text-green-400 hover:text-green-300">
          CookingYPQ
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-green-400 transition-colors">
            首页
          </Link>
          <Link to="/about" className="text-white hover:text-green-400 transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
};
EOF

cat > src/components/layout/Footer.tsx << 'EOF'
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-2 border-white p-4 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          © 2024 CookingYPQ - 让复古与现代完美融合 🎮✨
        </p>
      </div>
    </footer>
  );
};
EOF

cat > src/pages/Home.tsx << 'EOF'
import React from 'react';
import { SplitText } from '../components/animations/SplitText';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-pixel text-green-400 mb-8">
          <SplitText text="CookingYPQ" />
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          复刻Patterns in the Void网站的现代化实现
        </p>
        <div className="bg-gray-800 border-2 border-white p-8 rounded-lg">
          <h2 className="text-2xl font-pixel text-yellow-400 mb-4">
            特性预览
          </h2>
          <ul className="text-left space-y-2">
            <li className="text-green-400">✅ 复古8-bit风格设计</li>
            <li className="text-green-400">✅ 可拖拽的伴偶效果</li>
            <li className="text-green-400">✅ 现代技术栈 (TypeScript + Tailwind + Bun)</li>
            <li className="text-green-400">✅ 文本动画效果</li>
            <li className="text-green-400">✅ 响应式设计</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
EOF

# 创建基础动画组件
cat > src/components/animations/SplitText.tsx << 'EOF'
import React, { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.05
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.children;
    let currentDelay = delay;

    Array.from(chars).forEach((char, index) => {
      setTimeout(() => {
        char.classList.add('opacity-100');
      }, currentDelay);
      currentDelay += stagger * 1000;
    });
  }, [text, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block opacity-0 transition-opacity duration-300"
          style={{ transitionDelay: `${(delay + stagger * index) * 1000}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
EOF

# 安装依赖
echo "📦 安装项目依赖..."
bun install

echo ""
echo "🎉 项目初始化完成!"
echo "=========================================="
echo ""
echo "🚀 开始开发:"
echo "  bun run dev"
echo ""
echo "📦 构建生产版本:"
echo "  bun run build"
echo ""
echo "🧪 运行测试:"
echo "  bun run test"
echo ""
echo "📚 查看文档:"
echo "  docs/产品设计文档.md"
echo "  docs/工程分工文档.md"
echo "  docs/技术实现指南.md"
echo ""
echo "🎮 开始你的复古与现代之旅吧!" 