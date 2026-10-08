import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Star, ShieldCheck, Clock, Car } from "lucide-react";
import { images, imgSrcSet, isImageLoaded, markImageLoaded } from "../images";
import { businessInfo } from "../data";
import { useLanguage } from "./LanguageContext";
import BookingWidget from "./BookingWidget";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<Record<number, boolean>>(() => ({
    0: isImageLoaded(images.heroSlides[0]),
  }));
  const { lang } = useLanguage();

  // Crossfade every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideLoad = (idx: number, url: string) => {
    markImageLoaded(url);
    setLoadedSlides((prev) => ({ ...prev, [idx]: true }));
  };

  const isCurrentSlideLoaded = !!loadedSlides[currentSlide];

  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#0B1F3A] bg-gradient-to-b from-[#0B1F3A] to-[#13294B] text-white overflow-hidden py-8 sm:py-12 lg:py-16 w-full">
      {/* 1. Auto-sliding background images with instant navy gradient + fade-in */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images.heroSlides[currentSlide]}
              srcSet={imgSrcSet(images.rawHeroSlides[currentSlide] || images.heroSlides[currentSlide], [640, 960, 1280])}
              sizes="100vw"
              alt=""
              aria-hidden="true"
              loading={currentSlide === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              onLoad={() => handleSlideLoad(currentSlide, images.heroSlides[currentSlide])}
              className={`w-full h-full object-cover transition-opacity duration-600 ${
                isCurrentSlideLoaded ? "opacity-100 scale-105" : "opacity-0"
              }`}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: isCurrentSlideLoaded ? "6s" : "0.6s",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered dark navy gradient overlays for superior text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/60 z-10" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headlines, Trust Signals, Quick CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Trust Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-amber-400"
            >
              <span className="flex items-center gap-1.5 bg-amber-400/10 px-2.5 sm:px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.8 Rating</span>
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-200">151+ Google Reviews</span>
              <span className="text-slate-500">·</span>
              <span className="text-emerald-400 font-bold">Bartand, Dhanbad</span>
            </motion.div>

            {/* Main Headline (Fluid responsive type) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.12]"
            >
              {lang === "hi" ? (
                <>
                  धनबाद में सुरक्षित, स्वच्छ और समय पर{" "}
                  <span className="text-amber-400 relative inline-block">
                    टैक्सी सेवा
                    <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-amber-400/30 rounded-full -z-1" />
                  </span>
                </>
              ) : (
                <>
                  Safe, Clean & On-Time Taxi Service in{" "}
                  <span className="text-amber-400 relative inline-block">
                    Dhanbad
                    <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-amber-400/30 rounded-full -z-1" />
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {lang === "hi"
                ? "धनबाद से कोलकाता, देवघर, दुर्गापुर, रांची एवं सभी आउटस्टेशन रूटों के लिए 24x7 किफायती व भरोसेमंद टैक्सी। तुरंत पुष्टि और अनुभवी चालक।"
                : "24x7 dependable, affordable taxi service for Dhanbad, Kolkata, Deoghar, Durgapur, Ranchi & all outstation routes. Transparent pricing and polite chauffeurs."}
            </motion.p>

            {/* Dual CTAs (Full width and stacked on mobile, inline from sm) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href={businessInfo.telLink}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F5B700] hover:bg-[#D9A100] active:scale-98 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 093102 41446</span>
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/30 transition-all min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </motion.div>

            {/* Trust Badges Wrap into 2x2 grid */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-slate-300 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">24x7 Instant Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">Sanitized AC Cabs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">Verified Highway Drivers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-tab Booking Widget (Full width on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <BookingWidget />
          </motion.div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-center gap-2 pt-6 sm:pt-8">
          {images.heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer min-h-[14px] flex items-center ${
                currentSlide === idx
                  ? "w-8 bg-amber-400"
                  : "w-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
