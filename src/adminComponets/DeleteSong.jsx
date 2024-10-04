import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DeleteSong() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const [confirmDelete,setConfirmDelete]=useState(null);
// Fetch songs from API when the component mounts
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allplaylistsong');
        setSongs(response.data); 
        setLoading(false);     
    
      } catch (err) {
        console.error('Error fetching song data:', err);
        setError('Failed to fetch songs. Please try again later.');
        setLoading(false);


      }
    };

    fetchSongs();
  }, []);



// Delete the selected song
const handleOnclick=async(id)=>{
    try {
        await axios.delete(`http://localhost:4000/deleteplaylist/${id}`) 
            setConfirmDelete('success');
      // Remove the deleted song from the state
        setSongs(songs.filter(song => song._id !== id));
   // Make the success message disappear after 5 seconds
      setTimeout(() => {
        setConfirmDelete(null);
        }, 5000);

    } catch (error) {
        setConfirmDelete('error');
        console.log(error)

        // Make the error message disappear after 5 seconds
      setTimeout(() => {
        setConfirmDelete(null);
      }, 5000);
    }
}

  return (
    <div>
  <h2 className="text-5xl font-bold text-green-600 m-8">Playlist</h2>
 
    {confirmDelete === 'success' && (
      <div className="mt-6 text-center text-green-600 text-2xl font-semibold">
        Delete successful.
      </div>
    )}
    {confirmDelete === 'error' && (
      <div className="mt-6 text-center text-red-600 text-2xl font-semibold">
        Delete request failed. Please try again...
      </div>
    )}
 <div className='bg-white mx-6 rounded-lg max-h-[calc(100vh-30vh)] overflow-auto my-6'>
    {songs.map((song, index) => (
      <div
        key={song._id}
        className="flex flex-row border-b-2 px-2 justify-between items-center hover:shadow-md"
      >
        {/* Song Details */}
        <div className="flex items-center py-3 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">
            {index + 1}
          </span>
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={song.photoUrl || 'default-cover.jpg'}
            alt={song.title}
          />
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-950">{song.title}</h3>
            <p className="text-gray-700 text-base">{song.artist}</p>
          </div>
        </div>

        {/* Delete Button */}
        <div
          onClick={() => handleOnclick(song._id)}
          className='text-red-600 font-medium cursor-pointer px-6'
        >
          Delete
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default DeleteSong