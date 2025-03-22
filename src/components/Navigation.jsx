import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 px-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            Mebius
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/category/shoes", label: "Shop" },
              { path: "/category/shoes", label: "Shoes" },
              { path: "/category/clothing", label: "Clothing" },
              { path: "/category/accessories", label: "Accessories" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-medium hover:text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-1">
              <Search size={20} />
            </button>
            <Link to="/account" aria-label="Account" className="p-1">
              <User size={20} />
            </Link>
            <Link to="/cart" aria-label="Shopping Bag" className="p-1 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {[
              { path: "/category/shoes", label: "Shoes" },
              { path: "/category/clothing", label: "Clothing" },
              { path: "/category/accessories", label: "Accessories" },
              { path: "/new-arrivals", label: "New Arrivals" },
              { path: "/sale", label: "Sale" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
