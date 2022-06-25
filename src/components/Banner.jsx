import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: #367beb;
  color: white;
  display: grid;
  place-items: center;
`;

const Banner = () => {
  return <Container>Promoção, camisas com 15% de desconto !</Container>;
};

export default Banner;
