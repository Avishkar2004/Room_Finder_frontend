import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/authContext'; // Import AuthContext
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import the icons from Material UI
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(formData);
      toast.success("🎉 Successful login!", { position: "top-center", autoClose: 2000 })
      setTimeout(() => {
        navigate("/")
        window.location.reload()
      }, 2500); // Redirect after toast is shown
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.message;
        if (errorMessage === "Email or username not found") {
          setError("Email or username is incorrect.");
        } else if (errorMessage === "Incorrect password") {
          setError("Password is incorrect.");
        } else {
          setError("Login failed. Please check your credentials and try again.");
        }
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Email or Username"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle input type based on password visibility
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Eye icon for toggling password visibility */}
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />} {/* Conditionally render the eye icons */}
            </button>
          </div>
          <button
            type="submit"
            className={`w-full p-3 ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <div className='flex justify-between mt-4'>
          <Link to='/forgot-password' className='text-blue-500 hover:underline'>Forgot Password ?</Link>
          <p className='text-gray-600'>
            Don't have an account ? <Link to='/signup' className='text-blue-500 hover:underline'>Sign Up</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
