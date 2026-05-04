import type { Metadata } from "next";
import { ContactView } from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Right Price Carpets, view opening hours and plan a showroom visit in Clay Cross."
};

export default function ContactPage() {
  return <ContactView />;
}
