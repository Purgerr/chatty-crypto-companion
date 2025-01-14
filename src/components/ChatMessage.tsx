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
        "flex w-full max-w-3xl animate-fade-up items-start gap-4 p-4",
        isAi ? "self-start" : "self-end"
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl p-6",
          isAi
            ? "bg-accent text-accent-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm md:text-base">{message}</p>
        <span className="mt-2 block text-xs opacity-70">{timestamp}</span>
      </div>
    </div>
  );
};