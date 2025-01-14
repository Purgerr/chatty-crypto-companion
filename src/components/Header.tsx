import { Home, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black/80 border-b border-[#2A303C]">
      <Button 
        variant="ghost" 
        size="icon"
        className="hover:bg-[#2A303C] text-[#9b87f5]"
        onClick={() => navigate('/')}
      >
        <Home className="h-5 w-5" />
      </Button>
      <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
        <Wallet className="h-4 w-4 mr-2" />
        Connect Wallet
      </Button>
    </header>
  );
};