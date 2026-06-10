import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
 const { cartItems, totalPrice, clearCart } = useCart(); 
  const navigate = useNavigate();
  //  Redirect if cart is empty
if (cartItems.length === 0) {
  navigate("/products");
  return null;
}

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  paymentMethod: "card",
});

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setIsProcessing(true);

    // Fake payment delay
    setTimeout(() => {
  setIsProcessing(false);
  clearCart();        // ✅ clear cart after payment
  setIsSuccess(true);
}, 2000);
  }

  if (isSuccess) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          ✅ Payment Successful!
        </h2>
        <p className="mb-6">Thank you for your order.</p>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-10">
      
      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm space-y-6"
      >
        <h2 className="text-2xl font-semibold">Shipping Information</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />
        <input
         type="tel"
         name="phone"
         placeholder="Phone Number"
  required
  value={formData.phone}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-lg px-4 py-3"
/>

        <textarea
          name="address"
          placeholder="Shipping Address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

       <h3 className="text-xl font-semibold mt-6">
  Payment Method
</h3>

<div className="space-y-4">
  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer">
    <input
      type="radio"
      name="paymentMethod"
      value="card"
      checked={formData.paymentMethod === "card"}
      onChange={handleChange}
    />
    <span>💳 Credit / Debit Card</span>
  </label>

  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer">
    <input
      type="radio"
      name="paymentMethod"
      value="cod"
      checked={formData.paymentMethod === "cod"}
      onChange={handleChange}
    />
    <span>🚚 Cash on Delivery</span>
  </label>
</div>

        <button
          type="submit"
          disabled={isProcessing}
          className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-medium"
        >
          {isProcessing ? (
  <span className="animate-pulse">Processing Payment...</span>
) : (
  "Place Order"
)}
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-white p-8 rounded-xl shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-6">
          Order Summary
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-3 text-sm"
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>
              ${item.price * item.quantity}
            </span>
          </div>
        ))}

        <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}