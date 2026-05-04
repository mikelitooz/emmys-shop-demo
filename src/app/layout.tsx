import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { Toast } from "@/components/ui/Toast";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://right-price-carpets-demo.vercel.app"),
  title: {
    default: "Right Price Carpets | Carpets & Flooring for Clay Cross",
    template: "%s | Right Price Carpets",
  },
  description:
    "Quality carpets, laminate, LVT flooring and artificial grass for Clay Cross and Teesside homes. Visit our Clay Cross showroom or shop online.",
  openGraph: {
    title: "Right Price Carpets | Carpets & Flooring for Clay Cross",
    description:
      "Browse carpets, laminate, LVT, vinyl and artificial grass. Quality flooring for Teesside homes.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
