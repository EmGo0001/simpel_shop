import { Suspense } from "react";
import CategoriesAndSearch from "@/components/CategoriesAndSearch";
import Productlist from "@/components/Productlist";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <main>
      <CategoriesAndSearch />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-gray-500 font-medium">Loading products...</p>
          </div>
        }
      >
        <Productlist searchParams={resolvedSearchParams} />
      </Suspense>
    </main>
  );
}
