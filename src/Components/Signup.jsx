import React, { useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import debounce from "lodash.debounce";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [availability, setAvailability] = useState({
        username: null, // null: no status, "loading": checking, "error": taken, "success": available
        email: null,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        debouncedValidate({ ...formData, [e.target.name]: e.target.value });
    };

    const validateField = async (data) => {
        const { username, email } = data;

        // Determine which field to validate based on change
        const fieldToCheck = username !== formData.username ? "username" : "email";

        // Set loading state for the field being checked
        setAvailability((prev) => ({ ...prev, [fieldToCheck]: "loading" }));

        try {
            // Call the API
            const response = await axios.post(
                "http://localhost:5000/api/auth/check-availability",
                { username, email }
            );

            // Mark field as available (success)
            setAvailability((prev) => ({ ...prev, [fieldToCheck]: "success" }));
            setErrors((prev) => ({ ...prev, [fieldToCheck]: "" })); // Clear error for the field
        } catch (err) {
            // Get error field and message from the response
            const errorField = err.response?.data?.field;
            const errorMessage = err.response?.data?.message || "Validation failed";

            // Update availability and error state only for the problematic field
            setAvailability((prev) => ({ ...prev, [errorField]: "error" }));
            setErrors((prev) => ({ ...prev, [errorField]: errorMessage }));
        }
    };

    const debouncedValidate = useCallback(debounce(validateField, 500), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
            Cookies.set("authToken", res.data.token);

            toast.success("🎉 Signup successful! Redirecting...", {
                position: "top-center",
                autoClose: 2000,
            })
            setTimeout(() => {
                navigate("/");
                window.location.reload();
            }, 2000);
        } catch (err) {
            alert(err.response?.data?.message || "An error occurred during signup.");
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
            <ToastContainer />
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className={`p-3 border rounded w-full focus:outline-none focus:ring-2 ${availability.username === "error" ? "border-red-500" : ""
                                } ${availability.username === "success" ? "border-green-500" : ""
                                }`}
                            disabled={loading}
                        />
                        {availability.username === "loading" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            </div>
                        )}
                        {availability.username === "success" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                ✔
                            </div>
                        )}
                        {availability.username === "error" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                                ✖
                            </div>
                        )}
                        {/* {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>} */}
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`p-3 border rounded w-full focus:outline-none focus:ring-2 ${availability.email === "error" ? "border-red-500" : ""
                                } ${availability.email === "success" ? "border-green-500" : ""
                                }`}
                            disabled={loading}
                        />
                        {availability.email === "loading" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            </div>
                        )}
                        {availability.email === "success" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                ✔
                            </div>
                        )}
                        {availability.email === "error" && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                                ✖
                            </div>
                        )}
                        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
                    </div>
                    <div className="mb-6 relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        />
                        <button
                            type="button"
                            onClick={handlePasswordToggle}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-3 ${loading ? "bg-gray-500" : "bg-blue-600"
                            } text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Processing...
                            </div>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
