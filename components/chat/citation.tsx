import { useState } from "react";
import { Citation } from "@/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";

export function CitationCircle({ citation, number }: { citation: Citation; number: number }) {
  const [open, setOpen] = useState(false);
  const hasSourceDescription = citation.source_description.trim() !== "";

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger>
        <div
          className="bg-gray-50 rounded-full px-2 py-0.5 hover:cursor-pointer hover:scale-105 inline-block"
          onClick={() => setOpen(true)}
        >
          <span>{number}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{hasSourceDescription ? citation.source_description : EMPTY_CITATION_MESSAGE}</p>
      </TooltipContent>
    </Tooltip>
  );
}
