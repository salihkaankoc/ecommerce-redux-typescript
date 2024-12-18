"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Hero Bölümü */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6969654/pexels-photo-6969654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-gray-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-yellow-400 leading-tight">
            Discover the Latest Trends
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Shop the best products at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
          >
            Browse Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="flex-grow py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Featured Products
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Discover our handpicked selection of premium products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
              >
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 mt-3 line-clamp-2">{product.description}</p>
                <p className="text-yellow-400 mt-4 font-bold text-xl">${product.price.toFixed(2)}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-6 block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/products"
              className="bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-white py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 font-medium"
            >
              See All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
