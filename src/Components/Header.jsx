import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import HeaderPhoto from "../Components/assets/Header/Header.png"

const Header = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext);
    console.log("user in header", user)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ellipsisDropdownOpen, setEllipsisDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleEllipsisHover = () => {
        setEllipsisDropdownOpen(true);
    };

    const handleEllipsisLeave = () => {
        setEllipsisDropdownOpen(false);
    };

    const handlePostAboutRoomClick = () => {
        if (user) {
            navigate("/postaboutroom");
        } else {
            navigate("/signup");
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-start space-x-36">
                        <Link to="/" className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300">
                            <img src={HeaderPhoto} alt="Logo" className="w-36 h-13 object-contain" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                            Shop
                        </Link>
                        <Link
                            to="/dashboard"
                            className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                            DashBoard
                        </Link>
                        <Link
                            to="/dashboard"
                            className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                            Contact
                        </Link>
                        {/* Ellipsis Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleEllipsisHover}
                            onMouseLeave={handleEllipsisLeave}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                />
                            </svg>
                            {ellipsisDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                                    <Link
                                        to="/option1"
                                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 mr-3 text-blue-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                            />
                                        </svg>
                                        <span>Notification Preferences</span>
                                    </Link>
                                    <Link
                                        to="/option2"
                                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 transition duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 mr-3 text-green-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                            />
                                        </svg>
                                        <span>24x7 Customer Care</span>
                                    </Link>
                                    <Link
                                        to="/option3"
                                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 transition duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 mr-3 text-purple-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                                            />
                                        </svg>
                                        <span>Advertise</span>
                                    </Link>
                                </div>


                            )}
                        </div>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handlePostAboutRoomClick}
                            className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                                />
                            </svg>
                            Post About Room
                        </button>
                        <Link
                            to="/cart"
                            className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            Cart
                        </Link>
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                                >
                                    <span>{user.username}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 9l-7.5 7.5L4.5 9"
                                        />
                                    </svg>
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                                        <Link
                                            ref={inputRef}
                                            to="/profile"
                                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
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
                                    className="text-black bg-blue-600 hover:bg-blue-400 p-2 rounded-md hover:text-gray-900 font-medium"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;