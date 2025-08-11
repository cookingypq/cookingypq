import React, { useState, useEffect } from 'react';
import ScrambledText from '../components/animations/ScrambledText';
import { Button } from '../components/ui/8bit/button';
import { FloatingButton } from '../components/animations/FloatingButton';

import CurvedLoop from '../components/CurvedLoop';

export const Home: React.FC = () => {
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
        <div className="text-center mb-16 title-container">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-pixel text-white mb-8 leading-tight px-2 text-stable">
            <ScrambledText
              radius={150}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
              className="break-words hyphens-auto"
              style={{
                fontSize: 'clamp(1.2rem, 6vw, 5rem)',
                lineHeight: '1.2',
                wordBreak: 'break-word',
                hyphens: 'auto',
                fontWeight: 'normal'
              }}
            >
              peiqing.cook
            </ScrambledText>
          </h1>
          
          {/* Fuzzy Text 演示 */}
          <div className="mb-8 flex justify-center">
            <div className="max-w-full text-center text-stable">
              <div 
                className="inline-block w-full"
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
                  className="text-white font-pixel leading-tight break-words hyphens-auto max-w-[90vw] mx-auto sm:max-w-none sm:whitespace-nowrap"
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
              className="w-full max-w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
              onClick={() => alert('BLOG')}
            >
              BLOG
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="w-full max-w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
              onClick={() => window.open('https://x.com/peiqing6888', '_blank')}
            >
              X
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              font="retro"
              className="w-full max-w-[160px] sm:w-auto min-w-[120px] text-base sm:text-lg font-bold bg-black border border-white text-white px-4 py-2 sm:px-8 sm:py-3"
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

          {/* Tesla-asr-black GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://nockchain.com', '_blank')}
              >
                <img 
                  src="/gif/tesla-asr-black.gif"
                  alt="Tesla-asr-black"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(250px, 60vw, 500px)',
                    height: 'auto',
                    maxWidth: '500px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* Nockchain Shovel GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://github.com/cookingypq/NqkXprv', '_blank')}
              >
                <img 
                  src="/gif/nockchain.png"
                  alt="Nockchain Shovel"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(125px, 30vw, 250px)',
                    height: 'auto',
                    maxWidth: '250px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* 保时捷博物馆 GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://porsche.com/museum', '_blank')}
              >
                <img 
                  src="/gif/porsche-museum.gif"
                  alt="Porsche Museum - 25 Years"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(170px, 40vw, 300px)',
                    height: 'auto',
                    maxWidth: '300px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* 黑魂3 GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://www.darksouls3.com', '_blank')}
              >
                <img 
                  src="/gif/darksoul-white.gif"
                  alt="Dark Souls 3"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(120px, 30vw, 300px)',
                    height: 'auto',
                    maxWidth: '200px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* 血源 GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://www.playstation.com/en-us/games/bloodborne/', '_blank')}
              >
                <img 
                  src="/gif/blood-white.png"
                  alt="Bloodborne"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(170px, 40vw, 300px)',
                    height: 'auto',
                    maxWidth: '300px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* 只狼 GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://www.sekiro.jp/', '_blank')}
              >
                <img 
                  src="/gif/sekiro.gif"
                  alt="Sekiro: Shadows Die Twice"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(170px, 40vw, 300px)',
                    height: 'auto',
                    maxWidth: '300px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>

          {/* 老头环 GIF 按钮 */}
          <div className="flex justify-center mb-16">
            <FloatingButton animationType="celestialOrbit">
              <Button 
                variant="ghost" 
                size="lg" 
                font="retro"
                className="relative overflow-hidden bg-transparent border-none hover:bg-transparent transition-all duration-300 p-0 h-auto"
                onClick={() => window.open('https://en.bandainamcoent.eu/elden-ring', '_blank')}
              >
                <img 
                  src="/gif/ring.gif"
                  alt="Elden Ring"
                  className="block hover:scale-105 transition-transform duration-300"
                  style={{
                    width: 'clamp(170px, 40vw, 300px)',
                    height: 'auto',
                    maxWidth: '300px',
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </FloatingButton>
          </div>
        </div>
      </div>
    </div>
  );
};
