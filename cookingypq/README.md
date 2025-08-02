# CookingYPQ

复刻 [Patterns in the Void](https://patternsinthevoid.net) 网站的现代化实现，使用现代技术栈重新构建。

## 🎮 特性

### 核心功能
- **复古8-bit风格设计** - 采用经典的像素风格，营造复古游戏氛围
- **可拖拽伴偶系统** - 页面上的游戏手柄图标可以自由拖拽，位置自动保存
- **文本动画效果** - 包含多种动画效果：
  - SplitText: 字符逐个显示动画
  - TypewriterText: 打字机效果
  - GlitchText: 故障效果
  - FuzzyText: 模糊效果（Canvas实现）
- **现代技术栈** - TypeScript + Tailwind CSS + Bun + React 18
- **响应式设计** - 完美适配桌面、平板、手机等各种设备
- **组件化架构** - 高度模块化的组件设计，易于维护和扩展

### 技术特性
- **8-bit UI组件库** - 集成8bitcn.com的复古组件
- **Framer Motion动画** - 流畅的拖拽和交互动画
- **状态管理** - 使用Zustand进行状态管理
- **类型安全** - 完整的TypeScript类型定义
- **性能优化** - 代码分割、懒加载、防抖节流

## 🚀 快速开始

### 环境要求
- Node.js 18+ 或 Bun 1.0+
- 现代浏览器支持

### 安装依赖
```bash
# 使用 Bun (推荐)
bun install

# 或使用 npm
npm install
```

### 开发模式
```bash
# 启动开发服务器
bun run dev

# 或使用 npm
npm run dev
```

### 构建生产版本
```bash
# 构建项目
bun run build

# 预览构建结果
bun run preview
```

## 🎨 组件使用

### 文本动画组件

#### SplitText - 字符分割动画
```tsx
import { SplitText } from '../components/animations/SplitText';

<SplitText text="Hello World" delay={0.5} stagger={0.1} />
```

#### TypewriterText - 打字机效果
```tsx
import { TypewriterText } from '../components/animations/TypewriterText';

<TypewriterText 
  text="这是一个打字机效果" 
  speed={100} 
  delay={0} 
  loop={false}
  onComplete={() => console.log('打字完成')}
/>
```

#### GlitchText - 故障效果
```tsx
import { GlitchText } from '../components/animations/GlitchText';

<GlitchText 
  text="故障效果演示" 
  intensity={0.3} 
  duration={200} 
  frequency={0.1}
/>
```

#### FuzzyText - 模糊效果
```tsx
import FuzzyText from '../components/animations/FuzzyText';

<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
  color="#00ff00"
>
  Fuzzy Text Effect
</FuzzyText>
```

### 拖拽组件

#### DraggableCompanion - 可拖拽伴偶
```tsx
import { DraggableCompanion } from '../components/draggable/DraggableCompanion';

<DraggableCompanion 
  initialX={100} 
  initialY={100}
  boundaryPadding={20}
>
  <div className="w-20 h-20 bg-green-500">🎮</div>
</DraggableCompanion>
```

### UI组件

#### RetroButton - 复古按钮
```tsx
import { RetroButton } from '../components/ui/RetroButton';

<RetroButton 
  variant="primary" 
  size="md" 
  onClick={() => alert('点击了按钮')}
>
  点击我
</RetroButton>
```

#### PixelCard - 像素卡片
```tsx
import { PixelCard } from '../components/ui/PixelCard';

<PixelCard 
  title="卡片标题" 
  variant="success"
  interactive={true}
  onClick={() => console.log('卡片被点击')}
>
  <p>卡片内容</p>
</PixelCard>
```

## 📁 项目结构

```
cookingypq/
├── src/
│   ├── components/
│   │   ├── animations/     # 文本动画组件
│   │   │   ├── SplitText.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   ├── GlitchText.tsx
│   │   │   └── FuzzyText.tsx
│   │   ├── draggable/      # 拖拽系统
│   │   │   └── DraggableCompanion.tsx
│   │   ├── ui/            # UI组件
│   │   │   ├── RetroButton.tsx
│   │   │   ├── PixelCard.tsx
│   │   │   └── 8bit/      # 8-bit组件库
│   │   └── layout/        # 布局组件
│   ├── pages/             # 页面组件
│   │   └── Home.tsx
│   ├── hooks/             # 自定义Hooks
│   ├── store/             # 状态管理
│   ├── styles/            # 样式文件
│   │   ├── globals.css
│   │   └── 8bit.css
│   └── utils/             # 工具函数
├── public/                # 静态资源
└── package.json
```

## 🎯 开发计划

### 第一阶段 ✅ (已完成)
- [x] 项目初始化
- [x] 基础布局组件
- [x] 拖拽伴偶系统
- [x] 文本动画系统
- [x] 8-bit UI组件集成
- [x] 主页实现

### 第二阶段 🔄 (进行中)
- [ ] 文章页面
- [ ] 路由系统完善
- [ ] 响应式优化
- [ ] 性能优化

### 第三阶段 📋 (计划中)
- [ ] SEO优化
- [ ] 测试覆盖
- [ ] 部署上线
- [ ] 文档完善

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Patterns in the Void](https://patternsinthevoid.net) - 设计灵感来源
- [8bitcn.com](https://8bitcn.com) - 8-bit UI组件库
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Tailwind CSS](https://tailwindcss.com) - CSS框架 