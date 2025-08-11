import React, { useEffect, useRef } from 'react';

interface FloatingButtonProps {
  children: React.ReactNode;
  animationType: 'irregular' | 'leftToRight' | 'rightToLeft' | 'sineWave' | 'cosineWave' | 'spiral' | 'figure8';
  className?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  animationType,
  className = ''
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    
    if (animationType === 'irregular') {
      // 不规则运动 - 使用随机路径
      let animationId: number;
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用多个正弦波创建复杂的运动路径
        const x = Math.sin(elapsed * 0.001) * 100 + Math.sin(elapsed * 0.0007) * 50;
        const y = Math.cos(elapsed * 0.0008) * 80 + Math.sin(elapsed * 0.0012) * 40;
        
        button.style.transform = `translate(${x}px, ${y}px)`;
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } else if (animationType === 'sineWave') {
      // 正弦波轨迹 - 水平正弦运动，更加平滑
      let animationId: number;
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用更小的振幅和更慢的频率，让动画更舒适
        const x = Math.sin(elapsed * 0.001) * 80;
        const y = Math.sin(elapsed * 0.0008) * 40;
        
        button.style.transform = `translate(${x}px, ${y}px)`;
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } else if (animationType === 'cosineWave') {
      // 余弦波轨迹 - 垂直余弦运动，更加平滑
      let animationId: number;
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用更小的振幅和更慢的频率，让动画更舒适
        const x = Math.cos(elapsed * 0.001) * 70;
        const y = Math.cos(elapsed * 0.0012) * 50;
        
        button.style.transform = `translate(${x}px, ${y}px)`;
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } else if (animationType === 'spiral') {
      // 螺旋轨迹 - 螺旋形运动，更加平滑
      let animationId: number;
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用更小的螺旋半径和更慢的旋转速度
        const radius = (elapsed * 0.05) % 60;
        const angle = elapsed * 0.002;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        button.style.transform = `translate(${x}px, ${y}px)`;
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } else if (animationType === 'figure8') {
      // 8字形轨迹 - 8字形运动，更加平滑
      let animationId: number;
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用更小的振幅和更慢的频率，让8字形更平滑
        const t = elapsed * 0.0008;
        const x = Math.sin(t) * 70;
        const y = Math.sin(t) * Math.cos(t) * 40;
        
        button.style.transform = `translate(${x}px, ${y}px)`;
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [animationType]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'irregular':
        return 'floating-irregular';
      case 'leftToRight':
        return 'floating-left-to-right';
      case 'rightToLeft':
        return 'floating-right-to-left';
      case 'sineWave':
        return 'floating-sine-wave';
      case 'cosineWave':
        return 'floating-cosine-wave';
      case 'spiral':
        return 'floating-spiral';
      case 'figure8':
        return 'floating-figure8';
      default:
        return '';
    }
  };

  return (
    <div 
      ref={buttonRef}
      className={`floating-button ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
