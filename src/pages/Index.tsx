import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";
import { PersonaCard } from "@/components/PersonaCard";
import { Brain, Coins, Code, Wallet, Home, ExternalLink, MessageSquare } from "lucide-react";
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
    <div className="flex min-h-screen flex-col items-center bg-[#1A1F2C] text-white">
      {/* Navigation Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-[#232836] border-b border-[#2A303C]">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-[#2A303C] text-white"
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
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                Logik Core AI
              </h1>
              <h2 className="mb-4 text-4xl font-bold text-white">Choose Your AI Persona</h2>
              <p className="text-lg text-gray-400">
                Select a specialized AI assistant to help you navigate the Web3 space
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {personas.map((persona) => (
                <div key={persona.id} className="flex flex-col items-center">
                  <Avatar className="mb-6 h-24 w-24 ring-2 ring-[#9b87f5] ring-offset-2 ring-offset-[#1A1F2C]">
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
            <div className="mb-8 flex w-full max-w-3xl items-center justify-between rounded-lg bg-[#232836] p-4">
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
                <span className="font-medium text-white">
                  {personas.find((p) => p.id === selectedPersona)?.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPersona(null)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
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

      {/* Create an Agent Section */}
      <div className="w-full px-6 py-8 bg-[#232836]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Create an Agent</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-gray-400" disabled>
              <MessageSquare className="h-4 w-4" />
              TikTok
              <span className="text-xs">(Coming Soon)</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-gray-400" disabled>
              <MessageSquare className="h-4 w-4" />
              WhatsApp
              <span className="text-xs">(Coming Soon)</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-gray-400" disabled>
              <MessageSquare className="h-4 w-4" />
              Twitter
              <span className="text-xs">(Coming Soon)</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer with Social Links */}
      <footer className="w-full px-6 py-4 bg-[#1A1F2C] flex justify-center gap-4">
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836]" asChild>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836]" asChild>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836]" asChild>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </a>
        </Button>
      </footer>
    </div>
  );
};

export default Index;