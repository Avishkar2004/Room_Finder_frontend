import React, { useState } from 'react';
import { Search as SearchIcon, Room as RoomIcon, AddHomeWork as AddHomeWorkIcon } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const PropertySearch = () => {
  const [value, setValue] = useState(1); // Default to 'Rent'
  const [propertyType, setPropertyType] = useState('Full House');

  const handleChange = (newValue) => {
    setValue(newValue);
    setPropertyType('Full House');
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  // Function to render buttons based on selected tab
  const renderButtons = () => {
    switch (value) {
      case 0: // Buy
        return (
          <div className="flex items-center space-x-2 bg-[#fef0da] p-3 rounded shadow">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span className='text-sm text-gray-800'>
                Home Interiors
              </span>
            </button>
            <div className="h-6 border-l border-gray-600" /> {/* Vertical line */}
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <LocalShippingIcon className="w-4 h-4 mr-1" />
              <span className='text-sm text-gray-800'>
                45-Days Guarantee
              </span>
            </button>
          </div>
        );
      case 1: // Rent
      case 2: // Commercial
        return (
          <div className="flex items-center space-x-2 bg-[#fef0da] p-3 rounded shadow">
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <DescriptionIcon className="w-4 h-4 mr-1" />
              <span className='text-sm text-gray-800'>
                Rental Agreement
              </span>

            </button>
            <div className="h-6 border-l border-gray-600" /> {/* Vertical line */}
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <DeliveryDiningIcon className="w-4 h-4 mr-1" />
              <span className='text-sm text-gray-800'>
                Next Day Delivery
              </span>

            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-3xl mx-auto mt-4 px-2">
      {/* Header Content */}
      <h1 className="text-[32px] text-center font-[400] pt-[40px] text-[#787676] mb-[15px]">
        World's Largest NoBrokerage Property Site
      </h1>

      {/* Conditionally Rendered Buttons */}
      <div className="flex justify-center mb-4">
        {renderButtons()}
      </div>

      {/* Tabs for Property Options */}
      <div className="text-center">
        <div className="flex justify-center">
          <button
            className={`px-4 py-2 rounded font-medium ${value === 0 ? 'text-red-600 border-b-4 border-[#fd3752]' : 'text-gray-700'}`}
            onClick={() => handleChange(0)}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded font-medium ${value === 1 ? 'text-red-600 border-b-4 border-[#fd3752]' : 'text-gray-700 '}`}
            onClick={() => handleChange(1)}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded font-medium ${value === 2 ? 'text-red-600 border-b-4 border-[#fd3752]' : 'text-gray-700 '}`}
            onClick={() => handleChange(2)}
          >
            Commercial
          </button>
        </div>
      </div>

      {/* Search and Filter Options */}
      <div className="bg-white shadow rounded p-5 mb-4">
        <div className="flex space-x-2 mb-4">
          <select
            className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue="Bangalore"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search up to 3 localities"
              className="w-full p-2 pl-8 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <RoomIcon className="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-[#e3324a] text-white px-4 py-2 rounded flex items-center hover:bg-blue-700">
            <SearchIcon className="w-4 h-4 mr-1" />
            Search
          </button>
        </div>

        {/* Property Type Options */}
        <div className="flex flex-wrap gap-2 mb-2">
          {/* Radio buttons for property type */}
          {value === 2 ? (
            // Commercial Property Types
            <>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Office Space"
                  checked={propertyType === 'Office Space'}
                  onChange={() => handlePropertyTypeChange('Office Space')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">Office Space</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Shop"
                  checked={propertyType === 'Shop'}
                  onChange={() => handlePropertyTypeChange('Shop')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">Shop</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Warehouse"
                  checked={propertyType === 'Warehouse'}
                  onChange={() => handlePropertyTypeChange('Warehouse')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">Warehouse</span>
              </label>
            </>
          ) : (
            <>
              {/* Residential Property Types */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Full House"
                  checked={propertyType === 'Full House'}
                  onChange={() => handlePropertyTypeChange('Full House')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">Full House</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="PG/Hostel"
                  checked={propertyType === 'PG/Hostel'}
                  onChange={() => handlePropertyTypeChange('PG/Hostel')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">PG/Hostel</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Flatmates"
                  checked={propertyType === 'Flatmates'}
                  onChange={() => handlePropertyTypeChange('Flatmates')}
                  className="form-radio text-[#009587] focus:ring-0"
                />
                <span className="text-gray-700 font-medium">Flatmates</span>
              </label>
            </>
          )}

          {/* Conditional rendering for Property Type */}
          {propertyType === 'PG/Hostel' ? (
            <div className="flex space-x-2">
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#fd3752] focus:outline-none">
                <option value="">Shared Room</option>
                <option value="Single Room">Single Room</option>
              </select>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;













  {/* Radio buttons for property type */}
  <label className="flex items-center gap-2">
  <input
    type="radio"
    name="propertyType"
    value="Full House"
    checked={propertyType === 'Full House'}
    onChange={() => handlePropertyTypeChange('Full House')}
    className="form-radio text-[#009587] focus:ring-0"
  />
  <span className="text-gray-700 font-medium">Full House</span>
</label>
<label className="flex items-center gap-2">
  <input
    type="radio"
    name="propertyType"
    value="PG/Hostel"
    checked={propertyType === 'PG/Hostel'}
    onChange={() => handlePropertyTypeChange('PG/Hostel')}
    className="form-radio text-[#009587] focus:ring-0"
  />
  <span className="text-gray-700 font-medium">PG/Hostel</span>
</label>
<label className="flex items-center gap-2">
  <input
    type="radio"
    name="propertyType"
    value="Flatmates"
    checked={propertyType === 'Flatmates'}
    onChange={() => handlePropertyTypeChange('Flatmates')}
    className="form-radio text-[#009587] focus:ring-0"
  />
  <span className="text-gray-700 font-medium">Flatmates</span>
</label>

{/* Conditional rendering for Property Type */}
{propertyType === 'PG/Hostel' ? (
  <div className="flex space-x-2">
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue=""
    >
      <option value="">Tenant Type</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Anyone">Anyone</option>
    </select>
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue="">
      <option value="">Room Type</option>
      <option value="Single">Single Room</option>
      <option value="Double">Double Sharing</option>
      <option value="Triple">Triple Sharing</option>
      <option value="Four">Four Sharing</option>
    </select>
  </div>
) : propertyType === 'Flatmates' ? (
  <div className="flex space-x-2">
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue="">
      <option value="">Tenant Type</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue="">
      <option value="">Room Type</option>
      <option value="Single Room">Single Room</option>
      <option value="Shared Room">Shared Room</option>
    </select>
  </div>
) : (
  <div className="flex space-x-2">
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue="">
      <option value="">BHK Type</option>
      <option value="1 BHK">1 BHK</option>
      <option value="2 BHK">2 BHK</option>
      <option value="3 BHK">3 BHK</option>
    </select>
    <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-[#009587] focus:outline-none" defaultValue="">
      <option value="">Availability</option>
      <option value="Immediate">Immediate</option>
      <option value="Within a Month">Within a Month</option>
    </select>
  </div>
)}