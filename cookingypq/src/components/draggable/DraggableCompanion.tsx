import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';

interface DraggableCompanionProps {
  children?: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  boundaryPadding?: number;
  springStiffness?: number;
  springDamping?: number;
}

export const DraggableCompanion: React.FC<DraggableCompanionProps> = ({
  children,
  className = '',
  initialX = 100,
  initialY = 100,
  boundaryPadding = 20,
  springStiffness = 100,
  springDamping = 10
}) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 从localStorage读取保存的位置
  const getSavedPosition = () => {
    try {
      const saved = localStorage.getItem('draggable-companion-position');
      if (saved) {
        const { x, y } = JSON.parse(saved);
        return { x, y };
      }
    } catch (error) {
      console.warn('Failed to load saved position:', error);
    }
    return { x: initialX, y: initialY };
  };

  const savedPosition = getSavedPosition();
  const x = useMotionValue(savedPosition.x);
  const y = useMotionValue(savedPosition.y);

  // 边界约束变换
  const constrainedX = useTransform(x, (value) => {
    const maxX = windowSize.width - (containerRef.current?.offsetWidth || 0) - boundaryPadding;
    return Math.max(boundaryPadding, Math.min(value, maxX));
  });

  const constrainedY = useTransform(y, (value) => {
    const maxY = windowSize.height - (containerRef.current?.offsetHeight || 0) - boundaryPadding;
    return Math.max(boundaryPadding, Math.min(value, maxY));
  });

  // 保存位置到localStorage
  const savePosition = (newX: number, newY: number) => {
    try {
      localStorage.setItem('draggable-companion-position', JSON.stringify({ x: newX, y: newY }));
    } catch (error) {
      console.warn('Failed to save position:', error);
    }
  };

  // 更新窗口尺寸
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // 处理拖拽结束
  const handleDragEnd = (_event: any, info: PanInfo) => {
    const newX = x.get() + info.offset.x;
    const newY = y.get() + info.offset.y;
    
    // 应用边界约束
    const maxX = windowSize.width - (containerRef.current?.offsetWidth || 0) - boundaryPadding;
    const maxY = windowSize.height - (containerRef.current?.offsetHeight || 0) - boundaryPadding;
    
    const constrainedNewX = Math.max(boundaryPadding, Math.min(newX, maxX));
    const constrainedNewY = Math.max(boundaryPadding, Math.min(newY, maxY));
    
    x.set(constrainedNewX);
    y.set(constrainedNewY);
    
    // 保存位置
    savePosition(constrainedNewX, constrainedNewY);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`fixed z-50 cursor-grab active:cursor-grabbing ${className}`}
      style={{
        x: constrainedX,
        y: constrainedY
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: springStiffness,
        damping: springDamping
      }}
    >
      {children || (
        <div className="w-16 h-16 bg-green-400 border-2 border-white rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
          🎮
        </div>
      )}
    </motion.div>
  );
};
