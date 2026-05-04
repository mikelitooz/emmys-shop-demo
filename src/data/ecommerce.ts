export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  materials: string;
  delivery: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  offer?: boolean;
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office" | "Bathroom";
};

const media = {
  carpetA: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1500&q=85",
  carpetB: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1500&q=85",
  laminateA: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
  laminateB: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
  lvtA: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
  vinylA: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1500&q=85",
  grassA: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1500&q=85",
  showroomA: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85"
};

export const categories: Category[] = [
  { slug: "carpets", name: "Carpets", description: "Over 30 rolls in stock from leading UK brands", heroImage: media.carpetA },
  { slug: "laminate", name: "Laminate Flooring", description: "Supply and professional fitting available", heroImage: media.laminateA },
  { slug: "lvt", name: "LVT Flooring", description: "Luxury vinyl tiles — waterproof and durable", heroImage: media.lvtA },
  { slug: "artificial-grass", name: "Artificial Grass", description: "Low-maintenance grass for gardens and patios", heroImage: media.grassA },
];

export const products: Product[] = [
  {
    slug: "cormar-sensation-twist-carpet",
    name: "Cormar Sensation Twist Carpet",
    category: "carpets",
    price: 18,
    compareAtPrice: 24,
    badge: "Best Seller",
    shortDescription: "Hardwearing twist pile carpet in 12 colours.",
    description: "A premium quality twist pile carpet from Cormar Carpets. Stain-resistant, bleach-cleanable, and ideal for high-traffic areas. Available in 4m and 5m widths.",
    dimensions: "Price per sqm · 4m & 5m widths",
    materials: "100% Polypropylene, Twist Pile",
    delivery: "Supply & Fit Available",
    images: [media.carpetA, media.showroomA],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "regency-saxony-deep-pile",
    name: "Regency Saxony Deep Pile Carpet",
    category: "carpets",
    price: 22,
    shortDescription: "Luxurious deep saxony pile for bedrooms.",
    description: "Incredibly soft underfoot. This Regency Carpets saxony pile creates a warm, cosy atmosphere in any bedroom or living room.",
    dimensions: "Price per sqm · 4m width",
    materials: "100% Polypropylene, Saxony Pile",
    delivery: "Supply & Fit Available",
    images: [media.carpetB, media.carpetA],
    featured: true,
    room: "Bedroom"
  },
  {
    slug: "premium-oak-effect-laminate",
    name: "Premium Oak Effect Laminate",
    category: "laminate",
    price: 16,
    compareAtPrice: 21,
    shortDescription: "Natural oak effect with click-lock fitting.",
    description: "Realistic wood grain texture in a warm oak finish. AC4 rated for commercial and residential use. Quick and clean click-lock installation.",
    dimensions: "Price per sqm · 1380mm x 193mm planks",
    materials: "HDF Core, Melamine Wear Layer, AC4 Rated",
    delivery: "Supply & Fit Available",
    images: [media.laminateA, media.showroomA],
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "grey-slate-effect-laminate",
    name: "Grey Slate Effect Laminate",
    category: "laminate",
    price: 19,
    shortDescription: "Modern grey stone-look laminate flooring.",
    description: "Achieve a contemporary stone floor look without the cold. Water-resistant top layer makes it suitable for kitchens and hallways.",
    dimensions: "Price per sqm · 1380mm x 327mm tiles",
    materials: "HDF Core, Water-Resistant Surface, AC4 Rated",
    delivery: "Supply & Fit Available",
    images: [media.laminateB, media.laminateA],
    newArrival: true,
    room: "Dining Room"
  },
  {
    slug: "herringbone-lvt-flooring",
    name: "Herringbone LVT Flooring",
    category: "lvt",
    price: 28,
    shortDescription: "Classic herringbone pattern luxury vinyl tile.",
    description: "Achieve the stunning herringbone look at a fraction of the cost of real wood. 100% waterproof, pet-friendly, and incredibly easy to maintain.",
    dimensions: "Price per sqm · 600mm x 100mm planks",
    materials: "Rigid Core LVT, 0.5mm Wear Layer",
    delivery: "Supply & Fit Available",
    images: [media.lvtA, media.laminateA],
    featured: true,
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "natural-stone-effect-lvt",
    name: "Natural Stone Effect LVT",
    category: "lvt",
    price: 25,
    shortDescription: "Warm stone-look luxury vinyl tile flooring.",
    description: "Authentic stone visuals with the warmth and comfort of LVT. Perfect for open-plan living areas, kitchens, and conservatories.",
    dimensions: "Price per sqm · 610mm x 305mm tiles",
    materials: "Rigid Core LVT, 0.3mm Wear Layer",
    delivery: "Supply & Fit Available",
    images: [media.lvtA, media.showroomA],
    room: "Dining Room"
  },
  {
    slug: "premium-artificial-grass-30mm",
    name: "Premium Artificial Grass 30mm",
    category: "artificial-grass",
    price: 15,
    compareAtPrice: 19,
    shortDescription: "Realistic 30mm pile artificial lawn grass.",
    description: "UV stabilised for fade resistance. Drains quickly and stays green all year round. Ideal for gardens, play areas, and balconies.",
    dimensions: "Price per sqm · 2m & 4m widths",
    materials: "PE Monofilament, PP Curled, Latex Backing",
    delivery: "Collection or Delivery",
    images: [media.grassA, media.showroomA],
    offer: true,
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "abingdon-stainfree-twist",
    name: "Abingdon Stainfree Twist Carpet",
    category: "carpets",
    price: 14,
    shortDescription: "Budget-friendly bleach-cleanable twist carpet.",
    description: "The ideal carpet for busy households. Stain-free technology means spills wipe away easily. Available in a wide range of neutral and bold colours.",
    dimensions: "Price per sqm · 4m width",
    materials: "100% Polypropylene, Bleach Cleanable",
    delivery: "Supply & Fit Available",
    images: [media.carpetA, media.carpetB],
    room: "Bedroom"
  },
  {
    slug: "cushion-floor-vinyl",
    name: "Cushion Floor Vinyl",
    category: "lvt",
    price: 10,
    compareAtPrice: 14,
    shortDescription: "Soft-step cushioned vinyl in tile & wood effects.",
    description: "Comfortable, warm, and water-resistant. Perfect for bathrooms, kitchens, and utility rooms. Easy to clean and maintain.",
    dimensions: "Price per sqm · 2m, 3m & 4m widths",
    materials: "PVC, Foam Backing, Non-Slip Surface",
    delivery: "Supply & Fit Available",
    images: [media.vinylA, media.lvtA],
    offer: true,
    room: "Bathroom"
  }
];

export const promoBanners = [
  "Quality carpets & flooring at unbeatable prices in Clay Cross",
  "Over 30 rolls of carpet in stock — call in today!",
  "Snap finance available — spread the cost of your new floor",
  "Free measuring service — book your home visit now",
];

export const roomShop = [
  { name: "Carpets", image: media.carpetA, href: "/shop?category=carpets" },
  { name: "Laminate Flooring", image: media.laminateA, href: "/shop?category=laminate" },
  { name: "LVT Flooring", image: media.lvtA, href: "/shop?category=lvt" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
