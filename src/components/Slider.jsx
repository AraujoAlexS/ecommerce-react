import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import { highlightedItems } from "../data/highlightedItems";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background: ${colors.primary};
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  width: 50px;
  height: 50px;
  margin: auto;
  background: ${colors.secondary};
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease-in-out;
  transform: translate(${(props) => props.index * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ImgContainer = styled.div`
  flex: 0.6;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1.4;
  padding: 50px 100px 50px 50px;
  color: white;
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const Button = styled.button`
  color: white;
  padding: 10px 30px;
  font-size: 20px;
  background: transparent;
  border: 2px solid ${colors.secondary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: white;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ color: "white" }} />
      </Arrow>
      <Wrapper index={slideIndex}>
        {highlightedItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.imgUrl} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SAIBA MAIS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ color: "white" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
