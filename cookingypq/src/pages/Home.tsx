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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-pixel text-white mb-8 leading-tight px-2">
            <ScrambledText
              radius={150}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
              className="break-words hyphens-auto"
              style={{
                fontSize: 'clamp(1.5rem, 8vw, 8rem)',
                lineHeight: '1.1',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              cookingypq
            </ScrambledText>
          </h1>
          
          {/* Fuzzy Text 演示 */}
          <div className="mb-8 flex justify-center">
            <div className="max-w-full px-6 text-center sm:px-4">
              <div 
                className="inline-block w-full sm:w-auto"
                style={{
                  minWidth: 'fit-content',
                  width: '100%',
                  position: 'relative'
                }}
              >
                <ScrambledText
                  radius={150}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                  className="text-white font-pixel leading-tight break-words hyphens-auto max-w-[85vw] mx-auto sm:max-w-none sm:whitespace-nowrap -translate-x-6 sm:translate-x-0"
                  style={{
                    fontSize: 'clamp(0.75rem, 3.5vw, 2.5rem)',
                    fontFamily: "'Press Start 2P', monospace",
                    fontWeight: 'bold',
                    display: 'inline-block',
                    minWidth: 'fit-content',
                    position: 'relative',
                    zIndex: 1,
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                    maxWidth: '100%',
                    padding: '0 0.5rem',
                    lineHeight: '1.3',
                    textAlign: 'center',
                    whiteSpace: 'normal'
                  }}
                >
                  rust & zero-knowledge proof
                </ScrambledText>
              </div>
            </div>
          </div>

          {/* 三个按钮 */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              variant="default" 
              size="lg" 
              font="retro" 
              className="w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
              onClick={() => alert('BLOG')}
            >
              BLOG
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
              onClick={() => window.open('https://x.com/peiqing6888', '_blank')}
            >
              X
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
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
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-pixel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
