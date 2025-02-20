import React, { useState } from "react";

const Amenities = () => {
    const [services, setServices] = useState({
        laundry: "No",
        roomCleaning: "No",
        wardenFacility: "No"
    });

    const handleServiceChange = (service, value) => {
        setServices((prev) => ({
            ...prev,
            [service]: value
        }));
    };

    return (
        <div className="space-y-6 p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-sm font-semibold text-[#009587]">
                Provide additional details about your place
            </h1>
            <div className="border-t border-gray-300 my-4"></div>

            {/* Available Services */}
            <div>
                <h2 className="text-lg font-medium text-gray-700">Available Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {[
                        { key: "laundry", label: "Laundry" },
                        { key: "roomCleaning", label: "Room Cleaning" },
                        { key: "wardenFacility", label: "Warden Facility" }
                    ].map(({ key, label }) => (
                        <div key={key} className="flex items-center space-x-3 border p-3 rounded-lg shadow-sm">
                            <span className="text-gray-700 font-medium">{label}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleServiceChange(key, "Yes")}
                                    className={`px-4 py-1 rounded-md text-white font-medium ${services[key] === "Yes" ? "bg-green-500" : "bg-gray-400"
                                        }`}
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => handleServiceChange(key, "No")}
                                    className={`px-4 py-1 rounded-md text-white font-medium ${services[key] === "No" ? "bg-red-500" : "bg-gray-400"
                                        }`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Directions Tip */}
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-700">Add Directions Tip for your tenants</h2>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."
                    rows={3}
                ></textarea>
            </div>

            {/* Available Amenities */}
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-700">Available Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {
                        [{ name: "Common TV", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/tv.png" },
                        { name: "Mess", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/mess.png" },
                        { name: "Lift", img: "https://assets.nobroker.in/static/img/icon/amenities/elevator_dark.png" },
                        { name: "Refrigerator", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/refrigerator.png" },
                        { name: "Wifi", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/wifi.png" },
                        { name: "Cooking Allowed", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/cooking.png" },
                        { name: "Power Backup", img: "https://assets.nobroker.in/static/img/postYourProperty/icon/power.png" }
                        ]
                            .map((amenity, index) => (
                                <label key={index} className="flex items-center space-x-2 cursor-pointer border p-3 rounded-lg shadow-sm">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-[#009587]" />
                                    <img src={amenity.img} alt={amenity.name} />
                                    <span className="text-gray-700">{amenity.name}</span>
                                </label>
                            ))}
                </div>
            </div>

            {/* Parking Selection */}
            <div className="mt-6 mb-5">
                <h2 className="text-lg font-medium text-gray-700">Parking</h2>
                <select className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2">
                    <option value="">Select Parking Type</option>
                    <option value="Two-Wheeler">Two-Wheeler</option>
                    <option value="Four-Wheeler">Four-Wheeler</option>
                    <option value="Both">Both</option>
                </select>
            </div>
        </div>
    );
};

export default Amenities;
