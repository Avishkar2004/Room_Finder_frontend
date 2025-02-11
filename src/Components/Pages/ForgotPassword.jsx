import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Enter OTP & Reset Password
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleOTPRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            // Send request to backend to generate and send OTP
            const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            setMessage(response.data.message);
            toast.success("🎉 Otp Send Succesfully", { position: "top-center", autoClose: 2000 })
            setStep(2); // Proceed to next step where user enters OTP and new password
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');
        setTimeout(async () => {
            try {
                // Send request to verify OTP and reset password
                const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
                    email,
                    otp,
                    newPassword
                });
                setMessage(response.data.message);
                toast.success("🎉 Password reset successfully redirecting to Login Page", { position: "top-center", autoClose: 2000 })
                setTimeout(() => {
                    navigate("/login")
                }, 2300);

            } catch (err) {
                setError(err.response?.data?.message || 'Failed to reset password. Please try again.');
            } finally {
                setLoading(false);
            }
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    {step === 1 ? 'Forgot Password' : 'Reset Password'}
                </h2>

                {message && <p className="text-green-500 text-center mb-4">{message}</p>}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                {step === 1 ? (
                    <form onSubmit={handleOTPRequest}>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-3 ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            disabled={loading}
                        >
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handlePasswordReset}>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-3 ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            disabled={loading}
                        >
                            {loading ? 'Resetting Password...' : 'Reset Password'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
