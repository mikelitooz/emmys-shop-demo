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
  bathA: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1500&q=85",
  bathB: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85",
  showerA: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1500&q=85",
  showerB: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1500&q=85",
  vanityA: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1500&q=85",
  tapA: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1500&q=85",
  showroomA: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85"
};

export const categories: Category[] = [
  { slug: "baths", name: "Freestanding Baths", description: "Elegant centerpieces for luxury bathrooms", heroImage: media.bathA },
  { slug: "showers", name: "Walk-in Showers", description: "Modern, accessible shower enclosures", heroImage: media.showerA },
  { slug: "vanities", name: "Vanity Units", description: "Practical storage with premium basin finishes", heroImage: media.vanityA },
  { slug: "brassware", name: "Taps & Brassware", description: "High-quality basin and bath taps", heroImage: media.tapA },
];

export const products: Product[] = [
  {
    slug: "carrara-freestanding-oval-bath",
    name: "Carrara Freestanding Oval Bath",
    category: "baths",
    price: 949,
    compareAtPrice: 1199,
    badge: "Showroom Exclusive",
    shortDescription: "Smooth, contemporary oval freestanding bath.",
    description: "Designed to be the ultimate focal point. This luxurious double-ended freestanding bath provides deep, relaxing soaks and a stunning modern silhouette.",
    dimensions: "L 1700mm x W 800mm x H 600mm",
    materials: "Premium Acrylic, Gloss White Finish",
    delivery: "Full Installation Available",
    images: [media.bathA, media.showroomA],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Bathroom"
  },
  {
    slug: "matlock-walk-in-shower-enclosure",
    name: "Matlock Walk-In Shower Enclosure",
    category: "showers",
    price: 649,
    shortDescription: "Sleek frameless glass walk-in shower panel.",
    description: "Bring the wet-room look to your home. Features 8mm toughened safety glass with an easy-clean coating to resist water spots.",
    dimensions: "W 1000mm x H 1950mm",
    materials: "8mm Toughened Glass, Chrome Profile",
    delivery: "Full Installation Available",
    images: [media.showerA, media.showerB],
    featured: true,
    room: "Bathroom"
  },
  {
    slug: "chesterfield-wall-hung-vanity",
    name: "Chesterfield Wall-Hung Vanity Unit",
    category: "vanities",
    price: 499,
    compareAtPrice: 599,
    shortDescription: "Modern 2-drawer wall hung vanity in matte grey.",
    description: "Maximize your floor space with this elegant wall-hung unit. Features soft-close drawers and a durable ceramic basin.",
    dimensions: "W 600mm x D 460mm x H 500mm",
    materials: "Moisture-resistant MDF, Ceramic Basin",
    delivery: "Full Installation Available",
    images: [media.vanityA, media.showroomA],
    bestSeller: true,
    offer: true,
    room: "Bathroom"
  },
  {
    slug: "clay-cross-waterfall-basin-mixer",
    name: "Clay Cross Waterfall Basin Mixer",
    category: "brassware",
    price: 129,
    shortDescription: "Contemporary chrome waterfall tap.",
    description: "A beautiful cascading water flow effect. Constructed from solid brass with a mirror chrome finish to resist tarnishing.",
    dimensions: "H 155mm x Reach 110mm",
    materials: "Solid Brass, Polished Chrome",
    delivery: "Supply & Fit",
    images: [media.tapA, media.vanityA],
    newArrival: true,
    room: "Bathroom"
  },
  {
    slug: "heritage-roll-top-bath",
    name: "Heritage Roll Top Slipper Bath",
    category: "baths",
    price: 1099,
    shortDescription: "Traditional slipper bath with chrome claw feet.",
    description: "Add a touch of period elegance to your bathroom. Classic slipper design allows you to recline in total comfort.",
    dimensions: "L 1550mm x W 750mm x H 720mm",
    materials: "Acrylic, Chrome Plated Feet",
    delivery: "Full Installation Available",
    images: [media.bathB, media.bathA],
    room: "Bathroom"
  },
  {
    slug: "thermostatic-rain-shower-system",
    name: "Thermostatic Rain Shower System",
    category: "showers",
    price: 299,
    shortDescription: "Dual head exposed thermostatic shower valve.",
    description: "Enjoy a spa-like drenching rain shower with the practicality of a flexible handset. Anti-scald thermostatic control.",
    dimensions: "8\" Rain Head, Adjustable Riser Rail",
    materials: "Solid Brass Valve, Stainless Steel Head",
    delivery: "Full Installation Available",
    images: [media.showerB, media.showerA],
    bestSeller: true,
    room: "Bathroom"
  },
  {
    slug: "oak-freestanding-vanity-unit",
    name: "Derwent Oak Freestanding Vanity",
    category: "vanities",
    price: 549,
    shortDescription: "Traditional 2-door floor-standing unit with basin.",
    description: "Warm oak finish providing excellent storage for family bathrooms. Comes complete with a high-quality ceramic sink.",
    dimensions: "W 800mm x D 460mm x H 850mm",
    materials: "Oak Finish, Ceramic Basin",
    delivery: "Supply & Fit",
    images: [media.vanityA, media.showroomA],
    room: "Bathroom"
  },
  {
    slug: "led-illuminated-bathroom-mirror",
    name: "Halo LED Illuminated Mirror",
    category: "brassware",
    price: 199,
    shortDescription: "Touch-sensor backlit LED mirror with demister.",
    description: "Never wipe a steamy mirror again. Integrated heated demister pad and cool white LED ambient lighting.",
    dimensions: "H 700mm x W 500mm",
    materials: "5mm Safety Glass, IP44 Rated LED",
    delivery: "Supply & Fit",
    images: [media.tapA, media.showerA],
    room: "Bathroom"
  }
];

export const promoBanners = [
  "Complete Bathroom Design & Installation in Chesterfield",
  "Visit our Clay Cross Showroom to explore our premium suites",
  "From 3D Design to Final Plumbing — We handle everything",
  "Expert local fitters with years of experience",
];

export const roomShop = [
  { name: "Freestanding Baths", image: media.bathA, href: "/shop?category=baths" },
  { name: "Walk-in Showers", image: media.showerA, href: "/shop?category=showers" },
  { name: "Vanity Units", image: media.vanityA, href: "/shop?category=vanities" }
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
