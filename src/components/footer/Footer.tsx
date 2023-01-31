import React from "react";
import { Button, InputController } from "sharedComponents";
import {
  FooterContainer,
  ButtonInputContainer,
  Section,
  VerticalNav,
} from "./Theme";
const buttonStyle = {
  hoverBackgroundColor: `gray`,
  backgroundColor: "#FF6057",
  color: "white",
  fontWeight: "600",
  borderRadius: `20px`,
};
const InputStyle = {
  borderRadius: `20px`,
};
export const Footer = () => {
  return (
    <FooterContainer>
      <Section className="main-sections">
        <Section>
          <h1>Study</h1>
        </Section>
        <VerticalNav>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            officia doloremque molestiae expedita, tempora neque iure ullam ipsa
            fuga molestias aut laboriosam labore esse provident eum sint rem ut
            pariatur.
          </p>
        </VerticalNav>
      </Section>
      <Section className="main-sections">
        <Section>
          <h2>Nos Services</h2>
        </Section>
        <VerticalNav>
          <a>Avis Clients</a>
          <a>Mentions</a>
          <a>Plans</a>
          <a>Blog</a>
          <a>Natre</a>
          <a>About Us</a>
        </VerticalNav>
      </Section>
      <Section className="main-sections">
        <Section>
          <h2>Sign up for Special Offers!</h2>
        </Section>
        <Section>
          <ButtonInputContainer>
            <InputController
              defaultValue={"Mail"}
              style={InputStyle}
              type="text"
              name="mail"
            />
            <Button text="Subscribe" buttonStyle={buttonStyle}></Button>
          </ButtonInputContainer>
        </Section>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
