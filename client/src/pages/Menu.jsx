
// import React, { useState, useMemo, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import FoodCard from '../components/food/FoodCard';
// import { FOOD_CATEGORIES } from '../utils/constants';

// // Complete Expanded Dishes Data
// const EXPANDED_MENU_ITEMS = [
//   {
//     id: 'b1',
//     name: 'Smokey Bacon Gourmet Burger',
//     price: 12.99,
//     rating: 4.7,
//     discount: 0,
//     isPopular: true,
//     category: 'burgers',
//     image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
//     description: 'Juicy beef patty topped with smoked cheddar, crispy bacon, caramelized onions, and house BBQ sauce.'
//   },
//   {
//     id: 'b2',
//     name: 'Crispy Zinger Supreme',
//     price: 9.99,
//     rating: 4.8,
//     discount: 10,
//     isPopular: true,
//     category: 'burgers',
//     image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
//     description: 'Crispy fried chicken thigh filet with spicy mayo, iceberg lettuce, and cheese inside a brioche bun.'
//   },
//   {
//     id: 'p1',
//     name: 'Special Chicken Tandoori Pizza',
//     price: 18.50,
//     originalPrice: 22.00,
//     rating: 4.9,
//     discount: 15,
//     isPopular: true,
//     category: 'pizza',
//     image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
//     description: 'Loaded with grilled chicken tandoori chunks, bell peppers, melted mozzarella, and red sauce.'
//   },
//   {
//     id: 'p2',
//     name: 'Double Cheese Margherita',
//     price: 15.00,
//     rating: 4.6,
//     discount: 0,
//     isPopular: false,
//     category: 'pizza',
//     image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
//     description: 'Classic Italian pizza topped with rich tomato sauce, fresh basil leaves, and double mozzarella.'
//   },
//   {
//     id: 'j1',
//     name: 'Authentic Tonkotsu Ramen Bowl',
//     price: 14.50,
//     rating: 4.8,
//     discount: 10,
//     isPopular: true,
//     category: 'japanese',
//     image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
//     description: 'Rich broth served with handmade noodles, tender chashu slices, bamboo shoots, and soft egg.'
//   },
//   {
//     id: 'c1',
//     name: 'Szechuan Hot & Spicy Noodles',
//     price: 11.50,
//     rating: 4.5,
//     discount: 0,
//     isPopular: false,
//     category: 'chinese',
//     image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
//     description: 'Stir-fried wheat noodles with red chili sauce, spring onions, sesame oil, and vegetables.'
//   },
//   {
//     id: 'pk1',
//     name: 'Special Chicken Reshmi Handi',
//     price: 16.00,
//     rating: 4.9,
//     discount: 10,
//     isPopular: true,
//     category: 'pakistani',
//     image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
//     description: 'Boneless chicken cooked in a rich, creamy cashew gravy garnished with ginger and coriander.'
//   },
//   {
//     id: 'bbq1',
//     name: 'Smokey Beef Seekh Kabab',
//     price: 14.50,
//     rating: 4.8,
//     discount: 0,
//     isPopular: true,
//     category: 'bbq',
//     image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
//     description: 'Minced beef skewers seasoned with traditional herbs, grilled over open charcoal flames.'
//   },
//   {
//     id: 'pas1',
//     name: 'Creamy Fettuccine Alfredo',
//     price: 13.50,
//     rating: 4.6,
//     discount: 0,
//     isPopular: false,
//     category: 'pasta',
//     image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80', 
//     description: 'Fettuccine pasta cooked in heavy garlic cream sauce with parmesan and fresh parsley.'
//   },
//   {
//     id: 'd1',
//     name: 'Belgian Chocolate Cream Cake',
//     price: 8.99,
//     rating: 4.9,
//     discount: 0,
//     isPopular: true,
//     category: 'desserts',
//     image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
//     description: 'Decadent layer cake made with dark Belgian chocolate fudge and velvety cream frosting.'
//   },
//   {
//     id: 'dr1',
//     name: 'Fresh Mango & Berry Smoothie',
//     price: 5.50,
//     rating: 4.5,
//     discount: 0,
//     isPopular: false,
//     category: 'drinks',
//     image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
//     description: 'Refreshing blend of Alphonso mango pulp, wild berries, and Greek yogurt.'
//   },
//   {
//     id: 'ff1',
//     name: 'Loaded Cheese Fries',
//     price: 7.99,
//     rating: 4.7,
//     discount: 0,
//     isPopular: true,
//     category: 'fastfood',
//     image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',    
//     description: 'Crispy golden fries topped with melted cheddar cheese sauce, jalapenos, and bacon bits.'
//   }
// ];

