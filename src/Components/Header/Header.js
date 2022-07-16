import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Global/Globalstate";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.signedin);

  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  const barChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo to="/">
            <img src="/11.png" />
          </Logo>
          {user ? (
            <Wrap>
              <Navs>
                <Home to="/">Home</Home>
                <Journals to="/Journals">Journals</Journals>
                <Explore to="/Explore">Explore</Explore>
                <Confirm to="/confirm">Confirm</Confirm>
              </Navs>
              <Buttons>
                <Login to="/Login">
                  <button
                    onClick={() => {
                      dispatch(signOut());
                      navigate("/Login");
                    }}
                  >
                    LogOut
                  </button>
                </Login>
              </Buttons>
            </Wrap>
          ) : (
            <Buttons>
              <Login to="/Login">
                <button>Login</button>
              </Login>
              <Register to="/Register">
                <button>Register</button>
              </Register>
            </Buttons>
          )}

          <Sideicon>
            {toggle ? (
              <GoThreeBars
                fontSize="30px"
                cursor="pointer"
                onClick={barChange}
              />
            ) : (
              <GiCancel fontSize="30px" cursor="pointer" onClick={barChange} />
            )}
          </Sideicon>
        </Wrapper>
      </Container>
      {toggle ? null : <Sidebar />}
    </>
  );
};

export default Header;
const Wrap = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */
`;
const Container = styled.div`
  width: 100%;
  height: 55px;

  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 55px;
  @media (max-width: 900px) {
    justify-content: space-between;
    width: 95%;
  }
`;
const Logo = styled(Link)`
  width: 13%;
  /* background-color: red; */
  height: 50px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    @media (max-width: 320px) {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    @media (min-width: 360px) and (max-width: 428px) {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
    @media (min-width: 768px) and (max-width: 834px) {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
`;
const Navs = styled.div`
  width: 46%;
  /* background-color: blue; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: arvo;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }

  /* @media (max-width:428px){
    display: none;
} */
`;
const Buttons = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  width: 26%;
  /* background-color: hotpink; */
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Confirm = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Explore = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Home = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Journals = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Register = styled(Link)`
  button {
    padding: 10px 10px;
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
    padding: 10px 18px;
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
const Sideicon = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: peru; */
    height: 60px;
  }
`;
