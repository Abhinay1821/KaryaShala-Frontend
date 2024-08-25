import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateUserModal from "./registerUser";
import JobFormModal from "./jobformModal";
import CandiateList from "./candidateList";
import {createJob} from "../service/api";
export default function UserProfileHome({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  const handleJobOpenModal = () => {
    setIsJobModalOpen(true);
  };

  const handleJobCloseModal = () => {
    setIsJobModalOpen(false);
  };

  const handleSaveJob = async (jobData) => {
    // Perform the save operation (e.g., sending data to an API)
    console.log("Job data saved:", jobData);
    await createJob(jobData);
    // Close the modal after saving
    handleJobCloseModal();
  };

  const handleCreateUser = (userData) => {
    console.log('User created:', userData);
    setModalOpen(false);
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white p-4">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/5 p-4 bg-gray-800 shadow-lg lg:ml-40 lg:h-1/2 lg:sticky top-0">
        <div className="flex flex-col items-center p-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12"
          />
          <div className="mt-5 text-center">
            <h2 className="font-semibold">{user?.name}</h2>
            <p className="text-gray-400 text-sm">{user?.title}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
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
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md shadow-md">
              Boost Profile
            </button>
          </div>
        </div>
        <nav className=" flex flex-col justify-center items-center mt-6 space-y-4">
          <h6 className="text-lg font-semibold text-gray-400">Quick Actions</h6>
          <button onClick={() => setModalOpen(true)} className="text-blue-400">Create User</button>
          <CreateUserModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateUser}
          />
          {/* <Link to={"/userList"} >Users List</Link> */}

          
          <button
        onClick={handleJobOpenModal}
        className="text-blue-400"
      >
        Create Job
      </button>

      <JobFormModal
        isOpen={isJobModalOpen}
        onClose={handleJobCloseModal}
        onSave={handleSaveJob}
      />
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-2/5 flex-1 p-4 lg:p-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">
            Top Candidates
          </h1>
          <CandiateList/>
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-4">Recommended Jobs for You</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">Fullstack Developer</h2>
              <p className="text-gray-400">Simply Vyapaar</p>
              <button className="mt-2 text-blue-400">View</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">Fullstack Web Developer</h2>
              <p className="text-gray-400">Allegis Global Solutions</p>
              <button className="mt-2 text-blue-400">View</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg">
                Fullstack Developer (React/Node)
              </h2>
              <p className="text-gray-400">Analytics Firm</p>
              <button className="mt-2 text-blue-400">View</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
