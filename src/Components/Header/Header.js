import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import Sidebar from './Sidebar';
const Header = () => {
    const [toggle,setToggle]=useState(true)
    console.log(toggle);
    const barChange = ()=>{
        setToggle(!toggle)
    }
  return (
  <>
  <Container>
      <Wrapper>
          <Logo to="/Homee">
<img src="/11.png"/>
          </Logo>
          <Navs>
<Home to="/">Home</Home>
<Journals to="/Journals">Journals</Journals>
<Explore to="/Explore">Explore</Explore>
          </Navs>
          <Buttons>
          <Login to="/Login"><button>Login</button></Login>
<Register to="/Register"><button>Register</button></Register>
          </Buttons>
<Sideicon>
    {toggle?(   <GoThreeBars fontSize="50px" onClick={barChange} />  ):(
        <GiCancel fontSize="50px" onClick={barChange} />
    )}
</Sideicon>
      </Wrapper>
  </Container>
  {toggle ? null :<Sidebar/>}
  </>
  )
}

export default Header
const Container = styled.div`
width: 100%;
height: 70px;
background-color: #eee;
display:flex;
justify-content: center;
align-items: center;
@media (max-width: 320px) {

height: 60px;
  }
`
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
/* background-color: white; */
width: 80%;
height: 70px;
@media (max-width: 320px) {
    display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
width: 80%;
height: 60px;
  }
@media (min-width:360px) and (max-width:428px){
    display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
width: 80%;
height: 70px;
}
@media (min-width:768px) and (max-width:834px){
    display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
width: 80%;
height: 70px;
}
`
const Logo = styled(Link)`
width: 13%;
/* background-color: red; */
height: 50px;
@media (max-width: 320px) {
    display: flex;
justify-content: center;
align-items: center;
  }
@media (min-width:360px) and (max-width:428px){
    display: flex;
justify-content: center;
align-items: center;
}
@media (min-width:768px) and (max-width:834px){
    display: flex;
justify-content: center;
align-items: center;
}
img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    @media (max-width: 320px) {
        width: 50px;
    height: 50px;
    object-fit: cover;
  }
    @media (min-width:360px) and (max-width:428px){
        width: 60px;
    height: 60px;
    object-fit: cover;
}
@media (min-width:768px) and (max-width:834px){
    width: 60px;
    height: 60px;
    object-fit: cover;
}
}
`
const Navs = styled.div`
width: 26%;
/* background-color: blue; */
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
font-family: arvo;
font-weight: 600;
font-size: 14px;
cursor: pointer;
@media (max-width: 320px) {
    display: none;
  }
@media (min-width:360px) and (max-width:428px){
    display: none;
}
@media (min-width:768px) and (max-width:834px){
    display: none;

}
/* @media (max-width:428px){
    display: none;
} */
`
const Buttons = styled.div`
@media (max-width: 320px) {
    display: none;
  }
@media (min-width:360px) and (max-width:428px){
    display: none;
}
@media (min-width:768px) and (max-width:834px){
    display: none;

}
width: 26%;
/* background-color: hotpink; */
height: 50px;
display: flex;
justify-content: space-around;
align-items: center;
`
const Explore = styled(Link)`
text-decoration: none;
color: black;
:hover{
    transform: scale(1.05);
transition: all 350ms;
}
`
const Home = styled(Link)`
text-decoration: none;
color: black;
:hover{
    transform: scale(1.05);
transition: all 350ms;
}
`
const Journals = styled(Link)`
text-decoration: none;
color: black;
:hover{
    transform: scale(1.05);
transition: all 350ms;
}
`
const Register = styled(Link)`
button{
    padding: 8px 20px;
border-radius: 5px;
border: 1.5px solid Purple;
outline: none;
}

`
const Login = styled(Link)`
button{
padding: 8px 20px;
border-radius: 5px;
border: 1.5px solid Purple;
outline: none;
}
`
const Sideicon = styled.div`
  display: none;

  @media (max-width: 320px) {
display: flex;
justify-content: center;
align-items: center;
/* background-color: peru; */
height: 60px;

}
  @media (min-width:360px) and (max-width:428px){
    display: flex;
justify-content: center;
align-items: center;
/* background-color: peru; */
height: 60px;
}
@media (min-width:768px) and (max-width:834px){
    display: flex;
justify-content: center;
align-items: center;
/* background-color: peru; */
height: 60px;

}
`;
