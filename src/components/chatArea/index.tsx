// src/components/ChatArea.tsx
import React, { useState } from 'react';

interface Chat {
  title: string;
  messages: string[];
}

interface ChatAreaProps {
  chat: Chat;
}

const ChatArea: React.FC<ChatAreaProps> = ({ chat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chat.messages);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-800">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-600 p-4 flex bg-gray-700">
        <input
          className="flex-1 p-2 border border-gray-600 rounded mr-2 bg-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;



{/* <div className="w-2/3 flex flex-col bg-gray-800">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
        {files.length > 0 && (
          <div className="mb-2">
            <h3 className="text-white">Uploaded Files:</h3>
            <ul className="text-white">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-gray-600 p-4 flex flex-col items-start bg-gray-700">
        <input
          type="file"
          onChange={handleFileChange}
          className="p-2 border border-gray-600 rounded bg-gray-600 text-white mb-2"
        />
        <input
          className="flex-1 p-2 border border-gray-600 rounded mr-2 bg-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div> */}