import styled from "styled-components";

export const StyledHero = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
