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
      <div className="mb-4 md:mb-8 flex w-full max-w-3xl items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="font-mono text-sm md:text-base text-[#9b87f5]">
            {currentPersona?.title}
          </span>
        </div>
        <button
          onClick={onChangePersona}
          className="font-mono text-xs md:text-sm text-[#9b87f5] hover:text-[#D946EF] transition-colors"
        >
          Change Persona
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center space-y-3 md:space-y-4 w-full max-w-3xl px-2 md:px-0 mb-24">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isAi={message.isAi}
            personaId={selectedPersona}
          />
        ))}
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};