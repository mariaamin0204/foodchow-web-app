import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full space-y-4">
        <span className="text-6xl animate-bounce inline-block">🚀</span>
        <h1 className="text-3xl font-black text-gray-900">Feature Coming Soon!</h1>
        <p className="text-xs text-gray-500 leading-relaxed">
          We are working hard to bring this feature to life. Stay tuned for exciting updates!
        </p>
        <Link
          to="/"
          className="inline-block bg-[#E52E2E] hover:bg-[#C42424] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-md"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;