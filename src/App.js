import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Chat,
  Home,
  LoginPage,
  MyAccount,
  CreatePage,
  SignUpPage,
  ArticleHome,
  DetailsPage,
  BookingPage,
  AccountInfo,
  SelectPlanPage,
  SocialMediaPage,
  CallingModePage,
  CallingHomePage,
  TelegramSetupPage,
} from './pages';

import { SetAvatar, Footer, Payment, CommingSoon } from './components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/my_account" element={<MyAccount />} />
          <Route path="/booking_payment" element={<Payment />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="/article_home" element={<ArticleHome />} />
          <Route path="/account_info" element={<AccountInfo />} />
          <Route path="/create_article" element={<CreatePage />} />
          <Route path="/social_media" element={<SocialMediaPage />} />
          <Route path="/calling_mode" element={<CallingModePage />} />
          <Route path="/calling_home" element={<CallingHomePage />} />
          <Route path="/select_plan/:id" element={<SelectPlanPage />} />
          <Route path="/article_details/:id" element={<DetailsPage />} />
          <Route path="/telegram_setup" element={<TelegramSetupPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
