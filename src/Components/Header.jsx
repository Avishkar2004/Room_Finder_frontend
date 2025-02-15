import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    AccountCircle as AccountCircleIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
    Close as CloseIcon
} from "@mui/icons-material";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full flex justify-between items-center px-6 md:px-10 py-2 shadow-md bg-white">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
                        alt="No Broker"
                        className="w-36 h-9 md:w-44 md:h-11"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
                {/* Pay Rent */}
                <a
                    href="/"
                    className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-md hover:border-gray-400 transition"
                >
                    <img
                        src="https://assets.nobroker.in/nb-new/public/payrent.png"
                        alt="Pay Rent"
                        className="h-5 w-5 text-xs font-normal"
                    />
                    <span className="text-xs font-normal">Pay Rent</span>
                </a>

                {/* Property Owners */}
                <Link
                    to="/list-your-property-for-rent-sale"
                    className="text-xs font-normal bg-[#009587] text-white py-2 px-6 rounded-md hover:bg-[#007c6f] transition"
                >
                    For Property Owners
                </Link>

                {/* User Dropdown */}
                {user ? (
                    <div className="relative flex items-center gap-6">
                        {/* User Menu */}
                        <div className="relative">
                            <div className="flex items-center gap-2 cursor-pointer text-xs font-normal" onClick={toggleUserMenu}>
                                <AccountCircleIcon className="text-indigo-500 border rounded-full border-gray-300 p-1 transition" />
                                <span className="text-sm font-medium text-gray-700">{user.username}</span>

                                {userMenuOpen ? (
                                    <KeyboardArrowUpIcon className="text-gray-500" />
                                ) : (
                                    <KeyboardArrowDownIcon className="text-gray-500" />
                                )}
                                <div className="w-[1px] h-6 bg-gray-400"></div> {/* Vertical Border */}

                                <NotificationsIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                                <div className="w-[1px] h-6 bg-gray-400"></div> {/* Vertical Border */}

                            </div>
                            {userMenuOpen && (
                                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg border w-56 p-4 z-20 text-xs font-normal">
                                    <Link
                                        to="/profile"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/settings"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        Settings
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-red-100 rounded-md"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center text-xs font-normal">
                        <Link to="/signup" className="py-2 px-3 transition">
                            Sign Up
                        </Link>
                        <div className="w-[1px] h-6 bg-gray-400"></div> {/* Vertical Border */}
                        <Link to="/login" className="py-2 px-3 transition">
                            Log In
                        </Link>
                        <div className="w-[1px] h-6 bg-gray-400"></div> {/* Vertical Border */}

                    </div>
                )}

                {/* Menu Button */}
                <div className="flex items-center gap-1 relative">
                    <MenuIcon className="h-5 w-5 cursor-pointer" onClick={toggleMenu} />
                    <span className="text-xs font-normal cursor-pointer">Menu</span>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md border border-gray-200 w-48 p-2 z-10">
                            <Link
                                to="/post-property"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Post Your Property
                            </Link>
                            <Link
                                to="/rental-agreement"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Rental Agreement
                            </Link>
                            <Link
                                to="/painting-cleaning"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Painting & Cleaning
                            </Link>
                            <Link
                                to="/packers-movers"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Packers and Movers
                            </Link>
                            <Link
                                to="/refer-earn"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Refer & Earn
                            </Link>
                            <Link
                                to="/rent-receipts"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Rent Receipts
                            </Link>
                            <Link
                                to="/tenant-plans"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Tenant Plans
                            </Link>
                            <Link
                                to="/owner-plans"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Owner Plans
                            </Link>
                            <Link
                                to="/buyer-plans"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-md"
                            >
                                Buyer Plans
                            </Link>
                        </div>
                    )}
                </div>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
                {user ? (
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition">
                        <AccountCircleIcon className="text-indigo-500 border border-gray-300 rounded-full p-1" />
                        <span className="text-sm font-medium text-gray-700">{user.username}</span>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow-md transition hover:bg-red-600 hover:shadow-lg"
                    >
                        Login
                    </Link>
                )}

                <div
                    className="p-2 rounded-full bg-gray-100 shadow-sm hover:shadow-md cursor-pointer transition"
                    onClick={toggleMobileMenu}
                >
                    <MenuIcon className="h-6 w-6 text-gray-700" />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden z-50`}>
                <div>

                </div>
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <img src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg" alt="No Broker" className="w-36 h-9" />
                    <CloseIcon className="text-gray-700 cursor-pointer" onClick={toggleMobileMenu} />
                </div>
                <ul className="flex flex-col space-y-4 p-6">
                    <li><Link to="/list-your-property-for-rent-sale" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md">For Property Owner</Link></li>
                    <li><a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Pay Rent</a></li>
                    {user ? (
                        <>
                            <li><Link to="/profile" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Profile</Link></li>
                            <li><Link to="/settings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Settings</Link></li>
                            <li><button onClick={logout} className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-red-100 rounded-md">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/signup" className="block py-2 px-4 text-sm text-blue-600 hover:bg-gray-100 rounded-md">Sign Up</Link></li>
                            <li><Link to="/login" className="block py-2 px-4 text-sm text-blue-600 hover:bg-gray-100 rounded-md">Log In</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
