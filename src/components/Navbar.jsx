import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import colors from "../colors";

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

const Language = styled.span`
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${colors.gray};
  }
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
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
  return (
    <Container>
      <Wrapper>
        <Section>
          <Language>PT-br</Language>
          <SearchContainer>
            <Input />
            <Search style={{ fontSize: 18, color: "#777" }} />
          </SearchContainer>
        </Section>
        <Section>
          <Logo>Ecommerce.</Logo>
        </Section>
        <Section>
          <MenuItem>Registre-se</MenuItem>
          <MenuItem>Entrar</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
