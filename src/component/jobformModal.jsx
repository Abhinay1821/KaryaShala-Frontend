import React, { useState, useEffect } from "react";

const JobFormModal = ({ isOpen, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const defaultCompanyId = localStorage.getItem("company");

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 1000); // Match this duration with the CSS transition duration
    }
  }, [isOpen]);

  const [formData, setFormData] = useState({
    companyId: defaultCompanyId,
    jobTitle: "",
    company: "",
    startDate: "",
    location: "",
    type: "",
    endDate: "",
    description: "",
    skills: [],
    isClosed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "skills"){
      setFormData({
        ...formData,
        [name]: value.split(","),
      });
    }else{
        setFormData({
            ...formData,
            [name]: value,
          });
    }

  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      companyId: defaultCompanyId,
      jobTitle: "",
      company: "",
      startDate: "",
      location: "",
      type: "",
      endDate: "",
      description: "",
      skills: [],
      isClosed: false,
    });
    onClose();
  };

  const handleClear = () => {
    setFormData({
      companyId: defaultCompanyId,
      jobTitle: "",
      company: "",
      startDate: "",
      location: "",
      type: "",
      endDate: "",
      description: "",
      skills: [],
      isClosed: false,
    });
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start transition-opacity duration-300 ease-in-out  ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-900 w-1/3 min-w-[320px] max-w-[90%]  p-8 shadow-lg relative text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
        </button>
        <h2 className="text-2xl font-semibold mb-6">Create Job</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white"
              placeholder="Comma separated"
            />
          </div>
        
        </form>
        <div className="flex justify-between">
        <button
            onClick={handleClear}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Clear
          </button>
        <div className="flex justify-end">
        <button
            onClick={onClose}
            className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Save
          </button>
          
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default JobFormModal;
