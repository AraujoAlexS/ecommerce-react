import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import useFetch from "../hooks/useFetch";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const Categories = () => {
  const { data: categories, error, loading } = useFetch("categories");

  if (loading || !categories) return <h1>Carregando ...</h1>;
  if (error) console.log("error:", error);

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
