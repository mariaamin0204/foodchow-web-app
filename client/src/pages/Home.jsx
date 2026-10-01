import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FoodCard from '../components/food/FoodCard';
import { FOOD_CATEGORIES } from '../utils/constants';

// Realistic Mock Data matching Reference UI
const MOCK_FOODS = [
  {
    id: 'f1',
    name: 'Special Chicken Tandoori Pizza',
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.9,
    discount: 15,
    isPopular: true,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'Loaded with grilled chicken tandoori chunks, bell peppers, melted mozzarella, and signature red sauce.'
  },
  {
    id: 'f2',
    name: 'Smokey Bacon Gourmet Burger',
    price: 12.99,
    rating: 4.7,
    discount: 0,
    isPopular: true,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    description: 'Juicy beef patty topped with smoked cheddar, crispy bacon, caramelized onions, and house barbecue sauce.'
  },
  {
    id: 'f3',
    name: 'Authentic Japanese Ramen Bowl',
    price: 14.50,
    rating: 4.8,
    discount: 10,
    isPopular: false,
    category: 'asian',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Rich tonkotsu broth served with handmade noodles, tender chashu pork slice, bamboo shoots, and soft-boiled egg.'
  },
  {
    id: 'f4',
    name: 'Belgian Chocolate Cream Cake',
    price: 8.99,
    rating: 4.9,
    discount: 0,
    isPopular: true,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    description: 'Decadent layer cake made with dark Belgian chocolate fudge and velvety cream frosting.'
  }
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [location, setLocation] = useState('Karachi, Pakistan');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/menu?search=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}`);
  };

  const filteredFoods = selectedCategory === 'all'
    ? MOCK_FOODS
    : MOCK_FOODS.filter(food => food.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. HERO SECTION (Reference Dark Overlay Theme) */}
      <section className="relative bg-[#1A1818] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')` }}>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Order <span className="font-serif italic text-[#FFB800] font-normal">Food Online</span> From the <br className="hidden sm:inline"/>
            Best Restaurants
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover culinary delights delivered right to your doorstep. Hot, fresh, and hassle-free.
          </p>

          {/* Reference Search Box Bar */}
          <form onSubmit={handleSearchSubmit} className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-2 text-gray-800 border-2 border-amber-400">
            <div className="sm:col-span-4 flex items-center bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
              <span className="mr-2">📍</span>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Select Location"
                className="w-full bg-transparent text-sm focus:outline-none font-medium"
              />
            </div>
            <div className="sm:col-span-5 flex items-center bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
              <span className="mr-2">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food item, cuisine..."
                className="w-full bg-transparent text-sm focus:outline-none font-medium"
              />
            </div>
            <button
              type="submit"
              className="sm:col-span-3 bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm uppercase tracking-wider"
            >
              Search
            </button>
          </form>

          {/* Reference Stats Bar Banner */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl font-black text-[#FFB800]">137+</span>
              <span className="text-xs text-gray-300">Top Restaurants</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl font-black text-[#FFB800]">158+</span>
              <span className="text-xs text-gray-300">Coverage Cities</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl font-black text-[#FFB800]">650K+</span>
              <span className="text-xs text-gray-300">Happy Users</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl font-black text-[#FFB800]">235+</span>
              <span className="text-xs text-gray-300">Rider Fleet</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER BAR */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#E52E2E] pl-3">
            Popular Categories
          </h2>
          <Link to="/menu" className="text-sm font-semibold text-[#E52E2E] hover:underline">
            View All Categories →
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none">
          {FOOD_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm whitespace-nowrap transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#E52E2E] text-white shadow-red-200'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURED DISHES GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#FFB800] pl-3">
            Featured Dishes Today
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFoods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>

      {/* 4. PROMO BANNER SECTION */}
      <section className="py-12 my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1A1818] to-gray-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl">
            <span className="bg-[#FFB800] text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Exclusive Partner Deal
            </span>
            <h3 className="text-3xl font-black">Are you a Restaurant Owner?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join the FoodChow network today and boost your online orders with zero hassle setup.
            </p>
            <Link
              to="/reservation"
              className="inline-block bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
            >
              Register Your Restaurant Now
            </Link>
          </div>
          <div className="text-7xl">
            🍔
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;