import React from "react";
import ButtonBackground from "sharedComponents/assets/button-background.svg";
import { ButtonContainer } from "./Theme";

const PrimaryButton = () => {
  return (
    <ButtonContainer>
      <img src={ButtonBackground} alt="logo" />
      <span>About Us</span>
    </ButtonContainer>
  );
};

export default PrimaryButton;
