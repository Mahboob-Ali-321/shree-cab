import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Building2 
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import { businessInfo, createWhatsAppBookingUrl } from "../data";
import { images } from "../images";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [carPreference, setCarPreference] = useState("Sedan");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = `Name: ${name || "Customer"}\nPhone: ${phone || "Not provided"}\nCar: ${carPreference}\nNotes: ${message || "Please call back with quotation."}`;
    const url = createWhatsAppBookingUrl({
      pickup,
      drop,
      date: travelDate,
      carType: carPreference,
      message: fullMessage,
    });
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="Contact & Cab Dispatch Desk"
        hindiTitle="संपर्क एवं 24x7 बुकिंग"
        subtitle="We operate 24 hours a day, 7 days a week from Bartand, Dhanbad. Call or WhatsApp our dispatch officer for immediate car booking."
        badge="24x7 Direct Dispatch Desk"
        imageSrc={images.pageBanners.contact}
      />

      {/* 2. Main Contact Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-600">
                  Direct Line
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Get in Touch Instantly
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We reply in under 2 minutes during business hours and have round-the-clock drivers on standby.
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Phone / Booking Hotline
                  </span>
                  <a
                    href={businessInfo.telLink}
                    className="text-lg font-bold text-slate-900 block hover:text-amber-600 transition-colors mt-0.5"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct dispatcher line · 24x7 answering
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    WhatsApp Chat & Quick Quotes
                  </span>
                  <a
                    href={businessInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 block hover:underline transition-colors mt-0.5"
                  >
                    +91 93102 41446 (WhatsApp)
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Send pickup location pin and get instant car options
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Head Office Address
                  </span>
                  <a
                    href={businessInfo.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 hover:text-amber-600 mt-0.5 block transition-colors"
                    title="Open in Google Maps"
                  >
                    {businessInfo.address}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: Near Bartand Bus Stand, Jai Prakash Nagar
                  </p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    Open 24 Hours / 7 Days a Week
                  </p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">
                    ✓ Midnight & early-morning dispatch available
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Send a Cab Booking Enquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out this form to launch a pre-formatted booking enquiry directly via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 093102 41446"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bartand / Bank More, Dhanbad"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Drop Destination
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kolkata / Deoghar / Durgapur"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Date of Travel
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Vehicle
                      </label>
                      <select
                        value={carPreference}
                        onChange={(e) => setCarPreference(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
                      >
                        <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios) - 4 Seats</option>
                        <option value="SUV (Ertiga)">Prime SUV (Ertiga) - 6 Seats</option>
                        <option value="Innova Crysta">Toyota Innova Crysta - 7 Seats Luxury</option>
                        <option value="Hatchback (Swift / WagonR)">Hatchback (Swift / WagonR) - Budget</option>
                        <option value="Tempo Traveller">Tempo Traveller - 13 to 17 Seats</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need baby seat / AC on all the time / Round-trip same day..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5B700] hover:bg-[#D9A100] active:scale-98 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer min-h-[48px]"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Send Booking Enquiry on WhatsApp</span>
                  </button>

                  {submitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp chat opened! Please click Send to dispatch your enquiry.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Google Map Section */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-500" />
                  <span>Our Bartand, Dhanbad Location</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad, Jharkhand 826007
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={businessInfo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold transition-colors min-h-[36px] flex items-center justify-center shadow-xs"
                >
                  Get Directions
                </a>
                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-xs font-bold text-[#0B1F3A] hover:text-amber-600 transition-colors min-h-[36px] flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl">
              <iframe
                title="Shree Balajee Travels location"
                src={businessInfo.googleMapsEmbedUrl}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                style={{ border: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
