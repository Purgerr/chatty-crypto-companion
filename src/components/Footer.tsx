import { MessageSquare, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 bg-[#1A1F2C] border-t border-[#2A303C] flex flex-col items-center gap-4">
      <span className="text-xl font-mono bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent font-bold">
        Logik Core AI
      </span>
      <div className="flex justify-center gap-4">
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </a>
        </Button>
      </div>
    </footer>
  );
};