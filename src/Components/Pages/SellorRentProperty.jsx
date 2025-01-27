import React from "react";
import { Link } from "react-router-dom";

const SellorRentProperty = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Card Container */}
      <div className="flex items-center space-x-16 justify-between px-8 py-6 max-w-4xl">
        {/* Text Section (Left Side) */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sell or Rent your Property For Free
          </h2>
        </div>
        {/* Link Section (Right Side) */}
        <div className="flex-shrink-0 text-right">
          <p className="text-sm text-gray-500">
            Looking for a property?{" "}
            <Link
              to="/browse-properties"
              className="text-[#009587] font-medium underline"
            >
              Click here
            </Link>
          </p>
        </div>
      </div>

      {/* Why Post Through Us Section */}
      <div className="max-w-4xl w-full mt-8 px-8 py-6 bg-white shadow-lg rounded-2xl">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Why Post through us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-[#009587]">Zero</div>
            <p className="text-gray-600">Zero Brokerage</p>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-[#009587]">Fast</div>
            <p className="text-gray-600">Faster Tenants</p>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-[#009587]">Connections</div>
            <p className="text-gray-600">
              10 Lac tenants/buyers connections
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-[#009587]">Trust</div>
            <p className="text-gray-600">30 Lac+ Home Owners Trust Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellorRentProperty;
