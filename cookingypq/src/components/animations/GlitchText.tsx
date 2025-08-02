import React, { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: number;
  duration?: number;
  frequency?: number;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 0.3,
  duration = 200,
  frequency = 0.1
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const startGlitch = () => {
    setIsGlitching(true);
    const originalText = text;
    
    // 创建故障效果
    const glitchInterval = setInterval(() => {
      const newText = originalText.split('').map((char) => {
        if (Math.random() < intensity) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      }).join('');
      
      setGlitchText(newText);
    }, 50);

    // 停止故障效果
    timeoutRef.current = setTimeout(() => {
      clearInterval(glitchInterval);
      setGlitchText(originalText);
      setIsGlitching(false);
    }, duration);
  };

  useEffect(() => {
    const startRandomGlitch = () => {
      if (Math.random() < frequency) {
        startGlitch();
      }
    };

    intervalRef.current = setInterval(startRandomGlitch, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [intensity, duration, frequency, text]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'text-red-500' : ''}`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 red, -2px 0 cyan, 0 2px green' 
          : 'none',
        transition: 'text-shadow 0.1s ease-in-out'
      }}
    >
      {glitchText}
    </span>
  );
};
