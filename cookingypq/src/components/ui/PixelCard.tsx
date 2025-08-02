import React from 'react';
import { motion } from 'framer-motion';

interface PixelCardProps {
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  title,
  variant = 'default',
  className = '',
  onClick,
  interactive = false
}) => {
  const baseClasses = 'font-pixel border-2 p-4 relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-gray-800 border-gray-600 text-white',
    success: 'bg-green-800 border-green-600 text-green-100',
    warning: 'bg-yellow-800 border-yellow-600 text-yellow-100',
    error: 'bg-red-800 border-red-600 text-red-100'
  };

  const interactiveClasses = interactive ? 'cursor-pointer hover:scale-105' : '';

  const classes = [
    baseClasses,
    variantClasses[variant],
    interactiveClasses,
    className
  ].join(' ');

  return (
    <motion.div
      className={classes}
      onClick={interactive ? onClick : undefined}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)',
        backgroundImage: `
          linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
          linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05))
        `,
        backgroundSize: '4px 4px'
      }}
    >
      {/* 像素边框效果 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-2 bg-white opacity-20"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white opacity-20"></div>
      </div>

      {title && (
        <div className="mb-3 pb-2 border-b border-current border-opacity-30">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
