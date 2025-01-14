import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-3 p-4 bg-[#1A1F2C] border-t border-[#2A303C]"
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-transparent border-[#2A303C] text-white font-mono placeholder:text-white/40 focus-visible:ring-[#9b87f5]"
      />
      <Button 
        type="submit" 
        size="icon"
        className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};