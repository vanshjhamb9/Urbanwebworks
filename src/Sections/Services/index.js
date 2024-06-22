import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 5rem;
`;
const CurvedLine = styled.div`
  width: 17rem;
  height: 3rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: 10;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
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
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12rem 12rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.6;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const element = ref.current;
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
        toggleActions: "play none none reverse",
      },
    });
  
    t1.fromTo(
      document.getElementById("line"),
      { height: "15rem" },
      {
        height: "3rem",
        duration: 12,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=180",
          end: "bottom top+=320",
          scrub: true,
        },
      }
    );
  
    t1.fromTo(
      document.getElementById("triangle"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 6,
        scrollTrigger: {
          trigger: document.getElementById("triangle"),
          start: "top top+=200",
          end: "bottom bottom-=200",
          scrub: true,
        },
      },
      "-=12" // Align with the end of the previous animation
    );
  
    // Animation for the background
    t1.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 6,
        scrollTrigger: {
          trigger: element,
          start: "top top+=200",
          end: "bottom bottom-=200",
          scrub: true,
        },
      },
      "-=12" // Align with the end of the previous animation
    );
  
    revealRefs.current.forEach((el, index) => {
      const offset = mq.matches ? 200 : 100;
      const duration = mq.matches ? 10 : 8;
  
      const animation = gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: "power2.inOut",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: `top center+=${offset}`,
            end: "bottom bottom-=80",
            scrub: true,
          },
        }
      );
  
      // To hide the content when scrolling back up
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onLeaveBack: () => animation.reverse(),
      });
    });
  }, []);

  
  
  
  return (
    <ServiceSection id="services">
      <div className="mx-auto">
            <div className="text-white inline-block text-[3rem] font-semibold" >What we Do!</div>
            <CurvedLine />
          </div>
      <Content className="relative" ref={addToRefs}>
        <TextBlock
          topic="Design"
          title={<h1>We build award winning Designs</h1>}
          subText={
            <h5>
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock className="relative xs:absoute xs:top-[3rem] xs:left-[50%] sm:absoute sm:top-[3rem] sm:left-[50%] " svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title={<h1>We Develope high quality Web & App</h1>}
          subText={
            <h5>
              We build appropriate solution to develope your website & app with
              best tools available
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Support"
          title={<h1>We provide support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and maintenance <br /> your
              business
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
