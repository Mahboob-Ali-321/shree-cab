import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { businessInfo } from "../data";
import { useLanguage } from "./LanguageContext";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const { lang } = useLanguage();

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-2 sm:px-4 py-1.5 text-xs font-semibold relative flex items-center justify-between border-b border-amber-600/20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 w-full text-center min-w-0 pr-1">
        <Sparkles className="w-3.5 h-3.5 shrink-0 hidden sm:inline" />
        
        {/* Mobile short text under 640px */}
        <span className="sm:hidden truncate text-[11px] font-bold">
          {lang === "hi" ? "24x7 कैब सेवा उपलब्ध" : "24x7 Dhanbad & Outstation Cabs"}
        </span>

        {/* Full text on 640px+ */}
        <span className="hidden sm:inline truncate">
          {lang === "hi" ? businessInfo.announcementHi : businessInfo.announcement}
        </span>

        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-white transition-colors shrink-0 text-[11px] sm:text-xs ml-1"
        >
          Book Now →
        </a>
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="p-1 hover:bg-amber-600/20 rounded-md transition-colors shrink-0 ml-1"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
