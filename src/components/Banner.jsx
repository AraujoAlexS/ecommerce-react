import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Container = styled.div`
  height: 30px;
  background: ${colors.primary};
  color: white;
  display: grid;
  place-items: center;
`;

const Banner = () => {
  return <Container>Promoção, camisas com 15% de desconto !</Container>;
};

export default Banner;
