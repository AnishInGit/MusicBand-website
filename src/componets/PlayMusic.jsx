import React, { useState, useRef, useEffect } from 'react';
import volumeUp from '../assets/volume-up.png';

function PlayMusic({ songs, index }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(index);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const { title, artist, photoUrl, musicUrl } = songs[currentSongIndex]; // Use currentSongIndex

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    setCurrentTime(current);
    setProgress((current / duration) * 100);  // Update progress bar
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressBarChange = (e) => {
    const progressBarWidth = progressBarRef.current.offsetWidth;  // Width of the progress bar
    const clickPositionX = e.nativeEvent.offsetX;  // Get the X position where user clicked
    const newTime = (clickPositionX / progressBarWidth) * duration;  // Calculate the new time
    audioRef.current.currentTime = newTime;  // Set the new time in the audio element
    setCurrentTime(newTime);  // Update the current time state
    setProgress((newTime / duration) * 100);  // Update progress state
  };
  

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className="bg-gray-100 top flex justify-center items-center">
        <div className="bg-gray-100 px-8 pb-6 rounded-lg shadow-md w-full">
          {/* Album Cover */}
          <img
            src={photoUrl}
            alt={`${title} - ${artist}`}
            className="w-[60%]   mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
          />
          {/* Song Title */}
          <h2 className="text-xl font-semibold text-center">{title}</h2>
          {/* Artist Name */}
          <p className="text-gray-600 text-sm text-center">{artist}</p>

          {/* Audio Element */}
          <audio
            ref={audioRef}
            src={musicUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleNext}
          />

          {/* Music Controls */}
          <div className="relative mt-6 flex justify-center items-center ">
            {/* Previous Button */}
            <button
              className="p-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none mr-2"
              onClick={handlePrev}
            >
              <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-gray-600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <path
        d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
        fill="#000000"
      />
      <path
        d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
        fill="#000000"
      />
    </svg>
              
            </button>

            {/* Play/Pause Button */}
            <button
              className="p-4 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none mx-4"
              onClick={togglePlayPause}
            >
             <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-gray-600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isPlaying ? (
        <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="currentColor"></path>
      ) : (
        <path
          d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
          fill="#000000"
        />
      )}
    </svg>
            </button>

            {/* Next Button */}
            <button
              className="p-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none ml-2"
              onClick={handleNext}
            >
              <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-gray-600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
        fill="#000000"
      />
      <path
        d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
        fill="#000000"
      />
    </svg>
            </button>

            {/* Volume Control */}
            <div className="absolute flex flex-col items-center -right-10 pb-10">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="transform -rotate-90 w-24 mb-12 "
                onChange={handleVolumeChange}
              />
              <img src={volumeUp} alt="Volume" className="w-6" />
            </div>
          </div>

          {/* Progress Bar */}
          <div
            ref={progressBarRef}  // Use ref to track progress bar dimensions
            className="relative h-2 w-full bg-gray-300 rounded-full cursor-pointer my-4"
            onClick={handleProgressBarChange}  
          >
            <div
              className="absolute h-full bg-green-600 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Time Information */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayMusic;
