import { useState } from "react";
import { 
  Send, 
  MapPin, 
  Calendar, 
  Clock, 
  Car, 
  Navigation, 
  Plane, 
  Users, 
  CheckCircle2
} from "lucide-react";
import { createWhatsAppBookingUrl } from "../data";

type TabType = "outstation" | "local" | "airport" | "hourly";

interface BookingWidgetProps {
  className?: string;
  defaultTab?: TabType;
  initialFrom?: string;
  initialTo?: string;
}

export default function BookingWidget({
  className = "",
  defaultTab = "outstation",
  initialFrom = "Dhanbad",
  initialTo = "",
}: BookingWidgetProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  // Common State
  const [pickup, setPickup] = useState(initialFrom);
  const [drop, setDrop] = useState(initialTo);
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [carType, setCarType] = useState("Sedan (Dzire / Etios)");
  const [passengers, setPassengers] = useState("1 - 4 Passengers");
  const [tripType, setTripType] = useState<"One-Way" | "Round-Trip">("One-Way");

  // Tab-specific State
  const [transitHub, setTransitHub] = useState("Kolkata Airport (CCU)");
  const [flightOrTrainNo, setFlightOrTrainNo] = useState("");
  const [hourlyPackage, setHourlyPackage] = useState("8 Hours / 80 Kilometers");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let serviceName = "Outstation Cab";
    let finalPickup = pickup || "Dhanbad";
    let finalDrop = drop || "To be discussed";
    let extraNotes = notes;

    if (activeTab === "outstation") {
      serviceName = `Outstation (${tripType})`;
      if (tripType === "Round-Trip" && returnDate) {
        extraNotes = `Return Date: ${returnDate}. ${notes}`;
      }
    } else if (activeTab === "local") {
      serviceName = "Local Dhanbad Taxi";
      finalDrop = drop || "Local Sightseeing / Errand in Dhanbad";
    } else if (activeTab === "airport") {
      serviceName = `Airport / Railway Station Transfer (${transitHub})`;
      finalDrop = transitHub;
      if (flightOrTrainNo) {
        extraNotes = `Flight/Train Number: ${flightOrTrainNo}. ${notes}`;
      }
    } else if (activeTab === "hourly") {
      serviceName = `Hourly Rental Package (${hourlyPackage})`;
      finalDrop = `Within Dhanbad city limits (${hourlyPackage})`;
    }

    const url = createWhatsAppBookingUrl({
      service: serviceName,
      tripType: activeTab === "outstation" ? tripType : undefined,
      pickup: finalPickup,
      drop: finalDrop,
      date: travelDate || "Today / Urgent",
      time: pickupTime || "Flexible",
      carType,
      passengers,
      duration: activeTab === "hourly" ? hourlyPackage : undefined,
      message: extraNotes || "Please share quotation and confirm car.",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-7 shadow-2xl border border-slate-200/90 text-slate-800 w-full max-w-full ${className}`}
    >
      {/* Tab Switcher: Horizontally scrollable row on mobile without breaking, grid on sm+ */}
      <div className="flex sm:grid sm:grid-cols-4 gap-1.5 p-1.5 bg-slate-100 rounded-2xl mb-5 sm:mb-6 text-xs font-bold overflow-x-auto no-scrollbar whitespace-nowrap">
        <button
          type="button"
          onClick={() => setActiveTab("outstation")}
          className={`py-2 px-3 rounded-xl transition-all cursor-pointer shrink-0 sm:shrink min-h-[40px] ${
            activeTab === "outstation"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Outstation Cabs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("local")}
          className={`py-2 px-3 rounded-xl transition-all cursor-pointer shrink-0 sm:shrink min-h-[40px] ${
            activeTab === "local"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Local City Taxi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("airport")}
          className={`py-2 px-3 rounded-xl transition-all cursor-pointer shrink-0 sm:shrink min-h-[40px] ${
            activeTab === "airport"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Airport & Station
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("hourly")}
          className={`py-2 px-3 rounded-xl transition-all cursor-pointer shrink-0 sm:shrink min-h-[40px] ${
            activeTab === "hourly"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Hourly Rental
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Outstation specific: Trip type pill toggle */}
        {activeTab === "outstation" && (
          <div className="flex flex-wrap items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-xs font-semibold text-slate-500">Trip Format:</span>
            <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => setTripType("One-Way")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer min-h-[36px] ${
                  tripType === "One-Way"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                One-Way
              </button>
              <button
                type="button"
                onClick={() => setTripType("Round-Trip")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer min-h-[36px] ${
                  tripType === "Round-Trip"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Round-Trip
              </button>
            </div>
          </div>
        )}

        {/* Pickup & Drop Inputs (1 col on mobile, 2 cols from sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Pickup Point
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. Bartand / Bank More, Dhanbad"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
              />
            </div>
          </div>

          <div className="w-full">
            {activeTab === "airport" ? (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Airport / Railway Hub
                </label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={transitHub}
                    onChange={(e) => setTransitHub(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
                  >
                    <option value="Kolkata Airport (CCU)">Kolkata Airport (CCU)</option>
                    <option value="Kazi Nazrul Islam Airport Durgapur (RDP)">Durgapur Andal Airport (RDP)</option>
                    <option value="Birsa Munda Airport Ranchi (IXR)">Ranchi Airport (IXR)</option>
                    <option value="Dhanbad Railway Junction">Dhanbad Railway Junction</option>
                    <option value="Howrah Railway Station (Kolkata)">Howrah Railway Station</option>
                    <option value="Asansol Junction">Asansol Junction</option>
                    <option value="Bokaro Steel City Station">Bokaro Railway Station</option>
                  </select>
                </div>
              </div>
            ) : activeTab === "hourly" ? (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Hourly Rental Package
                </label>
                <select
                  value={hourlyPackage}
                  onChange={(e) => setHourlyPackage(e.target.value)}
                  className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
                >
                  <option value="4 Hours / 40 Kilometers">4 Hours / 40 Kilometers (Short)</option>
                  <option value="8 Hours / 80 Kilometers">8 Hours / 80 Kilometers (Full Day)</option>
                  <option value="12 Hours / 120 Kilometers">12 Hours / 120 Kilometers (Extended)</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  {activeTab === "local" ? "Destination in Dhanbad" : "Drop Destination"}
                </label>
                <div className="relative">
                  <Navigation className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder={
                      activeTab === "local"
                        ? "e.g. Hirapur / Saraidhela / Govindpur"
                        : "e.g. Kolkata / Deoghar / Durgapur"
                    }
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Date & Time Row (Full width inputs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full pl-10 pr-3 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-10 pr-3 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* If Outstation Round-Trip: Return Date */}
        {activeTab === "outstation" && tripType === "Round-Trip" && (
          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Return Journey Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-10 pr-3 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
              />
            </div>
          </div>
        )}

        {/* Vehicle & Passengers Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Car Preference
            </label>
            <div className="relative">
              <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
              >
                <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios) - 4 Seats AC</option>
                <option value="Prime SUV (Ertiga)">Prime SUV (Ertiga) - 6-7 Seats AC</option>
                <option value="Innova Crysta">Toyota Innova Crysta - 7 Seats Luxury</option>
                <option value="Hatchback (Swift / WagonR)">Hatchback (Swift / WagonR) - Budget</option>
                <option value="Tempo Traveller (13-17 Seater)">Tempo Traveller - 13 to 17 Seats</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              No. of Passengers
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors cursor-pointer"
              >
                <option value="1 - 2 Passengers">1 - 2 Passengers</option>
                <option value="3 - 4 Passengers">3 - 4 Passengers</option>
                <option value="5 - 6 Passengers">5 - 6 Passengers</option>
                <option value="7+ Passengers (Group)">7+ Passengers (Group / Family)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Airport specific: Flight/Train No */}
        {activeTab === "airport" && (
          <div className="w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Flight / Train Number (For Delay Monitoring)
            </label>
            <input
              type="text"
              placeholder="e.g. 6E-205 / 12301 Rajdhani Express"
              value={flightOrTrainNo}
              onChange={(e) => setFlightOrTrainNo(e.target.value)}
              className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
            />
          </div>
        )}

        {/* Optional Notes */}
        <div className="w-full">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Special Requests / Luggage Notes
          </label>
          <input
            type="text"
            placeholder="e.g. Extra luggage space, baby in car, urgent pickup..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3.5 py-3 sm:py-2 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 transition-colors"
          />
        </div>

        {/* Submit to WhatsApp Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#F5B700] hover:bg-[#D9A100] active:scale-98 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer min-h-[48px]"
        >
          <Send className="w-4 h-4 fill-current shrink-0" />
          <span>Confirm on WhatsApp (Instant Response)</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] text-slate-500 pt-1 text-center">
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            No advance fee required
          </span>
          <span>·</span>
          <span>Open 24 Hours / 7 Days</span>
        </div>
      </form>
    </div>
  );
}
