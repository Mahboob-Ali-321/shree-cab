import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X, 
  MessageSquare, 
  Languages, 
  PhoneCall, 
  ArrowRight
} from "lucide-react";
import { businessInfo } from "../data";
import { images } from "../images";
import { preloadSingleImage } from "../hooks/usePreloadImages";
import { useLanguage } from "./LanguageContext";
import CallbackModal from "./CallbackModal";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  // Scroll Progress Bar at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open & close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const bannerPreload: Record<string, string> = {
    "/": images.pageBanners.home,
    "/services": images.pageBanners.services,
    "/fleet": images.pageBanners.fleet,
    "/routes": images.pageBanners.routes,
    "/tours": images.pageBanners.tours,
    "/book": images.pageBanners.book,
    "/gallery": images.pageBanners.gallery,
    "/about": images.pageBanners.about,
    "/reviews": images.pageBanners.reviews,
    "/contact": images.pageBanners.contact,
  };

  const handleWarmLink = (path: string) => {
    const bannerUrl = bannerPreload[path];
    if (bannerUrl) preloadSingleImage(bannerUrl);
  };

  const navLinks = [
    { label: t("navHome"), path: "/" },
    { label: t("navServices"), path: "/services" },
    { label: t("navFleet"), path: "/fleet" },
    { label: t("navRoutes"), path: "/routes" },
    { label: t("navTours"), path: "/tours" },
    { label: t("navBook"), path: "/book" },
    { label: t("navGallery"), path: "/gallery" },
    { label: t("navAbout"), path: "/about" },
    { label: t("navReviews"), path: "/reviews" },
    { label: t("navContact"), path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Dismissible Announcement Banner */}
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 text-white w-full ${
          isScrolled
            ? "bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg border-b border-slate-800"
            : "bg-[#0B1F3A] border-b border-slate-800"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-amber-400 origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        {/* Top Utility Bar: Desktop only (hidden below lg) */}
        <div className="bg-[#071527] border-b border-slate-800/80 px-4 py-1 text-xs text-slate-300 hidden lg:block">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">
                24x7 Cab Service in Dhanbad & Outstation
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Bartand, Dhanbad (826007)</span>
            </div>

            <div className="flex items-center gap-5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setCallbackModalOpen(true)}
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Callback</span>
              </button>

              <div className="flex items-center gap-1.5 text-amber-400">
                <span className="text-amber-300 font-bold">★ 4.8</span>
                <span className="text-slate-400">(151 Google Reviews)</span>
              </div>

              <a
                href={businessInfo.telLink}
                className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Row */}
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-8">
          <div
            className={`flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
              isScrolled ? "h-15 sm:h-16" : "h-16 sm:h-18"
            }`}
          >
            {/* Zone 1: Brand Wordmark (Responsive sizing, no truncation on desktop) */}
            <Link
              to="/"
              className="flex flex-col group py-1 shrink-0 whitespace-nowrap"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                Shree Balajee Travels
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wider text-amber-400/90 font-medium whitespace-nowrap hidden min-[360px]:block">
                {businessInfo.hindiName} · Dhanbad
              </span>
            </Link>

            {/* Zone 2: Navigation Links (Desktop lg:flex, centered flex-1, no wrapping) */}
            <nav className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-3 xl:gap-5 text-sm xl:text-[15px] font-semibold text-slate-300">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => handleWarmLink(link.path)}
                    onTouchStart={() => handleWarmLink(link.path)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? "text-amber-400 font-bold"
                        : "hover:text-white text-slate-300"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Staged CTA buttons with shrink-0 and ml-3 gap prevention) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 whitespace-nowrap lg:ml-3">
              {/* Language Toggle (Always accessible, shrink-0) */}
              <button
                type="button"
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-bold text-amber-400 border border-slate-700 transition-colors cursor-pointer min-h-[44px] min-w-[44px] justify-center shrink-0 whitespace-nowrap"
                title="Toggle English / Hindi language"
                aria-label="Toggle language"
              >
                <Languages className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] sm:text-xs whitespace-nowrap">{lang === "en" ? "हिन्दी" : "English"}</span>
              </button>

              {/* Request Callback (Desktop 2xl and above only - already in top utility strip) */}
              <button
                type="button"
                onClick={() => setCallbackModalOpen(true)}
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 cursor-pointer min-h-[44px] shrink-0 whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Callback</span>
              </button>

              {/* WhatsApp CTA:
                  - hidden below xl
                  - xl to 2xl: icon-only (min-w-[44px] min-h-[44px] square button)
                  - 2xl and above: full icon + text
              */}
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
                className="hidden xl:inline-flex 2xl:hidden items-center justify-center p-2.5 text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/60 rounded-xl transition-colors min-h-[44px] min-w-[44px] shrink-0"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/60 rounded-xl transition-colors whitespace-nowrap min-h-[44px] shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Call Now Button (Visible on Desktop lg and above: icon + text) */}
              <a
                href={businessInfo.telLink}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-[#F5B700] hover:bg-[#D9A100] active:scale-98 rounded-xl transition-all shadow-md shadow-amber-500/10 whitespace-nowrap min-h-[44px] shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>{t("callNow")}</span>
              </a>

              {/* Mobile hamburger menu toggle (< lg) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer shrink-0"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Height Slide-In Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-[#071527]/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-w-sm bg-[#0B1F3A] h-full flex flex-col justify-between p-5 sm:p-6 overflow-y-auto shadow-2xl border-l border-slate-800 animate-in slide-in-from-right duration-250"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="min-w-0 pr-2">
                    <span className="text-base font-extrabold text-white block truncate">
                      Shree Balajee Travels
                    </span>
                    <span className="text-[11px] text-amber-400 font-medium">
                      {businessInfo.hindiName} · Dhanbad
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer shrink-0"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links in Drawer (Large tap targets) */}
                <nav className="py-4 space-y-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onMouseEnter={() => handleWarmLink(link.path)}
                        onTouchStart={() => handleWarmLink(link.path)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                          active
                            ? "bg-[#F5B700] text-slate-950 font-bold shadow-xs"
                            : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 ${active ? "text-slate-950" : "text-slate-500"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCallbackModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl border border-slate-700 min-h-[44px] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request a Quick Callback</span>
                </button>

                <a
                  href={businessInfo.telLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 font-extrabold text-sm rounded-xl shadow-md min-h-[44px]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call: {businessInfo.phone}</span>
                </a>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="text-center pt-2 text-[11px] text-slate-400">
                  Open 24x7 · Bartand, Dhanbad 826007
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </>
  );
}
