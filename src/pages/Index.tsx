import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PersonaSelection } from "@/components/PersonaSelection";
import { ChatInterface } from "@/components/ChatInterface";
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

const getAiResponse = (personaId: number, userMessage: string) => {
  console.log('Generating AI response for persona:', personaId);
  
  const responses = {
    1: [
      "Based on current market trends, I'd recommend...",
      "The crypto market is showing interesting patterns...",
      "From a trading perspective, we should consider...",
      "Looking at the technical analysis...",
    ],
    2: [
      "The NFT marketplace is evolving rapidly...",
      "This collection shows promising potential...",
      "Current NFT trends indicate...",
      "From a collector's perspective...",
    ],
    3: [
      "The smart contract implementation should...",
      "From a blockchain architecture standpoint...",
      "The gas optimization techniques suggest...",
      "When developing Web3 applications...",
    ],
  };

  const personaResponses = responses[personaId as keyof typeof responses] || [];
  const randomIndex = Math.floor(Math.random() * personaResponses.length);
  return personaResponses[randomIndex];
};

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

    // Generate AI response
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
          <div className="flex flex-col min-h-screen w-full">
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full">
                <PersonaSelection 
                  selectedPersona={selectedPersona} 
                  onSelectPersona={setSelectedPersona} 
                />
                <div className="h-20" /> {/* Added spacing */}
              </div>
            </div>
            <Footer />
          </div>
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