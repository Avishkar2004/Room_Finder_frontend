import React, { useRef, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa'; // Filled star icon

const Gallery = () => {
  // Reference for the file input
  const fileInputRef = useRef(null)
  const [images, setImages] = useState([])

  // Function to trigger the file input when the Add Photos button is cliked
  const handleAddPhotosClick = () => {
    fileInputRef.current.click()
  }

  // Function to handle the file changes
  const handleFileChanges = (event) => {
    const files = Array.from(event.target.files)
    const imagePreviews = files.map((file) => ({
      id: URL.createObjectURL(file), // Creating a unique URL for preview
      file,
      type: "", // Store selected picture type
      isFavorite: false // Track if the image is favorites
    }))
    setImages((prevImages) => [...prevImages, ...imagePreviews]) // Append new images
  }

  // Function to delete an image
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  }

  // Function to update the image type (kitchen , bedroom)
  const handleImageTypeChange = (id, selectedType) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, type: selectedType } : image
      )
    )
  }

  // Function to toggle favorite ⭐
  const handleToggleFavorite = (id) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  }

  return (
    <div className="flex justify-center  items-center w-full">
      <div className="w-full">
        <div className="flex items-center justify-between space-x-2">
          <h1 className="text-sm font-semibold text-[#009587]">Upload photos & videos</h1>
          <div className="flex items-center space-x-1 ml-auto bg-[#009587] text-white p-2 rounded-md">
            <img
              src="https://assets.nobroker.in/nb-new/public/Pyp-Form/upload.svg"
              alt="Upload through phone"
              className="w-6 h-6"
            />
            <span>Upload through phone</span>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="bg-gray-100 border p-10 flex flex-col items-center text-center rounded-lg cursor-pointer" onClick={handleAddPhotosClick}>
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

          <input
            ref={fileInputRef}
            type="file"
            accept='image/*'
            multiple
            onChange={handleFileChanges} // Handle file change
            className='hidden'
          />
        </div>

        {/* Preview Uploaded Images */}
        {images.length > 0 && (
          <div className="mt-6">
            {/* Improved Heading for "Photos added by you" */}
            <div className="flex items-center justify-between px-2 py-2 bg-gray-100 rounded-md shadow-sm">
              <h2 className="text-sm font-semibold text-gray-700">
                📸 Photos added by you <span className="text-[#009587]">({images.length})</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.map((image) => (
                <div key={image.id} className="relative group border rounded-lg p-2 bg-white shadow-md">
                  {/* Image Preview */}
                  <img src={image.id} alt="Preview" className="w-full h-40 object-cover rounded-md" />

                  {/* Select Picture Type Dropdown */}
                  <select
                    className="w-full mt-2 border rounded-md p-1 text-sm"
                    value={image.type}
                    onChange={(e) => handleImageTypeChange(image.id, e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                  </select>

                  {image.type && (
                    <p className='text-xs mt-1 text-center text-gray-600 font-semibold'>
                      Selected:{image.type}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-2 flex justify-between items-center">
                    {/* Star Button */}
                    <button
                      className="text-xs p-2 rounded-full"
                      onClick={() => handleToggleFavorite(image.id)}
                    >
                      {image.isFavorite ? (
                        <FaStar className="text-green-500 text-lg" /> // Green when selected
                      ) : (
                        <CiStar className="text-gray-800 text-lg" /> // Gray when not selected
                      )}
                    </button>

                    {/* Delete Button */}
                    <button
                      className="text-xs bg-red-500 text-white p-1 rounded"
                      onClick={() => handleDeleteImage(image.id)}
                    >
                      ❌ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


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
