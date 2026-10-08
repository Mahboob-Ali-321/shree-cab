// Central business configuration & data for Shree Balajee Travels
// Fully editable for rates, contact details, routes, packages, and multilingual copy.
import { images } from "./images";

export const businessInfo = {
  name: "Shree Balajee Travels",
  hindiName: "श्री बालाजी ट्रेवल्स",
  tagline: "Safe, Clean & On-Time Taxi Service in Dhanbad",
  taglineHi: "धनबाद में सुरक्षित, स्वच्छ और समय पर टैक्सी सेवा",
  subTagline: "Dhanbad's trusted car rental & outstation cab service for family, corporate & pilgrimage journeys.",
  subTaglineHi: "धनबाद से पारिवारिक, कॉर्पोरेट और तीर्थ यात्राओं के लिए विश्वसनीय कार रेंटल व आउटस्टेशन कैब सेवा।",
  address: "Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad, Jharkhand 826007",
  landmark: "Near Bartand Bus Stand, Jai Prakash Nagar",
  phone: "093102 41446",
  phoneRaw: "+919310241446",
  telLink: "tel:+919310241446",
  whatsappNumber: "919310241446",
  whatsappLink: "https://wa.me/919310241446",
  email: "contact@shreebalajeetravels.in",
  rating: 4.8,
  reviewCount: 151,
  ratingBreakdown: [
    { stars: 5, percentage: 92, count: 139 },
    { stars: 4, percentage: 6, count: 9 },
    { stars: 3, percentage: 2, count: 3 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ],
  hours: "Open 24 Hours / 7 Days a Week",
  operatingSince: "2018",
  completedTripsCount: "5,000+",
  activeRoutesCount: "15+",
  googleMapsLink: "https://www.google.com/maps/place/Shree+Balajee+Travels/@23.8068669,86.4269328,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6bd23f3f5a967:0xbb38a904b8dd28a4!8m2!3d23.8068669!4d86.4295077!16s%2Fg%2F11py0f5wps",
  lat: 23.8068669,
  lng: 86.4295077,
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=23.8068669,86.4295077&z=17&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8068669,86.4295077",
  announcement: "⚡ 24x7 Outstation & Airport Transfers | Sanitized Cabs | Instant WhatsApp Confirmation",
  announcementHi: "⚡ 24x7 आउटस्टेशन और एयरपोर्ट टैक्सी सेवा उपलब्ध | सैनिटाइज्ड गाड़ियाँ | त्वरित व्हाट्सएप बुकिंग",
};

// Rate Card for Fare Estimator (Editable)
export interface VehicleRate {
  id: string;
  name: string;
  category: string;
  perKmRate: number; // in INR
  minKmPerDay: number; // standard minimum km for outstation
  driverAllowancePerDay: number; // in INR
  capacity: string;
  luggage: string;
  description: string;
  image: string;
}

export const vehicleRates: Record<string, VehicleRate> = {
  hatchback: {
    id: "hatchback",
    name: "Maruti Swift / WagonR",
    category: "Hatchback",
    perKmRate: 11,
    minKmPerDay: 250,
    driverAllowancePerDay: 350,
    capacity: "4 Passengers",
    luggage: "2 Medium Bags",
    description: "Compact & economical for city rides & light luggage trips.",
    image: images.fleet.hatchback,
  },
  sedan: {
    id: "sedan",
    name: "Maruti Dzire / Toyota Etios",
    category: "Sedan",
    perKmRate: 12.5,
    minKmPerDay: 250,
    driverAllowancePerDay: 350,
    capacity: "4 Passengers",
    luggage: "3 Large Bags",
    description: "Best balance of comfort, boot space & smooth highway ride.",
    image: images.fleet.sedan,
  },
  suv: {
    id: "suv",
    name: "Maruti Ertiga (6+1 Seater)",
    category: "SUV",
    perKmRate: 15,
    minKmPerDay: 250,
    driverAllowancePerDay: 400,
    capacity: "6 Passengers",
    luggage: "4 Bags",
    description: "Spacious seating with roof AC for family groups and luggage.",
    image: images.fleet.suv,
  },
  innova: {
    id: "innova",
    name: "Toyota Innova Crysta",
    category: "Prime SUV",
    perKmRate: 18,
    minKmPerDay: 300,
    driverAllowancePerDay: 500,
    capacity: "7 Passengers",
    luggage: "5 Bags",
    description: "Ultimate luxury, captain seats & supreme highway comfort.",
    image: images.fleet.innova,
  },
  tempoTraveller: {
    id: "tempoTraveller",
    name: "Tempo Traveller (13-17 Seater)",
    category: "Tempo Traveller",
    perKmRate: 24,
    minKmPerDay: 300,
    driverAllowancePerDay: 600,
    capacity: "12-17 Passengers",
    luggage: "Ample Roof Carrier",
    description: "Ideal for wedding barats, corporate offsites & group yatras.",
    image: images.fleet.tempoTraveller,
  },
};

// Hourly Local Rental Packages (Editable)
export interface HourlyPackage {
  duration: string;
  distance: string;
  hatchbackPrice: number;
  sedanPrice: number;
  suvPrice: number;
  extraKmRate: number;
  extraHourRate: number;
}

export const hourlyPackages: HourlyPackage[] = [
  {
    duration: "4 Hours",
    distance: "40 Kilometers",
    hatchbackPrice: 1200,
    sedanPrice: 1400,
    suvPrice: 1800,
    extraKmRate: 12,
    extraHourRate: 150,
  },
  {
    duration: "8 Hours (Full Day)",
    distance: "80 Kilometers",
    hatchbackPrice: 2200,
    sedanPrice: 2500,
    suvPrice: 3200,
    extraKmRate: 12,
    extraHourRate: 150,
  },
  {
    duration: "12 Hours (Extended)",
    distance: "120 Kilometers",
    hatchbackPrice: 3200,
    sedanPrice: 3600,
    suvPrice: 4500,
    extraKmRate: 12,
    extraHourRate: 150,
  },
];

// Expanded Routes List with distances & distinct image assignments
export interface RouteData {
  id: string;
  from: string;
  to: string;
  title: string;
  distanceKm: number;
  approxDuration: string;
  highway: string;
  highlights: string;
  description: string;
  image: string;
  recommendedCar: string;
}

export const routesData: RouteData[] = [
  {
    id: "dhanbad-to-kolkata",
    from: "Dhanbad",
    to: "Kolkata (Airport & City)",
    title: "Dhanbad to Kolkata Cab",
    distanceKm: 270,
    approxDuration: "5.5 - 6 Hours",
    highway: "NH 19 (Grand Trunk Road Expressway)",
    highlights: "Airport drops, Howrah station, Salt Lake & Park Street drops",
    description: "Seamless 4-lane expressway journey with planned comfort breaks at top dhabas. 24x7 midnight pickup available.",
    image: images.routes.kolkata,
    recommendedCar: "Sedan or Innova",
  },
  {
    id: "dhanbad-to-deoghar",
    from: "Dhanbad",
    to: "Deoghar (Baba Baidyanath Dham)",
    title: "Dhanbad to Deoghar Baidyanath Dham",
    distanceKm: 115,
    approxDuration: "2.5 - 3 Hours",
    highway: "Govindpur - Tundi - Giridih - Deoghar Road",
    highlights: "Jyotirlinga Darshan, Naulakha Temple, Tapovan & Trikuta Parvat",
    description: "Devotional trip with experienced chauffeurs familiar with temple timings, VIP queue access and safe parking.",
    image: images.routes.deoghar,
    recommendedCar: "Ertiga SUV or Sedan",
  },
  {
    id: "dhanbad-to-durgapur",
    from: "Dhanbad",
    to: "Durgapur (City & Kazi Nazrul Islam Airport)",
    title: "Dhanbad to Durgapur Cab",
    distanceKm: 110,
    approxDuration: "2 - 2.5 Hours",
    highway: "NH 19 via Asansol & Raniganj",
    highlights: "Mission Hospital visits, Andal airport, Steel plant meetings",
    description: "Fast inter-city express transit. Popular for routine medical checkups and corporate commutes.",
    image: images.routes.durgapur,
    recommendedCar: "Hatchback or Sedan",
  },
  {
    id: "dhanbad-to-ranchi",
    from: "Dhanbad",
    to: "Ranchi (Capital & Birsa Munda Airport)",
    title: "Dhanbad to Ranchi Cab",
    distanceKm: 155,
    approxDuration: "3.5 - 4 Hours",
    highway: "NH 320 / Bokaro - Ramgarh Expressway",
    highlights: "Secretariat visits, Birsa Munda Airport (IXR), medical centers",
    description: "Smooth ride across scenic Jharkhand valleys with disciplined drivers who handle mountain ghats with care.",
    image: images.routes.ranchi,
    recommendedCar: "Sedan or Ertiga SUV",
  },
  {
    id: "dhanbad-to-gaya",
    from: "Dhanbad",
    to: "Gaya & Bodh Gaya",
    title: "Dhanbad to Gaya / Bodh Gaya Pilgrimage",
    distanceKm: 220,
    approxDuration: "4.5 - 5 Hours",
    highway: "NH 19 (GT Road via Barhi)",
    highlights: "Vishnupad Temple Pind Daan rituals & Mahabodhi Temple tours",
    description: "Reliable outstation cab service for sacred rites and peaceful Buddhist monastery visits.",
    image: images.routes.gaya,
    recommendedCar: "Sedan or Prime SUV",
  },
  {
    id: "dhanbad-to-patna",
    from: "Dhanbad",
    to: "Patna (Bihar Capital & Airport)",
    title: "Dhanbad to Patna Cab",
    distanceKm: 330,
    approxDuration: "7 - 7.5 Hours",
    highway: "NH 22 via Nawada & Bihar Sharif",
    highlights: "Patna Junction, AIIMS Patna, Secretariat, Jay Prakash Airport",
    description: "Long-distance safe highway travel with experienced chauffeurs who ensure punctual arrival.",
    image: images.routes.patna,
    recommendedCar: "Sedan or Innova",
  },
  {
    id: "dhanbad-to-bokaro",
    from: "Dhanbad",
    to: "Bokaro Steel City",
    title: "Dhanbad to Bokaro Steel City",
    distanceKm: 45,
    approxDuration: "1 - 1.2 Hours",
    highway: "NH 218 / Dhanbad-Bokaro Highway",
    highlights: "Steel Plant, Chas, DPS Bokaro, Garga Dam & city errands",
    description: "Quick daily city commute for corporate visits, exams, and family functions.",
    image: images.routes.bokaro,
    recommendedCar: "Hatchback or Sedan",
  },
  {
    id: "dhanbad-to-jamshedpur",
    from: "Dhanbad",
    to: "Jamshedpur (Tatanagar)",
    title: "Dhanbad to Jamshedpur (Tatanagar)",
    distanceKm: 140,
    approxDuration: "3.5 Hours",
    highway: "NH 18 via Purulia / Chandil",
    highlights: "Tata Steel visits, Jubilee Park, XLRI, Tatanagar railway station",
    description: "Comfortable interstate travel through scenic tribal belts into India's Steel City.",
    image: images.routes.jamshedpur,
    recommendedCar: "Sedan or Ertiga",
  },
  {
    id: "dhanbad-to-hazaribagh",
    from: "Dhanbad",
    to: "Hazaribagh",
    title: "Dhanbad to Hazaribagh Cab",
    distanceKm: 130,
    approxDuration: "2.5 - 3 Hours",
    highway: "GT Road NH 19 via Bagodar",
    highlights: "Canary Hill, Hazaribagh National Park, Vinoba Bhave University",
    description: "Peaceful forest route with clean stops for family holidays and student transit.",
    image: images.routes.hazaribagh,
    recommendedCar: "Sedan or SUV",
  },
  {
    id: "dhanbad-to-giridih",
    from: "Dhanbad",
    to: "Giridih & Parasnath",
    title: "Dhanbad to Giridih & Madhuban",
    distanceKm: 65,
    approxDuration: "1.5 Hours",
    highway: "Tundi - Giridih Road",
    highlights: "Parasnath Jain Tirth, Usri Falls, Khandoli Dam water sports",
    description: "Short scenic ride to the sacred Jain pilgrimage hub at the foot of Shikharji.",
    image: images.routes.giridih,
    recommendedCar: "Hatchback or Sedan",
  },
  {
    id: "dhanbad-to-asansol",
    from: "Dhanbad",
    to: "Asansol (Junction & City)",
    title: "Dhanbad to Asansol Cab",
    distanceKm: 60,
    approxDuration: "1.2 - 1.5 Hours",
    highway: "NH 19 (GT Road Expressway)",
    highlights: "Asansol Junction trains, Kalyaneshwari Temple, Maithon Dam",
    description: "Fast express connectivity between Jharkhand and West Bengal.",
    image: images.routes.asansol,
    recommendedCar: "Hatchback or Sedan",
  },
  {
    id: "dhanbad-to-varanasi",
    from: "Dhanbad",
    to: "Varanasi (Kashi Vishwanath)",
    title: "Dhanbad to Varanasi (Kashi)",
    distanceKm: 410,
    approxDuration: "8 - 8.5 Hours",
    highway: "Grand Trunk Road Expressway NH 19",
    highlights: "Kashi Vishwanath Temple, Ganga Aarti, Sarnath Buddhist circuit",
    description: "Spiritual long-distance yatra with top-spec suspension vehicles and experienced highway drivers.",
    image: images.routes.varanasi,
    recommendedCar: "Innova Crysta or Ertiga",
  },
  {
    id: "dhanbad-to-siliguri",
    from: "Dhanbad",
    to: "Siliguri / North Bengal",
    title: "Dhanbad to Siliguri & Darjeeling Gateway",
    distanceKm: 520,
    approxDuration: "11 - 12 Hours",
    highway: "NH 27 / North Bengal Highway",
    highlights: "Gateway to Darjeeling, Sikkim, Bagdogra Airport & Dooars tea gardens",
    description: "Full family tour package with dual drivers for non-stop comfort.",
    image: images.routes.siliguri,
    recommendedCar: "Innova Crysta or Tempo Traveller",
  },
];

// Tour Packages Data with Full Itineraries
export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  approxDistance: string;
  idealFor: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; title: string; activities: string }[];
}

