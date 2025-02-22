import { Send } from "lucide-react";
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
            <Send className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-[#2A303C] hover:bg-[#232836] text-[#9b87f5]" asChild>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M12 6l-4 4h8z"/>
            </svg>
          </a>
        </Button>
      </div>
    </footer>
  );
};