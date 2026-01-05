import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Send, X, Loader2, Minimize2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sahil's AI Assistant. Ask me anything about his projects or skills! 🤖", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Connecting to your backend
      const response = await axios.post("/api/chat", { message: input });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = { text: "⚠️ My brain is offline (Server Error). Please try again later!", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* --- 1. THE CHAT WINDOW --- */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4 transition-all duration-300 animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-sm">Sahil's Assistant</h3>
                <span className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                placeholder="Ask about Sahil..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`p-2 rounded-full transition-all ${
                  input.trim() 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. THE ANIMATED ROBOT TRIGGER --- */}
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        
        {/* Tooltip Bubble (Visible when chat is closed) */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-32 bg-white px-3 py-2 rounded-xl rounded-tr-none shadow-lg border border-gray-100 transform transition-all duration-300 origin-bottom-right group-hover:scale-105">
            <p className="text-xs font-medium text-gray-700">Hi! Ask me anything about Sahil 👋</p>
          </div>
        )}

        {/* The Robot Image Container */}
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center 
          transition-transform duration-300 shadow-xl
          ${isOpen ? 'bg-gray-100 scale-90' : 'bg-white hover:scale-110'}
        `}>
          {isOpen ? (
            // Close Icon when open
            <X className="w-8 h-8 text-gray-600" />
          ) : (
            // 3D Robot Image when closed
            <img 
              src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
              alt="Chat Bot"
              className="w-12 h-12 animate-bounce-slow drop-shadow-md"
            />
          )}
        </div>

        {/* Status Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        )}
      </div>

    </div>
  );
};

export default Chatbot;