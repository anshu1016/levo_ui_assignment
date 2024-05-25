import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { GoTriangleUp } from 'react-icons/go';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const PassedTest = ({ endpoint = [], length, searchQuery }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredEndpoints, setFilteredEndpoints] = useState(endpoint);

  useEffect(() => {
    if (searchQuery) {
      setFilteredEndpoints(endpoint.filter(ep => ep.url.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setFilteredEndpoints(endpoint);
    }
  }, [searchQuery, endpoint]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const getRandomMethod = () => {
    const methods = ['GET', 'PUT', 'POST'];
    return methods[Math.floor(Math.random() * methods.length)];
  };

  const passedTests = filteredEndpoints.map(endpoint => ({
    method: getRandomMethod(),
    endpoint: endpoint?.url,
    time: `${Math.round(endpoint?.duration / 1000)}s`,
  }));

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center px-4 py-3 bg-green-500 text-white cursor-pointer" onClick={toggleVisibility}>
        <span>
          {isVisible ? (
            <GoTriangleUp className="h-4 w-4 mr-2" />
          ) : (
            <IoIosArrowDropdownCircle className="h-4 w-4 mr-2" />
          )}
        </span>
        <h2 className="font-semibold text-lg flex items-center">
          Passed Tests ({passedTests.length} / {length})
        </h2>
      </div>
      {isVisible && (
        <div className="divide-y divide-gray-200">
          {passedTests.map((test, index) => (
            <div key={index} className="flex justify-between items-center px-4 py-2 border-r-4 border-blue-500">
              <span className="flex space-x-2">
                <span className="font-medium">{test.method}</span>
                <span className="text-gray-600">{test.endpoint}</span>
              </span>
              <span className="text-gray-500">{test.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PassedTest;
