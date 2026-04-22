"use client";

import { useCart } from "@/app/context/CartContext";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white py-2.5 px-10 rounded-xl hover:opacity-80 transition cursor-pointer font-bold"
    >
      add to basket
    </button>
  );
};

export default AddToCartButton;
