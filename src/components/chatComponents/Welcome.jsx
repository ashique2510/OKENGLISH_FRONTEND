

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from '../../assets/robot.gif'
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
    async function fetchData() {    
    setUserName(
      await JSON.parse(
        localStorage.getItem('user')
      ).name
    );
  }  
  fetchData()
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1 className="welcome_msg">
        Welcome, <span>{userName}!</span>
      </h1>
      <h3 className="welcome_dsc">Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  @media screen and (max-width:550px){

    .welcome_msg {
      font-size: 30px;

    }
    .welcome_dsc {
      font-size: 20px;
      color: yellow;
    }
  }
  
`;
