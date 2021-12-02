import { HeroLeftSide } from "collections/HeroLeftSide";
import { HeroRightSide } from "collections/HeroRightSide";

import { StyledHero } from "./elements";

export const Hero = () => {
  return (
    <StyledHero>
      <HeroLeftSide />
      <HeroRightSide />
    </StyledHero>
  );
};
