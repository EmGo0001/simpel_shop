// Komponenten her er til hvert "produkt kort" - hvordan det skal se ud med billede, pris osv.

import FavoritElement from "../components/FavoritElement";
import BasketElement from "../components/BasketElement";
import Image from "next/image";
import Link from "next/link";

const ProductlistCard = ({ id, title, img, price, product }) => {
  return (
    <div>
      <div className="relative bg-[#EEECED] p-3 ">
        <Link href={`/products/${id}`}>
          <div className="bg-[#EEECED] p-9">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </Link>

        <div className="absolute top-3 right-3 flex flex-col gap-3">
          <FavoritElement id={id} product={product} />
          <BasketElement id={id} product={product} />
        </div>
      </div>

      <div className="flex justify-between p-2 pt-4 pb-4">
        <h2 className="text-black text-xl font-extrabold">{title}</h2>
        <h2 className="text-black text-xl">${price}</h2>
      </div>
    </div>
  );
};

export default ProductlistCard;