// const Menu = () => {
//   const [searchParams] = useSearchParams();
//   const searchFromUrl = searchParams.get('search') || '';

//   const [searchQuery, setSearchQuery] = useState(searchFromUrl);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [sortBy, setSortBy] = useState('default');
//   const [maxPrice, setMaxPrice] = useState(30);

//   // Book State
//   const [isBookOpen, setIsBookOpen] = useState(false);

//   // Auto Open Animation on Load / URL Search Change
//   useEffect(() => {
//     if (searchFromUrl) {
//       setSearchQuery(searchFromUrl);
//       // Brief delay for rendering, then smoothly open book covers
//       const timer = setTimeout(() => {
//         setIsBookOpen(true);
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [searchFromUrl]);

//   // Filter & Search Logic
//   const filteredAndSortedFoods = useMemo(() => {
//     return EXPANDED_MENU_ITEMS
//       .filter(item => {
//         const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//         const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                               item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                               item.category.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesPrice = item.price <= maxPrice;
//         return matchesCategory && matchesSearch && matchesPrice;
//       })
//       .sort((a, b) => {
//         if (sortBy === 'price-low') return a.price - b.price;
//         if (sortBy === 'price-high') return b.price - a.price;
//         if (sortBy === 'rating') return b.rating - a.rating;
//         return 0;
//       });
//   }, [searchQuery, selectedCategory, sortBy, maxPrice]);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
//       {/* Header Title */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl sm:text-5xl font-black text-gray-900">Interactive Menu Book</h1>
//         <p className="text-gray-600 text-sm font-medium">
//           {isBookOpen ? "✨ Menu unfolded! Click 'Close Book' below to fold back." : "👇 Click on the Menu Book to open and view all food items!"}
//         </p>
//       </div>

//       {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
//       {/* 3D GATE-FOLD MENU BOOK CONTAINER                       */}
//       {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
//       <div className="relative w-full max-w-6xl mx-auto [perspective:2500px]">
        
//         <div 
//           className={`relative w-full transition-all duration-700 ease-in-out border-4 border-amber-900/30 rounded-3xl overflow-hidden ${
//             isBookOpen ? 'bg-stone-50 p-6 sm:p-8 shadow-2xl min-h-[600px]' : 'bg-stone-900 min-h-[420px] cursor-pointer shadow-2xl'
//           }`}
//           style={{ transformStyle: 'preserve-3d' }}
//           onClick={() => { if (!isBookOpen) setIsBookOpen(true); }}
//         >

//           {/* A. INSIDE MENU CONTENT (Pizzas, Burgers, Filters) */}
//           <div className={`transition-opacity duration-500 delay-200 ${
//             isBookOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
//           }`}>
            
//             {/* Header Control inside Book */}
//             <div className="flex justify-between items-center pb-4 mb-6 border-b border-stone-200">
//               <div className="flex items-center gap-2">
//                 <span className="text-xs font-black uppercase text-amber-800 tracking-widest bg-amber-100 px-3 py-1.5 rounded-full">
//                   📖 Unfolded Menu
//                 </span>
//                 {searchFromUrl && (
//                   <span className="text-xs font-bold text-gray-600 bg-stone-200 px-3 py-1.5 rounded-full">
//                     Results for: <strong className="text-[#E52E2E]">"{searchFromUrl}"</strong>
//                   </span>
//                 )}
//               </div>

//               <button
//                 onClick={(e) => { e.stopPropagation(); setIsBookOpen(false); }}
//                 className="bg-[#E52E2E] hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md"
//               >
//                 Close Menu Book ✖
//               </button>
//             </div>

//             {/* Filter Bar */}
//             <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 space-y-4 mb-8">
//               <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//                 <div className="md:col-span-6">
//                   <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Search Menu</label>
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search pizza, burgers, ramen..."
//                     className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#E52E2E]"
//                   />
//                 </div>

