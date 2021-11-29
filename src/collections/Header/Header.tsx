import { HeaderSearch } from "~/collections";
import { Hamburger } from "~/components";
import { HeaderContainer, LogoContainer, LogoImg, StyledHeader } from "./elements";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <LogoImg src="/images/pokemon-logo.png" alt="logo" />
      </LogoContainer>
      <HeaderContainer>
        <HeaderSearch />
        <Hamburger />
      </HeaderContainer>
    </StyledHeader>
  );
};
