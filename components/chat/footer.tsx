import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs text-gray-500 border-t border-gray-200 py-3 px-6 flex justify-between items-center">
      {/* Left - Terms of Service */}
      <Link href="/terms" className="hover:underline">
        Terms of Service
      </Link>

      {/* Center - Footer Message */}
      <div className="text-center">{FOOTER_MESSAGE}</div>

      {/* Right - Powered by Ringel.AI */}
      <a
        href="http://www.ringel.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        powered by ringel.AI
      </a>
    </div>
  );
}

