import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react"; // ✅ Lucide Import

export default function ProductCard({ product }) {
  const { addToCart, wishlistItems, toggleWishlist } = useCart();
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/30 hover:-translate-y-1 flex flex-col h-full group">
      
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
          <div className="w-full aspect-square bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-0 animate-imageFade"
            />
          </div>
        </Link>

        {/* ✅ A11y & Lucide Heart */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-sm transition-all duration-300 hover:scale-110 ${
            isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900 mb-6 mt-auto">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}