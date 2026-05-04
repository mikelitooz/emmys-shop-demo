import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium furniture showroom gallery experience for K.E.S. Bathrooms."
};

export default function GalleryPage() {
  return <GalleryView />;
}
