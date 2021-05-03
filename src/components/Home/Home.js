import React from "react";
import styled from "styled-components";

import ImgSlider from "../Slider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background-color: #040714;
  position: relative;
  color: #fff;
  z-index: 1;
  overflow-x: hidden;

  &:before {
    color: #fff;
    content: "";
    background: url("./assets/images/home-background.png") center center/cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
