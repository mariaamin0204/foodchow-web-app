

// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [filter, setFilter] = useState('All');
//   const [selectedDay, setSelectedDay] = useState('Mon');

//   // LocalStorage se real customer orders load karein
//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem('adminOrders')) || [];
//     setOrders(savedOrders);
//   }, []);

//   // Status Change Handler
//   const handleStatusChange = (orderId, newStatus) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === orderId ? { ...order, status: newStatus } : order
//     );
//     setOrders(updatedOrders);
//     localStorage.setItem('adminOrders', JSON.stringify(updatedOrders));
//   };

//   // Delete Order Handler
//   const handleDeleteOrder = (orderId) => {
//     if (window.confirm('Kya aap is order ko delete karna chahte hain?')) {
//       const updatedOrders = orders.filter((order) => order.id !== orderId);
//       setOrders(updatedOrders);
//       localStorage.setItem('adminOrders', JSON.stringify(updatedOrders));
//     }
//   };

//   // Live Calculated Stats
//   const totalRevenue = orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);
//   const pendingOrdersCount = orders.filter((o) => o.status === 'Pending').length;
//   const completedOrdersCount = orders.filter((o) => o.status === 'Completed' || o.status === 'Delivered').length;

//   const filteredOrders = filter === 'All' 
//     ? orders 
//     : orders.filter((order) => order.status === filter);

//   // Top Analytics Summary Cards (Ref Images 1 & 2)
//   const topStats = [
//     {
//       title: 'Sells Graph',
//       value: totalRevenue > 0 ? `$${totalRevenue.toFixed(2)}` : '$8,451',
//       percentage: '↑ 3.2%',
//       isPositive: true,
//       strokeColor: '#000000',
//       fillColor: '#F3F4F6',
//       path: 'M0 30 Q 40 10, 80 35 T 160 20 T 240 10 L 240 40 L 0 40 Z',
//       strokePath: 'M0 30 Q 40 10, 80 35 T 160 20 T 240 10',
//     },
//     {
//       title: 'Total Visitors',
//       value: '3,973',
//       percentage: '↓ 4.5%',
//       isPositive: false,
//       strokeColor: '#EF4444',
//       fillColor: '#FEE2E2',
//       path: 'M0 15 Q 40 30, 80 10 T 160 25 T 240 18 L 240 40 L 0 40 Z',
//       strokePath: 'M0 15 Q 40 30, 80 10 T 160 25 T 240 18',
//     },
//     {
//       title: 'New Users',
//       value: '7,333',
//       percentage: '↑ 12.5%',
//       isPositive: true,
//       strokeColor: '#000000',
//       fillColor: '#F3F4F6',
//       path: 'M0 30 L 30 10 L 60 25 L 90 5 L 130 20 L 170 8 L 240 25 L 240 40 L 0 40 Z',
//       strokePath: 'M0 30 L 30 10 L 60 25 L 90 5 L 130 20 L 170 8 L 240 25',
//     },
//     {
//       title: 'Total Orders',
//       value: orders.length > 0 ? orders.length.toString() : '48,973',
//       percentage: '↑ 9.5%',
//       isPositive: true,
//       strokeColor: '#EF4444',
//       fillColor: '#FEE2E2',
//       path: 'M0 30 Q 30 5, 60 25 T 120 10 T 180 28 T 240 8 L 240 40 L 0 40 Z',
//       strokePath: 'M0 30 Q 30 5, 60 25 T 120 10 T 180 28 T 240 8',
//     },
//   ];

//   // Specific Dishes from Image Inputs
//   const recentRequestedItems = [
//     { name: 'Smokey Bacon Burger', price: '$12.99', id: '67384917', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100' },
//     { name: 'Crispy Zinger Burger', price: '$9.99', id: '789393819', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=100' },
//     { name: 'Special Chicken Tandoori Pizza', price: '$18.50', id: '137893137', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100' },
//     { name: 'Double Cheese Pizza', price: '$15.00', id: '235193138', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100' },
//   ];

