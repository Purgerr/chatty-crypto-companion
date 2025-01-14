import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: string;
}

export const ChatMessage = ({ message, isAi, timestamp }: ChatMessageProps) => {
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
        <span className="mt-2 block text-[10px] md:text-xs opacity-60">{timestamp}</span>
      </div>
    </div>
  );
};