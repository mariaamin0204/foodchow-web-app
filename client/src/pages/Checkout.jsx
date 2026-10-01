


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { formatCurrency } from '../utils/helpers';
// // 1. Firebase Firestore Imports
// import { db } from '../services/firebase'; 
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useAuth } from '../context/AuthContext';

// const Checkout = () => {
//   const { cartItems, totals, clearCart } = useCart();
//   const navigate = useNavigate();
//   const { currentUser } = useAuth(); // User login data access karne ke liye

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: '',
//     city: 'Karachi',
//     paymentMethod: 'cod'
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // 2. Firebase Firestore Me Order Document Create Karein
//       await addDoc(collection(db, 'orders'), {
//         orderId: 'ORD-' + Date.now(),
//         userId: currentUser?.uid || 'guest',
//         userEmail: currentUser?.email || 'guest@domain.com',
//         customerName: formData.fullName,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         items: cartItems,
//         totalAmount: totals.total,
//         paymentMethod: formData.paymentMethod,
//         status: 'Pending',
//         createdAt: serverTimestamp()
//       });

//       // LocalStorage me bhi save rehne dein backup ke liye
//       const newOrder = {
//         id: 'ORD-' + Date.now(),
//         customerName: formData.fullName,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         items: cartItems,
//         totalAmount: totals.total,
//         paymentMethod: formData.paymentMethod,
//         status: 'Pending',
//         date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
//       };
//       const existingOrders = JSON.parse(localStorage.getItem('adminOrders')) || [];
//       localStorage.setItem('adminOrders', JSON.stringify([newOrder, ...existingOrders]));

//       setIsSubmitting(false);
//       setIsOrderPlaced(true);
//       clearCart();
//     } catch (error) {
//       console.error("Firebase me order save karne me error aaya: ", error);
//       alert("Order place nahi ho saka: " + error.message);
//       setIsSubmitting(false);
//     }
//   };

//   if (isOrderPlaced) {
//     return (
//       <div className="min-h-[75vh] flex items-center justify-center bg-gray-50 px-4">
//         <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl text-center max-w-md w-full space-y-4 border border-gray-100">
//           <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
//             ✓
//           </div>
//           <h2 className="text-2xl font-black text-gray-900">Order Placed Successfully!</h2>
//           <p className="text-xs text-gray-500 leading-relaxed">
//             Thank you for ordering with FoodChow. Your meal is being prepared and will arrive shortly!
//           </p>
//           <div className="pt-2">
//             <button
//               onClick={() => navigate('/orders')}
//               className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold py-3 rounded-xl transition-all shadow text-sm"
//             >
//               Track Order History
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     navigate('/cart');
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
//       <h1 className="text-3xl font-black text-gray-900 border-l-4 border-[#E52E2E] pl-3">
//         Checkout & Payment
//       </h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* Shipping & Delivery Form */}
//         <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
//           <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
//             Delivery Information
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="Enter recipient name"
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="0300 1234567"
//                   className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   required
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Complete Delivery Address</label>
//               <textarea
//                 name="address"
//                 required
//                 rows="3"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="House/Apartment #, Street address, Area Landmark"
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
//               ></textarea>
//             </div>
//           </div>

//           <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 pt-4">
//             Payment Method
//           </h2>

//           <div className="space-y-3">
//             <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="cod"
//                 checked={formData.paymentMethod === 'cod'}
//                 onChange={handleChange}
//                 className="accent-[#E52E2E]"
//               />
//               <span className="text-sm font-bold text-gray-800">💵 Cash on Delivery (COD)</span>
//             </label>

//             <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="card"
//                 checked={formData.paymentMethod === 'card'}
//                 onChange={handleChange}
//                 className="accent-[#E52E2E]"
//               />
//               <span className="text-sm font-bold text-gray-800">💳 Credit / Debit Card</span>
//             </label>
//           </div>
//         </div>

//         {/* Order Summary Side Card */}
//         <div className="lg:col-span-5">
//           <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6 sticky top-28">
//             <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
//               Order Items ({cartItems.length})
//             </h2>