//   const trendingOrders = [
//     { name: 'Authentic Japanese Ramen', price: '$14.50', orders: 15, income: '$217.50', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400' },
//     { name: 'Szechuan Hot Noodles', price: '$11.50', orders: 75, income: '$862.50', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400' },
//     { name: 'Special Chicken Handi', price: '$16.00', orders: 85, income: '$1,360', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
//     { name: 'Smokey Beef Seekh Kabab', price: '$14.50', orders: 175, income: '$2,537.50', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
//   ];

//   // Favourite Charts Restaurant Data
//   const favouriteData = [
//     { name: 'The Burger Shack', qty: '8528', orders: '+17.24%', profit: '7.65%' },
//     { name: 'Broadway Pizza', qty: '4867', orders: '-12.24%', profit: '9.12%' },
//     { name: 'Tokyo Kitchen', qty: '7538', orders: '+32.04%', profit: '14.29%' },
//     { name: 'Kolachi Restaurant', qty: '1614', orders: '-20.75%', profit: '12.25%' },
//     { name: 'Sweet Crumbs Bakery', qty: '7538', orders: '+32.04%', profit: '14.29%' },
//   ];

//   // Default Fallback Orders for Recently Placed Orders Table (Ref Image 4)
//   const defaultOrders = [
//     { id: '1', dish: 'Loaded Cheese Fries', customer: 'Jhon Leo', location: 'New Town', status: 'Pending', time: '10:05', amount: '$7.99' },
//     { id: '2', dish: 'Belgian Chocolate Cake', customer: 'Kristien', location: 'Old Town', status: 'Cancelled', time: '14:05', amount: '$8.99' },
//     { id: '3', dish: 'Creamy Fettuccine Pasta', customer: 'Jack Suit', location: 'Oxford Street', status: 'Delivered', time: '12:05', amount: '$13.50' },
//     { id: '4', dish: 'Fresh Berry Smoothie', customer: 'Alesdro Guitto', location: 'Church hill', status: 'Delivered', time: '12:05', amount: '$5.50' },
//     { id: '5', dish: 'Smokey Bacon Burger', customer: 'Jacob Sahwny', location: 'Palace Road', status: 'Delivered', time: '12:05', amount: '$12.99' },
//     { id: '6', dish: 'Crispy Zinger Burger', customer: 'Peter Gill', location: 'Street 21', status: 'Pending', time: '12:05', amount: '$9.99' },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-[#F4F5FA] p-4 md:p-8 font-sans text-gray-800 space-y-6">
      
//       {/* HEADER SECTION */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-extrabold text-black tracking-tight">Welcome, Anny</h1>
//         </div>
//         <div className="flex items-center gap-2">
//           {['All', 'Pending', 'Processing', 'Completed'].map((st) => (
//             <button
//               key={st}
//               onClick={() => setFilter(st)}
//               className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
//                 filter === st ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
//               }`}
//             >
//               {st}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 1. TOP STATS CARDS (Ref Image 1) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {topStats.map((card, idx) => (
//           <div key={idx} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
//             <div className="flex justify-between items-start z-10">
//               <div>
//                 <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">{card.title}</p>
//                 <h2 className="text-2xl font-black text-black mt-1">{card.value}</h2>
//               </div>
//               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${card.isPositive ? 'bg-black' : 'bg-red-500'}`}>
//                 {card.percentage}
//               </span>
//             </div>

