import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Bgimage></Bgimage>
        </Left>
        <Right>
          <Holder>
            <Text>
              <h1>DIARIES FROM MANEL</h1>
            </Text>

            <Desc>
              <h4>
                <p>
                  Do you love diary keeping and love pouring your heart and
                  feeling into it <span>daily</span>?
                </p>

                <break>
                  Keeping a <span>Journal</span> is like having a heart to heart
                  conversation with your best friend.
                </break>

                <p>
                  Writing a diary helps gain better clarity on current emotions
                  and improves mental health to a great extent.
                </p>

                <break>
                  If you're struggling lately with a breakup{" "}
                  <span>loneliness</span>, <span>depression</span>, and{" "}
                  <span>anxiety</span>,these <span>dear</span> and secret
                  personal diary quotes and saying <span>will</span> motivate
                  you to start self journaling for inner <span>peace</span>.
                </break>
              </h4>
            </Desc>
            <Buttons>
              <Login to="/Homee">
                <button>Home</button>
              </Login>
              <Register to="/Register">
                <button>Register</button>
              </Register>
            </Buttons>
          </Holder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: black; */
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  @media (min-width: 360px) and (max-width: 428px) {
  }
  @media (min-width: 768px) and (max-width: 834px) {
    // canva security :ZJ4NekB*KnW(uh6//
  }
`;
const Wrapper = styled.div`
  @media (max-width: 320px) {
    width: 97%;
  }
  width: 75%;
  min-height: 90vh;
  /* background-color: pink; */
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Bgimage = styled.div`
  min-height: 85vh;
  width: 80%;
  background-image: url("/Ex.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid purple;
  border-radius: 20px;
`;
const Left = styled.div`
  @media (max-width: 320px) {
    display: none;
  }
  min-height: 100vh;
  width: 42%;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;
const Holder = styled.div`
  width: 83%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 320px) {
    // background-color: blue;
    width: 97%;
    min-height: 100vh;
  }
`;
const Right = styled.div`
  @media (max-width: 320px) {
    // background-color: red;
    width: 100%;
  }
  width: 58%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  width: 66%;
  /* background-color: hotpink; */
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;
const Desc = styled.div`
  color: #3a3a3a;
  @media (max-width: 320px) {
    h1 {
      font-size: 15px;
    }
  }
  span {
    color: orangered;
  }
`;

const Text = styled.div`
  text-align: center;
  @media (max-width: 320px) {
    h1 {
      font-size: 25px;
    }
  }
`;
const Register = styled(Link)`
  button {
    padding: 8px 20px;
    border-radius: 5px;
    border: 1.5px solid Purple;
    outline: none;
  }
`;
const Login = styled(Link)`
  button {
    padding: 8px 20px;
    border-radius: 5px;
    border: 1.5px solid Purple;
    outline: none;
  }
`;
