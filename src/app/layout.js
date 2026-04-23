import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "./context/CartContext";
import { Suspense } from "react";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simpel Shop",
  description: "En webshop bygget med Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="max-w-[1200px] mx-auto mt-10">
        <Providers>
          <Suspense fallback={<div className="h-20" />}>
            <Navbar />
          </Suspense>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
