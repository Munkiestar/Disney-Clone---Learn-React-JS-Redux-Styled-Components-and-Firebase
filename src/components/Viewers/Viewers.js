import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <ImgWrap>
        <img src="./assets/images/viewers-disney.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/viewers-pixar.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/viewers-marvel.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/viewers-starwars.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/viewers-national.png" alt="" />
      </ImgWrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 50px;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 12px;
`;

const ImgWrap = styled.div`
  border: solid 3px rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: solid 3px rgba(249, 249, 249, 0.5);
    box-shadow: rgba(0, 0, 0, 0.3) 0 24px 43px, rgba(0, 0, 0, 0.22) 0 20px 17px;
  }
`;
