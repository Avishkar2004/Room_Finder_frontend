import React, { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Menu Icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Bell Icon
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import {
    AccountCircle as AccountCircleIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

    return (
        <header className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-white">
            {/* Logo on the left */}
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg" alt="No Broker" className="w-44 h-11" />
                </Link>
            </div>

            {/* Navigation Options and Hamburger Menu shifted to the right */}
            <div className="flex items-center gap-4">
                <a href="/" className="flex items-center gap-2 border border-gray-300 py-2 px-4 hover:border-gray-400 transition duration-200 rounded-md">
                    <img
                        src="https://assets.nobroker.in/nb-new/public/payrent.png"
                        alt="Pay Rent"
                        className="h-6 w-6 object-contain"
                    />
                    <span className="text-sm">Pay Rent</span>
                </a>

                <Link to="/list-your-property-for-rent-sale"
                    className="flex items-center text-sm font-medium bg-[#009587] text-white py-2 px-6 hover:bg-[#007c6f] rounded-md transition duration-200">
                    For Property Owner
                </Link>

                {/* User or Auth buttons */}
                {user ? (
                    <div className="relative">
                        {/* User Profile Button */}
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={toggleUserMenu}
                        >
                            <AccountCircleIcon className="text-indigo-500 border rounded-full border-gray-300 p-1 group-hover:border-indigo-500 transition duration-200" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-500 transition duration-200">
                                {user.username}
                            </span>
                            {userMenuOpen ? (
                                <KeyboardArrowUpIcon className="text-gray-500" />
                            ) : (
                                <KeyboardArrowDownIcon className="text-gray-500" />
                            )}
                        </div>

                        {/* Dropdown Menu */}
                        {userMenuOpen && (
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg border border-gray-200 w-56 p-4 z-20 animate-fade-in">
                                <Link
                                    to="/profile"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-500 rounded-md transition duration-200"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/settings"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-500 rounded-md transition duration-200"
                                >
                                    Settings
                                </Link>
                                <button
                                    onClick={logout}
                                    className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-red-100 hover:text-red-500 rounded-md transition duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                ) : (
                    <div className="space-x-4">
                        <Link
                            to="/signup"
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 px-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Log In
                        </Link>
                    </div>

                )}

                {/* Notification Icon */}
                <NotificationsIcon className="h-6 w-6 text-gray-700 cursor-pointer" />

                {/* Hamburger Menu */}
                <div className="flex items-center gap-1 relative">
                    <MenuIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={toggleMenu}
                    />
                    <span className="text-lg font-medium cursor-pointer">Menu</span>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md border border-gray-200 w-48 p-2 z-10">
                            <Link to="/post-property" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Post Your Property</Link>
                            <Link to="/rental-agreement" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Rental Agreement</Link>
                            <Link to="/painting-cleaning" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Painting & Cleaning</Link>
                            <Link to="/packers-movers" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Packers and Movers</Link>
                            <Link to="/refer-earn" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Refer & Earn</Link>
                            <Link to="/rent-receipts" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Rent Receipts</Link>
                            <Link to="/tenant-plans" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Tenant Plans</Link>
                            <Link to="/owner-plans" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Owner Plans</Link>
                            <Link to="/buyer-plans" className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md">Buyer Plans</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
