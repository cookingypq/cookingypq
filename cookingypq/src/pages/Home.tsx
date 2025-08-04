import React, { useState, useEffect } from 'react';
import { SplitText } from '../components/animations/SplitText';
import { GlitchText } from '../components/animations/GlitchText';
import { TypewriterText } from '../components/animations/TypewriterText';
import FuzzyText from '../components/animations/FuzzyText';
import ScrambledText from '../components/animations/ScrambledText';
import { DraggableCompanion } from '../components/draggable/DraggableCompanion';
import { RetroButton } from '../components/ui/RetroButton';
import { PixelCard } from '../components/ui/PixelCard';
import { Button } from '../components/ui/8bit/button';
import CurvedLoop from '../components/CurvedLoop';

export const Home: React.FC = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 确保组件已加载
    setIsLoaded(true);
    console.log('Home component loaded');
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-pixel">Loading...</div>
      </div>
    );
  }

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
          <div className="mb-8 flex justify-center">
            <div className="max-w-full px-4 text-center">
              <div 
                className="inline-block"
                style={{
                  minWidth: 'fit-content',
                  width: 'max-content',
                  position: 'relative'
                }}
              >
                <ScrambledText
                  radius={150}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                  className="text-white font-pixel leading-tight whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(1rem, 4vw, 3rem)',
                    fontFamily: "'Press Start 2P', monospace",
                    fontWeight: 'bold',
                    display: 'inline-block',
                    minWidth: 'fit-content',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  rust & zero-knowledge proof
                </ScrambledText>
              </div>
            </div>
          </div>

          {/* 三个按钮 */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button 
              variant="default" 
              size="lg" 
              font="retro" 
              className="min-w-[120px] text-lg font-bold bg-black border border-white text-white"
              onClick={() => alert('BLOG')}
            >
              BLOG
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="min-w-[120px] text-lg font-bold bg-black border border-white text-white"
              onClick={() => window.open('https://x.com/peiqing6888', '_blank')}
            >
              X
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="min-w-[120px] text-lg font-bold bg-black border border-white text-white"
              onClick={() => window.open('https://github.com/cookingypq', '_blank')}
            >
              CODE
            </Button>
          </div>

          {/* CurvedLoop 组件 */}
          <div className="w-full max-w-6xl mx-auto mb-16">
            <CurvedLoop 
              marqueeText="What? You haven't tried turning me yet? What? You haven't tried turning me yet?"
              speed={2}
              curveAmount={300}
              direction="left"
              interactive={true}
              className="text-4xl md:text-6xl font-pixel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
