import React, { useState } from 'react'
import ContactUs from './ContactUs'

function Pricing() {


   const [selectPackage,setSelectPackage]=useState("Choose a Plan")


  const handleOnclick =(pack)=>{
         window.scrollTo({ top: 1830, behavior: 'smooth'})
         setSelectPackage(pack)
  }
  return (
    <>
    <div class="font-[sans-serif] p-10  bg-black ">
      <div class="max-w-screen max-lg:max-w-screen mx-auto">
        <div class="text-center">
          <h2 class="text-5xl py-4 font-extrabold text-green-500  text-shadow-lg">PRICING</h2>
          <p class="text-sm text-gray-200">Select your plan according to your need</p>
        </div>

        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto ">
           

          <div class=" bg-gray-50  hover:shadow-[0_2px_22px_-4px_white] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div class="h-32 bg-gray-700 text-center p-4">
              <h3 class="text-2xl text-white mb-1">Starter</h3>
              <p class="text-xs text-white">1 Month</p>
            </div>

            <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <h3 class="text-2xl">$10</h3>
            </div>

            <div class="px-6 py-4 mt-4">
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  6 Team Members
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited Book Mark
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited basic feature
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited updates
                </li>
              </ul>

              <button type="button" onClick={()=>handleOnclick("Package 1")} class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full">Select</button>
            </div>
          </div>


          <div class="bg-gray-50 hover:shadow-[0_2px_22px_-4px_white] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 relative">
            <span class="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">Most popular</span>
            <div class="h-32 bg-blue-600 text-center p-4">
              <h3 class="text-2xl text-white mb-1">Professional</h3>
              <p class="text-xs text-white">2 Months</p>
            </div>

            <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <p class="text-[10px] font-bold">Save 29%</p>
              <h3 class="text-2xl">$70</h3>
            </div>

            <div class="px-6 py-4 mt-4">
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  15 Team Members
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited Book Mark
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited basic feature
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited updates
                </li>
              </ul>

              <button type="button" onClick={()=>handleOnclick("Package 2")} class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full">Select</button>
            </div>
          </div>

          <div class="bg-gray-50 hover:shadow-[0_2px_22px_-4px_white] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div class="h-32 bg-emerald-700 text-center p-4">
              <h3 class="text-2xl text-white mb-1">Business</h3>
              <p class="text-xs text-white">3 Month</p>
            </div>

            <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-emerald-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <p class="text-[10px] font-bold">Save 33%</p>
              <h3 class="text-2xl">$99</h3>
            </div>

            <div class="px-6 py-4 mt-4">
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  50 Team Members
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited Book Mark
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited basic feature
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited updates
                </li>
              </ul>

              <button type="button" onClick={()=>handleOnclick("Package 3")} class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-emerald-700 hover:bg-emerald-800 rounded-full">Select</button>
            </div>
          </div>

          <div class="bg-gray-50 hover:shadow-[0_2px_22px_-4px_white] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div class="h-32 bg-purple-800 text-center p-4">
              <h3 class="text-2xl text-white mb-1">Starter</h3>
              <p class="text-xs text-white">1 Month</p>
            </div>

            <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-purple-800 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <h3 class="text-2xl">$10</h3>
            </div>

            <div class="px-6 py-4 mt-4">
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  6 Team Members
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited Book Mark
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited basic feature
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Unlimited updates
                </li>
              </ul>

              <button type="button" onClick={()=>handleOnclick("Package 4")} class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-purple-800 hover:bg-purple-900 rounded-full">Select</button>
            </div>
          </div>

        </div>
      </div>
    </div>


    <ContactUs selectPackage={selectPackage}/>
  
    </>
  )
}
export default Pricing