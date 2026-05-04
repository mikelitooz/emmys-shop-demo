import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "K.E.S. Bathrooms | Premium Furniture Showroom Chesterfield",
  description:
    "Explore sofas, beds, wardrobes, carpets, dining furniture and home styling from a polished demo website for K.E.S. Bathrooms."
};

export default function HomePage() {
  return <HomeView />;
}
