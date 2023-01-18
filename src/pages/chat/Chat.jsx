import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../redux-toolkit/reducer/contactReducer';

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { ChatContainer, Contacts, Welcome, Navbar } from '../../components';

export default function Chat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let contactDATA = useSelector((state) => state.contactInfo.contactData);

  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  console.log('current userrrr', currentUser);

  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem('user')) {
        navigate('/signUp');
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem('user')));
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io('https://ruby-jolly-hippopotamus.cyclic.app');
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          dispatch(getContact());

          setContacts(contactDATA);
        } else {
          navigate('/setAvatar');
        }
      }
    }
    fetchData();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="chatContainer">
          <Contacts contacts={contacts} changeChat={handleChatChange} />

          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .chatContainer {
    height: 100vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (max-width: 550px) {
      width: 100vw;
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
