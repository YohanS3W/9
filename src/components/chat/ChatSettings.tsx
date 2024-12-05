import React, { useState } from 'react';
import useChatStore from '../../store/useChatStore';

const ChatSettings: React.FC = () => {
  const { apiKey, systemInstructions, setApiKey, setSystemInstructions } = useChatStore();
  const [inputKey, setInputKey] = useState(apiKey || '');
  const [inputInstructions, setInputInstructions] = useState(systemInstructions || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApiKey(inputKey);
    setSystemInstructions(inputInstructions);
  };

  return (
    <div className="p-4 bg-gray-50 border-b">
      <h4 className="font-medium text-gray-700 mb-3">Settings</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Gemini API Key
          </label>
          <input
            type="password"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="Enter your API key"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A0000] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            System Instructions
          </label>
          <textarea
            value={inputInstructions}
            onChange={(e) => setInputInstructions(e.target.value)}
            placeholder="Enter system instructions for the AI..."
            rows={4}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A0000] focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            These instructions help define how the AI should behave and respond.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-[#7A0000] text-white py-2 rounded-lg hover:bg-[#900000] transition-colors"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default ChatSettings;