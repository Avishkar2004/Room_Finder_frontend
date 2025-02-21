import React, { useState } from 'react'

const RentalDetails = () => {
    const [rentalType, setRentalType] = useState('rent');
    const [rentNegotiable, setRentNegotiable] = useState(false)

    const [formData, setFormData] = useState({
        expectedRent: "",
        expectedDeposite: "",
        monthlyMaintenance: "",
        availableFrom: "",
        preferredTenants: "",
        furnishing: '',
        parking: '',
        description: ''
    })

    const [errors, setErrors] = useState({})

    const handleRentalTypeChange = (e) => {
        setRentalType(e.target.value);
    };

    const handleRentNegotiableChange = () => {
        setRentNegotiable(!rentNegotiable);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }


    const validateForm = () => {
        const newErrors = {}

        const { expectedRent, expectedDeposite, monthlyMaintenance, availableFrom, preferredTenants, furnishing, parking, description } = formData;

        if (!expectedRent) newErrors.expectedRent = "Expected Rent is required";
        if (!expectedDeposite) newErrors.expectedDeposite = 'Expected Deposit is required';
        if (!monthlyMaintenance) newErrors.monthlyMaintenance = "Monthly Maintenance is required"
        if (!availableFrom) newErrors.availableFrom = 'Available From date is required';
        if (!preferredTenants) newErrors.preferredTenants = 'Preferred Tenants are required';
        if (!furnishing || furnishing === 'Select') newErrors.furnishing = 'Furnishing option is required';
        if (!parking || parking === "Select") newErrors.parking = 'Parking option is required';
        if (!description) newErrors.description = "Description is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }


    RentalDetails.validateForm = validateForm

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log("Form data submitted")
        }
    }

    return (
        <div className='p-4'>
            <h1 className="text-sm font-semibold  text-[#009587]">Provide rental details about your property
            </h1>
            <div className="border-t border-gray-300 my-4"></div>
            <div className='mt-5'>
                <form onSubmit={handleSubmit}>

                    {/* Expected Rent and Expected Deposit */}
                    <div className="mb-1 flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium mb-2">Expected Rent *</label>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <span className="p-3 text-gray-600">₹</span>
                                <input
                                    type="number"
                                    name='expectedRent'
                                    value={formData.expectedRent}
                                    onChange={handleInputChange}
                                    placeholder="Enter Amount"
                                    className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                                />
                                <span className="p-3 text-gray-600">/Month</span>
                            </div>
                            {errors.expectedRent && <p className='text-red-500 text-xs'>{errors.expectedRent}</p>}
                        </div>

                        {/* Expected Deposit */}
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium mb-2">Expected Deposit *</label>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <span className="p-3 text-gray-600">₹</span>
                                <input
                                    type="number"
                                    name='expectedDeposite'
                                    value={formData.expectedDeposite}
                                    onChange={handleInputChange}
                                    placeholder="Enter Amount"
                                    className="w-full p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                                />
                            </div>
                            {errors.expectedDeposite && <p className="text-red-500 text-xs">{errors.expectedDeposite}</p>}
                        </div>
                    </div>
                    <div className="mb-2 flex items-center">
                        <input type="checkbox"
                            checked={rentNegotiable}
                            onChange={handleRentNegotiableChange}
                            className='mr-2 rounded-sm'
                        />
                        <span className="text-gray-700">Rent Negotiable</span>
                    </div>

                    <div className="w-1/2">
                        {/* Monthly Maintenance Selection */}
                        <label className="block text-gray-700 font-semibold mb-2">Monthly Maintenance*</label>
                        <div className="relative">
                            <select
                                className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                onChange={handleInputChange}
                                name="monthlyMaintenance"
                                value={formData.monthlyMaintenance}
                            >
                                <option value="">Select</option>
                                <option value="Maintenance Included">Maintenance Included</option>
                                <option value="Maintenance Extra">Maintenance Extra</option>
                            </select>
                        </div>
                        {errors.monthlyMaintenance && <p className="text-red-500 text-xs mt-1">{errors.monthlyMaintenance}</p>}

                        {/* Maintenance Amount (Only if Maintenance Extra is selected) */}
                        {formData.monthlyMaintenance === "Maintenance Extra" && (
                            <div className="mt-4">
                                <label className="block text-gray-700 font-semibold mb-2">Maintenance Amount*</label>
                                <div className="flex items-center border border-gray-300 rounded-lg shadow-sm">
                                    <span className="px-4 py-3 text-gray-600  rounded-l-lg">₹</span>
                                    <input
                                        type="number"
                                        name="expectedRent"
                                        value={formData.expectedRent}
                                        onChange={handleInputChange}
                                        placeholder="Enter Amount"
                                        className="w-full p-3 text-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
                                    />
                                    <span className="px-4 py-3 text-gray-600 rounded-r-lg">/Month</span>
                                </div>
                                {errors.expectedRent && <p className="text-red-500 text-xs mt-1">{errors.expectedRent}</p>}
                            </div>
                        )}
                    </div>


                    <div className="flex-1 mt-4">
                        <label className="block text-gray-700 font-medium mb-2">Available From *
                        </label>
                        <input
                            type='date'
                            className="w-1/2 p-4 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            onChange={handleInputChange}
                            value={formData.availableFrom}
                        />
                        {errors.availableFrom && <p className="text-red-500 text-xs">{errors.availableFrom}</p>}
                    </div>


                    <div className="flex space-x-6">
                        {/* Furnishing */}
                        <div className="flex-1 mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Furnishing*</label>
                            <select
                                className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50"
                                name="furnishing"
                                value={formData.furnishing}
                                onChange={handleInputChange}
                            >
                                <option value="Select">Select</option>
                                <option value="Fully Furnished">Fully Furnished</option>
                                <option value="Semi Furnished">Semi Furnished</option>
                                <option value="Unfurnished">Unfurnished</option>
                            </select>
                            {errors.furnishing && <p className="text-red-500 text-xs">{errors.furnishing}</p>}
                        </div>
                        {/* Parking */}
                        <div className="flex-1 mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Parking*</label>
                            <select
                                className="w-full text-gray-500 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50"
                                name="parking"
                                value={formData.parking}
                                onChange={handleInputChange}
                            >
                                <option value="Select">Select</option>
                                <option value="Bike">Bike</option>
                                <option value="Car">Car</option>
                                <option value="Both">Both</option>
                                <option value="None">None</option>
                            </select>
                            {errors.parking && <p className="text-red-500 text-xs">{errors.parking}</p>}
                        </div>
                    </div>
                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-medium mb-2">Description*</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Provide additional details about the property"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-50"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RentalDetails