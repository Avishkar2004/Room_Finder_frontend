import React, { useState } from "react";

const LocalityDetails = () => {
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
  });

  const [errors, setErrors] = useState({})


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {}
    const { city, locality, landmark } = formData
    if (!city) newErrors.city = "City Name is required"
    if (!locality) newErrors.locality = "Locality is required"
    if (!landmark) newErrors.landmark = "Landmark is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  };

  LocalityDetails.validateForm = validateForm

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form data submitted", formData)
    }
  }
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-sm font-semibold text-[#009587]">Provide Location Details</h1>
      {/* City */}
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">City *</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        >
          <option value="">Select City</option>
          <option value="Pune">Pune</option>
        </select>
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
      </div>
      {/* Locality */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Locality *</label>
        <input
          type="text"
          name="locality"
          value={formData.locality}
          onChange={handleInputChange}
          placeholder="Enter location / society name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
        {errors.locality && <p className="text-red-500 text-xs">{errors.locality}</p>}


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
          name="landmark"
          value={formData.landmark}
          onChange={handleInputChange}
          placeholder="e.g. Evergreen street"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
        {errors.landmark && <p className="text-red-500 text-xs">{errors.landmark}</p>}
      </div>

      {/* ExpertMark Locality on Map */}
      <div className="mt-8">
        <h3 className="text-md mb-3 flex items-center space-x-2 text-gray-700">
          <img
            src="https://assets.nobroker.in/common/img/location_picker.png"
            alt="Location Picker"
            className="w-6 h-6"
          />
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
    </div>
  );
};

export default LocalityDetails;
