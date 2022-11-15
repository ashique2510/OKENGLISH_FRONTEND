
import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
// import Picker from "emoji-picker-react";
import InputEmoji from 'react-input-emoji'


export default function ChatInput({ handleSendMsg }) {
  
  const [msg, setMsg] = useState("");
  console.log('message',msg);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [ text, setText ] = useState('')


  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject) => {
    console.log('emojiiiiiiiii',emojiObject);
    
   
  };
 

  const sendChat = (event) => {
    console.log('event',event);
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="chat-button-container">
        <div className="emoji">
          
        </div>
      </div>
      <form className="chat-input-container" onSubmit={(event) => sendChat(event)}>
       
        <InputEmoji
          value={msg}
          onChange={setMsg}
          cleanOnEnter
          onEnter={handleEmojiClick}
          placeholder="Type here.."
          
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100%;
  background-color: #080420;
  /* padding: 0 2rem; */
  /* @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  } */
  .chat-button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      
    }
  }
  .chat-input-container {
    width: 100%;

    border-radius: 2rem;
    display: flex;
    align-items: center;
    /* gap: 2rem; */
    background-color: #ffffff34;
    flex-direction: row;


    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      @media screen and (max-width:550px){
       
        padding: 0.2rem 0.8rem;
        margin-right: 8px;
        margin-left: -8px

      }
      svg {
        font-size: 2rem;
        color: #9a86f3;
      }
    }
  }

  
`;
