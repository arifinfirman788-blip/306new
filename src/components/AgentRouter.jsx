import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Hotel, HelpCircle, Map, ArrowRight, Sparkles, User, Bot } from 'lucide-react';
import hotelDataRaw from '../data/hotel_data.json';

// Simple parser for the weird JSON structure
const parseHotels = (raw) => {
  if (!raw || !raw.data) return [];
  return raw.data
    .filter(row => row[1] && row[1].length > 0) // Filter rows with a name
    .map(row => ({
      id: row[0],
      name: row[1],
      location: row[2],
      stars: row[4],
      desc: row[7] || "暂无描述"
    }))
    .slice(0, 5); // Just take top 5 for demo
};

const AgentRouter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAgent, setActiveAgent] = useState('master'); // 'master', 'scout', 'kb', 'navigator'
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  
  const hotels = parseHotels(hotelDataRaw);

  const agents = {
    master: {
      name: "AI Central Hub",
      role: "主智能体",
      avatar: <Bot className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-100",
      greeting: "您好！我是主智能体。我可以帮您连接到专门的子智能体来解决您的问题。",
      options: [
        { id: 'scout', label: '推荐酒店', icon: <Hotel size={16} /> },
        { id: 'kb', label: '咨询问题', icon: <HelpCircle size={16} /> },
        { id: 'navigator', label: '页面跳转', icon: <Map size={16} /> }
      ]
    },
    scout: {
      name: "Hotel Scout",
      role: "推荐智能体",
      avatar: <Hotel className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-100",
      greeting: "我是酒店推荐助手。这里有一些热门酒店推荐给您：",
      options: [
        { id: 'back', label: '返回主菜单', icon: <ArrowRight size={16} className="rotate-180" /> }
      ]
    },
    kb: {
      name: "Knowledge Base",
      role: "问答智能体",
      avatar: <HelpCircle className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100",
      greeting: "我是问答助手。您可以问我关于平台的问题。",
      options: [
        { id: 'what', label: '这是什么平台？', icon: <HelpCircle size={16} /> },
        { id: 'contact', label: '如何联系我们？', icon: <User size={16} /> },
        { id: 'back', label: '返回主菜单', icon: <ArrowRight size={16} className="rotate-180" /> }
      ]
    },
    navigator: {
      name: "Navigator",
      role: "导航智能体",
      avatar: <Map className="w-6 h-6 text-green-600" />,
      color: "bg-green-100",
      greeting: "我是导航助手。我可以帮您快速跳转到页面的不同部分。",
      options: [
        { id: 'overview', label: '跳转到概览', icon: <ArrowRight size={16} /> },
        { id: 'visitor', label: '跳转到游客端', icon: <ArrowRight size={16} /> },
        { id: 'back', label: '返回主菜单', icon: <ArrowRight size={16} className="rotate-180" /> }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
       addMessage('system', agents.master.greeting);
    }
  }, [isOpen]);

  const addMessage = (sender, text, type = 'text', data = null) => {
    setMessages(prev => [...prev, { sender, text, type, data, agent: activeAgent }]);
  };

  const handleOptionClick = (optionId) => {
    // User clicked an option
    // Don't show option click as user message if it's navigation or just selection, 
    // but showing it makes it clear what happened.
    // For 'back', maybe don't show it? Let's show everything for clarity.
    const label = agents[activeAgent].options.find(o => o.id === optionId)?.label || optionId;
    addMessage('user', `${label}`);

    if (activeAgent === 'master') {
      if (agents[optionId]) {
        setTimeout(() => {
          setActiveAgent(optionId);
          addMessage('system', `正在为您连接 ${agents[optionId].name}...`);
          setTimeout(() => {
            addMessage('system', agents[optionId].greeting);
            if (optionId === 'scout') {
                addMessage('system', '', 'hotel-list', hotels);
            }
          }, 800);
        }, 500);
      }
    } else {
      if (optionId === 'back') {
        setTimeout(() => {
          setActiveAgent('master');
          addMessage('system', "已返回主智能体。还有什么可以帮您？");
        }, 500);
      } else if (activeAgent === 'navigator') {
         const element = document.getElementById(optionId);
         if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
             addMessage('system', `已为您跳转到 ${optionId} 区域。`);
         } else {
             // Try to find section by id directly if not found in options map (though here we control options)
             addMessage('system', `正在跳转...`);
         }
      } else if (activeAgent === 'kb') {
          if (optionId === 'what') {
              addMessage('system', "这是一个集成了多方资源的智能旅游服务平台，旨在连接游客、企业和政府，提供全方位的智能服务。");
          } else if (optionId === 'contact') {
              addMessage('system', "您可以拨打客服电话 123-4567-8900，或发送邮件至 support@example.com。");
          }
      }
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage('user', inputValue);
    setInputValue('');
    
    // Simple echo/response logic for demo
    setTimeout(() => {
      addMessage('system', `收到您的消息: "${inputValue}"。由于我是演示智能体，请尝试点击下方的选项。`);
    }, 1000);
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[600px] h-[500px]"
          >
            {/* Header */}
            <div className={`p-4 ${agents[activeAgent].color} flex items-center justify-between border-b border-slate-100 transition-colors duration-500`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
                  {agents[activeAgent].avatar}
                </div>
                <div>
                  <h3 className="font-black text-slate-800 text-lg">{agents[activeAgent].name}</h3>
                  <p className="text-xs text-slate-600 font-bold uppercase tracking-wider">{agents[activeAgent].role}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={18} className="text-slate-500" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                  }`}>
                    {msg.text && <div className="mb-1">{msg.text}</div>}
                    {msg.type === 'hotel-list' && (
                        <div className="mt-2 space-y-2">
                            {msg.data.map((hotel, hIdx) => (
                                <div key={hIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-pointer">
                                    <div className="font-bold text-indigo-600 mb-1">{hotel.name}</div>
                                    <div className="text-xs text-slate-500 flex gap-2">
                                        <span className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-600">{hotel.location}</span>
                                        <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">{hotel.stars}</span>
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1 line-clamp-2">{hotel.desc}</div>
                                </div>
                            ))}
                        </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options */}
            <div className="p-3 bg-white border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-3 max-h-24 overflow-y-auto">
                {agents[activeAgent].options.map(opt => (
                    <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 text-xs font-bold rounded-lg border border-slate-200 hover:border-indigo-200 transition-all shadow-sm"
                    >
                    {opt.icon}
                    {opt.label}
                    </button>
                ))}
                </div>
                
                {/* Input */}
                <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="输入消息..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                <button 
                    onClick={handleSend}
                    className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-lg shadow-indigo-200"
                >
                    <Send size={18} />
                </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl shadow-indigo-300 flex items-center justify-center transition-colors border-4 border-white/20 backdrop-blur-sm"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

export default AgentRouter;
