import React from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    title: '10 Secret Spices That Make Tandoori Chicken Unforgettable',
    date: 'August 24, 2026',
    author: 'Chef Rahil',
    category: 'Culinary Secrets',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    snippet: 'Discover the traditional blend of spices and marinade techniques used in top authentic kitchens.'
  },
  {
    id: 2,
    title: 'How We Ensure Express Food Delivery Under 30 Minutes',
    date: 'August 18, 2026',
    author: 'Operations Team',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80',
    snippet: 'A deep dive into our real-time tracking algorithm and dedicated fast delivery rider fleet.'
  },
  {
    id: 3,
    title: 'Healthy Fast Food Alternatives You Must Try This Week',
    date: 'August 10, 2026',
    author: 'Nutritionist Ayesha',
    category: 'Healthy Eating',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    snippet: 'Enjoy your favorite flavors without guilt with these low-calorie, high-protein menu picks.'
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-[#1A1818] text-white rounded-3xl p-8 text-center space-y-2">
        <h1 className="text-3xl font-black">FoodChow Blog & News</h1>
        <p className="text-gray-300 text-sm">Recipes, food trends, delivery tech, and restaurant stories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                  <span className="text-[#E52E2E] font-bold uppercase">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug hover:text-[#E52E2E] cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-3">{post.snippet}</p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-semibold text-gray-700">
                <span>By {post.author}</span>
                <span className="text-[#E52E2E] cursor-pointer hover:underline">Read More →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;