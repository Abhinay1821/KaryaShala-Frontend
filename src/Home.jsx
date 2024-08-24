import React from 'react'
import { useEffect } from 'react';
import OnboardingForm from './component/onboardingForm';
import LoadingScreen from './component/loadingscreen';
import { getUserInfo } from './OnBoardingService/api';
import Navbar from './component/navbar';
import UserProfileHome from './component/userProfileHome';
import { useAPI } from './component/APIProvider';
export default function Home() {

  const {getUserInfo,isLoading,user,setIsLoading,setUser} = useAPI()

  useEffect(() => {
    getUserInfo().then((data) => {
      setUser(data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div class="min-h-screen min-w-screen bg-base-200">     
      {isLoading ? <LoadingScreen /> : <>{user?.isOnboarded ? <UserProfileHome user={user}/> :<OnboardingForm /> }</>}

      </div>
    </>
  )
}
