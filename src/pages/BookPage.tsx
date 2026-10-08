import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BookingWidget from "../components/BookingWidget";
import FareEstimator from "../components/FareEstimator";
import { businessInfo } from "../data";
import { images } from "../images";

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageBanner
        title="Book Your Taxi or Car Rental"
        hindiTitle="ऑनलाइन टैक्सी बुकिंग"
        subtitle="Reserve outstation cabs, hourly local cars, or airport transfers in Dhanbad. Instant quotation and vehicle confirmation."
        badge="Instant WhatsApp Reservation"
        imageSrc={images.pageBanners.book}
      />

      {/* Main Booking Container */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 cols: Interactive Booking Widget */}
            <div className="lg:col-span-7">
              <BookingWidget />
            </div>

            {/* Right 5 cols: Direct Dispatch Helpdesk & Trust Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Immediate Dispatch Card */}
              <div className="bg-[#0B1F3A] text-white rounded-3xl p-7 shadow-xl border border-slate-800 space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  Prefer Calling Direct?
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Speak Directly With Our Dhanbad Dispatcher
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Have an urgent flight, immediate pickup, or customized multi-city itinerary? Call our hotline anytime day or night.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={businessInfo.telLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 whitespace-nowrap min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call {businessInfo.phone}</span>
                  </a>

                  <a
                    href={businessInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all whitespace-nowrap min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Average pickup dispatch time: 15 to 25 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clean sanitized cabs guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-slate-900">
                  Booking Highlights & Policy
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No advance deposit needed for rate queries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Driver contact details shared 2 hours before trip</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free cancellation up to 3 hours prior</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cash, UPI (GPay/PhonePe), or Netbanking payment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Fare Calculator on the same page */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <FareEstimator />
          </div>
        </div>
      </section>
    </div>
  );
}
