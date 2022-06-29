import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";
import createUser from "../api/createUser";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
`;
const Wrapper = styled.div`
  min-width: 360px;
  width: 40%;
  padding: 20px;
  background: white;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-weight: 200;
  letter-spacing: 3px;
  font-size: 30px;
  color: ${colors.primary};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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
  margin: 20px 0px 20px 0;
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

const ErrorMessage = styled.span`
  margin-top: 20px;
  color: red;
`;

const SignUp = () => {
  let navigate = useNavigate();

  const [error, setError] = useState("");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Senhas diferentes");
      return;
    }

    const res = await createUser(name, email, password);

    if (res.status) {
      localStorage.setItem("token", res.message);
      navigate("/");
    } else {
      setError("*" + res.message);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Crie sua conta</Title>
        <Form>
          <Input required placeholder="Nome completo" onChange={handleName} />
          <Input
            required
            placeholder="exemplo@gmail.com"
            type="email"
            onChange={handleEmail}
          />
          <Input
            required
            placeholder="Senha"
            type="password"
            onChange={handlePassword}
          />
          <Input
            required
            placeholder="Confirmar senha"
            type="password"
            onChange={handleConfirmPassword}
          />
          <ErrorMessage>{error}</ErrorMessage>
          <Button onClick={handleSubmit}>Cadastre-se</Button>
        </Form>
        <Footer>
          Já possui uma conta? <Link to="/login"> Faça o login aqui! </Link>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