//             {/* Bottom Sparkline Graph */}
//             <div className="absolute bottom-0 left-0 right-0 h-12 w-full">
//               <svg className="w-full h-full" viewBox="0 0 240 40" preserveAspectRatio="none">
//                 <path d={card.path} fill={card.fillColor} opacity="0.7" />
//                 <path d={card.strokePath} fill="none" stroke={card.strokeColor} strokeWidth="2" />
//               </svg>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 2. RECENT ORDERS REQUESTED & MONTHLY REVENUE (Ref Image 1) */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
//         {/* Recent Orders Requested Table */}
//         <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="font-bold text-xs uppercase tracking-wider text-black">RECENT ORDERS REQUESTED</h3>
//             <button className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-red-700 transition">
//               View All
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse text-xs">
//               <thead>
//                 <tr className="border-b border-gray-100 text-gray-900 font-bold">
//                   <th className="pb-3">Food Item</th>
//                   <th className="pb-3 text-center">Price</th>
//                   <th className="pb-3 text-right">Product ID</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {recentRequestedItems.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50 transition">
//                     <td className="py-3 flex items-center gap-3 font-semibold text-gray-800">
//                       <img src={item.img} alt={item.name} className="w-8 h-8 rounded object-cover" />
//                       {item.name}
//                     </td>
//                     <td className="py-3 text-center font-medium text-gray-700">{item.price}</td>
//                     <td className="py-3 text-right font-mono text-gray-500">{item.id}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Monthly Revenue Bars */}
//         <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="font-bold text-xs uppercase tracking-wider text-black">MONTHLY REVENUE</h3>
//             <select className="border border-gray-200 text-xs rounded px-3 py-1.5 outline-none font-medium text-gray-600">
//               <option>January</option>
//               <option>February</option>
//             </select>
//           </div>

//           <div className="space-y-4">
//             {[
//               { week: 'Week 1', width: '25%' },
//               { week: 'Week 2', width: '50%' },
//               { week: 'Week 3', width: '75%' },
//               { week: 'Week 4', width: '40%' },
//             ].map((bar, i) => (
//               <div key={i} className="space-y-1">
//                 <p className="text-xs font-semibold text-gray-700">{bar.week}</p>
//                 <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden">
//                   <div
//                     className="bg-blue-600 h-full text-[9px] text-white flex items-center justify-center font-bold transition-all duration-500"
//                     style={{ width: bar.width }}
//                   >
//                     {bar.width}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* 3. TRENDING ORDERS (Ref Image 2) */}
//       <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//         <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-5">TRENDING ORDERS</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {trendingOrders.map((card, i) => (
//             <div key={i} className="border border-gray-100 rounded-lg overflow-hidden bg-white hover:shadow-md transition">
//               <img src={card.img} alt={card.name} className="w-full h-32 object-cover" />
//               <div className="p-3">
//                 <div className="flex justify-between items-start mb-2">
//                   <h4 className="font-bold text-xs text-black">{card.name}</h4>
//                   <span className="text-xs font-bold text-emerald-600">{card.price}</span>
//                 </div>
//                 <div className="flex justify-between text-[11px] text-gray-500">
//                   <span>Orders <strong className="text-red-500 font-bold">{card.orders}</strong></span>
//                   <span>Income <strong className="text-red-500 font-bold">{card.income}</strong></span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 4. ORDER TIMING CHART & FAVOURITE CHARTS (Ref Images 2 & 3) */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
//         {/* Order Timing Chart */}
//         <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//           <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">ORDER TIMING CHART</h3>
          
//           <div className="flex flex-wrap gap-6 text-xs border-b border-gray-100 pb-3 mb-6">
//             <div>
//               <span className="block text-gray-400 text-[10px]">Total Orders</span>
//               <strong className="text-lg font-black text-black">703,49</strong>
//             </div>
//             <div>
//               <span className="block text-gray-400 text-[10px]">New Orders</span>
//               <strong className="text-lg font-black text-black">95,038</strong>
//             </div>
//             <div>
//               <span className="block text-gray-400 text-[10px]">Repeat Orders</span>
//               <strong className="text-lg font-black text-black">28,387</strong>
//             </div>
//             <div>
//               <span className="block text-gray-400 text-[10px]">Cancel Orders</span>
//               <strong className="text-lg font-black text-black">260</strong>
//             </div>
//           </div>

