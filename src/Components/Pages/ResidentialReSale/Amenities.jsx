import React, { useState } from "react";
import { FaDumbbell, FaBolt, FaShieldAlt } from "react-icons/fa"; // FontAwesome Icons

const Amenities = () => {
    const [bathrooms, setBathrooms] = useState(0);
    const [balcony, setBalcony] = useState(0);
    const [gym, setGym] = useState(false);
    const [gatedSecurity, setGatedSecurity] = useState(false);
    const [moreProperties, setMoreProperties] = useState(false);
    const [powerBackup, setPowerBackup] = useState("No");


    const increment = (setter) => setter((prev) => prev + 1);
    const decrement = (setter) => setter((prev) => (prev > 0 ? prev - 1 : 0));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-sm font-semibold text-[#009587]">
                    Provide additional details about your property to get maximum visibilty
                </h1>
                <div className="border-t border-gray-300 my-4"></div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {/* Bathroom(s) */}
                <div className="flex flex-col items-center">
                    <label className="block text-gray-700 font-medium mb-2">Bathroom(s)*</label>
                    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg shadow-sm p-2">
                        <button
                            onClick={() => decrement(setBathrooms)}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="text"
                            value={bathrooms}
                            readOnly
                            className="w-12 text-center p-2 border-none focus:outline-none bg-transparent"
                        />
                        <button
                            onClick={() => increment(setBathrooms)}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Balcony */}
                <div className="flex flex-col items-center">
                    <label className="block text-gray-700 font-medium mb-2">Balcony</label>
                    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg shadow-sm p-2">
                        <button
                            onClick={() => decrement(setBalcony)}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="text"
                            value={balcony}
                            readOnly
                            className="w-12 text-center p-2 border-none focus:outline-none bg-transparent"
                        />
                        <button
                            onClick={() => increment(setBalcony)}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Water Supply */}
                <div className="flex flex-col items-center">
                    <label className="block text-gray-700 font-medium mb-2">Water Supply</label>
                    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-2 w-full max-w-xs">
                        <img
                            src="https://assets.nobroker.in/static/img/postYourProperty/icon/water.png"
                            alt="Water Supply Icon"
                            className="h-6 w-6 mr-2"
                        />
                        <select className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg bg-white text-gray-600 w-full">
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                            <option value="Available on request">Available on request</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Gym, Power Backup, Gated Security */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
                {/* Gym Section */}
                <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2">
                    <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/gym_black_new.svg" alt="Gym" className="w-6 h-6" />
                    <div className="flex-grow text-xs">
                        <label className="block text-gray-700 mb-1">Gym*</label>
                        <div className="flex space-x-1">
                            <button
                                onClick={() => setGym(false)}
                                className={`px-2 py-1 text-xs rounded-md border transition-all duration-200 ${gym === false ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setGym(true)}
                                className={`px-2 py-1 text-xs rounded-md border transition-all duration-200 ${gym === true ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Power Backup Section */}
                <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2">
                    <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/powerbackup_dark.png" alt="Power Backup" className="w-6 h-6" />
                    <div className="flex-grow text-xs">
                        <label className="block text-gray-700 mb-1">Power Backup*</label>
                        <select
                            value={powerBackup}
                            onChange={(e) => setPowerBackup(e.target.value)}
                            className="border rounded-md px-2 py-1 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
                        >
                            <option value="" disabled>Select</option>
                            <option value="No">No</option>
                            <option value="Partial">Partial</option>
                            <option value="Full">Full</option>
                        </select>
                    </div>
                </div>

                {/* Gated Security Section */}
                <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2">
                    <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/security.png" alt="Gated Security" className="w-6 h-6" />
                    <div className="flex-grow text-xs">
                        <label className="block text-gray-700 mb-1">Gated Security*</label>
                        <div className="flex space-x-1">
                            <button
                                onClick={() => setGatedSecurity(false)}
                                className={`px-2 py-1 text-xs rounded-md border transition-all duration-200 ${gatedSecurity === false ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setGatedSecurity(true)}
                                className={`px-2 py-1 text-xs rounded-md border transition-all duration-200 ${gatedSecurity === true ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600 hover:bg-gray-100"}`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-1 flex space-x-4">
                <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Who will show the property?*</label>
                    <select className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="Select">Select</option>
                        <option value="Maintenance Included">Need help</option>
                        <option value="I will show">I will show</option>
                        <option value="Neighbour">Neighbour</option>
                        <option value="Friends/Relative">Friends/Relative</option>
                        <option value="Security">Security</option>
                        <option value="Tenants">Tenants</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* Expected Deposit */}
                <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Current Property Condition?</label>
                    <select className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="Select">Select</option>
                        <option value="Vacant">Vacant</option>
                        <option value="Tenant on Notice Period">Tenant on Notice Period</option>
                        <option value="New Property">New Property</option>
                        <option value="Need Help to Manage">Need Help to Manage</option>
                    </select>
                </div>
            </div>

            <div className="flex-1">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Secondary Number</label>
                <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009587] focus:border-[#009587]"
                />
            </div>

            {/* Do you have more similar units/properties available? */}
            <div className="mb-1 flex space-x-4">
                <div className="flex-2">
                    <div className="border border-gray-300 rounded-lg p-2">
                        <div className="flex items-center justify-between w-auto">
                            <label className="block text-gray-600 text-sm mb-2 mr-2">Do you have more similar <span className="font-semibold text-gray-700">units/properties</span> available?{" "}</label>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setMoreProperties(false)}
                                    className={`px-4 py-2 rounded-md border transition ${!moreProperties ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}
                                >
                                    No
                                </button>
                                <button
                                    onClick={() => setMoreProperties(true)}
                                    className={`px-4 py-2 rounded-md border transition ${moreProperties ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-1 flex space-x-2">
                <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Add Directions Tip for your buyers
                    </label>
                    <div className="border-gray-300 rounded-lg p-2">
                        <div className="flex flex-col space-y-2 w-full">
                            <input
                                type="text"
                                placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."
                                className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg border border-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 my-4"></div>
            <div>
                <label className="block text-[#999] font-semibold text-sm mb-6">
                    Select the available amenities
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {/* Club House */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="club-house" name="amenities" value="Club House" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="club-house" className="text-sm text-gray-700">Club House</label>
                    </div>

                    {/* Swimming Pool */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="swimming-pool" name="amenities" value="Swimming Pool" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="swimming-pool" className="text-sm text-gray-700">Swimming Pool</label>
                    </div>

                    {/* Lift */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="lift" name="amenities" value="Lift" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="lift" className="text-sm text-gray-700">Lift</label>
                    </div>

                    {/* Fire Safety */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="fire-safety" name="amenities" value="Fire Safety" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="fire-safety" className="text-sm text-gray-700">Fire Safety</label>
                    </div>

                    {/* Intercom */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="intercom" name="amenities" value="Intercom" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="intercom" className="text-sm text-gray-700">Intercom</label>
                    </div>

                    {/* Children Play Area */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="children-play" name="amenities" value="Children Play Area" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="children-play" className="text-sm text-gray-700">Children Play Area</label>
                    </div>

                    {/* Shopping Center */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="shopping-center" name="amenities" value="Shopping Center" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="shopping-center" className="text-sm text-gray-700">Shopping Center</label>
                    </div>

                    {/* Park */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="park" name="amenities" value="Park" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="park" className="text-sm text-gray-700">Park</label>
                    </div>

                    {/* Sewage Treatment Plant */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="sewage-treatment" name="amenities" value="Sewage Treatment Plant" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="sewage-treatment" className="text-sm text-gray-700">Sewage Treatment Plant</label>
                    </div>

                    {/* Visitor Parking */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="visitor-parking" name="amenities" value="Visitor Parking" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="visitor-parking" className="text-sm text-gray-700">Visitor Parking</label>
                    </div>

                    {/* Gas Pipeline */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="gas-pipeline" name="amenities" value="Gas Pipeline" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="gas-pipeline" className="text-sm text-gray-700">Gas Pipeline</label>
                    </div>

                    {/* Internet Provider */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="internet-provider" name="amenities" value="Internet Provider" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="internet-provider" className="text-sm text-gray-700">Internet Provider</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Amenities;
