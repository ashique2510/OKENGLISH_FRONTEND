import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, TelegramSetup } from '../../components';

const TelegramSetupPage = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        navigate('/signUp');
      }
    }, [isUserLoggedIn]);


  return (
    <div>
      <Navbar />
      <TelegramSetup />
    </div>
  );
};

export default TelegramSetupPage;
