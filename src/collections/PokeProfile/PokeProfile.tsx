import { AllPokeWrapper } from "collections/AccountDetails/elements";
import { InfoContainer } from "components/InfoContainer";
import {
  PokeProfileContainer,
  PokeProfileContent,
  PokeProfileId,
  PokeProfileImg,
  PokeProfileImgWrap,
  PokeProfileName,
  PokeProfileType,
  PokeProfileTypeIconWrap,
  PokeProfileTypeWrap,
  PokeProfileWrap,
  ThreeBoxContainer,
} from "./elements";

export const PokeProfile = ({ imageSrc, id, name, typeIcon, type }) => {
  return (
    <PokeProfileWrap>
      <PokeProfileContainer>
        <PokeProfileImgWrap>
          <PokeProfileImg src={imageSrc} />
        </PokeProfileImgWrap>
        <PokeProfileContent>
          <PokeProfileId>{id}</PokeProfileId>
          <PokeProfileName>{name}</PokeProfileName>
          <PokeProfileTypeWrap>
            <PokeProfileTypeIconWrap>{typeIcon}</PokeProfileTypeIconWrap>
            <PokeProfileType>{type}</PokeProfileType>
          </PokeProfileTypeWrap>
        </PokeProfileContent>
      </PokeProfileContainer>
      <AllPokeWrapper>
        <ThreeBoxContainer>
          {/* <InfoContainer title="" description=""  /> */}
          {/* Add InfoContainer with a map function */}
        </ThreeBoxContainer>
      </AllPokeWrapper>
    </PokeProfileWrap>
  );
};
