import { useEffect } from "react";
import { images, markImageLoaded } from "../images";

/**
 * Silently warms the browser image cache in idle time after Home page mounts.
 * Preloads page banners, remaining hero slides, and primary fleet/route images.
 */
export function usePreloadImages() {
  useEffect(() => {
    const preloadUrl = (url: string) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
      img.onload = () => markImageLoaded(url);
    };

    const runPreload = () => {
      // 1. Preload all page banner images so subsequent route clicks open instantly
      Object.values(images.pageBanners).forEach(preloadUrl);

      // 2. Preload remaining hero slides (2, 3, 4)
      images.heroSlides.slice(1).forEach(preloadUrl);

      // 3. Preload first 6 fleet and route images
      Object.values(images.fleet).slice(0, 5).forEach(preloadUrl);
      Object.values(images.routes).slice(0, 6).forEach(preloadUrl);

      // 4. Preload CTA / Footer background
      preloadUrl(images.ctaBackground);
    };

    // Use requestIdleCallback if available, otherwise setTimeout fallback
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };

      if (typeof win.requestIdleCallback === "function") {
        const handle = win.requestIdleCallback(runPreload, { timeout: 2000 });
        return () => win.cancelIdleCallback?.(handle);
      } else {
        const timer = setTimeout(runPreload, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, []);
}

/**
 * Standalone helper to warm a single banner image on hover/touchstart
 */
export function preloadSingleImage(url: string) {
  if (!url) return;
  const img = new Image();
  img.src = url;
  img.onload = () => markImageLoaded(url);
}
