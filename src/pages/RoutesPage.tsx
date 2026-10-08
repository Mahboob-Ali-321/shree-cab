import { useState } from "react";
import { 
  Navigation, 
  Clock, 
  MapPin, 
  MessageSquare, 
  ChevronRight, 
  Info,
  Car
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import SafeImage from "../components/SafeImage";
import FareEstimator from "../components/FareEstimator";
import { routesData, businessInfo } from "../data";
import { images } from "../images";

export default function RoutesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("all");

  const filteredRoutes = routesData.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterRegion === "all") return true;
    if (filterRegion === "airport") return r.to.toLowerCase().includes("airport") || r.highlights.toLowerCase().includes("airport");
    if (filterRegion === "pilgrimage") return r.to.toLowerCase().includes("deoghar") || r.to.toLowerCase().includes("gaya") || r.to.toLowerCase().includes("varanasi");
    if (filterRegion === "expressway") return r.highway.includes("NH 19") || r.highway.includes("GT Road");
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="Popular Outstation Cab Routes"
        hindiTitle="प्रमुख आउटस्टेशन रूट्स"
        subtitle="Explore regular taxi routes connecting Dhanbad to Kolkata, Deoghar, Durgapur, Ranchi, Gaya, Patna, Bokaro, and beyond. Doorstep pickup with price quotes on request."
        badge="15+ Regular Highway Corridors"
        imageSrc={images.pageBanners.routes}
      />

      {/* 2. Search & Filter Bar */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Search destination (e.g. Kolkata, Deoghar, Ranchi)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 min-h-[44px]"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar w-full md:w-auto">
            {[
              { id: "all", label: "All Routes" },
              { id: "airport", label: "Airport Corridors" },
              { id: "pilgrimage", label: "Pilgrimage Yatra" },
              { id: "expressway", label: "GT Road NH 19" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterRegion(f.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer min-h-[38px] ${
                  filterRegion === f.id
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Routes Grid with UNIQUE Photos */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#0B1F3A]/90 text-white text-xs font-bold px-3 py-1 rounded-xl backdrop-blur-xs">
                      {route.highway}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {route.title}
                    </h2>

                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-2 mb-3">
                      <span className="flex items-center gap-1 text-slate-800 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {route.distanceKm} km
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        {route.approxDuration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {route.description}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-2 space-y-1 text-xs">
                      <div>
                        <span className="font-bold text-slate-700">Highlights: </span>
                        <span className="text-slate-600">{route.highlights}</span>
                      </div>
                      <div className="text-[11px] text-amber-700 font-medium">
                        Recommended: {route.recommendedCar}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3 pt-3">
                    <span className="text-xs text-slate-500">Fare Type:</span>
                    <span className="text-xs font-bold text-slate-800">
                      Price on Request
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shree Balajee Travels, I want to book a cab for ${route.title} (${route.distanceKm} km). Please share the quote.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 rounded-xl text-xs font-bold transition-colors shadow-xs min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Get Fare Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <Navigation className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching route found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We travel to any custom destination across India! Call us directly or message on WhatsApp for custom itineraries.
              </p>
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B1F3A] text-white text-xs font-bold rounded-xl min-h-[44px]"
              >
                <span>Request Custom Route Quote</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 4. Integrated Fare Estimator on the Routes Page */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FareEstimator />
        </div>
      </section>
    </div>
  );
}
