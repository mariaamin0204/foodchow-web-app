
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/helpers';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  // Dynamic restaurant determination
  const getRestaurantName = (item) => {
    if (item?.restaurantName) return item.restaurantName;
    if (item?.restaurant_name) return item.restaurant_name;
    if (item?.restaurant) return item.restaurant;
    if (item?.vendor) return item.vendor;

    const cat = (item?.category || item?.name || '').toLowerCase();
    if (cat.includes('burger')) return 'The Burger Shack';
    if (cat.includes('pizza')) return 'Broadway Pizza';
    if (cat.includes('ramen') || cat.includes('japanese') || cat.includes('authentic')) return 'Tokyo Kitchen';
    if (cat.includes('soup') || cat.includes('chinese') || cat.includes('szechuan')) return 'Wok & Roll';
    if (cat.includes('karahi') || cat.includes('pakistani')) return 'Kolachi Restaurant';
    if (cat.includes('kabab') || cat.includes('bbq') || cat.includes('beef')) return 'BBQ Tonight';
    if (cat.includes('cake') || cat.includes('dessert')) return 'Sweet Crumbs Bakery';
    
    return 'Gourmet Kitchen';
  };

  const restaurantDisplayName = getRestaurantName(food);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group overflow-hidden">
      {/* Image Container with Badges */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={food?.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'}
          alt={food?.name || 'Dish'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {food?.isPopular && (
          <span className="absolute top-3 left-3 bg-[#FFB800] text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
            ⭐ Popular
          </span>
        )}
        {food?.discount > 0 && (
          <span className="absolute top-3 right-3 bg-[#E52E2E] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {food.discount}% OFF
          </span>
        )}
      </div>

      {/* Card Content Wrapper */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
        <div>
          {/* Restaurant Name Header */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
            <span className="font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 truncate max-w-[150px]">
              📍 {restaurantDisplayName}
            </span>
            <span className="text-gray-400 shrink-0">⏱️ 20-30 min</span>
          </div>

          <div className="flex justify-between items-start mb-1 gap-2">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#E52E2E] transition-colors line-clamp-1">
              <Link to={`/food/${food?.id}`}>{food?.name}</Link>
            </h3>
            <span className="flex items-center text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 shrink-0">
              ★ {food?.rating || '4.5'}
            </span>
          </div>
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {food?.description || 'Delicious meal prepared fresh with organic and high-quality ingredients.'}
          </p>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xl font-extrabold text-gray-900">
              {formatCurrency(food?.price || 0)}
            </span>
            {food?.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-2">
                {formatCurrency(food.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(food)}
            className="bg-gray-900 hover:bg-[#E52E2E] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow hover:shadow-md flex items-center gap-1.5 active:scale-95"
          >
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;