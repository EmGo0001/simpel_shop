"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import useFavorites from "./store/favorite";

const Favorit = ({ id, product }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();

  const isFav = favorites.some((fav) => fav.id === id);

  const base =
    "cursor-pointer bg-[#FBFAFA] rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95";

  return (
    <div className={`${base} group`}>
      {/* Hvis allederede favorit */}
      {isFav ? (
        <GoHeartFill
          size={25}
          className="text-black"
          onClick={() => removeFavorite(id)}
        />
      ) : (
        /* Tomt hjerte  + hover effect */
        <div className="relative w-[25px] h-[25px]">
          {/* tomt hjerte (default) */}
          <IoMdHeartEmpty
            size={25}
            className="absolute top-0 left-0 text-black transition-opacity duration-200 group-hover:opacity-0"
            onClick={() => setFavorite(id, product)}
          />

          {/* fyldt hjerte (hover) */}
          <GoHeartFill
            size={25}
            className="absolute top-0 left-0 text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            onClick={() => setFavorite(id, product)}
          />
        </div>
      )}
    </div>
  );
};

export default Favorit;

// base = genbrug af Tailwind classes til styling af containeren
// gør koden mere læsbar og nem at ændre ét sted i stedet for mange steder

// group = gør dette element til en “hover-parent”
// så child elements kan reagere på hover med fx group-hover:opacity-100
// bruges til at styre hover-effekter på indhold inde i en wrapper (som ikoner)
