import React from 'react';
import { formatCurrency } from '../utils/helpers';

const MOCK_ORDERS = [
  {
    id: 'ORD-9821',
    date: 'August 28, 2026',
    status: 'Delivered',
    statusBg: 'bg-green-100 text-green-700',
    total: 31.49,
    items: ['Special Chicken Tandoori Pizza x1', 'Smokey Bacon Gourmet Burger x1']
  },
  {
    id: 'ORD-9750',
    date: 'August 15, 2026',
    status: 'Delivered',
    statusBg: 'bg-green-100 text-green-700',
    total: 14.50,
    items: ['Authentic Japanese Ramen Bowl x1']
  }
];

const Orders = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-black text-gray-900 border-l-4 border-[#E52E2E] pl-3">
        My Orders
      </h1>

      <div className="space-y-4">
        {MOCK_ORDERS.map((ord) => (
          <div key={ord.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-gray-100 pb-3">
              <div>
                <span className="font-black text-gray-900 text-lg">{ord.id}</span>
                <p className="text-xs text-gray-400">{ord.date}</p>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto ${ord.statusBg}`}>
                ● {ord.status}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-500 uppercase">Items Ordered:</span>
              <ul className="text-xs text-gray-700 list-disc list-inside">
                {ord.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-500">Total Paid</span>
              <span className="font-black text-gray-900 text-base">{formatCurrency(ord.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;