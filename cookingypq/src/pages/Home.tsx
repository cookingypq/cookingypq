import React, { useState } from 'react';
import { SplitText } from '../components/animations/SplitText';
import { GlitchText } from '../components/animations/GlitchText';
import { TypewriterText } from '../components/animations/TypewriterText';
import FuzzyText from '../components/animations/FuzzyText';
import { DraggableCompanion } from '../components/draggable/DraggableCompanion';
import { RetroButton } from '../components/ui/RetroButton';
import { PixelCard } from '../components/ui/PixelCard';

export const Home: React.FC = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 可拖拽伴偶 */}
      <DraggableCompanion>
        <div className="w-20 h-20 bg-green-500 border-4 border-white rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          🎮
        </div>
      </DraggableCompanion>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* 主标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-pixel text-green-400 mb-8">
            <SplitText text="CookingYPQ" />
          </h1>
          
          <div className="mb-8">
            <TypewriterText 
              text="复刻Patterns in the Void网站的现代化实现"
              className="text-xl text-gray-300"
              speed={50}
              onComplete={() => setTypingComplete(true)}
            />
          </div>

          {/* 故障效果演示 */}
          <div className="mb-8">
            <button 
              onClick={() => setShowGlitch(!showGlitch)}
              className="text-2xl font-pixel text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              {showGlitch ? (
                <GlitchText text="故障效果演示" intensity={0.5} />
              ) : (
                "点击查看故障效果"
              )}
            </button>
          </div>

          {/* Fuzzy Text 演示 */}
          {typingComplete && (
            <div className="mb-8">
              <FuzzyText 
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                color="#00ff00"
              >
                Fuzzy Text Effect
              </FuzzyText>
            </div>
          )}
        </div>

        {/* 特性展示区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PixelCard 
            title="复古8-bit风格" 
            variant="success"
            className="h-full"
          >
            <p className="text-sm">采用经典的8-bit像素风格设计，营造复古游戏氛围</p>
            <div className="mt-4">
              <RetroButton size="sm" onClick={() => alert('8-bit风格已启用！')}>
                了解更多
              </RetroButton>
            </div>
          </PixelCard>

          <PixelCard 
            title="可拖拽伴偶" 
            variant="default"
            className="h-full"
          >
            <p className="text-sm">页面上的游戏手柄图标可以自由拖拽，位置会自动保存</p>
            <div className="mt-4">
              <RetroButton size="sm" variant="secondary">
                试试拖拽
              </RetroButton>
            </div>
          </PixelCard>

          <PixelCard 
            title="现代技术栈" 
            variant="warning"
            className="h-full"
          >
            <p className="text-sm">使用TypeScript + Tailwind CSS + Bun构建，性能优异</p>
            <div className="mt-4">
              <RetroButton size="sm" variant="secondary">
                技术详情
              </RetroButton>
            </div>
          </PixelCard>

          <PixelCard 
            title="文本动画效果" 
            variant="error"
            className="h-full"
          >
            <p className="text-sm">包含SplitText、Typewriter、Glitch、Fuzzy等多种动画效果</p>
            <div className="mt-4">
              <RetroButton size="sm" variant="danger">
                动画演示
              </RetroButton>
            </div>
          </PixelCard>

          <PixelCard 
            title="响应式设计" 
            variant="success"
            className="h-full"
          >
            <p className="text-sm">完美适配桌面、平板、手机等各种设备尺寸</p>
            <div className="mt-4">
              <RetroButton size="sm">
                响应式测试
              </RetroButton>
            </div>
          </PixelCard>

          <PixelCard 
            title="组件化架构" 
            variant="default"
            className="h-full"
          >
            <p className="text-sm">高度模块化的组件设计，易于维护和扩展</p>
            <div className="mt-4">
              <RetroButton size="sm" variant="secondary">
                组件文档
              </RetroButton>
            </div>
          </PixelCard>
        </div>

        {/* 操作按钮区域 */}
        <div className="text-center space-x-4">
          <RetroButton size="lg" onClick={() => alert('开始探索！')}>
            开始探索
          </RetroButton>
          <RetroButton size="lg" variant="secondary" onClick={() => alert('查看源码！')}>
            查看源码
          </RetroButton>
          <RetroButton size="lg" variant="danger" onClick={() => alert('关于我们！')}>
            关于我们
          </RetroButton>
        </div>
      </div>
    </div>
  );
};
