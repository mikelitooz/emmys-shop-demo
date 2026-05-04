import {
  Layers,
  TreePine,
  Ruler,
  Scissors,
  Clock,
  MapPin,
  PackageCheck,
  Sparkles,
  Truck,
  UsersRound
} from "lucide-react";

export const business = {
  name: "Right Price Carpets",
  tagline: "Quality carpets & flooring at unbeatable prices.",
  address: "87 High St, Clay Cross, Chesterfield, S45 9DZ",
  phone: "07976 320250",
  email: "info@rightpricecarpets.co.uk",
  rating: "4.8",
  reviews: "Trusted local flooring specialist",
  hours: [
    ["Monday", "Closed"],
    ["Tuesday", "9:30 AM - 5:00 PM"],
    ["Wednesday", "9:30 AM - 5:00 PM"],
    ["Thursday", "9:30 AM - 5:00 PM"],
    ["Friday", "9:30 AM - 5:00 PM"],
    ["Saturday", "9:30 AM - 4:00 PM"],
    ["Sunday", "Closed"]
  ],
  sourceNote:
    "Family-run flooring specialists on High St, Clay Cross, Chesterfield."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  shower: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  vanity: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  tiles: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  tap: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  towelRail: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Flooring", href: "/collection" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Carpets",
    description: "Over 30 rolls in stock from leading UK manufacturers.",
    price: "From £6.99/sqm",
    image: media.carpet,
    icon: Layers
  },
  {
    title: "Laminate Flooring",
    description: "Supply and professionally fitted laminate flooring.",
    price: "From £12.99/sqm",
    image: media.showroom,
    icon: Ruler
  },
  {
    title: "LVT Flooring",
    description: "Luxury vinyl tiles — waterproof, durable, and stylish.",
    price: "From £18.99/sqm",
    image: media.tiles,
    icon: Sparkles
  },
  {
    title: "Artificial Grass",
    description: "Low-maintenance artificial grass for gardens and patios.",
    price: "From £9.99/sqm",
    image: media.dining,
    icon: TreePine
  }
];

export const services = [
  {
    title: "Supply & Fit",
    description: "Professional fitting service for all carpet and flooring types. Over 30 years trade experience.",
    icon: Ruler
  },
  {
    title: "Carpet Binding",
    description: "In-store binding machine to turn waste carpet into rugs, doormats, or caravan flooring.",
    icon: Scissors
  },
  {
    title: "Free Measuring",
    description: "We'll visit your home to measure up and advise on the best flooring for each room.",
    icon: UsersRound
  }
];

export const reasons = [
  { title: "30+ Years", description: "Over three decades of experience in the carpet and flooring trade." },
  { title: "Family Run", description: "A friendly, personal service you won't get from big chains." },
  { title: "Unbeatable Prices", description: "Right price, every time. Competitive pricing on all stock." },
  { title: "Leading Brands", description: "Stockists of Cormar, Associated Weavers, Regency and Abingdon." }
];

export const testimonials = [
  {
    quote: "Brilliant service from start to finish. The carpet looks fantastic and the price was unbeatable.",
    name: "Verified Customer",
    detail: "Carpet Supply & Fit"
  },
  {
    quote: "Had a rug made from leftover carpet using their binding machine. Such a great idea and really well done.",
    name: "Verified Customer",
    detail: "Carpet Binding"
  }
];

export const gallery = [
  { src: media.hero, title: "Luxury Carpet", span: "md:col-span-2 md:row-span-2" },
  { src: media.showroom, title: "Our Showroom", span: "" },
  { src: media.tiles, title: "LVT Flooring", span: "" },
  { src: media.dining, title: "Artificial Grass", span: "md:col-span-2" },
  { src: media.carpet, title: "Carpet Rolls", span: "" },
  { src: media.bedroom, title: "Fitted Flooring", span: "" }
];

export const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "Family", label: "Run Business" },
  { value: "Boro", label: "Proud Sponsors" },
  { value: "Snap", label: "Finance Available" }
];

export const contactCards = [
  { title: "Visit the showroom", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Free Measuring", value: "Book a home visit", icon: Ruler }
];