//             <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center text-sm">
//                   <span className="text-gray-700 font-medium">
//                     {item.name} <strong className="text-gray-900">x{item.quantity}</strong>
//                   </span>
//                   <span className="font-bold text-gray-900">{formatCurrency(item.price * item.quantity)}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-600">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span className="font-bold text-gray-900">{formatCurrency(totals.subtotal)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery</span>
//                 <span className="font-bold text-gray-900">{formatCurrency(totals.deliveryFee)}</span>
//               </div>
//               <div className="flex justify-between text-base font-black text-gray-900 border-t border-gray-100 pt-2">
//                 <span>Total Due</span>
//                 <span className="text-[#E52E2E]">{formatCurrency(totals.total)}</span>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50"
//             >
//               {isSubmitting ? 'Placing Order...' : 'Confirm & Place Order'}
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;














import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';
// 1. Firebase Firestore Imports
import { db } from '../services/firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
  const { cartItems, totals, clearCart } = useCart();
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // User login data access karne ke liye

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Karachi',
    paymentMethod: 'cod'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 2. Firebase Firestore Me Order Document Create Karein
      await addDoc(collection(db, 'orders'), {
        orderId: 'ORD-' + Date.now(),
        userId: currentUser?.uid || 'guest',
        userEmail: currentUser?.email || 'guest@domain.com',
        customerName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        items: cartItems,
        totalAmount: totals.total,
        paymentMethod: formData.paymentMethod,
        status: 'Pending',
        createdAt: serverTimestamp()
      });

      // LocalStorage me bhi save rehne dein backup ke liye
      const newOrder = {
        id: 'ORD-' + Date.now(),
        customerName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        items: cartItems,
        totalAmount: totals.total,
        paymentMethod: formData.paymentMethod,
        status: 'Pending',
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
      };
      const existingOrders = JSON.parse(localStorage.getItem('adminOrders')) || [];
      localStorage.setItem('adminOrders', JSON.stringify([newOrder, ...existingOrders]));

      setIsSubmitting(false);
      setIsOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error("Firebase me order save karne me error aaya: ", error);
      alert("Order place nahi ho saka: " + error.message);
      setIsSubmitting(false);
    }
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl text-center max-w-md w-full space-y-4 border border-gray-100">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>
          <h2 className="text-2xl font-black text-gray-900">Order Placed Successfully!</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Thank you for ordering with FoodChow. Your meal is being prepared and will arrive shortly!
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/orders')}
              className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold py-3 rounded-xl transition-all shadow text-sm"
            >
              Track Order History
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-black text-gray-900 border-l-4 border-[#E52E2E] pl-3">
        Checkout & Payment
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Shipping & Delivery Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
            Delivery Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter recipient name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0300 1234567"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Complete Delivery Address</label>
              <textarea
                name="address"
                required
                rows="3"
                value={formData.address}
                onChange={handleChange}
                placeholder="House/Apartment #, Street address, Area Landmark"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"
              ></textarea>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 pt-4">
            Payment Method
          </h2>

          <div className="space-y-3">
            {/* Active Cash on Delivery Option */}
            <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-all">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
                className="accent-[#E52E2E]"
              />
              <span className="text-sm font-bold text-gray-800">💵 Cash on Delivery (COD)</span>
            </label>

            {/* Disabled Credit / Debit Card Option */}
            <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed select-none">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  disabled
                  className="cursor-not-allowed"
                />
                <span className="text-sm font-bold text-gray-500">💳 Credit / Debit Card</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gray-200 text-gray-600 px-2.5 py-1 rounded-full border border-gray-300">
                Unavailable
              </span>
            </label>
          </div>
        </div>

        {/* Order Summary Side Card */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Order Items ({cartItems.length})
            </h2>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 font-medium">
                    {item.name} <strong className="text-gray-900">x{item.quantity}</strong>
                  </span>
                  <span className="font-bold text-gray-900">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">{formatCurrency(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-bold text-gray-900">{formatCurrency(totals.deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-gray-900 border-t border-gray-100 pt-2">
                <span>Total Due</span>
                <span className="text-[#E52E2E]">{formatCurrency(totals.total)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Placing Order...' : 'Confirm & Place Order'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;