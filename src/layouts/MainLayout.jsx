import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import PageWrapper from "../components/PageWrapper";
import FadeInSection from "../components/FadeInSection";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-800">

      {/* ✅ Glass Navbar */}
      <Navbar />

      {/* ✅ Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 pt-12">
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>

      {/* ✅ Luxury Animated Footer */}
      <footer className="relative mt-24 bg-[#0A0A0B] text-zinc-400 overflow-hidden">

        {/* ✅ Animated Gradient Glow Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden">
          <div className="w-[200%] h-full bg-linear-to-r from-transparent via-indigo-500/40 to-transparent animate-footerGlow" />
        </div>

        {/* ✅ Parallax Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-parallaxSlow" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-parallaxSlow2" />
        </div>

        <FadeInSection>

          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* ✅ Brand */}
              <div
                className="md:col-span-5 opacity-0 animate-footerFade"
                style={{ animationDelay: "0.1s" }}
              >
                <Link
                  to="/"
                  className="text-[28px] font-light tracking-[0.2em] text-white"
                >
                  SHOPUI
                </Link>
                <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
                  Curated essentials. Timeless design.
                  A modern shopping experience crafted for detail.
                </p>
              </div>

              {/* ✅ Shop Links */}
              <div
                className="md:col-span-2 opacity-0 animate-footerFade"
                style={{ animationDelay: "0.2s" }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-5">
                  Shop
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/products" className="relative group hover:text-white transition-colors">
                      All Products
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products?category=Electronics" className="relative group hover:text-white transition-colors">
                      Electronics
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products?category=Fashion" className="relative group hover:text-white transition-colors">
                      Fashion
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products?category=Accessories" className="relative group hover:text-white transition-colors">
                      Accessories
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ✅ Support */}
              <div
                className="md:col-span-2 opacity-0 animate-footerFade"
                style={{ animationDelay: "0.3s" }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-5">
                  Support
                </h4>
                <ul className="space-y-3 text-sm">
                  
                  <li>
                    <Link to="/" className="relative group hover:text-white transition-colors">
                      Shipping
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="relative group hover:text-white transition-colors">
                      Returns
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="relative group hover:text-white transition-colors">
                      FAQ
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ✅ Contact */}
              <div
                className="md:col-span-3 opacity-0 animate-footerFade"
                style={{ animationDelay: "0.4s" }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-5">
                  Contact
                </h4>

                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="mailto:support@shopui.com" className="flex items-center gap-3 hover:text-white transition-colors">
                      ✉ m.hassanali.ce@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+11234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                      ☎ +92 319 6573297
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      📍 Karachi , Pakistan
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* ✅ Bottom Bar */}
          <div className="border-t border-white/6 relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-600">
                © {new Date().getFullYear()} ShopUI. Crafted with precision.
              </p>

              <div className="flex items-center gap-6 text-xs">
                <Link to="/" className="relative group hover:text-white transition-colors">
                  Privacy
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/" className="relative group hover:text-white transition-colors">
                  Terms
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/" className="relative group hover:text-white transition-colors">
                  Cookies
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>

        </FadeInSection>

      </footer>

      {/* ✅ Toast */}
      <Toast />

    </div>
  );
}