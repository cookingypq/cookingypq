import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  speed = 100,
  delay = 0,
  loop = false,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
      
      if (loop) {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setIsTyping(true);
        }, 2000);
      }
    }
  }, [currentIndex, text, speed, isTyping, loop, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};
