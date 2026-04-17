const CategoriesAndSearch = () => {
  return (
    <div className="border-b border-black pb-1 flex justify-between items-center">
      <div>
        <select>
          <option value="">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>

      <form>
        <input
          className="border-none outline-none bg-[#FEFAEF] text-black"
          type="text"
          name="query"
          placeholder="search products..."
        />
      </form>
    </div>
  );
};

export default CategoriesAndSearch;
