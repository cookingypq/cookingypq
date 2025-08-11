import React, { useEffect, useRef } from 'react';

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
    } else if (animationType === 'celestialOrbit') {
      // 天体公转轨迹 - 每个按钮都有独特的轨道参数
      let animationId: number;
      let startTime: number;
      
      // 为每个按钮生成独特的轨道参数
      const getUniqueOrbitParams = () => {
        // 使用按钮的DOM元素位置来生成独特的种子
        const rect = button.getBoundingClientRect();
        const seed = rect.left + rect.top;
        
        // 基于种子生成独特的参数，模拟不同行星的轨道特征
        const baseSpeed = 0.0000007 + (seed % 150) * 0.000004; // 不同的公转速度（内行星快，外行星慢）- 调慢速度
        const semiMajorAxis = 900 + (seed % 80) * 1.5; // 不同的轨道大小（模拟不同距离）
        const semiMinorAxis = 35 + (seed % 50) * 1.2;
        const eccentricity = 0.1 + (seed % 30) * 0.02; // 不同的离心率（模拟轨道椭圆程度）
        const startAngle = (seed % 360) * (Math.PI / 180); // 不同的起始角度（模拟不同相位）
        const orbitOffsetX = (seed % 120) - 60; // 不同的轨道中心偏移（模拟不同轨道平面）
        const orbitOffsetY = ((seed + 70) % 120) - 60;
        const perturbationIntensity = 8 + (seed % 25); // 不同的扰动强度（模拟引力扰动）
        const orbitTilt = (seed % 20) - 10; // 轨道倾斜角度
        
        return {
          baseSpeed,
          semiMajorAxis,
          semiMinorAxis,
          eccentricity,
          startAngle,
          orbitOffsetX,
          orbitOffsetY,
          perturbationIntensity,
          orbitTilt
        };
      };
      
      const orbitParams = getUniqueOrbitParams();
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // 使用独特的参数计算轨道位置
        const t = elapsed * orbitParams.baseSpeed + orbitParams.startAngle;
        
        // 计算椭圆轨道上的位置
        let x = orbitParams.semiMajorAxis * Math.cos(t);
        let y = orbitParams.semiMinorAxis * Math.sin(t);
        
        // 应用离心率，让轨道更椭圆
        const distance = Math.sqrt(x * x + y * y);
        if (distance > 0) {
          x = x * (1 + orbitParams.eccentricity * Math.cos(t));
          y = y * (1 + orbitParams.eccentricity * Math.cos(t));
        }
        
        // 应用轨道倾斜（模拟不同轨道平面的倾斜）
        const tiltRad = orbitParams.orbitTilt * (Math.PI / 180);
        const xTilted = x * Math.cos(tiltRad) - y * Math.sin(tiltRad);
        const yTilted = x * Math.sin(tiltRad) + y * Math.cos(tiltRad);
        x = xTilted;
        y = yTilted;
        
        // 添加轨道中心偏移
        x += orbitParams.orbitOffsetX;
        y += orbitParams.orbitOffsetY;
        
        // 添加微小的扰动，让运动更自然（模拟引力扰动）
        const perturbationX = Math.sin(t * 1.5) * orbitParams.perturbationIntensity * 0.5;  // 调慢扰动速度
        const perturbationY = Math.cos(t * 1) * orbitParams.perturbationIntensity * 0.3;     // 调慢扰动速度
        
        x += perturbationX;
        y += perturbationY;
        
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
      case 'celestialOrbit':
        return 'floating-celestial-orbit';
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