export const tourPackagesData: TourPackage[] = [
  {
    id: "deoghar-baidyanath-dham",
    title: "Baba Baidyanath Dham (Deoghar) Pilgrimage",
    duration: "1 Day or 2 Days / 1 Night",
    approxDistance: "230 km round trip",
    idealFor: "Family Pilgrimage & Spiritual Seekers",
    image: images.tours.baidyanathDham,
    description: "A soul-enriching pilgrimage to one of the 12 sacred Jyotirlingas. Our driver will guide you on temple entry protocols, Naulakha Temple, and Trikuta Parvat.",
    highlights: ["Baba Baidyanath Temple VIP Darshan guidance", "Naulakha Temple & Ramkrishna Mission", "Tapovan caves & Trikuta ropeway", "Basukinath Temple extension available"],
    inclusions: ["Dedicated Chauffeur & Sanitized Cab", "Doorstep Pickup & Return in Dhanbad", "Fuel, Toll & Parking charges", "Temple waiting time"],
    exclusions: ["Temple VIP puja tickets", "Hotel accommodation", "Meals & personal expenses"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dhanbad to Deoghar & Darshan",
        activities: "Early morning 5:00 AM pickup from Dhanbad residence. Scenic 2.5 hr drive to Deoghar. Sacred Jalabhishek at Baidyanath Jyotirlinga. Post-darshan visit Naulakha Mandir & Tapovan. Evening return to Dhanbad or optional overnight stay."
      },
      {
        day: "Day 2 (Optional)",
        title: "Basukinath Temple & Return",
        activities: "Morning visit to Basukinath Dham (40 km from Deoghar). Complete Shiv-Parvati darshan rituals. Leisurely return journey to Dhanbad with scenic stops."
      }
    ]
  },
  {
    id: "parasnath-shikharji",
    title: "Parasnath Hills (Shikharji) Spiritual Yatra",
    duration: "1 Day Excursion",
    approxDistance: "140 km round trip",
    idealFor: "Jain Pilgrims, Nature Lovers & Trekkers",
    image: images.tours.parasnathHills,
    description: "Visit the highest mountain peak in Jharkhand (1365m) and the holiest Jain Tirtha where 20 of the 24 Tirthankaras attained Nirvana.",
    highlights: ["Madhuban base camp drop & pickup", "Bhomiyaji Mandir & Dharamshala assistance", "Trek coordination or Doli assistance guidance", "Usri Falls scenic halt on return"],
    inclusions: ["AC Cab with dedicated driver waiting at Madhuban", "All tolls, parking and driver food allowance", "Pickup and drop at Dhanbad / Station"],
    exclusions: ["Trek Doli/Palanquin charges", "Meals & personal donations"],
    itinerary: [
      {
        day: "Full Day",
        title: "Dhanbad to Madhuban (Parasnath) & Trek",
        activities: "Early 4:00 AM start from Dhanbad to arrive Madhuban base before sunrise. Driver stays on standby while you undertake the holy Vandana. Late afternoon rendezvous at base camp, visit Usri Falls and return to Dhanbad by 8:00 PM."
      }
    ]
  },
  {
    id: "netarhat-queen-of-chotanagpur",
    title: "Netarhat & Betla Wildlife Experience",
    duration: "2 Days / 1 Night or 3 Days",
    approxDistance: "580 km round trip",
    idealFor: "Nature Escapes, Families & Photography",
    image: images.tours.netarhat,
    description: "Witness mystical pine forests, Magnolia sunset point, Upper Ghaghri waterfalls, and the cool mountain breeze of the Queen of Chotanagpur.",
    highlights: ["Sunrise at Netarhat Tourist Lodge", "Magnolia Sunset Point romantic vista", "Koil view point & pine forests", "Betla National Park safari extension"],
    inclusions: ["Complete outstation round-trip AC SUV/Sedan", "Fuel, interstate toll & driver boarding allowance", "Sightseeing transfer across all viewpoints"],
    exclusions: ["Forest safari permits", "Hotel stay", "Food & beverage"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dhanbad to Netarhat via Ranchi",
        activities: "Morning drive passing Bokaro, Ranchi and the scenic winding valley roads. Arrive at Netarhat by afternoon, check-in, explore Pine forest and enjoy breathtaking sunset at Magnolia Point."
      },
      {
        day: "Day 2",
        title: "Sunrise & Waterfalls Return",
        activities: "Early morning sunrise view over Chotanagpur plateau. Visit Upper Ghaghri & Koil View Point. Post-lunch leisurely return drive to Dhanbad."
      }
    ]
  },
  {
    id: "maithon-panchet-dams",
    title: "Maithon Dam & Kalyaneshwari Temple Day Tour",
    duration: "1 Day (8 Hours)",
    approxDistance: "110 km round trip",
    idealFor: "Weekend Family Picnic & Boating",
    image: images.tours.maithonDam,
    description: "Relaxing day trip to the mighty Barakar river reservoir, boating at Deer Park island, and blessings at the ancient Maa Kalyaneshwari temple.",
    highlights: ["Speedboat & paddle boating on Barakar reservoir", "Maa Kalyaneshwari 500-year-old temple darshan", "Panchet Dam hydro station panoramic drive", "Topchanchi Lake route combination"],
    inclusions: ["AC car for up to 8 hours and 120 km", "Driver allowance and parking fees", "Doorstep pickup and return in Dhanbad"],
    exclusions: ["Boating tickets", "Temple offerings & lunch"],
    itinerary: [
      {
        day: "Day 1",
        title: "Scenic Dams & Temple Circuit",
        activities: "9:00 AM pickup. Drive via GT Road to Maithon Dam. Enjoy scenic boat ride to islands. Lunch at lakeside resort. Visit Kalyaneshwari Mandir for darshan. Scenic drive across Panchet dam crest and return to Dhanbad by 6:00 PM."
      }
    ]
  },
  {
    id: "rajrappa-chhinnamasta",
    title: "Rajrappa Chhinnamasta Shaktipeeth Darshan",
    duration: "1 Day Tour",
    approxDistance: "190 km round trip",
    idealFor: "Devotees & Spiritual Groups",
    image: images.tours.rajrappaTemple,
    description: "Sacred trip to the prominent tantric Shaktipeeth temple situated at the picturesque confluence of the Damodar and Bhera (Bhairavi) rivers.",
    highlights: ["Ancient Chhinnamasta temple darshan", "Bhairavi river boating & waterfall vista", "Experienced drivers familiar with puja samagri shops", "Peaceful countryside journey"],
    inclusions: ["Chauffeur-driven AC car with waiting time", "All highway toll and parking charges"],
    exclusions: ["Puja archana expenses", "Food"],
    itinerary: [
      {
        day: "Full Day",
        title: "Dhanbad - Chas - Ramgarh - Rajrappa",
        activities: "6:30 AM departure from Dhanbad. Arrive at Rajrappa by 9:30 AM. Perform rituals and sacred bath at holy river sangam. Relax, enjoy local prasad, and return to Dhanbad by late afternoon."
      }
    ]
  },
  {
    id: "gaya-bodhgaya-circuit",
    title: "Gaya & Bodhgaya Complete Pilgrimage",
    duration: "2 Days / 1 Night",
    approxDistance: "450 km round trip",
    idealFor: "Pind Daan Rituals & Buddhist Monasteries",
    image: images.tours.bodhgayaYatra,
    description: "Comprehensive yatra combining Hindu ancestral Pind Daan rituals at Vishnupad Mandir with the tranquil serenity of UNESCO World Heritage Mahabodhi Temple.",
    highlights: ["Vishnupad Temple & Falgu River ghats", "Akshayavat Banyan Tree for sacred rites", "Mahabodhi Temple & Bodhi Tree meditation", "80-Foot Giant Buddha statue & Japanese Temple"],
    inclusions: ["All outstation transport in comfortable AC car", "Driver overnight allowance and highway tolls", "Flexible halts for religious ceremonies"],
    exclusions: ["Purohit/Panda dakshina", "Hotel accommodation", "Monument entries"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dhanbad to Gaya - Ancestral Rites",
        activities: "Early 5:00 AM start via NH 19 GT road. Reach Gaya by 9:30 AM. Chauffeur assists parking near Vishnupad Temple for sacred Pind Daan ceremonies. Check-in to hotel, rest, evening Falgu river aarti."
      },
      {
        day: "Day 2",
        title: "Bodhgaya Exploration & Return",
        activities: "Morning peaceful visit to UNESCO Mahabodhi Temple, meditate under Bodhi Tree, visit Great Buddha Statue, Thai Monastery and return to Dhanbad by evening."
      }
    ]
  },
];

