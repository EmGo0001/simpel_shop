"use client";
import { useCart } from "../context/CartContext";
import { BsTrash3 } from "react-icons/bs";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Checkout() {
  const { cart, removeFromCart } = useCart();

  const [removingIndex, setRemovingIndex] = useState(null);
  const [displayTotal, setDisplayTotal] = useState(0);

  // Beregner den "faktiske" totalpris ud fra kurven
  const realTotal = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );

  // Smooth animation af total
  // Starter en effekt hver gang realTotal ændrer sig
  useEffect(() => {
    let start = displayTotal; // startværdi (det vi viser nu)
    let end = realTotal; // slutværdi (den rigtige total)
    let startTime;

    const duration = 300; // hvor lang animationen varer i ms

    const animate = (time) => {
      if (!startTime) startTime = time;

      // hvor langt vi er i animationen (0 -> 1)
      const progress = Math.min((time - startTime) / duration, 1);

      // interpolerer mellem start og slut
      const value = start + (end - start) * progress;

      // opdaterer visningen
      setDisplayTotal(value);

      // fortsæt animation hvis ikke færdig
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [realTotal]);

  // håndterer fjernelse af item med animation
  const handleRemove = (index) => {
    setRemovingIndex(index);

    setTimeout(() => {
      removeFromCart(index);
      setRemovingIndex(null);
    }, 200);
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl font-extrabold text-center">YOUR SHOPPING BAG</h1>

      <div className="p-10 max-w-3xl mx-auto mt-5">
        {/* tilbage link */}
        <div className="flex items-center gap-3 cursor-pointer mb-5">
          <Link href="/products" className="flex items-center gap-3 w-fit">
            <LiaLongArrowAltLeftSolid className="text-xl" />
            <p className="font-bold text-xl transition-transform duration-300 hover:scale-110 ">
              WANT MORE?
            </p>
          </Link>
        </div>

        {/* hvis kurven er tom */}
        {cart.length === 0 && (
          <p className="text-center m-9 text-gray-400">
            shopping bag is empty :(
          </p>
        )}

        {/* container til items */}
        <div className="bg-[#CECECE] p-6 rounded-xl shadow-lg">
          {/* ITEMS */}
          {cart.map((item, index) => (
            <div
              key={index}
              className={`border-b py-4 flex justify-between items-center transition-all duration-300
              ${
                removingIndex === index
                  ? "opacity-0 translate-x-10 scale-95"
                  : "opacity-100 translate-x-0 scale-100"
              }
            `}
            >
              {/* venstre side: billede + titel */}
              <div className="flex gap-4 items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-15 h-15 object-cover rounded"
                />
                <p className="font-medium">{item.title}</p>
              </div>

              {/* højre side: pris + delete */}
              <div className="flex gap-6 items-center">
                <p className="font-medium">${Number(item.price || 0)}</p>

                <button
                  onClick={() => handleRemove(index)}
                  className="text-black hover:text-red-600 transition"
                >
                  <BsTrash3 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        {cart.length > 0 && (
          <div className="mt-6 font-extrabold text-xl pt-4 flex gap-5 justify-center">
            <span>Total:</span>

            {/* toFixed virker nu fordi vi sikrer at det altid er et tal */}
            <span className="transition-all duration-200">
              ${displayTotal.toFixed(2)}
            </span>
          </div>
        )}

        {/* BUTTON */}
        {cart.length > 0 && (
          <div className="flex justify-center text-lg">
            <button className="mt-5 w-50 bg-black font-medium text-white py-2 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110">
              pay now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
