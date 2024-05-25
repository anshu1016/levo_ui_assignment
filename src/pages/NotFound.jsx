import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFound;
