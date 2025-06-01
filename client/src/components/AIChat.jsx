import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, SendHorizonal, Loader2 } from 'lucide-react';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
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
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 bg-white rounded-2xl shadow-lg flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-2xl font-semibold flex justify-between items-center">
            <span>🛕 Rani AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div ref={chatRef} className="h-96 overflow-y-auto p-3 space-y-2 text-sm bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-xl px-3 py-2 max-w-[75%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 px-3 py-2 rounded-xl flex items-center">
                  <Loader2 className="animate-spin w-4 h-4 mr-2" />
                  Rani is typing...
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center border-t px-2 py-2 bg-white">
            <input
              type="text"
              className="flex-1 border rounded-xl px-3 py-2 text-sm mr-2"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
              onClick={handleSend}
              disabled={loading}
            >
              <SendHorizonal className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
        >
          💬 Rani
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
