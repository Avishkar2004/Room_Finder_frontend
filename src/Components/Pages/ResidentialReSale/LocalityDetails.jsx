import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocalityDetails = () => {
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { city, locality, landmark } = formData;
    if (!city) newErrors.city = "City Name is required";
    if (!locality) newErrors.locality = "Locality is required";
    if (!landmark) newErrors.landmark = "Landmark is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted", formData);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-sm font-semibold text-[#009587]">Provide Location Details</h1>
      <div className="border-t border-gray-300 my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* City */}
        <div>
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
        <div>
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
          <div className="flex items-center space-x-3 mt-2">
            <button className="flex items-center text-blue-600 font-medium hover:underline transition-all duration-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="GPS"
                className="w-6 h-6 mr-2"
              />
              Use Current Location
            </button>
          </div>
        </div>

        {/* Landmark / Street */}
        <div>
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
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h3 className="text-lg mb-3 flex items-center text-gray-700 font-semibold">
          <FaMapMarkerAlt className="mr-2 text-teal-600" /> Mark Locality on Map
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Set property location by using the search box and moving the map.
        </p>

        <input
          type="text"
          placeholder="Search your society or nearest landmark"
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 "
        />

        <div className="w-full h-72 mt-4 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner">
          <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed/v1/place?q=Yogeshwar+Arcade,+Near+PGI+Hotel,+New+Nana+Peth,+Pune-411002,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalityDetails;
