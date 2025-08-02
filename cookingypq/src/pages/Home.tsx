import React, { useState } from 'react';
import { SplitText } from '../components/animations/SplitText';
import { GlitchText } from '../components/animations/GlitchText';
import { TypewriterText } from '../components/animations/TypewriterText';
import FuzzyText from '../components/animations/FuzzyText';
import ScrambledText from '../components/animations/ScrambledText';
import { DraggableCompanion } from '../components/draggable/DraggableCompanion';
import { RetroButton } from '../components/ui/RetroButton';
import { PixelCard } from '../components/ui/PixelCard';
import { Button } from '../components/ui/8bit/button';

export const Home: React.FC = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* 主标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-pixel text-white mb-8">
            <ScrambledText
              radius={150}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              cookingypq
            </ScrambledText>
          </h1>
          
          {/* Fuzzy Text 演示 */}
          <div className="mb-8">
            <FuzzyText 
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              color="#FFFFFF"
              fontSize="clamp(1.5rem, 6vw, 4rem)"
            >
              love rust && zero-knowledge proof
            </FuzzyText>
          </div>

          {/* 三个按钮 */}
          <div className="flex justify-center space-x-4 mb-16">
            <Button variant="outline" size="lg" onClick={() => alert('BLOG')}>
              BLOG
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://x.com/peiqing6888', '_blank')}
            >
              X
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://github.com/cookingypq', '_blank')}
            >
              CODE
            </Button>
          </div>
        </div>

        {/* 特性展示区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PixelCard 
            title="复古8-bit风格" 
            variant="success"
            className="h-full"
          >
            <p className="text-sm text-white">采用经典的8-bit像素风格设计，营造复古游戏氛围</p>
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
            <p className="text-sm text-white">页面上的游戏手柄图标可以自由拖拽，位置会自动保存</p>
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
            <p className="text-sm text-white">使用TypeScript + Tailwind CSS + Bun构建，性能优异</p>
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
            <p className="text-sm text-white">包含SplitText、Typewriter、Glitch、Fuzzy等多种动画效果</p>
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
            <p className="text-sm text-white">完美适配桌面、平板、手机等各种设备尺寸</p>
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
            <p className="text-sm text-white">高度模块化的组件设计，易于维护和扩展</p>
            <div className="mt-4">
              <RetroButton size="sm" variant="secondary">
                组件文档
              </RetroButton>
            </div>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};
