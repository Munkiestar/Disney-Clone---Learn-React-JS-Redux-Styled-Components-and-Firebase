import React from "react";

import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTALogoOne src="./assets/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="./assets/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("./assets/images/login-background.jpg") center top / cover
      no-repeat;
    z-index: -1;
  }
`;

const Content = styled.div`
  height: 500px;
  width: 80%;
  max-width: 650px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CTALogoOne = styled.img`
  width: 100%;
  margin-bottom: 16px;
  object-fit: contain;
`;

const SignUp = styled.a`
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0;
  background-color: #0063e5;
  padding: 16px 0;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled(CTALogoOne)`
  width: 90%;
  margin-top: 10px;
`;
