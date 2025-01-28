import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SellorRentProperty = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedPropertyType, setSelectedPropertyType] = useState("Resident");
  const [selectedAdType, setSelectedAdType] = useState("Rent");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "Pune"
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name) newErrors.name = "Enter your name";
    if (!formData.email) newErrors.email = "Enter your Email"
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.mobile) newErrors.mobile = "Enter valid mobile number"
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits.";

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", formData);
    }
  };


  const reviews = [
    "Great platform, got my property rented quickly!",
    "Easy to use and hassle-free experience. Highly recommend!",
    "Saved a lot of time and money by posting here.",
    "Found my dream home thanks to this site.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change reviews every 3 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Header Section */}
      <div className="flex justify-between w-full max-w-[1220px] px-8 mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Sell or Rent your Property For Free
        </h2>
        <p className="text-sm text-gray-500">
          Looking for a property?{" "}
          <Link
            to="/browse-properties"
            className="text-[#009587] font-medium underline"
          >
            Click here
          </Link>
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full mt-6 px-8 py-4 border lg:space-x-8">
        {/* Why Post Through Us Section (Left Side) */}
        <div className="flex-1 lg:flex-[0.4] bg-gray-100 px-7 py-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Why Post through us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Features */}
            <div className="flex items-center space-x-4">
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Zero_Brokerage.svg"
                alt="Zero Brokerage"
              />
              <p className="text-gray-600">Zero Brokerage</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Tenant.svg"
                alt="Faster Tenants"
              />
              <p className="text-gray-600">Faster Tenants</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/tenant_buyer_connections.svg"
                alt="10 lac tenants/buyers connections"
              />
              <p className="text-gray-600">10 Lac tenants/buyers connections</p>
            </div>
            <div className="overflow-hidden">
              <p className="text-gray-600">30 Lac+ Home Owners Trust Us</p>
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="flex-shrink-0 w-full text-center p-4">
                    <p className="text-gray-600 italic">"{review}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section (Right Side) */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-3" onClick={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009587] focus:border-[#009587]"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009587] focus:border-[#009587]"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009587] focus:border-[#009587]"
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select City
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009587] focus:border-[#009587]"
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>
          </form>

          {/* Property Type Selection */}
          <div className="flex items-center justify-center">
            <div>
              <label
                htmlFor="propertyType"
                className="block text-xs font-semibold text-gray-700 text-center mb-4 mt-6"
              >
                Property Type
              </label>
              <div className="flex border">
                <button
                  type="button"
                  onClick={() => setSelectedPropertyType("Resident")}
                  className={`px-8 py-2 font-semibold transition-all duration-200 ${selectedPropertyType === "Resident"
                    ? "b#ffffffffffff] text-gray-700 shadow-md border-b-4 border-[#009587]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  Resident
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPropertyType("Commercial")}
                  className={`px-8 py-2 font-semibold transition-all border-r border-l duration-200 ${selectedPropertyType === "Commercial"
                    ? "bg-[#ffffff] text-gray-700 shadow-md border-b-4 border-[#009587]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  Commercial
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPropertyType("LandPlot")}
                  className={`px-8 py-2 font-semibold transition-all duration-200 ${selectedPropertyType === "LandPlot"
                    ? "bg-[#ffffff] text-gray-700 shadow-md border-b-4 border-[#009587]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  Land/Plot
                </button>
              </div>
            </div>
          </div>
          <div className="border p-10">
            {/* Ad Type Selection for Resident */}
            {selectedPropertyType === "Resident" && (
              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="adType"
                  className="block text-xs font-semibold text-gray-700 text-center mb-3">
                  Select Property Ad Type
                </label>
                <div className="flex space-x-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Rent")}
                    className={`px-8 border py-2  ${selectedAdType === "Rent"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}>
                    Rent
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Resale")}
                    className={`px-8 border py-2  ${selectedAdType === "Resale"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    Resale
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("PG/Hostel")}
                    className={`px-8 border py-2  ${selectedAdType === "PG/Hostel"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    PG/Hostel
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Flatmates")}
                    className={`px-8 border py-2  ${selectedAdType === "Flatmates"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    Flatmates
                  </button>
                </div>
              </div>
            )}
            {selectedPropertyType === "Commercial" && (
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="adType"
                  className="block text-xs font-semibold text-gray-700 text-center mb-3"
                >
                  Select Property Ad Type
                </label>
                <div className="flex space-x-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Rent")}
                    className={`px-8 py-2 rounded-md ${selectedAdType === "Rent"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    Rent
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Resale")}
                    className={`px-8 py-2 rounded-md ${selectedAdType === "Resale"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    Sale
                  </button>

                </div>
              </div>
            )}
            {selectedPropertyType === "LandPlot" && (
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="adType"
                  className="block text-xs font-semibold text-gray-700 text-center mb-3"
                >
                  Select Property Ad Type
                </label>
                <div className="flex space-x-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAdType("Resale")}
                    className={`px-4 py-2 rounded-md ${selectedAdType === "Resale"
                      ? "bg-[#009587] text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    ReSale
                  </button>

                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-[#fd3752] text-white py-2 px-4 rounded-md hover:bg-[#e3324a] transition duration-300"
          >
            Start Posting Your Ad for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellorRentProperty;
