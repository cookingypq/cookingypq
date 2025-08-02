import React from 'react';
import { motion } from 'framer-motion';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'font-pixel border-2 font-bold transition-all duration-150 select-none';
  
  const variantClasses = {
    primary: 'bg-green-500 border-green-600 text-white hover:bg-green-600 hover:border-green-700 active:bg-green-700',
    secondary: 'bg-gray-600 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-800 active:bg-gray-800',
    danger: 'bg-red-500 border-red-600 text-white hover:bg-red-600 hover:border-red-700 active:bg-red-700'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className
  ].join(' ');

  return (
    <motion.button
      className={classes}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)',
        textShadow: '1px 1px 0 rgba(0,0,0,0.5)'
      }}
    >
      {children}
    </motion.button>
  );
};
