import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <ImgWrap>
        <img src="./assets/images/slider-1.jpg" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/slider-2.jpg" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/slider-3.jpg" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="./assets/images/slider-4.jpg" alt="" />
      </ImgWrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 20px;

  .slick-dots li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const ImgWrap = styled.div`
  cursor: pointer;
  outline: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 4px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
    transition: all 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.5);
    }
  }
`;