//                 <div className="md:col-span-3">
//                   <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Sort By</label>
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#E52E2E]"
//                   >
//                     <option value="default">Default Sorting</option>
//                     <option value="price-low">Price: Low to High</option>
//                     <option value="price-high">Price: High to Low</option>
//                     <option value="rating">Top Rated ★</option>
//                   </select>
//                 </div>

//                 <div className="md:col-span-3">
//                   <label className="block text-xs font-bold text-stone-600 uppercase mb-1">
//                     Max Price: ${maxPrice}
//                   </label>
//                   <input
//                     type="range"
//                     min="5"
//                     max="30"
//                     step="1"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(Number(e.target.value))}
//                     className="w-full accent-[#E52E2E] cursor-pointer mt-2"
//                   />
//                 </div>
//               </div>

//               {/* Categories */}
//               <div className="pt-2 border-t border-stone-100 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
//                 {FOOD_CATEGORIES.map(cat => (
//                   <button
//                     key={cat.id}
//                     onClick={() => setSelectedCategory(cat.id)}
//                     className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
//                       selectedCategory === cat.id
//                         ? 'bg-[#E52E2E] text-white shadow-md'
//                         : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
//                     }`}
//                   >
//                     {cat.icon} {cat.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Dishes Grid */}
//             {filteredAndSortedFoods.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {filteredAndSortedFoods.map(food => (
//                   <FoodCard key={food.id} food={food} />
//                 ))}
//               </div>
//             ) : (
//               <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-3">
//                 <span className="text-5xl">🍽️</span>
//                 <h3 className="text-xl font-bold text-stone-800">No Food Items Found</h3>
//                 <button
//                   onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setMaxPrice(30); }}
//                   className="mt-2 bg-[#E52E2E] text-white font-bold text-xs px-4 py-2 rounded-xl"
//                 >
//                   Reset Search & Filters
//                 </button>
//               </div>
//             )}

//           </div>

//           {/* B. LEFT DOOR COVER (Flips open smoothly) */}
//           <div 
//             className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#E52E2E] via-red-800 to-red-950 text-white shadow-2xl z-20 flex flex-col items-end justify-center pr-6 sm:pr-12 border-r-2 border-yellow-400/40 rounded-l-2xl transition-transform duration-1000 ease-in-out origin-left pointer-events-none select-none"
//             style={{
//               transform: isBookOpen ? 'rotateY(-130deg)' : 'rotateY(0deg)',
//               backfaceVisibility: 'hidden'
//             }}
//           >
//             <div className="text-right space-y-2">
//               <span className="text-4xl sm:text-6xl">📖</span>
//               <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-wider text-yellow-300">
//                 EXPLORE
//               </h2>
//               <p className="text-xs sm:text-sm text-red-100 font-bold uppercase tracking-widest">
//                 OUR MENU
//               </p>
//             </div>
//           </div>

//           {/* C. RIGHT DOOR COVER (Flips open smoothly) */}
//           <div 
//             className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-900 via-stone-900 to-black text-white shadow-2xl z-20 flex flex-col items-start justify-center pl-6 sm:pl-12 border-l-2 border-yellow-400/40 rounded-r-2xl transition-transform duration-1000 ease-in-out origin-right pointer-events-none select-none"
//             style={{
//               transform: isBookOpen ? 'rotateY(130deg)' : 'rotateY(0deg)',
//               backfaceVisibility: 'hidden'
//             }}
//           >
//             <div className="text-left space-y-2">
//               <span className="text-4xl sm:text-6xl">🔥</span>
//               <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-wider text-white">
//                 DISHES
//               </h2>
//               <p className="text-xs sm:text-sm text-stone-400 font-bold uppercase tracking-widest">
//                 FRESH & HOT
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Menu;
























import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FoodCard from '../components/food/FoodCard';
import { FOOD_CATEGORIES } from '../utils/constants';

