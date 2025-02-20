import React, { useState } from "react";
import { FaUser, FaUsers, FaUserFriends, FaCheck } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";

const RoomDetails = () => {
    const [selectedRooms, setSelectedRooms] = useState([]); // Allow multiple selections
    const [showForm, setShowForm] = useState(false); // Show form on Continue

    const roomOptions = [
        { type: "Single", icon: <FaUser size={30} /> },
        { type: "Double", icon: <FaUserFriends size={30} /> },
        { type: "Three", icon: <FaUsers size={30} /> },
        { type: "Four", icon: <PiUsersFourFill size={30} /> }
    ];

    const handleToggleRoom = (type) => {
        setSelectedRooms((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleContinue = () => {
        if (selectedRooms.length > 0) {
            setShowForm(true); // Show details for selected rooms
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-sm font-semibold text-[#009587]">Provide Location Details</h1>
            <div className="border-t border-gray-300 my-4"></div>

            {!showForm ? (
                <>
                    {/* Room Selection UI */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-3xl p-6">
                            <h2 className="text-lg font-medium text-gray-700 text-center mb-6">
                                Select the type of rooms available in your PG
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mb-5">
                                {roomOptions.map(({ type, icon }) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className={`relative flex flex-col items-center justify-center w-28 h-28 rounded-xl shadow-md transition-all duration-300 ${selectedRooms.includes(type)
                                            ? "bg-[#009587] text-white shadow-lg scale-105 border border-[#00796B]"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        onClick={() => handleToggleRoom(type)}
                                    >
                                        {icon}
                                        <span className="mt-2 text-base font-medium">{type}</span>
                                        {selectedRooms.includes(type) && (
                                            <FaCheck className="absolute top-2 right-2 text-white bg-green-500 rounded-full p-1 text-lg" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {selectedRooms.length > 0 && (
                                <button
                                    onClick={handleContinue}
                                    className="w-full bg-[#009587] text-white py-2 rounded-lg text-lg font-semibold mt-4 hover:bg-[#00796B] transition-all"
                                >
                                    Continue
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Show Details for All Selected Rooms */}
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
                        {selectedRooms.map((roomType) => {
                            const roomData = roomOptions.find((room) => room.type === roomType);
                            return (
                                <div key={roomType} className="mb-6 p-4 bg-white shadow-md rounded-lg">
                                    <div className="flex items-center space-x-4 mb-4">
                                        {/* Room Icon */}
                                        {roomData?.icon}
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {roomType} Room Details
                                        </h3>
                                    </div>

                                    {/* Rent & Deposit Fields */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="text-gray-700 font-medium">Expected Rent *</label>
                                            <div className="flex items-center border rounded-lg p-2">
                                                <span className="text-gray-500 mr-2">₹</span>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Amount"
                                                    className="w-full outline-none bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-700 font-medium">Expected Deposit *</label>
                                            <div className="flex items-center border rounded-lg p-2">
                                                <span className="text-gray-500 mr-2">₹</span>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Amount"
                                                    className="w-full outline-none bg-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Room Amenities */}
                                    <div>
                                        <label className="text-gray-700 font-medium mb-2 block">Room Amenities</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {["Cupboard", "TV", "Bedding", "Geyser", "AC", "Attached Bathroom"].map(
                                                (amenity) => (
                                                    <label
                                                        key={amenity}
                                                        className="flex items-center space-x-2 cursor-pointer"
                                                    >
                                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-[#009587]" />
                                                        <span className="text-gray-700">{amenity}</span>
                                                    </label>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Submit Button */}
                        <button
                            className="mt-5 w-full bg-[#009587] text-white py-2 rounded-lg text-lg font-semibold hover:bg-[#00796B] transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RoomDetails;
