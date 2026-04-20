import { LiaLongArrowAltRightSolid } from "react-icons/lia";
export default function Home() {
  return (
    <div>
      <div className="flex gap-6 items-start ">
        <div className="transition-transform duration-300 hover:scale-110 origin-top">
          <img src="./img/jacket.webp" alt="leather jacket"></img>
          <div className="flex justify-between">
            <p>JACKET</p>
            <p>$999</p>
          </div>
        </div>
        <div className="transition-transform duration-300 hover:scale-110 origin-top">
          <img src="./img/bag.webp" alt="leather bag"></img>
          <div className="flex justify-between">
            <p>LEATHER BAG</p>
            <p>$15267</p>
          </div>
        </div>
        <div className="transition-transform duration-300 hover:scale-110 origin-top">
          <img src="./img/glasses.webp" alt="leather glasses"></img>
          <div className="flex justify-between">
            <p>GLASSES </p>
            <p>$5267</p>
          </div>
        </div>
        <div className="transition-transform duration-300 hover:scale-110 origin-top">
          <img src="./img/longsleeve.webp" alt="leather longsleeve"></img>
          <div className="flex justify-between">
            <p>LONGSLEEVE </p>
            <p>$888 </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 ">
        <button className="underline text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 origin-right font-(family-name:<mono_bold>)">
          VIEW PRODUCTS
        </button>
        <LiaLongArrowAltRightSolid
          size={80}
          className="cursor-pointer transition-transform duration-300 hover:scale-110 origin-right"
        />
      </div>
    </div>
  );
}
