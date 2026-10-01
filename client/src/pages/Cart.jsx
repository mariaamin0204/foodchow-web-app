import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totals } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full space-y-4">
          <span className="text-6xl">🛒</span>
          <h2 className="text-2xl font-black text-gray-900">Your Cart is Empty</h2>
          <p className="text-xs text-gray-500">
            Looks like you haven't added any delicious food items to your cart yet.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm"
          >
            Explore Menu Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-gray-900 border-l-4 border-[#E52E2E] pl-3">
          Your Food Cart ({cartItems.length})
        </h1>
        <button
          onClick={clearCart}
          className="text-xs font-bold text-red-600 hover:text-red-800 underline"
        >
          Clear All Items
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                  <p className="text-xs text-gray-500">{formatCurrency(item.price)} each</p>
                </div>
              </div>

              {/* Quantity Selector & Item Total */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 font-bold text-gray-600 hover:bg-gray-200 rounded-l-xl"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 font-bold text-gray-600 hover:bg-gray-200 rounded-r-xl"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <span className="block font-black text-gray-900 text-lg">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">{formatCurrency(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-bold text-gray-900">{formatCurrency(totals.deliveryFee)}</span>
              </div>
              {Number(totals.discount) > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span className="font-bold">-{formatCurrency(totals.discount)}</span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-black text-gray-900">
                <span>Total Amount</span>
                <span className="text-[#E52E2E]">{formatCurrency(totals.total)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg text-center block"
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;