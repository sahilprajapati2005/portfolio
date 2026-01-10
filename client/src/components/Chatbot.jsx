import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Send, X, Loader2, Sparkles, User, Bot } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sahil's AI Assistant. Ask me anything about his projects or skills! 🚀", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // FIX: Use environment variable for the API URL
      // If VITE_API_URL is set (production), use it.
      // If not (local dev), default to "" which uses the vite proxy /api path.
      const apiUrl = import.meta.env.VITE_API_URL || "";
      
      const response = await axios.post(`${apiUrl}/api/chat`, { message: input });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = { text: "⚠️ My servers are unreachable right now. Please try again later!", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden mb-4 animate-fade-in-up ring-1 ring-cyan-500/20">
          
          {/* Header */}
          <div className="bg-slate-900/50 backdrop-blur-md p-4 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-900/30 rounded-full flex items-center justify-center border border-cyan-500/30">
                <Sparkles size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 text-sm">Sahil's Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  <span className="text-xs text-cyan-300 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-[#0b1120]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === "user" 
                    ? "bg-cyan-600 text-white" 
                    : "bg-slate-800 text-cyan-400 border border-slate-700"
                }`}>
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={16} />}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-md ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none"
                      : "bg-slate-800 border border-slate-700 text-gray-200 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Bot size={16} className="text-cyan-400" />
                </div>
                <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="flex items-center gap-2 bg-slate-950 rounded-full px-4 py-2 border border-slate-700 focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
                placeholder="Ask about Sahil..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`p-2 rounded-full transition-all duration-200 ${
                  input.trim() 
                    ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400 hover:scale-105 shadow-[0_0_10px_rgba(6,182,212,0.4)]" 
                    : "bg-slate-800 text-slate-600 cursor-not-allowed"
                }`}
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- TRIGGER BUTTON (Animated 3D Robot) --- */}
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-40 bg-slate-800 px-4 py-2 rounded-xl rounded-br-none shadow-xl border border-slate-700 transform transition-all duration-300 origin-bottom-right group-hover:scale-105">
            <p className="text-xs font-medium text-cyan-300">Need help? Ask AI! 🤖</p>
          </div>
        )}

        {/* Robot Image Container */}
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center 
          transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]
          border-2 border-slate-700
          ${isOpen ? 'bg-slate-800 scale-90 rotate-90' : 'bg-slate-900 hover:scale-110 hover:border-cyan-500'}
        `}>
          {isOpen ? (
            <X className="w-8 h-8 text-cyan-400" />
          ) : (
            <img 
              src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
              alt="Chat Bot"
              className="w-10 h-10 animate-bounce-slow"
            />
          )}
        </div>

        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-slate-900"></span>
          </span>
        )}
      </div>

    </div>
  );
};

export default Chatbot;