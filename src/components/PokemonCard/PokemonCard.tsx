import {
  PokeCardId,
  PokeCardImg,
  PokeCardName,
  PokeCardTextWrap,
  PokeCardType,
  PokeCardTypeWrap,
  Wrapper,
} from "./elements";

export const PokeCard = ({ PokeImgSrc, PokeId, PokeName, PokeType }) => {
  return (
    <Wrapper>
      <PokeCardImg src={PokeImgSrc} />
      <PokeCardTextWrap>
        <PokeCardId>{PokeId}</PokeCardId>
        <PokeCardName>{PokeName}</PokeCardName>
        <PokeCardTypeWrap>
          <PokeCardType>{PokeType}</PokeCardType>
        </PokeCardTypeWrap>
      </PokeCardTextWrap>
    </Wrapper>
  );
};
