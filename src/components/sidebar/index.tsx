// src/components/Sidebar.tsx
import React from 'react';

interface Chat {
  title: string;
  messages: string[];
}

interface SidebarProps {
  chats: Chat[];
  onSelectChat: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="w-1/5 h-full border-r border-gray-300 p-4 overflow-y-auto bg-gray-700">
      {chats.map((chat, index) => (
        <div
          key={index}
          className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-600"
          onClick={() => onSelectChat(index)}
        >
          {chat.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
