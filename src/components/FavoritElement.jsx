"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import useFavorites from "./store/favorite";

const Favorit = ({ id, product }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();
  if (favorites.some((favorites) => favorites.id === id)) {
    return (
      <div className="cursor-pointer  bg-[#FBFAFA] rounded-full p-2">
        <GoHeartFill
          size={25}
          className=" text-black"
          onClick={() => {
            removeFavorite(id);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer  bg-[#FBFAFA] rounded-full p-2">
        <IoMdHeartEmpty
          size={25}
          className="text-black  "
          onClick={() => {
            setFavorite(id, product);
          }}
        />
      </div>
    );
  }
};

export default Favorit;
