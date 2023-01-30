import React from "react";
import { HeaderContainer } from "./Theme";
import { NavItems , Logo , PrimaryButton } from "sharedComponents";


export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavItems/>
      <PrimaryButton/>
    </HeaderContainer>
  );
};

export default Header;
