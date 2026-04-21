import FavoritElement from "@/components/FavoritElement";
export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Product not found</div>;
  }

  const product = await res.json();

  return (
    <div className="grid grid-cols-2 gap-10 items-start">
      <div className="w-1/2 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-md h-[500px] object-contain"
        />
      </div>
      <FavoritElement id={id} product={product} />
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-10 uppercase">{product.title}</h2>

        <p className="text-lg mb-4">{product.description}</p>

        <p className="font-bold text-xl mb-6">${product.price}</p>

        <button className="bg-black text-white py-3 px-6 rounded cursor-pointer hover:opacity-80 transition">
          add to basket
        </button>
      </div>
    </div>
  );
}