// Complete Expanded Dishes Data
const EXPANDED_MENU_ITEMS = [
  {
    id: 'b1',
    name: 'Smokey Bacon Gourmet Burger',
    price: 12.99,
    rating: 4.7,
    discount: 0,
    isPopular: true,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    description: 'Juicy beef patty topped with smoked cheddar, crispy bacon, caramelized onions, and house BBQ sauce.'
  },
  {
    id: 'b2',
    name: 'Crispy Zinger Supreme',
    price: 9.99,
    rating: 4.8,
    discount: 10,
    isPopular: true,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy fried chicken thigh filet with spicy mayo, iceberg lettuce, and cheese inside a brioche bun.'
  },
  {
    id: 'p1',
    name: 'Special Chicken Tandoori Pizza',
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.9,
    discount: 15,
    isPopular: true,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'Loaded with grilled chicken tandoori chunks, bell peppers, melted mozzarella, and red sauce.'
  },
  {
    id: 'p2',
    name: 'Double Cheese Margherita',
    price: 15.00,
    rating: 4.6,
    discount: 0,
    isPopular: false,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    description: 'Classic Italian pizza topped with rich tomato sauce, fresh basil leaves, and double mozzarella.'
  },
  {
    id: 'j1',
    name: 'Authentic Tonkotsu Ramen Bowl',
    price: 14.50,
    rating: 4.8,
    discount: 10,
    isPopular: true,
    category: 'japanese',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Rich broth served with handmade noodles, tender chashu slices, bamboo shoots, and soft egg.'
  },
  {
    id: 'c1',
    name: 'Szechuan Hot & Spicy Noodles',
    price: 11.50,
    rating: 4.5,
    discount: 0,
    isPopular: false,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    description: 'Stir-fried wheat noodles with red chili sauce, spring onions, sesame oil, and vegetables.'
  },
  {
    id: 'pk1',
    name: 'Special Chicken Reshmi Handi',
    price: 16.00,
    rating: 4.9,
    discount: 10,
    isPopular: true,
    category: 'pakistani',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    description: 'Boneless chicken cooked in a rich, creamy cashew gravy garnished with ginger and coriander.'
  },
  {
    id: 'bbq1',
    name: 'Smokey Beef Seekh Kabab',
    price: 14.50,
    rating: 4.8,
    discount: 0,
    isPopular: true,
    category: 'bbq',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    description: 'Minced beef skewers seasoned with traditional herbs, grilled over open charcoal flames.'
  },
  {
    id: 'pas1',
    name: 'Creamy Fettuccine Alfredo',
    price: 13.50,
    rating: 4.6,
    discount: 0,
    isPopular: false,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80', 
    description: 'Fettuccine pasta cooked in heavy garlic cream sauce with parmesan and fresh parsley.'
  },
  {
    id: 'd1',
    name: 'Belgian Chocolate Cream Cake',
    price: 8.99,
    rating: 4.9,
    discount: 0,
    isPopular: true,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    description: 'Decadent layer cake made with dark Belgian chocolate fudge and velvety cream frosting.'
  },
  {
    id: 'dr1',
    name: 'Fresh Mango & Berry Smoothie',
    price: 5.50,
    rating: 4.5,
    discount: 0,
    isPopular: false,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
    description: 'Refreshing blend of Alphonso mango pulp, wild berries, and Greek yogurt.'
  },
  {
    id: 'ff1',
    name: 'Loaded Cheese Fries',
    price: 7.99,
    rating: 4.7,
    discount: 0,
    isPopular: true,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',    
    description: 'Crispy golden fries topped with melted cheddar cheese sauce, jalapenos, and bacon bits.'
  }
];

