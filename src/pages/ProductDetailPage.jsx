import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import StarRating from "../components/StarRating";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (

      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">
          Product Not Found
        </h2>
        <Link
          to="/products"
          className="text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      rating: 5,
      comment:
        "Amazing quality and fast delivery. Definitely worth the price!",
    },
    {
      id: 2,
      name: "Sara Ali",
      rating: 4,
      comment:
        "Very satisfied with the product. Would purchase again.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 4,
      comment:
        "Good value for money. The design looks premium.",
    },
  ];

  return (
    <>
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <ul className="flex items-center gap-2 flex-wrap">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to={`/products?category=${product.category}`}
              className="hover:text-blue-600"
            >
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">
            {product.name}
          </li>
        </ul>
      </nav>

      <div className="space-y-20">

      {/* Main Product Section */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">

          <span className="text-sm text-blue-600 font-semibold uppercase">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-gray-900">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="text-gray-600 text-sm">
              ({product.reviewsCount} reviews)
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-medium"
          >
            Add to Cart
          </button>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="block bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 font-bold">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">
                  {review.name}
                </p>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 text-sm">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  );
}