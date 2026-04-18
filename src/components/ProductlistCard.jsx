// Komponenten her er til hvert "produkt kort" - hvordan det skal se ud med billede, pris osv.

// import FavoritElement from "../components/FavoritElement";
import Image from "next/image";
import Link from "next/link";

const ProductlistCard = ({ id, title, img, price }) => {
  return (
    <div className="relative bg-gray-100/80 shadow-xl rounded-2xl">
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </Link>

      {/* <FavoritElement id={id} breed={breed} /> */}

      <div className="flex justify-between p-3 pt-4 pb-4">
        <h2 className="text-black text-l font-bold">{title}</h2>
        <h2 className="text-gray-400">{price}</h2>
      </div>
    </div>
  );
};

export default ProductlistCard;
