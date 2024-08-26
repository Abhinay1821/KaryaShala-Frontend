import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Logout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
    setDropdownOpen(false); // Close dropdown on logout
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false); // Close dropdown on menu item click
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-800 z-[2] h-15 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>



        {/* Desktop Menu */}
        <div className={`hidden lg:flex  ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-gray-100">About</Link>
            </li>
            <li>
              <details className="relative">
                <summary className="cursor-pointer text-gray-300 hover:text-gray-100">Jobs</summary>
                <ul className="absolute z-[2] bg-gray-800 shadow-lg rounded mt-2 w-48 ">
                  <li>
                    <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Recommended Jobs</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Applied Jobs</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Logo */}
          <div className="text-xl justify-center font-semibold text-white">
            <Link to="/">karyashala</Link>
          </div>
        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-2"
              onClick={handleDropdownToggle}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
              <ProfilePicture isUpdate={false} width={10} height={10}/>
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded z-10">
                <li>
                  <Link 
                    to="/userProfile" 
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                    onClick={handleMenuItemClick}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={Logout} 
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white shadow-md">
          <ul className="space-y-2 py-2">
            <li>
              <Link 
                to="/about" 
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                onClick={handleMobileMenuToggle}
              >
                About
              </Link>
            </li>
            <li>
              <details className="relative">
                <summary className="cursor-pointer block px-4 py-2 text-gray-300 hover:bg-gray-700">Jobs</summary>
                <ul className="absolute bg-gray-800 shadow-lg rounded mt-2 w-full">
                  <li>
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                      onClick={handleMobileMenuToggle}
                    >
                      Recommended Jobs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                      onClick={handleMobileMenuToggle}
                    >
                      Applied Jobs
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
