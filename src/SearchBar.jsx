import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const products = useSelector((state) => state.products);

  useEffect(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      setResults([]);
      setNotFound(false);
      return;
    }

    const allProducts = [
      ...products.Veg,
      ...products.NonVeg,
      ...products.Chocolates,
      ...products.Milk,
      ...products.Drinks,
      ...products.Fruits,
    ];

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    if (filtered.length > 0) {
      setResults(filtered);
      setNotFound(false);
    } else {
      setResults([]);
      setNotFound(true);
    }
  }, [query, products]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 🔍 Input */}
      <div className="flex items-center gap-3 w-2/3 max-w-2xl bg-gray-100 px-4 py-2 rounded-full shadow-sm">
        <SearchBar className="text-gray-500" size={20} />
        <input
          type="search"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent flex-1 outline-none text-gray-700"
        />
      </div>

      {/* ❌ No Product Found */}
      {notFound && (
        <p className="text-center text-red-600 text-lg font-semibold">
          Item not available in store ❌
        </p>
      )}

      {/* ✅ Search Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {results.map((item) => (
          <div
            key={item.id}
            className="border p-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-40 w-full object-cover rounded-md"
            />
            <h3 className="font-semibold text-lg mt-2">{item.name}</h3>
            <p className="text-gray-500 text-sm">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
