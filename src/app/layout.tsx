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
  metadataBase: new URL("https://yorkshire-home-interiors-demo.vercel.app"),
  title: {
    default: "K.E.S. Bathrooms | Furniture & Home Styling for Chesterfield",
    template: "%s | K.E.S. Bathrooms",
  },
  description:
    "Handpicked sofas, beds, dining sets, wardrobes and home decor for Chesterfield and South K.E.S. homes. Visit our High St showroom or shop online.",
  openGraph: {
    title: "K.E.S. Bathrooms | Furniture & Home Styling for Chesterfield",
    description:
      "Browse sofas, beds, dining, decor and complete your order. Handpicked furniture for K.E.S. homes.",
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
