





import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Layout Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Reservation from './pages/Reservation';
import Blogs from './pages/Blogs';
import Pricing from './pages/Pricing';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';

// Protected Route Wrapper for Logged-in Users
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white text-amber-500 flex items-center justify-center font-bold text-xl">
        Loading... 🍕
      </div>
    );
  }
  
  return currentUser ? children : <Navigate to="/auth" replace />;
};

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col m-0 p-0 overflow-x-hidden">
            <Navbar />
            <main className="flex-grow w-full">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/food/:id" element={<FoodDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/contact" element={<Contact />} />

                {/* Protected Routes (Login Required) */}
                <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />

                {/* 404 Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}