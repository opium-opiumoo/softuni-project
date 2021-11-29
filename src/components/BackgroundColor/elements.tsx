import styled, { css, CSSProp } from "styled-components";

const pageBackground = {
  home: css`
    background-image: -webkit-linear-gradient(280deg, #b8c470 0%, #b8c470 50%, #fff 50%, #fff 60%);
    background-image: linear-gradient(280deg, #b8c470 0%, #b8c470 50%, #fff 50%, #fff 60%);
  `,
  account: css`
    background: #f6f8fc;
  `,
};

export const StyledBackgroundColor = styled(({ page = "home", ...props }) => <div {...props} />)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  ${({ page }) => pageBackground[page]};
`;
