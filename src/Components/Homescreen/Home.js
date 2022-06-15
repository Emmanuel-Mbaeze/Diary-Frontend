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
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.form`
  width: 30%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  /* margin-bottom: 25px; */
  @media (max-width: 320px) {
    width: 85%;
    min-height: 350px;
    /* background-color: black; */
  }
  @media (min-width: 375px) and (max-width: 428px) {
    width: 75%;
    min-height: 350px;
    /* background-color: black; */
  }
  @media (min-width: 768px) and (max-width: 834px) {
    width: 45%;
    min-height: 350px;
    /* background-color: black; */
  }
`;
const Card = styled.div`
  width: 250px;
  height: 107px;

  background-color: red;

  textarea {
    width: 250px;
    min-height: 100px;
    border: 1.5px solid grey;
    outline: none;
    resize: none;
  }
`;
const Title = styled.input`
  width: 250px;
  height: 37px;
  border: 1px solid purple;
  outline: none;
  border-radius: 4px;
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
    padding: 12px 24px;
    border: 1.5px solid grey;
    background-color: purple;
    color: white;
    border-radius: 5px;
    outline: none;
  }
  :hover > button {
    background-color: transparent;
    color: black;
  }
`;
