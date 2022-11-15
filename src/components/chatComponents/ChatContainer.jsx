
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
// import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux-toolkit/reducer/sendMessageReducer";
import { getMessage } from "../../redux-toolkit/reducer/getMessagesReducer";


export default function ChatContainer({ currentChat, socket }) {

  console.log('checkkkkkkkkkkkkkk');

  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const getMsgData =useSelector(state => state.getMsgInfo.getMsg) 

  const dispatch = useDispatch()


  useEffect( () => {

    async function fetchData() { 

      if(currentChat){

    const data = await JSON.parse(
      localStorage.getItem('user')
    );
    
const Details = {
    from: data._id,
    to: currentChat._id,
  }
  dispatch(getMessage(Details))


    setMessages(getMsgData);
   
}

  }  
  
  fetchData()   

  }, [  currentChat,getMsgData]);


  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          localStorage.getItem('user')
        )._id;
      }
    };
    getCurrentChat();
  }, [currentChat]);



  const handleSendMsg = async (msg) => {
    console.log('from chat container',msg);
    const data = await JSON.parse(
      localStorage.getItem('user')
    );
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });

    const Details = {
      from: data._id,
      to: currentChat._id,
      message: msg,
    }

    dispatch(sendMessage(Details))
    

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
    {currentChat && (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentChat.name}</h3>
          </div>
        </div>
       
      </div>
      <div className="chat-messages">
        {
        messages &&(  
        messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended_Msg" : "recieved_Msg"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })
        )}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
     )}
     </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    margin-top: 50px;
    
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended_Msg {
      /* justify-content: flex-end; */
      .content {
        background-color: #6e78e4;
        margin-right: 0px;
        
      }
    }
    .recieved_Msg {
      /* justify-content: flex-start; */
      .content {
        background-color: #9900ff20;
        margin-left: 0px;
      }
    }
  }
`;
