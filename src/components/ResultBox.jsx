import React from 'react'

const ResultBox = () => {
  return (
    <div className="relative ">
    <h2 className="text-xl font-semibold text-blue-600 p-4">Results</h2>
    <div className="absolute left-2 bottom-0 h-2 w-20 bg-blue-600"></div>
    <div className="absolute left-2 bottom-0 h-1 w-full bg-gray-300"></div>
  </div>
  )
}

export default ResultBox;