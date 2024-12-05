import { create } from 'zustand';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatStore {
  messages: Message[];
  apiKey: string | null;
  systemInstructions: string | null;
  isOpen: boolean;
  isSettingsOpen: boolean;
  isThinking: boolean;
  windowSize: { width: number; height: number };
  setApiKey: (key: string) => void;
  setSystemInstructions: (instructions: string) => void;
  addMessage: (message: Message) => void;
  toggleChat: () => void;
  toggleSettings: () => void;
  setWindowSize: (size: { width: number; height: number }) => void;
  sendMessage: (content: string) => Promise<void>;
}

const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  apiKey: null,
  systemInstructions: null,
  isOpen: false,
  isSettingsOpen: false,
  isThinking: false,
  windowSize: { width: 400, height: 600 },
  
  setApiKey: (key) => set({ apiKey: key }),
  
  setSystemInstructions: (instructions) => set({ 
    systemInstructions: instructions,
    isSettingsOpen: false 
  }),
  
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  toggleSettings: () => set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),
  
  setWindowSize: (size) => set({ windowSize: size }),
  
  sendMessage: async (content) => {
    const { apiKey, systemInstructions, addMessage } = get();
    
    if (!apiKey) {
      addMessage({
        role: 'assistant',
        content: 'Please set your Gemini API key in settings first.'
      });
      return;
    }

    addMessage({ role: 'user', content });
    set({ isThinking: true });

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const chat = model.startChat({
        history: systemInstructions ? [
          {
            role: 'user',
            parts: 'Here are your system instructions: ' + systemInstructions,
          },
          {
            role: 'model',
            parts: 'Understood. I will follow these instructions.',
          },
        ] : [],
      });
      
      const result = await chat.sendMessage(content);
      const response = await result.response;
      const text = response.text();
      
      addMessage({
        role: 'assistant',
        content: text
      });
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Sorry, there was an error processing your request. Please check your API key and try again.'
      });
    } finally {
      set({ isThinking: false });
    }
  }
}));

export default useChatStore;