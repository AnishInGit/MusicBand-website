import React, { useState, useEffect } from 'react';
import livegif from '../assets/live gif.webp'
import axios from 'axios';

function LiveShow() {
  const [showData, setShowData] = useState({
    youtubeUrl: '',
    venue: '',
    start: '',
    date: '',
    info: '',
    place: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveShowData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/liveshow/66e4f1763d8e063d77d76756'); 
        setShowData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch live show data');
        setLoading(false);
      }
    };

    fetchLiveShowData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loader component if needed
  }

  if (error) {
    return <div>{error}</div>;
  }

  const youtubeEmbedUrl = showData.youtubeUrl;

  return (
    <div className="bg-black flex flex-col h-[calc(100vh-9vh)]">
      <h1 className="text-5xl pt-3 px-4 bg-black flex font-extrabold text-green-500 text-shadow-lg justify-center items-center"> <img src={livegif} alt='LIVE' className='w-1/6 flex'/>&nbsp; SHOW</h1>
      <div className='flex flex-row h-fit pt-8'>
        <div className="relative h-0 pb-[35%] w-full max-w-2xl rounded-lg">
          <iframe
            src={youtubeEmbedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-10 w-full h-[90%] rounded-lg"
          ></iframe>
        </div>

        <div>
          <div className='flex flex-row'>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-green-700 text-shadow-lg">Venue</h1>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold  text-white text-shadow-lg">{showData.venue}</h1>
          </div>

          <div className='flex flex-row'>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-green-700 text-shadow-lg">Start&nbsp;&nbsp;</h1>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-white text-shadow-lg">{showData.start}</h1>
          </div>

          <div className='flex flex-row'>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-green-700 text-shadow-lg">Date&nbsp;&nbsp;</h1>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-white text-shadow-lg">{showData.date}</h1>
          </div>

          <div className='flex flex-row'>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-green-700 text-shadow-lg">Info&nbsp;&nbsp;&nbsp;</h1>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-white text-shadow-lg">{showData.info}</h1>
          </div>

          <div className='flex flex-row'>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-green-700 text-shadow-lg">Place</h1>
            <h1 className="pl-20 text-3xl py-4 px-4 bg-black font-extrabold text-white text-shadow-lg">{showData.place}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveShow;
