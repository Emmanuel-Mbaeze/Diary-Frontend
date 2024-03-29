import React, { useEffect } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Global/Globalstate";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

// import Swal from "sweetalert2";

const Confirmverification = () => {
  const { id, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyThisUser = async () => {
    const localURL = "http://localhost:9090";
    const onlineurl = "https://i--jot-backend.herokuapp.com";

    const url = `${onlineurl}/api/user/verify/${id}/${token}`;
    await axios.get(url);
  };

  const yupSchema = yup.object().shape({
    email: yup.string().email().required("This field should be filled"),
    password: yup.string().required("This field should be filled"),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    const { email, password } = val;

    const config = {
      "content-type": "application/json",
    };

    const local = "http://localhost:9090";
    const online = "https://i--jot-backend.herokuapp.com";
    const url = `${local}/api/user/signin`;

    await axios.post(url, { email, password }).then((res) => {
      dispatch(createUser(res.data.data));
      console.log(res.data.data);
      // Swal.fire({
      //   icon: "success",
      //   title: `welcome back ${email}`,
      //   text: "Good to see you again",
      //   footer: '<a href="">This is developed by Emmanuel</a>',
      // });
    });
    navigate("/");
  });

  useEffect(() => {
    verifyThisUser();
  }, []);
  return (
    <Container>
      <Wrapper onSubmit={onSubmit}>
        <Logo>Account Verified</Logo>

        <Text> Sign in to start jotting Your daily experiences</Text>

        {/* <Button>
          <Icon />
          <span>Log in with Facebook</span>
        </Button> */}

        {/* <LineHolder>
          <Line />
          <span>or</span>
          <Line1 />
        </LineHolder> */}

        <InputHolder>
          <Icon1 />
          <Input placeholder="Email" {...register("email")} />
        </InputHolder>
        <Error>{errors?.email?.message}</Error>
        <InputHolder>
          <Icon4 />
          <Input placeholder="Password" {...register("password")} />
        </InputHolder>
        <Error>{errors?.password?.message}</Error>
        <Button1 type="submit">
          <Icon6 />
          <span>Sign in</span>
        </Button1>
        {/* <LinkedNow to="/requestReset">Request for Password Reset</LinkedNow> */}
      </Wrapper>
      {/* <Wrapper>
        <Linked>
          Don't an account? <Span to="/register">Register</Span>
        </Linked>
      </Wrapper> */}
    </Container>
  );
};

export default Confirmverification;
const Error = styled.div`
  font-size: small;
  color: red;
`;
const LinkedNow = styled(Link)`
  display: flex;
  font-size: 12px;
  color: rgb(16, 143, 233);
  margin-bottom: 10px;
  text-decoration: none;
`;
const Button1 = styled.button`
  outline: none;
  border: 0;
  font-family: Poppins;
  background-color: #383838;
  /* background-color: rgb(16, 143, 233); */
  /* width: 100%; */
  color: white;
  margin: 20px 0px;
  padding: 12px 25px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Linked = styled.div`
  display: flex;
`;
const Span = styled(Link)`
  color: rgba(16, 143, 233);
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
`;

const Icon2 = styled(BsFillPersonFill)`
  margin: 0 10px;
  color: gray;
`;
const Icon3 = styled(FaRegUserCircle)`
  margin: 0 10px;
  color: gray;
`;
const Icon4 = styled(MdPassword)`
  margin: 0 10px;
  color: gray;
`;
const Icon6 = styled(GiPadlock)`
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border: 0;
  ::placeholder {
    font-family: Poppins;
  }
`;

const Icon1 = styled(AiOutlineMail)`
  margin: 0 10px;
  color: gray;
`;

const InputHolder = styled.div`
  margin-top: 10px;
  border: 1px solid silver;
  width: 80%;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  font-size: 12px;
  padding: 8px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin: 10px 0;
  background-color: rgb(16, 143, 233);
  color: white;
  border-radius: 3px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid transparent;
  outline: 2px solid purple;
  background-clip: content-box;
`;

const ImageHold = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Line1 = styled.div`
  border-top: 1px solid silver;
  width: 100%;
  margin-right: 40px;
`;

const Line = styled.div`
  border-top: 1px solid silver;
  width: 100%;
  margin-left: 40px;
`;

const LineHolder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  span {
    margin: 0 10px;
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const Icon = styled(FaFacebookSquare)`
  margin-right: 10px;
`;

const Button = styled.div`
  background-color: rgb(16, 143, 233);
  /* width: 100%; */
  color: white;
  margin: 20px 0px;
  padding: 7px 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Text = styled.div`
  padding: 0 30px;
  color: gray;
  text-align: center;
  line-height: 1.2;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Logo = styled.div`
  font-family: Pacifico;
  margin-top: 50px;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Wrapper = styled.form`
  width: 350px;
  height: 100%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5px;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
`;
