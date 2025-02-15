import React, { useState } from "react";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import LocalityDetails from "./LocalityDetails";
import ProgressBar from "./ProgressBar"; // Assuming ProgressBar is a separate component
import PropertyDetails from "./PropertyDetails";
import RentalDetails from "./RentalDetails";
import Schedule from "./Schedule";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PropertyDetailsResale = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [selectedTab, setSelectedTab] = useState("PropertyDetails");

    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState("");

    const tabProgress = {
        PropertyDetails: 16.66,
        LocalityDetails: 33.33,
        RentalDetails: 50,
        Amenities: 66.66,
        Gallery: 83.33,
        Schedule: 100
    }

    // Function to validate each tab's fields
    const validateCurrentTab = () => {
        switch (selectedTab) {
            case "PropertyDetails":
                return PropertyDetails.validateForm ? PropertyDetails.validateForm() : false;
            case "LocalityDetails":
                return LocalityDetails.validateForm ? LocalityDetails.validateForm() : false // Similarly for other components
            case "RentalDetails":
                return RentalDetails.validateForm ? RentalDetails.validateForm() : false;
            case "Amenities":
                return Amenities.validateForm();
            case "Gallery":
                return Gallery.validateForm()
            case "Schedule":
                return Schedule.validateForm ? Schedule.validateForm() : false;
            default:
                return false
        }
    }

    const handleNext = () => {
        if (validateCurrentTab()) {
            setError(""); // Clear any previous error messages
            setFormValid(true);

            if (selectedTab === "Schedule") {
                // If last tab, navigate to ConfirmationRent
                navigate("/confirmation-rent");
            } else {
                // Move to next tab
                const tabKeys = Object.keys(tabProgress);
                const currIndex = tabKeys.indexOf(selectedTab);
                if (currIndex < tabKeys.length - 1) {
                    setSelectedTab(tabKeys[currIndex + 1]);
                }
            }
        } else {
            setError(`Please fill all required fields in the ${selectedTab} section before continuing.`);
            setFormValid(false);
        }
    };


    return (
        <div className="flex flex-col justify-center items-center bg-gray-100">
            <div className="w-full  mt-[2px]">
                <ProgressBar progress={tabProgress[selectedTab]} />
            </div>
            <div className="flex mt-4 bg-white p-2 rounded-lg shadow-lg w-[80%]">
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
                                className={`flex items-center cursor-pointer p-3 rounded-lg transition duration-300 ${selectedTab === item.key
                                    ? "bg-blue-100 text-blue-500 font-semibold"
                                    : "hover:text-blue-500 hover:bg-blue-100"
                                    }`}
                                onClick={() => setSelectedTab(item.key)}
                            >
                                <img src={item.icon} alt={item.name} className="w-6 h-6 mr-3" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Right Side Details */}
                <div className="flex-1 p-4 flex-col">
                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    {selectedTab === "PropertyDetails" && <PropertyDetails />}
                    {selectedTab === "LocalityDetails" && <LocalityDetails />}
                    {selectedTab === "RentalDetails" && <RentalDetails />}
                    {selectedTab === "Amenities" && <Amenities />}
                    {selectedTab === "Gallery" && <Gallery />}
                    {selectedTab === "Schedule" && <Schedule />}

                    <div className="mt-auto">

                        <button className="w-full mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                            onClick={handleNext}
                        >
                            {selectedTab === "Schedule" ? "Confirm & Proceed" : "Save and Continue"}
                        </button>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-1/6 p-6 bg-white shadow-md">
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

export default PropertyDetailsResale;
