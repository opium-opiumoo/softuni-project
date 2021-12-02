import Link from "next/link";
import styled from "styled-components";

export const StyledHeroLeftSide = styled(({ ...props }) => <div {...props} />)``;

export const TextWrapper = styled(({ ...props }) => <div {...props} />)`
  margin-bottom: 100px;
`;

export const Heading = styled(({ ...props }) => <h1 {...props} />)`
  font-size: 80px;
  letter-spacing: 2px;
  margin-bottom: 60px;
  margin-top: 80px;
`;

export const Paragraph = styled(({ ...props }) => <p {...props} />)`
  font-size: 34px;
  max-width: 700px;
  margin-bottom: 60px;
`;

export const StyledLink = styled(({ ...props }) => <a {...props} />)`
  font-size: 24px;
  padding: 15px 45px;
  background: #000;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
`;
