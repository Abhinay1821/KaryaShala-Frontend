import React from "react";
import { getAllUsers, deleteUser,createUser } from "../service/api";
import CreateUserModal from "../component/registerUser";
import ConfirmationModal from "../component/confirmationModal"; // Import ConfirmationModal
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const UserListPage = () => {
  const [users, setUsers] = React.useState([]);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  React.useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleCreateUser = async (userData) => {
    console.log('User created:', userData);
    await createUser(userData);
    setUsers([...users, userData]);
    setModalOpen(false);
    // You might want to update the user list after creation
  };

  const handleEditPermission = (user) => {
    setSelectedUser(user);
    // Open modal or navigate to edit permission page
  };

  const handleDeleteUser = async () => {
    await deleteUser(selectedUser._id);
    setUsers(users.filter(user => user.email !== selectedUser.email));
    setConfirmModalOpen(false);
  };

  const openConfirmModal = (user) => {
    setSelectedUser(user);
    setConfirmModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-gray-600 text-white py-2 px-6 rounded-lg mb-4"
      >
        Create User
      </button>
      
      <CreateUserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreateUser}
      />
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleDeleteUser}
        message={`Are you sure you want to delete ${selectedUser?.name}?`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <div
            key={user.email}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={user?.picture || "https://via.placeholder.com/150"}
              alt={`${user.name}'s profile`}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
            <p className="text-gray-400">{user?.title}</p>
            <p className="text-gray-500">Email: {user?.email}</p>
            <p className="text-gray-500">
              Permissions: {user?.permissions.join(", ")}
            </p>
            <p className="text-gray-500">Company ID: {user?.companyId}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleEditPermission(user)}
                className="text-gray-400 hover:text-blue-700"
              >
                <PencilIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() => openConfirmModal(user)}
                className="text-red-800 hover:text-red-700"
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
