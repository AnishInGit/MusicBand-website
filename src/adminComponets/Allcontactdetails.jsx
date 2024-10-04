import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Allcontactdetails() {
   
  const[contactdetails,setContactdetails] =useState([])
  const[loading, setLoading]=useState(true);


 useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/contactdetails');
        setContactdetails(response.data); // Assuming the API returns an array of contactsinfo
        setLoading(false);
      } catch (err) {
        console.error('Error fetching song data:', err);
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);


  return (
    <div className='text-white mt-6'>
        <h1 className="text-4xl text-green-600 font-extrabold mb-6 text-center">All Contact Messages</h1>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
     {contactdetails.map((contact,index)=>(
        <section class="mb-2 border text-black  bg-neutral-100 p-4 rounded-lg max-w-full  overflow-auto ">
    <div class="mx-auto">
        <div class="card md:flex max-w-lg">
            <div class="flex-grow text-center md:text-left">
                <p class=" text-2xl">Name: <b>{contact.name}</b> </p>
                <h3 class="text-xl heading">Phone No: <b>{contact.phone}</b></h3>
                <h3 class="text-xl heading">Package: <b>{contact.packagename}</b></h3>
                <p class="mt-2 mb-3"><b>Message:  </b>{contact.message}</p>
            </div>
        </div>
    </div>
</section>
     ))}
     </div>

    </div>
  )
}

export default Allcontactdetails