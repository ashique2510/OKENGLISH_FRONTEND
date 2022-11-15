

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Logo from '../../assets/contactsLogo.svg'

export default function Contacts({ contacts, changeChat }) {
  console.log('waitinn contact(2222222222)',contacts);

  let contactDATA = useSelector(state =>state.contactInfo.contactData)
  console.log('from useSelctor(2222222222)',contactDATA);

  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect( () => {
    async function fetchData() {  
    const data = await JSON.parse(
      localStorage.getItem('user')
    );
    setCurrentUserName(data.name);
    setCurrentUserImage(data.avatarImage);
  }  
  fetchData()  
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h4>Chat with avatar in English</h4>
          </div>
          <div className="contacts">

            {contactDATA && (
              
              contactDATA.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.name}</h3>
                  </div>
                </div>
              );
            })
            )}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h4 {
      color: white;
    }
    @media screen and (max-width:550px){
      h4 {
        display: none;
    }
    }
    
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #ffff;
        }
      }
      @media screen and (max-width:550px){
        .username {
        h3 {
          display: none;
        }
      }
      
    }
     
    .selected {
      background-color: #9a86f3;
    }
   
  }
  @media screen and (max-width:550px){
    .contact {
      width: 80%;
      padding: 0.2rem;

    }

  }
}

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (max-width:550px){
      h2 {
        display: none;
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }

  /* @media screen and (max-width:550px){
 
    .contact {

      .username {
        h3 {
          color: red;
        }
      }

    }
 } */


`;
