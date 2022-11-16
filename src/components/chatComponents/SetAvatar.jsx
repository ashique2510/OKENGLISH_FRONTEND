import { useDispatch, useSelector } from 'react-redux'
import { getAvatarInfo } from '../../redux-toolkit/reducer/avatarReducer'

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Buffer } from "buffer";
import loader from '../../assets/loader.gif'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';



export default function SetAvatar() {


  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const avatarDATA = useSelector(state => state.avatarInfo.avatarData)

  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect( () => {
    async function fetchData() {   
    if (!localStorage.getItem("user"))
      navigate("/login");

      const checkAvatarImg = JSON.parse(localStorage.getItem('user')).isAvatarImageSet
      
    if(checkAvatarImg){
      navigate("/chat");

    }

    }  
    fetchData() 
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
        const avatarDetails=avatars[selectedAvatar]

      const dd= await  dispatch(getAvatarInfo(avatarDetails))
    console.log('from dispatch',dd);

        if(dd.payload.isSet) {
          const user = await JSON.parse(localStorage.getItem("user"))
                user.isAvatarImageSet = true;
                user.avatarImage = dd.payload.image;
                localStorage.setItem('user',JSON.stringify(user))
                navigate('/chat')
        }else{
          toast.error('Error setting avatar, Please try again', toastOptions)
        }
      }
  };

  useEffect( () => {
    async function fetchData() {   
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      const buffer = new Buffer(image.data);
      data.push(buffer.toString("base64"));
    }
    setAvatars(data);
    setIsLoading(false);
  }  
  fetchData() 
  }, []);
  return (
    <>
      {isLoading ? (
        <>
        <Navbar />
        <Container>
          <img src={loader} alt="loader" className="loader" />
          <span style={{color:'red' ,textAlign:'center' ,fontSize:'20px'}}>Please wait few seconds !!</span>
        </Container>
        </>
      ) : (
        <>
        <Navbar />
        <Container>
          
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
          <ToastContainer />
        </Container>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #c147f173;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }

  @media screen and (max-width:550px){
    .title-container {
    h1 {
      color: red;
      font-size: 25px;
    }
  }

  .avatars .avatar img {
        height: 4rem;
      }

      .submit-btn {
        padding: 0.8rem 1.6rem;
      }

}
@media screen and (max-width:400px){
    .title-container {
    h1 {
      color: green;
      font-size: 18px;
    }
  }
  .avatars .avatar img {
        height: 3rem;
      }

      .submit-btn {
        padding: 0.6rem 1.4rem;
      }
}

`;
