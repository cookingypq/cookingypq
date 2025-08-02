import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-black border-b-2 border-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-pixel text-green-400 hover:text-green-300">
          CookingYPQ
        </Link>
      </div>
    </header>
  );
};
