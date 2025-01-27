import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode

const GoogleCallback = () => {
  const navigate = useNavigate();
  const { login } = AuthContext();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      try {
        // Save token to local storage
        localStorage.setItem("authToken", token);

        // Decode the token to extract user information
        const user = jwtDecode(token); // Extract user information, username

        login({ token, ...user });
        navigate("/");
      } catch (error) {
        console.error("Error decoding token or login failed:", error);
      }
    } else {
      console.error("Login failed or token missing");
    }
  }, [navigate, login]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        {/* Loader */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-opacity-70"></div>
        {/* Message */}
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Authenticating, please wait...
        </p>
      </div>
    </div>
  );
};

export default GoogleCallback;
