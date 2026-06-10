import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import FadeInSection from "../components/FadeInSection";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //  New State for Async Data
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const selectedCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const sortOption = searchParams.get("sort");

  //  Fetch data on mount
  useEffect(() => {
    setIsLoading(true);
    fetchProducts().then((data) => {
      setAllProducts(data);
      setIsLoading(false);
    });
  }, []);

  //  Filtering Logic (applied to allProducts now)
  let filteredProducts = allProducts;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  //  Sorting Logic
  if (sortOption === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }
  if (sortOption === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }
  if (sortOption === "rating-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="space-y-10">
      {/* Header + Sorting */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : selectedCategory
            ? `${selectedCategory} Products`
            : "All Products"}
        </h1>

        <select
          value={sortOption || ""}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams);
            if (e.target.value) params.set("sort", e.target.value);
            else params.delete("sort");
            navigate(`/products?${params.toString()}`);
          }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Sort products"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Rated</option>
        </select>
      </div>

      {/*  Loading State OR Product Grid */}
      {isLoading ? (
        <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading premium products...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {filteredProducts.map((product, index) => (
            <FadeInSection key={product.id} delay={index * 80}>
              <ProductCard product={product} />
            </FadeInSection>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
}