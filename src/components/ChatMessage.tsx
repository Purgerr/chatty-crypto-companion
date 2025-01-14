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
        "flex w-full max-w-3xl animate-fade-up items-start gap-2 md:gap-4 p-2 md:p-4",
        isAi ? "self-start" : "self-end"
      )}
    >
      <div
        className={cn(
          "relative rounded-xl p-4 md:p-6",
          isAi
            ? "bg-[#1E1B2E] text-white/90 border border-[#2A303C]"
            : "bg-[#9b87f5] text-white"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
        <span className="mt-2 block text-[10px] md:text-xs opacity-60">{timestamp}</span>
      </div>
    </div>
  );
};