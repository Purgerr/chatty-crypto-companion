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
    <div className="flex h-screen flex-col">
      <div className="mb-4 flex w-full items-center justify-between rounded-lg bg-[#1E1B2E] p-3 md:p-4 border border-[#2A303C]">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="font-medium text-sm md:text-base text-[#9b87f5]">
            {currentPersona?.title}
          </span>
        </div>
        <button
          onClick={onChangePersona}
          className="text-xs md:text-sm text-[#9b87f5] hover:text-[#D946EF] transition-colors"
        >
          Change Persona
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4">
        <div className="flex flex-col space-y-3 md:space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isAi={message.isAi}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-[#2A303C] bg-[#1A1F2C] p-4">
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};