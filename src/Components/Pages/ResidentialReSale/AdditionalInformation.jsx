import React, { useState } from 'react'

const AdditionalInformation = () => {
    const [showCompletionCertificate, setshowCompletionCertificate] = useState(false)


    const handleOccupancyChange = (event) => {
        setshowCompletionCertificate(event.target.value === "No")
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-sm font-semibold text-[#009587]">Provide Location Details</h1>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Have you paid Property Tax?*</label>
                    <select
                        name="Tax"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Don't Know">Don't Know</option>
                    </select>
                </div>

                <div>
                    <label className='block text-gray-700 font-medium mb-2'>Do You have Occupancy Certificate?*</label>
                    <select name="OccupancyCertificate"
                        className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
                        onChange={handleOccupancyChange}
                    >

                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Don't Know">Don't Know</option>
                    </select>
                </div>


                <div>
                    <label className='block text-gray-700 font-medium mb-2'>Do You have Sale Deed Certificate?*
                    </label>
                    <select name="Certificate"
                        className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
                    >

                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Don't Know">Don't Know</option>
                    </select>
                </div>

                {showCompletionCertificate && (
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Do You have Completion Certificate?*</label>
                        <select name="OccupancyCertificate" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        >

                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Don't Know">Don't Know</option>
                        </select>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AdditionalInformation