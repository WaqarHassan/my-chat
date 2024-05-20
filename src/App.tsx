// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import ChatArea from './components/chatArea';
import Header from './components/header';

interface Chat {
  title: string;
  messages: string[];
}

const chatData: Chat[] = [
  {
    title: "Chat 1",
    messages: ["Hello!", "How are you?"]
  },
  {
    title: "Chat 2",
    messages: ["Hey!", "What's up?"]
  }
];

const App: React.FC = () => {
  const [chats] = useState<Chat[]>(chatData);
  const [selectedChatIndex, setSelectedChatIndex] = useState<number>(0);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar chats={chats} onSelectChat={setSelectedChatIndex} />
        <ChatArea chat={chats[selectedChatIndex]} />
      </div>
    </div>
  );
};

export default App;
