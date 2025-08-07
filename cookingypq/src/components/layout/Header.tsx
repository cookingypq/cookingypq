import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-black border-b-2 border-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link 
          to="/" 
          className="text-lg sm:text-xl md:text-2xl font-pixel text-green-400 hover:text-green-300 break-words"
          style={{
            fontSize: 'clamp(0.875rem, 4vw, 1.5rem)',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}
        >
          peiqing.cook
        </Link>
      </div>
    </header>
  );
};
