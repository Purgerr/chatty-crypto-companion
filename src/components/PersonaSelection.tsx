import { Brain, Coins, Code } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PersonaCard } from "@/components/PersonaCard";

const personas = [
  {
    id: 1,
    title: "Crypto Analyst",
    description: "Expert in cryptocurrency markets and trading strategies",
    icon: <Coins className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=analyst",
    fallback: "CA"
  },
  {
    id: 2,
    title: "NFT Enthusiast",
    description: "Specialized in NFT trends and marketplace insights",
    icon: <Brain className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=creative",
    fallback: "NE"
  },
  {
    id: 3,
    title: "Blockchain Developer",
    description: "Technical expert in Web3 development and smart contracts",
    icon: <Code className="h-8 w-8" />,
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=developer",
    fallback: "BD"
  },
];

interface PersonaSelectionProps {
  selectedPersona: number | null;
  onSelectPersona: (id: number) => void;
}

export const PersonaSelection = ({ selectedPersona, onSelectPersona }: PersonaSelectionProps) => {
  return (
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
              onClick={() => onSelectPersona(persona.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};