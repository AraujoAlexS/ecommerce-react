import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
`;
const Image = styled.img`
  flex: 1;
  min-width: 280px;
  width: 100%;
  height: 60vh;
  margin-bottom: 20px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media only screen and (max-width: 470px) {
    padding: 0;
  }
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

  @media only screen and (max-width: 470px) {
    width: 25px;
    height: 25px;
    font-size: 12px;
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
  const { productId } = useParams();

  const { data: products, error, loading } = useFetch(`products/${productId}`);

  if (loading || !products) return <h1>Carregando ...</h1>;
  if (error) console.log("error:", error);

  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Image src={products.imgUrl} />
        <Info>
          <Title>{products.title}</Title>
          <Description>{products.description}</Description>
          <Price>{products.price}</Price>
          <Colors>
            Cores:
            {products.colors.map((item) => (
              <Cor color={item} key="item" />
            ))}
          </Colors>
          <Sizes>
            Tamanhos:
            {products.sizes.map((item) => (
              <Size key="item">{item}</Size>
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
