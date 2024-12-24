"use client";

import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {

  return (
    <div>
      <nav className='fixed left-0 top-0 w-full h-16 md:h-20 px-4 md:px-16 bg-gray-300/10 z-[100] bg- text-white flex sm:flex-row justify-between items-center backdrop-blur-lg shadow-lg'>
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
            <button className="bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 rounded-full text-neutral-950 mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-2 sm:px-2 py-1  sm:py-1 text-sm sm:text-base transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
              <a href="https://bit.ly/Nexus_registration">Register</a>
            </button>
            <button className="bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 rounded-full text-neutral-950 mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-2 sm:px-2 py-1  sm:py-1 text-sm sm:text-base transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
              <a href="https://drive.google.com/file/d/109AtUzjeKfoprSp6S0zLmKx3ccZtixaX/view?usp=sharing">Problem Statement</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar