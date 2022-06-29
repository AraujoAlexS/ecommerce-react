import React, { useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
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
const Cor = styled.input`
  appearance: none;
  position: relative;
  border: solid 2px ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${(props) => props.color};
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  &:checked:before {
    opacity: 1;
  }

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

const Size = styled.input`
  appearance: none;
  color: ${colors.secondary};
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border: solid 2px ${colors.secondary};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;

  &:before {
    content: "${(props) => props.size}";
    position: absolute;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
  }

  &:checked:before {
    background: ${colors.secondary};
    color: white;
  }

  &:nth-child(1) {
    margin-left: 10px;
  }

  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
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
  const { data: product, error, loading } = useFetch(`products/${productId}`);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };

  if (loading || !product) return <h1>Carregando ...</h1>;
  if (error) console.log("error:", error);

  const setData = () => {
    const data = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl,
      color,
      size,
    };
    let strData = JSON.stringify(data);
    localStorage.setItem(data.id, strData);
  };

  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Image src={product.imgUrl} />
        <Info>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price}</Price>
          <Colors>
            Cores:
            {product.colors.map((item) => (
              <Cor
                type="radio"
                color={item}
                key={item}
                value={item}
                name="cor"
                onChange={(e) => handleColor(e)}
              />
            ))}
          </Colors>
          <Sizes>
            Tamanhos:
            {product.sizes.map((item) => (
              <Size
                type="radio"
                size={item}
                key={item}
                value={item}
                name="tamanho"
                onChange={handleSize}
              />
            ))}
          </Sizes>
          <Link to="/cart">
            <Button onClick={setData}>Adicionar ao carrinho</Button>
          </Link>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductFocus;