//           {/* Timing Bar Chart Visual */}
//           <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2 border-b border-gray-200">
//             {[
//               { time: '12 AM', pos: 7, neg: 0 },
//               { time: '2 PM', pos: 6, neg: 4 },
//               { time: '4 PM', pos: 3, neg: 2 },
//               { time: '6 PM', pos: 5, neg: 0 },
//               { time: '8 PM', pos: 4, neg: 5 },
//               { time: '10 PM', pos: 2, neg: 3 },
//               { time: '12 PM', pos: 3, neg: 0 },
//               { time: '2 PM', pos: 6, neg: 0 },
//               { time: '6 PM', pos: 8, neg: 2 },
//               { time: '8 AM', pos: 5, neg: 5 },
//               { time: '10 PM', pos: 7, neg: 3 },
//             ].map((col, idx) => (
//               <div key={idx} className="flex-1 flex flex-col items-center h-full justify-center relative">
//                 <div className="w-full max-w-[20px] flex flex-col items-center">
//                   <div className="bg-red-600 w-full rounded-t-sm" style={{ height: `${col.pos * 12}px` }}></div>
//                   {col.neg > 0 && <div className="bg-black w-full rounded-b-sm" style={{ height: `${col.neg * 10}px` }}></div>}
//                 </div>
//                 <span className="text-[9px] text-gray-400 mt-2 absolute -bottom-5">{col.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Favourite Charts & Total Earnings */}
//         <div className="lg:col-span-5 space-y-6">
//           <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">FAVOURITE CHARTS</h3>
            
//             {/* Day Selector Tabs */}
//             <div className="flex gap-1 mb-4 border-b border-gray-100 pb-3">
//               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
//                 <button
//                   key={day}
//                   onClick={() => setSelectedDay(day)}
//                   className={`flex-1 py-1 text-xs font-bold rounded ${
//                     selectedDay === day ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>

//             {/* Restaurant Data Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-xs border-collapse">
//                 <thead>
//                   <tr className="text-gray-400 border-b border-gray-100">
//                     <th className="pb-2">Restaurant Names</th>
//                     <th className="pb-2 text-center">Qty</th>
//                     <th className="pb-2 text-center">Orders</th>
//                     <th className="pb-2 text-right">Profit</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-50 font-medium">
//                   {favouriteData.map((row, i) => (
//                     <tr key={i}>
//                       <td className="py-2 text-gray-900 font-semibold">{row.name}</td>
//                       <td className="py-2 text-center text-gray-600">{row.qty}</td>
//                       <td className={`py-2 text-center font-bold ${row.orders.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
//                         {row.orders}
//                       </td>
//                       <td className="py-2 text-right text-gray-800">{row.profit}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Total Earnings Card */}
//           <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">TOTAL EARNINGS</h3>
//             <div className="grid grid-cols-2 gap-4 text-center divide-x divide-gray-100">
//               <div className="p-2">
//                 <span className="text-xl block mb-1">⭐</span>
//                 <h4 className="text-lg font-black text-black">$8,033</h4>
//                 <p className="text-[10px] font-bold text-gray-400">Today</p>
//               </div>
//               <div className="p-2">
//                 <span className="text-xl block mb-1">🏛️</span>
//                 <h4 className="text-lg font-black text-black">$3,039</h4>
//                 <p className="text-[10px] font-bold text-gray-400">Yesterday</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* 5. RECENTLY PLACED ORDERS TABLE (Ref Image 4) */}
//       <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
//         <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-6">RECENTLY PLACED ORDERS</h3>

