import { Home, Twitter, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#1A1F2C] border-b border-[#2A303C]">
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-[#2A303C] text-[#9b87f5]"
          onClick={() => navigate('/')}
        >
          <Home className="h-5 w-5" />
        </Button>
        <span className="text-xl font-mono bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent font-bold">Logik Core AI</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-[#2A303C] text-[#9b87f5]"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-[#2A303C] text-[#9b87f5]"
            onClick={() => window.open('https://discord.com', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-[#2A303C] text-[#9b87f5]"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="h-5 w-5" />
          </Button>
        </div>
        <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};