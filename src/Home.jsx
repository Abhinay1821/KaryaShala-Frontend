import React from 'react'
import { useEffect } from 'react';
import OnboardingForm from './component/onboardingForm';
import LoadingScreen from './component/loadingscreen';
import { getUserInfo } from './service/api';
import Navbar from './component/navbar';
export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
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
      <div class="container min-h-screen bg-base-200">

     
      <Navbar />
      {isLoading ? <LoadingScreen /> : <>{user?.isOnboarded ? <h1>Welcome {user?.personalInfo?.name}</h1> :<OnboardingForm /> }</>}

      </div>
    </>
  )
}
