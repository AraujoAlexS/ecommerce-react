import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCart from "../components/ProductCart";
import { Link } from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: 100;
  color: ${colors.primary};
  margin: 20px 0;
`;

const Buttons = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  color: ${colors.primary};
  margin: 10px;
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

  &:nth-child(2) {
    background: ${colors.secondary};
    color: white;
    border: 2px solid ${colors.secondary};

    &: hover {
      background: ${colors.primary};
      color: white;
      border: 2px solid ${colors.primary};
    }
  }
`;

const Cart = () => {
  const getItems = () => {
    const allItems = [];

    for (var i = 0; i < localStorage.length; ++i) {
      if (/\d+/.test(localStorage.getItem(localStorage.key(i)))) {
        allItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }

    return allItems;
  };

  const cart = getItems();
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Title>Seu carrinho</Title>
        {cart.map((item) => (
          <ProductCart item={item} key={item.id} />
        ))}
        <Buttons>
          <Link to="/">
            <Button>Voltar a loja</Button>
          </Link>
          <Button>Finalizar compra</Button>
        </Buttons>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
