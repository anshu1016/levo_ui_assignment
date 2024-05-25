import React from 'react';
import MainPage from '../components/MainPage';
import Logo from '../components/Logo';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Logo/>
      <MainPage />
    </div>
  );
};

export default HomePage;
