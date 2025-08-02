import React, { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.children;
    let currentDelay = delay;

    Array.from(chars).forEach((char) => {
      setTimeout(() => {
        char.classList.add('opacity-100');
      }, currentDelay);
      currentDelay += stagger * 1000;
    });
  }, [text, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block opacity-0 transition-opacity duration-300"
          style={{ transitionDelay: `${(delay + stagger * index) * 1000}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
