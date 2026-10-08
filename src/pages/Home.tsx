import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Car, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  MapPin
} from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import MarqueeStrip from "../components/MarqueeStrip";
import AnimatedCounter from "../components/AnimatedCounter";
import FareEstimator from "../components/FareEstimator";
import HowItWorks from "../components/HowItWorks";
import SafetyTrustSection from "../components/SafetyTrustSection";
import TestimonialSlider from "../components/TestimonialSlider";
import FaqSection from "../components/FaqSection";
import SafeImage from "../components/SafeImage";
import { usePreloadImages } from "../hooks/usePreloadImages";
import { 
  businessInfo, 
  servicesList, 
  routesData, 
  vehicleRates, 
  tourPackagesData 
} from "../data";
import { images } from "../images";
import { useLanguage } from "../components/LanguageContext";

export default function Home() {
  const { lang, t } = useLanguage();
  usePreloadImages();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO CAROUSEL & BOOKING TOOL */}
      <HeroCarousel />

      {/* 2. INFINITE MARQUEE STRIP */}
      <MarqueeStrip />

      {/* 3. ANIMATED METRICS COUNTER STRIP */}
      <section className="bg-slate-900 border-b border-slate-800 py-8 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="4.8★" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                Google Verified Rating
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                From 151+ genuine reviews
              </div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="5,000+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                Completed Trips
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Across Jharkhand, Bengal & Bihar
              </div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="15+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                Regular Highway Routes
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Kolkata, Deoghar, Ranchi & more
              </div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="24x7" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                Round-the-Clock Service
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Midnight & emergency dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FARE ESTIMATOR CALCULATOR */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FareEstimator />
        </div>
      </section>

      {/* 5. POPULAR ROUTES PREVIEW (EACH WITH A UNIQUE PHOTO) */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
                Frequent Outstation Travel
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Popular Outstation Routes from Dhanbad
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Fixed or per-km customized packages with zero hidden fees. Doorstep pickup and drop.
              </p>
            </div>
            <Link
              to="/routes"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B1F3A] hover:text-amber-600 transition-colors whitespace-nowrap self-start md:self-auto min-h-[36px]"
            >
              <span>View all 13+ highway routes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {routesData.slice(0, 3).map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-lg">
                      {route.highway}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {route.title}
                    </h3>

                    {/* Unboxed clean metadata */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mt-1.5 mb-3">
                      <span className="text-slate-800">{route.distanceKm} km</span>
                      <span aria-hidden="true">·</span>
                      <span>{route.approxDuration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-700">{route.recommendedCar}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {route.description}
                    </p>

                    <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 text-xs">
                      <span className="font-bold text-amber-900 block text-[11px]">
                        Highlights:
                      </span>
                      <span className="text-amber-800">{route.highlights}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Fare
                    </span>
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
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-[#F5B700] hover:bg-[#D9A100] rounded-xl transition-colors shadow-xs min-h-[44px]"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PILGRIMAGE & TOUR PACKAGES PREVIEW (UNIQUE PHOTOS) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
                Spiritual & Weekend Tours
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Curated Tour Packages from Dhanbad
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Experience divine darshans at Baidyanath Dham, sacred peaks of Parasnath, or scenic weekend gateways at Netarhat and Maithon Dam.
              </p>
            </div>
            <Link
              to="/tours"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B1F3A] hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              <span>Explore all tour itineraries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackagesData.slice(0, 3).map((tour) => (
              <div
                key={tour.id}
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                    <SafeImage
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-lg">
                      {tour.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {tour.title}
                    </h3>
                    <div className="text-xs text-amber-700 font-semibold mb-3">
                      {tour.approxDistance} · {tour.idealFor}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {tour.description}
                    </p>

                    <div className="space-y-1.5 border-t border-slate-200 pt-3">
                      {tour.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shree Balajee Travels, I am interested in the ${tour.title} tour package. Please share details and pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0B1F3A] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Tour on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FLEET PREVIEW WITH UNIQUE IMAGES */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
                Well-Maintained Garage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Our Fleet of Sanitized Cabs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Every vehicle has chilled AC, clean upholstery, and experienced licensed chauffeurs.
              </p>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B1F3A] hover:text-amber-600 transition-colors whitespace-nowrap min-h-[36px]"
            >
              <span>View full fleet specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(vehicleRates).slice(0, 4).map((veh) => (
              <div
                key={veh.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={veh.image}
                      alt={veh.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {veh.category}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">
                          {veh.name}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        ₹{veh.perKmRate}/km
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Seating</span>
                        <span className="font-semibold">{veh.capacity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Luggage</span>
                        <span className="font-semibold">{veh.luggage}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shree Balajee Travels, I want to book / enquire for ${veh.name} (${veh.category}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-3 px-3 bg-[#0B1F3A] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS 4-STEP SECTION */}
      <HowItWorks />

      {/* 9. SAFETY & TRUST SECTION */}
      <SafetyTrustSection />

      {/* 10. TESTIMONIAL SLIDER & GOOGLE RATINGS */}
      <TestimonialSlider />

      {/* 11. FAQ ACCORDION */}
      <FaqSection />

      {/* 12. PARALLAX CTA BANNER */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#0B1F3A] text-white overflow-hidden">
        {/* Parallax / fixed background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <SafeImage
            src={images.ctaBackground}
            alt="Expressway journey"
            isBackground={true}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Bartand, Dhanbad · 24x7 Cab Desk
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Book Your Clean & On-Time Cab?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">
              Call directly or chat with our Dhanbad dispatch office on WhatsApp. We provide instant vehicle confirmation and courteous chauffeurs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={businessInfo.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-extrabold text-sm shadow-xl active:scale-98 transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call: {businessInfo.phone}</span>
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl active:scale-98 transition-all min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
