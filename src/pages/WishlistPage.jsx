import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const { wishlistItems } = useCart();

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">
        My Wishlist
      </h1>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500">
          Your wishlist is empty.
        </div>
      )}
    </div>
  );
}