import React from 'react'
import { useEffect } from 'react';
import OnboardingForm from './component/onboardingForm';
import LoadingScreen from './component/loadingscreen';
import { getUserInfo } from './service/api';
import Navbar from './component/navbar';
import UserProfileHome from './component/userProfileHome';
export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    getUserInfo().then((data) => {
      setUser(data.data);
      setIsLoading(false);
    });
  }, []);

  if (user) {
    console.log(user);
  }

  return (
    <>
      <div class="min-h-screen min-w-screen bg-base-200">     
      <UserProfileHome user={user}/>
      </div>
    </>
  )
}
