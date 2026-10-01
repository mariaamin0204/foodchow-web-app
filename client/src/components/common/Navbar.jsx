

// import React, { useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { useCart } from '../../context/CartContext'; // Dynamic Cart Context

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // Dynamic Auth Context State
//   const { currentUser, logout } = useAuth();
  
//   // Dynamic Cart Context State
//   const { cartItems } = useCart();

//   // Cart items ki live count calculation (Automatic 1, 2, 3...)
//   const totalCartCount = cartItems?.reduce((acc, item) => acc + (item.quantity || 1), 0) || 0;
  
//   // Sirf is email address ko Admin Dashboard button dikhega
//   const isAdmin = currentUser?.email === 'mariaamin0204@gmail.com';

//   const handleLogout = async () => {
//     try {
//       await logout();
//       setIsProfileDropdownOpen(false);
//       navigate('/auth');
//     } catch (error) {
//       console.error('Failed to log out', error);
//     }
//   };

//   // User ke name ya email se Initial Letter extract karna (Jaise 'M')
//   const userInitial = currentUser?.displayName
//     ? currentUser.displayName.charAt(0).toUpperCase()
//     : currentUser?.email
//     ? currentUser.email.charAt(0).toUpperCase()
//     : 'U';

//   // Navigation Links Array
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Menu', path: '/menu' },
//     { name: 'Blogs', path: '/blogs' },
//     { name: 'Pricing', path: '/pricing' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
//       {/* Top Notification / Info Bar */}
//       <div className="bg-[#1A1818] text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
//         <span>📍 Express Delivery in 30 Mins | Quality Food Guaranteed</span>
//         <div className="flex gap-4">
//           <Link to="/contact" className="hover:text-amber-400 transition-colors">Support</Link>
//           <Link to="/reservation" className="hover:text-amber-400 transition-colors">Register Restaurant</Link>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* Brand Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <span className="bg-[#E52E2E] text-white text-2xl font-black italic px-3 py-1 rounded-lg tracking-wider shadow-md">
//               FoodChow
//             </span>
//           </Link>

//           {/* Desktop Navigation Links with Active Red State & Bounce Hover Effect */}
//           <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `inline-block transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-[#E52E2E] ${
//                     isActive
//                       ? 'text-[#E52E2E] font-bold border-b-2 border-[#E52E2E] pb-0.5'
//                       : 'text-gray-700'
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* User Actions & Cart */}
//           <div className="hidden md:flex items-center gap-5">
//             {/* Cart Icon Button with Dynamic Live Badge */}
//             <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#E52E2E] transition-all transform hover:-translate-y-1">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               {totalCartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#E52E2E] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
//                   {totalCartCount > 99 ? '99+' : totalCartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Direct Admin Panel Button (Desktop) */}
//             {isAdmin && (
//               <Link
//                 to="/admin"
//                 className="bg-gray-900 hover:bg-[#E52E2E] text-white text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-sm"
//               >
//                 Admin Dashboard
//               </Link>
//             )}

