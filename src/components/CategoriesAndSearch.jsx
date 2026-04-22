"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesAndSearch = () => {
  // useRouter gør at vores URL ændrer sig når man fx søger på noget
  const router = useRouter();
  // Her har vi en state som starter ud med at have en tom liste []
  const [categories, setCategories] = useState([]);

  // Her fetcher vi data fra vores API til vores kategori liste
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/category-list");
      const data = await res.json();
      // setCategories gemmer vores data i state
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="border-b border-black pb-1 flex justify-between items-center mt-25 ">
      {/* til categories*/}
      <select
        className="text-black font-extrabold text-2xl cursor-pointer"
        // Når der vælges en kategori, ændres URL'en
        onChange={(e) => {
          router.push(`?category=${e.target.value}`);
        }}
      >
        <option value="">categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* til search*/}
      <form>
        <input
          className="border-none outline-none bg-[#FEFAEF] placeholder-black font-extrabold text-2xl"
          type="text"
          name="query"
          placeholder="search products..."
        />
      </form>
    </div>
  );
};

export default CategoriesAndSearch;
