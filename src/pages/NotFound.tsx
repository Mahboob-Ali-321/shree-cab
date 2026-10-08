import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Phone, MessageSquare, Car } from "lucide-react";
import { businessInfo } from "../data";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-5">
        {/* Animated Car Icon driving on road line */}
        <div className="relative h-12 flex items-center justify-center overflow-hidden">
          <div className="w-full h-1 bg-slate-200 rounded-full" />
          <motion.div
            animate={{ x: [-80, 80, -80] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute p-2 bg-[#0B1F3A] rounded-full text-amber-400 border border-amber-400 shadow-md"
          >
            <Car className="w-5 h-5" />
          </motion.div>
        </div>

        <div>
          <span className="text-5xl font-black text-amber-500 block">404</span>
          <h1 className="text-xl font-extrabold text-slate-900 mt-1">Route Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Looks like this road doesn't lead anywhere. Don't worry, Shree Balajee Travels can get you back on track!
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0B1F3A] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <a
            href={businessInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book Cab on WhatsApp</span>
          </a>

          <a
            href={businessInfo.telLink}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-amber-600 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Need Help? Call: {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
