import React, { useState } from 'react';
import { Send } from 'lucide-react';
import useChatStore from '../../store/useChatStore';

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage } = useChatStore();
  const isLoading = messages.length > 0 && 
    messages[messages.length - 1].role === 'user';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const message = inputValue;
    setInputValue(''); // Clear input immediately
    await sendMessage(message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isLoading ? "Yukkthi is thinking..." : "Type your message..."}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A0000]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className={`p-2 rounded-lg transition-colors ${
            isLoading || !inputValue.trim()
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#7A0000] hover:bg-[#900000]'
          } text-white`}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;