import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Heart, ShoppingCart, Menu, X, Search } from "lucide-react"; // ✅ Lucide Icons

export default function Navbar() {
  const { totalQuantity, wishlistItems } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ Mobile State

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            SHOPUI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Shop
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group py-2">
              <button className="text-gray-600 hover:text-blue-600 font-medium" aria-haspopup="true">
                Categories
              </button>
              <div className="absolute left-0 top-full w-44 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl hidden group-hover:block z-50 overflow-hidden">
                <Link to="/products?category=Electronics" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">Electronics</Link>
                <Link to="/products?category=Fashion" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">Fashion</Link>
                <Link to="/products?category=Accessories" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">Accessories</Link>
                <Link to="/products?category=Home" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">Home</Link>
              </div>
            </div>
          </div>

          {/* Right Side: Search + Icons + Mobile Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Search */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchTerm.trim()) {
                  navigate(`/products?search=${searchTerm}`);
                  setSearchTerm("");
                }
              }}
              className="hidden md:flex relative items-center"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-full pl-4 pr-10 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                aria-label="Search products"
              />
              <button type="submit" className="absolute right-3 text-gray-400 hover:text-blue-600" aria-label="Submit search">
                <Search size={16} />
              </button>
            </form>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-red-500 transition-transform duration-300 hover:scale-110" aria-label="View wishlist">
              <Heart size={22} strokeWidth={1.5} />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className={`relative p-2 text-gray-600 hover:text-blue-600 transition-transform duration-300 hover:scale-110 ${totalQuantity > 0 ? "scale-110" : ""}`} aria-label="View cart">
              <ShoppingCart size={22} strokeWidth={1.5} />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* ✅ Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4 animate-slideIn">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-gray-600 font-medium">Home</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-gray-600 font-medium">Shop All</Link>
            <Link to="/products?category=Electronics" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-gray-500 text-sm">Electronics</Link>
            <Link to="/products?category=Fashion" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-gray-500 text-sm">Fashion</Link>
            
            {/* Mobile Search */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchTerm.trim()) {
                  navigate(`/products?search=${searchTerm}`);
                  setSearchTerm("");
                  setIsMobileMenuOpen(false);
                }
              }}
              className="flex px-2 pt-2"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-lg">
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}