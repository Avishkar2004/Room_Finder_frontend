import React, { useState } from 'react';

const Schedule = () => {
  const options = [
    { label: "Everyday", sub: "Mon-Sun" },
    { label: "Weekday", sub: "Mon-Fri" },
    { label: "Weekend", sub: "Sat,Sun" }
  ]
  const [selected, setSelected] = useState([options[2].label]); // Select 3rd option by default
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [errors, setErroor] = useState({})

  const toggleSelection = (label) => {
    setSelected((prev) => prev.includes(label) ? prev.filter((item) => item !== label) : [label]);
  };

  const validateForm = () => {
    let newErrors = {}

    if (!startTime) newErrors.startTime = "Start time is required."
    if (!endTime) newErrors.endTime = "End time is required."
    if (startTime && endTime && startTime >= endTime) {
      newErrors.timeOrder = "Start time must be before end time"
    }
    setErroor(newErrors)
    return Object.keys(newErrors).length === 0
  }

  Schedule.validateForm = validateForm

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully")
    }
  }

  return (
    <div className='p-4'>
      {/* Heading Section */}
      <div>
        <h1 className="text-sm font-semibold  text-[#009587]">
          Make house visits hassle-free by providing us your availability
        </h1>
      </div>
      <div className="border-t border-gray-300 my-4"></div>

      {/* Painting and Cleaning Services Section */}
      <div className="flex mt-7 justify-between gap-8 flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 lg:w-1/2 bg-white border p-4 ">
          <div className="flex items-center gap-4">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-semibold text-gray-600">
                Freshly Painted House gets Rented out 73% faster
              </h2>
              <img
                src="https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg"
                alt="Painted House"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className='flex gap-2 mt-1'>
                <span className='bg-gray-300 inline-flex items-center rounded-full text-[10px] px-2 py-1'>
                  <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                    alt="Price match Guarantee" className="w-3 h-3 mr-1" />
                  Price Match Guarantee
                </span>
                <span className='bg-gray-300 inline-flex items-center rounded-full text-[10px] px-2 py-1'>
                  <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                    alt="One Year Guarantee" className="w-3 h-3 mr-1" />
                  One Year Guarantee
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-2">Professional painting from ₹ 5/sqft</p>
              <div className="mt-4 flex gap-4">
                <button className="bg-[#009587] text-white text-xs py-2 px-4 rounded-md">
                  Tell me the price
                </button>
                <button className="bg-gray-300 text-gray-700 text-xs py-2 px-4 rounded-md">
                  I don't want Painting
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Cleaning Service Section */}
        <div className="w-full sm:w-1/2 lg:w-1/2 bg-white border p-4 ">
          <div className="flex items-center gap-4">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-semibold text-gray-600">
                Tenants Love a Spotless House!
              </h2>
              <img
                src="https://assets.nobroker.in/nb-new/public/Home-Services/cleaning.jpg"
                alt="Clean House"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className='flex gap-2 mt-1'>
                <span className='bg-gray-300 inline-flex items-center rounded-full text-[10px] px-2 py-1'>
                  <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg" alt="Price match Guarantee" className='w-4 h-4 mr-1' />Price Match Guarantee
                </span>
                <span className='bg-gray-300 inline-flex items-center rounded-full text-[10px] px-2 py-1'>
                  <img src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg" alt="Price match Guarantee" className='w-4 h-4 mr-1' />One Year Guarantee
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Full Home Cleaning from ₹ 1900</p>
              <div className="mt-4 flex gap-4">
                <button className="bg-[#009587] text-white text-xs py-2 px-4 rounded-md">
                  Tell me the price
                </button>
                <button className="bg-gray-300 text-gray-700 text-xs py-2 px-4 rounded-md">
                  I don't want Cleaning
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t mt-8 border-gray-300 my-4"></div>

      <div className="mb-6 mt-8 flex space-x-8">
        <div className='w-1/2'>
          <label className='block text-gray-800 text-sm font-semibold mb-3'>
            Availability
          </label>

          <div className='flex gap-3'>
            {options.map((option) => (
              <button key={option.label}
                className={`border rounded-lg px-4 py-2 text-sm text-center transition-all  ${selected.includes(option.label)
                  ? "bg-[#009587] text-white"
                  : "bg-white text-gray-700 border-gray-300"
                  }`}
                onClick={() => toggleSelection(option.label)}
              >
                <span className='block font-semibold'>{option.label}</span>
                <span className='block text-sm text-gray-700'>{option.sub}</span>
              </button>
            ))}
          </div>
        </div>


        <div className='w-1/2'>
          <label className='block text-gray-800 text-sm font-semibold mb-3'>Select Time Schedule
          </label>

          {/* Start time and end time */}
          <form onClick={handleSubmit}>
            <div className='flex gap-6'>
              <div className='flex-1'>
                <label className='block text-gray-600 text-xs mb-1'>Start Time</label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-lg"
                />
                {errors.startTime && <p className='text-red-500 text-xs'>{errors.startTime}</p>}
              </div>

              <div className='flex-1'>
                <label className="block text-gray-600 text-xs mb-1">End Time</label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-lg"
                />
                {errors.endTime && <p className='text-red-500 text-xs'>{errors.endTime}</p>}
                {errors.timeOrder && <p className='text-red-500 text-xs'>{errors.timeOrder}</p>}
              </div>
            </div>
          </form>


          <div className='mt-5 flex items-center'>
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <span className="ml-3 text-sm text-gray-700">Available All Day</span>
          </div>

        </div>
      </div>

    </div >
  );
};

export default Schedule;
