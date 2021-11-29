import { SwiperHero } from "components/SwiperHero";
import { Heading, Paragraph, StyledHeroLeftSide, StyledLink, TextWrapper } from "./elements";

export const HeroLeftSide = () => {
  return (
    <StyledHeroLeftSide>
      <TextWrapper>
        <Heading>Gotta Catch 'Em All!</Heading>
        <Paragraph>
          Log in everyday for a mistery pokemon! Grow your collection and become a true Poke-Legend!
        </Paragraph>
        <StyledLink href="/account">Start My Journey</StyledLink>
      </TextWrapper>
      <SwiperHero />
    </StyledHeroLeftSide>
  );
};
