import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, MessageSquare } from 'lucide-react';

const knowledgeBase = {
  pricing: {
    keywords: ['price', 'cost', 'rate', 'how much', 'lakhs', 'crores'],
    response: `Here are our current prices:
• 2BHK Flats: ₹45.00 Lakhs (All inclusive)
• Duplex Villas: ₹1.50 Crores
• Triplex Villas: ₹1.75 Crores
• Price per sft (Flats): ₹3500/-`
  },
  availability: {
    keywords: ['available', 'unsold', 'left', 'vacancy', 'booking'],
    response: `Current Availability Status (as of 12-09-2025):
• Apartment-1: 8 units available
• Apartment-2: 19 units available
• New Duplex Villas: 6 units available
• New Triplex Villas: 7 units available
• Old Villas & Independent Houses: Sold Out`
  },
  areas: {
    keywords: ['area', 'size', 'sft', 'sq.yd', 'dimension', 'square feet'],
    response: `Construction Areas & Plot Sizes:
• 2BHK Flat: 1200 sft (44 sq.yds UDS)
• Duplex Villa: 3200 sft (222 sq.yds Plot)
• Triplex Villa: 4100 sft (222 sq.yds Plot)
• Independent House: 1555 sft (266 sq.yds Plot)`
  },
  specs: {
    keywords: ['bhk', 'bedroom', 'facing', 'floor', 'amenities'],
    response: `Project Specifications:
• 2BHK Flats: East (1200 sft) & West (1195 sft) facing.
• Duplex: 3BHK + Home Theater (G+2)
• Triplex: 3BHK + Home Theater (Stilt + G+2)
• Amenities: Car Parking, Lift, Generator, Transformer.`
  },
  contact: {
    keywords: ['contact', 'call', 'phone', 'email', 'number', 'reach'],
    response: `You can reach us at:
📞 +91 80960 44333
📧 constructions@srijayarama.com
📍 Marketing Office: SriRama Landmark, Mahabubnagar.`
  }
};

const LiveChat = ({ isOpen, onClose }) => {
  const [chatState, setChatState] = useState('IDLE'); // IDLE, NAME, PHONE, ADDRESS, REQ
  const [userData, setUserData] = useState({ name: '', phone: '', address: '', req: '' });
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Good Morning, welcome to Sri Jayarama Construction. I am Kashvi. How may I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Logic to find response
    const lowerInput = input.toLowerCase();
    let responseText = "I'm not sure about that. Please click the WhatsApp button below to chat with our executive directly.";

    // Check knowledge base
    for (const category in knowledgeBase) {
      if (knowledgeBase[category].keywords.some(keyword => lowerInput.includes(keyword))) {
        responseText = knowledgeBase[category].response;
        break;
      }
    }

    // Generic greetings
    if (['hi', 'hello', 'hey'].some(k => lowerInput.includes(k))) {
      responseText = "Hello! Ask me about 'Price', 'Availability' or 'Area'.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: responseText }]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-xl shadow-2xl w-[90vw] md:w-[350px] fixed bottom-24 right-4 md:bottom-24 md:right-6 z-50 flex flex-col border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right max-h-[60vh] md:max-h-[500px]">

      {/* Header */}
      <div className="bg-[#E31E24] p-4 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Kashvi&background=fff&color=E31E24" alt="K" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#E31E24] rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Sri Jayarama Support</h3>
            <p className="text-[10px] text-white/90 bg-white/10 px-1.5 py-0.5 rounded inline-block mt-0.5">Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 bg-[#f0f2f5] p-4 overflow-y-auto min-h-[250px] space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm whitespace-pre-line ${msg.type === 'user'
                ? 'bg-[#E31E24] text-white rounded-br-none'
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Footer */}
      <div className="bg-white p-3 border-t border-gray-100">
        <form onSubmit={handleSend} className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about price, area..."
            className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] transition-all"
            autoFocus
          />
          <button
            type="submit"
            className={`p-2.5 rounded-full text-white transition-all shadow-md ${input.trim() ? 'bg-[#E31E24] hover:bg-red-700' : 'bg-gray-300 cursor-not-allowed'
              }`}
            disabled={!input.trim()}
          >
            <Send size={16} />
          </button>
        </form>
        <div className="text-center mt-2">
          <span className="text-[10px] text-gray-400">Powered by Sri Jayarama</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
