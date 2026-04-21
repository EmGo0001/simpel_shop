"use client";
import { PiBasketLight } from "react-icons/pi";
import useBasket from "./store/basket";

const BasketElement = ({ id, product }) => {
  const { basket, addToBasket, removeFromBasket } = useBasket();

  const isInBasket = basket.some((item) => item.id === id);

  return (
    <div className="cursor-pointer  bg-[#FBFAFA] rounded-full p-2 ">
      <PiBasketLight
        size={25}
        className="text-black"
        onClick={() => {
          isInBasket ? removeFromBasket(id) : addToBasket(id, product);
        }}
      />
    </div>
  );
};

export default BasketElement;
