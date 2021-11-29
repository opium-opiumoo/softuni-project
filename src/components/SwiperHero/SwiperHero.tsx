import { StyledSwiperHero, SwiperHeroContainer, SwiperImg, SwiperImgContainer } from "./elements";

export const SwiperHero = () => {
  return (
    <StyledSwiperHero>
      <SwiperHeroContainer>
        <SwiperImgContainer>
          <SwiperImg src="images/MSDPOTH_EC015.jpg" />
        </SwiperImgContainer>
        <SwiperImgContainer>
          <SwiperImg src="images/MSDPOTH_EC015.jpg" />
        </SwiperImgContainer>
      </SwiperHeroContainer>
    </StyledSwiperHero>
  );
};
