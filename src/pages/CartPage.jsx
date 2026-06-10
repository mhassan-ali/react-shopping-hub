import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-10">
      
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-6 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="font-bold text-lg">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-6">
          Order Summary
        </h2>

        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span className="font-bold text-lg">
            ${totalPrice}
          </span>
        </div>

        <Link
          to="/checkout"
          className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-medium"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}