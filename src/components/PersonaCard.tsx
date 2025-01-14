import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PersonaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const PersonaCard = ({
  title,
  description,
  icon,
  isSelected,
  onClick,
}: PersonaCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300 font-mono",
        isSelected 
          ? "border-[#9b87f5] bg-[#1E1B2E] shadow-lg shadow-[#9b87f5]/20" 
          : "border-[#2A303C] bg-[#1E1B2E] hover:border-[#9b87f5]/50"
      )}
    >
      <div className="p-6 space-y-4">
        <div className="text-2xl text-[#9b87f5]">{icon}</div>
        <h3 className="text-lg font-bold text-white/90">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        <Button
          onClick={onClick}
          variant={isSelected ? "default" : "outline"}
          className={cn(
            "w-full font-semibold text-base transition-all duration-300",
            isSelected 
              ? "bg-[#9b87f5] hover:bg-[#8B5CF6] text-white" 
              : "border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
          )}
        >
          {isSelected ? "Selected" : "Choose Persona"}
        </Button>
      </div>
    </div>
  );
};