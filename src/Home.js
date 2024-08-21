import React from 'react'
import { useEffect } from 'react';
import OnboardingForm from './component/onboardingForm';
import LoadingScreen from './component/loadingscreen';
import { getUserInfo } from './service/api';
export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    getUserInfo().then((data) => {
      setUser(data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : <>{user?.isOnboarded ? <h1>Welcome {user?.personalInfo.name}</h1> :<OnboardingForm /> }</>}
    </>
  )
}
