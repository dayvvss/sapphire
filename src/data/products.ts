import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "sp-iphone-15",
    slug: "apple-iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Phones",
    price: 189000,
    oldPrice: 199000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/iphone.svg"],
    highlights: [
      "A17 Pro chip with console-class GPU",
      "Titanium design with ceramic shield",
      "Pro camera system with 5x zoom"
    ],
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chipset: "A17 Pro",
      Storage: "256GB",
      Camera: "48MP main + 12MP ultrawide",
      Battery: "Up to 23 hours video",
      Connectivity: "5G, Wi-Fi 6E"
    }
  },
  {
    id: "sp-macbook-air",
    slug: "apple-macbook-air-15",
    name: "MacBook Air 15",
    brand: "Apple",
    category: "Laptops",
    price: 210000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/macbook.svg"],
    highlights: [
      "M3 chip with 10-core GPU",
      "18-hour battery life",
      "Liquid Retina display"
    ],
    specs: {
      Display: "15.3-inch Liquid Retina",
      Chipset: "Apple M3",
      Memory: "16GB unified",
      Storage: "512GB SSD",
      Weight: "1.51kg",
      Ports: "MagSafe + 2x Thunderbolt"
    }
  },
  {
    id: "sp-samsung-s24",
    slug: "samsung-galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Phones",
    price: 175000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/galaxy.svg"],
    highlights: [
      "200MP pro-grade camera",
      "S Pen included",
      "Dynamic AMOLED 2X display"
    ],
    specs: {
      Display: "6.8-inch QHD+ AMOLED",
      Chipset: "Snapdragon 8 Gen 3",
      Storage: "512GB",
      Battery: "5000mAh",
      Camera: "200MP + 50MP + 12MP",
      Connectivity: "5G, Wi-Fi 7"
    }
  },
  {
    id: "sp-sony-wh1000",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Audio",
    price: 52000,
    inStock: true,
    warrantyMonths: 12,
    images: ["/products/headphones.svg"],
    highlights: [
      "Industry-leading noise canceling",
      "30-hour battery",
      "Ultra-soft fit"
    ],
    specs: {
      Battery: "30 hours",
      Audio: "LDAC + Hi-Res",
      Weight: "250g",
      Charging: "USB-C fast charge",
      Controls: "Touch controls",
      Microphones: "8-mic array"
    }
  },
  {
    id: "sp-ipad-pro",
    slug: "apple-ipad-pro-13",
    name: "iPad Pro 13",
    brand: "Apple",
    category: "Tablets",
    price: 168000,
    inStock: false,
    warrantyMonths: 12,
    images: ["/products/ipad.svg"],
    highlights: [
      "Ultra Retina XDR display",
      "M4 chip performance",
      "Pro cameras and LiDAR"
    ],
    specs: {
      Display: "13-inch Ultra Retina XDR",
      Chipset: "Apple M4",
      Storage: "256GB",
      Camera: "12MP wide",
      Battery: "Up to 10 hours",
      Connectivity: "Wi-Fi 6E"
    }
  },
  {
    id: "sp-samsung-oled",
    slug: "samsung-odyssey-oled-g8",
    name: "Odyssey OLED G8",
    brand: "Samsung",
    category: "Displays",
    price: 129000,
    inStock: true,
    warrantyMonths: 24,
    images: ["/products/monitor.svg"],
    highlights: [
      "34-inch OLED with 175Hz",
      "0.03ms response time",
      "Samsung Smart Hub"
    ],
    specs: {
      Display: "34-inch OLED",
      Resolution: "3440 x 1440",
      Refresh: "175Hz",
      Response: "0.03ms",
      HDR: "DisplayHDR True Black",
      Ports: "HDMI 2.1, USB-C"
    }
  }
];

export const categories = ["Phones", "Laptops", "Tablets", "Audio", "Displays"];
export const brands = ["Apple", "Samsung", "Sony"];