const Menu = () => {
  const [searchParams] = useSearchParams();
  const searchFromUrl = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchFromUrl);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(30);

  // Book State
  const [isBookOpen, setIsBookOpen] = useState(false);

  // Auto Open Book Animation when URL has search param
  useEffect(() => {
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setSelectedCategory('all');
      const timer = setTimeout(() => {
        setIsBookOpen(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [searchFromUrl]);

  // Handle Category Click Properly
  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setSearchQuery(''); // Direct search input clear to avoid conflict
  };

  // Filter & Search Logic
  const filteredAndSortedFoods = useMemo(() => {
    return EXPANDED_MENU_ITEMS
      .filter(item => {
        // Category Check
        const matchesCategory = (selectedCategory === 'all' || selectedCategory === 'all-dishes')
          ? true 
          : item.category.toLowerCase() === selectedCategory.toLowerCase();

        // Search Query Check
        const cleanQuery = searchQuery.trim().toLowerCase();
        const matchesSearch = !cleanQuery || 
                              item.name.toLowerCase().includes(cleanQuery) ||
                              item.description.toLowerCase().includes(cleanQuery) ||
                              item.category.toLowerCase().includes(cleanQuery);

        // Price Check
        const matchesPrice = item.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy, maxPrice]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900">Interactive Menu Book</h1>
        <p className="text-gray-600 text-sm font-medium">
          {isBookOpen ? "✨ Menu unfolded! Click 'Close Book' below to fold back." : "👇 Click on the Menu Book to open and view all food items!"}
        </p>
      </div>

      {/* 3D GATE-FOLD MENU BOOK CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto [perspective:2500px]">
        
        <div 
          className={`relative w-full transition-all duration-700 ease-in-out border-4 border-amber-900/30 rounded-3xl overflow-hidden ${
            isBookOpen ? 'bg-stone-50 p-6 sm:p-8 shadow-2xl min-h-[600px]' : 'bg-stone-900 min-h-[420px] cursor-pointer shadow-2xl'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={() => { if (!isBookOpen) setIsBookOpen(true); }}
        >

          {/* INSIDE MENU CONTENT */}
          <div className={`transition-opacity duration-500 delay-200 ${
            isBookOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
          }`}>
            
            {/* Header Control inside Book */}
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-amber-800 tracking-widest bg-amber-100 px-3 py-1.5 rounded-full">
                  📖 Unfolded Menu
                </span>
                {searchQuery && (
                  <span className="text-xs font-bold text-gray-600 bg-stone-200 px-3 py-1.5 rounded-full flex items-center gap-2">
                    Search: <strong className="text-[#E52E2E]">"{searchQuery}"</strong>
                    <button onClick={() => setSearchQuery('')} className="text-red-500 font-black ml-1">✕</button>
                  </span>
                )}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(false); }}
                className="bg-[#E52E2E] hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md"
              >
                Close Menu Book ✖
              </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Search Menu</label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pizza, burgers, ramen..."
                    className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#E52E2E]"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#E52E2E]"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated ★</option>
                  </select>
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-stone-600 uppercase mb-1">
                    Max Price: ${maxPrice}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#E52E2E] cursor-pointer mt-2"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="pt-2 border-t border-stone-100 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {FOOD_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#E52E2E] text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dishes Grid */}
            {filteredAndSortedFoods.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredAndSortedFoods.map(food => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-3">
                <span className="text-5xl">🍽️</span>
                <h3 className="text-xl font-bold text-stone-800">No Food Items Found</h3>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setMaxPrice(30); }}
                  className="mt-2 bg-[#E52E2E] text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Reset Search & Filters
                </button>
              </div>
            )}

          </div>

          {/* LEFT DOOR COVER */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#E52E2E] via-red-800 to-red-950 text-white shadow-2xl z-20 flex flex-col items-end justify-center pr-6 sm:pr-12 border-r-2 border-yellow-400/40 rounded-l-2xl transition-transform duration-1000 ease-in-out origin-left pointer-events-none select-none"
            style={{
              transform: isBookOpen ? 'rotateY(-130deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="text-right space-y-2">
              <span className="text-4xl sm:text-6xl">📖</span>
              <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-wider text-yellow-300">
                EXPLORE
              </h2>
              <p className="text-xs sm:text-sm text-red-100 font-bold uppercase tracking-widest">
                OUR MENU
              </p>
            </div>
          </div>

          {/* RIGHT DOOR COVER */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-900 via-stone-900 to-black text-white shadow-2xl z-20 flex flex-col items-start justify-center pl-6 sm:pl-12 border-l-2 border-yellow-400/40 rounded-r-2xl transition-transform duration-1000 ease-in-out origin-right pointer-events-none select-none"
            style={{
              transform: isBookOpen ? 'rotateY(130deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="text-left space-y-2">
              <span className="text-4xl sm:text-6xl">🔥</span>
              <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-wider text-white">
                DISHES
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-bold uppercase tracking-widest">
                FRESH & HOT
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Menu;