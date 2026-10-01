import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 3 }) => {
  const renderSkeleton = () => {
    if (type === 'card') {
      return (
        <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 animate-pulse space-y-3">
          <div className="h-44 bg-gray-200 rounded-xl w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-9 bg-gray-200 rounded-lg w-1/3"></div>
          </div>
        </div>
      );
    }
    return <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <React.Fragment key={idx}>{renderSkeleton()}</React.Fragment>
      ))}
    </div>
  );
};

export default SkeletonLoader;