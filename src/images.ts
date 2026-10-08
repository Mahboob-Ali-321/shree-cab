// Central image helper and optimized asset URLs for Shree Balajee Travels

/**
 * Rewrites any Unsplash image URL with precise width and quality parameters
 * while preserving format and crop settings.
 */
export function img(url: string, w: number, q: number = 65): string {
  if (!url) return url;
  if (!url.includes("images.unsplash.com")) return url;
  const baseUrl = url.split("?")[0];
  return `${baseUrl}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/**
 * Generates responsive srcset string for Unsplash images
 */
export function imgSrcSet(url: string, widths: number[] = [640, 960, 1280], q: number = 60): string {
  if (!url || !url.includes("images.unsplash.com")) return "";
  return widths.map((w) => `${img(url, w, q)} ${w}w`).join(", ");
}

// In-memory cache set to track already loaded image URLs across the application session
export const loadedImageUrls = new Set<string>();

export function markImageLoaded(src: string) {
  if (src) loadedImageUrls.add(src);
}

export function isImageLoaded(src: string): boolean {
  return !src ? false : loadedImageUrls.has(src);
}

export const images = {
  // Hero Carousel Backgrounds (w=1280, q=60)
  heroSlides: [
    img("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d", 1280, 60), // Highway golden hour
    img("https://images.unsplash.com/photo-1502877338535-766e1452684a", 1280, 60), // Modern sedan car on road
    img("https://images.unsplash.com/photo-1519817650390-64a93db51149", 1280, 60), // Scenic mountain highway turn
    img("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957", 1280, 60), // Highway travel journey view
  ],

  // Raw base URLs for srcset generation
  rawHeroSlides: [
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    "https://images.unsplash.com/photo-1519817650390-64a93db51149",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  ],

  // Fleet Vehicles (w=640, q=65)
  fleet: {
    hatchback: img("https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", 640, 65),
    sedan: img("https://images.unsplash.com/photo-1550355291-bbee04a92027", 640, 65),
    suv: img("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", 640, 65),
    innova: img("https://images.unsplash.com/photo-1503376780353-7e6692767b70", 640, 65),
    tempoTraveller: img("https://images.unsplash.com/photo-1570125909232-eb263c188f7e", 640, 65),
  },

  // Popular Outstation Routes (w=640, q=65)
  routes: {
    kolkata: img("https://images.unsplash.com/photo-1558431382-27e303142255", 640, 65),
    durgapur: img("https://images.unsplash.com/photo-1508873696983-2df5293cb32b", 640, 65),
    deoghar: img("https://images.unsplash.com/photo-1596402184320-417e7178b2cd", 640, 65),
    ranchi: img("https://images.unsplash.com/photo-1506744038136-46273834b3fb", 640, 65),
    gaya: img("https://images.unsplash.com/photo-1600100397608-f010f443b747", 640, 65),
    patna: img("https://images.unsplash.com/photo-1545232979-fbf68fe9b10d", 640, 65),
    bokaro: img("https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98", 640, 65),
    jamshedpur: img("https://images.unsplash.com/photo-1477959858617-67f30bc75b82", 640, 65),
    hazaribagh: img("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", 640, 65),
    giridih: img("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", 640, 65),
    asansol: img("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9", 640, 65),
    varanasi: img("https://images.unsplash.com/photo-1561361513-2d000a50f0dc", 640, 65),
    siliguri: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 640, 65),
  },

  // Tour Packages (w=640, q=65)
  tours: {
    baidyanathDham: img("https://images.unsplash.com/photo-1609766857041-ed402ea8069a", 640, 65),
    parasnathHills: img("https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99", 640, 65),
    netarhat: img("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", 640, 65),
    maithonDam: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 640, 65),
    topchanchiLake: img("https://images.unsplash.com/photo-1439066615861-d1af74d74000", 640, 65),
    rajrappaTemple: img("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", 640, 65),
    kolkataTour: img("https://images.unsplash.com/photo-1571536802807-30451e3955d8", 640, 65),
    bodhgayaYatra: img("https://images.unsplash.com/photo-1524492412937-b28074a5d7da", 640, 65),
  },

  // Page Header Banners (w=1280, q=60)
  pageBanners: {
    home: img("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d", 1280, 60),
    services: img("https://images.unsplash.com/photo-1485291571150-772bcfc10da5", 1280, 60),
    fleet: img("https://images.unsplash.com/photo-1503376780353-7e6692767b70", 1280, 60),
    routes: img("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", 1280, 60),
    tours: img("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", 1280, 60),
    about: img("https://images.unsplash.com/photo-1521737604893-d14cc237f11d", 1280, 60),
    reviews: img("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", 1280, 60),
    contact: img("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", 1280, 60),
    book: img("https://images.unsplash.com/photo-1511919884226-fd3cad34687c", 1280, 60),
    gallery: img("https://images.unsplash.com/photo-1508873696983-2df5293cb32b", 1280, 60),
  },

  // 12 Distinct Gallery Photos: thumbnails (w=480, q=60) and full lightbox (w=1400, q=70)
  gallery: [
    {
      id: "gal-1",
      url: img("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d", 1400, 70),
      title: "Sunrise Highway Drive",
      category: "Highway",
      caption: "Early morning outstation drive from Dhanbad along the Grand Trunk Road expressway.",
    },
    {
      id: "gal-2",
      url: img("https://images.unsplash.com/photo-1550355291-bbee04a92027", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1550355291-bbee04a92027", 1400, 70),
      title: "Clean Sedan Chauffeur Service",
      category: "Fleet",
      caption: "Spacious, air-conditioned Maruti Dzire sanitized and ready for pickup.",
    },
    {
      id: "gal-3",
      url: img("https://images.unsplash.com/photo-1596402184320-417e7178b2cd", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1596402184320-417e7178b2cd", 1400, 70),
      title: "Deoghar Temple Darshan Yatra",
      category: "Tours",
      caption: "Family pilgrimage tour to Baba Baidyanath Dham Jyotirlinga.",
    },
    {
      id: "gal-4",
      url: img("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", 1400, 70),
      title: "Prime Ertiga & Innova Fleet",
      category: "Fleet",
      caption: "7-seater SUVs ready for long-distance family and corporate groups.",
    },
    {
      id: "gal-5",
      url: img("https://images.unsplash.com/photo-1558431382-27e303142255", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1558431382-27e303142255", 1400, 70),
      title: "Kolkata Airport Direct Drop",
      category: "Airport",
      caption: "Door-to-terminal express taxi service to Netaji Subhash Chandra Bose Airport.",
    },
    {
      id: "gal-6",
      url: img("https://images.unsplash.com/photo-1506744038136-46273834b3fb", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1506744038136-46273834b3fb", 1400, 70),
      title: "Scenic Parasnath Foothills",
      category: "Tours",
      caption: "Passing through the picturesque green ghats of Jharkhand.",
    },
    {
      id: "gal-7",
      url: img("https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", 1400, 70),
      title: "Local Dhanbad City Commutes",
      category: "Local",
      caption: "Quick pickups across Bartand, Bank More, Hirapur, and Saraidhela.",
    },
    {
      id: "gal-8",
      url: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 1400, 70),
      title: "Maithon Dam Weekend Excursion",
      category: "Tours",
      caption: "Comfortable round-trip sightseeing taxi package to Maithon reservoir.",
    },
    {
      id: "gal-9",
      url: img("https://images.unsplash.com/photo-1570125909232-eb263c188f7e", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1570125909232-eb263c188f7e", 1400, 70),
      title: "Wedding & Group Barati Traveller",
      category: "Fleet",
      caption: "Luxury 17-seater Tempo Traveller for marriage and corporate offsites.",
    },
    {
      id: "gal-10",
      url: img("https://images.unsplash.com/photo-1519817650390-64a93db51149", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1519817650390-64a93db51149", 1400, 70),
      title: "Gaya & Bodhgaya Spiritual Trip",
      category: "Tours",
      caption: "Pind Daan and Buddhist circuit tours arranged with patient drivers.",
    },
    {
      id: "gal-11",
      url: img("https://images.unsplash.com/photo-1485291571150-772bcfc10da5", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1485291571150-772bcfc10da5", 1400, 70),
      title: "Spotless Car Cabin Hygiene",
      category: "Safety",
      caption: "Fresh fragrance, phone chargers, and sanitized seats in every ride.",
    },
    {
      id: "gal-12",
      url: img("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957", 480, 60),
      fullUrl: img("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957", 1400, 70),
      title: "Night Highway Safe Transit",
      category: "Highway",
      caption: "24x7 continuous highway backup and GPS-tracked routes.",
    },
  ],

  // Footer / CTA backgrounds (w=1280, q=55)
  ctaBackground: img("https://images.unsplash.com/photo-1508873696983-2df5293cb32b", 1280, 55),
  aboutTeam: img("https://images.unsplash.com/photo-1521737604893-d14cc237f11d", 900, 65),
};
