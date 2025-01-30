import React from 'react';

const Gallery = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full">
        <h1 className="text-md font-semibold text-[#009587]">
          Upload photos & videos
        </h1>
        <div className="border-t border-gray-300 my-4"></div>

        <div className="bg-gray-100 border p-10 flex flex-col items-center text-center rounded-lg">
          <img
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CameraAlt.png"
            alt="Upload images"
            className="w-10 h-10 mb-2"
          />
          <p className="text-gray-700 text-sm font-bold">
            Add photos to get 5X more responses.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            90% tenants contact on properties with photos.
          </p>

          <button className="px-4 py-2 bg-[#009587] text-white font-semibold rounded-md">
            Add Photos
          </button>
        </div>

        {/* OR Section with Borders */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm bg-gray-400 rounded-full">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>


        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-gray-700 text-sm font-bold">
            We can upload photos on your behalf
          </span>
          <div className='flex flex-row space-x-28'>
            <div className='w-full max-w-xs border p-4 rounded-lg text-center'>
              <p className="text-gray-700 text-sm">📱 Whatsapp us on</p>
              <div className="border-t border-gray-300 my-4"></div>

              <p className="font-semibold text-[#009587]">0-9241-700-000</p>
            </div>

            <div className='w-full max-w-xs border p-4 rounded-lg text-center'>
              <p className="text-gray-700 text-sm">📧 Email to</p>
              <div className="border-t border-gray-300 my-4"></div>
              <p className="font-semibold text-[#009587]">photos@nobroker.in</p>

            </div>
          </div>

        </div>


        <div className="bg-gray-100 border mt-10 p-10 flex flex-col items-center text-center rounded-lg">
          <img
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Videocam.png"
            alt="Upload videos"
            className="w-10 h-10 mb-2"
          />
          <p className="text-gray-700 text-sm font-bold">
            Add Videos to get 5X more responses.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            90% tenants contact on properties with videos.
          </p>

          <button className="px-4 py-2 bg-[#009587] text-white font-semibold rounded-md">
            Add Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