export const servicesList = [
  {
    id: "outstation",
    title: "Outstation Cabs",
    subtitle: "One-Way & Round Trip",
    description: "Hassle-free outstation taxi service from Dhanbad to any city in Jharkhand, West Bengal, Bihar, and Odisha with courteous highway drivers.",
    icon: "Compass",
    points: ["One-way & round-trip booking", "Zero return fare on select one-ways", "Trained highway chauffeurs", "24x7 roadside backup"],
  },
  {
    id: "local-taxi",
    title: "Local City Taxi & Rentals",
    subtitle: "Hourly & Full Day Packages",
    description: "Comfortable rides for local errands, family outings, business meetings, shopping, and doctor visits across Dhanbad, Bartand, Bank More, Hirapur, and Govindpur.",
    icon: "Car",
    points: ["4 hr / 40 km & 8 hr / 80 km packages", "Doorstep pickup anywhere in Dhanbad", "AC always on", "Affordable per-km billing"],
  },
  {
    id: "airport-railway",
    title: "Airport & Railway Station Transfers",
    subtitle: "Never Miss A Connection",
    description: "Guaranteed on-time pickups and drops to Dhanbad Junction, Bokaro Station, Asansol Junction, Kazi Nazrul Islam Airport (Durgapur), and Kolkata Airport.",
    icon: "PlaneTakeoff",
    points: ["Flight & train delay monitoring", "Luggage handling support", "Midnight & early morning pickups", "Pre-assigned driver contact"],
  },
  {
    id: "wedding-events",
    title: "Wedding & Event Car Rentals",
    subtitle: "Special Moments, Pristine Cars",
    description: "Luxury sedans, decorated bride & groom cars, and bulk SUV/Tempo fleets for wedding guests and family processions across Dhanbad and nearby districts.",
    icon: "Sparkles",
    points: ["Flower decoration available on request", "Synchronized fleet coordination", "Immaculate premium sedans", "Dedicated event coordinator"],
  },
  {
    id: "corporate",
    title: "Corporate & Executive Travel",
    subtitle: "BCCL, Coal & Industrial Visits",
    description: "Professional chauffeur-driven cars for mining executives, corporate delegates, consultants, and VIP guests visiting Dhanbad, BCCL, ISM IIT Dhanbad, and Bokaro.",
    icon: "Briefcase",
    points: ["GST invoice provided", "Strict confidentiality", "English/Hindi speaking drivers", "Monthly billing for corporate accounts"],
  },
  {
    id: "tour-packages",
    title: "Custom Tour & Pilgrimage Packages",
    subtitle: "Baidyanath Dham, Parasnath & Beyond",
    description: "Personalized travel itineraries to Baba Baidyanath Dham (Deoghar), Shikharji (Parasnath), Maithon Dam, Topchanchi Lake, Bodh Gaya, and Rajgir.",
    icon: "MapPin",
    points: ["Flexible temple darshan timings", "Family-friendly route planning", "Experienced route guides", "Sightseeing halt flexibility"],
  },
];

