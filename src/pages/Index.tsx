import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";
import { PersonaCard } from "@/components/PersonaCard";
import { Brain, Coins, Code } from "lucide-react";

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
  },
  {
    id: 2,
    title: "NFT Enthusiast",
    description: "Specialized in NFT trends and marketplace insights",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "Blockchain Developer",
    description: "Technical expert in Web3 development and smart contracts",
    icon: <Code className="h-8 w-8" />,
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
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-background to-accent/20">
      <main className="container flex flex-1 flex-col items-center py-8">
        {!selectedPersona ? (
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold">Choose Your AI Persona</h1>
              <p className="text-lg text-muted-foreground">
                Select a specialized AI assistant to help you navigate the Web3
                space
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {personas.map((persona) => (
                <PersonaCard
                  key={persona.id}
                  title={persona.title}
                  description={persona.description}
                  icon={persona.icon}
                  isSelected={selectedPersona === persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-1 flex-col items-center">
            <div className="mb-8 flex w-full max-w-3xl items-center justify-between rounded-lg bg-accent/50 p-4">
              <div className="flex items-center gap-3">
                {personas.find((p) => p.id === selectedPersona)?.icon}
                <span className="font-medium">
                  {personas.find((p) => p.id === selectedPersona)?.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPersona(null)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Change Persona
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  isAi={message.isAi}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;