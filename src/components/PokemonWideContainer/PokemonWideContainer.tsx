import {
  PokeId,
  PokeImg,
  PokeImgWrapper,
  PokemonWideTextWrapper,
  PokeName,
  PokeTypeContainer,
  PokeTypeText,
  StyledPokemonWideContainer,
} from "./elements";

export const PokemonWideContainer = ({ pokeId, pokeName, pokeIcon, pokeTypeText, pokeImgSrc }) => {
  return (
    <StyledPokemonWideContainer>
      <PokemonWideTextWrapper>
        <PokeId>{pokeId}</PokeId>
        <PokeName>{pokeName}</PokeName>
        <PokeTypeContainer>
          <PokeTypeText>{pokeTypeText}</PokeTypeText>
        </PokeTypeContainer>
      </PokemonWideTextWrapper>
      <PokeImgWrapper>
        <PokeImg src={pokeImgSrc} />
      </PokeImgWrapper>
    </StyledPokemonWideContainer>
  );
};