// Safety & Trust Pillars
export const safetyPillars = [
  {
    title: "Verified & Background Checked",
    desc: "Every chauffeur holds a valid commercial badge, local references, and over 5+ years of highway experience.",
    icon: "UserCheck",
  },
  {
    title: "Spotless Sanitized Fleet",
    desc: "Cars are thoroughly washed, vacuumed, and fragrant before each departure. No smoking inside vehicles.",
    icon: "ShieldCheck",
  },
  {
    title: "GPS Tracked Journeys",
    desc: "All long-distance outstation rides are continuously tracked for family peace of mind and live emergency backup.",
    icon: "Navigation",
  },
  {
    title: "24x7 Direct Dispatch Desk",
    desc: "No chatbots or endless call trees. You speak directly to our local Dhanbad dispatch manager anytime.",
    icon: "PhoneCall",
  },
  {
    title: "100% Zero Hidden Charges",
    desc: "Upfront clarity on tolls, parking, per-km rates, and driver night allowances. What we quote is what you pay.",
    icon: "BadgePercent",
  },
  {
    title: "Driver Details 2 Hours Prior",
    desc: "Receive chauffeur name, mobile number, and car registration well in advance so there is zero travel anxiety.",
    icon: "FileCheck",
  },
];

// How It Works - 4 Steps
export const howItWorksSteps = [
  {
    step: "01",
    title: "Choose Route & Vehicle",
    titleHi: "रूट और गाड़ी चुनें",
    desc: "Pick your pickup point, destination, date, and preferred car (Sedan, SUV, or Tempo Traveller).",
    descHi: "पिकअप, गंतव्य, तारीख और पसंदीदा गाड़ी (सेडान, एसयूवी या टेम्पो) चुनें।",
  },
  {
    step: "02",
    title: "Instant WhatsApp Confirmation",
    titleHi: "व्हाट्सएप पर तुरंत पुष्टि",
    desc: "Click WhatsApp or Call. Our dispatcher shares an all-inclusive quotation and confirms your booking immediately.",
    descHi: "व्हाट्सएप पर क्लिक करें। हमारा डिस्पैचर तुरंत स्पष्ट रेट कोटेशन और पुष्टि साझा करता है।",
  },
  {
    step: "03",
    title: "Driver Details at Doorstep",
    titleHi: "ड्राइवर विवरण और समय पर पिकअप",
    desc: "You receive vehicle number and driver mobile contact. The cab arrives 10-15 mins early at your doorstep.",
    descHi: "गाड़ी नंबर और ड्राइवर संपर्क समय से पहले मिलता है। गाड़ी समय से 15 मिनट पूर्व आपके पते पर पहुंचेगी।",
  },
  {
    step: "04",
    title: "Enjoy Safe & Relaxed Journey",
    titleHi: "सुरक्षित व आरामदायक यात्रा",
    desc: "Sit back in a chilled AC cabin with smooth highway driving and hassle-free payment at trip end.",
    descHi: "ठंडी एसी केबिन में सुरक्षित ड्राइविंग का आनंद लें और यात्रा समाप्ति पर आसान भुगतान करें।",
  },
];

