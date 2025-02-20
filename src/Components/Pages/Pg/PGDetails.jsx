import React, { useState } from 'react'

const PGDetails = () => {
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

    PGDetails.validateForm = validateForm

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log("Form data submitted")
        }
    }

    return (
        <div className='p-4 bg-white shadow-lg rounded-lg'>
            <h1 className="text-sm font-semibold  text-[#009587]">Provide rental details about your property
            </h1>
            <div className="border-t border-gray-300 my-4"></div>
            <div className='mt-5'>
                <form onSubmit={handleSubmit}>
                    <span className='block text-gray-600  text-sm font-bold mb-2'>Place is available for *
                    </span>
                    <div className="mb-6 flex space-x-6">
                        <div>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center text-gray-500">
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={rentalType === 'male'}
                                        onChange={handleRentalTypeChange}
                                        className="mr-2"
                                    />
                                    Male
                                </label>
                                <label className="flex items-center text-gray-500">
                                    <input
                                        type="radio"
                                        value="female"
                                        checked={rentalType === 'female'}
                                        onChange={handleRentalTypeChange}
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                                <label className="flex items-center text-gray-500">
                                    <input
                                        type="radio"
                                        value="anyone"
                                        checked={rentalType === 'anyone'}
                                        onChange={handleRentalTypeChange}
                                        className="mr-2"
                                    />
                                    Anyone
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Expected Rent and Expected Deposit */}
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Preferred Guests */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Preferred Guests*</label>
                            <div className="relative">
                                <select
                                    name="PreferredGuests"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009587] bg-white shadow-sm transition-all"
                                >
                                    <option value="">Select</option>
                                    <option value="working professional">Working Professional</option>
                                    <option value="Student">Student</option>
                                    <option value="Both">Both</option>
                                </select>
                            </div>
                            {errors.expectedRent && <p className="text-red-500 text-xs mt-1">{errors.expectedRent}</p>}
                        </div>
                        {/* Available From */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Available From *</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="availableFrom"
                                    value={formData.availableFrom}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009587] bg-white shadow-sm transition-all"
                                />
                            </div>
                            {errors.expectedDeposite && <p className="text-red-500 text-xs mt-1">{errors.expectedDeposite}</p>}
                        </div>
                    </div>
                    <div className="flex-1 mt-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-4">Food Included*</label>
                        <div className="flex items-center space-x-8 text-gray-600">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="preferredTenants"
                                    value="Yes"
                                    checked={formData.preferredTenants === 'Yes'}
                                    onChange={handleInputChange}
                                    className="h-5 w-5 text-indigo-500 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="text-sm font-medium">Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="preferredTenants"
                                    value="No"
                                    checked={formData.preferredTenants === 'No'}
                                    onChange={handleInputChange}
                                    className="h-5 w-5 text-indigo-500 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="text-sm font-medium">No</span>
                            </label>
                        </div>
                        {errors.preferredTenants && (
                            <p className="mt-2 text-red-500 text-xs italic">{errors.preferredTenants}</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">🏠 PG/Hostel Rules</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { icon: "https://www.nobroker.in/static/img/postYourProperty/icon/nonveg.png", text: "No Smoking" },
                                { icon: "https://www.nobroker.in/static/img/postYourProperty/icon/guardian.png", text: "No Guardians Stay" },
                                { icon: "https://www.nobroker.in/static/img/postYourProperty/icon/ge.png", text: "No Girl's Entry" },
                                { icon: "https://www.nobroker.in/static/img/postYourProperty/icon/drinking.png", text: "No Drinking" },
                                { icon: "https://www.nobroker.in/static/img/postYourProperty/icon/nonveg.png", text: "No Non-Veg" }
                            ].map(({ icon, text }, index) => (
                                <label key={index} className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                                    <input type="checkbox" className="h-5 w-5 text-[#009587] border-gray-400 focus:ring-[#009587]" />
                                    <img src={icon} alt={text} className="w-6 h-6 text-gray-500" />
                                    <span className="text-gray-700">{text}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        {/* Gate Closing Time */}
                        <div>
                            <label className="block text-gray-700 font-sm mb-2">Gate Closing Time*</label>
                            <div className="relative">
                                <input
                                    type="time"
                                    name="gateClosingTime"
                                    id="gateClosingTime"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>


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

export default PGDetails