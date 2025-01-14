import { useState } from "react";
import { Header } from "@/components/Header";
import { PersonaSelection } from "@/components/PersonaSelection";
import { ChatInterface } from "@/components/ChatInterface";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { Footer } from "@/components/Footer";

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
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=analyst",
    fallback: "CA"
  },
  {
    id: 2,
    title: "NFT Enthusiast",
    description: "Specialized in NFT trends and marketplace insights",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=creative",
    fallback: "NE"
  },
  {
    id: 3,
    title: "Blockchain Developer",
    description: "Technical expert in Web3 development and smart contracts",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=developer",
    fallback: "BD"
  },
];

const Index = () => {
  const [selectedPersona, setSelectedPersona] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      isAi: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#1A1F2C] to-[#0F1218] text-white">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        {!selectedPersona ? (
          <PersonaSelection 
            selectedPersona={selectedPersona} 
            onSelectPersona={setSelectedPersona} 
          />
        ) : (
          <ChatInterface 
            selectedPersona={selectedPersona}
            messages={messages}
            onSendMessage={handleSendMessage}
            onChangePersona={() => setSelectedPersona(null)}
            personas={personas}
          />
        )}
      </main>
      <ComingSoonSection />
      <Footer />
    </div>
  );
};

export default Index;