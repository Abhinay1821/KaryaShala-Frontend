import React from "react";
import { useState, useEffect } from "react";
import { getUserInfo } from "../service/api";
import LoadingScreen from "../component/loadingscreen";
import { updateProfilePic } from "../service/api";
export default function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsLoading(true);
        const body = {
          profilePicture: e.target.result,
        };
        updateProfilePic(body).then((data) => {
          setIsLoading(false);
        });
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUserInfo().then((data) => {
      setUser(data?.data);
      setPhoto(data?.data?.personalInfo?.picture);
      console.log(data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto">
          {/* card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center flex-row" >
                <div className="relative w-24 h-24 group">
                  <img
                    src={photo}
                    className="w-full h-full rounded-full object-cover transition-opacity duration-300 group-hover:opacity-40"
                    alt="Profile"
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  <div className=" w-full h-full rounded-full absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="cursor-pointer text-sm">Change Photo</span>
                  </div>
                  <input
                    id="fileInput"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="flex flex-col w-full"  >
                  <div className="flex flex-col">
                    <h2 className="card-title mx-4">{user?.personalInfo?.name}</h2>
                    <p className="mx-4"> <strong>{user?.experienceInfo?.[0]?.position}</strong></p>
                    <p className="mx-4">at  <strong>{user?.experienceInfo?.[0]?.company}</strong></p>
                  </div>
                  <hr className="border-t border-gray-300 my-4 w-90 p-2" />
                  <div className="flex flex-row">
                    <h2 className="card-title ">{user?.personalInfo?.mobile}</h2>
                    <div className="w-px h-24 bg-gray-300 mx-4"></div>
                    <h2 className="card-title">{user?.personalInfo?.mobile}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
