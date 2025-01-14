import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-3xl animate-fade-up items-start gap-2 md:gap-4 p-2 md:p-4",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative font-mono text-sm md:text-base leading-relaxed p-4 rounded-lg",
          isAi 
            ? "bg-[#1e1e1e]/50 text-white/90 border border-white/10"
            : "bg-[#9b87f5]/10 text-[#9b87f5] border border-[#9b87f5]/20"
        )}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};