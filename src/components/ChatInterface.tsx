import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";
import type { Message, Persona } from "@/types/chat";

interface ChatInterfaceProps {
  selectedPersona: number;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onChangePersona: () => void;
  personas: Persona[];
}

export const ChatInterface = ({
  selectedPersona,
  messages,
  onSendMessage,
  onChangePersona,
  personas,
}: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState("");
  const selectedPersonaDetails = personas.find((p) => p.id === selectedPersona);

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#1E1B2E] rounded-xl border border-[#2A303C] overflow-hidden">
      {/* Header Section */}
      <div className="p-4 border-b border-[#2A303C] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#9b87f5] font-bold">
            {selectedPersonaDetails?.title || "AI Assistant"}
          </span>
        </div>
        <Button
          variant="outline"
          onClick={onChangePersona}
          className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
        >
          Change Persona
        </Button>
      </div>

      {/* Chat Messages Section */}
      <ScrollArea className="h-[500px] p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      {/* Input Section */}
      <div className="p-4 border-t border-[#2A303C]">
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={onSendMessage}
        />
      </div>
    </div>
  );
};