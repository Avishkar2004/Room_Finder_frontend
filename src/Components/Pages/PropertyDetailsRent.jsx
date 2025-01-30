import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import LocalityDetails from "./LocalityDetails";
import RentalDetails from "./RentalDetails";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import Schedule from "./Schedule";
import PropertyDetails from "./PropertyDetails";

const PropertyDetailsRent = () => {
    const [selectedTab, setSelectedTab] = useState("PropertyDetails")

    const renderComponent = () => {
        switch (selectedTab) {
            case "PropertyDetails":
                return <PropertyDetails />;
            case "LocalityDetails":
                return <LocalityDetails />
            case "RentalDetails":
                return <RentalDetails />
            case "Amenities":
                return <Amenities />
            case "Gallery":
                return <Gallery />
            case "Schedule":
                return <Schedule />
            default:
                return <PropertyDetails />;
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="flex mt-4 bg-white p-5 rounded-lg shadow-lg w-[80%]">
                {/* Left Sidebar */}
                <div className="w-[20%] p-4 rounded-l-lg shadow-lg text-gray-600">
                    <ul className="space-y-6">
                        {[
                            { name: "Property Details", key: "PropertyDetails", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/HomeOutlined.png" },
                            { name: "Locality Details", key: "LocalityDetails", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/PinDropOutlined.png" },
                            { name: "Rental Details", key: "RentalDetails", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/Business.png" },
                            { name: "Amenities", key: "Amenities", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/KitchenOutlined.png" },
                            { name: "Gallery", key: "Gallery", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/LinkedCameraOutlined.png" },
                            { name: "Schedule", key: "Schedule", icon: "https://assets.nobroker.in/nb-new/public/MaterialIcons/DateRangeOutlined.png" },
                        ].map((item) => (
                            <li
                                key={item.key}
                                className={`flex items-center cursor-pointer p-3 rounded-lg transition duration-300 ${selectedTab === item.key ? "bg-blue-100 text-blue-500 font-semibold" : "hover:text-blue-500 hover:bg-blue-100"
                                    }`}
                                onClick={() => setSelectedTab(item.key)}
                            >
                                <img src={item.icon} alt={item.name} className="w-6 h-6 mr-3" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 p-6">{renderComponent()}</div>


                {/* Right Side Details */}
                <div className="w-1/6 -mt-3 p-6 bg-white shadow-md">
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
                                <span className="block text-md font-semibold mt-1 bg-[#009587] px-2 py-2 text-gray-800">Get it now</span>
                            </div>
                        </div>
                    </div>
                    {/* Get Tenants Faster and Other Features */}
                    <div className="flex flex-col space-y-4 p-4 border mt-2 border-gray-200">
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