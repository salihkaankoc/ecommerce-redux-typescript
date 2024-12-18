"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link 
            href="/" 
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
          >
            E-Shop
          </Link>
        </h1>

        {/* Menu */}
        <ul className="flex items-center space-x-8 text-gray-300">
          <li>
            <Link
              href="/"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 font-medium"
            >
              Products
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/cart"
              className="hover:text-yellow-400 transition-all duration-300 font-medium flex items-center p-2 rounded-full hover:bg-gray-800/50"
            >
              <FiShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
