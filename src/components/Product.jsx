import React from "react";
import styled from "styled-components";
import colors from "../colors";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
  opacity: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 5px;
  min-width: 380px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${colors.secondary};

  &:hover ${Info} {
    opacity: 1;
    z-index: 3;
  }
`;

const Image = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Product = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Image src={item.imgUrl} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
