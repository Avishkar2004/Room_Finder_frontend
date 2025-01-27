import React from 'react'
import { Link } from 'react-router-dom'

const SellorRentProperty = () => {
    return (
        <div className="flex items-center  px-6 py-10 bg-gray-50">
            {/* Text Section (Left Side) */}
            <div className="flex-1 text-left space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Sell or Rent your Property For Free</h2>
            </div>

            {/* Link Section (Right Side) */}
            <div className="flex-shrink-0 text-right">
                <p className='text-sm text-gray-600'>
                    Looking for a property?{" "}
                    <Link to="/browse-properties" className="text-[#009587] font-medium underline">
                        Click here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SellorRentProperty
