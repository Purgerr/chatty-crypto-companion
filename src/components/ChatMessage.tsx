import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, AudioLines, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast({
      description: "Message copied to clipboard",
      duration: 2000,
    });
    console.log('Message copied:', message);
  };

  const handleAudio = () => {
    toast({
      description: "Audio feature coming soon!",
      duration: 2000,
    });
    console.log('Audio button clicked for message:', message);
  };

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
    console.log('Message liked:', message);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
    console.log('Message disliked:', message);
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-3xl animate-fade-up items-start gap-2 md:gap-4 p-2 md:p-4",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative flex flex-col gap-2",
          isAi ? "text-white/90" : "text-[#9b87f5]"
        )}
      >
        <p className="font-mono text-sm md:text-base leading-relaxed">{message}</p>
        
        {isAi && (
          <div className="flex gap-2 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-white"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-white"
              onClick={handleAudio}
            >
              <AudioLines className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8",
                liked 
                  ? "text-green-500 hover:text-green-600" 
                  : "text-muted-foreground hover:text-white"
              )}
              onClick={handleLike}
            >
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8",
                disliked 
                  ? "text-red-500 hover:text-red-600" 
                  : "text-muted-foreground hover:text-white"
              )}
              onClick={handleDislike}
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};