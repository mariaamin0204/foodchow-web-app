import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1818] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <span className="bg-[#E52E2E] text-white text-2xl font-black italic px-3 py-1 rounded-lg inline-block">
            FoodChow
          </span>
          <p className="text-sm text-gray-400 leading-relaxed">
            Order delicious meals online from top restaurants near you. Fast delivery, hot food, and unforgettable taste right at your doorstep.
          </p>
          <div className="flex gap-4 pt-2">
            <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E52E2E] transition-colors cursor-pointer">🌐</span>
            <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E52E2E] transition-colors cursor-pointer">📘</span>
            <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E52E2E] transition-colors cursor-pointer">📸</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-[#FFB800] pl-3">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/menu" className="hover:text-amber-400 transition-colors">Browse Full Menu</Link></li>
            <li><Link to="/pricing" className="hover:text-amber-400 transition-colors">Pricing & Subscriptions</Link></li>
            <li><Link to="/blogs" className="hover:text-amber-400 transition-colors">Food Blogs & News</Link></li>
            <li><Link to="/reservation" className="hover:text-amber-400 transition-colors">Register Reservation</Link></li>
            <li><Link to="/coming-soon" className="hover:text-amber-400 transition-colors">Upcoming Locations</Link></li>
          </ul>
        </div>

        {/* Col 3: Customer Care */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-[#FFB800] pl-3">Help & Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/profile" className="hover:text-amber-400 transition-colors">My Account</Link></li>
            <li><Link to="/orders" className="hover:text-amber-400 transition-colors">Track Orders</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-[#FFB800] pl-3">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe to receive instant updates, secret discounts, and promo codes.</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#E52E2E]"
            />
            <button className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold py-2.5 rounded-lg transition-colors">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} FoodChow Platform. All Rights Reserved. Designed for premium food ordering experience.
      </div>
    </footer>
  );
};

export default Footer;