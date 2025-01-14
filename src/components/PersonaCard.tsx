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
        "group relative overflow-hidden rounded-2xl border p-6 transition-all hover:border-primary",
        isSelected ? "border-primary bg-primary/5" : "border-border"
      )}
    >
      <div className="mb-4 text-2xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <Button
        onClick={onClick}
        variant={isSelected ? "default" : "outline"}
        className="w-full font-semibold text-base bg-opacity-100 hover:bg-opacity-90"
      >
        {isSelected ? "Selected" : "Choose Persona"}
      </Button>
    </div>
  );
};