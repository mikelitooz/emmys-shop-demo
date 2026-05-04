import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about K.E.S. Bathrooms and the High St Chesterfield showroom positioning."
};

export default function AboutPage() {
  return <AboutView />;
}
