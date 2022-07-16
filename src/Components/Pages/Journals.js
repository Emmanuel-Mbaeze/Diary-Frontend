import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styled from "styled-components";

import axios from "axios";
import { addBestDiary, removeBestDiary } from "../Global/Globalstate";
import { useDispatch } from "react-redux";
import moment from "moment";

const Journals = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState([]);

  const Posts = async () => {
    const local = "http://localhost:9090";
    const online = "https://i--jot-backend.herokuapp.com";
    const url = `${local}/api/diary/`;
    await axios.get(url).then((res) => {
      setPost(res.data.data);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    Posts();
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Top>
            <h1>JOURNALS</h1>
          </Top>
          <Bottom>
            {post?.map((props) => {
              return (
                <Card key={props._id}>
                  <Time>{moment(props.createdAt).format("LT")}</Time>
                  <Content>
                    <Hold>
                      <Date>{moment(props.createdAt).fromNow()}</Date>
                      <Title>{props.title}</Title>
                      <Subtitle>{props.message}</Subtitle>
                    </Hold>
                  </Content>
                  <button
                    onClick={() => {
                      dispatch(addBestDiary(props));

                      console.log("fav");
                    }}
                  >
                    Fav
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeBestDiary(props));

                      console.log("wipe");
                    }}
                  >
                    wipe
                  </button>
                </Card>
              );
            })}
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Journals;
const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 320px) {
    min-height: 75vh;
    margin-top: 5px;
  }
  @media (min-width: 360px) and (max-width: 428px) {
    min-height: 57vh;
    margin-top: 5px;
  }
  @media (min-width: 768px) and (max-width: 834px) {
    min-height: 77vh;
    margin-top: 5px;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  min-height: 80vh;
  background-color: purple;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media (max-width: 900px) {
    width: 95%;
    min-height: 76vh;
    margin-top: 15px;
  }
  /* @media (min-width: 360px) and (max-width: 428px) {
    width: 80%;
    min-height: 45vh;
    margin-top: 25px;
  }
  @media (min-width: 768px) and (max-width: 834px) {
    width: 56%;
    min-height: 70vh;
    margin-top: 25px;
  } */
`;
const Top = styled.div`
  width: 100%;
  min-height: 70px;
  color: white;
  font-family: arvo;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  @media (max-width: 320px) {
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  @media (min-width: 360px) and (max-width: 428px) {
    width: 100%;
    min-height: 44px;
    /* background-color: red; */
  }
  @media (min-width: 768px) and (max-width: 834px) {
    width: 100%;
    min-height: 80px;
    /* background-color: red; */
  }
  h1 {
    margin-left: 20px;
    @media (max-width: 320px) {
      font-size: large;
    }
    @media (min-width: 360px) and (max-width: 428px) {
      font-size: large;
    }
    @media (min-width: 768px) and (max-width: 834px) {
      font-size: large;
    }
  }
`;
const Bottom = styled.div`
  width: 100%;
  min-height: 70vh;
  background-color: #f3f2f8;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 320px) {
    width: 100%;
    min-height: 65vh;
    /* background-color: red; */
  }
  @media (min-width: 360px) and (max-width: 428px) {
    width: 100%;
    min-height: 65vh;
  }
  @media (min-width: 768px) and (max-width: 834px) {
    width: 100%;
    min-height: 62vh;
  }
`;
const Card = styled.div`
  width: 94%;
  min-height: 80px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled.div`
  width: 12%;
  min-height: 80px;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hold = styled.div`
  min-height: 70px;
  width: 100%;
  border-left: 2px solid orangered;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: red; */
`;
const Content = styled.div`
  min-height: 80px;
  width: 87%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dimacation = styled.div`
  width: 0.5%;
  min-height: 80px;
  /* height: 20vh; */

  background-color: orangered;
`;
const Date = styled.div``;
const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
`;
const Subtitle = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
