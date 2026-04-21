"use client";

import Link from "next/link";
import { PiBasketLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const Navbar = () => {
  const pathname = usePathname();
  const { cart } = useCart();

  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex gap-10">
        <Link href="/">
          <h2 className="text-2xl font-extrabold">HOME</h2>
        </Link>

        <Link href="/products">
          <h2 className="text-2xl font-extrabold">PRODUCTS</h2>
        </Link>
      </div>

      {pathname !== "/" && (
        <div className="flex items-center gap-2">
          <Link href="/checkout" className="flex items-center gap-2">
            <PiBasketLight size={24} />
            <span className="font-bold">{cart.length}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// Skjuler cart-ikonet på forsiden ved at tjekke pathname med usePathname()
// Hvis vi er på "/", bliver cart ikke renderet
