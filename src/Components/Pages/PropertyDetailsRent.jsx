import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const PropertyDetailsRent = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="flex mt-4 bg-white p-6 rounded-lg shadow-lg w-3/4">
                {/* Left Sidebar */}
                <div className="w-1/4 p-6 rounded-l-lg shadow-lg">
                    <ul className="space-y-6">
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/HomeOutlined.png" alt="Property Details" className="w-6 h-6 mr-3" />
                            <span>Property Details</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/PinDropOutlined.png" alt="Locality Details" className="w-6 h-6 mr-3" />
                            <span>Locality Details</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Business.png" alt="Rental Details" className="w-6 h-6 mr-3" />
                            <span>Rental Details</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/KitchenOutlined.png" alt="Amenities" className="w-6 h-6 mr-3" />
                            <span>Amenities</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/LinkedCameraOutlined.png" alt="Gallery" className="w-6 h-6 mr-3" />
                            <span>Gallery</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 p-3 rounded-lg transition duration-300">
                            <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/DateRangeOutlined.png" alt="Schedule" className="w-6 h-6 mr-3" />
                            <span>Schedule</span>
                        </li>
                    </ul>
                </div>


                {/* Right Content */}
                <div className="flex-1 p-6">
                    <h1 className="text-md font-semibold mb-6">Property Details</h1>
                    <div className="border-t border-gray-300 my-4"></div>

                    {/* Property Details Form */}
                    <form>
                        <div className="space-y-6">
                            {/* Apartment Type */}
                            <div className="w-1/3">
                                <label className="block text-sm font-medium text-gray-700">Apartment Type*</label>
                                <div className="flex items-center p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                    <span className="mr-2">🏢</span>
                                    <select className="w-full p-2">
                                        <option>Select</option>
                                        <option>Apartment</option>
                                        <option>Independent House/Villa</option>
                                        <option>Gated Community Villa</option>
                                    </select>
                                </div>
                            </div>


                            {/* Type, Floor, and Total Floors in a row */}
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">BHK Type*</label>
                                    <select className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                        <option>Select</option>
                                        <option>1 BHK</option>
                                        <option>2 BHK</option>
                                        <option>3 BHK</option>
                                        <option>4 BHK</option>
                                        <option>4+ BHK</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Floor*</label>
                                    <select className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                        <option>Select</option>
                                        <option>Ground Floor</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Total Floors*</label>
                                    <select className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                        <option>Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Property Age, Facing, and Built Up Area */}
                            <div className="space-y-6">


                                <div className="grid grid-cols-2 gap-8">
                                    {/* Property Age */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Property Age*</label>
                                        <div className="flex items-center mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                            <select className="w-full p-2 bg-transparent focus:outline-none">
                                                <option className="text-gray-400">Select</option>
                                                <option>Less than a year</option>
                                                <option>1 to 3 years</option>
                                                <option>3 to 5 years</option>
                                                <option>5 to 10 years</option>
                                                <option>More than 10 years</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Facing */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Facing</label>
                                        <div className="flex items-center mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                            {/* <span className="mr-2 text-gray-500">🌅</span> */}
                                            <img src="https://www.nobroker.in/static/img/postYourProperty/icon/facing.png" alt="Property Facing" className="mr-2" />
                                            <select className="w-full p-2 bg-transparent focus:outline-none">
                                                <option className="text-gray-400">Property Facing</option>
                                                <option>North</option>
                                                <option>South</option>
                                                <option>East</option>
                                                <option>West</option>
                                                <option>North-East</option>
                                                <option>South-East</option>
                                                <option>North-West</option>
                                                <option>South-West</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Built Up Area */}
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700">Built Up Area*</label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            className="p-2 w-full mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                            placeholder="Enter Built Up Area"
                                        />
                                        <span className="ml-2">Sq.ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right Side Details */}
                <div className="w-1/4 -mt-3 p-6 bg-white shadow-md">
                    {/* Rental Agreement and No Need to Visit Government Office */}
                    <div className="flex flex-col items-center p-4 border border-gray-200">
                        <div className="flex flex-col items-center hover:shadow-sm transition-shadow duration-200 w-full">
                            <div className="text-center">
                                <span className="block text-sm text-gray-800">Rental Agreement</span>
                                <span className="text-xs text-gray-600">Home Delivered</span>
                            </div>
                            <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/rentalAgreement.png" alt="Rental Agreement" className="w-12 h-12" />
                        </div>

                        {/* No Need to Visit Government Office Section */}
                        <div className="flex flex-col items-center  w-full">
                            <div className="text-center">
                                <span className="text-xs text-gray-600">No need to visit Government office</span>
                                <span className="block text-md font-semibold mt-1 bg-green-600 px-2 py-2 text-gray-800">Get it now</span>
                            </div>
                        </div>
                    </div>

                    {/* Get Tenants Faster and Other Features */}
                    <div className="flex flex-col space-y-4 p-6 border mt-2 border-gray-200">
                        {/* Get Tenants Faster */}
                        <div className="text-center">
                            <span className="text-sm text-gray-600">Get Tenants Faster</span>
                            <span className="block text-xs text-gray-800 mt-1">Subscribe to our owner plans and find Tenants quickly and with ease</span>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {/* Privacy */}
                            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
                                <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/privacyLogo.svg" alt="Privacy" className="w-8 h-8" />
                                <span className="text-xs text-gray-800">Privacy</span>
                            </div>

                            {/* Promoted Listing */}
                            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
                                <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/promotedListing.svg" alt="Promoted Listing" className="w-8 h-8" />
                                <span className="text-xs text-gray-800">Promoted Listing</span>
                            </div>

                            {/* Social Marketing */}
                            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
                                <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/facebookLogo.svg" alt="Social Marketing" className="w-8 h-8" />
                                <span className="text-xs text-gray-800">Social Marketing</span>
                            </div>

                            {/* Price Consultation */}
                            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
                                <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/rentConsultation.svg" alt="Price Consultation" className="w-8 h-8" />
                                <span className="text-xs text-gray-800">Price Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetailsRent;
