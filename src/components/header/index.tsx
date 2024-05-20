// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">Chat Application</h1>
    </div>
  );
};

export default Header;
