import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationRent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { propertyDetails } = location.state || {};

  if (!propertyDetails) {
    return <div className="text-center text-red-500">No property details provided!</div>;
  }

  const handleConfirm = () => {
    alert("Your rental details have been confirmed!");
    navigate('/dashboard'); // Redirect to dashboard or homepage
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Your Details</h2>
      <div className="border p-4 rounded-lg bg-gray-100">
        <p><strong>Property Name:</strong> {propertyDetails.name}</p>
        <p><strong>Location:</strong> {propertyDetails.location}</p>
        <p><strong>Price:</strong> ${propertyDetails.price} per month</p>
        <p><strong>Start Date:</strong> {propertyDetails.startDate}</p>
        <p><strong>End Date:</strong> {propertyDetails.endDate}</p>
      </div>
      <button
        className="mt-6 bg-[#009587] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-[#00796B] w-full"
        onClick={handleConfirm}
      >
        Confirm & Proceed
      </button>
    </div>
  );
};

export default ConfirmationRent;
