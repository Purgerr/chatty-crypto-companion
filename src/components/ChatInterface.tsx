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
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mb-4 md:mb-8 flex w-full max-w-3xl items-center justify-between rounded-lg bg-[#1E1B2E] p-3 md:p-4 border border-[#2A303C]">
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
      <div className="flex flex-1 flex-col items-center space-y-3 md:space-y-4 w-full max-w-3xl px-2 md:px-0">
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