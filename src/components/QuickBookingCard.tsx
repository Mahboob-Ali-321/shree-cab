import { useState } from "react";
import { Send, MapPin, Calendar, Clock, Car, Navigation } from "lucide-react";
import { createWhatsAppBookingUrl } from "../data";

interface QuickBookingCardProps {
  initialService?: string;
  initialFrom?: string;
  initialTo?: string;
  initialVehicle?: string;
  className?: string;
}

export default function QuickBookingCard({
  initialService = "Outstation Cab",
  initialFrom = "Dhanbad (Bartand / City)",
  initialTo = "",
  initialVehicle = "Sedan (Dzire / Etios)",
  className = "",
}: QuickBookingCardProps) {
  const [pickup, setPickup] = useState(initialFrom);
  const [drop, setDrop] = useState(initialTo);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carType, setCarType] = useState(initialVehicle);
  const [tripType, setTripType] = useState("One-Way");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl({
      pickup: pickup || "Dhanbad",
      drop: drop || "To be discussed",
      date: date || "Today / Flexible",
      time: time || "Immediate / Flexible",
      carType,
      service: `${tripType} ${initialService}`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-900/10 border border-slate-200/80 text-slate-800 ${className}`}
    >
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-500" />
            <span>Instant Cab Booking</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Get instant quote & confirmed car via WhatsApp
          </p>
        </div>

        {/* Trip Type Toggle */}
        <div className="flex items-center p-0.5 bg-slate-100 rounded-lg text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTripType("One-Way")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              tripType === "One-Way"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            One-Way
          </button>
          <button
            type="button"
            onClick={() => setTripType("Round-Trip")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              tripType === "Round-Trip"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Round-Trip
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Bartand / Bank More, Dhanbad"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
            />
          </div>
        </div>

        {/* Drop Destination */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Drop Destination
          </label>
          <div className="relative">
            <Navigation className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Kolkata Airport / Deoghar / Durgapur"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
            />
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Car Type Selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Select Car Type
          </label>
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
          >
            <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios) - 4 Seats AC</option>
            <option value="Prime SUV (Ertiga / Innova)">Prime SUV (Ertiga / Innova) - 6-7 Seats AC</option>
            <option value="Hatchback (Swift / WagonR)">Hatchback (Swift / WagonR) - 4 Seats AC</option>
            <option value="Tempo Traveller (12-17 Seats)">Tempo Traveller - 12 to 17 Seats AC</option>
          </select>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5B700] hover:bg-[#D9A100] active:scale-[0.99] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer min-h-[48px]"
        >
          <Send className="w-4 h-4 fill-current" />
          <span>Check Fare & Book on WhatsApp</span>
        </button>

        <p className="text-[11px] text-center text-slate-500 pt-1">
          ⚡ Instant confirmation · No advance payment needed for enquiry
        </p>
      </form>
    </div>
  );
}
