import React from "react";
import logo from '../logo-1.png';

export default function Navbar() {
    return (
        <div className="bg-gray-900 text-white flex justify-between items-center p-4">
            {/* Left Side: Homepage, Portfolio, About */}
            <div className="flex space-x-4">
                <a href="#home" className="hover:text-gray-400">Homepage</a>
                <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
                <a href="#about" className="hover:text-gray-400">About</a>
            </div>

            {/* Center: Karyashala Logo */}
            <div className="flex justify-center flex-grow">
                <img
                    src={logo}
                    alt="logo"
                    className="w-20 h-12"
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
            </div>

            {/* Right Side: Search, Notification, and Logout */}
            <div className="flex items-center space-x-4">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {/* Logout Button */}
                <button className="btn btn-ghost">
                    Logout
                </button>
            </div>
        </div>
    );
}