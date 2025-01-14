import { Footer } from "@/components/Footer";
import { PersonaSelection } from "@/components/PersonaSelection";

interface WelcomeScreenProps {
  selectedPersona: number | null;
  onSelectPersona: (id: number) => void;
}

export const WelcomeScreen = ({ selectedPersona, onSelectPersona }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full">
          <PersonaSelection 
            selectedPersona={selectedPersona} 
            onSelectPersona={onSelectPersona} 
          />
          <div className="h-20" /> {/* Spacing */}
        </div>
      </div>
      <Footer />
    </div>
  );
};