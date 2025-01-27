import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import debounce from 'lodash.debounce';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    const [showPassword, setShowPassword] = useState(false)


    const handlePasswordToggle = () => {
        setShowPassword(!showPassword)
    }

    // Function to handle input changes and call validation with debounce
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        debouncedValidate({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to check username and email is available in the 
    const validateField = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/check-availability', data);
            setErrors({ ...errors, [response.data.field]: response.data.message })
        } catch (err) {
            const errorResponse = err.response?.data || {} // Safely access response
            setErrors({ ...errors, [errorResponse.field || "general"]: errorResponse.message || "Validation failed" })
        }
    }

    // Debounced version of validateField to minimize API calls
    const debouncedValidate = useCallback(debounce(validateField, 500), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            alert(res.data.message);
            Cookies.set('authToken', res.data.token); // Set the token in cookies
            setLoading(false);
            navigate('/');
            window.location.reload();
        } catch (err) {
            alert(err.response?.data?.message || 'An error occurred during signup.');
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className={`p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : ''}`}
                            disabled={loading}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                            disabled={loading}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                            type='button'
                            onClick={handlePasswordToggle}
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500'
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-3 ${loading ? 'bg-gray-500' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                Processing...
                            </div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;