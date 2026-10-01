import React, { useState, useEffect } from 'react';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // LocalStorage se saare customer orders fetch karein
    const savedOrders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    setOrders(savedOrders);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    const updated = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
    localStorage.setItem('adminOrders', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-black text-gray-900 mb-6">Customer Orders Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">Koi order receive nahi hua abhi tak.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <span className="font-bold text-gray-900">{order.customerName}</span>
                  <span className="text-xs text-gray-500 block">{order.phone} | {order.city}</span>
                </div>
                <span className="text-xs font-bold bg-red-100 text-[#E52E2E] px-3 py-1 rounded-full">
                  {order.id}
                </span>
              </div>

              <p className="text-xs text-gray-600"><strong>Address:</strong> {order.address}</p>

              {/* Order Items */}
              <div className="bg-gray-50 p-3 rounded-xl space-y-1">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-bold">Rs. {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 text-sm">
                <span className="font-black text-gray-900">Total: Rs. {order.totalAmount}</span>
                
                {/* Order Status Controller */}
                <select 
                  value={order.status} 
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="bg-gray-100 border text-xs rounded-lg px-2 py-1 font-bold"
                >
                  <option value="Pending">Pending</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;