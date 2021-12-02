import styled from "styled-components";

export const StyledHeader = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(({ ...props }) => <div {...props} />)`
  z-index: 2;
`;

export const LogoImg = styled(({ ...props }) => <img {...props} />)`
  max-width: 180px;
`;
