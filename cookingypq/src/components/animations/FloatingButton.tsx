import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';

interface FloatingButtonProps {
  children: React.ReactNode;
  animationType: 'irregular' | 'leftToRight' | 'rightToLeft' | 'sineWave' | 'cosineWave' | 'spiral' | 'figure8' | 'celestialOrbit';
  className?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  animationType,
  className = ''
}) => {
  const [isDragged, setIsDragged] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const timeRef = useRef(0);
  
  // Motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Generate unique orbit parameters for celestialOrbit animation
  const getUniqueOrbitParams = () => {
    // Use a stable seed based on component instance
    const seed = Math.random() * 1000;
    
    return {
      baseSpeed: 0.0007 + (seed % 150) * 0.000004,
      semiMajorAxis: 90 + (seed % 80) * 1.5,
      semiMinorAxis: 35 + (seed % 50) * 1.2,
      eccentricity: 0.1 + (seed % 30) * 0.02,
      startAngle: (seed % 360) * (Math.PI / 180),
      orbitOffsetX: (seed % 120) - 60,
      orbitOffsetY: ((seed + 70) % 120) - 60,
      perturbationIntensity: 8 + (seed % 25),
      orbitTilt: (seed % 20) - 10
    };
  };

  const orbitParams = useRef(getUniqueOrbitParams()).current;

  // Animation using framer-motion's useAnimationFrame
  useAnimationFrame((time) => {
    timeRef.current = time;
    
    let animX = 0;
    let animY = 0;
    
    switch (animationType) {
      case 'irregular':
        // 不规则运动 - 使用随机路径
        animX = Math.sin(time * 0.001) * 100 + Math.sin(time * 0.0007) * 50;
        animY = Math.cos(time * 0.0008) * 80 + Math.sin(time * 0.0012) * 40;
        break;
        
      case 'sineWave':
        // 正弦波轨迹 - 水平正弦运动，更加平滑
        animX = Math.sin(time * 0.001) * 80;
        animY = Math.sin(time * 0.0008) * 40;
        break;
        
      case 'cosineWave':
        // 余弦波轨迹 - 垂直余弦运动，更加平滑
        animX = Math.cos(time * 0.001) * 70;
        animY = Math.cos(time * 0.0012) * 50;
        break;
        
      case 'spiral':
        // 螺旋轨迹 - 螺旋形运动，更加平滑
        const radius = (time * 0.05) % 60;
        const angle = time * 0.002;
        animX = Math.cos(angle) * radius;
        animY = Math.sin(angle) * radius;
        break;
        
      case 'figure8':
        // 8字形轨迹 - 8字形运动，更加平滑
        const t = time * 0.0008;
        animX = Math.sin(t) * 70;
        animY = Math.sin(t) * Math.cos(t) * 40;
        break;
        
      case 'celestialOrbit':
        // 天体公转轨迹 - 每个按钮都有独特的轨道参数
        const orbitTime = time * orbitParams.baseSpeed + orbitParams.startAngle;
        
        // 计算椭圆轨道上的位置
        let orbitX = orbitParams.semiMajorAxis * Math.cos(orbitTime);
        let orbitY = orbitParams.semiMinorAxis * Math.sin(orbitTime);
        
        // 应用离心率，让轨道更椭圆
        const distance = Math.sqrt(orbitX * orbitX + orbitY * orbitY);
        if (distance > 0) {
          orbitX = orbitX * (1 + orbitParams.eccentricity * Math.cos(orbitTime));
          orbitY = orbitY * (1 + orbitParams.eccentricity * Math.cos(orbitTime));
        }
        
        // 应用轨道倾斜（模拟不同轨道平面的倾斜）
        const tiltRad = orbitParams.orbitTilt * (Math.PI / 180);
        const xTilted = orbitX * Math.cos(tiltRad) - orbitY * Math.sin(tiltRad);
        const yTilted = orbitX * Math.sin(tiltRad) + orbitY * Math.cos(tiltRad);
        orbitX = xTilted;
        orbitY = yTilted;
        
        // 添加轨道中心偏移
        orbitX += orbitParams.orbitOffsetX;
        orbitY += orbitParams.orbitOffsetY;
        
        // 添加微小的扰动，让运动更自然（模拟引力扰动）
        const perturbationX = Math.sin(orbitTime * 1.5) * orbitParams.perturbationIntensity * 0.5;
        const perturbationY = Math.cos(orbitTime * 1) * orbitParams.perturbationIntensity * 0.3;
        
        animX = orbitX + perturbationX;
        animY = orbitY + perturbationY;
        break;
        
      default:
        animX = 0;
        animY = 0;
    }
    
    // Apply drag offset if the button has been dragged
    if (isDragged) {
      animX += dragOffset.x;
      animY += dragOffset.y;
    }
    
    // Update motion values
    x.set(animX);
    y.set(animY);
  });

  // Handle drag end to save the new position
  const handleDragEnd = () => {
    setIsDragged(true);
    setDragOffset({
      x: x.get(),
      y: y.get()
    });
  };

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
      case 'celestialOrbit':
        return 'floating-celestial-orbit';
      default:
        return '';
    }
  };

  return (
    <motion.div 
      className={`floating-button ${getAnimationClass()} ${className}`}
      style={{
        x,
        y,
        cursor: 'grab'
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      whileDrag={{ 
        scale: 1.05,
        cursor: 'grabbing'
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      {children}
    </motion.div>
  );
};
