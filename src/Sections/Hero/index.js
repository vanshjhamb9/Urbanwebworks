// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";

import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";
import Hero from "../../assets/Bg-Video.png"
import Rectangle from "../../assets/Rectangle.png"
import Rectangle2 from "../../assets/Rectangle (1).png"
import { useRef, useState } from "react";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #303030;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;


const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;

  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {

  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  
const handleClick = (id, e) => {
  setClick(!click);
  scrollUp(id, e);
};



  return (
    <HomeSection className="mt-1" id="home">
    <div className="absolute z-10 md:-top-[7rem] sm:top-[3rem] xs:top-[0rem] xs:right-0 right-2 w-[65%] sm:w-[76%] xs:w-[117%]" ><img src={Hero} /></div>
     <img className="absolute z-5 w-[40%] opacity-[100%] md:right-[1rem] lg:right-[1.5rem] xs:right-[0rem] md:top-[6rem] sm:top-[10rem] xs:top-[12rem] sm:left-[2rem] xs:left-[1rem]" src={Rectangle} />
     <img className="absolute z-8 w-[25%] opacity-[100%] md:top-[30rem] md:-right-[2rem] sm:top-[22rem] sm:right-[1rem] xs:top-[20rem] xs:right-[1rem]" src={Rectangle2} />
      <MainContent className="mb-[8rem]  xs:mt-[5rem] mr-[3rem]" id="home">
        <Lb className="flex flex-col gap-4" id="leftBlock">
        <div className="flex flex-row gap-2">
        <Topic>
      <Circle />
      <span>Building Stunning Websites</span>
    </Topic>
    <Topic>
      <Circle />
      <span>Developing Cutting-Edge Apps</span>
    </Topic>
  </div>
  <Title className="font-semibold font-intern ">Transforming Your Digital Presence</Title>
  <SubText className="text-richblack-50" >
    Elevate your online presence with our bespoke web & app development services, strategic digital marketing solutions, and captivating UI/UX designs. Let's collaborate and innovate together! 💡✨
  </SubText>
  <CTA href="#contact" onClick={(e) => handleClick("contact", e)}>
    Get in touch &nbsp;
    <img src={arrow} alt="cta" width="100" height="100" />
  </CTA>
        </Lb>

       
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
