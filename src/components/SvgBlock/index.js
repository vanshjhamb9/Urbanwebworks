import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  ${'' /* @media only Screen and (max-width: 48em) {
    display: none;
  } */}
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`);
  //console.log(SvgIcon);
  return (
    <Rb className="xs:absoute xs:-top-[16.5rem] xs:left-[32%] sm:absoute sm:-top-[16.5rem] sm:left-[32%] md:reltive md:-top-0 md:left-[0%] lg:reltive md:-top-0 md:left-[0%] " id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;