// 12 Comprehensive FAQs
export const faqsData = [
  {
    q: "How far in advance should I book my cab with Shree Balajee Travels?",
    a: "While advance booking (12-24 hours prior) is best for guaranteed vehicle choice, we specialize in short-notice bookings. In Bartand, Bank More, and Dhanbad city, a cab can reach your doorstep in 15 to 25 minutes.",
  },
  {
    q: "What payment modes do you accept?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Net Banking, and NEFT for corporate bookings. You can pay conveniently at the end of the trip.",
  },
  {
    q: "Are toll taxes, state road taxes, and parking fees included in the fare?",
    a: "Unless explicitly booked under a fixed all-inclusive package, toll taxes, state border road taxes (e.g. West Bengal / Bihar), and airport parking are paid as per actual receipts. We maintain 100% transparency.",
  },
  {
    q: "Is there any extra charge for night driving or late-night pickup?",
    a: "A nominal driver night allowance (typically ₹250 - ₹350) applies only if the trip involves driving between 10:00 PM and 6:00 AM. There are no surprise surcharge multipliers.",
  },
  {
    q: "How do waiting charges work during sightseeing or shopping?",
    a: "For outstation and hourly rental packages, reasonable waiting time during temple darshan, meals, or business meetings is already factored in. Excessive waiting beyond package limits is billed at transparent hourly rates (approx ₹100-₹150/hr).",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand plans change. Cancellations made more than 3 hours prior to pickup carry zero cancellation fee. Simply drop a message on WhatsApp or call our hotline.",
  },
  {
    q: "How much luggage can fit in your sedans and SUVs?",
    a: "Our sedans (Dzire, Etios) comfortably fit 2-3 large suitcases plus 2 duffels in the boot. For heavier pilgrimage or wedding luggage, our 6-7 seater Ertiga and Innova Crysta have ample luggage capacity and roof carriers.",
  },
  {
    q: "Can I request a child seat or baby-friendly halt during the trip?",
    a: "Yes! Please inform us during WhatsApp booking so our driver is prepped with clean rear seating and plans gentle, baby-friendly driving with flexible food/restroom breaks.",
  },
  {
    q: "Are pets allowed in the cab?",
    a: "Yes, small domestic pets (dogs/cats) are welcome with prior notification. We request passengers to bring a seat mat or carrier to help keep the upholstery spotless for next travelers.",
  },
  {
    q: "What are the rules for round-trip outstation bookings?",
    a: "For multi-day outstation journeys, a standard minimum of 250 km per day is calculated, along with driver daily boarding allowance. You have full freedom to plan your day's schedule.",
  },
  {
    q: "Do you monitor incoming flights for Kolkata or Durgapur airport pickups?",
    a: "Yes! When you provide your flight number, our dispatch team monitors flight landing times so the chauffeur is waiting at the arrival terminal even if your flight is delayed.",
  },
  {
    q: "Can corporate companies in Dhanbad get monthly GST billing?",
    a: "Yes, we regularly service BCCL, IIT ISM Dhanbad, and industrial partners with official GST invoices, trip log sheets, and consolidated monthly credit billing.",
  },
];

