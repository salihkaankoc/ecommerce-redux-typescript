"use client";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { RootState, AppDispatch } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [successMessage, setSuccessMessage] = useState("");

  // id'nin undefined olma durumunu kontrol et
  if (!id || Array.isArray(id)) {
    return <p className="text-red-500">Invalid product ID.</p>;
  }

  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return <p className="text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setSuccessMessage("Product added to cart!");
    setTimeout(() => setSuccessMessage(""), 3000); // 3 saniye sonra mesajı gizle
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Ürün Görseli */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-2xl shadow-lg object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Ürün Detayları */}
        <div className="flex flex-col gap-8 p-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            {product.name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            ${product.price.toFixed(2)}
          </p>

          {/* Sepete Ekle Butonu */}
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-white py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium"
          >
            Add to Cart
          </button>

          {/* Başarı Mesajı */}
          {successMessage && (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mt-4">
              <p className="text-green-400 text-center animate-fade-in">
                {successMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
