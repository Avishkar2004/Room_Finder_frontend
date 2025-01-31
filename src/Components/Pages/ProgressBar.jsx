import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div className="flex items-center justify-between w-[80%] mx-auto bg-white shadow-md rounded-lg p-3">
            {/* Left Icon */}
            <img
                src="https://assets.nobroker.in/nb-new/public/Pyp-Form/resale_logo.png"
                alt="Logo"
                className="w-10 h-10"
            />

            {/* Progress Bar + Percentage Text in the Same Line */}
            <div className="flex items-center flex-1 mx-4">
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.round(progress)}%` }}
                    ></div>
                </div>
                {/* Percentage Text Right After the Progress Bar */}
                <span className="ml-2 text-sm font-semibold text-gray-600 whitespace-nowrap">
                    {Math.round(progress)}% Done
                </span>
            </div>

            {/* Preview Button */}
            <button className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                Preview
            </button>
        </div>
    );
};

export default ProgressBar;
