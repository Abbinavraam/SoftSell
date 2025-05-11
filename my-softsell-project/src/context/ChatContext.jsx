import React, { createContext, useState, useContext } from 'react';
import { mockLLMResponse } from '../services/mockLLM';

// Create the chat context
export const ChatContext = createContext();

// Custom hook to use the chat context
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  // State for chat messages
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      type: 'bot',
      text: 'Hi there! 👋 I\'m SoftShell Assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  
  // State for chat widget visibility
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to toggle chat widget
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };
  
  // Function to add a user message
  const addUserMessage = (text) => {
    const newMessage = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  };
  
  // Function to add a bot message
  const addBotMessage = (text, replyToId = null) => {
    const newMessage = {
      id: Date.now().toString(),
      type: 'bot',
      text,
      replyToId,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  };
  
  // Function to handle user message and get AI response
  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    const messageId = addUserMessage(text);
    setIsLoading(true);
    
    try {
      // Get response from LLM (mock or real)
      const response = await mockLLMResponse(text);
      addBotMessage(response, messageId);
    } catch (error) {
      console.error('Error getting AI response:', error);
      addBotMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", messageId);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Suggested questions for the user
  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of software do you buy?",
    "How much is my license worth?",
    "How long does the process take?",
    "Is my data secure?"
  ];
  
  // Clear all messages except the welcome message
  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        type: 'bot',
        text: 'Hi there! 👋 I\'m SoftShell Assistant. How can I help you today?',
        timestamp: new Date()
      }
    ]);
  };
  
  return (
    <ChatContext.Provider value={{
      messages,
      isChatOpen,
      isLoading,
      toggleChat,
      sendMessage,
      suggestedQuestions,
      clearChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};