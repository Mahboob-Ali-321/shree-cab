import { useState } from "react";
import { Star, CheckCircle, ExternalLink, ThumbsUp } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { businessInfo } from "../data";
import { images } from "../images";

interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  routeOrService: string;
  date: string;
  comment: string;
}

const detailedReviews: ReviewItem[] = [
  {
    name: "Rajesh Sharma",
    location: "Bartand, Dhanbad",
    rating: 5,
    routeOrService: "Dhanbad to Kolkata Airport",
    date: "2 weeks ago",
    comment: "Booked an early morning cab for a flight from Kolkata airport. The car arrived at our Bartand residence 15 minutes before time. The driver was extremely polite, drove at a safe controlled speed on the expressway, and the Dzire was sparkling clean. Superb service!",
  },
  {
    name: "Sunita Agarwal",
    location: "Giridih / Dhanbad",
    rating: 5,
    routeOrService: "Deoghar Baidyanath Dham Darshan",
    date: "1 month ago",
    comment: "We booked an Ertiga SUV for our family pilgrimage to Deoghar. The car had excellent AC and very comfortable seating for elderly parents. The driver guided us nicely on the route and waited patiently throughout the darshan. Highly recommend Shree Balajee Travels.",
  },
  {
    name: "Amitabh Banerjee",
    location: "Kolkata",
    rating: 5,
    routeOrService: "Durgapur to Dhanbad Round Trip",
    date: "Recent trip",
    comment: "Called them on short notice when another cab canceled at the last minute. Within 20 minutes they arranged a clean sedan with an experienced driver. Transparent billing with no unnecessary haggling. Genuine 5-star service.",
  },
  {
    name: "Vikram Sengupta",
    location: "Bokaro Steel City",
    rating: 5,
    routeOrService: "Corporate Travel to BCCL & IIT ISM",
    date: "3 weeks ago",
    comment: "Professional cab provider in Dhanbad. We regularly use Shree Balajee Travels for company delegates visiting IIT ISM Dhanbad and coal project sites. Punctual, well-groomed chauffeurs, and proper billing.",
  },
  {
    name: "Pooja Verma",
    location: "Bank More, Dhanbad",
    rating: 5,
    routeOrService: "Wedding Family Cab Service",
    date: "Last month",
    comment: "Hired multiple SUVs for my brother's wedding guests coming from Ranchi and Asansol. All pickups from Dhanbad station were coordinated seamlessly. All cars were clean, fragrant, and drivers were very helpful with luggage.",
  },
  {
    name: "Deepak Kumar",
    location: "Hirapur, Dhanbad",
    rating: 5,
    routeOrService: "Dhanbad to Ranchi Hospital Trip",
    date: "2 months ago",
    comment: "Urgent medical trip to Ranchi. The driver was very understanding, drove very smoothly without sudden brakes, and took good care of patient comfort. Very thankful to Balajee Travels team.",
  },
];

export default function Reviews() {
  const [filter, setFilter] = useState("all");

  const filteredReviews = filter === "all"
    ? detailedReviews
    : detailedReviews.filter((item) => {
        if (filter === "kolkata") return item.routeOrService.toLowerCase().includes("kolkata");
        if (filter === "deoghar") return item.routeOrService.toLowerCase().includes("deoghar");
        if (filter === "short-notice") return item.comment.toLowerCase().includes("short notice") || item.routeOrService.toLowerCase().includes("round trip");
        if (filter === "corporate") return item.routeOrService.toLowerCase().includes("corporate");
        return true;
      });

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. Page Header Banner */}
      <PageBanner
        title="Customer Reviews & Ratings"
        hindiTitle="ग्राहकों की समीक्षाएं व रेटिंग"
        subtitle="151+ verified reviews with a 4.8★ rating on Google. Read what travelers from Dhanbad and surrounding cities say about our chauffeurs and fleet."
        badge="4.8★ Verified Google Rating"
        imageSrc={images.pageBanners.reviews}
      />

      {/* 2. Rating Breakdown Scoreboard */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex flex-col items-center justify-center text-amber-400 font-extrabold text-3xl tabular-nums">
                4.8
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-base font-bold text-white mt-1 block">
                  151+ Google Business Reviews
                </span>
                <span className="text-xs text-slate-400">
                  Based on verified ratings for taxi & cab service in Bartand, Dhanbad
                </span>
              </div>
            </div>

            <div className="w-full md:w-72 space-y-2">
              {businessInfo.ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-2 text-xs">
                  <span className="w-6 text-slate-300 tabular-nums">{row.stars}★</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 text-[11px] tabular-nums">
                    {row.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F5B700] hover:bg-[#D9A100] text-slate-950 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-md cursor-pointer min-h-[44px]"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Review Filter Tabs */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl w-full sm:w-fit overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Reviews" },
              { id: "kolkata", label: "Kolkata Airport & Highway" },
              { id: "deoghar", label: "Deoghar Baidyanath Dham" },
              { id: "short-notice", label: "Short-Notice Bookings" },
              { id: "corporate", label: "Corporate Travel" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap min-h-[38px] ${
                  filter === tab.id
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews Cards Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-700 font-medium">
                      <span>{review.routeOrService}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">{review.location}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
