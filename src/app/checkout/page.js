"use client";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-xl font-extrabold mt-7 text-center">
        YOUR SHOPPING BAG
      </h1>

      {cart.length === 0 && <p>Kurven er tom</p>}

      {cart.map((item, index) => (
        <div key={index} className="border-b py-4">
          <h2>{item.title}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
