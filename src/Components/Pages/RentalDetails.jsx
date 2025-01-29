import React, { useState } from 'react'

const RentalDetails = () => {
    const [rentalType, setRentalType] = useState('rent');
    const [rentNegotiable, setRentNegotiable] = useState(false)

    const handleRentalTypeChange = (e) => {
        setRentalType(e.target.value);
    };

    const handleRentNegotiableChange = () => {
        setRentNegotiable(!rentNegotiable);
    };
    return (
        <div>
            <h1 className="text-sm font-semibold  text-[#009587]">Provide rental details about your property
            </h1>
            <div className="border-t border-gray-300 my-4"></div>

            <div className='mt-5'>
                <span className='block text-gray-600  text-sm font-bold mb-2'>Property available for
                </span>
                <div className="mb-6 flex space-x-6">
                    <div>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center text-gray-500">
                                <input
                                    type="radio"
                                    value="rent"
                                    checked={rentalType === 'rent'}
                                    onChange={handleRentalTypeChange}
                                    className="mr-2"
                                />
                                Rent
                            </label>
                            <label className="flex items-center text-gray-500">
                                <input
                                    type="radio"
                                    value="lease"
                                    checked={rentalType === 'lease'}
                                    onChange={handleRentalTypeChange}
                                    className="mr-2"
                                />
                                Lease
                            </label>
                        </div>
                    </div>
                </div>

                {/* Expected Rent and Expected Deposit */}
                <div className="mb-1 flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Expected Rent *</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <span className="p-3 text-gray-600">₹</span>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                            />
                            <span className="p-3 text-gray-600">/Month</span>

                        </div>
                    </div>

                    {/* Expected Deposit */}
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Expected Deposit *</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <span className="p-3 text-gray-600">₹</span>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-2 flex items-center">
                    <input type="checkbox"
                        checked={rentNegotiable}
                        onChange={handleRentNegotiableChange}
                        className='mr-2 rounded-sm'
                    />
                    <span className="text-gray-700">Rent Negotiable</span>
                </div>

                <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Monthly Maintenance</label>
                    <select className="w-1/2 text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="Select">Select</option>
                        <option value="Maintenance Included">Maintenance Included</option>
                        <option value="Maintenance Extra">Maintenance Extra</option>
                    </select>
                </div>

                <div className="flex-1 mt-4">
                    <label className="block text-gray-700 font-medium mb-2">Available From *
                    </label>
                    <input type='date' className="w-1/2 p-4 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
                </div>

                <div className="flex-1 mt-6">
                    <label className="block text-gray-700  mb-2">Preferred Tenants*</label>

                    <div className="flex items-center text-sm space-x-6 text-gray-500">
                        {/* Option 1: Anyone */}
                        <label className="flex items-center ">
                            <input
                                type="radio"
                                value="Anyone"
                                checked={rentalType === 'Anyone'}
                                onChange={handleRentalTypeChange}
                                className="mr-2"
                            />
                            Anyone
                        </label>

                        {/* Option 2: Family */}
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="Family"
                                checked={rentalType === 'Family'}
                                onChange={handleRentalTypeChange}
                                className="mr-2"
                            />
                            Family
                        </label>

                        {/* Option 3: Bachelor Female */}
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="Bachelor Female"
                                checked={rentalType === 'Bachelor Female'}
                                onChange={handleRentalTypeChange}
                                className="mr-2"
                            />
                            Bachelor Female
                        </label>

                        {/* Option 4: Bachelor Male */}
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="Bachelor Male"
                                checked={rentalType === 'Bachelor Male'}
                                onChange={handleRentalTypeChange}
                                className="mr-2"
                            />
                            Bachelor Male
                        </label>

                        {/* Option 5: Company */}
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="Company"
                                checked={rentalType === 'Company'}
                                onChange={handleRentalTypeChange}
                                className="mr-2"
                            />
                            Company
                        </label>
                    </div>
                </div>


                <div className="flex space-x-6 mt-4">
                    {/* Furnishing */}
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Furnishing*</label>
                        <select className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50">
                            <option value="Select">Select</option>
                            <option value="Fully Furnished">Fully Furnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                        </select>
                    </div>

                    {/* Parking */}
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Parking*</label>
                        <select className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50">
                            <option value="Select" >Select</option>
                            <option value="Bike">Bike</option>
                            <option value="Car">Car</option>
                            <option value="Both">Both</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                </div>



                {/* Description */}
                <div className="mt-6">
                    <label className="block text-gray-700 font-medium mb-2">Description*</label>
                    <textarea
                        rows="4"
                        placeholder="Provide additional details about the property"
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50"
                    ></textarea>
                </div>

            </div>
        </div>
    )
}

export default RentalDetails