import React from "react";

const LocalityDetails = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* City */}
      <div className="border-t border-gray-300 my-4"></div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">City *</label>
        <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
          <option>Pune</option>
        </select>
      </div>

      {/* Locality */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Locality *</label>
        <input
          type="text"
          placeholder="Enter location / society name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {/* GPS Location */}
      <div className="mb-6 flex items-center space-x-3">
        <button className="flex items-center text-blue-600 font-medium hover:underline transition-all duration-200">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="GPS"
            className="w-6 h-6 mr-2"
          />
          Use Current Location
        </button>
      </div>

      {/* Landmark / Street */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Landmark / Street *</label>
        <input
          type="text"
          placeholder="e.g. Evergreen street"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {/* ExpertMark Locality on Map */}
      <div className="mt-8">
        <h3 className="text-md mb-3 flex items-center space-x-2 text-gray-700">
          <img src="https://assets.nobroker.in/common/img/location_picker.png" alt="Location Picker" className="w-6 h-6" />
          <span>Mark Locality on Map</span>
        </h3>
        <p className="text-gray-600 text-sm mb-5">
          Set property location by using the search box and moving the map.
        </p>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search your society or nearest landmark"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 mb-4"
        />

        {/* Placeholder for Map */}
        <div className="mt-4 w-full h-72 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner">
          <p className="text-gray-500 text-lg">[Map will be embedded here]</p>
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LocalityDetails;
