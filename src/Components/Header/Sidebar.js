import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Home to="/">Home</Home>
        <Journals to="/Journals">Journals</Journals>
        <Explore to="/Explore">Explore</Explore>
        <Login to="/Login">
          <button>Login</button>
        </Login>
        <Register to="/Register">
          <button>Register</button>
        </Register>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
const Wrapper = styled.div`
  width: 80%;
  height: 70vh;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const Container = styled.div`
  width: 100%;
  height: 94vh;
  background-color: #383838;
  /* margin-left:425px; */
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 500px) {
  }
`;

const Explore = styled(Link)`
  font-size: 16px;
  font-family: arvo;
  text-decoration: none;
  color: white;

  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Home = styled(Link)`
  font-size: 16px;
  font-family: arvo;
  text-decoration: none;
  color: white;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Journals = styled(Link)`
  font-size: 16px;
  font-family: arvo;
  text-decoration: none;
  color: white;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Register = styled(Link)`
  button {
    padding: 12px 10px;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
    border: 1.9px solid #383838;
    color: #383838;
    font-weight: 600;

    outline: none;
    transition: all 950ms;
  }
  :hover > button {
    transform: scale(1.02);
    color: white;

    background-color: #383838;
    font-size: 17px;
    border: none;
  }
`;
const Login = styled(Link)`
  button {
    padding: 12px 18px;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
    border: 1.9px solid #383838;
    color: #383838;
    font-weight: 600;

    outline: none;
    transition: all 950ms;
  }
  :hover > button {
    transform: scale(1.02);
    color: white;

    background-color: #383838;
    font-size: 17px;
    border: none;
  }
`;
// const
