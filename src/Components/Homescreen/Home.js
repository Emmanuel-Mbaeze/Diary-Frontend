import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { addcontent } from "../Global/Globalstate";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const yupSchema = yup.object().shape({
    title: yup.string().required("This field should be filled"),
    message: yup.string().required("This field should be filled"),
  });

  const user = useSelector((state) => state.signedin);
  const id = user._id;

  const { handleSubmit, reset, register } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const { message, title } = val;

    const local = "http://localhost:9090";
    const online = "https://i--jot-backend.herokuapp.com";
    const url = `${local}/api/diary/create/${id}`;

    await axios.post(url, { message, title }).then((res) => {
      dispatch(addcontent(res.data.data));
      console.log(res.data.data);
    });
    navigate("/Journals");
  });
  return (
    <>
      <Header />
      <Container>
        <Wrapper onSubmit={onSubmit}>
          <Title {...register("title")} placeholder="Title"></Title>
          <Card>
            <textarea
              {...register("message")}
              placeholder="Today's Experience"
            />
          </Card>
          <Button>
            <button type="submit">Add to Journal</button>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  /* background-color: red; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.form`
  width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border-radius: 5px;
  margin-top: 20px;

  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: 390px) and (max-width: 428px) {
    width: 380px;
  }
  @media (max-width: 320px) {
    width: 305px;
  }
  @media (min-width: 360px) and (max-width: 375px) {
    width: 345px;
  }
`;
const Card = styled.div`
  width: 90%;
  /* background-color: gold; */
  height: 160px;
  textarea {
    width: 98%;
    min-height: 153px;
    border: 1.5px solid lightgrey;
    outline: none;
    resize: none;
  }
`;
const Title = styled.input`
  width: 90%;
  height: 37px;
  border: none;
  outline: none;
  border-radius: 4px;
  border: 1.5px solid lightgrey;
`;

const Date = styled.input`
  width: 250px;
  height: 37px;
  border: 1px solid purple;
  outline: none;
  border-radius: 4px;
`;
const Time = styled.input`
  width: 250px;
  height: 37px;
  border: 1px solid purple;
  outline: none;
  border-radius: 4px;
`;
const Button = styled.div`
  button {
    padding: 12px 18px;
    border-radius: 7px;
    font-size: 16px;
    color: white;
    background-color: #383838;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    border: none;
    transition: all 950ms;
  }
  :hover > button {
    transform: scale(1.02);
    color: #383838;
    border: 1.9px solid #383838;
    font-size: 17px;
    background-color: white;
  }
`;
