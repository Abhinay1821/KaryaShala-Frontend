import React, { useState, useEffect } from "react";

const CreateUserModal = ({ isOpen, onClose, onSubmit }) => {
  const defaultCompanyId = localStorage.getItem("company");
  const [showModal, setShowModal] = useState(isOpen);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyId: defaultCompanyId,
    picture: "",
    title: "",
    permissions: [],
  });

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300); // Match this duration with the CSS transition duration
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePermissionChange = (e) => {
    setFormData({
      ...formData,
      permissions: [e.target.value],
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          picture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setFormData({
      email: "",
      name: "",
      companyId: defaultCompanyId,
      picture: "",
      title: "",
      permissions: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start items-start bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-900 w-1/3 min-w-[320px] max-w-[90%] h-screen p-6 shadow-lg relative text-white transform transition-transform duration-300 ease-in-out ${
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
        <h2 className="text-xl font-bold text-white mb-4">Register New User</h2>
        <form onSubmit={handleSubmit} className="h-full overflow-y-auto">
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Profile Picture</label>
            <input
              type="file"
              name="picture"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Permissions</label>
            <select
              name="permissions"
              value={formData.permissions[0] || ""}
              onChange={handlePermissionChange}
              className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
              required
            >
              <option value="">Select Permission</option>
              <option value="admin">Admin</option>
              <option value="supervisor">Supervisor</option>
              <option value="hr">HR</option>
            </select>
          </div>
        <div className="flex justify-between">          <button
            onClick={handleClear}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Clear
          </button>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create User
            </button>
          </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
