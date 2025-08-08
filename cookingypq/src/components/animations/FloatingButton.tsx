import React, { useEffect, useRef } from 'react';

interface FloatingButtonProps {
  children: React.ReactNode;
  animationType: 'irregular' | 'leftToRight' | 'rightToLeft';
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
