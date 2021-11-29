import styled from "styled-components";

export const StyledHeaderSearch = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  padding: 20px;
  background: #fff;
  border-radius: 50px;
  position: relative;
  z-index: 2;

  input {
    border: 0px;
    padding: 0px;
    background: transparent;

    &:focus-visible {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  div {
    position: absolute;
    right: 20px;
    top: 52%;
    transform: translate(0, -50%);
  }
`;
