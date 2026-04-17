import ProductlistCard from "./ProductlistCard";

const Search = async ({ searchParams }) => {
  const query = searchParams?.query || "";

  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : "https://dummyjson.com/products";

  const res = await fetch(url);
  const data = await res.json();

  const products = data.products;

  return (
    <div className="grid grid-cols-2 gap-6 p-6 m-2">
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
  );
};

export default Search;
