import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Flip = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 380px;
  height: 60vh;
  position: relative;
  perspective: 2500px;

  &:hover ${Flip} {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const Back = styled.div`
  padding: 50px;
  color: white;
  background: ${colors.primary};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  transform: rotateY(180deg);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: ${colors.primary};
  margin-bottom: 30px;
  font-weight: 600;
`;
const Button = styled.button`
  color: white;
  margin-top: 30px;
  padding: 10px 30px;
  font-size: 20px;
  color: ${colors.primary};
  background: #fff;
  border: 2px solid ${colors.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: white;
    color: #fff;
    background: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
`;

const Description = styled.span``;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Flip>
        <Front>
          <Image src={item.imgUrl} />
          <Info>
            <Title>{item.title}</Title>

            <Button>Saiba mais +</Button>
          </Info>
        </Front>
        <Back>
          <Description>{item.description}</Description>
        </Back>
      </Flip>
    </Container>
  );
};

export default CategoryItem;
