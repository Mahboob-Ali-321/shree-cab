import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, ArrowUp, Calendar } from "lucide-react";
import { businessInfo } from "../data";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-22 right-4 sm:right-6 z-40 p-3 rounded-full bg-[#0B1F3A] text-amber-400 hover:bg-slate-800 border border-slate-700 shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-40 group">
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Shree Balajee Travels on WhatsApp"
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl shadow-emerald-950/40 transition-all duration-200 active:scale-95"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs sm:text-sm font-bold hidden sm:inline whitespace-nowrap">
            Chat on WhatsApp
          </span>
          {/* Subtle pulse ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Quick Action Bar with 3 buttons (Call | WhatsApp | Book Now) */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3A] border-t border-slate-800 shadow-2xl px-2.5 py-1.5 flex items-center justify-between gap-1.5 h-14"
      >
        {/* 1. Call */}
        <a
          href={businessInfo.telLink}
          className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-bold text-xs rounded-xl active:scale-98 transition-transform whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl active:scale-98 transition-transform whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* 3. Book Now */}
        <Link
          to="/book"
          className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl active:scale-98 transition-transform whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Cab</span>
        </Link>
      </nav>
    </>
  );
}
