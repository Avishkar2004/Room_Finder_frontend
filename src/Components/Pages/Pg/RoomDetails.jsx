import React, { useState } from "react";
import { FaUser, FaUsers, FaUserFriends } from "react-icons/fa"; // Icons for different room types
import { PiUsersFourFill } from "react-icons/pi";

const RoomDetails = () => {
    const [selectedRoomType, setSelectedRoomType] = useState(""); // Room type selection

    const roomOptions = [
        { type: "Single", icon: <FaUser size={26} /> },
        { type: "Double", icon: <FaUserFriends size={26} /> },
        { type: "Three", icon: <FaUsers size={26} /> },
        { type: "Four", icon: <PiUsersFourFill size={26} /> }
    ];

    return (
        <div className="flex-1 p-4 bg-white shadow-lg rounded-2xl">
            <h1 className="text-lg font-semibold text-[#009587]">🏠 Provide details about your place to find a tenant soon</h1>
            <div className="border-t border-gray-300 my-5"></div>

            {/* Room Type Selection */}
            <div>
                <h2 className="text-base font-medium text-gray-700 mb-3">Select the type of rooms available in your PG</h2>
                <div className="flex flex-wrap gap-6">
                    {roomOptions.map(({ type, icon }) => (
                        <button
                            key={type}
                            type="button"
                            className={`flex flex-col items-center justify-center w-24 h-24 rounded-xl shadow-md transition-all duration-300 ${selectedRoomType === type
                                    ? "bg-[#009587] text-white shadow-lg scale-105 border border-[#00796B]"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            onClick={() => setSelectedRoomType(type)}
                        >
                            {icon}
                            <span className="mt-2 text-sm font-medium">{type}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
