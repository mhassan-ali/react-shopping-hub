import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage"; 
import CheckoutPage from "../pages/CheckoutPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import WishlistPage from "../pages/WishlistPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
         <Route path="cart" element={<CartPage />} />
         <Route path="checkout" element={<CheckoutPage />} />
         <Route path="products/:id" element={<ProductDetailPage />} />
         <Route path="wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}