import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ChatInterface } from "@/components/ChatInterface";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { getAiResponse } from "@/utils/aiResponses";
import type { Message, Persona } from "@/types/chat";

const personas: Persona[] = [
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

    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        content: selectedPersona 
          ? getAiResponse(selectedPersona, content)
          : "I'm your Web3 AI assistant. How can I help you today?",
        isAi: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#1A1F2C]">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4 flex items-center justify-center">
        {!selectedPersona ? (
          <WelcomeScreen 
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
    </div>
  );
};

export default Index;