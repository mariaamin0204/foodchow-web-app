import React from 'react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: 'Foodie Saver',
    price: '$4.99',
    period: '/month',
    desc: 'Perfect for regular food orderers who want free delivery.',
    features: ['Unlimited $0 Delivery Fees', '5% Cashback on orders', 'Exclusive Weekly Promo Codes', 'Priority Customer Support'],
    isPopular: false,
    btnText: 'Start 14-Day Free Trial'
  },
  {
    name: 'Restaurant Growth',
    price: '$49.99',
    period: '/month',
    desc: 'For restaurant owners looking to boost online orders.',
    features: ['Custom Online Storefront', '0% Commission on first 100 orders', 'Live Rider Tracking Integration', 'Detailed Sales Analytics'],
    isPopular: true,
    btnText: 'Register Restaurant'
  },
  {
    name: 'Enterprise Franchise',
    price: '$149.99',
    period: '/month',
    desc: 'For multi-location chains & franchise brands.',
    features: ['Dedicated Account Manager', 'Custom API Integration', 'Multi-Branch Inventory Sync', '24/7 VIP Phone Support'],
    isPopular: false,
    btnText: 'Contact Sales'
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900">Simple & Transparent Pricing</h1>
        <p className="text-gray-500 text-sm">Choose the plan that fits your appetite or business growth goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-3xl p-8 shadow-sm border flex flex-col justify-between relative ${
              plan.isPopular ? 'border-[#E52E2E] shadow-xl ring-2 ring-[#E52E2E]/20' : 'border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E52E2E] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-xs text-gray-500">{plan.desc}</p>
              <div className="pt-2">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-400 font-medium">{plan.period}</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/reservation"
                className={`w-full block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.isPopular
                    ? 'bg-[#E52E2E] hover:bg-[#C42424] text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {plan.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;