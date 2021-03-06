import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import useFetch from "../hooks/useFetch";

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

  @media only screen and (max-width: 900px) {
    position: relative;
  }
`;
const ImgContainer = styled.div`
  flex: 0.6;
  height: 100%;

  @media only screen and (max-width: 900px) {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  flex: 1.4;
  padding: 50px 100px 50px 50px;
  color: white;

  @media only screen and (max-width: 900px) {
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
  }
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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const {
    data: highlightedItems,
    error,
    loading,
  } = useFetch("highlightedItems");

  if (loading || !highlightedItems) return <h1>Carregando ...</h1>;
  if (error) console.log("error:", error);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ color: "white" }} />
      </Arrow>
      <Wrapper index={slideIndex}>
        {highlightedItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.imgUrl} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
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
