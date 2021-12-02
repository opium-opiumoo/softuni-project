import { StyledHamburger } from "./elements";

export const Hamburger = ({ ...props }) => {
  return (
    <StyledHamburger {...props}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
};
