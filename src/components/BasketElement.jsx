"use client";
import { PiBasketLight } from "react-icons/pi";
import { useCart } from "@/app/context/CartContext";

const BasketElement = ({ product }) => {
  const { cart, addToCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  const base =
    "cursor-pointer bg-[#FBFAFA] rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95";

  return (
    <div className={base} onClick={() => addToCart(product)}>
      <PiBasketLight
        size={25}
        className="text-black transition-all duration-300 hover:scale-110"
      />
    </div>
  );
};

export default BasketElement;
