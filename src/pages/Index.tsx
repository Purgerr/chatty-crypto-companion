import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";
import { PersonaCard } from "@/components/PersonaCard";
import { Brain, Coins, Code, Wallet, Home, Twitter, MessageSquare, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

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
    icon: <Coins className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=analyst", // Anime-style analyst
    fallback: "CA"
  },
  {
    id: 2,
    title: "NFT Enthusiast",
    description: "Specialized in NFT trends and marketplace insights",
    icon: <Brain className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=creative", // Anime-style creative
    fallback: "NE"
  },
  {
    id: 3,
    title: "Blockchain Developer",
    description: "Technical expert in Web3 development and smart contracts",
    icon: <Code className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=developer", // Anime-style developer
    fallback: "BD"
  },
];

const Index = () => {
  const navigate = useNavigate();
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
    <div className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Navigation Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-black/80 border-b border-[#2A303C]">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-[#2A303C] text-[#9b87f5]"
          onClick={() => navigate('/')}
        >
          <Home className="h-5 w-5" />
        </Button>
        <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      </header>

      <main className="container flex flex-1 flex-col items-center py-8 px-4">
        {!selectedPersona ? (
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-black tracking-wider mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent uppercase [text-shadow:_2px_2px_10px_rgb(155_135_245_/_20%)] transform transition-all hover:scale-105">
                Logik Core AI
              </h1>
              <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent">Choose Your AI Persona</h2>
              <p className="text-lg text-[#9b87f5]">
                Select a specialized AI assistant to help you navigate the Web3 space
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {personas.map((persona) => (
                <div key={persona.id} className="flex flex-col items-center">
                  <Avatar className="mb-6 h-24 w-24 ring-2 ring-[#9b87f5] ring-offset-2 ring-offset-black">
                    <AvatarImage src={persona.image} alt={persona.title} />
                    <AvatarFallback>{persona.fallback}</AvatarFallback>
                  </Avatar>
                  <PersonaCard
                    title={persona.title}
                    description={persona.description}
                    icon={persona.icon}
                    isSelected={selectedPersona === persona.id}
                    onClick={() => setSelectedPersona(persona.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-1 flex-col items-center">
            <div className="mb-8 flex w-full max-w-3xl items-center justify-between rounded-lg bg-black/80 p-4 border border-[#2A303C]">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-[#9b87f5]">
                  <AvatarImage 
                    src={personas.find(p => p.id === selectedPersona)?.image} 
                    alt={personas.find(p => p.id === selectedPersona)?.title} 
                  />
                  <AvatarFallback>
                    {personas.find(p => p.id === selectedPersona)?.fallback}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-[#9b87f5]">
                  {personas.find((p) => p.id === selectedPersona)?.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPersona(null)}
                className="text-sm text-[#9b87f5] hover:text-[#D946EF] transition-colors"
              >
                Change Persona
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center space-y-4 w-full max-w-3xl">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  isAi={message.isAi}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
            <div className="w-full max-w-3xl mt-4">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        )}
      </main>

      {/* Create an AI Agent Section */}
      <div className="w-full px-6 py-8 bg-black/80 border-t border-[#2A303C]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black tracking-wider mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent uppercase [text-shadow:_2px_2px_10px_rgb(155_135_245_/_20%)]">
            Create an AI Agent
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF]" disabled>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
              <span className="text-xs">(Coming Soon)</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF]" disabled>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
              <span className="text-xs">(Coming Soon)</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF]" disabled>
              <Twitter className="h-4 w-4" />
              Twitter
              <span className="text-xs">(Coming Soon)</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer with Social Links */}
      <footer className="w-full px-6 py-4 bg-black flex justify-center gap-4">
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </a>
        </Button>
      </footer>
    </div>
  );
};

export default Index;