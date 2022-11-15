import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
// import logo from "../../assets/logo.svg";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from "../../redux-toolkit/auth/authSlice";
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'


const Menu = () => (
  <>
    <p>
    <Link to={'/'}> Home</Link>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
    <p>
      <a href="#basicTest">Basic Test</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)

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
            <p>Welcome {user.name}</p>
             <div className="my_account" >
             <Link to={'/my_account'}> 
             <button  type="button" >My Account</button>
             </Link>
            </div>
           <button  type="button" onClick={onLogout}>Log Out</button>
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
            { user && (
            <p><BsFillEmojiHeartEyesFill color='#FFAE42' />  Welcome {user.name}</p>
            )}
              <Menu />
              <div className="okEng__navbar-menu_container-links-sign">

            { !user && (
              <>
             <Link to={'/login'}><p>Log in</p></Link>
              <Link to={'/signup'}>  <button type="button">Register</button></Link>
              </>

           ) }
            { user && (
               <>
             <Link to={'/my_account'}> 
              <button className="toggle_myAccount" type="button" >My Account</button>
              </Link>
              <button  type="button" onClick={onLogout}>Log Out</button>
              </>

           ) }

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
