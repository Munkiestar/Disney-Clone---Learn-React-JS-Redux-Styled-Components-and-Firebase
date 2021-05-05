import React, { useEffect } from "react";
import styled from "styled-components";

import ImgSlider from "../Slider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";

import db from "../../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  // fetch movies from firebase db
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let temMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(temMovies));
    });
  }, [dispatch]);

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
