import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #C5C7D4;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #C5C7D4;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #C5C7D4;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section className="relative ">
      <Title className="text-richblack-100">Few good words about us!</Title>
      <Carousal className="relative z-10">
        <Slider {...settings}>
          <Card
            text="Urban webworks has been essential part of our business. I would definetly
        recommend Urban webworks. It has been amazing to have them."
            name="Shanail (CodeCall)"
            image="avatar-1"
          />

          <Card
            text="Urban webworks has been essential part of our business. I would definetly recommend Urban webworks. It has been amazing to have them."
            name=" Lokesh(Grow sollutions)"
            image="avatar-2"
          />

          <Card
            text="Urban webworks has been essential part of our business. I would definetly recommend Urban webworks. It has been amazing to have them."
            name="Zenny (Jewel jade)"
            image="avatar-3"
          />

          <Card
            text="Urban webworks has been essential part of our business. I would definetly recommend Urban webworks. It has been amazing to have them."
            name="Vidit (A2Z technologies)"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
