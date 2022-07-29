import React from "react";
import styled from "styled-components";
const Check = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Head>Thanks For Signup To i--jot</Head> */}
        <Body>
          <Title>Account Created</Title>
          <Text>You've Registered Sucessfully</Text>
          <Text>
            Before You Can Log In And Continue You Need To{" "}
            <span>Verify Your Email</span>
          </Text>
          <Text>
            A Message To Verify Your Account Has Been Sent To Your Email Adress
          </Text>
          <Text>Please Click On The Verification Link In The Message</Text>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Check;
const Text = styled.div`
  margin-top: 10px;
  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
const Title = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 25px;
`;
const Body = styled.div`
  margin-top: 10px;
`;
const Head = styled.div`
  margin-bottom: 25px;
`;
const Wrapper = styled.div`
  font-weight: 500;
  font-family: poppins;
  font-size: 16px;
  width: 500px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
