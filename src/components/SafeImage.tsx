import { useState } from "react";
import { Car } from "lucide-react";
import { isImageLoaded, markImageLoaded } from "../images";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
  isBackground?: boolean;
}

export default function SafeImage({
  src,
  alt = "Shree Balajee Travels",
  className = "",
  containerClassName = "",
  fallbackText = "Shree Balajee Travels",
  isBackground = false,
  loading = "lazy",
  decoding = "async",
  onLoad,
  onError,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  // Check if image is already cached in memory
  const alreadyCached = src ? isImageLoaded(src) : false;
  const [isLoaded, setIsLoaded] = useState<boolean>(alreadyCached);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#162E52] to-[#0B1F3A] flex flex-col items-center justify-center p-4 text-center text-white ${containerClassName} ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-2">
          <Car className="w-6 h-6 text-amber-400" />
        </div>
        <span className="text-xs font-bold text-amber-400 tracking-wide">
          {fallbackText}
        </span>
        <span className="text-[10px] text-slate-300 mt-0.5">
          24x7 Cabs · Dhanbad
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${
        isBackground ? "bg-gradient-to-b from-[#0B1F3A] to-[#13294B]" : ""
      } ${containerClassName}`}
    >
      {/* Grey skeleton shimmer ONLY for non-background cards when not yet loaded */}
      {!isBackground && !isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center z-1 pointer-events-none">
          <div className="w-7 h-7 rounded-full border-2 border-amber-400 border-t-transparent animate-spin opacity-50" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        referrerPolicy="no-referrer"
        onLoad={(e) => {
          if (src) markImageLoaded(src);
          setIsLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setIsLoaded(true);
          setHasError(true);
          onError?.(e);
        }}
        className={`${className} transition-opacity duration-600 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}
