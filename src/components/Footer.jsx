import React from "react";
import styled from "styled-components";
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import colors from "../colors";
const Container = styled.div`
  display: flex;
`;
const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px opx;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 20px 20px 0 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background: ${colors.primary};
  display: grid;
  place-items: center;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Logo>Ecommerce</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          erat nec nunc luctus ornare nec eu felis. Mauris sit amet vulputate
          quam.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Section>
      <Section>
        <Title>Links úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Registre-se</ListItem>
        </List>
      </Section>
      <Section>
        <Title>Contato</Title>
        <SocialContainer>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon>
            <Email />
          </SocialIcon>
          <SocialIcon>
            <Phone />
          </SocialIcon>
        </SocialContainer>
      </Section>
    </Container>
  );
};

export default Footer;
