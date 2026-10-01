import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';

const MOCK_DETAILS = {
  f1: {
    id: 'f1',
    name: 'Special Chicken Tandoori Pizza',
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.9,
    discount: 15,
    category: 'Pizza',
    prepTime: '25-30 mins',
    calories: '650 kcal',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    description: 'Our signature pizza topped with succulent grilled chicken tandoori chunks, fresh bell peppers, diced onions, melted mozzarella, and our homemade secret red sauce base.',
    ingredients: ['Tandoori Chicken', 'Mozzarella Cheese', 'Bell Peppers', 'Red Onion', 'Signature Sauce', 'Fresh Basil'],
    reviews: [
      { id: 1, user: 'Ali Raza', rating: 5, comment: 'Absolutely incredible taste! Crust was soft and chicken was rich in flavor.' },
      { id: 2, user: 'Sara Khan', rating: 5, comment: 'Best pizza order in town. Delivered piping hot.' }
    ]
  }
};

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Fallback if ID not in mock
  const food = MOCK_DETAILS[id] || MOCK_DETAILS['f1'];

  const handleAddToCart = () => {
    addToCart(food, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Image Display */}
        <div className="lg:col-span-6 relative">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md"
          />
          {food.discount > 0 && (
            <span className="absolute top-4 left-4 bg-[#E52E2E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
              {food.discount}% OFF
            </span>
          )}
        </div>

        {/* Details & Action */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E52E2E] bg-red-50 px-3 py-1 rounded-full">
              {food.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">{food.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 font-medium">
              <span className="text-amber-500 font-bold">★ {food.rating} Rating</span>
              <span>•</span>
              <span>⏱️ {food.prepTime}</span>
              <span>•</span>
              <span>🔥 {food.calories}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{food.description}</p>

          <div>
            <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Key Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {food.ingredients.map((ing, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-3xl font-black text-gray-900">{formatCurrency(food.price)}</span>
              {food.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">{formatCurrency(food.originalPrice)}</span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 font-bold text-gray-600 hover:bg-gray-200 rounded-l-xl"
                >
                  -
                </button>
                <span className="px-4 py-2 font-bold text-gray-800 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 font-bold text-gray-600 hover:bg-gray-200 rounded-r-xl"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#E52E2E] hover:bg-[#C42424] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex-grow sm:flex-grow-0"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#FFB800] pl-3">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {food.reviews.map(rev => (
            <div key={rev.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-gray-800">{rev.user}</span>
                <span className="text-amber-500 text-xs font-bold">★ {rev.rating}.0</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;