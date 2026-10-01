import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [name, setName] = useState(currentUser?.displayName || 'User');
  const [phone, setPhone] = useState('0300 1234567');
  const [address, setAddress] = useState('Street 5, Block 4, Clifton, Karachi');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-black text-gray-900 border-l-4 border-[#E52E2E] pl-3">
        My Profile
      </h1>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
          <div className="w-16 h-16 bg-[#E52E2E] text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-md">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <p className="text-xs text-gray-500">{currentUser?.email || 'user@example.com'}</p>
          </div>
        </div>

        {isSaved && (
          <div className="bg-green-50 text-green-700 text-xs font-bold p-3 rounded-xl border border-green-100">
            ✓ Profile details updated successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Default Delivery Address</label>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#E52E2E]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#E52E2E] hover:bg-[#C42424] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;