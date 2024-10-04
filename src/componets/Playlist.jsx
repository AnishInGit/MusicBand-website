import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayMusic from './PlayMusic';
import backButton from '../assets/back-arrow.png';
import list from '../assets/preferences.png';

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Handle song selection
  const handleSongSelect = (song, index) => {
    setSelectedSong(song); 
    setCurrentSongIndex(index); // set the current index
  };

  if (loading) {
    return <div className="text-center mt-10">Loading playlist...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full h-screen relative">
      {selectedSong ? (
        <div className="bg-gray-100 shadow-md rounded-lg z-50 overflow-y-scroll max-h-[75%] no-scrollbar mr-28">
          <button className="sticky top-2 flex justify-start m-2" onClick={() => setSelectedSong(null)}>
            <img src={backButton} className="max-h-10 max-w-10 flex" alt="Back" />
          </button>
          {/* Pass the currentSongIndex and songs array */}
          <PlayMusic songs={songs} index={currentSongIndex} />
        </div>
      ) : (
        <div className="bg-gray-100 shadow-md rounded-lg z-50 overflow-y-scroll max-h-[75%] no-scrollbar mr-28">
          <div className="sticky top-0 flex justify-start bg-green-600 py-2 px-4">
            <img src={list} className="max-h-8 max-w-8 flex" alt="List" />
            <h2 className="text-2xl font-bold text-black ml-2">PLAYLIST</h2>
          </div>
          {songs.map((song, index) => (
            <div
              key={song._id}
              className="flex border-b-2 cursor-pointer hover:shadow-md px-2"
              onClick={() => handleSongSelect(song, index)}
            >
              <div className="flex items-center py-3 px-6">
                <span className="text-gray-700 text-lg font-medium mr-4 flex items-center justify-center">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;
