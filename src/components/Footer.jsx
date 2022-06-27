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
  WhatsApp,
} from "@material-ui/icons";
import colors from "../colors";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${colors.primary};
  color: white;
`;
const Section = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 20px;
`;

const Description = styled.p`
  margin: 20px opx;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  margin: 20px 20px 0 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: ${colors.primary};
  display: grid;
  place-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
  text-transform: uppercase;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  padding: 4px 0;
`;
const Info = styled.div`
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Title>Ecommerce</Title>
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
        <ContactInfo>
          <Phone />
          <Info> +55 (85) 98724-4915</Info>
        </ContactInfo>
        <ContactInfo>
          <WhatsApp />
          <Info> +55 (85) 98770-4202</Info>
        </ContactInfo>
        <ContactInfo>
          <Email />
          <Info> araujo.alexsantos@gmail.com</Info>
        </ContactInfo>
        <SocialContainer>
          <SocialIcon href="https://github.com/AraujoAlexS" target="_blank">
            <GitHub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/alex-santos-8b764420b/"
            target="_blank"
          >
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Section>
    </Container>
  );
};

export default Footer;
