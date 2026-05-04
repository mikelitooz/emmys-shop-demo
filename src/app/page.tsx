import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Right Price Carpets | Quality Carpets & Flooring Clay Cross",
  description:
    "Explore sofas, beds, wardrobes, carpets, dining furniture and home styling from a polished demo website for Right Price Carpets."
};

export default function HomePage() {
  return <HomeView />;
}
