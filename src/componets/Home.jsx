import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import backgroundlogo from "../assets/backgroundlogo.webm"; 
import bgVideo from "../assets/BgVideo.mp4"
import Playlist from './Playlist';
import playlistIcon from '../assets/musicplaylist-Icon.png'
function Home() {

   const [shouldOpenPlaylist, setShouldOpenPlaylist]=useState(false);
 
   const lines = [
    // "Enjoy",
    // "Discover ",
    // "Embracing ",
    // "And feel the magical power"
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines.length]);

  return (
    <>
      {/* Fixed Navbar with Margin and Rounded Corners */}
      <nav className="sticky top-0 mx-20 flex flex-row mt-8 z-20 border-gray-200 bg-black dark:bg-gray-950 dark:border-gray-950 shadow-lg rounded-full">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className="bg-white h-8 ml-10" alt="Jam_Inn_5 Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Jam_Inn_5</span>
  </a>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button
      data-collapse-toggle="navbar-solid-bg"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-solid-bg"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        
        {/* Home */}
        <li className="nav-li-animation" style={{ animationDelay: '0.3s' }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
            Home
          </button>
        </li>
        
        {/* Live Show */}
        <li className="nav-li-animation" style={{ animationDelay: '0.6s' }}>
          <button onClick={() => window.scrollTo({ top: 575, behavior: 'smooth' })}
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Live Show
          </button>
        </li>
        
        {/* Pricing */}
        <li className="nav-li-animation" style={{ animationDelay: '0.9s' }}>
          <button onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pricing
          </button>
        </li>
        
        {/* Contact us */}
        <li className="nav-li-animation" style={{ animationDelay: '1.2s' }}>
          <button onClick={() => window.scrollTo({ top: 1830, behavior: 'smooth' })}
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Contact us
          </button>
        </li>
        
        {/* About */}
        <li className="nav-li-animation" style={{ animationDelay: '1.5s' }}>
          <button onClick={() => window.scrollTo({ top: 2465, behavior: 'smooth' })}
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            About
          </button>
        </li>
      </ul>
    </div>
  </div>
  <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <button onClick={() => setShouldOpenPlaylist(!shouldOpenPlaylist)}>
      <img src={playlistIcon} alt="Playlist" className="max-w-12 max-h-12 mr-10 mt-2" />
    </button>
  </a>
</nav>

     <div className='flex flex-row'> 
      {/* Bold Text Above Video */}
      <div className=" mt-[calc(100vh-85vh)] relative z-10 flex flex-col justify-start items-start h-[calc(100vh-31vh)] pl-20 space-y-5">
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <h1
          key={index}
          className="text-5xl font-bold text-white "
        >
          <span className="typing-line">{line}</span>
        </h1>
      ))}
    </div>


        {/* Import Playlist */}
       { shouldOpenPlaylist &&
      <div className='absolute flex  z-10 w-[36%]  right-0 mt-7 h-[72%]  '>         
      <Playlist/>
      </div>
      }

      </div>


      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 h-screen">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover ">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video background.
        </video>
        <video autoPlay  muted className="absolute bottom-0 right-0 ">
          <source src={backgroundlogo}  />
          Your browser does not support the logo video.
        </video>
      </div>

     
    </>
  );
}

export default Home;
