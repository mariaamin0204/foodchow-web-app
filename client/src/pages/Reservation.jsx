import React, { useState } from 'react';

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    type: 'table_reservation',
    guests: '2',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Reservations & Partnerships
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Book Table or Partner With Us</h1>
          <p className="text-xs text-gray-500">Fill out the details below and our team will confirm instantly.</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-100 text-center space-y-2">
            <span className="text-4xl">🎉</span>
            <h3 className="font-bold text-lg">Request Received!</h3>
            <p className="text-xs">We have received your reservation request. Confirmation email has been sent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Request Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold focus:outline-none focus:border-[#E52E2E]"
                >
                  <option value="table_reservation">Table Dining Reservation</option>
                  <option value="restaurant_partner">Register New Restaurant</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md mt-4"
            >
              Submit Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reservation;