import { Clock, Check, MessageSquare } from "lucide-react";
import { hourlyPackages, createWhatsAppBookingUrl } from "../data";

export default function HourlyRentalTable() {
  const handleBookPackage = (pkgDuration: string, carName: string, price: number) => {
    const url = createWhatsAppBookingUrl({
      service: `Hourly City Rental: ${pkgDuration}`,
      carType: carName,
      estimatedFare: `₹${price.toLocaleString("en-IN")}`,
      message: `I want to book the ${pkgDuration} hourly local taxi package for ${carName} in Dhanbad.`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
            Local City Packages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Hourly Local Taxi Rentals in Dhanbad
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Ideal for business meetings, wedding shopping, doctor appointments, or local sightseeing across Bartand, Bank More, Hirapur, and Saraidhela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {hourlyPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-5 sm:p-7 border transition-all flex flex-col justify-between ${
                idx === 1
                  ? "border-amber-400 shadow-xl ring-2 ring-amber-400/20 relative"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                  Most Popular Full Day
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {pkg.duration}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Includes up to {pkg.distance}
                    </span>
                  </div>
                </div>

                {/* Rates by Vehicle Class */}
                <div className="space-y-2.5 my-5 py-4 border-y border-slate-100">
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="text-slate-600 font-medium truncate">Hatchback (Swift/WagonR):</span>
                    <span className="font-extrabold text-slate-900 text-sm tabular-nums shrink-0">
                      ₹{pkg.hatchbackPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="text-slate-800 font-bold truncate">Sedan (Dzire/Etios):</span>
                    <span className="font-extrabold text-amber-600 text-base tabular-nums shrink-0">
                      ₹{pkg.sedanPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="text-slate-600 font-medium truncate">Prime SUV (Ertiga):</span>
                    <span className="font-extrabold text-slate-900 text-sm tabular-nums shrink-0">
                      ₹{pkg.suvPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Inclusions checklist */}
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Air-conditioned clean vehicle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated chauffeur on standby</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Extra km: ₹{pkg.extraKmRate}/km</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Extra hour: ₹{pkg.extraHourRate}/hour</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleBookPackage(pkg.duration, "Sedan (Dzire)", pkg.sedanPrice)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0B1F3A] hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer min-h-[48px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book this Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
