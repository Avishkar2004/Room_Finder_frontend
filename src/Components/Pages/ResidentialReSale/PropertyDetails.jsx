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
        carpetArea: "",
        ownershipType: "",
    });
    const [errors, setErrors] = useState({});

    const handleApartmentTypeChange = (e) => {
        setApartmentType(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="flex-1 p-4 shadow-lg rounded-lg">
            <h1 className="text-sm font-semibold text-[#009587]">Property Details</h1>
            <div className="border-t border-gray-300 my-4"></div>

            <form>
                <div className="grid grid-cols-2 gap-6">
                    {/* Property Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Type*</label>
                        <div className="flex items-center p-2 mt-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition duration-200">
                            <span>🏢</span>
                            <select
                                className="w-full p-2"
                                value={apartmentType}
                                onChange={handleApartmentTypeChange}
                            >
                                <option>Select</option>
                                <option>Apartment</option>
                                <option>Independent House/Villa</option>
                                <option>Gated Community Villa</option>
                                <option>Stand Alone Building</option>
                            </select>
                        </div>
                    </div>

                    {/* Apartment Name (Shown only for 'Apartment' & 'Gated Community Villa') */}
                    {(apartmentType === "Apartment" || apartmentType === "Gated Community Villa") && (
                        <div>
                            <label className="block text-xs font-medium text-gray-700">
                                Apartment Name <span className="text-red-500">(Please select from dropdown)</span>*
                            </label>
                            <input
                                type="text"
                                name="propertyName"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="e.g. Ajmera Enclave"
                                value={formData.propertyName}
                                onChange={handleChange}
                            />
                            {errors.propertyName && <p className="text-red-500 text-xs">{errors.propertyName}</p>}
                        </div>
                    )}

                    {/* BHK Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">BHK Type*</label>
                        <select
                            name="bhkType"
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
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
                    </div>

                    <div>
                        {/* Ownership Type */}
                        <label className="block text-sm font-medium text-gray-700">Ownership Type*</label>
                        <div className="relative mt-2 ">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🏡</span>
                            <select
                                name="ownershipType"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white shadow-sm hover:shadow-md"
                                value={apartmentType}
                                onChange={handleApartmentTypeChange}
                            >
                                <option value="">Select</option>
                                <option value="On Lease">On Lease</option>
                                <option value="Self Owned">Self Owned</option>
                            </select>
                        </div>

                        {/* Lease Year (Only if 'On Lease' is selected) */}
                        {apartmentType === "On Lease" && (
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Lease Year*</label>
                                <div className="relative mt-2">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">📆</span>
                                    <input
                                        type="text"
                                        name="propertyName"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white shadow-sm hover:shadow-md"
                                        placeholder="Enter in Years"
                                        value={formData.propertyName}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Error Message */}
                                {errors.propertyName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.propertyName}</p>
                                )}
                            </div>
                        )}
                    </div>


                    {/* Built-Up Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Built-Up Area*</label>
                        <div className="flex items-center mt-2">
                            <input
                                type="text"
                                name="builtUpArea"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="e.g. 1200"
                                value={formData.builtUpArea}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-500">Sq.ft</span>
                        </div>
                    </div>

                    {/* Carpet Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Carpet Area*</label>
                        <div className="flex items-center mt-2">
                            <input
                                type="text"
                                name="carpetArea"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                placeholder="e.g. 1000"
                                value={formData.carpetArea}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-500">Sq.ft</span>
                        </div>
                    </div>

                    {/* Property Age */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Age*</label>
                        <select
                            name="propertyAge"
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                            value={formData.propertyAge}
                            onChange={handleChange}
                        >
                            <option>Select</option>
                            <option>0-1 Year</option>
                            <option>1-5 Years</option>
                            <option>5-10 Years</option>
                            <option>10+ Years</option>
                        </select>
                    </div>

                    {/* Facing */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facing*</label>
                        <select
                            name="facing"
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                            value={formData.facing}
                            onChange={handleChange}
                        >
                            <option>Select</option>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                    </div>

                </div>

                <div className="grid grid-cols-3 gap-6 mt-6">
                    {/* Floor Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Floor Type*</label>
                        <div className="relative mt-2">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🏠</span>
                            <select
                                name="floorType"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white shadow-sm hover:shadow-md"
                                value={formData.floorType}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Marble">Marble</option>
                                <option value="Wooden">Wooden</option>
                                <option value="Tiles">Tiles</option>
                                <option value="Concrete">Concrete</option>
                            </select>
                        </div>
                    </div>

                    {/* Floor */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Floor*</label>
                        <div className="relative mt-2">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔢</span>
                            <select
                                name="floor"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white shadow-sm hover:shadow-md"
                                value={formData.floor}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Total Floors */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Total Floors*</label>
                        <div className="relative mt-2">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🏢</span>
                            <select
                                name="totalFloors"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white shadow-sm hover:shadow-md"
                                value={formData.totalFloors}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default PropertyDetails;
