import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  border-bottom: solid 1px ${colors.primary};
  margin: 20px 0;

  @media only screen and (max-width: 630px) {
    height: auto;
    flex-direction: column;
  }
`;
const Image = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h2`
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 15px;
`;
const Text = styled.div`
  color: ${colors.primary};
  font-size: 200;
  margin-bottom: 15px;
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-bottom: 15px;
`;
const TotalPrice = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 100;

  @media only screen and (max-width: 630px) {
    justify-content: flex-start;
    padding: 20px;
  }
`;

const ProductCart = ({ item }) => {
  const realToFloat = (str) => {
    return parseFloat(
      str.replace(/^\D*/, "").replace(/\./g, "").replace(/,/g, ".")
    );
  };

  return (
    <Container>
      <Image src={item.imgUrl} />
      <Info>
        <Title>{item.title}</Title>
        <Text>
          Quantidade: <strong> {item.qtd ? item.qtd : 1} </strong>
        </Text>
        <Color color={item.color} />
        <Text>
          Tamanho: <strong> {item.size} </strong>
        </Text>
      </Info>
      <TotalPrice>
        R$ {realToFloat(item.price) * (item.qtd ? item.qtd : 1)}
      </TotalPrice>
    </Container>
  );
};

export default ProductCart;
