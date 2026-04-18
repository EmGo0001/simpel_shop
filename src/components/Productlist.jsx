import ProductlistCard from "./ProductlistCard";

const Search = async ({ searchParams }) => {
  const { query, category } = await searchParams;

  let url = "https://dummyjson.com/products";

  if (category) {
    url = `https://dummyjson.com/products/category/${category}`;
  } else if (query) {
    url = `https://dummyjson.com/products/search?q=${query}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();

  // Her sørger vi for, at products altid er et array
  // Hvis data.products ikke findes, bruger vi et tomt array [], så det betyder er der vil stå 0 products
  const products = data.products || [];

  // Her finder vi hvor mange produkter der er i arrayet
  // .length giver antallet af elementer i listen
  const count = products.length;

  const title = category
    ? `${category} (${count})`
    : query
    ? `${query} (${count})`
    : `PRODUCTS`;

  return (
    <div className="mt-10">
      <h1 className="text-xl font-extrabold uppercase m-10 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-5 m-6 md:m-0">
        {products.map((product) => (
          <ProductlistCard
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
