import React, { useState, useRef, useEffect } from 'react';
import { SendHorizonal, Loader2, Crown, Sparkles, ChevronDown } from 'lucide-react';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

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
    if (e.key === 'Enter') {
      handleSend();
    }
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
        }
        
        .message-gradient-user {
          background: linear-gradient(135deg, #791603, #8B1E0A);
        }
        
        .message-gradient-ai {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #791603;
        }
        
        .floating-button {
          background: linear-gradient(135deg, #791603, #8B1E0A);
        }
        
        .close-button {
          background: linear-gradient(135deg, #791603, #8B1E0A);
        }
        
        .send-button {
          background: linear-gradient(135deg, #FFD700, #FFA500);
        }
        
        .send-button:hover {
          background: linear-gradient(135deg, #FFA500, #FF8C00);
        }
        
        .typing-indicator {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #791603;
        }
        
        .input-field {
          border: 2px solid #791603;
        }
        
        .input-field:focus {
          border-color: #791603;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          outline: none;
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 luxury-chat">
        {open ? (
          <div className="relative">
            {/* Close button above chat box - left corner */}
            <div className="flex justify-start mb-2">
              <button 
                onClick={() => setOpen(false)}
                className="close-button w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                title="Close Chat"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
            
            <div className="w-96 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm border border-yellow-300/30" style={{height: '85vh'}}>
              {/* Header with royal design */}
              <div className="maroon-gradient text-white p-4 relative overflow-hidden">
                <div className="absolute inset-0 gold-shimmer opacity-10"></div>
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

              {/* Chat Messages */}
              <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-gradient-to-b from-amber-50 to-yellow-50">
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
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {loading && (
                  <div className="flex justify-start">
                    <div className="typing-indicator px-4 py-3 rounded-2xl flex items-center font-medium shadow-lg shadow-yellow-400/30">
                      <Loader2 className="animate-spin w-4 h-4 mr-3" />
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        <span className="text-xs font-bold">Rani is crafting a response...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-yellow-200">
                <input
                  type="text"
                  className="input-field flex-1 rounded-2xl px-4 py-3 text-sm font-medium placeholder-gray-500 bg-gradient-to-r from-yellow-50 to-amber-50 transition-all duration-300"
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
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="floating-button text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 font-bold text-lg hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full gold-shimmer flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span>Rani AI</span>
            <Sparkles className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default AIAssistant;