import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";

export default async function Home({ searchParams }) {
  return (
    <div className="font-bold">
      <div className="flex gap-6 items-start mt-15">
        <div className="">
          <img src="./img/Ribeye.webp" alt="ribeye" className="w-130 h-auto" />
          <div className="flex justify-between p-1">
            <p>RIBEYE STEAK</p>
            <p>$888</p>
          </div>
        </div>
        <div className="">
          <img src="./img/bag.webp" alt="leather bag"></img>
          <div className="flex justify-between p-1">
            <p>LEATHER BAG</p>
            <p>$1.267</p>
          </div>
        </div>
        <div className="">
          <img
            src="./img/Anamy_bike.webp"
            alt="motorbike"
            className="w-130 h-auto"
          />
          <div className="flex justify-between p-1">
            <p>ANAMY BIKE </p>
            <p>$52.679</p>
          </div>
        </div>
        <div className="">
          <img
            src="./img/longsleeve.webp"
            alt="leather longsleeve"
            className="w-130 h-auto"
          />
          <div className="flex justify-between p-1">
            <p>LONGSLEEVE </p>
            <p>$27</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end -mt-9">
        <Link href="/products" className="flex items-center gap-3 group">
          <span className="underline decoration-2 underline-offset-4 text-3xl transition-transform duration-300 group-hover:scale-110 ">
            VIEW PRODUCTS
          </span>

          <LiaLongArrowAltRightSolid
            size={80}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