//         {filteredOrders.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="border-b border-gray-100 text-gray-400">
//                   <th className="pb-3">Order ID</th>
//                   <th className="pb-3">Customer</th>
//                   <th className="pb-3">Phone & Address</th>
//                   <th className="pb-3">Items</th>
//                   <th className="pb-3">Status</th>
//                   <th className="pb-3 text-center">Amount</th>
//                   <th className="pb-3 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100 font-medium">
//                 {filteredOrders.map((order) => (
//                   <tr key={order.id} className="hover:bg-gray-50 transition">
//                     <td className="py-3 font-bold text-black">{order.id}</td>
//                     <td className="py-3 text-gray-900 font-bold">{order.customerName}</td>
//                     <td className="py-3 text-gray-600">
//                       <div>{order.phone}</div>
//                       <div className="text-[10px] text-gray-400">{order.address}, {order.city}</div>
//                     </td>
//                     <td className="py-3 text-gray-700">
//                       {order.items?.map((it, idx) => (
//                         <div key={idx}>{it.name} x{it.quantity}</div>
//                       ))}
//                     </td>
//                     <td className="py-3">
//                       <select
//                         value={order.status}
//                         onChange={(e) => handleStatusChange(order.id, e.target.value)}
//                         className={`text-[11px] font-bold px-2.5 py-1 rounded-md text-white outline-none ${
//                           order.status === 'Completed' || order.status === 'Delivered'
//                             ? 'bg-emerald-600'
//                             : order.status === 'Processing'
//                             ? 'bg-blue-600'
//                             : 'bg-amber-500'
//                         }`}
//                       >
//                         <option value="Pending" className="bg-white text-black">Pending</option>
//                         <option value="Processing" className="bg-white text-black">Processing</option>
//                         <option value="Completed" className="bg-white text-black">Completed</option>
//                       </select>
//                     </td>
//                     <td className="py-3 text-center font-bold text-red-600">
//                       Rs. {order.totalAmount}
//                     </td>
//                     <td className="py-3 text-right">
//                       <button
//                         onClick={() => handleDeleteOrder(order.id)}
//                         className="text-red-500 hover:text-red-700 font-bold px-2 py-1 bg-red-50 rounded border border-red-100 transition"
//                       >
//                         🗑️ Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           /* Default Reference Table Layout */
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="border-b border-gray-100 text-gray-400 font-medium">
//                   <th className="pb-3 w-12">#</th>
//                   <th className="pb-3">Dish</th>
//                   <th className="pb-3">Customer</th>
//                   <th className="pb-3">Location</th>
//                   <th className="pb-3">Status</th>
//                   <th className="pb-3">Time</th>
//                   <th className="pb-3 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100 font-semibold text-gray-800">
//                 {defaultOrders.map((ord) => (
//                   <tr key={ord.id} className="hover:bg-gray-50 transition">
//                     <td className="py-3 font-bold text-black">{ord.id}</td>
//                     <td className="py-3">{ord.dish}</td>
//                     <td className="py-3 font-medium text-gray-600">{ord.customer}</td>
//                     <td className="py-3 font-normal text-gray-500">{ord.location}</td>
//                     <td className="py-3">
//                       <span className={`text-[10px] font-bold px-2.5 py-1 rounded text-white ${
//                         ord.status === 'Pending' ? 'bg-blue-500' :
//                         ord.status === 'Cancelled' ? 'bg-black' : 'bg-emerald-600'
//                       }`}>
//                         {ord.status}
//                       </span>
//                     </td>
//                     <td className="py-3 font-normal text-gray-500">{ord.time}</td>
//                     <td className="py-3 text-right font-bold text-black">{ord.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;











