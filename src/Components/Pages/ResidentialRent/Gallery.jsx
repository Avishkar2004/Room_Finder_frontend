import React, { useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Gallery = () => {
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleAddPhotosClick = () => imageInputRef.current.click();
  const handleAddVideosClick = () => videoInputRef.current.click();

  const handleFileChanges = (event, type) => {
    const files = Array.from(event.target.files);
    const filePreviews = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
      type: "",
      isFavorite: false,
    }));

    if (type === "image") {
      setImages((prevImages) => [...prevImages, ...filePreviews]);
    } else if (type === "video") {
      setVideos((prevVideos) => [...prevVideos, ...filePreviews]);
    }
  };

  const handleDeleteImage = (id) =>
    setImages(images.filter((image) => image.id !== id));

  const handleDeleteVideo = (id) =>
    setVideos(videos.filter((video) => video.id !== id));

  const handleTypeChange = (id, selectedType, type) => {
    if (type === "image") {
      setImages(
        images.map((image) =>
          image.id === id ? { ...image, type: selectedType } : image
        )
      );
    } else if (type === "video") {
      setVideos(
        videos.map((video) =>
          video.id === id ? { ...video, type: selectedType } : video
        )
      );
    }
  };

  const handleToggleFavorite = (id) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  };

  return (
    <div className="flex justify-center items-center p-4 w-full">
      <div className="w-full">
        <h1 className="text-sm font-semibold text-[#009587]">
          Upload photos & videos
        </h1>
        <div className="border-t border-gray-300 my-4"></div>

        {/* Upload Images Section */}
        <div
          className="bg-gray-100 border p-10 flex flex-col items-center text-center rounded-lg cursor-pointer"
          onClick={handleAddPhotosClick}
        >
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
            ref={imageInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChanges(e, "image")}
            className="hidden"
          />
        </div>

        {/* Display Uploaded Images */}
        {images.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between px-2 py-2 bg-gray-100 rounded-md shadow-sm">
              <h2 className="text-sm font-semibold text-gray-700">
                📸 Photos added by you{" "}
                <span className="text-[#009587]">({images.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative group border rounded-lg p-2 bg-white shadow-md"
                >
                  <img
                    src={image.id}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <select
                    className="w-full mt-2 border rounded-md p-1 text-sm"
                    value={image.type}
                    onChange={(e) =>
                      handleTypeChange(image.id, e.target.value, "image")
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                  </select>
                  <p className="text-xs mt-1 text-center text-gray-600 font-semibold">
                    {image.type && `Selected: ${image.type}`}
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <button
                      className="text-xs p-2 rounded-full"
                      onClick={() => handleToggleFavorite(image.id)}
                    >
                      {image.isFavorite ? (
                        <FaStar className="text-green-500 text-lg" />
                      ) : (
                        <CiStar className="text-gray-800 text-lg" />
                      )}
                    </button>
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

        {/* Upload Videos Section */}
        <div className="border-t border-gray-300 my-4"></div>
        <div
          className="bg-gray-100 border p-10 flex flex-col items-center text-center rounded-lg cursor-pointer"
          onClick={handleAddVideosClick}
        >
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
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            multiple
            onChange={(e) => handleFileChanges(e, "video")}
            className="hidden"
          />
        </div>

        {/* Display Uploaded Videos */}
        {videos.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between px-2 py-2 bg-gray-100 rounded-md shadow-sm">
              <h2 className="text-sm font-semibold text-gray-700">
                🎥 Videos added by you{" "}
                <span className="text-[#009587]">({videos.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {videos.map((video) => (
                <div key={video.id} className="relative group border rounded-lg p-2 bg-white shadow-md">
                  <video src={video.id} controls className="w-full h-40 object-cover rounded-md" />
                  <button className="text-xs bg-red-500 text-white p-1 rounded mt-2 w-full"
                    onClick={() => handleDeleteVideo(video.id)}>
                    ❌ Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
