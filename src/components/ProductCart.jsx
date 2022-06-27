import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.h2``;
const Qtd = styled.div``;
const Color = styled.div``;
const Size = styled.div``;
const TotalPrice = styled.div``;

const ProductCart = ({ item }) => {
  return (
    <Container>
      <Image />
      <Info>
        <Title></Title>
        <Qtd></Qtd>
        <Color />
        <Size />
      </Info>
      <TotalPrice></TotalPrice>
    </Container>
  );
};

export default ProductCart;
