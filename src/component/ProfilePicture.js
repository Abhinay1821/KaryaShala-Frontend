import React, { useState } from 'react';
import { useAPI } from './APIProvider';

const ProfilePicture = ({isUpdate=false,width,height}) => {
  const {photo,setPhoto,updateProfilePic} = useAPI()
  const [hover, setHover] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfilePic({profilePicture:reader.result})
        setPhoto(reader?.result);
       // Update the state with the new image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={`relative w-${width} h-${height}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={isUpdate ? () => document.getElementById('fileInput').click() : null} // Trigger file input click on div click
      style={{ cursor: 'pointer' }} // Changes cursor to pointer on hover
    >
      {/* Profile picture */}
      <img 
        src={photo ? photo : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
        alt="ProfilePicture" 
        className="w-full h-full rounded-full border border-gray-600" 
      />

      {/* Hover effect */}
      {hover && isUpdate && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <span className="text-white text-center">Update Profile</span>
        </div>
      )}

      {/* Hidden file input */}
      {
        isUpdate && 
        <input 
        type="file" 
        id="fileInput" 
        accept="image/jpeg, image/png"
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />
      }
      
    </div>
  );
};

export default ProfilePicture;