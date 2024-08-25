import React, { useState, useEffect } from "react";
import { getCandidates } from "../service/api";

const CandiateList = () => {
  const [filters, setFilters] = useState({
    experience: "",
    skills: "",
    location: "",
  });
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getCandidates(1, 10);
      setUsersData(response?.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredUsers = usersData.filter((user) => {
    const matchesExperience = filters.experience
      ? user.experience >= parseInt(filters.experience)
      : true;
    const matchesSkills = filters.skills
      ? user?.skills.includes(filters.skills)
      : true;
    const matchesLocation = filters.location
      ? user?.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    return matchesExperience && matchesSkills && matchesLocation;
  });

  console.log("loading", loading);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Filter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          className="p-2 bg-gray-800 text-white rounded"
          value={filters.experience}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          className="p-2 bg-gray-800 text-white rounded"
          value={filters.skills}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="p-2 bg-gray-800 text-white rounded"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </div>

      <div className="space-y-4">
        {loading && (
          <div class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
              loading...
            </div>
          </div>
        )}
        {filteredUsers.map((user) => (
          <div key={user?.id} className="bg-gray-800 p-4 rounded shadow flex">
            <img
              src={user?.personalInfo?.picture}
              alt="User Profile"
              className="w-24 h-24 rounded-full mb-4 mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{user?.name}</h2>
              <p>Email: {user?.email}</p>
              <p>Phone: {user?.phone}</p>
              <p>Experience: {user?.experience} years</p>
              <p>Skills: {user?.skills?.join(", ")}</p>
              <p>Location: {user?.location}</p>
              <div className="mt-4 flex space-x-4">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  View Profile
                </button>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Call
                </button>
                <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Email
                </button>
                {user?.personalInfo?.resume && (
                  <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <a
                      href={user?.personalInfo?.resume}
                      download={`resume_${user?.personalInfo?.name}.pdf`}
                    >
                      Download Resume
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandiateList;
