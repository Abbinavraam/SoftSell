import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../context/ChatContext';
import { FaComment, FaTimes, FaPaperPlane, FaRobot, FaUser, FaTrash } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const ChatWidget = () => {
  const { 
    messages, 
    isChatOpen, 
    isLoading, 
    toggleChat, 
    sendMessage, 
    suggestedQuestions,
    clearChat
  } = useChat();
  
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isChatOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };
  
  const handleSuggestedQuestion = (question) => {
    sendMessage(question);
  };
  
  // Animation variants
  const chatButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 }
  };
  
  const chatWindowVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.07
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      transition: { duration: 0.2 } 
    }
  };
  
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="chat-toggle-button"
        onClick={toggleChat}
        variants={chatButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: isDark ? '#5a9ff2' : '#4a90e2',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}
      >
        {isChatOpen ? <FaTimes size={24} /> : <FaComment size={24} />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="chat-window"
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '350px',
              height: '500px',
              borderRadius: '12px',
              backgroundColor: isDark ? '#2c3e50' : 'white',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 1000
            }}
          >
            {/* Chat header */}
            <div 
              className="chat-header"
              style={{
                padding: '15px 20px',
                backgroundColor: isDark ? '#1a2533' : '#4a90e2',
                color: 'white',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaRobot style={{ marginRight: '10px' }} />
                <span>SoftShell Assistant</span>
              </div>
              <div>
                <button
                  onClick={clearChat}
                  aria-label="Clear chat"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    marginRight: '10px',
                    opacity: 0.8
                  }}
                >
                  <FaTrash size={14} />
                </button>
                <button
                  onClick={toggleChat}
                  aria-label="Close chat"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div 
              className="chat-messages"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '15px',
                backgroundColor: isDark ? '#2c3e50' : '#f5f8fb'
              }}
            >
              <motion.div variants={chatWindowVariants}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`chat-message ${message.type}`}
                    variants={messageVariants}
                    style={{
                      display: 'flex',
                      marginBottom: '15px',
                      justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    {message.type === 'bot' && (
                      <div 
                        className="avatar"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isDark ? '#5a9ff2' : '#4a90e2',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: '10px',
                          flexShrink: 0
                        }}
                      >
                        <FaRobot color="white" size={16} />
                      </div>
                    )}
                    
                    <div 
                      className={`message-bubble ${message.type}`}
                      style={{
                        maxWidth: '70%',
                        padding: '12px 16px',
                        borderRadius: message.type === 'user' 
                          ? '18px 18px 4px 18px' 
                          : '18px 18px 18px 4px',
                        backgroundColor: message.type === 'user'
                          ? (isDark ? '#5a9ff2' : '#4a90e2')
                          : (isDark ? '#3d5a80' : 'white'),
                        color: message.type === 'user'
                          ? 'white'
                          : (isDark ? '#e0e0e0' : '#333'),
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {message.text}
                    </div>
                    
                    {message.type === 'user' && (
                      <div 
                        className="avatar"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isDark ? '#3d5a80' : '#e0e0e0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: '10px',
                          flexShrink: 0
                        }}
                      >
                        <FaUser color={isDark ? '#e0e0e0' : '#555'} size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    className="chat-message bot"
                    variants={messageVariants}
                    style={{
                      display: 'flex',
                      marginBottom: '15px'
                    }}
                  >
                    <div 
                      className="avatar"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isDark ? '#5a9ff2' : '#4a90e2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '10px'
                      }}
                    >
                      <FaRobot color="white" size={16} />
                    </div>
                    
                    <div 
                      className="message-bubble bot typing"
                      style={{
                        padding: '12px 16px',
                        borderRadius: '18px 18px 18px 4px',
                        backgroundColor: isDark ? '#3d5a80' : 'white',
                        color: isDark ? '#e0e0e0' : '#333',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </motion.div>
            </div>
            
            {/* Suggested questions */}
            {messages.length < 3 && (
              <div 
                className="suggested-questions"
                style={{
                  padding: '10px 15px',
                  borderTop: `1px solid ${isDark ? '#1a2533' : '#e0e0e0'}`,
                  backgroundColor: isDark ? '#243342' : '#f0f4f8'
                }}
              >
                <div 
                  style={{
                    fontSize: '12px',
                    marginBottom: '8px',
                    color: isDark ? '#a0aec0' : '#718096'
                  }}
                >
                  Suggested questions:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {suggestedQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      style={{
                        backgroundColor: isDark ? '#3d5a80' : 'white',
                        color: isDark ? '#e0e0e0' : '#4a5568',
                        border: `1px solid ${isDark ? '#4a6285' : '#e2e8f0'}`,
                        borderRadius: '16px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%'
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat input */}
            <form 
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                padding: '12px',
                borderTop: `1px solid ${isDark ? '#1a2533' : '#e0e0e0'}`,
                backgroundColor: isDark ? '#243342' : 'white'
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px 15px',
                  borderRadius: '20px',
                  border: `1px solid ${isDark ? '#3d5a80' : '#e0e0e0'}`,
                  backgroundColor: isDark ? '#1a2533' : 'white',
                  color: isDark ? '#e0e0e0' : '#333',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: isDark ? '#5a9ff2' : '#4a90e2',
                  color: 'white',
                  border: 'none',
                  marginLeft: '10px',
                  cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed',
                  opacity: inputValue.trim() && !isLoading ? 1 : 0.6,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FaPaperPlane size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CSS for typing indicator */}
      <style jsx="true">{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .typing-indicator span {
          height: 8px;
          width: 8px;
          margin: 0 2px;
          background-color: ${isDark ? '#a0aec0' : '#a0aec0'};
          border-radius: 50%;
          display: inline-block;
          opacity: 0.4;
        }
        
        .typing-indicator span:nth-child(1) {
          animation: pulse 1s infinite;
        }
        
        .typing-indicator span:nth-child(2) {
          animation: pulse 1s infinite 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation: pulse 1s infinite 0.4s;
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
        }
        
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .chat-messages::-webkit-scrollbar-track {
          background: ${isDark ? '#1a2533' : '#f1f1f1'};
        }
        
        .chat-messages::-webkit-scrollbar-thumb {
          background: ${isDark ? '#3d5a80' : '#c1c1c1'};
          border-radius: 3px;
        }
        
        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? '#4a6285' : '#a1a1a1'};
        }
      `}</style>
    </>
  );
};

export default ChatWidget;