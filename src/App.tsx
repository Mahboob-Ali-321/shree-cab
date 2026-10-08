/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import RoutesPage from "./pages/RoutesPage";
import Tours from "./pages/Tours";
import BookPage from "./pages/BookPage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { businessInfo } from "./data";

// Dynamic SEO Head Handler
function SeoMeta() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  let title = "Taxi Service in Dhanbad | Shree Balajee Travels";
  let description =
    "Safe, clean & on-time taxi service, outstation cabs (Kolkata, Deoghar, Durgapur, Ranchi) and car rental in Dhanbad. 4.8★ rated with 151+ Google reviews. Call 093102 41446.";

  if (pathname.includes("/services")) {
    title = "Taxi & Car Rental Services in Dhanbad | Shree Balajee Travels";
    description =
      "Outstation cabs, local city taxi, railway station & airport pickups, wedding cars, and corporate cab rentals in Dhanbad.";
  } else if (pathname.includes("/fleet")) {
    title = "Our Fleet - Sedans, Ertiga SUVs & Innova Crysta | Shree Balajee Travels";
    description =
      "Explore our sanitized AC fleet: Maruti Dzire, Toyota Etios, Maruti Ertiga, Innova Crysta, and luxury tempo travellers in Dhanbad.";
  } else if (pathname.includes("/routes")) {
    title = "Outstation Cab Routes & Fares from Dhanbad | Shree Balajee Travels";
    description =
      "Dhanbad to Kolkata, Deoghar Baidyanath Dham, Durgapur, Ranchi, Gaya, and Patna cab service with price quotes on request.";
  } else if (pathname.includes("/tours")) {
    title = "Pilgrimage & Tour Packages from Dhanbad | Shree Balajee Travels";
    description =
      "Baidyanath Dham Deoghar yatra, Parasnath Hills Shikharji, Netarhat, Maithon Dam, and Gaya Bodhgaya tour packages.";
  } else if (pathname.includes("/book")) {
    title = "Online Cab Booking in Dhanbad | Shree Balajee Travels";
    description =
      "Instant outstation and local cab booking with fare estimation. Direct 24x7 confirmation on WhatsApp. Call 093102 41446.";
  } else if (pathname.includes("/gallery")) {
    title = "Travel Gallery & Highway Journeys | Shree Balajee Travels";
    description =
      "Visual moments of our clean fleet, highway road trips, Deoghar pilgrimage tours, and customer travel stories in Dhanbad.";
  } else if (pathname.includes("/about")) {
    title = "About Us | Shree Balajee Travels (श्री बालाजी ट्रेवल्स)";
    description =
      "Dhanbad's premier car rental service based in Bartand. Punctual, sanitized cabs, polite chauffeurs, and 4.8-star Google rating.";
  } else if (pathname.includes("/reviews")) {
    title = "Customer Reviews & Ratings (4.8★) | Shree Balajee Travels";
    description =
      "Read 151+ genuine passenger reviews for Shree Balajee Travels in Bartand, Dhanbad. Clean cars, polite drivers & on-time pickups.";
  } else if (pathname.includes("/contact")) {
    title = "Contact & Dispatch Desk | Shree Balajee Travels Dhanbad";
    description =
      "Call 093102 41446 or WhatsApp us for instant taxi booking in Bartand, Dhanbad. Open 24 Hours, 7 days a week.";
  }

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Schema.org TaxiService / LocalBusiness Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: businessInfo.name,
          alternateName: businessInfo.hindiName,
          telephone: businessInfo.phoneRaw,
          url: "https://shreebalajeetravels.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lane No 4, Jai Prakash Nagar, Bartand",
            addressLocality: "Dhanbad",
            addressRegion: "Jharkhand",
            postalCode: "826007",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.8016,
            longitude: 86.4358,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "151",
            bestRating: "5",
          },
          areaServed: [
            "Dhanbad",
            "Durgapur",
            "Deoghar",
            "Kolkata",
            "Ranchi",
            "Bokaro",
            "Asansol",
            "Gaya",
            "Patna",
          ],
          priceRange: "₹₹",
        })}
      </script>
    </Helmet>
  );
}

// Page Transition wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <SeoMeta />
          <div className="flex flex-col min-h-screen text-slate-900 bg-[#F8FAFC]">
            <Navbar />
            <main className="flex-1 flex flex-col pb-14 md:pb-0">
              <AnimatedRoutes />
            </main>
            <Footer />
            <FloatingActions />
          </div>
        </HashRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