// Bilingual Translations (English & Hindi)
export const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navFleet: "Fleet",
    navRoutes: "Routes",
    navTours: "Tours",
    navBook: "Book Cab",
    navAbout: "About",
    navReviews: "Reviews",
    navGallery: "Gallery",
    navContact: "Contact",
    callNow: "Call Now",
    bookWhatsApp: "Book on WhatsApp",
    checkFare: "Estimate Fare",
    trustRating: "4.8 Google Rating",
    verifiedReviews: "151+ Reviews",
    instantBooking: "Instant Cab Booking",
    fareEstimatorTitle: "Indicative Fare Estimator",
    chooseRoute: "Choose Route",
    chooseCar: "Select Car Type",
    oneWay: "One-Way",
    roundTrip: "Round-Trip",
    getExactQuote: "Get Exact Quote on WhatsApp",
    requestCallback: "Request a Callback",
  },
  hi: {
    navHome: "होम",
    navServices: "सेवाएं",
    navFleet: "गाड़ियां",
    navRoutes: "रूट्स",
    navTours: "टूर पैकेज",
    navBook: "कैब बुक करें",
    navAbout: "हमारे बारे में",
    navReviews: "समीक्षाएं",
    navGallery: "गैलरी",
    navContact: "संपर्क",
    callNow: "कॉल करें",
    bookWhatsApp: "व्हाट्सएप बुकिंग",
    checkFare: "किराया जांचें",
    trustRating: "4.8★ गूगल रेटिंग",
    verifiedReviews: "151+ ग्राहक समीक्षाएं",
    instantBooking: "त्वरित कैब बुकिंग",
    fareEstimatorTitle: "अनुमानित किराया कैलकुलेटर",
    chooseRoute: "रूट चुनें",
    chooseCar: "वाहन चुनें",
    oneWay: "एक तरफा",
    roundTrip: "आना-जाना (राउंड ट्रिप)",
    getExactQuote: "व्हाट्सएप पर पक्का रेट पाएं",
    requestCallback: "कॉल बैक का अनुरोध करें",
  },
};

