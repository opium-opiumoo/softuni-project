import styled from "styled-components";

export const StyledPokemonWideContainer = styled(({ ...props }) => <div {...props} />)`
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;

  &:first-child {
    margin: 0px;
  }
`;

export const PokemonWideTextWrapper = styled(({ ...props }) => <div {...props} />)``;

export const PokeId = styled(({ ...props }) => <p {...props} />)`
  font-size: 35px;
`;

export const PokeName = styled(({ ...props }) => <h3 {...props} />)`
  font-size: 50px;
  margin: 10px 0px;
`;

export const PokeTypeContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  padding: 10px 20px;
  border-radius: 5px;
  background: #fd7d24;
  max-width: fit-content;
  align-items: center;
`;

export const PokeTypeText = styled(({ ...props }) => <p {...props} />)`
  margin-left: 15px;
`;

export const PokeImgWrapper = styled(({ ...props }) => <div {...props} />)`
  margin-top: -40px;
  padding-bottom: 40px;
`;

export const PokeImg = styled(({ ...props }) => <img {...props} />)`
  max-width: 130px;
`;
