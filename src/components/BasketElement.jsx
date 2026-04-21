"use client";
import { PiBasketLight } from "react-icons/pi";
import { useCart } from "@/app/context/CartContext";

const BasketElement = ({ product }) => {
  const { cart, addToCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="cursor-pointer bg-[#FBFAFA] rounded-full p-2">
      <PiBasketLight
        size={25}
        className="text-black"
        onClick={() => addToCart(product)}
      />
    </div>
  );
};

export default BasketElement;
