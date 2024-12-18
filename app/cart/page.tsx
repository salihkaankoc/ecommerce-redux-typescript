"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../store/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pt-28 sm:pt-32 p-4 sm:p-8 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-lg sm:text-xl text-gray-400">Your cart is empty. Start shopping now!</p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div className="space-y-2 w-full sm:w-auto">
                    <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {item.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 bg-gray-700/50 rounded-lg p-1">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-600/50 text-gray-400 hover:text-white transition-all"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-600/50 text-gray-400 hover:text-white transition-all"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-yellow-400 font-bold text-lg sm:text-xl">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-700/50 pt-6 sm:pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
