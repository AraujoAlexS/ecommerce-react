import React from "react";
import styled from "styled-components";
import Product from "./Product";
import useFetch from "../hooks/useFetch";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const Products = () => {
  const { data: products, error, loading } = useFetch("products");

  if (loading || !products) return <h1>Carregando ...</h1>;
  if (error) console.log("error:", error);
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
