import React from "react";
import styled from "styled-components";
import colors from "../colors";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
`;
const Wrapper = styled.div`
  min-width: 360px;
  width: 30%;
  padding: 20px;
  background: white;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-transform: uppercase;
  text-weight: 200;
  letter-spacing: 3px;
  font-size: 30px;
  color: ${colors.primary};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 220px;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  color: ${colors.primary};
  padding: 10px 30px;
  margin: 40px 0px 20px 0;
  width: 220px;
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

const Footer = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: ${colors.primary};
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Faça o login</Title>
        <Form>
          <Input placeholder="exemplo@gmail.com" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button>Entrar</Button>
        </Form>
        <Footer>Não possui uma conta? Cadastre-se aqui!</Footer>
      </Wrapper>
    </Container>
  );
};

export default Login;
