"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    ourStory: false,
    getInvolved: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => {
      return {
        ourStory: false,
        getInvolved: false,
        [menu]: !prevState[menu],
      };
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/">
          <a className="text-lg font-bold text-gray-800">
            <img src="/32.png" alt="Logo" className="h-16 w-auto" />
          </a>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/">
            <a className="text-gray-700 hover:text-two font-medium transition duration-300">Home</a>
          </a>

          {/* Our Story Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-two font-medium flex items-center transition duration-300"
              onClick={() => toggleDropdown('ourStory')}
            >
              Our Story
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {dropdownOpen.ourStory && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-10">
                <a href="/About/History">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</a>
                </a>
                <a href="/About/Team">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</a>
                </a>
                <a href="/About/Mission">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mission</a>
                </a>
              </div>
            )}
          </div>

          <a href="/Impact">
            <a className="text-gray-700 hover:text-two font-medium transition duration-300">Our Impact</a>
          </a>

          <a href="/Programs">
            <a className="text-gray-700 hover:text-two font-medium transition duration-300">Our Programs</a>
          </a>

          {/* Get Involved Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-two font-medium flex items-center transition duration-300"
              onClick={() => toggleDropdown('getInvolved')}
            >
              Get Involved
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {dropdownOpen.getInvolved && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-10">
                <a href="/Contact/Get-involved">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Donate</a>
                </a>
                <a href="/Contact/Volunteer">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Volunteer</a>
                </a>
              </div>
            )}
          </div>

          {/* Contact Button */}
          <a href="/Contact">
            <a className="bg-two text-white px-4 py-2 rounded-full hover:bg-one transition duration-300">Contact</a>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-orange-600 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2">
            <a href="/">
              <a className="block py-2 text-gray-700 hover:text-orange-600">Home</a>
            </a>

            {/* Mobile Dropdowns */}
            <div className="py-2">
              <button
                className="w-full text-left py-2 text-gray-700 hover:text-two flex justify-between items-center"
                onClick={() => toggleDropdown('ourStory')}
              >
                Our Story
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen.ourStory && (
                <div className="pl-4">
                  <a href="/About/History">
                    <a className="block py-2 text-gray-700 hover:bg-gray-100">History</a>
                  </a>
                  <a href="/About/Team">
                    <a className="block py-2 text-gray-700 hover:bg-gray-100">Team</a>
                  </a>
                  <a href="/About/Mission">
                    <a className="block py-2 text-gray-700 hover:bg-gray-100">Mission</a>
                  </a>
                </div>
              )}
            </div>

            <a href="/Impact">
              <a className="block py-2 text-gray-700 hover:text-two">Our Impact</a>
            </a>
            <a href="/Programs">
              <a className="block py-2 text-gray-700 hover:text-two">Our Programs</a>
            </a>

            <div className="py-2">
              <button
                className="w-full text-left py-2 text-gray-700 hover:text-two flex justify-between items-center"
                onClick={() => toggleDropdown('getInvolved')}
              >
                Get Involved
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen.getInvolved && (
                <div className="pl-4">
                  <a href="/get-involved/donate">
                    <a className="block py-2 text-gray-700 hover:bg-gray-100">Donate</a>
                  </a>
                  <a href="/get-involved/volunteer">
                    <a className="block py-2 text-gray-700 hover:bg-gray-100">Volunteer</a>
                  </a>
                </div>
              )}
            </div>

            <a href="/Contact">
              <a className="block py-2 text-white bg-one text-center rounded-full hover:bg-two transition duration-300">Contact</a>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
