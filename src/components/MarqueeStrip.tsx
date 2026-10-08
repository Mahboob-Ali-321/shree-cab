import { Star, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function MarqueeStrip() {
  const items = [
    { text: "Dhanbad", icon: MapPin },
    { text: "Kolkata Airport", icon: MapPin },
    { text: "Deoghar Baidyanath Dham", icon: MapPin },
    { text: "Durgapur", icon: MapPin },
    { text: "Ranchi Airport", icon: MapPin },
    { text: "Gaya & Bodhgaya", icon: MapPin },
    { text: "Patna", icon: MapPin },
    { text: "Bokaro Steel City", icon: MapPin },
    { text: "Jamshedpur Tatanagar", icon: MapPin },
    { text: "4.8★ Google Rating (151+ Reviews)", icon: Star },
    { text: "24x7 On-Time Dispatch", icon: Clock },
    { text: "Sanitized AC Cabs", icon: ShieldCheck },
  ];

  return (
    <div className="w-full max-w-full bg-[#071527] border-y border-slate-800 text-slate-300 py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-slate-200">{item.text}</span>
              <span className="text-slate-600 pl-4">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
