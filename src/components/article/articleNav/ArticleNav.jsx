import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./style.css";
// import logo from "../../assets/logo.svg";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from "../../../redux-toolkit/auth/authSlice";
import ArticleUser from "./ArticleUser";
import { RiImageAddLine } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineHeart , AiOutlineHome } from 'react-icons/ai'


const Menu = () => (
  <>
    <Link to='/'>
        <button className="box">
          <AiOutlineHome className="icon"/>
          <h4>Home</h4>
        </button>
      </Link>
      <Link to='/create_article'>
        <button className="box">
          <RiImageAddLine className="icon"/>
          <h4>Create Post</h4>
        </button>
      </Link>
      <Link to='/create'>
        <button className="box">
          <IoSettingsOutline className="icon" />
          <h4>My Account</h4>
        </button>
      </Link>
      <Link to='/create'>
        <button className="box">
          <BsBagCheck className="icon" />
          <h4>Content</h4>
        </button>
      </Link>
      <Link to='/create'>
        <button className="box">
          <AiOutlineHeart className="icon" />
          <h4>Saved</h4>
        </button>
      </Link>
      {/* <Link to='/create'>
        <button className="box">
          <GrHelp className="icon" />
          <h4>Help</h4>
        </button>
      </Link> */}
   
  </>
);

const ArticleNav = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

const {user} = useSelector(
  (state) => state.auth
)


console.log('user from article nav',user);

  const [toggleMenu, setToggleMenu] = useState(false);

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
}

  return (
    <div className="okEng__navbar">
      <div className="okEng__navbar-links">
        <div className="okEng__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2>OK_ENGLISH</h2>
        </div>
        <div className="okEng__navbar-links_container">
          <Menu />
        </div>
      </div>

{ user ? (   

          <div className="okEng__navbar-sign">
           <div className="account flexCenter">
            <ArticleUser />
           </div>
           </div>


) : (     
  
<div className="okEng__navbar-sign">
<Link to={'/login'}><p>Log in</p></Link>
<Link to={'/signup'}>  <button type="button">Register</button></Link>
</div>
)
      }
      {/* <div className="okEng__navbar-sign">

      <Link to={'/login'}><p>Log in</p></Link>
      <Link to={'/signup'}>  <button type="button">Register</button></Link>
      
      </div> */}
      <div className="okEng__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="okEng__navbar-menu_container scale-up-center">
            <div className="okEng__navbar-menu_container-links">
              <Menu />
              <div className="account flexCenter">
            <ArticleUser />
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleNav;
