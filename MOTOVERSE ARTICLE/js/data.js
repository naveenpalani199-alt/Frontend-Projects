/**
 * MotoVerse - Centralized Bike & Brand Dataset
 * Realistic technical specifications, images, features, colors, and user reviews.
 */

const MOTO_BRANDS = [
  {
    id: "yamaha",
    name: "Yamaha",
    origin: "Japan",
    founded: 1955,
    tagline: "Revs Your Heart",
    logoText: "YAMAHA",
    badgeColor: "#0284c7",
    description: "Renowned for racing pedigree, high-revving engines, and precision delta-box chassis handling.",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    origin: "Japan",
    founded: 1896,
    tagline: "Let the good times roll",
    logoText: "KAWASAKI",
    badgeColor: "#16a34a",
    description: "Famous for legendary supercharged Ninja series and uncompromising superbike engineering.",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ktm",
    name: "KTM",
    origin: "Austria",
    founded: 1934,
    tagline: "Ready to Race",
    logoText: "KTM",
    badgeColor: "#ea580c",
    description: "Unrivaled power-to-weight ratios, aggressive streetfighters, and rally raid champions.",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "royal-enfield",
    name: "Royal Enfield",
    origin: "India / UK",
    founded: 1901,
    tagline: "Pure Motorcycling",
    logoText: "ROYAL ENFIELD",
    badgeColor: "#ca8a04",
    description: "The oldest global motorcycle brand in continuous production, celebrating timeless retro soul.",
    heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bmw",
    name: "BMW Motorrad",
    origin: "Germany",
    founded: 1923,
    tagline: "Make Life a Ride",
    logoText: "BMW",
    badgeColor: "#2563eb",
    description: "Pinnacle of luxury adventure touring, boxer engines, and cutting-edge superbike electronics.",
    heroImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ducati",
    name: "Ducati",
    origin: "Italy",
    founded: 1926,
    tagline: "Style, Sophistication, Performance",
    logoText: "DUCATI",
    badgeColor: "#dc2626",
    description: "Italian passion, iconic Desmodromic V4 powerplants, and aerodynamic MotoGP styling.",
    heroImage: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "honda",
    name: "Honda",
    origin: "Japan",
    founded: 1948,
    tagline: "The Power of Dreams",
    logoText: "HONDA",
    badgeColor: "#e11d48",
    description: "World-class reliability, smooth inline engines, and intuitive ergonomic excellence.",
    heroImage: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "triumph",
    name: "Triumph",
    origin: "United Kingdom",
    founded: 1902,
    tagline: "For the Ride",
    logoText: "TRIUMPH",
    badgeColor: "#475569",
    description: "Legendary triple-cylinder performance, iconic modern classics, and refined British craftsmanship.",
    heroImage: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tvs",
    name: "TVS",
    origin: "India",
    founded: 1978,
    tagline: "Racing DNA Unleashed",
    logoText: "TVS",
    badgeColor: "#b91c1c",
    description: "Motorsport-bred race machines equipped with class-leading telemetry and smart connectivity.",
    heroImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "suzuki",
    name: "Suzuki",
    origin: "Japan",
    founded: 1909,
    tagline: "Way of Life!",
    logoText: "SUZUKI",
    badgeColor: "#0369a1",
    description: "Makers of the legendary Hayabusa and nimble GSX series built for pure speed and stamina.",
    heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bajaj",
    name: "Bajaj",
    origin: "India",
    founded: 1945,
    tagline: "The World's Favourite Indian",
    logoText: "BAJAJ",
    badgeColor: "#0284c7",
    description: "Pioneers of the Pulsar and Dominar series, delivering power cruising accessible to everyone.",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "harley-davidson",
    name: "Harley-Davidson",
    origin: "USA",
    founded: 1903,
    tagline: "All for Freedom, Freedom for All",
    logoText: "HARLEY",
    badgeColor: "#ea580c",
    description: "The quintessential American cruiser icon with guttural V-Twin rumble and custom heritage.",
    heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
  }
];

