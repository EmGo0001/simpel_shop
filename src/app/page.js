import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#EEECED]">
        <img src="/img/jacket.png" alt="jacket" />
      </div>
      <figcaption className="flex gap-40">
        <div>Jacket</div>
        <div>$999</div>
      </figcaption>
    </div>
  );
}
