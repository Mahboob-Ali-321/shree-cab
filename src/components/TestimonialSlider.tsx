import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ThumbsUp } from "lucide-react";
import { businessInfo } from "../data";

interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  route: string;
  comment: string;
  date: string;
}

const customerReviews: TestimonialItem[] = [
  {
    name: "Rajesh Sharma",
    location: "Bartand, Dhanbad",
    rating: 5,
    route: "Dhanbad to Kolkata Airport (CCU)",
    comment: "Booked an early morning 4 AM cab for a flight from Kolkata airport. The car arrived at our residence 15 minutes before time. The driver was extremely polite, drove at a safe speed on the expressway, and the Dzire was sparkling clean. Superb service!",
    date: "Verified Google Review",
  },
  {
    name: "Sunita Agarwal",
    location: "Giridih / Dhanbad",
    rating: 5,
    route: "Deoghar Baidyanath Dham Darshan",
    comment: "We booked an Ertiga SUV for our family pilgrimage to Deoghar. The car had excellent AC and very comfortable seating for elderly parents. The driver guided us nicely on temple entry and waited patiently throughout the darshan. Highly recommend Shree Balajee Travels.",
    date: "Verified Google Review",
  },
  {
    name: "Amitabh Banerjee",
    location: "Kolkata",
    rating: 5,
    route: "Durgapur to Dhanbad Round Trip",
    comment: "Called them on short notice when another cab canceled at the last minute. Within 20 minutes they arranged a clean sedan with an experienced driver. Transparent billing with no unnecessary haggling. Genuine 5-star service.",
    date: "Verified Google Review",
  },
  {
    name: "Vikram Sengupta",
    location: "Bokaro Steel City",
    rating: 5,
    route: "Corporate Travel to BCCL & IIT ISM",
    comment: "Professional cab provider in Dhanbad. We regularly use Shree Balajee Travels for company delegates visiting IIT ISM Dhanbad and coal project sites. Punctual, well-groomed chauffeurs, and proper GST billing.",
    date: "Verified Google Review",
  },
  {
    name: "Pooja Verma",
    location: "Bank More, Dhanbad",
    rating: 5,
    route: "Wedding Family Cab Service",
    comment: "Hired multiple SUVs for my brother's wedding guests coming from Ranchi and Asansol. All pickups from Dhanbad station were coordinated seamlessly. All cars were clean, fragrant, and drivers were very helpful with luggage.",
    date: "Verified Google Review",
  },
  {
    name: "Deepak Kumar",
    location: "Hirapur, Dhanbad",
    rating: 5,
    route: "Dhanbad to Ranchi Hospital Trip",
    comment: "Urgent medical trip to Ranchi. The driver was very understanding, drove very smoothly without sudden brakes, and took good care of patient comfort. Very thankful to Balajee Travels team.",
    date: "Verified Google Review",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
  };

  const activeReview = customerReviews[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0B1F3A] text-white overflow-hidden relative w-full">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Google Rating Scorecard & Breakdown */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                Verified Social Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Rated 4.8 / 5.0 On Google Reviews
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Over 151 real travelers have shared their travel experiences with Shree Balajee Travels in Dhanbad.
              </p>
            </div>

            {/* Google Rating Breakdown Bars */}
            <div className="p-4 sm:p-5 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-3 w-full">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-700 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-amber-400 tabular-nums">4.8</span>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">151 Verified Ratings</span>
                  </div>
                </div>

                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-slate-950 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors min-h-[40px]"
                >
                  <span>Review on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {businessInfo.ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-2 text-xs">
                  <span className="w-6 text-slate-300 tabular-nums shrink-0">{row.stars}★</span>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 text-[11px] tabular-nums shrink-0">
                    {row.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <ThumbsUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Highest rated taxi service in Bartand & Bank More, Dhanbad</span>
            </div>
          </div>

          {/* Right Column: Active Testimonial Slider Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-800/90 rounded-3xl p-5 sm:p-7 md:p-9 border border-slate-700/90 shadow-2xl relative w-full">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400/20 absolute top-5 right-5 sm:top-6 sm:right-6" />

              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed italic mb-5 min-h-[90px]">
                "{activeReview.comment}"
              </p>

              <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {activeReview.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-amber-400 mt-0.5">
                    <span>{activeReview.route}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400">{activeReview.location}</span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                  <div className="flex items-center gap-1.5 sm:hidden">
                    {customerReviews.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentIndex === dotIdx ? "w-5 bg-amber-400" : "w-2 bg-slate-600"
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-400 tabular-nums px-1.5">
                      {currentIndex + 1} / {customerReviews.length}
                    </span>
                    <button
                      type="button"
                      onClick={next}
                      className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
