import { 
  Car, 
  Compass, 
  PlaneTakeoff, 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Check, 
  MessageSquare, 
  Phone
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import HourlyRentalTable from "../components/HourlyRentalTable";
import HowItWorks from "../components/HowItWorks";
import SafetyTrustSection from "../components/SafetyTrustSection";
import FaqSection from "../components/FaqSection";
import { servicesList, businessInfo } from "../data";
import { images } from "../images";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-6 h-6 text-amber-500" />;
      case "Car": return <Car className="w-6 h-6 text-amber-500" />;
      case "PlaneTakeoff": return <PlaneTakeoff className="w-6 h-6 text-amber-500" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-amber-500" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-amber-500" />;
      case "MapPin": return <MapPin className="w-6 h-6 text-amber-500" />;
      default: return <Car className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="Dhanbad Taxi & Car Rental Services"
        hindiTitle="कैब एवं कार रेंटल सेवाएं"
        subtitle="Complete travel options tailored for family outstation trips, airport transfers, corporate delegations, weddings, and local city commutes."
        badge="24x7 Direct Dispatch"
        imageSrc={images.pageBanners.services}
      />

      {/* 2. Services Grid Detailed */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A]/5 flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Included Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shree Balajee Travels, I would like to book / enquire for your service: ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0B1F3A] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hourly Rental Packages Table */}
      <HourlyRentalTable />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Safety & Trust */}
      <SafetyTrustSection />

      {/* 6. FAQ Section */}
      <FaqSection />
    </div>
  );
}
