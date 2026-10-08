import { useState, useId } from "react";
import { Calculator, MessageSquare, Info } from "lucide-react";
import { routesData, vehicleRates, businessInfo, createWhatsAppBookingUrl } from "../data";

export default function FareEstimator() {
  const [selectedRouteId, setSelectedRouteId] = useState<string>("dhanbad-to-kolkata");
  const [isCustomKm, setIsCustomKm] = useState(false);
  const [customKm, setCustomKm] = useState(150);
  const [vehicleId, setVehicleId] = useState<string>("sedan");
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [days, setDays] = useState(1);

  const routeSelectId = useId();
  const carSelectId = useId();

  // Find selected route
  const currentRoute = routesData.find((r) => r.id === selectedRouteId) || routesData[0];
  const selectedVehicle = vehicleRates[vehicleId] || vehicleRates.sedan;

  // Calculate Distance
  const baseKm = isCustomKm ? customKm : currentRoute.distanceKm;
  const totalKm = tripType === "round-trip" ? baseKm * 2 : baseKm;

  // Minimum billing km logic for outstation
  const minKm = selectedVehicle.minKmPerDay * days;
  const effectiveKm = Math.max(totalKm, tripType === "round-trip" ? minKm : totalKm);

  // Fare calculations
  const baseRideFare = Math.round(effectiveKm * selectedVehicle.perKmRate);
  const driverAllowance = selectedVehicle.driverAllowancePerDay * days;
  const minEstimatedTotal = baseRideFare + driverAllowance;
  const maxEstimatedTotal = Math.round(minEstimatedTotal * 1.08); // reasonable buffer for local halts

  const handleBookOnWhatsApp = () => {
    const routeTitle = isCustomKm ? `Custom Distance (${customKm} km)` : currentRoute.title;
    const url = createWhatsAppBookingUrl({
      service: `Fare Estimator Booking: ${tripType === "round-trip" ? "Round Trip" : "One Way"}`,
      tripType: tripType === "round-trip" ? "Round-Trip" : "One-Way",
      pickup: isCustomKm ? "Dhanbad" : currentRoute.from,
      drop: isCustomKm ? `${customKm} km away` : currentRoute.to,
      carType: selectedVehicle.name,
      estimatedFare: `₹${minEstimatedTotal.toLocaleString("en-IN")} - ₹${maxEstimatedTotal.toLocaleString("en-IN")} (Approx ${effectiveKm} km)`,
      message: `Calculated via Fare Estimator: Route=${routeTitle}, Vehicle=${selectedVehicle.name}, Days=${days}. Please verify and share final quote.`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/90 shadow-xl text-slate-800 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Instant Outstation Fare Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Calculate accurate fare estimates based on actual highway distances and transparent per-km rates.
          </p>
        </div>

        {/* Trip Type Segmented Toggle */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold self-start sm:self-auto w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setTripType("one-way")}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg transition-all cursor-pointer min-h-[40px] ${
              tripType === "one-way"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            One-Way Drop
          </button>
          <button
            type="button"
            onClick={() => setTripType("round-trip")}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg transition-all cursor-pointer min-h-[40px] ${
              tripType === "round-trip"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Round-Trip Return
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6">
        {/* Left Form Controls (Stacked on mobile, 7 cols on lg) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Route Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between text-xs gap-1">
            <span className="font-semibold text-slate-700">Select Journey Route:</span>
            <button
              type="button"
              onClick={() => setIsCustomKm(!isCustomKm)}
              className="text-amber-600 font-bold hover:underline cursor-pointer py-1"
            >
              {isCustomKm ? "← Pick from popular routes" : "+ Enter custom distance (km)"}
            </button>
          </div>

          {!isCustomKm ? (
            <div>
              <label htmlFor={routeSelectId} className="sr-only">Select Popular Route</label>
              <select
                id={routeSelectId}
                value={selectedRouteId}
                onChange={(e) => setSelectedRouteId(e.target.value)}
                className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer min-h-[44px]"
              >
                {routesData.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.title} ({route.distanceKm} km · {route.approxDuration})
                  </option>
                ))}
              </select>
              <div className="mt-2 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-1">
                <span>Highway: {currentRoute.highway}</span>
                <span className="font-semibold text-slate-700">{currentRoute.distanceKm} km each way</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>One-Way Distance in Kilometers:</span>
                <span className="text-sm font-bold text-amber-600">{customKm} km</span>
              </div>
              <input
                type="range"
                min="30"
                max="800"
                step="10"
                value={customKm}
                onChange={(e) => setCustomKm(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer min-h-[44px]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>30 km (Local)</span>
                <span>400 km</span>
                <span>800 km (Highway)</span>
              </div>
            </div>
          )}

          {/* Vehicle Category Picker */}
          <div>
            <label htmlFor={carSelectId} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Vehicle Class
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {Object.values(vehicleRates).map((veh) => {
                const isSelected = veh.id === vehicleId;
                return (
                  <button
                    key={veh.id}
                    type="button"
                    onClick={() => setVehicleId(veh.id)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[70px] ${
                      isSelected
                        ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{veh.category}</div>
                    <div className={`text-[11px] truncate mt-0.5 ${isSelected ? "text-amber-400" : "text-slate-500"}`}>
                      {veh.name}
                    </div>
                    <div className={`text-xs font-extrabold mt-1.5 ${isSelected ? "text-amber-300" : "text-slate-900"}`}>
                      ₹{veh.perKmRate}/km
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* If Round Trip: Days Selection */}
          {tripType === "round-trip" && (
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="font-semibold text-slate-700">Trip Duration (Days):</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDays(Math.max(1, days - 1))}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 min-h-[36px] min-w-[36px]"
                >
                  -
                </button>
                <span className="font-bold text-sm text-slate-900 w-6 text-center tabular-nums">{days}</span>
                <button
                  type="button"
                  onClick={() => setDays(days + 1)}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 min-h-[36px] min-w-[36px]"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Output Card (Stacked below on mobile, 5 cols on lg) */}
        <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Fare Breakdown
              </span>
              <span className="text-xs text-slate-300">
                {tripType === "round-trip" ? "Round Trip" : "One-Way"}
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between gap-2">
                <span>Selected Vehicle:</span>
                <span className="font-bold text-white truncate text-right">{selectedVehicle.name}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Calculated Distance:</span>
                <span className="font-bold text-white tabular-nums">{effectiveKm} km approx</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Per-Km Base Rate:</span>
                <span className="font-bold text-white tabular-nums">₹{selectedVehicle.perKmRate}/km</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Driver Allowance ({days} {days === 1 ? "day" : "days"}):</span>
                <span className="font-bold text-white tabular-nums">₹{driverAllowance}</span>
              </div>
            </div>

            {/* Estimated Total Price Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-center">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                Estimated Fare Range
              </span>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 mt-1 tabular-nums">
                ₹{minEstimatedTotal.toLocaleString("en-IN")} – ₹{maxEstimatedTotal.toLocaleString("en-IN")}
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                *Indicative estimate. Final fare confirmed on Call / WhatsApp.
              </span>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-400 leading-snug">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Highway toll taxes and state road entry tax are as per actual receipts. Zero hidden driver fees.
              </span>
            </div>
          </div>

          <div className="pt-5">
            <button
              type="button"
              onClick={handleBookOnWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5B700] hover:bg-[#D9A100] active:scale-98 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span>Book this Fare on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
