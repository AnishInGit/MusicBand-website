import React, { useState } from 'react'; 
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import Allcontactdetails from './Allcontactdetails';

function UpdateLiveshow() {
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const [formData, setFormData] = useState({
    youtubeUrl: '',
    venue: '',
    start: '',
    date: '',
    info: '',
    place: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await axios.put('http://localhost:4000/updateliveshow/66e4f1763d8e063d77d76756', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUploadStatus('success'); // Set success status
      setLoading(false);

      // Clear the form fields
      setFormData({
        youtubeUrl: '',
        venue: '',
        start: '',
        date: '',
        info: '',
        place: '',
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
      <div className='my-10'>
        <h1 className="text-4xl text-green-600 font-extrabold mb-6 text-center">Update Liveshow Details</h1>
        
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
          Update successful !!!
        </div>
      )}
      {uploadStatus === 'error' && (
        <div className="mt-6 text-center text-red-600 text-2xl font-semibold">
          Update failed. Please try again...
        </div>
      )}

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-0 items-start mt-4 text-2xl">

          {/* Youtube URL and Venue */}
          <div className="flex flex-col space-y-5 w-full md:w-1/3">
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Youtube URL</label>
              <input
                type="text"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Youtube URL"
              />
            </div>
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Venue name"
              />
            </div>
          </div>

          {/* Start and Date */}
          <div className="flex flex-col space-y-5 w-full md:w-1/3">
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Start</label>
              <input
                type="text"
                name="start"
                value={formData.start}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Start Time"
              />
            </div>
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Event Date"
              />
            </div>
          </div>

          {/* Info and Place */}
          <div className="flex flex-col space-y-5 w-full md:w-1/3">
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Info</label>
              <input
                type="text"
                name="info"
                value={formData.info}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Info"
              />
            </div>
            <div className="w-4/5">
              <label className="text-xl text-white font-extrabold mb-2 block">Place</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                required
                className="w-full text-lg py-3 bg-transparent bg-white placeholder:text-slate-400 text-slate-700 border border-slate-300 rounded-md px-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Place name"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-auto my-10 mx-auto">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition duration-300 ease"
            >
              Update
            </button>
          </div>
        
        </form>
      </div>


      <Allcontactdetails/>
    </div>
  );
}

export default UpdateLiveshow;
