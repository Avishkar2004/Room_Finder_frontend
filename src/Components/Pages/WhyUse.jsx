import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BrushIcon from '@mui/icons-material/Brush';
import PublicIcon from '@mui/icons-material/Public';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; // Icon for loan banner

const WhyUse = () => {
    return (
        <div className="px-4">
            {/* Loan Banner */}
            <div className="bg-[#384d6c] py-2 px-4 flex flex-wrap items-center justify-center text-center sm:text-left">
                <EmojiPeopleIcon className="text-white mr-2" />
                <p className="text-white text-sm">
                    Do you know how much <strong>loan</strong> you can get? Get maximum with <strong>NoBroker</strong>
                </p>
                <button className="ml-4 mt-2 sm:mt-0 text-white border border-white py-1 px-2 rounded hover:bg-white hover:text-blue-900 transition">
                    Check Eligibility
                </button>
            </div>

            {/* Why Use Section */}
            <div className="py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    {[
                        { label: 'New', icon: <ApartmentIcon fontSize="large" />, text: 'Builder Projects' },
                        { label: 'New', icon: <AttachMoneyIcon fontSize="large" />, text: 'Sale Agreement' },
                        { label: '', icon: <VolunteerActivismIcon fontSize="large" />, text: 'Home Loan' },
                        { label: '', icon: <HomeRepairServiceIcon fontSize="large" />, text: 'Property Legal Services' },
                        { label: 'Sale is Live', icon: <BrushIcon fontSize="large" />, text: 'Home Interiors' },
                        { label: '', icon: <PublicIcon fontSize="large" />, text: 'NoBroker For NRIs' }
                    ].map((item, index) => (
                        <div key={index} className="p-4 cursor-pointer hover:scale-105 transition">
                            {item.label && (
                                <div className="flex items-center justify-center mb-2">
                                    <span className="inline-block py-1 px-3 rounded bg-[#ffefd9] text-gray-700 font-semibold text-xs sm:text-sm">
                                        {item.label}
                                    </span>
                                </div>
                            )}
                            <div className="text-4xl text-[#f73a50]">{item.icon}</div>
                            <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Title with Horizontal Borders and Circles */}
            <div className="flex items-center justify-center mb-6">
                <div className="flex-grow border-t border-gray-300 relative">
                    <div className="absolute right-0 top-[-6px] bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 border border-pink-300"></div>
                </div>
                <h2 className="text-lg sm:text-2xl text-[#787676] font-semibold mx-4">Why Use NoBroker</h2>
                <div className="flex-grow border-t border-gray-300 relative">
                    <div className="absolute left-0 top-[-6px] bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 border border-pink-300"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-8">
                <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: <ApartmentIcon fontSize="inherit" />, title: 'Avoid Broker', text: "We connect you directly to verified owners to save brokerage" },
                        { icon: <AttachMoneyIcon fontSize="inherit" />, title: 'Sale Agreement', text: "We directly connect you to verified owners to save brokerage" },
                        { icon: <VolunteerActivismIcon fontSize="inherit" />, title: 'Home Loan', text: "We help you get the best home loan deals" },
                        { icon: <HomeRepairServiceIcon fontSize="inherit" />, title: 'Property Legal Services', text: "Ensure safe and legal transactions" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 hover:scale-105 transition">
                            <div className="text-[#f73a50] mb-4 text-4xl">
                                {item.icon}
                            </div>
                            <h3 className="text-md font-medium text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUse;
