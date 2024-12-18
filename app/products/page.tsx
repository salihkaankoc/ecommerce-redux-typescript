"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Link from "next/link";

export default function ProductsPage() {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-10">
      <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product: any) => (
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
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {product.name}
            </h2>
            <p className="text-gray-400 mt-3 line-clamp-2">{product.description}</p>
            <p className="text-yellow-400 mt-4 font-bold text-xl">${product.price.toFixed(2)}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-6 block bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-center text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
