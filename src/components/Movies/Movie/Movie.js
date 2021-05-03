import React from "react";
import styled from "styled-components";

function Movie({ title, img }) {
  return (
    <ImgWrap>
      <img src={img} alt={title} />
    </ImgWrap>
  );
}

export default Movie;

const ImgWrap = styled.div`
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.3);
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.6);
    box-shadow: rgba(0, 0, 0, 0.3) 0 24px 43px, rgba(0, 0, 0, 0.22) 0 20px 17px;
  }
`;
