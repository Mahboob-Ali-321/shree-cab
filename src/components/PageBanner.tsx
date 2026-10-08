import { useState } from "react";
import { motion } from "framer-motion";
import { imgSrcSet, isImageLoaded, markImageLoaded } from "../images";

interface PageBannerProps {
  title: string;
  hindiTitle?: string;
  subtitle: string;
  badge?: string;
  imageSrc: string;
}

export default function PageBanner({
  title,
  hindiTitle,
  subtitle,
  badge,
  imageSrc,
}: PageBannerProps) {
  const [imageLoaded, setImageLoaded] = useState(() => isImageLoaded(imageSrc));

  return (
    <section className="relative bg-[#0B1F3A] bg-gradient-to-b from-[#0B1F3A] to-[#13294B] text-white overflow-hidden py-10 sm:py-16 lg:py-20 min-h-[220px] sm:min-h-[300px] flex items-center w-full">
      {/* Background Image with Instant Non-Blocking Navy Base + Smooth 600ms Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imageSrc}
          srcSet={imgSrcSet(imageSrc, [640, 960, 1280])}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => {
            markImageLoaded(imageSrc);
            setImageLoaded(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-out ${
            imageLoaded ? "opacity-100 scale-105" : "opacity-0"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />

        {/* Multi-layered dark navy gradient overlays for superior text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/80 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/70 z-1" />
      </div>

      {/* Foreground Content - Fully visible from first paint */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-amber-400 bg-amber-400/10 px-2.5 sm:px-3 py-1 rounded-md border border-amber-400/20">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {title}
            {hindiTitle && (
              <span className="block text-lg sm:text-2xl font-semibold text-amber-400 mt-0.5 sm:mt-1">
                {hindiTitle}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
