import styled from "styled-components";

export const StyledSwiperHero = styled(({ ...props }) => <div {...props} />)``;

export const SwiperHeroContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const SwiperImgContainer = styled(({ ...props }) => <div {...props} />)``;

export const SwiperImg = styled(({ ...props }) => <img {...props} />)`
  max-width: 300px;
  padding: 15px;
  border-radius: 40px;

  &:first-child {
    padding-left: 0px;
  }
`;