const MOTO_BIKES = [
  {
    id: "yamaha-r15-v4",
    name: "Yamaha YZF-R15 V4",
    brand: "Yamaha",
    brandId: "yamaha",
    category: "Sports",
    price: 182000,
    priceFormatted: "₹1,82,000",
    rating: 4.8,
    reviewsCount: 142,
    tagline: "Track-bred aerodynamic supremacy with Quickshifter and Traction Control.",
    description: "The 4th generation of the legendary YZF-R15 takes supersport thrill to another level with upside-down front forks, aggressive R1-inspired bi-functional LED face, Variable Valve Actuation (VVA), and class-first quickshifter.",
    launchYear: 2024,
    featured: true,
    isNew: true,
    badge: "Bestseller",
    primaryImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Racing Blue", hex: "#0284c7" },
      { name: "Metallic Red", hex: "#dc2626" },
      { name: "Dark Knight", hex: "#1e293b" }
    ],
    engine: {
      displacement: 155,
      displacementFormatted: "155 cc",
      maxPower: 18.4,
      maxPowerFormatted: "18.4 PS @ 10,000 rpm",
      maxTorque: 14.2,
      maxTorqueFormatted: "14.2 Nm @ 7,500 rpm",
      cylinders: 1,
      valves: 4,
      cooling: "Liquid Cooled",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-Speed with Assist & Slipper Clutch"
    },
    performance: {
      topSpeed: 145,
      topSpeedFormatted: "145 km/h",
      accel0to60: 4.3,
      accel0to60Formatted: "4.3 sec",
      accel0to100: 10.1,
      mileage: 48.0,
      mileageFormatted: "48 km/l",
      fuelCapacity: 11.0,
      fuelCapacityFormatted: "11 Litres",
      reserveCapacity: "1.8 Litres",
      kerbWeight: 142,
      kerbWeightFormatted: "142 kg",
      seatHeight: 815,
      seatHeightFormatted: "815 mm",
      groundClearance: 170,
      groundClearanceFormatted: "170 mm"
    },
    brakesSuspension: {
      frontBrake: "282 mm Hydraulic Disc",
      rearBrake: "220 mm Hydraulic Disc",
      absType: "Dual Channel ABS",
      frontSuspension: "37 mm Upside-Down (USD) Telescopic Fork",
      rearSuspension: "Linked-Type Monocross Suspension",
      frontTyre: "100/80-17M/C 52P (Tubeless)",
      rearTyre: "140/70R17M/C 66H (Radial Tubeless)"
    },
    electricals: {
      headlight: "Bi-functional Class D LED Projector",
      taillight: "LED Tail Lamp",
      display: "Advanced Digital LCD with Street & Track Modes",
      bluetooth: "Yes (Y-Connect App Integration)",
      ridingModes: "Track Mode / Street Mode",
      quickshifter: "Yes (Clutchless Upshifts)",
      tractionControl: "Yes"
    },
    features: [
      "Traction Control System (TCS)",
      "Quick Shifter for clutchless upshifts",
      "Assist and Slipper Clutch",
      "Variable Valve Actuation (VVA)",
      "Dual Channel ABS",
      "Yamaha Y-Connect Bluetooth Telemetry",
      "Side Stand Engine Cut-off Switch",
      "Aerodynamic M1 MotoGP Style Fairing"
    ],
    pros: [
      "Incredible cornering stability with USD forks & Deltabox frame",
      "Class-leading high-rpm pull thanks to VVA tech",
      "High fuel efficiency for a high-revving sports bike",
      "Segment-first traction control & quickshifter"
    ],
    cons: [
      "Aggressive committed riding posture can cause wrist strain in traffic",
      "Pillion seat comfort is minimal",
      "Plastic fairing maintenance requires extra care"
    ]
  },
  {
    id: "ktm-390-duke",
    name: "KTM 390 Duke",
    brand: "KTM",
    brandId: "ktm",
    category: "Naked",
    price: 310000,
    priceFormatted: "₹3,10,000",
    rating: 4.9,
    reviewsCount: 198,
    tagline: "The Corner Rocket. Pure adrenaline and raw lightweight power.",
    description: "The brand-new generation KTM 390 Duke packs a larger 399cc engine, all-new trellis chassis with offset monoshock, Launch Control, Cornering ABS, and 5-inch bonded TFT screen with turn-by-turn navigation.",
    launchYear: 2024,
    featured: true,
    isNew: true,
    badge: "Class Leader",
    primaryImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Electronic Orange", hex: "#ea580c" },
      { name: "Atlantic Blue", hex: "#0369a1" }
    ],
    engine: {
      displacement: 399,
      displacementFormatted: "399 cc",
      maxPower: 46.0,
      maxPowerFormatted: "46.0 PS @ 8,500 rpm",
      maxTorque: 39.0,
      maxTorqueFormatted: "39.0 Nm @ 6,500 rpm",
      cylinders: 1,
      valves: 4,
      cooling: "Liquid Cooled with Curved Radiator",
      fuelSystem: "Bosch EFI with Ride-by-Wire",
      transmission: "6-Speed with PASC Slipper Clutch"
    },
    performance: {
      topSpeed: 170,
      topSpeedFormatted: "170 km/h",
      accel0to60: 2.4,
      accel0to60Formatted: "2.4 sec",
      accel0to100: 5.4,
      mileage: 29.0,
      mileageFormatted: "29 km/l",
      fuelCapacity: 15.0,
      fuelCapacityFormatted: "15 Litres",
      reserveCapacity: "2.5 Litres",
      kerbWeight: 168,
      kerbWeightFormatted: "168 kg",
      seatHeight: 800,
      seatHeightFormatted: "800 mm (Adj to 820mm)",
      groundClearance: 183,
      groundClearanceFormatted: "183 mm"
    },
    brakesSuspension: {
      frontBrake: "320 mm Disc with Radially Mounted 4-Piston Caliper",
      rearBrake: "240 mm Disc with 2-Piston Caliper",
      absType: "Supermoto & Cornering ABS",
      frontSuspension: "WP APEX 43 mm USD Fork (Adjustable Compression & Rebound)",
      rearSuspension: "WP APEX Monoshock (Adjustable Preload & Rebound)",
      frontTyre: "110/70 R17 Metzeler Sportec",
      rearTyre: "150/60 R17 Metzeler Sportec"
    },
    electricals: {
      headlight: "Split Full LED Headlamp with DRL",
      taillight: "T-shaped LED Tail Lamp",
      display: "5-inch Full Colour Bonded Glass TFT Console",
      bluetooth: "Yes (KTMconnect Audio & Navigation)",
      ridingModes: "Street / Rain / Track",
      quickshifter: "Yes (Quickshifter+ Bi-directional)",
      tractionControl: "Cornering Traction Control (MTC) & Launch Control"
    },
    features: [
      "Segment-first Launch Control & Track Screen",
      "Cornering ABS and Supermoto ABS mode",
      "Adjustable WP Suspension (Rebound & Compression)",
      "Bi-directional Quickshifter+",
      "5-inch bonded glass TFT Display",
      "Motorcycle Traction Control (MTC)",
      "All-new lightweight aluminium swingarm",
      "Type-C charging port and full LED lighting"
    ],
    pros: [
      "Phenomenal power-to-weight ratio and punchy acceleration",
      "Fully adjustable WP suspension front and rear",
      "Comprehensive electronic rider aids (Cornering ABS & Launch Control)",
      "Larger 15L fuel tank compared to older generations"
    ],
    cons: [
      "Aggressive throttle snap in Street/Track mode demands skilled handling",
      "Slight engine heat felt in bumper-to-bumper city crawling",
      "Premium pricing in the single-cylinder segment"
    ]
  },
  {
    id: "royal-enfield-gt650",
    name: "Royal Enfield Continental GT 650",
    brand: "Royal Enfield",
    brandId: "royal-enfield",
    category: "Cruiser",
    price: 330000,
    priceFormatted: "₹3,30,000",
    rating: 4.7,
    reviewsCount: 165,
    tagline: "British cafe racer heritage with a soulful parallel-twin rumble.",
    description: "The Continental GT 650 recaptures the spirit of 1960s London cafe racers. Featuring clip-on handlebars, sculpted fuel tank, retro rear-set footpegs, and an ultra-smooth 648cc parallel-twin engine with 270-degree firing order.",
    launchYear: 2024,
    featured: true,
    isNew: false,
    badge: "Retro Icon",
    primaryImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Apex Grey", hex: "#64748b" },
      { name: "Slipstream Blue", hex: "#1e3a8a" },
      { name: "Mr Clean Chrome", hex: "#e2e8f0" }
    ],
    engine: {
      displacement: 648,
      displacementFormatted: "648 cc",
      maxPower: 47.0,
      maxPowerFormatted: "47.0 PS @ 7,250 rpm",
      maxTorque: 52.3,
      maxTorqueFormatted: "52.3 Nm @ 5,150 rpm",
      cylinders: 2,
      valves: 8,
      cooling: "Air/Oil Cooled",
      fuelSystem: "Bosch Fuel Injection",
      transmission: "6-Speed with Assist & Slipper Clutch"
    },
    performance: {
      topSpeed: 165,
      topSpeedFormatted: "165 km/h",
      accel0to60: 2.7,
      accel0to60Formatted: "2.7 sec",
      accel0to100: 6.2,
      mileage: 24.0,
      mileageFormatted: "24 km/l",
      fuelCapacity: 12.5,
      fuelCapacityFormatted: "12.5 Litres",
      reserveCapacity: "2.0 Litres",
      kerbWeight: 211,
      kerbWeightFormatted: "211 kg",
      seatHeight: 804,
      seatHeightFormatted: "804 mm",
      groundClearance: 174,
      groundClearanceFormatted: "174 mm"
    },
    brakesSuspension: {
      frontBrake: "320 mm ByBre Disc",
      rearBrake: "240 mm ByBre Disc",
      absType: "Dual Channel ABS",
      frontSuspension: "41 mm Telescopic Fork with 110mm Travel",
      rearSuspension: "Twin Gas-charged Shock Absorbers with 5-stage Preload",
      frontTyre: "100/90-18 Tubeless (Alloy Wheels)",
      rearTyre: "130/70-18 Tubeless (Alloy Wheels)"
    },
    electricals: {
      headlight: "New LED Reflector Headlamp",
      taillight: "Halogen Classic Round Lamp",
      display: "Twin-Pod Analogue Speedometer & Tachometer with LCD inset",
      bluetooth: "Optional Tripper Navigation Pod",
      ridingModes: "Single Standard Mode",
      quickshifter: "No",
      tractionControl: "No"
    },
    features: [
      "Authentic Cafe Racer Silhouette with Clip-ons",
      "Vibration-free 270-degree Parallel Twin Engine",
      "New Cast Alloy Wheels with Tubeless Tyres",
      "Slipper Clutch & Adjustable Lever controls",
      "Twin Exhaust system with deep bass resonance",
      "LED Headlamp upgrade with premium metal casing",
      "Brembo-developed ByBre braking hardware",
      "USB Charging Port integrated into handlebar switchgear"
    ],
    pros: [
      "Glorious, refined parallel-twin engine with effortless torque",
      "Head-turning cafe racer retro styling and impeccable paint quality",
      "Tubeless alloy wheel update solves puncture worries",
      "Outstanding value for a twin-cylinder motorcycle"
    ],
    cons: [
      "Heavier kerb weight of 211 kg noticeable in tight U-turns",
      "12.5L fuel tank limits touring range between fuel stops",
      "Firm rear suspension over sharp potholes"
    ]
  },
  {
    id: "kawasaki-zx10r",
    name: "Kawasaki Ninja ZX-10R",
    brand: "Kawasaki",
    brandId: "kawasaki",
    category: "Superbike",
    price: 1679000,
    priceFormatted: "₹16,79,000",
    rating: 4.95,
    reviewsCount: 88,
    tagline: "WorldSBK Champion. 200+ horsepower track dominating missile.",
    description: "Developed straight from Kawasaki's 6-time World Superbike championship pedigree. Boasting integrated aerodynamic winglets, Showa Balance Free suspension, Brembo Stylema calipers, and 203 PS screaming inline-4 engine.",
    launchYear: 2024,
    featured: true,
    isNew: false,
    badge: "Superbike King",
    primaryImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Lime Green / Ebony", hex: "#16a34a" },
      { name: "Metallic Graphite Gray", hex: "#334155" }
    ],
    engine: {
      displacement: 998,
      displacementFormatted: "998 cc",
      maxPower: 203.0,
      maxPowerFormatted: "203.0 PS @ 13,200 rpm (213 PS with RAM Air)",
      maxTorque: 114.9,
      maxTorqueFormatted: "114.9 Nm @ 11,400 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Liquid Cooled with Air-cooled Oil Cooler",
      fuelSystem: "DFI with 47 mm Mikuni Throttle Bodies",
      transmission: "6-Speed Close Ratio with KQS Quickshifter"
    },
    performance: {
      topSpeed: 299,
      topSpeedFormatted: "299 km/h (Electronically Limited)",
      accel0to60: 1.8,
      accel0to60Formatted: "1.8 sec",
      accel0to100: 3.1,
      mileage: 15.0,
      mileageFormatted: "15 km/l",
      fuelCapacity: 17.0,
      fuelCapacityFormatted: "17 Litres",
      reserveCapacity: "3.5 Litres",
      kerbWeight: 207,
      kerbWeightFormatted: "207 kg",
      seatHeight: 835,
      seatHeightFormatted: "835 mm",
      groundClearance: 135,
      groundClearanceFormatted: "135 mm"
    },
    brakesSuspension: {
      frontBrake: "Dual 330 mm Brembo Semi-floating Discs with Stylema Monobloc Calipers",
      rearBrake: "Single 220 mm Disc with Single-piston Caliper",
      absType: "KIBS (Kawasaki Intelligent Anti-lock Brake System)",
      frontSuspension: "43 mm Inverted Showa Balance Free Front Fork (BFF)",
      rearSuspension: "Horizontal Back-link with Showa BFRC lite Gas-charged Shock",
      frontTyre: "120/70ZR17M/C (58W) Bridgestone Battlax RS11",
      rearTyre: "190/55ZR17M/C (75W) Bridgestone Battlax RS11"
    },
    electricals: {
      headlight: "Compact LED Projector System with Cowl Winglets",
      taillight: "Full LED Aerodynamic Tail Lamp",
      display: "4.3-inch Full Digital TFT Colour Instrumentation",
      bluetooth: "Yes (Rideology The App Connectivity)",
      ridingModes: "Sport / Road / Rain / Rider (Custom)",
      quickshifter: "Yes (KQS Bi-directional Quickshifter)",
      tractionControl: "S-KTRC (Sport-Kawasaki Traction Control) & KLCM Launch Control"
    },
    features: [
      "Integrated Aerodynamic Winglets (17% more downforce)",
      "Bosch 6-axis IMU with Cornering Management Function (KCMF)",
      "Electronic Cruise Control for highway transits",
      "Brembo Stylema Brakes & Radial Master Cylinder",
      "Kawasaki Launch Control Mode (KLCM)",
      "Engine Brake Control (KEBC) & Ohlins Electronic Steering Damper",
      "Rideology Smartphone App with GPS telemetry logs",
      "Titanium Intake and Exhaust Valves"
    ],
    pros: [
      "Incredible 200+ hp power delivery and top-end rush",
      "Superb race-level Brembo Stylema and Showa BFF suspension",
      "Most competitively priced liter-class superbike in its category",
      "Cruise control adds unexpected touring practicality"
    ],
    cons: [
      "Extremely committed racing crouch unsuitable for daily city commuting",
      "Produces substantial engine heat in slow traffic",
      "Stiff track-focused suspension over rough surfaces"
    ]
  },
  {
    id: "bmw-s1000rr",
    name: "BMW S 1000 RR",
    brand: "BMW Motorrad",
    brandId: "bmw",
    category: "Superbike",
    price: 2075000,
    priceFormatted: "₹20,75,000",
    rating: 4.96,
    reviewsCount: 74,
    tagline: "The Superbike Masterpiece with BMW ShiftCam Variable Valve Timing.",
    description: "The benchmark of supersport engineering. Powered by the high-tech 999cc 4-cylinder engine with BMW ShiftCam technology producing 210 hp, M Winglets, Brake Slide Assist, and Hill Start Control.",
    launchYear: 2024,
    featured: true,
    isNew: true,
    badge: "Ultimate Superbike",
    primaryImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "M Motorsport Tri-Color", hex: "#2563eb" },
      { name: "Blackstorm Metallic", hex: "#0f172a" },
      { name: "Passion Racing Red", hex: "#dc2626" }
    ],
    engine: {
      displacement: 999,
      displacementFormatted: "999 cc",
      maxPower: 210.0,
      maxPowerFormatted: "210.0 PS @ 13,750 rpm",
      maxTorque: 113.0,
      maxTorqueFormatted: "113.0 Nm @ 11,000 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Water/Oil-cooled with ShiftCam Technology",
      fuelSystem: "Electronic Fuel Injection with Variable Intake Manifold",
      transmission: "6-Speed with Shift Assistant Pro (Bi-directional Quickshifter)"
    },
    performance: {
      topSpeed: 303,
      topSpeedFormatted: "303 km/h",
      accel0to60: 1.7,
      accel0to60Formatted: "1.7 sec",
      accel0to100: 2.9,
      mileage: 15.6,
      mileageFormatted: "15.6 km/l",
      fuelCapacity: 16.5,
      fuelCapacityFormatted: "16.5 Litres",
      reserveCapacity: "4.0 Litres",
      kerbWeight: 197,
      kerbWeightFormatted: "197 kg (193.5 kg with M Package)",
      seatHeight: 832,
      seatHeightFormatted: "832 mm",
      groundClearance: 140,
      groundClearanceFormatted: "140 mm"
    },
    brakesSuspension: {
      frontBrake: "Twin 320 mm M Brakes 4-piston Fixed Radial Calipers",
      rearBrake: "Single 220 mm Disc Single-piston Floating Caliper",
      absType: "BMW Motorrad Race ABS Pro (Cornering & Slide Assist)",
      frontSuspension: "45 mm Upside-down Fork with Dynamic Damping Control (DDC)",
      rearSuspension: "Aluminium Swingarm with Dynamic Damping Control",
      frontTyre: "120/70 ZR 17 M Carbon Wheels Option",
      rearTyre: "190/55 ZR 17 (200/55 ZR 17 with M Package)"
    },
    electricals: {
      headlight: "LED Twin Projectors with Integrated Turn Indicators",
      taillight: "Multi-functional LED Rear Turn Signals (3-in-1)",
      display: "6.5-inch High-Definition TFT Display with Multiple Race Layouts",
      bluetooth: "Yes (BMW Motorrad Connected Navigation)",
      ridingModes: "Rain / Road / Dynamic / Race (Pro Modes 1-3 Optional)",
      quickshifter: "Yes (Shift Assistant Pro)",
      tractionControl: "Dynamic Traction Control (DTC) with Wheelie & Slide Control"
    },
    features: [
      "BMW ShiftCam Variable Valve Timing for Explosive Midrange",
      "Factory M Winglets generating up to 17.1 kg downforce",
      "Brake Slide Assist and DTC Slide Control with Steering Angle Sensor",
      "Dynamic Damping Control (DDC) semi-active suspension",
      "Hill Start Control Pro (HSC Pro)",
      "Pit Lane Limiter & Launch Control",
      "Lightweight M Lithium-ion Battery",
      "6.5-inch TFT with lean angle, G-force, and lap telemetry"
    ],
    pros: [
      "Staggering 210 PS with silky-smooth ShiftCam power spread",
      "Sub-200 kg kerb weight makes it remarkably flickable",
      "Most advanced consumer rider electronic suite in the superbike world",
      "Crisp 6.5-inch TFT display with intuitive handlebar rotary controller"
    ],
    cons: [
      "High purchase price and expensive optional M-sport equipment",
      "Premium service and spare parts costs",
      "Aggressive ergonomics best suited for track and open highways"
    ]
  },
  {
    id: "royal-enfield-himalayan-450",
    name: "Royal Enfield Himalayan 450",
    brand: "Royal Enfield",
    brandId: "royal-enfield",
    category: "Adventure",
    price: 285000,
    priceFormatted: "₹2,85,000",
    rating: 4.85,
    reviewsCount: 173,
    tagline: "Built for all roads. Built for no roads. Pure adventure reborn.",
    description: "Powered by Royal Enfield's first liquid-cooled engine: the Sherpa 450. Featuring Showa USD forks, full-map Google Navigation on a round TFT console, switchable ABS, and 230mm ground clearance for cross-continental expeditions.",
    launchYear: 2024,
    featured: true,
    isNew: true,
    badge: "Adventure Pick",
    primaryImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Hanle Black", hex: "#0f172a" },
      { name: "Kamet White", hex: "#f1f5f9" },
      { name: "Kaza Brown", hex: "#78350f" }
    ],
    engine: {
      displacement: 452,
      displacementFormatted: "452 cc",
      maxPower: 40.0,
      maxPowerFormatted: "40.0 PS @ 8,000 rpm",
      maxTorque: 40.0,
      maxTorqueFormatted: "40.0 Nm @ 5,500 rpm",
      cylinders: 1,
      valves: 4,
      cooling: "Liquid Cooled (Sherpa 450)",
      fuelSystem: "Electronic Fuel Injection with Ride-by-Wire",
      transmission: "6-Speed with Assist and Slipper Clutch"
    },
    performance: {
      topSpeed: 155,
      topSpeedFormatted: "155 km/h",
      accel0to60: 3.1,
      accel0to60Formatted: "3.1 sec",
      accel0to100: 7.2,
      mileage: 30.0,
      mileageFormatted: "30 km/l",
      fuelCapacity: 17.0,
      fuelCapacityFormatted: "17 Litres",
      reserveCapacity: "3.0 Litres",
      kerbWeight: 196,
      kerbWeightFormatted: "196 kg",
      seatHeight: 825,
      seatHeightFormatted: "825 mm (Adj 805mm - 845mm)",
      groundClearance: 230,
      groundClearanceFormatted: "230 mm"
    },
    brakesSuspension: {
      frontBrake: "320 mm Ventilated Disc with ByBre 2-Piston Caliper",
      rearBrake: "270 mm Ventilated Disc with ByBre 1-Piston Caliper",
      absType: "Dual Channel ABS (Switchable Rear ABS for Offroad)",
      frontSuspension: "43 mm Showa USD Separate Function Fork (200mm Travel)",
      rearSuspension: "Linkage Type Monoshock with Preload Adjustment (200mm Travel)",
      frontTyre: "90/90-21 Spoke Wheel (Optional Cross-spoke Tubeless)",
      rearTyre: "140/80-17 Spoke Wheel (Optional Cross-spoke Tubeless)"
    },
    electricals: {
      headlight: "Full LED Projector Headlamp",
      taillight: "Integrated LED Turn Signal & Tail Lamp Unit",
      display: "4-inch Round Full Colour TFT Screen with Google Maps Full-Display",
      bluetooth: "Yes (Wi-Fi & Bluetooth Media / Phone / Nav Casting)",
      ridingModes: "Performance Mode / Eco Mode (with ABS On/Off)",
      quickshifter: "No",
      tractionControl: "Ride-by-wire Throttle Control"
    },
    features: [
      "World's first 4-inch Round TFT with native Google Maps navigation casting",
      "Showa 43mm USD front fork with 200mm suspension travel",
      "Massive 230mm ground clearance and 17L expedition fuel tank",
      "Switchable Rear ABS for aggressive off-road gravel sliding",
      "Adjustable seat height (805mm to 845mm) for riders of all heights",
      "Integrated luggage mounting racks and tank pannier rails",
      "Slip-and-assist clutch with 6-speed overdrive gearbox",
      "USB-C fast charging port for smartphones and GPS devices"
    ],
    pros: [
      "Outstanding rough-terrain suspension dampening and chassis balance",
      "Full-screen Google Maps casting right on the instrument dial",
      "Punchy liquid-cooled 40 PS Sherpa engine cruises comfortably at 120 km/h",
      "Massive 17-litre tank delivers 450+ km touring range"
    ],
    cons: [
      "196 kg kerb weight requires confidence during tight low-speed trail maneuvers",
      "Tubeless cross-spoke wheels available only as higher accessories",
      "TFT navigation requires active smartphone Wi-Fi hotspot"
    ]
  },
  {
    id: "tvs-apache-rr310",
    name: "TVS Apache RR 310",
    brand: "TVS",
    brandId: "tvs",
    category: "Sports",
    price: 272000,
    priceFormatted: "₹2,72,000",
    rating: 4.82,
    reviewsCount: 130,
    tagline: "The Ultimate Track Weapon co-developed with BMW Motorrad.",
    description: "A track-focused masterpiece featuring reverse-inclined DOHC motor, Bi-LED twin projector headlamps, 5-inch vertical TFT racing cluster with Bluetooth SmartXonnect, and 4 specialized riding modes (Track, Sport, Urban, Rain).",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "Track Ready",
    primaryImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Racing Red", hex: "#dc2626" },
      { name: "Titanium Black", hex: "#0f172a" }
    ],
    engine: {
      displacement: 312,
      displacementFormatted: "312.2 cc",
      maxPower: 34.0,
      maxPowerFormatted: "34.0 PS @ 9,700 rpm (Sport/Track Mode)",
      maxTorque: 27.3,
      maxTorqueFormatted: "27.3 Nm @ 7,700 rpm",
      cylinders: 1,
      valves: 4,
      cooling: "Liquid Cooled with Reverse Inclined Architecture",
      fuelSystem: "Bosch Closed Loop Electronic Fuel Injection",
      transmission: "6-Speed with Race Tuned Slipper Clutch"
    },
    performance: {
      topSpeed: 160,
      topSpeedFormatted: "160 km/h",
      accel0to60: 2.8,
      accel0to60Formatted: "2.8 sec",
      accel0to100: 7.1,
      mileage: 33.0,
      mileageFormatted: "33 km/l",
      fuelCapacity: 11.0,
      fuelCapacityFormatted: "11 Litres",
      reserveCapacity: "1.5 Litres",
      kerbWeight: 174,
      kerbWeightFormatted: "174 kg",
      seatHeight: 810,
      seatHeightFormatted: "810 mm",
      groundClearance: 180,
      groundClearanceFormatted: "180 mm"
    },
    brakesSuspension: {
      frontBrake: "300 mm Petal Disc with Radial ByBre Caliper",
      rearBrake: "240 mm Petal Disc",
      absType: "Dual Channel ABS with Rear Wheel Lift-off Protection",
      frontSuspension: "KYB 41 mm Inverted Cartridge USD Fork",
      rearSuspension: "KYB Monotube Floating Piston Gas-assisted Monoshock",
      frontTyre: "110/70 ZR17 Michelin Road 5",
      rearTyre: "150/60 ZR17 Michelin Road 5"
    },
    electricals: {
      headlight: "Bi-LED Twin Projector Headlamps with Daytime Running Lights",
      taillight: "LED Snake Fangs Styled Tail Lamp",
      display: "5-inch Vertical Full Color TFT Display with Racing Telemetry",
      bluetooth: "Yes (SmartXonnect App & GoPro Control Integration)",
      ridingModes: "Track / Sport / Urban / Rain",
      quickshifter: "Optional (BTO Kit)",
      tractionControl: "GTT (Glide Through Technology) & Throttle-by-Wire"
    },
    features: [
      "4 Distinct Riding Modes with varying ABS & Power calibrations",
      "5-inch Vertical TFT with Race Telemetry and Lap Timer",
      "Michelin Road 5 high-grip dual compound radial tyres",
      "Reverse Inclined DOHC Engine for optimized mass centralization",
      "Glide Through Technology (GTT+) for effortless clutchless city crawl",
      "Aerodynamic Gill Vents for radiator heat dissipation",
      "SmartXonnect smartphone telemetry with GoPro remote camera control",
      "Optional BTO (Built To Order) adjustable suspension & racing kit"
    ],
    pros: [
      "Exceptional Michelin Road 5 tyre grip in both wet and dry conditions",
      "Advanced 4-riding mode system truly changes power and ABS behavior",
      "Comfortable sports-touring ergonomics unlike cramped track bikes",
      "Great heat management with side gill vents routing hot air away"
    ],
    cons: [
      "11L fuel tank requires more frequent stops on long interstate tours",
      "Slight buzz at top-end revs above 8,500 rpm",
      "Higher turning radius in cramped parking spaces"
    ]
  },
  {
    id: "honda-cbr650r",
    name: "Honda CBR650R",
    brand: "Honda",
    brandId: "honda",
    category: "Sports",
    price: 935000,
    priceFormatted: "₹9,35,000",
    rating: 4.88,
    reviewsCount: 94,
    tagline: "Silky smooth 4-cylinder symphony meets everyday sport practicality.",
    description: "The CBR650R delivers the screaming thrill of a 649cc Inline-4 engine paired with everyday ergonomics. Upgraded with Showa SFF-BP forks, Honda Selectable Torque Control (HSTC), and new full-color TFT display.",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "Inline-4 Joy",
    primaryImage: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Grand Prix Red", hex: "#dc2626" },
      { name: "Matte Gunpowder Black", hex: "#1e293b" }
    ],
    engine: {
      displacement: 649,
      displacementFormatted: "649 cc",
      maxPower: 87.0,
      maxPowerFormatted: "87.0 PS @ 12,000 rpm",
      maxTorque: 57.5,
      maxTorqueFormatted: "57.5 Nm @ 8,500 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Liquid Cooled Inline-4",
      fuelSystem: "PGM-FI Electronic Fuel Injection",
      transmission: "6-Speed with Assist/Slipper Clutch & E-Clutch option"
    },
    performance: {
      topSpeed: 220,
      topSpeedFormatted: "220 km/h",
      accel0to60: 2.1,
      accel0to60Formatted: "2.1 sec",
      accel0to100: 3.8,
      mileage: 20.4,
      mileageFormatted: "20.4 km/l",
      fuelCapacity: 15.4,
      fuelCapacityFormatted: "15.4 Litres",
      reserveCapacity: "3.0 Litres",
      kerbWeight: 211,
      kerbWeightFormatted: "211 kg",
      seatHeight: 810,
      seatHeightFormatted: "810 mm",
      groundClearance: 130,
      groundClearanceFormatted: "130 mm"
    },
    brakesSuspension: {
      frontBrake: "Twin 310 mm Floating Discs with Radial-mount 4-piston Nissin Calipers",
      rearBrake: "Single 240 mm Disc with Single-piston Caliper",
      absType: "Dual Channel ABS",
      frontSuspension: "41 mm Showa Separate Function Big Piston (SFF-BP) USD Forks",
      rearSuspension: "Monoshock with 10-stage Preload Adjuster",
      frontTyre: "120/70ZR17 Dunlop Sportmax",
      rearTyre: "180/55ZR17 Dunlop Sportmax"
    },
    electricals: {
      headlight: "Dual Full LED Headlamp System",
      taillight: "Minimalist LED Tail Light",
      display: "5-inch Full Colour TFT Display with Honda RoadSync",
      bluetooth: "Yes (Honda RoadSync Smartphone App)",
      ridingModes: "Standard with HSTC Traction Control",
      quickshifter: "Optional or with revolutionary Honda E-Clutch",
      tractionControl: "Honda Selectable Torque Control (HSTC)"
    },
    features: [
      "Harmonious 16-valve DOHC Inline-4 Engine with 12,000 rpm Redline",
      "Showa 41mm Separate Function Big Piston (SFF-BP) USD Forks",
      "Honda Selectable Torque Control (HSTC) for rear wheel traction management",
      "Nissin Radial Mount 4-Piston Calipers with Twin 310mm Discs",
      "5-inch TFT Display with Honda RoadSync turn-by-turn navigation",
      "Assist and Slipper Clutch for effortless lever pull",
      "Aerodynamic Dual Ram-Air intake ducting",
      "Emergency Stop Signal (ESS) flashing rear hazards during hard braking"
    ],
    pros: [
      "Ultra-refined inline-4 exhaust note and smooth power progression",
      "Balanced ergonomics allowing daily commute and long-distance touring",
      "Bulletproof Honda build quality and reliability",
      "Showa SFF-BP front suspension provides supple handling"
    ],
    cons: [
      "Priced on the higher side due to CBU/CKD import taxes",
      "211 kg kerb weight is heavier than 2-cylinder middleweights",
      "Stock windscreen is short for tall touring riders"
    ]
  },
  {
    id: "suzuki-hayabusa",
    name: "Suzuki Hayabusa Gen 3",
    brand: "Suzuki",
    brandId: "suzuki",
    category: "Superbike",
    price: 1690000,
    priceFormatted: "₹16,90,000",
    rating: 4.97,
    reviewsCount: 112,
    tagline: "The Ultimate Hyperbike Legend. Unmatched aerodynamic dominance.",
    description: "The 3rd generation Suzuki Hayabusa reasserts its status as the world's most iconic hyper-sport tourer. Powered by an unstressed 1340cc inline-4 motor backed by Suzuki Intelligent Ride System (S.I.R.S.) with 6-axis IMU.",
    launchYear: 2024,
    featured: true,
    isNew: false,
    badge: "Hyperbike Legend",
    primaryImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Metallic Thunder Gray / Candy Daring Red", hex: "#475569" },
      { name: "Pearl Brilliant White / Metallic Stellar Blue", hex: "#f8fafc" },
      { name: "Glass Sparkle Black", hex: "#0f172a" }
    ],
    engine: {
      displacement: 1340,
      displacementFormatted: "1340 cc",
      maxPower: 190.0,
      maxPowerFormatted: "190.0 PS @ 9,700 rpm",
      maxTorque: 150.0,
      maxTorqueFormatted: "150.0 Nm @ 7,000 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Liquid Cooled with High-capacity Curved Radiator",
      fuelSystem: "Suzuki Side-Feed Electronic Fuel Injection with Dual Injectors",
      transmission: "6-Speed Constant Mesh with Bi-directional Quickshifter"
    },
    performance: {
      topSpeed: 299,
      topSpeedFormatted: "299 km/h (Restricted)",
      accel0to60: 1.6,
      accel0to60Formatted: "1.6 sec",
      accel0to100: 2.8,
      mileage: 14.5,
      mileageFormatted: "14.5 km/l",
      fuelCapacity: 20.0,
      fuelCapacityFormatted: "20 Litres",
      reserveCapacity: "4.0 Litres",
      kerbWeight: 266,
      kerbWeightFormatted: "266 kg",
      seatHeight: 800,
      seatHeightFormatted: "800 mm",
      groundClearance: 125,
      groundClearanceFormatted: "125 mm"
    },
    brakesSuspension: {
      frontBrake: "Dual 320 mm Discs with Brembo Stylema 4-piston Radial Calipers",
      rearBrake: "Single 260 mm Disc with Nissin Single-piston Caliper",
      absType: "Motion Track Combined Brake System & Cornering ABS",
      frontSuspension: "43 mm KYB Inverted Cartridge Fork (Fully Adjustable)",
      rearSuspension: "KYB Link-type Monoshock (Fully Adjustable)",
      frontTyre: "120/70ZR17M/C Bridgestone Battlax Hypersport S22",
      rearTyre: "190/50ZR17M/C Bridgestone Battlax Hypersport S22"
    },
    electricals: {
      headlight: "Vertical LED Projector Headlamp flanked by LED Position / Turn signals",
      taillight: "Wide LED Tail & Brake Lamp array",
      display: "Twin Analog Dials with Central Colour TFT Display for S.I.R.S telemetry",
      bluetooth: "No",
      ridingModes: "3 Factory Modes + 3 User Custom Configurable Modes",
      quickshifter: "Yes (Bi-directional with 2 selectable sensitivity modes)",
      tractionControl: "10-mode Motion Track Traction Control, Launch Control & Cruise Control"
    },
    features: [
      "Suzuki Intelligent Ride System (S.I.R.S.) with 6-Axis Bosch IMU",
      "Brembo Stylema Brakes with 320mm floating front discs",
      "Wind tunnel-sculpted aerodynamic fairing with lowest drag coefficient",
      "Motion Track Traction Control with 10 intervention settings",
      "Bi-directional Quickshifter & Launch Control System (3 modes)",
      "Cruise Control & Active Speed Limiter for long highway stretches",
      "Hill Hold Control & Slope Dependent Control Systems",
      "Sublime twin analog gauges with modern central TFT display"
    ],
    pros: [
      "Infinite wave of torque (150 Nm) pulls relentlessly in any gear",
      "Rock-solid straight-line stability even at speeds exceeding 250 km/h",
      "Surprisingly plush suspension and comfortable seating for a hyperbike",
      "Iconic design status recognized by motorcycle fans globally"
    ],
    cons: [
      "Heavy 266 kg weight demands careful low-speed maneuvering and parking",
      "Low 125 mm ground clearance requires caution on steep speed-breakers",
      "Fuel economy drops quickly when pushed hard"
    ]
  },
  {
    id: "bajaj-dominar-400",
    name: "Bajaj Dominar 400",
    brand: "Bajaj",
    brandId: "bajaj",
    category: "Cruiser",
    price: 232000,
    priceFormatted: "₹2,32,000",
    rating: 4.65,
    reviewsCount: 210,
    tagline: "Born to Sprint, Built to Tour. Power touring made accessible.",
    description: "The ultimate power cruiser built for long-distance highway munching. Packed with a factory-fitted tall touring visor, hand guards, engine bash plate, rear luggage carrier with backrest, and 40 PS DOHC triple spark motor.",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "Value Cruiser",
    primaryImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Aurora Green", hex: "#15803d" },
      { name: "Charcoal Black", hex: "#1e293b" }
    ],
    engine: {
      displacement: 373,
      displacementFormatted: "373.3 cc",
      maxPower: 40.0,
      maxPowerFormatted: "40.0 PS @ 8,800 rpm",
      maxTorque: 35.0,
      maxTorqueFormatted: "35.0 Nm @ 6,500 rpm",
      cylinders: 1,
      valves: 4,
      cooling: "Liquid Cooled DOHC Triple Spark",
      fuelSystem: "Closed Loop Electronic Fuel Injection",
      transmission: "6-Speed with Slipper Clutch"
    },
    performance: {
      topSpeed: 155,
      topSpeedFormatted: "155 km/h",
      accel0to60: 2.9,
      accel0to60Formatted: "2.9 sec",
      accel0to100: 7.4,
      mileage: 28.0,
      mileageFormatted: "28 km/l",
      fuelCapacity: 13.0,
      fuelCapacityFormatted: "13 Litres",
      reserveCapacity: "2.5 Litres",
      kerbWeight: 193,
      kerbWeightFormatted: "193 kg",
      seatHeight: 800,
      seatHeightFormatted: "800 mm",
      groundClearance: 157,
      groundClearanceFormatted: "157 mm"
    },
    brakesSuspension: {
      frontBrake: "320 mm Radial Disc with Twin-piston Caliper",
      rearBrake: "230 mm Disc with Single-piston Caliper",
      absType: "Dual Channel ABS",
      frontSuspension: "43 mm Upside Down (USD) Forks (135mm Travel)",
      rearSuspension: "Multi-step Adjustable Nitrox Mono Shock",
      frontTyre: "110/70-17 Radial Tubeless",
      rearTyre: "150/60-17 Radial Tubeless"
    },
    electricals: {
      headlight: "Full LED Headlamp with Automatic Headlamp On (AHO)",
      taillight: "Split LED Tail Lamps",
      display: "Dual LCD Displays (Main Handlebar Pod + Secondary Tank Pod)",
      bluetooth: "No",
      ridingModes: "Single Standard Mode",
      quickshifter: "No",
      tractionControl: "No"
    },
    features: [
      "Factory Fitted Touring Kit (Tall Windscreen, Handguards, Carrier & Backrest)",
      "43mm Beefy USD Front Forks for high-speed highway stability",
      "Full LED Mosaic Headlamp with broad illumination beam",
      "Assist and Slipper Clutch for light lever operation",
      "Twin-barrel sporty exhaust note",
      "Integrated smartphone navigation stay mounting bracket",
      "USB charging port located on the fuel tank console",
      "Engine metal belly pan and crash guards included standard"
    ],
    pros: [
      "Incredible value-for-money 40 PS power cruiser",
      "Standard touring accessories save thousands on aftermarket add-ons",
      "Plush ride quality and solid high-speed cruising at 110-120 km/h",
      "Dual-channel ABS and 43mm USD forks come standard"
    ],
    cons: [
      "193 kg kerb weight is heavy for city riding",
      "Secondary tank-mounted display is difficult to see without looking down",
      "13L fuel tank requires regular refueling on highway trips"
    ]
  },
  {
    id: "ducati-panigale-v4",
    name: "Ducati Panigale V4 S",
    brand: "Ducati",
    brandId: "ducati",
    category: "Superbike",
    price: 3348000,
    priceFormatted: "₹33,48,000",
    rating: 4.98,
    reviewsCount: 52,
    tagline: "Pure Italian Racing Passion. Desmosedici Stradale V4 masterpiece.",
    description: "Directly derived from Ducati's MotoGP champion machine. Featuring the roaring 1,103cc Desmosedici Stradale 90° V4 engine generating 215.5 PS, Öhlins Smart EC 2.0 electronic suspension, and carbon double aerofoils.",
    launchYear: 2024,
    featured: true,
    isNew: true,
    badge: "Exotic Superbike",
    primaryImage: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Ducati Red", hex: "#dc2626" },
      { name: "Winter Test Matte Black", hex: "#0f172a" }
    ],
    engine: {
      displacement: 1103,
      displacementFormatted: "1103 cc",
      maxPower: 215.5,
      maxPowerFormatted: "215.5 PS @ 13,000 rpm",
      maxTorque: 123.6,
      maxTorqueFormatted: "123.6 Nm @ 9,500 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Liquid Cooled Desmosedici Stradale 90° V4",
      fuelSystem: "Electronic Fuel Injection System with Twin Injectors per Cylinder",
      transmission: "6-Speed with Ducati Quick Shift (DQS) Up/Down EVO 2"
    },
    performance: {
      topSpeed: 315,
      topSpeedFormatted: "315 km/h",
      accel0to60: 1.6,
      accel0to60Formatted: "1.6 sec",
      accel0to100: 2.7,
      mileage: 13.0,
      mileageFormatted: "13 km/l",
      fuelCapacity: 17.0,
      fuelCapacityFormatted: "17 Litres",
      reserveCapacity: "3.5 Litres",
      kerbWeight: 195.5,
      kerbWeightFormatted: "195.5 kg (Dry 174 kg)",
      seatHeight: 850,
      seatHeightFormatted: "850 mm",
      groundClearance: 125,
      groundClearanceFormatted: "125 mm"
    },
    brakesSuspension: {
      frontBrake: "Twin 330 mm Semi-floating Discs with Brembo Monobloc Stylema Calipers",
      rearBrake: "Single 245 mm Disc with 2-piston Caliper",
      absType: "Bosch Cornering ABS EVO",
      frontSuspension: "Öhlins NPX 25/30 Pressurized USD 43mm Fork with Smart EC 2.0",
      rearSuspension: "Fully Adjustable Öhlins TTX36 Shock with Smart EC 2.0",
      frontTyre: "Pirelli Diablo Supercorsa SP 120/70 ZR17",
      rearTyre: "Pirelli Diablo Supercorsa SP 200/60 ZR17"
    },
    electricals: {
      headlight: "Full LED Headlight with Double DRL Eyebrows",
      taillight: "Full LED Aerodynamic Tail Lamp",
      display: "5-inch High-Resolution TFT Dashboard with MotoGP Track Evo Info Mode",
      bluetooth: "Yes (Ducati Multimedia System DMS)",
      ridingModes: "Race A / Race B / Sport / Street",
      quickshifter: "Yes (Ducati Quick Shift Up/Down EVO 2)",
      tractionControl: "DTC EVO 3, Ducati Slide Control (DSC), Wheelie Control (DWC EVO)"
    },
    features: [
      "Desmosedici Stradale Counter-rotating Crankshaft V4 Engine",
      "Öhlins Smart EC 2.0 Electronic Semi-Active Suspension",
      "Double Aerofoil Winglets producing 37 kg downforce at 300 km/h",
      "Marchesini Forged Aluminium 3-spoke lightweight wheels",
      "Bosch 6-axis IMU with Cornering ABS EVO & Ducati Slide Control",
      "Ducati Power Launch (DPL) 3-level launch control system",
      "Engine Brake Control (EBC EVO 2)",
      "MotoGP Track Evo Dashboard display mode with sector lap telemetry"
    ],
    pros: [
      "Breathtaking Desmodromic V4 sound and 215.5 PS savage acceleration",
      "Exquisite Italian design and carbon-fiber aerodynamics",
      "Ultra-responsive Öhlins Smart EC 2.0 active suspension",
      "Brembo Stylema calipers with unbelievable stopping power"
    ],
    cons: [
      "Extremely expensive purchase and ownership maintenance costs",
      "Generates immense exhaust heat in slow-moving conditions",
      "Demands high rider skill and physical stamina to exploit fully"
    ]
  },
  {
    id: "triumph-tiger-900",
    name: "Triumph Tiger 900 Rally Pro",
    brand: "Triumph",
    brandId: "triumph",
    category: "Adventure",
    price: 1595000,
    priceFormatted: "₹15,95,000",
    rating: 4.92,
    reviewsCount: 67,
    tagline: "The Benchmark Middleweight Adventure Motorcycle.",
    description: "Engineered for pure off-road dominance and continent-crossing comfort. Boasting the character-rich 888cc T-Plane triple engine producing 108 PS, long-travel Showa suspension, tubeless spoked wheels, and 7-inch TFT screen.",
    launchYear: 2024,
    featured: false,
    isNew: true,
    badge: "Adv Master",
    primaryImage: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matt Khaki Green", hex: "#3f4a3c" },
      { name: "Ash Grey / Intense Orange", hex: "#475569" },
      { name: "Snowdonia White", hex: "#f8fafc" }
    ],
    engine: {
      displacement: 888,
      displacementFormatted: "888 cc",
      maxPower: 108.0,
      maxPowerFormatted: "108.0 PS @ 9,500 rpm",
      maxTorque: 90.0,
      maxTorqueFormatted: "90.0 Nm @ 6,850 rpm",
      cylinders: 3,
      valves: 12,
      cooling: "Liquid Cooled with Dual Radiators",
      fuelSystem: "Multipoint Sequential Electronic Fuel Injection with Ride-by-Wire",
      transmission: "6-Speed with Triumph Shift Assist Quickshifter"
    },
    performance: {
      topSpeed: 210,
      topSpeedFormatted: "210 km/h",
      accel0to60: 2.2,
      accel0to60Formatted: "2.2 sec",
      accel0to100: 4.1,
      mileage: 21.0,
      mileageFormatted: "21 km/l",
      fuelCapacity: 20.0,
      fuelCapacityFormatted: "20 Litres",
      reserveCapacity: "4.0 Litres",
      kerbWeight: 228,
      kerbWeightFormatted: "228 kg",
      seatHeight: 860,
      seatHeightFormatted: "860 mm (Adj 860mm - 880mm)",
      groundClearance: 235,
      groundClearanceFormatted: "235 mm"
    },
    brakesSuspension: {
      frontBrake: "Twin 320 mm Floating Discs with Brembo Stylema 4-piston Monobloc Calipers",
      rearBrake: "Single 255 mm Disc with Single-piston Caliper",
      absType: "Optimised Cornering ABS (Switchable)",
      frontSuspension: "Showa 45 mm USD Forks with Manual Rebound & Compression (240mm Travel)",
      rearSuspension: "Showa Monoshock with Manual Preload & Rebound (230mm Travel)",
      frontTyre: "90/90-21 Tubeless Spoked Wheel",
      rearTyre: "150/70R17 Tubeless Spoked Wheel"
    },
    electricals: {
      headlight: "Full LED Headlight with Signature DRL & Auxiliary LED Fog Lights",
      taillight: "LED Tail Lamp",
      display: "7-inch Full Colour TFT Display with My Triumph Connectivity",
      bluetooth: "Yes (GoPro, Phone, Music, Turn-by-Turn Nav)",
      ridingModes: "Road / Rain / Sport / Off-Road / Off-Road Pro / Rider (Custom)",
      quickshifter: "Yes (Triumph Shift Assist Up & Down)",
      tractionControl: "Optimised Cornering Traction Control with 6-Axis IMU"
    },
    features: [
      "Unique T-Plane Triple Engine with 1-3-2 Firing Order",
      "Showa Long-Travel Suspension (240mm Front / 230mm Rear)",
      "Factory-Fitted Heated Grips and Heated Rider & Pillion Seats",
      "Triumph Shift Assist Bi-directional Quickshifter",
      "Tyre Pressure Monitoring System (TPMS) as standard",
      "Illuminated Handlebar Switches with 5-way Joystick controller",
      "Centerstand, Engine Protection Bars and Aluminium Sump Guard",
      "Tubeless Cross-Spoked 21-inch Front Wheel"
    ],
    pros: [
      "Incredible T-Plane triple soundtrack and linear tractor-like torque",
      "Plush Showa off-road suspension soaks up boulder fields with ease",
      "Top-spec Brembo Stylema brakes offer phenomenal stopping power",
      "Standard heated seats, grips, fog lights, and cruise control"
    ],
    cons: [
      "Tall 860mm seat height can be intimidating for shorter riders",
      "7-inch TFT screen interface has slightly complex menu navigation",
      "Front-end dive under abrupt hard pavement braking due to soft setup"
    ]
  },
  {
    id: "honda-sp125",
    name: "Honda SP 125",
    brand: "Honda",
    brandId: "honda",
    category: "Commuter",
    price: 86000,
    priceFormatted: "₹86,000",
    rating: 4.6,
    reviewsCount: 240,
    tagline: "Advanced Mileage, Premium Commuter Styling and eSP Technology.",
    description: "The gold standard of daily urban commuting. Equipped with Honda's silent ACG starter, enhanced Smart Power (eSP) engine, fully digital instrument meter, and outstanding 65 km/l fuel economy.",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "Mileage Champ",
    primaryImage: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Imperial Red Metallic", hex: "#dc2626" },
      { name: "Matte Axis Grey Metallic", hex: "#475569" },
      { name: "Pearl Siren Blue", hex: "#0284c7" }
    ],
    engine: {
      displacement: 124,
      displacementFormatted: "123.94 cc",
      maxPower: 10.8,
      maxPowerFormatted: "10.8 PS @ 7,500 rpm",
      maxTorque: 10.9,
      maxTorqueFormatted: "10.9 Nm @ 6,000 rpm",
      cylinders: 1,
      valves: 2,
      cooling: "Air Cooled 4-Stroke SI Engine",
      fuelSystem: "PGM-FI Fuel Injection with eSP",
      transmission: "5-Speed Manual Gearbox"
    },
    performance: {
      topSpeed: 100,
      topSpeedFormatted: "100 km/h",
      accel0to60: 6.8,
      accel0to60Formatted: "6.8 sec",
      accel0to100: 18.5,
      mileage: 65.0,
      mileageFormatted: "65 km/l",
      fuelCapacity: 11.2,
      fuelCapacityFormatted: "11.2 Litres",
      reserveCapacity: "1.5 Litres",
      kerbWeight: 116,
      kerbWeightFormatted: "116 kg",
      seatHeight: 790,
      seatHeightFormatted: "790 mm",
      groundClearance: 160,
      groundClearanceFormatted: "160 mm"
    },
    brakesSuspension: {
      frontBrake: "240 mm Disc / 130 mm Drum Option",
      rearBrake: "130 mm Drum Brake",
      absType: "Combi-Brake System (CBS) with Equalizer",
      frontSuspension: "Telescopic Front Suspension",
      rearSuspension: "Hydraulic 5-step Adjustable Shock Absorbers",
      frontTyre: "80/100-18 Tubeless",
      rearTyre: "100/80-18 Tubeless (Wider Rear Tyre)"
    },
    electricals: {
      headlight: "Full LED DC Headlamp",
      taillight: "Halogen Integrated Tail Lamp",
      display: "Full Digital Instrument Console (Real-time & Distance-to-Empty)",
      bluetooth: "No",
      ridingModes: "Eco Indicator",
      quickshifter: "No",
      tractionControl: "No"
    },
    features: [
      "Silent ACG Starter Generator for jolt-free push-button starts",
      "eSP (enhanced Smart Power) Friction Reduction Architecture",
      "Full Digital Meter with Real-Time Mileage & Distance-to-Empty",
      "Integrated Engine Start/Stop Switch with Hazard Light Switch",
      "Combi-Brake System (CBS) with Equalizer for balanced braking",
      "Aggressive Fuel Tank Extensions with Sporty Graphics",
      "Wider 100mm rear tyre for improved cornering stability",
      "Ultra-low maintenance cost and class-leading resale value"
    ],
    pros: [
      "Outstanding fuel economy (60-65 km/l real world)",
      "Whisper-quiet engine operation with frictionless ACG starter",
      "Light 116 kg weight makes navigating dense city traffic effortless",
      "Informative full digital meter with service reminder"
    ],
    cons: [
      "Skinny tyres prioritize mileage over high-speed aggressive cornering",
      "Halogen tail lamp and indicators look traditional",
      "Braking bite is adequate but lacks ABS option"
    ]
  },
  {
    id: "harley-iron-883",
    name: "Harley-Davidson Iron 883",
    brand: "Harley-Davidson",
    brandId: "harley-davidson",
    category: "Cruiser",
    price: 1199000,
    priceFormatted: "₹11,99,000",
    rating: 4.78,
    reviewsCount: 81,
    tagline: "Raw, Blacked-out, Stripped-down Custom Bobber Attitude.",
    description: "The pioneer of dark custom bobber styling. Powered by the legendary 883cc Evolution V-Twin air-cooled engine with peanut fuel tank, tuck-and-roll solo seat, and low-rise drag style handlebars.",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "American Legend",
    primaryImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black Denim", hex: "#1e293b" },
      { name: "River Rock Gray", hex: "#64748b" },
      { name: "Deadwood Green", hex: "#365314" }
    ],
    engine: {
      displacement: 883,
      displacementFormatted: "883 cc",
      maxPower: 51.0,
      maxPowerFormatted: "51.0 PS @ 6,000 rpm",
      maxTorque: 68.0,
      maxTorqueFormatted: "68.0 Nm @ 4,750 rpm",
      cylinders: 2,
      valves: 4,
      cooling: "Air Cooled Evolution 45° V-Twin",
      fuelSystem: "Electronic Sequential Port Fuel Injection (ESPFI)",
      transmission: "5-Speed Belt Drive"
    },
    performance: {
      topSpeed: 165,
      topSpeedFormatted: "165 km/h",
      accel0to60: 2.5,
      accel0to100: 5.7,
      accel0to60Formatted: "2.5 sec",
      mileage: 20.0,
      mileageFormatted: "20 km/l",
      fuelCapacity: 12.5,
      fuelCapacityFormatted: "12.5 Litres",
      reserveCapacity: "2.5 Litres",
      kerbWeight: 256,
      kerbWeightFormatted: "256 kg",
      seatHeight: 760,
      seatHeightFormatted: "760 mm",
      groundClearance: 140,
      groundClearanceFormatted: "140 mm"
    },
    brakesSuspension: {
      frontBrake: "300 mm Dual-piston Disc Brake",
      rearBrake: "260 mm Dual-piston Disc Brake",
      absType: "Dual Channel ABS",
      frontSuspension: "39 mm Cartridge Fork with Gaiters",
      rearSuspension: "Emulsion Shocks with Screw-style Preload Adjuster",
      frontTyre: "100/90-19 57H Michelin Scorcher",
      rearTyre: "150/80B16 77H Michelin Scorcher"
    },
    electricals: {
      headlight: "Classic Round Halogen / LED option",
      taillight: "Integrated Bullet Stop/Turn/Tail LED Lights",
      display: "Handlebar-mounted Electronic Speedometer with Odometer & Gear Indicator",
      bluetooth: "No",
      ridingModes: "Standard Cruising Mode",
      quickshifter: "No",
      tractionControl: "No"
    },
    features: [
      "Authentic Air-Cooled 883cc Evolution V-Twin Engine",
      "Blacked-out Engine Finishes, Exhaust Heat Shields and Air Cleaner Cover",
      "Classic 12.5L Peanut Fuel Tank with Retro Harley Graphics",
      "Low 760mm Slammed Solo Seat Height for Maximum Ground Accessibility",
      "9-Spoke Machined Black Cast Aluminium Wheels",
      "Belt Final Drive for Smooth, Maintenance-Free Power Delivery",
      "Dual Shorty Exhaust with Deep Guttural American V-Twin Rumble",
      "Self-Cancelling Turn Signals with Smart Security System Key Fob"
    ],
    pros: [
      "Inimitable Harley-Davidson V-Twin character, rumble, and soul",
      "Ultra-low 760mm seat height inspires confidence for riders of any height",
      "Endless customization potential and premium metal build",
      "Clean belt drive requires zero chain lubrication"
    ],
    cons: [
      "Heavy 256 kg weight with limited rear suspension travel (firm over bumps)",
      "Lean angle is limited around aggressive mountain twisties",
      "Lacks modern electronic rider aids like traction control"
    ]
  },
  {
    id: "kawasaki-z900",
    name: "Kawasaki Z900",
    brand: "Kawasaki",
    brandId: "kawasaki",
    category: "Naked",
    price: 929000,
    priceFormatted: "₹9,29,000",
    rating: 4.89,
    reviewsCount: 145,
    tagline: "Sugomi Styling with Raw 948cc Inline-4 Explosive Power.",
    description: "The embodiment of raw Japanese streetfighter attitude. Boasting an ultra-responsive 948cc Inline-4 engine pushing 125 PS, lightweight trellis frame, 4.3-inch TFT display, and Kawasaki Traction Control (KTRC).",
    launchYear: 2024,
    featured: false,
    isNew: false,
    badge: "Street Fighter",
    primaryImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Metallic Matte Graphenesteel Gray", hex: "#334155" },
      { name: "Candy Persimmon Red", hex: "#dc2626" },
      { name: "Metallic Spark Black", hex: "#0f172a" }
    ],
    engine: {
      displacement: 948,
      displacementFormatted: "948 cc",
      maxPower: 125.0,
      maxPowerFormatted: "125.0 PS @ 9,500 rpm",
      maxTorque: 98.6,
      maxTorqueFormatted: "98.6 Nm @ 7,700 rpm",
      cylinders: 4,
      valves: 16,
      cooling: "Liquid Cooled DOHC Inline-4",
      fuelSystem: "DFI with 36 mm Keihin Throttle Bodies",
      transmission: "6-Speed with Assist & Slipper Clutch"
    },
    performance: {
      topSpeed: 240,
      topSpeedFormatted: "240 km/h",
      accel0to60: 1.9,
      accel0to60Formatted: "1.9 sec",
      accel0to100: 3.4,
      mileage: 18.0,
      mileageFormatted: "18 km/l",
      fuelCapacity: 17.0,
      fuelCapacityFormatted: "17 Litres",
      reserveCapacity: "3.5 Litres",
      kerbWeight: 212,
      kerbWeightFormatted: "212 kg",
      seatHeight: 820,
      seatHeightFormatted: "820 mm",
      groundClearance: 145,
      groundClearanceFormatted: "145 mm"
    },
    brakesSuspension: {
      frontBrake: "Dual 300 mm Petal Discs with 4-piston Calipers",
      rearBrake: "Single 250 mm Petal Disc with Single-piston Caliper",
      absType: "Dual Channel ABS",
      frontSuspension: "41 mm Inverted Fork with Rebound Damping and Spring Preload Adjustability",
      rearSuspension: "Horizontal Back-link with Rebound Damping and Spring Preload Adjustability",
      frontTyre: "120/70ZR17M/C (58W) Dunlop Sportmax Roadsport 2",
      rearTyre: "180/55ZR17M/C (73W) Dunlop Sportmax Roadsport 2"
    },
    electricals: {
      headlight: "Aggressive Full LED Sugomi Headlamp",
      taillight: "Distinctive Z-shaped LED Tail Lamp",
      display: "4.3-inch Full Color TFT Digital Instrumentation",
      bluetooth: "Yes (Rideology The App Connectivity)",
      ridingModes: "Sport / Road / Rain / Rider (Manual Config)",
      quickshifter: "No (Optional Accessory)",
      tractionControl: "3-Mode Kawasaki Traction Control (KTRC) + Power Modes"
    },
    features: [
      "948cc Inline-4 Engine with Inhaling Airbox Acoustic Sound Tuning",
      "Sugomi-Inspired Aggressive Predatory Streetfighter Stance",
      "3-Mode Kawasaki Traction Control (KTRC) with Full & Low Power Modes",
      "4.3-inch All-Digital TFT Color Instrument Cluster",
      "Lightweight High-Tensile Steel Trellis Frame (only 13.5 kg)",
      "Rideology Smartphone App with Riding Logs & Call/Mail Alerts",
      "Assist and Slipper Clutch for lighter clutch lever pull",
      "Iconic 'Z' pattern LED rear brake illumination"
    ],
    pros: [
      "Incredible 125 PS inline-4 power at a very competitive price point",
      "Acoustically tuned airbox creates intoxicating intake roar",
      "Smooth, predictable low-end torque allows easy urban pottering",
      "Crisp and readable 4.3-inch TFT display"
    ],
    cons: [
      "Quickshifter does not come equipped as standard factory fitment",
      "Front brake calipers are axial rather than radial monoblocs",
      "Lack of wind protection during sustained high-speed expressway riding"
    ]
  }
];

