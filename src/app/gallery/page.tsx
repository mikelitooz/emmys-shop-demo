import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium flooring showroom gallery experience for Right Price Carpets."
};

export default function GalleryPage() {
  return <GalleryView />;
}
