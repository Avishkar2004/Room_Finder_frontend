import React, { useState } from "react";
const PropertyDetails = () => {
    const [apartmentType, setApartmentType] = useState("")

    const handleApartmentTypeChange = (e) => {
        setApartmentType(e.target.value);
    };
    return (
        <div className="flex-1 p-6">
            <h1 className="text-md font-semibold  text-[#009587]">Property Details</h1>
            <div className="border-t border-gray-300 my-4"></div>
            <form>
                <div className="space-y-6">
                    {/* Apartment Type */}
                    <div className="flex items-center space-x-8"> {/* Added flex and space-x for horizontal layout */}
                        <div className="w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">Apartment Type*</label>
                            <div className="flex items-center p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                <span>🏢</span>
                                <select className="w-full p-2" value={apartmentType} onChange={handleApartmentTypeChange}>
                                    <option>Select</option>
                                    <option>Apartment</option>
                                    <option>Independent House/Villa</option>
                                    <option>Gated Community Villa</option>
                                </select>
                            </div>
                        </div>
                        {/* Conditionally Render New Input for Apartment/Villa Name */}
                        {(apartmentType === 'Apartment' || apartmentType === 'Gated Community Villa') && (
                            <div className="w-[40]"> {/* Set the input box width */}
                                <label className="block text-xs font-medium text-gray-700">
                                    Apartment Name <span className="text-red-500">(Please select from dropdown)</span>*
                                </label>
                                <input
                                    type="text"
                                    className="p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                    placeholder="e.g.Ajmera Enclave"
                                />
                            </div>
                        )}
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
    )
}


export default PropertyDetails