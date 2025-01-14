import { MessageCircle, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ComingSoonSection = () => {
  return (
    <div className="w-full px-4 md:px-6 py-6 md:py-8 bg-black/80 border-t border-[#2A303C]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-black tracking-wider mb-4 md:mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent uppercase [text-shadow:_2px_2px_10px_rgb(155_135_245_/_20%)]">
          Create an AI Agent
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF] text-sm" disabled>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTok
            <span className="text-xs">(Soon)</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF] text-sm" disabled>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
            <span className="text-xs">(Soon)</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 border-[#2A303C] text-[#9b87f5] hover:text-[#D946EF] text-sm" disabled>
            <Twitter className="h-4 w-4" />
            Twitter
            <span className="text-xs">(Soon)</span>
          </Button>
        </div>
      </div>
    </div>
  );
};