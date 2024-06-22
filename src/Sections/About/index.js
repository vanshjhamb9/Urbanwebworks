import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import StatsComponent from "./Stats";

const move = keyframes`
  0% { transform: translateY(-5px); }
  50% { transform: translateY(10px) translateX(10px); }
  100% { transform: translateY(-5px); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Waves = styled.img`
  z-index: 10%;
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;



const CurvedLine = styled.div`
  width: 12rem;
  height: 3rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  animation: ${move} 2.5s ease infinite;
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;

  /* Animation for fadeIn and fadeOut */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const About = () => {
  const aboutTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }

    return () => {
      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-[5rem] w-full">
      <AboutSection id="about">
        <Main>
          <div className="mx-auto">
            <div className="text-white inline-block text-[3rem] font-semibold" >About Us</div>
            <CurvedLine />
          </div>
          <div className="flex md:flex-row sm:flex-col xs:flex-col gap-[8rem] mt-[8rem] text-center items-center md:w-[100%]  sm:w-screen xs:w-screen">
            <Rocket>
              <img src={rocket} alt="" className="md:w-[100%] sm:w-[110%] xs:w-[120%]" />
            </Rocket>
            <AboutText ref={aboutTextRef} className={isVisible ? "is-visible" : ""}>
              <div className="flex flex-col gap-8 w-[130%]">
                <h1 className="font-intern font-bold text-[40px] text-richblack-50">
                  Empowering Businesses: The Urban webworks Legacy
                </h1>
                <div className="font-mono text-purple text-[20px]">
                  Elevate your online presence with our comprehensive suite of services: customized web & app development, strategic digital marketing, and captivating UI/UX designs. Let's make waves in the digital realm!
                </div>
              </div>
              <div className="mt-4">
                <Circle style={{ backgroundColor: "var(--purple)" }} />
                <Circle style={{ backgroundColor: "var(--pink)" }} />
                <Circle style={{ backgroundColor: "var(--black)" }} />
              </div>
            </AboutText>
          </div>
        </Main>
      </AboutSection>
      <StatsComponent />
    </div>
  );
};

export default About;
