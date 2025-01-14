import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  personaId?: number;
}

export const ChatMessage = ({ message, isAi, personaId }: ChatMessageProps) => {
  const isCryptoAnalyst = personaId === 1;

  return (
    <div
      className={cn(
        "flex w-full max-w-3xl animate-fade-up items-start gap-2 md:gap-4 p-2 md:p-4",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative font-mono text-sm md:text-base leading-relaxed",
          isAi && isCryptoAnalyst && "bg-[#1E1B2E] p-4 md:p-6 rounded-xl border border-[#2A303C]",
          isAi ? "text-white/90" : "text-[#9b87f5]"
        )}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};