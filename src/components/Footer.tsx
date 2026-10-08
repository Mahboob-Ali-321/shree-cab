import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageSquare, Star, ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";
import { businessInfo, routesData } from "../data";
import { images } from "../images";
import SafeImage from "./SafeImage";

export default function Footer() {
  return (
    <footer className="relative bg-[#071527] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Background Image Overlay with deep navy tint */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <SafeImage
          src={images.ctaBackground}
          alt="Night highway backdrop"
          isBackground={true}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071527] via-[#071527]/90 to-[#071527]" />
      </div>

      {/* Top Banner inside Footer */}
      <div className="relative z-10 border-b border-slate-800/80 bg-[#0B1F3A]/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Ready for your journey?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Book your Dhanbad cab in under 2 minutes
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Short-notice pickups, outstation express rides, and temple darshan tours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={businessInfo.telLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-bold text-xs sm:text-sm shadow transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {businessInfo.phone}</span>
            </a>
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-extrabold text-white block">
                {businessInfo.name}
              </span>
              <span className="text-xs text-amber-400 font-semibold tracking-wide">
                {businessInfo.hindiName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
              Dhanbad’s trusted taxi provider for safe, clean, and punctual travel across Jharkhand, West Bengal, and Bihar.
            </p>

            {/* Google Rating Badge */}
            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-colors group mb-4"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Google Verified Rating</div>
                <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
                  <span>{businessInfo.rating} / 5.0</span>
                  <span className="text-slate-400 font-normal">({businessInfo.reviewCount} Reviews)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>

            {/* Social Links Placeholders */}
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-xs text-slate-500">Connect:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1.5 rounded-lg bg-slate-800 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 rounded-lg bg-slate-800 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-1.5 rounded-lg bg-slate-800 hover:text-amber-400 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Explore Our Site
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Taxi & Rental Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Fleet (Sedans & SUVs)
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Outstation Routes
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Pilgrimage & Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Online Cab Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Travel Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact & Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Routes */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Key Outstation Routes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {routesData.slice(0, 6).map((route) => (
                <li key={route.id}>
                  <Link
                    to="/routes"
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{route.title}</span>
                    <span className="text-[11px] text-slate-500 group-hover:text-amber-400 tabular-nums">
                      {route.distanceKm} km
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Dispatch & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 leading-snug transition-colors"
                  title="Open Shree Balajee Travels in Google Maps"
                >
                  {businessInfo.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={businessInfo.telLink}
                  className="text-slate-300 hover:text-white font-bold transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  +91 93102 41446 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-400">{businessInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {businessInfo.name} ({businessInfo.hindiName}). All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Dhanbad, Jharkhand 826007</span>
            <span>·</span>
            <span className="text-amber-400/90 font-medium">Designed by Mahboob Ali</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
