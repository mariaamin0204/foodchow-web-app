

export const APP_THEME = {
  primary: '#E52E2E',       // Crimson Red
  primaryHover: '#C42424',
  secondary: '#FFB800',     // Amber Gold
  darkHero: '#1A1818',      // Dark Wood Texture Hero
  background: '#F9FAFB',
  textMain: '#1F2937',
  textMuted: '#6B7280'
};

export const FOOD_CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: '🍽️' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
  { id: 'japanese', name: 'Japanese', icon: '🍜' },
  { id: 'chinese', name: 'Chinese', icon: '🥢' },
  { id: 'pakistani', name: 'Pakistani', icon: '🍲' },
  { id: 'bbq', name: 'BBQ / Grills', icon: '🍢' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'fastfood', name: 'Fast Food', icon: '🍟' },
];

export const ORDER_STATUS = {
  PENDING: 'Pending',
  PREPARING: 'Preparing',
  OUT_FOR_DELIVERY: 'Out for Delivery',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled'
};

export const EXPANDED_MENU_ITEMS = [
  {
    id: 'b1',
    name: 'Smokey Bacon Gourmet Burger',
    restaurantName: 'The Burger Shack',
    restaurant: 'The Burger Shack',
    price: 12.99,
    originalPrice: 14.99,
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
    restaurantName: 'KFC Express',
    restaurant: 'KFC Express',
    price: 9.99,
    originalPrice: 11.99,
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
    restaurantName: 'Broadway Pizza',
    restaurant: 'Broadway Pizza',
    price: 15.99,
    originalPrice: 18.99,
    rating: 4.6,
    discount: 15,
    isPopular: true,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional tandoori chicken chunks, onions, capsicum, and melted mozzarella cheese.'
  },
  {
    id: 'j1',
    name: 'Authentic Tonkotsu Ramen',
    restaurantName: 'Tokyo Kitchen',
    restaurant: 'Tokyo Kitchen',
    price: 14.50,
    originalPrice: 16.50,
    rating: 4.9,
    discount: 0,
    isPopular: true,
    category: 'japanese',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Rich pork broth with chewy ramen noodles, tender chashu pork, soft-boiled egg, and nori.'
  },
  {
    id: 'c1',
    name: 'Szechuan Hot & Sour Soup',
    restaurantName: 'Wok & Roll',
    restaurant: 'Wok & Roll',
    price: 8.99,
    originalPrice: 10.99,
    rating: 4.5,
    discount: 0,
    isPopular: false,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    description: 'Spicy and tangy Chinese soup loaded with shredded chicken, mushrooms, and tofu.'
  },
  {
    id: 'pk1',
    name: 'Special Mutton Karahi',
    restaurantName: 'Kolachi Restaurant',
    restaurant: 'Kolachi Restaurant',
    price: 18.99,
    originalPrice: 21.99,
    rating: 4.8,
    discount: 5,
    isPopular: true,
    category: 'pakistani',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh mutton cooked in traditional iron wok with green chilies, ginger, and tomatoes.'
  },
  {
    id: 'd1',
    name: 'Belgian Chocolate Lava Cake',
    restaurantName: 'Sweet Crumbs Bakery',
    restaurant: 'Sweet Crumbs Bakery',
    price: 8.99,
    originalPrice: 10.50,
    rating: 4.9,
    discount: 0,
    isPopular: true,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    description: 'Warm chocolate cake with a molten Belgian chocolate center served with vanilla ice cream.'
  },
  {
    id: 'bbq1',
    name: 'Smokey Beef Seekh Kabab',
    restaurantName: 'BBQ Tonight',
    restaurant: 'BBQ Tonight',
    price: 13.50,
    originalPrice: 15.00,
    rating: 4.7,
    discount: 0,
    isPopular: true,
    category: 'bbq',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    description: 'Tender minced beef skewers marinated with charcoal herbs and traditional spices.'
  }
];

export const FOOD_ITEMS = EXPANDED_MENU_ITEMS;