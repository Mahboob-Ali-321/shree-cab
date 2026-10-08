import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "4.8★", "151+", "5,000+", "15+", "24x7"
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 1.5,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if value is a plain number or has prefix/suffix
    // e.g., "4.8★" -> target 4.8, suffix "★"
    // "151+" -> target 151, suffix "+"
    // "5,000+" -> target 5000, suffix "+", comma format
    // "24x7" -> special text, show directly or step
    if (value === "24x7") {
      setDisplayValue("24x7");
      return;
    }

    const numericMatch = value.match(/([\d,.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const cleanNumberStr = numericMatch[1].replace(/,/g, "");
    const target = parseFloat(cleanNumberStr);
    const suffix = value.replace(numericMatch[1], "");
    const isFloat = cleanNumberStr.includes(".");
    const hasCommas = value.includes(",");

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easeProgress;

      let formattedNumber: string;
      if (isFloat) {
        formattedNumber = current.toFixed(1);
      } else {
        const intVal = Math.floor(current);
        formattedNumber = hasCommas ? intVal.toLocaleString("en-IN") : intVal.toString();
      }

      setDisplayValue(`${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
}
