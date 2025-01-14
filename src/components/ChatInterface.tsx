import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";

interface Message {
  id: number;
  content: string;
  isAi: boolean;
  timestamp: string;
}

interface ChatInterfaceProps {
  selectedPersona: number;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onChangePersona: () => void;
  personas: Array<{
    id: number;
    title: string;
    image: string;
    fallback: string;
  }>;
}

export const ChatInterface = ({ 
  selectedPersona, 
  messages, 
  onSendMessage, 
  onChangePersona,
  personas 
}: ChatInterfaceProps) => {
  const currentPersona = personas.find(p => p.id === selectedPersona);

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mb-8 flex w-full max-w-3xl items-center justify-between rounded-lg bg-black/80 p-4 border border-[#2A303C]">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-[#9b87f5]">
            <AvatarImage src={currentPersona?.image} alt={currentPersona?.title} />
            <AvatarFallback>{currentPersona?.fallback}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-[#9b87f5]">
            {currentPersona?.title}
          </span>
        </div>
        <button
          onClick={onChangePersona}
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
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};