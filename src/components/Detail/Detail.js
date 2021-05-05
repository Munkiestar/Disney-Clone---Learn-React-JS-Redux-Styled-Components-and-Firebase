import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import GroupIcon from "@material-ui/icons/Group";

import { useParams } from "react-router-dom";
import db from "../../firebase";

import { useHistory } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const history = useHistory();

  useEffect(() => {
    // grab movie info from DB
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // redirect to home page
          history.push("/");
        }
      });
  }, []);

  console.log(movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt={movie.title} />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src="./assets/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src="./assets/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <AddIcon />
            </AddButton>
            <GroupWatchButton>
              <GroupIcon />
            </GroupWatchButton>
          </Controls>
          <Subtitle>
            <span>{movie.subTitle}</span>
          </Subtitle>
          <Description>
            <span>{movie.description}</span>
          </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  margin-top: 30px;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImgTitle = styled.div`
  margin-top: 60px;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  span {
    font-size: 16px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #f9f9f9ff;
  color: #f9f9f9;
`;

const AddButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 2px solid #f9f9f9;
  margin-right: 22px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
    color: #fff;
  }
`;

const GroupWatchButton = styled(AddButton)``;

const Subtitle = styled.div`
  margin-top: 26px;
  span {
    font-size: 16px;
    font-weight: 200;
    min-height: 20px;
  }
`;
const Description = styled.div`
  margin-top: 10px;
  max-width: 700px;

  span {
    font-size: 20px;
    font-weight: 300;
  }
`;