import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config'; // Direct Firestore Import
import { 
  collection, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [loading, setLoading] = useState(true);

  // ✅ Firebase Firestore se SAB CUSTOMERS ke REAL-TIME orders load karein
  useEffect(() => {
    setLoading(true);
    const ordersRef = collection(db, 'orders');
    
    // Purani se nayi list sorting ke saath fetch query
    const q = query(ordersRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveOrders = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setOrders(liveOrders);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Orders Fetch Error:", error);
      // Fallback agar createdAt field na ho
      onSnapshot(ordersRef, (snap) => {
        const liveOrders = snap.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        setOrders(liveOrders);
        setLoading(false);
      });
    });

    return () => unsubscribe();
  }, []);

  // ✅ Firestore mein Order Status Update Karein
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const orderDocRef = doc(db, 'orders', orderId);
      await updateDoc(orderDocRef, { status: newStatus });
    } catch (error) {
      console.error("Status Update Error:", error);
      alert("Status update nahi ho saka!");
    }
  };

  // ✅ Firestore se Order Delete Karein
  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Kya aap is order ko permanently delete karna chahte hain?')) {
      try {
        const orderDocRef = doc(db, 'orders', orderId);
        await deleteDoc(orderDocRef);
      } catch (error) {
        console.error("Delete Error:", error);
        alert("Order delete nahi ho saka!");
      }
    }
  };

  // Live Calculated Stats
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);
  
  // Case-Insensitive Matching
  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter((order) => order.status?.toLowerCase() === filter.toLowerCase());

  // Top Analytics Summary Cards
  const topStats = [
    {
      title: 'Sells Graph',
      value: totalRevenue > 0 ? `Rs. ${totalRevenue.toFixed(2)}` : '\$8,451',
      percentage: '↑ 3.2%',
      isPositive: true,
      strokeColor: '#000000',
      fillColor: '#F3F4F6',
      path: 'M0 30 Q 40 10, 80 35 T 160 20 T 240 10 L 240 40 L 0 40 Z',
      strokePath: 'M0 30 Q 40 10, 80 35 T 160 20 T 240 10',
    },
    {
      title: 'Total Visitors',
      value: '3,973',
      percentage: '↓ 4.5%',
      isPositive: false,
      strokeColor: '#EF4444',
      fillColor: '#FEE2E2',
      path: 'M0 15 Q 40 30, 80 10 T 160 25 T 240 18 L 240 40 L 0 40 Z',
      strokePath: 'M0 15 Q 40 30, 80 10 T 160 25 T 240 18',
    },
    {
      title: 'New Users',
      value: '7,333',
      percentage: '↑ 12.5%',
      isPositive: true,
      strokeColor: '#000000',
      fillColor: '#F3F4F6',
      path: 'M0 30 L 30 10 L 60 25 L 90 5 L 130 20 L 170 8 L 240 25 L 240 40 L 0 40 Z',
      strokePath: 'M0 30 L 30 10 L 60 25 L 90 5 L 130 20 L 170 8 L 240 25',
    },
    {
      title: 'Total Live Orders',
      value: orders.length.toString(),
      percentage: '↑ 9.5%',
      isPositive: true,
      strokeColor: '#EF4444',
      fillColor: '#FEE2E2',
      path: 'M0 30 Q 30 5, 60 25 T 120 10 T 180 28 T 240 8 L 240 40 L 0 40 Z',
      strokePath: 'M0 30 Q 30 5, 60 25 T 120 10 T 180 28 T 240 8',
    },
  ];

  const recentRequestedItems = [
    { name: 'Smokey Bacon Burger', price: '\$12.99', id: '67384917', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100' },
    { name: 'Crispy Zinger Burger', price: '\$9.99', id: '789393819', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=100' },
    { name: 'Special Chicken Tandoori Pizza', price: '\$18.50', id: '137893137', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100' },
    { name: 'Double Cheese Pizza', price: '\$15.00', id: '235193138', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100' },
  ];

  const trendingOrders = [
    { name: 'Authentic Japanese Ramen', price: '\$14.50', orders: 15, income: '\$217.50', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400' },
    { name: 'Szechuan Hot Noodles', price: '\$11.50', orders: 75, income: '\$862.50', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400' },
    { name: 'Special Chicken Handi', price: '\$16.00', orders: 85, income: '\$1,360', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
    { name: 'Smokey Beef Seekh Kabab', price: '\$14.50', orders: 175, income: '\$2,537.50', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
  ];

  const favouriteData = [
    { name: 'The Burger Shack', qty: '8528', orders: '+17.24%', profit: '7.65%' },
    { name: 'Broadway Pizza', qty: '4867', orders: '-12.24%', profit: '9.12%' },
    { name: 'Tokyo Kitchen', qty: '7538', orders: '+32.04%', profit: '14.29%' },
    { name: 'Kolachi Restaurant', qty: '1614', orders: '-20.75%', profit: '12.25%' },
    { name: 'Sweet Crumbs Bakery', qty: '7538', orders: '+32.04%', profit: '14.29%' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F5FA] p-4 md:p-8 font-sans text-gray-800 space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-black tracking-tight">Welcome, Admin</h1>
        </div>
        <div className="flex items-center gap-2">
          {['All', 'Pending', 'Processing', 'Completed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                filter === st ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topStats.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
            <div className="flex justify-between items-start z-10">
              <div>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">{card.title}</p>
                <h2 className="text-2xl font-black text-black mt-1">{card.value}</h2>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${card.isPositive ? 'bg-black' : 'bg-red-500'}`}>
                {card.percentage}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-12 w-full">
              <svg className="w-full h-full" viewBox="0 0 240 40" preserveAspectRatio="none">
                <path d={card.path} fill={card.fillColor} opacity="0.7" />
                <path d={card.strokePath} fill="none" stroke={card.strokeColor} strokeWidth="2" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT ORDERS REQUESTED & MONTHLY REVENUE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-black">RECENT ORDERS REQUESTED</h3>
            <button className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-red-700 transition">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-900 font-bold">
                  <th className="pb-3">Food Item</th>
                  <th className="pb-3 text-center">Price</th>
                  <th className="pb-3 text-right">Product ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentRequestedItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-3 flex items-center gap-3 font-semibold text-gray-800">
                      <img src={item.img} alt={item.name} className="w-8 h-8 rounded object-cover" />
                      {item.name}
                    </td>
                    <td className="py-3 text-center font-medium text-gray-700">{item.price}</td>
                    <td className="py-3 text-right font-mono text-gray-500">{item.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-black">MONTHLY REVENUE</h3>
            <select className="border border-gray-200 text-xs rounded px-3 py-1.5 outline-none font-medium text-gray-600">
              <option>January</option>
              <option>February</option>
            </select>
          </div>

          <div className="space-y-4">
            {[
              { week: 'Week 1', width: '25%' },
              { week: 'Week 2', width: '50%' },
              { week: 'Week 3', width: '75%' },
              { week: 'Week 4', width: '40%' },
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <p className="text-xs font-semibold text-gray-700">{bar.week}</p>
                <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full text-[9px] text-white flex items-center justify-center font-bold transition-all duration-500"
                    style={{ width: bar.width }}
                  >
                    {bar.width}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRENDING ORDERS */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-5">TRENDING ORDERS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingOrders.map((card, i) => (
            <div key={i} className="border border-gray-100 rounded-lg overflow-hidden bg-white hover:shadow-md transition">
              <img src={card.img} alt={card.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xs text-black">{card.name}</h4>
                  <span className="text-xs font-bold text-emerald-600">{card.price}</span>
                </div>
                <div className="flex justify-between text-[11px] text-gray-500">
                  <span>Orders <strong className="text-red-500 font-bold">{card.orders}</strong></span>
                  <span>Income <strong className="text-red-500 font-bold">{card.income}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER TIMING CHART & FAVOURITE CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">ORDER TIMING CHART</h3>
          
          <div className="flex flex-wrap gap-6 text-xs border-b border-gray-100 pb-3 mb-6">
            <div>
              <span className="block text-gray-400 text-[10px]">Total Orders</span>
              <strong className="text-lg font-black text-black">703,49</strong>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px]">New Orders</span>
              <strong className="text-lg font-black text-black">95,038</strong>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px]">Repeat Orders</span>
              <strong className="text-lg font-black text-black">28,387</strong>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px]">Cancel Orders</span>
              <strong className="text-lg font-black text-black">260</strong>
            </div>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2 border-b border-gray-200">
            {[
              { time: '12 AM', pos: 7, neg: 0 },
              { time: '2 PM', pos: 6, neg: 4 },
              { time: '4 PM', pos: 3, neg: 2 },
              { time: '6 PM', pos: 5, neg: 0 },
              { time: '8 PM', pos: 4, neg: 5 },
              { time: '10 PM', pos: 2, neg: 3 },
              { time: '12 PM', pos: 3, neg: 0 },
              { time: '2 PM', pos: 6, neg: 0 },
              { time: '6 PM', pos: 8, neg: 2 },
              { time: '8 AM', pos: 5, neg: 5 },
              { time: '10 PM', pos: 7, neg: 3 },
            ].map((col, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-center relative">
                <div className="w-full max-w-[20px] flex flex-col items-center">
                  <div className="bg-red-600 w-full rounded-t-sm" style={{ height: `${col.pos * 12}px` }}></div>
                  {col.neg > 0 && <div className="bg-black w-full rounded-b-sm" style={{ height: `${col.neg * 10}px` }}></div>}
                </div>
                <span className="text-[9px] text-gray-400 mt-2 absolute -bottom-5">{col.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">FAVOURITE CHARTS</h3>
            
            <div className="flex gap-1 mb-4 border-b border-gray-100 pb-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 py-1 text-xs font-bold rounded ${
                    selectedDay === day ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100">
                    <th className="pb-2">Restaurant Names</th>
                    <th className="pb-2 text-center">Qty</th>
                    <th className="pb-2 text-center">Orders</th>
                    <th className="pb-2 text-right">Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 font-medium">
                  {favouriteData.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 text-gray-900 font-semibold">{row.name}</td>
                      <td className="py-2 text-center text-gray-600">{row.qty}</td>
                      <td className={`py-2 text-center font-bold ${row.orders.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                        {row.orders}
                      </td>
                      <td className="py-2 text-right text-gray-800">{row.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-4">TOTAL EARNINGS</h3>
            <div className="grid grid-cols-2 gap-4 text-center divide-x divide-gray-100">
              <div className="p-2">
                <span className="text-xl block mb-1">⭐</span>
                <h4 className="text-lg font-black text-black">\$8,033</h4>
                <p className="text-[10px] font-bold text-gray-400">Today</p>
              </div>
              <div className="p-2">
                <span className="text-xl block mb-1">🏛️</span>
                <h4 className="text-lg font-black text-black">\$3,039</h4>
                <p className="text-[10px] font-bold text-gray-400">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. RECENTLY PLACED LIVE ORDERS TABLE */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-xs uppercase tracking-wider text-black mb-6">
          RECENTLY PLACED ORDERS ({filteredOrders.length})
        </h3>

        {loading ? (
          <div className="text-center py-6 text-gray-500 font-bold text-xs">
            Loading Live Orders from Firebase...
          </div>
        ) : filteredOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Phone & Address</th>
                  <th className="pb-3">Items</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-center">Amount</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition">
                    <td className="py-3 font-bold text-black">{order.orderId || order.id}</td>
                    <td className="py-3 text-gray-900 font-bold">
                      {order.customerName || order.name || order.userEmail || 'Guest'}
                    </td>
                    <td className="py-3 text-gray-600">
                      <div>{order.phone || 'N/A'}</div>
                      <div className="text-[10px] text-gray-400">
                        {order.address || ''} {order.city ? `, ${order.city}` : ''}
                      </div>
                    </td>
                    <td className="py-3 text-gray-700">
                      {order.items?.map((it, idx) => (
                        <div key={idx}>{it.name || it.title} x{it.quantity || 1}</div>
                      )) || 'Food Items'}
                    </td>
                    <td className="py-3">
                      <select
                        value={order.status || 'Pending'}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md text-white outline-none cursor-pointer ${
                          order.status === 'Completed' || order.status === 'Delivered'
                            ? 'bg-emerald-600'
                            : order.status === 'Processing'
                            ? 'bg-blue-600'
                            : 'bg-amber-500'
                        }`}
                      >
                        <option value="Pending" className="bg-white text-black">Pending</option>
                        <option value="Processing" className="bg-white text-black">Processing</option>
                        <option value="Completed" className="bg-white text-black">Completed</option>
                      </select>
                    </td>
                    <td className="py-3 text-center font-bold text-red-600">
                      Rs. {order.totalAmount || order.price || 0}
                    </td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="text-red-500 hover:text-red-700 font-bold px-2 py-1 bg-red-50 rounded border border-red-100 transition"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400 font-medium text-xs">
            Abhi tak koi order place nahi hua. Naya order place karein, wo yahan live show hoga!
          </div>
        )}
      </div>

    </div>
  );
};

export default AdminDashboard;