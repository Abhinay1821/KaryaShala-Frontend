import React from "react";
import { Link } from "react-router-dom";
export default function UserProfileHome({user}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/5 ml-40  h-1/2 bg-white p-4 shadow-lg ">
        <div className="flex flex-col items-center p-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12"
          />
          <div className="mt-5 text-center">
            <h2 className="font-semibold ">{user.personalInfo.name}</h2>
            <p className="text-gray-500 text-sm ">
              Software Engineer @ Nference Labs
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 text-black py-2 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 p-8">
            <Link to={"/userprofile"}>Complete Profile</Link>
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Profile Performance</h3>
          <ul className="space-y-2">
            <li>Search Appearances: 155</li>
            <li>Recruiter Actions: 11</li>
          </ul>
          <div className="flex justify-center items-center">
            <button className="mt-4 w-full bg-blue-500 text-black py-2 rounded-md shadow-md">
              Boost Profile
            </button>
          </div>
        </div>
        <nav className="mt-6 space-y-4">
          <a
            href="#"
            className="block text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            My Home
          </a>
          <a
            href="#"
            className="block text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Jobs
          </a>
          <a
            href="#"
            className="block text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Companies
          </a>
          <a
            href="#"
            className="block text-lg font-semibold text-gray-700 hover:text-blue-500"
          >
            Blogs
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-2/5 flex-1 p-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">
            Early Access Roles from Top Companies
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">Sr. Software Engineer</h2>
              <p className="text-gray-600">B2B Firm in IT Domain</p>
              <button className="mt-2 text-blue-500">Share interest</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">
                Java Full Stack Developer
              </h2>
              <p className="text-gray-600">Leading Indian Investment Bank</p>
              <button className="mt-2 text-blue-500">Share interest</button>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-4">Recommended Jobs for You</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">Fullstack Developer</h2>
              <p className="text-gray-600">Simply Vyapaar</p>
              <button className="mt-2 text-blue-500">View</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">Fullstack Web Developer</h2>
              <p className="text-gray-600">Allegis Global Solutions</p>
              <button className="mt-2 text-blue-500">View</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">
                Fullstack Developer (React/Node)
              </h2>
              <p className="text-gray-600">Analytics Firm</p>
              <button className="mt-2 text-blue-500">View</button>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="w-1/5">Remaining things</div> */}
    </div>
  );
}
