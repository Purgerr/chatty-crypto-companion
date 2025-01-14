import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, Copy, AudioLines, Image } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: string;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    toast.success("Message liked!");
  };

  const handleDislike = () => {
    setDislikes(prev => prev + 1);
    toast.success("Message disliked!");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Message copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy message");
    }
  };

  const handleAudio = () => {
    // Text-to-speech functionality would go here
    toast.info("Audio feature coming soon!");
  };

  const handleImage = () => {
    // Image generation functionality would go here
    toast.info("Image generation coming soon!");
  };

  return (
    <div
      className={cn(
        "flex w-full animate-fade-up items-start gap-2 md:gap-4 p-2 md:p-4",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div className={cn(
        "font-mono text-sm md:text-base max-w-[80%]",
        isAi ? "text-[#2DD4BF]" : "text-[#9b87f5]"
      )}>
        <p className="leading-relaxed">{message}</p>
        
        <div className="mt-2 flex items-center gap-2 text-gray-400">
          <button 
            onClick={handleAudio}
            className="hover:text-[#2DD4BF] transition-colors"
          >
            <AudioLines size={16} />
          </button>
          
          <button 
            onClick={handleCopy}
            className="hover:text-[#2DD4BF] transition-colors"
          >
            <Copy size={16} />
          </button>
          
          <button 
            onClick={handleLike}
            className="hover:text-[#2DD4BF] transition-colors flex items-center gap-1"
          >
            <ThumbsUp size={16} />
            {likes > 0 && <span className="text-xs">{likes}</span>}
          </button>
          
          <button 
            onClick={handleDislike}
            className="hover:text-[#2DD4BF] transition-colors flex items-center gap-1"
          >
            <ThumbsDown size={16} />
            {dislikes > 0 && <span className="text-xs">{dislikes}</span>}
          </button>
          
          <button 
            onClick={handleImage}
            className="hover:text-[#2DD4BF] transition-colors"
          >
            <Image size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};