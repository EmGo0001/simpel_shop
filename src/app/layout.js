import { Suspense } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Simpel Shop",
  description: "En webshop bygget med Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="max-w-[1200px] mx-auto mt-10">
        <CartProvider>
          <Navbar />

          <Suspense
            fallback={
              <div className="flex justify-center p-10">Indlæser...</div>
            }
          >
            {children}
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
