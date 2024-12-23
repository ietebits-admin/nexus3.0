import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-b from-slate-800 to-slate-900 mt-4 mb-5 py-4 px-5 text-white">
        <div className="flex flex-col justify-evenly sm:flex-row">

          {/* Logo and Social Media Links */}
          <div className="text-center md:text-left">
            <Link href="/">
              <img
                src="/img/ieteLogo.png"
                alt="navLogo"
                className=" mx-auto md:mx-4 hover:scale-105 transition-all mt-2"
                width={80}
                height={30}
              />
              {/* deihdgewig */}
            </Link>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://www.facebook.com/ietebits">
                <FaFacebookF className="text-white h-8 w-8 rounded-full bg-blue-800 p-2 filter grayscale hover:grayscale-0 hover:bg-blue-800 transition duration-300" />
              </Link>
              <Link href="https://www.instagram.com/ietebits?igsh=eXVoamFtdjUwcm16">
                <FaInstagram className="text-white h-8 w-8 rounded-full bg-pink-400 p-2 filter grayscale hover:grayscale-0 hover:bg-pink-400 transition duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/company/iete-students-chapter-bit-sindri123/">
                <FaLinkedin className="text-white h-8 w-8 rounded-full bg-blue-500 p-2 filter grayscale hover:grayscale-0 hover:bg-blue-500 transition duration-300" />
              </Link>
            </div>

          </div>

          {/* Contact Information */}
          <div className='mr-30 mt-8 sm:mr-2 sm:ml-0'>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contacts</h3>
            <ul className="space-y-3">
              <li>
                <FaPhoneAlt className="inline-block align-middle mr-2" />
                Priyanshu <span className="text-sm md:text-base">Mukherjee (2021) - 9142040066</span>
              </li>
              <li>
                <FaPhoneAlt className="inline-block align-middle mr-2" />
                Adarsh <span className="text-sm md:text-base">Kumar (2022) - 7909041883</span>
              </li>
              <li>
                <FaPhoneAlt className="inline-block align-middle mr-2" />
                Faizan <span className="text-sm md:text-base">Ahmad (2022) - 8102061756</span>
              </li>
            </ul>

          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-black text-center text-neutral-300 py-3">
        <p>
          &copy;2024 All rights reserved | IETE Students' Forum BIT Sindri <br />
          Made with <span className="text-red-600">❤</span> and support, Team IETE
        </p>
      </div>
    </div>
  );
};

export default Footer;