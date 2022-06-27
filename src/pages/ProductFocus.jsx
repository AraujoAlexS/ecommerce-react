import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
`;
const Image = styled.img`
  flex: 1;
  min-width: 380px;
  width: 100%;
  height: 60vh;
  margin-bottom: 20px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 200;
  font-size: 30px;
  margin: 40px 0;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Cor = styled.div`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;

  &:nth-child(1) {
    margin-left: 10px;
  }
`;

const Sizes = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Size = styled.div`
  display: grid;
  place-items: center;
  color: ${colors.secondary};
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border: solid 2px ${colors.secondary};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 10px;
  }

  &:hover {
    color: white;
    background: ${colors.secondary};
  }
`;

const Button = styled.div`
  color: ${colors.primary};
  padding: 10px 30px;
  width: 260px;
  font-size: 20px;
  background: white;
  border: 2px solid ${colors.secondary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${colors.secondary};
    color: white;
    border: 2px solid ${colors.secondary};
  }
`;

const ProductFocus = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Image src={products[0].imgUrl} />
        <Info>
          <Title>{products[0].title}</Title>
          <Description>{products[0].description}</Description>
          <Price>{products[0].price}</Price>
          <Colors>
            Cores:
            {products[0].cores.map((item) => (
              <Cor color={item} />
            ))}
          </Colors>
          <Sizes>
            Tamanhos:
            {products[0].tamanhos.map((item) => (
              <Size>{item}</Size>
            ))}
          </Sizes>
          <Button>Adicionar ao carrinho</Button>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductFocus;
