import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signUp/SignUpPage';
import SetAvatar from './components/chatComponents/SetAvatar';
import ArticleHome from './pages/article/ArticleHome';
import DetailsPage from './pages/article/DetailsPage';
import BookingPage from './pages/bookingPage/BookingPage';
import CallingModePage from './pages/calling/CallingModePage';
import TelegramSetupPage from './pages/calling/TelegramSetupPage';
import Chat from './pages/chat/Chat';
// import {Footer,Blog,Possibility,Features,LearningStrategy,Header} from './containers'
import Home from './pages/home/Home'
import SelectPlanPage from './pages/selectPlanPage/SelectPlanPage';
import AccountInfo from './pages/article/AccountInfo';
import CreatePage from './pages/article/CreatePage';
import MyAccount from './pages/myAccount/MyAccount';
import SocialMediaPage from './pages/socialMedia/SocialMediaPage';
import { Footer } from './components/article/footer/Footer';
import { Payment } from './components/booking/Payment';
import CommingSoon from './components/CommingSoon';


const App = () => {
  return (
    <div className='App'>
     
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/setAvatar' element={<SetAvatar />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/select_plan/:id' element={<SelectPlanPage />} />
            <Route path='/article_home' element={<ArticleHome />} />
            <Route path='/article_details/:id' element={<DetailsPage />} />
            <Route path='/account_info' element={<AccountInfo />} />
            <Route path='/create_article' element={<CreatePage />} />
            <Route path='/booking_payment' element={<Payment />} />
            <Route path='/my_account' element={<MyAccount />} />
            <Route path='/social_media' element={<SocialMediaPage />} />
            <Route path='/calling_mode' element={<CallingModePage />} />
            <Route path='/telegram_setup' element={<TelegramSetupPage />} />
            <Route path='/commingsoon' element={<CommingSoon />} />


          </Routes>
          {/* <Footer /> */}
        </Router>
        <ToastContainer />
    </div>
    
  )
}

export default App
