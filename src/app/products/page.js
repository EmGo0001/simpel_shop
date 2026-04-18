import { Suspense } from "react";
import CategoriesAndSearch from "@/components/CategoriesAndSearch";
import Productlist from "@/components/Productlist";

export default function Home({ searchParams }) {
  return (
    <div>
      <CategoriesAndSearch />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[60vh]">
            Loading products...
          </div>
        }
      >
        <Productlist searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