// Helper to construct WhatsApp booking URLs with all fields formatted
export function createWhatsAppBookingUrl(params: {
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  carType?: string;
  service?: string;
  passengers?: string;
  tripType?: string;
  duration?: string;
  estimatedFare?: string;
  message?: string;
}) {
  const parts = [
    "*Namaste Shree Balajee Travels!*",
    "I would like to book / enquire for a cab with following details:",
  ];

  if (params.service) parts.push(`🚕 *Service Category:* ${params.service}`);
  if (params.tripType) parts.push(`🔁 *Trip Type:* ${params.tripType}`);
  if (params.pickup) parts.push(`📍 *Pickup Location:* ${params.pickup}`);
  if (params.drop) parts.push(`🏁 *Drop Destination:* ${params.drop}`);
  if (params.date) parts.push(`📅 *Date:* ${params.date}`);
  if (params.time) parts.push(`⏰ *Time:* ${params.time}`);
  if (params.passengers) parts.push(`👥 *Passengers:* ${params.passengers}`);
  if (params.carType) parts.push(`🚗 *Vehicle Type:* ${params.carType}`);
  if (params.duration) parts.push(`⏱️ *Package Duration:* ${params.duration}`);
  if (params.estimatedFare) parts.push(`💰 *Estimated Fare Range:* ${params.estimatedFare}`);
  if (params.message) parts.push(`📝 *Note/Requirements:* ${params.message}`);

  parts.push("\nPlease confirm car availability and provide exact fare. Thank you!");

  const text = encodeURIComponent(parts.join("\n"));
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${text}`;
}
