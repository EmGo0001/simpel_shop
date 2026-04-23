"use client";
import Link from "next/link";
import { PiBasketBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import CartSidebar from "@/components/CartSidebar";

const Navbar = () => {
  const pathname = usePathname();
  const { cart } = useCart();

  // state til at åbne/lukke sidebar
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#fefaef] py-4">
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-10">
            <Link href="/">
              <h2 className="text-3xl font-extrabold transition-transform duration-300 hover:scale-110">
                HOME
              </h2>
            </Link>

            <Link href="/products">
              <h2 className="text-3xl font-extrabold transition-transform duration-300 hover:scale-110">
                PRODUCTS
              </h2>
            </Link>
          </div>

          {/* CART ICON */}
          {pathname !== "/" && (
            <div className="flex items-center gap-2">
              <Link
                href="/checkout"
                className="flex items-center gap-2 transition-transform duration-300 hover:scale-110"
              >
                <PiBasketBold size={30} />
                <span className="font-extrabold">{cart.length}</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* SIDEBAR */}
      <CartSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
