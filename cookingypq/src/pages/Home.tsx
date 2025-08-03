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
          <div className="mb-8 flex justify-center">
            <div className="max-w-full px-4 text-center">
              <ScrambledText
                radius={150}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
                className="text-white font-pixel break-words leading-tight"
                style={{
                  fontSize: 'clamp(1rem, 4vw, 3rem)',
                  fontFamily: "'Press Start 2P', monospace",
                  fontWeight: 'bold'
                }}
              >
                rust & zero-knowledge proof
              </ScrambledText>
            </div>
          </div>

          {/* 三个按钮 */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              font="retro" 
              className="min-w-[120px] text-lg font-bold"
              onClick={() => alert('BLOG')}
            >
              BLOG
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              font="retro"
              className="min-w-[120px] text-lg font-bold"
              onClick={() => window.open('https://x.com/peiqing6888', '_blank')}
            >
              X
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              font="retro"
              className="min-w-[120px] text-lg font-bold"
              onClick={() => window.open('https://github.com/cookingypq', '_blank')}
            >
              CODE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
