import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Check, 
  X, 
  MessageSquare, 
  ChevronDown, 
  Phone, 
  Compass,
  Sparkles
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import SafeImage from "../components/SafeImage";
import { tourPackagesData, businessInfo, createWhatsAppBookingUrl } from "../data";
import { images } from "../images";

export default function Tours() {
  const [openItineraryId, setOpenItineraryId] = useState<string | null>("deoghar-baidyanath-dham");

  const toggleItinerary = (id: string) => {
    setOpenItineraryId(openItineraryId === id ? null : id);
  };

  const handleBookTour = (tourTitle: string, duration: string) => {
    const url = createWhatsAppBookingUrl({
      service: `Tour Package: ${tourTitle}`,
      duration,
      message: `I am interested in booking the ${tourTitle} (${duration}) tour package from Dhanbad. Please share vehicle options and quote.`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner with Unique Image */}
      <PageBanner
        title="Spiritual & Holiday Tour Packages"
        hindiTitle="तीर्थ यात्रा व दर्शनीय टूर पैकेज"
        subtitle="Specially crafted pilgrimage & leisure itineraries from Dhanbad with family-friendly chauffeurs and flexible temple waiting hours."
        badge="Curated Travel Itineraries"
        imageSrc={images.pageBanners.tours}
      />

      {/* 2. Tour Packages List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {tourPackagesData.map((tour) => {
            const isItineraryOpen = openItineraryId === tour.id;

            return (
              <div
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Image with duration badge */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-slate-100">
                    <SafeImage
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs shadow-md">
                      {tour.duration}
                    </div>
                  </div>

                  {/* Right Column: Details, Highlights & Booking */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                          {tour.approxDistance}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Ideal for: {tour.idealFor}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {tour.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {tour.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="my-5 pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Key Tour Highlights
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {tour.highlights.map((hl, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Accordion for Day-by-Day Itinerary */}
                      <div className="border border-slate-200 rounded-2xl overflow-hidden mb-5">
                        <button
                          type="button"
                          onClick={() => toggleItinerary(tour.id)}
                          className="w-full p-3.5 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Compass className="w-4 h-4 text-amber-500" />
                            <span>View Day-by-Day Itinerary Plan</span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isItineraryOpen ? "rotate-180 text-amber-500" : ""
                            }`}
                          />
                        </button>

                        {isItineraryOpen && (
                          <div className="p-4 bg-white border-t border-slate-100 space-y-3 text-xs">
                            {tour.itinerary.map((step, idx) => (
                              <div key={idx} className="border-l-2 border-amber-400 pl-3">
                                <span className="font-extrabold text-slate-900 block">
                                  {step.day}: {step.title}
                                </span>
                                <p className="text-slate-600 mt-0.5 leading-relaxed">
                                  {step.activities}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6 p-4 bg-slate-50 rounded-2xl">
                        <div>
                          <span className="font-bold text-emerald-800 block mb-1.5">
                            ✓ Inclusions:
                          </span>
                          <ul className="space-y-1 text-slate-600">
                            {tour.inclusions.map((inc, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="font-bold text-rose-800 block mb-1.5">
                            ✗ Exclusions:
                          </span>
                          <ul className="space-y-1 text-slate-600">
                            {tour.exclusions.map((exc, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <X className="w-3 h-3 text-rose-500 shrink-0" />
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleBookTour(tour.title, tour.duration)}
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Enquire Package on WhatsApp</span>
                      </button>

                      <a
                        href={businessInfo.telLink}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors min-h-[44px]"
                      >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>Call: {businessInfo.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