// Seed reviews for community interaction
const MOTO_REVIEWS = [
  {
    id: "rev-1",
    bikeId: "yamaha-r15-v4",
    bikeName: "Yamaha YZF-R15 V4",
    userName: "Aditya Sharma",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "12 August 2024",
    verified: true,
    title: "Best 150cc track machine ever built!",
    review: "I've owned the R15 V4 Racing Blue for 6 months now. The traction control and quickshifter make a huge difference during hard acceleration out of corners. The VVA gives a punchy surge right around 7,400 rpm. Easily clocks 48+ kmpl when cruising calmly on highways.",
    pros: "Cornering grip, Quickshifter, Fuel economy",
    cons: "Aggressive wrist angle in traffic",
    helpfulCount: 34
  },
  {
    id: "rev-2",
    bikeId: "ktm-390-duke",
    bikeName: "KTM 390 Duke",
    userName: "Vikram Malhotra",
    userAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "05 August 2024",
    verified: true,
    title: "Raw acceleration beast! The new 399cc engine is golden.",
    review: "The new chassis with adjustable WP suspension is night and day compared to the older generation. Track mode with Launch Control is an absolute riot. Cornering ABS gives so much confidence when leaning deep on twisty mountain passes.",
    pros: "Adjustable suspension, 46 PS punch, Cornering electronics",
    cons: "Single cylinder buzz over 8,000 rpm",
    helpfulCount: 29
  },
  {
    id: "rev-3",
    bikeId: "royal-enfield-himalayan-450",
    bikeName: "Royal Enfield Himalayan 450",
    userName: "Rohan Sen",
    userAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "28 July 2024",
    verified: true,
    title: "Completed Ladakh expedition without a single hiccup!",
    review: "Took the Himalayan 450 through Khardung La, Pangong, and Zanskar. The Showa USD forks swallowed every pothole, rock bed, and water crossing. The 40 PS Sherpa engine sustained 120 km/h effortlessly on the plains.",
    pros: "Superb suspension, Google maps on dial, 450km tank range",
    cons: "Bit heavy at 196 kg when picking up in loose sand",
    helpfulCount: 41
  },
  {
    id: "rev-4",
    bikeId: "royal-enfield-gt650",
    bikeName: "Royal Enfield Continental GT 650",
    userName: "Karan Johar",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 4,
    date: "19 July 2024",
    verified: true,
    title: "Pure retro soul with butter-smooth parallel-twin.",
    review: "The 270-degree crankshaft sound is pure music to the ears. Tubeless alloy wheels have taken away all puncture anxiety. The clip-ons look gorgeous, although rear suspension is a tad firm over broken roads.",
    pros: "Twin-cylinder refinement, Cafe racer stance, Paint finish",
    cons: "Firm rear shocks, 12.5L fuel tank",
    helpfulCount: 22
  },
  {
    id: "rev-5",
    bikeId: "bmw-s1000rr",
    bikeName: "BMW S 1000 RR",
    userName: "Marcus Sterling",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "10 July 2024",
    verified: true,
    title: "210 horses of pure precision engineering.",
    review: "The ShiftCam technology means there is no dead spot in the powerband. Dynamic Damping Control adjusts the suspension hundreds of times per second. The M Winglets keep the front wheel planted under hard throttle out of apexes.",
    pros: "ShiftCam power spread, 6.5 TFT display, Track electronics",
    cons: "High maintenance cost",
    helpfulCount: 38
  },
  {
    id: "rev-6",
    bikeId: "honda-sp125",
    bikeName: "Honda SP 125",
    userName: "Pooja Deshmukh",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "01 July 2024",
    verified: true,
    title: "Gives 65+ kmpl daily in Mumbai traffic!",
    review: "Silent start ACG generator is so cool. I fill up the tank once in almost two weeks for my daily office commute. Digital meter shows exact mileage and distance-to-empty.",
    pros: "Incredible mileage, Silent starter, Light weight",
    cons: "Narrow rear tyre",
    helpfulCount: 17
  }
];

// Helper lookup functions
function getBikeById(id) {
  return MOTO_BIKES.find(b => b.id === id) || MOTO_BIKES[0];
}

function getBrandById(brandId) {
  return MOTO_BRANDS.find(b => b.id === brandId) || MOTO_BRANDS[0];
}

function getBikesByBrand(brandNameOrId) {
  return MOTO_BIKES.filter(b => 
    b.brand.toLowerCase() === brandNameOrId.toLowerCase() || 
    b.brandId === brandNameOrId.toLowerCase()
  );
}

function getBikesByCategory(cat) {
  if (!cat || cat.toLowerCase() === 'all') return MOTO_BIKES;
  return MOTO_BIKES.filter(b => b.category.toLowerCase() === cat.toLowerCase());
}
