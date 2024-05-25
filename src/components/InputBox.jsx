import React from 'react';

export const InputBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Filter by endpoint..."
        className="w-full max-w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
