import FavoritElement from "@/components/FavoritElement";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import AddToCartButton from "@/components/AddToCart";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Product not found</div>;
  }

  const product = await res.json();

  // beregn average rating
  const avgRating =
    product.reviews?.reduce((acc, r) => acc + r.rating, 0) /
      product.reviews?.length || 0;

  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <div className="flex items-center gap-3 cursor-pointer mb-2">
        <Link href="/products" className="flex items-center gap-3 w-fit">
          <LiaLongArrowAltLeftSolid className="text-xl" />
          <p className="font-bold text-xl">back to products</p>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-10 items-start">
        <div className="flex justify-center bg-[#EEECED] p-9 ">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-w-xs h-100 object-cover w-full"
          />
        </div>

        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold max-w-xs">{product.title}</h2>
            <FavoritElement
              id={id}
              product={product}
              className="absolute top-3 right-3"
            />
          </div>
          <h2 className="text-2xl font-semibold uppercase max-w-xs text-gray-600">
            {product.brand}
          </h2>
          <p className="text-lg mt-5 text-gray-600 line-clamp-3">
            {product.description}
          </p>

          <p className="font-extrabold text-xl mt-5">${product.price}</p>

          <div className="mt-5">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-40 pb-10 ">
        <div className="relative flex items-center justify-between border-t-2 border-dotted border-gray-600 pt-6 mt-5">
          <h2 className="text-2xl font-bold tracking-wide">REVIEWS</h2>
          <div className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-sm"></div>
          <p className="text-xl font-bold">
            OVERALL <span>{avgRating.toFixed(2)}</span>/5
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {product.reviews?.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <p className="text-2xl mt-2">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="font-bold text-lg">{review.reviewerName}</p>

              <p className="text-l text-gray-600 mt-1 italic">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
