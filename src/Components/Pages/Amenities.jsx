import React, { useState } from "react";

const Amenities = () => {
    const [bathrooms, setBathrooms] = useState(0);
    const [balcony, setBalcony] = useState(0);
    const [gym, setGym] = useState(false);
    const [nonVegAllowed, setNonVegAllowed] = useState(false);
    const [gatedSecurity, setGatedSecurity] = useState(false);

    const increment = (setter) => setter((prev) => prev + 1);
    const decrement = (setter) => setter((prev) => (prev > 0 ? prev - 1 : 0));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-sm font-semibold text-[#009587]">
                    Provide additional details about your property to get maximum visibility
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

            {/* Gym, Non-Veg Allowed, Gated Security */}
            <div className="grid grid-cols-3 gap-6">
                {/* Gym */}
                <div className="flex flex-col items-center border border-gray-300">
                    <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/gym_black_new.svg" alt="Gym" />
                    <label className="block text-gray-700 font-medium mb-2">
                        Gym*</label>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setGym(false)}
                            className={`px-4 py-2 rounded-lg transition ${!gym ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            No
                        </button>
                        <button
                            onClick={() => setGym(true)}
                            className={`px-4 py-2 rounded-lg transition ${gym ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Yes
                        </button>
                    </div>
                </div>

                {/* Non-Veg Allowed */}
                <div className="flex flex-col items-center border border-gray-300">
                    <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/nonveg.png" alt="Non-veg" />
                    <label className="block text-gray-700 font-medium mb-2">
                        Non-Veg Allowed*</label>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setNonVegAllowed(false)}
                            className={`px-4 py-2 rounded-lg transition ${!nonVegAllowed ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            No
                        </button>
                        <button
                            onClick={() => setNonVegAllowed(true)}
                            className={`px-4 py-2 rounded-lg transition ${nonVegAllowed ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Yes
                        </button>
                    </div>
                </div>
                {/* Gated Security */}
                <div className="flex flex-col items-center border border-gray-300">
                    <img src="https://assets.nobroker.in/static/img/postYourProperty/icon/security.png" alt="Gated Security" />
                    <label className="block text-gray-700 font-medium mb-2">
                        Gated Security*</label>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setGatedSecurity(false)}
                            className={`px-4 py-2 rounded-lg transition ${!gatedSecurity ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            No
                        </button>
                        <button
                            onClick={() => setGatedSecurity(true)}
                            className={`px-4 py-2 rounded-lg transition ${gatedSecurity ? "bg-[#009587] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amenities;
