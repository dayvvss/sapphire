import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "sp-it-laptop",
    slug: "sapphire-ultra-14-laptop",
    name: "Sapphire Ultra 14",
    brand: "Sapphire",
    category: "IT Hardware",
    price: 165000,
    inStock: true,
    warrantyMonths: 24,
    images: ["/products/it-hardware.svg"],
    highlights: [
      "14-inch liquid-bright display",
      "All-day battery with fast charge",
      "Lightweight aluminum build"
    ],
    specs: {
      Display: "14-inch 2.8K",
      Processor: "Intel Core Ultra 7",
      Memory: "16GB LPDDR5",
      Storage: "512GB SSD",
      Battery: "Up to 16 hours",
      Weight: "1.3kg"
    }
  },
  {
    id: "sp-audio-headphones",
    slug: "sapphire-aurora-anc",
    name: "Aurora ANC Headphones",
    brand: "Sapphire Audio",
    category: "Audio Products",
    price: 42000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/audio-products.svg"],
    highlights: [
      "Adaptive noise cancellation",
      "30-hour playback",
      "Soft-touch premium cushions"
    ],
    specs: {
      Battery: "30 hours",
      Audio: "Hi-Res + Spatial",
      Weight: "245g",
      Charging: "USB-C fast charge",
      Controls: "Touch + physical",
      Microphones: "6-mic array"
    }
  },
  {
    id: "sp-visual-printer",
    slug: "brother-inkbenefit-pro",
    name: "Brother InkBenefit Pro",
    brand: "Brother",
    category: "Visual Products",
    price: 58900,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/visual-products.svg"],
    highlights: [
      "High-yield ink tank system",
      "Wireless + duplex printing",
      "Compact all-in-one design"
    ],
    specs: {
      Print: "Up to 35 ppm",
      Functions: "Print, scan, copy",
      Connectivity: "Wi-Fi, USB",
      Paper: "A4, Legal",
      Display: "2.7-inch color",
      DutyCycle: "15,000 pages"
    }
  },
  {
    id: "sp-power-storage",
    slug: "ecoflow-delta-2-max",
    name: "EcoFlow Delta 2 Max",
    brand: "EcoFlow",
    category: "Power Storage Solutions",
    price: 142000,
    inStock: true,
    warrantyMonths: 24,
    images: ["/products/power-storage.svg"],
    highlights: [
      "2048Wh expandable capacity",
      "Fast AC + solar recharge",
      "Multiple output ports"
    ],
    specs: {
      Capacity: "2048Wh",
      Output: "2400W (surge 4800W)",
      Ports: "AC, USB-C, USB-A, DC",
      Recharge: "0-80% in 70 minutes",
      Weight: "23kg",
      UseCase: "Backup + outdoor"
    }
  },
  {
    id: "sp-smart-tv",
    slug: "sapphire-vision-65-oled",
    name: "Vision 65 OLED",
    brand: "Sapphire Home",
    category: "Smart Home Devices",
    price: 198000,
    inStock: true,
    warrantyMonths: 24,
    images: ["/products/smart-home-tv.svg"],
    highlights: [
      "65-inch OLED with HDR10+",
      "Cinematic 120Hz panel",
      "Voice-ready smart hub"
    ],
    specs: {
      Display: "65-inch OLED",
      Resolution: "4K UHD",
      Refresh: "120Hz",
      SmartOS: "Sapphire OS",
      Audio: "Dolby Atmos",
      Ports: "HDMI 2.1 x4"
    }
  },
  {
    id: "sp-security-cameras",
    slug: "hikvision-duo-guard-kit",
    name: "Hikvision Duo Guard Kit",
    brand: "Hikvision",
    category: "Security Solutions",
    price: 76000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/security-solutions.svg"],
    highlights: [
      "Dual 4MP smart cameras",
      "Color night vision",
      "Remote viewing app"
    ],
    specs: {
      Cameras: "2x 4MP",
      Vision: "Color night view",
      Storage: "NVR ready",
      Weather: "IP67",
      Power: "PoE",
      Alerts: "Smart motion"
    }
  },
  {
    id: "sp-kitchen-airfryer",
    slug: "sapphire-crisp-airfryer",
    name: "Crisp Air Fryer",
    brand: "Sapphire Home",
    category: "Kitchen Appliances",
    price: 18900,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/kitchen-airfryer.svg"],
    highlights: [
      "Rapid air circulation",
      "Touch presets for 8 meals",
      "Dishwasher-safe basket"
    ],
    specs: {
      Capacity: "5.5L",
      Power: "1700W",
      Controls: "Touch + dial",
      Temperature: "80°C - 200°C",
      Timer: "60 minutes",
      Finish: "Matte black"
    }
  },
  {
    id: "sp-smart-hub",
    slug: "sapphire-orbit-speaker",
    name: "Orbit Smart Speaker",
    brand: "Sapphire Home",
    category: "Smart Home Devices",
    price: 22900,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/smart-home-hub.svg"],
    highlights: [
      "Room-filling sound",
      "Voice control ready",
      "Multi-room pairing"
    ],
    specs: {
      Audio: "360° speaker",
      Connectivity: "Wi-Fi + Bluetooth",
      Assistants: "Voice-ready",
      Power: "USB-C",
      Size: "Compact tower",
      Finish: "Soft touch"
    }
  },
  {
    id: "sp-drone",
    slug: "sapphire-sky-mini-drone",
    name: "Sky Mini Drone",
    brand: "Sapphire Vision",
    category: "Drones",
    price: 98000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/drone.svg"],
    highlights: [
      "4K stabilized camera",
      "30-minute flight time",
      "Smart return-to-home"
    ],
    specs: {
      Camera: "4K HDR",
      FlightTime: "Up to 30 min",
      Range: "10 km",
      Weight: "< 249g",
      Modes: "Follow, orbit, cine",
      Charging: "USB-C"
    }
  }
];

export const categories = [
  "IT Hardware",
  "Audio Products",
  "Visual Products",
  "Power Storage Solutions",
  "Smart Home Devices",
  "Security Solutions",
  "Kitchen Appliances",
  "Drones"
];
export const brands = [
  "Sapphire",
  "Sapphire Audio",
  "Brother",
  "EcoFlow",
  "Sapphire Home",
  "Hikvision",
  "Sapphire Vision"
];
