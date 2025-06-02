import React, { useState, useRef, useEffect } from 'react';
import { SendHorizonal, Loader2, Crown, Sparkles, ChevronDown, X } from 'lucide-react';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }
  }, [messages]);

  // Handle viewport changes for mobile keyboard
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.visualViewport) {
        const viewport = window.visualViewport;
        const keyboardOpen = viewport.height < window.innerHeight;
        setKeyboardHeight(keyboardOpen ? window.innerHeight - viewport.height : 0);
      }
    };

    if (typeof window !== 'undefined' && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      return () => window.visualViewport.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://kumarran-vilas.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiReply = { sender: 'ai', text: data.reply || '⚠️ Rani did not respond.' };
      setMessages(prev => [...prev, aiReply]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'ai', text: '⚠️ An error occurred. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 300);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap');
        
        .luxury-chat * {
          font-family: 'Red Rose', cursive;
        }
        
        .gold-shimmer {
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFED4E, #FFB347);
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .maroon-gradient {
          background: linear-gradient(135deg, #791603, #8B1E0A, #6B1403);
          position: relative;
        }
        
        .maroon-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
          background-size: 200px 200px, 150px 150px, 100% 100%;
          animation: textureMove 8s ease-in-out infinite;
        }
        
        .message-gradient-user {
          background: linear-gradient(135deg, #791603, #8B1E0A);
          position: relative;
          overflow: hidden;
        }
        
        .message-gradient-user::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          animation: messageShine 2s ease-in-out infinite;
        }
        
        .message-gradient-ai {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #791603;
          position: relative;
          overflow: hidden;
        }
        
        .message-gradient-ai::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          background-size: 100px 100px, 100% 100%;
        }
        
        .floating-button {
          background: linear-gradient(135deg, #791603, #8B1E0A);
          position: relative;
          overflow: hidden;
        }
        
        .floating-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
        }
        
        .close-button {
          background: linear-gradient(135deg, #791603, #8B1E0A);
          position: relative;
          overflow: hidden;
        }
        
        .close-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
        }
        
        .send-button {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .send-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        }
        
        .send-button:hover {
          background: linear-gradient(135deg, #FFA500, #FF8C00);
        }
        
        .typing-indicator {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #791603;
          position: relative;
          overflow: hidden;
        }
        
        .typing-indicator::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
        }
        
        .input-field {
          border: 2px solid #791603;
          position: relative;
          background: linear-gradient(135deg, rgba(255, 248, 220, 0.8), rgba(255, 235, 59, 0.1));
          flex-grow: 1;
          min-width: 0;
        }
        
        .input-field:focus {
          border-color: #791603;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          outline: none;
        }
        
        .chat-background {
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.05) 0%, transparent 50%),
            linear-gradient(to bottom, #fffbf0, #fef3c7);
          position: relative;
        }
        
        .chat-background::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 215, 0, 0.03) 2px, rgba(255, 215, 0, 0.03) 4px);
          animation: patternMove 20s linear infinite;
        }
        
        .mobile-overlay {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes textureMove {
          0%, 100% { background-position: 0% 0%, 100% 100%, 0% 0%; }
          50% { background-position: 100% 100%, 0% 0%, 100% 100%; }
        }
        
        @keyframes messageShine {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes patternMove {
          0% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }
        
        /* Mobile-specific styles */
        @media (max-width: 640px) {
          .mobile-chat {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 9999 !important;
          }
          
          .mobile-chat-container {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
            max-width: none !important;
            display: flex;
            flex-direction: column;
          }
          
          .mobile-header {
            padding: 1.25rem 1rem 0.75rem 1rem !important;
            flex-shrink: 0;
          }
          
          .mobile-messages {
            flex: 1;
            overflow-y: auto;
            padding: 1rem 0.75rem 0.5rem 0.75rem !important;
            min-height: 0;
          }
          
          .mobile-input-container {
            flex-shrink: 0;
            padding: 0.75rem 1rem 1rem 1rem !important;
            background: linear-gradient(to right, rgb(255, 251, 235), rgb(254, 240, 138));
            border-top: 1px solid rgb(252, 211, 77);
            position: relative;
            z-index: 10;
          }
          
          .mobile-input-wrapper {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            max-width: 100%;
          }
          
          .mobile-input-field {
            flex: 1;
            min-width: 0;
            border-radius: 1rem;
            padding: 0.875rem 1rem;
            font-size: 16px;
            border: 2px solid #791603;
            background: linear-gradient(135deg, rgba(255, 248, 220, 0.9), rgba(255, 235, 59, 0.1));
          }
          
          .mobile-input-field:focus {
            border-color: #791603;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
            outline: none;
          }
          
          .mobile-send-button {
            width: 48px;
            height: 48px;
            border-radius: 1rem;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: white;
            border: none;
            box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
          }
          
          .mobile-send-button:hover {
            background: linear-gradient(135deg, #FFA500, #FF8C00);
          }
          
          .mobile-send-button:active {
            transform: scale(0.95);
          }
          
          .mobile-close {
            position: absolute !important;
            top: 1.25rem !important;
            right: 1rem !important;
            z-index: 20 !important;
            width: 40px;
            height: 40px;
          }
          
          /* Prevent zoom on input focus */
          input[type="text"] {
            font-size: 16px !important;
          }
          
          /* Handle keyboard spacing */
          .keyboard-adjusted {
            padding-bottom: env(keyboard-inset-height, 0px);
          }
        }
        
        /* Desktop hover effects */
        @media (min-width: 641px) {
          .desktop-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(121, 22, 3, 0.3);
          }
        }
        
        /* Smooth scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 215, 0, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #791603, #8B1E0A);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8B1E0A, #791603);
        }

        /* Prevent body scroll when chat is open on mobile */
        .no-scroll {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}</style>
      
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 luxury-chat">
        {open ? (
          <>
            {/* Mobile overlay */}
            <div className="sm:hidden mobile-overlay mobile-chat">
              <div 
                className="mobile-chat-container bg-white overflow-hidden"
                style={{ 
                  paddingBottom: keyboardHeight ? `${Math.max(keyboardHeight - 50, 0)}px` : '0px' 
                }}
              >
                {/* Mobile close button */}
                <button 
                  onClick={() => setOpen(false)}
                  className="mobile-close close-button rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  title="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Header */}
                <div className="mobile-header maroon-gradient text-white relative overflow-hidden">
                  <div className="relative flex justify-center items-center pt-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="font-bold text-xl">🛕 Rani AI</h3>
                        <p className="text-sm opacity-90 font-light">Royal Assistant</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full gold-shimmer opacity-20"></div>
                  <div className="absolute -left-2 -bottom-2 w-16 h-16 rounded-full gold-shimmer opacity-15"></div>
                </div>

                {/* Messages */}
                <div ref={chatRef} className="mobile-messages chat-background custom-scrollbar">
                  <div className="space-y-4">
                    {messages.length === 0 && (
                      <div className="text-center py-12">
                        <div className="text-8xl mb-4">👑</div>
                        <p className="text-gray-600 font-medium text-lg">Welcome to Rani AI</p>
                        <p className="text-sm text-gray-500 mt-2">Your royal assistant awaits your command</p>
                      </div>
                    )}
                    
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`rounded-2xl px-4 py-3 max-w-[85%] font-medium shadow-lg ${
                            msg.sender === 'user'
                              ? 'message-gradient-user text-white shadow-red-900/30'
                              : 'message-gradient-ai shadow-yellow-400/30'
                          }`}
                        >
                          {msg.sender === 'ai' && (
                            <div className="flex items-center gap-2 mb-1">
                              <Sparkles className="w-3 h-3" />
                              <span className="text-xs font-bold opacity-80">RANI</span>
                            </div>
                          )}
                          <div className="relative z-10">{msg.text}</div>
                        </div>
                      </div>
                    ))}
                    
                    {loading && (
                      <div className="flex justify-start">
                        <div className="typing-indicator px-4 py-3 rounded-2xl flex items-center font-medium shadow-lg shadow-yellow-400/30">
                          <Loader2 className="animate-spin w-4 h-4 mr-3" />
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            <span className="text-xs font-bold relative z-10">Rani is crafting a response...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Input */}
                <div className="mobile-input-container" ref={inputRef}>
                  <div className="mobile-input-wrapper">
                    <input
                      type="text"
                      className="mobile-input-field font-medium placeholder-gray-500 transition-all duration-300"
                      placeholder="Ask Rani anything..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={handleInputFocus}
                      disabled={loading}
                    />
                    <button
                      className="mobile-send-button font-bold transition-all duration-300"
                      onClick={handleSend}
                      disabled={loading || !input.trim()}
                    >
                      <SendHorizonal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block relative">
              <div className="flex justify-start mb-2">
                <button 
                  onClick={() => setOpen(false)}
                  className="close-button w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Close Chat"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
              
              <div className="w-96 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm border border-yellow-300/30 desktop-hover transition-all duration-300" style={{height: '85vh'}}>
                {/* Header */}
                <div className="maroon-gradient text-white p-4 relative overflow-hidden">
                  <div className="relative flex justify-center items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="font-bold text-lg">🛕 Rani AI</h3>
                        <p className="text-xs opacity-90 font-light">Royal Assistant</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full gold-shimmer opacity-20"></div>
                  <div className="absolute -left-2 -bottom-2 w-12 h-12 rounded-full gold-shimmer opacity-15"></div>
                </div>

                {/* Messages */}
                <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm chat-background custom-scrollbar">
                  {messages.length === 0 && (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-3">👑</div>
                      <p className="text-gray-600 font-medium">Welcome to Rani AI</p>
                      <p className="text-xs text-gray-500 mt-1">Your royal assistant awaits your command</p>
                    </div>
                  )}
                  
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 max-w-[80%] font-medium shadow-lg ${
                          msg.sender === 'user'
                            ? 'message-gradient-user text-white shadow-red-900/30'
                            : 'message-gradient-ai shadow-yellow-400/30'
                        }`}
                      >
                        {msg.sender === 'ai' && (
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-3 h-3" />
                            <span className="text-xs font-bold opacity-80">RANI</span>
                          </div>
                        )}
                        <div className="relative z-10">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                  
                  {loading && (
                    <div className="flex justify-start">
                      <div className="typing-indicator px-4 py-3 rounded-2xl flex items-center font-medium shadow-lg shadow-yellow-400/30">
                        <Loader2 className="animate-spin w-4 h-4 mr-3" />
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          <span className="text-xs font-bold relative z-10">Rani is crafting a response...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-yellow-200">
                  <input
                    type="text"
                    className="input-field rounded-2xl px-4 py-3 text-sm font-medium placeholder-gray-500 transition-all duration-300"
                    placeholder="Ask Rani anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="send-button text-white rounded-2xl p-3 disabled:opacity-50 font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleSend}
                    disabled={loading}
                  >
                    <SendHorizonal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="floating-button text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full gold-shimmer flex items-center justify-center">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="relative z-10">Rani AI</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default AIAssistant;