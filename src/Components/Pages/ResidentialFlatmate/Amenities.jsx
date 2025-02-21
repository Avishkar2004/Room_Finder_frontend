import React, { useState } from "react";

const Amenities = () => {
    const [attachedBathroom, setAttachedBathroom] = useState(false);
    const [acRoom, setAcRoom] = useState(false);
    const [balconyAvailable, setBalconyAvailable] = useState(false);
    const [gym, setGym] = useState(false);
    const [nonVegAllowed, setNonVegAllowed] = useState(false);
    const [smokingAllowed, setSmokingAllowed] = useState(false);
    const [drinkingAllowed, setDrinkingAllowed] = useState(false);
    const [gatedSecurity, setGatedSecurity] = useState(false);

    return (
        <div className="space-y-6 p-4">
            <div>
                <h1 className="text-sm font-semibold text-[#009587]">
                    Room Details
                </h1>
                <div className="border-t border-gray-300 my-4"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Attached Bathroom */}
                <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 space-x-3">
                    <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/bathroomIcon.svg" alt="Attached Bathroom Icon" className="h-6 w-6 min-w-6" />
                    <span className="text-gray-700 text-sm font-medium flex-grow min-w-0 truncate group-hover:overflow-visible group-hover:whitespace-normal">
                        Attached Bathroom*
                    </span>
                    <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                        Attached Bathroom
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setAttachedBathroom(false)} className={`px-2 py-1 rounded-md border text-sm transition ${!attachedBathroom ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}>No</button>
                        <button onClick={() => setAttachedBathroom(true)} className={`px-2 py-1 rounded-md border text-sm transition ${attachedBathroom ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}>Yes</button>
                    </div>
                </div>
                {/* AC Room */}
                <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 space-x-3">
                    <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/acIcon.svg" alt="AC Room Icon" className="h-6 w-6 min-w-6" />
                    <span className="text-gray-700 text-sm font-medium flex-grow min-w-0 truncate group-hover:overflow-visible group-hover:whitespace-normal">
                        AC Room*
                    </span>
                    <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                        Air Conditioned Room
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setAcRoom(false)} className={`px-2 py-1 rounded-md border text-sm transition ${!acRoom ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}>No</button>
                        <button onClick={() => setAcRoom(true)} className={`px-2 py-1 rounded-md border text-sm transition ${acRoom ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}>Yes</button>
                    </div>
                </div>
                {/* Balcony */}
                <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 space-x-3">
                    <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/balconyIcon.svg" alt="Balcony Icon" className="h-6 w-6 min-w-6" />
                    <span className="text-gray-700 text-sm font-medium flex-grow min-w-0 truncate group-hover:overflow-visible group-hover:whitespace-normal">
                        Balcony
                    </span>
                    <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                        Private Balcony
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setBalconyAvailable(false)} className={`px-2 py-1 rounded-md border text-sm transition ${!balconyAvailable ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}>No</button>
                        <button onClick={() => setBalconyAvailable(true)} className={`px-2 py-1 rounded-md border text-sm transition ${balconyAvailable ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}>Yes</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-base font-semibold text-[#009587] mb-4">Flatmate Preference</h1>

                <div className="grid grid-cols-3 gap-4">
                    {/* Non-Veg Allowed */}
                    <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-4 bg-gray-50">
                        <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/nonveg.png" alt="Non-Veg Icon" className="h-6 w-6" />
                        <span className="flex-grow text-gray-700 text-sm font-medium truncate group-hover:overflow-visible group-hover:whitespace-normal">
                            Non-Veg Allowed*
                        </span>
                        <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                            Is Non-Veg Food Allowed?
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setNonVegAllowed(false)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${!nonVegAllowed ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setNonVegAllowed(true)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${nonVegAllowed ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>

                    {/* Smoking Allowed */}
                    <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-4 bg-gray-50">
                        <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/smokingIcon.svg" alt="Smoking Icon" className="h-6 w-6" />
                        <span className="flex-grow text-gray-700 text-sm font-medium truncate group-hover:overflow-visible group-hover:whitespace-normal">
                            Smoking Allowed
                        </span>
                        <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                            Is Smoking Allowed in the Flat?
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setSmokingAllowed(false)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${!smokingAllowed ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setSmokingAllowed(true)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${smokingAllowed ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>

                    {/* Drinking Allowed */}
                    <div className="group relative flex items-center border border-gray-300 rounded-lg shadow-sm p-4 bg-gray-50">
                        <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/alcoholIcon.svg" alt="Drinking Icon" className="h-6 w-6" />
                        <span className="flex-grow text-gray-700 text-sm font-medium truncate group-hover:overflow-visible group-hover:whitespace-normal">
                            Drinking Allowed
                        </span>
                        <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-md px-2 py-1 transition">
                            Is Alcohol Consumption Allowed?
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setDrinkingAllowed(false)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${!drinkingAllowed ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"}`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setDrinkingAllowed(true)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${drinkingAllowed ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"}`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-base font-semibold text-[#009587] mb-4">
                    Additional Details for Maximum Visibility
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* Gym */}
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm bg-gray-50">
                        <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/gym_black_new.svg" alt="Gym" className="w-6 h-6" />
                        <span className="flex-grow text-center text-gray-700 text-sm font-medium">Gym*</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setGym(false)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${!gym ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"
                                    }`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setGym(true)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${gym ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"
                                    }`}
                            >
                                Yes
                            </button>
                        </div>
                    </div>

                    {/* Gated Security */}
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm bg-gray-50">
                        <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/security.png" alt="Gated Security" className="w-6 h-6" />
                        <span className="flex-grow text-center text-gray-700 text-sm font-medium">Gated Security*</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setGatedSecurity(false)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${!gatedSecurity ? "bg-[#fff0f2] border-[#fd3752] text-[#fd3752]" : "bg-white text-gray-600"
                                    }`}
                            >
                                No
                            </button>
                            <button
                                onClick={() => setGatedSecurity(true)}
                                className={`px-3 py-1 rounded-md border text-sm transition ${gatedSecurity ? "bg-[#ebfffd] text-[#159587] border-[#159587]" : "bg-white text-gray-600"
                                    }`}
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
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Water Supply</label>
                    <select className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="Select">Select</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Borewell">Borewell</option>
                        <option value="Both">Both</option>
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
            <div className="mb-1 flex space-x-2">
                <div className="flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Add Directions Tip for your tenants
                    </label>
                    <div className="border-gray-300 rounded-lg p-2">
                        <div className="flex flex-col space-y-2 w-full">
                            <div className="text-sm text-gray-500">
                                <p>Don't want calls asking for location? Add directions to reach using landmarks</p>
                            </div>
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

                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Option 1 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="lift" name="amenities" value="Lift" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="lift" className="text-gray-700">Lift</label>
                    </div>

                    {/* Option 2 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Swimming Pool" name="amenities" value="Swimming Pool" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Swimming Pool" className="text-gray-700">Swimming Pool</label>
                    </div>

                    {/* Option 3 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Club House" name="amenities" value="Club House" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Club House" className="text-gray-700">Club House</label>
                    </div>

                    {/* Option 4 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Power Backup" name="amenities" value="Power Backup" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Power Backup" className="text-gray-700">Power Backup</label>
                    </div>

                    {/* Option 5 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Park" name="amenities" value="Park" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Park" className="text-gray-700">Park</label>
                    </div>

                    {/* Option 6 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Shopping Center" name="amenities" value="Shopping Center" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Shopping Center" className="text-gray-700">Shopping Center</label>
                    </div>

                    {/* Option 7 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="House Keeping" name="amenities" value="House Keeping" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="House Keeping" className="text-gray-700">House Keeping</label>
                    </div>

                    {/* Option 8 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Intercom" name="amenities" value="Intercom" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Intercom" className="text-gray-700">Intercom</label>
                    </div>

                    {/* Option 9 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Gas Pipeline" name="amenities" value="Gas Pipeline" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Gas Pipeline" className="text-gray-700">Gas Pipeline</label>
                    </div>

                    {/* Option 10 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Sewage Treatment Plant" name="amenities" value="Sewage Treatment Plant" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Sewage Treatment Plant" className="text-gray-700">Sewage Treatment Plant</label>
                    </div>

                    {/* Option 11 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Visitor Parking" name="amenities" value="Visitor Parking" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Visitor Parking" className="text-gray-700">Visitor Parking</label>
                    </div>

                    {/* Option 12 */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="Fire Safety" name="amenities" value="Fire Safety" className="h-4 w-4 text-[#159587]" />
                        <label htmlFor="Fire Safety" className="text-gray-700">Fire Safety
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amenities;
