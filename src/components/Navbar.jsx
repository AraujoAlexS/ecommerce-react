import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  &:nth-child(1) {
    @media only screen and (max-width: 690px) {
      display: none;
    }
  }

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: flex-end;
  }
`;

const Logo = styled.h1`
  color: ${colors.darkGray};
  font-weight: 600;
  text-transform: uppercase;

  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`;

const MenuItem = styled.div`
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    color: black;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const Navbar = () => {
  let navigate = useNavigate();

  const aux = localStorage.length;
  const [cartQtd, setCartQtd] = useState(aux);
  const user = localStorage.getItem("token");

  useEffect(() => {
    setCartQtd(localStorage.length - 1);
  }, [aux]);

  const leaveSession = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Section>
          <MenuItem>Bem vindo {user}</MenuItem>
        </Section>
        <Section>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>Ecommerce.</Logo>
          </Link>
        </Section>
        <Section>
          <MenuItem onClick={leaveSession}>Sair</MenuItem>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={cartQtd} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
