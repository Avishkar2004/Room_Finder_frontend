import React, { useState } from "react";

const PropertyDetails = () => {
    const [apartmentType, setApartmentType] = useState("");
    const [formData, setFormData] = useState({
        propertyName: "",
        price: "",
        bhkType: "",
        floor: "",
        totalFloors: "",
        propertyAge: "",
        facing: "",
        builtUpArea: "",
        RoomType: "",
        TenantType: ""
    });
    const [errors, setErrors] = useState({});

    const handleApartmentTypeChange = (e) => {
        setApartmentType(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Define validateForm function
    const validateForm = () => {
        const newErrors = {};
        const { propertyName, price, bhkType, floor, totalFloors, propertyAge, facing, builtUpArea } = formData;

        if (!propertyName) newErrors.propertyName = "Property Name is required";
        if (!price || isNaN(price)) newErrors.price = "Price is required and should be a valid number";
        if (!bhkType) newErrors.bhkType = "BHK Type is required";
        if (!floor) newErrors.floor = "Floor is required";
        if (!totalFloors) newErrors.totalFloors = "Total Floors is required";
        if (!propertyAge) newErrors.propertyAge = "Property Age is required";
        if (!facing) newErrors.facing = "Facing is required";
        if (!builtUpArea || isNaN(builtUpArea)) newErrors.builtUpArea = "Built Up Area is required and should be a valid number";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // After defining validateForm, ensure you export it
    PropertyDetails.validateForm = validateForm;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, submit the form data
            console.log("Form data submitted", formData);
        }
    };

    return (
        <div className="flex-1 p-4 shadow-lg rounded-lg">
            <h1 className="text-sm font-semibold text-[#009587]">Property Details</h1>
            <div className="border-t border-gray-300 my-4"></div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    {/* Apartment Type */}
                    <div className="flex items-center space-x-8">
                        <div className="w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">Apartment Type*</label>
                            <div className="flex items-center p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                <span>🏢</span>
                                <select className="w-full p-2" value={apartmentType} onChange={handleApartmentTypeChange}>
                                    <option>Select</option>
                                    <option>Apartment</option>
                                    <option>Independent House/Villa</option>
                                    <option>Gated Community Villa</option>
                                </select>
                            </div>
                        </div>
                        {(apartmentType === 'Apartment' || apartmentType === 'Gated Community Villa') && (
                            <div className="w-[40]">
                                <label className="block text-xs font-medium text-gray-700">
                                    Apartment Name <span className="text-red-500">(Please select from dropdown)</span>*
                                </label>
                                <input
                                    type="text"
                                    name="propertyName"
                                    className="p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                    placeholder="e.g.Ajmera Enclave"
                                    value={formData.propertyName}
                                    onChange={handleChange}
                                />
                                {errors.propertyName && <p className="text-red-500 text-xs">{errors.propertyName}</p>}
                            </div>
                        )}
                    </div>

                    {/* Other fields like BHK Type, Floor, Total Floors, Property Age, Facing, Built Up Area */}
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">BHK Type*</label>
                            <select
                                name="bhkType"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                value={formData.bhkType}
                                onChange={handleChange}
                            >
                                <option>Select</option>
                                <option>1 BHK</option>
                                <option>2 BHK</option>
                                <option>3 BHK</option>
                                <option>4 BHK</option>
                                <option>4+ BHK</option>
                            </select>
                            {errors.bhkType && <p className="text-red-500 text-xs">{errors.bhkType}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Floor*</label>
                            <select
                                name="floor"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                value={formData.floor}
                                onChange={handleChange}
                            >
                                <option>Select</option>
                                <option>Ground Floor</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            {errors.floor && <p className="text-red-500 text-xs">{errors.floor}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Floors*</label>
                            <select
                                name="totalFloors"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                value={formData.totalFloors}
                                onChange={handleChange}
                            >
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                            {errors.totalFloors && <p className="text-red-500 text-xs">{errors.totalFloors}</p>}
                        </div>
                    </div>


                    <div className="mb-6 grid grid-cols-2 gap-6">
                        {/* Room Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type*</label>
                            <div className="flex items-center space-x-6 bg-gray-100 p-3 rounded-lg border border-gray-300">
                                <label className="flex items-center text-gray-600 cursor-pointer hover:text-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="RoomType"
                                        value="SingleRoom"
                                        checked={formData.RoomType === 'SingleRoom'}
                                        onChange={handleChange}
                                        className="mr-2 accent-blue-500"
                                    />
                                    Single Room
                                </label>
                                <label className="flex items-center text-gray-600 cursor-pointer hover:text-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="RoomType"
                                        value="SharedRoom"
                                        checked={formData.RoomType === 'SharedRoom'}
                                        onChange={handleChange}
                                        className="mr-2 accent-blue-500"
                                    />
                                    Shared Room
                                </label>
                            </div>
                            {errors.RoomType && <p className="text-red-500 text-xs mt-1">{errors.RoomType}</p>}
                        </div>

                        {/* Tenant Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Tenant Type*</label>
                            <div className="flex items-center space-x-6 bg-gray-100 p-3 rounded-lg border border-gray-300">
                                <label className="flex items-center text-gray-600 cursor-pointer hover:text-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="TenantType"
                                        value="Male"
                                        checked={formData.TenantType === 'Male'}
                                        onChange={handleChange}
                                        className="mr-2 accent-blue-500"
                                    />
                                    Male
                                </label>
                                <label className="flex items-center text-gray-600 cursor-pointer hover:text-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="TenantType"
                                        value="Female"
                                        checked={formData.TenantType === 'Female'}
                                        onChange={handleChange}
                                        className="mr-2 accent-blue-500"
                                    />
                                    Female
                                </label>
                            </div>
                            {errors.TenantType && <p className="text-red-500 text-xs mt-1">{errors.TenantType}</p>}
                        </div>
                    </div>



                    {/* Property Age, Facing, Built Up Area */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Property Age*</label>
                                <select
                                    name="propertyAge"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                    value={formData.propertyAge}
                                    onChange={handleChange}
                                >
                                    <option>Select</option>
                                    <option>Less than a year</option>
                                    <option>1 to 3 years</option>
                                    <option>3 to 5 years</option>
                                    <option>5 to 10 years</option>
                                    <option>More than 10 years</option>
                                </select>
                                {errors.propertyAge && <p className="text-red-500 text-xs">{errors.propertyAge}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Facing</label>
                                <div className="flex items-center mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                                    {/* <span className="mr-2 text-gray-500">🌅</span> */}
                                    <img src="https://www.nobroker.in/static/img/postYourProperty/icon/facing.png" alt="Property Facing" className="mr-2" />
                                    <select name="facing" className="w-full p-2 bg-transparent focus:outline-none" value={formData.facing} onChange={handleChange}>
                                        <option className="text-gray-400">Property Facing</option>
                                        <option>North</option>
                                        <option>South</option>
                                        <option>East</option>
                                        <option>West</option>
                                        <option>North-East</option>
                                        <option>South-East</option>
                                        <option>North-West</option>
                                        <option>South-West</option>
                                    </select>
                                </div>
                                {errors.facing && <p className="text-red-500 text-xs">{errors.facing}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Built Up Area*</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    name="builtUpArea"
                                    className="p-2 w-1/2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200"
                                    placeholder="Enter Built Up Area"
                                    value={formData.builtUpArea}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Sq.ft</span>
                            </div>
                            {errors.builtUpArea && <p className="text-red-500 text-xs">{errors.builtUpArea}</p>}
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};


export default PropertyDetails;
