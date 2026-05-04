import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Right Price Carpets, a family-run flooring business in Clay Cross."
};

export default function AboutPage() {
  return <AboutView />;
}
