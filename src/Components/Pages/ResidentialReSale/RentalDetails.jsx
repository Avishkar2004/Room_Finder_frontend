import React, { useState } from 'react';

const RentalDetails = () => {
    const [rentalType, setRentalType] = useState('rent');
    const [rentNegotiable, setRentNegotiable] = useState(false);
    const [underLoan, setUnderLoan] = useState(false);

    const [formData, setFormData] = useState({
        expectedPrice: "",
        maintenanceCost: "",
        availableFrom: "",
        kitchenType: "Select",
        furnishing: "Select",
        parking: "Select",
        description: ""
    });

    const [errors, setErrors] = useState({});

    const handleRentalTypeChange = (e) => {
        setRentalType(e.target.value);
    };

    const handleRentNegotiableChange = () => {
        setRentNegotiable(!rentNegotiable);
    };

    const handleUnderLoanChange = () => {
        setUnderLoan(!underLoan);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const { expectedPrice, maintenanceCost, availableFrom, kitchenType, furnishing, parking, description } = formData;

        if (!expectedPrice) newErrors.expectedPrice = "Expected Price is required";
        if (!maintenanceCost) newErrors.maintenanceCost = "Maintenance Cost is required";
        if (!availableFrom) newErrors.availableFrom = "Available From date is required";
        if (!kitchenType || kitchenType === "Select") newErrors.kitchenType = "Kitchen Type is required";
        if (!furnishing || furnishing === "Select") newErrors.furnishing = "Furnishing option is required";
        if (!parking || parking === "Select") newErrors.parking = "Parking option is required";
        if (!description) newErrors.description = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data submitted");
        }
    };

    return (
        <div className='p-4'>
            <h1 className="text-sm font-semibold text-[#009587]">Provide rental details about your property</h1>
            <div className="border-t border-gray-300 my-4"></div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Expected Price *</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <span className="p-3 text-gray-600">₹</span>
                            <input
                                type="number"
                                name='expectedPrice'
                                value={formData.expectedPrice}
                                onChange={handleInputChange}
                                placeholder="Enter Amount"
                                className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                            />
                        </div>
                        {errors.expectedPrice && <p className='text-red-500 text-xs'>{errors.expectedPrice}</p>}
                        <div className="mt-2">
                            <input type="checkbox" checked={rentNegotiable} onChange={handleRentNegotiableChange} className='mr-2' />
                            <span className="text-gray-700">Price Negotiable</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Maintenance Cost *</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <span className="p-3 text-gray-600">₹/Month</span>
                            <input
                                type="number"
                                name='maintenanceCost'
                                value={formData.maintenanceCost}
                                onChange={handleInputChange}
                                placeholder="Enter Amount"
                                className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                            />
                        </div>
                        {errors.maintenanceCost && <p className='text-red-500 text-xs'>{errors.maintenanceCost}</p>}
                        <div className="mt-2">
                            <input type="checkbox" checked={underLoan} onChange={handleUnderLoanChange} className='mr-2' />
                            <span className="text-gray-700">Currently Under Loan</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Available From *</label>
                        <input
                            type='date'
                            name='availableFrom'
                            value={formData.availableFrom}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Kitchen Type</label>
                        <select
                            name='kitchenType'
                            value={formData.kitchenType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Select">Select</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Furnishing*</label>
                        <select name="furnishing" value={formData.furnishing} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Select">Select</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Parking*</label>
                        <select name="parking" value={formData.parking} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Select">Select</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" placeholder="Write about your property..." className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
            </form>
        </div>
    );
};

export default RentalDetails;
