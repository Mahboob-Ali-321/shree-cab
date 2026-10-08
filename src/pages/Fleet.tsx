import { useState } from "react";
import { Users, Wind, Briefcase, Check, MessageSquare, Phone, Info } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SafeImage from "../components/SafeImage";
import { vehicleRates, businessInfo } from "../data";
import { images } from "../images";

export default function Fleet() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const fleetArray = Object.values(vehicleRates);

  const filteredFleet = selectedFilter === "all"
    ? fleetArray
    : fleetArray.filter((car) => car.category.toLowerCase().includes(selectedFilter.toLowerCase()) || car.id === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="Sanitized Cabs & Chauffeur Fleet"
        hindiTitle="हमारा वाहन बेड़ा"
        subtitle="Explore our well-maintained garage in Dhanbad: economic hatchbacks, comfortable highway sedans, spacious Ertiga SUVs, luxury Innova Crystas, and tempo travellers."
        badge="Inspected & Sanitized Vehicles"
        imageSrc={images.pageBanners.fleet}
      />

      {/* 2. Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar w-full sm:w-auto">
            {[
              { id: "all", label: "All Vehicles" },
              { id: "sedan", label: "Sedans (Dzire / Etios)" },
              { id: "suv", label: "Prime SUVs (Ertiga)" },
              { id: "innova", label: "Innova Crysta" },
              { id: "hatchback", label: "Hatchbacks" },
              { id: "tempoTraveller", label: "Tempo Travellers" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer min-h-[38px] ${
                  selectedFilter === tab.id
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>Vehicles dispatched with working dual AC and clean interior</span>
          </div>
        </div>
      </section>

      {/* 3. Fleet Cards Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs">
                      {vehicle.category}
                    </div>

                    <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md">
                      ₹{vehicle.perKmRate}/km
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">
                          {vehicle.name}
                        </h2>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">
                          {vehicle.category} Class
                        </p>
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        {vehicle.capacity}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Key Specifications Grid */}
                    <div className="grid grid-cols-3 gap-3 my-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                      <div className="flex flex-col items-center text-center">
                        <Users className="w-4 h-4 text-slate-600 mb-1" />
                        <span className="text-[10px] text-slate-400">Seats</span>
                        <span className="font-bold text-slate-800">{vehicle.capacity}</span>
                      </div>
                      <div className="flex flex-col items-center text-center border-x border-slate-200">
                        <Wind className="w-4 h-4 text-slate-600 mb-1" />
                        <span className="text-[10px] text-slate-400">AC</span>
                        <span className="font-bold text-slate-800">Chilled</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Briefcase className="w-4 h-4 text-slate-600 mb-1" />
                        <span className="text-[10px] text-slate-400">Luggage</span>
                        <span className="font-bold text-slate-800">{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Driver Allowance: ₹{vehicle.driverAllowancePerDay}/day</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Min. outstation billing: {vehicle.minKmPerDay} km/day</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Phone chargers & sanitized interior</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shree Balajee Travels, I want to book / get a quote for ${vehicle.name} (${vehicle.category}). Please share availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 rounded-xl text-xs font-bold transition-colors shadow-xs min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={businessInfo.telLink}
                    className="inline-flex items-center justify-center p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors min-h-[44px] min-w-[44px]"
                    title="Call for this car"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            Need Help Choosing the Right Vehicle?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            For 1-4 passengers with moderate luggage, our <strong>Maruti Dzire</strong> or <strong>Etios</strong> sedan provides maximum comfort. For families traveling with elderly members or temple tours to Deoghar with more luggage, we recommend the <strong>Ertiga or Innova Crysta</strong>.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href={businessInfo.telLink}
              className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to our fleet manager: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
