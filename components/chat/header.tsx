import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} className="rounded-full" />
    <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-between items-center fixed top-0 w-full px-6 py-4 bg-white shadow-md border-b border-gray-200">
      {/* Logo & Chat Title */}
      <div className="flex items-center gap-3">
        <AILogo />
        <h1 className="text-lg font-semibold text-gray-800">{CHAT_HEADER}</h1>
      </div>

      {/* Clear Button - Navy Blue */}
      <Button
        onClick={clearMessages}
        className="flex items-center gap-2 bg-[#001F3F] text-white hover:bg-[#003366] px-4 py-2 rounded-md transition-all"
      >
        <EraserIcon className="w-4 h-4" />
        <span>{CLEAR_BUTTON_TEXT}</span>
      </Button>
    </div>
  );
}

