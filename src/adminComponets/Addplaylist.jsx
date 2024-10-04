import React, { useState } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

function Addplaylist() {
    const [loading, setLoading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(null); // Track upload status (success or fail)
  
    const [formData, setFormData] = useState({
      title: '',
      artist: '',
      photo: null,
      music: null
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleFileChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title);
      form.append('artist', formData.artist);
      form.append('photo', formData.photo); // File
      form.append('music', formData.music); // File
      
      try {
        const res = await axios.post('http://localhost:4000/upload', form, {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file upload
          },
        });
        setUploadStatus('success'); // Set success status
        setLoading(false);
  
        // Clear the form fields
        setFormData({
          title: '',
          artist: '',
          photo: null,
          music: null
        });
  
        // Make the success message disappear after 5 seconds
        setTimeout(() => {
          setUploadStatus(null);
        }, 5000);
  
      } catch (err) {
        console.error(err);
        setUploadStatus('error'); // Set error status
        setLoading(false);
  
        // Make the error message disappear after 5 seconds
        setTimeout(() => {
          setUploadStatus(null);
        }, 5000);
      }
    };
  
  return (
    <div>
        <h1 className="   rounded-lg bg-stone-900  text-4xl text-rose-600 font-extrabold p-6 text-center"> ADMIN CONTROL</h1>
      <div>
        <h1 className="text-4xl text-green-600 font-extrabold mb-6 text-center my-6">Add song for playlist</h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-8 items-start text-2xl">

          {/* Song Title and Artist Column */}
          <div className="flex flex-col space-y-5 w-full md:w-1/3">
            <div className="w-full">
              <label className="text-xl text-white font-extrabold mb-2 block">Song Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Song Title"
              />
            </div>
            <div className="w-full">
              <label className="text-xl text-white font-extrabold mb-2 block">Artist</label>
              <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Artist name"
              />
            </div>
          </div>

          {/* Image Upload and Song Upload Column */}
          <div className="flex flex-col space-y-5 w-full md:w-1/3">
            <div className="font-[sans-serif] w-full">
              <label className="text-xl text-white font-extrabold mb-2 block">Upload Cover Photo</label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                onChange={handleFileChange}
                className="w-full text-black font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-900 file:hover:bg-gray-600 file:text-gray-100 rounded-2xl"
              />
              <p className="text-xs text-gray-400 mt-2">PNG, JPG, SVG, WEBP, and GIF are Allowed.</p>
            </div>

            <div className="font-[sans-serif] w-full">
              <label className="text-xl text-white font-extrabold mb-2 block">Upload Song File</label>
              <input
                type="file"
                accept="audio/*"
                name="music"
                onChange={handleFileChange}
                className="w-full text-black font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-900 file:hover:bg-gray-600 file:text-gray-100 rounded-2xl"
                required
              />
              <p className="text-xs text-gray-400 mt-2">Only Audio files are Allowed.</p>
            </div>
          </div>

          {/* Upload Button Centered */}
          <div className="w-full md:w-auto my-auto mx-auto ">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition duration-300 ease"
            >
              Upload
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="flex justify-center mt-6">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}

      {/* Success or Error Message */}
      {uploadStatus === 'success' && (
        <div className="mt-6 text-center text-green-600 text-2xl font-semibold">
          Upload successful !!!
        </div>
      )}
      {uploadStatus === 'error' && (
        <div className="mt-6 text-center text-red-600 text-2xl font-semibold">
          Upload failed. Please try again...
        </div>
      )}
    </div>
  )
}

export default Addplaylist