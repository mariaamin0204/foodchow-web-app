import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="bg-[#1A1818] text-white rounded-3xl p-8 text-center space-y-2">
        <h1 className="text-3xl font-black">Get in Touch</h1>
        <p className="text-gray-300 text-sm">Have a question or feedback? We are here to help 24/7.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <span className="text-2xl">📍</span>
            <h3 className="font-bold text-gray-900 text-sm">Our Main Hub</h3>
            <p className="text-xs text-gray-500">Main Commercial Avenue, DHA Phase 5, Karachi, Pakistan</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <span className="text-2xl">📞</span>
            <h3 className="font-bold text-gray-900 text-sm">Customer Helpline</h3>
            <p className="text-xs text-gray-500">+92 (021) 111-366-324</p>
          </div>
        </div>

        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          {sent ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center space-y-2 border border-green-100">
              <span className="text-3xl">✉️</span>
              <h3 className="font-bold text-base">Message Sent!</h3>
              <p className="text-xs">Thank you for reaching out. Our support team will reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                 className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"></input>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E52E2E]"                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E52E2E] hover:bg-[#C42424] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;