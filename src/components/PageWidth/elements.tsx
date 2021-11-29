import styled from "styled-components";

export const StyledPageWidth = styled(({ ...props }) => <div {...props} />)`
  max-width: 160rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media screen and (min-width: 750px) {
    padding: 0 5rem;
  }
`;
