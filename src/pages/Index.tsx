import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";

interface Message {
  id: number;
  content: string;
  isAi: boolean;
  timestamp: string;
}

const personas = [
  {
    id: 1,
    title: "Crypto Analyst",
    description: "Expert in cryptocurrency markets and trading strategies",
    fallback: "CA"
  },
  {
    id: 2,
    title: "NFT Enthusiast",
    description: "Specialized in NFT trends and marketplace insights",
    fallback: "NE"
  },
  {
    id: 3,
    title: "Blockchain Developer",
    description: "Technical expert in Web3 development and smart contracts",
    fallback: "BD"
  },
];

const Index = () => {
  const [selectedPersona, setSelectedPersona] = useState<number>(2);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      isAi: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        content: "I'm your Web3 AI assistant. How can I help you today?",
        isAi: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-screen bg-[#1A1F2C]">
      <div className="h-full">
        <ChatInterface 
          selectedPersona={selectedPersona}
          messages={messages}
          onSendMessage={handleSendMessage}
          onChangePersona={() => setSelectedPersona(selectedPersona === 1 ? 2 : (selectedPersona === 2 ? 3 : 1))}
          personas={personas}
        />
      </div>
    </div>
  );
};

export default Index;