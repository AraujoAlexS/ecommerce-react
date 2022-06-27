import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  tex-align: center;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Title>Seu carrinho</Title>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
