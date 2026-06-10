import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FadeInSection from "../components/FadeInSection";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <FadeInSection>
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl">
        <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-4">
              Modern Shopping Experience
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Quality Products for Everyday Life
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore electronics, fashion, and accessories with a clean, modern shopping experience built for speed and style.
            </p>

            <div className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg">
              <Link
                to="/products"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Shop Now
              </Link>
              <a
                href="#featured"
                className="border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center"
              >
                Explore Collection
              </a>
                
                
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Featured Products */}
      <FadeInSection delay={100}>
      <section id="featured">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Trending Products
            </h2>
          </div>

          <Link
            to="/products"
            className="text-blue-600 font-medium hover:underline"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* Categories */}
      <FadeInSection delay={200}>
      <section className="space-y-10 py-10">
  <div>
    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Categories
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
      Shop by Category
    </h2>
  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/products?category=Electronics"
            className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold mb-2">Electronics</h3>
            <p className="text-gray-600">
              Smart devices and modern tech essentials.
            </p>
          </Link>

          <Link
            to="/products?category=Fashion"
            className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="text-4xl mb-4">👟</div>
            <h3 className="text-xl font-semibold mb-2">Fashion</h3>
            <p className="text-gray-600">
              Stylish everyday wear and lifestyle essentials.
            </p>
          </Link>

          <Link
            to="/products?category=Accessories"
            className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="text-4xl mb-4">⌨️</div>
            <h3 className="text-xl font-semibold mb-2">Accessories</h3>
            <p className="text-gray-600">
              Functional accessories for work, gaming, and travel.
            </p>
          </Link>
        </div>
      </section>
      </FadeInSection>
    </div>
  );
}