//             {/* Auth Dropdown or Login Button */}
//             {currentUser ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//                   className="flex items-center gap-2 p-1 rounded-full border border-gray-200 hover:border-[#E52E2E] transition-colors"
//                 >
//                   {currentUser.photoURL ? (
//                     <img
//                       src={currentUser.photoURL}
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.displayName || 'User')}&background=E52E2E&color=ffffff&bold=true`;
//                       }}
//                       alt="User Profile"
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-9 h-9 rounded-full bg-[#8B5CF6] text-white font-bold flex items-center justify-center text-sm shadow-sm">
//                       {userInitial}
//                     </div>
//                   )}
//                   <span className="font-semibold text-sm text-gray-800 pr-2">
//                     {currentUser.displayName || currentUser.email?.split('@')[0]}
//                   </span>
//                 </button>

//                 {isProfileDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50">
//                     <Link 
//                       to="/profile" 
//                       onClick={() => setIsProfileDropdownOpen(false)}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                     >
//                       My Profile
//                     </Link>

//                     {/* Admin Link inside Profile Dropdown */}
//                     {isAdmin && (
//                       <Link 
//                         to="/admin"
//                         onClick={() => setIsProfileDropdownOpen(false)}
//                         className="block px-4 py-2 text-sm text-[#E52E2E] font-bold hover:bg-red-50 border-t border-gray-100 mt-1 pt-2"
//                       >
//                         Admin Dashboard
//                       </Link>
//                     )}

//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
//                     >
//                       Sign Out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 to="/auth"
//                 className="bg-[#E52E2E] hover:bg-[#C42424] text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
//               >
//                 Sign In
//               </Link>
//             )}
//           </div>

//           {/* Mobile Hamburger Button & Mobile Cart Icon */}
//           <div className="md:hidden flex items-center gap-4">
//             <Link to="/cart" className="relative p-1 text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               {totalCartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#E52E2E] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
//                   {totalCartCount > 99 ? '99+' : totalCartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 `block py-2 font-medium transition-colors ${
//                   isActive ? 'text-[#E52E2E] font-bold' : 'text-gray-800'
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
          
//           {/* Admin Link inside Mobile Menu */}
//           {isAdmin && (
//             <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#E52E2E] font-bold">Admin Dashboard</Link>
//           )}

//           <div className="pt-2 border-t border-gray-100">
//             {currentUser ? (
//               <>
//                 <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-800 font-medium">Profile</Link>
//                 <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-800 font-medium">Orders</Link>
//                 <button onClick={handleLogout} className="block w-full text-left py-2 text-red-600 font-medium">Sign Out</button>
//               </>
//             ) : (
//               <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="block text-center bg-[#E52E2E] text-white py-2.5 rounded-lg font-semibold mt-2">Sign In</Link>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

















import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔄 Soft Refresh Check: Direct URL reload hone par Home '/' par bhejega, lekin click navigation ko interrupt nahi karega
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, []); // Run only once on initial mount

  // Context States
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();

  const totalCartCount = cartItems?.reduce((acc, item) => acc + (item.quantity || 1), 0) || 0;
  const isAdmin = currentUser?.email === 'mariaamin0204@gmail.com';

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileDropdownOpen(false);
      navigate('/auth');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const userInitial = currentUser?.displayName
    ? currentUser.displayName.charAt(0).toUpperCase()
    : currentUser?.email
    ? currentUser.email.charAt(0).toUpperCase()
    : 'U';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#1A1818] text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>📍 Express Delivery in 30 Mins | Quality Food Guaranteed</span>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-amber-400 transition-colors">Support</Link>
          <Link to="/reservation" className="hover:text-amber-400 transition-colors">Register Restaurant</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-[#E52E2E] text-white text-2xl font-black italic px-3 py-1 rounded-lg tracking-wider shadow-md">
              FoodChow
            </span>
          </Link>

          {/* Desktop Links with Active State & Up-Down Hover Bounce */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `inline-block transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-[#E52E2E] ${
                    isActive
                      ? 'text-[#E52E2E] font-bold border-b-2 border-[#E52E2E] pb-0.5'
                      : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Cart */}
          <div className="hidden md:flex items-center gap-5">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#E52E2E] transition-all transform hover:-translate-y-1">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E52E2E] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {totalCartCount > 99 ? '99+' : totalCartCount}
                </span>
              )}
            </Link>

            {isAdmin && (
              <Link
                to="/admin"
                className="bg-gray-900 hover:bg-[#E52E2E] text-white text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-sm"
              >
                Admin Dashboard
              </Link>
            )}

            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-full border border-gray-200 hover:border-[#E52E2E] transition-colors"
                >
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.displayName || 'User')}&background=E52E2E&color=ffffff&bold=true`;
                      }}
                      alt="User Profile"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-[#8B5CF6] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {userInitial}
                    </div>
                  )}
                  <span className="font-semibold text-sm text-gray-800 pr-2">
                    {currentUser.displayName || currentUser.email?.split('@')[0]}
                  </span>
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50">
                    <Link 
                      to="/profile" 
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      My Profile
                    </Link>

                    {isAdmin && (
                      <Link 
                        to="/admin"
                        onClick={() => setIsProfileDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-[#E52E2E] font-bold hover:bg-red-50 border-t border-gray-100 mt-1 pt-2"
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-[#E52E2E] hover:bg-[#C42424] text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-1 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E52E2E] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalCartCount > 99 ? '99+' : totalCartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium transition-colors ${
                  isActive ? 'text-[#E52E2E] font-bold' : 'text-gray-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {isAdmin && (
            <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[#E52E2E] font-bold">Admin Dashboard</Link>
          )}

          <div className="pt-2 border-t border-gray-100">
            {currentUser ? (
              <>
                <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-800 font-medium">Profile</Link>
                <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-800 font-medium">Orders</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 text-red-600 font-medium">Sign Out</button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="block text-center bg-[#E52E2E] text-white py-2.5 rounded-lg font-semibold mt-2">Sign In</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;