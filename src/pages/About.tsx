import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  BadgeIndianRupee, 
  MapPin, 
  Phone, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import AnimatedCounter from "../components/AnimatedCounter";
import SafetyTrustSection from "../components/SafetyTrustSection";
import SafeImage from "../components/SafeImage";
import { businessInfo } from "../data";
import { images } from "../images";

export default function About() {
  const coreValues = [
    {
      title: "Passenger Safety First",
      description: "Defensive driving, strict compliance with highway speed regulations, seat belts for all rows, and thoroughly tested tires and braking systems.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Uncompromising Punctuality",
      description: "We understand that missing a flight at Kolkata or a train at Dhanbad Junction is not an option. Our drivers arrive 10-15 minutes ahead of time.",
      icon: Clock,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Pristine Cleanliness",
      description: "Air-conditioned cabins washed, vacuumed, and sanitized before each journey with clean seat covers and pleasant fragrances.",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Fair & Honest Pricing",
      description: "No hidden surge pricing during rain or peak hours. Transparent quotations that clearly state toll, parking, driver allowance, and kilometer charges.",
      icon: BadgeIndianRupee,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="About Shree Balajee Travels"
        hindiTitle="श्री बालाजी ट्रेवल्स के बारे में"
        subtitle="Dhanbad's premier car rental & chauffeur service based in Bartand. Committed to safe driving, sanitized vehicles, and respectful hospitality."
        badge="Dhanbad Roots Since 2018"
        imageSrc={images.pageBanners.about}
      />

      {/* 2. Story & Background Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Our Journey & Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Built on Trust, Punctuality & 151+ Five-Star Reviews
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Shree Balajee Travels (श्री बालाजी ट्रेवल्स) started in Dhanbad with a single clear mission: to provide families, business professionals, and pilgrims a comfortable, reliable, and respectful travel service that arrives exactly on time.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Located near Bartand Bus Stand in Lane No. 4, Jai Prakash Nagar, we have completed more than 5,000 successful trips across Dhanbad, Bokaro, Ranchi, Durgapur, Kolkata, and pilgrimage hubs like Deoghar Baidyanath Dham and Bodh Gaya.
              </p>

              <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-slate-800 font-semibold">Registered Local Operator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-slate-800 font-semibold">24x7 Direct Dispatch Desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-slate-800 font-semibold">Corporate & GST Billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-slate-800 font-semibold">Polite Trained Chauffeurs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 text-white relative">
                <div className="h-64 sm:h-72 overflow-hidden">
                  <SafeImage
                    src={images.aboutTeam}
                    alt="Travel Chauffeur Hospitality"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-7 relative">
                  <span className="text-xs uppercase font-bold text-amber-400">
                    Our Promise
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-3">
                    "Every passenger deserves a safe journey, clean seat, and a polite smile."
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    We treat every booking — whether an emergency midnight hospital run, an outstation wedding entourage, or a sacred temple darshan — with personal care and accountability.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>Headquarters & Dispatch:</span>
                    </div>
                    <a
                      href={businessInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-amber-400 pl-6 block transition-colors leading-relaxed"
                      title="Open headquarters in Google Maps"
                    >
                      {businessInfo.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Animated Stats Counter */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="4.8★" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Google Rating</div>
              <div className="text-[11px] text-slate-400 mt-0.5">151+ genuine reviews</div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="5,000+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Trips Completed</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Across Jharkhand & Bengal</div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="15+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Active Routes</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Inter-state highway corridors</div>
            </div>

            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                <AnimatedCounter value="24x7" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Round-the-Clock</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Day & night booking dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
              What Guides Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our 4 Pillars of Service Excellence
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              These fundamental rules guide every driver and ride at Shree Balajee Travels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${v.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Safety & Trust Section */}
      <SafetyTrustSection />

      {/* 6. CTA Strip */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Have Questions or Need a Custom Corporate Contract?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            We provide monthly taxi contracts for mining agencies, corporate projects, and government consultants visiting Dhanbad.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={businessInfo.telLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B1F3A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm min-h-[44px]"
            >
              <Phone className="w-4 h-4 fill-current text-amber-400" />
              <span>Call Us: {businessInfo.phone}</span>
            </a>
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
