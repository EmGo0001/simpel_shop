"use client";

import { useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { BsTrash3 } from "react-icons/bs";
import Link from "next/link";

export default function BasketSidebar() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  // Denne useEffect styrer om man kan scrolle på hele siden
  // Når sidebar er åben, låser vi body scroll så man ikke kan interagere med baggrunden
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";

    // Cleanup funktion der sikrer at scroll altid bliver gendannet korrekt
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop er det mørke overlay bag sidebar */}
      {/* Den dækker hele skærmen og gør baggrunden ikke klikbar */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300
        ${
          isCartOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Selve sidebar containeren */}
      {/* Den ligger fast i højre side og glider ind/ud via transform */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-[#fefaef] shadow-xl z-[1000]
        flex flex-col transition-transform duration-300
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header sektion */}
        {/* shrink-0 sørger for at header ikke bliver klemt når content vokser */}
        <div className="p-5 border-b flex justify-between items-center font-bold text-xl shrink-0">
          <h2>YOUR CART</h2>

          {/* Luk knap som lukker sidebar */}
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scroll område for produkter */}
        {/* flex-1 gør at dette område fylder alt tilgængelig plads */}
        {/* overflow-y-auto gør at man kan scrolle hvis listen er lang */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Hvis kurven er tom */}
          {cart.length === 0 && <p className="text-gray-400">Cart is empty</p>}

          {/* Loop gennem alle produkter i kurven */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3"
            >
              {/* Venstre side: billede + tekst */}
              <div className="flex gap-3 items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded"
                />

                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Højre side: delete knap */}
              {/* Fjerner produkt fra kurven via index */}
              <button
                onClick={() => removeFromCart(index)}
                className="hover:text-red-600 transition"
              >
                <BsTrash3 />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center pb-5">
          <Link href="/checkout">
            <button className="bg-black text-white py-2 px-5 rounded-xl hover:opacity-80 transition cursor-pointer font-bold">
              go to order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
