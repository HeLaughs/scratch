import React from 'react';
import './App.css';

function App() {
  return (
    <body className="p-4 h-screen bg-gray-100 flex flex-col mt-2">
      {/* First section */}
      <div className="flex flex-col items-center bg-gray-200 gap-8 p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Hello <span className="text-purple-500">World</span></h1>
      <p className="text-lg text-gray-700">Business for exponential growth.</p>
      <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
      </div>

    {/* Second section */}
      <div className="flex flex-col items-center bg-gray-200 mb-4 gap-8 p-4 shadow-lg">
      <h2 className="text-2xl text-center font-bold text-gray-900 mb-8">Hello World</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 p-6 rounded-lg text-center">
          <div className="text-gray-900">Business Rate</div>
          <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">400K</div>
            <div className="text-gray-600">Business regulation</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">750K+</div>
            <div className="text-gray-600">Business regulation</div>
            
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">3M</div>
            <div className="text-gray-600">Business regulation</div>
          </div>
      </div>
      <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
      </div>
      {/* Third section */}
      <div className="flex flex-col items-center bg-gray-200 mb-4 gap-8 p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Hello World</h1>
      <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>

      <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg">
          <div className="text-gray-900">Business Rate</div>
          <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </div>
      {/* Fourth section */}
      <div className="flex flex-col bg-gray-200 mb-4 gap-8 p-4 shadow-lg">
      <h1 className="text-4xl font-bold text-blue-400 mb-4 text-center">Hello World</h1>
      <div className="flex justify-end">
      <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
      </div>
      </div>
    </body>
  )
};

export default App;
