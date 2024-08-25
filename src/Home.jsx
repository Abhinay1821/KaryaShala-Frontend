import React from 'react'
import { useEffect } from 'react';
import OnboardingForm from './component/onboardingForm';
import LoadingScreen from './component/loadingscreen';
import { getUserInfo } from './OnBoardingService/api';
import Navbar from './component/navbar';
import UserProfileHome from './component/userProfileHome';
import { useAPI } from './component/APIProvider';
export default function Home() {

  const {isLoading,user,setUser} = useAPI()


  return (
    <>
      <div class="min-h-screen min-w-screen bg-base-200">     
      {isLoading ? <LoadingScreen /> : <>{user?.isOnboarded ? <UserProfileHome user={user}/> :<OnboardingForm /> }</>}

      </div>
    </>
  )
}
