import { Home, Send, Twitter, Github } from "lucide-react";
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
            <svg 
              viewBox="0 0 24 24" 
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-[#2A303C] text-[#9b87f5]"
            onClick={() => window.open('https://t.me', '_blank')}
          >
            <Send className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-[#2A303C] text-[#9b87f5]"
            onClick={() => window.open('https://dexscreener.com', '_blank')}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M12 6l-4 4h8z"/>
            </svg>
          </Button>
        </div>
        <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};