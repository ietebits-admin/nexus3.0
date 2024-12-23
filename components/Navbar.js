"use client";

import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isClick,setisClick] = useState(false);

    const toggleNavbar =() =>{
        setisClick(!isClick)
    }
  return (
    <div>
      <nav className='fixed right-0 left-0 top-0 lg:px-16  bg-black/40  z-[100]  bg-black text-white  h-auto sm:h-15 md:h-19 lg:h-19  py-2 px-3 flex sm:flex-row justify-between items-center backdrop-blur-lg border-b  shadow-lg p-6'>
        <div>
               <Link href="/">
            <img
              src="/img/154.png"
              alt="navLogo"
              className=' hover:scale-105 transition-all'
              width={90}
              height={120}
            />
          </Link>
        </div> 
        <div className='flex flex-row space-y-3 sm:space-y-0  sm:space-x-5'>
        <div className="flex flex-row md:block w-full sm:w-auto ">
        <button className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-full  bg-white text-white mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-2 sm:px-2 py-1  sm:py-1 text-xs sm:text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
  <a href="https://bit.ly/Nexus_registration">REGISTER</a> 
</button>
        <button className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-full  bg-white text-white mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-2 sm:px-2 py-1  sm:py-1 text-xs sm:text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
      <a href="https://drive.google.com/file/d/109AtUzjeKfoprSp6S0zLmKx3ccZtixaX/view?usp=sharing">PROBLEM STATEMENT</a>  
</button>
       
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar